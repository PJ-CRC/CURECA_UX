# 장비 상태 정의서

> 상태: 초안 v0.3 (2026-11-02).
> 출처: 씨젠 "CURECA 시스템 구성 요소 및 상태 정보" 261021 (원본 `reference/customer/system-status/`)이 1차 출처입니다. Common UX 최종본 V2.2.00의 COMM-4-a(2/4)~(4/4)는 이 문서를 옮긴 것이고, 화면 동작은 작업방 화면 디스크립션과 정책서_2026.08.28에서 모았습니다.

화면 흐름을 점검하는 기준 자료입니다(헌법 8조). 상태값의 이름과 표기는 [glossary/status-values.csv](../glossary/status-values.csv)에 있고, 이 문서는 상태가 바뀌는 조건과 상태별로 할 수 있는 일을 정합니다.

## 1. 상태 구조

| 단계 | 대상 | 상태값 |
| --- | --- | --- |
| 장비 통합 상태 | CURECA 전체 | Not Initialized / Initializing / Ready / Running / Partial Running / Stopping / Paused / Error |
| 장비 모듈 상태 | Module | Not Initialized / Initializing / Ready / Running / Stopping / Pausing / Paused / Error |
| 검사 장치 상태 | Device Unit | Ready / Running / Error |
| Unit Type별 상태 | Door, Storage, Waste Bin/Bottle Unit | 도어 잠금, 도어 열림, 저장 장치 도킹, 폐기함/폐액통 상태 |

장비 통합 상태는 Module 상태들을 모아 정해집니다(4절).

이 문서가 다루는 상태는 CURECA Status(장비 자체의 상태)입니다. Sample·Plate·검사 배치, 재고, 시약 만료, 폐기함, 이벤트 같은 System Status(소프트웨어가 관리하는 상태)는 상태값 표의 분류 칸으로 구분합니다.

## 2. 장비 통합 상태별 화면 동작

| 상태 | 언제 | 화면 동작 |
| --- | --- | --- |
| Not Initialized | 전원 인가 후 초기화가 완료되지 않음 | 초기화 필요 안내 팝업. 초기화 관련 메뉴만 접근 가능(그 외 메뉴 비활성화). 초기화 완료 후 정상 이용 |
| Initializing | 초기화 프로세스 실행 | 초기화 진행 상태를 로딩/진행바로 표시. 모든 기능 사용 제한. 완료 시 자동으로 Ready로 전환하고 완료 안내 |
| Ready | 초기화, 중지 완료 또는 작업 종료 후 | 모든 기능 사용 가능. 작업 시작(검사 등) 버튼 활성화 |
| Running | 작업(검사) 시작 | 중지(Stop) 기능 제공 |
| Partial Running | Run 중에 Module 1대 이상이 Running이면서, 1대 이상이 Error 또는 Paused(Pausing 포함) | Run은 계속되지만 확인이 필요한 Module이 있다는 신호. 모두 정상으로 동작하는 것이 아니므로 사용자가 해당 Module을 확인해야 함. 중지(Stop) 기능 제공 (2026-10-30 확인) |
| Stopping | 사용자가 Stop 버튼을 누름. 일부 Module이 아니라 전체 장비가 멈춤 | 중지 진행 상태를 팝업의 로딩/진행바로 표시. 모든 기능 일시 제한. 완료 시 Ready로 자동 전환하고 안내 |
| Paused | 가동 중 일부 Module이 Paused이고 Running Module이 없음 | 사용자가 Door 잠금을 해제했거나, 열려 있는 서랍형 Storage에 Module이 접근해야 해서 멈춘 상태. 장비 고장이 아니므로 Error가 아님 (5절 "Pausing과 Paused") |
| Error | Module 상태에 따라 (4절) | 상황별로 다름 |

## 3. 구동 버튼

| 버튼 | 하는 일 | 활성 조건 | 화면 동작 |
| --- | --- | --- | --- |
| Initialize | 장비 초기화 | Not Initialized | 초기화 진행바 표시, 모든 기능 사용 제한, 완료 시 Ready로 전환하고 안내 |
| Stop | 진행 중인 검사를 중단(폐기)하고 Initializing을 거쳐 Ready로 전환 | Running, Partial Running. 그 외 비활성 | 중지 진행바 팝업, 모든 기능 일시 제한, 완료 시 Ready로 자동 전환하고 안내 |
| Run | 검사 실행 | Ready, Running, Partial Running | Run Preparation 페이지로 이동 |
| Quick Start | Run Preparation 3~4단계 대신 요약 팝업 하나만 확인하고 검사 실행 | Ready, Running, Partial Running | Quick Start 팝업 |

## 4. 장비 통합 상태 전환 조건

[integrated-state-transitions.csv](integrated-state-transitions.csv)에 21개 전환을 정리했습니다(출처: 씨젠 상태 정보 261021 > 장비 통합 상태 처리 조건). 이전 통합 상태, 트리거, Module 상태 조건, 전환 후 상태가 있습니다.

