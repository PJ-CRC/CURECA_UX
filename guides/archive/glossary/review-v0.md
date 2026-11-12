# 용어집 v0 검토표

> 상태: 검토 중 (2026-10-30). 결정이 나면 `terms.csv`에 반영하고, 이 문서는 근거로 남깁니다.

## 읽은 범위

- 작업방 메뉴별 페이지 12개 (Material Setup은 2차만), 정책서_2026.08.28, UX-AI-TEST의 DY common UX
- 고유 문구 10,738개. 예시 데이터(샘플 ID, 숫자만 있는 값)는 제외
- 숫자는 화면 전체에서 그 표기가 나온 횟수입니다.
- Common UX는 읽는 동안에도 수정되고 있었습니다(COMM-5 번호 변경 등). 2026-10-30 오전 기준입니다.

## 1. 같은 개념, 다른 말 (결정 필요)

| # | 개념 | 화면·문서에 나온 표현 | 제안 |
| --- | --- | --- | --- |
| 1-1 | 계정 구분 | User Type 121, Account Type 23, Account type 2, Service 계정 24, Admin 계정 7, User 계정 2, 사용자 유형 6, 계정 유형 3, 등급 3, 사용자 권한 3, 소문자 user/admin/service (정책서) | 확정된 표준어 User Type, 값은 Service / Admin / User. 정책서 정제 때 모두 바꿈 |
| 1-2 | L-IOS 설치 모드 (Main, Console, TSS) | Common UX: "L-IOS 모드(Main·Console·TSS)", 정책서: "Preset Mode(가칭)", "설치 모드". 우리 룰 문서: "서비스 모드" | 질문 Q2 |
| 1-3 | 장비 이름 | CURECA 233, Cureca 55, 큐레카 3, QREKA 1 | CURECA |
| 1-4 | 장비 전체 상태 | 정책서: "CURECA 전체 구동 상태", 화면 라벨: Instrument Status, 디스크립션: 장비 상태 | 질문 Q3 |
| 1-5 | 검사 실행 | Run 398, RUN 72, 가동 108, 구동 80, 장비 가동(Run), Run Start | 질문 Q4 |
| 1-6 | 결과 처리 PC | D.A PC 1,693, D.A.PC 19 (정책서·Test Management) | 화면 다수인 D.A PC |
| 1-7 | 유효기간 | 유효기간 32, 만료 37, 만료일 3, 유통기한 1, 상태값 Valid / Under 30 days / Expired | 유효기간. 유통기한은 쓰지 않음 |
| 1-8 | 재고 | Inventory (메뉴), 재고 88, 인벤토리 8 | 메뉴를 가리키면 Inventory, 일반 의미는 재고 |
| 1-9 | 팝업·알럿 | 팝업 553, Popup 24, 알럿 15, 알림 15, Alert 166 | 질문 Q5 |

## 2. 디스크립션 속 화면 항목 이름 (한국어 혼용)

원칙("화면 항목 이름은 영어 그대로")을 적용하면 바꿔야 하는 표현입니다. 숫자는 한국어 디스크립션 안에서 나온 횟수입니다.

| 화면 항목 | 한국어 표기 | 영어 표기 |
| --- | --- | --- |
| Module | 모듈 319 | 298 |
| Trolley | 트롤리 85 | 268 |
| Storage | 스토리지 17, 저장소 4 | 376 |
| Socket | 소켓 29 | 233 |
| Tray | 트레이 14 | 239 |
| Unit | 유닛 10 | 156 |
| Door | 도어 22, 문 32 | 89 |
| Carrier | 기물 46 | 62 |
| Drawer | 서랍 22 | 5 |
| Rack / Tube / Tip | 랙 7, 튜브 11, 팁 52 | 110 / 217 / 163 |
| Barcode | 바코드 128 | 66 |
| Waste Bin | 폐기물함 21 | 54 |
| Event | 이벤트 65 | 194 |
| Protocol | 프로토콜 73 | 130 |

