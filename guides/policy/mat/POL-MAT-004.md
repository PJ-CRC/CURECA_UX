---
id: POL-MAT-004
title: Remove
summary: 적재 가이드의 [Remove]는 Remove Popup에서 고른 위치의 항목을 빼는 기능이며, 제거는 변경 예정으로 기록되고 [Done]에서 반영되며, MM Tube·MB Tube·Tip/PCR Plate처럼 위치가 의미 없는 적재에는 두지 않음
domain: MAT
menus: [Material Setup]
cids: [LI-TSS-CMP-01, LI-TSS-PSI-SAM-01-03, LI-TSS-PSI-SAM-02-02, LI-TSS-PSI-SAM-03-02, LI-TSS-PSI-LCR-01-03, LI-TSS-PSI-LCR-02-02, LI-TSS-PSI-PKI-03, LI-TSS-PSI-LPR-03, LI-TSS-LTG-01-01, LI-TSS-LTG-02-01, LI-TSS-DXI-01, LI-TSS-DXI-02, LI-TSS-DXI-03, LI-TSS-DXI-04, LI-TSS-DXI-05, LI-TSS-DXI-06, LI-TSS-PSI-LMM-02]
status: 확정
version:
date: 2026-11-03
sources: [MS 적재 정책서 (20261102) > common-loading-policy 4.3, LI-TSS-CMP-01 디스크립션·세부 정의, policy/alert-catalog-ms.csv, 2026-11-03 사용자 답변 (MS6, MS6-a)]
provisional: []
alerts: [MS_Confirm_023, MS_Alert_033]
data: [policy/alert-catalog-ms.csv]
replaced_by:
---
# POL-MAT-004 Remove

## 정의

| 흐름 | Remove 대상 ({target}) |
| --- | --- |
| Group Lots | reagents (Lot에 넣은 Reagent) |
| Sample·Consumable Trolley | floors (floor에 적재한 Tray) |
| Sample·Consumable Tray, Sample·PK/IC·PCR Socket, Dx Storage(위치 스캔형) | slots (slot에 적재한 항목) |

## 규칙

1. 적재 가이드의 [Remove]는 적재된 항목이 1개 이상일 때 활성화됨. 누르면 Remove Popup(LI-TSS-CMP-01)이 열림.
2. Remove Popup에서는 적재된 위치만 고를 수 있고, 적재되지 않은 위치는 비활성임. [Select All]로 모두 고를 수 있음.
3. 위치를 고르고 [Remove]를 누르면 MS_Confirm_023 "Do you want to remove the {#N} selected {target}?"를 보여 줌. Remove를 고르면 고른 위치를 제거 예정으로 기록하고 적재 개수를 새로 고친 뒤 MS_Alert_033 "The removal is complete."를 보여 줌.
4. 제거는 변경 예정으로만 기록되고 [Done]에서 반영됨. [Done] 전에 메뉴를 벗어나면 버림 (POL-MAT-002).
5. 제거한 위치는 빈 위치로, 제거한 항목은 상위 연결이 없는 것으로 봄. 같은 작업에서 그 위치나 항목을 다시 스캔해도 위치 교체·새 위치 컨펌을 보여 주지 않음 (POL-MAT-003 규칙 10).
6. 하이라이팅 적재(Socket)에서 slot을 비우는 방법은 [Remove]뿐임. 같은 Socket 안에서 slot을 옮기려면 [Remove] 뒤 다시 스캔함.
7. Consumable Trolley의 1F는 빈 Tray가 적재되어 있어도 고를 수 있음. 적재 데이터가 없을 때만 비활성임.
8. 다음 적재에는 [Remove]를 두지 않음.
   - MM Tube (LMM-02): 모두 같은 Tube이고 위치값이 필요 없으며, Socket을 꽉 채워 넣는 것이 정책임
   - MB Tube Storage (DXI-03): Storage 안의 BCR 장치가 Barcode를 읽어 위치를 스스로 알고 가져감
   - Tip/PCR Plate Storage (DXI-05): 같은 재료이고 순서가 없어 하나를 골라 빼는 것이 의미 없음
   - Sealer Film Storage (DXI-07): 개수를 입력하는 화면이라 [Reset]을 씀 (POL-LOD-004)

## 예외

없음

## 근거

- MS 적재 정책서 (20261102) common-loading-policy 4.3
- LI-TSS-CMP-01 디스크립션 1 ~ 3과 흐름별 세부 정의 9개 ({target}, LCR-02 1F 비활성 규칙)
- `policy/alert-catalog-ms.csv` MS_Confirm_023, MS_Alert_033 (이전 ID Confirm_006, Alert_005)
- 2026-11-03 사용자 답변 (MS6: MM Tube, MS6-a: DXI-03·05)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 | |
