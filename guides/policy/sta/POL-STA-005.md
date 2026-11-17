---
id: POL-STA-005
title: Test Forecasting
summary: Forecast Range(1 Week, 2 Weeks, 1 Month)에 따라 어제 기준 과거 30·60·90일 데이터로 오늘부터의 검사 건수를 예측하고, 최종 예측일 기준 최대 60일을 먼저 보여 줌
domain: STA
menus: [Statistical Analysis]
cids: [TI-STA-05]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 통계 > 데이터 표출, TI-STA-05 디스크립션, 팀원 POL-STA-01, 2026-11-03 사용자 답변 (ST3, ST7)]
provisional: []
alerts: []
data: [glossary/test-items.csv]
replaced_by:
---
# POL-STA-005 Test Forecasting

## 정의

| Forecast Range | 쓰는 과거 데이터 (어제 기준) | 예측 기간 (오늘 포함) | Tooltip |
| --- | --- | --- | --- |
| 1 Week | 최근 30일 | 7일 | 7d Forecast based on 30d past data |
| 2 Weeks | 최근 60일 | 15일 | 15d Forecast based on 60d past data |
| 1 Month | 최근 90일 | 30일 | 30d Forecast based on 90d past data |

## 규칙

1. Forecast Range는 처음에 선택되어 있지 않으며, 하나를 골라야 함. Product는 All 또는 검사 항목 하나를 고르며 기본값은 All임.
2. [Apply]를 누르면 고른 조건을 모두 적용해 결과를 보여 줌. 조건을 고르기 전에는 예측 대상과 기간을 고르라는 안내 문구를 보여 줌.
3. 과거 데이터와 예측 데이터마다 Average(일 평균 검사 건수), Max(검사 건수가 가장 많은 날의 건수), Min(가장 적은 날의 건수)을 보여 줌.
4. Predicted Change는 과거 데이터 Average 대비 예측 데이터 Max를 %로 비교한 값임.
5. 차트는 최종 예측일 기준 최대 60일을 먼저 보여 주고, 그보다 앞선 과거 일자는 가로 스크롤로 봄. 오늘 날짜 라벨 아래에 (Today)를 표시함.
6. 과거 실제 검사 건수(Actual)는 실선 꺾은선과 세로 막대로, 예측 검사 건수(Forecast)는 점선 꺾은선과 세로 막대로 보여 줌.
7. 2 Weeks의 예측 기간은 15일임 (14일이 아님).
8. Product 목록은 Assay Pack으로 등록된 검사 항목 기준임 (POL-STA-003 규칙 9).
9. 예측 계산 방식(모델)은 UX 정책서에서 정의하지 않고 개발에서 관리함.

## 예외

없음

## 근거

- 정책서_2026.08.28 "데이터 표출" (예측 결과 표출 시 예측 데이터 기준 최대 60일 우선 노출)
- TI-STA-05 디스크립션 1, 1-1, 1-2, 2-1 ~ 2-4, 3-2, 3-3
- 2026-11-03 사용자 답변 (ST3, ST7, ST7-a)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-STA-01 일부) | |
| | 2026-11-03 | 2 Weeks 예측 기간 15일, Product 목록은 Assay Pack 등록 검사 항목 (ST7, ST3) | 사용자 답변 |
| | 2026-11-03 | 예측 모델은 개발 관리 (ST7-a) | 사용자 답변 |
