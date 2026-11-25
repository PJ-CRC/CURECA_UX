# 화면설계서 (화면 MD)

화면(CID)마다 화면 MD를 하나씩 둡니다. 짝 화면은 머리말 `pair_cid`로 연결합니다.

| 폴더 | 무엇 | 틀 |
| --- | --- | --- |
| `asis/` | 기존(AS-IS) 화면을 옮긴 화면 MD. 2026-11-25부터는 작업방 `{메뉴}_asis` 페이지에서 To-Be 작업 전에 추출함. 반영 대기는 `pending/open.md`에 둠 | `templates/screen-asis.md` |
| `tobe/` | 작업방에 새로 그린(To-Be) 화면 MD. 반영 대기 항목은 화면마다 두지 않고 `pending/open.md` 한 곳에, 변경 이력은 맨 위 `screen-history.md`에 둠. 아직 그리지 않은 화면은 To-Be 화면 MD가 없거나, 작업 중인 화면 MD로 있을 수 있음(머리말 `figma`가 비어 있음) | `templates/screen.md` (반영 대기 목록은 `pending/open.md`) |

- 두 폴더 모두 IA Lv.1 메뉴 하나에 메뉴 폴더 하나를 둡니다(`<메뉴 이름 소문자-하이픈>/`, 예: `tobe/instrument/`). 메뉴 이름은 `ia/ia-screens.csv`의 Lv.1입니다. 괄호는 빼고 하이픈으로 이음(예: Dashboard(All) → `dashboard-all/`).
- 2026-11-17: 이 폴더에 있던 화면 MD 187개를 `asis/`로 옮기고, 메뉴 파일 `_menu.md`는 지웠습니다(메뉴 이름은 IA로 대신함).

## 기존 화면 MD (`asis/`)

기존 화면을 옮긴 파일입니다. 처음(2026-11-02 ~ 03)에는 기존 작업방(Part.2) Figma에서 옮겼고, 이때 1 · 2차 구분을 `figma_region`으로 적었습니다. 2026-11-25부터는 요청자가 최신 화면만 옮겨 둔 작업방 `{메뉴}_asis` 페이지에서 To-Be 작업 전에 추출 도구(`tools/figma/extract-screen.js`)로 한 번 추출하고(`figma_region` 없음), 그 뒤로는 다시 옮기지 않습니다(`flow/1-requirements.md` "케이스 3에서 더 하는 것").

**지금 파일**: 아래 메뉴의 asis 화면 MD는 작업방 `{메뉴}_asis` 페이지를 기준으로 2026-11-25 ~ 26에 다시 쓴 것입니다(머리말 `figma`가 `_asis` 페이지 기획 프레임 링크). 예외는 표 아래 두 곳뿐입니다.

| 메뉴 | 폴더 | 파일 수 |
| --- | --- | --- |
| Dashboard | `dashboard/` | 2 |
| Dashboard(All) | `dashboard-all/` | 2 |
| Login | `login/` | 6 |
| Profile | `profile/` | 4 |
| Quick Start | `quick-start/` | 1 |
| Run | `run/` | 6 |
| Test Management | `test-management/` | 5 |
| Sample Tracking | `sample-tracking/` | 16 |
| Instrument | `instrument/` | 7 |
| Inventory | `inventory/` | 16 |
| Information | `information/` | 8 |
| Event History | `event-history/` | 6 |
| Statistical Analysis | `statistical-analysis/` | 17 |
| Setting | `setting/` | 40 |
| Material Setup | `material-setup/` | 53 |

**예전에 옮긴 그대로인 파일 (다시 쓰지 않음)**: 머리말 `figma`에 예전 파일 키(`kI8n…`)가 있습니다.

- Material Setup 53개: `Material Setup_asis` 페이지가 아직 없어서입니다. 페이지가 생기면 다시 추출합니다.
- Setting의 Assay Pack(STN-08) 5개(`LI-STN-08` · `LI-STN-08-P` · `TI-STN-08` · `TI-STN-08-01` · `TI-STN-08-P`): R001(assay-pack)이 근거로 써서 일부러 그대로 둡니다. R001이 끝나면 다시 추출합니다.

**처음 옮길 때 기록 (2026-11-02 ~ 03, 이력)**: 아래는 기존 작업방(Part.2)에서 처음 옮길 때의 개수 · 원본 구분입니다. 지금 파일 수 · 예외는 위를 봅니다.

| 메뉴 | 폴더 | 상태 |
| --- | --- | --- |
| Instrument | `instrument/` | 기획 화면 7개 옮김 (2026-11-02) |
| Dashboard | `dashboard/` | 기획 화면 2개 옮김 (2026-11-02, 2.1 2차) |
| Dashboard(All) | `dashboard-all/` | 기획 화면 2개 옮김 (2026-11-02, 2.1 2차) |
| Login | `login/` | 기획 화면 6개 옮김 (2026-11-02, 2.1 2차) |
| Profile | `profile/` | 기획 화면 4개 옮김 (2026-11-02, 2.1 2차) |
| Setting | `setting/` | IA의 Setting 화면 전부 (39개) 옮김 (2026-11-02). System Setting만 2.1 1차, 나머지 2.1 2차 |
| Event History | `event-history/` | 기획 화면 6개 옮김 (2026-11-02, 목록·상세 2.1 2차, Message 2.1 1차). 2026-11-06 테스트에서 To-Be로 덮어쓴 것을 2026-11-18 원래 AS-IS로 되돌림 |
| Information | `information/` | 기획 화면 8개 옮김 (2026-11-02, Report 2개는 2.1 2차, Program·Popup 6개는 2.1 1차) |
| Run | `run/` | 기획 화면 6개 옮김 (2026-11-02, 2.1 2차). Item details Popup은 Inventory에 둠 |
| Quick Start | `quick-start/` | 기획 화면 1개 옮김 (2026-11-02, 2.1 2차) |
| Test Management | `test-management/` | 기획 화면 4개 옮김 (2026-11-02, 2.1 2차) |
| Sample Tracking | `sample-tracking/` | 기획 화면 16개 옮김 (2026-11-02, 2.1 2차) |
| Inventory | `inventory/` | 기획 화면 16개 옮김 (2026-11-02, 2.1 2차) |
| Statistical Analysis | `statistical-analysis/` | IA의 Statistical Analysis 화면 전부 (17개) 옮김 (2026-11-02, 2.1 2차) |
| Material Setup | `material-setup/` | 기획 화면 53개 옮김 (2026-11-03). IA CID 51개(LI-TSS-PSI-01-01은 프레임 없음) + IA 미등록 RGE 2개. 주 출처는 SH2-MS 얼럿 수정 테스트 페이지, WBM·RGE 4개는 2.1 2차 |
