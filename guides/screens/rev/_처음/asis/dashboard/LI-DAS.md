---
cid: LI-DAS
pair_cid: TI-DAS
tl_relation: 기능 추가
title: Dashboard
path: Dashboard
type: Page
version: 2.1.14
date: 2026-10-30
author: 서보경
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-60365
figma_region: 2.1 2차
---
# LI-DAS Dashboard

> 기존 화면(기존 작업방 Dashboard 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: TI-DAS에 더해 CURECA 구동 컨트롤러([Initialize], [Stop], 4-1)와 Instrument Status의 Door Control(5-2)이 있음
- L-IOS Client Mode: Initialize, Stop, Door Control은 Main Mode, Console Mode만 (`policy/client-mode-matrix.csv`)
- 관련 정책: POL-EQP-001, POL-EQP-002, POL-EQP-003, POL-EQP-004, POL-EQP-008, POL-SMP-001, POL-SMP-004, POL-SMP-009
- 호출하는 화면: Door Control Popup (LI-INS-01-P)
- 참조 프레임: [SB_Dashboard Info](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5136-326036)

## 기존 화면

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | LIOS
- (LNB) Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Today’s Orders: Orders | Pending | In Progress | Completed
- Test Status | More
- CURECA 구동 컨트롤러: Running | Initialize | Stop
- Inventory Status | More: Insufficient | Low 탭, 목록은 TI-DAS와 같음 (Reagent 수량 예 "270 rxns (3 sets)")
- Instrument Status | More: TI-DAS와 같고 Module Type마다 Door control 버튼이 있음
- Waste Bin/Bottle Status: TI-DAS와 같음

### 사용 컴포넌트

Frame/Instrument_Status (32), Tag Status (16), Description (15), Description Number (13), Square (8), Table/Filled Table Cell (8), Interface/Plus (4), Icon/Alert Error (3), Title (3), Button/Tertiary XSmall (1), Tooltip (1)

### 디스크립션 (원문)

#### 0 ~ 4

- 원문은 TI-DAS 0 ~ 4와 같음

#### 4-1. CURECA 구동 컨트롤러

- 장비를 초기화 또는 중단하는 버튼으로 구성되어 있음
- 버튼 액션
- Dashboard Info 내 정의된 [CURECA 구동 컨트롤러] 및 [구동 프로세스] 참고하여 구현 필요
- 기능 활성화 조건
- 공통 UX 참고 : COMM-3-a

#### 5 ~ 5-1

- 원문은 TI-DAS 5 ~ 5-1과 같음

#### 5-2. [Unlock] 버튼 (L-IOS Only)

- 버튼 클릭 시, Door Control 팝업 제공(CID: LI-INS-01-P)
- 기능 활성화 조건
- 공통 UX 참고 : COMM-3-a

#### 5-3. Event 표기 영역

- 원문은 TI-DAS 5-2와 같음

#### 6 ~ 7-1

- 원문은 TI-DAS 6 ~ 7-1과 같음

### 참조 프레임: Dashboard Info (원문 요약)

- CURECA 구동 컨트롤러 표: 버튼명 / 내용 / 클릭 조건(버튼 활성화) / UX action
  - Initialize: 장비를 초기화 하는 버튼으로 클릭 시, 장비 초기화가 진행됨 / 전원 인가 후 초기화가 완료되지 않은 경우(Not Initialized 상태) / 초기화 진행 상태를 로딩/진행바로 표시, 모든 기능 사용 제한, 완료 시 ‘준비 완료’ 상태로 전환 및 완료 안내 표시
  - Stop: 진행 중인 검사를 중단(폐기)하고 Initializing을 거쳐 Ready 상태로 전환됨 / 장비가 구동 중인 상태일 때(Running, Patial Running), 그 외 상태값일 때는 버튼 비활성화 / 장비 중지 진행 상태 표시 및 팝업으로 중지 중 로딩/진행바로 표시, 모든 기능 일시 제한, 완료 시 ‘준비 완료’ 상태로 자동 전환 및 안내 표시
- Inventory status 영역 및 Waste Bin/Bottle Status 영역 노출 케이스: "Shown only if system running or Inbound Trolley docked", "No actions required" 화면 예시
- 화면 정보 칸(Ver 0.1, Date 2026.00.00, CID text)은 비어 있음