검체(312) / Sample, 시약(391) / Reagent, 소모품(337) / Consumable, 장비(348) / Instrument는 화면 항목이면서 일반 업무 용어이기도 해서 질문 Q1로 남깁니다.

## 3. 같은 라벨, 다른 뜻 (용어집에서 구분)

| 라벨 | 쓰이는 곳 |
| --- | --- |
| Ready | 장비 전체 상태(준비 완료), 검체 상태(배치 시작 후 로딩 전). 정책서 Session Timeout에는 "Idle(Ready)"로 모듈 상태와 섞여 있음 |
| Running | 장비 전체 상태, 모듈 상태, 검체 상태, Plate 상태 |
| Error | 장비 전체 상태, 모듈 상태, Event Level |
| Completed / Failed | 검체 상태, Plate 상태 |
| Open / Closed | Event Status, Door 개폐 상태 |

제안: 상태값은 "어느 대상의 상태값인지"를 함께 적어 항목을 나눕니다 (예: 장비 상태 Ready, 검체 상태 Ready). 디스크립션에서도 대상을 함께 씁니다 ("검체 상태가 Ready일 때").

## 4. 정책서와 Common UX의 상태값 불일치

용어 문제가 아니라 정책 문제라서 정책서 정제 때 판정합니다. 지금은 기록만 합니다.

- 장비 전체 상태: 정책서에는 Stopping이 있고 Paused가 없습니다. Common UX에는 Paused, Pausing이 있습니다.
- 모듈 Idle과 장비 Ready의 관계가 정책서 안에서도 "Idle(Ready)"로 섞여 있습니다.

## 5. 표기 통일 (뜻은 같고 쓰는 모양만 다름)

뜻이 확실해서 규칙만 정하면 됩니다. 질문 Q6~Q8 외에는 화면 다수 표기를 따르는 것을 제안합니다.

| 구분 | 예 (나온 횟수) | 제안 |
| --- | --- | --- |
| 모듈 번호 | PCR Setup(1) 274 / PCR Setup (1) 26, Sample Preparation(1) 315 / (1) 109, Sealer (1) 53 / Sealer(1) 6 / Sealer 1 10, CFX96-1 88 / CFX96 (1) 41 | 질문 Q6 |
| 수량·단위 | 96 ea (1 rack) 232 / 96ea / 96 ea / 1 rack, 48 rxns (1 rack) 101 / 48 rxns(1 rack) 4, 75 (1 rack) / 75 (1rack) | 숫자와 단위 사이, 괄호 앞 띄움: `96 ea (1 rack)` |
| 대소문자 | Select All 314 / Select all 76, Sign In 32 / Sign in 12, Check reagents 47 / Check Reagents 19, Trolley Name 39 / Trolley name 35, LIS Code 76 / LIS code 26 | 질문 Q7 |
| 경로 | Prep Consumable Storage (1) > Trolley 214 / Prep Consumable Storage(1) / Trolley 82, Inventory / Overview / Inventory Overview | `>` 로 통일 |
| 단계 | STEP 1. 76 / STEP 1 56 / Step 1 1 | `STEP 1.` |
| ID 표기 | Sample Id, Plate Id, Event Id | `ID` |
| 상태값 | Almost Full 198 / AlmostFull 1, Not Initialized 14 / NotInitialized 5, Partial Running / PartialRunning, Not tested 576 / Not Tested 72 / NotTested 2 | 띄어 씀. Not tested는 질문 Q8 |
| 제품·검체 이름 | Allplex HPV28 410 / Allplex_HPV28 22, eNAT stool / eNAT_stool, Raw_stool 86 / Raw stool 68, Fecal_swab 56 / Fecal swab 49, STARlet 61 / Starlet 33, Universal PCR / Universal Pcr 38, GI-B1·GI-B2 (화면) / GI-B(I)·GI-B(II) (정책서) | 밑줄 대신 띄어쓰기. 제품명은 제조사 표기(STARlet). GI-B 표기는 질문 Q9 |
| 제품군 이름 | T-IOS 1,816 / TIOS 176, L-IOS 1,283 / LIOS 180 | T-IOS, L-IOS |
| 입력 안내 문장 | Please enter a valid password 52 / ... password. 25 | 질문 Q7과 함께 (문장 끝 마침표) |

