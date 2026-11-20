# Figma 모듈 · 유닛 이름 변경 기록

- 대상 파일: 1-2. CURECA_기획 디자인 작업방 (Part.2) (`kI8nm6HBJsfBa4fbReZwgh`)
- 요청: 서보경, 2026-11-18
- 페이지 링크를 받는 대로 하나씩 작업하고 이 문서에 쌓습니다.

## 1. 바꾸는 이름

| 구분 | 변경 전 | 변경 후 |
| --- | --- | --- |
| 모듈 | Prep Consumable Storage | Consumable Storage |
| 모듈 | Sample Preparation | Sample Pre-treatment |
| 유닛 | Upper Sample Pretreatment | Sample Processing (Upper) |
| 유닛 | Lower Sample Pretreatment | Sample Processing (Lower) |
| 유닛 | Upper Sample Aliquot | Sample Aliquoting (Upper) |
| 유닛 | Lower Sample Aliquot | Sample Aliquoting (Lower) |
| 유닛 (Upper/Lower 없이 단독) | Sample Pretreatment | Sample Processing |
| 유닛 (Upper/Lower 없이 단독) | Sample Aliquot | Sample Aliquoting |

## 2. 작업 기준 (요청자 확인)

- **범위:** 민트색 "2.1 2차" bar 오른쪽의 모든 프레임. UX 화면설계와 UI(디자인 · 1280 · 다국어) 화면, 디스크립션을 모두 포함합니다. 한 페이지에 민트색 bar가 여러 개 있으면 모두 확인합니다. 녹색 "2.1 1차" 영역은 건드리지 않습니다.
- **읽지 않는 프레임:** 이름에 "v0.05"가 들어간 다국어 프레임 (예: "Run v0.05 — …", "Test Management v0.05 — …"). Run/Quick Start · Test Management 페이지에서 요청. 분홍색 "다국어 테스트" bar 오른쪽 영역도 작업하지 않음 (Sample Tracking 페이지에서 요청). 분홍색 영역은 분홍색 bar 오른쪽부터 다음 민트색 bar 앞까지로 봄(Setting 페이지에서 기준을 바로잡음. 그 전에는 분홍색 bar 오른쪽 전부를 빼서 Sample Tracking에서 2곳이 빠졌고, 다시 확인해 고침). 이름에 언어(German · Portuguese · Spanish · Italian · French)가 붙은 다국어 프레임도 같은 이유로 뺌. Dashboard 페이지의 "CURECA v0.05 — …" 다국어 프레임은 이 요청 전에 고쳤고, 요청자 확인으로 그대로 둡니다.
- **바꾸지 않는 것**
  - 프로세스(검사 단계) 이름 "Sample Preparation"
  - Reagent 유형 태그 "Sample Preparation"
  - Sample Preparation Master Control System (PrepMcs)
  - 메뉴 이름 (예: Run Preparation)
  - 레이어 이름
- **인덱스:** 바꾼 이름 뒤의 번호는 용어집 규칙에 따라 띄어 씁니다. 예: `Consumable Storage (1)`. 바꾸지 않는 다른 이름의 인덱스(예: `High-throughput Extraction(1)`)는 손대지 않습니다.
- **줄바꿈이 들어간 표기:** 발견하면 묻습니다. Dashboard 페이지에서는 줄바꿈 위치를 유지하기로 했습니다.
- **컴포넌트 인스턴스:** 원본 위치를 보고하고 묻습니다. 원본이 같은 작업 범위 안에 있으면 원본을 고칩니다.

## 3. 페이지별 결과

### 3-1. Login Ⓛ / Ⓣ (`281:1269`)

- 바꿀 이름이 없었습니다(0건). 2차 영역, 1차 영역, 디자인 화면을 모두 찾았습니다.

### 3-2. Dashboard Ⓛ / Ⓣ (`281:1645`)

민트색 "2.1 2차" bar가 두 곳 있습니다. 위쪽은 Dashboard(All), 아래쪽은 Dashboard입니다.

**직접 고친 텍스트: 86건**. 이 밖에 하이픈 줄바꿈 이슈 4곳에 줄을 직접 나눴습니다(4-1).

| 변경 전 → 변경 후 | 건수 | 화면 |
| --- | --- | --- |
| Prep Consumable Storage(1) / Trolley → Consumable Storage (1) / Trolley | 29 | TI-DAS, LI-DAS, TI-DAS_1280, LI-TMG-01-1280 (Inventory Status) |
| Prep Consumable Storage → Consumable Storage | 21 | TI-DAS, TI-ADS, TI-ADS_1280, 다국어 화면 10개 |
| Sample Preparation → Sample Pre-treatment (모듈) | 21 | TI-DAS, LI-DAS, TI-DAS_1280, TI-ADS, TI-ADS_1280, 다국어 화면 10개 |
| Prep Consumable⏎Storage → Consumable⏎Storage (줄바꿈 유지) | 12 | TI-DAS, TI-DAS_1280, LI-DAS, LI-TMG-01-1280 (Instrument Status 카드 제목) |
| Sample⏎Preparation → Sample⏎Pre-treatment (줄바꿈 유지) | 3 | LI-TMG-01-1280 (Instrument Status 카드 제목) |

