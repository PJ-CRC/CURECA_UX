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
basis: 2026-11-26 17:09 · history 402e669e
basis_versions: rules @2026-11-26 14:30 · policy @2026-11-25 21:21 · glossary @2026-11-26 15:17 · screens @2026-11-26 16:15 · common_ux @2026-11-25 16:08
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3667-11461
---
# TI-STN-08 Assay Pack Setting

- T/L 차이: T-IOS는 [Delete] · [Import] · Checkbox로 파일을 지우고 등록함. L-IOS(LI-STN-08)는 조회만 함
- 호출하는 화면: [TI-STN-08-P] Assay Pack File Details ([Details] → 목록 위 패널), [TI-STN-08-01] Import file Popup ([Import])
- 호출되는 곳: LNB Setting > Assay Pack Setting
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Assay Pack Setting 화면**
- 정의
  - 등록된 Assay Pack 파일(Master · Pretreatment · Extraction · PCR)을 조회하고 등록 · 삭제하는 화면
  - 파일 단위로 리스트 노출
- 동작
  - Row의 [Details] 선택 시 목록 위에 File Details 패널 노출 : TI-STN-08-P
- User Type : Service
- 정책 참고 : POL-TST-008

**1  검색 영역**
- 정의
  - 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
  - 모든 조건 AND 결합
- 공통 UX 참고 : COMM-5-p

**1-1  입력 검색**
- File name(Text Input)
  - 기능 : 파일 이름을 입력하여 데이터 조회
  - 부분 일치(Like) 검색
- File type(Dropdown)
  - 기능 : 파일 종류를 단일 선택하여 데이터 조회
  - Default : All
  - 드롭다운 리스트 항목
    - All, Master, Pretreatment, Extraction, PCR
- 공통 UX 참고 : COMM-5-t, COMM-5-h

**1-2  기간 검색(Period)**
- 기능 : 기간 유형을 고르고 기간을 설정하여 데이터 조회
- 기간 유형(Dropdown)
  - Default : Registered Date
  - 드롭다운 리스트 항목
    - Registered Date, Created Date
- 기간 필드
  - 「Select Date Range」 선택 시 Period Filters Popup 노출, [Apply] 후 「YYYY-MM-DD ~ YYYY-MM-DD」 노출
  - 최소 7일 ~ 최대 1년
- 공통 UX 참고 : COMM-5-d

**1-3  Active only(Check box)**
- 기능 : 활성(Active) 파일만 조회
- Default : UnSelected(미선택)
- 리스트 노출
  - Selected(선택) 시, 활성(Active) 파일만 노출
- 공통 UX 참고 : COMM-5-q

**1-4  [Reset] · [Search] 버튼**
- 동작
  - [Reset] 선택 시 검색 조건 초기화 및 전체 목록 노출
  - [Search] 선택 시 검색 결과 노출
  - 검색 결과가 없을 경우 검색 결과 없음 문구 노출
- 케이스 참고 : TI-STN-08/Case > Case 1

**2  Items 개수 · 노출 개수**
- Items : 등록된 파일 전체 건수 (검색 시 검색 결과 건수)
- 노출 개수(Dropdown)
  - Default : 10 items
  - 드롭다운 리스트 항목
    - 10 items, 30 items, 50 items, 100 items
  - 선택 시 해당 개수로 즉시 갱신, 1페이지로 이동
- 공통 UX 참고 : COMM-5-g

**3  [Delete] 버튼, [Import] 버튼**
- [Delete] 버튼
  - 활성화 조건
    - Default 비활성화
    - 1개 이상 선택 시 활성화 (선택 건수 표기 없음)
  - 동작
    - 선택 시 Confirm 노출 : Confirm_026
    - Confirm_026의 [Delete] 선택 시 선택한 파일 삭제 및 Toast 노출 : Toast_001
    - 활성(Active) 파일 포함 시 Alert 노출 : Alert_042 (삭제하지 않음)
