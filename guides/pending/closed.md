# 끝난 반영 대기 항목

> 반영을 마쳤거나(`반영 완료`) 제외한(`제외`) 항목입니다. 따로 요청할 때만 읽습니다. 쓰는 법은 [reference-rules/pending-changes.md](../reference-rules/pending-changes.md)입니다.

| ID | 메뉴 | 화면 (CID) | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| LI-EVT-01-P-R01 | Event History | Event History Detail (LI-EVT-01-P) | 기준 자료 변경 | Notes "최대 500자 → 300자" | 300자 (500자는 취소선으로 제거됨) | Figma 취소선, POL-EVT-002 | 제외 (2026-11-04, 취소선) |
| LI-EVT-P-R01 | Event History | Event History (LI-EVT-P) | 점검 발견 | 1·3에 Event Type 옛 값과 새 값이 함께 있음 | 옛 값은 취소선으로 이미 제거됨 | Figma 취소선 | 제외 (2026-11-04, 취소선) |
| TI-EVT-01-P-R04 | Event History | Event History Detail (TI-EVT-01-P) | 기준 자료 변경 | Effect의 참고 문서 "[SRD] CURECA Prep 및 Dx 장비 Event 정의"가 기준 출처 목록에 없음 | 값은 고객·개발사가 관리하는 문서를 따름. 저장소에 넣지 않음 | POL-EVT-001 규칙 7 | 제외 (2026-11-04, 바꿀 것 칸 참고) |
| TI-EVT-P-R01 | Event History | Event History (TI-EVT-P) | 기준 자료 변경 | 5-1 "Confirm_L_003", "Alert_L_003". Alert_003은 알럿 관리 페이지에서 삭제됨 | 취소선으로 이미 제거됨. T-IOS는 Status 변경과 일괄 Closed가 없음 | Figma 취소선, POL-EVT-002 | 제외 (2026-11-04, 취소선) |
| TI-EVT-P-R02 | Event History | Event History (TI-EVT-P) | 기준 자료 변경 | 5 체크박스 + [Mark as Closed]. 화면 글자에는 버튼이 없음. L-IOS는 [Mark all as Closed] | 취소선으로 이미 제거됨. T-IOS는 Status 변경과 일괄 Closed가 없음 | Figma 취소선, POL-EVT-002 | 제외 (2026-11-04, 취소선) |
| LI-EVT-01-P-R02 | Event History | Event History Detail (LI-EVT-01-P) | 점검 발견 | 6, 7 "닫기" 중복 | 하나로 | 디스크립션 | 반영 완료 (2026-11-26) |
| LI-EVT-01-P-R03 | Event History | Event History Detail (LI-EVT-01-P) | 기준 자료 변경 | Status·Notes "공통 UX 참고 : COMM-3-a" | POL-EVT-002 참조 | POL-EVT-002 | 반영 완료 (2026-11-26) |
| LI-EVT-01-P-R04 | Event History | Event History Detail (LI-EVT-01-P) | 기준 자료 변경 | Module "FlexibleExtraction", Unit "Starlet" | Flexible Extraction (1), STARlet | `glossary/modules.csv` | 반영 완료 (2026-11-26) |
| LI-EVT-02-P-R01 | Event History | Event Message Popup (LI-EVT-02-P) | 기준 자료 변경 | 0 "Main PC, 콘솔용 PC" | L-IOS Client Mode로 표기: Main Mode, Console Mode (MS Mode 제외) | POL-EVT-003, `policy/client-mode.md` | 반영 완료 (2026-11-26) |
| LI-EVT-02-P-R02 | Event History | Event Message Popup (LI-EVT-02-P) | 기준 자료 변경 | 3 Type "Instrument, Consumable, Reagent" | Instrument, Inventory, Sample, System | `glossary/status-values.csv` | 반영 완료 (2026-11-26) |
| LI-EVT-02-P-R03 | Event History | Event Message Popup (LI-EVT-02-P) | 점검 발견 | Eorrer, warning | Error, Warning | 오타 | 반영 완료 (2026-11-26) |
| LI-EVT-P-R02 | Event History | Event History (LI-EVT-P) | 기준 자료 변경 | 5 [Mark all as Closed] 범위 "상태값이 Open인 모든 Events" | 디스크립션에 넣음: 지금 검색 조건으로 불러온 목록의 모든 페이지에서 Open인 Event 전체 | POL-EVT-002 규칙 4 | 반영 완료 (2026-11-26) |
| LI-EVT-P-R03 | Event History | Event History (LI-EVT-P) | 기준 자료 변경 | 4 "공통 UX 참고 : COMM-3-a" | Status 변경 가능 조건은 POL-EVT-002 참조 | POL-EVT-002 | 반영 완료 (2026-11-26) |
| LI-EVT-P-R04 | Event History | Event History (LI-EVT-P) | 기준 자료 변경 | OPEN, Statue, Cureca | Open, Status, CURECA | `glossary/status-values.csv`, 오타 | 반영 완료 (2026-11-26) |
| LI-EVT-P-R06 | Event History | Event History (LI-EVT-P) | 기준 자료 변경 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 반영 완료 (2026-11-26) |
| TI-EVT-01-P-R01 | Event History | Event History Detail (TI-EVT-01-P) | 기준 자료 변경 | Module "FlexibleExtraction", Unit "Starlet" (코드명·소문자) | Flexible Extraction (1), STARlet | `glossary/modules.csv`, `module-units.csv` | 반영 완료 (2026-11-26) |
| TI-EVT-01-P-R02 | Event History | Event History Detail (TI-EVT-01-P) | 점검 발견 | 1 "Created Date", 화면 "Occurred Date/Time" | 하나로 통일 | 화면 글자 | 반영 완료 (2026-11-26) |
| TI-EVT-01-P-R03 | Event History | Event History Detail (TI-EVT-01-P) | 기준 자료 변경 | T-IOS에서 Status를 바꿀 수 있는지 상세 화면에 없음 (목록 TI-EVT-P 4는 바꿀 수 있음) | POL-EVT-002 참조 | POL-EVT-002 | 반영 완료 (2026-11-26) |
| TI-EVT-02-P-R01 | Event History | Event Message Popup (TI-EVT-02-P) | 기준 자료 변경 | 0 "Profile에 추가 예정, 지금은 모두 노출" | Profile > General의 Event notifications(On이면 노출, 기본 On)로 정리 | POL-EVT-003, TI-CPW-01-P (v2.1.11) | 반영 완료 (2026-11-26) |
| TI-EVT-02-P-R02 | Event History | Event Message Popup (TI-EVT-02-P) | 기준 자료 변경 | 3 Type "Instrument, Consumable, Reagent" | Instrument, Inventory, Sample, System | `glossary/status-values.csv` | 반영 완료 (2026-11-26) |
| TI-EVT-02-P-R03 | Event History | Event Message Popup (TI-EVT-02-P) | 기준 자료 변경 | 8 "Event Detail Popup(LI-EVT-01-P)" | TI-EVT-01-P | IA | 반영 완료 (2026-11-26) |
| TI-EVT-02-P-R04 | Event History | Event Message Popup (TI-EVT-02-P) | 점검 발견 | Eorrer, warning, High-throughput Extraction(1) | Error, Warning, High-throughput Extraction (1) | 오타, 이름 (번호) | 반영 완료 (2026-11-26) |
| TI-EVT-P-R05 | Event History | Event History (TI-EVT-P) | 점검 발견 | Statue, Cureca, 1 "Event ID, Code" 검색 (화면에 입력 칸 없음) | Status, CURECA, 검색 항목을 화면과 맞춤 | 오타, 화면 글자 | 반영 완료 (2026-11-26) |
| TI-EVT-P-R06 | Event History | Event History (TI-EVT-P) | 기준 자료 변경 | 목록 요약 "OPEN", Unit "CFX96-1" | Open, CFX96 (1) | `glossary/status-values.csv`, 이름 (번호) | 반영 완료 (2026-11-26) |
| TI-EVT-P-R07 | Event History | Event History (TI-EVT-P) | 기준 자료 변경 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 반영 완료 (2026-11-26) |
| LI-INS-02-T-R02 | Instruments | All Tab (LI-INS-02-T) | 기준 자료 변경 | 2-1 Error Rate가 남아 있음. 버전 메모 v2.1.01은 "Error Rate 제거(2-1)" | 취소선으로 이미 제거됨. 표시 위치는 고객 논의 중(CA-0001) | POL-EQP-010 | 제외 (2026-11-04, 취소선) |
| LI-INS-02-T-R04 | Instruments | All Tab (LI-INS-02-T) | 점검 발견 | Module Details (Sample Pre-treatment): Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower) | Waste Bin (Upper), Waste Bin (Lower) | 같음 | 제외 (2026-11-19, 씨젠 상태 정보 261119에서 Tip · Film Waste Bin이 로체시스템즈 장비의 Unit으로 생김. 폐기함은 설치된 제조사의 Unit으로 표기함, DS-0005) |
| LI-INS-02-T-R07 | Instruments | All Tab (LI-INS-02-T) | 점검 발견 | 4-1 [Run-time Info] 설명이 남아 있음 | 취소선으로 이미 제거됨 | Figma 취소선 | 제외 (2026-11-04, 취소선) |
| TI-INS-02-T-R02 | Instruments | All Tab (TI-INS-02-T) | 기준 자료 변경 | 2-1 Error Rate가 남아 있음. 버전 메모 v2.1.01은 "Error Rate 제거(2-1)" | 취소선으로 이미 제거됨. 표시 위치는 고객 논의 중(CA-0001) | POL-EQP-010 | 제외 (2026-11-04, 취소선) |
| TI-INS-02-T-R04 | Instruments | All Tab (TI-INS-02-T) | 점검 발견 | Module Details (Sample Pre-treatment): Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower) | Waste Bin (Upper), Waste Bin (Lower) | 같음 | 제외 (2026-11-19, 씨젠 상태 정보 261119에서 Tip · Film Waste Bin이 로체시스템즈 장비의 Unit으로 생김. 폐기함은 설치된 제조사의 Unit으로 표기함, DS-0005) |
| TI-INS-02-T-R07 | Instruments | All Tab (TI-INS-02-T) | 점검 발견 | 4-1 [Run-time Info], 4-2 [Enable setting] 설명이 남아 있음 | 취소선으로 이미 제거됨 | Figma 취소선 | 제외 (2026-11-04, 취소선) |
| TI-INS-02-T-R08 | Instruments | All Tab (TI-INS-02-T) | 기준 자료 변경 | 2-2 "[Enable setting → Management] 버튼 ... 아래 조건 모두 제거 요청" 메모 | 옛 조건은 취소선으로 제거됨. [Management]를 누르면 조건 없이 Popup을 엶 | Figma 취소선, POL-EQP-009 | 제외 (2026-11-04, 취소선) |
| LI-LOG-01-R03 | Login | Sign in (LI-LOG-01) | 기준 자료 변경 | 로그인 전 [Shut Down]은 모든 사용자에게 보임 | 맞음. 누구나 쓸 수 있음 | POL-ACC-004 규칙 5 | 제외 (2026-11-04, 바꿀 것 칸 참고) |
| TI-LOG-01-R02 | Login | Sign in (TI-LOG-01) | 기준 자료 변경 | 5 [Exit] 버튼 설명 | Figma에서 취소선으로 제거된 항목. 다시 그릴 때 넣지 않음 | 2026-11-02 사용자 확인, POL-ACC-004 규칙 6 | 제외 (2026-11-04, 바꿀 것 칸 참고) |
| LI-TSS-RGE-01-R06 | Material Setup | View Trolley Info (LI-TSS-RGE-01) | 기준 자료 변경 | L-IOS Client Mode 미정 (Material Setup 다른 메뉴는 TSS 또는 Console) | 확인 | `policy/client-mode-matrix.csv` | 반영 완료 (2026-11-12, 연동 변경 · DS-0001) |
| LI-STN-02-R04 | Setting | System Setting (LI-STN-02) | 기준 자료 변경 | 계정 잠금 해제 시간 설정 항목 없음 | 설정 항목 두지 않음 (잠금 시간 5분 고정) | POL-ACC-007 | 제외 (2026-11-04, 바꿀 것 칸 참고) |
| LI-STN-02-R08 | Setting | System Setting (LI-STN-02) | 기준 자료 변경 | 1 Language "현재 기준, English만 제공" | 6개 언어(영어, 한국어, 포르투갈어, 스페인어, 이탈리아어, 프랑스어) 중 선택, 기본 English | POL-COM-004 | 제외 (2026-11-04, R10으로 대체) |
| TI-STN-02-R05 | Setting | System Setting (TI-STN-02) | 기준 자료 변경 | 계정 잠금 해제 시간 설정 항목이 화면에 없음 (Account Locked 화면은 "관리자가 설정한 제한 시간") | 설정 항목 두지 않음 (잠금 시간 5분 고정) | POL-ACC-007 | 제외 (2026-11-04, 바꿀 것 칸 참고) |
| TI-STN-02-R08 | Setting | System Setting (TI-STN-02) | 기준 자료 변경 | 1 Language "현재 기준, English만 제공" | 6개 언어(영어, 한국어, 포르투갈어, 스페인어, 이탈리아어, 프랑스어) 중 선택, 기본 English | POL-COM-004 | 제외 (2026-11-04, R10으로 대체) |
| TI-STN-04-01-T-R02 | Setting | Interface Configuration (TI-STN-04-01-T) | 점검 발견 | 번호 4가 두 번 (T-IOS Network, LIS Network), 3-1 없음 | 번호 정리 | 디스크립션 | 제외 (2026-11-27, 케이스 3 규칙과 부딪힘: 빈 번호 3-1은 그대로 둠. 겹친 4는 케이스 3 번호 규칙대로 3단계에서 고침 — 작업 기록 20261127-서보경-lis-setting) |
| TI-STN-05-R02 | Setting | Account Setting (TI-STN-05) | 논의 결정 | 목록 범위 "Admin이 생성한 모든 계정", User Type 필터 All/Admin/User. Service 계정이 목록에 나오는지, Service가 만든 계정은 어떻게 되는지 없음 | 임시 정책 PV-0002 반영 (Admin에게 Service 계정 숨김, Service 계정 최소 1개, 자기 계정 삭제 불가 Alert_047) | PV-0002, CA-0003 | 제외 (2026-11-05, PV-0002 승인으로 R04 · R05 · R06로 대체) |
| TI-STN-05-R03 | Setting | Account Setting (TI-STN-05) | 논의 결정 | 삭제 제한 없음 (자기 계정, 로그인 중인 계정, 마지막 Admin 삭제) | 임시 정책 PV-0002 반영 (Admin에게 Service 계정 숨김, Service 계정 최소 1개, 자기 계정 삭제 불가 Alert_047) | PV-0002, CA-0003 | 제외 (2026-11-05, PV-0002 승인으로 R04 · R05 · R06로 대체) |
| LI-STN-08-R01 | Setting | Assay Pack Setting (LI-STN-08) | 점검 발견 | 번호 3이 없음 (2 다음 4) | 번호 정리 | 디스크립션 | 제외 (2026-11-25, 케이스 3 규칙과 부딪힘: 빈 번호를 그대로 둠) |
| TI-STN-08-R01 | Setting | Assay Pack Setting (TI-STN-08) | 점검 발견 | Ver 0.3.0 (화면 Ver 체계 X.Y.ZZ가 아님) | 2.1.ZZ 체계로 | `old-rules/repository-and-id.md` 6절 | 제외 (2026-11-25, 케이스 3 규칙과 부딪힘: 케이스 3은 기존 Ver 그대로 둠) |
| LI-EVT-P-R05 | Event History | Event History (LI-EVT-P) | 기준 자료 변경 | Expiration date Status, Under 30 Day | 대소문자 통일, Under 30 days | `archive/glossary/review-v0.md` | 제외 (2026-11-25, 바꾸지 않음: 이 화면에 없는 글자, 시약 만료 상태는 시스템에서 쓰지 않는 값 — 요청자 답) |
| TI-EVT-P-R03 | Event History | Event History (TI-EVT-P) | 기준 자료 변경 | Expiration date Status | 대소문자 통일 (PD-0001 결정 후) | `archive/glossary/review-v0.md` | 제외 (2026-11-25, 바꾸지 않음: 이 화면에 없는 글자, 시약 만료 상태는 시스템에서 쓰지 않는 값 — 요청자 답) |
| TI-EVT-P-R04 | Event History | Event History (TI-EVT-P) | 기준 자료 변경 | Under 30 Day | Under 30 days | `glossary/status-values.csv` 시약 만료 상태 | 제외 (2026-11-25, 바꾸지 않음: 이 화면에 없는 글자, 시약 만료 상태는 시스템에서 쓰지 않는 값 — 요청자 답) |
| TI-IVT-01-T-R07 | Inventory | Inventory Summary (TI-IVT-01-T) | 점검 발견 | 번호 2 없음 (1 → 3) | 번호 정리 | 디스크립션 | 제외 (2026-11-27, 케이스 3 규칙과 부딪힘: 빈 번호를 채우지 않음, 중복 번호는 끝 번호 다음으로) |
| TI-IVT-04-T-R03 | Inventory | Inventory Reagent (TI-IVT-04-T) | 점검 발견 | 번호 2-3이 두 번, 2-2 없음. Capacity가 3-3 안에 번호 없이 들어 있고 3-4 없음 | 번호 정리 (Capacity를 3-4로) | 디스크립션 | 제외 (2026-11-27, 케이스 3 규칙과 부딪힘: 빈 번호를 채우지 않음, 중복 번호는 끝 번호 다음으로) |
