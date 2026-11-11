# 정책서 반영 대기

> 정책서 정제(작업 목록 7번) 때 반드시 반영할 내용입니다. 정책서를 정제할 때 Claude는 이 목록을 먼저 읽고, 반영한 항목은 반영한 정책 ID와 날짜를 적어 닫습니다.

이미 확정되었지만 정책서(2026.08.28)에 없거나 정책서와 다른 내용을 모읍니다.

## 추가할 것

| # | 내용 | 확정 | 근거 |
| --- | --- | --- | --- |
| 1 | 장비 통합 상태가 Running 또는 Error일 때는 프로그램 종료와 시스템 종료를 할 수 없다 | 2026-11-02 | 사용자 확인. `policy/equipment-states.md` 7절 **닫힘: POL-ACC-004 (2026-11-02)** |
| 2 | Partial Running: Run 중 Module 1대 이상이 Running이면서 1대 이상이 Error 또는 Paused인 상태. 확인이 필요한 Module이 있다는 신호 | 2026-11-02 | `policy/equipment-states.md` 2절 **닫힘: POL-EQP-001·002·004 반영 (2026-11-02)** |
| 3 | Pausing과 Paused의 발생 경우 (Door Control Unlock, 서랍형 Storage가 열려 있을 때 로봇팔이 Consumable을 채우러 접근한 경우. 서랍을 연다고 바로 Paused가 되지는 않음) | 2026-11-02 | `policy/equipment-states.md` 5절 **닫힘: POL-EQP-004 반영 (2026-11-02)** |
| 4 | [Unlock all doors]는 장비 통합 상태가 Ready, Error, Paused, Not Initialized일 때만 활성화 | 2026-11-02 | `policy/equipment-states.md` 5절 |
| 5 | Check Test Protocol 단계는 Setting에서 사용으로 설정했을 때만 Run 준비 단계에 나온다 | 2026-10-30 | `policy/permission.md` 3절 **닫힘: POL-TST-001 (2026-11-02)** |
| 6 | 최초 설치 때는 Service 계정만 있고, Service User가 고객용 Admin 계정을 만들어 전달한다 | 2026-10-30 | `policy/permission.md` 5절 **닫힘: POL-ACC-002 (2026-11-02)** |
| 7 | Service Mode별 메뉴·기능 (Main Mode / Console Mode / TSS Mode) | 2026-10-30 | `policy/service-mode.md` |
| 8 | User Type별 권한 | 2026-10-30 | `policy/permission-matrix.csv` **닫힘: POL-ACC-001 (2026-11-02)** |
| 9 | 검사군: RP(RP1~RVM 7개), GI(GI-V~H.ClariR 8개), HPV(3개), RTI(STI-12~STI-7e 12개)와 검사군별 사용 가능 검체 타입. 8월 정책서 "PCR Regents 조합 검사 정책"(호흡기 4개·소화기 4개만 조합, STI-12·HPV28 단독)과 다르므로 TST 정책을 쓸 때 조합 규칙을 판정받아 반영 | 2026-11-02 (원본 확인) | `glossary/test-items.csv`, `glossary/sample-types.csv`, 씨젠 검사 항목 261022 **닫힘: POL-TST-010 (2026-11-02, HPV·RTI 조합은 확인 중)** |
| 10 | 검사 항목별 추출 장치(M9600, STARlet) 사용 가능 여부는 기본값이며 T-IOS에서 바꿀 수 있고, 최소 1개는 사용 가능이어야 한다 | 2026-11-02 (원본 확인) | `glossary/test-items.csv`, 씨젠 검사 항목 261022 > 검사 항목별 추출 장치 매핑 정보 **닫힘: POL-TST-005 (2026-11-02)** |
| 11 | Not Tested (Sample 상태): 검사 시작 후 Ready 상태였던 검체가 Prep 장비에서 검사가 진행되지 못한 채 회수된 상태. 원인은 1) 바코드 훼손으로 인식 불가 2) Socket 내 위치에 등록된 바코드와 불일치 | 2026-11-02 | 사용자 결정 (팀원 Q7 정의를 통합 표현으로, 씨젠 상태 정보 261021 정의를 원인으로). `glossary/status-values.csv` **닫힘: POL-SMP-001 (2026-11-02)** |
| 12 | Error 모듈 복구: Error 처리 후 문을 닫으면 자동으로 검사 가능 상태를 확인하고, 정상이면 Module 상태가 Ready로 돌아간다. 정상이 아닐 때 동작은 미정 (팀원 Q22) | 2026-11-02 | 팀원 정책 POL-INS-06 (팀원 쪽 사용자 확인 2026-10-29). EQP . 정상이 아닐 때 동작은 고객 논의 CA-0002 |
| 13 | Trolley 구성 리셋 시점과 범위 (아래 "13번 상세") | 2026-11-02 | 팀원 정책 POL-MAT-06 (팀원 쪽 사용자 전달 2026-10-28). MAT. 연관 화면 미정 (팀원 Q21) **닫힘: POL-MAT-010 (2026-11-03)** |
| 14 | 검사 배치 완료 상태(Completed, Failed, Not Tested, Partially Completed, Stopped)는 가동 리포트 메뉴용 상태값. Test Status 화면(TI-TMG-02, LI-TMG-02)에는 우선 넣지 않는다 | 2026-11-02 | 팀원 정책 POL-SMP-11 (고객사 협의, 팀원 쪽 사용자 전달 2026-11-02). SMP **닫힘: POL-SMP-004 규칙 4 (2026-11-02)** |
| 15 | STAT 상태의 검체 = 응급 검체 | 2026-11-02 | 팀원 Q8 (팀원 쪽 사용자 확인 2026-10-15). SMP, LOD (STAT Storage 최우선 처리와 함께 검토) **닫힘: POL-SMP-008 (2026-11-02)** |

