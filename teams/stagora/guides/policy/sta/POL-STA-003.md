---
id: POL-STA-003
title: 통계 필터, Legend, Table, Export 공통
summary: 지표를 바꾸면 Filter Options를 기본값으로 다시 불러오고, Legend는 기본으로 모두 선택하며, Table과 Export는 모든 통계 화면이 같은 규칙을 씀
domain: STA
menus: [Statistical Analysis]
cids: [TI-STA-01-01, TI-STA-01-02, TI-STA-02-01, TI-STA-02-02, TI-STA-03-01, TI-STA-03-02, TI-STA-04-01, TI-STA-04-02, TI-STA-05-01, TI-STA-05-02, TI-STA-06-01, TI-STA-06-02, TI-STA-07-01, TI-STA-07-02, TI-STA-08-01, TI-STA-08-02]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 통계 > 데이터 표출, TI-STA-01-01·01-02·05-01·07-01·08-01 디스크립션, 팀원 POL-STA-01, 2026-11-03 사용자 답변 (ST3, ST4, ST11)]
provisional: []
alerts: []
data: [glossary/status-values.csv]
replaced_by:
---
# POL-STA-003 통계 필터, Legend, Table, Export 공통

## 정의

| 화면 묶음 | Legend 구분 | Legend 기본값 |
| --- | --- | --- |
| Test Analytics | Product / Sample Type | Product, 모든 항목 선택 |
| Instrument | Module / Unit | Module, Dropdown 첫 항목과 그 아래 모든 항목 선택 |
| Inventory | Consumable / Reagent | Consumable, 첫 번째 항목 하나 선택 |
| Event | Event Type / Module | Event Type, 모든 항목 선택. Event Type 값은 Instrument, Inventory, Sample, System |

## 규칙

1. 지표(Key Metrics 또는 Tab)를 바꾸면 조회 기간과 Legend 등 Filter Options를 기본값으로 다시 불러옴.
2. Legend의 [Select All]을 누르면 모든 항목을 선택하고, 다시 누르면 모두 해제함. 모든 항목이 선택되면 [Select All]도 켜지고, 하나라도 해제하면 꺼짐.
3. Legend를 모두 해제하면 "Please select one or more legends." 안내 문구를 보여 주고 차트 범례 영역을 숨김.
4. Usage & Cost Trend의 Legend는 하나만 고르며, 최소 1개가 선택되어 있어야 함 (모두 해제 불가).
5. Filter Options를 바꾸면 차트와 표에 바로 반영함.
6. Table에서 조회 기간 열이 8개 이상이거나 표 너비가 화면을 넘으면 가로 스크롤을 만듦. Total 행은 맨 아래에 고정함. 실제 값이 0이면 생략하지 않고 0으로, 데이터가 없으면 '-'로 보여 줌.
7. [Export]를 누르면 OS 파일 탐색기에서 저장 경로와 파일 이름을 정해 .csv 파일로 내보냄. 파일에는 Legend 설정값, 필터 조건, 집계 결과 등 화면에 보이는 데이터를 모두 담음. 파일 형식은 POL-COM-006을 따름.
8. Chart에서 마우스를 올리면 그 시점의 상세 데이터를 Tooltip으로 보여 줌. Y축 최솟값은 0으로 고정함.
9. Test Analytics Legend의 Product 항목과 Test Forecasting의 Product 목록은 Assay Pack으로 등록된 검사 항목 기준이며, 그 사이트가 검사하는 항목이 모두 나옴 (등록된 30개가 모두 나올 수도 있음).
10. 검사 항목·Module 열과 Legend 항목은 Common UX의 정렬 규칙을 따르고, 정렬 규칙이 없는 항목은 오름차순으로 보여 줌.

## 예외

없음

## 근거

- 정책서_2026.08.28 "데이터 표출" (지표 변경 시 필터 옵션 초기화)
- TI-STA-01-01 디스크립션 3-2, 3-3, 5, 6, 6-2, TI-STA-01-02 디스크립션 2, 2-2, 2-3
- TI-STA-05-01 5, TI-STA-07-01 5, TI-STA-08-01 5 디스크립션 (Legend 기본값)
- 2026-11-03 사용자 답변 (ST3, ST4, ST11)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-STA-01 일부) | |
| | 2026-11-03 | Legend 항목은 Assay Pack 등록 검사 항목, 정렬은 Common UX 규칙(없으면 오름차순), 0과 '-' 구분 (ST3, ST4, ST11) | 사용자 답변 |
