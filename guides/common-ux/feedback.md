# Common UX 수정 요청

> Common UX 최종본(V2.2.00, 2026-10-30)을 저장소 기준 자료와 맞춰 보며 찾은 고칠 곳입니다. Common UX를 정리하는 팀원에게 전달하고, 반영되면 날짜를 적어 닫습니다.

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
