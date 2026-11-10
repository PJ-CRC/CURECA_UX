# 프로토타입 (`prototype` · `prototype-edit` · `prototype-sync`)

> 이 문서는 `CLAUDE.md`에서 나눈 것이다. `CLAUDE.md`의 범위 · 공통 규칙(팀 · 중복 처리 금지 · 사용량 · UTF-8 전송 · 주의)을 함께 따른다. 다른 종류의 일이 이어지면 `CLAUDE.md` 「작업별 문서」 표의 그 문서를 읽는다.

- **프로토타입 (이 PC에만, `prototypes/{id}/`, 깃으로 공유하지 않음)**: 「프로토타입」 메뉴(`Prototypes.html`)에서 화면을 골라 요청하면 쌓인다. **Figma는 읽기만 한다**(보기 전용 페이지 화면도 된다). 보기는 `Prototype.html?id={id}`.
  - **만드는 규칙(동작형 HTML)**
    - `meta.json`: `{id, name, fileKey, fileName, env(T-IOS|L-IOS), start(시작 nodeId), frames:[{nodeId, name, page}], text(흐름 설명), entry:'index.html', format:'screens', width, height, by, jobId, createdAt, updatedAt, syncedAt}`. `syncedAt`은 Figma와 맞춘 시각. 서버는 이보다 늦게 **Figma에서 고쳐진** 화면(플러그인이 고친 뒤 올린 캡처의 `editAt`)과 **완료한 요청이 실제로 고친** 화면(이력의 `frames`, 없으면 요청 프레임)을 「갱신 필요」로 본다. 캡처를 다시 받은 것(캡처 받기 · 자동 캡처 · Claude 캡처)만으로는 뜨지 않는다.
    - **화면마다 파일 하나**: `screens/{nodeId의 :를 -로}.html`(그 화면 본문 HTML 조각). `index.html`은 껍데기(공통 틀 GNB · LNB, 화면 불러오기, 이동 함수 `go(nodeId)`, 팝업 · 토스트)만. 고칠 때는 그 화면 파일만 읽고 고친다(토큰 절약).
    - **공통 컴포넌트**: `prototypes/_kit/kit.css` · `kit.js`(작업 기준 가이드의 COMM-5 컴포넌트를 클래스로, 예: `.c-btn[data-style=filled][data-size=m]`, 색 · 글꼴은 가이드 · Figma 컴포넌트와 같게). 없으면 처음 만들 때 만들고, 필요한 컴포넌트만 더한다. 화면 파일은 이 클래스를 쓴다.
    - **보기 화면과의 약속**: `index.html#s={nodeId의 :를 -로}`면 그 화면으로 연다(없으면 start). 화면이 바뀔 때마다 `parent.postMessage({type:'proto-screen', nodeId, width, height}, '*')`.
    - 글 · 데이터는 Figma 화면 그대로, 동작은 `text`(흐름 설명)와 화면 디스크립션 · 작업 기준 문서를 따른다. 정의가 없는 동작은 만들지 말고 note에 적는다. 글꼴은 Pretendard(웹 CDN).
    - **작업 기준(UX 문서)을 따른다**(2026-11-10 — 예전에는 프로토타입만 작업 기준 없이 만들었다): Workbench 요청 처리 2번(`requests.md`)과 같이 `GET /api/guides?team={작업 team}`의 `applied[{작업 fileKey}].docs`에서 카테고리마다 적용한 문서 하나씩만 읽는다 — 작업규칙은 모두(작업 방식 · 확인 항목 · 산출물 형식을 이 처리에도 따른다), UX가이드(공통 구성 · 크기 · 컴포넌트 · 표기 → kit와 화면), 정책서 · 기준데이터 · 화면 정의서는 고른 프레임의 CID(프레임 이름, 예: LI-INS-01-P)에 걸린 파일만(권한 · 상태 전이 · 예외 · 상태값 · 표기 · 화면 이동 → 동작). 적용하지 않은 문서는 읽지 않는다. 어긋나면 화면 모양은 Figma, 동작은 화면 정의서 → 정책서 → 기준데이터 → 화면 디스크립션 순으로 따르고 note에 적는다. note 마지막 줄에 `작업 기준: 작업규칙 {제목|없음} · 정책서 … · UX가이드 … · 기준데이터 … · 화면 정의서 …`.
    - **Figma 프레임과 똑같이 보이게(어림 금지)**: 「비슷하게 다시 그리기」가 아니라 고른 프레임 캡처와 겹쳐 봐도 같은 화면이어야 한다(2026-11-10 — 탭 · 카드 · 장비 이미지 · 간격이 캡처와 달랐다).
      - **화면 영역만**: 프레임 안 오른쪽 디스크립션 패널(「Frame 1」 · Description) · 번호 배지(Description Number) · 케이스 띠(초록 바) · 설명 글 · 업데이트 박스는 화면이 아니다. 케이스 프레임(-P에 여러 상태가 그려진 것)은 상태별 그림이니 화면 하나의 상태 · 팝업으로 만든다.
      - **바뀌지 않는 부분은 Figma가 그린 그림으로**(2026-11-10 p20261110-j083에서 씀 — 화면 전체를 HTML로 옮기면 130KB가 넘어 느리고, 어림이 끼어든다): 프레임을 페이지 밖에 임시로 복제해 번호 배지(Description Number) · 디스크립션 패널(x ≥ 1920)을 지우고 화면 크기(예: 1920×1031)로 자른 뒤, 바뀌는 글은 **숨기지 말고 투명(opacity 0)**하게 해서(숨기면 오토레이아웃이 당겨져 옆 요소가 움직인다) `get_screenshot`(contentsOnly, 원본 크기)으로 `img/base-*.png`를 받고 복제본은 지운다. 그 위에 **바뀌는 것만 HTML**(숫자 · 상태 · Door 줄 · 버튼 · 팝업 · 알럿)을 Figma 위치 · 글꼴 · 색 그대로 얹고, 누르는 자리는 투명 버튼(Figma 버튼 크기)으로 둔다.
      - **값은 Figma에서 읽은 그대로**: `use_figma`로 화면 영역의 보이는 레이어를 모두(인스턴스 안까지) 프레임 기준 x · y · w · h, 채움 · 선 · 모서리 · 그림자, 글(글자 그대로) · 글자 크기 · 굵기 · 줄 높이 · 색, 오토레이아웃 간격 · 여백으로 받아 그 px 값으로 만든다(어림한 grid · flex 값으로 바꾸지 않는다). 한글이 많으면 `escape()` · 나눠 받기(`CLAUDE.md` 「주의」).
      - **아이콘 · 이미지는 Figma에서 내보낸다**: 아이콘은 `exportAsync({format:'SVG_STRING'})`로 받아 그대로 넣고, 장비 사진 · 일러스트 등 그림은 PNG로 내보내 `prototypes/{id}/img/`에 둔다. 그라데이션 · 회색 상자 · 이모지 같은 대체물은 쓰지 않는다.
      - **겹쳐 보고 고친다**: 다 만들면 브라우저(미리보기)에서 프레임 크기로 화면 · 상태마다 캡처해 같은 크기의 `get_screenshot` 캡처와 나란히(또는 겹쳐) 비교하고, 위치 · 크기 · 색 · 글 · 아이콘 · 이미지가 다른 곳(±2px 넘게)을 고친다. 다른 곳이 없을 때까지 반복한다. 끝내 못 맞춘 곳은 note에 「Figma와 다른 곳」으로 적는다.
      - **시뮬레이션 조작(통합 상태 바꾸기 · 문 열기 등)은 화면 밖에**: 화면 위에 막대를 얹어 화면 배치가 밀리지 않게, 접을 수 있는 떠 있는 패널로 둔다(화면 영역에 Figma에 없는 요소를 넣지 않는다).
  - **prototype (만들기)**: 작업의 `name` · `fileKey` · `frames` · `start` · `env` · `text`.
    1. 「진행 중」으로. id는 `p{YYYYMMDD}-{작업 ID 소문자}`(예: `p20261030-j013`). **작업 기준 문서를 먼저 읽는다**(위).
    2. 화면마다 `get_screenshot`(원본 크기)과 `use_figma`(위 「값은 Figma에서 읽은 그대로」)로 읽고, 아이콘 · 이미지를 내보낸 뒤 위 규칙대로 `prototypes/{id}/`에 만든다. 화면이 많으면 공통 틀 · kit를 먼저, 화면은 하나씩.
    3. 브라우저(미리보기)로 `Prototype.html?id={id}`를 열어 시작 화면 · 흐름 이동이 되는지 확인하고, 화면 · 상태마다 Figma 캡처와 겹쳐 보고 맞춘다(위 「겹쳐 보고 고친다」).
    4. `meta.json`(syncedAt · updatedAt = 지금, jobId) → `POST /api/jobs {action:'update', id, status:'완료', proto:{id}, note:'화면 N개 · 동작: … · Figma와 다른 곳: …\n작업 기준: …'}`. 사용량은 `usage.ps1 -Title "프로토타입: {name}"`.
  - **prototype-edit (수정 요청)**: 작업의 `proto` · `text` · `frames`(그때 보던 화면). 작업 기준 문서를 읽고(위), 관계있는 화면 파일(필요하면 kit · index)만 고친 뒤 고친 화면을 Figma 캡처와 겹쳐 본다. `updatedAt` 갱신 → 「완료」(note 마지막 줄 작업 기준). Figma는 고치지 않는다(Figma도 바꿔야 하면 note에 Workbench 요청을 안내).
  - **prototype-sync (Figma 맞추기)**: 작업의 `frames`(또는 `GET /api/prototypes`의 그 프로토타입 `stale`) 화면을 Figma에서 다시 읽어(위 「Figma 프레임과 똑같이」 · 작업 기준) 그 화면 파일만 맞추고 겹쳐 본다. `syncedAt` · `updatedAt` = 지금 → 「완료」, note에 맞춘 화면 · 작업 기준. 사용량 `-Title "프로토타입 맞추기: {name}"`.
  - 예전 한 파일 프로토타입(`format:'single'`, 예: `assay-pack`)은 그 파일 안에서 고친다. 크게 고칠 일이 생기면 화면별 파일로 옮겨도 된다.
