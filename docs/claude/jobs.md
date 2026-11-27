# 작업 대기열 · 기본 작업 (`JOBS J0xx`: catalog · capture · text · fill)

> 이 문서는 `CLAUDE.md`에서 나눈 것이다. `CLAUDE.md`의 범위 · 공통 규칙(팀 · 중복 처리 금지 · 사용량 · UTF-8 전송 · 주의)을 함께 따른다. 다른 종류의 일이 이어지면 `CLAUDE.md` 「작업별 문서」 표의 그 문서를 읽는다.

종류(`kind`)별 문서: `guide` · `guide-edit` · `guide-check` → `ux-docs.md` / `prototype` · `prototype-edit` · `prototype-sync` → `prototype.md` / `minutes` · `plan` → `plan.md` / 그 밖(catalog · capture · text · fill)은 이 문서.

Workbench의 「캡처 받기」 · 「Claude에게 목록 만들기 요청」, UX 문서 각 탭의 「새 {카테고리} 만들기」, 가이드 보기 화면의 「수정 요청」 · 「고칠 화면 찾기 요청」, 프로토타입의 「만들기 요청」 · 「수정 요청」 · 「지금 반영」이 쌓인다. `GET /api/jobs`로 읽고, 작업마다 처리한 뒤 `POST /api/jobs {action:'update', id, status:'완료'|'실패', note}`.

- **사람이 멈춘 작업(「취소」, 2026-11-24)**: UX 문서의 수정 요청 · 연관 항목(고칠 화면) 찾기는 사람이 대기 · 진행 중일 때 [멈추기]로 멈출 수 있다(`POST /api/jobs {action:'stop'}` → 상태 「취소」 · `stopped`, 처리 중이면 감시가 세션을 끊음). 「취소」인 작업은 처리하지 않는다 — 처리 중에 「취소」가 되면 바로 멈춘다(그 작업을 `update`하면 서버가 「사람이 멈춘 작업」 오류를 돌려준다).
- **사용량**: 서버가 자동으로 남긴다(`CLAUDE.md` 「사용량」). 부르지 않는다.

- **catalog (프레임 목록 만들기)**: 내 Figma 앱이 아니라 Figma 클라우드(`use_figma`)에서 만든다.
  1. `use_figma`로 그 파일의 페이지 목록(id · 이름)을 받는다. 이름이 구분선(`----` 등)인 페이지는 뺀다.
  2. 페이지마다 **병렬로** `use_figma`를 불러, 그 페이지의 최상위 프레임(페이지 · 섹션 바로 아래 FRAME · COMPONENT · COMPONENT_SET · INSTANCE)을 `[id, 이름, w, h, x, y]`로 받는다. 섹션 안 프레임은 뒤에 `섹션 이름, 섹션 id`를 더한다(`[id, 이름, w, h, x, y, 섹션 이름, 섹션 id]`, 섹션 안 섹션은 이름을 「바깥 › 안」으로 · id는 가장 안쪽). Workbench 목록이 페이지 › 섹션 › 프레임으로 묶인다. ver · Description · Case-label · section title · SB_Section Divider · 진행상태-* · Frame NNN · Group NNN은 뺀다. 레이어 안쪽은 훑지 않는다.
  3. 작업의 `link`(없으면 project.json의 link)의 node-id가 있는 페이지를 `editablePageId`로 한다.
  4. `{fileKey, fileName, editablePageId, by:'Claude', pages:[{id, name, editable, frames}]}`를 UTF-8 파일로 만들어 `POST /api/catalog`.
