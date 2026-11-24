---
cid: TI-STN-08
pair_cid: LI-STN-08
tl_relation: 기능 추가
title: Assay Pack Setting
path: Setting > Assay Pack Setting
type: Page
version: 0.3.0
date: 2026.10.22
author: 이상헌
client_mode: []
user_type: [Service]
policies: [POL-TST-008]
basis: 2026-11-24 14:48 · history 81255354
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=3304-61160
---
# TI-STN-08 Assay Pack Setting

- T/L 차이: T-IOS는 [Delete] · [Import], 체크박스, 노출 개수 Dropdown이 있음. L-IOS(LI-STN-08)는 조회만
- 호출하는 화면: [TI-STN-08-01] Import file (3 [Import] → 팝업), [TI-STN-08-P] Assay Pack File Details (4-2 [Details] → 패널)
- 호출되는 곳: LNB Setting > Assay Pack Setting

## 디스크립션

**0  Assay Pack Setting 화면**
- 정의
  - 검사 항목, Sample Type, Reagent 구성품, Barcode 규칙 등 검사에 필요한 정보를 담은 Assay Pack 파일(JSON)을 등록 · 조회 · 삭제하는 화면
  - File type : Master / Pretreatment / Extraction / PCR
- User Type : Service
- 정책 참고 : POL-TST-008

**1  검색 영역**
- 정의 : 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 : COMM-5-p

**1-1  입력 검색**
- 모든 조건 AND 결합
- File name : 부분 일치(Like) 검색
- File type : All(디폴트) / Master / Pretreatment / Extraction / PCR

**1-2  기간 검색**
- 기간 유형 : Registered Date(디폴트) / Created Date 중 1개
- 기간 필드 : Calendar (Period) 적용
  - 「Select Date Range」 선택 → Period Filters 팝업 → [Apply] 후 「YYYY-MM-DD ~ YYYY-MM-DD」
  - 최소 7일 ~ 최대 1년, 탭 · 입력 · 오류 · [Apply] 규칙은 공통 UX를 따름
- 공통 UX 참고 : COMM-5-d, COMM-5-h

**1-3  Active only**
- 체크 시 현재 활성(Active) 파일만 표시 (디폴트 해제)
- 공통 UX 참고 : COMM-5-q

**1-4  기능 버튼**
- [Reset] → 검색 조건 초기화 & 전체 목록 노출
- [Search] → 검색 결과 노출
- 케이스 참고 : TI-STN-08/Case > Case 1

**2  Items 개수 · 노출 개수**
- Items : 등록된 파일 전체 건수 (검색 시 검색 결과 건수)
- 노출 개수 Dropdown : 10 items(디폴트) / 30 / 50 / 100 items
  - 선택 시 해당 개수로 즉시 갱신, 1페이지로 이동
- 공통 UX 참고 : COMM-5-g

**3  [Delete] 버튼 · [Import] 버튼**
- [Delete] 버튼
  - 디폴트 비활성화, 1개 이상 선택 시 활성화 (선택 건수 표기 없음)
  - 선택 시 삭제 확인 팝업 노출 : Confirm_026
  - Confirm_026 [Delete] 선택 시 삭제 & 토스트 노출 : Toast_002
  - Confirm_026 [Cancel] 선택 시 팝업 닫힘
  - 활성(Active) 파일 포함 시 알럿 노출, 삭제하지 않음 : Alert_042
- [Import] 버튼
  - 선택 시 Import file 팝업 노출 : TI-STN-08-01 (json 여러 개, 개수 · 용량 제한 없음)
  - [Import] → 파일별 양식 확인
  - json 외 파일 : Alert_041
  - 양식 불일치 : Alert_040 (전체 등록 안 됨)
  - 같은 File type · Product Name · 버전이 있으면 덮어쓰기 여부 확인 : Confirm_028
  - 이상 없으면 → 등록 & 최신 버전 자동 활성 → Alert_039
- 케이스 참고 : TI-STN-08/Case > Case 2
- 정책 참고 : POL-TST-008

**4  목록 (파일 목록)**
- 정렬
  - Default : 등록 일시 최신순
- 표출 항목
  - Product Name | Version | File type | File name | Registered Date/Time | Created Date/Time | User ID | Active | Details
  - 일시 : YYYY-MM-DD hh:mm:ss
  - File name : 확장자 제외
- 텍스트 정렬 : Version · 일시 · Active · 체크박스 · Details 가운데 / 나머지 왼쪽
- 체크박스 : 개별 · 헤더 = 현재 페이지 전체 선택, 일부 선택 시 Mix
- 10개 초과 시 Pagination
- 공통 UX 참고 : COMM-5-g, COMM-5-q

