# 프로그램 구조 · 배포 (이 폴더에서 프로그램을 고치거나 배포할 때)

> 이 문서는 `CLAUDE.md`에서 나눈 것이다. `CLAUDE.md`의 범위 · 공통 규칙(팀 · 중복 처리 금지 · 사용량 · UTF-8 전송 · 주의)을 함께 따른다. 다른 종류의 일이 이어지면 `CLAUDE.md` 「작업별 문서」 표의 그 문서를 읽는다.

## 백그라운드 감시 (에이전트)

- **백그라운드 감시(기본)**: 서버가 켜진 지 5초 뒤 `workbench/agent.ps1`(맥 `agent.pl`)을 **창 없이** 띄운다(시작 안내 5단계(CLI) 체크박스, `setup.autoWatch`가 false면 안 함, 시작 · 중지 버튼도 5단계 CLI). 에이전트는 처리할 것이 생길 때 Claude Code CLI를 띄우고 **한 차례를 마치면 닫는다**(다음 요청은 새 세션 — 세션을 계속 두면 매 API 호출마다 앞 요청 대화를 다시 읽어 토큰의 98%가 그것이었다, 2026-11-06)(`claude -p --input-format stream-json --output-format stream-json`, `--permission-mode acceptEdits`, 허용 도구 Bash · 파일 · Skill · Agent(하위 에이전트) · Figma MCP). `watch_requests`를 1분씩 반복해 돌리고, `PENDING` · `RESUME` · `JOBS`가 나오면 그 결과를 떠 있는 세션에 메시지로 보낸다. 받은 Claude는 이 문서 규칙대로 그 항목만 처리하고 차례를 끝낸다(감시 재실행 · 사용 한도 표시는 하지 않고, 묻지 말고 모호하면 「보류」, 앞서 처리한 요청과 섞지 않고 상태를 다시 읽는다).
  - 한 차례 안에서 컨텍스트가 80%를 넘으면 CLI가 스스로 압축한다(`CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=80`). 세션이 죽거나 한 요청에서 Claude 출력이 20분 넘게 없으면(멈춤) 새로 띄운다 — 출력이 이어지는 한 오래 걸리는 단계 작업은 끊지 않는다(2026-11-12).
  - Claude Code는 PATH의 `claude`, 없으면 Claude 데스크톱 앱에 들어 있는 것(윈도우 `%LOCALAPPDATA%\Claude-Data\claude_*\claude-code\{버전}\…\claude.exe`, 맥 `~/Library/Application Support/Claude/claude-code/{버전}/{해시}/claude.app/Contents/MacOS/claude`. 못 찾으면 시작 안내 5단계(CLI)에 경로를 직접 넣는다). CLI는 데스크톱 앱 로그인과 별개라 처음 한 번 시작 안내 5단계(CLI) 「Claude 로그인 · Figma 연결」(Claude Code 창에서 `/login`, `/mcp` → figma 인증)이 필요하다. 서버가 그때 Figma MCP(`https://mcp.figma.com/mcp`)를 CLI에 등록해 둔다.
  - 상태 `workbench/.agent.json` {at, host, pid, status: idle|working|login|figma|error|stopped, msg}, 중지 신호 `.agent_stop`(처리 중이면 마친 뒤 멈춤), 세션 새로 띄우기 신호 `.agent_renew`(5단계 CLI 「Claude 로그인 · Figma 연결」 창을 열 때 서버가 씀. 로그인 · Figma 연결 전에 뜬 세션을 버린다), 기록 `.agent.log`. 같은 감시 결과가 3번 연달아 처리되지 않으면 10분 쉰다. 백그라운드 감시가 동작 중이면 Workbench 탭을 모두 닫아도 서버가 꺼지지 않는다(에이전트가 API를 써야 한다). 자동 시작은 시작 안내 「완료」와 상관없이 `autoWatch`만 본다. **준비 확인**: 세션을 띄우기 전에 `claude auth status`(로그인) · `claude mcp list`(figma 줄이 Connected)를 확인하고, 안 되어 있으면 요청을 보내지 않고 상태 `login` · `figma`로 이유를 5단계 CLI에 보인다(2분마다 · 연결 창을 열면 바로 다시 확인). **사용 한도**: CLI가 차례마다 보내는 `rate_limit_event`와, 요청이 없어도 **5분마다** 아주 짧은 질문(haiku · 도구 없음 · 짧은 시스템 프롬프트, 임시 폴더에서, 한 번에 약 850토큰)을 보내 돌아오는 `rate_limit_event`로 에이전트가 `.plan_usage.json`을 쓴다(백그라운드만 쓰는 PC도 상단 메뉴 한도가 계속 갱신된다). 예전의 `claude -p /usage` 글 읽기는 Claude Code 2.1.3xx부터 사용률 %가 나오지 않아 11-05부터 멈췄다(2026-11-13 바꿈).

