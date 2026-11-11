---
id: POL-MAT-001
title: Material Setup 구성과 적재 계층
summary: Material Setup은 L-IOS에서 Sample과 Consumable·Reagent를 Socket·Tray·Trolley나 Dx Storage에 적재하는 메뉴이며, 적재 단위는 상위·하위와 데이터로 연결되고 Sample과 Consumable·Reagent는 한 단위에 섞을 수 없음
domain: MAT
menus: [Material Setup]
cids: [LI-TSS-LTG, LI-TSS-PSI, LI-TSS-PSI-SAM, LI-TSS-PSI-LCR, LI-TSS-DXI, LI-TSS-WBM]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > Material Setup > Carrier(기물) 장착 정책, MS 적재 정책서 (20261102) > common-loading-policy 2장, policy/service-mode-matrix.csv, policy/permission-matrix.csv, 팀원 POL-MAT-01]
provisional: []
alerts: []
data: [policy/service-mode-matrix.csv, glossary/consumables.csv]
replaced_by:
---
# POL-MAT-001 Material Setup 구성과 적재 계층

## 정의

| 중메뉴 | 하는 일 | Service Mode |
| --- | --- | --- |
| Group Lots | 같은 박스에서 나온 Reagent 구성품을 Lot으로 묶음 (POL-MAT-009) | TSS Mode |
| Prepare Carrier | Sample, Consumable·Reagent, PK/IC Tube, PCR Reagent, MM Tube를 Socket·Tray·Trolley에 적재 | TSS Mode |
| Load Materials | Dx 시스템 Module의 Storage에 직접 적재 (POL-LOD-002) | Console Mode |
| Empty Waste Bin | Waste Bin/Bottle 비움 처리 (POL-LOD-005) | Console Mode |

| 계열 | 하위 | 중위 | 상위 |
| --- | --- | --- | --- |
| Sample | Sample Tube → Sample Socket | Sample Tray | Sample Trolley |
| Consumable·Reagent | DWP(단독), Tip·Stool Swab(Rack과 결합), Standard Tube·PK/IC Tube(Socket에 담아 Rack과 결합), Tub(Frame에 담아 Rack과 결합) | Consumable Tray | Consumable Trolley |
| PK/IC | PK/IC Tube | PK/IC Socket (G10) | Consumable Rack과 결합해 Consumable Tray로 |
| PCR | PCR Reagent box | PCR Socket | Dx 시스템 Cold Storage (POL-LOD-002) |
| MM | MM Tube | PCR Socket (MM Tube 용) | Dx 시스템 Cold Storage |

- Socket type과 slot(hole) 수: G10 48, G20 24, G30 12, G40·G41 6, G50 4. PCR Socket은 PCR box slot 2개(A·B)
- Tray 안 slot은 10개, Trolley floor는 1F ~ 6F
- Consumable Rack은 스캔하지 않고 물리적으로만 결합함

## 규칙

1. Material Setup은 L-IOS에서만 쓰며, Service, Admin, User 모두 쓸 수 있음. 중메뉴마다 보이는 Service Mode는 정의 표와 같음.
2. 각 적재 단위는 상위·하위 단위와 데이터로 연결됨. 시스템은 데이터 연결만 막을 수 있고, 사용자가 물리적으로 잘못 넣는 것은 막지 못함.
3. Socket, Tray, Trolley는 같은 계열끼리만 구성함. Sample과 Consumable·Reagent를 한 Socket·Tray·Trolley에 섞어 적재할 수 없음 (예: Sample Socket과 Consumable Socket을 한 Tray에 적재 불가).
4. Trolley는 Sample Trolley, Consumable Trolley, 데이터 없는 Trolley 세 가지이며, 한 Trolley에 두 계열이 함께 있는 경우는 없음.
5. Tray 하나에는 하위 항목(Sample Socket 또는 Consumable·Reagent)을 최대 10개 적재함.
6. G10 Socket은 Sample 또는 PK/IC에만 씀. 담긴 것에 따라 Sample Socket 또는 PK/IC Socket이 됨. Standard Tube도 담을 수 있으나 사용 후 폐기하므로 따로 나누지 않음.
7. PCR Socket은 PCR box 용 또는 MM Tube 용으로만 쓰며, Tray에 적재하지 않고 Cold Storage에 넣음.
8. 화면에서 안내하는 대상 외에 지금 단계에 맞지 않는 Carrier는 스캔해도 적재되지 않음 (Alert은 POL-MAT-005).

## 예외

없음

## 근거

- 정책서_2026.08.28 "Carrier(기물) 장착 정책" (같은 메뉴의 같은 항목끼리 구성, Sample과 Consumable·Reagent 혼합 불가)
- MS 적재 정책서 (20261102) common-loading-policy 2.1 ~ 2.3 (`reference/team/material-setup-20261102/`)
- LI-TSS-PSI-SAM-01-03 디스크립션 2 (Socket type별 hole 수, v2.1.06)
- `policy/service-mode-matrix.csv`, `policy/permission-matrix.csv` Material Setup (2026-10-30 결정)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-MAT-01) | |
