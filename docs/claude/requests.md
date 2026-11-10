# Workbench 수정 요청 처리 (`PENDING` · `RESUME`, 요청 R0xx)

> 이 문서는 `CLAUDE.md`에서 나눈 것이다. `CLAUDE.md`의 범위 · 공통 규칙(팀 · 중복 처리 금지 · 사용량 · UTF-8 전송 · 주의)을 함께 따른다. 다른 종류의 일이 이어지면 `CLAUDE.md` 「작업별 문서」 표의 그 문서를 읽는다.

- **일반 질문(프레임 지정 없는 요청)**: Workbench에서 프레임 선택을 풀고 보낸 요청은 `nodeId` · `frame`이 빈 값이고 `page`는 그때의 작업 페이지다. 요청 글을 읽고 셋 중 하나로 처리한다(아래 「요청마다」 순서는 같고, 0번의 페이지 확인도 같다).
  - **새 프레임 만들기**: 작업 페이지의 빈 자리(다른 프레임과 겹치지 않게, 관련 화면 옆이나 아래)에 만든다. 이름은 화면 ID 규칙(`LI-INS-03-T` 등)을 따른다.
  - **화면 수정(하나 · 여러 개 · 페이지 전체)**: 글과 작업 기준으로 고칠 프레임을 찾아 고친다. 고칠 프레임이 10개를 넘거나 어느 화면인지 정하기 어려우면 고치지 말고 「보류」 + `ask`로 대상 목록을 확인받는다.
  - **질문**: Figma를 고치지 않는다. 「진행 중」 → note에 답(줄바꿈으로 나눠 쓰기) → 「완료」. 캡처 · `Common_UX_Changelog.md` · `frames`는 하지 않는다.
  - 고쳤거나 만들었으면 평소처럼 고친 프레임을 모두 캡처하고 「완료」에 `frames`를 **반드시** 보낸다(이것이 요청의 대상 화면이 된다). 새로 만든 프레임은 서버가 Workbench 프레임 목록에 바로 더한다. note 첫 줄에 무엇을 했는지(「새 프레임 2개 만듦」 · 「화면 5개 수정」 · 「질문 답변」)를 쓴다.
  - 겹침 확인(`CONFLICT`)은 하지 않으니, 고치기 전에 그 프레임을 지금 상태로 다시 읽는다.
- **다른 문서로 이어지는 경우**: 요청에 `fixRows`가 있으면(유형 「화면설계서 반영」) `plan.md`의 「화면설계서 작업대기 탭」대로 처리하고 완료 전에 그 줄을 「반영 완료」로 바꾼다. 기존 정책 · 화면 정의와 다르게 고쳐야 하거나 정할 수 없어 「보류」할 때는 `plan.md`의 「회의록 · Workbench에서 생기는 항목」대로 PV · PD를 올린다.
- 백그라운드 감시(에이전트)가 보낸 항목이면 아래 2번의 요청마다 순서(0 ~ 6)만 따른다. 감시 스크립트는 다시 실행하지 않고, 사용 한도 표시도 하지 않는다. 묻지 말고 모호하면 「보류」. 에이전트 자체의 동작은 `dev.md`.
- **대화형 Claude Code 창(직접 작업)**: 지금처럼 Claude 앱 Code 탭이나 터미널에서 열어 쓴다. 이 창에서 「워크벤치 요청 감시」를 부탁받으면 먼저 `workbench/.agent.json`을 본다. **백그라운드 에이전트가 동작 중(150초 안에 썼고 status가 stopped가 아님)이면 감시를 시작하지 말고** 사용자에게 「백그라운드가 감시 중」이라고 알린다(같은 요청을 두 번 처리하지 않게). 꺼져 있을 때만 아래 순서대로 감시한다.

대화형 창에서 감시할 때(백그라운드가 꺼져 있을 때):


