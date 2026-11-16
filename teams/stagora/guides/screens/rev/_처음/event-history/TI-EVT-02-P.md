---
cid: TI-EVT-02-P
pair_cid: LI-EVT-02-P
tl_relation: 동일
title: Event Message Popup
path: Event History > Event Message
type: Popup
version: 2.1.01
date: 2026-08-07
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5655-640452
figma_region: 2.1 1차
---
# TI-EVT-02-P Event Message Popup

> 기존 화면(작업방 Event History 페이지, 2.1 1차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 2차 영역에는 이 화면이 없습니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 노출 조건만 다름 (T-IOS는 Profile의 Event notifications, L-IOS는 Main PC·Console PC)
- 관련 정책: POL-EVT-001, POL-EVT-003

## 기존 화면

### 화면 글자

- 1/20 | Close All
- E0203
- [Instrument] Partial module failure detected within M9600 equipment. System functionality may be limited until the faulty modules are repaired. / Recommended Action: Check M9600 Device
- < >
- Module: High-throughput Extraction(1) Unit: M9600
- Close | View Details

### 디스크립션 (원문)

#### 0. 화면 정의

- Event가 발생 시, 화면에 표기되는 message popup이다.
- Profile(기능 추가 예정)에서 ‘이벤트 메시지 보기(가칭)’ 설정에 따라 노출되거나 미노출된다.(현재는 해당 메뉴가 없으나 9월 설계에 추가될 예정)
- 현재 8월 기획 버전에서는 설정없이 모두 노출되는 구조로 진행
- [팝업 노출 정책]
- 노출 조건: 최초 로그인 이후 발생되는 메시지부터 노출되며, 여러 개 발생 시, 누적되어 팝업으로 동시에 노출됨
- 노출 형태: 여러 개의 팝업이 겹쳐서 화면에 표시됨

#### 1. Level

- 알람의 Level인 ‘Eorrer’, ‘warning’ 값 표기

#### 2. Code

- 이벤트 Code 표기

#### 3. Type

- Instrument, Consumable, Reagent 중 해당되는 항목 표기

#### 4. Description

- 이벤트 내용 표기

#### 5. Recommended Action

- 조치 방법 내용 표기

#### 6. Module, Unit

- Event가 발생한 장비 정보를 표기

#### 7. [Close] 버튼

- 팝업 닫힘
- N개일 경우, 팝업이 닫히며 메시지 개수에서도 총 개수에서 제거되며 여러개 팝업 구조 리스트에서 제거됨

#### 8. [View Details] 버튼

- 해당 Event Detail Popup(LI-EVT-01-P)으로 이동
- N개일 경우, 해당 버튼 클릭 시 팝업이 모두 닫히며 이동됨

#### 9. [Close All] 버튼

- 노출 조건: Event Message Popup이 2개 이상일 경우 노출(1개일경우 미노출)
- 클릭 시, 화면에 떠있는 모든 Event Message Popup이 일괄 닫기 처리됨

#### 10. 메시지 개수 표기

- 노출 조건: Event Message Popup이 2개 이상일 경우 노출(1개일경우 미노출)
- 현재 보고 있는 메시지 순서 / 총 발생한 Event message 개수

#### 11. [< >]메시지 변경 버튼

- 클릭 시, 다음 메시지 또는 이전 메시지를 확인할 수 있음
- (close를 클릭 한 것이 아닌 이상, 확인했다고 사라지는 구조가 아니라 계속 존재하여 순서대로 선택하여 다시 확인할 수 있음)

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 정책 반영 | 0 "Profile에 추가 예정, 지금은 모두 노출" | Profile > General의 Event notifications(On이면 노출, 기본 On)로 정리 | POL-EVT-003, TI-CPW-01-P (v2.1.11) | 대기 |
| R02 | 디스크립션 | 3 Type "Instrument, Consumable, Reagent" | Instrument, Inventory, Sample, System | `glossary/status-values.csv` | 대기 |
| R03 | 디스크립션 | 8 "Event Detail Popup(LI-EVT-01-P)" | TI-EVT-01-P | IA | 대기 |
| R04 | 표기 | Eorrer, warning, High-throughput Extraction(1) | Error, Warning, High-throughput Extraction (1) | 오타, 이름 (번호) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | 신규 팝업 추가 | 서보경 | Figma 버전 메모 |