- **되돌림:** 분홍색 "다국어 테스트" 영역의 Section 1 · Section 2(1280 다국어 화면)에서 고쳤던 15곳은 요청에 따라 예전 이름으로 되돌렸습니다. Trolley 7곳, Consumable⏎Storage 4곳, Sample Preparation 2곳, Sample⏎Preparation 2곳입니다.

- 다국어 화면 10개는 CURECA v0.05와 CURECA 1280 v0.05의 독일어 · 포르투갈어 · 스페인어 · 이탈리아어 · 프랑스어입니다.
- 고친 원본 컴포넌트: Test Status (`7869:332299`), Test Status_1280 (`8217:551262`), 언어별 Test Status · Test Status_1280 원본 10개. 모두 이 페이지의 2차 영역 안에 있습니다. 인스턴스에 예전 이름이 남은 곳은 없습니다.
- 디스크립션 텍스트 494개도 확인했습니다. 바꿀 이름은 없었습니다.

**그대로 둔 것**
- Test Status 카드의 진행 단계 "Sample⏎Preparation" 16건(프로세스 이름)
  - 화면: TI-DAS, TI-DAS_1280, LI-DAS, LI-TMG-01-1280 (분홍색 영역의 Section 1 · 2 포함)
  - UX TI-DAS · LI-DAS의 Test Status 카드에 있는 "Sample Preparation"은 이미지라 검색에 잡히지 않았습니다. 이것도 프로세스 이름입니다.
- 레이어 이름 `260312_Prep_Module_…` 6건, 메뉴 이름 "Run Preparation"

### 3-3. Event History Ⓛ / Ⓣ (`281:1395`)

민트색 "2.1 2차" bar는 한 곳입니다(`5661:95394`).

**고친 텍스트: 46건**

| 변경 전 → 변경 후 | 건수 | 화면 · 위치 |
| --- | --- | --- |
| Prep Consumable Storage(1) → Consumable Storage (1) | 14 | LI-EVT-P, TI-EVT-P, 캘린더 옵션 (Event 목록 표와 팝업 Alarm List의 Module 칸) |
| Prep Consumable Storage → Consumable Storage | 2 | TI-EVT-P 팝업 Alarm List의 Module 칸 |
| Sample Preparation(1) → Sample Pre-treatment (1) | 1 | LI-EVT-P 팝업의 Module 칸 |
| Sample Preparation → Sample Pre-treatment | 13 | 위 화면들의 Module 칸 |
| Sample Pretreatment → Sample Processing (유닛, 단독) | 14 | 위 화면들의 Unit 칸 |
| 디스크립션 Module 필터 목록 "데이터: All, Sample Storage, Consumable Storage, Sample Pre-treatment, …" | 2 | LI-EVT-P, TI-EVT-P 검색 영역 디스크립션 |

- **되돌림:** 분홍색 "다국어 테스트" 영역의 Section 5 · 7 · 9에서 고쳤던 18곳은 요청에 따라 예전 이름으로 되돌렸습니다. Prep Consumable Storage(1) 6곳, Sample Preparation 6곳, Sample Pretreatment 6곳입니다. 하이픈 줄바꿈을 직접 나눴던 4곳(Section 7 · 9)도 원래대로 한 줄 텍스트 "Sample Preparation"으로 돌렸습니다.
- 표 셀 36건은 "Data Table/Body" 컴포넌트의 인스턴스입니다. 셀마다 글자를 넣어 쓰는 범용 셀이고 원본은 다른 파일(라이브러리)에 있는 것으로 보여서, 요청자 확인 후 셀 텍스트를 그 자리에서 고쳤습니다. 디스크립션 2건도 인스턴스(Inbox) 안의 내용을 그 자리에서 고쳤습니다.

**그대로 둔 것**
- 디스크립션 "참고 문서명: [SRD] CURECA Prep 및 Dx 장비 Event 정의" 4곳: 문서 제목이고, Prep은 시스템을 가리킴

**화면 점검**

| 구분 | 화면 | 내용 |
| --- | --- | --- |
| 이슈 → 처리함 | LI-EVT-P 4, TI-EVT-P 4 (표 Module 칸, 8곳) | "Sample Pre-" / "treatment"로 하이픈 자리에서 줄이 바뀜. Dashboard에서 정한 방식대로 `Sample⏎Pre-treatment`로 직접 나눔. 캡처로 확인 |
| 참고 (바꾸기 전부터) | LI-EVT-P · TI-EVT-P 표 Module · Unit 칸 | 칸이 좁아 "Consumable" / "Storage (1)", "Sample" / "Processing"처럼 두 줄로 나뉨. 바꾸기 전에도 두 줄이었음 |
| 문제없음 | 팝업 Alarm List, 캘린더 옵션의 표 | 한 줄에 들어감 |

### 3-4. Run/Quick Start Ⓛ (`300:30938`)

민트색 "2.1 2차" bar가 두 곳 있습니다(`5038:304412`, `6902:40370`). 이름이 "Run v0.05"로 시작하는 프레임은 요청에 따라 읽지 않고 고치지 않았습니다.

**고친 텍스트: 273건**

