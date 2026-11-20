# UX_AI_TEST · Claude 작업 규칙

이 폴더를 연 Claude Code 세션은 아래 규칙으로 일한다. 사람마다 다른 PC · Figma 계정 · Claude 계정을 써도 규칙은 같다.

**기본 개념**: 이 문서가 시스템 전체 규칙이다. Workbench 요청 · 작업은 **그 팀의 UX 문서**(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서 중 이 PC에서 적용한 것)를 기준으로 처리한다. UX 문서는 팀마다 다르니 처리 방식(흐름 · 단계)도 팀마다 다르다. Workbench는 모든 팀이 같이 쓰는 도구라 특정 팀의 흐름을 위한 기능을 두지 않는다.

## 범위

- Workbench는 **프로젝트(Figma 파일) 단위**다. 요청 · 작업에는 늘 `fileKey`가 있으니 그 파일 기준으로 처리한다. 파일 키 없이 온 요청 · 캡처는 시작 안내 3단계 링크(작업 링크)의 파일로 본다. **기본 프로젝트는 없다.**
- 파일마다 **수정 가능 페이지(작업 페이지)는 하나**다. 다른 페이지는 읽기만 한다.
  - 기준은 `projects/{fileKey}/project.json`의 작업 링크가 가리키는 페이지(`editablePageId` · `editablePageName`, catalog.json에서 `editable: true`)다. 사람이 Workbench에서 작업 페이지를 바꿀 수 있으니, **요청을 처리할 때마다 그때의** `editablePageName`으로 확인한다(등록 뒤 바뀌었으면 「보류」).
  - 팀 프로젝트(팀마다 Figma 파일 · 작업 순서 ① → ② → ③), 프로젝트 탭, 작업 페이지 바꾸기, 새 설치 때 초기화 등 화면 동작은 `docs/claude/dev.md` 「Workbench 프로젝트 · 작업 페이지」.
- 응답은 한국어로 한다.
- **Pretendard 글**: 먼저 `use_figma`에서 `loadFontAsync`로 불러와 직접 고친다. 안 되면 `docs/claude/jobs.md` 「text」대로(플러그인에 맡기거나 Noto Sans KR).
- 커밋 · 푸시는 사용자가 요청할 때만 한다.

## 준비 (세션마다)

1. 로컬 서버가 떠 있는지 확인한다: `http://localhost:8765/api/requests`가 응답하면 된다. 없으면 사용자에게 `Figma AI Run` 실행을 안내한다(윈도우 `Figma AI Run.bat`, 맥 `Figma AI Run.app`. Claude가 직접 띄울 때는 윈도우 `.claude/launch.json`의 `guide-sync`(Node 서버), 맥 `bash node/run_mac.sh --port 8765`).
   - 윈도우의 Claude 앱(스토어 설치판)이 띄운 프로그램은 `%LOCALAPPDATA%`를 따로 된 사본으로 본다. 그래서 Claude가 띄운 서버는 PC별 시작 안내 상태(`setup.json`: 작업자 이름 · 작업 링크)를 옛 값으로 읽을 수 있다. 되도록 사용자가 `Figma AI Run`으로 띄우게 안내하고, Claude도 그 파일을 직접 읽지 말고 `GET /api/setup`으로 확인한다.
2. Figma MCP(`use_figma`, `get_screenshot`)가 연결돼 있는지 확인한다. 안 돼 있으면 사용자에게 Figma 연결(`/mcp` 또는 앱의 커넥터 설정)을 안내한다. 사용자 본인 Figma 계정에 작업 파일 **편집 권한**이 있어야 한다.

## 작업별 문서 (먼저 읽고 처리한다)

이 문서에는 늘 필요한 규칙만 있다. **일을 시작하기 전에 그 종류의 문서를 Read로 읽고 그대로 따른다**(읽지 않고 기억으로 처리하지 않는다). 문서는 `docs/claude/`에 있다.

