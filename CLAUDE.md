# UX_AI_TEST · Claude 작업 규칙

이 폴더를 연 Claude Code 세션은 아래 규칙으로 일한다. 사람마다 다른 PC · Figma 계정 · Claude 계정을 써도 규칙은 같다.

## 범위

- Workbench는 **프로젝트(Figma 파일) 단위**다. 작업 파일은 시작 안내 3단계에 넣은 링크의 파일이다. **기본 프로젝트는 없다**(링크가 없으면 Workbench는 시작 안내 3단계로 안내하고, 파일 키 없이 온 요청 · 캡처는 그 링크의 파일로 본다).
  - 시작 안내 상태(`setup.json`)는 설치 폴더 밖(PC별)이라 다시 설치해도 남는다. 그래서 **새로 설치한 폴더를 처음 켜면**(`projects/` 없음 · `workbench/.installed` 없음) 서버가 예전 작업 링크 · 완료 표시를 비운다(이름 · 로그인은 그대로). Workbench는 이 설치에 등록된 프로젝트 · 시작 안내 링크의 파일만 연다(브라우저에 남은 예전 탭 · `?p=`는 무시).
- 파일마다 **수정 가능 페이지는 하나**다. 다른 페이지는 읽기만 한다.
  - 모든 파일 같음: 시작 안내 링크(작업 링크)가 가리키는 노드의 페이지(`projects/{fileKey}/project.json`의 editablePageId · editablePageName, catalog.json에서 `editable: true`). 링크를 바꾸면 서버가 바로 바꾼다.
  - 기준은 **project.json의 작업 링크 하나**다. 서버는 프레임 목록을 받을 때(플러그인 · Claude)와 켤 때마다 링크로 수정 가능 페이지를 다시 정한다. 보내온 `editablePageId`는 링크로 정하지 못할 때만 쓴다.
  - **작업 페이지 바꾸기**: Workbench 「구분 (페이지)」 아래 상태 줄의 「이 페이지를 작업 페이지로」(또는 수정 요청 칸 보기 전용 안내의 「이 페이지를 작업 페이지로」)를 누르면 `POST /api/projects {action:'editable', key, pageId}`로 그 프로젝트 작업 링크의 node-id가 그 페이지로 바뀐다(시작 안내 링크가 같은 파일이면 그것도). 수정 가능 페이지는 여전히 하나다. 그래서 요청을 처리할 때마다 **그때의** project.json editablePageName으로 확인한다(등록 뒤 작업 페이지가 바뀌었으면 「보류」).
  - **프로젝트 탭**: Workbench 위쪽 탭이 프로젝트(Figma 파일)다. 주소 `Figma_Workbench.html?p={fileKey}`로 정해지고(Ctrl+클릭하면 새 창), 「+」로 등록된 프로젝트를 열거나 Figma 링크로 새 프로젝트를 등록한다(`POST /api/projects {action:'add', link}`). 요청에는 늘 `fileKey`가 있으니 그 파일 · 그 파일의 수정 가능 페이지 기준으로 처리한다.
  - Figma 플러그인은 열린 파일의 프로젝트 작업 링크(`GET /api/projects`)로 수정 가능 페이지를 정한다(아직 모르는 파일이면 시작 안내 링크).
- 응답은 한국어로 한다.
- 새 텍스트 폰트는 **Inter** 또는 **Noto Sans KR**. Pretendard는 Claude의 Figma 환경(`use_figma`, 클라우드)에 없어 불러올 수 없다(2026-10-29 확인: 폰트 목록에 없음).
  - **기존 Pretendard 글을 고칠 때는 Figma 플러그인에 맡긴다**: 아래 「작업 대기열」의 **text** 작업을 만들면, 작업자 PC의 Figma에서 켜져 있는 Common UX Sync 플러그인이 그 PC의 Pretendard로 글을 바꾼다(스타일 · 폰트 그대로).
  - 플러그인이 2분 안에 가져가지 않으면(작업이 계속 「대기」) 작업을 「실패」로 바꾸고, 같은 자리 · 크기 · 색의 **Noto Sans KR**(한글 없으면 Inter) 글로 바꿔 넣은 뒤 note에 「플러그인이 꺼져 있어 Noto Sans KR로 바꿈」이라고 적는다.
- 커밋 · 푸시는 사용자가 요청할 때만 한다.

## 준비 (세션마다)

1. 로컬 서버가 떠 있는지 확인한다: `http://localhost:8765/api/requests`가 응답하면 된다. 없으면 사용자에게 `Figma AI Run` 실행을 안내한다(윈도우 `Figma AI Run.bat`, 맥 `Figma AI Run.app`. Claude가 직접 띄울 때는 윈도우 `.claude/launch.json`의 `guide-sync`, 맥 `perl guide_server_mac.pl 8765`).
   - 윈도우의 Claude 앱(스토어 설치판)이 띄운 프로그램은 `%LOCALAPPDATA%`를 따로 된 사본으로 본다. 그래서 Claude가 띄운 서버는 PC별 시작 안내 상태(`setup.json`: 작업자 이름 · 작업 링크)를 옛 값으로 읽을 수 있다. 되도록 사용자가 `Figma AI Run`으로 띄우게 안내하고, Claude도 그 파일을 직접 읽지 말고 `GET /api/setup`으로 확인한다.
2. Figma MCP(`use_figma`, `get_screenshot`)가 연결돼 있는지 확인한다. 안 돼 있으면 사용자에게 Figma 연결(`/mcp` 또는 앱의 커넥터 설정)을 안내한다. 사용자 본인 Figma 계정에 작업 파일 **편집 권한**이 있어야 한다.

## Workbench 수정 요청 처리

- **백그라운드 감시(기본)**: 서버가 켜진 지 5초 뒤 `workbench/agent.ps1`(맥 `agent.pl`)을 **창 없이** 띄운다(시작 안내 7단계 체크박스, `setup.autoWatch`가 false면 안 함, 시작 · 중지 버튼도 7단계). 에이전트는 처리할 것이 생길 때 Claude Code CLI를 띄우고 **한 차례를 마치면 닫는다**(다음 요청은 새 세션 — 세션을 계속 두면 매 API 호출마다 앞 요청 대화를 다시 읽어 토큰의 98%가 그것이었다, 2026-11-06)(`claude -p --input-format stream-json --output-format stream-json`, `--permission-mode acceptEdits`, 허용 도구 Bash · 파일 · Figma MCP). `watch_requests`를 1분씩 반복해 돌리고, `PENDING` · `RESUME` · `JOBS`가 나오면 그 결과를 떠 있는 세션에 메시지로 보낸다. 받은 Claude는 이 문서 규칙대로 그 항목만 처리하고 차례를 끝낸다(감시 재실행 · 사용 한도 표시는 하지 않고, 묻지 말고 모호하면 「보류」, 앞서 처리한 요청과 섞지 않고 상태를 다시 읽는다).
  - 한 차례 안에서 컨텍스트가 80%를 넘으면 CLI가 스스로 압축한다(`CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=80`). 세션이 죽거나 한 요청이 20분 넘으면 새로 띄운다.
  - Claude Code는 PATH의 `claude`, 없으면 Claude 데스크톱 앱에 들어 있는 것(윈도우 `%LOCALAPPDATA%\Claude-Data\claude_*\claude-code\{버전}\…\claude.exe`, 맥 `~/Library/Application Support/Claude/claude-code/{버전}/{해시}/claude.app/Contents/MacOS/claude`. 못 찾으면 시작 안내 7단계에 경로를 직접 넣는다). CLI는 데스크톱 앱 로그인과 별개라 처음 한 번 시작 안내 7단계 「Claude 로그인 · Figma 연결」(Claude Code 창에서 `/login`, `/mcp` → figma 인증)이 필요하다. 서버가 그때 Figma MCP(`https://mcp.figma.com/mcp`)를 CLI에 등록해 둔다.
  - 상태 `workbench/.agent.json` {at, host, pid, status: idle|working|login|figma|error|stopped, msg}, 중지 신호 `.agent_stop`(처리 중이면 마친 뒤 멈춤), 세션 새로 띄우기 신호 `.agent_renew`(7단계 「Claude 로그인 · Figma 연결」 창을 열 때 서버가 씀. 로그인 · Figma 연결 전에 뜬 세션을 버린다), 기록 `.agent.log`. 같은 감시 결과가 3번 연달아 처리되지 않으면 10분 쉰다. 백그라운드 감시가 동작 중이면 Workbench 탭을 모두 닫아도 서버가 꺼지지 않는다(에이전트가 API를 써야 한다). 자동 시작은 시작 안내 「완료」와 상관없이 `autoWatch`만 본다. **준비 확인**: 세션을 띄우기 전에 `claude auth status`(로그인) · `claude mcp list`(figma 줄이 Connected)를 확인하고, 안 되어 있으면 요청을 보내지 않고 상태 `login` · `figma`로 이유를 7단계에 보인다(2분마다 · 연결 창을 열면 바로 다시 확인). **사용 한도**: CLI가 차례마다 보내는 `rate_limit_event`와, 요청이 없어도 **5분마다** `claude -p /usage`(모델을 부르지 않아 토큰 0, 글을 읽음)로 에이전트가 `.plan_usage.json`을 쓴다(백그라운드만 쓰는 PC도 상단 메뉴 한도가 계속 갱신된다).
- **대화형 Claude Code 창(직접 작업)**: 지금처럼 Claude 앱 Code 탭이나 터미널에서 열어 쓴다. 이 창에서 「워크벤치 요청 감시」를 부탁받으면 먼저 `workbench/.agent.json`을 본다. **백그라운드 에이전트가 동작 중(150초 안에 썼고 status가 stopped가 아님)이면 감시를 시작하지 말고** 사용자에게 「백그라운드가 감시 중」이라고 알린다(같은 요청을 두 번 처리하지 않게). 꺼져 있을 때만 아래 순서대로 감시한다.

