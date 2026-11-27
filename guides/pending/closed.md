| TI-IVT-01-T-R01 | Inventory | Inventory Summary (TI-IVT-01-T) | 기준 자료 변경 | 화면 카드 "Comsumable" | Consumable | `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-01-T-R02 | Inventory | Inventory Summary (TI-IVT-01-T) | 기준 자료 변경 | 1-1·1-5 "Empty 및 Insufficient" (화면 카드는 Insufficient, Low) | Empty는 예전 값이며 Insufficient로 바뀜. 요약 정보와 Stock Status Icon은 Insufficient·Low로 나눔 (1 정렬 기준과 같음). 1-3 "Empty 상태일 경우 '0'"도 Insufficient로 | `glossary/status-values.csv 재고 상태`, POL-INV-003 규칙 7 | 반영 완료 (2026-11-27) |
| TI-IVT-01-T-R03 | Inventory | Inventory Summary (TI-IVT-01-T) | 기준 자료 변경 | 1 "Inbound Trolley Unit이 'Docking' 상태" | Docked | `glossary/status-values.csv` 저장 장치 도킹 상태 | 반영 완료 (2026-11-27) |
| TI-IVT-01-T-R04 | Inventory | Inventory Summary (TI-IVT-01-T) | 기준 자료 변경 | 3-5 툴팁 "prioritized by Full and Warning status" | Full and Almost Full (Warning은 Waste Bin/Bottle Status 값이 아님) | `glossary/status-values.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-01-T-R05 | Inventory | Inventory Summary (TI-IVT-01-T) | 기준 자료 변경 | 3-4 "Waste Status Icon" | Waste Bin/Bottle Status Icon | `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-01-T-R06 | Inventory | Inventory Summary (TI-IVT-01-T) | 점검 발견 | 1-7 툴팁 문구가 4개 나열됨 (옛 문구와 새 문구가 섞인 것으로 보임) | 현재 문구 하나만 남김 (v2.1.14 "Tooltip 내용 변경"). LI-IVT-01-T에는 앞의 2개에 취소선이 있음 | 버전 메모, LI-IVT-01-T | 반영 완료 (2026-11-27) |
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
| TI-STN-08-R02 | Setting | Assay Pack Setting (TI-STN-08) | 기준 자료 변경 | Import file 팝업 TI-STN-08-01이 IA에 없음 | IA에 추가할지 확인 | `ia/ia-screens.csv` | 반영 완료 (2026-11-27) |
| TI-STN-08-P-R01 | Setting | Assay Pack File Details (TI-STN-08-P) | 기준 자료 변경 | 화면 이름 "Assay Pack Setting", Ver 0.4.0 | Assay Pack File Details (IA "Details"), 2.1.ZZ 체계 | IA | 반영 완료 (2026-11-27) |
| LI-EVT-P-R05 | Event History | Event History (LI-EVT-P) | 기준 자료 변경 | Expiration date Status, Under 30 Day | 대소문자 통일, Under 30 days | `archive/glossary/review-v0.md` | 제외 (2026-11-25, 바꾸지 않음: 이 화면에 없는 글자, 시약 만료 상태는 시스템에서 쓰지 않는 값 — 요청자 답) |
| TI-EVT-P-R03 | Event History | Event History (TI-EVT-P) | 기준 자료 변경 | Expiration date Status | 대소문자 통일 (PD-0001 결정 후) | `archive/glossary/review-v0.md` | 제외 (2026-11-25, 바꾸지 않음: 이 화면에 없는 글자, 시약 만료 상태는 시스템에서 쓰지 않는 값 — 요청자 답) |
| TI-EVT-P-R04 | Event History | Event History (TI-EVT-P) | 기준 자료 변경 | Under 30 Day | Under 30 days | `glossary/status-values.csv` 시약 만료 상태 | 제외 (2026-11-25, 바꾸지 않음: 이 화면에 없는 글자, 시약 만료 상태는 시스템에서 쓰지 않는 값 — 요청자 답) |
| TI-IVT-01-T-R07 | Inventory | Inventory Summary (TI-IVT-01-T) | 점검 발견 | 번호 2 없음 (1 → 3) | 번호 정리 | 디스크립션 | 제외 (2026-11-27, 케이스 3 규칙과 부딪힘: 빈 번호를 채우지 않음, 중복 번호는 끝 번호 다음으로) |
| TI-IVT-01-T-R08 | Inventory | Inventory Summary (TI-IVT-01-T) | 기준 자료 변경 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | POL-EQP-009 | 반영 완료 (2026-11-27) |
| TI-IVT-01-T-R09 | Inventory | Inventory Summary (TI-IVT-01-T) | 기준 자료 변경 | 화면 "FlexibleExtraction(1)", "WasteBin", "PCR Setup(1)" 등 | Flexible Extraction (1), Waste Bin, PCR Setup (1) | 이름 (번호) 띄어쓰기, `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-01-T-R10 | Inventory | Inventory Summary (TI-IVT-01-T) | 기준 자료 변경 | 1 "통합 상태 Run O / X" | 장비 통합 상태 Running 여부로 표기 | `glossary/terms.csv` 장비 통합 상태 | 반영 완료 (2026-11-27) |
| TI-IVT-01-T-R11 | Inventory | Inventory Summary (TI-IVT-01-T) | 다른 화면 파급 | 3-3 "Waste bin/bottle tab 내 2-3 참고" (Fill Level은 TI-IVT-05-T 3-3) | TI-IVT-05-T 3-3 참고 | TI-IVT-05-T | 반영 완료 (2026-11-27) |
| TI-IVT-02-T-R01 | Inventory | Inventory Overview (TI-IVT-02-T) | 기준 자료 변경 | Tab 이름 "Reagent" (다른 Tab 화면은 Reagents) | Reagents | IA, TI-IVT-01-T 화면 글자 | 반영 완료 (2026-11-27) |
| TI-IVT-02-T-R02 | Inventory | Inventory Overview (TI-IVT-02-T) | 점검 발견 | 1-2 "데이트 업데이트", 1-3 "차감되지 않는며" | 데이터 업데이트, 차감되지 않으며 | 오타 | 반영 완료 (2026-11-27) |
| TI-IVT-02-T-R03 | Inventory | Inventory Overview (TI-IVT-02-T) | 기준 자료 변경 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | POL-EQP-009 | 반영 완료 (2026-11-27) |
| TI-IVT-02-T-R04 | Inventory | Inventory Overview (TI-IVT-02-T) | 점검 발견 | 1 "아래 Inventory Overview Detail Info 예시 참고하여 작업요청" (CID 없는 프레임을 가리킴) | 케이스 규칙을 디스크립션이나 정책으로 옮김 | `screens/inventory/_menu.md` | 반영 완료 (2026-11-27) |
| TI-IVT-02-T-R05 | Inventory | Inventory Overview (TI-IVT-02-T) | 점검 발견 | 화면 "Samples (Test In Progress) 48 ea (1 racks)" | 1 rack | 단수·복수 | 반영 완료 (2026-11-27) |
| TI-IVT-02-T-R06 | Inventory | Inventory Overview (TI-IVT-02-T) | 기준 자료 변경 | 1-1 "투입 트롤리", "회수 트롤리", "검체" | Inbound Trolley, Outbound Trolley, Sample | `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-02-T-R07 | Inventory | Inventory Overview (TI-IVT-02-T) | 점검 발견 | 2 툴팁 "all modules . Select" | all modules. Select | 띄어쓰기 | 반영 완료 (2026-11-27) |
| TI-IVT-02-T-R08 | Inventory | Inventory Overview (TI-IVT-02-T) | 기준 자료 변경 | IA "짝 화면 동일"이 비어 있으나 LI-IVT-02-T와 화면·디스크립션이 같음 | IA `LI-IVT-02-T` 줄의 짝 화면 동일을 Y로 (1단계 요청자 답, 2026-11-27) | `ia/ia-screens.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-P-R01 | Inventory | Consumables Item details popup (TI-IVT-03-T-P) | 점검 발견 | 합계 "2,021 (22 rack)" (단위 없음). Run 화면 프레임은 "2,021 ea (22 rack)" | 2,021 ea (22 racks) | 3 표기 방식, LI-IVT-03-T-P Run 프레임 | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-P-R02 | Inventory | Consumables Item details popup (TI-IVT-03-T-P) | 점검 발견 | 예시 줄에 Inbound Date 값이 없음 (열은 5개, 값은 4개) | 날짜 예시를 넣음 | 화면 글자 | 제외 (2026-11-27, 바꾸지 않음) |
| TI-IVT-03-T-P-R03 | Inventory | Consumables Item details popup (TI-IVT-03-T-P) | 기준 자료 변경 | 2-1 "DX 서랍식 입고" | Dx 시스템 Storage의 Drawer | `glossary/terms.csv` Drawer, Dx 시스템 | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-P-R04 | Inventory | Consumables Item details popup (TI-IVT-03-T-P) | 기준 자료 변경 | "소모품", "바코드" 한국어 혼용 | Consumable, Barcode | `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-P-R05 | Inventory | Consumables Item details popup (TI-IVT-03-T-P) | 점검 발견 | 5 [Close]와 6 [X]의 동작이 같은 말을 다르게 씀 | 하나의 문장으로 통일 | 디스크립션 | 제외 (2026-11-27, 바꾸지 않음) |
| TI-IVT-03-T-R01 | Inventory | Inventory Consumables (TI-IVT-03-T) | 기준 자료 변경 | 2-6 Insufficient "재고가 0인 경우", Low "1개 이상 부족한 경우" | 디스크립션에 넣음: 재고 상태 정의는 상태값 표와 같음. Insufficient = 잔여 수량 0이라 그 품목을 쓰는 단계에서 Error가 생겨 가동이 중단됨, Low = 필요 수량보다 1개 이상 적으나 가동 가능 (예: 1000개 필요, 999개 이하). 화면의 "재고 0", "1개 이상 부족"은 이 정의의 예시로 남김 | `glossary/status-values.csv 재고 상태`, POL-INV-003 | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-R02 | Inventory | Inventory Consumables (TI-IVT-03-T) | 기준 자료 변경 | 1 "sufficient" | Sufficient | `glossary/status-values.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-R03 | Inventory | Inventory Consumables (TI-IVT-03-T) | 점검 발견 | 2-5 Required Qty 절의 첫 문장이 "좌측 영역의 Remaining Qty는…" | 좌측 영역의 Required Qty는… | 디스크립션 | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-R04 | Inventory | Inventory Consumables (TI-IVT-03-T) | 기준 자료 변경 | 2-5·2-6·3-6 노출 조건 "검체 트롤리가 도킹된 상태 또는 통합 상태가 Running, Partial Running" / TI-IVT-01-T 1은 "Running이거나 Inbound Trolley Docked" | 디스크립션에 넣음: Required Qty와 Status(Run 대비 재고 상태)는 Inbound Trolley가 도킹되어 있거나, [Run Start] 뒤 진행 중인 Batch가 끝나지 않았으면 보여 줌 (둘 중 하나). Partial Running·Error가 되어도 Batch가 끝나기 전이면 계속 보여 주고, Run 중 Trolley를 분리해도 계속 보여 줌. 그 밖에는 '-' | POL-INV-003 규칙 2·3 | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-R05 | Inventory | Inventory Consumables (TI-IVT-03-T) | 점검 발견 | 5 툴팁 "Capacity: Shown only for fixed-capacity storage." / 3-4 Capacity는 장비 셋팅 시 설정된 값 (26.08.20 기준 변경) | 툴팁 문구를 3-4 정의와 맞춤 | 디스크립션 | 제외 (2026-11-27, 바꾸지 않음) |
| TI-IVT-03-T-R06 | Inventory | Inventory Consumables (TI-IVT-03-T) | 점검 발견 | "단,장비 내 거치 공간에 있는 소모품은 … 차감되지 않는며" (2-4, 3-5) | 차감되지 않으며 | 오타 | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-R07 | Inventory | Inventory Consumables (TI-IVT-03-T) | 기준 자료 변경 | "검체 트롤리", "소모품", "저장 장치" 한국어 혼용 | Inbound Trolley, Consumable, Storage | `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-R08 | Inventory | Inventory Consumables (TI-IVT-03-T) | 점검 발견 | Capacity "11 rack", "300 μL Tip Storage(1)" | 11 racks, 300 μL Tip Storage (1) | 단수·복수, 이름 (번호) 띄어쓰기 | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-R09 | Inventory | Inventory Consumables (TI-IVT-03-T) | 점검 발견 | 예시 값 "#Trolley", Tub 수량 "200T (2 racks)" | 실제 Location 예시, rxns 단위 (COMM-4-b) | 화면 글자 | 제외 (2026-11-27, 바꾸지 않음) |
| TI-IVT-03-T-R10 | Inventory | Inventory Consumables (TI-IVT-03-T) | 기준 자료 변경 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | POL-EQP-009 | 반영 완료 (2026-11-27) |
| TI-IVT-03-T-R11 | Inventory | Inventory Consumables (TI-IVT-03-T) | 기준 자료 변경 | 2-4 정책 안내 2) "저장 장치로 반환 시 실제 사용 수량을 이력에 기록" | 디스크립션에 넣음: 사용량(Usage History)은 폐기할 때만 기록함. 반환할 때는 Remaining Qty만 줄임 | POL-INV-002 규칙 6, POL-INV-006 규칙 1 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-P-R01 | Inventory | Reagent Item details Popup (TI-IVT-04-T-P) | 기준 자료 변경 | 프레임 이름과 화면 정보 CID "TI-IVT-04-T" | TI-IVT-04-T-P | `ia/ia-screens.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-P-R02 | Inventory | Reagent Item details Popup (TI-IVT-04-T-P) | 기준 자료 변경 | "유효기한", "유효기한이 지난" | Expiration Date, Expired | `glossary/terms.csv` Expiration Date, 시약 만료 상태 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-P-R03 | Inventory | Reagent Item details Popup (TI-IVT-04-T-P) | 점검 발견 | 2-1 Used Counts "흡입한 회수" | 흡입한 횟수 | 오타 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-P-R04 | Inventory | Reagent Item details Popup (TI-IVT-04-T-P) | 기준 자료 변경 | 2-1 Remaining Rxns "남은 반응 수 rxns 표기"와 "표기 방식 : 반응 수T"가 함께 있음 ("T"의 뜻이 없음) | 단위 하나로 (rxns) | 디스크립션, COMM-4-b | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-P-R05 | Inventory | Reagent Item details Popup (TI-IVT-04-T-P) | 점검 발견 | 2-1 Location in storage "해당 소모품의 위치 값" (Reagent 화면) | 해당 Reagent의 위치 값 | Consumables Popup에서 복사 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-P-R06 | Inventory | Reagent Item details Popup (TI-IVT-04-T-P) | 기준 자료 변경 | 2-1 "DX 서랍식 입고", "시약", "바코드", "튜브" | Dx 시스템 Storage의 Drawer, Reagent, Barcode, Tube | `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-P-R07 | Inventory | Reagent Item details Popup (TI-IVT-04-T-P) | 점검 발견 | "2,010rxns  (22 tubes)" | 2,010 rxns (22 tubes) | 띄어쓰기 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-P-R08 | Inventory | Reagent Item details Popup (TI-IVT-04-T-P) | 점검 발견 | 예시 줄에 Inbound Date, Expiration Date 값이 없음 | 날짜 예시를 넣음 | 화면 글자 | 제외 (2026-11-27, 바꾸지 않음) |
| TI-IVT-04-T-R01 | Inventory | Inventory Reagent (TI-IVT-04-T) | 기준 자료 변경 | Reagent에 재고 상태(Sufficient / Low / Insufficient)를 씀. 상태값 표의 재고 상태 대상은 Consumable뿐이었음 | 디스크립션에 넣음: Reagent도 Consumable과 같은 재고 상태(Sufficient, Low, Insufficient)를 씀. 상태값 표 대상을 Consumable / Reagent로 고침 | `glossary/status-values.csv 재고 상태`, POL-INV-003 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-R02 | Inventory | Inventory Reagent (TI-IVT-04-T) | 기준 자료 변경 | 2-6 Insufficient "재고가 0인 경우", Low "1개 이상 부족한 경우", 1 "sufficient" | TI-IVT-03-T 반영 대기 목록 1과 같이, Sufficient | `glossary/status-values.csv 재고 상태`, POL-INV-003 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-R03 | Inventory | Inventory Reagent (TI-IVT-04-T) | 점검 발견 | 번호 2-3이 두 번, 2-2 없음. Capacity가 3-3 안에 번호 없이 들어 있고 3-4 없음 | 번호 정리 (Capacity를 3-4로) | 디스크립션 | 제외 (2026-11-27, 케이스 3 규칙과 부딪힘: 빈 번호를 채우지 않음, 중복 번호는 끝 번호 다음으로) |
| TI-IVT-04-T-R04 | Inventory | Inventory Reagent (TI-IVT-04-T) | 점검 발견 | 2-5 Required Qty 절 첫 문장 "좌측 영역의 Remaining Qty는…", 예외 처리 "검사 진행 중이 아닐 경우" (2-6·3-6은 "위의 상황이 아닐 경우") | Required Qty, 예외 처리 문장 통일 | 디스크립션 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-R05 | Inventory | Inventory Reagent (TI-IVT-04-T) | 점검 발견 | 단위 혼용: 2-5 "10rxns", 3-6 "10T", 화면 "200T (2 racks)" | rxns로 통일 (COMM-4-b) | 디스크립션 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-R06 | Inventory | Inventory Reagent (TI-IVT-04-T) | 점검 발견 | 2-4·3-5 "표기 방식: 0번 디스크립션 참고" (0의 표기 방식은 취소선) | Common UX COMM-4-b 참고 | Figma 취소선 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-R07 | Inventory | Inventory Reagent (TI-IVT-04-T) | 기준 자료 변경 | 3-3 "유효기간", "유효기가 만료" | Expiration Date, Expired | `glossary/terms.csv` Expiration Date, 오타 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-R08 | Inventory | Inventory Reagent (TI-IVT-04-T) | 점검 발견 | Chip "# Sample Preparation"과 "#Nucleic Acid Extraction" 띄어쓰기 다름 | 하나로 통일 | 화면 글자 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-R09 | Inventory | Inventory Reagent (TI-IVT-04-T) | 기준 자료 변경 | "검체 트롤리", "시약", "소모품", "저장 장치", "장비 내 거치 공간(장비가 가져간 소모품 포함)" (Reagent 화면에 소모품) | Inbound Trolley, Reagent, Storage | `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-R10 | Inventory | Inventory Reagent (TI-IVT-04-T) | 기준 자료 변경 | 2-5·2-6·3-6 노출 조건이 TI-IVT-01-T 1과 다름 (Partial Running 포함 여부) | TI-IVT-03-T 반영 대기 목록 4와 같이 | POL-INV-003 규칙 2·3 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-R11 | Inventory | Inventory Reagent (TI-IVT-04-T) | 점검 발견 | 예시 값 "#Trolley" | 실제 Location 예시 | 화면 글자 | 제외 (2026-11-27, 바꾸지 않음) |
| TI-IVT-04-T-R12 | Inventory | Inventory Reagent (TI-IVT-04-T) | 기준 자료 변경 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | POL-EQP-009 | 반영 완료 (2026-11-27) |
| TI-IVT-04-T-R13 | Inventory | Inventory Reagent (TI-IVT-04-T) | 기준 자료 변경 | 2-4 정책 안내 2) 반환 시 이력 기록 | TI-IVT-03-T 반영 대기 목록 (사용량은 폐기할 때만 기록)와 같음 | POL-INV-002 규칙 6, POL-INV-006 규칙 1 | 반영 완료 (2026-11-27) |
| TI-IVT-05-T-R01 | Inventory | Waste Bin/Bottle (TI-IVT-05-T) | 기준 자료 변경 | IA 화면 이름 "Waste bin", 화면 "Waste Bin/Bottle" | IA를 Waste Bin/Bottle로 | `ia/ia-screens.csv`, 화면 정보 | 반영 완료 (2026-11-27) |
| TI-IVT-05-T-R02 | Inventory | Waste Bin/Bottle (TI-IVT-05-T) | 기준 자료 변경 | 0 "상태 값(Waste Status)" | Waste Bin/Bottle Status | `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-05-T-R03 | Inventory | Waste Bin/Bottle (TI-IVT-05-T) | 점검 발견 | 0 "Moule(index)" | Module (index) | 오타 | 반영 완료 (2026-11-27) |
| TI-IVT-05-T-R04 | Inventory | Waste Bin/Bottle (TI-IVT-05-T) | 점검 발견 | 3-3 "[3-6] 최대 개수 도달/초과 후…" (3-6 없음) | 번호 지움 | 디스크립션 | 반영 완료 (2026-11-27) |
| TI-IVT-05-T-R05 | Inventory | Waste Bin/Bottle (TI-IVT-05-T) | 기준 자료 변경 | 2·3 "Waste Bin이 존재하지 않는 모듈은 제외", "Waste Bin이 1개이상 존재하는 Module" | Waste Bin/Bottle은 Module마다 가진 Waste Bin과 Liquid Waste Bottle을 함께 부르는 이름이므로 "Waste Bin/Bottle이 있는 Module"로 씀. Unit 칸은 Module별 Unit 이름 그대로 | POL-INV-005 규칙 7, `glossary/module-units.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-05-T-R06 | Inventory | Waste Bin/Bottle (TI-IVT-05-T) | 기준 자료 변경 | 3-3 99% 고정 시 Almost Full, Fill Level 70%·100% 기준은 COMM-4-a에만 있음 | 상태값 표 기준(Available 70% 미만, Almost Full 70% 이상, Full 100%)과 99% 제한·센서 규칙을 정책으로 묶음 | `glossary/status-values.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-05-T-R07 | Inventory | Waste Bin/Bottle (TI-IVT-05-T) | 점검 발견 | "PlateSealing (2)" | Plate Sealing (2) | 띄어쓰기 | 반영 완료 (2026-11-27) |
| TI-IVT-05-T-R08 | Inventory | Waste Bin/Bottle (TI-IVT-05-T) | 기준 자료 변경 | "폐기물함", "폐기함", "폐기물 함", "모듈" 한국어 혼용 | Waste Bin/Bottle, Module | `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-05-T-R09 | Inventory | Waste Bin/Bottle (TI-IVT-05-T) | 점검 발견 | 1 "Default : 모든 탭이 미선택 된 상태" (Chip을 말함) | 모든 Chip이 선택되지 않은 상태 | 디스크립션 | 반영 완료 (2026-11-27) |
| TI-IVT-05-T-R10 | Inventory | Waste Bin/Bottle (TI-IVT-05-T) | 기준 자료 변경 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | POL-EQP-009 | 반영 완료 (2026-11-27) |
| TI-IVT-06-T-R01 | Inventory | Inventory Usage History (TI-IVT-06-T) | 점검 발견 | 목록 Item Type 값 "Reagents" (디스크립션 데이터는 Consumable, Reagent) | Reagent | 디스크립션 1 | 반영 완료 (2026-11-27) |
| TI-IVT-06-T-R02 | Inventory | Inventory Usage History (TI-IVT-06-T) | 점검 발견 | Usage 열 값이 예시 줄에 없음, 일부 줄은 Barcode도 없음 | 예시 값 채움 | 화면 글자 | 제외 (2026-11-27, 바꾸지 않음) |
| TI-IVT-06-T-R03 | Inventory | Inventory Usage History (TI-IVT-06-T) | 기준 자료 변경 | Consumable Storage(1)의 Unit이 "Plate Sealing"인 줄, Plate Sealing(1)의 Unit이 "Trolley"인 줄 | 실제 Module-Unit 조합으로 | `glossary/module-units.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-06-T-R04 | Inventory | Inventory Usage History (TI-IVT-06-T) | 점검 발견 | 2 "오늘 기준 7일간의 내용만 목록에 노출" / 1 기간 검색 최대 1년 | 기본 조회 기간이 7일이라는 뜻으로 고침 | 디스크립션 | 반영 완료 (2026-11-27) |
| TI-IVT-06-T-R05 | Inventory | Inventory Usage History (TI-IVT-06-T) | 점검 발견 | 3 ".CVS" | .CSV | 오타 | 반영 완료 (2026-11-27) |
| TI-IVT-06-T-R06 | Inventory | Inventory Usage History (TI-IVT-06-T) | 기준 자료 변경 | 0 "'Usage Tab'", "사용되느" | Usage History Tab, 사용되는 | 오타, IA | 반영 완료 (2026-11-27) |
| TI-IVT-06-T-R07 | Inventory | Inventory Usage History (TI-IVT-06-T) | 점검 발견 | "Plate Sealing(1)", "Consumable Storage(1)" | Plate Sealing (1), Consumable Storage (1) | 이름 (번호) 띄어쓰기 | 반영 완료 (2026-11-27) |
| TI-IVT-06-T-R08 | Inventory | Inventory Usage History (TI-IVT-06-T) | 기준 자료 변경 | 0 "사용여부가 '사용'인 모듈", "소모품", "시약" | Enabled인 Module, Consumable, Reagent | POL-EQP-009, `glossary/terms.csv` | 반영 완료 (2026-11-27) |
| TI-IVT-06-T-R09 | Inventory | Inventory Usage History (TI-IVT-06-T) | 기준 자료 변경 | 0 이력 기준 "장비가 사용 후 폐기하는 시점" / TI-IVT-03-T 2-4 정책 안내는 "저장 장치로 반환 시"에도 사용 수량을 이력에 기록 | 디스크립션에 넣음: Usage History는 폐기할 때만 기록함 (사용 완료, 최대 사용 횟수 초과, Expiration Date 경과). 반환할 때는 기록하지 않음 | POL-INV-006 규칙 1 | 반영 완료 (2026-11-27) |
| TI-IVT-06-T-R10 | Inventory | Inventory Usage History (TI-IVT-06-T) | 기준 자료 변경 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 반영 완료 (2026-11-27) |
| TI-STN-04-01-T-R01 | Setting | Interface Configuration (TI-STN-04-01-T) | 점검 발견 | 0에 "Default: All / 데이터: All, Error, Warning" (다른 화면에서 복사된 것으로 보임) | 지움 | 디스크립션 | 반영 완료 (2026-11-27) |
| TI-STN-04-01-T-R03 | Setting | Interface Configuration (TI-STN-04-01-T) | 점검 발견 | 화면 예시는 Push Mode 선택, 디스크립션 기본값은 Query Mode | 기본 상태 화면을 기본값과 맞춤 | 디스크립션 3 | 반영 완료 (2026-11-27) |
| TI-STN-04-01-T-R04 | Setting | Interface Configuration (TI-STN-04-01-T) | 기준 자료 변경 | CURECA가 여러 대일 때(TI-ADS) LIS 설정이 장비마다인지 화면에 없음 | 디스크립션에 넣음: LIS 설정은 상단에서 고른 CURECA마다 | POL-SYS-001 규칙 7, POL-COM-005 | 반영 완료 (2026-11-27) |
| TI-STN-04-02-T-R01 | Setting | Code Mapping (TI-STN-04-02-T) | 기준 자료 변경 | Sample Type 이름 예시 (Aspirate, Cary-blair, Cellpreserv 등) | `glossary/sample-types.csv`의 UI 표기와 맞춤 | `glossary/sample-types.csv` | 반영 완료 (2026-11-27) |
| TI-STN-04-02-T-R02 | Setting | Code Mapping (TI-STN-04-02-T) | 점검 발견 | 4 Done·Enter로 "입력값 저장 처리"와 5 [Save]로 최종 저장이 섞임 | 행 단위 확정과 [Save] 저장을 구분해 씀 | 디스크립션 | 반영 완료 (2026-11-27) |
