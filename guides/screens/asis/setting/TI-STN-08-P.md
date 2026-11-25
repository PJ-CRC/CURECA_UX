---
cid: TI-STN-08-P
pair_cid: LI-STN-08-P
tl_relation: 기능 추가
title: Assay Pack Setting
path: Setting > Assay Pack Setting > File details
type: Popup
version: 0.4.0
date: 2026-10-22
author: 이상헌
client_mode: []
user_type: [Service]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-175713
figma_region: 2.1 2차
---
# TI-STN-08-P Assay Pack File Details

> 기존 화면(기존 작업방 Setting 페이지, 2.1 2차 영역, Ver 0.4.0)을 2026-11-25에 다시 옮긴 것입니다(처음 옮긴 날 2026-11-02). 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS만 Active·Inactive 변경과 [Save], [Delete]
- 호출하는 화면: 없음 (패널 안의 [Delete] · [Save]는 Confirm · Alert만 엶)
- 호출되는 곳: [TI-STN-08] 목록 [Details]
- 관련 정책: POL-TST-008
- 다른 프레임(기존 작업방): TI-STN-08-P 유형별 정의 (7669:177702), 같은 이름 TI-STN-08-P 프레임 (7669:176224, 유형별 정의 아래)

## 기존 화면

<!-- 기존 작업방에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30:00 | TIOS | Assay Pack Setting
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Policy Setting | Information | Protocol Setting | LIS Setting | System Setting | Account Setting | Tube Setting | Assay Pack Setting | Keira Knightley
- 목록(TI-STN-08과 같음): File name | Enter file name | File type | All | Period | Registered Date | Select Date Range | Active only | Reset | Search / Items | 24 | 10 items | Delete | Import / 목록 헤더 · 목록 10줄 · Pagination 1 ~ 10
- 패널 File details (목록 위에 겹침)
  - File Info: File name | ap_pcr_gi-b1_v5 | File type | PCR | File Version | v5 | File Created Date/Time | 2026-10-06 15:32:09 | Active | Active · Inactive
  - Import Info: Registered Date/Time | 2026-10-07 12:13:44 | User ID | service
  - Reagent Basic Info: Product Name | Allplex™ GI-Bacteria(I) Assay | Product Code | Allplex_GI-B1_Assay | Test Item Name | GI-B1 | Test Item Code | GI-B1
  - Test Group ID | TEST_GROUP_2 | Test Group Code | GI | Test Target Selectable | Y
  - Test Target Names (7): Sh/EI | Cam | Yer | Vib | CdB | Aer | Sal
  - Sample Type Mapping Info (4): Sample Type ID | Sample Type Code / SAMPLE_TYPE_6 | Raw_stool / SAMPLE_TYPE_7 | Cary-blair / SAMPLE_TYPE_8 | eNAT_stool / SAMPLE_TYPE_9 | Fecal_swab
  - 아래 버튼: Delete | Save

### 사용 컴포넌트

Table (47), Title (30), Check Box/Square (12), Reagent Product Name (11), 2 Depth (7), Description Number (5), Square (4), Page number (1), Active (1), Component 4 (1), Frame (1), Arrow/Chevron_Up (1), Form/Input Text Box (1), Dropdown Outlined (1), Period type (1), Page size (1), Interface/Close (1), Button/Primary_1Button_62 (1), Button/Save (1)

### 디스크립션 (원문)

#### 화면 노출 경로

- [TI-STN-08] 목록에서 Details(›) 선택 시, [TI-STN-08-P] File details 패널이 목록 위에 겹쳐 노출 (화면 2분할 아님)
- 노출 위치 : 목록 우측, 목록 영역 높이에 맞춤
- [Delete] · [Import] · Pagination은 패널 왼쪽(보이는 목록 영역)으로 이동해 가려지지 않음
- 패널을 닫으면 원래 위치로 복귀

#### 1. 목록 버튼 영역

- [Delete] / [Import] : [TI-STN-08] 정의와 동일
- 패널이 열리면 패널 왼쪽으로 이동, 바로 사용 가능
- 열린 파일 삭제는 패널의 [Delete](4) 사용 가능

#### 2. 선택 Row

- Details 선택한 Row 활성화
- (2-1) 다른 Row의 Details 선택 시 → 패널 내용 변경
- 이전 선택 Row 활성화 해제

#### 3. File details

- File Info : File name(확장자 제외), File type, File Version, File Created Date/Time(YYYY-MM-DD hh:mm:ss), Active
- Active(Active · Inactive 태그)
  - Master : 최신 버전 강제 활성(Active 고정), [Active] · [Inactive] 버튼 비활성(변경 불가)
  - Pretreatment · Extraction · PCR : 최신 버전 등록 시 최신 버전 자동 활성, [Active] · [Inactive]로 변경 가능
  - 같은 시약(File type · Product Name 동일)은 1개만 활성 → 다른 버전을 Active로 바꾸면 기존 활성 버전은 Inactive로 전환
  - 변경 → 하단 [Save] → Active : Confirm_029 / Inactive : Confirm_030
- Import Info : Registered Date/Time(YYYY-MM-DD hh:mm:ss), User ID(service)
- 시약 정보 : 파일 종류별 JSON 순서대로 표시 (파일당 시약 1개)
  - 항목 → [TI-STN-08-P 유형별 정의]
  - ID 값(Test Group · Sample Type · Barcode Schema · Item Group · Component ID)은 JSON 그대로 함께 표시
  - Master : Test Group · Sample Type · Barcode Schema · Item Group · PCR Reagent Socket Component Info
  - 구성품(Extraction · PCR) : 구성품 탭 전환
  - Barcode Info : Segments 개수 없이 「Segment Info」 라벨 아래 Segment 표시
    - 파일에 들어온 개수만큼 Segment 순서대로 표시 (개수 제한 없음), Segment 이름이 있으면 함께 표시
  - Quantity Info : Quantity · Base Unit · Packaging Unit 각각 표시 (Display 없음)
- 내용이 길면 패널 안에서 스크롤
- 3-1 [닫기] 버튼
  - 선택 시 → 패널 닫힘 → [TI-STN-08] 목록, Row 활성화 해제

#### 4. [Delete] 버튼, [Save] 버튼

- [Delete] 버튼
  - 적용 중(Active) 파일 → 삭제 불가 알림 (Alert_042) · [TI-STN-08 / Import 정의] 7, 패널 유지
  - 그 외 → 이 파일 삭제 확인 팝업 (Confirm_026, Delete the selected file?) · [TI-STN-08 / 팝업 정의] 3-①
  - [Delete] → 패널 닫힘 & Toast 노출 (The file has been deleted.) · [TI-STN-08 / 팝업 정의] 3-②
  - [Cancel] → 팝업 닫힘, 패널 유지
  - 삭제한 파일은 적용 중이 아니므로 장비 반영 데이터에 영향 없음 · [TI-STN-08 / 정책] 4
- [Save] 버튼 (우측)
  - 디폴트 : 비활성, Active · Inactive를 바꾸면 활성 (T-IOS만, L-IOS 미노출)
  - 선택 시 → Active로 바꿨으면 Confirm_029, Inactive로 바꿨으면 Confirm_030 → 확인 시 반영

### 케이스

<!-- 기존 작업방의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

기획 프레임 안에 케이스 프레임 없음 (2026-11-25 다시 옮길 때 확인)

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