대화형 창에서 감시할 때(백그라운드가 꺼져 있을 때):


1. `workbench/watch_requests.ps1`을 **백그라운드**로 실행한다(윈도우 `powershell -NoProfile -ExecutionPolicy Bypass -File workbench/watch_requests.ps1`, 맥 `perl workbench/watch_requests.pl`). 「대기」 요청이 생기면 `PENDING R0xx,...`(겹치면 `CONFLICT …` 줄이 함께), 겹침이 풀린 요청은 `RESUME R0xx,...`, 처리할 작업이 생기면 `JOBS J0xx,...`를 출력하고 끝난다. 50분 동안 없으면 `TIMEOUT`.
   - **사용 한도 표시**: 감시를 시작할 때와 감시가 끝나 깰 때마다(`PENDING` · `RESUME` · `JOBS` · `TIMEOUT`) `mcp__ccd_session_mgmt__get_usage`로 이 계정의 사용 한도를 읽는다. 결과를 `workbench/.plan_usage.json`에 `{at(지금 시각 ISO), plan, windows:[{label, percentUsed, resetsAt}]}`로 덮어쓴다(Write 도구, UTF-8). 상단 메뉴에 버전 앞에 「Claude 24% · 1시간 33분 후 초기화 · 주간 4%」로 보인다(appnav.js). 이 PC 작업자 본인 것만이고 공유하지 않는다. 도구가 없거나 `plan.status`가 ok가 아니면 건너뛴다. 이것 때문에 따로 깨우지는 않는다.
2. `TIMEOUT`이면 다시 실행한다. `JOBS`면 아래 「작업 대기열」대로, `PENDING`이면 요청마다 아래 순서로 처리한 뒤 다시 실행한다. **처리 순서는 `PENDING`에 적힌 순서**다(감시가 우선순위 「높음」 먼저, 같은 우선순위는 먼저 등록한 것부터 정렬해 둔다. `RESUME`도 같다).
   0. 대상 파일 = 요청의 `fileKey`(없으면 시작 안내 작업 링크의 파일, 둘 다 없으면 「보류」). **수정 가능 페이지가 아니면 반영하지 않는다.** 요청의 `page`가 그 파일의 지금 수정 가능 페이지(project.json editablePageName)일 때만 반영한다. 아니면 상태를 「보류」로 바꾸고 note에 「○○ 페이지는 보기 전용입니다. 담당자 확인 필요」를 남긴다.
   1. 상태를 「진행 중」으로: `POST http://localhost:8765/api/requests` `{action:'update', id, status:'진행 중', note, by:'Claude'}` — 서버가 「이미 진행 중」으로 거절하면 다른 Claude 세션이 처리 중이니 그 요청은 건너뛴다
   2. Figma(대상 파일 · 수정 가능 페이지)에 반영한다. **작업 기준 문서를 먼저 확인한다 — UX 문서의 카테고리(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서)마다 「적용」한 문서 하나씩만 읽는다**:
      - `GET /api/guides?team={요청의 team}`의 `applied[fileKey]`(**이 PC 작업자가 고른 그 팀의 작업 기준**, `workbench/guide_apply.json` · 다른 팀은 `guide_apply.{team}.json`, 공유하지 않음 — 아래 「팀」). `docs: {종류: {id}}`가 카테고리별 적용 문서다(`rule` 작업규칙 · `policy` 정책서 · `guide` UX가이드 · `data` 기준데이터 · `spec` 화면 정의서, 앞으로 늘어도 같다). `docs`가 없는 예전 형식이면 `guideId`가 UX가이드다. id가 빈 값이면 그 카테고리는 작업 기준 없음.
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
   6. **프로토타입 맞추기**: 완료한 뒤 `GET /api/prototypes`에서 이 프레임이 「갱신 필요」(`stale`)인 프로토타입이 있으면, 프로토타입마다 `POST /api/jobs {action:'add', kind:'prototype-sync', fileKey, proto:{id}, name, text:'R0xx 반영', frames:{stale}, by:'Claude'}`를 쌓는다(같은 프로토타입에 「대기」가 있으면 서버가 합친다). 요청은 기다리게 하지 않고, 다음 감시(`JOBS`)에서 아래 「작업 대기열 › prototype-sync」대로 맞춘다.
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

## 프로젝트 폴더

프로젝트(Figma 파일)마다 `projects/{fileKey}/`에 둔다(PC마다 따로, 저장소 · 배포본에 넣지 않는다). 기본 프로젝트는 없다.

| 파일 | 내용 |
|---|---|
| `project.json` | key · name · link(작업 링크) · editablePageId/Name(수정 가능 페이지) · uxGuideLink |
| `catalog.json` | 페이지 · 프레임 목록 `pages[].frames: [nodeId, 이름, w, h, x, y]`, `frames: null`은 아직 모르는 페이지 |
| `labels.json` | (있으면) 화면 ID 제목 `titles`, 프레임 라벨 `labels` |
| `shots/{nodeId의 :를 -로}.png · .jpg`, `shots_meta.json` | 캡처와 캡처 정보 `{nodeId: {at, w, h, by, name, ext}}` |

- Workbench 메뉴는 1 구분 = Figma 페이지, 2 페이지 = 화면 ID(예: TI-STN-08), 3 상세 = 프레임(예: TI-STN-08-P)이다.
- 서버 API: `GET/POST /api/projects`(add · editable), `GET/POST /api/prototypes`(목록 · stale, delete), `GET/POST /api/catalog`, `POST /api/shots`, `GET/POST /api/jobs`(add · take(id를 주면 그 작업만) · update), `GET/POST /api/history`, `GET /api/usage`, `GET/POST /api/guides`(apply · save) (`guide_server.ps1`, `guide_server_mac.pl`가 같다)
  - 쓰기(POST)는 이 서버에서 연 페이지 · Figma 플러그인(Origin `null`) · Origin 없는 호출(Claude · curl)만 받는다. 다른 사이트에서 온 POST는 403.

## 버전 · 배포 (자동 업데이트)

- 지금 버전은 `VERSION`(예: `0.1.0`). 상단 메뉴에 `v0.1.0`으로 보인다.
- 작업자 PC는 Figma AI Run을 실행할 때마다 `workbench/git_remote.txt` 저장소의 **`release` 브랜치**를 확인해, 새 버전이면 프로그램 파일만 바꾼다(`workbench/update.ps1` · `update.sh`).
  - 개인 데이터(`workbench/edit_requests.json` · `jobs.json`, `projects/`, `.claude/`)는 이미 있으면 그대로 둔다.
  - 깃 작업 폴더(개발용 clone, 이 폴더)는 자동 업데이트하지 않는다.
- **배포는 사용자가 「배포해줘」(버전 포함)라고 할 때만** 한다. 「배포해줘」는 **develop 커밋 · 푸시까지 포함한 요청**이다(develop이 먼저, 배포본은 그 커밋으로 만든다).
  1. **`RELEASE_NOTES.md`**(Workbench 릴리즈 노트) 맨 위에 `## v{버전} · 날짜 · 요약` 항목을 쓰고(미배포 항목은 「v{버전}에 포함」으로), `VERSION`을 `{버전}`으로 고친다. 프로그램 변경은 `Common_UX_Changelog.md`(Figma 화면 수정 이력)에 쓰지 않는다.
  2. 작업 폴더의 변경을 모두 **develop에 커밋하고 푸시**한다(`origin` = PJ-CRC/CURECA_UX, Deploy key).
  3. `powershell -ExecutionPolicy Bypass -File tools\release.ps1 -Version {버전} -Publish` — 커밋 안 한 변경이 있거나, VERSION이 다르거나, 푸시 안 한 커밋이 있으면 스크립트가 멈춘다(그때는 2번부터 다시).
     - release 브랜치에 올리고 태그 `v{버전}`을 단다. 설치용 압축 `dist\UX_AI_TEST_Workbench_v{버전}_Windows.zip` · `_Mac.zip`을 만든다.
  4. 버전 규칙: 고침은 끝자리(0.1.0 → 0.1.1), 기능 추가는 가운데(0.1.x → 0.2.0). 이미 배포한 버전은 다시 쓸 수 없다.
- 새 사람에게는 `dist`의 최신 압축을 준다. 이미 쓰는 사람은 다시 실행하면 자동으로 바뀐다.

## 계정 · 메뉴 권한

