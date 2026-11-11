# Node 서버 (옮기는 중)

기존 서버(`guide_server.ps1` · `guide_server_mac.pl`, 포트 8765)를 Node.js 한 벌로 옮기는 작업이다. **기존 서버는 그대로 쓰고**, 새 서버는 이 폴더에서 따로(포트 8766) 만든다. 배포(`tools/release.ps1`)에는 아직 넣지 않는다.

## 실행

- 윈도우: `powershell -ExecutionPolicy Bypass -File node\run_win.ps1 [-Port 8766] [-ReadOnly]`
- 맥: `bash node/run_mac.sh [--port 8766] [--readonly]`
- Node.js는 설치하지 않는다(B 방식). `NODE_VERSION`의 공식 Node를 처음 한 번 nodejs.org에서 받아 PC별 폴더에 두고(공식 SHASUMS256.txt로 확인), 다음부터는 그것을 쓴다. `NODE_VERSION`을 올리면 다음 실행 때 그 버전을 받는다.
  - 윈도우 `%LOCALAPPDATA%\UX_AI_TEST_Workbench\node\{버전}\`, 맥 `~/Library/Application Support/UX_AI_TEST_Workbench/node/{버전}/`
- `--readonly`: 쓰기 API · 깃 동기화 · 감시를 끈다. 기존 서버와 **같은 데이터를 읽기만 하며** 응답을 비교할 때 쓴다. 두 서버가 같은 파일에 쓰지 않게, 쓰기 시험은 데이터 사본으로만 한다.

## 단계

| 단계 | 내용 | 상태 |
|---|---|---|
| 0 | 실행 스크립트(Node 자동 받기), 서버 뼈대(화면 파일 서빙) | 완료(2026-11-11, 윈도우) |
| 1 | 로그인 · 권한 · 팀, 읽기 API + 기존 서버와 응답 비교 검사 | 완료(2026-11-11, 윈도우): 읽기 API 전부(`me` · `projects` · `requests` · `jobs` · `catalog` · `history` · `usage` · `prototypes` · `guides`(+ `gitlog` · `gitfile`) · `minutes` · `sheet`(+ `sheet/data`) · `setup` · `accounts` · `files` · `storage` · `plan/files`) — 비교 35건 같음. 남은 것: 로그인 상태 저장(쓰기) |
| 2 | 쓰기 API(사본 데이터로 비교) | 완료(2026-11-11, 윈도우): 쓰기 API 전부 — 수정 요청 · 첨부, 작업 대기열, 프로젝트 · 작업 페이지, 프레임 목록, 캡처, UX 문서, 회의록, 참고 파일, 프로토타입 지우기, 이력 직접 남기기, 로그인 · 비밀번호 · 팀, 계정 · 팀 관리, 시작 안내 저장 · 실행 버튼, 탭 열림 · 서버 끄기, 일정 시트 — 응답 · 바뀐 파일 125 같음(의도한 차이 2). 기존 서버가 만든 비밀번호 해시도 Node가 확인함. 실행 버튼(Figma · Claude · 설치 · 깃허브 연결 · 감시 시작)은 실제로 눌러 보지 않음 |
| 3 | 백그라운드 일(깃 동기화 · 감시 · 사용량 · 자동 종료 · 바로가기) | 서버 쪽 완료(2026-11-11, 윈도우): 켤 때 새 설치 표시 · 이력 채우기 · 작업 페이지 맞추기 · 바로가기, 1초마다 깃 동기화 반복 띄우기(죽으면 30초 뒤) · 감시 자동 시작 · 탭 닫힘 끄기, 기록 파일(--log, 지난 기록 .prev.log), 잡지 못한 오류 기록. 깃 동기화 · 감시 · 사용량 스크립트(workbench/*.ps1 · *.sh · *.pl)는 아직 그대로 띄워 쓴다(한 벌로 옮기는 것은 3-2) |
| 4 | 실행 · 업데이트가 Node 서버를 띄우게, 배포에 넣기 | 완료(2026-11-11, v0.21.0 배포): 윈도우 `launch_win.ps1` · 맥 `Figma AI Run.app` · 터미널 실행이 Node를 받아 띄우고 안 되면 예전 서버로(맥은 Node가 실행되지 않으면 바로), 실행 중 화면(`pages/Loading.html`), 배포에 `node/`(비교 도구 `node/tools` 제외). 개발 PC(윈도우)에서 Node 서버로 실제 사용 중 확인. 맥은 아직 실제 실행 전 |
| 5 | 다른 PC 적용, 예전 서버 정리 | 진행 중: 작업자 PC(윈도우 · 맥)가 업데이트 후 두 번째 실행부터 Node 서버로 뜨는지, 이력 동기화 · 감시가 도는지 확인. 문제가 없으면 예전 서버(`guide_server.ps1` · `guide_server_mac.pl`)는 대비용으로 한동안 둔 뒤 정리 |

옮기는 동안 새 기능은 기존 서버에 넣지 않는다(급한 고침만). 아직 옮기지 않은 API는 501로 답한다.

## 비교 검사

`node node/tools/compare.js [--browser]` — 기존 서버(8765)와 Node 서버(8766)에 같은 요청을 보내 응답(JSON · 상태 · 이동)을 비교한다. `--browser`는 화면에서 온 요청처럼 보내 로그인 · 메뉴 권한 검사까지 비교한다. 옮기지 않은 기능은 「아직」으로 센다.

- 개발 PC에서 Claude 앱이 띄운 프로그램은 `%LOCALAPPDATA%`를 따로 된 사본으로 본다. 비교할 때는 Node 서버에 `--setup-dir \\localhost\c$\Users\{사용자}\AppData\Local\UX_AI_TEST_Workbench`를 주어 실제 PC 설정을 읽게 한다.
- 기존 서버는 Host가 `localhost`일 때만 받는다(127.0.0.1이면 400).
## 쓰기 비교 검사

1. `powershell -ExecutionPolicy Bypass -File node\tools\ab_setup.ps1 -Fresh` — 데이터 사본 두 벌(`%TEMP%\wb_ab\A` · `B`)을 만들고 기존 서버(A, 8775) · Node 서버(B, 8776)를 띄운다. 사본에서는 깃 올리기 · 백그라운드 감시 · 바로가기 바꾸기를 모두 막는다(실제 데이터 · 8765 서버는 건드리지 않음).
2. `node node/tools/ab_compare.js [--only requests]` — 같은 쓰기 요청을 차례로 보내 응답과 바뀐 파일을 비교한다(시각 · 임시 이름 · 수정본 이름은 같은 표시로 바꿔 비교).
## 기존 서버와 일부러 다르게 한 것

- 「글 수정」 작업(text)을 `items` 없이 보내면 기존 서버는 PowerShell의 `@($null).Count = 1` 때문에 빈 작업을 만들었다 → Node는 「바꿀 글(items)이 없습니다」로 거절한다.
- 작업 가져가기(take)에 가져갈 것이 없으면 기존 서버는 `job: {}`(플러그인이 없는 작업을 되돌리려다 오류)를 돌려줬다 → Node는 `job: null`(플러그인은 바로 넘어간다).
## 알게 된 것(윈도우)

- Node에서 PowerShell을 `detached`로 띄우면 콘솔이 없어 바로 끝난다(깃 동기화가 아무것도 안 했다). 숨김으로 도는 것(깃 동기화 · 감시 · 사용량)은 detached 없이 띄우고, 보이는 창(깃허브 연결 · Claude 로그인 창)만 detached로 띄운다. 윈도우는 서버가 꺼져도 자식 프로세스를 끄지 않으므로 감시는 계속 돈다.
- 시험 준비(ab_setup.ps1)를 파이프(`|`)에 이어 실행하면 사본 기존 서버가 출력을 붙잡아 끝나지 않는다. 따로 실행한다.