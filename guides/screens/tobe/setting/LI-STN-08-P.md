---
cid: LI-STN-08-P
pair_cid: TI-STN-08-P
tl_relation: 기능 추가
title: Assay Pack File Details
path: Setting > Assay Pack Setting > Details
type: Popup
version: 0.1.0
date: 2026.10.22
author: 이상헌
client_mode: [Main Mode]
user_type: [Service]
policies: [POL-TST-008, POL-TST-010]
basis: 2026-11-26 09:27 · history 4079e90d
basis_versions: rules @2026-11-26 · policy @2026-11-25 · glossary @2026-11-25 · screens @2026-11-26 · common_ux @2026-11-25
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3667-11469
---
# LI-STN-08-P Assay Pack File Details

- T/L 차이: L-IOS는 보기만 함([Delete] · [Save] 없음, Active는 보기만). T-IOS(TI-STN-08-P)는 Active · Inactive를 바꾸고 파일을 지움
- 호출하는 화면: 없음
- 호출되는 곳: [LI-STN-08] 목록 [Details]
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Assay Pack File Details 화면**
- 정의
  - 목록에서 고른 Assay Pack 파일의 상세 정보를 보는 패널
  - 파일 종류(Master · Pretreatment · Extraction · PCR)별 Reagent 정보 노출
- 동작
  - [LI-STN-08] 목록에서 Details(›) 선택 시, File Details 패널이 목록 위에 겹쳐 노출 (화면 2분할 아님)
  - 노출 위치 : 목록 우측, 목록 영역 높이에 맞춤
  - Pagination은 패널 왼쪽(보이는 목록 영역)으로 이동해 가려지지 않음
  - 패널을 닫으면 원래 위치로 복귀
- User Type : Service
- L-IOS Client Mode : Main Mode
- 정책 참고 : POL-TST-008

**2  선택 Row**
- 정의
  - Details 선택한 Row 활성화
- 동작
  - 다른 Row의 Details 선택 시 이전 선택 Row 활성화 해제

**2-1  다른 Row의 Details**
- 동작
  - 선택 시 패널 내용 변경

**3  File Details (조회 전용)**
- 정의
  - 파일 종류별 JSON 순서대로 Reagent 정보 노출
- 노출 항목
  - File Info : File name(확장자 제외), File type, File Version, File Created Date/Time(YYYY-MM-DD hh:mm:ss), Active(Active · Inactive 태그, 보기만)
  - Import Info : Registered Date/Time(YYYY-MM-DD hh:mm:ss), User ID(service)
  - Reagent 정보 : 파일 종류별 항목 (아래 「파일 종류별 노출 항목」)
- 파일 종류별 노출 항목
  - Master : Product Name 「Master Info」, Test Group Info(표) → Sample Type Info(표) → Barcode Schema Info(스키마 탭 · 길이 · Expiration Date Segment 순서 · Segment 표) → Item Group Info(표) → PCR Reagent Socket Component Info(표 · Component ID · Type · Color Code)
  - Pretreatment : Reagent Basic Info(Item Group 포함) · Barcode Info · Quantity Info · Storage Location Info
  - Extraction : Reagent Basic Info · Barcode Info · 구성품 탭(Component)별 Basic · Barcode · Quantity · Storage Location Info
  - PCR : Reagent Basic Info(Test Item · Test Group ID · Test Target · Sample Type Mapping 표) · Barcode Info · Extraction Device Availability · 구성품 탭별 Barcode · Max Rxns · Quantity · Storage Location · PCR Socket Component Info
- 표기
  - ID 값(Test Group · Sample Type · Barcode Schema · Item Group · Component ID)은 JSON 그대로 해당 항목과 함께 노출
  - 구성품(Component)이 있는 파일(Extraction · PCR)은 구성품 탭으로 전환, 첫 구성품 기본 선택
  - Barcode Info : Segments 개수 없이 「Segment Info」 라벨 아래 Segment 노출, 파일에 들어온 개수만큼 Segment 순서(오름차순)대로 노출 (개수 제한 없음), Segment 이름이 있으면 코드 아래 노출
  - Quantity Info : Quantity · Base Unit · Packaging Unit 각각 노출 (합친 Display 없음)
  - 같은 줄 항목은 명칭 높이를 맞춰 값을 같은 줄에 노출