- 계정이 하나라도 있으면(`.history/accounts/*.json`) Workbench 페이지는 **로그인**해야 쓴다(`Login.html`). 로그인은 PC마다 유지된다(PC별 `setup.json`의 `login {id, pwAt}`, 비밀번호가 바뀌면 다시 로그인). **새 PC**(계정 파일도 없고 공유 이력을 한 번도 받지 못함)도 처음 실행하면 로그인 화면부터 뜨고, 그 화면에서 [깃허브 연결]로 이력 · 계정을 받은 뒤 로그인한다(`/api/me`의 `needSync`, 그동안 `/api/setup/launch`만 로그인 없이 된다). 이력을 받았는데도 계정 파일이 하나도 없으면 예전처럼 로그인 없이 쓴다.
- 계정 = `.history/accounts/{id}.json` `{id, name, admin, teams, menus, writes, salt, hash, iter, active, createdAt, updatedAt, pwAt}` — 비밀번호는 **PBKDF2-SHA256(100000회) 해시만**, 원문은 어디에도 남기지 않는다. 작업 이력과 함께 깃으로 모든 PC에 공유된다(한 계정 한 파일). 서버는 이 폴더를 웹으로 내보내지 않는다.
- **최고관리자는 1명**(`brex`, `admin: true`): 메뉴 전부 + 「계정 관리」(`Accounts.html`: 계정 추가 · 이름 · 메뉴 · 사용 중지 · 비밀번호 초기화 · 지우기). 최고관리자는 지우거나 중지할 수 없다. 누구나 「내 정보」(`Account.html`)에서 자기 비밀번호를 바꾼다.
- **시작 안내(`Setup.html`) · 내 정보는 권한 설정 대상이 아니다**: 로그인한 모든 계정이 쓴다(서버 메뉴 `always`). 계정 관리 화면의 메뉴 선택에도 나오지 않는다.
- 고르는 메뉴 키: `plan` 일정/작업(`Work.html`, 상단 메뉴에서 시작 안내 다음. 하위 탭: 일정 · 주간 진행 현황 · 화면설계서 작업대기 · 회의록 · 임시 정책 · 논의·결정 — 일정 · 주간 진행 현황은 구글 시트 연결(아래 「일정/작업 · 구글 시트」), 나머지는 세부가 정해지는 대로) · `guide` UX 문서(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서 · 변경이력, + 문서 보기 `UX_Guide.html`) · `workbench` · `history` 변경 이력 · `usage` 사용량 통계 · `proto` 프로토타입(+ `prototypes/`). 허용되지 않은 페이지는 첫 허용 메뉴로, API(`/api/usage` · `/api/prototypes` · `/api/accounts` · `/api/sheet`)는 403.
- **메뉴마다 읽기 · 쓰기**(v0.10.1): 계정의 `menus`가 읽기(보기만), `writes`가 쓰기(수정 요청 등 바꾸기도. 읽기 메뉴 안에서만). 계정 관리에서 메뉴마다 「없음 · 읽기 · 쓰기」로 고른다(사용량 통계는 쓰기 없음).
  - 쓰기로 되는 것: 일정/작업 = 일정(구글 시트) 칸 수정 · 시트 연결(`POST /api/sheet`) · UX 문서 = 새 가이드 · 정의서 만들기, 항목 수정 요청, 연관 항목 찾기 · 반영 요청(jobs `guide` · `guide-edit` · `guide-check`, guides `save`, `/api/upload`) · Workbench = 수정 요청 등록 · 답하기 · 다시 진행 · 지우기, 캡처 · 목록 요청, 프로젝트 추가 · 작업 페이지 바꾸기(`/api/requests` · `/api/attach` · `/api/projects` · `/api/catalog` · `/api/shots`, jobs `capture` · `catalog`) · 변경 이력 = 다시 진행 · 답하기(`/api/requests`) · 프로토타입 = 만들기 · 수정 요청 · 맞추기 · 지우기(jobs `prototype*`, `/api/prototypes`). `/api/requests`는 Workbench · 변경 이력 · UX 문서(반영 요청) 쓰기 중 하나면 된다.
  - 읽기만이면 화면에 「보기 전용」 표시, 바꾸는 버튼(`.w-only`)이 숨고(`html.perm-ro`, appnav.js), 서버가 그 POST를 403 · 오류로 막는다.
  - `writes`가 없는 예전 계정은 고른 메뉴 모두 쓰기(UX 문서만 예전 `guideEdit`이 있을 때). 최고관리자는 전부 쓰기. `/api/me`의 `writes`.
- **승인 권한**(메뉴 권한과 따로, v0.12.0): 계정의 `approves`(예: `["pv"]`). 계정 관리 「승인 권한」에서 항목마다 체크하고, 담당자 수는 제한하지 않는다. 최고관리자는 전부. 항목 목록은 서버의 `$Approvals`(맥 `@APPROVALS`) — 지금은 `pv` 임시 정책 승인 · 반려(일정/작업 › 임시 정책 [승인] · [A/B안 승인] · [반려]). 승인할 것이 생기면 이 목록에 한 줄 더하고 그 버튼 · 서버에서 `Can-Approve`(`can_approve`)로 확인한다. 승인 · 반려(job plan `pv-decide`)는 메뉴 쓰기 대신 승인 권한으로만 막는다. `/api/me`의 `approves`, `/api/accounts`의 `approvals`.
- 권한 검사는 **브라우저 페이지에서 온 요청만**(`Sec-Fetch-Site` 머리글, Origin이 `null`이 아님). **Claude(curl) · Figma 플러그인은 로그인 없이 그대로** 쓴다. Claude는 계정 파일을 직접 고치지 않는다(사용자가 요청하면 화면 · API로).
- 작업자 이름(요청 · 이력의 작성자, Workbench 「작업자」 칸 · 시작 안내 1단계)은 로그인한 계정 이름으로 고정된다.
- 서버 API: `GET /api/me`, `POST /api/login` · `/api/logout` · `/api/me/password {current, next}` · `/api/me/team {team}`, `GET/POST /api/accounts {action: add|update|delete|team-add|team-update|team-delete}`(최고관리자).

## 팀 (v0.13.0부터)

- 같은 회사 안의 업무 구분이다. **일정/작업 · UX 문서 · 변경 이력 · 사용량 통계**를 팀 단위로 쓴다(`$TeamMenus` · 맥 `@TEAM_MENUS`). Workbench · 프로토타입은 PC마다라 팀과 상관없다. 팀끼리 서로 못 보게 막는 것은 화면 · 서버 권한 수준이다(모든 팀 데이터가 같은 `history` 브랜치로 모든 PC에 내려온다).
- 팀 목록 = `.history/config/teams.json` `{items:[{id, name, legacy, createdAt, by}]}`(깃 공유, 웹으로 내보내지 않음). 파일이 없으면 **CURECA**(`cureca`) 하나로 본다. 「기본 팀」은 없다. 최고관리자만 계정 관리 「팀」에서 추가 · 이름 바꾸기 · 지우기(지금까지의 데이터가 있는 팀 · 계정이 있는 팀 · `.history/teams/{id}`에 데이터가 있는 팀은 못 지움).
- **CURECA = 지금까지 모두가 함께 쓰던 데이터의 팀**(`legacy:true`). 그 데이터는 지금 자리 그대로 둔다(`.history/guides` 아래는 원본 CURECA_AI 저장소와 경로가 같아야 한다). 다른 팀의 데이터는 `.history/teams/{id}/` 아래에 같은 구조로 둔다.

| 데이터 | CURECA | 다른 팀 |
|---|---|---|
| UX 문서(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서, `provisional/` · `pending/` · `customer-agenda/` · `screen-fixes/` · `decisions/`, `_log.json`) | `.history/guides/` | `.history/teams/{id}/guides/` |
| 회의록 | `.history/minutes/` | `.history/teams/{id}/minutes/` |
| 시트 연결 | `.history/config/sheet.json` | `.history/teams/{id}/config/sheet.json` |
| 작업 기준(이 PC만) | `workbench/guide_apply.json` | `workbench/guide_apply.{id}.json` |
| 변경 이력 · 사용량 | `.history/entries` · `.history/usage` 한곳, 기록마다 `team`(없으면 CURECA) |

- 서버는 요청마다 팀을 정한다: 화면 = 이 PC에서 고른 팀, Claude · curl = `?team={id}`(없으면 이 PC에서 고른 팀). 그 팀으로 `/api/guides` · `/api/minutes` · `/api/sheet*` · `/api/plan/files` · `/api/guides/gitlog|gitfile` · `/api/history`(GET, `?all=1`이면 모든 팀 — Workbench 겹침 표시) · `/api/usage`가 바뀐다. 화면이 `.history/guides/…` · `.history/minutes/…`를 읽으면 서버가 그 팀 위치로 바꿔 준다. 남의 팀 폴더(`/.history/teams/{남의 팀}/`) · 팀 시트 비밀값은 내보내지 않는다.
- 새 요청(`/api/requests` add) · 작업(`/api/jobs` add) · 이력(`/api/history` add)에는 그때 팀이 `team`으로 붙는다(본문에 `team`을 주면 그것). 요청이 끝나면 `usage.ps1 -ReqId`가 요청의 팀으로 사용량을 남긴다.
- **Claude가 요청 · 작업을 처리할 때**: 그 항목의 `team`(없으면 `cureca`)으로 일한다. 이 문서의 `.history/guides/…` · `.history/minutes/…` · `.history/config/sheet.json` 경로는 CURECA 기준이니, 다른 팀이면 위 표대로 `.history/teams/{team}/…`로 바꿔 읽고 쓴다(새 문서 폴더 `.history/teams/{team}/guides/{id}/`도). 서버 API에는 `?team={team}`을 붙이고, 작업을 새로 쌓을 때(prototype-sync · text 등)는 본문에 `team`을 넣는다. 사용량은 `usage.ps1 … -Team {team}`(맥 `--team`). Workbench 요청의 작업 기준은 `GET /api/guides?team={요청 team}`의 `applied[fileKey]`다.
  - 안전장치(빠뜨렸을 때): `?team=` 없이 `jobId`를 담은 문서 저장(`/api/guides save`)은 그 작업의 팀 문서로, 이미 있는 회의록 id의 저장 · 지우기는 그 회의록이 있는 팀으로 서버가 맞춘다. 파일을 직접 고치는 일(임시 정책 · 반영 대기 줄 등)에는 안전장치가 없으니 경로를 꼭 확인한다.
- 계정 `teams:[팀 id]`(여러 개 가능). `teams`가 없는 예전 계정 = CURECA. 최고관리자는 모든 팀. **팀이 없는 계정은 팀 메뉴를 못 쓴다**(읽기 · 쓰기 권한이 있어도 메뉴가 숨고 서버가 막는다).
- 지금 보는 팀은 PC마다(`setup.json`의 `team`, `/api/me`의 `team` · `teams`). 여러 팀 소속이면 상단 메뉴의 팀 고르기로 바꾼다(`POST /api/me/team`). 화면에서는 `window.WB_TEAM` · `WB_TEAMS`.
- 새 팀은 문서 · 시트 연결 · 회의록이 비어 있다. 그 팀 사람이 UX 문서 「새 {카테고리} 만들기」 · 일정/작업 「일정 연결」로 채운다.
- **다른 팀 문서 가져오기**(UX 문서, 두 팀 이상 소속 · UX 문서 쓰기): 고른 팀의 지금 탭 카테고리 문서를 지금 팀으로 복사한다 — `POST /api/guides {action:'import', from:팀 id, ids:[문서 id]}`. 문서 폴더 통째(지금 내용 · 수정본, 그 팀의 연관 항목 기록 `rev/*.check-*.json`은 뺌) + 문서 폴더 밖 파일(meta.files의 `../x`, 예: `constitution.md`)이 없으면 함께, meta에 `importedFrom {team, id, at, by}`. 같은 id가 이미 있으면 건너뛴다. 가져온 뒤에는 두 팀 문서가 따로 고쳐진다. `provisional/` 등 일정/작업 폴더는 가져오지 않는다.

