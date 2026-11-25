---
cid: LI-RUN-P
pair_cid:
tl_relation: 단독
title: Run Preparation Popup
path: Run > Run Notification
type: Popup
version: 2.1.05
date: 2026-09-04
author: 정다예
client_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6902-44848
figma_region: 2.1 2차
---
# LI-RUN-P Run Preparation Popup

> 기존 화면(기존 작업방 Run/Quick Start 페이지, 2.1 2차 영역, Ver 2.1.05)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. IA 화면 이름은 "Run Notification". Run 실행 조건을 만족하지 못할 때 LNB·Dashboard의 [Run]과 Quick Start(LI-QUK)에서 열림
- 관련 정책: POL-EQP-003 (Run, Quick Start 버튼), POL-SMP-007, POL-LOD-001

## 기존 화면

### 화면 글자

- Notifications Before Run Preparation
- Please check all of the items below and run it again.
- Sample Data Load Failed | Loading Error. Check device status and try again.
- No Tray Detected On Trolley 1F (Consumable Trolley) | Please place an empty tray on trolley 1F and try again.
- Network Status | Please check the network status. | Instrument | T-IOS | D.A PC (항목별 연결 아이콘)
- Door Status | Please check the door open status of the module. | Module: High-throughput Extraction | Flexible Extraction(3) | Universal PCR
- OK

### 사용 컴포넌트

Description Number (9), Table (4), Icon/instrument (3), Table/Filled Table Cell (3), Popup/Popup Middle Text (2), Interface/Check_Circle_Outlined (2), Icon/Popup Status (1), Interface/Close_Circle_Outlined (1), Icon/Connect (1), Interface/Close (1)

### 디스크립션 (원문)

#### 0. Run 실행 불가 팝업

- 노출 조건
- 하위 항목 중 1개 이상 문제가 있을 경우 팝업 노출
- 미노출 조건
- 모든 항목이 AND 조건으로 만족할 경우 미노출
- 표출 항목
- Sample 정보 로드 실패 알림
- 네트워크 온/오프라인 상태 알림
- 장비 도어 개방 알림

#### 1. 팝업 문구

- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Notifications Before Run Preparation
- 내용 : Please check all of the items below and run it again.

#### 2. Sample 정보 로드 실패 알림 영역

- 노출 조건
- Trolley에 장착된 Sample 정보 로드 실패 시
- 응급 서랍 내 Sample 정보 로드 실패 시
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Sample Data Load Failed
- 내용 : Loading Error. Check device status and try again.

#### 3. 소모품 트롤리 1층 내 트레이 없음 알림 영역

- 노출 조건
- 도킹된 Consumables Trolley 1층에 Tray가 장착되어 있지
- 않은 경우
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : No Tray Detected On Trolley 1F (Consumable Trolley)
- 내용 : Please place an empty tray on trolley 1F and try again.

#### 4. 네트워크 연결 상태 알림 영역

- 노출 조건
- 전체 항목 중 1개 이상의 항목이 오프라인 상태일 경우 노출
- 모든 네트워크 항목이 온라인 상태일 경우, 해당 알림 미노출
- 알림 노출 시, 오프라인 항목뿐만 아니라 현재 온라인인 항목을
  - 포함한 전체 노출
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Network Status
- 내용 : Loading Error. Check device status and try again.
- 표출 항목
- 네트워크 유형
- 연결 상태(온라인 / 오프라인)

#### 4-1. 네트워크 유형

- 시스템에 등록된 네트워크 유형 노출
- Instrument, T-IOS, D.A PC

#### 4-2. 연결 상태

- 온라인 / 오프라인 상태 노출
- Instrument의 경우, 1대 이상 오프라인 시 오프라인 상태 노출

#### 5. 문 열림 상태 알림 영역

- 정의
- Module의 유리문 대상(Storage 및 Waste bin 문 제외)
- 노출 조건
- 전체 장비 중 1개 이상의 장비에 문상태가 Open일 경우 노출
- 전체 장비의 문 상태가 Closed일 경우 해당 알림 미노출
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Door Status
- 내용 : Please check the door open status of the module.
- 표출 항목
- 시스템에 등록된 Module명

#### 6. [확인] 버튼

- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

#### 7. [X] 버튼

- 클릭 시, 팝업이 닫힌 후 기존 화면 노출