- **Run 완료 조건:** Prep와 Dx 시스템에 할당된 모든 Sample의 검사가 끝나고, 결과가 D.A PC를 통해 T-IOS로 모두 전달되면 Run이 완료된 것으로 봅니다. 최종 판단은 L-IOS가 합니다.
- Run 완료 전에는 모든 Module이 Ready여도 장비 통합 상태는 Running을 유지합니다.
- 통신 단절이나 프로그램 자체 오류가 나면 어느 상태에서든 즉시 Error가 됩니다.

## 5. Door 잠금 해제

### 장비 통합 상태별 허용

| 장비 통합 상태 | 검사 진행 중 | Door 개방 |
| --- | --- | --- |
| Not Initialized | X | 허용 |
| Initializing | X | 불가 |
| Ready | X | 허용 |
| Running | O | 조건부 허용 |
| Partial Running | O | 조건부 허용 |
| Stopping | O | 불가 |
| Paused | O | 조건부 허용 |
| Error | X | 허용 |
| Error | O | 조건부 허용 |

### 조건부 허용 Module과 Door

| Module | Door | 사용자 작업 | 비고 |
| --- | --- | --- | --- |
| Sample Storage | Door (Left) | 투입 Trolley 교체 | |
| Sample Storage | Door (Right) | 회수 Trolley 교체 | |
| Prep Consumable Storage | Door | Consumable Trolley 교체 | |
| Sample Preparation | Door (Rear) (단디메카) | Waste Bin 비우기 | |
| Sample Preparation | Door (로체시스템즈) | Waste Bin 비우기 | |
| High-throughput Extraction | Door | DWP Film Waste Bin 비우기 | 표준형 장비만. 맞춤형 장비(재단)는 DWP Film Waste Bin이 서랍형이라 Door를 열지 않아도 되므로 가동 중 Door 개방을 허용하지 않음 |
| Plate Sealing | Door | Sealer Film 보충, Sealer Waste Bin 비우기 | PCR Setup과 물리적 간섭 가능성이 있어 두 Module 상태를 함께 확인(AND). 둘 중 하나라도 Running에서 개방을 요청하면 두 Module 모두 Paused로 바꾼 뒤 개방 허용 |

이 표에 없는 Module(Flexible Extraction, PCR Setup, Universal PCR)은 Running, Partial Running 중 Door 잠금 해제가 불가하며, 화면에 "Cannot unlock while the system is running."을 표시합니다(Instrument 화면).

### 규칙

- Door 잠금 해제는 사용자가 L-IOS의 [Unlock] 버튼으로 요청합니다(Door Control 팝업, LI-INS-01-P).
- [Unlock all doors]는 장비 통합 상태가 Ready, Error, Paused, Not Initialized일 때만 활성화됩니다(2026-10-30 확인).
- Module이 Running일 때 잠금 해제를 요청하면, 진행 중인 작업 단위를 마친 뒤 해제합니다. 그동안 Module 상태는 Pausing입니다.
- Door 잠금이 해제되면 그 Module은 Paused가 됩니다. 검사 진행 중이 아닐 때도 같고, Door가 여러 개인 Module은 하나라도 해제되면 Paused입니다 (2026-11-02 확인, POL-EQP-004).
- Door가 닫히고 5초 뒤 자동으로 잠기고, Paused였던 Module은 다시 가동합니다(LI-INS-01-P 안내 문구).

### Pausing과 Paused (2026-10-30 확인)

장비 고장이 아니라 사용자의 동작 때문에 Module이 잠시 멈추는 경우입니다. 그래서 Error가 아니라 Paused로 표시합니다.

| 경우 | 흐름 |
| --- | --- |
| Running 중인 Module의 Door를 열어야 할 때 | Door Control에서 [Unlock] → 확인 Alert("Do you want to continue?")에서 Continue → Module이 Pausing (현재 작업을 마치는 중, "Pausing for door unlocking. Please wait.") → 작업이 끝나면 Paused, Door Unlocked → 사용자가 Door를 엶 |
| Plate Sealing의 Door를 열 때 | 위와 같고, PCR Setup Module도 함께 Paused가 됨 ("For safety, PCR Setup Module will also pause.") |
| DX 장비의 서랍형 Storage가 열려 있는데 Module이 그 Storage에 접근해야 할 때 | Running 중에도 서랍형 Storage는 언제든 열 수 있고, 연다고 바로 Paused가 되지는 않음. Module 안의 Device가 Consumable을 다 쓰고 다시 채우려고 로봇팔이 그 Storage에 접근했을 때 서랍이 열려 있으면 그때 Paused가 됨. 서랍이 닫히면 이어서 진행 |

