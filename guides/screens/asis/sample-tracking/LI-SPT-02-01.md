---
cid: LI-SPT-02-01
pair_cid: TI-SPT-02-01
tl_relation: 동일
title: 96-DWP Details
path: Sample Tracking > 96-DWP
type: Popup
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-193596
---
# LI-SPT-02-01 96-DWP Details

> 기존 화면(작업방 `96-DWP_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 디스크립션은 1-1에 T(TI-SPT-02-01)만 바코드 2개 표출 설명 2줄이 더 있음. 케이스 Case 1-1(시약 N개) 패널 설명 · 예시 시약 이름이 다름. 화면 글자는 GNB · LNB만 다름
- 호출하는 화면: [Samples] 메뉴의 해당 검체 (3 리스트 클릭)
- 호출되는 곳: [LI-SPT-02] 96-DWP 리스트 행 클릭 (2), [LI-SPT-01-01] 5-1 [More]
- 관련 정책: (정책 작성 전)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) LIOS | Network Status | Instrument | T-IOS | D.A PC | Running | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30
- (LNB) 96-DWP | Dashboard | Material Setup | Test Management | Sample Tracking | Samples | 96-DWP | PCR Plate | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Plate ID | Status | All | Date | Start Date | 2026-03-05 ~ 2026-03-11 | Reset | Search
- Items | 486 | Export | Plate Details
- Plate ID | Sample | Progress | Status | Plate Info | Start Date/Time | Progress | End Date/Time | Reset
- Total | STAT | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
- ID | PL0005001
- PL0005001 | 87 | 21 | Running | Total Samples | 2026-03-05 10:22:48 | 96 | A | -
- STAT Samples | 13 | B
- PL0005002 | 96 | 11 | Completed | Reagent | 2026-03-05 10:22:48 | STARMag M96 Kit | C | 2026-03-05 11:22:48
- Barcode | EX2923G01LB | D
- E
- PL0005003 | 73 | 12 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- F
- G
- PL0005004 | 68 | 15 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- H
- PL0005005 | 85 | 42 | Running | 2026-03-05 10:22:48 | -
- Well No. | Sample ID | Product | Sample Type | STAT
- PL0005006 | 96 | 35 | Failed | C08 | AA0005008 | 2026-03-05 10:22:48 | RP1 | PB | 2026-03-05 11:22:48 | Saliva
- PL0005007 | 96 | 24 | Failed | C09 | AA0005038 | 2026-03-05 10:22:48 | RP1 | RP2 | RP3 | 2026-03-05 11:22:48 | Aspirate
- D05 | AA0005583 | RP1 | Sputum
- PL0005008 | 96 | 26 | Running | 2026-03-05 10:22:48 | -
- D08 | AA0005203 | RP2 | RP3 | Saliva
- PL0005009 | 96 | 33 | Running | E09 | AA0005830 | 2026-03-05 10:22:48 | RP2 | PB | - | Aspirate
- PL0005020 | 87 | 12 | Running | F05 | AA0004839 | 2026-03-05 10:22:48 | RP1 | - | Sputum
- F09 | AA0001739 | RP1 | RP2 | RP3 | PB | Aspirate
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | H02 | AA0003959 | RP3 | Saliva

### 사용 컴포넌트

⛔️ Item/Well (96), Plate_Item (20), Table (20), Arrow/Chevron_Right (18), Tag Status (16), Title (11), Frame 43 (10), Frame 1984080529 (10), Table/Filled Table  Cell (10), Frame 1984080522 (10), Frame 1984080523 (10), Description Number (9), Frame 54 (8), Frame 50 (8), Frame/Instrument_Status (8), Square (4), Dropdown Outlined (3), Page number (2), ⛔️ Item_Segment Tabs (2), Interface/Close (1), Layout/Grid_2x2_01_Outlined (1), Frame (1), Component 4 (1), Form/Input Text Box (1), Interface/Info_Circle_Outlined (1), Contents/Scroll Bar (1)

### 디스크립션 (원문)

#### 0. 96-DWP 상세 화면

- 정의
- Plate의 기본 정보 및 검사 단계 정보
- 96-DWP에 분주된 검체별 검사 정보

#### 1. Plate 기본 정보 영역(Tab)

- 정의
- 검사 정보 항목에 따른 탭(Tab) 메뉴 구성
- 표출 예시 : LI-SPT-02-01/Case → Case 1
- 동작
- 활성 탭 변경 시, 해당 단계의 하위 데이터 세트를 동기화하여 노출
- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- Tab 표출 항목
- Plate Info
- Progress

#### 1-1. Plate Info : Plate 기본 정보 영역

- 정의
- ID, 분주된 샘플 수, 사용 시약 정보
- 표출 항목
- ID : Plate 고유 ID (바코드 정보)
- Total Samples : 96-DWP에 분주된 Sample 개수
- STAT Samples : 96-DWP에 분주된 Sample 중 STAT 개수
- Reagent : Plate에 사용된 시약 명 정보
- Barcode : 바코드 체계 참고 (COMM-4-b)

#### 1-2. Progress : 검사 단계 영역

- 정의
- 96-DWP의 검사 단계별 검사 수행 장비명
- 96-DWP의 검사 단계별 검사 시작 시간, 완료 시간
- 표출 항목
- Module : 검사 단계별 검사 수행 Module명
- Start Date/Time : 96-DWP를 해당 단계 장치에 놓는 시점
- End Date/Time : 96-DWP가 해당 단계 작업이 끝난 후 장치에서 가져나가는 시점

#### 2. Plate 선택 영역

- 정의
- 장비 내 로딩된 96-DWP의 Well 위치별 검체 배치 현황 정보
- 표출 케이스 : LI-SPT-02-01/Case → Case 2
- 동작
- 특정 검체 선택 시, 하단 리스트 내 검체 정보 노출
- 개별 Well 선택 시 Selected 상태로 변경
- Selected 상태에서 한번 더 선택시 Unselected 상태로 변경
- 최대 멀티 선택 가능한 검체 수 : 96개
- 행/열 단위 헤더는 단순 정보 영역으로 클릭 불가
- Default : 모든 검체가 Unselected 상태

#### 2-1. [Select All] 버튼

- 동작
- 클릭 시 모든 검체를 일괄 Selected 상태로 변경
- 한번 더, 클릭 시 모든 검체를 일괄 Unselected 상태로 변경

#### 2-2. [Reset] 버튼

- 동작
- 현재 선택된 모든 검체를 비선택Unselected 상태로 일괄 변경

#### 3. Plate 내 Samples 리스트

- 정의
- Plate에서 Selected 상태인 Sample 정보 리스트
- Selected 상태인 Sample가 없을 경우 하위 문구 노출
- Please select a sample from the Plate.
- 표출 케이스 : LI-SPT-02-01/Case → Case 2
- 동작
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
- Product
- 상위 Sample의 전체 검사 항목 정보
- Sample Type
- 상위 Sample 검체 타입 정보
- STAT
- 선택된 검체의 응급 여/부 상태 정보

#### 4. [X] 버튼

- 클릭 시, 상세 정보 닫힘 (리스트 노출)

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Plate 기본 정보 영역(Tab) 노출 데이터 항목 | Plate Info · Progress 탭, 노란 띠 「Plate에 사용된 시약이 N개일 경우」 | [LI-SPT-02-01/Case](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-194414) |
| 2 | Plate / List 표출 상태 및 유형 | 노란 띠 「Well 표출 상태」 · 「Default 상태」 · 「Multi-Selection 상태」 · 「전체 선택 상태」 | 같은 프레임 |

- Case 1 케이스 패널 (원문)
  - 1. Plate Info : Plate 기본 정보 영역 / 정의 / - ID, 분주된 샘플 수, 사용 시약 정보 / 표출 항목 / - ID : Plate 고유 ID (바코드 정보) / - Sample Total :  96-DWP에 분주된 Sample 개수 / - Sample STAT :  96-DWP에 분주된 Sample 중 STAT 상태 개수 / - Reagents : Plate에 사용된 시약 명 정보 / - Barcode : 바코드 체계 참고 (COMM-4-b)
  - 1-1. Plate에 사용된 시약이 N개일 경우 / 정의 / - Plate에 사용된 시약이 N개일 경우 바코드만 추가 노출
  - 2. Progress : 검사 단계 영역 / 정의 / - 96-DWP의 검사 단계별 검사 수행 장비명 / - 96-DWP의 검사 단계별 검사 시작 시간, 완료 시간 / 표출 항목 / - Module : 검사 단계별 검사 수행 Module명 / - Start Date/Time : 96-DWP를 해당 단계 장치에 놓는 시점 / - End Date/Time : 96-DWP가 해당 단계 작업이 끝난 후 장치에서 가져나가는 시점
- Case 1 케이스 화면 글자
  - Plate Info: ID PL0005001 | Total Samples 96 | STAT Samples 13 | Reagent STARMag M96 Kit | Barcode EX2923G01LB
  - Progress: Sample Pre-treatment (1) 2026-03-05 10:34:56 ~ 10:40:20 | High-throughput Extraction(3) 10:40:30 ~ 10:50:40 | PCR Setup(2) 10:50:50 ~ 11:10:20 (모두 2026-03-05)
  - 시약 N개: Reagent STARMag M96 Kit | Barcode EX2923G01LB · EX3023G01LB
- Case 2 (원문)
  - Well 표출 상태 표: Status | 선택 상태 | 검체 분주 여부 | 비고 — Unselected O / selected O / Disabled X 검사에 사용되지 않는 웰
  - Default 상태 (모든 검체 Unselected) / Default 상태 (Sample 선택 안내 문구 노출): `Please select a sample from the Plate.`
  - Multi-Selection 상태: 목록 C08 ~ H02 8행 (기본 화면과 같음)
  - 전체 선택 상태 / 전체 선택 상태 (전체 Sample 정보 노출 / 스크롤): 목록 A01 ~ A08 (Sample ID · Product · Sample Type은 기본 화면 8행과 같은 값)
  - 케이스 패널: 화면 정보만 있고 디스크립션 없음(번호 칸 `0`)
