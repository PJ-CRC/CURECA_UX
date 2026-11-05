---
cid: TI-INS-02-T
pair_cid: LI-INS-02-T
tl_relation: 기능 추가
title: All Tab
path: Instruments > All
type: Tab
version: 2.1.06
date: 2026-09-28
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-111981
figma_region: 2.1 1차
---
# TI-INS-02-T All Tab

> 기존 화면(작업방 Instruments 페이지, 2.1 1차 영역, Ver 2.1.06)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: L-IOS(LI-INS-02-T)에는 Door 영역의 [Unlock]이 더 있음
- 관련 정책: POL-EQP-001, POL-EQP-005, POL-EQP-008, POL-EQP-009, POL-EQP-010
- 호출하는 화면: Management Popup (TI-INS-02-01-P), Event History Popup (TI-EVT-P)

- 취소선(Figma에서 제거된 항목): 2-1 Error Rate, 2-2의 옛 조건(Running이면 Alert_013, 1대면 Alert_014, Ready·Not Initialized면 팝업), 1의 "Enable"(→ Enabled), 4-1 [Run-time Info], 4-2 [Enable setting]

## 기존 화면

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error | Warning | 2026-04-10 11:30 | TIOS
- (LNB) Dashboard | Instrument | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- Overview | All
- Sample Storage | Prep Consumable Storage | Sample Preparation | Ht Extraction | Flexible Extraction | PCR Setup | Plate Sealing | Universal PCR
- Module List(34) | Universal PCR(2) | Management
- All Modules
- Module | Connected | Status | Door | Enabled | Run-time(h) | Event
- Universal PCR(2) | Running | Closed | Y | 2,621
- Sample Storage(2) | Running | Closed | Y | 2,621
- Prep Consumable Storage (1) | - | - | - | N | 2,621 | -
- Prep Consumable Storage(2) | Running | Closed | Y | 2,621
- Sample Preparation (1) | Running | Closed | Y | 2,621
- Sample Preparation(2) | Running | Closed | Y | 2,621
- High-throughput Extraction (1) | Running | Closed | Y | 2,621
- High-throughput Extraction(2) | Running | Closed | Y | 2,621
- Flexible Extraction (1) | Running | Closed | Y | 2,621
- Flexible Extraction(2) | Running | Closed | Y | 2,621
- (Module Details) Door: Door | Status | Lock Status → Door | Closed | Locked
- (Module Details) Device: Unit | Connected | Status | Enabled → CFX96 (1)~(6) | Running | Y (CFX96 (3)은 - | - | N)
- (Module Details) Storage: Unit | Docking Status | Storage Type | Current Temp → No item
- (Module Details) Waste Bin/Bottle: Unit | Docking Status | Waste Status → No item
- Event History | More

### 사용 컴포넌트

Table/Filled Table Cell (26), Frame/Instrument_Status (19), Tag Status (18), Description Number (13), Item_Segment Tabs (10), Table (9), Title (7), Pagination more than 8 (1), Dropdown 48 (1), Interface/Plus (1)

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
- Enable → Enabled: 장비의 사용 여부 값 표기
- Enabled = ‘Y’ / Disabled = ‘N’
- Run-time: 장비가 가동된 시간 기준으로 표기
- 가동 시간 = 상태가 Running 중인 시간의 총합
- 11 시간 55분일 경우, 11h으로 표기 (m단위 버림)
- [Run-time 집계 정의]
- 1)집계 대상
- Module: 전체
- Device: Sample Pretreatment, Sample Aliquot, M9600, STARlet, Sealer, CFX96
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
- 모듈에 문이 2개일 경우(=Sample Preparation),
- 한 개라도 열려있을 경우 = Open
- 두 개 모두 닫혀있을 경우 = Closed

#### 2. Module Details(우측 영역)

- Module 내 Unit 단위 장비의 상세 정보를 확인하는 영역

#### 2-1. Error Rate

- Account Type에 따라 항목 노출
- Account Type의 Sevice일 경우만 노출

#### 2-2. [Enable setting → Management] 버튼

- 클릭 시, 조건 없이 Management Popup(TI-INS-02-01-P) 노출
- 아래 조건 모두 제거 요청 및 관련 조건은 팝업 안에서 처리할 예정
- 장비 상태가 ‘Running’일 경우
- Alert_013 팝업 노출
- 관리되는 Module이 1대일 경우
- Alert_014 팝업 노출
- 장비 상태가 ‘Ready 또는 not initialized일 경우
- TI-INS-02-01-P 팝업 노출