1. `workbench/watch_requests.ps1`을 **백그라운드**로 실행한다(윈도우 `powershell -NoProfile -ExecutionPolicy Bypass -File workbench/watch_requests.ps1`, 맥 `perl workbench/watch_requests.pl`). 「대기」 요청이 생기면 `PENDING R0xx,...`(겹치면 `CONFLICT …` 줄이 함께), 겹침이 풀린 요청은 `RESUME R0xx,...`, 처리할 작업이 생기면 `JOBS J0xx,...`를 출력하고 끝난다. 50분 동안 없으면 `TIMEOUT`.
   - **사용 한도 표시**: 감시를 시작할 때와 감시가 끝나 깰 때마다(`PENDING` · `RESUME` · `JOBS` · `TIMEOUT`) `mcp__ccd_session_mgmt__get_usage`로 이 계정의 사용 한도를 읽는다. 결과를 `workbench/.plan_usage.json`에 `{at(지금 시각 ISO), plan, windows:[{label, percentUsed, resetsAt}]}`로 덮어쓴다(Write 도구, UTF-8). 상단 메뉴에 버전 앞에 「Claude 24% · 1시간 33분 후 초기화 · 주간 4%」로 보인다(appnav.js). 이 PC 작업자 본인 것만이고 공유하지 않는다. 도구가 없거나 `plan.status`가 ok가 아니면 건너뛴다. 이것 때문에 따로 깨우지는 않는다.
