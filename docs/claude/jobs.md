# 작업 대기열 · 기본 작업 (`JOBS J0xx`: catalog · capture · text)

> 이 문서는 `CLAUDE.md`에서 나눈 것이다. `CLAUDE.md`의 범위 · 공통 규칙(팀 · 중복 처리 금지 · 사용량 · UTF-8 전송 · 주의)을 함께 따른다. 다른 종류의 일이 이어지면 `CLAUDE.md` 「작업별 문서」 표의 그 문서를 읽는다.

종류(`kind`)별 문서: `guide` · `guide-edit` · `guide-check` → `ux-docs.md` / `prototype` · `prototype-edit` · `prototype-sync` → `prototype.md` / `minutes` · `plan` → `plan.md` / 그 밖(catalog · capture · text)은 이 문서.

Workbench의 「캡처 받기」 · 「Claude에게 목록 만들기 요청」, UX 문서 각 탭의 「새 {카테고리} 만들기」, 가이드 보기 화면의 「수정 요청」 · 「고칠 화면 찾기 요청」, 프로토타입의 「만들기 요청」 · 「수정 요청」 · 「지금 반영」이 쌓인다. `GET /api/jobs`로 읽고, 작업마다 처리한 뒤 `POST /api/jobs {action:'update', id, status:'완료'|'실패', note}`.

- **같은 작업 · 요청을 두 번 처리하지 않는다**: 서버는 이미 「진행 중」인 작업(`/api/jobs`) · 요청(`/api/requests`)을 다시 「진행 중」으로 바꾸려 하면 「이미 진행 중」 오류를 돌려준다(백그라운드 감시와 Claude 창이 함께 처리하던 것을 막음, 2026-11-05 J028). 이 오류를 받으면 다른 Claude 세션이 처리 중이니 **그 항목은 건너뛴다**. 내가 처리하다 끊겨 다시 이어야 할 때만 `force:true`를 붙인다.
- **사용량**: 끝낸(완료 · 보류 · 실패) 작업마다 `workbench/usage.ps1 -From {「진행 중」으로 바꾼 시각} -By {작업의 by} -Title "{종류}: {이름} ({작업 ID})"`(맥 `usage.pl`)로 남긴다. 종류 이름은 「사용량 통계」가 나눠 보이는 말로 쓴다: UX 문서 = 카테고리 이름(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서), 연관 항목 = 「연관 항목 찾기」 · 「고칠 화면 찾기」, 「회의록 요약」, 「논의 대상」(plan: ds-new · answer · answer-apply), 「프로토타입」, 「목록 만들기」 · 「캡처」. Workbench 요청(R0xx)은 서버가 완료 때 자동으로 남긴다(케이스 요청은 「케이스 n」으로 나뉜다).

- **catalog (프레임 목록 만들기)**: 내 Figma 앱이 아니라 Figma 클라우드(`use_figma`)에서 만든다.
  1. `use_figma`로 그 파일의 페이지 목록(id · 이름)을 받는다. 이름이 구분선(`----` 등)인 페이지는 뺀다.
  2. 페이지마다 **병렬로** `use_figma`를 불러, 그 페이지의 최상위 프레임(페이지 · 섹션 바로 아래 FRAME · COMPONENT · COMPONENT_SET · INSTANCE)을 `[id, 이름, w, h, x, y]`로 받는다. 섹션 안 프레임은 뒤에 `섹션 이름, 섹션 id`를 더한다(`[id, 이름, w, h, x, y, 섹션 이름, 섹션 id]`, 섹션 안 섹션은 이름을 「바깥 › 안」으로 · id는 가장 안쪽). Workbench 목록이 페이지 › 섹션 › 프레임으로 묶인다. ver · Description · Case-label · section title · SB_Section Divider · 진행상태-* · Frame NNN · Group NNN은 뺀다. 레이어 안쪽은 훑지 않는다.
  3. 작업의 `link`(없으면 project.json의 link)의 node-id가 있는 페이지를 `editablePageId`로 한다.
  4. `{fileKey, fileName, editablePageId, by:'Claude', pages:[{id, name, editable, frames}]}`를 UTF-8 파일로 만들어 `POST /api/catalog`.
- **capture (캡처 받기)**: `get_screenshot`(fileKey, nodeId, `maxDimension`은 **원본 크기**가 되게 프레임의 긴 변(max(w, h)), 단 8000을 넘으면 8000)으로 받은 PNG를(응답의 URL을 curl로 받는다) base64로 `{fileKey, nodeId, name, w, h(원본 크기), by:'Claude', png}` 파일에 담아 `POST /api/shots`. 서버가 `projects/{fileKey}/shots`와 `shots_meta.json`을 갱신한다.
- **text (글 수정, 플러그인 몫)**: Claude가 Pretendard처럼 `use_figma`에서 못 불러오는 폰트의 글을 바꿀 때 만든다. 감시(`JOBS`)에는 나오지 않는다.
  1. `use_figma`로 바꿀 TEXT 레이어 id와 지금 글을 읽는다. 수정 가능 페이지의 레이어만 된다(플러그인이 다른 페이지는 거부한다).
  2. `POST /api/jobs {action:'add', kind:'text', fileKey, nodeId:{프레임 id}, name:{프레임 이름}, text:{무엇을 바꾸는지 한 줄}, by:'Claude', items:[{nodeId:{TEXT id}, find:{바꿀 부분}, replace:{새 글}}]}` (UTF-8 파일로). `find`가 있으면 그 부분만 바꿔 앞뒤 스타일을 지키고, 비우면 글 전체를 `replace`로 바꾼다.
     - **폰트 바꾸기**: 항목을 `{nodeId:{TEXT · 프레임 · 섹션 id}, fontFamily:'Pretendard'}`로 주면 그 아래 글(인스턴스 안은 원본을 따르므로 제외)의 글꼴을 바꾸고 굵기 이름을 맞춘다(Semi Bold → SemiBold). 새로 만든 글은 Inter로 만든 뒤 이렇게 Pretendard로 바꾼다.
  3. 작업이 끝날 때까지 기다린다(Monitor로 `GET /api/jobs?kind=text`의 그 id가 「완료」 · 「실패」가 될 때까지, 최대 2분). 플러그인이 3초마다 가져가 「진행 중」 → 「완료」(일부 실패면 「실패」)로 바꾸고, `items`에 항목별 `result`(`ok` · `already` 이미 바뀜 · `fail` + `error`)와 쓴 폰트를 남긴다.
  4. 「완료」면 `use_figma`로 글이 바뀌었는지 확인한다. 실패한 항목은 `CLAUDE.md` 「범위」의 Noto Sans KR 방식으로 처리한다.
- **자동 캡처(`auto: true`)는 Claude가 받지 않는다**(Figma 플러그인 몫). Workbench에서 Figma 페이지를 고르면 캡처 없는 프레임 전체를 `POST /api/jobs {action:'auto-plan', fileKey, list:[[nodeId, name]…]}`로 서버에 맡기고(`workbench/auto_capture.json`, 파일마다 하나 · 나중 것이 바꿈 · 빈 list면 지움), 서버는 플러그인이 캡처 작업을 물을 때(`GET /api/jobs?kind=capture`, Origin `null`)마다 「대기」 자동 캡처가 10개가 되게 채운다. 그래서 Workbench 탭이 뒤에 있거나 닫혀도 플러그인이 쉬지 않고 이어 받는다(2026-11-11).
- 캡처 작업은 만들어진 지 20초가 지나야 `JOBS`에 나온다. 그 전에 Figma 플러그인이 켜져 있고 그 프레임이 열린 페이지에 있으면 플러그인이 먼저 받는다.
