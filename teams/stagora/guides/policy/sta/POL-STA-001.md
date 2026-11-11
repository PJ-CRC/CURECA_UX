---
id: POL-STA-001
title: Statistical Analysis 화면 구성과 접근
summary: Statistical Analysis는 T-IOS에서만 보이고 모든 User Type이 볼 수 있으며, Error Rate Trend Tab만 Service에게 보여 줌
domain: STA
menus: [Statistical Analysis]
cids: [TI-STA-01-01, TI-STA-01-02, TI-STA-02-01, TI-STA-02-02, TI-STA-03-01, TI-STA-03-02, TI-STA-04-01, TI-STA-04-02, TI-STA-05-01, TI-STA-05-02, TI-STA-06-01, TI-STA-06-02, TI-STA-07-01, TI-STA-07-02, TI-STA-08-01, TI-STA-08-02, TI-STA-05]
status: 확정
version:
date: 2026-11-02
sources: [TI-STA-01-01·05-01·06-01·07-01·08-01·05 디스크립션, policy/permission-matrix.csv (2026-10-30 결정), POL-EQP-010, 2026-11-03 사용자 답변 (ST1)]
provisional: []
alerts: []
data: [policy/permission-matrix.csv]
replaced_by:
---
# POL-STA-001 Statistical Analysis 화면 구성과 접근

## 정의

| 화면 묶음 | 지표 (Key Metrics 또는 Tab) | View |
| --- | --- | --- |
| Test Analytics | Test Count, Test Ratio, Test TAT, Test Cost | Chart, Table |
| Instrument | Run-time Trend, Error Rate Trend | Chart, Table |
| Inventory | Usage & Cost Trend | Chart, Table |
| Event | Event Trend | Chart, Table |
| Test Forecasting | (지표 하나) | Chart |

## 규칙

1. Statistical Analysis의 중메뉴는 Test Analytics, Instrument, Inventory, Event, Test Forecasting임 (Figma 기준). IA는 수정 요청 중 (`ia/change-requests.md` 1~4).
2. Statistical Analysis는 T-IOS에서만 보이며, Service, Admin, User 모두 볼 수 있음.
3. Error Rate Trend Tab은 User Type이 Service일 때만 보여 줌 (POL-EQP-010 규칙 5).
4. 지표는 하나만 고름. Test Analytics에 들어오면 Test Count, Instrument·Inventory·Event에 들어오면 첫 번째 Tab이 선택됨.
5. View는 Chart와 Table 중 하나를 고름. 처음에는 Chart가 선택됨.
6. Instrument, Inventory, Event 화면은 처음 들어와 데이터를 불러오는 동안 Skeleton 화면을 보여 줌.

## 예외

- Test Forecasting의 CID는 IA 수정 후 TI-STA-05에서 TI-STA-09로 바뀜. 그때까지 정책과 화면 MD는 TI-STA-05를 씀 (`ia/change-requests.md` 2)

## 근거

- `policy/permission-matrix.csv` Statistical Analysis (2026-10-30 결정)
- TI-STA-06-01 디스크립션 1 "Error Rate Trend는 Account Type이 Sevice일 경우만 노출", POL-EQP-010 규칙 5
- TI-STA-01-01 6, 6-3, TI-STA-05-01 0·1·2 디스크립션
- 2026-11-03 사용자 답변 (ST1): 중메뉴 Test Analytics / Instrument / Inventory / Event, Test Forecasting CID는 TI-STA-09, 사용량 통계 메뉴 이름은 Inventory

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
| | 2026-11-03 | 중메뉴 구조 정함, Test Forecasting CID 변경 예정 (ST1) | 사용자 답변 |