- 지금까지 Pausing이 생기는 경우는 Door Control의 Unlock이 유일합니다.
- 출처: Instrument 화면 Door Control 팝업 [LI-INS-01-P](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/1-2.-CURECA_%EA%B8%B0%ED%9A%8D-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9E%91%EC%97%85%EB%B0%A9-Part.2-?node-id=4961-83155), 2026-10-30 사용자 설명

## 6. 출처끼리 맞지 않거나 비어 있는 것

| # | 내용 | 처리 |
| --- | --- | --- |
| 1 | COMM-4-a의 Partial Running "UX action"이 Stopping과 같은 문장임 | 2026-11-02 확인: 복사 실수. 2절대로 Run 중 확인이 필요한 Module이 있다는 신호. Common UX 수정 요청 (`common-ux/feedback.md`) |
| 2 | COMM-4-a의 Paused "발생 Case", "UX action"이 비어 있음 ("-") | 2026-11-02 확인: 5절 "Pausing과 Paused". Common UX 수정 요청 |
| 3 | [Unlock all doors] 활성 조건: Instrument 화면 한 곳은 "Ready, Error, Paused, Not Initialized", Door Control 팝업(LI-INS-01-P)은 "Ready, Paused, Error" | 2026-11-02 확인: Ready, Error, Paused, Not Initialized. LI-INS-01-P 문구는 화면 정정 대상 |
| 4 | 검사 장치 상태 Ready의 코드명: COMM-4-a(3/4)는 `Idle`, 사용자 제공 표는 `Ready` | 2026-11-02 확인: 코드명은 Common UX처럼 `Idle`을 유지하고, UI 표기만 Ready |
| 5 | Connected / Disconnected: COMM-4-a(3/4)는 Module 단위, Instrument 화면 Device 영역은 Device 단위 | 2026-11-02 확인: Module과 Device Unit 둘 다 연결 상태가 있음 |
| 6 | Dashboard v2.1.06 변경 이력에 "Door의 Closed 상태값 제거" | 2026-11-02 확인: 상태값은 그대로. Dashboard는 공간이 부족해 Closed인 Door의 개수만 표시하지 않음 |
| 7 | 정책서의 Session Timeout은 "Idle(Ready), Not Initialized일 때만 적용" | Idle은 Ready로 읽음 (2026-10-30 결정) |
| 8 | 정책서의 종료 옵션: "Running 또는 Error일 때 프로그램 종료·시스템 종료 불가". Common UX에는 상태 조건이 없음 | 2026-11-02 확인: 정책서가 맞음. 정책서 정제 때 반영 (`policy/policy-backlog.md`) |
| 9 | Door Control 팝업(LI-INS-01-P)의 같은 뜻 문구가 두 가지: "Locks automatically 5 seconds after the door is closed." / "The door will be automatically locked 5 seconds after it is closed.", "Cannot unlock while the module is running." / "Cannot unlock while the system is running." | 화면 정정 대상 (알럿 카탈로그 정리 때 하나로) |

## 7. 상태별 제한 (화면 디스크립션에서 모음)

| 기능 | 조건 | 출처 |
| --- | --- | --- |
| Restore from Backup | (v2.1.03에서 기능 제거, POL-SYS-004) | TI/LI-STN-02 |
| 검사 정책 설정 배너의 기능 버튼 | Not Initialized, Ready가 아니면 비활성 | Setting 화면 |
| Protocol 추가·변경·수정·삭제 | Run 중 불가 | 정책서 Protocol 정책 |
| Run Start | Run 준비 단계에 만료된 Reagent가 있으면 불가 (Run 중 만료되면 그대로 진행) | 정책서 |
| Session Timeout | Ready, Not Initialized일 때만 적용 | 정책서 |
| 프로그램 종료·시스템 종료 | 장비 통합 상태가 Running, Error일 때 불가 | 정책서, 2026-11-02 확인 |

## 8. 경광등

장비 통합 상태와 Event에 따라 경광등 색과 점멸이 바뀝니다. 전체 26가지 경우는 [warning-light.csv](warning-light.csv)에 있습니다(출처: 씨젠 상태 정보 261021 > 경광등 시나리오, 규격 EN 60204-1:2018).

| 점멸 | ON | OFF |
| --- | --- | --- |
| Green Blink | 2초 | 2초 |
| Blue Blink | 1초 | 1초 |
| Yellow Blink | 1초 | 1초 |
| Red Blink | 1초 | 1초 |

- 여러 색이 겹치면 우선순위가 높은 색을 표시합니다: Red(1) > Yellow(2) > Blue(3) > Green(4)
- 경광등 시나리오에는 장비 통합 상태 앞 단계인 Power Off(Lamp Off)와 Booting(White)이 있습니다. 화면에는 나오지 않는 상태입니다.
- 주요 경우: Ready에서 Sample Trolley가 도킹됐거나 STAT에 Sample이 있는데 Consumable이 부족하면 Blue Blink, Running 중 Storage나 Waste Bin이 열리면 Blue Blink, Running 중 Module이 Paused가 되면 Yellow Blink