## 탭 닫힘 · 절전

- 서버는 Workbench 탭이 모두 닫히면 스스로 꺼진다: 탭이 20초마다 `/api/alive`, 150초 동안 신호가 없는 탭은 닫힌 것, 마지막 탭이 닫히고 3초 뒤(백그라운드 감시가 돌면 끄지 않음, `background.js` idleCheck).
- **절전에서 깨어남**(2026-11-13): 1초마다 도는 확인 사이가 30초 넘게 벌어지면 PC가 멈췄다가 깨어난 것으로 보고, 탭 신호 시각을 지금으로 돌린다(깨어나자마자 「탭이 모두 닫힘」으로 꺼지던 것). 멈춘 「진행 중」 되돌리기도 2분 미룬다. 서버 기록에 「절전에서 깨어남(n초 멈춤)」.
- 화면(appnav.js): 신호가 두 번 연달아 실패하면 화면 아래 「서버에 연결되지 않습니다」 + [다시 연결]을 띄우고 5초마다 다시 해 본다. 되면 저절로 닫힌다. 탭이 다시 보이거나 · 창에 돌아오거나 · 네트워크가 돌아오면 바로 신호를 보낸다. 서버가 이미 꺼졌으면 브라우저가 띄울 수 없으니 Figma AI Run을 다시 실행해야 한다.

## 버전 · 배포 (자동 업데이트)

- 지금 버전은 `VERSION`(예: `0.1.0`). 상단 메뉴에 `v0.1.0`으로 보인다.
- 작업자 PC는 Figma AI Run을 실행할 때마다 `workbench/git_remote.txt` 저장소의 **`release` 브랜치**를 확인해, 새 버전이면 프로그램 파일만 바꾼다(`workbench/update.ps1` · `update.sh`).
  - 개인 데이터(`workbench/edit_requests.json` · `jobs.json`, `projects/`, `.claude/`)는 이미 있으면 그대로 둔다.
  - 깃 작업 폴더(개발용 clone, 이 폴더)는 자동 업데이트하지 않는다.
- **배포는 사용자가 「배포해줘」(버전 포함)라고 할 때만** 한다. 「배포해줘」는 **develop 커밋 · 푸시까지 포함한 요청**이다(develop이 먼저, 배포본은 그 커밋으로 만든다).
  1. **`RELEASE_NOTES.md`**(Workbench 릴리즈 노트) 에 `### v{버전} · 날짜 · 요약` 항목을 쓰고(미배포 항목은 「v{버전}에 포함」으로), `VERSION`을 `{버전}`으로 고친다. 프로그램 변경은 `Common_UX_Changelog.md`(Figma 화면 수정 이력)에 쓰지 않는다.
     - 릴리즈 노트는 **가운데 자리마다 하나로 묶는다**(2026-11-10): `## v0.17 · 기간 · 요약` 아래에 `### v0.17.0` … `### v0.17.7`(최신이 위). 같은 묶음이면 그 묶음 맨 위에 `###` 항목을 더하고 묶음 제목 · 맨 위 표(묶음 · 기간 · 버전 · 주요 내용)의 기간 · 버전을 늘린다. 가운데 자리가 바뀌면(0.17.x → 0.18.0) 맨 위에 새 `## v0.18` 묶음과 표 줄을 만든다(묶음 요약 = x.y.0 요약).
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
- 고르는 메뉴 키: `plan` 일정/작업(`Work.html`, 상단 메뉴에서 시작 안내 다음. 하위 탭: 일정 · 주간 진행 현황 · 화면설계서 작업대기 · 회의록 · 논의 대상 · 작업 기록(2026-11-12 새 흐름, 예전 「임시 정책 · 논의·결정」을 대신함) — 일정 · 주간 진행 현황은 구글 시트 연결(아래 「일정/작업 · 구글 시트」), 나머지는 세부가 정해지는 대로) · `guide` UX 문서(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서 · 변경이력, + 문서 보기 `UX_Guide.html`) · `workbench` · `history` 변경 이력 · `usage` 사용량 통계 · `proto` 프로토타입(+ `prototypes/`). 허용되지 않은 페이지는 첫 허용 메뉴로, API(`/api/usage` · `/api/prototypes` · `/api/accounts` · `/api/sheet`)는 403.
- **메뉴마다 읽기 · 쓰기**(v0.10.1): 계정의 `menus`가 읽기(보기만), `writes`가 쓰기(수정 요청 등 바꾸기도. 읽기 메뉴 안에서만). 계정 관리에서 메뉴마다 「없음 · 읽기 · 쓰기」로 고른다(사용량 통계는 쓰기 없음).
  - 쓰기로 되는 것: 일정/작업 = 일정(구글 시트) 칸 수정 · 시트 연결(`POST /api/sheet`) · UX 문서 = 새 가이드 · 정의서 만들기, 항목 수정 요청, 연관 항목 찾기 · 반영 요청(jobs `guide` · `guide-edit` · `guide-check`, guides `save`, `/api/upload`) · Workbench = 수정 요청 등록 · 답하기 · 다시 진행 · 지우기, 캡처 · 목록 요청, 프로젝트 추가 · 작업 페이지 바꾸기(`/api/requests` · `/api/attach` · `/api/projects` · `/api/catalog` · `/api/shots`, jobs `capture` · `catalog`) · 변경 이력 = 다시 진행 · 답하기(`/api/requests`) · 프로토타입 = 만들기 · 수정 요청 · 맞추기 · 지우기(jobs `prototype*`, `/api/prototypes`). `/api/requests`는 Workbench · 변경 이력 · UX 문서(반영 요청) 쓰기 중 하나면 된다.
  - 읽기만이면 화면에 「보기 전용」 표시, 바꾸는 버튼(`.w-only`)이 숨고(`html.perm-ro`, appnav.js), 서버가 그 POST를 403 · 오류로 막는다.
  - `writes`가 없는 예전 계정은 고른 메뉴 모두 쓰기(UX 문서만 예전 `guideEdit`이 있을 때). 최고관리자는 전부 쓰기. `/api/me`의 `writes`.