| 할 일 | 읽을 문서 |
|---|---|
| Workbench 수정 요청(`PENDING` · `RESUME`, R0xx — 흐름은 그 팀 작업규칙대로), 요청 감시, 채팅으로 Figma를 고쳤을 때 이력 · 캡처 | `docs/claude/requests.md` (작업규칙에 단계 문서가 있으면 `requests-flow.md`도) |
| 팀 프로젝트 다음 단계로 옮기기 · 비교(플러그인 작업 `transfer` — Claude는 옮기지 않음, 참고용) | `docs/claude/transfer.md` |
| 작업 대기열(`JOBS`) 공통, `catalog` 프레임 목록 · `capture` 캡처 · `text` 글 수정(플러그인) | `docs/claude/jobs.md` |
| `guide` 새 UX 문서 · `guide-edit` 문서 수정 · `guide-check` 고칠 화면 · 연관 항목 찾기, 파일형 문서 | `docs/claude/ux-docs.md` (새 문서는 `ux-docs-new.md`, 새 문서 · 작업규칙 수정은 `docs/claude/system-basis.md`도, 지우기 · 다운로드 · Wiki · 시트 묶음 · 템플릿은 `ux-docs-more.md`) |
| `prototype` 만들기 · `prototype-edit` 수정 · `prototype-sync` Figma 맞추기 | `docs/claude/prototype.md` |
| `minutes` 회의록 요약, `plan` 논의 대상(DS) · 화면설계서 작업대기(`fixRows`) · 작업 기록, 회의록 쓰기 | `docs/claude/plan.md` |
| 프로그램 수정 · **배포**(「배포해줘」), 계정 · 권한, 서버 · 에이전트 구조, 폴더 · API, 일정 연결(시트) | `docs/claude/dev.md` |

- `JOBS J0xx`는 그 작업의 `kind`를 보고 문서를 고른다(감시가 보낸 메시지에 작업 내용이 있으면 그것을, 없으면 `GET /api/jobs`).
- 한 일이 다른 종류로 이어지면(요청 처리 중 논의 대상 등록, 완료 뒤 프로토타입 맞추기 등) 그 문서도 읽는다.
- 배포는 사용자가 「배포해줘」라고 할 때만 한다(절차는 `dev.md` 「버전 · 배포」).
- 규칙을 고치거나 더할 때는 그 종류의 문서를 고친다. 이 문서에는 모든 일에 필요한 것만 두고, 한 규칙은 한 문서에만 쓴다(다른 문서는 그곳을 가리킨다). `docs/claude/`는 배포에 들어가 모든 PC에 퍼진다(`.claude/`는 PC별 설정이라 규칙을 두지 않는다).

## 공통 규칙

- **같은 작업 · 요청을 두 번 처리하지 않는다**: 서버는 이미 「진행 중」인 작업(`/api/jobs`) · 요청(`/api/requests`)을 다시 「진행 중」으로 바꾸려 하면 「이미 진행 중」 오류를 돌려준다. 이 오류를 받으면 다른 Claude 세션이 처리 중이니 **그 항목은 건너뛴다**. 내가 처리하다 끊겨 다시 이어야 할 때만 `force:true`를 붙인다(사람이 멈춘 요청은 `force`로도 안 된다 — `requests.md`).
- **멈춘 「진행 중」은 10분 뒤 「대기」로**: 서버가 1분마다 보고, 「진행 중」인 요청 · 작업이 **10분 동안 움직임이 없으면**(updatedAt이 그대로이고 백그라운드 에이전트가 지금 그 ID를 처리 중이 아니면) 「대기」로 되돌린다. 그래서 오래 걸리는 처리는 **5분 안팎마다 `update`로 note(지금 하는 일)를 갱신**한다. 내가 처리하던 것이 「대기」로 돌아가 있으면 「진행 중」으로 다시 바꾸고 이어 한다. 「완료」(작업은 「실패」도)인 항목을 「진행 중」으로 바꾸면 서버가 「이미 끝난 …」 오류를 돌려준다 — 그 항목은 건너뛴다.
- **사용량**: 끝낸(완료 · 보류 · 실패) 작업마다 `POST /api/usage {from:{「진행 중」으로 바꾼 시각}, by:{작업의 by}, title:"{종류}: {이름} ({작업 ID})", team:{작업의 team}}`로 남긴다(응답 `out`이 `USAGE …`면 남음, `NOUSAGE`면 그 구간 사용량 없음). 종류 이름은 「사용량 통계」가 나눠 보이는 말로 쓴다: UX 문서 = 카테고리 이름(작업규칙 · 정책서 · UX가이드 · 기준데이터 · 화면 정의서), 연관 항목 = 「연관 항목 찾기」 · 「고칠 화면 찾기」, 「회의록 요약」, 「논의 대상」(plan: ds-new · answer · answer-apply), 「프로토타입」, 「목록 만들기」 · 「캡처」. Workbench 요청(R0xx)은 서버가 완료 때 자동으로 남긴다.
- **서버로 보내기**: 서버로 JSON을 보낼 때는 **UTF-8 파일로 만들어 `curl --data-binary @파일`**로 보낸다. 명령줄에 한글을 직접 넣으면 윈도우에서 깨진다.
- `.history`는 작업 폴더 저장소와 별개이고 서버가 자동으로 공유(깃 동기화)한다. Claude가 `.history`를 직접 커밋 · 푸시하지 않는다.

