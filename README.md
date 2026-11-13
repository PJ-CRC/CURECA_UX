# UX_AI_TEST
figma ai test

Figma 파일을 프로젝트 단위로 다루는 Workbench(수정 요청 · Claude 반영 · 캡처 · 작업 이력 · UX 문서 · 프로토타입). 작업할 파일은 PC마다 시작 안내 3단계 링크로 정한다(기본 프로젝트 없음).

- **액션별 동작 흐름**(화면설계 케이스 1 · 2 · 3을 요청하면 · 회의록을 정리하면 · 논의 대상을 결정하면 …): [docs/Action_Flows.md](docs/Action_Flows.md)

## 브랜치 안내

<!-- branch-line -->> **이 브랜치: `develop`** — 개발 코드. 기능 수정 · 추가는 여기서 한다.

| 브랜치 | 용도 | 올리는 사람 |
|---|---|---|
| `main` | 기준 코드(안정판) | 개발자 |
| `develop` | 개발 코드. 기능 수정 · 추가 | 개발자 |
| `release` | 배포본. 작업자 PC가 `Figma AI Run`을 실행할 때마다 이 브랜치의 버전을 확인해 자동 업데이트한다. 버전마다 태그 `v{버전}` | 개발자(`tools/release.ps1 -Publish`) |
| `history` | 작업 이력 공유: 요청 이력 · 캡처 · 토큰 사용량 · UX 가이드 · 계정(`.history/`). 모든 작업자 PC의 서버가 자동으로 받고 올린다 | 모든 작업자(서버 자동) |

- 저장소 오너는 소유 · 관리만 한다. `main` · `develop` · `release`와 `v*` 태그는 저장소 규칙(Rulesets)으로 막고, 개발 PC의 Deploy key만 올릴 수 있다.
- 일반 작업자는 프로그램이 `history`만 올린다. Workbench에서 변경 이력 · 공통 가이드를 보고, 업데이트는 `release`에서 자동으로 받는다.
- PC마다 따로인 데이터(수정 요청 목록 · 작업 대기열 · Workbench 캡처 · 다른 프로젝트 · 프로토타입)는 저장소에 올리지 않는다(`.gitignore`).

실행: 윈도우는 `Figma AI Run.bat`(처음 한 번 실행하면 설치 폴더 · 바탕 화면에 아이콘 붙은 「Figma AI Run」 바로가기가 생긴다), 맥은 `Figma AI Run.app`. 아이콘 원본은 `tools/app_icon/`.

화면 파일(`*.html`)과 화면이 함께 쓰는 `appnav.js` · `appnav.css` · `common.js`는 **`pages/`** 폴더에 있다. 주소는 폴더 이름 없이 그대로다(`http://localhost:8765/Work.html`).

