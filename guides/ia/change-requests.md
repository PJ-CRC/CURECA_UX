# IA 변경 기록

> IA를 바꿀 때마다 한 줄씩 적습니다. IA의 원본은 `ia/ia-screens.csv`입니다(2026-11-19부터, `ia/README.md`). 화면설계 작업의 새 CID와 IA 수정은 5단계(완료)에서 넣고 여기에 적습니다(`flow/5-done.md` 절차 2번 순서 1). 엑셀로 뽑을 때 이 표의 `반영` 줄이 IA-문서이력 시트가 됩니다.
>
> 상태: `요청 전` → `확정 (확정한 사람, 날짜)` → `반영 (날짜)`. 받아들이지 않으면 `반려 (이유)`. `확정` 줄에는 `ia-screens.csv`와 IA 스프레드시트 · IA-문서이력에 넣었는지를 함께 적습니다(예: "확정 (DY, 2026-11-17). ia-screens.csv는 고침, IA 스프레드시트 · IA-문서이력은 반영 전").

| # | 대상 | 지금 (v1.15) | 바꿀 내용 | 근거 | 요청일 | 상태 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Statistical Analysis 메뉴 구조 | Instrument·Inventory·Event 통계 화면이 Test Analytics 아래 Lv.3 | Statistical Analysis 아래 중메뉴를 Test Analytics, Instrument, Inventory, Event로 둠 (Figma 경로와 같게) | 2026-11-03 사용자 답변 (ST1), POL-STA-001 | 2026-11-03 | 확정 (DY, 2026-11-18). `ia-screens.csv`는 고침, IA 스프레드시트 · IA-문서이력은 반영 전 |
| 2 | Test Forecasting CID | TI-STA-05 (Instrument Run-time TI-STA-05-01·05-02와 계층이 겹침) | TI-STA-09 | 2026-11-03 사용자 답변 (ST1) | 2026-11-03 | 요청 전 |
| 3 | 소모품·시약 사용량 통계 이름 | "소모품 및 시약 사용량 - Chart / Table" (TI-STA-07-01·07-02) | 중메뉴 이름 Inventory (Figma 기준). 화면 이름은 Usage & Cost Trend - Chart / Table | 2026-11-03 사용자 답변 (ST1) | 2026-11-03 | 확정 (DY, 2026-11-18). `ia-screens.csv`는 고침, IA 스프레드시트 · IA-문서이력은 반영 전 |
| 4 | Event 통계 이름 | "Event 통계 - Chart / Table" (TI-STA-08-01·08-02) | 중메뉴 Event 아래 Event Trend - Chart / Table (Figma 기준) | ST1 답변에 따른 정리 (메뉴 구조를 Figma에 맞춤) | 2026-11-03 | 확정 (DY, 2026-11-18). `ia-screens.csv`는 고침, IA 스프레드시트 · IA-문서이력은 반영 전 |
| 5 | Material Setup 새 화면 | 없음 | LI-TSS-RGE-01, LI-TSS-RGE-02 추가 | 기존 작업방 Material Setup 2차 페이지 (2026-11-02 확인) | 2026-11-03 | 반영 (v1.15, 하승현). 문서이력에 화면 ID 기재 (v1.16, 서보경) |
| 6 | Dashboard(All) 메뉴 이름 | "Dashboard (All)" (괄호 앞 띄어 씀) | "Dashboard(All)" | 2026-11-04 사용자 결정 | 2026-11-04 | 반영 (시트 확인 2026-11-10: "Dashboard(All)") |
| 7 | Test Order 새 팝업 (새 CID) | 없음 | TI-TMG-01-P Resend Results to LIS (Popup, T-IOS 전용, 짝 CID 없음) | 2026-11-10 사용자 요청 (작성자 정다예) | 2026-11-10 | 반영 (v1.16, 정다예) |
| 8 | L-IOS Setting 메뉴 이름 | IA-L-IOS 시트 Lv.1 "Settings" (T-IOS는 "Setting") | "Setting" (T-IOS · LNB와 같게. 작업방 페이지 이름을 IA Lv.1에서 가져오며 T · L 화면을 한 페이지에 둠) | 2026-11-17 사용자 결정 (DY) | 2026-11-17 | 확정 (DY, 2026-11-17). `ia-screens.csv`는 고침, IA 스프레드시트 · IA-문서이력은 반영 전 |
| 9 | Instruments Overview · Inventory Summary의 Type | TI-INS-01-T · LI-INS-01-T · TI-IVT-01-T · LI-IVT-01-T의 Type이 "Page" (같은 메뉴의 다른 탭은 "Tab") | "Tab" | 2026-11-17 사용자 결정 (DY) | 2026-11-17 | 확정 (DY, 2026-11-17). `ia-screens.csv`는 고침, IA 스프레드시트 · IA-문서이력은 반영 전 |
| 10 | Instruments Module Tab 이름 (T-IOS · L-IOS) | "Prep Consumable Storage", "Sample Preparation" | "Consumable Storage", "Sample Pre-treatment" (`ia-screens.csv`는 먼저 고침, 2026-11-18) | 2026-11-18 사용자 결정 (서보경): Module 이름 바꿈, `glossary/modules.csv` | 2026-11-18 | 요청 전 |
| 11 | 메뉴 이름 셋을 Common UX · 화면 LNB 글자에 맞춤 | Lv.1 "Instruments"(T-IOS · L-IOS), Lv.2 "96 DWP"(T-IOS · L-IOS), Lv.2 "Report"(T-IOS Information) | "Instrument", "96-DWP", "Run Report" (`ia-screens.csv` 5줄은 먼저 고침, 2026-11-18) | 2026-11-18 사용자 결정 (DY). DY 쪽 저장소에서는 10번으로 적음 | 2026-11-18 | 확정 (DY, 2026-11-18). IA 스프레드시트 · IA-문서이력은 반영 전 |
| 12 | Statistical Analysis 화면 이름 · Type | Lv.3에 "Test Count - Chart"처럼 지표 이름과 보기를 함께 씀, Type `Page` (16줄) | Lv.3 지표 이름(Chart 줄에만) + Lv.4 `Chart` / `Table`, Type `Tab`. Chart · Table은 한 화면 안의 보기 전환(View: Chart / Table). 감싸는 줄 없이 첫 탭 줄에 지표 이름을 함께 씀(Instrument · Inventory · LIS Setting과 같은 모양) | 2026-11-18 사용자 결정 (DY) | 2026-11-18 | 확정 (DY, 2026-11-18). `ia-screens.csv`는 고침, IA 스프레드시트 · IA-문서이력은 반영 전 |
| 13 | Information 아래 메뉴 이름 (T-IOS · L-IOS) | Lv.2 "Program", "Manual" | "Program Info", "User Manual" (`ia-screens.csv` 4줄은 먼저 고침, 2026-11-25) | 2026-11-25 사용자 결정 (정다예) | 2026-11-25 | 확정 (정다예, 2026-11-25). IA 스프레드시트 · IA-문서이력은 반영 전 |
