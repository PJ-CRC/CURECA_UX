---
cid: TI-STN-08
pair_cid: LI-STN-08
tl_relation: 기능 추가
title: Assay Pack Setting
path: Setting > Assay Pack Setting
type: Page
version: 0.3.0
date: 2026-10-22
author: 이상헌
client_mode: []
user_type: [Service]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-235198
figma_page: Setting  Ⓛ / Ⓣ_As Is (3288:235028)
---
# TI-STN-08 Assay Pack Setting

> 기존 화면(작업방 「Setting  Ⓛ / Ⓣ_As Is」 페이지, Ver 0.3.0)을 2026-11-26에 다시 옮긴 것입니다(처음 옮긴 날 2026-11-02, 2026-11-25에는 기존 작업방 파일에서 옮김). 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS는 Import·Delete·Active 변경. L-IOS(LI-STN-08)는 조회만
- 호출하는 화면: [TI-STN-08-P] File details ([Details] → 목록 위 패널), [TI-STN-08-01] Import file 팝업([Import], IA에 없음)
- 호출되는 곳: LNB Setting > Assay Pack Setting
- 관련 정책: POL-TST-008
- 다른 프레임(「Setting  Ⓛ / Ⓣ_As Is」): TI-STN-08-01 Import file 팝업 (3288:237146, IA에 없음), TI-STN-08 / 세부정의 (3288:240828, 아래 케이스), TI-STN-08 / Import 정의 (3288:240943, 아래 참조 섹션). 1920 프레임 TI-STN-08 다섯 개 (3288:241001 · 241162 · 241305 · 241696 · 243242)는 기획 프레임 밖이라 UI 화면일 수 있어 열지 않음. [TI-STN-08 / 팝업 정의] · [TI-STN-08 / 정책]은 이 페이지에 없음

## 기존 화면

<!-- 기존 작업방에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30 | TIOS | Assay Pack Setting
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Policy Setting | Information | Protocol Setting | LIS Setting | System Setting | Account Setting | Tube Setting | Assay Pack Setting | Keira Knightley
- File name | Enter file name | File type | All | Period | Registered Date | Select Date Range | Active only | Reset | Search
- Items | 24 | 10 items | Delete | Import
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

Table (47), Title (30), Check Box/Square (12), Reagent Product Name (11), Description Number (11), 2 Depth (7), Square (4), Active (1), Page number (1), Component 4 (1), Frame (1), Arrow/Chevron_Up (1), Form/Input Text Box (1), Dropdown Outlined (1), Period type (1), Page size (1)

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
  - [Search] → 검색 결과 노출 (결과 없음 → [TI-STN-08 / 세부정의])

#### 2. Items 개수 · 노출 개수 (COMM-5-m Web view)

- Items : 등록된 파일 전체 건수 (검색 시 검색 결과 건수)
- 노출 개수 Dropdown : 10 items(디폴트) / 30 / 50 / 100 items
- 선택 시 해당 개수로 즉시 갱신, 1페이지로 이동

#### 3. [Delete] 버튼, [Import] 버튼

- [Delete] 버튼
  - 디폴트 비활성화, 1개 이상 선택 시 활성화 (선택 건수 표기 없음)
  - 선택 시 → 삭제 확인 Confirm_026 → [Delete] 삭제 & Toast / [Cancel] 닫힘
  - 활성(Active) 파일 포함 시 Alert_042 (삭제하지 않음)
  - [TI-STN-08 / 팝업 정의] 3 · [TI-STN-08 / Import 정의] 5
- [Import] 버튼
  - 선택 시 → [TI-STN-08-01] Import file 팝업 (json 여러 개, 개수 · 용량 제한 없음)
  - [Import] → 파일별 양식 확인
  - json 외 Alert_041 / 양식 불일치 Alert_040 (전체 등록 안 됨)
  - 같은 File type · Product Name · 버전이 있으면 Confirm_028 (덮어쓰기 여부)
  - 이상 없으면 → 등록 & 최신 버전 자동 활성 → Alert_039 (Import complete)
  - 정책 → [TI-STN-08 / 정책]

#### 4. 목록 (파일 목록 · COMM-5-m)