## 일정/작업 · 구글 시트

- 시트(기본 `1S5tPFtNn77FLcaVBvWFO-Z48St2NxovfOoldWf6jO1w`, 일정 = 「2-2.WBS 연동」 gid `425564699`(머리말 4행 + 간트 날짜 눈금 2줄, 간트 열은 기본으로 숨김), 회의 = 「0.회의록」(왼쪽 칸 「미팅 일시 · 참석 · 주제 · 내용 · 기타」 블록이 회의 하나))는 공개하지 않는다. **Apps Script 웹 앱**(`tools/google-sheet-bridge.gs`, 시트 소유자 권한으로 실행 · 액세스 「모든 사용자」 · 스크립트 속성 `TOKEN`이 맞는 요청만)을 거쳐 서버가 읽고 쓴다.
- **연결 종류(팀마다 하나)**: [일정 연결](예전 이름 「시트 연결」)에서 「구글 시트 / Azure DevOps」를 고른다. Azure DevOps는 팀 설정 `azure {org, project, scope, startField, endField, doneStates}`(비밀값 없음, sheet.json에 `provider:'azure'`와 함께, 구글 설정은 남김) + **개인 액세스 토큰은 PC마다 각자** `{PC별 설정 폴더}/azure_pat.json`({팀 id: 토큰}, 깃 공유 안 함, `POST /api/sheet {action:'pat', pat}`, `GET /api/sheet`는 `azurePat` 있음 여부만). 지금은 입력값 저장까지 — 연결 확인 · 작업 항목 읽기 · 일정 표시는 다음 단계(그동안 Azure 팀은 구글 시트를 읽지 않는다).
- 연결 정보 `.history/config/sheet.json` {provider, sheetUrl, webapp, token, wbsGid, minutes, cols(열 맞추기 {항목: 머리말}), azure, by, at} — 깃으로 모든 PC에 공유, 웹으로 내보내지 않는다(`/.history/config` 404). 화면 「일정 연결」(일정/작업 쓰기)에서 넣는다. 웹 앱 주소 · 비밀값을 비워 보내면 그대로 둔다. Claude는 이 파일을 직접 고치지 않는다.
- API: `GET /api/sheet`(연결 정보, 비밀값 없음 · canWrite) · `GET /api/sheet/data?gid=|name=`(그 탭 `{name, gid, values, fx(수식 칸), at}`, 시트에 닿지 못하면 마지막 사본 `workbench/.sheet_cache/`를 `{cached, error, data}`로) · `POST /api/sheet {action:'config'|'test'|'write', gid|name, cells:[{row, col, value}](1부터)}`. 읽기 = `plan` 읽기, POST = `plan` 쓰기.
- 일정 탭: 시트 모양 그대로(`style=1`로 배경 · 글자색 · 굵기 · 숨긴 행 · 열 · 병합 · 드롭다운 칸 · 고정 열을 함께 받음). 숨긴 줄 · 열은 빼고(「숨긴 행 · 열 보기」), 드롭다운 값은 칩 색(완료 · 진행 중 · 대기 · T/L · T-only · L-only …)이고 고칠 때는 시트와 같은 값 목록(`dvl`)에서 고른다(글 입력 없음), 간트 열은 셀 배경색이 막대, 오늘 열은 빨간 선, 고정 열은 왼쪽에 붙임(화면 폭 60%까지). 주간 진행 현황도 숨긴 줄은 세지 않는다. 쓰기 권한이면 칸을 눌러 고치면 그 칸만 시트에 쓴다(수식 칸 제외).
- 주간 진행 현황(월~일, ‹ › 주 이동): 마감 = 작업 완료일이 그 주인 줄. 업무 상태 = 상태 열, 없으면 UX 완료 · UI 완료(또는 작업필요X)면 완료, UX만 완료면 진행 중, 그 밖에는 UX 상태. 개발사 공유 대상(공유일 열이 있을 때) · 정책 변동(정책서 `date`가 그 주 = 신규, 수정본이 그 주 = 변경, 임시 정책 `provisional/PV-*.md` 승인 대기) · 주요 내용 · 영역별 신규 정책 · 회의 내역(회의록 탭에서 날짜가 그 주인 줄, 여러 개면 넘겨 보기) · 차주 일정.

## 일정/작업 · 회의록

- 회의록은 md 파일 `.history/minutes/{id}.md`(id `m{YYYYMMDD}-{6자}`)로 저장되고 작업 이력과 함께 깃으로 모든 PC에 공유된다. 머리말 `id · date(YYYY-MM-DD HH:MM) · title · attendees(회사마다 「 / 」로 이음) · by · createdAt · updatedBy · updatedAt`, 그 아래 본문(내용, `## 소제목` · `[주제]` 줄).
- API: `GET /api/minutes`(최신순) · `POST /api/minutes {action:'save', id?, date, title, attendees, body}` · `{action:'delete', id}`. 읽기 = `plan` 읽기, 쓰기 = `plan` 쓰기.
- 화면(회의록 탭): 왼쪽 월별 목록(최신이 위, 두 번째 줄은 본문의 [주제] 또는 참석 요약), 오른쪽 보기 · 작성 · 수정. 시트 「0.회의록」에만 있는 회의는 [시트 회의록 가져오기]로 md로 옮긴다(시트는 그대로). 주간 진행 현황의 회의 내역은 md + 아직 옮기지 않은 시트 회의.
- Claude가 회의록을 쓰거나 고칠 때도 이 API를 쓴다(파일을 직접 커밋하지 않는다).
- **각자 작성**: 참석자마다 자기 내용을 `.history/minutes/{id}.notes/{작성자 ID}.md`(머리말 author · authorId · updatedAt + 본문)에 쓴다. `POST /api/minutes {action:'note', id, body}`(로그인 계정 ID, 없으면 PC 이름. 빈 글이면 지움). `GET /api/minutes`의 item마다 `notes:[{author, authorId, updatedAt, body}]`, 맨 위 `me`.
- **요약 정리(작업 대기열 kind `minutes`)**: 화면의 [요약 정리]가 `{kind:'minutes', minute:{회의록 ID}, name, text, by}` 작업을 쌓는다(`JOBS`에 나온다). 처리:
  1. 「진행 중」으로. `GET /api/minutes`에서 그 회의록(`id === minute`)의 `notes`와 지금 정리본(`body`)을 읽는다.
  2. 모든 작성분을 합쳐 **정리본 하나**로 쓴다: 같은 내용은 하나로, 서로 다르면 둘 다 남기고 누가 말했는지 `(이름)`을 붙인다. 회의 흐름대로 `[주제]` 줄로 묶고 그 아래 `- ` 항목, 결정 · 할 일은 `ㄴ 결정:` · `ㄴ 할 일(담당, 기한):`처럼 드러나게, 맨 끝에 필요하면 `## 기타`. 작성분에 없는 내용은 만들지 않는다. 지금 정리본이 있으면 거기 있던 내용도 빠뜨리지 않는다.
  3. `POST /api/minutes {action:'save', id, date, title, attendees(줄마다), body:{정리본}, summary:'{작성자 이름들}', by:'Claude'}`(UTF-8 파일로) → 머리말 `summary`에 「시각 · 이름들」이 남는다.
  4. `POST /api/jobs {action:'update', id, status:'완료', note:'작성 N건 → 정리본'}`. 사용량은 `usage.ps1 -Title "회의록 요약: {제목}"`. `Common_UX_Changelog.md`에는 쓰지 않는다.

## 일정/작업 · 화면설계서 작업대기 · 임시 정책 · 논의·결정

**기준 규칙**: `.history/guides/rules/`의 `screen-spec.md`(반영 대기 목록) · `provisional-policy.md`(PV) · `discussion-answer.md`(PD · CA 답) · `change-flow.md` · `status-lifecycle.md`. 아래는 프로그램과 이어지는 부분만 적는다. 저장소 파일(`.history/guides/…`)을 고칠 때 화면 정의서(`screens/…`)는 파일형 문서라 `POST /api/guides {action:'save', id:'screens', file, md}`로 수정본을 남기고, 그 밖의 폴더(`provisional/` · `pending/` · `customer-agenda/` · `screen-fixes/` · `decisions/`)는 파일을 직접 고친다(UTF-8, 서버가 깃으로 공유).

- **화면설계서 작업대기 탭**: 화면 정의서 파일마다 `## 반영 대기 목록` 표(`| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |`)와 `screen-fixes/{CID}.md`를 모아 보인다(상태가 「대기」로 시작하는 줄을 센다. 메뉴 담당자 = `_menu.md` owner).
  - **[고른 줄로 Workbench 수정 요청]**: 줄을 골라 요청을 만든다(유형 `화면설계서 반영`, 위치 = 화면 머리말 `figma:` 링크의 파일 키 · 노드, `page`는 빈 값). 요청에 `fixRows:[{doc:'screens'|'screen-fixes', file, n, cid}]`가 담긴다. 이미 요청한 줄은 요청 번호 · 상태가 보이고 다시 고를 수 없다.
  - 이 요청을 처리할 때: `page`가 비어 있으면 `use_figma`로 그 노드의 페이지를 찾아 수정 가능 페이지인지 확인한다(아니면 평소처럼 「보류」). 요청 글의 줄마다 「바꿀 것」대로 Figma를 고친다.
  - **완료하면 그 줄을 「반영 완료」로**: 「완료」로 바꾸기 전에 `fixRows`의 줄마다 상태 칸을 `반영 완료 (YYYY-MM-DD)`로 바꾼다 — `doc:'screens'`는 그 화면 파일(`screens/{file}`)의 지금 내용을 고쳐 `POST /api/guides {action:'save', id:'screens', file, md, note:'반영 완료: R0xx', request:'R0xx 완료', by:'Claude'}`, `doc:'screen-fixes'`는 `.history/guides/screen-fixes/{file}`을 직접 고친다. 반영하지 못한 줄은 그대로 두고 note에 적는다. 한 요청 안의 줄은 한 번에 저장한다.
