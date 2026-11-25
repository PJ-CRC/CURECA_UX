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
policies: [POL-TST-008, POL-ACC-001]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3492-18
---
# TI-STN-08 Assay Pack Setting

- T/L 차이: T-IOS는 [Import] · [Delete] · Checkbox로 파일 등록 · 삭제, Active 변경은 상세(TI-STN-08-P)에서. L-IOS(LI-STN-08)는 조회만
- 호출하는 화면: [TI-STN-08-P] Assay Pack File Details ([Details] → 목록 위 패널), [TI-STN-08-01] Import file ([Import] → Popup)
- 호출되는 곳: LNB Setting > Assay Pack Setting
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Assay Pack Setting 화면**
- 정의
  - 등록된 Assay Pack 파일(Master · Pretreatment · Extraction · PCR) 목록을 조회하고 파일을 등록 · 삭제하는 화면
- User Type : Service

**1  검색 영역**
- 정의
  - 검색 조건에 따라 목록 내 데이터를 필터링하여 조회하는 영역
  - 모든 조건 AND 결합
- 공통 UX 참고 : COMM-5-p

**1-1  입력 검색**
- File name : 부분 일치(Like) 검색
- File type : All(Default) / Master / Pretreatment / Extraction / PCR

**1-2  기간 검색**
- 기간 유형 : Registered Date(Default) / Created Date 중 1개
- 기간 필드 : Calendar (Period) 적용
- 「Select Date Range」 선택 → Period Filters Popup → [Apply] 후 「YYYY-MM-DD ~ YYYY-MM-DD」
- 최소 7일 ~ 최대 1년
- 공통 UX 참고 : COMM-5-d

**1-3  Active only**
- 체크 시 현재 활성(Active) 파일만 노출 (Default 해제)

**1-4  기능 버튼**
- [Reset] → 검색 조건 초기화 & 전체 목록 노출
- [Search] → 검색 결과 노출
- 공통 UX 참고 : COMM-5-c

**2  Items 개수 · 노출 개수**
- Items : 등록된 파일 전체 건수 (검색 시 검색 결과 건수)
- 노출 개수 Dropdown : 10 items(Default) / 30 / 50 / 100 items
- 선택 시 해당 개수로 즉시 갱신, 1페이지로 이동
- 공통 UX 참고 : COMM-5-g

**3  [Delete] 버튼, [Import] 버튼**
- [Delete] 버튼
  - Default 비활성화, 1개 이상 선택 시 활성화 (선택 건수 표기 없음)
  - 선택 시 → Confirm 노출 : Confirm_026 → [Delete] 삭제 & Toast 노출 : Toast_001 / [Cancel] 닫힘
  - 활성(Active) 파일 포함 시 Alert 노출 : Alert_042 (삭제하지 않음)
- [Import] 버튼
  - 선택 시 → Popup 노출 : TI-STN-08-01 (json 여러 개, 개수 · 용량 제한 없음)
  - [Import] → 파일별 양식 확인
  - json 외 Alert 노출 : Alert_041 / 양식 불일치 Alert 노출 : Alert_040 (전체 등록 안 됨)
  - 같은 File type · Product Name · 버전이 있으면 Confirm 노출 : Confirm_028 (덮어쓰기 여부)
  - 이상 없으면 → 등록 & 최신 버전 자동 활성 → Alert 노출 : Alert_039
- 공통 UX 참고 : COMM-5-c
- 정책 참고 : POL-TST-008

**4  목록**
- 정의 : 등록된 Assay Pack 파일 목록
- 정렬
  - Default : 등록 일시 최신순, 10개 초과 시 Pagination
- 컬럼 항목
  - Product Name | Version | File type | File name | Registered Date/Time | Created Date/Time | User ID | Active | Details
  - 일시 : YYYY-MM-DD hh:mm:ss
  - File name : 확장자 제외
- 텍스트 정렬 : Version · 일시 · Active · Checkbox · Details 가운데 / 나머지 왼쪽
- Checkbox : 개별 · 헤더 = 현재 페이지 전체 선택, 일부 선택 시 Mix
- 데이터가 없을 때
  - 등록된 파일 없음 : No files found. Click Import to add a file.
  - 검색 결과 없음 : No results found.
- 공통 UX 참고 : COMM-5-g
- 공통 UX 참고 : COMM-5-q

