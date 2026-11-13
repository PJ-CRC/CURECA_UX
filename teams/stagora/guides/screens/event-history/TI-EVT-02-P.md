---
cid: TI-EVT-02-P
pair_cid: LI-EVT-02-P
tl_relation: 동일
title: Event Message Popup
path: (모든 화면 위)
type: Popup
version:       # 확인 필요 (질문 대기 Q1)
date:
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: [POL-EVT-001, POL-EVT-003]
rules_version:
provisional: []
flags: []
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=2082-5670   # 테스트 (UX-AI-TEST Page 10)
---
# TI-EVT-02-P Event Message Popup

- T/L 차이: 노출 조건만 다름. T-IOS는 Profile > General의 Event notifications가 On일 때, L-IOS는 Main Mode · Console Mode일 때 (POL-EVT-003 규칙 1 · 2)
- 호출하는 화면: [TI-EVT-01-P] Event History Detail ([View Details] 클릭 시)
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
- 노출 조건
  - Profile > General의 Event notifications가 On일 때 노출 (기본값: On)
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
- 클릭 시, 떠 있는 Event Message Popup이 모두 닫히고 [TI-EVT-01-P] Event History Detail로 이동

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 2 | 메시지 개수 | 1 / 4 | 썸네일 4개 예시 |
| 1 | Level · Code · Type | Error · ER-6210 · Instrument | `status-values.csv`, Code는 지어 씀 |
| 1 | Description | Partial module failure detected in M9600. System functionality may be limited until the faulty module is repaired. | 기존 화면 글을 다듬어 씀 |
| 1 | Effect | Nucleic acid extraction stopped for the current plate. | 지어 씀 |
| 1 | Recommended Action | Check the M9600 device. | 기존 화면 |
| 1 | Module · Unit | High-throughput Extraction (1) · M9600 | `module-units.csv` |
| 4 | 썸네일 | ER-6210 / WR-5423 Consumables are low. / ER-5231 Pick Up Fail / WR-7001 D.A PC connection is unstable. | TI-EVT-P 화면 예시 |

## 문구

| 번호 | 영어 문구 | 언어셋 ID | 최장 언어 · 표현 | 상태 (확정 / 번역 대기) |
| --- | --- | --- | --- | --- |
| 1 | Effect, Recommended Action, Module, Unit | | | 확정 |
| 2 · 3 | Event, Close All | | | 확정 |
| 5 · 6 | Close, View Details | | | 확정 |

## 상태별 화면

| 상태 | 언제 | 화면에서 바뀌는 것 | 프레임 |
| --- | --- | --- | --- |
| 정상 | 메시지 2개 이상 | 기획 프레임 (2 · 3 · 4 노출) | TI-EVT-02-P |
| 로딩 | 해당 없음 | | |
| 비활성 | 해당 없음 | | |
| 오류 | 해당 없음 | | |
| 빈 상태 | 메시지 1개 | 2 · 3 · 4 미노출 | 이번 테스트에서 그리지 않음 |
| 장비 이상 | 해당 없음: 이 팝업 자체가 장비 이상을 알림 | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |
| | 없음 | | |

## 케이스

| # | 케이스 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | 메시지 1개 | 메시지가 하나뿐 | 이번 테스트에서 그리지 않음 |

## 질문 대기

| # | 질문 | 걸린 번호 | 올린 곳 (PD · CA) |
| --- | --- | --- | --- |
| Q1 | 이번 작업의 Ver | 머리말 | 요청자 |
| Q2 | Effect를 팝업에 넣는 것을 정책(POL-EVT-003)에 더할지 (MT-20261026-01 요청) | 1 | 요청자 |
| Q3 | 썸네일 목록이 생겨 기존 [< >] 이동 버튼을 뺌. 맞는지 | 4 | 요청자 |

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 정책 반영 | 0 "Profile에 추가 예정, 지금은 모두 노출" | Profile > General의 Event notifications(On이면 노출, 기본 On)로 정리 | POL-EVT-003, TI-CPW-01-P (v2.1.11) | 반영 완료 (2026-11-06) |
| R02 | 디스크립션 | 3 Type "Instrument, Consumable, Reagent" | Instrument, Inventory, Sample, System | `glossary/status-values.csv` | 반영 완료 (2026-11-06) |
| R03 | 디스크립션 | 8 "Event Detail Popup(LI-EVT-01-P)" | TI-EVT-01-P | IA | 반영 완료 (2026-11-06) |
| R04 | 표기 | Eorrer, warning, High-throughput Extraction(1) | Error, Warning, High-throughput Extraction (1) | 오타, 이름 (번호) | 반영 완료 (2026-11-06) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | 신규 팝업 추가 | 서보경 | Figma 버전 메모 |
| | 2026-11-06 | 신규 작업방 규칙으로 새로 그림 (테스트: UX-AI-TEST Page 10. 기존: 작업방 2.1 1차 영역 · Ver 2.1.01). R01 ~ R04 반영. Common UX 5-m(3/4) Event Stacked Popup 모양(썸네일 목록)으로 바꾸고 [< >]를 뺌, Effect 더함 | 서보경 | 케이스 1, POL-EVT-001 · 003, COMM-5-m(3/4) |
| | 2026-11-06 | 디스크립션을 기존 작업방 원본(T · L 각각)을 다시 읽고 고객사 · 개발사가 읽는 말투로 다시 씀. 짝 화면 참조("원문은 …와 같음") 없앰 | 서보경 | 8절 "읽는 사람과 말투" |
