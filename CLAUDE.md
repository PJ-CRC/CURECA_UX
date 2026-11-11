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
  - **기존 Pretendard 글을 고칠 때는 Figma 플러그인에 맡긴다**: `docs/claude/jobs.md`의 **text** 작업을 만들면, 작업자 PC의 Figma에서 켜져 있는 Common UX Sync 플러그인이 그 PC의 Pretendard로 글을 바꾼다(스타일 · 폰트 그대로).
  - 플러그인이 2분 안에 가져가지 않으면(작업이 계속 「대기」) 작업을 「실패」로 바꾸고, 같은 자리 · 크기 · 색의 **Noto Sans KR**(한글 없으면 Inter) 글로 바꿔 넣은 뒤 note에 「플러그인이 꺼져 있어 Noto Sans KR로 바꿈」이라고 적는다.
- 커밋 · 푸시는 사용자가 요청할 때만 한다.

## 준비 (세션마다)

1. 로컬 서버가 떠 있는지 확인한다: `http://localhost:8765/api/requests`가 응답하면 된다. 없으면 사용자에게 `Figma AI Run` 실행을 안내한다(윈도우 `Figma AI Run.bat`, 맥 `Figma AI Run.app`. Claude가 직접 띄울 때는 윈도우 `.claude/launch.json`의 `guide-sync`, 맥 `perl guide_server_mac.pl 8765`).
   - 윈도우의 Claude 앱(스토어 설치판)이 띄운 프로그램은 `%LOCALAPPDATA%`를 따로 된 사본으로 본다. 그래서 Claude가 띄운 서버는 PC별 시작 안내 상태(`setup.json`: 작업자 이름 · 작업 링크)를 옛 값으로 읽을 수 있다. 되도록 사용자가 `Figma AI Run`으로 띄우게 안내하고, Claude도 그 파일을 직접 읽지 말고 `GET /api/setup`으로 확인한다.
2. Figma MCP(`use_figma`, `get_screenshot`)가 연결돼 있는지 확인한다. 안 돼 있으면 사용자에게 Figma 연결(`/mcp` 또는 앱의 커넥터 설정)을 안내한다. 사용자 본인 Figma 계정에 작업 파일 **편집 권한**이 있어야 한다.

## 작업별 문서 (먼저 읽고 처리한다)

이 문서에는 늘 필요한 규칙만 있다. **일을 시작하기 전에 그 종류의 문서를 Read로 읽고 그대로 따른다**(읽지 않고 기억으로 처리하지 않는다). 문서는 `docs/claude/`에 있다.

| 할 일 | 읽을 문서 |
|---|---|
| Workbench 수정 요청(`PENDING` · `RESUME`, R0xx), 요청 감시, 채팅으로 Figma를 고쳤을 때 이력 · 캡처 | `docs/claude/requests.md` |
| 작업 대기열(`JOBS`) 공통, `catalog` 프레임 목록 · `capture` 캡처 · `text` 글 수정(플러그인) | `docs/claude/jobs.md` |
| `guide` 새 UX 문서 · `guide-edit` 문서 수정 · `guide-check` 고칠 화면 · 연관 항목 찾기, 파일형 문서 | `docs/claude/ux-docs.md` |
| `prototype` 만들기 · `prototype-edit` 수정 · `prototype-sync` Figma 맞추기 | `docs/claude/prototype.md` |
| `minutes` 회의록 요약, `plan` 임시 정책 · 논의·결정, 화면설계서 반영(`fixRows`), 회의록 쓰기 | `docs/claude/plan.md` |
| 프로그램 수정 · **배포**(「배포해줘」), 계정 · 권한, 서버 · 에이전트 구조, 일정 연결(시트) | `docs/claude/dev.md` |

- `JOBS J0xx`는 `GET /api/jobs`에서 그 작업의 `kind`를 보고 문서를 고른다.
- 한 일이 다른 종류로 이어지면(요청 처리 중 임시 정책 등록, 완료 뒤 프로토타입 맞추기 등) 그 문서도 읽는다.
- 배포는 사용자가 「배포해줘」라고 할 때만 한다(절차는 `dev.md` 「버전 · 배포」).
- 규칙을 고치거나 더할 때는 그 종류의 문서를 고친다. 이 문서에는 모든 일에 필요한 것만 둔다(2026-11-10에 나눔 — 예전에는 한 파일 4만 8천 자가 모든 세션에 실렸다). `docs/claude/`는 배포에 들어가 모든 PC에 퍼진다(`.claude/`는 PC별 설정이라 업데이트가 덮어쓰지 않으니 규칙을 두지 않는다).

## 공통 규칙

- **같은 작업 · 요청을 두 번 처리하지 않는다**: 서버는 이미 「진행 중」인 작업(`/api/jobs`) · 요청(`/api/requests`)을 다시 「진행 중」으로 바꾸려 하면 「이미 진행 중」 오류를 돌려준다(백그라운드 감시와 Claude 창이 함께 처리하던 것을 막음, 2026-11-05 J028). 이 오류를 받으면 다른 Claude 세션이 처리 중이니 **그 항목은 건너뛴다**. 내가 처리하다 끊겨 다시 이어야 할 때만 `force:true`를 붙인다.
- **사용량**: 끝낸(완료 · 보류 · 실패) 작업마다 `workbench/usage.ps1 -From {「진행 중」으로 바꾼 시각} -By {작업의 by} -Title "{종류}: {이름} ({작업 ID})"`(맥 `usage.pl`)로 남긴다. 종류 이름은 「사용량 통계」가 나눠 보이는 말로 쓴다: UX 문서 = 카테고리 이름(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서), 연관 항목 = 「연관 항목 찾기」 · 「고칠 화면 찾기」, 「회의록 요약」, 「임시 정책」 · 「논의·결정」(plan), 「프로토타입」, 「목록 만들기」 · 「캡처」. Workbench 요청(R0xx)은 서버가 완료 때 자동으로 남긴다.
- **서버로 보내기**: 서버로 JSON을 보낼 때는 **UTF-8 파일로 만들어 `curl --data-binary @파일`**로 보낸다. 명령줄에 한글을 직접 넣으면 윈도우에서 깨진다.
- `.history`는 작업 폴더 저장소와 별개다. Claude가 `.history`를 직접 커밋 · 푸시하지 않는다. 작업 폴더의 코드 커밋 · 푸시는 지금처럼 사용자가 요청할 때만 한다.

