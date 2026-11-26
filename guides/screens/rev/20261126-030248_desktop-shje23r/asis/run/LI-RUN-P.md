---
cid: LI-RUN-P
pair_cid:
tl_relation: 단독
title: Run Preparation Popup
path: LNB > RUN / Dashboard > RUN
type: Popup
version: 2.1.17
date: 2026.11.13
author: 정다예
client_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-79280
---
# LI-RUN-P Run Preparation Popup

> 기존 화면(작업방 `Run_asis` 페이지, Ver 2.1.17)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS 단독 화면 (IA에 T 짝 없음)
- 호출하는 화면: (원문에 없음. 7 [확인] · 8 [X]는 팝업 닫고 기존 화면 유지)
- 호출되는 곳: LNB > RUN, Dashboard > RUN (패널 경로)
- 관련 정책: POL-EQP-003 (Run, Quick Start 버튼), POL-SMP-007, POL-LOD-001

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- Notifications Before Run Preparation
- Please check all of the items below and run it again.
- Sample Data Load Failed
- Loading Error. Check device status and try again.
- Consumable Trolley Not Detected
- The trolley is not docked or has no data. Please check and try again.
- No Tray Detected On Trolley 1F (Consumable Trolley)
- Please place an empty tray on trolley 1F and try again.
- Network Status
- Please check the network status.
- Instrument | T-IOS | D.A PC
- Door Status
- Please check the door open status of the module.
- Module
- High-throughput Extraction
- Flexible Extraction(3)
- Universal PCR
- OK

### 사용 컴포넌트

Description Number (10), Icon/instrument (4), Table (4), Table/Filled Table  Cell (3), Popup/Popup Middle Text (2), Interface/Check_Circle_Outlined (2), Square (1), Icon/Popup Status (1), Icon/Connect (1), Interface/Close_Circle_Outlined (1), Interface/Close (1)

### 디스크립션 (원문)

#### 0. Run 실행 불가 팝업

- 노출 조건
- 하위 항목 중 1개 이상 문제가 있을 경우 팝업 노출
- 미노출 조건
- 모든 항목이 AND 조건으로 만족할 경우 미노출
- 표출 항목
- Sample 정보 로드 실패 알림
- 소모품 트롤리 감지 실패 알림
- 소모품 트롤리 1층 트레이 없음 알림
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

#### 3. 소모품 트롤리 감지 실패 알림 영역

- 노출 조건
- Consumables Trolley가 도킹되지 않은 경우
- Consumables Trolley 도킹 시 읽어온 소모품 데이터가 없는 경우
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Consumable Trolley Not Detected
- 내용 : The trolley is not docked or has no data. Please check and try again.

#### 4. 소모품 트롤리 1층 내 트레이 없음 알림 영역

- 노출 조건
- 도킹된 Consumables Trolley에서 소모품 데이터를 읽어온 상태에서,1층에 Tray가 장착되어 있지 않은 경우
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : No Tray Detected On Trolley 1F (Consumable Trolley)
- 내용 : Please place an empty tray on trolley 1F and try again.

#### 5. 네트워크 연결 상태 알림 영역

- 노출 조건
- 전체 항목 중 1개 이상의 항목이 오프라인 상태일 경우 노출
- 모든 네트워크 항목이 온라인 상태일 경우, 해당 알림 미노출
- 알림 노출 시, 오프라인 항목뿐만 아니라 현재 온라인인 항목을 포함한 전체 노출
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Network Status
- 내용 : Loading Error. Check device status and try again.
- 표출 항목
- 네트워크 유형
- 연결 상태(온라인 / 오프라인)

#### 5-1. 네트워크 유형

- 시스템에 등록된 네트워크 유형 노출
- Instrument, T-IOS, D.A PC

#### 5-2. 연결 상태

- 온라인 / 오프라인 상태 노출
- Instrument의 경우, 1대 이상 오프라인 시 오프라인 상태 노출

#### 6. 문 열림 상태 알림 영역

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

#### 7. [확인] 버튼

- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

#### 8. [X] 버튼

- 클릭 시, 팝업이 닫힌 후 기존 화면 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Run_asis` 페이지에 LI-RUN-P 케이스 프레임 없음)
