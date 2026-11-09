# Common UX 수정 요청

> Common UX에서 고칠 곳의 목록입니다. Common UX의 원본은 팀 프로그램 UX 문서 › UX가이드에서 "적용"한 가이드 문서(MD)이고, Figma "Common UX - PC" 페이지(V2.2.00)는 가이드를 고친 뒤 반영하는 결과물입니다(2026-11-05). 임시 정책과 같은 방식으로 씁니다(헌법 4조 v1.6): 누구든 여기에 고칠 곳을 올리고, 함께 확인한 뒤 가이드를 고치고 Figma에 반영합니다. 나중에 팀 프로그램에서 [반영]을 누르면 가이드 수정과 Figma 반영이 함께 되는 기능을 넣을 예정입니다(제안서 R24). 반영되면 "반영" 칸에 날짜를 적어 닫습니다.

## 고칠 곳 (2026-11-05 다시 정리)

- **고칠 곳:** 가이드 = 적용된 UX가이드 문서(원본), Figma = Common UX - PC 페이지(반영 결과). 원본인 가이드를 먼저 고치고 Figma에 반영합니다.
- **상태:** `전달 전` → `전달함 (날짜)` → `반영 (날짜)`. 받아들이지 않으면 `철회 (날짜, 이유)`.
- 지금까지 모두 **전달 전**입니다.

| # | Common UX 항목 | 지금 내용 | 고칠 내용 | 고칠 곳 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | COMM-4-a(2/4) 장비 상태값 | Partial Running의 UX action이 Stopping과 같은 문장 | Run 중 확인이 필요한 Module이 있다는 신호. Stop 기능 제공 | 가이드 · Figma | `policy/equipment-states.md` 2절 | 전달 전 |
| 2 | COMM-4-a(2/4) 장비 상태값 | Paused의 발생 Case, UX action이 "-" | Door Control Unlock 후 Pausing을 거쳐 Paused. 서랍형 Storage가 열려 있을 때 로봇팔이 Consumable을 채우러 접근하면 Paused (서랍을 연다고 바로 Paused가 되지는 않음) | 가이드 · Figma | `policy/equipment-states.md` 5절 | 전달 전 |
| 3 | COMM-4-a(3/4) Unit 상태값 | 검사 장치(Device) 상태 코드명 `Idle` | (수정 없음) 코드명은 Idle 유지, UI 표기는 Ready | - | 2026-11-02 확인 | 철회 (2026-11-02) |
| 4 | COMM-3-a(2/2) 모드별 LNB | "L-IOS 모드(Main · Console · TSS)" | Service Mode (Main Mode / Console Mode / TSS Mode) | 가이드 · Figma | 용어집 | 전달 전 |
| 5 | COMM-3-a(2/2) 모드별 LNB | 기능 표 "Settings", "Tube setting", LNB "AssayPack Setting" | Setting, Tube Setting, Assay Pack Setting | 가이드 · Figma | 용어집 | 전달 전 |
| 6 | COMM-3-a(2/2) 모드별 LNB | 기능 표에 Assay Pack Setting 행 없음 | Main Mode만 O | 가이드 · Figma (가이드는 기능 표를 요약만 하므로 표를 옮길 때 함께) | `policy/service-mode-matrix.csv` | 전달 전 |
| 7 | COMM-3-a(1/2) · (2/2) LNB | LNB에 Information > Manual | 메뉴가 준비될 때까지 제외 | 가이드 · Figma | 2026-10-30 결정 | 전달 전 |
| 8 | COMM-2-b, COMM-3-a(1/2) | "사용자 권한별", "사용자 유형", "Service 계정" | User Type, Service User Type | 가이드 · Figma | 용어집 | 전달 전 |
| 9 | 모든 프레임 머리 | 화면 정보 Ver 2.0.01, Date YYYY.MM.DD | Revision History의 V2.2.00, 2026-10-30과 맞춤 | Figma | Revision History | 전달 전 |
| 10 | COMM-2-a GNB / LNB | T-IOS LNB "All Dashboard" | Dashboard(All) | 가이드 · Figma | 2026-11-04 사용자 결정, 용어집 | 전달 전 |
| 11 | COMM-4-a(1/4) Module명 | `ModuleType(index)`, 예 `Sample Storage(1)` | 이름과 번호 사이 띄어 씀 `Sample Storage (1)` | 가이드 · Figma | 용어집(2026-10-30 결정), 내부 논의 `pending/PD-0007.md` | 전달 전 |
| 12 | COMM-3-a(1/2) GNB | GNB 일시 "접속 환경 기준 일시" | 장비 기준 일시 (L-IOS · T-IOS 모두 CURECA 장비 시간대) | 가이드 · Figma | 2026-11-04 사용자 결정 | 전달 전 |
| 13 | COMM-0, COMM-5-v 외 | "Tool Tip" | Tooltip | Figma (가이드는 이미 Tooltip) | 용어집 Tooltip, 2026-11-04 사용자 결정 | 전달 전 |
| 14 | COMM-5-q 외 | "Check Box" | Checkbox | Figma (가이드는 이미 Checkbox) | 용어집 Checkbox, 2026-11-04 사용자 결정 | 전달 전 |
| 15 | COMM-0, COMM-5-t 외 (Search Bar · Validation Check 문구 포함) | "Text Field" | Text Input | Figma (가이드는 이미 Text Input) | 용어집 Text Input, 2026-11-04 사용자 결정 | 전달 전 |
| 16 | 5장 Component 전체 | 가이드는 SH.L TEST › Connon UX를 옮긴 것이라 번호 20개(5-a ~ 5-t, "Tab이 빠짐"으로 적음)와 일부 이름 · 내용이 Figma Common UX - PC와 다름 | 가이드 5장을 Common UX - PC에 맞춤: 번호 5-a ~ 5-w, Breadcrumb · Info Box · Tab(Underline · Outline · Container Tab) 추가, Label(가이드 Badge) · Data Table · Progress Bar, Floating Button, 팝업 위 새 팝업의 Dim 규칙, Checkbox Square · Round와 Mix Selected. 이름은 용어집(Tooltip · Checkbox · Text Input) | 가이드 | 2026-11-04 사용자 결정(5장 기준 Common UX - PC), `common-ux/common-policy-candidates.md` | 전달 전 |
| 17 | COMM-4-a(1/4) Module명 | 같은 Type 2대 이상은 `ModuleType(index)` (예: Sample Storage(1), 붙여 씀) | `Sample Storage (1)`처럼 띄어 씀 | 가이드 · Figma | 용어집 "이름 (번호)" 표기, 2026-11-06 Event History 다시 그리기(케이스 1 테스트) | 전달 전 |
| 18 | COMM-4-a(4/4) 이벤트 상태 | Open · Closed 값만 있고 표시 색 · 컴포넌트(Status/Event Status)가 없음 | Event Status 표시 색과 컴포넌트를 정함 (테스트에서는 Status Base Blue · Gray로 그림) | 가이드 · Figma | 2026-11-06 Event History 다시 그리기 (TI-EVT-P Q2) | 전달 전 |
| 19 | COMM-5-m(3/4) Event Stacked Popup | 가이드 이미지만 있고 Figma 컴포넌트가 없음 (P-Components 표에 없음) | 컴포넌트로 만들기 (테스트에서는 가이드대로 직접 그림) | Figma | 2026-11-06 Event History 다시 그리기 (TI-EVT-02-P) | 전달 전 |