## 고칠 것

| # | 정책서 지금 내용 | 바꿀 내용 | 근거 |
| --- | --- | --- | --- |
| 1 | "Admin은 Setting 메뉴 접근 불가" | Admin은 Tube Setting, Assay Pack Setting을 뺀 Setting 하위 메뉴를 쓴다 | `policy/permission-matrix.csv` **닫힘: POL-ACC-001 (2026-11-02)** |
| 2 | 종료 옵션: Service, Admin은 로그아웃·프로그램 종료·시스템 종료 | Service는 [Exit](프로그램·시스템 종료), Admin과 User는 [Shut Down](시스템 종료) | Common UX COMM-3-a(1/2) **닫힘: POL-ACC-004 (2026-11-02)** |
| 3 | "Preset Mode(가칭)", "설치 모드" | Service Mode (Main Mode / Console Mode / TSS Mode) | 용어집 |
| 4 | Session Timeout "Idle(Ready)" | Ready | 2026-10-30 결정 (Idle → Ready) **닫힘: POL-ACC-008 (2026-11-02)** |
| 5 | "Not Tested (가칭)" | Not Tested | 용어집 |
| 6 | 계정 유형, 등급, Account Type, 소문자 user/admin/service | User Type, Service / Admin / User | 용어집 **닫힘: POL-ACC-001 (2026-11-02)** |
| 7 | 장비 통합 상태값에 Paused 없음, Ready 조건 "모든 모듈이 Idle" | `glossary/status-values.csv`와 `policy/integrated-state-transitions.csv` 기준 | Common UX COMM-4-a **닫힘: POL-EQP-001·002 반영 (2026-11-02)** |
| 8 | Door 상태 Lock / Unlock, Open / Close | Locked / Unlocked, Open / Closed | 용어집 |
| 9 | 오타: PCR Regents, 페기물함, 상태갑싱, 유통기한 | PCR Reagents, Waste Bin, 상태값이, Expiration Date | 용어집 |
| 10 | 큐레카(QREKA) | CURECA | 용어집 **닫힘: POL-SYS-001 (2026-11-02)** |
| 11 | 만료 시약 검사 불가: Run 준비 단계에서 만료 Reagent가 있으면 Run Start 불가 | 제약 없앰. Instrument가 Reagent를 쓰기 직전 Barcode로 Expiration Date를 확인해 지났으면 자동 폐기 **닫힘: POL-SMP-007 규칙 3 (2026-11-02)** | 2026-11-02 사용자 전달 (SM2-a) |
| 12 | Material Setup > PCR Reagents 소켓 구성 정책: "PCR Box 내 IC(Internal Control)는 분리되어 STAT Storage로 입고" | IC는 PCR box에서 분리해 Prep 시스템 Trolley(Prep Consumable Storage > Trolley)로 입고 **닫힘: POL-INV-007 (2026-11-03)** | 2026-11-03 사용자 확인 (8월 정책서는 이전 내역). STAT Storage 입고 대상 목록의 "PCR Reagent 내의 IC"도 LOD 정책 때 함께 확인 |
| 13 | 트롤리 도킹 & Drawer Loading > STAT Storage 입고 및 회수 정책: STAT 전용 입고 대상에 Sample in socket, Trolley에 구성되는 모든 소모품·시약, PK Tube, IC. STAT에 입고된 소모품·시약을 먼저 소모 | STAT Storage는 Sample Socket만 받음. 소모품·시약 관련 문장은 지움 **닫힘: POL-LOD-003 (2026-11-03)** | 2026-11-03 사용자 확인 (MS14) |

