---
id: POL-LOD-005
title: Empty Waste Bin (비움 처리)
summary: L-IOS Material Setup의 Empty Waste Bin에서 Waste Bin/Bottle이 있는 Door나 Storage를 열어 비운 뒤 [Confirm Empty]로 확인하면 그 Waste Bin/Bottle의 누적 사용 개수를 0부터 다시 셈
domain: LOD
menus: [Material Setup, Inventory]
cids: [LI-TSS-WBM, LI-TSS-WBM-P, TI-IVT-05-T, LI-IVT-05-T]
status: 확정
version:
date: 2026-11-03
sources: [LI-TSS-WBM·WBM-P 디스크립션 (Material Setup 2차 페이지), policy/service-mode-matrix.csv, POL-INV-005, 2026-11-03 사용자 답변 (IV9, IV9-a, MS9 일부)]
provisional: []
alerts: []
data: [glossary/module-units.csv]
replaced_by:
---
# POL-LOD-005 Empty Waste Bin (비움 처리)

## 정의

- Waste Bin/Bottle: Module마다 가진 Waste Bin과 Liquid Waste Bottle을 함께 부르는 이름 (`glossary/module-units.csv`)

## 규칙

1. 비움 처리는 L-IOS의 Material Setup > Empty Waste Bin에서만 함. 지금은 Console Mode에서만 제공함 (`policy/service-mode-matrix.csv`). T-IOS는 원격 관제용이라 비움 기능이 없음 (POL-INV-005).
2. 배치도에서 Waste Bin이 있는 Storage QR을 스캔하면 그 Storage가 열림. Storage 안에서 품목이 옮겨지는 중이면 열지 않고 Alert을 보여 줌 (판단 기준은 Instrument 내부 로직).
3. Waste Bin이 Drawer형이 아니라 유리 Door 안에 있는 경우를 위해 Door Control Popup을 둠. Instrument의 Door Control(LI-INS-01-P)과 같은 UI를 쓰되, Waste Bin/Bottle이 있는 Door만 골라 보여 줌.
4. [Confirm Empty] Popup(LI-TSS-WBM-P)은 Module을 고르면(All 또는 Module) 그 Module Index의 Waste Bin과 Liquid Waste Bottle을 보여 줌. 정렬은 Module 순서와 Index 오름차순이며, 고른 Module이 맨 위에 옴.
5. 비운 Waste Bin/Bottle의 [Confirm Empty]를 누르고 확인하면 그 Waste Bin/Bottle의 누적 사용 개수를 0부터 다시 셈 (Fill Level 리셋, POL-INV-005).

## 예외

- Main Mode에서도 Empty Waste Bin을 제공할지는 고객 논의 (CA-0007)
- 이 화면의 Alert·컨펌 ID(예전 Confirm_021 Confirm Empty, Alert_034 이동 중)를 MS 목록에 넣을지는 사용자가 다시 확인하기로 함 (MS9)

## 근거

- LI-TSS-WBM 1·3, LI-TSS-WBM-P 1 ~ 4 디스크립션 (Material Setup 2차 페이지, 2.1 2차)
- 2026-11-03 사용자 답변: IV9(T-IOS 비움 기능 없음, Waste Bin/Bottle 이름), IV9-a(Console Mode만, CA-0007), MS9(Door Control은 같은 UI에서 Waste Bin Door만)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 | |
