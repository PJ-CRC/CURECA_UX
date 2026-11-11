# Prep Consumable Storage (전처리 소모품 저장소)

> Prep 시스템 · 검사 단계 Sample Preparation. 초안 v0.1 (2026-11-06)

## 역할

Prep 시스템(Sample Preparation)이 쓰는 Consumable · Reagent를 담은 Consumable Trolley를 받습니다.

## Unit

- Trolley, Door (`glossary/module-units.csv`)

## 다루는 것 (`glossary/consumables.csv`, `glossary/pcr-reagents.csv`의 저장 위치 "Prep Consumable Storage > Trolley")

- Consumable: Wide Bore Tip, 1000 μL Tip, 300 μL Tip, Empty Standard Tube, 96-DWP, Stool Swab
- 전처리 Reagent: PBS · Saline · Prelyser Standard Tube, PBS · Saline Tub, LB Tub (Prep)
- 추출 Reagent 중 Prep에서 쓰는 것: LB DWP (STARMag M96 Kit), LB Tub · PK Tube (Universal Cartridge Kit)
- PCR Reagent 구성품 25개 (IC로 추정, `policy/policy-backlog.md` 고칠 것 12: IC는 PCR box에서 분리해 Prep 시스템 Trolley로)

## 특성 · 제약

1. Sample Trolley 한 대에 Consumable Trolley 여러 대를 구성할 수 있음 (POL-LOD-001 규칙 3)
2. Run 중에도 언제든 빼고 새 Trolley를 바로 도킹할 수 있음. 쓰던 품목은 새 Trolley 1F 빈 Tray로 돌아옴 (POL-LOD-001 규칙 4, POL-MAT-007 규칙 10)
3. 도킹된 Consumable Trolley 1층에 Tray가 없으면 Run 준비로 넘어가지 않음 (POL-SMP-007 규칙 2)
4. Prep 시스템은 만료 Reagent를 쓰지 않고 Trolley로 반환함 (Dx는 자동 폐기) (POL-SMP-007 규칙 3)
5. 다 쓰지 않은 품목은 Trolley로 반환됨. Tip · Stool Swab은 쓴 것을 버리고 남은 것만, Tub · Tube · PK Tube · IC는 쓴 것도 남은 것과 함께 반환됨. Tub를 뺀 나머지를 다시 쓰려면 사용자가 쓴 것을 폐기하고 다시 구성함 (POL-INV-004 규칙 5)
6. Tub는 한 번 쓴 뒤 여분의 Cap을 넣어야 다시 씀. Trolley로 돌아오면 Cap 보충 Event Message를 띄우고, 사용자가 보충한 뒤 [Confirm refill]로 알려 줌. Prep 시스템은 쓰기 전에 Cap을 확인하므로 쓰는 중에는 멈추지 않음 (지금 써야 하는데 Cap이 없으면 Error). 그래서 Prep Tub Cap은 Inventory 관리 항목이 아님 (POL-LOD-004 규칙 21 ~ 26)
7. Trolley 구성 Carrier는 [Run Start] 때 리셋하지 않고, 품목이 모두 소진된 때만 리셋함. Run이 끝나면 Buffer 공간에서 쓰고 남은 품목이 돌아오기 때문임 (POL-MAT-010 규칙 5, 이유)
8. 도킹 방식은 제조사마다 다름 (POL-LOD-001 규칙 10 · 11, Sample Storage 문서)

## 관련 정책

POL-LOD-001, POL-LOD-004, POL-MAT-007, POL-MAT-009, POL-INV-003 · 004 · 006 · 007, POL-SMP-007

## 모르는 것

1. LB DWP · LB Tub가 Prep에 있는 이유: Prep에서 96-DWP에 LB를 미리 넣는 것인지 (추정), 아니면 Trolley로 옮겨 Extraction에 넣는 것인지
2. 같은 품목이 Trolley 여러 대에 있을 때 쓰는 순서
3. Trolley를 빼는 동안 Sample Preparation은 Pausing이 되는지, 그냥 기다리는지