| 파일 | 내용 |
|---|---|
| `Common_UX_Guide.html` | 「UX 문서」 메뉴: 공통 규칙(만든 UX 가이드) · 정의서 탭. 가이드 내용은 `.history/guides/`(history 브랜치) |
| `Common_UX_Changelog.md` | Figma 화면 수정 이력 |
| `RELEASE_NOTES.md` | Workbench(Figma AI Run) 버전별 릴리즈 노트 (release 브랜치 · 설치 압축에도 들어감) |
| `docs/Architecture_and_Resources.md` | 동작 구조, 수정 방식별 흐름, 캡처 방식, 사용 리소스와 비용, 수정자 확인 방법 |
| `Setup.html` | 첫 실행 시작 안내. 처음 열면 Claude · Figma 실행, 기본 작업 링크, git 설치 또는 깃허브 연결을 자동으로 시작. 작업 링크 · 플러그인 · Figma 연결 · 요청 감시 · 작업 이력 공유까지 6단계로 안내(Figma 연결 = 토큰 또는 플러그인, Claude 연결 = 앱 또는 CLI)하고 상태를 자동 확인 |
| `docs/Workbench_Setup_Other_PC.md` | 다른 PC · 본인 Figma · Claude 계정으로 Workbench를 실행하고 요청을 처리하는 준비 절차 |
| `CLAUDE.md` | Claude Code가 이 폴더에서 따르는 작업 규칙 (범위, 요청 처리 순서, 캡처 갱신) |
| `Prototypes.html` · `Prototype.html` | 프로토타입 목록 · 만들기(화면 고르기) · 보기. Claude가 만든 동작형 HTML 프로토타입이 이 PC의 `prototypes/{id}/`에 쌓인다(예시: `prototypes/assay-pack`, Assay Pack Setting T-IOS 2.0). |
| `Login.html` · `Account.html` · `Accounts.html` | 로그인 · 내 정보(비밀번호 변경) · 계정 관리(최고관리자). 계정은 `.history/accounts/{id}.json`(비밀번호는 해시)으로 깃을 통해 모든 PC에 공유되고, 계정마다 쓸 수 있는 메뉴를 정한다 |
| `Change_History.html` | 변경 이력: 모든 작업자의 작업 이력(깃 공유) · 이 PC 수정 요청을 최신순으로 표시. 10개씩 페이지네이션, 종류 필터, [깃 동기화] |
| `workbench/history_sync.ps1` · `.sh` | 작업 이력(`.history/`)을 깃 `history` 브랜치로 받고 올림. 서버가 뒤에서 실행 |
| `workbench/agent.ps1` · `.pl` | 백그라운드 Claude 에이전트: 창 없이 요청을 감시하고, 요청 · 작업이 생기면 **계속 떠 있는** Claude Code CLI 세션(`claude -p` stream-json)에 보내 CLAUDE.md 규칙대로 처리. 컨텍스트 80%면 자동 압축, 30분 쉬면 세션 새로. Figma AI Run 실행 때 서버가 자동으로 띄움(시작 안내 5단계(CLI)에서 시작 · 중지, 처음 한 번 CLI 로그인 · Figma 연결). 상태 `.agent.json`, 기록 `.agent.log` |
| `Usage_Stats.html` | 사용량 통계: 작업마다 Claude가 쓴 토큰(입력 · 캐시 쓰기 · 캐시 읽기 · 출력)과 금액 환산을 작업자별 · 작업별로 표시. 기간 · 작업자 필터 |
| `workbench/usage.ps1` · `.pl` · `pricing.json` | 요청 하나의 사용량을 Claude Code 대화 기록에서 더해 `.history/usage/`에 남김(요청 완료 때 서버가 실행). 금액은 `pricing.json` 단가로 환산 |
| `Figma_Workbench.html` · `workbench/` | 작업 페이지(작업 링크의 페이지). 왼쪽 depth 메뉴 · Claude 답변, 오른쪽 캡처와 그 아래 수정 요청 입력 (아래 사용법) |
| `guide_server.ps1`(윈도우) · `guide_server_mac.pl`(맥) · `Figma AI Run.bat` · `Figma AI Run.app` · `figma_plugin/` | 로컬 서버 · 실행 파일 · Figma 플러그인(Claude · Workbench 연동, 아래 「Figma 플러그인」) |

---

# Figma Workbench

`Figma AI Run`(윈도우 `.bat`, 맥 `.app` · 둘 다 추가 설치 없음)을 실행하면 가이드가 열린다. 상단 메뉴의 **Figma Workbench**를 누르거나 `http://localhost:8765/Figma_Workbench.html`로 간다. 상단 「작업자」에 이름을 넣어 두면 요청과 작업 이력에 남는다.

- 상단 메뉴(시작 안내 · 가이드 · Workbench · 변경 이력 · 프로토타입)는 모든 페이지에서 같은 위치에 고정된다(`appnav.css`). 작업할 Figma 파일 · 페이지는 **시작 안내 3단계의 작업 링크**로만 정한다. 링크가 가리키는 페이지가 수정 가능 페이지가 되고, Workbench에 그 페이지 이름이 보인다. 오른쪽에 버전(`v0.2.0`)이 보인다.
- **프로젝트(Figma 파일) 단위**로 자료를 `projects/{fileKey}/`에 둔다: `project.json`(작업 링크 · 수정 가능 페이지), `catalog.json`(페이지 · 프레임 목록), `labels.json`(화면 제목), `shots/` · `shots_meta.json`(캡처). PC마다 따로이고(저장소 · 배포본에 없음) 기본 프로젝트는 없다.
- 화면은 좌우 2분할이다. 왼쪽(기본 30%)에 작업 페이지 메뉴와 수정 요청, 오른쪽(더 넓게)에 작업 결과물이 보인다. 가운데 분할선을 끌어(또는 ← →) 왼쪽 너비를 20~45%로 바꾼다.
- **오른쪽: 작업 결과물**
  - 캡처가 있으면 캡처를 보여 준다. 너비 맞춤 / 전체 맞춤 / 확대·축소, 더블클릭 100%, 드래그 이동.
  - 캡처가 없으면 **[캡처 받기]** · **[실시간 보기]**를 고른다. 캡처 받기는 Figma 플러그인(그 프레임이 열린 페이지에 있으면 바로) 또는 Claude(Figma 클라우드, 내 Figma에 부담 없음)가 받는다. 툴바 「캡처」로 다시 받을 수도 있다.
  - 「실시간」은 Figma 뷰어를 통째로 불러와 무겁다. 누를 때만 켜지고, 다시 열면 꺼진 상태로 시작한다. 「Figma ↗」는 해당 프레임을 Figma에서 연다.
  - Figma에서 **Common UX Sync** 플러그인을 켜 두면, 작업 페이지를 고칠 때마다 바뀐 프레임 캡처(JPG, 원본 크기)가 자동으로 들어온다.
