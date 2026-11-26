---
cid: TI-EVT-02-P
pair_cid: LI-EVT-02-P
tl_relation: 동일
title: Event Message Popup
path: -
type: Popup
version: 2.1.14
date: 2026.10.30
author: 서보경
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47691
---
# TI-EVT-02-P Event Message Popup

> 기존 화면(작업방 `Event History_asis` 페이지, Ver 2.1.14)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 화면 글자 · 디스크립션 1 ~ 12는 LI-EVT-02-P와 같음. 0 화면 정의만 다름(T는 Profile `Event notifications` 설정에 따라 노출, L은 노출 PC Type). Date가 T 2026.10.30 / L 2026.10.26. 기획 프레임 너비 1960(화면 1628 + 패널 332)
- 호출하는 화면: [LI-EVT-01-P] Event Detail Popup (9 [View Details], 원문 표기 그대로)
- 호출되는 곳: Event 발생 시 (0 화면 정의)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- 1/20 | Close All
- Event Code: E0203 | Type: Consumable
- Description / GANTRY Well Plate Expansion Operation Time Out Error
- < | >
- Effect / Failed to transfer Consumable to next Module / Failed to unload consumable from STARlet
- Recommended Action / Check GANTRY Well Plate Expansion Cylinder
- Module: High-throughput Extraction(1) | Unit: M9600
- Close | View Details

### 사용 컴포넌트

Description Number (12), Popup/Popup Middle Text (4), Popup/Resource (2), Icon/Popup Status (1)

### 디스크립션 (원문)

#### 0. 화면 정의

- Event가 발생 시, 화면에 표기되는 message popup이다.
- Profile에서 ‘Event notifications’ 설정에 따라 On일 경우 노출, Off일 경우 팝업메시지로 표시되지 않는다.
- [팝업 노출 정책]
- 노출 조건: 최초 로그인 이후 발생되는 메시지부터 노출되며, 여러 개 발생 시, 누적되어 팝업으로 동시에 노출됨
- 노출 형태: 여러 개의 팝업이 겹쳐서 화면에 표시됨
- [스크롤 케이스]
- 노출 되는 내용이 많을 경우, 줄임처리 하지 않고 모두 노출하는 방식으로 변경
- 최대 팝업 사이즈를 초과할 경우, 스크롤 적용(UI참고)

#### 1. Level

- 알람의 Level인 ‘Eorrer’, ‘warning’ 값 표기

#### 2. Code

- Event Code 표기

#### 3. Type

- Instrument, Inventory, Sample, System 중 해당되는 항목 표기

#### 4. Description

- 이벤트 내용 표기

#### 5. Effect

- Event Code에 연계된 Scenario Code의 ‘description’ 내용 표기
- 표기 방식
- 연계된 코드가 없는 경우, ‘-’ 표기
- N개인 경우, 목록형으로 기호를 표기하여 N개 표시(UI참고)
- 참고 문서명: [SRD] CURECA Prep 및 Dx 장비 Event 정의

#### 6. Recommended Action

- 조치 방법 내용 표기

#### 7. Module, Unit

- Event가 발생한 장비 정보를 표기

#### 8. [Close] 버튼

- 팝업 닫힘
- N개일 경우, 팝업이 닫히며 메시지 개수에서도 총 개수에서 제거되며 여러개 팝업 구조 리스트에서 제거됨

#### 9. [View Details] 버튼

- 해당 Event Detail Popup(LI-EVT-01-P)으로 이동
- N개일 경우, 해당 버튼 클릭 시 팝업이 모두 닫히며 이동됨

#### 10. [Close All] 버튼

- 노출 조건: Event Message Popup이 2개 이상일 경우 노출(1개일경우 미노출)
- 클릭 시, 화면에 떠있는 모든 Event Message Popup이 일괄 닫기 처리됨

#### 11. 메시지 개수 표기

- 노출 조건: Event Message Popup이 2개 이상일 경우 노출(1개일경우 미노출)
- 현재 보고 있는 메시지 순서 / 총 발생한 Event message 개수

#### 12. [< >]메시지 변경 버튼

- 클릭 시, 다음 메시지 또는 이전 메시지를 확인할 수 있음
- (close를 클릭 한 것이 아닌 이상, 확인했다고 사라지는 구조가 아니라 계속 존재하여 순서대로 선택하여 다시 확인할 수 있음)

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Event History_asis` 페이지에 TI-EVT-02-P 케이스 프레임 없음)
