---
cid: LI-INS-01-P
pair_cid:
tl_relation: 단독
title: Door Control Popup
path: Instrument > Overview Tab > Door Control Popup
type: Popup
version: 2.1.17
date: 2026.11.13
author: 이상헌
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-337511
---
# LI-INS-01-P Door Control Popup

> 기존 화면(작업방 `Instrument_asis` 페이지, Ver 2.1.17)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS 단독 팝업 (IA에 T 짝 없음)
- 호출하는 화면: 확인 팝업 (2-5 Running 상태에서 Unlock), Confirm_031 (2-5 문이 열린 채 [Lock])
- 호출되는 곳: [LI-INS-01-T] Overview Tab 6 Unlock 버튼, Dashboard [LI-DAS] 5-2 [Unlock]

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- Door Control | Sample Storage | Unlock all doors
- Sample Pre-treatment (1) | Paused
  - Door (Left) | Open | Lock | Close the door, then press Lock to lock it.
  - Door (Right) | Closed | Unlock
- 예시)안내문구 노출영역 - 자세한 내역은 하단케이스 참고필요
- Close the door and press the 'Lock' button to resume the module

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
- 변경: 문을 닫아도 자동으로 잠기지 않음. [Lock] 버튼을 눌러야 Door가 잠김 (Door 단위, 기존: 닫고 5초 후 자동 Lock)

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
- [Lock] 클릭으로 Door가 Locked가 되면 Module 상태값도 함께 갱신됨 (기존 자동 Lock 후 장비 재시작(Running) 흐름을 [Lock] 클릭 기준으로 적용)

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

#### 2-5. [Unlock] / [Lock] 버튼

- Door Unlock이 즉시 가능한 케이스
- Module 상태가 ‘Ready, Error, Paused’일 경우, Unlock을 클릭할 경우 즉시 해제가 되어 문을 열 수 있음
- Door Unlock이 즉시 불가능한 케이스
- Module 상태가 Running일 경우, Unlock 버튼 클릭 시 → 현재 작업을 마무리한 후 Unlock 진행
- Unlock 클릭 → 확인 팝업 → Pausing 상태로 전환 → Paused 상태가 된 이후 Unlock 진행 → 도어 오픈 가능
- Door Unlock이 불가능한 케이스
- [Unlock] 버튼이 Disabled 상태로 제공됨(하단 내역 참고)
- 상태 갱신: Door가 Unlocked 상태가 되면 버튼이 [Lock]으로 바뀜 (기존 “Unlocked” Disabled 표기 대신)
- [Lock] 버튼: Lock Status가 Unlocked일 때 표시
- 클릭 시 해당 Door를 즉시 잠금(Locked) → 버튼은 [Unlock]으로 바뀜
- [Lock] 버튼은 늘 활성(Enabled) 상태로 표시 (Unlock과 같은 Filled 스타일)
- Door가 Open인 상태에서 [Lock] 클릭 시 문 닫기 안내 팝업 Confirm_031(“Please close the door.”) 노출, [OK] 클릭 시 닫힘 · Door는 Unlocked 유지 (하단 케이스 참고)
- 자동 잠금 없음: 문을 닫아도 잠기지 않으며, [Lock]을 눌러야 잠김 (기존: 닫고 5초 후 자동 Lock)
- **자세한 내역은 아래 케이스 내역을 반드시 참고 부탁드립니다.

#### 2-6. 안내 문구

- 문을 닫은 뒤 [Lock] 버튼을 눌러야 잠긴다는 내용을 안내하는 문구 (기존: 닫고 5초 후 자동 Lock 안내)
- [안내 문구 변경 됨]

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

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `LI-INS-01-P`([3543:337614](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-337614), 2676×3142) 안에 `case` 띠로 있습니다. 원본에 Case 번호가 없습니다.