- **capture (캡처 받기)**: `get_screenshot`(fileKey, nodeId, `maxDimension`은 **원본 크기**가 되게 프레임의 긴 변(max(w, h)), 단 8000을 넘으면 8000)으로 받은 PNG를(응답의 URL을 curl로 받는다) base64로 `{fileKey, nodeId, name, w, h(원본 크기), by:'Claude', png}` 파일에 담아 `POST /api/shots`. 서버가 `projects/{fileKey}/shots`와 `shots_meta.json`을 갱신한다.
- **text (글 수정, 플러그인 몫)**: Claude가 `use_figma`에서 못 불러오는 폰트의 글을 바꿀 때만 만든다. 감시(`JOBS`)에는 나오지 않는다.
  - Pretendard는 먼저 `use_figma`에서 `await figma.loadFontAsync({family:'Pretendard', style})`로 불러와 본다(굵기 이름은 `SemiBold` · `ExtraBold`처럼 붙여 쓴다). 되면 이 작업 없이 기존 글 · 새 글 모두 Pretendard로 직접 고친다. Claude의 Figma 연결 계정마다 다르니 할 때마다 불러오기부터 해 본다. 안 될 때만 아래대로 하고, 새 글은 **Inter** 또는 **Noto Sans KR**로 만든다.
  1. `use_figma`로 바꿀 TEXT 레이어 id와 지금 글을 읽는다. 수정 가능 페이지의 레이어만 된다(플러그인이 다른 페이지는 거부한다).
  2. `POST /api/jobs {action:'add', kind:'text', fileKey, nodeId:{프레임 id}, name:{프레임 이름}, text:{무엇을 바꾸는지 한 줄}, by:'Claude', items:[{nodeId:{TEXT id}, find:{바꿀 부분}, replace:{새 글}}]}` (UTF-8 파일로). `find`가 있으면 그 부분만 바꿔 앞뒤 스타일을 지키고, 비우면 글 전체를 `replace`로 바꾼다.
     - **폰트 바꾸기**: 항목을 `{nodeId:{TEXT · 프레임 · 섹션 id}, fontFamily:'Pretendard'}`로 주면 그 아래 글(인스턴스 안은 원본을 따르므로 제외)의 글꼴을 바꾸고 굵기 이름을 맞춘다(Semi Bold → SemiBold). (Pretendard를 못 불러오는 계정에서) 새로 만든 글은 Inter로 만든 뒤 이렇게 Pretendard로 바꾼다. 화면을 그리며 채우기(fill) 작업을 함께 보내는 중이거나 인스턴스 안 글도 바꿔야 하면(일부 컴포넌트만 빼고) 아래 「fill」의 `refont`를 쓴다.
  3. 작업이 끝날 때까지 기다린다(Monitor로 `GET /api/jobs?kind=text`의 그 id가 「완료」 · 「실패」가 될 때까지, 최대 2분). 플러그인이 3초마다 가져가 「진행 중」 → 「완료」(일부 실패면 「실패」)로 바꾸고, `items`에 항목별 `result`(`ok` · `already` 이미 바뀜 · `fail` + `error`)와 쓴 폰트를 남긴다.
  4. 「완료」면 `use_figma`로 글이 바뀌었는지 확인한다. 실패한 항목, 또는 플러그인이 2분 안에 가져가지 않아 계속 「대기」면 작업을 「실패」로 바꾸고, 같은 자리 · 크기 · 색의 **Noto Sans KR**(한글 없으면 Inter) 글로 바꿔 넣은 뒤 note에 「플러그인이 꺼져 있어 Noto Sans KR로 바꿈」이라고 적는다.