- **왼쪽 위: 작업 페이지 메뉴** (프레임 규칙 기준 depth, 목록은 `projects/{fileKey}/catalog.json`)
  - 1 구분 = Figma 페이지 (예: BK · SH.H · DY · SH.L · DY-Test1 · DY common UX)
  - › 2 페이지 = 화면 ID (예: `TI-STN-08`, `LI-STN-08`, `COMM-5-d`)
  - › 3 상세 = 프레임 (예: `TI-STN-08-P`, `TI-STN-08 / 정책`, `COMM-5-d(1/5)`)
  - 드롭다운이나 메뉴 버튼으로 이동한다. 미완료 요청이 있는 화면은 버튼에 숫자가 붙는다.
  - 수정 가능 페이지(작업 링크의 페이지) 밖은 **보기 전용**이다. 요청은 등록되지만 Claude가 「보류」로 둔다.
  - 목록이 아직 없는 프로젝트는 **[Claude에게 목록 만들기 요청]**(권장, Figma 클라우드에서 만듦) 또는 Figma 플러그인 실행으로 만든다.
- **왼쪽 아래: 수정 요청**
  - 유형·우선순위를 고르고 내용을 적어 **요청 등록**(Ctrl + Enter)을 누르면 `workbench/edit_requests.json`에 쌓인다.
  - 상태(대기 / 진행 중 / 완료 / 보류)를 바꾸거나 삭제할 수 있다.
  - Claude Code 세션이 `workbench/watch_requests.ps1`로 요청 파일을 감시하고 있으면, 「대기」 요청이 등록되는 즉시 Figma에 반영한다. 상태는 「진행 중 → 완료」로 바뀌고, 캡처 갱신과 변경 이력까지 이어서 한다(커밋·푸시는 요청할 때만). 다른 PC에서 쓰는 방법은 `docs/Workbench_Setup_Other_PC.md`. 해석이 모호한 요청은 「보류」로 바꾸고 메모에 질문을 남긴다.
  - 감시가 꺼져 있을 때는 **Claude 작업 요청문 복사**를 눌러 Claude에게 붙여 넣으면 된다.
- 캡처 받기 · 목록 만들기 요청은 작업 대기열 `workbench/jobs.json`에 쌓이고, 요청 감시 중인 Claude가 처리한다(`docs/claude/jobs.md`).

---

# Figma 플러그인 (Common UX Sync)

Figma 데스크톱 앱에서 켜 두면 **Claude · Workbench와 연동**한다. 창은 연결 상태만 보이는 작은 크기다.

| 하는 일 | 내용 |
|---|---|
| 자동 캡처 | 작업 페이지를 보고 있을 때 고친 프레임 캡처(JPG, 원본 크기)를 Workbench로 올린다. 창의 「자동 캡처」로 끄고 켠다 |
| 「캡처 받기」 처리 | Workbench에서 요청한 캡처 중 지금 열린 페이지에 있는 프레임을 바로 받는다(나머지는 Claude가 받는다) |
| Claude 글 수정 | Claude가 Pretendard처럼 클라우드에서 못 쓰는 폰트의 글을 이 PC의 Figma에서 바꾼다(작업 대기열 text) |
| 프레임 목록 | 이 파일의 페이지 · 지금 페이지의 프레임 목록을 Workbench로 보낸다. 다른 페이지로 가면 그 페이지 목록이 더해진다 |

- 창: ● 연결 상태, 파일 · 작업 페이지(보고 있는지), 마지막 처리 한 줄, [캡처](보이는 프레임) · [목록](다시 보내기)
- 예전의 컬러 반영 기능과 가이드 컬러 편집기는 뺐다. 문서 컬러는 가이드 「07 타이포그래피 · 컬러」 표로만 본다.

## 처음 한 번만: 플러그인 등록

1. Figma 데스크톱 앱에서 작업 파일을 연다(브라우저 Figma에서는 개발 플러그인을 등록할 수 없다).
2. 왼쪽 위 메뉴 › **Plugins › Development › Import plugin from manifest…**
3. 이 폴더의 `figma_plugin/manifest.json`을 선택한다.

등록 후에는 **Plugins › Development › Common UX Sync**에서 실행한다. `Ctrl + /` 빠른 실행에서 `Common UX`로 찾아도 된다.

> 폴더 위치를 옮기면 플러그인을 다시 등록해야 한다.

---

## 여러 사람이 함께 쓸 때 (중요)

