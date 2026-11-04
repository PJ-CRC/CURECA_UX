# 팀원 저장소 검토 (CURECA-AI-main, 2026-11-02 받음)

> 기준은 이 저장소입니다. 팀원 저장소는 파일을 하나씩 열어 새 내용만 모으고, 합의한 것만 이 저장소에 반영합니다. 검토가 끝나면 두 자료를 합친 기준으로 정책서를 작성합니다.

받은 파일: `CURECA-AI-main_1102.zip` (377개 파일). 압축은 이 세션의 임시 폴더에 풀었고, 저장소에는 넣지 않았습니다. 원본으로 쓸 자료만 골라 옮깁니다.

## 1. 팀원 저장소 구성과 이 저장소와의 관계

| 팀원 폴더 | 내용 | 이 저장소에서 대응하는 곳 |
| --- | --- | --- |
| `00_sources/common/` | 씨젠 공통 문서 엑셀 3종: 시스템 구성 요소 및 상태 정보(260921, 261021은 캡처), 소모품 및 시약 정보(261022), 검사 항목 및 검체 타입 정보(261022) | `reference/customer/` (아직 없음). 상태 정보 문서는 Common UX COMM-4-a의 원본이라 최우선 기준 |
| `00_sources/figma/`, `sb/` | Figma 추출 MD (Common UX 10/16, SB 26화면) | Figma를 직접 읽음. Common UX는 최종본 V2.2.00(10/30)을 이미 대조함 |
| `00_sources/ia/`, `policy/`, `srs/` | IA v1.01, 정책서 PDF v1.01, SRS R03 | IA는 수정본을 받을 예정. 정책서는 Figma 정책서_2026.08.28 페이지를 씀. SRS는 없음 |
| `10_policies/` | 정책 MD 10장, 정책 ID 61개 (`POL-CMN`, `LOG`, `INS`, `RGT`, `MAT`, `DCK`, `SMP`, `TST`, `STA`, `SYS`) | `policy/` 정책 파일 (아직 없음). ID 체계가 다름 |
| `20_concepts/` | 시스템 구성, System Status, CURECA Status, 검사 항목, 소모품 (공통 엑셀에서 생성) | `glossary/status-values.csv`, `module-units.csv`, `test-items.csv`, `policy/equipment-states.md` |
| `25_ux-common/` | UX 공통 가이드 (Figma 추출에서 생성) | Common UX는 Figma 최종본 기준으로 봄 |
| `30_screens/` | 화면 정의 MD (메뉴 = 파일), 화면 색인, T/L 대응표, 설정값 ↔ 화면 영향 | `screens/`, `ia/` (IA 수정본을 받은 뒤 구성) |
| `40_srs/` | SRS 변환본, 권한 매트릭스 | `policy/permission-matrix.csv` |
| `80_updates/`, `90_review/`, `TODO.md`, `HANDOFF.md` | 자료 업데이트 기록, 검토·질문, 확인할 일, 작업 규칙 인계 | `background/worklist.md`, `pending/`, `policy/policy-backlog.md` |
| `tools/` | Python 스크립트 (엑셀·Figma·IA → MD 생성, Figma 동기화) | 없음. 팀 프로그램을 새로 만들 때 참고 |

## 2. 검토 순서

| # | 대상 | 이유 | 상태 |
| --- | --- | --- | --- |
| 1 | `00_sources/common/` 엑셀 3종 | 씨젠 원본. 상태값·Module·Unit·소모품·검사 항목의 최우선 기준 | 완료: 1-1·1-3 반영, 1-2 보류(새 버전 대기) |
| 2 | `20_concepts/` | 1번을 팀원이 정리한 결과. 우리 용어집·상태값 표와 비교 | 검토 완료 |
| 3 | `10_policies/` | 정책 64개와 정책 ID. 정책서 작성 직전에 합칠 기준 | 진행 중: 구성 파악, ID·문체 결정 대기 |
| 4 | `40_srs/permission-matrix.md` | 우리 권한 매트릭스와 비교 | |
| 5 | `30_screens/` (`t-l-mapping.md`, `setting-impact.md` 포함) | 화면 구조, T/L 대응, 설정값 영향 | |
| 6 | `90_review/`, `TODO.md`, `HANDOFF.md` | 팀원이 받은 답과 남은 질문, 작업 규칙 | |
| 7 | `25_ux-common/`, `00_sources/figma`·`sb` | 10/16 추출본이라 우선순위 낮음 | |
| 8 | `tools/` | 팀 프로그램 재구성 때 참고 | |

