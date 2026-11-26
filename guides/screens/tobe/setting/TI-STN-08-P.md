---
cid: TI-STN-08-P
pair_cid: LI-STN-08-P
tl_relation: 기능 추가
title: Assay Pack File Details
path: Setting > Assay Pack Setting > Details
type: Popup
version: 0.4.0
date: 2026.10.22
author: 이상헌
client_mode: []
user_type: [Service]
policies: [POL-TST-008 · DS-0012, POL-TST-010]
basis: 2026-11-26 09:27 · history 4079e90d
basis_versions: rules @2026-11-26 · policy @2026-11-25 · glossary @2026-11-25 · screens @2026-11-26 · common_ux @2026-11-25
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3667-11462
---
# TI-STN-08-P Assay Pack File Details

- T/L 차이: T-IOS는 Active · Inactive 변경과 [Save] · [Delete]가 있음. L-IOS(LI-STN-08-P)는 보기만 함
- 호출하는 화면: 없음 (패널 안의 [Delete] · [Save]는 Confirm · Alert만 엶)
- 호출되는 곳: [TI-STN-08] 목록 [Details]
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음 (TI-STN-08-P-R01 반영, 작업 중)
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Assay Pack File Details 화면**
- 정의
  - 목록에서 고른 Assay Pack 파일의 상세 정보를 보는 패널
  - 파일 종류(Master · Pretreatment · Extraction · PCR)별 시약 정보 노출
- 동작
  - [TI-STN-08] 목록에서 Details(›) 선택 시, File Details 패널이 목록 위에 겹쳐 노출 (화면 2분할 아님)
  - 노출 위치 : 목록 우측, 목록 영역 높이에 맞춤
  - [Delete] · [Import] · Pagination은 패널 왼쪽(보이는 목록 영역)으로 이동해 가려지지 않음
  - 패널을 닫으면 원래 위치로 복귀
- User Type : Service
- 정책 참고 : POL-TST-008

**1  목록 버튼 영역**
- 정의
  - [Delete] · [Import] : [TI-STN-08] 목록의 버튼과 같은 동작
- 동작
  - 패널이 열리면 패널 왼쪽으로 이동, 바로 사용 가능
  - 열린 파일 삭제는 패널의 [Delete](4) 사용 가능
- 화면 참고 : TI-STN-08

**2  선택 Row**
- 정의
  - Details 선택한 Row 활성화
- 동작
  - 다른 Row의 Details 선택 시 이전 선택 Row 활성화 해제

**2-1  다른 Row의 Details**
- 동작
  - 선택 시 패널 내용 변경

**3  File Details**
- 정의
  - 파일 종류별 JSON 순서대로 시약 정보 노출 (파일당 시약 1개)
- 노출 항목
  - File Info : File name(확장자 제외), File type, File Version, File Created Date/Time(YYYY-MM-DD hh:mm:ss), Active
  - Import Info : Registered Date/Time(YYYY-MM-DD hh:mm:ss), User ID(service)
  - 시약 정보 : 파일 종류별 항목 (아래 「파일 종류별 노출 항목」)
- Active(Active · Inactive 태그)
  - Master : 최신 버전 강제 활성(Active 고정), [Active] · [Inactive] 버튼 비활성(변경 불가)
  - Pretreatment · Extraction · PCR : 최신 버전 등록 시 최신 버전 자동 활성, [Active] · [Inactive]로 변경 가능
  - 같은 시약(File type · Product Name 동일)은 1개만 활성, 다른 버전을 Active로 바꾸면 기존 활성 버전은 Inactive로 전환
  - 변경 후 하단 [Save] 선택 시 반영