- 내용이 길면 패널 안에서 스크롤
- [Delete] 버튼 없음
- 정책 참고 : POL-TST-008, POL-TST-010
- 케이스 참고 : LI-STN-08-P/Case > Case 1, LI-STN-08-P/Case > Case 2, LI-STN-08-P/Case > Case 3, LI-STN-08-P/Case > Case 4

**3-1  [닫기] 버튼**
- 동작
  - 선택 시 패널 닫힘, [LI-STN-08] 목록으로 돌아가며 Row 활성화 해제

## 케이스

### Case 1. Master 화면

- 디스크립션 번호 : 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. File type : Master

- Product Name은 「Master Info」로 노출 · 최신 버전 자동 활성 (활성 선택 불가)
- Test Group Info · Sample Type Info · Barcode Schema Info · Item Group Info · PCR Reagent Socket Component Info
- 패널 내용 전체 펼침 (실제 화면은 패널 안에서 스크롤)

### Case 2. Pretreatment 화면

- 디스크립션 번호 : 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 2-1. File type : Pretreatment

- 구성품 없음 · 단일 Reagent
- Reagent Basic Info · Barcode Info · Quantity Info · Storage Location
- 패널 내용 전체 펼침 (실제 화면은 패널 안에서 스크롤)

### Case 3. Extraction 화면

- 디스크립션 번호 : 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 3-1. File type : Extraction

- 구성품 2개 (LB Tub · MB Tube)
- Reagent Basic Info · Barcode Info · 구성품 탭(Component)별 Basic · Barcode · Quantity · Storage
- 패널 내용 전체 펼침 (실제 화면은 패널 안에서 스크롤)

### Case 4. PCR 화면

- 디스크립션 번호 : 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 4-1. File type : PCR

- 구성품 2개 (MOM · IC)
- Reagent Basic Info(Test Item · Test Group ID · Test Target · Sample Type Mapping 표) · Barcode Info · Extraction Device Availability · 구성품 탭별 Barcode · Max Rxns · Quantity · Storage · PCR Socket Component(Type · Abbreviation · Socket Positions)
- 패널 내용 전체 펼침 (실제 화면은 패널 안에서 스크롤)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 배경 목록 | LI-STN-08 기획 프레임과 같음 (기존 원본 10행 그대로) | 기존 원본 (As Is LI-STN-08-P 3288:238487) |
| 2 | 선택 Row | Allplex™ GI-Bacteria(I) Assay · v5 · PCR · ap_pcr_gi-b1_v5 행 | 기존 원본 |
| 3 | 패널 | TI-STN-08-P 패널과 같은 값 (Active는 태그만) | 기존 원본 · `glossary/test-items.csv` GI-B1 · `glossary/sample-types.csv` 코드 |
| Case 1 ~ 4 | 파일 종류별 패널 | 기존 원본 그대로 (Master · Pretreatment · Extraction · PCR) | 기존 원본 (As Is LI-STN-08-P 3288:238994) |
| Case 3 · 4 | Extraction · PCR 구성품 Barcode Info 머리 | Barcode Schema Name | 기존 원본 「Schema Name」 · 「Barcode Scheme Name」 고침 (뒤 단계용 8) |

## 화면 표기 글자

