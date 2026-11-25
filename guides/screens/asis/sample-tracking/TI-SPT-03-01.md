---
cid: TI-SPT-03-01
pair_cid: LI-SPT-03-01
tl_relation: 동일
title: PCR Plate Details
path: Sample Tracking > PCR Plate
type: Popup
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-268560
---
# TI-SPT-03-01 PCR Plate Details

> 기존 화면(작업방 `PCR Plate_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 디스크립션은 화면 코드만 다름(T `TI-…`, L `LI-…`). 화면 글자는 GNB · LNB와 Plate Info 라벨이 다름(T `Total Products` · `STAT Products`, L `Product Total` · `Product STAT`)
- 호출하는 화면: [Samples] 메뉴의 해당 검체 (3 리스트 클릭)
- 호출되는 곳: [TI-SPT-03] PCR Plate 리스트 행 클릭 (2), [TI-SPT-01-01] 6-1 [More]
- 관련 정책: (정책 작성 전)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Samples | 96-DWP | PCR Plate | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- 왼쪽(축소된 PCR Plate 목록): PCR Plate | 검색 영역(TI-SPT-03과 같음) | Items 486 | Export | 목록 10행(TI-SPT-03과 같음) | 1 ~ 10
- 오른쪽 상세: Plate Details
  - 탭 Plate Info | Progress — ID PL0005001 | Total Products 96 | STAT Products 13
  - 범례 Negative | Positive | Reset
  - Plate(96 Well): 열 1 ~ 12 | 행 A ~ H
  - 검사 항목 범례: RP1 | RP2 | RP3 | PB
  - Well No. | Sample ID | Product | Sample Type | Kit | STAT
    - A01 | AA0005001 | RP1 | Aspirate | Allplex™ Respiratory Panel 1
    - G05 | Negative control | RP2 | - | Allplex™ Respiratory Panel 2
    - H05 | Positive control | RP2 | - | Allplex™ Respiratory Panel 2

### 사용 컴포넌트

⛔️ Item/Well (96), Plate_Item (20), Table (15), Title (12), Description Number (11), Arrow/Chevron_Right (11), Frame 43 (10), Frame 1984080529 (10), Table/Filled Table  Cell (10), Frame 1984080522 (10), Frame 1984080523 (10), Square (4), Frame 54 (3), Tag Status (3), Frame 55 (3), Frame 50 (3), Frame/Instrument_Status (3), Dropdown Outlined (3), ⛔️ Item_Segment Tabs (2), Interface/Close (1), Layout/Grid_2x2_01_Outlined (1), Component 4 (1), Form/Input Text Box (1), Interface/Info_Circle_Outlined (1), Page number (1), Contents/Scroll Bar (1), Frame (1)

### 디스크립션 (원문)

#### 0. PCR Plate 상세 화면

- 정의
- Plate의 기본 정보 및 검사 단계 정보
- PCR Plate에 분주된 검체별 검사 단위 정보

#### 1. Plate 기본 정보 영역(Tab)

- 정의
- 검사 정보 항목에 따른 탭(Tab) 메뉴 구성
- 표출 예시 : TI-SPT-02-01/Case → Case 1
- 동작
- 활성 탭 변경 시, 해당 단계의 하위 데이터 세트를 동기화하여 노출
- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- Tab 표출 항목
- Plate Info
- Progress

#### 1-1. Plate Info : Plate 기본 정보 영역

- 정의
- ID, 분주된 검사 항목 수 정보
- 표출 항목
- ID : Plate 고유 ID (바코드 정보)
- Total Products : PCR Plate에 분주된 Product 개수
- STAT Products : PCR Plate에 분주된 Product 중 STAT 개수

#### 1-2. Progress : 검사 단계 영역

- 정의
- PCR Plate의 검사 단계별 검사 수행 장비명
- PCR Plate의 검사 단계별 검사 시작 시간, 완료 시간
- 표출 항목
- Module : 검사 단계별 검사 수행 Module명
- Start Date/Time : PCR Plate를 해당 단계 장치에 놓는 시점
- End Date/Time : PCR Plate가 해당 단계 작업이 끝난 후 장치에서 가져나가는 시점

#### 2. Plate 선택 영역

- 정의
- 장비 내 로딩된 PCR Plate의 Well 위치별 검체 배치 현황 정보
- 표출 케이스 : TI-SPT-03-01/Case → Case 2
- 동작
- 특정 검체 선택 시, 하단 리스트 내 검체 정보 노출
- 개별 Well 선택 시 Selected 상태로 변경
- Selected 상태에서 한번 더 선택시 Unselected 상태로 변경
- 최대 멀티 선택 가능한 검체 수 : 96개
- 행/열 단위 헤더는 단순 정보 영역으로 클릭 불가
- Default : 모든 검체가 Unselected 상태

#### 2-1. 대조군 범례 정보 영역

- 표출 항목
- Positive(Positive Control) : 양성 대조군
- Negative(Negative Control) : 음성 대조군

#### 2-2. 검사 항목 범례 정보 영역

- 정의
- 상위 PCR Plate에 검사한 항목에 대한 범례 정보
- 검사 항목
- RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P Allplex HPV28, STI-12

#### 2-3. [Select All] 버튼

- 동작
- 클릭 시 모든 검체를 일괄 Selected 상태로 변경
- 한번 더, 클릭 시 모든 검체를 일괄 Unselected 상태로 변경

#### 2-4. [Reset] 버튼

- 동작
- 현재 선택된 모든 검체를 비선택Unselected 상태로 일괄 변경

#### 3. Plate 내 Samples 리스트

- 정의
- Plate에서 Selected 상태인 Sample 정보 리스트
- Selected 상태인 Sample가 없을 경우 하위 문구 노출
- Please select a sample from the Plate.
- 표출 케이스 : TI-SPT-03-01/Case → Case 2
- 동작
- 말줄임 처리된 항목 : COMM-5-o
- 하나의 리스트 클릭 시 [Samples] 메뉴 내 해당 검체 정보로 이동
- 단, [Samples] 메뉴는 검사 단위로 표출되고 있어,
  - 해당 검체의 모든 검사 항목이 소팅된 상태로 노출
- 검사 항목 중 첫번째 항목의 상세가 펼쳐진 상태로 노출
- 정렬
- Well No. 기준으로 오름차순

#### 3-1. 리스트 표출 항목

- Well No.
- Plate에서 Selected 상태인 Sample 위치(좌표) 정보
- Sample ID
- 상위 Plate에서 Selected 상태인 Sample ID 정보
- 단, 대조군 선택 시 표출 정보 : TI-SPT-02-01/Case → Case 3
- Product
- 상위 Sample의 단일 단위 검사 항목 정보
- Sample Type
- 상위 Sample의 유형 정보
- Kit
- Well에 사용된 시약 명 정보
- STAT
- 선택된 검체의 응급 여/부 상태 정보

#### 4. [X] 버튼

- 클릭 시, 상세 정보 닫힘 (리스트 노출)

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Plate 기본 정보 영역(Tab) 노출 데이터 항목 | Plate Info · Progress 탭 | [TI-SPT-03-01/Case](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-267537) |
| 2 | Plate / List 표출 상태 및 유형 | 노란 띠 「Well 표출 상태」 · 「Default 상태」 · 「Multi-Selection 상태」 · 「전체 선택 상태」 | 같은 프레임 |
| 3 | C(대조군) Well 선택 시 표출 데이터 | 대조군 Well 선택 | 같은 프레임 |

- Case 1 케이스 패널 (원문)
  - 1. Plate Info : Plate 기본 정보 영역 / 정의 / - ID, 분주된 샘플 수 정보 / 표출 항목 / - ID : Plate 고유 ID (바코드 정보) / - Sample Total :  PCR Plate에 분주된 Product 개수 / - Sample STAT :  PCR Plate에 분주된 Product 중 STAT 개수
  - 2. Progress : 검사 단계 영역 / 정의 / - PCR Plate의 검사 단계별 검사 수행 장비명 / - PCR Plate의 검사 단계별 검사 시작 시간, 완료 시간 / 표출 항목 / - Module : 검사 단계별 검사 수행 Module명 / - Start Date/Time : PCR Plate를 해당 단계 장치에 놓는 시점 / - End Date/Time : PCR Plate가 해당 단계 작업이 끝난 후 장치에서 가져나가는 시점
- Case 1 케이스 화면 글자
  - Plate Info: ID PL0005001 | Total Products 96 | STAT Products 13
  - Progress: PCR Setup(1) 11:10:20 ~ 12:10:30 | Plate Sealing(3) 12:10:30 ~ 13:10:30 | Universal PCR(2) Unit CFX96-3 13:10:30 ~ 15:10:20 (모두 2026-03-05)
- Case 2 (원문)
  - Well 표출 상태 표: Status | 선택 상태 | 검체 분주 여부 | 비고 — Unselected O / selected O / Disabled X 검사에 사용되지 않는 웰
  - Default 상태 (모든 검체 Unselected) / Default 상태 (Sample 선택 안내 문구 노출): 목록 머리 `Well No. | Sample ID | Product | Reagents | Barcode | Expiration Date | STAT`, `Please select a sample from the Plate.`
  - Multi-Selection 상태: C10 AA0005008 PB Saliva Allplex™ PneumoBacter Assay / C11 AA0005008 PB Saliva Allplex™ PneumoBacter Assay / D05 AA0005583 PB Aspirate Allplex™ PneumoBacter Assay / D08 AA0005830 RP2 Sputum Allplex™ Respiratory Panel 2 / D10 AA0005845 RP3 Sputum Allplex™ Respiratory Panel 3 / F05 AA0005830 RP2 Aspirate Allplex™ Respiratory Panel 2 / H02 AA0001739 RP1 Sputum Allplex™ Respiratory Panel 1 / H05 Negative control RP2 - Allplex™ Respiratory Panel 2
  - 전체 선택 상태 / 전체 선택 상태 (전체 Sample 정보 노출 / 스크롤): A01 AA0005335 PB Saliva Allplex™ PneumoBacter Assay / A02 AA0005524 PB Saliva Allplex™ PneumoBacter Assay / A03 AA0005694 PB Aspirate Allplex™ PneumoBacter Assay / A04 AA0005254 RP2 Sputum Allplex™ Respiratory Panel 2 / A05 AA0006572 RP3 Sputum Allplex™ Respiratory Panel 3 / A06 AA0005352 RP2 Aspirate Allplex™ Respiratory Panel 2 / A07 AA0001145 RP1 Sputum Allplex™ Respiratory Panel 1 / A08 AA0001723 RP2 Aspirate Allplex™ Respiratory Panel 2
  - 각 상태 Plate 위: Negative | Positive | Reset, 아래: RP1 | RP2 | RP3 | PB
  - 케이스 패널: 화면 정보만 있고 디스크립션 없음(번호 칸 `0`)
- Case 3 (원문)
  - 케이스 패널: 1. Sample ID 컬럼 / 각 C(대조군)의 풀명칭 노출 — 2. 응급 여부 정보 미노출 / 각 C(대조군)은 응급 여부가 없음으로 미노출 — 3. 상세 페이지 이동 버튼 미노출 / 각 C(대조군)은 상세페이지가 없음으로 해당 버튼 미노출
  - 케이스 화면 글자: A01 AA0005001 RP1 Aspirate Allplex™ Respiratory Panel 1 / G05 Negative control RP2 - Allplex™ Respiratory Panel 2 / H05 Positive control RP2 - Allplex™ Respiratory Panel 2
