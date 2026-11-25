---
cid: TI-STN-08-P
pair_cid: LI-STN-08-P
tl_relation: 기능 추가
title: Assay Pack File Details
path: Setting > Assay Pack Setting > File details
type: Popup
version: 0.4.0
date: 2026.10.22
author: 이상헌
client_mode: []
user_type: [Service]
policies: [POL-TST-008 · DS-0012, POL-TST-010, POL-ACC-001]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3492-20
---
# TI-STN-08-P Assay Pack File Details

- T/L 차이: T-IOS만 Active · Inactive 변경과 [Save], [Delete]. L-IOS(LI-STN-08-P)는 조회만
- 호출하는 화면: 없음 (패널 안의 [Delete] · [Save]는 Confirm · Alert만 엶)
- 호출되는 곳: [TI-STN-08] 목록 [Details]
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음 (TI-STN-08-P-R01 화면 이름 반영)
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Assay Pack File Details 화면**
- 정의
  - 목록에서 고른 Assay Pack 파일의 파일 정보 · 등록 정보 · Reagent 정보를 보고 Active를 바꾸거나 파일을 지우는 패널
- 동작
  - TI-STN-08 목록에서 Details(›) 선택 시, File details 패널이 목록 위에 겹쳐 노출 (화면 2분할 아님)
  - 노출 위치 : 목록 우측, 목록 영역 높이에 맞춤
  - [Delete] · [Import] · Pagination은 패널 왼쪽(보이는 목록 영역)으로 이동해 가려지지 않음
  - 패널을 닫으면 원래 위치로 복귀
- User Type : Service

**1  목록 버튼 영역**
- [Delete] / [Import] : TI-STN-08 정의와 동일
- 패널이 열리면 패널 왼쪽으로 이동, 바로 사용 가능
- 열린 파일 삭제는 패널의 [Delete](4) 사용 가능
- 화면 참고 : TI-STN-08

**2  선택 Row**
- Details 선택한 Row 활성화
- 이전 선택 Row 활성화 해제

**2-1  다른 Row의 Details**
- 선택 시 → 패널 내용 변경

**3  File details**
- File Info : File name(확장자 제외), File type, File Version, File Created Date/Time(YYYY-MM-DD hh:mm:ss), Active
- Active(Active · Inactive 태그)
  - Master : 최신 버전 강제 활성(Active 고정), [Active] · [Inactive] 버튼 비활성(변경 불가)
  - Pretreatment · Extraction · PCR : 최신 버전 등록 시 최신 버전 자동 활성, [Active] · [Inactive]로 변경 가능
  - 같은 Reagent(File type · Product Name 동일)는 1개만 활성 → 다른 버전을 Active로 바꾸면 기존 활성 버전은 Inactive로 전환
  - 변경 → 하단 [Save] → Active : Confirm_029 / Inactive : Confirm_030
- Import Info : Registered Date/Time(YYYY-MM-DD hh:mm:ss), User ID(service)
- Reagent 정보 : 파일 종류별 JSON 순서대로 노출 (파일당 Reagent 1개)
  - ID 값(Test Group · Sample Type · Barcode Schema · Item Group · Component ID)은 JSON 그대로 함께 노출
  - Master : Test Group Info · Sample Type Info · Barcode Schema Info · Item Group Info · PCR Reagent Socket Component Info
  - Pretreatment : Reagent Basic Info · Barcode Info · Quantity Info · Storage Location Info
  - Extraction : Reagent Basic Info · Barcode Info · Component Info
  - PCR : Reagent Basic Info · Barcode Info · Extraction Device Availability · Component Info
  - 구성품(Extraction · PCR) : 구성품 탭 전환
  - Barcode Info : Segments 개수 없이 「Segment Info」 라벨 아래 Segment 노출
    - 파일에 들어온 개수만큼 Segment 순서대로 노출 (개수 제한 없음), Segment 이름이 있으면 함께 노출
  - Quantity Info : Quantity · Base Unit · Packaging Unit 각각 노출 (Display 없음)
- 내용이 길면 패널 안에서 스크롤
- 공통 UX 참고 : COMM-5-e
- 공통 UX 참고 : COMM-5-o
- 정책 참고 : POL-TST-008
- 정책 참고 : POL-TST-010

**3-1  [닫기] 버튼**
- 선택 시 → 패널 닫힘 → TI-STN-08 목록, Row 활성화 해제

**4  [Delete] 버튼, [Save] 버튼**
- [Delete] 버튼
  - 적용 중(Active) 파일 → Alert 노출 : Alert_042, 패널 유지
  - 그 외 → Confirm 노출 : Confirm_026
  - [Delete] → 패널 닫힘 & <span style="color:red">Toast 노출 : Toast_001</span>
  - [Cancel] → Popup 닫힘, 패널 유지
  - 삭제한 파일은 적용 중이 아니므로 Instrument 반영 데이터에 영향 없음
