---
cid: LI-INS-01-P
pair_cid:
tl_relation: 단독
title: Door Control Popup
path: Instruments > Overview > Door Control
type: Popup
version: 2.1.06
date: 2026-09-28
author: 서보경
service_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: [PV-0001]
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3878-152475
figma_region: 2.1 1차
---
# LI-INS-01-P Door Control Popup

> 기존 화면(작업방 Instruments 페이지, 2.1 1차 영역, Ver 2.1.06)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- 호출 위치: Instruments Overview(LI-INS-01-T), Instruments All(LI-INS-02-T), Material Setup > Load Materials, Empty Waste Bin (`ia/ia-screens.csv`)
- 관련 정책: POL-EQP-004, POL-EQP-008 / 임시 정책 PV-0001, POL-LOD-001
- 다른 프레임: [Door Control 케이스 화면](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=4961-83155) (장비 통합 상태별 케이스)

- 취소선(Figma에서 제거된 항목): 0 정책의 "기존: Module 상태값에 따른 Door Lock해제를 할 수 있음."

## 기존 화면

### 화면 글자

- Door Control
- Sample Storage | Unlock all doors
- Sample Preparation (1) | Paused
- Door (Left) | Open | Unlocked
- Locks automatically 5 seconds after the door is closed.
- Door (Right) | Closed | Unlock
- 예시)안내문구 노출영역 - 자세한 내역은 하단케이스 참고필요
- The door will be automatically locked 5 seconds after it is closed.

### 사용 컴포넌트

Description Number (10), Square (3), Frame/Instrument_Status (1), Interface/Lock_Off_Solid (1), Interface/Lock_On_Solid (1)

### 디스크립션 (원문)

#### 0. L-IOS Only

- 팝업 정의
- 외부 유리문 잠금 해제를 수행하기 위한 팝업 화면이다. 동일 모듈 타입 기준으로 복수 모듈에 대한 잠금 해제를 처리할 수 있는 구조로 제공된다. 모달 형태로 화면이 오버레이되어 표시된다.
- 정책
- 기존: Module 상태값에 따른 Door Lock해제를 할 수 있음.
- 변경: 통합 상태에 따라 Lcok 해제를 할 수 있음.
- Unlock 1개라도 해당 되면 Module의 상태값은 Paused로 변경됨

#### 1. Module type

- 사용자가 선택하여 들어온 Module의 type명을 화면 상단에 표기

#### 2. Module별 영역

- 정의: 동일한 type에 속하는 Module들이 목록 형태로 나열됨
- 표기 방식
- 각 Module은 index 기준으로 구분되어 개별 영역으로 표시
- 일정 개수 이상이 나열되어 화면 영역을 초과할 경우, 우측에 스크롤이 생성되어 전체 Module을 확인 가능(아래 디자인 참고)
- 제어 방식: Door 상태는 Module(index) 단위로 제어됨

#### 2-1. Module 상태값

- 각 Module 해당 시점의 상태값이 표시됨
- 최초 진입시, 사용자가 해당 Module을 클릭하여 들어온 순간의 상태값이 그대로 표기
- 상태 업데이트
- Unlock 버튼 또는 Unlock all doors 버튼 클릭 시 → Door가 Unlocked로 변경되면서 Module 상태값도 함께 갱신됨
- Running 상태에서 Unlock을 클릭할 경우 → Module 상태가 Running에서 Pausing으로 전환됨
- 즉, Door 제어 이벤트가 발생하면 Module 상태값도 동기화되어 업데이트됨

#### 2-2. Door Unit Name

- 해당 Module에서 제공되는 Door Unit의 이름이 표시됨
- Door Unit은 목록형으로 나열되며, Module이 가진 Door 개수에 따라 표시 개수가 달라짐
- 데이터 구조
- Door 데이터는 고정된 구조가 아니라, Module 정보에 따라 달라짐. 동일한 Module type이라도 제조사별로 Door Unit 개수가 다를 수 있음
- Door 데이터는 Module 정의 정보(CURECA 시스템 구성 요소 및 상태 정보 문서 등)를 참고하여 구현 필요

#### 2-3. Door Status

- Door의 열림(Open) / 닫힘(Closed) 상태값이 표기됨
- 상태 업데이트는 제어 이벤트가 발생되면 그에 맞춰 해당 상태값도 동기화되어 업데이트됨

#### 2-4. Door Lock Status 아이콘

- 각 Door Unit 옆에 자물쇠 아이콘으로 값이 표시됨
- Door의 Lock 상태와 아이콘이 실시간으로 연동됨
- Locked 상태 → 닫힌 자물쇠 아이콘
- Unlocked 상태 → 열린 자물쇠 아이콘

#### 2-5. [Unlock] 버튼

