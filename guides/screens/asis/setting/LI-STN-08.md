---
cid: LI-STN-08
pair_cid: TI-STN-08
tl_relation: 기능 추가
title: Assay Pack Setting
path: Setting > Assay Pack Setting (L-IOS · 조회 전용)
type: Page
version: 0.1.0
date: 2026-10-22
author: 이상헌
client_mode: [Main Mode]
user_type: [Service]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238191
figma_page: Setting  Ⓛ / Ⓣ_As Is (3288:235028)
---
# LI-STN-08 Assay Pack Setting

> 기존 화면(작업방 「Setting  Ⓛ / Ⓣ_As Is」 페이지, Ver 0.1.0)을 2026-11-26에 다시 옮긴 것입니다(처음 옮긴 날 2026-11-02, 2026-11-25에는 기존 작업방 파일에서 옮김). 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 조회 전용. [Import] · [Delete] · 체크박스 없음 (T-IOS TI-STN-08에서 관리)
- 호출하는 화면: [LI-STN-08-P] File details ([Details] → 목록 위 패널)
- 호출되는 곳: LNB Setting > Assay Pack Setting
- 관련 정책: POL-TST-008

## 기존 화면

<!-- 기존 작업방에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30 | LIOS | Assay Pack Setting
- (LNB) Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Setting | Policy Setting | Information | Protocol Setting | LIS Setting | System Setting | Account Setting | Tube Setting | Assay Pack Setting | Quick Start | Run | Keira Knightley | Shut Down
- File name | Enter file name | File type | All | Period | Registered Date | Select Date Range | Active only | Reset | Search
- Items | 24 | 10 items
- Product Name | Version | File type | File name | Registered Date/Time | Created Date/Time | User ID | Active | Details
- Master Info | v3 | Master | ap_master_v3 | 2026-10-22 09:12:45 | 2026-10-21 17:40:12 | service | Active
- PBS Standard Tube | v4 | Pretreatment | ap_pretreat_v4 | 2026-10-21 14:20:31 | 2026-10-20 18:02:15 | service | Active
- STARMag Universal Cartridge Kit | v3 | Extraction | ap_extraction_v3 | 2026-10-14 09:12:08 | 2026-10-13 17:40:52 | service | Active
- Allplex™ GI-Bacteria(I) Assay | v5 | PCR | ap_pcr_gi-b1_v5 | 2026-10-07 12:13:44 | 2026-10-06 15:32:09 | service | Active
- Allplex™ GI-Bacteria(I) Assay | v4 | PCR | ap_pcr_gi-b1_v4 | 2026-09-30 11:10:27 | 2026-09-29 13:58:03 | service | Inactive
- PBS Standard Tube | v3 | Pretreatment | ap_pretreat_v3 | 2026-09-23 10:07:55 | 2026-09-22 11:35:40 | service | Inactive
- Master Info | v2 | Master | ap_master_v2 | 2026-09-18 16:05:12 | 2026-09-18 10:20:33 | service | Inactive
- STARMag Universal Cartridge Kit | v2 | Extraction | ap_extraction_v2 | 2026-09-16 09:04:19 | 2026-09-15 10:01:46 | service | Inactive
- Allplex™ GI-Bacteria(I) Assay | v3 | PCR | ap_pcr_gi-b1_v3 | 2026-09-09 08:00:37 | 2026-09-08 07:37:21 | service | Inactive
- PBS Standard Tube | v2 | Pretreatment | ap_pretreat_v2 | 2026-09-02 06:57:14 | 2026-09-01 05:13:58 | service | Inactive
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

### 사용 컴포넌트

Table (47), Title (30), Reagent Product Name (11), Description Number (10), 2 Depth (7), Square (2), Active (1), Page number (1), Component 4 (1), Frame (1), Arrow/Chevron_Up (1), Form/Input Text Box (1), Dropdown Outlined (1), Period type (1), Check Box/Square (1), Page size (1)

### 디스크립션 (원문)

#### 1. 검색 영역 (COMM-5-s)

- 1-1 입력 검색
  - 모든 조건 AND 결합
  - File name : 부분 일치(Like) 검색
  - File type : All(디폴트) / Master / Pretreatment / Extraction / PCR
- 1-2 기간 검색
  - 기간 유형 : Registered Date(디폴트) / Created Date 중 1개
  - 기간 필드 : COMM-5-d Calendar (Period) 적용
  - 「Select Date Range」 선택 → Period Filters 팝업 → [Apply] 후 「YYYY-MM-DD ~ YYYY-MM-DD」
  - 최소 7일 ~ 최대 1년, 탭 · 입력 · 오류 · [Apply] 규칙 → COMM-5-d(1~4/5)
- 1-3 Active only
  - 체크 시 현재 활성(Active) 파일만 표시 (디폴트 해제)
- 1-4 기능 버튼
  - [Reset] → 검색 조건 초기화 & 전체 목록 노출
  - [Search] → 검색 결과 노출 (결과 없음 → [LI-STN-08 / 세부정의])

#### 2. Items 개수 · 노출 개수 (COMM-5-m Web view)

- Items : 등록된 파일 전체 건수 (검색 시 검색 결과 건수)
- 노출 개수 Dropdown : 10 items(디폴트) / 30 / 50 / 100 items
- 선택 시 해당 개수로 즉시 갱신, 1페이지로 이동
- L-IOS는 조회 전용 : [Import] · [Delete] 버튼 없음 (T-IOS [TI-STN-08]에서 관리)

#### 4. 목록 (파일 목록 · COMM-5-m)

- 등록 일시 최신순, 10개 초과 시 Pagination
- 컬럼 : Product Name | Version | File type | File name | Registered Date/Time | Created Date/Time | User ID | Active | Details
- 일시 : YYYY-MM-DD hh:mm:ss
- File name : 확장자 제외
- User ID : service로 표기
- Master : Product Name 「Master Info」
- 체크박스 없음 (선택 · 삭제 기능 없음)
- 정렬 : [텍스트 정렬 범례] 기준, Version · 일시 · Active · Details 가운데 / 나머지 왼쪽
- 4-1 Active (조회 전용)
  - 활성 파일은 Active 태그(검정), 비활성은 Inactive 태그(회색), 변경 불가 (상세에서도 보기만)
  - 같은 File type · Product Name 중 1개만 Active, Master는 최신 버전 Active
- 4-2 [Details] 버튼
  - 선택 시 → [LI-STN-08-P] File details 패널이 목록 위에 겹쳐 노출

#### 5. Pagination

- 공통 UX > COMM-5-i 정의 참고 (10개 단위)

### 케이스

기획 프레임 안 케이스 없음. 디스크립션 1-4가 가리키는 [LI-STN-08 / 세부정의]는 「Setting  Ⓛ / Ⓣ_As Is」 페이지에 없음 (asis 추출 빠짐, T-IOS [TI-STN-08 / 세부정의] 3288:240828은 있음)

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
