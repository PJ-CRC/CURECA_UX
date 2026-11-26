---
cid: LI-INS-02-T
pair_cid: TI-INS-02-T
tl_relation: 기능 추가
title: All Tab
path: Instrument > All Tab
type: Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-336701
---
# LI-INS-02-T All Tab

> 기존 화면(작업방 `Instrument_asis` 페이지, Ver 2.1.18)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS에만 3 Door의 Lock Status · [Unlock]/[Lock] 버튼과 3-1이 있고, 2-2 [Management]가 L용 팝업(LI-INS-02-01-P, 보기 전용)을 엶. 2-1 Error Rate는 L에서 2번 블록 안 취소선 줄로 있음. 디스크립션에 0번 블록이 없음(1번부터)
- 호출하는 화면: [LI-INS-02-01-P] Management Popup (2-2), Confirm_008 (3-1 [Unlock]), Confirm_031 (3-1 문이 열린 채 [Lock]), Event History 팝업 (1-3 Event 아이콘, 7-1 More)
- 호출되는 곳: [LI-INS-01-T] Overview Tab · Tab 구성 (All)
- 관련 정책: POL-EQP-001, POL-EQP-005, POL-EQP-008, POL-EQP-009, POL-EQP-010

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Instruments
- Tab: Overview | All | Sample Storage | Consumable Storage | Sample Pre-treatment | Ht Extraction | Flexible Extraction | PCR Setup | Plate Sealing | Universal PCR
- 왼쪽 Module 목록: Module List(34) | All Modules
  - Module | Connected | Status | Door | Enabled | Event | Run-time(h)
  - Universal PCR(2) | Running | Closed | Y | 2,621 | 10 | 10
  - Sample Storage(2) | Running | Closed | Y | 2,621 | 10 | 10
  - Consumable Storage (1) | - | - | - | N | 2,621 | -
  - Consumable Storage (2) | Running | Closed | Y | 2,621 | 10 | 10
  - Sample Pre-treatment (1) | Running | Closed | Y | 2,621 | 10 | 10
  - Sample Pre-treatment (2) | Running | Closed | Y | 2,621 | 10 | 10
  - High-throughput Extraction (1) | Running | Closed | Y | 2,621 | 10 | 10
  - High-throughput Extraction(2) | Running | Closed | Y | 2,621 | 10 | 10
  - Flexible Extraction (1) | Running | Closed | Y | 2,621 | 10 | 10
  - Flexible Extraction(2) | Running | Closed | Y | 2,621 | 10 | 10
  - 1 | 2 | 3 | 4 | 5 | 15
- 오른쪽 상세: Universal PCR(2) | Management
  - Door — Door | Status | Lock Status: Door | Closed | Locked | Unlock
  - Device — Unit | Connected | Status | Enabled: CFX96 (1) Running Y / CFX96 (2) Running Y / CFX96 (3) - - N / CFX96 (4) Running Y / CFX96 (5) Running Y / CFX96 (6) Running Y
  - Storage — Unit | Docking Status | Storage Type | Current Temp: No item
  - Waste Bin/Bottle — Unit | Docking Status | Waste Status: Film Waste Bin (Upper) | - | Available
  - Event History | More — Description | Level | Date/Time: Pick up fail Error 15:57:20 (3행) / Pick up fail Error 04-09

### 사용 컴포넌트

Table/Filled Table  Cell (25), Frame/Instrument_Status (19), Tag Status (18), Description Number (14), ⛔️ Item_Segment Tabs (10), Table (9), Title (7), Frame 1984080916 (1), Pagination more than 8 (1), Dropdown 48 (1), Interface/Plus (1), Frame (1), Component 4 (1), Label/Status/Square (1)

### 디스크립션 (원문)

#### 1. Module 목록(좌측 영역)

- 한 페이지에 최대 10개 표기(1920*1080기준)
- 정렬: Module name 기준 오름차순 정렬
- 최초 진입 시, default로 첫 번째 유닛이 선택되어 보여짐
- 항목값
- Connected: 모듈의 연결 상태 표시됨
- 상태값: Connected / Unconnected
- Status: 모듈의 작동 상태 표시됨
- 상세 정의는 Common UX 기준 따름
- ~~Enable~~ → Enabled: 장비의 사용 여부 값 표기
- Enabled = ‘Y’ / Disabled = ‘N’
- Run-time: 장비가 가동된 시간 기준으로 표기
- 가동 시간 = 상태가 Running 중인 시간의 총합
- 11 시간 55분일 경우, 11h으로 표기 (m단위 버림)
- [Run-time 집계 정의]
- 1)집계 대상
- Module: 전체
- Device: Sample Processing, Sample Aliquoting, M9600, STARlet, Sealer, CFX96
- 2) 집계 기준
- Module 또는 Device 상태가 Running인 시간의 누적 값
- 3) 데이터 저장 및 처리
- 제어단에서 누적 가동 시간을 집계하여 각 시스템(제어, L-IOS, T-IOS)의 데이터베이스(또는 파일)에 영구 저장 (Running 상태에서 다른 상태로 전환되는 시점에 저장)
- 가동 시간 데이터가 데이터베이스(혹은 파일)에 저장되는 시점에 해당 데이터를 L-IOS로 전송하여 사용자에게 정보 제공 및 유지보수 기반 정보로 활용
- 가동 시간에 기반하여 다수 개의 모듈 또는 CFX96 6대 대한 작업 배정 시, 균등하게 배정하여 특정 모듈 또는 기능 장치로의 작업 쏠림 방지