<!-- TI-STN-08-P와 같은 글자에서 Delete · Save · Import · Inactive(버튼)를 뺌 -->

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| File details | 화면 3 · 케이스 Case 1-1 ~ 4-1 | |
| File Info | 화면 3 · 케이스 Case 1-1 ~ 4-1 | |
| File name | 화면 3 · 케이스 Case 1-1 | |
| File type | 화면 3 · 케이스 Case 1-1 | |
| File Version | 화면 3 · 케이스 Case 1-1 | |
| File Created Date/Time | 화면 3 · 케이스 Case 1-1 | |
| Active | 화면 3 · 케이스 Case 1-1 ~ 4-1 | |
| Inactive | 디스크립션 3 | |
| Import Info | 화면 3 · 케이스 Case 1-1 ~ 4-1 | |
| Registered Date/Time | 화면 3 · 케이스 Case 1-1 | |
| User ID | 화면 3 · 케이스 Case 1-1 | |
| Reagent Basic Info | 화면 3 · 케이스 Case 2-1 ~ 4-1 | |
| Product Name | 화면 3 · 케이스 Case 2-1 ~ 4-1 | |
| Product Code | 화면 3 · 케이스 Case 2-1 ~ 4-1 | |
| Test Item Name | 화면 3 · 케이스 Case 4-1 | |
| Test Item Code | 화면 3 · 케이스 Case 4-1 | |
| Test Group ID | 화면 3 · 케이스 Case 1-1 · 4-1 | |
| Test Group Name | 케이스 Case 1-1 | |
| Test Group Code | 화면 3 · 케이스 Case 1-1 · 4-1 | |
| Test Target Selectable | 화면 3 · 케이스 Case 4-1 | |
| Test Target Names ({n}) | 화면 3 · 케이스 Case 4-1 (n = 7) | |
| Sample Type Mapping Info ({n}) | 화면 3 · 케이스 Case 4-1 (n = 4) | |
| Sample Type ID | 화면 3 · 케이스 Case 1-1 · 4-1 | |
| Sample Type Name | 케이스 Case 1-1 | |
| Sample Type Code | 화면 3 · 케이스 Case 1-1 · 4-1 | |
| Test Group Info | 케이스 Case 1-1 | |
| Sample Type Info | 케이스 Case 1-1 | |
| Barcode Schema Info | 케이스 Case 1-1 | |
| Barcode Schema ID | 케이스 Case 1-1 ~ 4-1 | |
| Barcode Schema Name | 케이스 Case 1-1 ~ 4-1 | |
| Barcode Length | 케이스 Case 1-1 | |
| Expiration Date Segment Order | 케이스 Case 1-1 | |
| Segment Info ({n}) | 케이스 Case 1-1 (n = 8) | |
| Segment Info | 케이스 Case 2-1 ~ 4-1 | |
| Segment Order | 케이스 Case 1-1 | |
| Segment Name | 케이스 Case 1-1 | |
| Segment Length | 케이스 Case 1-1 | |
| Segment {n} | 케이스 Case 2-1 ~ 4-1 (n = 1 · 3 · 7) | |
| Item Group Info | 케이스 Case 1-1 | |
| Item Group ID | 케이스 Case 1-1 ~ 4-1 | |
| Item Group Name | 케이스 Case 1-1 ~ 4-1 | |
| PCR Reagent Socket Component Info | 케이스 Case 1-1 | |
| Component ID | 케이스 Case 1-1 · 4-1 | |
| Component Type | 케이스 Case 1-1 · 4-1 | |
| Color Code | 케이스 Case 1-1 | |
| Barcode Info | 케이스 Case 2-1 ~ 4-1 | |
| Max Rxns | 케이스 Case 2-1 ~ 4-1 | |
| Max Usage Count | 케이스 Case 2-1 ~ 4-1 | |
| Quantity Info | 케이스 Case 2-1 ~ 4-1 | |
| Quantity | 케이스 Case 2-1 | |
| Base Unit | 케이스 Case 2-1 | |
| Packaging Unit | 케이스 Case 2-1 | |
| Storage Location Info | 케이스 Case 2-1 ~ 4-1 | |
| Module Code | 케이스 Case 2-1 | |
| Unit Code | 케이스 Case 2-1 | |
| Component Info | 케이스 Case 3-1 · 4-1 | |
| Component Name | 케이스 Case 3-1 · 4-1 | |
| Component Code | 케이스 Case 3-1 · 4-1 | |
| Extraction Device Availability | 케이스 Case 4-1 | |
| Available | 케이스 Case 4-1 | |
| PCR Socket Component Info | 케이스 Case 4-1 | |
| Component Abbreviation | 케이스 Case 4-1 | |
| Socket Positions ({n}) | 케이스 Case 4-1 (n = 2) | |
| Row | 케이스 Case 4-1 | |
| Column | 케이스 Case 4-1 | |