- **fill (컴포넌트 채우기, 플러그인 몫, 2026-11-24)**: 정해진 컴포넌트에 내용을 넣는 일(예: 설명 패널 행 · 확인 목록 · 라벨)을 Claude가 `use_figma` 코드로 짜지 않고 플러그인에 맡긴다. 감시(`JOBS`)에는 나오지 않는다. **무엇을 어떤 컴포넌트로 어디에 둘지는 그 팀 작업규칙이 정한 그대로**이고, 이 작업은 그 결과를 데이터로 넘기는 방법일 뿐이다.
  1. **플러그인이 그 파일에 켜져 있는지**: `GET /api/jobs?kind=fill`의 `plugins[{fileKey}]`(그 파일 플러그인이 마지막으로 물은 지 몇 초)가 **180 이하**일 때만 쓴다(Figma 창이 뒤에 있으면 플러그인이 1분에 한 번쯤만 묻는다 — 2026-11-24 시험에서 가져가기까지 약 1분). 없거나 크면 쌓지 않고 `use_figma`로 직접 그린다(`pluginSeenSec`는 어느 파일이든 갱신되니 쓰지 않는다).
  2. 컴포넌트 · 변형 속성 · 안쪽 글 노드 이름은 `projects/{fileKey}/components.md`에서 찾는다(없는 것만 Figma에서 알아보고 메모에 더한다 — `requests.md` 「Figma · 도구 토큰 절약」).
  3. `POST /api/jobs {action:'add', kind:'fill', fileKey, nodeId:{대상 프레임 id}, name:{대상 이름}, text:{무엇을 채우는지 한 줄}, by:'Claude', groups:[…]}` (UTF-8 파일로, 400KB까지). `groups`마다:
     - **넣을 곳**: `parent`(프레임 id — 오토 레이아웃이면 끝에(`index`가 있으면 그 자리부터) 붙이고, 아니면 `at:{x, y}`부터 `direction`(`vertical` 기본 · `horizontal`) · `gap`으로 차례로 놓음) 또는 `near`(그 노드와 같은 부모에서 `side`(`right` 기본 · `left` · `top` · `bottom`) 쪽 `offset`(기본 8) 떨어뜨려 놓음, 예: 번호 표시 옆 라벨). 인스턴스 안에는 못 넣는다.
     - `clear:[nodeId]`: 새로 다 만든 뒤 지울 옛 노드(예: 다시 채우는 패널의 예전 행).
     - `rows:[{component, variant, props, texts, fills, width, name}]`: `component` = 컴포넌트 · 컴포넌트 세트 노드 id 또는 라이브러리 키, `variant` = `{속성: 값}`(세트에서 고름), `props` = 컴포넌트 속성(글 · 켜고 끄기 · 바꿔 끼우기, `#` 앞 이름으로 써도 됨), `fills` = `{안쪽 노드 이름(#n) 또는 '.'(자기): '#RRGGBB'}`(예: 번호 칸 배경), `width` = 숫자 또는 `'fill'`(오토 레이아웃 부모에서 꽉 채움).
     - `texts`: `{안쪽 글 노드 이름: 값}` — 같은 이름이 여럿이면 `이름#2`처럼 몇 번째인지. 값은 글, 또는 `{text, ranges:[{start, end, color:'#FF0000', strike:true, style:'Bold'}]}`, 또는 줄 단위 `{lines:[{text, bullet:true|'ORDERED', level:1|2, color, strike, style}]}`(글머리 목록 · 단계 · 줄 전체 색 · 취소선 · 굵기, `ranges`와 함께 써도 됨). `highlight:[{pattern:'정규식', color, style}]`을 더하면 맞는 곳마다 꾸민다(예: 화면 · 알럿 코드 파랑 — 어떤 것을 어떻게 꾸밀지는 팀 작업규칙대로). `style`은 같은 글꼴의 스타일 이름(`Bold` 등). 글꼴은 컴포넌트 그대로(이 PC 폰트라 Pretendard도 됨).
     - **틀 복제 · 고치기**(예: 사용자 확인 목록 템플릿): 그룹에 `clone:{node:{틀 id}, name, at:{x, y}}`를 주면 `parent` 안에 틀을 복제하고, `set:[{path, props, texts, fills, remove:true}]`로 그 안을 고친다(`path` = 틀 기준 이름 경로 `질문 대기 > Block`, 나누는 표시는 ` > `(컴포넌트 이름에 `/`가 있어서), 같은 이름은 `이름#2`). 이번에 복제한 것 안만 고칠 수 있다. **뒤 그룹은 `parent`에 `@{그 그룹 번호(0부터)} > 이름 > 이름`**를 써서 복제한 틀 안에 행을 채운다(예: `"parent":"@1 > 질문 대기 > Block"`). `near`에도 `@n > 경로`를 쓸 수 있다.
     - `fit:[{node, min}]`: 채운 뒤 그 노드(예: 기획 프레임)의 높이를 안에 든 것의 아래 끝까지 맞춘다(`min`보다 작게는 안 함). 패널 행이 늘어 프레임을 키울 때.
     - `refont:{node, family, skipInstances, skipName}`(2026-11-27): 그 노드(예: 기획 프레임 · 케이스 프레임) 안 모든 글의 글꼴을 `family`로 바꾸고 굵기는 같은 이름으로(`SemiBold` → `Semi Bold`). 글자 크기 · 줄 높이는 그대로. 인스턴스 안 글을 빼려면 `skipInstances:true`, 특정 컴포넌트만 빼려면 `skipName`(컴포넌트 · 세트 이름 정규식). 어떤 글꼴로 · 무엇을 뺄지는 팀 작업규칙대로(예: CURECA 「모든 글은 Inter, SB-Components 안은 덮어쓰지 않음」). 결과 `groups[].refont.changed`, 못 바꾼 글은 `problems`의 `글꼴`. 그룹에는 `parent`(그 프레임 id)를 함께 준다.
     - **서버가 모양을 먼저 본다**(2026-11-27): 배열 자리(`rows` · `set` · `clear` · `fit`, 한 개여도 `[ ]` — PowerShell `ConvertTo-Json`이 한 개짜리를 풀어 버린다) · 앞 그룹 참조(`@n`은 자기 앞 그룹만) · `texts` 값 모양 · `set`은 복제한 틀 안만이 틀리면 쌓을 때 바로 오류를 돌려준다. 이름 경로가 실제로 있는지(`Block#2` 등)는 플러그인이 보므로 `components.md`의 이름 그대로 쓴다.
     - **한 작업에 다 넣는다**: 패널의 제목 행(화면 정보)까지 모든 행, 행 꾸밈(굵게 · 코드 색 · 번호 칸 배경), 사용자 확인 목록(틀 복제 → 행), 라벨(`near`), 프레임 높이(`fit`)를 한 작업의 그룹들로 보낸다. 채운 뒤 `use_figma`로 꾸밈을 다시 고치지 않는다(측정 2026-11-25 R002: 채운 뒤 후처리 · 확인 목록을 코드로 따로 그려 호출이 다시 늘었다). 위 기능으로 안 되는 것만 직접 고치고 note에 적는다.
  4. **기다리지 않고 다음 화면으로 간다**(2026-11-27, R009에서 채우기를 기다리느라 13분): 쌓은 뒤 결과를 바로 기다리지 말고 다음 화면을 그린다. 결과는 다음 채우기 작업을 쌓을 때나 모든 화면을 보낸 뒤 `GET /api/jobs?kind=fill`로 한 번에 보고, 그때도 끝나지 않은 것만 Monitor로 기다린다(쌓은 때부터 **최대 3분**). 그 화면을 `use_figma`로 이어서 고쳐야 하면(채운 결과 위에 그림) 그 작업만 먼저 기다린다. 플러그인이 수정 가능 페이지에서만 만들고, 하나라도 실패하면 이번에 만든 것을 모두 지우고 「실패」 + 이유를 남긴다. note 끝 `(플러그인, n초)`와 `result.sec`이 플러그인이 채운 시간, `takenAt`이 가져간 시각이다 — 가져가기까지 오래 걸리면(Figma 창이 뒤에 있음) 사람에게 Figma 창을 앞에 두라고 note에 적는다.
  5. 「완료」면 작업의 `result`(`made` 만든 수 · `removed` 지운 수 · `groups[].ids` 만든 노드 id · `problems[]` = `{kind:'넘침'|'겹침', row, node}`)를 본다. `problems`가 있는 곳만 `use_figma`로 고친다(스크린샷은 `requests.md` 「Figma · 도구 토큰 절약」의 「스크린샷」 줄 횟수 안에서).
     - **`use_figma`에는 늦게 보인다**: 플러그인은 사람 PC의 Figma에서 고치므로 Claude의 Figma 연결에는 1 ~ 2분 뒤에 보인다(2026-11-24 시험). `groups[].ids`를 찾지 못하거나 옛 노드가 남아 있으면 고친 것이 아니라 아직 안 보이는 것이니, 다시 만들지 말고 1분쯤 뒤 다시 읽는다. 같은 자리를 바로 `use_figma`로 고치면 플러그인이 한 것과 겹칠 수 있으니 `result`가 깨끗하면 읽지 않고 넘어간다.
  6. 「실패」이거나 3분 안에 「대기」 그대로면 그 작업을 「실패」(note: 「플러그인이 받지 않아 직접 그림」)로 바꾸고 `use_figma`로 직접 그린다.
- **자동 캡처(`auto: true`)는 Claude가 받지 않는다**(Figma 플러그인 몫). Workbench에서 Figma 페이지를 고르면 캡처 없는 프레임 전체를 `POST /api/jobs {action:'auto-plan', fileKey, list:[[nodeId, name]…]}`로 서버에 맡기고(`workbench/auto_capture.json`, 파일마다 하나 · 나중 것이 바꿈 · 빈 list면 지움), 서버는 플러그인이 캡처 작업을 물을 때(`GET /api/jobs?kind=capture`, Origin `null`)마다 「대기」 자동 캡처가 10개가 되게 채운다. 그래서 Workbench 탭이 뒤에 있거나 닫혀도 플러그인이 쉬지 않고 이어 받는다(2026-11-11).
- 캡처 작업은 만들어진 지 20초가 지나야 `JOBS`에 나온다. 그 전에 Figma 플러그인이 켜져 있고 그 프레임이 열린 페이지에 있으면 플러그인이 먼저 받는다.