- **문서가 바뀌면 반영 대기 줄을 더한다**: 작업규칙 · 정책서 · UX가이드 · 기준데이터의 guide-edit이 끝나면, 이어서 그 변경으로 고쳐야 할 화면을 찾아(guide-check `scope:'spec'`와 같은 방법 — 정책은 머리말 `cids`, 용어 · 값은 화면 본문 검색) **그 화면 파일의 `## 반영 대기 목록`에 줄을 더한다**: 구분(정책 반영 · 표기 · 디스크립션 …), 지금, 바꿀 것(`디스크립션에 넣음: …`, 정해지지 않은 부분은 `확인 필요: …`), 근거(`{문서 ID} {수정본} {항목}`), 상태 `대기`. 화면 파일이 없는 CID는 `screen-fixes/{CID}.md`(templates/screen-fix.md). guide-edit 완료 note와 guide-check items에 더한 화면 수를 적는다.
- **임시 정책 탭**(`provisional/PV-*.md`, closed/ 포함): [승인] · [A안 승인] · [B안 승인] · [반려]와 [＋ 새 임시 정책]은 작업 대기열 kind **`plan`**으로 쌓인다(`{sub, target, plan}`). 
  - `sub:'pv-decide'`(target PV ID, plan `{decision, memo, date, by}`): 「진행 중」 → PV 머리 표 `상태`를 승인 · 반려로(A/B는 `A안 승인`/`B안 승인`), `## 결정` 표에 `| 날짜 | 결정 | 결정자 | 메모 |` 줄 추가. 반려는 사유 필수, 파일을 `provisional/closed/`로 옮긴다. 승인은 `## 영향 화면` 표의 CID마다 반영 대기 줄(근거 PV ID, 상태 `대기`)을 더한다(공통 자료 반영 · closed/ 이동은 승인 담당자가 정책을 고친 뒤 — note에 남은 일로 적는다). → 「완료」, note에 바꾼 파일 · 더한 줄 수.
  - `sub:'pv-new'`(plan `{title, policy, change, reason, screens, customer, by, date}`): provisional-policy.md 4 · 6절대로 등록(번호 = provisional · closed 중 가장 큰 번호 + 1, 같은 정책의 승인 대기 PV가 있으면 같은 내용이면 그 PV에 합치고, 다르면 A/B 선택 문서). 영향 화면 표는 Claude 초안. → 「완료」, note에 PV ID.
- **논의·결정 탭**(내부 논의 = `pending/PD-*.md`, 고객 논의 = `customer-agenda/agenda.md`의 CA 줄): [답변하기]는 discussion-answer.md 순서를 두 단계로 나눈다.
  - `sub:'answer'`(target PD · CA ID, plan `{answer, date, basis, by, kind}`): 파일을 고치지 않는다. 정리안을 만들어 job note에 마크다운으로 쓰고 상태를 **「확인 대기」**로: `**결정**`(정책서 문장) · `**바뀌는 것**`(항목 파일 결과 · 상태, 공통 자료 또는 PV, 반영 대기 줄을 더할 화면) · `**확인 필요**`. 답이 모호하면 「보류」와 질문.
  - 사람이 화면에서 [확인 · 반영]을 누르면 `sub:'answer-apply'`(plan `{from, proposal, answer, date, basis, by}`)가 쌓인다 → 정리안대로 항목 파일(PD 미팅 결과 · 상태 / CA 결정 · 상태 `결정`), 공통 자료(승인 담당자의 답이면 정책 수정, 아니면 PV 등록 — discussion-answer.md 4절), 반영 대기 줄을 고치고 「완료」, note에 바꾼 파일 · 줄 수. [다시 답하기]는 새 `answer`.
- **회의록 · Workbench에서 생기는 항목**: 
  - 회의록 요약 정리(kind `minutes`) 때 정리본에서 **정해진 것 · 논의가 남은 것**을 찾아 규칙대로 올린다: 기존 정책을 바꾸기로 했으면 PV(근거 = `{날짜} 회의록 {회의록 ID}`), 우리끼리 더 논의할 것은 PD(`## 미팅 결과`에 그 회의), 고객 답을 기다리는 것은 CA(agenda.md 줄 추가 · 화면에 임시 적용했으면 PV와 연결). 이미 있는 PV · PD · CA면 새로 만들지 않고 그 파일의 미팅 결과 · 결정에 적는다. 요약 job note에 만든 · 고친 ID를 적는다.
  - Workbench 수정 요청을 처리하다 기존 정책 · 화면 정의와 다르게 고쳐야 하면(요청을 따르되) PV를 등록하고, 정할 수 없어 「보류」하는 요청은 PD로 올려 요청 note에 ID를 적는다(헌법 2조: 저장소에 기록해야 효력).

## 작업 이력 공유 (깃)

- 작업 이력은 `.history/`(한 건 한 파일: `entries/{PC}_{요청 ID}.json`, `shots/`, 토큰 사용량 `usage/{PC}_{요청 ID}.json`, UX 가이드 `guides/{id}/`(수정본 `rev/`). 작업 기준 가이드 선택은 PC마다 따로라 공유하지 않는다)에 쌓이고, 서버가 `workbench/git_remote.txt`의 저장소(모든 PC가 같은 하나, 지금은 `PJ-CRC/CURECA_UX`, 2026-11-03 `sh94-hub/UX_AI_TEST`에서 옮김) **`history` 브랜치**로 받고 올린다(`workbench/history_sync.ps1` · `.sh`를 서버가 반복 실행: 이력이 생기면 바로, 그 밖에는 5초마다 확인).
- `.history`는 작업 폴더 저장소와 별개다. Claude가 `.history`를 직접 커밋 · 푸시하지 않는다. 작업 폴더의 코드 커밋 · 푸시는 지금처럼 사용자가 요청할 때만 한다.
- 다른 작업자의 이력은 「변경 이력」 페이지(작업 이력 (공유))에서 본다.
- 서버로 JSON을 보낼 때는 **UTF-8 파일로 만들어 `curl --data-binary @파일`**로 보낸다. 명령줄에 한글을 직접 넣으면 윈도우에서 깨진다.

## 작업 대기열 (`workbench/jobs.json`, `JOBS J0xx`)

Workbench의 「캡처 받기」 · 「Claude에게 목록 만들기 요청」, UX 문서 각 탭의 「새 {카테고리} 만들기」, 가이드 보기 화면의 「수정 요청」 · 「고칠 화면 찾기 요청」, 프로토타입의 「만들기 요청」 · 「수정 요청」 · 「지금 반영」이 쌓인다. `GET /api/jobs`로 읽고, 작업마다 처리한 뒤 `POST /api/jobs {action:'update', id, status:'완료'

- **같은 작업 · 요청을 두 번 처리하지 않는다**: 서버는 이미 「진행 중」인 작업(`/api/jobs`) · 요청(`/api/requests`)을 다시 「진행 중」으로 바꾸려 하면 「이미 진행 중」 오류를 돌려준다(백그라운드 감시와 Claude 창이 함께 처리하던 것을 막음, 2026-11-05 J028). 이 오류를 받으면 다른 Claude 세션이 처리 중이니 **그 항목은 건너뛴다**. 내가 처리하다 끊겨 다시 이어야 할 때만 `force:true`를 붙인다.
- **사용량**: 끝낸(완료 · 보류 · 실패) 작업마다 `workbench/usage.ps1 -From {「진행 중」으로 바꾼 시각} -By {작업의 by} -Title "{종류}: {이름} ({작업 ID})"`(맥 `usage.pl`)로 남긴다. 종류 이름은 「사용량 통계」가 나눠 보이는 말로 쓴다: UX 문서 = 카테고리 이름(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서), 연관 항목 = 「연관 항목 찾기」 · 「고칠 화면 찾기」, 「회의록 요약」, 「임시 정책」 · 「논의·결정」(plan), 「프로토타입」, 「목록 만들기」 · 「캡처」. Workbench 요청(R0xx)은 서버가 완료 때 자동으로 남긴다.|'실패', note}`.

- **catalog (프레임 목록 만들기)**: 내 Figma 앱이 아니라 Figma 클라우드(`use_figma`)에서 만든다.
  1. `use_figma`로 그 파일의 페이지 목록(id · 이름)을 받는다. 이름이 구분선(`----` 등)인 페이지는 뺀다.
  2. 페이지마다 **병렬로** `use_figma`를 불러, 그 페이지의 최상위 프레임(페이지 · 섹션 바로 아래 FRAME · COMPONENT · COMPONENT_SET · INSTANCE)을 `[id, 이름, w, h, x, y]`로 받는다. ver · Description · Case-label · section title · SB_Section Divider · 진행상태-* · Frame NNN · Group NNN은 뺀다. 레이어 안쪽은 훑지 않는다.
  3. 작업의 `link`(없으면 project.json의 link)의 node-id가 있는 페이지를 `editablePageId`로 한다.
  4. `{fileKey, fileName, editablePageId, by:'Claude', pages:[{id, name, editable, frames}]}`를 UTF-8 파일로 만들어 `POST /api/catalog`.
