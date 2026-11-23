---
cid: LI-INS-01-T
pair_cid: TI-INS-01-T
tl_relation: 기능 추가
title: Overview Tab
path: Instrument > Overview Tab
type: Page
version: 2.1.18
date: 2026-11-19
author: 이상헌
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-367211
figma_region: 2.1 2차
---
# LI-INS-01-T Overview Tab

> 기존 화면(기존 작업방 Instruments 페이지, 2.1 2차 영역, Ver 2.1.18)을 2026-11-02에 옮기고 2026-11-23에 다시 옮긴 것입니다(케이스 3, 작업 기록 `20261123-최고관리자-instruments`). 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: TI-INS-01-T에 더해 Door Status Tooltip(5)과 [Unlock](Door Control) 버튼(6)이 있음
- 관련 정책: POL-EQP-001, POL-EQP-002, POL-EQP-008, POL-EQP-009
- 호출하는 화면: Door Control Popup (LI-INS-01-P)

## 기존 화면

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | LIOS | Instrument
- (LNB) Dashboard 1 | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Overview | All | Sample Storage | Consumable Storage | Sample Pre-treatment | Ht Extraction | Flexible Extraction | PCR Setup | Plate Sealing | Universal PCR
- Sample Preparation (Prep) System | Dignosctics (Dx) System
- Sample Storage | Consumable Storage | Sample Pre-treatment | High-throughput Extraction | Flexible Extraction | PCR Setup | Plate Sealing | Universal PCR
- Enabled 1 · Total 1 | Enabled 1 · Total 1 | Enablde 3 · Total 4 (Disabled 1) | Enabled 3 · Total 3 | Enabled 3 · Total 3 | Enabled 3 · Total 4 (Disabled 1) | Enabled 2 · Total 3 (Disabled 1) | Enabled 6 · Total 6
- [HT Extraction(3)] E0001, Plate Gripper Failure. (Event 툴팁)
- View All (Module Type마다)
- Connected / Status / Door Status: Module Type마다 상태별 Module 수 (Open, Closed, - 등)
- Door Control (Module Type마다 버튼)
- Event
- (범례) Connected | Disconnected | Running | Paused | Error | Ready

### 사용 컴포넌트