#### 1-1. 검색 필터

- Module Name 검색 기능
- 텍스트 입력(Search) 방식으로 검색 가능
- Default: All Modules / 데이터: 전체 Module List 기준
- 정렬 기준: 오름차순으로 정렬

#### 1-2. Module 개수 표기

- Module List 타이틀 옆에 (n) 값 표시
- 현재 목록에 해당하는 모듈 수 표시(해당 페이지X, 목록의 총 개수)

#### 1-3. Event 아이콘

- Module 단위 이벤트 현황 확인 및 접근
- 기능 및 동작
- 아이콘 클릭 시 해당 Module Name으로 필터링된 Event History 팝업 호출 (Error와 Warning 정보는 별도로 클릭되지 않고 동일 영역에서 접근 가능)
- 필터링 조건: 클릭한 Module Name과 일치하는 이벤트만 필터링되어 화면 표기(최신순 노출)
- 박스 내 숫자: Level 별로 Status가 Open인 이벤트 수 카운팅하여 표시 (Event가 0건 이여도 클릭 가능)
- 빨간박스: Error 수 카운팅 / 노란박스: Warning 수 카운팅

#### 1-4. Door 상태값 표기

- 열림: Open / 닫힘: Closed
- 모듈에 문이 2개일 경우(=Sample Pre-treatment),
- 한 개라도 열려있을 경우 = Open
- 두 개 모두 닫혀있을 경우 = Closed

#### 2. Module Details(우측 영역)

- Module 내 Unit 단위 장비의 상세 정보를 확인하는 영역
- Title : 모듈명+인덱스 표기
- ~~2-1~~
- ~~Error Rate~~
- ~~Account Type에 따라 항목 노출~~
- ~~Account Type의 Sevice일 경우만 노출~~

#### 2-2. [Management 버튼]

- 클릭 시, LI-INS-02-01-P 팝업 노출

#### 3. Door

- Module의 Door Status와 lock Status를 확인할 수 있음
- Lock Status: Locked / Unlocked
- Locked → [Unlock] 버튼, Unlocked → [Lock] 버튼 표시

#### 3-1. [Unlock] 클릭

- 클릭 시,
- Confirm_008 팝업 노출
- [Lock] 클릭 (Lock Status = Unlocked일 때)
- 클릭 시 즉시 잠금 → Lock Status Locked, 버튼은 [Unlock]으로 바뀜
- [Lock] 버튼은 늘 활성(Enabled) 상태로 표시
- Door가 Open이면 [Lock] 클릭 시 Confirm_031 팝업(문 닫기 안내) 노출 (LI-INS-01-P 케이스 참고)

#### 4. Device

- Device: Module에 속한 검사 장비 상태 확인
- Unit: Device 장비명 표시
- Connected: Device 연결 상태 표시
- Status: Device 작동 상태 표시(Ready, Running, Error)
- ~~Enable~~ → Enabled
- 현재 적용 대상: ‘TI-INS-02-01-P’ 화면 참고
- 해당 없을 경우 ‘-’ 표기
- 상태값: 사용(Enabled)=Y, 사용안함(Disabled)=N으로 표기
- T-IO S에서 사용 여부 설정 가능
- 참고: 각 항목별 상태값의 상세 정의는 ‘APP,Web_Common UX’의 ‘COMM-4-a’ 참고
- ~~4-1~~
- ~~[Run-time Info] 클릭~~
- ~~Run-time Info_LI-INS-02-02-P 팝업 제공~~
- ~~Account type에 따라 팝업 내역이 달라짐~~
- ~~자세한 내역은 해당 페이지 화면 참고~~

#### 5. Storage

- 검체/소모품/시약을 저장하는 Unit의 정보를 확인하는 영역
- Unit: Storage 장비명 표시
- Docking Status: 트롤리 단위 입고 Unit일 경우 상태 표시
- 검체/소모품/시약 투입 구역 Trolley 또는 서랍의 열림/닫힘 상태 표시
- Storage Type: 상온 저장소 여부 및 냉장 저장소 여부 표시
- Current Temp: Storage Type이 Refrigerator인 경우, 해당 냉장 장치의 현재 온도 표시
- 참고: 각 항목별 상태값의 상세 정의는 ‘APP,Web_Common UX’의 ‘COMM-4-a’ 참고

#### 6. Waste

- 소모품/시약 사용 후 폐기되는 Waste Unit 현황 확인
- Unit: Waste Bin/Bottle 장비명 표시
- Docking Status: Waste Bin 문의 열림/닫힘 상태 표시
- Docking Status가 없는 것은 '-'로 표기함
- Waste Status: Waste Bin 폐기물 양 상태값 표시
- 참고: 각 항목별 상태값의 상세 정의는 ‘APP,Web_Common UX’의 ‘COMM-4-a’ 참고

#### 7. Event History

- 선택된 장비의 Event 내역을 확인할 수 있는 영역
- 발생 시간 기준 최신순으로 Status가 Open인 Event 최대 4건 표시
- Date/Time 표기방법
- 오늘 일 경우: hh:dd:ss(시:분:초)
- 오늘 이전 일인 경우: mm-dd(월-일)

#### 7-1. Event History More 버튼

- 버튼 클릭 시 Event History 팝업 노출
- 필터링 조건: 클릭한 Module Name과 일치하는 이벤트만 필터링되어 화면 표기(최신순 노출)

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Instrument_asis` 페이지에 LI-INS-02-T 케이스 프레임 없음)