- **승인 권한**(메뉴 권한과 따로, v0.12.0): 계정의 `approves`. 계정 관리 「승인 권한」에서 항목마다 체크한다. 항목 목록은 서버의 승인 항목 목록(Node `core.js` · 예전 서버 `$Approvals` · 맥 `@APPROVALS`). **새 흐름(2026-11-12)에서 임시 정책(PV)을 없애 Node 서버의 목록은 비어 있고(`pv` 빠짐), 승인할 것이 없으면 계정 관리에 「승인 권한」이 보이지 않는다.** 논의 대상의 결정은 정한 사람(내부 · 고객)이 하고, 반영은 [확인 · 반영](plan `answer-apply`)으로 한다(헌법 4조). 승인할 것이 다시 생기면 목록에 한 줄 더하고 그 버튼 · 서버에서 `canApprove`로 확인한다.
- **보안(2026-11-13 점검)**: 정적 파일은 경로를 한 모양(`` → `/`, 겹친 `/` 정리, 대소문자 무시)으로 맞춘 뒤 `.git` · `.claude` · `.history/accounts` · `.history/config` · `.history/teams/*/config`를 막는다(끝의 점 · 공백, `:` 붙은 칸도 404). 응답에 `Access-Control-Allow-Origin: *`를 붙이지 않는다(Figma 플러그인 Origin `null`에만 `null`) — 다른 사이트가 로그인한 PC의 API를 읽지 못한다. 마크다운(UX 문서 · 회의록 · Claude 답)은 `WB.safeHtml`(common.js, marked에 `WB.guardMarked()`로 연결)로 스크립트 · on… 속성 · `javascript:` 주소를 걸러 넣는다. 새로 marked를 쓰는 화면은 `marked.min.js` 다음 줄에 `<script>WB.guardMarked()</script>`를 둔다.
- **작업 이력 동기화 충돌**: 두 PC가 같은 `.history` 파일을 고쳐 받기(rebase)가 충돌하면 커밋 시각이 늦은 쪽(나중에 저장한 쪽)으로 맞춘다(`-X theirs/ours`). 진 쪽 내용은 깃 기록에 남고, 어느 파일이었는지 `.history/conflicts/{PC}.log`에 적는다(`history_sync.ps1` · `.sh`).
- 권한 검사는 **브라우저 페이지에서 온 요청만**(`Sec-Fetch-Site` 머리글, Origin이 `null`이 아님). **Claude(curl) · Figma 플러그인은 로그인 없이 그대로** 쓴다. Claude는 계정 파일을 직접 고치지 않는다(사용자가 요청하면 화면 · API로).
- 작업자 이름(요청 · 이력의 작성자, Workbench 「작업자」 칸 · 시작 안내 1단계)은 로그인한 계정 이름으로 고정된다.
- 서버 API: `GET /api/me`, `POST /api/login` · `/api/logout` · `/api/me/password {current, next}` · `/api/me/team {team}`, `GET/POST /api/accounts {action: add|update|delete|team-add|team-update|team-delete}`(최고관리자).

