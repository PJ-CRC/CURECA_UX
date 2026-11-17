# PCR Setup (PCR 셋업)

> Dx 시스템 · 검사 단계 PCR Setup. 초안 v0.1 (2026-11-06)

## 역할

STARlet으로 추출물과 PCR Reagent를 PCR Plate에 분주합니다.

## Unit (`glossary/module-units.csv`)

- Device: STARlet
- Storage: 1000 μL Tip Storage, 300 μL Tip Storage (1) · (2), PCR Plate Storage
- Waste: Waste Bin
- Door

## 다루는 것

- 1000 μL · 300 μL Tip, PCR Plate (`glossary/consumables.csv`)
- PCR Reagent · MM Tube는 Plate Sealing Module의 Cold Storage에 있음. STARlet 안 자체 Rack에 Socket 2 ~ 4개 분량의 Tube를 꽂아 씀. PCR Socket을 가져와 Tube Cap을 열어 Tube는 Rack에 꽂고 Cap은 Socket에 꽂아 Socket을 Cold Storage로 돌려보냄(안에 Socket을 둘 곳이 없음). 다 쓰면 Socket을 다시 가져와 Cap을 닫고 Tube만 폐기한 뒤 빈 Socket을 돌려보내고, 남으면 Cap을 닫아 Socket에 꽂아 돌려보냄 (POL-LOD-004 규칙 1 ~ 6)
- 같은 Lot이라도 Tube끼리 섞어 쓰지 않음. 남은 양이 모자라면 남은 양으로 한 번, 새 Tube에서 모자란 양으로 한 번 따로 PCR Setup을 함 (POL-INV-007 규칙 5)

## 흐름에서

- **받는 것:** 추출물이 든 96-DWP, Cold Storage의 PCR Reagent
- **하는 일:** PCR Plate를 넘겨받아 Barcode를 읽음(PCR Plate Start, POL-SMP-002) → 분주
- **내보내는 것:** PCR Plate → Plate Sealing. 96-DWP의 End는 PCR Setup을 마치고 읽은 시점 (POL-SMP-002 규칙 2)

## 특성 · 제약

1. Tip · PCR Plate Storage는 바로 넣기 방식, [Remove] 없음 (POL-LOD-002)
2. 가동 중 Door 잠금 해제 불가 (`policy/equipment-states.md` 5절)
3. Plate Sealing과 물리적 간섭 가능성이 있어, Plate Sealing Door를 열 때 두 Module 상태를 함께 봄. 둘 중 하나라도 Running이면 둘 다 Paused로 바꾼 뒤 개방 (`policy/equipment-states.md` 5절)

## 관련 정책

POL-LOD-002 · 004, POL-SMP-002 · 010, POL-EQP-004 · 008, POL-INV-005

## 모르는 것

1. 다 쓴 96-DWP는 어디로 가는지 (DWP Waste Bin은 High-throughput Extraction에 있음)
2. MM(Master Mix)을 MM Tube에 만드는 곳이 이 Module인지
3. PCR Plate 한 장에 담는 Sample 수, 검사 항목이 섞일 수 있는지 (조합 검사, POL-TST-010)
4. Cold Storage의 Reagent가 모자라면 이 단계에서 Error (POL-SMP-007 규칙 4) — 그때 PCR Plate와 96-DWP는 어떻게 되는지
