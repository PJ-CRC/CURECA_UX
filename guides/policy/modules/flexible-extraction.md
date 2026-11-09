# Flexible Extraction (맞춤형 핵산 추출)

> Dx 시스템 · 검사 단계 Nucleic Acid Extraction. 초안 v0.1 (2026-11-06)

## 역할

STARlet으로 Cartridge 방식 핵산 추출을 합니다. Sample이 적을 때 씁니다.

## Unit (`glossary/module-units.csv`)

- Device: STARlet
- Storage: MB Tube Storage, Buffer Cartridge Storage (각 1..N slot)
- Waste: Waste Bin, Liquid Waste Bottle
- Door

## 다루는 것 (`glossary/consumables.csv`)

- STARMag Universal Cartridge Kit: BB · WB1 · WB2 · WB3 · EB Tub (Buffer Cartridge Storage), MB Tube (MB Tube Storage). LB Tub · PK Tube는 Prep Consumable Trolley

## 흐름에서

- **받는 것:** Sample Preparation의 96-DWP (추정)
- **내보내는 것:** 추출물 → PCR Setup (추정)
- 할당: Prioritize Cost Reduction이고 Sample 수가 기준 미만이면 이 Module 먼저 (POL-TST-004)

## 특성 · 제약

1. MB Tube Storage는 안의 BCR 장치가 위치를 읽어 관리하므로 [Remove]가 없음. 스캔하면 바로 적재 (POL-LOD-002 정의 · 규칙 12)
2. Buffer Cartridge Tub는 재사용함. 여분의 Cap과 함께 입고하고, 쓰고 남으면 Cap으로 닫아 Storage로 돌려놓음. 다 쓰면 Cap을 닫아 Tub만 자동 폐기하고 Tray(Socket)는 제자리로 돌려놓음 (POL-LOD-004 규칙 13 ~ 15)
3. Cap이 있어야 옮기고 버릴 수 있음. Cap 없이 쓰거나 폐기하려 하면 Instrument가 멈추고 Cap 보충 Event Message를 띄움. Cap은 센서로 알 수 없어 사용자가 보충한 뒤 [Confirm refill]로 알려 줌 (POL-LOD-004 규칙 16 ~ 18)
4. Buffer 공간에서 쓰이는 중인 Reagent의 자리에는 적재할 수 없음 (POL-LOD-004 규칙 19)
5. 가동 중 Door 잠금 해제 불가 (`policy/equipment-states.md` 5절)
6. MB Tube Storage는 MB Tube 5개까지(10칸 중 5칸을 막음, Buffer Cartridge 입고 단위에 맞춤) (POL-LOD-002 규칙 15)
7. Buffer Cartridge는 전체 Run 스케줄에서 더 쓸 계획이 없으면 Cap을 닫아 Storage로 돌려놓음 (POL-LOD-004 규칙 14)

## 관련 정책

POL-TST-004 · 005, POL-LOD-002 · 004, POL-EQP-005 · 008, POL-INV-005

## 모르는 것

1. STARlet이 PCR Setup에도 있음 — 같은 기종이 다른 일을 하는 것인지, 화면에서 둘을 어떻게 구분하는지
2. Cartridge 하나로 몇 Sample을 처리하는지 (여분의 Cap은 Tub 5개 한 세트에 5개 단위, 2026-11-06 답)
3. Instrument가 Cap이 없어 멈췄을 때 장비 모듈 상태가 Error인지 Paused인지, 진행 중이던 Sample은 어떻게 되는지
4. 추출물이 96-DWP에 담겨 나가는지