- [Import] 버튼
  - 동작
    - 선택 시 Popup 노출 : TI-STN-08-01
    - Popup의 [Import] 선택 시 파일별 양식 확인
    - json 외 파일 포함 시 Alert 노출 : Alert_041
    - 양식 불일치 파일 포함 시 Alert 노출 : Alert_040 (전체 등록 안 됨)
    - 같은 File type · Product Name · 버전이 있으면 Confirm 노출 : Confirm_028
    - 이상 없으면 등록 및 최신 버전 자동 활성, Alert 노출 : Alert_039
- 정책 참고 : POL-TST-008

**4  Assay Pack 파일 리스트**
- 정의 : 등록된 Assay Pack 파일 리스트
- 정렬
  - Default : 등록 일시(Registered Date/Time) 기준 최신순(내림차순)
  - 정렬 가능한 컬럼 항목 : Active
- 컬럼 항목
  - Product Name : 파일의 제품 이름 (Master는 「Master Info」)
  - Version : 파일 버전
  - File type : Master, Pretreatment, Extraction, PCR
  - File name : 확장자 제외
  - Registered Date/Time : 등록 일시 / 표기 : YYYY-MM-DD hh:mm:ss
  - Created Date/Time : 파일 생성 일시 / 표기 : YYYY-MM-DD hh:mm:ss
  - User ID : 등록한 사용자 ID
  - Active : 활성 여부
  - Details : [Details] 버튼
- 텍스트 정렬 : Version · 일시 · Active · Checkbox · Details 가운데 / 나머지 왼쪽
- Checkbox
  - 개별 선택 · 헤더 선택 시 현재 페이지 전체 선택
  - 일부 선택 시 Mix 노출
- 10개 초과 시 Pagination
- 등록된 파일이 없을 경우 안내 문구 노출
- 공통 UX 참고 : COMM-5-g, COMM-5-q
- 케이스 참고 : TI-STN-08/Case > Case 1

**4-1  Active (표시 전용)**
- 정의
  - 활성 파일은 Active 태그(검정), 비활성 파일은 Inactive 태그(회색)
  - 목록에서는 바꾸지 않음 (토글 없음)
- 동작
  - File type · Product Name이 같은 파일 중 1개만 활성 (동시에 2개 활성 불가)
  - 변경은 File Details 패널(TI-STN-08-P)에서 [Active] · [Inactive]로 바꾼 뒤 [Save]
  - Master는 최신 버전 강제 활성, 상세에 변경 버튼 미노출 (변경 불가)
- 정책 참고 : POL-TST-008

**4-2  [Details] 버튼**
- 동작
  - 선택 시 File Details 패널이 목록 위에 겹쳐 노출 : TI-STN-08-P

**5  Pagination**
- Pagination 유형 : Type 1 Number (10개 단위)
- 공통 UX 참고 : COMM-5-l

## 케이스

### Case 1. 세부정의

- 디스크립션 번호 : 1-4, 4
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. 등록된 파일 없음 정의

- 등록된 파일이 없을 경우, 안내 문구 노출

#### 1-2. 검색 결과 없음 정의