**4-1  Active (노출 전용)**
- 토글 없음 : 활성 파일은 Active 태그(검정), 비활성은 Inactive 태그(회색)
- File type · Product Name이 같은 파일 중 1개만 활성 (동시에 2개 활성 불가)
- 변경은 상세 TI-STN-08-P에서 [Active] · [Inactive]로 바꾼 뒤 [Save]
- Master : 최신 버전 강제 활성, 상세에서 [Active] · [Inactive] 버튼 비활성 (변경 불가)
- 공통 UX 참고 : COMM-5-j
- 정책 참고 : POL-TST-008

**4-2  [Details] 버튼**
- 선택 시 → TI-STN-08-P Assay Pack File Details 패널이 목록 위에 겹쳐 노출

**5  Pagination**
- Type 1 Number (10개 단위)
- 공통 UX 참고 : COMM-5-l

## 케이스

없음 (기존 원본에 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 3 | Confirm | Confirm_026 | [Delete] 선택 시 | Delete 선택 시 → 선택한 파일 등록 정보 삭제 & Toast 노출 / Cancel 선택 시 → 해당 Confirm 닫힘, 선택 유지 |
| 3 | Toast | Toast_001 | Confirm_026 [Delete]로 삭제한 뒤 | - |
| 3 | Alert | Alert_042 | [Delete] 선택 시 활성(Active) 파일 포함 | OK 선택 시 → 해당 Alert 닫힘, 삭제하지 않음, 선택 유지 |
| 3 | Alert | Alert_041 | Import file에서 json 외 파일 선택 | OK 선택 시 → 해당 Alert 닫힘, 데이터 반영 없음 |
| 3 | Alert | Alert_040 | [Import] 양식 불일치 파일 있음 | OK 선택 시 → 해당 Alert 닫힘, 데이터 반영 없음 |
| 3 | Confirm | Confirm_028 | [Import] 같은 File type · Product Name · 버전 있음 | Overwrite 선택 시 → 기존 파일 교체 & 등록 → Alert_039 / Cancel 선택 시 → Confirm 닫힘, Import 중단 (Import file 유지) |
| 3 | Alert | Alert_039 | [Import] 이상 없이 등록 | OK 선택 시 → Alert 닫힘 & 목록 최상단에 Import한 파일 노출, 최신 버전 자동 활성 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 화면 제목 | Assay Pack Setting | 기존 원본 TI-STN-08 (As Is 3288:235198) |
| 1-1 · 1-2 · 1-3 | 검색 조건 | File name · Enter file name · File type · All · Period · Registered Date · Select Date Range · Active only | 기존 원본 그대로 |
| 2 | Items · 노출 개수 | Items 24 · 10 items | 기존 원본 그대로 |
| 4 | 목록 | 기존 원본 10행 그대로 | 기존 원본 TI-STN-08 목록 (As Is 3288:235198) |
| 5 | Pagination | 1 ~ 10 | 기존 원본 그대로 |
| - | 영역 틀 (콘텐츠 영역 바탕 · 검색 영역 · Items 줄 · 목록 바탕 · 구분선) | 기존 원본 크기 · 색 그대로 | 기존 원본 TI-STN-08 (As Is 3288:235199 · 3288:235448 · 3288:235472 · 3288:235201) |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Assay Pack Setting | 화면 제목 | |
| File name | 화면 1-1 · 화면 4 | |
| Enter file name | 화면 1-1 | |
| File type | 화면 1-1 · 화면 4 | |
| All | 화면 1-1 | |
| Master | 디스크립션 1-1 · 화면 4 | |
| Pretreatment | 디스크립션 1-1 · 화면 4 | |
| Extraction | 디스크립션 1-1 · 화면 4 | |
| PCR | 디스크립션 1-1 · 화면 4 | |
| Period | 화면 1-2 | |
| Registered Date | 화면 1-2 | |
| Created Date | 디스크립션 1-2 | |
| Select Date Range | 화면 1-2 | |
| Active only | 화면 1-3 | |
| Reset | 화면 1-4 | |
| Search | 화면 1-4 | |
| Items | 화면 2 | |
| 10 items | 화면 2 | |
| 30 items · 50 items · 100 items | 디스크립션 2 | |
| Delete | 화면 3 | |
| Import | 화면 3 | |
| Product Name | 화면 4 | |
| Version | 화면 4 | |
| Registered Date/Time | 화면 4 | |
| Created Date/Time | 화면 4 | |
| User ID | 화면 4 | |
| Active | 화면 4-1 | |
| Inactive | 화면 4-1 | |
| Details | 화면 4 | |
| No files found. Click Import to add a file. | 디스크립션 4 | |
| No results found. | 디스크립션 4 | |