| 변경 전 → 변경 후 | 건수 | 화면 · 위치 |
| --- | --- | --- |
| Prep Consumable Storage (1) > Trolley → Consumable Storage (1) > Trolley | 114 | LI-RUN-02 · 03 · 04, LI-IVT-03-T-P, LI-IVT-04-T-P, LI-RUN-03/Case1, Description, LI-RUN-02 · 03 · 04-1280 |
| Prep Consumable Storage (2) > Trolley → Consumable Storage (2) > Trolley | 83 | 위와 같음 |
| Prep Consumable Storage (3) > Trolley → Consumable Storage (3) > Trolley | 34 | LI-RUN-02, LI-IVT-03-T-P, LI-IVT-04-T-P, Description, LI-RUN-02 · 03-1280 |
| Sample Preparation → Sample Pre-treatment (모듈 카드 제목) | 10 | LI-RUN-03, LI-RUN-04, LI-RUN-03-1280 (폐기함 모듈 카드 · 상세) |
| Sample Preparation (1) · (2) · (3) → Sample Pre-treatment (1) · (2) · (3) | 30 | 위와 같음 (모듈 목록) |
| 디스크립션 정렬 순서 "ㄴSample Preparation" → "ㄴSample Pre-treatment" | 1 | LI-RUN-04 |
| 디스크립션 예시 "Sample Preparation (2)" → "Sample Pre-treatment (2)" | 1 | LI-RUN-04 |

- 인스턴스 안의 텍스트(표 셀, 디스크립션)는 Event History와 같이 그 자리에서 고쳤습니다.

**그대로 둔 것**
- Reagent 유형 태그 "Sample Preparation" 28곳: TypeBadge, `# Sample Preparation` 칩, Reagents type 필터, Pretreatment Reagents 카드의 Type
  - 화면: LI-RUN-02 · 03 · 03/Case1, Description, LI-RUN-03 · 04-1280
- Reagents type 디스크립션 "#Sample Preparation, #Nucleic Acid Extraction, #PCR", "ㄴSample Preparation : Pretreatment Reagents"
- 모듈 · 유닛 이름이 아닌 것
  - Pretreatment Reagents (카드 제목)
  - Pre-Treatment Protocol, Pre-Treatment Test Protocol AA ~ II
  - LB Tub (Prep)
  - Run Preparation (메뉴 이름)
  - Notifications Before Run Preparation

**화면 점검**

| 구분 | 화면 | 내용 |
| --- | --- | --- |
| 참고 (바꾸기 전부터) | LI-IVT-04-T-P 표 (10곳) | `Consumable Storage (n) > Trolley`가 칸보다 길어 두 줄로 나뉨. 바꾸기 전에도 두 줄이었고, 이름이 짧아져 덜 넘침 |
| 문제없음 | LI-RUN-03 · 04 · 03-1280 모듈 카드, 나머지 화면 | 칸 안에 들어감. 캡처 확인 |

### 3-5. Test Management Ⓛ / Ⓣ (`364:53318`)

민트색 "2.1 2차" bar가 두 곳 있습니다(`5038:354540`, `5038:354544`). "Test Management v0.05 — …" 다국어 프레임 10개는 요청에 따라 읽지 않았습니다.

- 고친 곳은 없습니다(0건).
- **그대로 둔 것**
  - "Sample Preparation" 158건(줄바꿈 표기 39건 포함): TI-TMG-02 · LI-TMG-02 계열(Case, 1280, Section 9 · 11 포함)의 검사 진행 카드. Nucleic Acid Extraction · PCR Setup과 나란히 진행률과 Running · Completed · Failed를 보여 주므로 프로세스 이름
  - "Prep 장비" 9곳(디스크립션, Case 설명): 장비 · 시스템을 가리키는 말
  - "Thinprep": 검체 종류

### 3-6. Sample Tracking Ⓛ / Ⓣ (`619:54416`)

민트색 "2.1 2차" bar가 세 곳 있습니다(`5038:597821`, `5038:597825`, `5038:597829`). 분홍색 "다국어 테스트" 영역 세 곳과 v0.05 프레임은 빼고 봤습니다.

**고친 텍스트: 10건**

| 변경 전 → 변경 후 | 건수 | 화면 · 위치 |
| --- | --- | --- |
| Sample Preparation(1) → Sample Pre-treatment (1) | 8 | TI-SPT-02-01, TI-SPT-02-01_1280, TI-SPT-02-01/Case, LI-SPT-02-01/Case, Section 67 · 80 · 81 · 86 (Sample General Information의 Module 값) |
| 디스크립션 "96-DWP가 Sample Preparation 모듈에 진입해" → "Sample Pre-treatment 모듈" | 2 | TI-SPT-02, LI-SPT-02 (Start Date/Time 설명) |

**그대로 둔 것**
- 프로세스 이름 "Sample Preparation"
  - Progress Status 목록 10곳
  - Process 칸 21곳(줄바꿈 표기 8곳 포함)
  - 디스크립션 "Sample Preparation 단계에서 찍힌 96-DWP 정보", "Process : Sample Preparation, Nucleic Acid Extraction, …"
- Pre-Treatment Protocol(프로토콜 이름과 그 설명), "Prep 장비", "Prep에서", Thinprep(검체 종류)

