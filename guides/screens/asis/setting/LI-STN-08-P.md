---
cid: LI-STN-08-P
pair_cid: TI-STN-08-P
tl_relation: 기능 추가
title: Assay Pack Setting
path: Setting > Assay Pack Setting > File details
type: Popup
version: 0.1.0
date: 2026-10-22
author: 이상헌
client_mode: [Main Mode]
user_type: [Service]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238487
figma_page: Setting  Ⓛ / Ⓣ_As Is (3288:235028)
---
# LI-STN-08-P Assay Pack File Details

> 기존 화면(작업방 「Setting  Ⓛ / Ⓣ_As Is」 페이지, Ver 0.1.0)을 2026-11-26에 다시 옮긴 것입니다(처음 옮긴 날 2026-11-02, 2026-11-25에는 기존 작업방 파일에서 옮김). 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 조회 전용. [Delete] · [Save] 없음, Active는 보기만
- 호출하는 화면: 없음
- 호출되는 곳: [LI-STN-08] 목록 [Details]
- 관련 정책: POL-TST-008
- 다른 프레임(「Setting  Ⓛ / Ⓣ_As Is」): LI-STN-08-P 유형별 정의 (3288:240123, 아래 참조 섹션), 같은 CID 다른 모양 LI-STN-08-P (3288:238994, 아래 케이스)

## 기존 화면

<!-- 기존 작업방에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30 | Assay Pack Setting
- (LNB) Setting | Policy Setting | Protocol Setting | LIS Setting | System Setting | Account Setting | Tube Setting | Assay Pack Setting
- 목록(LI-STN-08과 같음): File name | Enter file name | File type | All | Period | Registered Date | Select Date Range | Active only | Reset | Search / Items | 24 | 10 items / 목록 헤더 · 목록 10줄 · Pagination 1 ~ 10
- 패널 File details (목록 위에 겹침)
  - File Info: File name | ap_pcr_gi-b1_v5 | File type | PCR | File Version | v5 | File Created Date/Time | 2026-10-06 15:32:09 | Active | Active
  - Import Info: Registered Date/Time | 2026-10-07 12:13:44 | User ID | service
  - Reagent Basic Info: Product Name | Allplex™ GI-Bacteria(I) Assay | Product Code | Allplex_GI-B1_Assay | Test Item Name | GI-B1 | Test Item Code | GI-B1
  - Test Group ID | TEST_GROUP_2 | Test Group Code | GI | Test Target Selectable | Y
  - Test Target Names (7): Sh/EI | Cam | Yer | Vib | CdB | Aer | Sal
  - Sample Type Mapping Info (4): Sample Type ID | Sample Type Code / SAMPLE_TYPE_6 | Raw_stool / SAMPLE_TYPE_7 | Cary-blair / SAMPLE_TYPE_8 | eNAT_stool / SAMPLE_TYPE_9 | Fecal_swab

### 사용 컴포넌트

Table (47), Title (30), Reagent Product Name (11), 2 Depth (7), Description Number (4), Square (2), Page number (1), Active (1), Frame (1), Arrow/Chevron_Up (1), Form/Input Text Box (1), Dropdown Outlined (1), Period type (1), Check Box/Square (1), Page size (1), Interface/Close (1)

### 디스크립션 (원문)

#### 화면 노출 경로

- [LI-STN-08] 목록에서 Details(›) 선택 시, [LI-STN-08-P] File details 패널이 목록 위에 겹쳐 노출 (화면 2분할 아님)
- 노출 위치 : 목록 우측, 목록 영역 높이에 맞춤
- Pagination은 패널 왼쪽(보이는 목록 영역)으로 이동해 가려지지 않음
- 패널을 닫으면 원래 위치로 복귀

#### 2. 선택 Row

- Details 선택한 Row 활성화
- (2-1) 다른 Row의 Details 선택 시 → 패널 내용 변경
- 이전 선택 Row 활성화 해제

#### 3. File details (조회 전용)