2. `TIMEOUT`이면 다시 실행한다. `JOBS`면 `CLAUDE.md` 「작업별 문서」 표의 그 종류 문서대로, `PENDING`이면 요청마다 아래 순서로 처리한 뒤 다시 실행한다. **처리 순서는 `PENDING`에 적힌 순서**다(감시가 우선순위 「높음」 먼저, 같은 우선순위는 먼저 등록한 것부터 정렬해 둔다. `RESUME`도 같다).
   0. 대상 파일 = 요청의 `fileKey`(없으면 시작 안내 작업 링크의 파일, 둘 다 없으면 「보류」). **수정 가능 페이지가 아니면 반영하지 않는다.** 요청의 `page`가 그 파일의 지금 수정 가능 페이지(project.json editablePageName)일 때만 반영한다. 아니면 상태를 「보류」로 바꾸고 note에 「○○ 페이지는 보기 전용입니다. 담당자 확인 필요」를 남긴다.
   1. 상태를 「진행 중」으로: `POST http://localhost:8765/api/requests` `{action:'update', id, status:'진행 중', note, by:'Claude'}` — 서버가 「이미 진행 중」으로 거절하면 다른 Claude 세션이 처리 중이니 그 요청은 건너뛴다
   2. Figma(대상 파일 · 수정 가능 페이지)에 반영한다. **작업 기준 문서를 먼저 확인한다 — UX 문서의 카테고리(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서)마다 「적용」한 문서 하나씩만 읽는다**:
      - `GET /api/guides?team={요청의 team}`의 `applied[fileKey]`(**이 PC 작업자가 고른 그 팀의 작업 기준** — 이 PC의 모든 프로젝트(Figma 파일)에 같이 적용된다: [적용]하면 서버가 등록된 모든 파일 · 시작 안내 3단계 파일에 넣고, 아직 없는 파일(새 프로젝트 등)은 3단계 파일(없으면 가장 최근 적용)의 문서로 채워 돌려준다(`filled:true`), `workbench/guide_apply.json` · 다른 팀은 `guide_apply.{team}.json`, 공유하지 않음 — `CLAUDE.md` 「팀」). `docs: {종류: {id}}`가 카테고리별 적용 문서다(`rule` 작업규칙 · `policy` 정책서 · `guide` UX가이드 · `data` 기준데이터 · `spec` 화면 정의서, 앞으로 늘어도 같다). `docs`가 없는 예전 형식이면 `guideId`가 UX가이드다. id가 빈 값이면 그 카테고리는 작업 기준 없음.
      - 적용한 문서마다 **지금 내용**(`items[].mdPath`, 고친 적이 있으면 가장 최근 수정본 `rev/…md`)을 읽는다. **파일형 문서**(`format:'files'`, 예: CURECA 작업규칙)는 `mdPath`가 비어 있고 `items[].fileList[].mdPath`(파일마다 지금 내용)를 읽는다 — 작업규칙(`rules`)은 모두, 정책서(`policy`)는 `README.md`와 요청 화면 CID를 머리말 `cids`에 둔 정책 파일 · 그 정책이 `data`로 가리키는 기준 자료만, 기준데이터(`glossary`)는 `glossary.md`와 요청에 걸린 표만, 화면 정의서(`screens`)는 요청 화면의 CID 파일(`{메뉴}/{CID}.md`)과 짝 CID 파일만 읽는다(파일이 많아 다 읽지 않는다). **적용하지 않은 문서는 같은 카테고리에 여러 개 있어도 읽지 않고 따르지 않는다.**
      - 역할: 작업규칙 = 작업 방식(순서 · 확인 항목 · 산출물 형식, 이 처리 절차에도 따른다) · 정책서 = 업무 규칙(권한 · 상태 전이 · 예외 처리) · UX가이드 = 구성 · 크기 · 컴포넌트 · 표기 · 기준데이터 = 코드 · 상태값 · 단위 · 표기 값 · 화면 정의서 = 그 화면의 용어 · 값 · 상태 · 동작 · 화면 이동. 어긋나면 화면 내용은 화면 정의서 → 정책서 → 기준데이터 순, 공통 구성 · 컴포넌트 · 표기는 UX가이드를 따르고 note에 어긋난 점을 적는다. 문서와 요청이 어긋나면 요청을 따르되 note에 그렇게 적는다.
      - note 마지막 줄에 `작업 기준: 작업규칙 {제목|없음} · 정책서 {제목|없음} · UX가이드 {제목|없음} · 기준데이터 {제목|없음} · 화면 정의서 {제목|없음}`을 적는다(기본 문서는 없다. 하나도 없으면 요청 내용과 그 파일의 기존 화면을 따른다).
      - 프로토타입은 여기서 고치지 않고, 완료 뒤 6번으로 맞춘다.
   3. 반영한 프레임의 캡처를 갱신한다(아래 「캡처」). **실제로 고친 프레임 모두**(요청 프레임과 다를 수 있다 — 다른 화면 · 새로 만든 프레임 · 케이스)를 캡처한다(요청 프레임을 고치지 않았으면 그것은 찍지 않는다).
   4. `Common_UX_Changelog.md` 맨 위에 항목을 추가한다.
   5. 상태를 「완료」로 바꾸고 note에 처리 내용을 짧게 남긴다. 해석이 모호하면 「보류」로 바꾸고 note에 질문을 남긴다.
      - note는 Workbench 「Claude 답변」에 그대로 보인다. **줄바꿈(`\n`)으로 나눠 쓴다**: 첫 줄에 요약 한 문장, 그 아래 고친 곳을 `- 화면: 무엇 → 어떻게`처럼 한 줄에 하나씩, 참고 · 확인 필요는 마지막 줄에.
      - **질문 · 선택지(`ask`)**: 사람이 답해야 이어갈 수 있으면 note와 함께 `ask`를 보낸다. Workbench · 변경 이력에 질문과 버튼 · 답 입력칸이 보인다.
        - 보류 + 질문: `{action:'update', id, status:'보류', note, ask:{q:'질문 한 문장', options:[{label:'고를 답 1'}, {label:'고를 답 2'}], free:true}}`. 선택지는 2~4개, 짧게(그대로 답이 된다). 고를 답이 없으면 `options:[]` + `free:true`(직접 입력만).
        - 완료 + 다음 행동 제안(예: 같은 요청이 여러 건): `{status:'완료', note, ask:{q, options:[{label:'R001 · R002 지우기', action:'delete', ids:['R001','R002']}, {label:'그대로 두기', action:'done'}], free:false}}`. `action`: 없음(그 글을 답으로 다시 「대기」) · `done`(더 할 일 없이 「완료」) · `delete`(`ids` 요청을 지우고 「완료」, 사람이 확인 창에서 한 번 더 고른다).
        - 사람이 답하면 서버가 `replies[]`에 `{at, by, q, text}`를 쌓고 `ask`를 지운 뒤 「대기」로 돌린다(→ `PENDING`). **요청에 `replies`가 있으면 원래 요청(`text`)과 마지막 답을 함께 읽고 그 답대로 이어서 처리한다.** 같은 질문을 다시 하지 않는다. 상태만 바꾸는 update는 지난 `ask`를 지운다.
      - **보류 요청 다시 진행**: 사람이 Workbench · 변경 이력의 「다시 진행」(질문이 없는 「보류」, 겹침 대기 제외)을 누르면 note를 비우고 「대기」로 돌아온다. 처음 요청처럼 처리한다.
      - 서버가 요청의 등록 · 상태 변경(진행 중 · 보류 · 완료)마다 작업 이력을 남기고 깃으로 공유한다(다른 작업자도 본다). 완료일 때 그때 캡처를 붙이므로 캡처(3)를 완료(5)보다 먼저 한다.
      - **고친 프레임 알리기**: 「완료」 update에 `frames:[{nodeId, name}]`(실제로 고친 최상위 프레임, 고친 순서, 최대 12개)를 함께 보낸다. 서버가 그 프레임들의 캡처를 모두 이력에 붙이고(`shots`, 변경 이력에서 화면 이름 탭으로 넘겨 봄), Workbench 답변에 「고친 화면」으로 보인다. 보내지 않으면 예전처럼 요청 프레임 한 장만 붙는다(요청 프레임만 고쳤으면 생략해도 된다).
      - **토큰 사용량**: 서버가 「진행 중」이 된 시각(startedAt)을 적고, 「완료」가 되면 `workbench/usage.ps1`(맥 `usage.pl`)로 그 구간 사용량을 `.history/usage/`에 남긴다(「사용량 통계」 페이지). 그래서 요청이 여러 개면 **한 요청씩** 「진행 중」으로 바꾸고 끝낸 뒤 다음 요청을 시작한다(한꺼번에 진행 중으로 두면 구간이 겹친다).
   6. **프로토타입 맞추기**: 완료한 뒤 `GET /api/prototypes`에서 이 프레임이 「갱신 필요」(`stale`)인 프로토타입이 있으면, 프로토타입마다 `POST /api/jobs {action:'add', kind:'prototype-sync', fileKey, proto:{id}, name, text:'R0xx 반영', frames:{stale}, by:'Claude'}`를 쌓는다(같은 프로토타입에 「대기」가 있으면 서버가 합친다). 요청은 기다리게 하지 않고, 다음 감시(`JOBS`)에서 `prototype.md`의 prototype-sync대로 맞춘다.
