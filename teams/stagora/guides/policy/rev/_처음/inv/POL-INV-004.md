---
id: POL-INV-004
title: Reagent Expiration Date, 재사용, 폐기
summary: Reagent는 사용 횟수를 Plate 분주를 위한 흡입마다 1회 세고, 최대 사용 횟수를 넘거나 Expiration Date가 지나면 Instrument가 자동으로 처리하며, Item details에서 Barcode 단위로 Expiration Date와 Used Counts를 보여 줌
domain: INV
menus: [Inventory, Run]
cids: [TI-IVT-03-T-P, LI-IVT-03-T-P, TI-IVT-04-T, LI-IVT-04-T, TI-IVT-04-T-P, LI-IVT-04-T-P, LI-RUN-03]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > 시약/소모품 사용 및 폐기 > 시약 폐기, 시약 유효기간 관리, 시약 보관 및 재사용, 시약 만료 상태값 정의, 씨젠 소모품·시약 261102 > 최대 사용 횟수, TI-IVT-03-T-P·04-T-P·04-T 3-3 디스크립션, POL-SMP-007 규칙 3, 팀원 POL-RGT-01·02·03·08, 2026-11-03 사용자 확인 (IV4), 씨젠 Assay Pack 명세 R06 > maxUsageCount]
provisional: []
alerts: []
data: [glossary/status-values.csv, glossary/consumables.csv, glossary/pcr-reagents.csv]
replaced_by:
---
# POL-INV-004 Reagent Expiration Date, 재사용, 폐기

## 정의

- 시약 만료 상태 값과 정의는 `glossary/status-values.csv`의 시약 만료 상태가 기준임: Valid, Under 30 days, Expired
- Used Counts: Reagent를 흡입한 횟수 / 최대 사용 횟수. 최대 사용 횟수는 Assay Pack에 담긴 구성품별 값(maxUsageCount)을 따름 (POL-TST-008). 검증과 화면 예시에는 품목 표(`glossary/consumables.csv`, `glossary/pcr-reagents.csv`)의 값을 씀 (예: PCR Reagent 구성품 3회, Tub 10회, 전처리 Standard Tube 1회)

## 규칙

1. 일부만 쓰고 남은 Reagent는 다시 Decapping해 냉장 보관하고 재사용함.
2. 사용 횟수는 Plate(DWP, PCR Plate) 하나에 분주하려고 Instrument가 Reagent를 흡입(Aspiration)할 때 1회 늘어남.
3. 최대 사용 횟수를 넘은 Reagent는 Instrument가 자동으로 폐기함. 이 폐기는 화면에 따로 보여 주거나 관리하지 않음.
4. Instrument는 Reagent를 쓰기 직전에 Barcode로 Expiration Date를 확인함. 지났으면 Dx 시스템은 그 Reagent를 자동으로 폐기하고, Prep 시스템은 쓰지 않고 Trolley로 반환함. 이 때문에 [Run Start]를 막지 않음 (POL-SMP-007 규칙 3).
5. Prep 시스템에서 쓴 Consumable·Reagent는 Tip과 Stool Swab을 빼고 사용 후 Trolley로 반환되며, 사용자가 직접 확인해 폐기함.
6. Reagents Tab은 한 Reagent의 Location 중 한 곳이라도 Expired가 있으면 카드와 목록 사이에 만료 안내 문구를 보여 줌.
7. Item details Popup은 Instrument에 입고된 품목을 Barcode 단위(`Module (Index) > Storage Unit` + Barcode)로 보여 주며, Instrument 안 Buffer 공간에 있는 것도 넣음. 위에 Remaining Qty 합과 Expired 개수를 보여 줌.
8. Reagent Item details의 정렬은 Expiration Date 오름차순, 같으면 Remaining Rxns 오름차순, 같으면 Used Counts 오름차순임.
9. Reagent의 Barcode는 Material Setup에서 입고할 때 읽은 Barcode임. 단, Standard Tube는 Carrier Setup 때 읽은 대표 Barcode, PCR Reagent의 IC는 개별 Barcode, 그 밖의 PCR Reagent는 박스 rxns Barcode, UC Kit는 Tub 대표 Barcode로 보여 줌.
10. 같은 전처리 Reagent가 Standard Tube와 Tub로 함께 있으면 공정 단계에 맞는 용기를 씀: Sample을 처음 옮겨 담을 때는 Standard Tube, 상등액을 없앤 뒤 추가 분주할 때는 Tub (예: PBS Standard Tube / PBS Tub, Saline Standard Tube / Saline Tub).

## 예외

없음

## 근거

- 정책서_2026.08.28 "시약 폐기", "시약 유효기간 관리", "시약 보관 및 재사용", "시약 만료 상태값 정의", "전처리 용기별 시약 사용 정책"
- 2026-11-02 사용자 전달 (SM2-a): 만료 Reagent는 쓰기 직전 Barcode 확인 후 자동 폐기, Run Start 제약 없음
- 2026-11-03 사용자 확인 (IV4): Prep 시스템도 쓰기 직전에 확인하며, 만료 Reagent는 쓰지 않고 Trolley로 반환. Prep에서 쓴 품목은 Tip·Stool Swab을 빼고 Trolley로 반환되어 사용자가 폐기
- TI-IVT-04-T 3-3, TI-IVT-04-T-P 0 ~ 3, TI-IVT-03-T-P 디스크립션

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-RGT-01·02·03·08) | |
| | 2026-11-03 | 만료 Reagent 처리를 Dx·Prep으로 나눠 정함, Prep 반환 규칙 추가 (IV4) | 사용자 확인 |
| | 2026-11-03 | 최대 사용 횟수는 Assay Pack 값을 따르고, 품목 표(씨젠 소모품·시약 261102, PCR 구성품 3회)는 검증·화면 예시용 (IV-a) | 사용자 확인 |
| | 2026-11-03 | 전처리 용기별 Reagent 사용 규칙 추가 (이전 ID: 팀원 POL-RGT-05) | 8월 정책서 |
