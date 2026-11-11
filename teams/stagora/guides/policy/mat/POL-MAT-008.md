---
id: POL-MAT-008
title: PK/IC Tube, PCR Reagent, MM Tube Socket 구성
summary: PK/IC Tube는 Barcode를 읽어 G10 Socket에 미리 구성해 Consumable Trolley로 넣고, PCR box는 같은 Expiration Date끼리 PCR Socket에 최대 2개(HPV28은 1개) 담아 Cold Storage로 넣으며, MM Tube는 PCR Socket에 14개를 꽉 채워 넣음
domain: MAT
menus: [Material Setup]
cids: [LI-TSS-PSI, LI-TSS-PSI-PKI-01, LI-TSS-PSI-PKI-02, LI-TSS-PSI-PKI-03, LI-TSS-PSI-PKI-04, LI-TSS-PSI-LPR-01, LI-TSS-PSI-LPR-02, LI-TSS-PSI-LPR-03, LI-TSS-PSI-LPR-04, LI-TSS-PSI-LMM-01, LI-TSS-PSI-LMM-02, LI-TSS-PSI-LMM-03]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > Material Setup > PCR Regents 소켓(Socket) 구성 정책, MM tube 소켓(Socket) 구성 정책, MS 적재 정책서 (20261102) > pkic-setup·pcr-setup·mm-tube, policy/alert-catalog-ms.csv, 2026-11-03 사용자 답변 (MS3, MS6, MS7), 팀원 POL-MAT-03·04]
provisional: []
alerts: [MS_Alert_001, MS_Alert_003, MS_Alert_004, MS_Alert_011, MS_Alert_014, MS_Alert_024, MS_Alert_025, MS_Confirm_013, MS_Confirm_014, MS_Confirm_015, MS_Confirm_016, MS_Confirm_017]
data: [glossary/pcr-reagents.csv, glossary/consumables.csv]
replaced_by:
---
# POL-MAT-008 PK/IC Tube, PCR Reagent, MM Tube Socket 구성

## 정의

| 흐름 | 순서 | 넣는 곳 |
| --- | --- | --- |
| Load PK/IC Tubes (PKI) | Select Trolley 또는 Skip → G10 Socket 스캔 → PK/IC Tube 반복 스캔(하이라이팅) → [Done] | 구성한 Socket을 Consumable Tray로 (POL-MAT-007) |
| Load PCR Reagents (LPR) | Select Trolley 또는 Skip → PCR Socket 스캔 → PCR box 반복 스캔(하이라이팅) → [Done] | Dx 시스템 Cold Storage (POL-LOD-002) |
| Load MM Tubes (LMM) | PCR Socket 스캔 → MM Tube 14개를 직접 넣음 → [Done] | Dx 시스템 Cold Storage |

## 규칙

1. PK Tube(Nucleic Acid Extraction 단계)와 IC(PCR Reagent 구성품)는 같은 박스에서 나온 구성품끼리 짝지어 씀. PCR Reagent는 반드시 짝을 맞추고, 추출 Reagent는 권고라 짝 정보가 없으면 그대로 쓸 수도 있음 (POL-INV-007).
2. 그래서 PK/IC Tube는 Barcode를 읽어 Socket에 구성해야 함. Instrument는 그 데이터로 같은 박스의 것과 위치를 알고 꺼내 씀. Dx Storage는 Trolley보다 넣을 수 있는 수가 적어, Prep 시스템은 분주 전에 Dx 시스템에서 Storage에 있는 Reagent 정보를 받아 쓸 수 있는 PK/IC를 찾음.
3. Load PK/IC Tubes는 Consumable Trolley에 넣기 전에 G10 Socket에 Tube를 읽어 미리 구성하는 단계임. 구성한 PK/IC Socket은 Load Consumables and Reagents에서 Rack과 결합해 Tray에 적재함.
4. Load PK/IC Tubes와 Load PCR Reagents는 Lot을 구성한 항목만 받음. Lot이 없으면 MS_Alert_024를 보여 줌 (Group Lots는 POL-MAT-009). 단, IC가 없는 PCR box는 Lot 없이 Load PCR Reagents에서 바로 적재함.
5. PK/IC Tube·PCR box 스캔 판단 순서: 스캔할 수 없는 코드(MS_Alert_001) → 폐기(MS_Alert_004) → 만료(MS_Alert_003) → Lot 미구성(MS_Alert_024) → 이미 적재(MS_Alert_014) → (PCR box만) Expiration Date 다름(MS_Alert_025) → 가득 참(MS_Alert_011) → 다른 Socket에 있음(MS_Confirm_014·016).
6. Sample이나 Standard Tube가 담긴 G10 Socket을 PK/IC 단계에서 스캔하면 MS_Confirm_013(PK/IC 용으로 전환)을 보여 줌.
7. PCR Socket 하나에는 한 종류의 PCR Reagent만, 같은 Expiration Date끼리 담음. Expiration Date가 다르면 MS_Alert_025를 보여 줌.
8. PCR Socket 하나에는 PCR box를 최대 2개(A·B slot) 담고, 몇 개를 담을지는 사용자가 정함. Allplex™ HPV28 Detection은 구성 Tube가 많아 Socket 하나에 1개만 담으며, 담으면 가득 찬 것으로 봄. 다른 box가 있는 Socket에 HPV28을 스캔해도 MS_Alert_011임.
9. MM Tube 용 Socket을 PCR box 단계에서 스캔하면 MS_Confirm_015, PCR box가 담긴 Socket을 MM Tube 단계에서 스캔하면 MS_Confirm_017을 보여 줌.
10. MM Tube는 Barcode가 없고 모두 같은 Tube임. 하나씩 읽지 않고 PCR Socket을 MM Tube 용으로 정하며, Socket 하나에 14개를 꽉 채워 넣는 것이 정책임. 위치값이 필요 없어 [Remove]를 두지 않음.
11. 고른 Sample Trolley가 있으면 Load PK/IC Tubes·Load PCR Reagents도 필요 수량을 보여 줌. 고르기나 Skip은 컨펌·Alert 판단에 영향을 주지 않음.

## 예외

- 한 G10 Socket에 PK와 IC가 함께 들어갈 때 칸 배정 규칙과 디폴트 카운터("0/M", "0/48")는 확인 필요 (MS3-a)
- PK Tube·IC Tube의 Lot 구성 판단과 Group Lots(Universal Cartridge Kit: EB Tub + MB Tube + PK Tube)와의 관계는 POL-MAT-009

## 근거

- 정책서_2026.08.28 "PCR Regents 소켓(Socket) 구성 정책" (1 Socket 1종류, 같은 Expiration Date, 최대 2세트, Tube 수가 많은 시약은 1세트), "MM tube 소켓(Socket) 구성 정책" (14개 모두 채움). 같은 정책서의 "IC는 STAT Storage로 입고"는 이전 내역 (반영 대기 고칠 것 12)
- MS 적재 정책서 (20261102) pkic-setup 5장, pcr-setup 2.2·5장, mm-tube
- 2026-11-03 사용자 답변: MS3(PK·IC 짝 구성 이유와 흐름), MS6(MM Tube Remove 없음), MS7(MM Tube 14개)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-MAT-03·04) | |
