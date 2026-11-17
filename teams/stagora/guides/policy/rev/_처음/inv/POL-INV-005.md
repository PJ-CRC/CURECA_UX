---
id: POL-INV-005
title: Waste Bin/Bottle 상태와 Fill Level
summary: Fill Level은 누적 사용 개수를 최대 수용 개수로 나눈 백분율이며, 만재 센서가 감지해야 Full(100%)이 되고 그 전에는 최대 99%(Almost Full)로 보여 주며, 비움 처리 때 0부터 다시 셈
domain: INV
menus: [Inventory, Run, Quick Start, Material Setup]
cids: [TI-IVT-05-T, LI-IVT-05-T, TI-IVT-01-T, LI-IVT-01-T, LI-RUN-04, LI-QUK]
status: 확정
version:
date: 2026-11-03
sources: [씨젠 상태 정보 261021 > 폐기함 상태, TI-IVT-05-T 2·2-2·3·3-3, TI-IVT-01-T 3 디스크립션, LI-RUN-04 디스크립션, 2026-11-03 사용자 확인 (IV9)]
provisional: []
alerts: [Confirm_021]
data: [glossary/status-values.csv, glossary/module-units.csv]
replaced_by:
---
# POL-INV-005 Waste Bin/Bottle 상태와 Fill Level

## 정의

- 폐기함/폐액통 상태 값과 정의는 `glossary/status-values.csv`의 폐기함/폐액통 상태(Waste Bin/Bottle Status)가 기준임: Available(적재율 70% 미만), Almost Full(70% 이상), Full(100%)
- Fill Level(%) = (지금까지 누적 사용 개수 ÷ 최대 수용 개수) × 100

## 규칙

1. Fill Level은 누적 사용 개수로 계산해 바로 반영함. Available, Almost Full은 이 계산값으로, Full은 만재 센서로 정함 (센서가 없으면 규칙 4).
2. 만재 센서가 감지하지 않았으면 계산값이 100% 이상이어도 99%로 보여 주고 상태는 Almost Full임.
3. 최대 개수에 이르기 전에 만재 센서가 감지하면 바로 100%, Full로 바꿈.
4. 만재 센서가 없는 Waste Bin/Bottle은 계산값이 100%에 이르면 100%, Full로 바꿈.
5. 비움 처리는 L-IOS의 Material Setup > Empty Waste Bin에서 [Confirm Empty]로 하며, 지금은 Console Mode에서만 제공함 (`policy/service-mode-matrix.csv`). 그때부터 누적 사용 개수를 0부터 다시 셈.
6. T-IOS는 원격 관제용이라 비움 처리 기능을 제공하지 않음 (POL-COM-001).
7. Waste Bin/Bottle Tab은 Waste Bin이나 Liquid Waste Bottle이 있는 Module을 모두 보여 주며, Unit 칸에는 Module마다 가진 Unit 이름(예: Waste Bin (Upper), Liquid Waste Bottle (Lower))을 보여 줌 (`glossary/module-units.csv`).
8. Waste Bin/Bottle Tab은 Module 유형별 카드로 묶고, 카드 상태는 그 안의 Waste Bin/Bottle 중 가장 높은 상태로 보여 줌 (Full > Almost Full > Available). 카드 순서는 Sample Preparation, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR이고, 상세는 Module Index 오름차순임.
9. Summary의 Waste Bin/Bottle Status는 Full, Almost Full인 것만 Full, Almost Full 순으로, 같은 상태에서는 Fill Level이 높은 순으로, 같으면 Name 오름차순으로 보여 줌. 없으면 "No actions required"를 보여 줌.

## 예외

- Main Mode에서도 Empty Waste Bin을 제공할지는 고객과 다시 정함 (CA-0007)

## 근거

- 씨젠 상태 정보 261021 "폐기함 상태" (`glossary/status-values.csv`)
- TI-IVT-05-T 디스크립션 2, 2-2, 3, 3-3 (센서·99% 규칙), TI-IVT-01-T 3
- POL-SMP-007 규칙 4 (Waste Bin/Bottle 상태와 관계없이 Run Start 가능)
- 2026-11-03 사용자 확인 (IV9): Waste Bin/Bottle은 Module마다 가진 두 Unit 종류를 함께 부르는 이름. T-IOS는 관제용이라 비움 기능 없음. 비움은 Material Setup에서

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 | |
| | 2026-11-03 | 비움 처리 위치, T-IOS 미제공, Liquid Waste Bottle 포함 정함 (IV9) | 사용자 확인 |
| | 2026-11-03 | 비움 처리는 우선 Console Mode에서만 (IV9-a) | 사용자 확인, CA-0007 |