**나중에 더 고친 것: 2곳**
- LI-SPT-02, LI-SPT-02-01-1280의 Module 값 `Sample Preparation(1)` → `Sample Pre-treatment (1)`
- 처음 작업할 때 분홍색 영역을 가르는 기준이 너무 넓어서(분홍색 bar 오른쪽 전부를 뺌), 민트색 영역의 일반 프레임 일부가 빠져 있었습니다. Setting 페이지에서 발견해 기준을 고친 뒤 다시 확인했습니다. 같은 기준으로 잘못 빠진 Tooltip case의 "Sample Preparation"은 진행 단계(프로세스)라 그대로 둡니다.

**화면 점검**
- 넘치는 곳 없음. Module 값 `Sample Pre-treatment (1)`이 한 줄에 들어가는 것을 캡처로 확인함

### 3-7. Instrument Ⓛ / Ⓣ (`281:1770`)

민트색 "2.1 2차" bar는 한 곳입니다(`9203:396459`). 분홍색 영역 네 곳과 v0.05 프레임은 뺐습니다.

**고친 텍스트: 303건**

| 변경 전 → 변경 후 | 건수 | 화면 · 위치 |
| --- | --- | --- |
| Prep Consumable Storage → Consumable Storage | 22 | 모듈 탭, Overview 카드 등 |
| Prep Consumable Storage (n) / (n) 붙여 쓴 것 → Consumable Storage (n) | 20 | TI · LI-INS-02-T, TI-INS-02-01-P, LI-INS-01-P, Section 17 |
| Prep Consumable⏎Storage → Consumable⏎Storage (줄바꿈 유지) | 9 | TI-INS-01-T, LI-INS-01-T, TI-TMG-01(_1280), LI-TMG-01-1280 |
| Sample Preparation → Sample Pre-treatment | 51 | 모듈 탭, Management 드롭다운, 모듈 카드, Door Control 팝업 제목 |
| Sample Preparation (1) ~ (4) / (n) 붙여 쓴 것 → Sample Pre-treatment (n) | 88 | TI · LI-INS-02-T, TI · LI-INS-02-01-P(_1280), LI-INS-01-P, Section 17, Description |
| Sample Pretreatment (Upper) → Sample Processing (Upper) | 9 | TI · LI-INS-02-T(_1280), Description (Unit 표) |
| Sample Pretreatment (Lower) → Sample Processing (Lower) | 27 | 위 화면과 TI · LI-INS-02-01-P(_1280) |
| Sample Aliquot (Upper) → Sample Aliquoting (Upper) | 42 | 위와 같음 |
| Sample Aliquot (Lower) → Sample Aliquoting (Lower) | 24 | 위와 같음 |
| 디스크립션 "Device: Sample Pretreatment, Sample Aliquot, …" → "Device: Sample Processing, Sample Aliquoting, …" | 6 | TI · LI-INS-02-T, TI · LI-INS-02-01-P |
| 디스크립션 "모듈에 문이 2개일 경우(=Sample Pre-treatment)" | 2 | TI · LI-INS-02-T |
| 디스크립션 데이터 목록 "Sample Storage, Consumable Storage, Sample Pre-treatment, …" | 2 | TI · LI-INS-02-01-P |
| 디스크립션 "Button 노출 케이스 (해당 케이스 = Sample Pre-treatment, Ht Extraction, Sample Storage, Consumable Storage)" | 1 | LI-INS-01-P |

- 인스턴스 안의 텍스트(모듈 탭, 표 셀, 드롭다운, 디스크립션)는 그 자리에서 고쳤습니다.
- 바꾼 인덱스는 띄어 썼습니다. 예: `Prep Consumable Storage(2)` → `Consumable Storage (2)`

**글꼴 설정 후 고친 것**
- Section 17의 Case 라벨 디스크립션 1곳: "Button 노출 케이스 (해당 케이스 = Sample Pre-treatment, Ht Extraction, Sample Storage, Consumable Storage)"
  - 처음에는 글꼴 Pretendard가 작업 환경에 없어 막혔고, 요청자가 Figma 계정에 글꼴을 넣은 뒤 고쳤습니다.
  - 노드: [I9413:243496;2739:36671](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=9413-243496)

**요청자 확인 후 고친 것**
- "ver" 변경 이력 메모 1곳: "Device ‘Sample Pretreatment, Sample Aliquot’" → "Device ‘Sample Processing, Sample Aliquoting’"
  - 노드: [I3249:113232;1517:138210](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-113232)

**그대로 둔 것**
- "Sample Preparation (Prep) System", "Sample Preparation (Prep)" 9곳: Prep 시스템 이름
- 디스크립션 "Prep / Dx 장비 구분 영역", "Prep System", "Prep 검체/소모품 저장 모듈", "Prep 검체 전처리 모듈"

**화면 점검**

| 구분 | 화면 | 내용 |
| --- | --- | --- |
| 이슈 → 처리함 | TI-TMG-01_1280, LI-TMG-01-1280 (모듈 카드 제목), TI-INS-01-T, LI-INS-01-T (UX 모듈 제목) | "Sample Pre-" / "treatment"로 하이픈 자리에서 줄이 바뀜. `Sample⏎Pre-treatment`로 직접 나눔. 캡처로 확인 |
| 참고 (줄 수 늘어남) | TI-INS-02-T, LI-INS-02-T, Description의 Unit 표 | "Sample Aliquoting (Upper/Lower)"가 두 줄로 나뉨("Sample Aliquoting" / "(Upper)"). 바꾸기 전에는 한 줄이었음. 같은 표의 "Sample Processing (…)"은 바꾸기 전부터 두 줄 |
| 참고 (바꾸기 전부터) | TI-INS-02-T_1280, LI-INS-02-T_1280, Description(1280 폭) | Unit 칸이 좁아 유닛 이름이 2 ~ 3줄로 나뉨. Module 칸의 `Consumable Storage (n)`, `Sample Pre-treatment (n)`은 말줄임(…)으로 잘림. 바꾸기 전에도 같았음 |
| 문제없음 | 그 밖의 화면 | 칸 안에 들어감 |