## 6. 오타

| 오타 | 바른 표기 | 위치 |
| --- | --- | --- |
| Patial Running | Partial Running | Sample Tracking, Test Management, Setting, Dashboard |
| Comsumable | Consumable | Inventory |
| ForcastedTest, Forcasted Test | Forecasted Test | Statistical Analysis |
| PCR Regents | PCR Reagents | 정책서 |
| Thr | Thu | Setting, Statistical Analysis, Run, Event History |
| 페기물함 | 폐기물함 (또는 Waste Bin) | 정책서 |
| 상태갑싱 | 상태값이 | 정책서 |

## 7. 용어집에서 제외

- 화면 속 다국어 길이 테스트 문구 (SCHRITT, Mischgeschwindigkeit, Piastra, Armazenamento, Tiempo de recogida 등)
- 레이어 이름으로 보이는 표기 (FlexibleExtraction, PrepConsumableStorage, itemGroupName, baseUnit 등)
- Login 페이지의 검토 메모 프레임 ("로그인 화면 라이브러리 연결 검토 · 2026-10-23")

## 질문

| # | 질문 |
| --- | --- |
| Q1 | 검체, 시약, 소모품, 장비처럼 화면 항목이면서 일반 업무 용어인 말은 디스크립션에서 한국어로 써도 될까요, 영어(Sample, Reagent, Consumable, Instrument)로 써야 할까요? |
| Q2 | L-IOS의 Main / Console / TSS 구분을 부르는 표준어를 무엇으로 할까요? (서비스 모드 / L-IOS 모드 / 설치 모드 / Preset Mode) |
| Q3 | 장비 전체 상태의 표준어를 무엇으로 할까요? (Instrument Status / 장비 상태 / CURECA 상태) |
| Q4 | 검사 실행은 디스크립션에서 Run으로 쓸까요, 가동·구동으로 쓸까요? |
| Q5 | 팝업과 알럿은 Common UX의 컴포넌트 이름을 따를까요? (Popup, Alert, Confirm 등) |
| Q6 | 모듈 번호 표기를 무엇으로 할까요? `PCR Setup(1)` / `PCR Setup (1)` / `PCR Setup-1` |
| Q7 | 버튼과 라벨의 대소문자 규칙을 무엇으로 할까요? (Title Case: Select All / 첫 글자만: Select all). Common UX에 규칙이 있으면 따릅니다. |
| Q8 | 검체 상태 Not tested는 화면 다수 표기(Not tested)와 정책서 표기(Not Tested) 중 무엇으로 할까요? 정책서에는 "(가칭)"이라고 되어 있습니다. |
| Q9 | 소화기 검사군 표기를 화면(GI-B1, GI-B2)과 정책서(GI-B(I), GI-B(II)) 중 무엇으로 할까요? |

## 결정 (2026-10-30)

| # | 결정 |
| --- | --- |
| Q1 | 문서에는 Sample, Reagent, Consumable, Instrument 등 모두 영어로 씁니다. 대화에서는 한국어를 섞어 써도 됩니다. 2절의 화면 항목 이름도 모두 영어로 씁니다. |
| Q2 | Main Mode / Console Mode / TSS Mode |
| Q3 | 한국어 표준어 "장비 통합 상태" |
| Q4 | Run |
| Q5 | Common UX 컴포넌트 이름을 따릅니다 (Popup, Alert, Confirm, Toast, Tooltip). |
| Q6 | 이름과 번호 사이를 띄어 씁니다: Module Name (Index), 예 PCR Setup (1) |
| Q7 | 주간 미팅 안건으로 올림 (`pending/PD-0001.md`) |
| Q8 | Not Tested |
| Q9 | 검사 항목명 UI 표기 목록을 받음 (`glossary/test-items.csv`, `reference/test-item-ui-names-2026-10-30.png`). GI-B1, GI-B2가 맞습니다. |