## 3. 검토 기록

파일마다 아래 세 가지로 나눠 적습니다.

- **새 내용:** 이 저장소에 없는 것
- **같은 내용:** 이미 있는 것
- **다른 내용:** 이 저장소 기준과 다른 것 → 합의 전에는 반영하지 않음

### 1-1. CURECA 시스템 구성 요소 및 상태 정보 (씨젠, 260921 엑셀 + 261021 캡처 12장)

시트 12개: Actor, Module, Unit, 검사 단계, 검사 진행 상태, 장비 상태, 장비 통합 상태 처리 조건, 도어 잠금 해제 조건, 재고 상태, 폐기함 상태, 이벤트 정보, 경광등 시나리오. 261021은 DRM 때문에 캡처로만 있고, 260921과의 차이는 검사 진행 상태 NotTested·Failed 정의와 검사 배치 완료 상태 신설뿐입니다(팀원 비교 기록 `80_updates/2026-10-27_common-system-status-261021.md`). 이 저장소의 상태값은 Common UX COMM-4-a를 거쳐 261021 기준이 이미 들어와 있습니다.

| 구분 | 내용 |
| --- | --- |
| 새 내용 | **Actor** (통신 주체): TIOS, LIOS## (사이트에 장비가 여러 대면 LIOS01, LIOS02), PrepMcs (Sample Preparation Master Control System), DxMcs (Diagnostic Master Control System), DAPC (D.A PC) |
| 새 내용 | **Module 한글 UI 표기**: Sample Storage 검체 저장소, Prep Consumable Storage 전처리 소모품 저장소, Sample Preparation 검체 준비, High-throughput Extraction 대용량 핵산 추출, Flexible Extraction 맞춤형 핵산 추출, PCR Setup PCR 셋업, Plate Sealing 플레이트 실링, Universal PCR 유니버설 PCR |
| 새 내용 | **검사 단계**: Sample Preparation 검체 전처리 (Sample Storage, Prep Consumable Storage, Sample Preparation) → Nucleic Acid Extraction 핵산 추출 (High-throughput Extraction, Flexible Extraction) → PCR Setup → Plate Sealing → PCR (Universal PCR) |
| 새 내용 | **경광등 시나리오**: 이전 상태 → 트리거 또는 Event → 현재 장비 통합 상태 → 경광등 색·점멸 (24가지). 점멸 주기(Green Blink 2초, 그 외 1초), 색 우선순위(Red > Yellow > Blue > Green), 규격 EN 60204-1:2018 |
| 같은 내용 | Unit 52개, 장비 통합·모듈·검사 장치 상태, 도어 잠금·열림, 저장 장치 도킹, 장비 통합 상태 처리 조건 21개, 도어 잠금 해제 조건, 재고, 시약 만료, 폐기함/폐액통, 이벤트 등급·종류·상태, 검사 진행 상태(261021) |
| 다른 내용 | Unit LowerDoor(Sample Preparation) 비고: 씨젠 문서(260921, 261021 캡처 모두) "상하부 도어가 **통합된** 형태 (단디메카)", 사용자 제공 표 "**분리된** 형태 (단디메카)". UpperDoor는 둘 다 "분리된 형태"라 씨젠 문서 오타로 보임 |
| 참고 | 원본 엑셀은 DRM 해제본이 아니라 260921이 최신 엑셀. 261021은 캡처뿐 |

