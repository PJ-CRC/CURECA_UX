---
id: POL-MAT-005
title: 스캔 순서와 하이라이팅 적재
summary: Tray·Trolley 적재는 항목 스캔 뒤 위치 스캔으로 한 건을 적재하고, Socket 적재는 항목을 스캔하면 시스템이 넣을 slot을 하이라이팅하며, 가득 참·이미 적재·다른 Carrier 위치·스캔할 수 없는 코드는 Alert으로 막음
domain: MAT
menus: [Material Setup]
cids: [LI-TSS-PSI-SAM-01-03, LI-TSS-PSI-SAM-02-02, LI-TSS-PSI-SAM-03-02, LI-TSS-PSI-LCR-01-03, LI-TSS-PSI-LCR-02-02, LI-TSS-PSI-PKI-03, LI-TSS-PSI-LPR-03, LI-TSS-PSI-LMM-02]
status: 확정
version:
date: 2026-11-03
sources: [MS 적재 정책서 (20261102) > common-loading-policy 4.4·4.5, policy/alert-catalog-ms.csv, 2026-11-03 사용자 답변 (MS4)]
provisional: []
alerts: [MS_Alert_001, MS_Alert_011, MS_Alert_014, MS_Alert_016, MS_Alert_019]
data: [policy/alert-catalog-ms.csv]
replaced_by:
---
# POL-MAT-005 스캔 순서와 하이라이팅 적재

## 정의

- 위치 스캔 적재: 항목을 스캔한 뒤 넣을 위치(Trolley floor, Tray slot)를 스캔해 한 건을 적재함. Sample·Consumable Tray, Sample·Consumable Trolley
- 하이라이팅 적재: 항목을 스캔하면 시스템이 넣을 slot을 하이라이팅하고, 사용자는 위치를 스캔하지 않음. Sample Tube → Sample Socket, PK/IC Tube → PK/IC Socket, PCR box → PCR Socket. 위치 교체 컨펌(B)이 없음

## 규칙

1. 위치 스캔 적재에서 항목을 스캔한 뒤 위치를 스캔하기 전에 다른 항목을 스캔하면, Alert 없이 마지막 항목으로 바꾸고 스캔 완료 Toast를 보여 줌. 컨펌 판단은 새 항목 기준으로 함.
2. 위치 스캔 적재에서 항목보다 위치를 먼저 스캔하면 Toast로 순서를 안내함: Consumable Tray "Scan the consumable/reagent before scanning the tray slot.", Sample Tray "Scan the socket before scanning the tray slot.", Sample·Consumable Trolley "Scan the tray before scanning the trolley floor."
3. 작업 중인 Tray가 아닌 다른 Tray의 slot을 스캔하면 MS_Alert_016, 작업 중인 Trolley가 아닌 다른 Trolley의 floor를 스캔하면 MS_Alert_019를 보여 줌.
4. 하이라이팅 적재에서 slot은 순서대로 채움. [Remove]로 앞 slot을 비웠으면 마지막 slot까지 채운 뒤 비운 slot을 하이라이팅함 (세부 규칙은 개발 정의).
5. 하이라이팅 적재에서 상위(Socket)의 모든 slot이 차 있는데 새 항목을 스캔하면 MS_Alert_011 "All slots in this socket are full."을 보여 줌. 가득 참은 변경 예정 상태 기준이며, [Remove]나 용도 전환 컨펌(A)으로 비운 slot은 빈 slot으로 봄.
6. 하이라이팅 적재에서 지금 Socket에 이미 적재된 항목(저장된 연결과 변경 예정 연결 모두)을 다시 스캔하면 MS_Alert_014 "This is already loaded in [위치]."로 위치를 알려 줌.
7. "스캔할 수 없는 코드" MS_Alert_001은 MS 목록과 디스크립션에 명시한 경우에만 보여 줌: 하이라이팅 화면과 MM Tube 화면에서 하위 항목이 아닌 코드, 적재 가이드에서 Trolley·Tray 전체 Barcode, Consumable Tray에서 필요 목록 외 항목(Trolley를 고른 경우), Dx Storage에서 빈 PCR Socket 등. 각 흐름의 첫 스캔 화면에는 넣지 않음.
8. Alert을 닫으면 적재 가이드로 돌아가 그 흐름의 하위 항목 스캔부터 다시 함. 데이터는 바뀌지 않음.

## 예외

없음

## 근거

- MS 적재 정책서 (20261102) common-loading-policy 4.4 하이라이팅 적재 흐름, 4.5 스캔 순서·대상 규칙, 6장 복귀
- `policy/alert-catalog-ms.csv` MS_Alert_001·011·014·016·019 (이전 ID Alert_027·043·044·007)
- 2026-11-03 사용자 답변 (MS4): MS_Alert_001은 명시한 곳에만

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 | |