- File Info : File name(확장자 제외), File type, File Version, File Created Date/Time(YYYY-MM-DD hh:mm:ss), Active(Active · Inactive 태그, 보기만)
- Import Info : Registered Date/Time(YYYY-MM-DD hh:mm:ss), User ID(service)
- 시약 정보 : 파일 종류별 JSON 순서대로 표시
  - 항목 → [LI-STN-08-P 유형별 정의]
  - Master : Test Group · Sample Type · Barcode Schema · Item Group · PCR Reagent Socket Component Info
  - ID 값(Test Group · Sample Type · Barcode Schema · Item Group · Component ID)은 JSON 그대로 함께 표시
  - Barcode Info : Segments 개수 없이 「Segment Info」 라벨 아래 Segment 표시
  - Quantity Info : Quantity · Base Unit · Packaging Unit (Display 없음)
- 내용이 길면 패널 안에서 스크롤
- [Delete] 버튼 없음
- 3-1 [닫기] 버튼
  - 선택 시 → 패널 닫힘 → [LI-STN-08] 목록, Row 활성화 해제

### 케이스

<!-- 「Setting  Ⓛ / Ⓣ_As Is」 페이지의 같은 CID 다른 모양 프레임(패널 내용 전체 펼침)을 옮김. Case 번호는 원본에 없어 원본 제목 그대로 적음 -->

같은 CID의 다른 모양 프레임 LI-STN-08-P ([3288:238994](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238994)): 파일 종류별 패널 내용 전체 펼침 4개. 기획 프레임 안 케이스 없음.

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| (번호 없음) | Case. Master 화면 | File type : Master / Product Name은 「Master Info」로 표시 · 최신 버전 자동 활성 (활성 선택 불가) / Test Group Info · Sample Type Info · Barcode Schema Info · Item Group Info · PCR Reagent Socket Component Info / 패널 내용 전체 펼침 (실제 화면은 패널 안에서 스크롤) | [3288:238994](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238994) |
| (번호 없음) | Case. Pretreatment 화면 | File type : Pretreatment / 구성품 없음 · 단일 시약 / Reagent Basic Info · Barcode Info · Quantity Info · Storage Location / 패널 내용 전체 펼침 (실제 화면은 패널 안에서 스크롤) | [3288:238994](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238994) |
| (번호 없음) | Case. Extraction 화면 | File type : Extraction / 구성품 2개 (LB Tub · MB Tube) / Reagent Basic Info · Barcode Info · 구성품 탭(Component)별 Basic · Barcode · Quantity · Storage / 패널 내용 전체 펼침 (실제 화면은 패널 안에서 스크롤) | [3288:238994](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238994) |
| (번호 없음) | Case. PCR 화면 | File type : PCR / 구성품 2개 (MOM · IC) / Reagent Basic Info(Test Item · Test Group ID · Test Target · Sample Type Mapping 표) · Barcode Info · Extraction Device Availability · 구성품 탭별 Barcode · Max Rxns · Quantity · Storage · PCR Socket Component(Type · Abbreviation · Socket Positions) / 패널 내용 전체 펼침 (실제 화면은 패널 안에서 스크롤) | [3288:238994](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238994) |

#### 케이스 화면 글자 (원문, 패널)