- **capture (캡처 받기)**: `get_screenshot`(fileKey, nodeId, `maxDimension`은 **원본 크기**가 되게 프레임의 긴 변(max(w, h)), 단 8000을 넘으면 8000)으로 받은 PNG를(응답의 URL을 curl로 받는다) base64로 `{fileKey, nodeId, name, w, h(원본 크기), by:'Claude', png}` 파일에 담아 `POST /api/shots`. 서버가 `projects/{fileKey}/shots`와 `shots_meta.json`을 갱신한다.
- **guide (새 UX 문서 만들기 — 모든 카테고리)**: 작업의 `name`(이름) · `link`(기준 Figma 링크, `fileKey` · `nodeId`, **선택**) · `files`(올린 참고 파일 `[{path, name, size}]`, **선택**, `workbench/job_files/{작업 ID}/` 이 PC에만) · `text`(작업 방법) · `by`(요청자) · `docKind`(카테고리: `''` UX가이드 · `'rule'` 작업규칙 · `'policy'` 정책서 · `'data'` 기준데이터 · `'spec'` 화면 정의서)로 만든다. 링크와 참고 파일 중 하나 이상은 늘 있다. **Figma는 읽기만 한다**(수정 가능 페이지와 상관없다).
  1. 상태를 「진행 중」으로 바꾼다. 작업 방법이 모호해 무엇을 정리할지 정할 수 없으면 「보류」로 바꾸고 note에 질문을 남긴다.
  1-1. **참고 파일**(`files`)이 있으면 모두 읽는다: md · txt · csv · json · html은 Read, pdf · 이미지는 Read(pdf는 쪽 범위), docx · xlsx · pptx는 해당 스킬(docx · xlsx · pptx)이나 압축을 풀어 글을 읽는다. 링크가 없으면 참고 파일만으로 만들고(2 · 3 건너뜀, 이미지 캡처 없음, `fileKey` ''), 둘 다 있으면 참고 파일의 내용 · 구성을 기준으로 Figma 화면을 근거 · 캡처로 함께 쓴다. 파일 내용과 Figma가 어긋나면 작업 방법을 따르고 note에 적는다.
  2. 범위(링크가 있을 때): `nodeId`가 페이지면 그 페이지, 섹션 · 프레임이면 그 아래, 없으면 파일의 페이지 목록에서 작업 방법에 맞는 페이지를 고른다.
  3. (링크가 있을 때) `use_figma`로 구조(섹션 · 최상위 프레임 이름 · 크기), 화면 글(디스크립션 · 제목), 많이 쓴 컴포넌트(INSTANCE의 메인 컴포넌트 이름 빈도) · 색 · 글꼴을 읽는다. 한글이 많으면 `escape()`로 받거나 나눠 받는다(「주의」). 필요한 프레임만 `get_screenshot`으로 본다.
  4. `.history/guides/{id}/`에 쓴다(작업 이력과 함께 서버가 깃으로 모든 작업자에게 공유한다. Claude가 직접 커밋하지 않는다). id는 `g{YYYYMMDD}-{PC 이름 소문자}-{작업 ID}`(예: `g20261028-brex-06-J003`, 여러 PC의 작업 번호가 겹치지 않게). 카테고리마다 앞 글자가 다르다: UX가이드 `g` · 작업규칙 `r` · 정책서 `p` · 기준데이터 `d` · 화면 정의서 `s`(예: `s20261103-brex-06-J007`).
     - `guide.md`: `# 제목`, 소개 문단(보기 화면의 「개요」), 그다음 `## 대분류` › `### 상세 항목`으로 쓴다. 보기 화면은 왼쪽이 이 목차 트리, 오른쪽이 고른 항목의 내용이다(대분류를 고르면 그 소개와 하위 항목 카드). 기준 Figma에 목차가 있으면 그 구조를 그대로 따른다. 작업 방법을 따르고, 구성은 **CURECA UX 가이드(`g20261028-brex-06-J003`) 구조를 본보기**로 한다(지금 내용 `mdPath`를 열어 본다):
       - 맨 앞 「개요」: 무엇을 기준으로 정리했는지 한 문단 + 안내 인용(`>`) + `### 프레임 구성`(기준 문서 프레임 크기 · 구성 표).
       - `## 0. 문서 구성 (목차)`(+ `### CID 규칙`) 다음에 `## 1. …` ~ `## N. …` 대분류. 대분류마다 첫 문단은 한 줄 소개(대분류 화면 · 폴더 카드 위에 보인다).
       - `### {n}-{x}. 항목 이름` 상세 항목. 한 주제가 길면 `### 4-a. 이름 (1/4) · 소제목`처럼 나눈다(폴더 카드에서 「(1/4) · 앞」은 작은 글씨, 소제목이 큰 제목). 항목 첫 문장은 「…을 정의한다.」 한 문장(폴더 카드 설명).
       - 항목 안: 규칙 표 · 목록, Figma 캡처(`![…](images/…)` + `*설명*`), 컴포넌트 대분류는 맨 앞에 Figma 컴포넌트 항목.
       표는 마크다운 표로, 이미지는 `![설명](images/파일.png)`와 다음 줄 `*설명*`으로 넣는다. HTML 태그는 쓰지 않는다(글자로 보인다).
     - `images/`: `get_screenshot`(긴 변 1600 이하) 응답의 URL을 curl로 받아 저장한다. 대화에 base64로 넣지 않는다.
     - `meta.json`(UTF-8): `{id, kind(작업의 docKind: 'rule' · 'policy' · 'data' · 'spec', UX가이드는 빼거나 'guide'), title, summary(한두 문장), link, fileKey, fileName, scope(범위 페이지 · 섹션 이름 또는 「참고 파일」), frames(참고한 프레임 수), sources(참고 파일 이름 목록), by, request(작업 방법 원문), jobId, createdAt, updatedAt}`
     - 참고 파일 원본은 `.history`로 옮기지 않는다(이 PC에만). 「개요」에 무엇(파일 이름 · Figma 링크)을 기준으로 정리했는지 적는다.
  5. `POST /api/jobs {action:'update', id, status:'완료', guide:{가이드 id}, note:'섹션 N개 · 참고 프레임 M개 · 참고 파일 K개'}`. UX가이드는 UX 문서 「UX가이드」 탭 위쪽 목록에, 다른 카테고리는 그 탭(작업규칙 · 정책서 · 기준데이터 · 화면 정의서) 카드에 나타나고(모든 작업자), `UX_Guide.html?g={id}`에서 본다. 작업 기준으로 쓸지는 작업자가 각자 탭마다 「내 작업 기준」 선택 상자 + [적용]으로 정한다(카테고리마다 하나, 그 PC에만 적용, Claude가 정하지 않는다. `POST /api/guides {action:'apply', kind:'rule'|'policy'|'guide'|'data'|'spec', fileKey, guideId}`).
  6. **`Common_UX_Changelog.md`에는 쓰지 않는다** — UX 문서의 만듦 · 수정은 UX 문서 「변경이력」 탭에만 남는다(아래). 사용량은 `workbench/usage.ps1 -From {진행 중으로 바꾼 시각} -By {by} -Title "{카테고리 이름}: {제목}"`(맥 `usage.pl`)으로 남긴다.
- **UX 문서 · 카테고리(탭)**: 「UX 문서」 메뉴(`Common_UX_Guide.html`)는 탭 **작업규칙 | 정책서 | UX가이드 | 기준데이터 | 화면 정의서 | 변경이력**으로 나눈다(`?doc=rule|policy|guide|data|spec|log`, 없으면 작업규칙). 예전 「공통 규칙」 가이드는 UX가이드(`kind` 없음 = `guide`), 예전 「정의서」는 화면 정의서(`spec`)다. 예전 기본 「Common UX 작성 가이드」(`Common_UX_Guide.md` · `images/`)는 2026-11-03에 지웠다.
  - 문서는 모두 `.history/guides/{id}/`에 같은 형식으로 두고 `meta.json`의 `kind`로 나눈다. 만들기는 모두 위 guide 작업(탭의 「＋ 새 {카테고리} 만들기」, `docKind` → meta `kind`).
  - UX가이드 탭은 고른 가이드를 바로 보여 주고, 다른 카테고리 탭은 카드 목록이다. 어느 탭이든 위쪽 「내 작업 기준」 선택 + [적용](카테고리마다 하나).
  - **모든 카테고리 문서는 수정할 수 있다**(「UX 문서 · 쓰기」 권한자만): 보기 화면 항목의 [수정 요청](guide-edit) → Claude가 고친다. UX가이드 외 카테고리는 고치면 늘 「연관 항목 찾기」로 이어진다(아래 guide-check `scope:'spec'`).
  - **UX 문서의 수정 내용은 UX 문서 「변경이력」 탭에만 기록한다**: `Common_UX_Changelog.md` · 작업 이력(`/api/history`, 「변경 이력」 메뉴)에는 남기지 않는다. 기록은 문서 정보 그대로다 — 생성(meta `createdAt` · `request` · `scope`), 수정본(`rev/{rev}.json` {by, at, note, base, **req**(수정 요청 글), **jobId**}), 수정해야 할 화면 · 연관 항목(서버가 guide-check 작업을 바꿀 때마다 `rev/{revTo}.check-{PC}-{작업 ID}.json` {status, items, note …}로 남김, 깃 공유).
  - 「변경이력」 탭(UX가이드 보기처럼): 왼쪽은 카테고리(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서)별 생성 · 수정 · **직접 수정**(파일을 바꿔 넣은 것: `.history` 깃 기록 `GET /api/guides/gitlog` · 파일 글 `/api/guides/gitfile`, rev/ · meta.json 제외) 목록(최신순, `.history/guides/_log.json`의 `since` 이전 기록은 숨김 — 2026-11-04 이전 기록은 사용자 요청으로 지움), 오른쪽은 고른 기록의 수정 일자 · 누가 · 문서 ID · 수정본 · 수정 내용 · 수정 요청 · 바뀐 줄(이전 수정본과 비교) · 수정해야 할 화면 · 연관 항목(반영 여부)이다.
