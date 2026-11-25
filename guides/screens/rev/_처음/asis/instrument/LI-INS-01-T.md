---
cid: LI-INS-01-T
pair_cid: TI-INS-01-T
tl_relation: 기능 추가
title: Overview Tab
path: Instruments > Overview
type: Page
version: 2.1.06
date: 2026-09-28
author: 서보경
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-117810
figma_region: 2.1 1차
---
# LI-INS-01-T Overview Tab

> 기존 화면(기존 작업방 Instruments 페이지, 2.1 1차 영역, Ver 2.1.06)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: TI-INS-01-T에 더해 Door Status Tooltip(5)과 [Unlock](Door Control) 버튼(6)이 있음
- 관련 정책: POL-EQP-001, POL-EQP-002, POL-EQP-008, POL-EQP-009
- 호출하는 화면: Door Control Popup (LI-INS-01-P)

## 기존 화면

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error | Warning | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Instrument | Material Setup | Test Management | Sample Tracking | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Overview | All | Sample Storage | Consumable Storage | Sample Pre-treatment | Ht Extraction | Flexible Extraction | PCR Setup | Plate Sealing | Universal PCR
- Sample Preparation (Prep) System | Dignosctics (Dx) System
- Sample Storage | Consumable Storage | Sample Pre-treatment | High-throughput Extraction | Flexible Extraction | PCR Setup | Plate Sealing | Universal PCR
- Enabled 1 · Total 1 | Enabled 1 · Total 1 | Enablde 3 · Total 4 (Disabled 1) | Enabled 3 · Total 3 | Enabled 3 · Total 3 | Enabled 3 · Total 4 (Disabled 1) | Enabled 2 · Total 3 (Disabled 1) | Enabled 6 · Total 6
- [HT Extraction(3)] E0001, Plate Gripper Failure. (Event 툴팁)
- View All (Module Type마다)
- Connected / Status / Door Status: Module Type마다 상태별 Module 수 (Open, Closed 등)
- Door Control (Module Type마다)
- Event
- (범례) Connected | Disconnected | Running | Paused | Error | Ready

### 사용 컴포넌트

Frame/Instrument_Status (54), Table/Filled Table Cell (25), Tag Status (16), Description Number (14), Item_Segment Tabs (10), Square (8), Button/Tertiary XSmall (8), Title (4), Icon/Alert Error (2), Interface/Info_Circle_Outlined (1), Tooltip (1)

### 디스크립션 (원문)

#### 0 ~ 4-1

- 원문은 TI-INS-01-T 0 ~ 4-1과 같음. 다른 점: 1의 알럿이 "Alert_004 팝업 노출"

#### 5. Door Status Tooltip

- 동작 : COMM-5-o
- 툴팁 내용 : Shows door open/close status and provides an Unlock function to open the module door

#### 6. Unlock 버튼 (L-IOS Only)

- 버튼 클릭 시, Door Control 팝업 제공
- 기능 활성화 조건
- 공통 UX 참고 : COMM-3-a

#### 7. 범례 영역

- 상단 상태값 표시 영역의 범례 제공함