### 3-8. Inventory Ⓛ / Ⓣ (`281:1520`)

민트색 "2.1 2차" bar는 한 곳입니다(`5635:254437`). 분홍색 영역 두 곳은 뺐습니다. 다국어 프레임 20개(이름이 "Inventory TI/LI 1920 · 1280 / German · Portuguese · Spanish · Italian · French / bar …")도 다국어 테스트 화면이라 뺐습니다.

**고친 텍스트: 545건**

| 변경 전 → 변경 후 | 건수 | 화면 · 위치 |
| --- | --- | --- |
| Prep Consumable Storage (1) · (2) · (3) > Trolley → Consumable Storage (n) > Trolley | 362 | TI · LI-IVT-02 · 03 · 04-T(_1280), TI · LI-IVT-03 · 04-T-P (Location) |
| Prep Consumable Storage(2) / Trolley → Consumable Storage (2) / Trolley | 16 | TI · LI-IVT-01-T, LI-TMG-01-1280 |
| Prep Consumable Storage(1) · (2) → Consumable Storage (1) · (2) | 27 | TI · LI-IVT-06-T, SB_Inventory_Overview_Detail Info |
| Prep Consumable Storage → Consumable Storage | 16 | TI · LI-IVT-02-T(_1280), SB_Inventory_Overview_Detail Info |
| Sample Preparation(1) → Sample Pre-treatment (1) | 12 | TI · LI-IVT-01-T, LI-TMG-01-1280 (폐기함 목록) |
| Sample Preparation → Sample Pre-treatment (모듈 카드 제목) | 26 | TI · LI-IVT-05-T, TI · LI-IVT-04-T(_1280), LI-IVT-03-T_1280, Waste Bin/Bottle - Module 별 Case |
| Sample Preparation (1) · (2) · (3) → Sample Pre-treatment (n) | 78 | 위와 같음 (폐기함 모듈 목록) |
| 디스크립션 정렬 순서 "ㄴSample Pre-treatment" | 2 | TI · LI-IVT-05-T |
| 디스크립션 예시 "Sample Pre-treatment (2)" | 2 | TI · LI-IVT-05-T |
| 디스크립션 "Consumable Storage" | 2 | TI · LI-IVT-02-T |
| 디스크립션 "Storage(대상:Consumable Storage, Plate Sealing)" | 2 | SB_Inventory_Overview_Detail Info |

- 인스턴스 안의 텍스트(표 셀, 디스크립션)는 그 자리에서 고쳤습니다.
- 바꾼 인덱스는 띄어 썼습니다. 같은 목록에 있는 다른 이름(예: `Plate Sealing(1)`)은 바꿀 대상이 아니어서 그대로입니다.

**그대로 둔 것**
- Reagent 유형 태그 "Sample Preparation" 72곳: TypeBadge, Reagents type 필터, Pretreatment Reagents 카드의 Type
- `# Sample Preparation` 칩 12곳
- 디스크립션 "데이터: # Sample Preparation, #Nucleic Acid Extraction, #PCR", "fileType이 “Pretreatment”인 경우 = Sample Preparation 표기"
- Pretreatment Reagents(카드 제목과 설명), LB Tub (Prep)

**화면 점검**

| 구분 | 화면 | 내용 |
| --- | --- | --- |
| 참고 (바꾸기 전부터) | TI · LI-IVT-03 · 04-T_1280, TI · LI-IVT-04-T-P (Location 칸, 58곳) | `Consumable Storage (n) > Trolley`가 칸보다 길어 두 줄로 나뉨. 바꾸기 전에도 두 줄이었고, 이름이 짧아져 덜 넘침 |
| 문제없음 | 그 밖의 화면 | 칸 안에 들어감 |

### 3-9. Statistical Analysis Ⓣ (`274:18946`)

민트색 "2.1 2차" bar는 한 곳입니다(`5038:798072`). 분홍색 영역 네 곳은 뺐습니다.

**고친 텍스트: 561건**

