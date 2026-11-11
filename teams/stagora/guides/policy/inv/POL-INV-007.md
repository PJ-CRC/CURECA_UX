---
id: POL-INV-007
title: PCR Reagent 구성과 입고 단위
summary: PCR Reagent는 한 박스에서 나온 구성품끼리만 묶어 쓰며, IC는 Tube 단위로 Prep 시스템 Trolley에 넣고, MOM을 포함한 나머지 구성품은 한 Socket에 Set으로 묶어 Cold Storage에 넣음
domain: INV
menus: [Inventory, Run, Material Setup]
cids: [TI-IVT-04-T, LI-IVT-04-T, TI-IVT-04-T-P, LI-IVT-04-T-P, LI-RUN-03, LI-TSS-LTG-02-01, LI-TSS-LTG-02-02, LI-TSS-PSI-LPR-01, LI-TSS-PSI-PKI-01]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > 시약/소모품 사용 및 폐기 > 동일 Lot 사용, 씨젠 소모품·시약 261102 > PCR 시약, 2026-11-03 사용자 설명]
provisional: []
alerts: []
data: [glossary/pcr-reagents.csv]
replaced_by:
---
# POL-INV-007 PCR Reagent 구성과 입고 단위

## 정의

- PCR Reagent 박스: 한 PCR Reagent 제품의 구성품(MOM, Enzyme·Buffer, RNase-free Water, PC, SD, IC 등)이 함께 들어 있는 묶음

| 구성품 | 입고 단위 | 넣는 곳 | 수량 단위 예 |
| --- | --- | --- | --- |
| IC | Tube | Prep 시스템: Prep Consumable Storage > Trolley | 100 rxns/tube |
| IC를 뺀 나머지 (MOM 등) | Set (한 Socket에 묶음) | Dx 시스템: Plate Sealing > Cold Storage | 100 rxns/set |

## 규칙

1. PCR Reagent는 한 박스에서 나온 구성품끼리만 묶어 씀. 다른 박스의 구성품과 섞어 쓰지 않음.
2. IC는 Sample Preparation 단계에서 Sample에 먼저 분주되고, Nucleic Acid Extraction 단계를 거쳐 PCR 단계에서 반응함. Module 사이의 물리적 거리가 멀어서, IC만 박스에서 따로 빼 Tube 단위로 Prep 시스템의 Trolley에 넣음.
3. IC를 뺀 나머지 구성품은 한 Socket에 담아 Set 단위로 Cold Storage에 넣음. MOM은 가장 중요한 구성품이며 반드시 Set에 넣음.
4. IC는 다른 구성품과 Barcode 체계가 달라, 같은 박스에서 나온 IC임을 데이터로 묶기 위해 Lot 구성을 함 (Material Setup > Group Lots > Group PCR Reagent Kit). 자세한 절차는 POL-MAT-009.

## 예외

없음

## 근거

- 정책서_2026.08.28 "동일 Lot 사용": PCR 시약은 Lot이 서로 일치하는 경우에만 사용 (교차 사용 불가)
- 2026-11-03 사용자 설명: 한 박스에서 나온 것끼리만 묶어 사용. 원래는 IC도 모든 구성품과 함께 한 Socket에 Set으로 넣었으나, Module 사이 거리 때문에 IC만 Prep 시스템 Trolley로 따로 넣게 됨. MOM은 반드시 Set으로 Cold Storage에 들어감
- 씨젠 소모품·시약 261102 "PCR 시약": IC는 100 rxns/tube, Prep Consumable Storage > Trolley. 나머지는 100 rxns/set, Plate Sealing > Cold Storage (`glossary/pcr-reagents.csv`)
- 8월 정책서 "PCR Regents 소켓(Socket) 구성 정책"의 "IC는 분리되어 STAT Storage로 입고"는 이전 내역이며 Trolley로 바뀜 (2026-11-03 사용자 확인)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-RGT-04 중 PCR Reagent 부분) | 사용자 설명 |
