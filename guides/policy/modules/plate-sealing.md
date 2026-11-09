# Plate Sealing (플레이트 실링)

> Dx 시스템 · 검사 단계 Plate Sealing. 초안 v0.1 (2026-11-06)

## 역할

PCR Plate를 Film으로 실링합니다. PCR Reagent를 보관하는 Cold Storage도 이 Module에 있습니다.

## Unit (`glossary/module-units.csv`)

- Device: Sealer (1) · (2)
- Storage: Sealer Film Storage (1) · (2), Cold Storage (28칸: 행 7 × 열 4)
- Waste: Sealer Waste Bin (1) · (2)
- Door

## 다루는 것

- Sealing Film (기본 100 ea, 입력 항목) (`glossary/consumables.csv`)
- Cold Storage: PCR Reagent 구성품(PCR box용 PCR Socket), MM Tube Socket (`glossary/pcr-reagents.csv`, POL-LOD-002 DXI-06)

## 흐름에서

- **받는 것:** PCR Setup의 PCR Plate
- **내보내는 것:** 실링한 PCR Plate → Universal PCR
- Cold Storage의 PCR Socket은 PCR Setup이 가져가 Tube만 STARlet Rack(Socket 2 ~ 4개 분량)에 꽂고, Cap을 꽂은 Socket으로 돌아옴. Instrument 안에 Socket을 쌓아 둘 곳이 없기 때문임. 다 쓰면 Socket을 다시 가져가 Cap을 닫고 Tube만 폐기한 뒤 빈 Socket을 돌려보내며, 그 Socket 정보는 리셋됨. Cold Storage를 열면 Socket 모습으로 상태를 앎: Tube 있음 = 아직 쓰는 중 아님(뺄 수 있음), Cap만 있음 = STARlet에서 쓰는 중(빼면 안 됨), 아무것도 없음 = 다 씀. 사용자가 쓰는 중인 Socket을 빼도 막지 못하고, Instrument가 가지러 가서 없을 때 Event Message를 띄움 (POL-LOD-004 정의 · 규칙 1 ~ 6)

## 특성 · 제약

1. Sealer 한 대에 Film을 120장까지 넣음. Film 수는 사람이 Module Index별로 입력 · Apply함(지금 입력 최대 100, POL-LOD-004 질문 8). Sealer는 Film이 거꾸로 들어갔거나 밀린 것을 감지해도 사용 수를 셈 (POL-LOD-004 규칙 8 ~ 12)
2. Sealer Waste Bin은 만재 센서가 있고, 최대 수용 개수 Film 20장을 Fill Level(%) 계산 기준으로 씀. 센서가 감지해야 Full (Teams 글 2026-11-06 T08, 2026-11-06 사용자 확인, POL-INV-005)
3. 가동 중 Door는 Film 보충 · Sealer Waste Bin 비우기에 조건부 허용. PCR Setup과 함께 봄(AND) — 둘 중 하나라도 Running이면 둘 다 Paused 뒤 개방 (`policy/equipment-states.md` 5절)
4. PCR Reagent는 최대 사용 횟수 3. Decapping할 때마다 1회 늘고, 넘으면 Instrument가 자동 폐기 (`glossary/pcr-reagents.csv`, POL-INV-004 규칙 2 · 3)

## 관련 정책

POL-LOD-002 · 004, POL-MAT-001 · 004 · 008, POL-INV-002 · 005 · 007, POL-EQP-004 · 008 · 009

## 모르는 것

1. Cold Storage 온도 이상 시 동작
2. Sealer 한 대가 Error일 때 나머지 한 대로 계속하는지
3. Film이 0이 되면 Error인지 Paused인지
