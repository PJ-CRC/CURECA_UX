---
cid: LI-STN-08
pair_cid: TI-STN-08
tl_relation: 기능 추가
title: Assay Pack Setting
path: Setting > Assay Pack Setting
type: Page
version: 0.1.0
date: 2026.10.22
author: 이상헌
client_mode: [Main Mode]
user_type: [Service]
policies: [POL-TST-008]
basis: 2026-11-24 14:48 · history 81255354
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=3304-61167
---
# LI-STN-08 Assay Pack Setting

- T/L 차이: 조회 전용. [Import] · [Delete] 버튼과 체크박스가 없음. 노출 개수 고정(10)
- 호출하는 화면: [LI-STN-08-P] Assay Pack File Details (4-2 [Details] → 패널)
- 호출되는 곳: LNB Setting > Assay Pack Setting

## 디스크립션

**0  Assay Pack Setting 화면**
- 정의
  - 검사 항목, Sample Type, Reagent 구성품, Barcode 규칙 등 검사에 필요한 정보를 담은 Assay Pack 파일(JSON)을 조회하는 화면
  - File type : Master / Pretreatment / Extraction / PCR
- User Type : Service
- L-IOS Client Mode : Main Mode
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

**2  Items 개수 · 노출 개수**
- Items : 등록된 파일 전체 건수 (검색 시 검색 결과 건수)
- <span style="color:red">~~노출 개수 Dropdown : 10 items(디폴트) / 30 / 50 / 100 items~~</span>
  - <span style="color:red">~~선택 시 해당 개수로 즉시 갱신, 1페이지로 이동~~</span>
- L-IOS는 조회 전용 : [Import] · [Delete] 버튼 없음<span style="color:red">~~ (T-IOS [TI-STN-08]에서 관리)~~</span>
- 공통 UX 참고 : COMM-5-g

**4  목록 (파일 목록)**
- 정렬
  - Default : 등록 일시 최신순
- 표출 항목
  - Product Name | Version | File type | File name | Registered Date/Time | Created Date/Time | User ID | Active | Details
  - 일시 : YYYY-MM-DD hh:mm:ss
  - File name : 확장자 제외
  - User ID : service로 표기
  - Master : Product Name 「Master Info」
- 체크박스 없음 (선택 · 삭제 기능 없음)
- 텍스트 정렬 : Version · 일시 · Active · Details 가운데 / 나머지 왼쪽
- 10개 초과 시 Pagination
- 공통 UX 참고 : COMM-5-g

**4-1  Active (조회 전용)**
- 활성 파일은 Active 태그(검정), 비활성은 Inactive 태그(회색), 변경 불가 (상세에서도 보기만)
- 같은 File type · Product Name 중 1개만 Active, Master는 최신 버전 Active
- 공통 UX 참고 : COMM-5-j
- 정책 참고 : POL-TST-008

**4-2  [Details] 버튼**
- 선택 시 File details 패널이 목록 위에 겹쳐 노출 : LI-STN-08-P

**5  Pagination**
- 10개 단위 Number Pagination
- 공통 UX 참고 : COMM-5-l

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 2 | Items | 24 | 기존 원본 기획 프레임 `3288:238191` |
| 4 | 목록 10행 | TI-STN-08 화면 예시와 같은 10행 (선택 표시 없음) | 기존 원본 기획 프레임 `3288:238191`. Product Name은 `glossary/consumables.csv` · `glossary/pcr-reagents.csv`와 같음 |
| 5 | Pagination | 1 ~ 10 (1페이지 선택) | 기존 원본 기획 프레임 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 0 | Assay Pack Setting | 화면 | | - | |
| 1-1 | File name | 화면 | | - | |
| 1-1 | Enter file name | 화면 | | - | |
| 1-1 | File type | 화면 | | - | |
| 1-1 | All | 화면 · 디스크립션 | | - | |
| 1-1 | Master | 디스크립션 | | - | |
| 1-1 | Pretreatment | 디스크립션 | | - | |
| 1-1 | Extraction | 디스크립션 | | - | |
| 1-1 | PCR | 디스크립션 | | - | |
| 1-2 | Period | 화면 | | - | |
| 1-2 | Registered Date | 화면 · 디스크립션 | | - | |
| 1-2 | Created Date | 디스크립션 | | - | |
| 1-2 | Select Date Range | 화면 · 디스크립션 | | - | |
| 1-2 | Period Filters | 디스크립션 | | - | |
| 1-2 | Apply | 디스크립션 | | - | |
| 1-3 | Active only | 화면 | | - | |
| 1-4 | Reset | 화면 | | - | |
| 1-4 | Search | 화면 | | - | |
| 2 | Items | 화면 | | - | |
| 2 | 10 items | 디스크립션 (화면에서 뺌) | | - | |
| 4 | Product Name | 화면 | | - | |
| 4 | Version | 화면 | | - | |
| 4 | File type | 화면 | | - | |
| 4 | File name | 화면 | | - | |
| 4 | Registered Date/Time | 화면 | | - | |
| 4 | Created Date/Time | 화면 | | - | |
| 4 | User ID | 화면 | | - | |
| 4 | Active | 화면 | | - | |
| 4 | Details | 화면 | | - | |
| 4-1 | Active | 화면 | | - | |
| 4-1 | Inactive | 화면 | | - | |

## Alert · Confirm · Toast

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| - | 없음 | | | |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 없음 | 기존 디스크립션이 가리키는 「LI-STN-08 / 세부정의」 프레임이 기존 원본에 없음 (질문 대기 Q2) | | | | |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 점검 발견 | 번호 3이 없음 (2 다음 4) | 번호 정리 | 디스크립션 | 제외 (2026-11-24, 케이스 3 규칙과 부딪힘: 빈 번호를 그대로 둠) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 0.1.0 | 2026-10-22 | (버전 메모 없음) | 이상헌 | 기존 작업방 화면 정보 |
| | 2026-11-24 | 작업방에 새로 그림 (같은 작업 페이지 Setting  Ⓛ / Ⓣ_re의 원본 기획 프레임 `3288:238191` · Ver 0.1.0) | Claude (20261124-최고관리자-setting-2) | 케이스 3 |