| Case | 제목 (원문 `case` 띠) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | Door control Door Unlock Open 상태값 정의 | 상태값 정의 그림 | 위 프레임 (0, 0) |
| - | 통합 상태가 Running, Partial Running일 때, Door Unlock이 불가능한 케이스 (= Flexible Extraction, PCR Setup, Universal PCR) | 통합 상태 Running · Partial Running | 위 프레임 (1472, 0) |
| - | 통합 상태가 Running, Partial Running일 때 및 모듈 Running 상태일 때 Button 노출 케이스 (해당 케이스 = Sample Pre-treatment, Ht Extraction, Sample Storage, Consumable Storage) | 모듈 Running에서 Unlock | 위 프레임 (0, 419) |
| - | 통합 상태가 Running이면서 모듈 상태가 Ruuning일 때, 해당 모듈과 연관된 Module도 함께 Paused 되는 케이스 / 위와 케이스만 같고 알럿 메시지만 다르게 적용 (해당 케이스 = Plate Sealing) - Plate Sealing 내 cold storage 접근이 불가하여 PCR Setup module도 함께 일시정지 됨) | Plate Sealing Unlock | 위 프레임 (0, 1092) |
| - | 통합 상태가 Running 또는 Partial Running일 경우, Unlock all doors 버튼 disabled) | 통합 상태 Running · Partial Running | 위 프레임 (0, 1582) |
| - | 통합 상태가 Ready, Paused, Error 상태일 경우, Unlock all doors 버튼 사용 가능 | 통합 상태 Ready · Paused · Error | 위 프레임 (0, 2516) |
| - | Door가 Open인 상태에서 [Lock] 클릭 시, 문을 닫아달라는 안내 팝업 노출 | 문이 열린 채 [Lock] | 위 프레임 (860, 2516) |

- Unlock 불가 케이스: Universal PCR (2) | Running | Door | Closed | Unlock | `Cannot unlock while the system is running.` — 설명 `Unlock이 불가한 Door는 Unlock 버튼 Disabled처리 되며, 아래에 ‘Cannot unlock while the system is running.’ 문구 표기`
- 변경 메모: `변경: [Unlock] 클릭 → Pausing → Paused → 문 닫기 → [Lock] 클릭 → Lock됨 → 장비 재시작(Running) (문을 닫아도 자동 Lock 안 됨)`
- 모듈 Running에서 Unlock (Sample Pre-treatment (1), Door (Upper) · (Lower) · (Rear))
  - Door (Rear) 문의 Unlock 클릭 — 세 Door 모두 Unlock, `Cannot unlock while the system is running.`
  - 일시 정지 되는 안내 및 계속 진행것인지 묻는 알럿 — Confirm `Do you want to continue?` / `Finishing current task, then pausing. Once paused, the lock will be released and the door can be opened manually.` / Cancel | Continue
  - 알럿에서 Countiue 선택 시, 해당 클릭한 Door의 버튼이 Disabled 상태로 변경되며 아래에 메시지 노출 — Pausing, Door (Rear) `Pausing for door unlocking. Please wait.`
  - Paused가 완료되면 해당 Door는 Unlocked가 되어 Lock 해제가 되며, 나머지 2개 도어는 이미 모듈이 Paused가 된 상태라 disabled된 버튼이 enabled 상태로 변경됨 — Paused, Door (Rear) Lock `Close the door and press Lock. The module will resume once locked.`
- Plate Sealing 케이스 알럿: `Do you want to continue?` / `Finishing current task, then pausing. For safety, PCR Setup Module will also pause. Lock will release and door can be opened.` / Cancel | Continue
- Unlock all doors disabled 케이스 (팝업 3개)
  - Sample Storage: (1) Paused · Door (Left) Open Lock `Close the door and press Lock. The module will resume once locked.` · Door (Right) Closed Unlock `Cannot unlock while the system is running.` / (2) Running · Door (Left) · (Right) Closed Unlock `Cannot unlock while the module is running.`
  - Universal PCR: (1) Ready · (2) Running · (3) Error — 모두 Door Closed Unlock `Cannot unlock while the system is running.`
  - Sample Pre-treatment: (1) Running · (2) Pausing (Door (Rear) `Pausing for door unlocking. Please wait.`) · (3) Paused (Door (Rear) Lock `Close the door and press Lock. The module will resume once locked.`)
  - 공통 하단 문구 `Close the door and press the 'Lock' button to resume the module`, 설명 `Door Lock Status가 1개라도 Unlocked 상태이면 장비 상태가 Paused로 변경됨.`
- Unlock all doors 사용 가능 케이스: Consumable Storage — (1) Ready · Door Closed Unlock `Close the door, then press Lock to lock it.` / (2) Ready · Door Closed Unlock `Cannot unlock while the module is running.`
- 문이 열린 채 [Lock] 케이스: `Confirm_031 · Close the door` 팝업 `Please close the door.` / `The door is open. Close the door, then press Lock again.` / OK — 설명 `Door가 Open(Unlocked)일 때 [Lock] 클릭 → 문 닫기 안내 팝업 Alert_048 / [OK] 클릭 시 팝업 닫힘, Door는 Unlocked 그대로 / 문을 닫은 뒤 [Lock]을 다시 눌러야 잠김`
