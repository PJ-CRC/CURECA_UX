---
id: POL-MAT-006
title: Sample 적재 (Socket, Tray, Trolley)
summary: Sample Tube는 Test Order가 있고 Tube Setting에 등록된 것만, 같은 검사군끼리 한 Socket에 적재하며, Sample Socket은 Tray slot에, Sample Tray는 Sample Trolley 2F ~ 6F에 적재하고 1F에는 적재하지 않음
domain: MAT
menus: [Material Setup]
cids: [LI-TSS-PSI-SAM, LI-TSS-PSI-SAM-01-01, LI-TSS-PSI-SAM-01-02, LI-TSS-PSI-SAM-01-03, LI-TSS-PSI-SAM-01-04, LI-TSS-PSI-SAM-02-01, LI-TSS-PSI-SAM-02-02, LI-TSS-PSI-SAM-02-03, LI-TSS-PSI-SAM-03-01, LI-TSS-PSI-SAM-03-02, LI-TSS-PSI-SAM-03-03]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > Material Setup > 소켓(Socket) 내 검체 장착 정책, MS 적재 정책서 (20261102) > specimen-socket·specimen-tray·specimen-trolley, LI-TSS-PSI-SAM-01-01 ~ 03-03 디스크립션, policy/alert-catalog-ms.csv, 팀원 POL-MAT-02, 팀원 POL-DCK-06]
provisional: []
alerts: [MS_Alert_007, MS_Alert_008, MS_Alert_009, MS_Alert_010, MS_Alert_011, MS_Alert_012, MS_Alert_013, MS_Alert_014, MS_Alert_015, MS_Alert_016, MS_Alert_017, MS_Alert_018, MS_Alert_019, MS_Confirm_001, MS_Confirm_002, MS_Confirm_003, MS_Confirm_004, MS_Confirm_005, MS_Confirm_006, MS_Confirm_007, MS_Confirm_008]
data: [glossary/test-items.csv, glossary/sample-types.csv]
replaced_by:
---
# POL-MAT-006 Sample 적재 (Socket, Tray, Trolley)

## 정의

| 단계 | 순서 | 적재 방식 |
| --- | --- | --- |
| Load Samples into Socket (SAM-01) | 첫 Sample Tube 스캔 → Socket 스캔 → Sample Tube 반복 스캔 → [Done] | 하이라이팅 |
| Load Socket into Tray (SAM-02) | Tray 스캔 → Sample Socket 스캔 → Tray slot 스캔 반복 → [Done] | 위치 스캔 |
| Load Tray into Trolley (SAM-03) | Trolley 스캔 → Sample Tray 스캔 → Trolley floor 스캔 반복 → [Done] | 위치 스캔 |

## 규칙

1. Sample Tube는 Test Order가 등록되어 있어야 적재할 수 있음. Test Order가 없으면 MS_Alert_007, 취소된 검사면 MS_Alert_008, Tube Setting에 등록되지 않은 Tube면 MS_Alert_009를 보여 줌.
2. 첫 Sample Tube가 필요한 Socket type을 정함. Sample Tube마다 맞는 Socket type은 하나이며, 다른 type의 Socket을 스캔하면 MS_Alert_010을 보여 줌.
3. 한 Socket에는 같은 검사군의 Sample Tube만 적재함 (예: RP1, RP2, RP3은 한 Socket에 적재 가능). 검사군이 다르면 MS_Alert_012, 지금 Socket과 맞지 않는 Tube면 MS_Alert_013을 보여 줌.
4. 다른 Socket에 이미 적재된 Sample Tube를 스캔하면 MS_Confirm_001(새 Socket으로 옮김)을 보여 줌.
5. PK/IC Tube나 Standard Tube가 담긴 G10 Socket을 Sample Socket 단계에서 스캔하면 MS_Confirm_002(Sample 용으로 전환)를 보여 줌.
6. Sample Tray에는 Sample Socket만 적재함. Sample이 없는 Socket을 스캔하면 MS_Alert_015, Consumable·Reagent가 적재된 Tray를 스캔하면 MS_Confirm_003(Sample 용으로 전환)을 보여 줌.
7. Sample Trolley에는 Sample Tray만 적재함. Socket이 없는 빈 Sample Tray를 스캔하면 MS_Alert_017, Consumable Tray가 적재된 Trolley를 스캔하면 MS_Confirm_006(Sample 용으로 전환)을 보여 줌.
8. Sample Trolley의 1F에는 Tray를 적재하지 않음. 1F를 스캔하면 MS_Alert_018을 보여 줌. 적재할 수 있는 floor는 2F ~ 6F이며 카운터 분모는 5임.
9. Sample Trolley를 Inbound Trolley로 쓸 때 1F를 비워 두는 이유: Run 중에 Inbound Trolley와 Outbound Trolley를 함께 바꿀 때, 아직 처리 중이던 Rack이 새 Outbound Trolley의 1F 빈 Tray로 돌아옴 (POL-LOD-001).
10. Sample Trolley의 [Done] 시각은 Select Trolley(LI-TSS-PSI-01)의 Setup Date/Time이 됨.

## 예외

- [Next] 버튼을 스캔 화면에서 뺄지는 팀 논의 중 (`pending/PD-0004.md`)

## 근거

- 정책서_2026.08.28 "소켓(Socket) 내 검체 장착 정책" (같은 검사군끼리, Test Order 미접수·취소 Sample 적재 불가)
- MS 적재 정책서 (20261102) specimen-socket, specimen-tray, specimen-trolley
- 팀원 POL-DCK-06 Sample Storage Trolley 1층 운영 (팀원 쪽 사용자 확인 2026-10-16)
- LI-TSS-PSI-SAM-03-02 디스크립션 2 (카운터 0/5, v2.1.11), `policy/alert-catalog-ms.csv`

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-MAT-02) | |