- **파일형 문서**(`meta.format:'files'`): 원본 md 파일들을 그대로 둔 문서다. **카테고리 폴더에 실제 파일을 바로 둔다**: 「CURECA 작업규칙」 = `.history/guides/rules/`(id `rules`, 룰 문서 13개 `change-flow.md` … `weekly-status.md` + `meta.json`, 헌법은 깃허브 원본처럼 `.history/guides/constitution.md` — meta.files에 `../constitution.md`로, 수정본은 `rev/{rev}/_up/constitution.md`). **`.history/guides/` 아래 경로 · 내용은 깃허브 원본 CURECA_AI 저장소와 같게 둔다**(옮기거나 링크를 바꾸지 않는다). 같은 방식으로 정책서 = `.history/guides/policy/`(id `policy`, `layout:'folders'` — 영역 폴더 `com` · `acc` … = 대분류, 정책 파일 = 항목, `README.md`는 개요, 맨 위 md · csv는 「기준 자료」 대분류), 기준데이터 = `.history/guides/glossary/`(id `glossary`, kind `data`, 파일 = 대분류), 화면 정의서 = `.history/guides/screens/`(id `screens`, kind `spec`, `view:'screens'` — 메뉴 폴더 · `_menu.md` · CID 파일). 세 폴더 모두 사용자가 둔 원본 그대로이고 `meta.json`만 더했다(2026-11-04).
  - 보기 화면 공통: 목록 · 내용 아래에 따로 「수정 요청」 입력창(지금 고른 항목 대상, guide-edit). 작업규칙(meta.kind rule, 또는 meta.whole:true)은 대분류(파일)를 누르면 그 아래 항목까지 한 화면에(목차에는 대분류만).
  - 보기: 파일 맨 위 머리말(`---` 사이 key: value)은 제목 아래 표로, CSV는 표로 보인다(`meta.titles`로 표 제목). 화면 정의서는 왼쪽 메뉴별 화면 목록(「임시 정책 포함」 · 「규칙 버전 기록 전」 표시), 오른쪽 화면 정보(작성자 · Service Mode · User Type · 공통 규칙 버전 · 임시 정책 · 관련 정책 · 짝 화면 · 부르는 화면 · Figma) · 반영 대기 목록(구분 거르기) · 설계 내용으로 보인다. 관련 정책 = 머리말 `policies` + 본문 「관련 정책:」 줄, 부르는 화면 = 「호출 위치:」 줄 + 본문에서 그 CID를 적은 다른 화면.
  - 원본 위치: `.history/guides/{id}/{meta.filesDir}/{파일}` — `filesDir`가 빈 값이면 문서 폴더 바로 아래(rules가 이것), 없으면 `files/`. `meta.files`가 파일과 순서. 수정본은 `rev/{시각}_{PC}/{파일}`(+ `rev/{시각}_{PC}.json`의 `file`). 파일마다 가장 최근 수정본이 지금 내용이고 `GET /api/guides`의 `fileList [{path, mdPath, rev}]`로 알 수 있다. `guide.md`는 없다.
  - 보기 화면은 파일 하나를 대분류 하나로(파일의 `#` → `##`, `##` → `###`로 한 칸씩 내려) 보이고, 항목 아래에 문서 경로(`.history/guides` 기준, 예: `rules/schedule.md`)를 보인다.
  - 만들기: guide 작업의 참고 파일이 md이고 「그대로 구성」 · 「파일로 관리」를 요청하면 파일형으로 만든다(파일 내용은 글자 하나 바꾸지 않고, `meta.format:'files'` · `files` · `filesDir`). 폴더 이름은 요청대로(작업규칙은 `rules`, 원본 저장소와 같은 이름).
  - 수정: guide-edit 작업에 `file`(고칠 파일)이 온다. 그 파일의 지금 내용만 고쳐 `POST /api/guides {action:'save', id, file, md:{그 파일 전체}, …}`로 저장한다(다른 파일은 그대로, 원본 파일은 고치지 않고 수정본으로 남긴다). guide-check의 `revFrom` · `revTo`는 그 파일의 수정본이고, 비교는 `rev/{rev}/{file}`(처음이면 원본)끼리 한다.
- **문서 수정본**(모든 카테고리): 고치면 `.history/guides/{id}/rev/{시각}_{PC}.md`(+ `.json` {by, at, note, base, req, jobId})로 남긴다(`POST /api/guides {action:'save', id, md, note, by, base, request, jobId}`). `guide.md`는 처음 만든 그대로 두고, 지금 내용은 가장 최근 수정본이다(`GET /api/guides`의 `mdPath` · `rev` · `revs`).
- **guide-edit (가이드 수정 요청)**: 사람이 보기 화면 항목의 [수정 요청]에 글로 적으면 쌓인다. 작업의 `guide`(가이드 id) · `name`(요청한 항목 제목) · `text`(무엇을 어떻게 고칠지) · `by`. **Figma는 고치지 않는다.**
  1. 「진행 중」으로 바꾼다. 지금 내용(`mdPath`, 파일형 문서는 작업의 `file` 하나의 `fileList[].mdPath`)을 읽고, `name` 항목을 중심으로 `text`대로 고친다. 요청과 관계없는 부분은 글자 하나 바꾸지 않는다. `##` › `###` 구조를 지킨다(「가이드 작성」 규칙과 같다).
  2. `POST /api/guides {action:'save', id, md, by:'Claude', note:'{항목}: {고친 내용 한 줄}', base:{지금 rev, 없으면 'guide.md'}, request:'{항목}: {작업의 text 그대로}', jobId:{작업 ID}}` → 응답의 `saved`가 새 수정본이다(`request` · `jobId`는 UX 문서 변경이력에 보인다).
  3. `POST /api/jobs {action:'update', id, status:'완료', revFrom:{base}, revTo:{saved}, note:'고친 내용 요약'}`. 보기 화면 위에 결과가 나오고, 그 가이드를 작업 기준으로 쓰는 사람에게는 「고칠 화면 찾기 요청」(guide-check)이 이어서 안내된다. 요청이 모호하면 고치지 말고 「보류」와 질문을 note에.
  4. `Common_UX_Changelog.md`에는 쓰지 않는다(UX 문서 「변경이력」에 수정본 · 요청 글로 남는다).
  5. **사용량**: 완료(또는 보류 · 실패)로 바꾼 뒤 `workbench/usage.ps1 -From {「진행 중」으로 바꾼 시각} -By {작업의 by} -Title "{카테고리 이름}: {항목 이름} ({작업 ID})"`(맥 `usage.pl`, 카테고리 이름 = 작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서)로 남긴다(「사용량 통계」 종류 「UX 문서」).
- **guide-check (가이드 수정 반영 · 고칠 화면 찾기)**: 가이드 수정(guide-edit)이 끝난 뒤 사람이 「고칠 화면 찾기 요청」을 누르면 쌓인다(그 가이드가 그 사람 PC의 작업 기준일 때만 안내된다). 작업의 `guide`(가이드 id) · `fileKey`(그 가이드가 작업 기준인 파일) · `revFrom` → `revTo`(바뀌기 전 · 뒤 수정본, `guide.md`면 처음 내용) · `text`(무엇을 고쳤는지). **Figma는 고치지 않는다.**
  1. 「진행 중」으로 바꾼다. `.history/guides/{guide}/` 아래 `revFrom` · `revTo` 내용을 비교해 바뀐 규칙을 정리한다.
  2. 그 파일의 **수정 가능 페이지**(project.json editablePageName)에서 바뀐 규칙이 적용되는 프레임을 찾는다. 작업 이력(`.history/entries`의 그 fileKey 요청) · 프레임 목록(catalog.json)으로 후보를 좁히고, `use_figma`로 실제 내용(글 · 크기 · 컴포넌트)을 읽어 바뀐 규칙과 다른지 확인한다.
  3. `POST /api/jobs {action:'update', id, status:'완료', items:[{nodeId, frame, page, change}], note:'후보 N개 중 M개 수정 필요'}`. `change`는 그 화면에서 무엇을 어떻게 고칠지 한두 문장. 고칠 화면이 없으면 `items: []`와 note에 이유. 판단이 어려우면 「보류」와 질문을 note에.
  4. 보기 화면에 「고쳐야 할 화면」 목록이 나오고, 사람이 반영할 화면을 골라 [선택한 화면 수정 요청]을 누르면 Workbench 수정 요청(type `UX가이드 반영`)으로 등록된다 → 평소 요청 처리 순서대로 반영한다. 작업은 「반영」(또는 「반영 안 함」)으로 바뀐다.
  5. **사용량**: 완료(또는 보류 · 실패)로 바꾼 뒤 `usage.ps1 -From {「진행 중」으로 바꾼 시각} -By {작업의 by} -Title "{고칠 화면 찾기|연관 항목 찾기}: {가이드 제목} ({작업 ID})"`로 남긴다(「사용량 통계」 종류 「연관 항목」). 아래 `scope:'spec'`도 같다.
  - **연관 항목 찾기(`scope:'spec'`, UX가이드 외 카테고리)**: 작업규칙 · 정책서 · 기준데이터 · 화면 정의서(`meta.kind`가 `guide`가 아닌 문서)를 고치면(guide-edit 완료) 작업 기준과 상관없이 늘 「연관 항목 찾기 요청」이 안내되고, 같은 guide-check 작업으로 쌓인다(`fileKey`는 그 문서의 기준 파일, 없으면 빈 값). **Figma · 문서는 고치지 않는다.** 위 1번처럼 바뀐 내용을 정리한 뒤 세 곳을 찾는다:
    - **화면**(`fileKey`가 있을 때): 그 파일 수정 가능 페이지에서 바뀐 정의와 다른 화면 → `{type:'screen', nodeId, frame, page, change}`
    - **문서**: 다른 UX 문서(모든 카테고리, `.history/guides/*/`의 지금 내용 `mdPath`)에서 같은 용어 · 값 · 규칙을 쓰는 항목 → `{type:'doc', doc:{가이드 id}, docTitle, section:{### 항목 제목 그대로}, change}`
    - **프로토타입**: `prototypes/*/meta.json`에서 그 화면 · 내용을 쓰는 프로토타입 → `{type:'proto', proto:{id}, name, fileKey, nodeId, frame, change}`
    - `POST /api/jobs {action:'update', id, status:'완료', items:[…], note:'화면 N · 문서 M · 프로토타입 K'}`. 사람이 고르면 화면은 Workbench 수정 요청(type `{카테고리 이름} 반영`, 예: `화면 정의서 반영`), 문서는 그 문서의 guide-edit(이름 = section), 프로토타입은 prototype-edit으로 등록된다 → 평소 순서대로 처리한다.