결정에 따라 `terms.csv`에 확정 용어를 넣었습니다. 1-3, 1-6, 1-7과 T-IOS / L-IOS는 제안 상태라 "후보"로 넣었습니다.

## 추가 결정 (2026-10-30 오후)

| 항목 | 결정 |
| --- | --- |
| Main / Console / TSS 상위 명칭 | Service Mode. 헌법 8조와 룰 문서의 "서비스 모드"를 모두 바꿈 (헌법 v1.2) |
| 상태값 단계 | 3단계: 장비 통합 상태 / 장비 모듈 상태 / 검사 장치 상태 (`status-values.csv`). 4절의 정책서·Common UX 불일치는 이 표로 정리됨: 장비 통합 상태에 Paused, Stopping이 있고 Pausing은 장비 모듈 상태에만 있음 |
| Reagent·Consumable 표기 | Common UX COMM-4-b를 따름: 수량 표기, 단위 단·복수, Tip 용량, Product Name / componentName. 5절 수량·단위 제안은 이 규칙으로 대체 |
| GI-B(I) 표기 | 검사 항목명은 GI-B1, GI-B2. Reagent 제품·구성품 이름은 키트 표기 그대로 (Allplex™ GI-Bacteria(I) Assay, 5X GI-B(I) MOM) |

### 남은 확인

| # | 내용 |
| --- | --- |
| R1 | 화면에 Idle이 1,870번 나옵니다 (Test Management 1,170, Dashboard 435, Instrument 177 등). 장비 모듈 상태에는 Idle이 없고 Ready가 있습니다. Idle을 모두 Ready로 바꾸면 될까요? |
| R2 | 검사 장치 상태의 대상이 화면 디스크립션의 Device Unit (M9600, STARlet, Sealer, CFX96 등)이 맞나요? |
| R3 | 화면에 `100T (1 rack)`, `200T (2 racks)`, `96T (1 DWP)` 같은 T 표기가 약 700번 나옵니다. COMM-4-b 규칙대로 `100 rxns (1 rack)`로 바꾸면 될까요? |
| R4 | 장비 통합 상태, 장비 모듈 상태, 검사 장치 상태가 화면에서 어떤 라벨로 보이나요? (예: Instrument Status) |

### 남은 확인 답변 (2026-10-30)

| # | 답변 |
| --- | --- |
| R1 | 고객이 Idle을 Ready로 바꿈. 화면의 Idle은 Ready로 이해하고, 문서에는 Ready로 씀 |
| R2 | Module별 Unit 표를 받음 (`module-units.csv`, `reference/module-units-2026-10-30.png`). Unit Type이 Device인 Unit이 검사 장치(Device Unit) |
| R3 | T 표기는 모두 rxns로 바꿈 (COMM-4-b 표기에 맞춰 소문자 rxns) |
| R4 | 질문을 다시 설명함 (대화 참고) |

### Unit 표에서 발견한 것

- Unit 표의 `1000µL Tip Storage`, `300µL Tip Storage (1)`는 숫자와 µL 사이가 붙어 있음. COMM-4-b 규칙과 화면 다수 표기(1000 μL 360회, 1000μL 3회)는 띄어 씀
- Unit 표는 µ(마이크로 기호)로 보이고 화면은 μ(그리스 문자 뮤)를 씀. 이미지라 정확히 구분하기 어려움

### 상태값 구조 (2026-10-30 사용자 설명)

