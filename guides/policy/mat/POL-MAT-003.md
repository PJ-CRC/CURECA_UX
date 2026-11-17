---
id: POL-MAT-003
title: 신규 작업 컨펌 (용도 전환, 위치 교체, 새 위치로 옮김)
summary: 데이터가 있는 Carrier나 항목을 스캔하면 컨펌으로 신규 작업 여부를 물으며, 다른 용도로 쓰기(A), 위치의 기존 항목 바꾸기(B), 다른 상위에 있던 항목 옮기기(C) 세 가지가 있고, OK는 동의만 기록하며 하위 데이터는 유지함
domain: MAT
menus: [Material Setup]
cids: [LI-TSS-PSI-SAM-01-01, LI-TSS-PSI-SAM-01-02, LI-TSS-PSI-SAM-01-03, LI-TSS-PSI-SAM-01-04, LI-TSS-PSI-SAM-02-01, LI-TSS-PSI-SAM-02-02, LI-TSS-PSI-SAM-02-03, LI-TSS-PSI-SAM-03-01, LI-TSS-PSI-SAM-03-02, LI-TSS-PSI-SAM-03-03, LI-TSS-PSI-LCR-01-02, LI-TSS-PSI-LCR-01-03, LI-TSS-PSI-LCR-01-04, LI-TSS-PSI-LCR-02-01, LI-TSS-PSI-LCR-02-02, LI-TSS-PSI-LCR-02-03, LI-TSS-PSI-PKI-02, LI-TSS-PSI-PKI-03, LI-TSS-PSI-PKI-04, LI-TSS-PSI-LPR-02, LI-TSS-PSI-LPR-03, LI-TSS-PSI-LPR-04, LI-TSS-PSI-LMM-01, LI-TSS-PSI-LMM-03]
status: 확정
version:
date: 2026-11-03
sources: [MS 적재 정책서 (20261102) > common-loading-policy 3·4·6장, specimen-trolley·consumables-trolley·specimen-tray·consumables-tray·specimen-socket·pkic-setup·pcr-setup·mm-tube 컨펌 정의, policy/alert-catalog-ms.csv]
provisional: []
alerts: [MS_Confirm_001, MS_Confirm_002, MS_Confirm_003, MS_Confirm_004, MS_Confirm_005, MS_Confirm_006, MS_Confirm_007, MS_Confirm_008, MS_Confirm_009, MS_Confirm_010, MS_Confirm_011, MS_Confirm_012, MS_Confirm_013, MS_Confirm_014, MS_Confirm_015, MS_Confirm_016, MS_Confirm_017]
data: [policy/alert-catalog-ms.csv]
replaced_by:
---
# POL-MAT-003 신규 작업 컨펌 (용도 전환, 위치 교체, 새 위치로 옮김)

## 정의

| 컨펌 | 언제 | 하는 일 | OK | Close |
| --- | --- | --- | --- | --- |
| A 용도 전환 ("Use this … for …?") | 다른 계열·용도가 적재된 상위 Carrier(Trolley, Tray, Socket)를 첫 단계에서 스캔 | 그 Carrier를 이번 작업용 새 Carrier로 바꿈. 안에 있던 항목과의 연결을 모두 끊음 | 동의 기록 후 적재 가이드로 | 첫 스캔 화면으로 |
| B 위치 교체 ("Replace …?") | 이미 다른 항목이 연결된 위치(Trolley floor, Tray slot)를 스캔 | 그 위치의 기존 항목 연결을 끊고 새 항목을 연결 | 동의 기록 후 정상 적재 완료 | 적재 가이드로, 지금 항목만 초기화 |
| C 새 위치로 옮김 ("Reassign …?") | 이미 다른 상위에 연결된 항목을 스캔 | 그 항목의 기존 상위 연결을 끊고 새 위치에 연결 | 동의 기록 후 다음 스캔 | 적재 가이드로, 지금 항목만 초기화 |

