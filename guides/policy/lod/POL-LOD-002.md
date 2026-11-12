---
id: POL-LOD-002
title: Load Materials (Dx Storage 적재)
summary: Load Materials는 Dx 시스템 Module의 Storage QR을 스캔해 한 번에 하나의 Storage만 열고 적재하며, 다른 곳에 연결된 항목은 [Remove] 뒤에만 옮길 수 있고, Storage를 물리적으로 닫으면 [Done]과 같게 저장함
domain: LOD
menus: [Material Setup]
cids: [LI-TSS-DXI, LI-TSS-DXI-01, LI-TSS-DXI-02, LI-TSS-DXI-03, LI-TSS-DXI-04, LI-TSS-DXI-05, LI-TSS-DXI-06]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > 트롤리 도킹 & Drawer Loading > DX Storage 투입부 제어 정책, MS 적재 정책서 (20261102) > load-materials-policy, LI-TSS-DXI·DXI-01 ~ 06 디스크립션·공통 정의, policy/alert-catalog-ms.csv, 2026-11-03 사용자 답변 (MS6-a), 팀원 POL-DCK-02]
provisional: []
alerts: [MS_Alert_001, MS_Alert_003, MS_Alert_004, MS_Alert_015, MS_Alert_026, MS_Alert_027, MS_Alert_028, MS_Alert_029, MS_Alert_030, MS_Alert_031, MS_Alert_032]
data: [glossary/module-units.csv]
replaced_by:
---
# POL-LOD-002 Load Materials (Dx Storage 적재)

## 정의

| 화면 | Storage (Module) | 적재 항목 | 방식 |
| --- | --- | --- | --- |
| LI-TSS-DXI-01 | STAT Storage (Sample Preparation) | Sample Socket | 위치 스캔 |
| LI-TSS-DXI-02 | DWP·Spin Tip Storage (High-throughput Extraction) | DWP, Spin Tip | 위치 스캔 |
| LI-TSS-DXI-03 | MB Tube Storage (Flexible Extraction) | MB Tube | 바로 넣기 |
| LI-TSS-DXI-04 | Buffer Cartridge Storage (Flexible Extraction) | Buffer Cartridge | 위치 스캔 |
| LI-TSS-DXI-05 | Tip/PCR Plate Storage (PCR Setup) | Tip, PCR Plate | 바로 넣기 |
| LI-TSS-DXI-06 | Cold Storage (Plate Sealing) | PCR Socket (PCR box 용, MM Tube 용) | 위치 스캔 |

- 위치 스캔: 항목을 스캔한 뒤 Storage slot QR을 스캔해 적재함
- 바로 넣기: 항목을 스캔하면 바로 적재로 셈

## 규칙

1. Load Materials 화면의 배치도에서 Storage QR을 스캔하면 그 Storage가 열리고 적재 화면으로 감 (Toast "The scanned storage unit has been opened."). Door가 있는 곳은 Door Control(LI-INS-01-P)로 엶.
2. Storage 안에서 Consumable·Reagent가 옮겨지는 중이면 MS_Alert_026을 보여 주고 열지 않음. 판단 기준은 Instrument 내부 로직을 따름.
3. 한 번에 하나의 Storage만 열 수 있음. Storage가 열린 상태에서 다른 Storage 코드를 스캔하면 MS_Alert_027을 보여 줌.
4. 화면 제목은 `Module > Storage`, 같은 Module이 여러 대면 `Module (Index) > Storage`임.
5. Dx Storage는 Trolley·Tray와 달리 신규 작업 컨펌(A·B·C)을 쓰지 않음. 다른 Storage·Tray·Trolley에 연결된 항목(다른 Module Storage 포함)이나 이 Storage에 이미 적재된 항목을 스캔하면 MS_Alert_029를 보여 줌. 옮기려면 원래 위치에서 [Remove] 뒤 [Done]하고 다시 적재함.
6. 이미 항목이 있는 slot을 스캔하면 MS_Alert_028, Storage가 가득 찬 상태에서 새 항목을 스캔하면 MS_Alert_030을 보여 줌.
7. 만료된 Reagent는 MS_Alert_003, 폐기된 항목은 MS_Alert_004를 보여 줌. Consumable(Tip, PCR Plate)과 Sample Socket에는 Expiration Date 확인이 없음.
8. STAT Storage에는 Sample Socket만 적재함. Sample이 없는 Socket은 MS_Alert_015, Reagent Socket은 MS_Alert_001을 보여 줌 (POL-LOD-003).
9. High-throughput Extraction의 Spare Storage를 스캔하면 MS_Alert_031을 보여 줌 (POL-EQP-006).
10. Dx용 Reagent·Consumable은 Assay Pack의 Segment 고유 코드(LB, WB, MB, EB 등)로 구분되어, 같은 종류라도 Prepare Carrier용과 섞이지 않음.
11. 스캔 순서와 Toast는 POL-MAT-005 규칙 1·2와 같음. 위치를 먼저 스캔하면 "Scan the {socket·consumable·reagent} before scanning the storage slot."을 보여 줌.
12. [Remove]는 위치 스캔 Storage에만 있음. MB Tube Storage는 안의 BCR 장치가 위치를 읽어 관리하고, Tip/PCR Plate Storage는 순서가 없는 같은 재료라 [Remove]를 두지 않음 (POL-MAT-004 규칙 8).
13. [Done]을 누르거나 Storage를 물리적으로 닫으면 저장하고 Load Materials 화면으로 돌아감 (Toast "DX storage loading is complete."). 저장에 실패하면 MS_Alert_032.
14. Required Quantity 버튼은 Instrument 스케줄에 따라 이 Storage(Index)에 필요한 수량을 보여 주며, 적재를 막지 않음.
15. MB Tube Storage는 MB Tube를 5개까지 넣음. 원래 10칸이지만 Buffer Cartridge 입고 단위(5)에 맞춰 남은 5칸의 입구를 막아 씀 (MT-20260819-01, MT-20260820-01).
16. Dx Storage의 칸 수는 장비 모델에 따라 다름(표준형은 기본 개수, 맞춤형은 최대 개수. 예: DWP 5칸 · 6칸). 칸 수는 하드웨어에서 관리하고, 화면은 장비가 올려 주는 값을 그대로 보여 줌 (MT-20260819-01, MT-20260820-01).

## 예외

없음

## 근거

- 정책서_2026.08.28 "DX Storage 투입부 제어 정책" (한 번에 하나만 개방)
- MS 적재 정책서 (20261102) load-materials-policy
- LI-TSS-DXI, LI-TSS-DXI-01 ~ 06 디스크립션, DXI-01 ~ 07 공통 정의, "Inventory 버튼 선택 시" 세부 정의
- 2026-11-03 사용자 답변 (MS6-a)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-DCK-02) | |
| | 2026-11-06 | MB Tube 5개(규칙 15), Dx Storage 칸 수는 모델별 · 장비 값 그대로(규칙 16) | MT-20260819-01, MT-20260820-01 |