- 등록 일시 최신순, 10개 초과 시 Pagination
- 컬럼 : Product Name | Version | File type | File name | Registered Date/Time | Created Date/Time | User ID | Active | Details
- 일시 : YYYY-MM-DD hh:mm:ss
- File name : 확장자 제외
- 정렬 : [텍스트 정렬 범례] 기준, Version · 일시 · Active · 체크박스 · Details 가운데 / 나머지 왼쪽
- 체크박스 : 개별 · 헤더 = 현재 페이지 전체 선택, 일부 선택 시 Mix (COMM-5-l)
- 4-1 Active (표시 전용)
  - 토글 없음 : 활성 파일은 Active 태그(검정), 비활성은 Inactive 태그(회색)
  - File type · Product Name이 같은 파일 중 1개만 활성 (동시에 2개 활성 불가)
  - 변경은 상세 [TI-STN-08-P] File details에서 [Active] · [Inactive]로 바꾼 뒤 [Save]
  - [TI-STN-08 / 팝업 정의] 5 · 6
  - Master : 최신 버전 강제 활성, 상세에 변경 버튼 미노출 (변경 불가 안내)
- 4-2 [Details] 버튼
  - 선택 시 → [TI-STN-08-P] File details 패널이 목록 위에 겹쳐 노출

#### 5. Pagination

- 공통 UX > COMM-5-i 정의 참고 (10개 단위)

### 케이스

<!-- 「Setting  Ⓛ / Ⓣ_As Is」 페이지의 세부정의 프레임을 옮김. Case 번호는 원본 번호(1-1 · 1-2) 그대로 -->

기획 프레임 안 케이스 없음. 세부정의 프레임 [TI-STN-08 / 세부정의] ([3288:240828](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-240828))에 두 모양:

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1-1 | 등록된 파일 없음 정의 | 등록된 파일이 없을 경우, 안내 문구 노출 | [3288:240828](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-240828) |
| 1-2 | 검색 결과 없음 정의 | 검색 조건과 일치하는 파일이 없을 경우, 검색 결과 없음 문구 노출 | [3288:240828](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-240828) |

#### 케이스 화면 글자 (원문)

- 1-1: File name | Enter file name | File type | All | Period | Registered Date | Select Date Range | Active only | Reset | Search / Items | 0 | 10 items | Delete | Import / Product Name | Version | File type | File name | Registered Date/Time | Created Date/Time | User ID | Active | Details / No files found. ⏎ Click Import to add a file.
- 1-2: (검색 영역 · Items 0 · 목록 머리 1-1과 같음) / No results found. / 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

### 참조 섹션 (원문)

#### `TI-STN-08 / Import 정의` ([3288:240943](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-240943))

- 1. 파일 Import 화면 (TI-STN-08-01)
  - 목록 [Import] 선택 시 노출 → 파일 여러 개 선택 · 끌어놓기 (개수 · 용량 제한 없음, json만) → [Import] 선택 시 파일별 양식 검증 → 같은 버전이 있으면 Confirm_028 → 등록 & 최신 버전 자동 활성 → Alert_039
  - ① 파일 선택 전 · [Import] 비활성: Import file | ✕ | ↑ | Drag and drop files here, or | Select files | json · Multiple files | Cancel | Import
  - ② 파일 선택 후 · [Import] 활성 (여러 파일, 파일별 [✕]로 빼기, 다시 선택하면 목록에 추가): Import file | ✕ | ↑ | Drag and drop files here, or | Select files | json · Multiple files | ▤ ap_master_v4.json 0.8 MB ✕ | ▤ ap_pretreat_v5.json 0.3 MB ✕ | ▤ ap_pcr_gi-b1_v6.json 2.4 MB ✕ | Cancel | Import
- 디스크립션 3이 가리키는 「[TI-STN-08 / Import 정의] 5」 · TI-STN-08-P #4의 「7」 번호는 이 프레임에 없음(1번만 있음)

#### `TI-STN-08 / 팝업 정의` · `TI-STN-08 / 정책`

- 디스크립션 3 · 4-1이 가리키지만 「Setting  Ⓛ / Ⓣ_As Is」 페이지에 없음 (asis 추출 빠짐)