- **설치 · 업데이트**: 처음에는 `dist\UX_AI_TEST_Workbench_v{버전}_Windows.zip`(맥은 `_Mac.zip`)을 풀어 `Figma AI Run`을 실행한다.
  - 그다음부터는 실행할 때마다 관리자가 배포한 새 버전(`release` 브랜치)을 확인해 자동으로 바꾼다.
  - 내 요청 · 캡처 · 설정은 그대로 남는다. 바뀌면 화면에 「새 버전으로 업데이트했습니다」가 한 번 뜨고, 상단 메뉴에 버전(`v0.1.0`)이 보인다.
  - 배포는 관리자가 `tools\release.ps1 -Version x.y.z -Publish`로 한다(`docs/claude/dev.md` 「버전 · 배포」).

- **작업 이력은 깃으로 공유된다.** 각자 자기 PC에서 작업해도 누가 · 언제 · 어떤 프레임을 고쳤는지 「변경 이력 › 작업 이력 (공유)」에서 모두 본다.
  - 요청을 등록하거나 상태(대기 · 진행 중 · 보류 · 완료)가 바뀌면 서버가 이력 한 건(요청자 · 처리자 · PC · 상태 · 프레임 · 내용 · 메모)을 `.history/`에 남기고, 지우면 뺀다. 완료된 것에는 그때 캡처(원본 크기 JPG)를 붙인다.
  - 이력이 생기면 바로 같은 저장소의 **`history` 브랜치**로 올리고(push), **5초마다** 다른 PC가 올린 것이 있는지 확인해 받는다(pull). 바뀐 게 없으면 가볍게 묻기만 한다. [깃 동기화]로 바로 맞출 수도 있다.
  - 이력은 한 건 한 파일(`entries/{PC}_{요청 ID}.json`)이라 여러 PC가 올려도 충돌하지 않는다. 작업 중인 코드 · 브랜치와도 섞이지 않는다.
  - 연결: 저장소 관리자가 깃허브 아이디를 초대하고(수락), 시작 안내 6단계 **[깃허브 연결]** 한 번. 열린 창이 git 설치(없으면) → 브라우저 로그인(토큰 불필요) → history 브랜치 연결까지 한다(윈도우 `workbench/github_login.ps1`: winget · Git Credential Manager, 맥 `github_login.sh`: 개발자 도구 · GitHub CLI `gh`). 모든 PC는 `workbench/git_remote.txt`에 적힌 **한 저장소**(지금은 `PJ-CRC/CURECA_UX`)로 공유한다. 압축으로 받은 폴더나 다른 곳에서 clone한 폴더도 같다. 다른 사람은 이 저장소에 쓰기 권한(공동 작업자 초대)이 있어야 한다. 연결이 안 되면 이력은 이 PC에만 남고 화면에 이유가 보인다.
  - 요청 번호(R001…)는 PC마다 따로 매겨진다. 작업 이력에서는 PC 이름으로 구분한다.

- **토큰 사용량도 같은 방식으로 공유된다(「사용량 통계」).**
  - 요청이 「진행 중」이 되면 서버가 그 시각(`startedAt`)을 적고, 「완료」가 되면 `workbench/usage.ps1`(맥 `usage.pl`)을 실행한다.
  - 스크립트는 그 구간에 Claude가 API를 부른 기록을 `~/.claude/projects/{작업 폴더}/*.jsonl`(서브에이전트 포함)에서 더해 `.history/usage/{PC}_{요청 ID}.json`에 남긴다. 종류별 토큰 · 호출 수 · 모델 · 금액 환산(`workbench/pricing.json` 단가)이 들어간다. 이력과 함께 `history` 브랜치로 올라간다.
  - 금액은 API 단가로 환산한 값이다. 요금제(Team 등)에서는 실제 청구가 아니라 사용 한도에서 차감된다.
  - 같은 작업 폴더에서 Claude 세션을 여러 개 동시에 돌리면 그 구간 사용량이 모두 더해진다. 요청을 읽고 감시를 다시 켜는 사이의 사용량은 어느 요청에도 넣지 않는다.


---

## 문제 해결

| 증상 | 해결 |
|---|---|
| 가이드에 「읽기 전용 (서버 없음)」 표시 | html 파일을 더블클릭해 연 경우다. `Figma AI Run`으로 열린 `http://localhost:8765/`를 사용한다 |
| 플러그인에 「서버에 연결할 수 없습니다」 | 서버가 꺼져 있다(Workbench 탭을 모두 닫으면 저절로 꺼진다). `Figma AI Run`을 다시 실행한다 |
| 실행해도 브라우저가 안 열림 · 「서버를 시작하지 못했습니다」 | 다시 실행한다(떠 있던 서버를 끄고 새로 띄운다). 그래도 안 되면 기록 파일(윈도우 `%LOCALAPPDATA%\UX_AI_TEST_Workbench\server.log`, 맥 `~/Library/Logs/Figma AI Run.log`)을 확인한다 |
| 메뉴에 Development가 없음 | 브라우저 Figma다. 데스크톱 앱에서 실행한다 |
