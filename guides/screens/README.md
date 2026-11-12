# 화면설계서

메뉴 단위 폴더 아래에 CID 화면설계서를 둡니다. CID마다 파일을 따로 두고, 짝 화면은 `pair_cid`로 연결합니다(`old-rules/repository-and-id.md` 3절). 상태는 메뉴 파일 `_menu.md`에 적습니다(`old-rules/status-lifecycle.md` 5절).

> 상태: 폴더는 IA Lv.1 메뉴 하나에 폴더 하나 (`screens/<메뉴 이름 소문자-하이픈>/`, 예: `screens/instruments/`)로 정함 (2026-11-02 확정). 1·2차 구분은 파일의 `figma_region`으로 적습니다.

## 기존 화면 MD (source: asis)

작업방 Figma의 기존 화면을 옮긴 파일입니다. 다시 그리기 전의 기준이며, 디스크립션은 원문 그대로 둡니다. 옮기는 방법은 `old-rules/screen-spec.md` 3절입니다.

| 메뉴 | 폴더 | 상태 |
| --- | --- | --- |
| Instruments | `instruments/` | 기획 화면 7개 옮김 (2026-11-02) |
| Dashboard | `dashboard/` | 기획 화면 2개 옮김 (2026-11-02, 2.1 2차) |
| Dashboard(All) | `dashboard-all/` | 기획 화면 2개 옮김 (2026-11-02, 2.1 2차) |
| Login | `login/` | 기획 화면 6개 옮김 (2026-11-02, 2.1 2차) |
| Profile | `profile/` | 기획 화면 4개 옮김 (2026-11-02, 2.1 2차) |
| Setting | `setting/` | IA의 Setting 화면 전부 (39개) 옮김 (2026-11-02). System Setting만 2.1 1차, 나머지 2.1 2차 |
| Event History | `event-history/` | 기획 화면 6개 옮김 (2026-11-02, 목록·상세 2.1 2차, Message 2.1 1차) |
| Information | `information/` | 기획 화면 8개 옮김 (2026-11-02, Report 2개는 2.1 2차, Program·Popup 6개는 2.1 1차) |
| Run | `run/` | 기획 화면 6개 옮김 (2026-11-02, 2.1 2차). Item details Popup은 Inventory에 둠 |
| Quick Start | `quick-start/` | 기획 화면 1개 옮김 (2026-11-02, 2.1 2차) |
| Test Management | `test-management/` | 기획 화면 4개 옮김 (2026-11-02, 2.1 2차) |
| Sample Tracking | `sample-tracking/` | 기획 화면 16개 옮김 (2026-11-02, 2.1 2차) |
| Inventory | `inventory/` | 기획 화면 16개 옮김 (2026-11-02, 2.1 2차) |
| Statistical Analysis | `statistical-analysis/` | IA의 Statistical Analysis 화면 전부 (17개) 옮김 (2026-11-02, 2.1 2차) |
| Material Setup | `material-setup/` | 기획 화면 53개 옮김 (2026-11-03). IA CID 51개(LI-TSS-PSI-01-01은 프레임 없음) + IA 미등록 RGE 2개. 주 출처는 SH2-MS 얼럿 수정 테스트 페이지, WBM·RGE 4개는 2.1 2차 |