**반영 (2026-11-02):** 원본을 `reference/customer/system-status/`에 보관. 상태값 표와 Unit 표 근거 칸에 원본 인용. Module 8종(`glossary/modules.csv`), 검사 단계(`glossary/test-stages.csv`), 경광등(`policy/warning-light.csv`, 장비 상태 정의서 8절), Actor(용어집 Prep 시스템·Dx 시스템 후보, T-IOS·L-IOS·D.A PC에 Actor 코드) 추가. LowerDoor 비고는 사용자 표("분리된 형태")를 유지하고 확인 필요로 표시.

### 1-2. CURECA 소모품 및 시약 정보 (씨젠, 261022 엑셀)

시트 5개: 소모품(8종), 전처리 시약(6종), 추출 시약(2개 제품, 구성품 14종), PCR 시약(30개 제품, 구성품 173행), Carrier 장치(Trolley·Tray·Socket·PCR Tube Rack·Tub Holder 바코드).

| 구분 | 내용 |
| --- | --- |
| 새 내용 | **품목 목록과 속성:** 품목마다 코드명, UI 표기, 저장 위치(Module > Unit), 수량 단위(예: 96 ea/rack, 100 rxns/tub), 장착 형태(Rack, tub, DWP, socket), 품목 그룹(Tip, Tube, Plate, Tub, DWP, PCR reagent component), **최대 사용 횟수**(전처리 Tube 1회, Tub 10회, PCR 구성품 5회) |
| 새 내용 | **PCR 시약 30개 제품과 구성품:** 제품명(UI), 제품 코드명, 구성품(MOM, Enzyme, Buffer, Water, PC, IC, SD), 저장 위치(구성품은 Plate Sealing > Cold Storage, IC는 Prep Consumable Storage > Trolley). 30개 제품이 검사 항목명 30개(`glossary/test-items.csv`)와 1:1로 대응 |
| 새 내용 | **IC 종류:** GI-BP IC, GI-V IC, RP-V IC, RP-V IC 2, PB IC, STI-12 IC, H.ClariR IC, RVM IC, ASTI IC, ASTI IC(2), STI-7e IC. 여러 제품이 같은 IC를 함께 씀 |
| 새 내용 | **바코드 체계:** 품목별 바코드 고유 코드와 체계 (예: Tip은 Part Number 6자리 + Lot 7자리 + Production Identifier 5자리, 96-DWP는 카탈로그 번호 8자리 + LOT 6자리 + 일련번호 5자리, MM Tube·Sealing Film은 바코드 없음). PCR 시약은 박스의 rxns 코드를 인식한 뒤 튜브를 넣고, UDI 바코드를 잘못 스캔하면 경고 |
| 새 내용 | **Carrier 바코드:** Trolley 대표·1~6층(1층이 최하단), Tray 대표·A~E행 × 1~2열, Socket 8종(G10, G20, G30, G31, G40, G41, G42, G50), PCR Tube Rack, Tub Holder (Prep) |
| 같은 내용 | 품목 UI 표기(1000 μL Tip, 96-DWP, PBS Tub, LB Tub (Prep), STARMag M96 Kit, Allplex™ GI-Virus Assay 등)와 구성품 이름(5X GI-B(I) MOM 등)이 Common UX COMM-4-b·용어집과 같음. 저장 위치가 Unit 표와 같음 |
| 다른 내용 | **MM Tube:** 씨젠 원본은 "28 ea/rack, 장착 형태 Rack, Plate Sealing > Cold Storage". Common UX COMM-4-b 예시와 8월 정책서는 "14 ea (1 socket)", "1개 Socket에 14개" |
| 다른 내용 | **Tub의 수량 단위:** 씨젠 원본은 전처리 Tub "100 rxns/tub, 장착 형태 rack", UC Kit Tub "96 rxns/tub, 장착 형태 tub". COMM-4-b 예시는 전처리 Tub를 rack, UC Kit Buffer Tub 묶음을 set으로 표기 |
| 다른 내용 | **Buffer Cartridge Cap:** COMM-4-b에는 Consumable로 나오지만(5 ea (1 set)) 씨젠 원본 목록에는 없음 |
| 참고 (원본 오류로 보임) | SARS-CoV-2 구성품 "RNase free Water"(하이픈 없음), RV Master의 RNase-free Water 코드명이 SARS-CoV-2/FluA/FluB/RSV 것을 복사, "Anyplex™II STI-12"와 "Anyplex™ II HPV HR" 띄어쓰기 다름, PB IC 코드명 "Allplex_PB_AssayIC"(밑줄 빠짐), 일부 셀 #VALUE! |

