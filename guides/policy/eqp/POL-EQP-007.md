---
id: POL-EQP-007
title: 경광등
summary: 경광등은 장비 통합 상태와 Event에 따라 색과 점멸이 바뀌며, 여러 색이 겹치면 Red, Yellow, Blue, Green 순으로 우선함
domain: EQP
menus: []
cids: []
status: 확정
version:
date: 2026-11-02
sources: [씨젠 상태 정보 261021 > 경광등 시나리오]
provisional: []
alerts: []
data: [policy/warning-light.csv]
replaced_by:
---
# POL-EQP-007 경광등

## 정의

- 경광등: CURECA 위의 상태 표시등. 화면이 아니라 Instrument 하드웨어임.
- 경우별 색과 점멸 26가지는 `policy/warning-light.csv`가 기준임 (규격 EN 60204-1:2018).

## 규칙

1. 경광등은 장비 통합 상태와 Event에 따라 색과 점멸이 바뀜.
2. 점멸 주기: Green Blink는 2초 켜짐·2초 꺼짐, Blue·Yellow·Red Blink는 1초 켜짐·1초 꺼짐.
3. 여러 색이 겹치면 우선순위가 높은 색을 표시함: Red > Yellow > Blue > Green
4. 장비 통합 상태 앞 단계인 Power Off는 Lamp Off, Booting은 White로 표시함. 이 두 단계는 화면에는 나오지 않음.

## 예외

없음

## 근거

- 씨젠 상태 정보 261021 > 경광등 시나리오

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (8월 정책서에 없음) | |
