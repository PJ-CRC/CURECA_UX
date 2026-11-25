---
cid: LI-STN-08
pair_cid: TI-STN-08
tl_relation: 기능 추가
title: Assay Pack Setting
path: Setting > Assay Pack Setting (L-IOS · 조회 전용)
type: Page
version: 0.1.0
date: 2026.10.22
author: 이상헌
client_mode: [Main Mode]
user_type: [Service]
policies: [POL-TST-008, POL-ACC-001]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3492-25
---
# LI-STN-08 Assay Pack Setting

- T/L 차이: 조회 전용. [Import] · [Delete] · Checkbox 없음 (T-IOS TI-STN-08에서 관리)
- 호출하는 화면: [LI-STN-08-P] Assay Pack File Details ([Details] → 목록 위 패널)
- 호출되는 곳: LNB Setting > Assay Pack Setting
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Assay Pack Setting 화면**
- 정의
  - 등록된 Assay Pack 파일(Master · Pretreatment · Extraction · PCR) 목록을 조회하는 화면
  - 조회 전용 : 파일 등록 · 삭제 · Active 변경 없음
- User Type : Service
- L-IOS Client Mode : Main Mode

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
- [Import] · [Delete] 버튼 없음
- 공통 UX 참고 : COMM-5-g

**4  목록**
- 정의 : 등록된 Assay Pack 파일 목록
- 정렬
  - Default : 등록 일시 최신순, 10개 초과 시 Pagination
- 컬럼 항목
  - Product Name | Version | File type | File name | Registered Date/Time | Created Date/Time | User ID | Active | Details
  - 일시 : YYYY-MM-DD hh:mm:ss
  - File name : 확장자 제외
  - User ID : service로 표기
  - Master : Product Name 「Master Info」
- Checkbox 없음 (선택 · 삭제 기능 없음)
- 텍스트 정렬 : Version · 일시 · Active · Details 가운데 / 나머지 왼쪽
- 데이터가 없을 때
  - 등록된 파일 없음 : No files found. Click Import to add a file.
  - 검색 결과 없음 : No results found.
- 공통 UX 참고 : COMM-5-g

**4-1  Active (조회 전용)**
- 활성 파일은 Active 태그(검정), 비활성은 Inactive 태그(회색), 변경 불가 (상세에서도 보기만)
- 같은 File type · Product Name 중 1개만 Active, Master는 최신 버전 Active
- 공통 UX 참고 : COMM-5-j
- 정책 참고 : POL-TST-008

**4-2  [Details] 버튼**
- 선택 시 → LI-STN-08-P Assay Pack File Details 패널이 목록 위에 겹쳐 노출

**5  Pagination**
- Type 1 Number (10개 단위)
- 공통 UX 참고 : COMM-5-l

## 케이스

없음 (기존 원본에 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |

(없음)

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 화면 제목 | Assay Pack Setting | 기존 원본 LI-STN-08 (As Is 3288:238191) |
| 1-1 · 1-2 · 1-3 | 검색 조건 | File name · Enter file name · File type · All · Period · Registered Date · Select Date Range · Active only | 기존 원본 그대로 |
| 2 | Items · 노출 개수 | Items 24 · 10 items | 기존 원본 그대로 |
| 4 | 목록 | 기존 원본 10행 그대로 | 기존 원본 LI-STN-08 목록 (As Is 3288:238191) |
| 5 | Pagination | 1 ~ 10 | 기존 원본 그대로 |

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
| Product Name | 화면 4 | |
| Version | 화면 4 | |
| Registered Date/Time | 화면 4 | |
| Created Date/Time | 화면 4 | |
| User ID | 화면 4 | |
| Active | 화면 4-1 | |
| Inactive | 화면 4-1 | |
| Details | 화면 4 | |
| Master Info | 화면 4 | |
| No files found. Click Import to add a file. | 디스크립션 4 | |
| No results found. | 디스크립션 4 | |