- Case. Master 화면: File details | File Info | File name | File type | ap_master_v3 | Master | File Version | File Created Date/Time | v3 | 2026-10-21 17:40:12 | Active | Active | Import Info | Registered Date/Time | User ID | 2026-10-22 09:12:45 | service
  - Test Group Info: Test Group ID | Test Group Name | Test Group Code / TEST_GROUP_1 | RP | RP / TEST_GROUP_2 | GI | GI / TEST_GROUP_3 | HPV | HPV / TEST_GROUP_4 | RTI | RTI
  - Sample Type Info: Sample Type ID | Sample Type Name | Sample Type Code / SAMPLE_TYPE_1 | Swab | Swab / SAMPLE_TYPE_2 | Aspirate | Aspirate / SAMPLE_TYPE_3 | BAL | BAL / SAMPLE_TYPE_4 | Saliva | Saliva / SAMPLE_TYPE_5 | Sputum | Sputum / SAMPLE_TYPE_6 | Raw stool | Raw_stool / SAMPLE_TYPE_7 | Cary-blair | Cary-blair / SAMPLE_TYPE_8 | eNAT stool | eNAT_stool / SAMPLE_TYPE_9 | Fecal swab | Fecal_swab / SAMPLE_TYPE_10 | Thinprep | Thinprep / SAMPLE_TYPE_11 | Surepath | Surepath / SAMPLE_TYPE_12 | Cellpreserv | Cellpreserv / SAMPLE_TYPE_13 | Urine | Urine / SAMPLE_TYPE_14 | Semen | Semen
  - Barcode Schema Info: (탭) Pretreatment Reagent | STARMag UC Master | STARMag UC Tub | STARMag UC Tube | PCR Reagent Box | PCR Reagent Component / Barcode Schema ID | Barcode Schema Name | Barcode Length | Expiration Date Segment Order / BARCODE_SCHEMA_1 | Pretreatment Reagent | 27 | 2 / Segment Info (8): Segment Order | Segment Name | Segment Length / 1 | 제조 일자 | 6 / 2 | 유효 기간 | 6 / 3 | 제품 고유 번호 | 4 / 4 | 연도 | 2 / 5 | 월 | 1 / 6 | 생산 번호 | 2 / 7 | 버퍼 정보 | 2 / 8 | 일련 번호 | 4
  - Item Group Info: Item Group ID | Item Group Name / ITEM_GROUP_1 | Tube / ITEM_GROUP_2 | Tub / ITEM_GROUP_3 | Tip / ITEM_GROUP_4 | PCR reagent component / ITEM_GROUP_5 | IC
  - PCR Reagent Socket Component Info: Component ID | Component Type | Color Code / PCR_REAGENT_SOCKET_COMPONENT_1 | MOM | #FCFCFD / PCR_REAGENT_SOCKET_COMPONENT_2 | TOM | #FCFCFD / PCR_REAGENT_SOCKET_COMPONENT_3 | Buffer | #B3B3B3
- Case. Pretreatment 화면: File details | File Info | ap_pretreat_v4 | Pretreatment | v4 | 2026-10-20 18:02:15 | Active | Active | Import Info | 2026-10-21 14:20:31 | service
  - Reagent Basic Info: Product Name | Product Code | Max Rxns | Max Usage Count / PBS Standard Tube | PBS_Standard_Tube | 1 | 1 / Item Group ID | Item Group Name / ITEM_GROUP_1 | Tube
  - Barcode Info: Barcode Schema ID | Barcode Schema Name / BARCODE_SCHEMA_1 | Pretreatment Reagent / Segment Info: Segment 3 | PR02 | 제품 고유 번호
  - Quantity Info: Quantity | Base Unit | Packaging Unit / 1 | ea | rack
  - Storage Location Info: Module Code | Unit Code / ConsumableStorage | Trolley
- Case. Extraction 화면: File details | File Info | ap_extraction_v3 | Extraction | v3 | 2026-10-13 17:40:52 | Active | Active | Import Info | 2026-10-14 09:12:08 | service
  - Reagent Basic Info: Product Name | Product Code / STARMag Universal Cartridge Kit | STARMag_UC_Kit
  - Barcode Info: Barcode Schema ID | Schema Name / BARCODE_SCHEMA_2 | STARMag UC Master / Segment Info: Segment 3 | UC96 | 제품 고유 번호
  - Component Info: (탭) LB Tub | MB Tube / Component Name | Component Code | Max Rxns | Max Usage Count / LB Tub | STARMag_UC_Kit_LB_TUB | 96 | 10 / Item Group ID | Item Group Name / ITEM_GROUP_2 | Tub
    - Barcode Info: Barcode Schema ID | Barcode Schema Name / BARCODE_SCHEMA_3 | STARMag UC Tub / Segment Info: Segment 3 | Segment 7 / UC96 | LB / 제품 고유 번호 | 버퍼 정보
    - Quantity Info: 96 | rxns | tub / Storage Location Info: ConsumableStorage | Trolley
