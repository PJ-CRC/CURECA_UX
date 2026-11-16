---
id: POL-INV-003
title: Required Qty와 재고 상태
summary: Required Qty는 Run에 필요한 수량에서 재고를 뺀 부족 수량이며, Required Qty와 Status(Run 대비 재고 상태)는 Inbound Trolley가 도킹되어 있거나 Run Start 뒤 Batch가 끝나기 전이면 보여 주고, 재고 상태(Sufficient, Low, Insufficient)는 Consumable과 Reagent에 같은 값을 씀
domain: INV
menus: [Inventory, Run, Quick Start]
cids: [TI-IVT-01-T, LI-IVT-01-T, TI-IVT-03-T, LI-IVT-03-T, TI-IVT-04-T, LI-IVT-04-T, LI-RUN-02, LI-RUN-03, LI-QUK]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > 시약/소모품 사용 및 폐기 > 소모품/시약 재고 상태값 정의, 씨젠 상태 정보 261021 > 재고 상태, TI-IVT-01-T 1, TI-IVT-03-T 2·2-5·2-6·3-6, TI-IVT-04-T 2-5·2-6 디스크립션, 팀원 POL-RGT-09, 2026-11-03 사용자 확인 (IV1, IV2, IV3, IV7)]
provisional: []
alerts: []
data: [glossary/status-values.csv]
replaced_by:
---
# POL-INV-003 Required Qty와 재고 상태

## 정의

- Required Qty: Run에 필요한 수량에서 지금 재고(Remaining Qty)를 뺀 부족 수량. 예: 재고 10, 필요 수량 14 → Required Qty 4
- 재고 상태 값과 정의는 `glossary/status-values.csv`의 재고 상태가 기준이며, Consumable과 Reagent에 같은 값을 씀

| 재고 상태 | 조건 | 결과 |
| --- | --- | --- |
| Sufficient | 잔여 수량 ≥ 필요 수량 | 부족 없음 |
| Low | 잔여 수량이 필요 수량보다 1개 이상 적음 (예: 1000개 필요, 999개 이하) | 지금 Run은 계속할 수 있음 |
| Insufficient | 잔여 수량 0 | 그 품목을 쓰는 단계에서 Error가 생겨 Run이 중단됨 |

## 규칙

1. Remaining Qty는 Instrument에 그 품목이 있으면 장비 통합 상태와 관계없이 보여 줌 (POL-INV-002).
2. Required Qty와 Status(Run 대비 재고 상태)는 아래 두 조건 중 하나라도 맞으면 보여 주고, 둘 다 아니면 '-'로 보여 줌.
   - Sample Storage에 Inbound Trolley가 도킹되어 있음
   - [Run Start]로 Run이 시작된 뒤 진행 중인 Batch가 끝나지 않음. 장비 통합 상태가 Partial Running이나 Error가 되어도 Batch가 끝나지 않았으면 계속 보여 줌
3. 예: Run 중에 Sample이 모두 Trolley에서 빠져 Inbound Trolley를 분리해도, Batch가 끝나지 않았으면 Required Qty와 Status를 계속 보여 줌.
4. 한 품목의 Location 중 Insufficient와 Low가 함께 있으면 카드에는 Insufficient를 보여 줌 (Insufficient > Low > Sufficient).
5. Remaining Qty와 Required Qty가 모두 0인 품목과 Location은 숨김. 카드 안 품목이 모두 숨김이면 카드도 숨김.
6. Status Chip(Insufficient, Low, Sufficient)은 여러 개를 함께 고를 수 있고, 고른 상태의 품목만 왼쪽 카드와 오른쪽 상세에 보여 줌. 다시 누르면 해제함.
7. Summary의 Inventory Status는 부족한 Consumable·Reagent를 Insufficient, Low 순으로, 같은 상태에서는 부족 수량이 많은 순으로, 같으면 Name 오름차순으로 보여 줌. 한 페이지에 6개씩 보여 줌. 요약 카드도 Insufficient와 Low로 나눔.
8. Summary에서 규칙 2의 조건이 모두 아니면 "Shown only if system running or Inbound Trolley docked"를, 부족한 품목이 없으면 "No actions required"를 보여 줌.

## 예외

없음

## 근거

- 정책서_2026.08.28 "소모품/시약 재고 상태값 정의", 씨젠 상태 정보 261021 "재고 상태"
- 2026-11-03 사용자 확인: 화면의 "재고 0", "1개 이상 부족"은 상태값 정의의 예시이며 같은 뜻 (IV1). Consumable과 Reagent는 같은 재고 상태를 씀 (IV2). Required Qty 노출 조건 (IV3). Empty는 Insufficient로 바뀜 (IV7). Status는 Run 대비 재고 상태라 Required Qty와 같은 조건에서만 보여 주고, 아니면 Required Qty와 Status 모두 '-' (IV3-a)
- TI-IVT-01-T 1·1-1·1-6, TI-IVT-03-T 1·2·2-5·2-6·3·3-6, TI-IVT-04-T 2-5·2-6 디스크립션

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-RGT-09) | |
| | 2026-11-03 | 재고 상태 정의, Reagent 적용, Required Qty 노출 조건, Empty → Insufficient 정함 (IV1, IV2, IV3, IV7) | 사용자 확인 |
| | 2026-11-03 | Status도 Required Qty와 같은 조건에서 보여 줌 (IV3-a) | 사용자 확인 |
