# Common UX 수정 요청

> Common UX 최종본(V2.2.00, 2026-10-30, Figma "Common UX - PC")에서 고칠 곳의 목록입니다. 임시 정책과 같은 방식으로 씁니다(헌법 4조 v1.6, 2026-11-04): 누구든 여기에 고칠 곳을 올리고, 모두가 함께 확인한 뒤 반영합니다. 나중에 팀 프로그램에 이 목록을 보여 주고 [반영]을 누르면 Common UX에 고쳐지는 기능을 넣을 예정입니다(제안서 R24). 그 전까지는 Common UX를 정리하는 팀원이 Figma에서 고치고, 반영되면 "반영" 칸에 날짜를 적어 닫습니다.

| # | 프레임 | 지금 내용 | 고칠 내용 | 근거 | 반영 |
| --- | --- | --- | --- | --- | --- |
| 1 | COMM-4-a(2/4) | Partial Running의 UX action이 Stopping과 같은 문장 | Run 중 확인이 필요한 Module이 있다는 신호. Stop 기능 제공 | `policy/equipment-states.md` 2절 | |
| 2 | COMM-4-a(2/4) | Paused의 발생 Case, UX action이 "-" | Door Control Unlock 후 Pausing을 거쳐 Paused. 서랍형 Storage가 열려 있을 때 로봇팔이 Consumable을 채우러 접근하면 Paused (서랍을 연다고 바로 Paused가 되지는 않음) | `policy/equipment-states.md` 5절 | |
| 3 | COMM-4-a(3/4) | 검사 장치(Device) 상태 코드명 `Idle` | (수정 없음) 코드명은 Idle 유지, UI 표기는 Ready | 2026-11-02 확인 | 철회 (2026-11-02) |
| 4 | COMM-3-a(2/2) | "L-IOS 모드(Main·Console·TSS)" | Service Mode (Main Mode / Console Mode / TSS Mode) | 용어집 | |
| 5 | COMM-3-a(2/2) | 기능 표 "Settings", "Tube setting", LNB "AssayPack Setting" | Setting, Tube Setting, Assay Pack Setting | 용어집 | |
| 6 | COMM-3-a(2/2) | 기능 표에 Assay Pack Setting 행 없음 | Main Mode만 O | `policy/service-mode-matrix.csv` | |
| 7 | COMM-3-a(2/2) | LNB에 Information > Manual | 메뉴가 준비될 때까지 제외 | 2026-10-30 결정 | |
| 8 | COMM-2-b, COMM-3-a(1/2) | "사용자 권한별", "사용자 유형", "Service 계정" | User Type, Service User Type | 용어집 | |
| 9 | 모든 프레임 | 화면 정보 Ver 2.0.01, Date YYYY.MM.DD | Revision History의 V2.2.00, 2026-10-30과 맞춤 | Revision History | |
| 10 | COMM-2-a | T-IOS LNB "All Dashboard" | Dashboard(All) | 2026-11-04 사용자 결정, 용어집 | |
| 11 | COMM-4-a(1/4) | Module명 `ModuleType(index)`, 예 `Sample Storage(1)` | 이름과 번호 사이 띄어 씀 `Sample Storage (1)` | 용어집(2026-10-30 결정), `pending/PD-0007.md` | |
| 12 | COMM-3-a(1/2) | GNB 일시 "접속 환경 기준 일시" | 장비 기준 일시 (L-IOS · T-IOS 모두 CURECA 장비 시간대) | 2026-11-04 사용자 결정, `common-ux/common-policy-candidates.md` 3절 6번 | |
| 13 | COMM-0, COMM-5-v 외 참조 | "Tool Tip" | Tooltip | 용어집 Tooltip, 2026-11-04 사용자 결정 (용어집 기준) | |
| 14 | COMM-5-q 외 참조 | "Check Box" | Checkbox | 용어집 Checkbox, 2026-11-04 사용자 결정 (용어집 기준) | |
| 15 | COMM-0, COMM-5-t 외 참조 (COMM-5-p Search Bar · 5-w Validation Check 문구 포함) | "Text Field" | Text Input | 용어집 Text Input, 2026-11-04 사용자 결정 (용어집 기준) | |
