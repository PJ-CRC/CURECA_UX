---
cid: LI-INS-02-T
pair_cid: TI-INS-02-T
tl_relation: 기능 추가
title: All Tab
path: Instruments > All
type: Tab
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-118684
figma_region: 2.1 1차
---
# LI-INS-02-T All Tab

> 기존 화면(기존 작업방 Instruments 페이지, 2.1 1차 영역, Ver 2.1.06)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: TI-INS-02-T에 더해 Door 영역의 [Unlock](3-1)이 있음. [Management]는 조회 전용 Popup(LI-INS-02-01-P)을 엶
- 관련 정책: POL-EQP-001, POL-EQP-005, POL-EQP-008, POL-EQP-009, POL-EQP-010
- 호출하는 화면: Management Popup (LI-INS-02-01-P), Door Control Popup (LI-INS-01-P), Event History Popup (LI-EVT-P)

- 취소선(Figma에서 제거된 항목): 2-1 Error Rate, 1의 "Enable"(→ Enabled), 4-1 [Run-time Info]

## 기존 화면

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error | Warning | 2026-04-10 11:30 | LIOS
- (LNB) Dashboard | Instruments | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- 나머지 목록·Module Details 글자는 TI-INS-02-T와 같음. 다른 점: Door 영역 `Door | Closed | Locked | Unlock`

### 사용 컴포넌트

Table/Filled Table Cell (26), Frame/Instrument_Status (19), Tag Status (18), Description Number (14), Item_Segment Tabs (10), Table (9), Title (7), Pagination more than 8 (1), Dropdown 48 (1), Interface/Plus (1)

### 디스크립션 (원문)

#### 1 ~ 1-4

- 원문은 TI-INS-02-T 1 ~ 1-4와 같음

#### 2. Module Details(우측 영역)

- Module 내 Unit 단위 장비의 상세 정보를 확인하는 영역
- Title : 모듈명+인덱스 표기

#### 2-1. Error Rate

- Account Type에 따라 항목 노출
- Account Type의 Sevice일 경우만 노출

#### 2-2. [Management 버튼]

- 클릭 시, LI-INS-02-01-P 팝업 노출

#### 3. Door

- Module의 Door Status와 lock Status를 확인할 수 있음
- Unlock을 클릭 시,

#### 3-1. [Unlock] 클릭

- 클릭 시,
- Confirm_008 팝업 노출

#### 4. Device

- 원문은 TI-INS-02-T 4와 같음

#### 4-1. [Run-time Info] 클릭

- Run-time Info_LI-INS-02-02-P 팝업 제공
- Account type에 따라 팝업 내역이 달라짐
- 자세한 내역은 해당 페이지 화면 참고

#### 5 ~ 7-1

- 원문은 TI-INS-02-T 5 ~ 7-1과 같음
