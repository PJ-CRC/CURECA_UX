---
id: POL-SMP-009
title: Today’s Orders와 검사 진행률
summary: Today’s Orders는 Test Cut-off Time 기준 하루의 오더를 Pending, In Progress, Completed로 나눠 세고, Test Status 진행률은 완료와 실패를 합쳐 계산함
domain: SMP
menus: [Dashboard, Dashboard (All), Test Management]
cids: [TI-DAS, LI-DAS, TI-ADS, TI-TMG-02, LI-TMG-02]
status: 확정
version:
date: 2026-11-02
sources: [TI-DAS 디스크립션 1 (Ver 2.1.14), TI-TMG-02 디스크립션 2-3·3-3]
provisional: []
alerts: []
data: [glossary/status-values.csv]
replaced_by:
---
# POL-SMP-009 Today’s Orders와 검사 진행률

## 정의

| 항목 | 셈하는 Sample |
| --- | --- |
| Orders | LIS로 받은 오더 수의 합 (오늘 받은 검사) |
| Pending | Ordered + Not Tested |
| In Progress | Ready + Running |
| Completed | Completed + Failed |

## 규칙

1. "오늘"은 Test Cut-off Time 기준이며, Cut-off Time이 되면 Today’s Orders를 새로 셈 (POL-TST-002).
2. Dashboard (All)의 총 Today’s Orders는 각 CURECA의 Today’s Orders를 더한 값임 (POL-COM-005).
3. Test Status의 단계별 진행률(%) = (완료 + 실패) ÷ 총 검사 수량 × 100. 앞 단계에서 Failed나 Not Tested가 된 검사는 다음 단계의 분모에서 뺌.

## 예외

없음

## 근거

- TI-DAS 디스크립션 1, TI-ADS 디스크립션 2, TI-TMG-02 디스크립션 2-3·3-3

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
