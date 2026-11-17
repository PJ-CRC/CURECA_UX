# Sample Preparation (검체 준비)

> Prep 시스템 · 검사 단계 Sample Preparation. 초안 v0.1 (2026-11-06)

## 역할

Sample을 전처리하고 96-DWP로 분주합니다. 응급 Sample은 STAT Storage로 받습니다.

## Unit (`glossary/module-units.csv`)

- Device: Sample Pretreatment (Upper · Lower), Sample Aliquot (Upper · Lower) — 각각 0..1
- Storage: STAT Storage (사용자 접근 공간 + Buffer 8칸, POL-LOD-003)
- Waste: Waste Bin (Upper · Lower), Liquid Waste Bottle (Upper · Lower)
- Door: 제조사에 따라 다름 — 로체시스템즈는 상하부 통합 Door, 단디메카는 Upper · Lower · Rear Door

## 흐름에서

- **받는 것:** Inbound Trolley의 Sample Rack, STAT Storage의 Sample Socket, Prep Consumable Trolley의 Consumable · Reagent
- **하는 일:** Sample Barcode를 읽음(검사 Start 시각, POL-SMP-002) → 전처리 → 96-DWP로 분주
- **내보내는 것:** 96-DWP → Nucleic Acid Extraction. 쓴 Sample Rack → Outbound Trolley
- Barcode 훼손 · 등록 위치와 불일치면 그 Sample은 Not Tested로 회수 (POL-SMP-001 규칙 4)

## 특성 · 제약

1. 제조사가 둘(로체시스템즈, 단디메카)이라 Door 구성이 다름. 가동 중 Waste Bin 비우기는 로체시스템즈는 Door, 단디메카는 Rear Door로 조건부 허용 (`policy/equipment-states.md` 5절)
2. STAT Storage에는 Sample Socket만. Run 중에 넣으면 Trolley의 Sample보다 먼저 처리하고 별도 Batch가 됨. 넣은 뒤 [Run]을 눌러야 시작 (POL-LOD-003, POL-SMP-008)
3. 쓴 STAT Sample은 사용자 접근 공간으로만 돌아옴. 사용자 접근 공간은 제조사에 따라 4칸(단디메카) · 3칸(로체시스템즈)이고(화면은 같고 칸 수 영역만 다름), Rack을 넣은 칸은 돌아올 때까지 비워 둠 (POL-LOD-003 정의 · 규칙 3 · 4)
4. 만료 Reagent는 쓰지 않고 Trolley로 반환 (POL-SMP-007 규칙 3)
5. 전처리 Device(Sample Pretreatment)는 늘 아래칸에 둠. 위칸에는 분주 Device(Sample Aliquot)나 전처리 Device를 둠. 분주 방식(type)에 따라 Unit을 나눔 (MT-20260721-01, MT-20260728-01)
6. Buffer 공간: 단디메카는 실온 2칸 · 냉장 4칸, 분주 Module은 3칸 (MT-20260901-01, MT-20260916-01). Run이 끝나 장비 통합 상태가 Running에서 Ready가 될 때 Buffer 공간의 Consumable · Reagent가 Trolley로 돌아감 (MT-20260901-01)
7. Waste Bin은 유리문 안에 있음(단디메카는 뒤, 로체시스템즈는 앞). 분주 Unit 하나에 Waste Bin 2개가 달림 (MT-20260901-01)
8. Inbound Trolley Sample과 STAT Sample은 같은 96-DWP에 분주하지 않음 (POL-SMP-008 규칙 4)

## 관련 정책

POL-LOD-002 · 003, POL-SMP-001 · 002 · 008 · 010, POL-INV-005, POL-EQP-004 · 008

## 모르는 것

1. Upper · Lower Device가 0..1인 뜻: 한 대에 둘 중 하나만 있을 수 있는지, 둘이 같은 일을 나눠 하는지
2. 전처리가 필요한 Sample Type과 필요 없는 Sample Type (`glossary/sample-types.csv`와의 관계)
3. 96-DWP 한 장에 담는 Sample 수와 한 장이 다 차지 않았을 때 언제 내보내는지
4. STAT Storage가 가득 찼을 때(Buffer 8칸), 사용자 접근 공간이 모두 돌아올 자리로 막혔을 때
5. 제조사 차이가 화면 · 정책에 드러나야 하는 곳 (Door 말고도 있는지)