- 파일 종류별 노출 항목
  - Master : Product Name 「Master Info」, Test Group Info(표) → Sample Type Info(표) → Barcode Schema Info(스키마 탭 · 길이 · 유효기간 Segment 순서 · Segment 표) → Item Group Info(표) → PCR Reagent Socket Component Info(표 · Component ID · Type · Color Code)
  - Pretreatment : Reagent Basic Info(Item Group 포함) · Barcode Info · Quantity Info · Storage Location Info
  - Extraction : Reagent Basic Info · Barcode Info · 구성품 탭(Component)별 Basic · Barcode · Quantity · Storage Location Info
  - PCR : Reagent Basic Info(Test Item · Test Group ID · Test Target · Sample Type Mapping 표) · Barcode Info · Extraction Device Availability · 구성품 탭별 Barcode · Max Rxns · Quantity · Storage Location · PCR Socket Component Info
- 표기
  - ID 값(Test Group · Sample Type · Barcode Schema · Item Group · Component ID)은 JSON 그대로 해당 항목과 함께 노출
  - 구성품(Component)이 있는 파일(Extraction · PCR)은 구성품 탭으로 전환, 첫 구성품 기본 선택
  - Barcode Info : Segments 개수 없이 「Segment Info」 라벨 아래 Segment 노출, 파일에 들어온 개수만큼 Segment 순서(오름차순)대로 노출 (개수 제한 없음), Segment 이름이 있으면 코드 아래 노출
  - Quantity Info : Quantity · Base Unit · Packaging Unit 각각 노출 (합친 Display 없음), 시약 단위 rxns
  - Item Group Name : Pretreatment는 Reagent Basic Info, Extraction · PCR은 구성품별 노출
  - Extraction Device Availability(PCR) : M9600 · STARlet 각각 사용 가능 여부 노출
  - PCR 구성품 : Max Rxns · Max Usage Count는 구성품별 노출, PCR Socket Component Info(Component Type · Abbreviation · Socket Positions 표)는 소켓 정보가 있는 구성품만 노출
  - 같은 줄 항목은 명칭 높이를 맞춰 값을 같은 줄에 노출 (명칭이 길거나 다국어로 2줄이 돼도 유지)
- 내용이 길면 패널 안에서 스크롤
- 정책 참고 : POL-TST-008, POL-TST-010
- 케이스 참고 : TI-STN-08-P/Case > Case 1, TI-STN-08-P/Case > Case 2, TI-STN-08-P/Case > Case 3, TI-STN-08-P/Case > Case 4

**3-1  [닫기] 버튼**
- 동작
  - 선택 시 패널 닫힘, [TI-STN-08] 목록으로 돌아가며 Row 활성화 해제

**4  [Delete] 버튼, [Save] 버튼**
- [Delete] 버튼
  - 동작
    - 적용 중(Active) 파일 선택 시 Alert 노출 : Alert_042 (패널 유지)
    - 그 외 파일 선택 시 Confirm 노출 : Confirm_026
    - Confirm_026의 [Delete] 선택 시 패널 닫힘 및 Toast 노출 : Toast_001
    - Confirm_026의 [Cancel] 선택 시 Confirm 닫힘, 패널 유지
    - 삭제한 파일은 적용 중이 아니므로 Instrument 반영 데이터에 영향 없음
- [Save] 버튼 (우측)
  - 활성화 조건
    - Default 비활성화
    - Active · Inactive를 바꾸면 활성화
  - 동작
    - Active로 바꾼 뒤 선택 시 Confirm 노출 : Confirm_029
    - Inactive로 바꾼 뒤 선택 시 Confirm 노출 : Confirm_030
    - 확인 시 반영
- 정책 참고 : POL-TST-008

## 케이스

### Case 1. Master 화면

- 디스크립션 번호 : 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. File type : Master

- Product Name은 「Master Info」로 표시 · 최신 버전 자동 활성 (활성 선택 불가)
- Test Group Info · Sample Type Info · Barcode Schema Info · Item Group Info · PCR Reagent Socket Component Info
- 패널 내용 전체 펼침 (실제 화면은 패널 안에서 스크롤)

### Case 2. Pretreatment 화면