**처리 (2026-11-02):** 새 버전이 곧 올 예정이라 보류. 261022 원본만 비교 기준선으로 `reference/customer/consumables-reagents/`에 보관하고, 새 버전을 받으면 작업 유형 22 절차로 비교해 반영하기로 작업 목록에 넣음.

### 1-3. CURECA 검사 항목 및 검체 타입 정보 (씨젠, 261022 엑셀)

시트 4개: 검사 항목 정보(30개), 검체 타입 정보(14개), 검사 항목별 검체 타입 매핑(31행), 검사 항목별 추출 장치 매핑(31행). 팀원 비교 기록: `80_updates/2026-10-27_common-test-items-261022.md` (26051019 대비 검사 항목 10개 → 30개 등 7건).

| 구분 | 내용 |
| --- | --- |
| 새 내용 | **검사 항목별 속성:** 시약 제품명·제품 코드, 검사 항목 코드(예: H_ClariR, M_AziR, BV_plus, Allplex_HPV28), 검사군 코드(RP: RP1~RVM 7개, GI: GI-V~H.ClariR 8개, HPV: 3개, RTI: STI-12~STI-7e 12개), 검사 Target Masking 가능 여부(Y/N), 검사 Target 이름 |
| 새 내용 | **검체 타입 14개:** Swab, Aspirate, BAL, Saliva, Sputum, Raw stool, Cary-blair, eNAT stool, Fecal swab, Thinprep, Surepath, Cellpreserv, Urine, Semen (UI 표기와 코드) |
| 새 내용 | **검사군별 검체 타입:** RP 검사군은 Swab·Aspirate·BAL·Saliva·Sputum, GI는 Raw stool·Cary-blair·eNAT stool·Fecal swab, HPV는 Swab·Thinprep·Surepath·Cellpreserv, RTI는 여기에 Urine·Semen |
| 새 내용 | **추출 장치 사용 가능 여부:** 검사 항목마다 M9600, STARlet 사용 가능 여부(O/X). 기본값이며 T-IOS에서 바꿀 수 있고, 최소 1개는 사용 가능이어야 함. STARlet은 30개 모두 O, M9600은 PB·HPV 계열·STI 계열 등 X |
| 같은 내용 | 검사 항목 UI 표기 30개 중 27개가 `glossary/test-items.csv`와 같음 |
| 다른 내용 | **GI-Helminth(I):** 사용자 제공 UI 표기 "GI-H1", 씨젠 원본 UI 표기 "GI-H(I)" (코드는 GI-H1) |
| 다른 내용 | **Allplex HPV HR Detection:** 사용자 제공 UI 표기 "Allplex HPV HR", 씨젠 원본 UI 표기 "HPVHR-HP72/73". 매핑 시트에는 검사 항목 정보에 없는 "HPVHR-HP62/63"이 더 있음 |
| 다른 내용 | **Anyplex II HPV HR Detection:** 사용자 제공 UI 표기 "Anyplex II HPV HR", 씨젠 원본 UI 표기 "HPV HR" |
| 다른 내용 (정책) | 검사군 구성과 8월 정책서 "PCR Regents 조합 검사 정책"이 다름: 정책서는 호흡기 4개·소화기 4개만 조합 가능, STI-12와 HPV28은 단독 검사. 원본 검사군은 RP 7개, GI 8개, HPV 3개, RTI 12개 (팀원 기록 #5). 정책서 정제(TST) 때 판정 |
| 참고 (원본 오류로 보임) | 매핑 시트의 검사 항목 코드가 일부 UI 표기로 적힘(GI-H(I), H.ClariR, HPV HR, M.AziR 등), HP62/63 표기가 시트마다 다름(HPVHR_HP62_63 / HPVHR-HP62/63) |

**반영 (2026-11-02):** 검사 항목명은 사용자 제공 표가 맞음(GI-H1, Allplex HPV HR, Anyplex II HPV HR). 원본을 `reference/customer/test-items/`에 보관. `glossary/test-items.csv`에 코드·시약 제품·검사군·Masking·검사 Target·추출 장치 사용 가능 여부를 원본 인용과 함께 추가. `glossary/sample-types.csv` 신설. 조합 검사 정책 차이와 추출 장치 규칙은 `policy/policy-backlog.md` 9·10번. HPVHR-HP62/63(매핑 시트에만 있음)은 확인 필요로 남김.

### 2. 20_concepts (팀원, 씨젠 공통 문서 3종에서 스크립트로 자동 생성)

파일 5개: 01 시스템 구성(Actor, Module, Unit, 검사 단계), 02 System Status, 03 CURECA Status, 04 검사 항목, 05 소모품·시약. 내용은 1번에서 본 씨젠 원본을 그대로 옮긴 것이라 새 데이터는 없습니다.

| 구분 | 내용 |
| --- | --- |
| 새 내용 (구성) | **상태값을 두 갈래로 나눔:** System Status = 소프트웨어(T-IOS·L-IOS)가 관리하는 상태값(Sample·Plate·검사 배치, 재고, 시약 만료, 폐기함, 이벤트) / CURECA Status = 장비 자체의 상태값(장비 통합·모듈·검사 장치·도어·도킹)과 전환 규칙(통합 상태 처리 조건, 도어 잠금 해제 조건, 경광등) |
| 새 내용 (ID) | 개념 ID `CON-<코드>-<번호>`: STR(구성), STS(상태값, 원본 순서 번호), RUL(전환·제어 규칙), TST(검사 항목), MAT(소모품·시약). 팀원 정책 MD가 이 ID를 13곳에서 참조 → 3번 정책 검토 때 이 저장소 파일로 대응시켜야 함 |
| 새 내용 (확인 사항) | Not Tested: 팀원 쪽 사용자 확인(2026-10-15) 정의는 "검사 시작 후 Ready 상태였던 검체가 특정 상황으로 Prep 장비에서 검사가 진행되지 못한 채 회수된 상태", 씨젠 261021 정의와 다름 → 팀원 정책 POL-SMP-01 확인 필요로 남아 있음. "로딩 = Prep 장비 바코드 스캔"이라는 정의 메모 |
| 같은 내용 | 상태값, Module·Unit, 검사 단계, 전환 조건, 도어 잠금 해제, 경광등, 검사 항목 (모두 1번 반영분과 같음) |
| 참고 | 소모품·시약은 261001 → 261022 변경 기록이 있음 (`20_concepts/HISTORY.md`). 새 버전을 받을 때 참고 |

### 3. 10_policies (팀원 정책 MD)

정책서 PDF v1.01을 출발점으로, 문체·용어를 통일하고 씨젠 공통 문서와 팀원 쪽 사용자 결정을 반영한 정책 64개. 장 하나에 파일 하나, 정책 하나에 섹션 하나(`POL-<코드>-<두 자리>`), 연관 화면 ID를 적으면 화면 문서에 역링크가 생김. 남은 질문 19개(`확인 필요 (Qn)`).

**팀원 ID와 이 저장소 영역 코드의 대응**

| 팀원 코드 (장) | 정책 수 | 이 저장소 영역 코드 |
| --- | --- | --- |
| CMN (공통) | 4 (플랫폼 구성, 지원 해상도, 운영 언어, 모듈 구성 운영) | COM |
| SYS (Event, System, 사용자 및 권한) | 4 (계정 유형 및 권한, LIS 연동, Event 상태값, Event 팝업 노출) | ACC, SYS, EVT로 나뉨 |
| LOG (로그인/로그아웃) | 6 (계정 생성, 초기 비밀번호, 아이디·비밀번호 조건, Session Timeout, 종료 유형) | ACC |
| INS (장비 관리 및 정의) | 8 (Door, Enable Setting, Error Rate, Spare Storage, 상태값 4개) | EQP |
| DCK (트롤리 도킹 & Drawer Loading) | 6 (트롤리 도킹, DX Storage 투입부, Cold Storage PCR Rack, STAT Storage, 도킹 상태값, Sample Storage 트롤리 1층 운영) | LOD |
| MAT (Material Setup) | 6 | MAT |
| TST (Test Policy) | 7 | TST |
| SMP (검체/검사 정의) | 11 | SMP |
| RGT (시약/소모품 사용 및 폐기) | 9 | INV |
| STA (통계) | 3 | STA |

**8월 정책서(Figma)에 없는 팀원 정책:** POL-CMN-02 지원 해상도, POL-DCK-06 Sample Storage 트롤리 1층 운영(컨티뉴스 로딩), POL-SMP-11 검사 배치 완료 상태. 팀원 쪽 사용자 전달로 갱신된 것: Error 모듈 복구(2026-10-29), 트롤리 구성 기물 리셋(2026-10-28), 검사 배치 완료 상태 용도(2026-11-02).

**팀원 문체 규칙:** 개조식, 명사형 끝맺음(~함, ~됨, ~가능, ~불가), 상태값은 코드 서식, 버튼은 [ ]. 용어 통일표에서 소켓·트레이·트롤리·기물(Carrier)·D.A.PC·계정 유형 등 한국어·다른 표기를 씀 → 이 저장소 용어집과 다름.

**결정 (2026-11-02):** 정책 ID는 이 저장소의 `POL-영역-###`을 쓰고, 팀원 ID는 `policy/migration.csv`의 "이전 ID"로 남김. 규칙 문장은 "[조건]일 때 [대상]은 [동작]함"(조건 앞 + 명사형 끝맺음). 용어는 이 저장소 용어집 표기로 바꿈. → `rules/policy-writing.md` v0.2

**팀원 질문(Q) 대조**

| 구분 | Q | 내용 | 이 저장소 기준 |
| --- | --- | --- | --- |
| 같음 (팀원 쪽 답 = 우리 결정) | Q2 | Admin도 Setting 사용, 일부만 Service 전용 | 같음. `policy/permission-matrix.csv` (Tube Setting, Assay Pack Setting만 Service) |
| 같음 | Q3 | Admin이 User·Admin 계정 생성 | 같음. `policy/permission.md` |
| 같음 | Q12 | 큐레카(QREKA) → CURECA | 같음. 반영 대기 고칠 것 10 |
| 같음 | - | Waste Bin AlmostFull = 70% 이상 100% 미만 | 같음. `glossary/status-values.csv` |
| 다름 | Q7 | Not Tested = 검사 시작 후 Ready 검체가 Prep에서 진행되지 못하고 회수됨 (팀원 쪽 사용자 확인 2026-10-15), 로딩 = 바코드 스캔 | 씨젠 상태 정보 261021은 "로딩 후 바코드 훼손·불일치로 검사 못 함". 원본이 더 최신이라 우리 기준은 씨젠 정의. 질문 유지 |
| 새 내용 | Q8 | "STAT 상태의 검체" = 응급 검체 | 우리 쪽 정의 없음. 받아들일지 확인 |
| 새 내용 | Q18 | Policy 정책 행의 "Pre-Treatment / Extraction Protocol"은 복사 오류로 보고 제외 | 정리 방식. 받아들일지 확인 |
| 양쪽 다 열림 (값·정의) | Q4, Q5, Q6, Q9, Q10, Q15, Q19, Q20, Q22 | 아이디 조건의 문자 유형, Session Timeout 값(SRS 단서: 기본 60분, 5~120분, 기본 Off), Cut-off Time 이름과 기본값(SRS 단서: 06:00), 재고 상태 표시 시점, 통계 역산 기준일, 튜브 수가 많은 시약 기준, 8번 슬롯 Spin Tip 전용, Heating 슬롯 번호, Error 모듈 복구 실패 시 동작 | 우리 쪽에도 답 없음. 해당 영역 정책 쓸 때 질문 |
| 양쪽 다 열림 (메뉴·화면 연결) | Q11, Q13-a·b·c, Q14, Q16, Q17-a·b, Q21 | Event 팝업 개별 설정 화면, Carrier Setup·Drawer Loading·Run Preparation의 IA 메뉴, Enable Setting 위치, Reset 화면, Prioritize Cost Reduction·Extraction Device Allocation 메뉴, Trolley 리셋 연관 화면 | IA 수정본을 받은 뒤 확인 |

**팀원 쪽 사용자 전달로 갱신된 3건 (이 저장소에 없음)**

| 팀원 ID | 내용 | 이 저장소 | 반영할 영역 |
| --- | --- | --- | --- |
| POL-INS-06 Error 모듈 복구 (2026-10-29) | Error 처리 후 문을 닫으면 자동으로 검사 가능 상태를 확인하고, 정상이면 Module 상태가 Ready로 돌아감. 정상이 아닐 때는 미정(Q22) | 없음. `policy/integrated-state-transitions.csv`는 통합 상태 전환만 다룸 | EQP |
| POL-MAT-06 Trolley 구성 리셋 (2026-10-28) | Sample·Consumable Trolley별 Rack → Tray → Trolley 단위 리셋 시점·범위 표, 사용 중 Trolley로 보는 조건, 덜 쓴 Consumable Rack은 리셋 제외, 새 작업 여부 문의(적용 예정) | 없음 | MAT |
| POL-SMP-11 검사 배치 완료 상태 용도 (2026-11-02) | 가동 리포트 메뉴용 상태값. Test Status 화면(TI-TMG-02, LI-TMG-02)에는 우선 넣지 않음(고객사 협의) | 상태값 6개는 `glossary/status-values.csv`에 있음. 용도는 없음 | SMP |

**IA v1.15로 다시 본 메뉴·화면 질문 (2026-11-02)**

| Q | IA v1.15에서 확인한 것 | 판단 |
| --- | --- | --- |
| Q14 Enable Setting 위치 | 문서 이력 v1.03: "(T) Enable setting -> Management 변경", L-IOS에 Management 추가(LI-INS-02-01-P) | 풀림: Enable Setting = Instruments > All > Management (TI-INS-02-01-P, LI-INS-02-01-P) |
| Q13-a Carrier Setup | Material Setup > Prepare Carrier (LI-TSS-PSI) 있음. 작업방 Material Setup 1차 페이지의 바 이름이 "Carrier Setup" | 풀림: Carrier Setup = Prepare Carrier (LI-TSS-PSI) |
| Q13-b Drawer Loading | Material Setup > Load Materials (LI-TSS-DXI, STAT·DWP/Spin Tip·MB Tube·Buffer Cartridge·Tip/PCR Plate·Cold·Sealer Film storage) | 대응 메뉴는 있음. 정책서 표기와 같은지 화면으로 확인 |
| Q13-c Run Preparation | Run (LI-RUN): Run Notification, Check Run Samples, Check Consumables, Check Test Protocol, Check Reagents, Check waste bin/bottle | 대응 메뉴는 있음. 화면으로 확인 |
| Q17-a·b | Policy Setting 아래 Cost Setting, Extraction Module Usage Setting, Comparison Simulation, Analyze Breakpoint | 메뉴 이름이 다름. TST 정책 쓸 때 화면 디스크립션으로 확인 |
| Q11 Event 팝업 개별 설정 | Profile > General (TI-CPW-01-P, LI-CPW-01-P, 2차 범위) 있음 | EVT 정책 쓸 때 화면으로 확인 |
| Q16 Reset 화면 | 화면 없음. LI-TSS-CMP-01 비고에 "Material Setup > Reset 화면 공통 사용 팝업"만 있음 | 열림 |
| Q21 Trolley 리셋 연관 화면 | 해당 화면 없음 | 열림 |
