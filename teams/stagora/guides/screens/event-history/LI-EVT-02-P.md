---
cid: LI-EVT-02-P
pair_cid: TI-EVT-02-P
tl_relation: 동일
title: Event Message Popup
path: (모든 화면 위)
type: Popup
version:       # 확인 필요 (질문 대기 Q1)
date:
author: 서보경
service_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: [POL-EVT-001, POL-EVT-003]
rules_version:
provisional: []
flags: []
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=2082-5981   # 테스트 (UX-AI-TEST Page 10)
---
# LI-EVT-02-P Event Message Popup

- T/L 차이: 노출 조건만 다름. L-IOS는 Main Mode · Console Mode일 때 노출, TSS Mode는 노출하지 않음 (POL-EVT-003 규칙 1)
- 호출하는 화면: [LI-EVT-01-P] Event History Detail ([View Details] 클릭 시)
- 호출되는 곳: Event가 생기면 지금 보고 있는 화면 위에 바로 노출

## 디스크립션

### 0. 화면 정의

- 화면 정의
  - Event가 발생하면 현재 화면 위에 표기되는 메시지 Popup이다.
  - 여러 개가 발생하면 누적되어 노출되며, 하나씩 선택해 확인할 수 있다.
- 진입점
  - 로그인 이후 발생한 Event부터 자동으로 노출
- User Type
  - Service, Admin, User
- Service Mode
  - Main Mode, Console Mode
- 정책 참고
  - POL-EVT-001, POL-EVT-003

### 1. Event 메시지

- 정의: 현재 선택한 Event의 내용 영역
- Common UX 참고: COMM-5-m
- 노출 항목
  - Level: Error 또는 Warning 표기
  - Code: Event Code 표기
  - Type: Instrument, Inventory, Sample, System 중 해당 항목 표기
  - Description: Event Code에 따라 정의된 Event 내용
  - Effect: Event Code에 연계된 Scenario Code의 설명. 연계된 코드가 없으면 '-' 표기, 여러 개면 목록형으로 표기
  - Recommended Action: Event Code에 따라 정의된 조치 방법
  - Module, Unit: Event가 발생한 Instrument 정보. 같은 Type의 Module이 2대 이상이면 번호와 함께 표기, Instrument와 관계없으면 '-' 표기
- 내용이 길면 줄이지 않고 모두 노출하며, Popup 최대 높이를 넘으면 스크롤

### 2. 메시지 개수

- 노출 조건: Event Message Popup이 2개 이상일 때 노출 (1개일 때 미노출)
- 현재 보고 있는 메시지 순서 / 전체 메시지 개수 표기 (예: 1 / 4)

### 3. [Close All]

- Common UX 참고: COMM-5-c
- 노출 조건: Event Message Popup이 2개 이상일 때 노출 (1개일 때 미노출)
- 클릭 시, 화면에 떠 있는 모든 Event Message Popup이 한 번에 닫힘

### 4. 메시지 목록

- 정의: 떠 있는 Event Message Popup을 오른쪽에 목록으로 보여 주는 영역
- Common UX 참고: COMM-5-m
- 노출 조건: Event Message Popup이 2개 이상일 때 노출 (1개일 때 미노출)
- 노출 항목: Level, Code, Description (1줄, 넘으면 '…' 표기)
- 5개까지 노출되며, 넘으면 목록 위 · 아래 버튼으로 이동
- 목록 선택 시, 1 영역에 해당 메시지가 노출되고 선택한 항목이 강조됨
- [Close]로 닫기 전까지는 목록에 계속 남아 있어, 다시 선택해 확인할 수 있음

### 5. [Close]

- Common UX 참고: COMM-5-c
- 클릭 시, 현재 보고 있는 메시지만 닫히고 전체 개수와 목록에서 제거됨

### 6. [View Details]

- Common UX 참고: COMM-5-c
- 클릭 시, 떠 있는 Event Message Popup이 모두 닫히고 [LI-EVT-01-P] Event History Detail로 이동

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 ~ 4 | | TI-EVT-02-P 화면 예시와 같음 | |

## 문구

| 번호 | 영어 문구 | 언어셋 ID | 최장 언어 · 표현 | 상태 (확정 / 번역 대기) |
| --- | --- | --- | --- | --- |
| 1 ~ 6 | TI-EVT-02-P 문구와 같음 | | | 확정 |

## 상태별 화면

| 상태 | 언제 | 화면에서 바뀌는 것 | 프레임 |
| --- | --- | --- | --- |
| 정상 · 빈 상태 | TI-EVT-02-P와 같음 | | LI-EVT-02-P |
| 로딩 · 비활성 · 오류 · 장비 이상 | 해당 없음 (TI-EVT-02-P와 같음) | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |
| | 없음 | | |

## 케이스

| # | 케이스 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | 메시지 1개 | TI-EVT-02-P와 같음 | 이번 테스트에서 그리지 않음 |

## 질문 대기

| # | 질문 | 걸린 번호 | 올린 곳 (PD · CA) |
| --- | --- | --- | --- |
| Q1 ~ Q3 | TI-EVT-02-P 질문 대기와 같음 | | |

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 정책 반영 | 0 "Main PC, 콘솔용 PC" | Service Mode로 표기: Main Mode, Console Mode (TSS Mode 제외) | POL-EVT-003, `policy/service-mode.md` | 반영 완료 (2026-11-06) |
| R02 | 디스크립션 | 3 Type "Instrument, Consumable, Reagent" | Instrument, Inventory, Sample, System | `glossary/status-values.csv` | 반영 완료 (2026-11-06) |
| R03 | 표기 | Eorrer, warning | Error, Warning | 오타 | 반영 완료 (2026-11-06) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | 다중 메시지 노출 정책 및 기능 추가 | 서보경 | Figma 버전 메모 |
| | 2026-11-06 | 신규 작업방 규칙으로 새로 그림 (테스트: UX-AI-TEST Page 10. 기존: 작업방 2.1 1차 영역 · Ver 2.1.01). R01 ~ R03 반영. Common UX 5-m(3/4) 모양으로 바꿈, Effect 더함 | 서보경 | 케이스 1, POL-EVT-001 · 003 |
| | 2026-11-06 | 디스크립션을 기존 작업방 원본(T · L 각각)을 다시 읽고 고객사 · 개발사가 읽는 말투로 다시 씀. 짝 화면 참조("원문은 …와 같음") 없앰 | 서보경 | 8절 "읽는 사람과 말투" |