- **겹침(다른 작업자와 같은 프레임)**: 감시가 `PENDING`과 함께 `CONFLICT R0xx <다른 이력 id> <in-progress|waiting>`을 출력하면, 그 요청은 Figma를 고치지 않는다.
  - 다른 작업자의 이력 내용은 `.history/entries/<다른 이력 id>.json`(by · pc · reqId · text)에서 본다.
  - 상태를 「보류」로, note를 `겹침 대기: {by}({pc}) {reqId} {진행 중|대기} — 그 요청이 끝나면 이어서 처리합니다`로 바꾼다. note는 반드시 「겹침 대기」로 시작한다.
  - 감시가 `RESUME R0xx`를 출력하면(겹침이 풀림) 그 요청을 「진행 중」으로 바꾸고, 프레임을 **지금 상태로 다시 읽은 뒤** 위 순서대로 처리한다. 다른 작업자가 이미 같은 수정을 했으면 「완료」로 두고 note에 그렇게 적는다.
  - Workbench는 같은 프레임에 다른 작업자의 「대기 · 진행 중」 요청이 있으면 등록할 때 경고한다(막지는 않는다).
- 요청 없이 채팅으로 Figma를 고쳤으면 작업 이력을 직접 남긴다: `POST /api/history {action:'add', by:작업자 이름, doneBy:'Claude', title, text, fileKey, fileName, page, frame, nodeId}` (캡처를 먼저 갱신하면 함께 남는다).
  - 사용량도 직접 남긴다: 윈도우 `powershell -NoProfile -ExecutionPolicy Bypass -File workbench/usage.ps1 -From {작업 시작 시각 ISO} -By {작업자} -Title {작업 내용} [-Frame · -NodeId · -FileKey · -FileName · -Page]`, 맥 `perl workbench/usage.pl --from … --by … --title …`. 시작 시각은 그 작업을 부탁받은 사용자 메시지 시각이다.