| 변경 전 → 변경 후 | 건수 | 화면 · 위치 |
| --- | --- | --- |
| Prep Consumable Storage → Consumable Storage | 42 | Module 드롭다운, 모듈 목록 |
| Prep Consumable Storage(1) ~ (10) → Consumable Storage (1) ~ (10) | 307 | TI-STA-05 · 06 · 08 계열, Description (Module 드롭다운 항목, 범례, 차트) |
| Prep Consumable⏎Storage(1) ~ (4) → Consumable⏎Storage (1) ~ (4) | 57 | TI-STA-05-01 · 06-01(-1280), TI-STA-08-01, Description |
| Sample Preparation → Sample Pre-treatment (모듈) | 25 | Module 드롭다운, 모듈 목록 |
| Sample Preparation(1) ~ (4) → Sample Pre-treatment (1) ~ (4) | 50 | TI-STA-05-01 · 05-02(-1280), Description |
| Sample⏎Preparation(1) · (2) → Sample⏎Pre-treatment (1) · (2) | 2 | TI-STA-05-01-1280 |
| Sample Pretreatment (Lower) · (Lower) 붙여 쓴 것 · 줄바꿈 표기 → Sample Processing (Lower) | 19 | TI-STA-05-01 · 05-02(-1280), Description |
| Sample Aliquot (Upper) · (Lower) · 붙여 쓴 것 · 줄바꿈 표기 → Sample Aliquoting (Upper) · (Lower) | 61 | 위와 같음 |

- 인덱스와 `(Upper)` · `(Lower)` 앞은 띄어 썼습니다. 예: `Sample Aliquot(Upper)` → `Sample Aliquoting (Upper)`. 줄바꿈 표기는 줄바꿈 위치를 유지했습니다.
- 인스턴스 안의 텍스트(드롭다운, 범례, 툴팁)는 그 자리에서 고쳤습니다.

**글꼴 설정 후 고친 것: 78곳**
- 글꼴 Pretendard(Medium · Bold)를 쓴 텍스트라 처음에는 막혔고, 요청자가 Figma 계정에 글꼴을 넣은 뒤 고쳤습니다.
  - 화면: TI-STA-05-01 · 05-02 · 06-01 · 06-02 · 08-01 · 08-02, TI-STA-05-01/Case · 06-01/Case · 08-01/Case
  - 내용: Prep Consumable Storage(1) ~ (4) → Consumable Storage (1) ~ (4), Sample Preparation(1) · (2) → Sample Pre-treatment (1) · (2), Sample Aliquot · Sample Pretreatment → Sample Aliquoting · Sample Processing
- 이 중 24곳은 "Consumable"과 "Storage" 사이에 줄 구분 문자(U+2028, Shift+Enter 줄바꿈)가 들어 있어 첫 시도의 규칙에 걸리지 않았습니다. 따로 찾아 줄바꿈 위치를 유지한 채 `Consumable⏎Storage (n)`으로 바꿨습니다.
- 앞서 작업한 다른 페이지에도 이런 특수 공백(줄 구분 문자, 줄바꿈 없는 공백, 탭 등)이 들어간 예전 이름이 남았는지 확인했습니다. 남은 곳은 없었습니다. 걸린 디스크립션 10곳은 모두 프로세스 · Reagent 태그 뜻의 "Sample Preparation"이었습니다.

**그대로 둔 것**
- Legend 드롭다운의 Reagent 분류 "Sample Preparation"(Consumable · Reagent · Sample Preparation · PBS Standard Tube …)과 디스크립션 "Sample Preparation 선택 시": Reagent 유형
- LB Tub (Prep), Thinprep

**화면 점검**

| 구분 | 화면 | 내용 |
| --- | --- | --- |
| 이슈 (요청자 결정: 손대지 않고 남김) | TI-STA-05-02 표의 Module 칸 (4곳) | `Sample Pre-treatment (1)` · `(2)`가 칸보다 길어 "Sample Pre-treatme…"로 잘림. 바꾸기 전 `Sample Preparation(1)`은 칸 안에 들어갔음. 칸 폭이나 표기 방식은 정해지지 않음. 노드 예: [I3271:174296;114:7346](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-174296) |
| 참고 (줄 수 늘어남) | TI-STA-05-01 범례 | "Sample Pre-treatment (1)"이 "Sample Pre-treatment" / "(1)" 두 줄로 나뉨. 바꾸기 전에는 한 줄. 하이픈 자리에서 끊기지는 않음 |
| 참고 (바꾸기 전부터) | Description, TI-STA-05-01 · 06-01 · 08-01 (`Consumable Storage (n)`), TI-STA-05-01 범례의 유닛 이름 | 칸이 좁아 두 줄로 나뉨. 바꾸기 전에도 두 줄 |
| 참고 (바꾸기 전부터) | TI-STA-05-02-1280 | 유닛 이름이 말줄임(…)으로 잘림. 바꾸기 전에도 잘림 |
| 문제없음 | TI-STA-05-01-1280 범례(줄바꿈 표기) 등 나머지 | 칸 안에 들어감. 캡처 확인 |

### 3-10. Profile / Information Ⓛ / Ⓣ (`274:17728`)

민트색 "2.1 2차" bar가 두 곳 있습니다(`5038:808760`, `6071:653952`). 분홍색 영역은 없습니다.

**고친 텍스트: 79건**

