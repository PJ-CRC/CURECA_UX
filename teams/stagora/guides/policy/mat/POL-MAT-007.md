---
id: POL-MAT-007
title: Consumable·Reagent 적재 (Tray, Trolley)
summary: Consumable Tray를 구성할 때 Sample Trolley를 골라 필요한 Consumable·Reagent 개수를 안내받을 수 있고, 빈 Socket·Frame은 Step 1 guide로 담는 과정을 안내하며, Consumable Trolley는 1F에 반드시 빈 Tray를 두고 2F ~ 6F에 적재함
domain: MAT
menus: [Material Setup]
cids: [LI-TSS-PSI-LCR, LI-TSS-PSI-01, LI-TSS-PSI-LCR-01-01, LI-TSS-PSI-LCR-01-02, LI-TSS-PSI-LCR-01-03, LI-TSS-PSI-LCR-01-03-01, LI-TSS-PSI-LCR-01-04, LI-TSS-PSI-LCR-02-01, LI-TSS-PSI-LCR-02-02, LI-TSS-PSI-LCR-02-03]
status: 확정
version:
date: 2026-11-03
sources: [MS 적재 정책서 (20261102) > consumables-tray·consumables-trolley·common-loading-policy 2.3-1, LI-TSS-PSI-01·LCR-01-01 ~ 02-03 디스크립션, policy/alert-catalog-ms.csv, 2026-11-03 사용자 답변 (MS1, MS1-a, MS2, MS10)]
provisional: []
alerts: [MS_Alert_001, MS_Alert_003, MS_Alert_004, MS_Alert_016, MS_Alert_019, MS_Alert_020, MS_Alert_021, MS_Alert_022, MS_Alert_023, MS_Confirm_007, MS_Confirm_008, MS_Confirm_009, MS_Confirm_010, MS_Confirm_011, MS_Confirm_012]
data: [glossary/consumables.csv]
replaced_by:
---
# POL-MAT-007 Consumable·Reagent 적재 (Tray, Trolley)

## 정의

| Consumable·Reagent | 스캔 대상 | Tray에 올리는 방식 |
| --- | --- | --- |
| DWP | DWP Barcode | 단독으로 slot에 |
| Tip, Stool Swab | 자체 Barcode | Rack과 결합 |
| Standard Tube | Socket (빈 Socket은 Step 1에서 대표 Tube 1개) | Socket에 담아 Rack과 결합 |
| PK/IC Tube | PK/IC Socket (Load PK/IC Tubes에서 미리 구성, POL-MAT-008) | Socket을 Rack과 결합 |
| Tub | Frame (빈 Frame은 Step 1에서 Tub) | Frame에 담아 Rack과 결합 |

- 필요 수량: Select Trolley에서 고른 Sample Trolley의 Sample을 검사하는 데 필요한 Consumable·Reagent 개수

## 규칙

1. Load Consumables and Reagents에 들어가면 Select Trolley Popup(LI-TSS-PSI-01)이 먼저 뜸. 목록은 Sample 구성을 마치고 Run Start 전인 Sample Trolley이며, Setup Date/Time 내림차순임.
2. Sample Trolley를 고르면 그 Sample 기준으로 필요한 Consumable·Reagent 개수를 계산해 보여 주고, 사용자는 그 개수를 보고 Tray를 구성함. 고르기는 안내용이며 Consumable Tray와 Sample Trolley 사이에 데이터 연결은 생기지 않음. [Skip]하면 필요 수량 없이 모든 Consumable·Reagent를 스캔할 수 있음.
3. Trolley를 고른 경우에만: 필요 목록에 없는 항목은 MS_Alert_001, 필요 수량을 이미 다 채운 항목은 MS_Alert_020을 보여 줌.
4. 필요 수량은 [Done] 기준으로 고른 Sample Trolley 몫에 저장하고, 같은 Trolley를 다시 고르면 이어서 셈. 같은 작업에서 여러 Tray에 적재한 수량은 합침. [Remove]하거나 다른 위치로 옮기면(MS_Confirm_010) [Done] 때 원래 몫에서 뺌. Socket·Frame에 담는 Reagent는 Socket·Frame 1개를 1개로 셈. [Skip]으로 적재한 수량은 어느 Trolley 몫으로도 세지 않음.
5. 필요 수량은 개수로 세고, 스캔 완료 Toast는 Reagent의 반응 수를 `N rxns`로 보여 줌 (남은 수량이 있는 Reagent도 스캔할 수 있기 때문).
6. 데이터가 없는 Socket이나 Frame을 스캔하면 Step 1 guide Popup(LCR-01-03-01)으로 Reagent를 담고 Cap을 보충하고 Rack에 결합하는 과정을 안내함. 빈 Socket은 Standard Tube를 담으려는 것으로 봄 (PK/IC는 Load PK/IC Tubes에서 먼저 구성).
7. Step 1 guide Popup이 떠 있는 동안에도 스캔을 받음. 만료(MS_Alert_003), 폐기(MS_Alert_004), 필요 수량 충족(MS_Alert_020) Alert이 그대로 적용됨. 정상 스캔 뒤에도 Popup은 닫히지 않으며, Popup이 열린 채 Tray slot을 스캔하면 닫히고 적재로 진행함. Step 1을 마치기 전에 닫으면 그 항목은 데이터가 없는 채로 남음.
8. 데이터가 있는 Tub Frame을 적재하면 MS_Alert_021 "Refill tub spare caps and scan the tray slot."을 보여 주고 Tray slot 스캔으로 진행함.
9. Sample Socket·PCR Socket은 Consumable Tray에 적재할 수 없음 (MS_Alert_001). Sample Socket이 적재된 Tray를 스캔하면 MS_Confirm_009(Consumable 용으로 전환)를 보여 줌.
10. Consumable Trolley 1F에는 반드시 빈 Tray를 넣음. Prep 시스템에서 쓰던 Consumable·Reagent를 반환할 자리가 필요하기 때문임 (2F ~ 6F가 차 있으면 돌려놓을 곳이 없음). 품목이 모자라 Run 중에 Trolley를 바꿀 때를 늘 대비함.
11. 적재된 Tray를 1F에 두면 MS_Alert_023, 빈 Tray를 2F ~ 6F에 두면 MS_Alert_022를 보여 줌. 카운터 분모는 1F 빈 Tray를 포함해 6임.
12. Sample Tray가 적재된 Trolley를 스캔하면 MS_Confirm_012(Consumable 용으로 전환)를 보여 줌.
13. Tub는 어느 floor에 있든(1F 반환용 Tray에 돌아온 Tub 포함) 모두 Tub Cap Refill 목록에 나옴 (POL-LOD-004).

## 예외

- [Next] 버튼을 스캔 화면에서 뺄지는 팀 논의 중 (`pending/PD-0004.md`)
- 필요 수량을 넘겨 적재하는 것을 허용할지, [Skip]으로 구성한 Tray를 어떻게 셀지는 담당자 정책서에서 현업 문의 중 (consumables-tray 10장 4·5번)

## 근거

- MS 적재 정책서 (20261102) common-loading-policy 2.3-1, consumables-tray 1·5장, consumables-trolley 2장
- 2026-11-03 사용자 답변: MS1(1F 빈 Tray, 분모 6), MS1-a(Tub는 모두 Cap 보충 목록), MS2(Select Trolley 목적), MS10(Guide Popup 중 스캔)
- `policy/alert-catalog-ms.csv`

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 | |
