---
id: POL-INV-002
title: Remaining Qty, Capacity, 사용량 집계
summary: Remaining Qty는 Storage와 Instrument 안 거치 공간의 수량을 합한 값이며, 입고 때 늘고 사용 후 반환·폐기·제거 때 줄고, Capacity는 최대 적재량을 관리하는 Storage에만 Instrument 셋팅 값으로 보여 줌
domain: INV
menus: [Inventory, Run, Quick Start]
cids: [TI-IVT-02-T, LI-IVT-02-T, TI-IVT-03-T, LI-IVT-03-T, TI-IVT-04-T, LI-IVT-04-T, TI-IVT-01-T, LI-IVT-01-T, LI-RUN-02, LI-RUN-03, LI-QUK]
status: 확정
version:
date: 2026-11-03
sources: [TI-IVT-02-T 1-3, TI-IVT-03-T 2-4·3-4·3-5, TI-IVT-04-T 2-4·3-5 디스크립션 ("정책 안내" 1·2), Common UX COMM-4-b, 2026-11-03 사용자 확인 (IV5)]
provisional: []
alerts: []
data: [glossary/module-units.csv]
replaced_by:
---
# POL-INV-002 Remaining Qty, Capacity, 사용량 집계

## 정의

- Remaining Qty: 품목이 적재된 Storage와 Instrument 안 거치 공간(Instrument가 가져간 품목 포함)의 수량을 합한 재고
- Capacity: Storage 하나에 적재할 수 있는 최대 수량
- Location: `Module (Index) > Storage Unit`

## 규칙

1. Remaining Qty는 Storage에 입고하면 늘고, 사용 후 Storage로 반환하거나 폐기하면 실제 사용 수량만큼 줄고, Storage에서 제거하면 줄어듦.
2. Instrument 안 거치 공간에 있는 품목은 실시간으로 줄이지 않고 적재된 때의 수량을 유지함. 모두 소진되거나 Storage로 반환될 때 Remaining Qty를 갱신함.
3. 카드(왼쪽)의 Remaining Qty는 그 품목이 적재된 모든 Location의 합이고, 상세(오른쪽)의 Remaining Qty는 Location별 값임.
4. Capacity는 최대 적재량을 관리하는 Storage에만 보여 주며, 값은 Instrument 셋팅 때 설정한 값임. Cold Storage처럼 여러 품목을 섞어 적재하는 Storage는 Capacity를 보여 주지 않음.
5. 수량 표기는 용어집 표기 규칙을 따름: Consumable은 `{수량} ea ({n} {단위})`, Reagent는 `{quantity} {baseUnit} ({n} {packagingUnit})`, 단위는 1개면 단수, 2개 이상이면 복수 (`glossary/glossary.md`).
6. 사용량은 폐기할 때만 Usage History에 기록함. 반환할 때는 Remaining Qty만 줄이고 사용량은 기록하지 않음 (POL-INV-006).

## 예외

없음

## 근거

- TI-IVT-03-T 디스크립션 2-4 "정책 안내" 1) 잔여량 집계 기준, 2) 사용량 집계 기준
- TI-IVT-03-T 3-4 Capacity (26.08.20 기준 장비 셋팅 값으로 변경), TI-IVT-02-T 1-3 (최대 적재량 표기 제거)
- Common UX COMM-4-b, `glossary/glossary.md` 표기 규칙
- 2026-11-03 사용자 확인 (IV5): 사용량은 폐기할 때만 기록

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 | |
| | 2026-11-03 | 사용량은 폐기할 때만 기록 (IV5) | 사용자 확인 |