**4-1  Active (표시 전용)**
- 토글 없음 : 활성 파일은 Active 태그(검정), 비활성은 Inactive 태그(회색)
- File type · Product Name이 같은 파일 중 1개만 활성 (동시에 2개 활성 불가)
  - 변경은 상세 File details에서 [Active] · [Inactive]로 바꾼 뒤 [Save] : TI-STN-08-P
- Master : 최신 버전 강제 활성, 상세에 변경 버튼 미노출 (변경 불가 안내)
- 공통 UX 참고 : COMM-5-j
- 정책 참고 : POL-TST-008

**4-2  [Details] 버튼**
- 선택 시 File details 패널이 목록 위에 겹쳐 노출 : TI-STN-08-P

**5  Pagination**
- 10개 단위 Number Pagination
- 공통 UX 참고 : COMM-5-l

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 2 | Items | 24 | 기존 원본 기획 프레임 `3288:235198` |
| 4 | 목록 10행 (Product Name · Version · File type · File name · Registered · Created · User ID · Active) | Master Info · v3 · Master · ap_master_v3 · 2026-10-22 09:12:45 · 2026-10-21 17:40:12 · service · Active / PBS Standard Tube · v4 · Pretreatment · ap_pretreat_v4 · 2026-10-21 14:20:31 · 2026-10-20 18:02:15 · service · Active / STARMag Universal Cartridge Kit · v3 · Extraction · ap_extraction_v3 · 2026-10-14 09:12:08 · 2026-10-13 17:40:52 · service · Active / Allplex™ GI-Bacteria(I) Assay · v5 · PCR · ap_pcr_gi-b1_v5 · 2026-10-07 12:13:44 · 2026-10-06 15:32:09 · service · Active / Allplex™ GI-Bacteria(I) Assay · v4 · PCR · ap_pcr_gi-b1_v4 · 2026-09-30 11:10:27 · 2026-09-29 13:58:03 · service · Inactive (선택) / PBS Standard Tube · v3 · Pretreatment · ap_pretreat_v3 · 2026-09-23 10:07:55 · 2026-09-22 11:35:40 · service · Inactive (선택) / Master Info · v2 · Master · ap_master_v2 · 2026-09-18 16:05:12 · 2026-09-18 10:20:33 · service · Inactive / STARMag Universal Cartridge Kit · v2 · Extraction · ap_extraction_v2 · 2026-09-16 09:04:19 · 2026-09-15 10:01:46 · service · Inactive / Allplex™ GI-Bacteria(I) Assay · v3 · PCR · ap_pcr_gi-b1_v3 · 2026-09-09 08:00:37 · 2026-09-08 07:37:21 · service · Inactive / PBS Standard Tube · v2 · Pretreatment · ap_pretreat_v2 · 2026-09-02 06:57:14 · 2026-09-01 05:13:58 · service · Inactive | 기존 원본 기획 프레임 `3288:235198`. Product Name은 `glossary/consumables.csv`(PBS Standard Tube · STARMag Universal Cartridge Kit) · `glossary/pcr-reagents.csv`(Allplex™ GI-Bacteria(I) Assay)와 같음 |
| 5 | Pagination | 1 ~ 10 (1페이지 선택) | 기존 원본 기획 프레임 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 0 | Assay Pack Setting | 화면 | | - | |
| 1-1 | File name | 화면 · 케이스 | | - | |
| 1-1 | Enter file name | 화면 · 케이스 | | - | |
| 1-1 | File type | 화면 · 케이스 | | - | |
| 1-1 | All | 화면 · 디스크립션 · 케이스 | | - | |
| 1-1 | Master | 디스크립션 | | - | |
| 1-1 | Pretreatment | 디스크립션 | | - | |
| 1-1 | Extraction | 디스크립션 | | - | |
| 1-1 | PCR | 디스크립션 | | - | |
| 1-2 | Period | 화면 · 케이스 | | - | |
| 1-2 | Registered Date | 화면 · 디스크립션 · 케이스 | | - | |
| 1-2 | Created Date | 디스크립션 | | - | |
| 1-2 | Select Date Range | 화면 · 디스크립션 · 케이스 | | - | |
| 1-2 | Period Filters | 디스크립션 | | - | |
| 1-2 | Apply | 디스크립션 | | - | |
| 1-3 | Active only | 화면 · 케이스 | | - | |
| 1-4 | Reset | 화면 · 케이스 | | - | |
| 1-4 | Search | 화면 · 케이스 | | - | |
| 2 | Items | 화면 · 케이스 | | - | |
| 2 | 10 items | 화면 · 디스크립션 · 케이스 | | - | |
| 2 | 30 items | 디스크립션 | | - | |
| 2 | 50 items | 디스크립션 | | - | |
| 2 | 100 items | 디스크립션 | | - | |
| 3 | Delete | 화면 · 케이스 | | - | |
| 3 | Import | 화면 · 케이스 | | - | |
| 4 | Product Name | 화면 · 케이스 | | - | |
| 4 | Version | 화면 · 케이스 | | - | |
| 4 | File type | 화면 · 케이스 | | - | |
| 4 | File name | 화면 · 케이스 | | - | |
| 4 | Registered Date/Time | 화면 · 케이스 | | - | |
| 4 | Created Date/Time | 화면 · 케이스 | | - | |
| 4 | User ID | 화면 · 케이스 | | - | |
| 4 | Active | 화면 · 케이스 | | - | |
| 4 | Details | 화면 · 케이스 | | - | |
| 4-1 | Active | 화면 | | - | |
| 4-1 | Inactive | 화면 | | - | |
| 1-4 | No files found. | 케이스 | | - | |
| 1-4 | Click Import to add a file. | 케이스 | | - | |
| 1-4 | No results found. | 케이스 | | - | |
| 3 | Import file | 케이스 | | - | |
| 3 | Drag and drop files here, or | 케이스 | | - | |
| 3 | Select files | 케이스 | | - | |
| 3 | json · Multiple files | 케이스 | | - | |
| 3 | Cancel | 케이스 | | - | |