| 흐름 | A | B | C |
| --- | --- | --- | --- |
| Sample Socket (SAM-01) | MS_Confirm_002 | 없음 (하이라이팅) | MS_Confirm_001 |
| Sample Tray (SAM-02) | MS_Confirm_003 | MS_Confirm_005 | MS_Confirm_004 |
| Sample Trolley (SAM-03) | MS_Confirm_006 | MS_Confirm_008 | MS_Confirm_007 |
| Consumable Tray (LCR-01) | MS_Confirm_009 | MS_Confirm_011 | MS_Confirm_010 |
| Consumable Trolley (LCR-02) | MS_Confirm_012 | MS_Confirm_008 | MS_Confirm_007 |
| PK/IC Socket (PKI) | MS_Confirm_013 | 없음 (하이라이팅) | MS_Confirm_014 |
| PCR Socket (LPR) | MS_Confirm_015 | 없음 (하이라이팅) | MS_Confirm_016 |
| MM Tube Socket (LMM) | MS_Confirm_017 | 없음 | 없음 |

## 규칙

1. 데이터가 있는 Carrier나 항목을 스캔하면 신규 작업 여부를 컨펌으로 물음. 단, 같은 계열의 Carrier에 이어서 적재하는 것처럼 데이터가 있는 것이 정상인 경우는 컨펌 없이 진행함 (예: Sample 계열 Trolley를 Sample Trolley 흐름에서 스캔, 상위 연결이 없는 Sample Tray를 Trolley에 적재).
2. OK는 동의와 변경 예정 사항만 기록함. 실제 연결 해제와 새 연결은 [Done]에서 반영함 (POL-MAT-002).
3. 신규 작업은 정한 연결만 끊고, 하위 항목의 데이터는 유지함 (예: A로 Trolley를 새로 쓰면 Trolley와 Tray의 연결만 끊고, Tray와 그 안 항목의 데이터는 유지).
4. A에 OK하면 변경 예정 상태에서 그 Carrier의 모든 위치(floor·slot)를 빈 값으로 봄. 그래서 [Done] 전에 그 Carrier의 위치를 스캔하면 B를 보여 주지 않음.
5. A에 OK해도 [Done] 전에 메뉴를 벗어나면 동의를 버림. 같은 Carrier를 다시 스캔하면 A를 다시 보여 줌.
6. A로 새로 쓰게 된 Carrier 안에 물리적으로 남은 항목은 사용자가 빼야 함 (화면에 보여 주지 않는 내부 메모).
7. C에서 해제 예정으로 기록한 연결은 B 판단에서 뺌. 같은 항목을 같은 위치에 다시 적재하면 C만 보여 주고 B는 보여 주지 않으며, [Done]에서 기존 연결 해제와 새 연결을 함께 반영함.
8. 변경 예정 상태에 이미 기록된 연결도 B·C 판단 대상임 (예: Tray B를 4F에 적재한 뒤 [Done] 전에 Tray C를 4F에 적재하면 B를 보여 줌).
9. 지금 작업 중인 상위에 이미 연결된 항목을 다시 스캔해도 C를 보여 줌 (같은 상위라는 예외 없음). 단, 하이라이팅 적재 흐름에서는 C 대신 MS_Alert_014로 적재 위치를 알려 줌 (POL-MAT-005).
10. [Remove]로 뺀 항목과 위치는 변경 예정 상태에서 연결이 없는 것으로 보아 B·C를 보여 주지 않음.
11. Close를 고르면 지금 진행 중인 항목의 스캔과 동의만 초기화하고, 이미 정상 적재 완료로 기록된 다른 항목의 변경 예정 사항은 유지함.
12. Load Materials(Dx Storage)는 A·B·C를 쓰지 않음. 다른 곳에 연결된 항목은 [Remove] 후에만 옮김 (POL-LOD-002).

## 예외

없음

## 근거

- MS 적재 정책서 (20261102) common-loading-policy 3장, 4장(4.1 C와 B의 관계, 4.2 A 추가 규칙), 6장
- 흐름별 정책서 3.1 컨펌 적용, 6장 컨펌 정의 (`reference/team/material-setup-20261102/`)
- `policy/alert-catalog-ms.csv` MS_Confirm_001 ~ 017 (이전 ID Confirm_026·027·028)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 | |