## 팀 · 구현

경로 표와 「Claude가 요청 · 작업을 처리할 때」는 `CLAUDE.md` 「팀」에 있다.

- 같은 회사 안의 업무 구분이다. **일정/작업 · UX 문서 · 변경 이력 · 사용량 통계**를 팀 단위로 쓴다(`$TeamMenus` · 맥 `@TEAM_MENUS`). Workbench · 프로토타입은 PC마다라 팀과 상관없다. 팀끼리 서로 못 보게 막는 것은 화면 · 서버 권한 수준이다(모든 팀 데이터가 같은 `history` 브랜치로 모든 PC에 내려온다).
- 팀 목록 = `.history/config/teams.json` `{items:[{id, name, legacy, createdAt, by, color}]}`(깃 공유, 웹으로 내보내지 않음. `color` 0~7 = 계정 관리 팀 칩 색, 팀을 만들 때 서버가 다른 팀이 쓰지 않는 첫 색을 정한다). 파일이 없으면 **CURECA**(`cureca`) 하나로 본다. 「기본 팀」은 없다. 최고관리자만 계정 관리 「팀」에서 추가 · 이름 바꾸기 · 지우기(지금까지의 데이터가 있는 팀 · 계정이 있는 팀 · `.history/teams/{id}`에 데이터가 있는 팀은 못 지움).
- 서버는 요청마다 팀을 정한다: 화면 = 이 PC에서 고른 팀, Claude · curl = `?team={id}`(없으면 이 PC에서 고른 팀). 그 팀으로 `/api/guides` · `/api/minutes` · `/api/sheet*` · `/api/plan/files` · `/api/guides/gitlog|gitfile` · `/api/history`(GET, `?all=1`이면 모든 팀 — Workbench 겹침 표시) · `/api/usage`가 바뀐다. 화면이 `.history/guides/…` · `.history/minutes/…`를 읽으면 서버가 그 팀 위치로 바꿔 준다. 남의 팀 폴더(`/.history/teams/{남의 팀}/`) · 팀 시트 비밀값은 내보내지 않는다.
- 새 요청(`/api/requests` add) · 작업(`/api/jobs` add) · 이력(`/api/history` add)에는 그때 팀이 `team`으로 붙는다(본문에 `team`을 주면 그것). 요청이 끝나면 `usage.ps1 -ReqId`가 요청의 팀으로 사용량을 남긴다.
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
- 주간 진행 현황(월~일, ‹ › 주 이동): 마감 = 작업 완료일이 그 주인 줄. 업무 상태 = 상태 열, 없으면 UX 완료 · UI 완료(또는 작업필요X)면 완료, UX만 완료면 진행 중, 그 밖에는 UX 상태. 개발사 공유 대상(공유일 열이 있을 때) · 정책 변동(정책서 `date`가 그 주 = 신규, 수정본이 그 주 = 변경, 논의 대상 `discussions/DS-*`(예전: 임시 정책 `provisional/PV-*.md` 승인 대기) · 주요 내용 · 영역별 신규 정책 · 회의 내역(회의록 탭에서 날짜가 그 주인 줄, 여러 개면 넘겨 보기) · 차주 일정.

## 작업 이력 공유 (깃)

- 작업 이력은 `.history/`(한 건 한 파일: `entries/{PC}_{요청 ID}.json`, `shots/`, 토큰 사용량 `usage/{PC}_{요청 ID}.json`, UX 가이드 `guides/{id}/`(수정본 `rev/`). 작업 기준 가이드 선택은 PC마다 따로라 공유하지 않는다)에 쌓이고, 서버가 `workbench/git_remote.txt`의 저장소(모든 PC가 같은 하나, 지금은 `PJ-CRC/CURECA_UX`, 2026-11-03 `sh94-hub/UX_AI_TEST`에서 옮김) **`history` 브랜치**로 받고 올린다(`workbench/history_sync.ps1` · `.sh`를 서버가 반복 실행: 이력이 생기면 바로, 그 밖에는 5초마다 확인).
- `.history`는 작업 폴더 저장소와 별개다. Claude가 `.history`를 직접 커밋 · 푸시하지 않는다. 작업 폴더의 코드 커밋 · 푸시는 지금처럼 사용자가 요청할 때만 한다.
- 다른 작업자의 이력은 「변경 이력」 페이지(작업 이력 (공유))에서 본다.
