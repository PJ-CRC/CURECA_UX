---
id: POL-MAT-010
title: Carrier 데이터 리셋
summary: Carrier 데이터는 그 Carrier의 데이터만 리셋하고 하위 데이터는 유지하며, Sample Trolley는 Sample이 Outbound Trolley로 옮겨질 때, Consumable Trolley는 품목이 소진될 때 Rack·Tray·Trolley 순으로 자동 리셋됨
domain: MAT
menus: [Material Setup, Run]
cids: [LI-TSS-PSI, LI-TSS-PSI-SAM, LI-TSS-PSI-LCR, LI-TSS-CMP-01]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > Material Setup > 기물 데이터 리셋(Reset) 및 갱신 정책, 팀원 POL-MAT-06 (팀원 쪽 사용자 전달 2026-10-28), policy/policy-backlog.md 추가할 것 13]
provisional: []
alerts: []
data: []
replaced_by:
---
# POL-MAT-010 Carrier 데이터 리셋

## 정의

- 리셋 대상: Lot, Socket(Sample, PCR Reagent), Tray, Trolley, Drawer(STAT, Dx)

| Trolley | 단위 | 리셋 시점 | 리셋 범위 |
| --- | --- | --- | --- |
| Sample Trolley | Rack (Sample Socket 단위) | Outbound Trolley로 옮겨진 때 | Socket 안 Sample 값, Socket이 꽂혀 있던 Tray 위치 값 |
| Sample Trolley | Tray | Inbound Trolley의 마지막 Sample Rack이 Outbound Trolley로 옮겨진 때 | Tray에 연결된 Trolley 정보 값 |
| Sample Trolley | Trolley | 안의 마지막 Tray 값이 리셋된 때 (모든 Sample이 Outbound Trolley로 옮겨짐) | - |
| Consumable Trolley | Rack (또는 입고 단위) | Rack의 Consumable(또는 Reagent)이 모두 소진된 때 | Rack이 꽂혀 있던 Tray 위치 값 |
| Consumable Trolley | Tray | Tray의 마지막 Rack이 Prep 시스템에서 모두 쓰여 Tray 위치 값이 지워진 때 | Tray에 연결된 Trolley 정보 값 |
| Consumable Trolley | Trolley | 안의 마지막 Tray 값이 리셋된 때 (모든 Consumable 소진) | - |

## 규칙

1. 리셋은 그 Carrier의 데이터만 지우고, 하위 Carrier의 데이터는 유지함.
2. Sample Trolley에 Sample Rack이 하나라도 남아 있으면 그 Tray와 Trolley는 리셋되지 않으며, 사용 중인 Trolley로 봄.
3. Consumable Rack이 다 소진되지 않고 Tray로 돌아오면 리셋하지 않음.
4. Consumable Trolley에 소진되지 않은 품목이 남아 있으면 사용 중인 Trolley로 봄. 이 Trolley를 다시 구성할 때는 신규 작업 컨펌을 거침 (POL-MAT-003).
5. Consumable Trolley 구성 Carrier(Trolley, Tray, Socket, PCR Rack, Tub Frame)는 [Run Start] 때 리셋하지 않음. 품목이 모두 소진된 때만 시스템이 자동으로 리셋함 (Teams 글 T10).
6. 리셋되지 않아 다른 곳에 연결된 데이터가 남은 Carrier나, 품목이 차지한 위치를 스캔하면, [Remove]로 먼저 지우게 하지 않고 컨펌으로 "지금 스캔한 정보로 바꿀지" 묻고 바로 바꿈 (POL-MAT-003 A · B · C, Teams 글 T04).

## 이유

- 규칙 5: 예전(8월 정책서)에는 [Run Start] 때 Consumable Trolley의 모든 값을 리셋했음. 입고한 품목이 다 소진되어야 Trolley로 돌아온다고 알았기 때문임. 실제로는 Run이 끝나면 Instrument Buffer 공간에서 쓰고 남은 품목이 Trolley로 돌아와, 리셋해야 할 것과 하면 안 되는 것이 섞임. 그래서 소진된 것만 리셋함 (Teams 글 T10).
- 규칙 6: 남은 데이터를 지우려고 사용자가 메뉴마다 들어가 [Remove]하는 것은 불편하므로, 이어서 작업하는 쪽을 기본으로 하고 바꿀 때만 컨펌으로 묻음 (Teams 글 T04).

## 예외

- 8월 정책서의 "PCR 전용 소켓: 사용자가 소켓을 인식하는 시점에 기존 데이터가 리셋되고 신규 정보로 업데이트"는 담당자 적재 정책서와 다름. 지금 흐름은 PCR box가 있는 Socket에 이어서 적재하고, 용도가 다를 때만 전환 컨펌(MS_Confirm_015·017)을 거침 (POL-MAT-008). 8월 정책서 문장을 지울지는 팀 논의 (`pending/PD-0005.md`, MS13)
- 리셋을 사용자가 직접 하는 화면이 있는지 확인 필요 (팀원 Q16, IA 비고 "Material Setup > Reset")

## 근거

- 정책서_2026.08.28 "기물 데이터 리셋(Reset) 및 갱신 정책"
- 팀원 POL-MAT-06 Trolley 구성 리셋 (팀원 쪽 사용자 전달 2026-10-28), `policy/policy-backlog.md` 추가할 것 13
- Teams 글 2026-11-06 T04(리셋 표, 컨펌으로 바로 바꿈) · T10(Run Start 리셋 없앰과 이유) (`reference/teams/2026-11-06-policy-notes.md`). 8월 정책서의 "트롤리 구성 기물: Run Start 시점에 자동 리셋"은 이전 내역

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-MAT-06) | |
| | 2026-11-06 | Consumable Trolley는 Run Start가 아니라 소진 때만 리셋(규칙 5), 남은 데이터는 컨펌으로 바로 바꿈(규칙 6), 이유 더함 | Teams 글 T04 · T10 |