Frame/Instrument_Status (54), Table/Filled Table Cell (25), Tag Status (16), Description Number (13), ⛔️ Item_Segment Tabs (10), Square (8), Button/Tertiary XSmall (8), Title (4), Icon/Alert Error (2), Tooltip (1), Component 4 (1), Frame (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비의 현황을 확인하고 상세 내용을 조회할 수 있는 화면이다. 해당 메뉴에서는 장비를 모듈 단위로 조회가 가능하다.
- 진입 방법
- LNB의 ‘Instrument’ 메뉴를 통해 진입할 수 있다.

#### 1. Tab 구성

- Overview : 전체 장비 현황을 이미지 기반 대시보드 형태로 제공
- All : 전체 장비 정보를 목록(List) 형태로 제공
- 그 외 Tab (Module Type 기준)
- 등록되지 않은 모듈 Tab에 진입 시, 알럿 제공
- Alert_004 팝업 노출

#### 2. Prep / Dx 장비 구분 영역

- Prep System
- 총 3개의 Module로 구성됨
- 검체 입고 후 전처리 과정을 수행하는 단계
- Dx System
- 총 5개의 Module로 구성됨
- 전처리 이후의 진단 과정을 수행하는 단계

#### 3. Module 영역

- Module 단위로 구분하여 정보 제공함
- 각 Module별 전체 장비 대수의 상태를 요약 형태로 제공함

#### 3-1. Module Type Title

- 각 카드 상단에 Module Type Title이 표시됨

#### 3-2. Module 사용여부 Status

- Total: 해당 Module Type의 전체 등록 수 표시됨
- In Use: 사용 상태의 Module 수 표시됨
- Not in Use: 미사용 상태의 Module이 존재할 경우에만 노출되며, 해당 수량 표시됨

#### 3-3. Module 이미지 영역

- Module Type에 따라 해당 장비를 대표하는 이미지가 카드 영역에 표시됨

#### 3-4. View All 버튼

- 클릭 시 해당 Module Type Tab으로 이동되며, 동일 Type의 Module이 목록으로 표시됨

#### 3-5. Module Status 영역

- 각 상태별로 해당되는 모듈 수를 표시함
- 좌측 항목(예: Connected / Status / Door Status) 기준으로 모듈 수를 구분하여 표시함
- 자세한 상태값에 대한 내역은 우측의 Instrument Detail Info page 참고

#### 3-6. Event History 요약 영역

- 각 Module Type에서 발생한 Event 개수 합산하여 표시함
- 합산 기준: Event Status가 'Open'인 경우만 포함함
- Level 구분하여 Error와 Warning 수를 별도로 표시함
- Error: 빨강
- Warning: 노랑

#### 4. Event 표기 영역

- Module에서 발생한 장비 Event가 존재할 경우 표시됨
- 아이콘 표시
- Event Level에 따라 차등 표현(Error/Warning)

#### 4-1. Event Icon

- 노출 방식: 아이콘 클릭 시 툴팁형식으로 내용이 노출되며, X 클릭 시 닫히는 방식
- 노출 조건: Event 상태가 ‘Open’인 항목이 존재할 경우
- 표시 기준: ‘Open’ 상태 Event 중 최신 1건 표시됨
- 표기 형식:
- [{Module Name}]\n{Event Code}, {Event Description}

#### 5. ~~Door Status Tooltip~~

- ~~동작 : COMM-5-o~~
- ~~툴팁 내용 : Shows door open/close status and provides Unlock / Lock functions to open or lock the module door~~

#### 6. Unlock 버튼 (L-IOS Only)

- 버튼 클릭 시, Door Control 팝업 제공
- 기능 활성화 조건
- 공통 UX 참고 : COMM-3-a
- Door Control 팝업에서 Door별 Unlock(잠금 해제) · Lock(잠금) 가능

#### 7. 범례 영역

- 상단 상태값 표시 영역의 범례 제공함

## 반영 대기 목록

`screens/tobe/`로 옮김 (2026-11-23)

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | "Cureca 장비의 현황" | CURECA | `glossary/terms.csv` | 대기 |
| R02 | 디스크립션 | 3-2가 "Total / In Use / Not in Use" | 화면(v2.1.06)은 "Enabled n · Total n (Disabled n)". 화면과 POL-EQP-009의 Enabled 표기에 맞춤 | Figma 버전 메모 v2.1.06 | 대기 |
| R03 | 표기 | Enablde, Dignosctics | Enabled, Diagnostics | 오타 | 대기 |
| R04 | 디스크립션 | 6 "기능 활성화 조건 - 공통 UX 참고 : COMM-3-a" | Door Control 잠금 해제 조건은 POL-EQP-008 참조 | POL-EQP-008 | 대기 |
| R05 | 문구 | Door 버튼 라벨이 화면은 "Door Control", 디스크립션은 "Unlock 버튼" | 하나로 통일 | 화면 글자와 디스크립션 6 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.06 | 2026-09-28 | Module 상태값에 Paused 추가. 상태값 표기 순서 변경. 상단 Enabled 요약 영역 UI 변경. 단어 변경 Enable → Enabled. Door Control 버튼 UI 변경 | 서보경 | Figma 버전 메모 |
| | 2026-11-12 | 연동 변경: L-IOS Client Mode 이름 바꿈 (머리말 키 `client_mode`, 표기 L-IOS Client Mode · MS Mode, 경로 `policy/client-mode-matrix.csv`) | 서보경 | DS-0001 |
| | 2026-11-18 | 연동 변경: Module · Unit 이름 바꿈(Prep Consumable Storage → Consumable Storage, Sample Preparation Module → Sample Pre-treatment, Sample Pretreatment → Sample Processing, Sample Aliquot → Sample Aliquoting). 검사 단계 · Reagent 태그 · Prep 시스템의 Sample Preparation은 그대로 | 서보경 | `glossary/modules.csv`, `glossary/module-units.csv` (2026-11-18) |
| 2.1.17 | | Door Status 툴팁(5, 취소선으로 제거) · Unlock 버튼(6) 정의에 Lock 기능 추가 | 이상헌 | Figma 버전 메모 |
| 2.1.18 | 2026-11-19 | 모듈 명칭 변경: Prep Consumable Storage → Consumable Storage, Sample Preparation → Sample Pre-treatment, Upper/Lower Sample Pretreatment → Sample Processing (Upper/Lower), Upper/Lower Sample Aliquot → Sample Aliquoting (Upper/Lower) | 이상헌 | Figma 버전 메모 |
