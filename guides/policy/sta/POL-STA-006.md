---
id: POL-STA-006
title: Instrument, Inventory, Event 통계 산출
summary: Run-time Trend와 Error Rate Trend는 Instrument 정책의 산출 기준을, Usage & Cost Trend는 Inventory Usage History와 Cost Setting 단가를, Event Trend는 조회 기간의 Error·Warning Event 수를 씀
domain: STA
menus: [Statistical Analysis]
cids: [TI-STA-05-01, TI-STA-05-02, TI-STA-06-01, TI-STA-06-02, TI-STA-07-01, TI-STA-07-02, TI-STA-08-01, TI-STA-08-02]
status: 확정
version:
date: 2026-11-02
sources: [TI-STA-05-01·06-01·07-01·08-01 디스크립션, POL-EQP-005, POL-EQP-010, POL-TST-003, POL-EVT-001, 2026-11-03 사용자 답변 (ST8, ST9, ST10)]
provisional: []
alerts: []
data: [glossary/status-values.csv, glossary/modules.csv, glossary/module-units.csv]
replaced_by:
---
# POL-STA-006 Instrument, Inventory, Event 통계 산출

## 정의

| 지표 | 산출 기준 | 단위 |
| --- | --- | --- |
| Run-time Trend | Module 또는 Unit의 상태가 Running인 시간의 합 (POL-EQP-005) | hour |
| Error Rate Trend (Cumulative) | 선택한 조회 기간 동안 Legend 항목별 누적 Error Rate. Error Rate 산출에 쓰는 횟수는 POL-EQP-010 정의의 Module별 기준으로 셈 | % |
| Usage & Cost Trend | Inventory Usage History와 같은 이력. Instrument가 Consumable·Reagent를 쓰고 폐기한 시점에 Barcode, Usage, Date/Time 단위로 남긴 행 | 사용량, 비용 |
| Event Trend | 조회 기간 안에 생긴 Event 중 Event Level이 Error, Warning인 것의 수. Event Status(Open, Closed)와 관계없이 셈 | count |

## 규칙

1. Run-time Trend는 시간(h) 단위로 보여 주고 분은 버림 (POL-EQP-005 규칙 4).
2. Run-time Trend와 Error Rate Trend는 Module 또는 Unit별로 보여 주며, Run-time Trend는 선택한 항목의 합계(Total)를 맨 앞에 보여 줌.
3. Error Rate Trend는 User Type이 Service일 때만 보여 줌 (POL-STA-001 규칙 2).
4. Usage & Cost Trend는 사용량 합(Total Usage)을 세로 막대로, 비용 합(Total Cost)을 꺾은선으로 함께 보여 줌. 비용은 Cost Setting에 입력한 단가로 계산하고 통화는 Cost Setting에서 고른 통화를 따름 (POL-TST-003 규칙 1).
5. Event Trend는 Event Type(Instrument, Inventory, Sample, System) 또는 Module별로 보여 주며, 선택한 항목의 합계(Total)를 맨 앞에 보여 줌. Error와 Warning은 나누지 않고 합계로 보여 줌. Module 기준으로 볼 때 Module이 없는 Event(System 등)는 빼고 보여 줌.
6. Error Rate 산출에 쓰는 횟수는 화면의 "DWP 입고마다 +1"이 아니라 Module마다 다른 기준(POL-EQP-010 정의)으로 셈.
7. Usage & Cost Trend에서 Cost Setting에 단가가 없는 Consumable·Reagent는 Legend에서 고를 수 없도록 비활성으로 보여 줌.
8. Usage & Cost Trend의 사용량 단위는 count임. 품목별 세부 단위(예: sets, ea)는 Tooltip이나 Table에서 보여 줌.
9. Error Rate Table의 Total 행은 행의 비율을 더하지 않고, 선택한 조회 기간에 선택한 Module 전체의 실패 횟수 합을 전체 횟수 합으로 나눠 계산함 (POL-EQP-010 정의의 횟수, 선택한 Module 전체의 Error Rate).

## 예외

없음

## 근거

- TI-STA-05-01 0 "가동 시간 = 상태가 Running 중인 시간의 총합", POL-EQP-005
- TI-STA-06-01 0 산출식, 1 노출 조건, POL-EQP-010
- TI-STA-07-01 0 "Inventory > Usage history와 동일", 3·3-5, v2.1.14 "Cost Setting 입력 값에 따른 데이터 노출 조건"
- TI-STA-08-01 0 "이벤트 발생 건수 = 조회 기간 내 발생한 Error, Warning 건수의 총합", 5
- 2026-11-03 사용자 답변 (ST8, ST8-a, ST9, ST10)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
| | 2026-11-03 | Error Rate Module별 기준과 Legend별 누적, Event Trend 집계 기준, Usage & Cost 단가 없는 품목 비활성과 count 단위 (ST8, ST9, ST10) | 사용자 답변 |
| | 2026-11-03 | Error Rate Table Total 행 산출식 (ST8-a) | 사용자 답변 |