- 디스크립션 번호 : 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 2-1. File type : Pretreatment

- 구성품 없음 · 단일 시약
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
| 4 | Alert | Alert_042 | [Delete] 선택 시 적용 중(Active) 파일 | OK 선택 시 → 해당 Alert 닫힘, 삭제하지 않음, 선택 유지 |
| 4 | Confirm | Confirm_026 | [Delete] 선택 시 (Active 아닌 파일) | Delete 선택 시 → 선택한 파일 등록 정보 삭제 & Toast 노출 (The selected files have been deleted.) / Cancel 선택 시 → 해당 Confirm 닫힘, 선택 유지 |
| 4 | Toast | Toast_001 | Confirm_026 [Delete]로 삭제 완료 | - |
| 4 | Confirm | Confirm_029 | Active로 바꾸고 [Save] 선택 시 | Activate 선택 시 → 선택 버전 활성 & 기존 활성 버전 자동 비활성 (동시에 1개만) & Toast / Cancel 선택 시 → 변경 없음 |
| 4 | Confirm | Confirm_030 | Inactive로 바꾸고 [Save] 선택 시 | Deactivate 선택 시 → 해당 버전 비활성 & Toast ({version} has been deactivated.) / Cancel 선택 시 → 변경 없음 |
| 4 | Toast | Toast_002 | Confirm_030 [Deactivate]로 비활성 완료 | - |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 배경 목록 | TI-STN-08 기획 프레임과 같음 (기존 원본 10행 그대로) | 기존 원본 (As Is TI-STN-08-P 3288:235494) |
| 2 | 선택 Row | Allplex™ GI-Bacteria(I) Assay · v5 · PCR · ap_pcr_gi-b1_v5 행 | 기존 원본 |
| 3 | 패널 제목 | File details | 기존 원본 |
| 3 | File Info · Import Info | ap_pcr_gi-b1_v5 / PCR / v5 / 2026-10-06 15:32:09 / Active / 2026-10-07 12:13:44 / service | 기존 원본 |
| 3 | Reagent Basic Info | Allplex™ GI-Bacteria(I) Assay / Allplex_GI-B1_Assay / GI-B1 / GI-B1 / TEST_GROUP_2 / GI / Y | `glossary/test-items.csv` GI-B1 (기존 원본과 같음) |
| 3 | Test Target Names (7) | Sh/EI, Cam, Yer, Vib, CdB, Aer, Sal | `glossary/test-items.csv` GI-B1 (기존 원본과 같음) |
| 3 | Sample Type Mapping Info (4) | 기존 원본 4행 그대로 (SAMPLE_TYPE_6 Raw_stool · 7 Cary-blair · 8 eNAT_stool · 9 Fecal_swab) | 기존 원본 · `glossary/sample-types.csv` 코드 |
| Case 1 ~ 4 | 파일 종류별 패널 | 기존 원본 그대로 (Master · Pretreatment · Extraction · PCR) | 기존 원본 (As Is TI-STN-08-P 3288:236005) |
| Case 4 | PCR 구성품 Barcode Info 머리 | Barcode Schema Name | 기존 원본 「Barcode Scheme Name」 오타 고침 (뒤 단계용 8) |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| File details | 화면 3 · 케이스 Case 1-1 ~ 4-1 | |
| File Info | 화면 3 · 케이스 Case 1-1 ~ 4-1 | |
| File name | 화면 3 · 케이스 Case 1-1 | |
| File type | 화면 3 · 케이스 Case 1-1 | |
| File Version | 화면 3 · 케이스 Case 1-1 | |
| File Created Date/Time | 화면 3 · 케이스 Case 1-1 | |
| Active | 화면 3 · 케이스 Case 1-1 ~ 4-1 | |
| Inactive | 화면 3 · 케이스 Case 2-1 ~ 4-1 | |
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
| Delete | 화면 4 · 화면 1 | |
| Save | 화면 4 | |
| Import | 화면 1 | |
