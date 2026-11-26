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
basis: 2026-11-26 09:27 · history 4079e90d
basis_versions: rules @2026-11-26 · policy @2026-11-25 · glossary @2026-11-25 · screens @2026-11-26 · common_ux @2026-11-25
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3667-11468
---
# LI-STN-08 Assay Pack Setting

- T/L 차이: L-IOS는 조회만 함([Import] · [Delete] · 체크박스 없음). T-IOS(TI-STN-08)는 파일을 지우고 등록함
- 호출하는 화면: [LI-STN-08-P] Assay Pack File Details ([Details] → 목록 위 패널)
- 호출되는 곳: LNB Setting > Assay Pack Setting
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Assay Pack Setting 화면**
- 정의
  - 등록된 Assay Pack 파일(Master · Pretreatment · Extraction · PCR)을 조회하는 화면
  - 파일 단위로 리스트 노출
- 동작
  - Row의 [Details] 선택 시 목록 위에 File Details 패널 노출 : LI-STN-08-P
- User Type : Service
- L-IOS Client Mode : Main Mode
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

**2  Items 개수**
- Items : 등록된 파일 전체 건수 (검색 시 검색 결과 건수)
- 노출 개수 : 10 items 고정
- 공통 UX 참고 : COMM-5-g

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
  - User ID : 등록한 사용자 ID (service로 표기)
  - Active : 활성 여부
  - Details : [Details] 버튼
- 텍스트 정렬 : Version · 일시 · Active · Details 가운데 / 나머지 왼쪽
- 체크박스 없음 (선택 · 삭제 기능 없음)
- 10개 초과 시 Pagination
- 등록된 파일이 없을 경우 안내 문구 노출
- 공통 UX 참고 : COMM-5-g

**4-1  Active (조회 전용)**
- 정의
  - 활성 파일은 Active 태그(검정), 비활성 파일은 Inactive 태그(회색)
  - 변경 불가 (상세에서도 보기만)
- 동작
  - File type · Product Name이 같은 파일 중 1개만 Active
  - Master는 최신 버전 Active
- 정책 참고 : POL-TST-008

**4-2  [Details] 버튼**
- 동작
  - 선택 시 File Details 패널이 목록 위에 겹쳐 노출 : LI-STN-08-P

**5  Pagination**
- Pagination 유형 : Type 1 Number (10개 단위)
- 공통 UX 참고 : COMM-5-l

## 케이스

없음

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 화면 제목 | Assay Pack Setting | 기존 원본 (As Is LI-STN-08 3288:238191) |
| 1-1 | File name · File type | Enter file name / All | 기존 원본 |
| 1-2 | Period | Registered Date / Select Date Range | 기존 원본 |
| 2 | Items | 24 | 기존 원본 |
| 4 | 리스트 | 기존 원본 10행 그대로 | 기존 원본 (As Is LI-STN-08 리스트) |
| 5 | Pagination | 1 ~ 10 | 기존 원본 |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Assay Pack Setting | 화면 제목 | |
| File name | 화면 1-1 · 화면 4 | |
| Enter file name | 화면 1-1 | |
| File type | 화면 1-1 · 화면 4 | |
| All | 화면 1-1 · 디스크립션 1-1 | |
| Master | 디스크립션 1-1 · 화면 4 | |
| Pretreatment | 디스크립션 1-1 · 화면 4 | |
| Extraction | 디스크립션 1-1 · 화면 4 | |
| PCR | 디스크립션 1-1 · 화면 4 | |
| Period | 화면 1-2 | |
| Registered Date | 화면 1-2 · 디스크립션 1-2 | |
| Created Date | 디스크립션 1-2 | |
| Select Date Range | 화면 1-2 | |
| Active only | 화면 1-3 | |
| Reset | 화면 1-4 | |
| Search | 화면 1-4 | |
| Items | 화면 2 | |
| {n} items | 디스크립션 2 (n = 10) | |
| Product Name | 화면 4 | |
| Version | 화면 4 | |
| Registered Date/Time | 화면 4 | |
| Created Date/Time | 화면 4 | |
| User ID | 화면 4 | |
| Active | 화면 4 · 화면 4-1 | |
| Inactive | 화면 4-1 | |
| Details | 화면 4 · 화면 4-2 | |
| Master Info | 화면 4 | |