- 요청 데이터: `workbench/edit_requests.json` (`items[]`: id, nodeId, frame, page, fileKey, fileName, editable, type, priority, layout, text, status, note, author, images, ask, replies)
- **첨부 이미지**: 요청에 `images: [{file, small, name, size}]`가 있으면 처리 전에 **원본 `file`**(`workbench/req_images/{요청 ID}_{n}.{ext}`, 이 PC에만)을 Read로 열어 보고, 요청 글과 함께 해석한다(「이 화면처럼」, 빨간 표시 부분 등). 이미지와 글이 어긋나거나 이미지로 알 수 없으면 「보류」와 질문을 note에.
  - Workbench 수정 요청 칸에서 붙여넣기 · 끌어다 놓기 · 파일 선택으로 넣는다. 최대 5장, 한 장 10MB 미만(PNG · JPG · GIF · WEBP). 원본을 `POST /api/attach?ext=` → `{tmp}`로 먼저 올리고, `add`의 `images:[{tmp, small, name}]`로 등록하면 서버가 요청 ID 이름으로 옮긴다.
  - 작업 이력(깃 공유)에는 원본이 아니라 브라우저가 만든 줄인 사본(긴 변 1600 JPG, `small`)만 `.history/attach/{PC}_{요청 ID}_{n}.jpg`로 올린다. 요청을 지우면 원본 · 사본 모두 지운다.
- **레이아웃**: 요청에 `layout`(예: `2. 목록 (테이블)`)이 있으면 `docs/layout_structures/Layout_Structure.html`의 그 레이아웃(공통 틀 · 영역 크기 · 규칙, 테이블이면 텍스트 정렬)을 따라 만들거나 고친다. 와이어프레임은 같은 폴더의 PNG(`01_dashboard.png` … `09_chart_filter.png`)다.
- `Common_UX_Changelog.md` 항목 제목 앞에 파일명을 붙인다(예: `[CURECA 기획] …`).

## 캡처

- 수정 요청을 반영한 뒤에는 그 프레임을 `jobs.md`의 capture 방식으로 다시 받는다.
- 한꺼번에 많이 받지 않는다. Workbench에서 본 프레임만 「캡처 받기」로 쌓인다.
- **자동 캡처(플러그인 몫)**: Workbench에서 구분(페이지)을 열면 그 페이지에서 캡처 없는 프레임을 Figma 플러그인에게 맡긴다(작업 `capture` + `auto:true`, 지금 보는 화면 먼저, 늘 10개 안팎을 쌓아 두어 쉬지 않고 이어 받음, 플러그인이 60초 안에 서버에 닿았을 때만, 왼쪽 「자동 캡처」 체크로 끔). 플러그인은 다른 페이지 프레임도 받고(그 페이지를 처음 한 번 불러올 때만 오래 걸림 — 작업 note에 「불러오는 중」), Figma에서 편집 중(3초 안)이면 멈췄다가 잇는다. 「진행 중」으로 3분 넘게 멈춘 자동 캡처는 Workbench가 다시 「대기」로 돌린다. **감시는 `auto` 캡처를 `JOBS`에 내지 않는다** — Claude는 자동 캡처를 받지 않는다(수십 장을 Claude가 찍으면 느리고 토큰을 쓴다). 끝난 캡처 작업은 서버가 최근 30개만 남긴다.
- Figma에서 **Common UX Sync** 플러그인을 켜 둔 사람이 작업 페이지를 고치면 그 프레임 캡처가 자동으로 들어온다(JPG, by가 「이름 (Figma)」).