| 변경 전 → 변경 후 | 건수 | 화면 |
| --- | --- | --- |
| Prep Consumable Storage → Consumable Storage | 13 | TI-INF-03-02, TI-INF-03-02/Case1, Section 10 |
| Prep Consumable Storage(1) → Consumable Storage (1) | 5 | TI-INF-03-02, Section 10 |
| Sample Preparation → Sample Pre-treatment (모듈) | 13 | TI-INF-03-02, TI-INF-03-02/Case1, Section 10 (모듈 목록 · 그래프 축 · 모듈별 개수) |
| Sample Preparation (1) · (2) → Sample Pre-treatment (1) · (2) | 16 | TI-INF-03-02, Section 10 |
| Sample Pretreatment (Upper) · (Lower) → Sample Processing (Upper) · (Lower) | 20 | TI-INF-03-02, Section 10 |
| Sample Aliquot (Upper) · (Lower) → Sample Aliquoting (Upper) · (Lower) | 10 | TI-INF-03-02, Section 10 |
| 디스크립션 "표출 모듈 (총 8종) - Sample Storage, Consumable Storage, Sample Pre-treatment, …" | 1 | TI-INF-03-02 |
| 디스크립션 "단, Sample Storage, Consumable Storage의 경우 Device가 아니므로 제외" | 1 | TI-INF-03-02 |

- 처음에는 76곳이 글꼴 Pretendard(Regular · Medium · Bold) 때문에 막혔고, 요청자가 Figma 계정에 글꼴을 넣은 뒤 고쳤습니다.

**화면 점검**

| 구분 | 화면 | 내용 |
| --- | --- | --- |
| 이슈 → 처리함 | TI-INF-03-02 3곳, Section 10 1곳 (Events by Module Type 그래프 축) | "Sample Pre-" / "treatment"로 하이픈 자리에서 줄이 바뀜. `Sample⏎Pre-treatment`로 직접 나눔. 캡처로 확인 |
| 참고 (바꾸기 전부터) | TI-INF-03-02, Section 10 (`Consumable Storage (1)` 4곳) | 칸이 좁아 두 줄로 나뉨. 바꾸기 전에도 두 줄 |
| 문제없음 | 그 밖의 곳 | 칸 안에 들어감 |

**그대로 둔 것**
- Process 표의 "Sample Preparation" 7곳(No · Process · Product Status 표)과 디스크립션 "Process : 세부 공정 단계명 ㄴSample Preparation, …": 프로세스 이름
- 디스크립션 "Run Preparation 메뉴에서 …": 메뉴 이름

### 3-11. Setting Ⓛ / Ⓣ (`274:15069`)

민트색 "2.1 2차" bar가 다섯 곳 있습니다(`5038:974468`, `5038:974472`, `6596:297057`, `7149:392345`, `6596:319237`). 분홍색 bar 두 곳(Protocol Setting · Account Setting 다국어 테스트)은 민트색 bar보다 왼쪽에 있어, 민트색 영역과 겹치지 않습니다.

**고친 텍스트: 22건 (요청자 확인 후)**
- Module Code `PrepConsumableStorage` → `ConsumableStorage` (시약 파일 상세 패널, 옆 칸은 Unit Code "Trolley")
  - 화면: TI-STN-08-P 3, TI-STN-08-P 유형별 정의 2, LI-STN-08-P/File Data 3, LI-STN-08-P 유형별 정의 2, Section 52 · 54 각 4, Section 53 · 55 각 2
  - 용어집 `glossary/modules.csv`의 모듈 ID 변경(PrepConsumableStorage → ConsumableStorage)과 맞춤
  - 처음 보고 때 "29곳"이라고 했던 것은 민트색 영역 두 곳에 걸친 프레임을 두 번 센 것이고, 실제로는 22곳입니다.

**그대로 둔 것**
- File type "Pretreatment", 파일 이름 "ap_pretreat_v2 ~ v5", Barcode Schema Name "Pretreatment Reagent", "Case. Pretreatment 화면": 파일 · 데이터 값
- "Skip-Prep Sample Dispensing Consumable", "pre-treatment"(설명 문장), "Run Preparation", LB Tub (Prep), Thinprep

### 3-12. Material Setup Ⓛ_2.1(2차) - 1102_수정전달완료 (`673:102345`)

민트색 bar는 한 곳이고, 글자가 "2.1 2차"가 아니라 "2.1 (2차) 고도화 추가 사항 반영"입니다(`1206:60909`). 같은 민트색이고 페이지 전체 높이에 걸쳐 있어 이 bar를 기준으로 했습니다. 분홍색 "다국어 테스트" bar 아홉 곳(맨 오른쪽)의 오른쪽은 뺐습니다.

**고친 텍스트: 123건**

| 변경 전 → 변경 후 | 건수 | 화면 · 위치 |
| --- | --- | --- |
| Sample⏎Preparation → Sample⏎Pre-treatment (줄바꿈 유지) | 28 | LI-TSS-DXI(-1280), LI-TSS-DXI-08 · 09, LI-TSS-WBM 등 (모듈 맵 라벨, View guide) |
| Prep Consumable⏎Storage → Consumable⏎Storage (줄바꿈 유지) | 17 | 위와 같음 |
| Prep⏎Consumable⏎Storage → Consumable⏎Storage | 11 | LI-TSS-DXI-1280 (모듈 맵 라벨) |
| Sample Preparation → Sample Pre-treatment | 20 | LI-TSS-DXI(-1280), Dropdown case, LI-INS-01-P 등 (모듈 드롭다운, 팝업 제목) |
| Sample Preparation (1) · (2) · (3) → Sample Pre-treatment (n) | 34 | LI-TSS-DXI(-1280), Dropdown case, LI-TSS-WBM-P |
| Sample Preparation (N) · (1) > STAT storage, Sample Preparation > STAT storage → Sample Pre-treatment … > STAT storage | 10 | LI-TSS-DXI-01(-1280), LI-TSS-DXI-01~07/ 공통정의 |
| STAT storage⏎(Sample Preparation) → STAT storage⏎(Sample Pre-treatment) | 1 | DXI 플로우 (Load Materials) |
| 디스크립션 "1) Prep Consumable Storage 투입 항목" → "1) Consumable Storage 투입 항목" | 1 | LI-TSS-PSI-LCR-01-03 |
| Case 라벨 "Prep Consumable Storage 투입 항목에 따른 스캔 CASE 정의" → "Consumable Storage …" | 1 | LI-TSS-PSI-LCR-01-03/ 세부정의 |

