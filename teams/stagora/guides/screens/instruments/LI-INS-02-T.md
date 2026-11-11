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
service_mode: [Main Mode, Console Mode, TSS Mode]
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

> 기존 화면(작업방 Instruments 페이지, 2.1 1차 영역, Ver 2.1.06)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 표기 | Connected 항목 상태값 "Connected / Unconnected" | Connected / Disconnected | `glossary/status-values.csv` 연결 상태 | 대기 |
| R02 | 디스크립션 | 2-1 Error Rate가 남아 있음. 버전 메모 v2.1.01은 "Error Rate 제거(2-1)" | 취소선으로 이미 제거됨. 표시 위치는 고객 논의 중(CA-0001) | POL-EQP-010 | 제외 (2026-11-04, 취소선) |
| R03 | 표기 | Module Details (Sample Preparation): STAT Storage (Upper), STAT Storage (Lower) | STAT Storage | `glossary/module-units.csv`, `glossary/review-v0.md` | 대기 |
| R04 | 표기 | Module Details (Sample Preparation): Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower) | Waste Bin (Upper), Waste Bin (Lower) | 같음 | 대기 |
| R05 | 표기 | Liquid Waste Bottle(Upper), Sample Storage(2) 등 이름과 번호 붙여 씀 | Liquid Waste Bottle (Upper), Sample Storage (2) | 이름 (번호) 띄어쓰기 | 대기 |
| R06 | 표기 | Waste Status | Waste Bin/Bottle Status | `glossary/terms.csv` | 대기 |
| R07 | 디스크립션 | 4-1 [Run-time Info] 설명이 남아 있음 | 취소선으로 이미 제거됨 | Figma 취소선 | 제외 (2026-11-04, 취소선) |
| R08 | 디스크립션 | 3 "Unlock을 클릭 시,", 3-1 "클릭 시," 문장이 끊김 | [Unlock]을 누르면 Door Control 흐름(POL-EQP-008)으로 정리. Confirm_008 문구 확인 필요 | POL-EQP-008, `policy/alert-catalog.md` 3절 | 대기 |
| R09 | 표기 | T-IO S, Account type | T-IOS, User Type | 오타, `glossary/terms.csv` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | | Error Rate 제거(2-1). Run-time Info 버튼 제거(4-1). Management 버튼 추가(2-2). 좌측 목록과 Device 영역 항목명 Enable → Enabled. Run-time 집계 대상에 Sample Pretreatment, Sample Aliquot 추가 | 서보경 | Figma 버전 메모 |
| 2.1.06 | 2026-09-28 | Detail Door 영역 UI 변경 | 서보경 | Figma 버전 메모 |