- **text (글 수정, 플러그인 몫)**: Claude가 Pretendard처럼 `use_figma`에서 못 불러오는 폰트의 글을 바꿀 때 만든다. 감시(`JOBS`)에는 나오지 않는다.
  1. `use_figma`로 바꿀 TEXT 레이어 id와 지금 글을 읽는다. 수정 가능 페이지의 레이어만 된다(플러그인이 다른 페이지는 거부한다).
  2. `POST /api/jobs {action:'add', kind:'text', fileKey, nodeId:{프레임 id}, name:{프레임 이름}, text:{무엇을 바꾸는지 한 줄}, by:'Claude', items:[{nodeId:{TEXT id}, find:{바꿀 부분}, replace:{새 글}}]}` (UTF-8 파일로). `find`가 있으면 그 부분만 바꿔 앞뒤 스타일을 지키고, 비우면 글 전체를 `replace`로 바꾼다.
     - **폰트 바꾸기**: 항목을 `{nodeId:{TEXT · 프레임 · 섹션 id}, fontFamily:'Pretendard'}`로 주면 그 아래 글(인스턴스 안은 원본을 따르므로 제외)의 글꼴을 바꾸고 굵기 이름을 맞춘다(Semi Bold → SemiBold). 새로 만든 글은 Inter로 만든 뒤 이렇게 Pretendard로 바꾼다.
  3. 작업이 끝날 때까지 기다린다(Monitor로 `GET /api/jobs?kind=text`의 그 id가 「완료」 · 「실패」가 될 때까지, 최대 2분). 플러그인이 3초마다 가져가 「진행 중」 → 「완료」(일부 실패면 「실패」)로 바꾸고, `items`에 항목별 `result`(`ok` · `already` 이미 바뀜 · `fail` + `error`)와 쓴 폰트를 남긴다.
  4. 「완료」면 `use_figma`로 글이 바뀌었는지 확인한다. 실패한 항목은 위 「범위」의 Noto Sans KR 방식으로 처리한다.
- **프로토타입 (이 PC에만, `prototypes/{id}/`, 깃으로 공유하지 않음)**: 「프로토타입」 메뉴(`Prototypes.html`)에서 화면을 골라 요청하면 쌓인다. **Figma는 읽기만 한다**(보기 전용 페이지 화면도 된다). 보기는 `Prototype.html?id={id}`.
  - **만드는 규칙(동작형 HTML)**
    - `meta.json`: `{id, name, fileKey, fileName, env(T-IOS|L-IOS), start(시작 nodeId), frames:[{nodeId, name, page}], text(흐름 설명), entry:'index.html', format:'screens', width, height, by, jobId, createdAt, updatedAt, syncedAt}`. `syncedAt`은 Figma와 맞춘 시각(이보다 늦은 캡처 · 다른 작업자 완료 요청이 있는 화면을 서버가 「갱신 필요」로 본다).
    - **화면마다 파일 하나**: `screens/{nodeId의 :를 -로}.html`(그 화면 본문 HTML 조각). `index.html`은 껍데기(공통 틀 GNB · LNB, 화면 불러오기, 이동 함수 `go(nodeId)`, 팝업 · 토스트)만. 고칠 때는 그 화면 파일만 읽고 고친다(토큰 절약).
    - **공통 컴포넌트**: `prototypes/_kit/kit.css` · `kit.js`(작업 기준 가이드의 COMM-5 컴포넌트를 클래스로, 예: `.c-btn[data-style=filled][data-size=m]`, 색 · 글꼴은 가이드 · Figma 컴포넌트와 같게). 없으면 처음 만들 때 만들고, 필요한 컴포넌트만 더한다. 화면 파일은 이 클래스를 쓴다.
    - **보기 화면과의 약속**: `index.html#s={nodeId의 :를 -로}`면 그 화면으로 연다(없으면 start). 화면이 바뀔 때마다 `parent.postMessage({type:'proto-screen', nodeId, width, height}, '*')`.
    - 글 · 데이터는 Figma 화면 그대로, 동작은 `text`(흐름 설명)와 화면 디스크립션을 따른다. 정의가 없는 동작은 만들지 말고 note에 적는다. 글꼴은 Pretendard(웹 CDN).
  - **prototype (만들기)**: 작업의 `name` · `fileKey` · `frames` · `start` · `env` · `text`.
    1. 「진행 중」으로. id는 `p{YYYYMMDD}-{작업 ID 소문자}`(예: `p20261030-j013`).
    2. 화면마다 `get_design_context`(또는 `use_figma`로 구조 · 글 · 크기 · 색)와 `get_screenshot`으로 읽고, 위 규칙대로 `prototypes/{id}/`에 만든다. 화면이 많으면 공통 틀 · kit를 먼저, 화면은 하나씩.
    3. 브라우저(미리보기)로 `Prototype.html?id={id}`를 열어 시작 화면 · 흐름 이동이 되는지 확인한다.
    4. `meta.json`(syncedAt · updatedAt = 지금, jobId) → `POST /api/jobs {action:'update', id, status:'완료', proto:{id}, note:'화면 N개 · 동작: …'}`. 사용량은 `usage.ps1 -Title "프로토타입: {name}"`.
  - **prototype-edit (수정 요청)**: 작업의 `proto` · `text` · `frames`(그때 보던 화면). 관계있는 화면 파일(필요하면 kit · index)만 고친다. `updatedAt` 갱신 → 「완료」. Figma는 고치지 않는다(Figma도 바꿔야 하면 note에 Workbench 요청을 안내).
  - **prototype-sync (Figma 맞추기)**: 작업의 `frames`(또는 `GET /api/prototypes`의 그 프로토타입 `stale`) 화면을 Figma에서 다시 읽어 그 화면 파일만 맞춘다. `syncedAt` · `updatedAt` = 지금 → 「완료」, note에 맞춘 화면. 사용량 `-Title "프로토타입 맞추기: {name}"`.
  - 예전 한 파일 프로토타입(`format:'single'`, 예: `assay-pack`)은 그 파일 안에서 고친다. 크게 고칠 일이 생기면 화면별 파일로 옮겨도 된다.
- 캡처 작업은 만들어진 지 20초가 지나야 `JOBS`에 나온다. 그 전에 Figma 플러그인이 켜져 있고 그 프레임이 열린 페이지에 있으면 플러그인이 먼저 받는다.

## 캡처

- 수정 요청을 반영한 뒤에는 그 프레임을 위 capture 방식으로 다시 받는다.
- 한꺼번에 많이 받지 않는다. Workbench에서 본 프레임만 「캡처 받기」로 쌓인다.
- **자동 캡처(플러그인 몫)**: Workbench에서 구분(페이지)을 열면 그 페이지에서 캡처 없는 프레임을 Figma 플러그인에게 맡긴다(작업 `capture` + `auto:true`, 지금 보는 화면 먼저, 늘 10개 안팎을 쌓아 두어 쉬지 않고 이어 받음, 플러그인이 60초 안에 서버에 닿았을 때만, 왼쪽 「자동 캡처」 체크로 끔). 플러그인은 다른 페이지 프레임도 받고(그 페이지를 처음 한 번 불러올 때만 오래 걸림 — 작업 note에 「불러오는 중」), Figma에서 편집 중(3초 안)이면 멈췄다가 잇는다. 「진행 중」으로 3분 넘게 멈춘 자동 캡처는 Workbench가 다시 「대기」로 돌린다. **감시는 `auto` 캡처를 `JOBS`에 내지 않는다** — Claude는 자동 캡처를 받지 않는다(수십 장을 Claude가 찍으면 느리고 토큰을 쓴다). 끝난 캡처 작업은 서버가 최근 30개만 남긴다.
- Figma에서 **Common UX Sync** 플러그인을 켜 둔 사람이 작업 페이지를 고치면 그 프레임 캡처가 자동으로 들어온다(JPG, by가 「이름 (Figma)」).

## 주의

- PowerShell로 json · js를 쓸 때는 `[IO.File]::WriteAllText(path, text, (New-Object Text.UTF8Encoding $false))`. `Get-Content`/`Set-Content` 기본 인코딩은 한글을 깨뜨린다.
- `use_figma` 결과로 한글이 많은 텍스트를 그대로 돌려받으면 응답이 잘린다. U+2028(줄 구분자)가 섞인 텍스트는 파싱 오류가 나므로 `split(String.fromCharCode(0x2028))`로 바꿔서 돌려받는다.
- 화면 디스크립션은 프레임 안 「Frame 1」 패널의 행(Description 인스턴스)이다. 화면 이동은 `[화면 ID] 화면명` 형식으로 적는다.
- 공통 UX 규칙(COMM-*) · 화면 정의는 이 PC 작업자가 그 파일에 카테고리마다 적용한 문서(`GET /api/guides`의 `applied[fileKey].docs`, 작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서 각 하나)만 기준으로 한다. 적용하지 않은 문서는 보지 않는다. 기본 문서는 없다.
