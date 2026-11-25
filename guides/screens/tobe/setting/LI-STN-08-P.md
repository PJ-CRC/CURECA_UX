---
cid: LI-STN-08-P
pair_cid: TI-STN-08-P
tl_relation: 기능 추가
title: Assay Pack Setting
path: Setting > Assay Pack Setting > File details
type: Popup
version: 0.1.0
date: 2026.10.22
author: 이상헌
client_mode: [Main Mode]
user_type: [Service]
policies: [POL-TST-008, POL-TST-010, POL-ACC-001]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3492-26
---
# LI-STN-08-P Assay Pack File Details

- T/L 차이: 조회 전용. [Delete] · [Save] 없음, Active는 보기만
- 호출하는 화면: 없음
- 호출되는 곳: [LI-STN-08] 목록 [Details]
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Assay Pack File Details 화면**
- 정의
  - 목록에서 고른 Assay Pack 파일의 파일 정보 · 등록 정보 · Reagent 정보를 보는 패널 (조회 전용)
- 동작
  - LI-STN-08 목록에서 Details(›) 선택 시, File details 패널이 목록 위에 겹쳐 노출 (화면 2분할 아님)
  - 노출 위치 : 목록 우측, 목록 영역 높이에 맞춤
  - Pagination은 패널 왼쪽(보이는 목록 영역)으로 이동해 가려지지 않음
  - 패널을 닫으면 원래 위치로 복귀
- User Type : Service
- L-IOS Client Mode : Main Mode

**2  선택 Row**
- Details 선택한 Row 활성화
- 이전 선택 Row 활성화 해제

**2-1  다른 Row의 Details**
- 선택 시 → 패널 내용 변경

**3  File details (조회 전용)**
- File Info : File name(확장자 제외), File type, File Version, File Created Date/Time(YYYY-MM-DD hh:mm:ss), Active(Active · Inactive 태그, 보기만)
- Import Info : Registered Date/Time(YYYY-MM-DD hh:mm:ss), User ID(service)
- Reagent 정보 : 파일 종류별 JSON 순서대로 노출
  - Master : Test Group Info · Sample Type Info · Barcode Schema Info · Item Group Info · PCR Reagent Socket Component Info
  - Pretreatment : Reagent Basic Info · Barcode Info · Quantity Info · Storage Location Info
  - Extraction : Reagent Basic Info · Barcode Info · Component Info
  - PCR : Reagent Basic Info · Barcode Info · Extraction Device Availability · Component Info
  - ID 값(Test Group · Sample Type · Barcode Schema · Item Group · Component ID)은 JSON 그대로 함께 노출
  - Barcode Info : Segments 개수 없이 「Segment Info」 라벨 아래 Segment 노출
  - Quantity Info : Quantity · Base Unit · Packaging Unit (Display 없음)
- 내용이 길면 패널 안에서 스크롤
- [Delete] 버튼 없음
- 공통 UX 참고 : COMM-5-e
- 공통 UX 참고 : COMM-5-o
- 정책 참고 : POL-TST-008
- 정책 참고 : POL-TST-010

**3-1  [닫기] 버튼**
- 선택 시 → 패널 닫힘 → LI-STN-08 목록, Row 활성화 해제

## 케이스

없음 (기존 원본에 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |

(없음)

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 화면 제목 · 목록 | LI-STN-08과 같음 (검색 영역 · Items 24 · 10 items · 목록 10행 · Pagination 1 ~ 10) | 기존 원본 LI-STN-08-P (As Is 3288:238487) |
| 3 | File Info | File name ap_pcr_gi-b1_v5 / File type PCR / File Version v5 / File Created Date/Time 2026-10-06 15:32:09 / Active Active | 기존 원본 그대로 |
| 3 | Import Info | Registered Date/Time 2026-10-07 12:13:44 / User ID service | 기존 원본 그대로 |
| 3 | Reagent Basic Info | Product Name Allplex™ GI-Bacteria(I) Assay / Product Code Allplex_GI-B1_Assay / Test Item Name GI-B1 / Test Item Code GI-B1 / Test Group ID TEST_GROUP_2 / Test Group Code GI / Test Target Selectable Y | `glossary/test-items.csv` GI-B1 줄, Assay Pack 명세 R06 (기존 원본 값과 같음) |
| 3 | Test Target Names | Sh/EI / Cam / Yer / Vib / CdB / Aer / Sal | `glossary/test-items.csv` GI-B1 Target (기존 원본 값과 같음) |
| 3 | Sample Type Mapping Info | SAMPLE_TYPE_6 Raw_stool / SAMPLE_TYPE_7 Cary-blair / SAMPLE_TYPE_8 eNAT_stool / SAMPLE_TYPE_9 Fecal_swab | `glossary/sample-types.csv` GI 줄 (기존 원본 값과 같음) |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Assay Pack Setting | 화면 제목 | |
| File name · Enter file name · File type · All · Period · Registered Date · Select Date Range · Active only · Reset · Search | 화면 2 뒤 목록 (LI-STN-08과 같음) | |
| Items · 10 items | 화면 2 뒤 목록 | |
| Product Name · Version · File type · File name · Registered Date/Time · Created Date/Time · User ID · Active · Details | 화면 2 목록 헤더 | |
| File details | 화면 3 | |
| File Info | 화면 3 | |
| File Version | 화면 3 | |
| File Created Date/Time | 화면 3 | |
| Active | 화면 3 | |
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
