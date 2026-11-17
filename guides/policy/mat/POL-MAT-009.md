---
id: POL-MAT-009
title: Group Lots (Lot 구성)
summary: Group Lots는 같은 박스에서 나온 구성품을 하나의 Lot으로 묶는 단계로, Universal Cartridge Kit는 EB Tub·MB Tube·PK Tube를, PCR Reagent는 PCR box와 IC Tube를 묶으며, Lot을 구성한 PK/IC Tube와 PCR box만 Socket에 적재할 수 있음
domain: MAT
menus: [Material Setup]
cids: [LI-TSS-LTG, LI-TSS-LTG-01-01, LI-TSS-LTG-01-02, LI-TSS-LTG-02-01, LI-TSS-LTG-02-02]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > 시약/소모품 사용 및 폐기 > 동일 Lot 사용, PCR 시약 IC 사용 정책, LI-TSS-LTG·LTG-01-01·LTG-02-01 디스크립션, policy/alert-catalog-ms.csv, 2026-11-03 사용자 답변 (MS3), 팀원 POL-RGT-04·07]
provisional: []
alerts: [MS_Alert_002, MS_Alert_003, MS_Alert_004, MS_Alert_005, MS_Alert_006, MS_Alert_032]
data: [glossary/consumables.csv, glossary/pcr-reagents.csv]
replaced_by:
---
# POL-MAT-009 Group Lots (Lot 구성)

## 정의

| Lot | 묶는 구성품 | 화면 |
| --- | --- | --- |
| STARMag Universal Cartridge Kit | EB Tub, MB Tube, PK Tube | LI-TSS-LTG-01-01 → 01-02 |
| PCR Reagent Kit (IC reagent Setup) | PCR box, IC Tube | LI-TSS-LTG-02-01 → 02-02 |

## 규칙

1. 같은 박스에서 나온 구성품끼리 쓰는 것이 원칙임. PCR Reagent는 반드시 같은 박스(Lot)끼리 쓰고 다른 박스와 섞어 쓰지 않음. 추출 Reagent(STARMag M96 Kit, STARMag Universal Cartridge Kit)는 권고라, Lot이 맞는 것이 없으면 맞지 않는 것도 씀 (POL-INV-007).
2. IC와 PK Tube는 다른 구성품과 Barcode 체계가 달라, 같은 박스에서 나온 것임을 데이터로 묶기 위해 Lot을 구성함.
3. Universal Cartridge Kit는 EB Tub, MB Tube, PK Tube를 모두 스캔해야 [Done]이 활성화됨. PCR Reagent Kit는 PCR box와 IC Tube를 모두 스캔해야 [Done]이 활성화됨.
4. 이번 작업에서 이미 스캔한 Reagent를 다시 스캔하면 MS_Alert_002, 만료된 Reagent는 MS_Alert_003, 폐기된 Reagent는 MS_Alert_004, 이미 Lot을 구성한 Reagent는 MS_Alert_005를 보여 줌.
5. IC Tube가 없는 PCR box를 스캔하면 MS_Alert_006을 보여 줌. 이 PCR box는 Lot 없이 Load PCR Reagents에서 바로 적재함.
6. Lot을 구성한 PK/IC Tube와 PCR box만 Load PK/IC Tubes, Load PCR Reagents에서 적재할 수 있음 (POL-MAT-008 규칙 4).
7. [Done]에서 Lot과 그 구성품 데이터를 함께 저장하며, 저장에 실패하면 MS_Alert_032를 보여 줌 (POL-MAT-002).
8. 조합 검사에서 같은 IC를 쓰더라도 처음 구성할 때는 Reagent 박스마다 IC를 모두 구성함. 단, 실제 Run에서 Sample 하나에 RP 조합 검사를 할 때는 RP1 박스의 RP-V IC를 RP2·RP3 검사의 IC 대신 쓸 수 있음.

## 예외

없음

## 근거

- 정책서_2026.08.28 "동일 Lot 사용" (추출 Reagent는 권고, PCR Reagent는 Lot 일치 시에만), "PCR 시약 IC 사용 정책"
- LI-TSS-LTG 1, LI-TSS-LTG-01-01 1 ~ 3, LI-TSS-LTG-02-01 1 ~ 3 디스크립션
- 2026-11-03 사용자 답변 (MS3): PCR Reagent는 반드시, 추출 Reagent는 권고. PK·IC는 Barcode를 읽어 짝을 데이터로 묶음
- `policy/alert-catalog-ms.csv` MS_Alert_002 ~ 006

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-RGT-04 중 추출 Reagent 부분, POL-RGT-07) | |