- 구동 관련 상태는 3단계: 장비 통합 상태(CURECA 전체) / 장비 모듈 상태(Module) / 검사 장치 상태(Device Unit)
- Unit Type마다 상태값이 따로 있음: 장비 모듈 도어 잠금 상태(Locked / Unlocked), 장비 모듈 도어 열림 상태(Open / Closed), 저장 장치 도킹 상태(Docked / Undocked)
- Instrument Status는 하나의 상태값 이름이 아니라, Module 구동 상태와 Door 상태 등을 묶어 보여주는 화면 영역의 제목

### Instrument 화면 상세 패널(5285:905984)과 Unit 표가 다른 곳

| 항목 | Instrument 화면 (ver 2.0.0) | Unit 표 |
| --- | --- | --- |
| (2026-10-30 결정: Unit 표가 최신. 화면은 Unit 표에 맞춰 고칠 대상) | | |
| Sample Preparation의 STAT Storage | STAT Storage (Upper), STAT Storage (Lower) | STAT Storage 1개 |
| Sample Preparation의 Waste Bin | Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower) | Waste Bin (Upper/Lower) |
| 띄어쓰기 | Liquid Waste Bottle(Upper) | Liquid Waste Bottle (Upper) |
| Device 연결 상태 | Connected 칸이 있음 | 상태값 정의 없음 |
| 폐기함 적재 상태 | Waste Status: Available / Almost Full / Full | 상태값 표에 없음 (정책서에만 정의) |

### 결정 (2026-10-30)

- Unit 표(`module-units.csv`)가 최신이며 기준입니다. Instrument 화면의 다른 표기는 화면 재설계 때 Unit 표에 맞춰 고칩니다.
- Device 연결 상태: Connected / Disconnected. Device가 중앙 시스템과 연결된 상태
- 폐기함/폐액통 상태 (영문 Waste Bin/Bottle Status): Available / Almost Full / Full. 화면의 "Waste Status" 라벨도 고칠 대상

### 화면 정정 대상 (Unit 표 기준)

| 화면 | 지금 표기 | 바꿀 표기 |
| --- | --- | --- |
| Instrument 상세 패널 (Sample Preparation) | STAT Storage (Upper), STAT Storage (Lower) | STAT Storage |
| Instrument 상세 패널 (Sample Preparation) | Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower) | Waste Bin (Upper), Waste Bin (Lower) |
| Instrument 상세 패널 | Liquid Waste Bottle(Upper) | Liquid Waste Bottle (Upper) |
| Instrument 상세 패널 | Waste Status | Waste Bin/Bottle Status |
- 폐기함/폐액통 상태 값의 한글 UI 표기: 여유 / 만재 임박 / 가득 참 (사용자 제공 표)
- CURECA는 항상 대문자. D.A PC, T-IOS, L-IOS 확정
- 시약 만료 상태: Valid(유효) / Under 30 days(만료 임박, 코드 Warning) / Expired(만료). 날짜 항목은 화면 라벨 Expiration Date를 표준어로 씀
- 화면 정정 대상 추가: Event History의 `Expiration date Status`(대소문자), `Under 30 Day` → `Under 30 days`

### 화면 정정 대상 추가 (2026-11-02)

| 화면 | 지금 표기 | 바꿀 표기 |
| --- | --- | --- |
| Instrument Door Control 팝업 (LI-INS-01-P) | "통합 상태가 Ready, Paused, Error 상태일 경우, Unlock all doors 버튼 사용 가능" | Ready, Error, Paused, Not Initialized |
| Instrument Door Control 팝업 (LI-INS-01-P) | "Locks automatically 5 seconds after the door is closed." / "The door will be automatically locked 5 seconds after it is closed." | 하나로 통일 (알럿 카탈로그 정리 때) |
| Instrument Door Control 팝업 (LI-INS-01-P) | "Cannot unlock while the module is running." / "Cannot unlock while the system is running." | 쓰임을 구분하거나 하나로 통일 (알럿 카탈로그 정리 때) |
| Instrument Door Control 팝업 (LI-INS-01-P) | Ruuning (디스크립션 오타) | Running |
