---
id: POL-LOD-004
title: Cold Storage PCR Rack, Sealer Film, Cap 보충
summary: Cold Storage의 PCR Rack은 Reagent를 다 쓰면 자동 폐기되고 위치값이 리셋되며, Sealer Film은 Module Index별로 개수를 입력해 Apply하고, Buffer Cartridge Cap과 Tub Cap은 보충한 뒤 확인을 눌러 기록함
domain: LOD
menus: [Material Setup]
cids: [LI-TSS-DXI-06, LI-TSS-DXI-07, LI-TSS-DXI-08, LI-TSS-DXI-09]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > 트롤리 도킹 & Drawer Loading > Cold Storage_PCR Rack 정책, LI-TSS-DXI-07·08·09 디스크립션, policy/alert-catalog-ms.csv, 2026-11-03 사용자 답변 (MS1-a), 팀원 POL-DCK-03]
provisional: []
alerts: [MS_Confirm_018, MS_Confirm_019, MS_Confirm_020, MS_Confirm_021, MS_Confirm_022, MS_Alert_032]
data: []
replaced_by:
---
# POL-LOD-004 Cold Storage PCR Rack, Sealer Film, Cap 보충

## 정의

- Remaining: 지금 Sealer 안에 있는 Film 수
- Total films: 입력한 수 + Remaining

## 규칙

### Cold Storage PCR Rack

1. PCR Rack은 위로 옮겨져 Reagent 흡입을 시작·끝낸 뒤, 남은 Reagent와 함께 원래 Storage 위치로 돌아감.
2. Reagent를 다 쓰면 Reagent는 자동 폐기되고 Rack만 원래 위치로 돌아감. 자동 폐기된 때부터 그 Rack의 위치값은 자동으로 리셋됨.

### Sealer Film (DXI-07)

3. Plate Sealing Module Index별로 Sealer 1·2의 Film 수를 입력해 [Apply]함. 입력은 숫자만, 최대 100임. Apply하면 입력값이 Remaining에 반영되고 Toast "Applied film count for {Module Index}"를 보여 줌.
4. Apply하지 않고 다른 Module Index를 고르면 MS_Confirm_018을 보여 줌. Discard를 고르면 입력값을 저장하지 않고 고른 Index로 바꿈.
5. [Reset]을 누르면 MS_Confirm_020을 보여 주고, Reset을 고르면 그 Sealer의 Remaining과 Total films를 0으로 함.
6. [Done]은 Apply한 Index가 하나라도 있으면 활성화됨. Apply하지 않은 Index가 남아 있으면 MS_Confirm_019를 보여 주고, Proceed를 고르면 Apply한 Index만 저장함. Storage를 물리적으로 닫아도 [Done]과 같음.

### Buffer Cartridge Cap (DXI-08)

7. Flexible Extraction Module마다 Spare Cap 5개를 둠. Cartridge를 쓰고 Storage로 돌려놓았거나, Module 안에서 Cap을 집을 때 Cap이 없으면 [Confirm refill]이 활성화됨.
8. Cap을 보충하고 [Confirm refill]을 누르면 MS_Confirm_021을 보여 주고, OK를 고르면 그 Module의 Cap 보충을 완료로 기록하고 버튼을 비활성으로 함.

### Tub Cap (DXI-09)

9. Prep Consumable Storage Trolley에 있는 재사용 가능 Tub를 목록으로 보여 줌. Tub는 어느 floor에 있든(1F 반환용 Tray에 돌아온 Tub 포함) 모두 나옴. 정렬은 Trolley floor 내림차순, slot 오름차순임.
10. 항목별 [Confirm refill]이나 [Confirm all refills]를 누르면 MS_Confirm_022를 보여 주고, OK를 고르면 그 항목의 Cap 보충을 완료로 기록하고 버튼을 비활성으로 함.
11. Load Consumables and Reagents에서 데이터가 있는 Tub Frame을 다시 적재하면 Cap 보충 안내(MS_Alert_021)를 보여 줌 (POL-MAT-007 규칙 8).

## 예외

- Tub의 "재사용 가능 조건 = Y"가 어디서 정해지는지, View Trolley Info의 "Cap needed"와의 관계는 고객 논의 (CA-0009)

## 근거

- 정책서_2026.08.28 "Cold Storage_PCR Rack 정책", 팀원 POL-DCK-03
- LI-TSS-DXI-07 1 ~ 5, LI-TSS-DXI-08 1, LI-TSS-DXI-09 1 ~ 3 디스크립션
- 2026-11-03 사용자 답변 (MS1-a): Tub는 모두 Cap 보충 목록에 나옴
- `policy/alert-catalog-ms.csv` MS_Confirm_018 ~ 022

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-DCK-03) | |
