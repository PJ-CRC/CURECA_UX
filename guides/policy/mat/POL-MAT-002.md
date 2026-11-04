---
id: POL-MAT-002
title: 변경 예정 상태와 [Done] 저장
summary: Material Setup에서 스캔·컨펌·Remove로 바꾼 내용은 변경 예정으로만 기록하고 [Done]을 누를 때 한꺼번에 저장하며, 저장에 실패하면 아무것도 반영하지 않고 화면과 변경 예정 상태를 그대로 둠
domain: MAT
menus: [Material Setup]
cids: [LI-TSS-PSI-SAM-01-03, LI-TSS-PSI-SAM-02-02, LI-TSS-PSI-SAM-03-02, LI-TSS-PSI-LCR-01-03, LI-TSS-PSI-LCR-02-02, LI-TSS-PSI-PKI-03, LI-TSS-PSI-LPR-03, LI-TSS-PSI-LMM-02, LI-TSS-LTG-01-01, LI-TSS-LTG-02-01, LI-TSS-DXI-01, LI-TSS-DXI-02, LI-TSS-DXI-03, LI-TSS-DXI-04, LI-TSS-DXI-05, LI-TSS-DXI-06, LI-TSS-DXI-07]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > Material Setup > 데이터 저장, MS 적재 정책서 (20261102) > common-loading-policy 2.5·5장, policy/alert-catalog-ms.csv, 2026-11-03 사용자 답변 (MS5), 팀원 POL-MAT-05]
provisional: []
alerts: [MS_Alert_032, MS_Confirm_024]
data: [policy/alert-catalog-ms.csv]
replaced_by:
---
# POL-MAT-002 변경 예정 상태와 [Done] 저장

## 정의

- 저장된 데이터: 실제로 저장되어 있는 적재 데이터
- 변경 예정 상태: 지금 작업에서 스캔한 적재, 컨펌 동의, [Remove]처럼 [Done] 전에 기록만 해 둔 변경

## 규칙

1. 스캔으로 적재한 것, 컨펌에서 OK로 동의한 것, [Remove]로 뺀 것은 모두 변경 예정으로만 기록하고, [Done]을 누를 때 한꺼번에 저장함.
2. 다음 스캔에서 컨펌이나 Alert을 보여 줄지는 저장된 데이터와 변경 예정 상태를 함께 보고 정함.
3. [Done]을 누르면 상위와 하위 연결을 함께 저장함 (예: Socket과 그 안의 Sample, Tray와 그 안의 Socket, Trolley와 그 안의 Tray).
4. 저장 중 오류가 나면 일부만 저장하지 않고 기존 데이터를 그대로 둠. MS_Alert_032 "Failed to save."를 보여 주고, 지금 화면과 변경 예정 상태를 유지해 같은 화면에서 다시 저장할 수 있게 함.
5. [Done] 전에 메뉴를 벗어나려 하면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 컨펌 동의, 적재, [Remove], Step 1 guide 등록 등 변경 예정 사항을 모두 버리고 기존 데이터는 바꾸지 않음. 이 컨펌은 모든 Material Setup 화면에 공통으로 넣음.
6. 완료 화면의 [Add New]는 같은 흐름의 처음으로, [Finish]는 상위 메뉴로 감. 완료 화면에서 새 상위 Carrier를 스캔하면 그 Carrier의 적재 가이드로 바로 감.

## 예외

- Load Materials는 Storage를 물리적으로 닫으면 [Done]과 같게 저장함 (POL-LOD-002)

## 근거

- 정책서_2026.08.28 "데이터 저장" ([Done] 클릭 시 저장, 저장 전 이탈하면 저장되지 않음)
- MS 적재 정책서 (20261102) common-loading-policy 2.5, 5.1 ~ 5.4
- `policy/alert-catalog-ms.csv` MS_Alert_032, MS_Confirm_024
- 2026-11-03 사용자 답변 (MS5): 메뉴 이탈 컨펌은 모든 화면에 같게 들어감

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-MAT-05) | |