## Alert · Confirm · Toast

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 3 | 컨펌 | Confirm_026 | [Delete] 선택 시 | Delete 선택 시 → 선택한 파일 등록 정보 삭제 & Toast 노출 / Cancel 선택 시 → 해당 팝업 닫힘, 선택 유지 |
| 3 | 토스트 | Toast_002 | Confirm_026 [Delete]로 삭제가 끝났을 때 | - |
| 3 | 알럿 | Alert_042 | [Delete] 선택 시 활성(Active) 파일이 포함된 경우 | OK 선택 시 → 해당 팝업 닫힘, 삭제하지 않음, 선택 유지 |
| 3 | 알럿 | Alert_041 | [Import] json 외 파일을 선택한 경우 | OK 선택 시 → 해당 팝업 닫힘, 데이터 반영 없음 |
| 3 | 알럿 | Alert_040 | [Import] 양식과 맞지 않는 파일이 있는 경우 | OK 선택 시 → 해당 팝업 닫힘, 데이터 반영 없음 |
| 3 | 컨펌 | Confirm_028 | [Import] 같은 File type · Product Name · 버전의 파일이 이미 있는 경우 | Overwrite 선택 시 → 기존 파일 교체 & 등록 → Alert_039 / Cancel 선택 시 → (카탈로그 그대로) |
| 3 | 알럿 | Alert_039 | [Import] 등록이 끝났을 때 | OK 선택 시 → 팝업 닫힘 & 목록 최상단에 Import한 파일 노출, 최신 버전 자동 활성 |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | 등록된 파일 없음 · 검색 결과 없음 | 1-1 등록된 파일 없음 / 1-2 검색 결과 없음 | 1-4 | 5 | 기존 원본 (「TI-STN-08 / 세부정의」 `3288:240828`) |
| 2 | 파일 Import 화면 (TI-STN-08-01) | ① 파일 선택 전 / ② 파일 선택 후 | 3 | 2 | 기존 원본 (「TI-STN-08 / Import 정의」 `3288:240943`, 원본 번호 1 → 2) |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 점검 발견 | Ver 0.3.0 (화면 Ver 체계 X.Y.ZZ가 아님) | 2.1.ZZ 체계로 | `old-rules/repository-and-id.md` 6절 | 작업 중 (20261124-최고관리자-setting-2) |
| R02 | 점검 발견 | Import file 팝업 TI-STN-08-01이 IA에 없음 | IA에 추가할지 확인 | `ia/ia-screens.csv` | 대기 (확인 필요) — DS-0012 결정(제안 A)으로 5단계에서 반영 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 0.3.0 | 2026-10-22 | (버전 메모 없음) | 이상헌 | 기존 작업방 화면 정보 |
| | 2026-11-24 | 작업방에 새로 그림 (같은 작업 페이지 Setting  Ⓛ / Ⓣ_re의 원본 기획 프레임 `3288:235198` · Ver 0.3.0) | Claude (20261124-최고관리자-setting-2) | 케이스 3 |
