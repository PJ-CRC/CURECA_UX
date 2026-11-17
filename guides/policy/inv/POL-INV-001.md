---
id: POL-INV-001
title: Inventory 화면 구성과 데이터 기준
summary: Inventory는 Summary, Overview, Consumables, Reagents, Waste Bin/Bottle, Usage History Tab으로 이루어지고, Enabled인 Module의 데이터만 보여 주며, 모든 User Type이 볼 수 있음
domain: INV
menus: [Inventory]
cids: [TI-IVT-01-T, TI-IVT-02-T, TI-IVT-03-T, TI-IVT-03-T-P, TI-IVT-04-T, TI-IVT-04-T-P, TI-IVT-05-T, TI-IVT-06-T, LI-IVT-01-T, LI-IVT-02-T, LI-IVT-03-T, LI-IVT-03-T-P, LI-IVT-04-T, LI-IVT-04-T-P, LI-IVT-05-T, LI-IVT-06-T]
status: 확정
version:
date: 2026-11-03
sources: [TI-IVT-01-T·02-T·03-T·04-T·05-T·06-T 디스크립션 0, policy/permission-matrix.csv (2026-10-30 결정), POL-EQP-009]
provisional: []
alerts: [Alert_020]
data: [policy/permission-matrix.csv, glossary/modules.csv]
replaced_by:
---
# POL-INV-001 Inventory 화면 구성과 데이터 기준

## 정의

| Tab | 보여 주는 것 |
| --- | --- |
| Summary | 지금 Run에 부족한 Consumable·Reagent 목록과 비워야 할 Waste Bin/Bottle 목록 |
| Overview | Module별 또는 전체 Module의 재고 현황 |
| Consumables | Consumable별 Location, Capacity, Remaining Qty, Required Qty, 재고 상태 |
| Reagents | Reagent별 Location, Remaining Qty, Required Qty, 재고 상태, Expiration Date 안내 |
| Waste Bin/Bottle | Module별 Waste Bin/Bottle의 Fill Level과 폐기함/폐액통 상태 |
| Usage History | Consumable·Reagent 사용 이력 |

## 규칙

1. Inventory는 T-IOS와 L-IOS 모두에 있고, Service, Admin, User 모두 볼 수 있음.
2. 모든 Tab은 Enabled인 Module의 데이터만 보여 줌 (POL-EQP-009).
3. 화면은 들어올 때의 데이터를 보여 주고 실시간으로 바꾸지 않음. [Refresh]를 누르면 최신 데이터로 다시 불러옴.
4. 데이터를 불러오지 못하면 Alert_020을 보여 줌.
5. Consumables·Reagents Tab의 [Item details]를 누르면 그 품목을 Barcode 단위로 보여 주는 Item details Popup이 열림 (POL-INV-004).
6. Overview의 Module 순서는 Sample Storage, Prep Consumable Storage, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing임. Module 선택의 기본값은 All이며, Module을 고르면 그 Module의 재고만 보여 줌.
7. Overview의 Sample Storage는 Samples (Inbound Trolley), Samples (Test In Progress), Samples (Outbound Trolley)의 Sample 수를 `N ea (M racks)`로 보여 줌.

8. Item details Popup(TI/LI-IVT-03-T-P, TI/LI-IVT-04-T-P)은 Inventory 화면이며, Run의 Check Consumables·Check Reagents 단계에서도 같은 Popup을 부름.

## 예외

없음

## 근거

- TI-IVT-01-T ~ 06-T 디스크립션 0 (데이터 기준 "사용여부가 '사용'인 모듈"), TI-IVT-02-T 1·1-1·1-2·3
- `policy/permission-matrix.csv` Inventory (2026-10-30 결정)
- 2026-11-03 사용자 확인 (IV8): Item details Popup의 주인은 Inventory, Run에서 같은 Popup을 씀

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 | |
| | 2026-11-03 | Item details Popup은 Inventory 화면이고 Run에서도 부름 (IV8) | 사용자 확인 |