#### 3. Door

- Module의 Door Status와 lock Status를 확인할 수 있음

#### 4. Device

- Device: Module에 속한 검사 장비 상태 확인
- Unit: Device 장비명 표시
- Connected: Device 연결 상태 표시
- Status: Device 작동 상태 표시(Ready, Running, Error)
- Enable → Enabled
- 현재 적용 대상: ‘TI-INS-02-01-P’ 화면 참고
- 해당 없을 경우 ‘-’ 표기
- 상태값: 사용(Enabled)=Y, 사용안함(Disabled)=N으로 표기
- T-IO S에서 사용 여부 설정 가능
- 참고: 각 항목별 상태값의 상세 정의는 ‘APP,Web_Common UX’의 ‘COMM-4-a’ 참고

#### 4-1. [Run-time Info] 클릭

- Run-time Info_TI-INS-02-02-P 팝업 제공
- Account type에 따라 팝업 내역이 달라짐
- 자세한 내역은 해당 페이지 화면 참고

#### 4-2. [Enable setting] 클릭 (T-IOS Only)

- Enable Setting_TI-INS-02-01-P 팝업 노출

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
- Waste Status: Waste Bin 폐기물 양 상태값 표시
- 참고: 각 항목별 상태값의 상세 정의는 ‘APP,Web_Common UX’의 ‘COMM-4-a’ 참고

#### 7. Event History

- 선택된 장비의 Event 내역을 확인할 수 있는 영역
- 발생 시간 기준 최신순으로 Status가 Open인 Event 최대 4건 표시

#### 7-1. Event History More 버튼

- 버튼 클릭 시 Event History 팝업 노출
- 필터링 조건: 클릭한 Module Name과 일치하는 이벤트만 필터링되어 화면 표기(최신순 노출)

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 표기 | Connected 항목 상태값 "Connected / Unconnected" | Connected / Disconnected | `glossary/status-values.csv` 연결 상태 | 대기 |
| R02 | 디스크립션 | 2-1 Error Rate가 남아 있음. 버전 메모 v2.1.01은 "Error Rate 제거(2-1)" | 취소선으로 이미 제거됨. 표시 위치는 고객 논의 중(CA-0001) | POL-EQP-010 | 제외 (2026-11-04, 취소선) |
| R03 | 표기 | Module Details (Sample Preparation): STAT Storage (Upper), STAT Storage (Lower) | STAT Storage | `glossary/module-units.csv`, `glossary/review-v0.md` | 대기 |
| R04 | 표기 | Module Details (Sample Preparation): Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower) | Waste Bin (Upper), Waste Bin (Lower) | 같음 | 대기 |
| R05 | 표기 | Liquid Waste Bottle(Upper), Sample Storage(2) 등 이름과 번호 붙여 씀 | Liquid Waste Bottle (Upper), Sample Storage (2) | 이름 (번호) 띄어쓰기 | 대기 |
| R06 | 표기 | Waste Status | Waste Bin/Bottle Status | `glossary/terms.csv` | 대기 |
| R07 | 디스크립션 | 4-1 [Run-time Info], 4-2 [Enable setting] 설명이 남아 있음 | 취소선으로 이미 제거됨 | Figma 취소선 | 제외 (2026-11-04, 취소선) |
| R08 | 디스크립션 | 2-2 "[Enable setting → Management] 버튼 ... 아래 조건 모두 제거 요청" 메모 | 옛 조건은 취소선으로 제거됨. [Management]를 누르면 조건 없이 Popup을 엶 | Figma 취소선, POL-EQP-009 | 제외 (2026-11-04, 취소선) |
| R09 | 표기 | T-IO S, Account type | T-IOS, User Type | 오타, `glossary/terms.csv` | 대기 |
| R10 | 표기 | LNB에 Instrument가 두 번 | 확인 필요 (디자인 화면 기준) | 화면 글자 | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | | Error Rate 제거(2-1). Setting 버튼명 변경 Setting → Management(2-2). Run-time Info 버튼 제거(4-1). Enable setting 버튼 제거(4-2). 좌측 목록과 Device 영역 항목명 Enable → Enabled. Run-time 집계 대상에 Sample Pretreatment, Sample Aliquot 추가 | 서보경 | Figma 버전 메모 |
| 2.1.06 | 2026-09-28 | Detail Door 영역 UI 변경 | 서보경 | Figma 버전 메모 |