## 프로그램 폴더

- 화면 파일(html)과 화면이 함께 쓰는 `appnav.js` · `appnav.css` · `common.js`는 **`pages/`**에 있다. 주소는 폴더 이름 없이 그대로다(`http://localhost:8765/Work.html`) — 서버가 `pages/`에서 찾는다. 문서에서 `Work.html`처럼 적은 것은 `pages/Work.html`이다.
- **서버는 Node.js 한 벌(`node/server/`)**이다(v0.21.0~). Figma AI Run이 처음 한 번 공식 Node를 받아 PC별 폴더에 두고 띄운다(`node/run_win.ps1` · `run_mac.sh`, 설치 없음). Node를 못 쓰면 예전 서버(`guide_server.ps1` · 맥 `guide_server_mac.pl`)로 띄우고, PC별 폴더의 `server_mode.txt` = `ps`면 예전 서버로 고정한다. 서버 기능을 고칠 때는 `node/server/`를 고친다(예전 서버는 대비용으로만 둔다). 옮긴 경위 · 비교 검사는 `node/README.md`.
- 실행 파일(`Figma AI Run`)은 맨 위, 감시 · 동기화 · 업데이트 스크립트는 `workbench/`, 규칙 문서는 `docs/claude/`, 매뉴얼 그림은 `docs/manual/`, Figma 플러그인은 `figma_plugin/`, 배포 도구는 `tools/`.

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

## 팀

같은 회사 안의 업무 구분이다. 요청 · 작업마다 `team`이 있다(없으면 `cureca`). 팀 목록 · 계정 소속 등 구현은 `docs/claude/dev.md`.

- **CURECA = 지금까지 모두가 함께 쓰던 데이터의 팀**(`legacy:true`). 그 데이터는 지금 자리 그대로 둔다(`.history/guides` 아래는 원본 CURECA_AI 저장소와 경로가 같아야 한다). 다른 팀의 데이터는 `.history/teams/{id}/` 아래에 같은 구조로 둔다.

| 데이터 | CURECA | 다른 팀 |
|---|---|---|
| UX 문서(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서, `provisional/` · `pending/` · `customer-agenda/` · `screen-fixes/` · `decisions/`, `_log.json`) | `.history/guides/` | `.history/teams/{id}/guides/` |
| 회의록 | `.history/minutes/` | `.history/teams/{id}/minutes/` |
| 시트 연결 | `.history/config/sheet.json` | `.history/teams/{id}/config/sheet.json` |
| 작업 기준(이 PC만) | `workbench/guide_apply.json` | `workbench/guide_apply.{id}.json` |
| 변경 이력 · 사용량 | `.history/entries` · `.history/usage` 한곳, 기록마다 `team`(없으면 CURECA) |

- **Claude가 요청 · 작업을 처리할 때**: 그 항목의 `team`(없으면 `cureca`)으로 일한다. 이 문서 · `docs/claude/` 문서의 `.history/guides/…` · `.history/minutes/…` · `.history/config/sheet.json` 경로는 CURECA 기준이니, 다른 팀이면 위 표대로 `.history/teams/{team}/…`로 바꿔 읽고 쓴다(새 문서 폴더 `.history/teams/{team}/guides/{id}/`도). 서버 API에는 `?team={team}`을 붙이고, 작업을 새로 쌓을 때(prototype-sync · text 등)는 본문에 `team`을 넣는다. 사용량은 `usage.ps1 … -Team {team}`(맥 `--team`). Workbench 요청의 작업 기준은 `GET /api/guides?team={요청 team}`의 `applied[fileKey]`다.
  - 안전장치(빠뜨렸을 때): `?team=` 없이 `jobId`를 담은 문서 저장(`/api/guides save`)은 그 작업의 팀 문서로, 이미 있는 회의록 id의 저장 · 지우기는 그 회의록이 있는 팀으로 서버가 맞춘다. 파일을 직접 고치는 일(임시 정책 · 반영 대기 줄 등)에는 안전장치가 없으니 경로를 꼭 확인한다.

## 주의

- PowerShell로 json · js를 쓸 때는 `[IO.File]::WriteAllText(path, text, (New-Object Text.UTF8Encoding $false))`. `Get-Content`/`Set-Content` 기본 인코딩은 한글을 깨뜨린다.
- `use_figma` 결과로 한글이 많은 텍스트를 그대로 돌려받으면 응답이 잘린다. U+2028(줄 구분자)가 섞인 텍스트는 파싱 오류가 나므로 `split(String.fromCharCode(0x2028))`로 바꿔서 돌려받는다.
- 화면 디스크립션은 프레임 안 「Frame 1」 패널의 행(Description 인스턴스)이다. 화면 이동은 `[화면 ID] 화면명` 형식으로 적는다.
- 공통 UX 규칙(COMM-*) · 화면 정의는 이 PC 작업자가 그 파일에 카테고리마다 적용한 문서(`GET /api/guides`의 `applied[fileKey].docs`, 작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서 각 하나)만 기준으로 한다. 적용하지 않은 문서는 보지 않는다. 기본 문서는 없다.