- Door Unlock이 즉시 가능한 케이스
- Module 상태가 ‘Ready, Error, Paused’일 경우, Unlock을 클릭할 경우 즉시 해제가 되어 문을 열 수 있음
- Door Unlock이 즉시 불가능한 케이스
- Module 상태가 Running일 경우, Unlock 버튼 클릭 시 → 현재 작업을 마무리한 후 Unlock 진행
- Unlock 클릭 → 확인 팝업 → Pausing 상태로 전환 → Paused 상태가 된 이후 Unlock 진행 → 도어 오픈 가능
- Door Unlock이 불가능한 케이스
- [Unlock] 버튼이 Disabled 상태로 제공됨(하단 내역 참고)
- 상태 갱신: Module의 Door가 Unlock 상태가 되면 버튼 라벨이 “Unlocked”로 변경됨
- **자세한 내역은 아래 케이스 내역을 반드시 참고 부탁드립니다.

#### 2-6. 안내 문구

- 사용자가 문을 닫고 5초 후 자동으로 Lock이 되는 내용을 안내하는 문구

#### 2-7. Door Unit 영역 내 안내문구(하단 케이스 화면 페이지 참고)

- 각 상황별로 Door Unit 영역 하단에 안내 문구가 노출됨
- 통합 상태가 Running 또는 Partial Running일 경우에 Unlock이 불가능한 케이스
- "Cannot unlock while the system is running." 문구 노출
- Module 상태가 Running일 때 사용자가 Unlock을 클릭하면, 해당 Module이 Pausing 상태로 전환되는 케이스
- “Pausing for door unlocking. Please wait.” Pausing 상태로 전환되는 순간에 맞춰 안내 문구 노출

#### 3. [Unlock all doors] 버튼

- 사용 조건
- 통합 상태가 ‘Ready, Error, Paused, Not Initialized’일 경우에만 버튼 활성화
- 그 외 상태값일 때는 버튼이 Disabled 처리되어 클릭 불가
- 동작 방식
- 버튼 클릭 시, 선택된 type에 속하는 모든 Module의 Door Lock 상태가 Unlocked로 변경됨
- Door가 Unlocked로 변경되면 해당 Module의 상태값은 Paused로 전환됨
- [Unlock all doors] 버튼 자체는 Disabled 처리되지 않고 계속 표시됨
- [X] 닫기 버튼
- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | Section 17 메모 "통합 상태가 Ready, Paused, Error 상태일 경우, Unlock all doors 버튼 사용 가능" | 장비 통합 상태가 Ready, Error, Paused, Not Initialized일 때 활성화 (디스크립션 3은 이미 맞음) | POL-EQP-008, 2026-11-02 확인 | 대기 |
| R02 | 문구 | "Locks automatically 5 seconds after the door is closed." / "The door will be automatically locked 5 seconds after it is closed." 두 가지 | 하나로 통일 | `archive/glossary/review-v0.md` 화면 정정 대상 추가 | 대기 |
| R03 | 문구 | "Cannot unlock while the module is running." / "Cannot unlock while the system is running." 두 가지 | 쓰임을 구분하거나 하나로 통일 | 같음 | 대기 |
| R04 | 알럿 | 확인 문구 "Do you want to continue? Finishing current task, then pausing…" | 알럿 관리 페이지 Confirm_008 ("Unlock the door?")과 다름. 어느 쪽이 맞는지 확인 후 통일 | `policy/alert-catalog.md` 3절 | 대기 (확인 필요) |
| R05 | 디스크립션 | Ruuning, Lcok | Running, Lock | 오타 | 대기 |
| R06 | 정책 반영 | Lock 버튼 없음 (다시 잠그는 기능 없음) | 디스크립션에 Door를 닫으면 5초 뒤 자동 잠금, Run Start 때 Unlocked Door 자동 잠금을 정책 ID로 참조 | POL-EQP-008 | 대기 |
| R07 | 디스크립션 | 0·3 "Unlock 1개라도 해당 되면 Module의 상태값은 Paused로 변경됨" | 뜻은 맞음 (장비 통합 상태와 관계없이 Door 잠금이 해제되면 Paused, Door가 여러 개인 Module은 하나라도 해제되면 Paused). 이 뜻이 드러나게 문장 정리 | POL-EQP-004 규칙 1·2, 2026-11-02 확인 | 대기 |
| R08 | 디스크립션 | 2-5가 장비 모듈 상태(Ready, Error, Paused) 기준, 0은 통합 상태 기준 | 장비 통합 상태별 허용과 조건부 허용 Module 기준으로 통일 | POL-EQP-008 | 대기 |
| R09 | 정책 반영 | Run 중 잠금 해제 후 Door를 열지 않은 경우의 동작이 없음 | 디스크립션에 넣음: 임시 정책 PV-0001 (Run 중 잠금 해제 후 Door를 열지 않으면 Paused 유지). 화면에 "임시 정책 포함" 표시 | PV-0001 (적용한 화면), POL-EQP-008 | 대기 (임시 정책 적용 예정) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.06 | 2026-09-28 | 정책 변경에 따른 UX/UI 변경 | 서보경 | Figma 버전 메모 |