## 13번 상세: Trolley 구성 리셋

출처: 팀원 정책 MD POL-MAT-06 (팀원 쪽 사용자 전달 2026-10-28). 용어는 이 저장소 표기로 바꿈.

- 공통: 해당 대상의 데이터만 리셋하고, 하위 대상의 데이터는 유지한다. 대상: Lot, Socket(Sample, PCR Reagent), Tray, Trolley, Drawer(STAT, DX)

| Trolley | 단위 | 리셋 시점 | 리셋 범위 |
| --- | --- | --- | --- |
| Sample Trolley | Rack (Sample Socket 단위) | 회수 Trolley로 이동 완료된 시점 | Socket 안의 Sample 값, Socket이 꽂혀 있던 Tray 위치 값 |
| Sample Trolley | Tray | 투입 Trolley 안의 마지막 Sample Rack이 회수 Trolley로 이동 완료된 시점 | Tray에 연결된 Trolley 정보 값 |
| Sample Trolley | Trolley | Trolley 안의 마지막 Tray 값이 리셋된 시점 (모든 Sample이 회수 Trolley로 이동 완료) | - |
| Consumable Trolley | Rack (또는 입고 단위) | Rack에 구성된 모든 Consumable(또는 Reagent)이 소진된 시점 | Rack이 꽂혀 있던 Tray 위치 값 |
| Consumable Trolley | Tray | Tray 안의 마지막 Consumable Rack이 전처리 장비에서 모두 사용 완료되어 Tray 위치 값이 제거된 시점 | Tray에 연결된 Trolley 정보 값 |
| Consumable Trolley | Trolley | Trolley 안의 마지막 Tray 값이 리셋된 시점 (모든 Consumable 소진 완료) | - |

- Sample Trolley 안에 Sample Rack이 1개라도 남아 있으면 그 Tray와 Trolley 값은 리셋되지 않으므로, 사용 중인 Trolley로 본다.
- Consumable Rack이 다 소진되지 않고 Tray로 돌아오면 리셋 대상이 아니다.
- Consumable Trolley 안에 소진되지 않은 Consumable이 있으면 사용 중인 Trolley로 보고, 새로 작업할 때 신규 작업 여부를 묻고 진행한다 (적용 예정).
- PCR 전용 Socket: 사용자가 Socket을 인식(바코드 스캔 등)하는 시점에 기존 데이터가 리셋되고 새 정보로 갱신된다.