- Case. PCR 화면: File details | File Info | ap_pcr_gi-b1_v5 | PCR | v5 | 2026-10-06 15:32:09 | Active | Active | Import Info | 2026-10-07 12:13:44 | service
  - Reagent Basic Info: Product Name | Product Code | Test Item Name | Test Item Code / Allplex™ GI-Bacteria(I) Assay | Allplex_GI-B1_Assay | GI-B1 | GI-B1 / Test Group ID | Test Group Code | Test Target Selectable / TEST_GROUP_2 | GI | Y / Test Target Names (7): Sh/EI | Cam | Yer | Vib | CdB | Aer | Sal / Sample Type Mapping Info (4): Sample Type ID | Sample Type Code / SAMPLE_TYPE_6 | Raw_stool / SAMPLE_TYPE_7 | Cary-blair / SAMPLE_TYPE_8 | eNAT_stool / SAMPLE_TYPE_9 | Fecal_swab
  - Barcode Info: Barcode Schema ID | Barcode Schema Name / BARCODE_SCHEMA_5 | PCR Reagent Box / Segment Info: Segment 3 | GI04
  - Extraction Device Availability: M9600 | STARlet / Available | Available
  - Component Info: (탭) 5X GI-B(I) MOM | GI-BP IC / Component Name | Component Code | Max Rxns | Max Usage Count / 5X GI-B(I) MOM | Allplex_GI-B1_Assay_MOM | 100 | 5 / Item Group ID | Item Group Name / ITEM_GROUP_4 | PCR reagent component
    - Barcode Info: Barcode Schema ID | Barcode Scheme Name / BARCODE_SCHEMA_6 | PCR Reagent Component / Segment Info: Segment 1 | GI04XMOM00 | 구성품 고유 번호
    - Quantity Info: 100 | rxns | set / Storage Location Info: PlateSealing | ColdStorage
    - PCR Socket Component Info: Component ID | Component Type / PCR_REAGENT_SOCKET_COMPONENT_1 | MOM / Component Abbreviation: MOM / Socket Positions (2): Row | Column / A | 1 / B | 7

### 참조 섹션 (원문)

#### `LI-STN-08-P 유형별 정의` ([3288:240123](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-240123))

- File details 패널 · 파일 종류별 표시 항목 (LI-STN-08-P와 동일, JSON 순서) (Ver 0.9.0 · 2026.10.26) · 기준 : 마스터 정보 · 시약 정보 JSON (시약 파일당 시약 1개)
- 파일 종류 : Master / Pretreatment / Extraction / PCR (Master는 Product Name 「Master Info」, 최신 버전 강제 활성)
- 바코드 Segment : 파일에 들어온 Segment 개수만큼 Segment 순서(segmentOrder) 오름차순으로 표시 (개수 제한 없음), Segment 이름(segmentName)이 있으면 코드 아래 표시
- 구성품(Component)이 있는 파일(Extraction · PCR)은 구성품 탭으로 전환, 첫 구성품 기본 선택
- 항목 정렬 : 같은 줄 항목은 명칭 높이를 맞춰 값을 같은 줄에 표시 (명칭이 길거나 다국어로 2줄이 돼도 유지)
- PCR Extraction Device Availability : M9600 · STARlet 각각 사용 가능 여부 표시
- 수량 : Quantity · Base Unit · Packaging Unit 각각 표시(합친 Display 없음), 시약 단위 rxns
- Item Group Name(itemGroupName) : Pretreatment는 Reagent Basic Info, Extraction · PCR은 구성품별 표시 (예: Tube / Tub / PCR reagent component · IC)
- ID : JSON의 ID 값(testGroupId · sampleTypeId · barcodeSchemaId · itemGroupId · componentId)을 해당 항목과 함께 그대로 표시
- Master : Test Group Info(표) → Sample Type Info(표) → Barcode Schema Info(스키마 탭 · 길이 · 유효기간 Segment 순서 · Segment 표) → Item Group Info(표) → PCR Reagent Socket Component Info(표 · Component ID · Type · Color Code)
- PCR 구성품 : Max Rxns · Max Usage Count는 구성품별 표시, PCR Socket Component Info(Component Type · Abbreviation · Socket Positions 표)는 소켓 정보가 있는 구성품만
- 견본 패널 4개(File details | Master · Pretreatment · Extraction · PCR): 글은 위 "케이스 화면 글자"의 네 Case와 같음. 다만 Active 줄은 네 패널 모두 Active 태그 하나(Active · Inactive 버튼 없음), 파일 종류 줄은 「Master / Pretreatment / Extraction / PCR  | Master는 Product Name 「Master Info」, 최신 버전 강제 활성」 모양
