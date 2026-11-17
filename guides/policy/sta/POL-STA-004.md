---
id: POL-STA-004
title: Test Analytics 지표 산출
summary: Test Count는 검사 항목별 검사 건수, Test Ratio는 그 비율(정수 %), Test TAT는 검사 소요 시간의 합계, Test Cost는 Cost Setting 단가로 계산한 검사 항목별 평균 비용이며, 단가가 빠진 검사 항목은 차트에서 빼고 Legend 칩을 비활성으로 보여 줌
domain: STA
menus: [Statistical Analysis]
cids: [TI-STA-01-01, TI-STA-01-02, TI-STA-02-01, TI-STA-02-02, TI-STA-03-01, TI-STA-03-02, TI-STA-04-01, TI-STA-04-02]
status: 확정
version:
date: 2026-11-02
sources: [TI-STA-01-01·01-02·02-01·02-02·03-01·03-02·04-01·04-02 디스크립션, 정책서_Test Policy > Cost Setting, POL-TST-003, 2026-11-03 사용자 답변 (ST5, ST6, ST11)]
provisional: []
alerts: []
data: [glossary/test-items.csv]
replaced_by:
---
# POL-STA-004 Test Analytics 지표 산출

## 정의

| 지표 | 내용 | 단위·표기 |
| --- | --- | --- |
| Test Count | 조회 기간 안의 검사 항목별 검사 건수. 오더 기준으로 세며 Completed, Failed와 관계없이 모두 셈 | count |
| Test Ratio | 선택한 검사 항목의 검사 건수 합에서 각 검사 항목이 차지하는 비율 | 비율%(건수) |
| Test TAT | 실제 검사에 걸린 시간(Turnaround Time)의 합계. Sample 하나의 TAT는 Start Date/Time부터 End Date/Time까지 (POL-SMP-002). 평균이 아님. Test Count와 함께 보여 줌 | hour, 소수점 첫째 자리 |
| Test Cost | 검사 항목별 평균 비용. 계산식은 개발에서 정함 | Cost Setting에서 고른 통화. KRW는 소수점을 보여 주지 않음 |

## 규칙

1. 요약 표의 Total 열은 선택한 검사 항목의 조회 기간 합계이며 첫 번째 열에 고정함.
2. Test Ratio는 검사 항목마다 비율%(건수)로, Total은 100%(총 건수)로 보여 줌. 비율은 소수점 아래를 반올림한 정수(%)로 보여 줌. 0%보다 크고 0.5%보다 작으면 "<1%"로 보여 주고, 실제 0건일 때만 0%로 보여 줌. 예: 0%(0), <1%(3), 12%(4,830).
3. Test TAT 화면은 Test TAT와 Test Count 두 지표를 함께 보여 줌.
4. Test Cost는 Cost Setting에 입력한 단가로 계산함 (POL-TST-003 규칙 4). 통화는 Cost Setting에서 고른 통화를 따름 (POL-TST-003 규칙 1).
5. 검사 항목에 매핑된 필수 Consumable·Reagent 중 단가가 하나라도 없으면, 그 검사 항목은 차트에서 빼고 Legend 칩도 비활성으로 보여 줌.
6. 평균 비용 계산식은 UX 정책서에서 정의하지 않고 개발에서 관리함.

## 예외

없음

## 근거

- TI-STA-01-01 0·2, TI-STA-02-01 2, TI-STA-02-02 2-2, TI-STA-03-01 0·2, TI-STA-03-02 2-2, TI-STA-04-01 0 (v2.1.14) 디스크립션
- 정책서_Test Policy "Cost Setting" (설정된 단가는 Test Analytics 메뉴의 Test Cost 통계에 사용)
- 2026-11-03 사용자 답변 (ST5, ST5-a, ST6, ST11)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
| | 2026-11-03 | TAT는 합계, Ratio 반올림 정수와 <1%, KRW 소수점 없음, 단가 없는 항목 제외·칩 비활성, 평균 비용 계산식은 개발 관리 (ST5, ST6, ST11) | 사용자 답변 |
| | 2026-11-03 | TAT는 Sample Start ~ End Date/Time, 검사 건수는 오더 기준으로 Completed·Failed 모두 셈 (ST5-a) | 사용자 답변 |