- [Save] 버튼 (우측)
  - Default : 비활성, Active · Inactive를 바꾸면 활성
  - 선택 시 → Active로 바꿨으면 Confirm 노출 : Confirm_029, Inactive로 바꿨으면 Confirm 노출 : Confirm_030 → 확인 시 반영
  - <span style="color:red">Active 반영 뒤 Toast 노출</span>
  - <span style="color:red">Inactive 반영 뒤 Toast 노출 : Toast_002</span>
- 공통 UX 참고 : COMM-5-c
- 정책 참고 : POL-TST-008

## 케이스

없음 (기존 원본에 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 3 · 4 | Confirm | Confirm_029 | [Active]로 바꾸고 [Save] | Activate 선택 시 → 선택 버전 활성 & 기존 활성 버전 자동 비활성 (동시에 1개만) & Toast / Cancel 선택 시 → 변경 없음 |
| 3 · 4 | Confirm | Confirm_030 | [Inactive]로 바꾸고 [Save] | Deactivate 선택 시 → 해당 버전 비활성 & Toast / Cancel 선택 시 → 변경 없음 |
| 4 | Toast | Toast_002 | Confirm_030 [Deactivate]로 비활성한 뒤 | - |
| 4 | Alert | Alert_042 | [Delete] 선택 시 적용 중(Active) 파일 | OK 선택 시 → 해당 Alert 닫힘, 삭제하지 않음, 선택 유지 |
| 4 | Confirm | Confirm_026 | [Delete] 선택 시 (Active 아님) | Delete 선택 시 → 선택한 파일 등록 정보 삭제 & Toast 노출 / Cancel 선택 시 → 해당 Confirm 닫힘, 선택 유지 |
| 4 | Toast | Toast_001 | Confirm_026 [Delete]로 삭제한 뒤 | - |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 화면 제목 · 목록 | TI-STN-08과 같음 (검색 영역 · Items 24 · 10 items · 목록 10행 · Pagination 1 ~ 10) | 기존 원본 TI-STN-08-P (As Is 3288:235494) |
| 3 | File Info | File name ap_pcr_gi-b1_v5 / File type PCR / File Version v5 / File Created Date/Time 2026-10-06 15:32:09 / Active Active | 기존 원본 그대로 |
| 3 | Import Info | Registered Date/Time 2026-10-07 12:13:44 / User ID service | 기존 원본 그대로 |
| 3 | Reagent Basic Info | Product Name Allplex™ GI-Bacteria(I) Assay / Product Code Allplex_GI-B1_Assay / Test Item Name GI-B1 / Test Item Code GI-B1 / Test Group ID TEST_GROUP_2 / Test Group Code GI / Test Target Selectable Y | `glossary/test-items.csv` GI-B1 줄, Assay Pack 명세 R06 (기존 원본 값과 같음) |
| 3 | Test Target Names | Sh/EI / Cam / Yer / Vib / CdB / Aer / Sal | `glossary/test-items.csv` GI-B1 Target (기존 원본 값과 같음) |
| 3 | Sample Type Mapping Info | SAMPLE_TYPE_6 Raw_stool / SAMPLE_TYPE_7 Cary-blair / SAMPLE_TYPE_8 eNAT_stool / SAMPLE_TYPE_9 Fecal_swab | `glossary/sample-types.csv` GI 줄 (기존 원본 값과 같음) |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Assay Pack Setting | 화면 제목 | |
| File name · Enter file name · File type · All · Period · Registered Date · Select Date Range · Active only · Reset · Search | 화면 1 뒤 목록 (TI-STN-08과 같음) | |
| Items · 10 items | 화면 1 뒤 목록 | |
| Delete | 화면 1 · 화면 4 | |
| Import | 화면 1 | |
| Product Name · Version · File type · File name · Registered Date/Time · Created Date/Time · User ID · Active · Details | 화면 2 목록 헤더 | |
| File details | 화면 3 | |
| File Info | 화면 3 | |
| File Version | 화면 3 | |
| File Created Date/Time | 화면 3 | |
| Active | 화면 3 | |
| Inactive | 화면 3 | |
| Import Info | 화면 3 | |
| Registered Date/Time | 화면 3 | |
| User ID | 화면 3 | |
| Reagent Basic Info | 화면 3 | |
| Product Name | 화면 3 | |
| Product Code | 화면 3 | |
| Test Item Name | 화면 3 | |
| Test Item Code | 화면 3 | |
| Test Group ID | 화면 3 | |
| Test Group Code | 화면 3 | |
| Test Target Selectable | 화면 3 | |
| Test Target Names | 화면 3 | |
| Sample Type Mapping Info | 화면 3 | |
| Sample Type ID | 화면 3 | |
| Sample Type Code | 화면 3 | |
| Segment Info | 디스크립션 3 | |
| Test Group Info · Sample Type Info · Barcode Schema Info · Item Group Info · PCR Reagent Socket Component Info | 디스크립션 3 (Master) | |
| Barcode Info · Quantity Info · Storage Location Info · Component Info · Extraction Device Availability | 디스크립션 3 (Pretreatment · Extraction · PCR) | |
| Save | 화면 4 | |