- 검색 조건과 일치하는 파일이 없을 경우, 검색 결과 없음 문구 노출

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 3 | Confirm | Confirm_026 | [Delete] 선택 시 | Delete 선택 시 → 선택한 파일 등록 정보 삭제 & Toast 노출 (The selected files have been deleted.) / Cancel 선택 시 → 해당 Confirm 닫힘, 선택 유지 |
| 3 | Toast | Toast_001 | Confirm_026 [Delete]로 삭제 완료 | - |
| 3 | Alert | Alert_042 | [Delete] 선택 시 활성(Active) 파일 포함 | OK 선택 시 → 해당 Alert 닫힘, 삭제하지 않음, 선택 유지 |
| 3 | Alert | Alert_041 | [Import] json 외 파일 포함 | OK 선택 시 → 해당 Alert 닫힘, 데이터 반영 없음 |
| 3 | Alert | Alert_040 | [Import] 양식 불일치 파일 포함 | OK 선택 시 → 해당 Alert 닫힘, 데이터 반영 없음 |
| 3 | Confirm | Confirm_028 | [Import] 같은 File type · Product Name · 버전이 이미 있음 | Overwrite 선택 시 → 기존 파일 교체 & 등록 → Alert_039 / Cancel 선택 시 → Confirm 닫힘, Import 중단 ([TI-STN-08-01] Import file 유지) |
| 3 | Alert | Alert_039 | [Import] 모두 양식과 일치해 등록 완료 | OK 선택 시 → Alert 닫힘 & 목록 최상단에 Import한 파일 노출, 최신 버전 자동 활성 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 화면 제목 | Assay Pack Setting | 기존 원본 (As Is TI-STN-08 3288:235198) |
| 1-1 | File name · File type | Enter file name / All | 기존 원본 |
| 1-2 | Period | Registered Date / Select Date Range | 기존 원본 |
| 2 | Items · 노출 개수 | 24 / 10 items | 기존 원본 |
| 4 | 리스트 | 기존 원본 10행 그대로 | 기존 원본 (As Is TI-STN-08 table/row-base) |
| 4 | Product Name (PCR 행) | Allplex™ GI-Bacteria(I) Assay | `glossary/test-items.csv` GI-B1 (기존 원본과 같음) |
| 5 | Pagination | 1 ~ 10 | 기존 원본 |
| Case 1-1 | 안내 문구 | No files found. / Click Import to add a file. | 기존 원본 ([TI-STN-08 / 세부정의] 3288:240828) |
| Case 1-2 | 안내 문구 | No results found. | 기존 원본 ([TI-STN-08 / 세부정의] 3288:240828) |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Assay Pack Setting | 화면 제목 | LID-STN-360 |
| File name | 화면 1-1 · 화면 4 | LID-STN-361 |
| Enter file name | 화면 1-1 | LID-STN-362 |
| File type | 화면 1-1 · 화면 4 | LID-STN-363 |
| All | 화면 1-1 · 디스크립션 1-1 | LID-EVT-003 |
| Master | 디스크립션 1-1 · 화면 4 | LID-STN-364 |
| Pretreatment | 디스크립션 1-1 · 화면 4 | LID-STN-365 |
| Extraction | 디스크립션 1-1 · 화면 4 | LID-STN-366 |
| PCR | 디스크립션 1-1 · 화면 4 | LID-SPT-033 |
| Period | 화면 1-2 | LID-STN-367 |
| Registered Date | 화면 1-2 · 디스크립션 1-2 | LID-STN-368 |
| Created Date | 디스크립션 1-2 | LID-STN-369 |
| Select Date Range | 화면 1-2 | LID-STN-370 |
| Active only | 화면 1-3 | LID-STN-371 |
| Reset | 화면 1-4 | LID-EVT-022 |
| Search | 화면 1-4 | LID-STN-016 |
| Items | 화면 2 | LID-STN-006 |
| {n} items | 화면 2 · 디스크립션 2 (n = 10 · 30 · 50 · 100) | |
| Delete | 화면 3 | LID-STN-019 |
| Import | 화면 3 | LID-TMG-035 |
| Product Name | 화면 4 | LID-STN-147 |
| Version | 화면 4 | LID-INF-008 |
| Registered Date/Time | 화면 4 | LID-STN-372 |
| Created Date/Time | 화면 4 | LID-STN-373 |
| User ID | 화면 4 | LID-STN-073 |
| Active | 화면 4 · 화면 4-1 | LID-STN-374 |
| Inactive | 화면 4-1 | LID-STN-375 |
| Details | 화면 4 · 화면 4-2 | LID-STN-012 |
| Master Info | 화면 4 | LID-STN-376 |
| No files found. | 케이스 Case 1-1 | LID-STN-377 |
| Click Import to add a file. | 케이스 Case 1-1 | LID-STN-378 |
| No results found. | 케이스 Case 1-2 | LID-STN-015 |