**요청자 확인 후 고친 것: 26건 (소문자 표기)**
- `Prep consumable storage` → `Consumable Storage` 23곳: LI-TSS-DXI-09 7 + 디스크립션 1, LI-TSS-DXI-09 / 세부정의 7, LI-TSS-DXI-1280 6 … (디스크립션 "설치된 모든 Consumable Storage 모두 노출" 포함)
- `Sample preparation` → `Sample Pre-treatment` 3곳: LI-TSS-WBM-P 디스크립션 모듈 목록 1, LI-INS-01-P 디스크립션 "대상 모듈 : Sample Pre-treatment" 2
- 이로써 이 페이지 작업 범위에 예전 모듈 · 유닛 이름이 남은 곳은 없습니다.

**그대로 둔 것**
- Prepare Carrier (메뉴 이름, 경로 표기 포함)
- LB Tub (Prep)
- prepare · preparing이 들어간 안내 문장 (예: "Check the socket type shown on screen and prepare.")
- 트롤리 종류 이름 "Prep Consumable Trolley" / "Prep consumable trolley" 9곳 (View Trolley Info (Prep Consumable Trolley Only) 등, LI-TSS-RGE-01 · 02): 요청자 확인, 바뀐 이름이 아님
- "ver" 변경 이력 메모 "Prep Consumable 투입 항목 추가 (PK/IC 정책 변경)" 4곳: 요청자 확인, 모듈 이름이 아니라 Prep용 소모품을 가리킴

**화면 점검**
- 넘치는 곳 없음. 모듈 맵(View guide) 라벨 "Sample⏎Pre-treatment", "Consumable⏎Storage"가 칸 안에 들어가는 것을 캡처로 확인함

## 4. 화면 점검 (Dashboard)

바꾼 텍스트마다 글자의 실제 폭을 칸 폭과 비교했고, 걸린 곳은 캡처로 확인했습니다.

### 4-1. 이슈 (처리함)

- 처리: 요청자 확인 후 네 곳 모두 `Sample⏎Pre-treatment`로 직접 줄을 나눴습니다. LI-TMG-01-1280과 같은 방식입니다. 캡처로 "Sample" / "Pre-treatment" 두 줄이 칸 안에 들어가는 것을 확인했습니다.

| 화면 | 위치 | 처리 전 이슈 | 노드 |
| --- | --- | --- | --- |
| TI-DAS (UX 화면설계, Dashboard 2차) | Instrument Status 열 제목 | "Sample Pre-" / "treatment"로 하이픈 자리에서 줄이 바뀜. 바꾸기 전에는 "Sample" / "Preparation" | [3249:57736](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-57736) |
| LI-DAS (UX 화면설계, Dashboard 2차) | Instrument Status 열 제목 | 위와 같음 | [3249:60578](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-60578) |
| TI-DAS_1280 (UI) | Instrument Status 카드 제목 | 위와 같음. 바꾸기 전에는 "Sample Preparation"이 한 줄에 들어갔음 | [4890:183143](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=4890-183143) |
| TI-DAS_1280 (UI) | Instrument Status 카드 제목 | 위와 같음 | [5019:249292](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5019-249292) |


### 4-2. 참고 (바꾸기 전부터 있던 것)

- `Consumable Storage (1) / Trolley` 10건은 칸이 좁아 끝이 말줄임(…)으로 잘립니다. 바꾸기 전 `Prep Consumable Storage(1) / Trolley`도 잘렸고, 이름이 짧아져 덜 잘리게 됐습니다.
  - 화면: TI-DAS_1280 4건, LI-TMG-01-1280 6건
- UX TI-DAS의 열 제목 "Consumable Storage"는 "Consumable" / "Storage" 두 줄로 나뉩니다. 바꾸기 전에도 두 줄이었습니다.

### 4-3. 문제없음

- TI-DAS(UI 1920): Instrument Status 제목 "Sample Pre-treatment", "Consumable⏎Storage"가 칸 안에 들어감
- TI-ADS, TI-ADS_1280, 다국어 화면 10개: Instrument Info의 "Consumable Storage", "Sample Pre-treatment"가 칸 안에 들어감
- LI-TMG-01-1280: "Consumable⏎Storage", "Sample⏎Pre-treatment"가 칸 안에 들어감
- 1920 화면의 Inventory Status `Consumable Storage (1) / Trolley`: 칸 안에 들어감

## 5. 따로 본 것

- UX LI-DAS의 Instrument Status 열 제목은 작업 전부터 "Consumable⏎Storage"였습니다. UX TI-DAS는 "Prep Consumable Storage"였습니다.
