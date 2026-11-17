# High-throughput Extraction (대용량 핵산 추출)

> Dx 시스템 · 검사 단계 Nucleic Acid Extraction. 초안 v0.1 (2026-11-06)

## 역할

M9600으로 96-DWP 단위 핵산 추출을 합니다. Sample이 많을 때 씁니다.

## Unit (`glossary/module-units.csv`)

- Device: M9600
- Storage: WB1 · WB2 · EB · MB · Spin Tip Storage (각 1..N slot), Spare Storage
- Waste: DWP Waste Bin, DWP Film Waste Bin (만재 센서 없음, Counting으로만 관리)
- Door

## 다루는 것 (`glossary/consumables.csv`)

- STARMag M96 Kit: MB · WB1 · WB2 · EB DWP, Spin Tip (각 Storage). LB DWP는 Prep Consumable Trolley

## 흐름에서

- **받는 것:** Sample Preparation의 96-DWP
- **내보내는 것:** 추출물이 든 96-DWP (추정) → PCR Setup
- 할당: 정책이 Prioritize Cost Reduction이면 Sample 수가 기준(1~94) 이상일 때 이 Module, Prioritize TAT Reduction이면 이 Module 먼저 (POL-TST-004). 검사 항목마다 쓸 수 있는지는 Extraction Module Usage Setting (POL-TST-005)

## 특성 · 제약

1. M9600 Plate 배치 고정: 1 LB, 2 WB1, 3 WB2, 4 MB, 5 Not Used, 6 EB, 7 Not Used, 8 Spin Tip. Heating은 1 · 2 · 3 · 6번만 (POL-TST-007)
2. Spare Storage는 지금 쓰지 않음. 스캔하면 알럿 (POL-EQP-006, POL-LOD-002 규칙 9)
3. DWP Film Waste Bin: 재단(High-Throughput) 장비는 서랍형, 표준형은 장비 안(Door를 열어야 함). 표준형만 가동 중 Door 조건부 허용 (`policy/equipment-states.md` 5절)
4. Dx 시스템은 만료 Reagent를 자동 폐기 (POL-SMP-007 규칙 3)
5. Dx용 Reagent는 Assay Pack Segment 코드로 구분해 Prep용과 섞이지 않음 (POL-LOD-002 규칙 10)
6. 씰 · 팁 Waste Bin은 표준형 · 맞춤형 모두 만재 센서가 없음(필름이 반사되어 감지 못함). 위치는 표준형은 상부(앞 Door), 맞춤형(재단)은 하부 (MT-20260901-01)
7. Dx Storage 칸 수는 모델에 따라 다름(예: DWP 표준형 5칸, 맞춤형 6칸). 화면은 장비가 올려 주는 값을 그대로 보여 줌 (POL-LOD-002 규칙 16)

## 관련 정책

POL-TST-004 · 005 · 006 · 007, POL-EQP-005 · 006 · 008, POL-LOD-002, POL-INV-005

## 모르는 것

1. 한 번 추출에 96-DWP 한 장인지, Sample 수가 적어도 한 장을 다 쓰는지 (Cost Reduction 기준이 생긴 이유)
2. LB가 Plate 1에 있는데 LB DWP가 Prep Trolley에 있는 이유 (Prep에서 LB DWP에 Sample을 분주해 넘기는지, 추정)
3. 표준형 · 재단 장비 구분이 설정값인지, 장비에서 받는 정보인지
4. Spin Tip의 역할과 소진 시 동작