## 팀

같은 회사 안의 업무 구분이다. 요청 · 작업마다 `team`이 있다(없으면 `cureca`). CURECA는 처음부터 쓰던 데이터의 팀이라 자리가 다르다(`.history/guides` 아래는 원본 CURECA_AI 저장소와 경로가 같아야 한다). 팀 목록 · 계정 소속 등 구현은 `docs/claude/dev.md`.

| 데이터 | CURECA | 다른 팀 |
|---|---|---|
| UX 문서 = 규칙 저장소(작업규칙 · 정책서 · 기준데이터 · 화면 정의서 · 논의 대상 · 작업 기록 · UX가이드. 예전 폴더는 `old-…`) | `.history/guides/` | `.history/teams/{id}/guides/` |
| 회의록 | `.history/minutes/` | `.history/teams/{id}/minutes/` |
| 시트 연결 · 팀 프로젝트 | `.history/config/sheet.json` · `projects.json` | `.history/teams/{id}/config/…` |
| 작업 기준(이 PC만) | `workbench/guide_apply.json` | `workbench/guide_apply.{id}.json` |
| 변경 이력 · 사용량 | `.history/entries` · `.history/usage` 한곳, 기록마다 `team`(없으면 CURECA) | |

- **요청 · 작업을 처리할 때** 그 항목의 `team`으로 일한다. `docs/claude/` 문서에 적힌 `.history/guides/…` · `.history/minutes/…` · `.history/config/…` 경로는 CURECA 기준이니, 다른 팀이면 위 표대로 `.history/teams/{team}/…`로 바꿔 읽고 쓴다. 서버 API에는 `?team={team}`을 붙이고, 작업을 새로 쌓을 때(prototype-sync · text 등)는 본문에 `team`을 넣는다.
- 파일을 직접 고치는 일(논의 대상 · 반영 대기 항목 · 작업 기록 · 규칙 저장소 문서 등)은 서버가 팀을 맞춰 주지 않으니 경로를 꼭 확인한다.
- **작업 기준 문서**: 이 PC 작업자가 카테고리마다 적용한 문서 하나씩(`GET /api/guides?team=`의 `applied[fileKey].docs`)만 기준으로 한다. 적용하지 않은 문서는 보지 않는다. 기본 문서는 없다. 읽는 법은 `requests.md` 「요청마다」 2.

## 주의

- PowerShell로 json · js를 쓸 때는 `[IO.File]::WriteAllText(path, text, (New-Object Text.UTF8Encoding $false))`. `Get-Content`/`Set-Content` 기본 인코딩은 한글을 깨뜨린다.
- `use_figma` 결과로 한글이 많은 텍스트를 그대로 돌려받으면 응답이 잘린다. U+2028(줄 구분자)가 섞인 텍스트는 파싱 오류가 나므로 `split(String.fromCharCode(0x2028))`로 바꿔서 돌려받는다.
- 화면 디스크립션은 프레임 안 「Frame 1」 패널의 행(Description 인스턴스)이다. 화면 이동은 `[화면 ID] 화면명` 형식으로 적는다.
- 프로그램 폴더 · 프로젝트 폴더(`projects/{fileKey}/`) 구조와 서버 API는 `docs/claude/dev.md` 「폴더 · 서버 API」.
