---
id: POL-EVT-001
title: Event 구분과 표시
summary: Event는 Level(Warning, Error), Status(Open, Closed), Type(Instrument, Inventory, Sample, System)으로 나뉘며, 화면의 Event 개수는 Open만 셈
domain: EVT
menus: [Event History, Instruments, Dashboard]
cids: [TI-EVT-P, LI-EVT-P, TI-EVT-01-P, LI-EVT-01-P, TI-EVT-02-P, LI-EVT-02-P, TI-INS-01-T, LI-INS-01-T, TI-INS-02-T, LI-INS-02-T, TI-DAS, LI-DAS, TI-STA-08-01, TI-STA-08-02]
status: 확정
version:
date: 2026-11-02
sources: [씨젠 상태 정보 261021 > 이벤트 정보, 정책서_2026.08.28 > Event, System, 사용자 및 권한, TI-EVT-01-P 디스크립션 (Ver 2.1.14), TI-INS-01-T 디스크립션 (Ver 2.1.06)]
provisional: []
alerts: []
data: [glossary/status-values.csv]
replaced_by:
---
# POL-EVT-001 Event 구분과 표시

## 정의

- Event: Instrument·Inventory·Sample·System에서 생긴 경고 또는 오류 기록
- Level, Status, Type의 값과 정의는 `glossary/status-values.csv`의 Event Level·Status·Type 행이 기준임

| 구분 | 값 |
| --- | --- |
| Level | Warning (Run은 계속할 수 있으나 사용자의 인지나 예방 조치가 필요) / Error (Run을 할 수 없거나 Run이 중단됨) |
| Status | Open (확인·처리 전) / Closed (확인·처리됨) |
| Type | Instrument / Inventory / Sample / System |

- Event 항목: Event ID, Event Code, Description, Effect, Recommended Action, Level, Status, Type, Occurred Date/Time, Module·Unit·Process

## 규칙

1. Event가 생기면 Status는 Open임.
2. Event ID는 Event가 생길 때 시스템이 순서대로 붙이는 고유 값이며 중복되지 않음.
3. Description과 Recommended Action은 Event Code에 따라 정해진 내용을 보여 줌. Effect는 Event Code에 연결된 Scenario Code의 설명을 보여 주며, 연결된 코드가 없으면 '-', 여러 개면 목록으로 보여 줌.
4. Event가 Module 단위에서만 의미 있으면 Unit은 '-', Instrument와 관계없는 Event면 Module·Unit·Process를 모두 '-'로 보여 줌.
5. 화면에 보여 주는 Event 개수(Instruments, Dashboard, Event History 목록 요약 등)는 Status가 Open인 Event만 셈.
6. Event를 한 건만 보여 주는 영역(Instruments의 Event Tooltip 등)은 Status가 Open인 Event 중 가장 최근 것을 보여 줌.
7. Event Code별 Description, Effect, Recommended Action과 Scenario Code의 값은 고객이 Instrument 개발사와 함께 관리하는 문서(엑셀)에서 정해지며, CURECA 소프트웨어는 받은 값을 그대로 보여 줌. UX 정책에서는 값을 정하지 않고 Event Code와 Scenario Code의 관계만 정함.

## 예외

없음

## 근거

- 씨젠 상태 정보 261021 > 이벤트 정보 (Level, Status, Type 정의)
- Event Type은 화면 Ver 2.1.01에서 Instrument, Inventory, Sample, System으로 바뀜 (예전: Instrument, Consumable, Reagent, Waste Bin/bottle, System)
- Event Code별 Description·Effect·Recommended Action 값은 고객이 Instrument 개발사와 관리하는 문서(예: 씨젠 "[SRD] CURECA Prep 및 Dx 장비 Event 정의")를 따르며 이 저장소에서 관리하지 않음 (2026-11-02 사용자 확인). Event Code와 Scenario Code 관계는 TI-EVT-01-P 디스크립션 1 (Effect)
- Teams 글 2026-11-06 T02: Event Code 1 : Scenario Code N. Event Code는 지금처럼 한 건으로 목록에 생기고, 화면에는 Scenario Code를 보이지 않고 Effect 영역에 내용만 보여 줌 (규칙 3과 같음)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SYS-03) | |
| | 2026-11-02 | 값의 관리 주체와 Event Code·Scenario Code 관계 정리 (규칙 7) | |
| | 2026-11-02 | 관련 CID에 Statistical Analysis 화면 추가 (POL-STA-006) | |
