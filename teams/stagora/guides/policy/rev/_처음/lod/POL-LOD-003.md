---
id: POL-LOD-003
title: STAT Storage
summary: STAT Storage는 Sample Socket만 받으며, 사용자 접근 공간 4칸과 Buffer 공간 8칸으로 나뉘고, Run 중에 넣은 STAT Sample은 Trolley의 Sample보다 먼저 검사하고, 쓴 Sample은 사용자 접근 공간으로만 돌아옴
domain: LOD
menus: [Material Setup, Run]
cids: [LI-TSS-DXI-01, LI-RUN-01]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > 트롤리 도킹 & Drawer Loading > STAT Storage 입고 및 회수 정책, LI-TSS-DXI-01 디스크립션, POL-SMP-008, 팀원 POL-DCK-04, 2026-11-03 사용자 답변 (MS14)]
provisional: []
alerts: [MS_Alert_001, MS_Alert_015]
data: []
replaced_by:
---
# POL-LOD-003 STAT Storage

## 정의

- STAT Storage: Sample Preparation Module의 Storage. 사용자 접근 공간 4칸과 Buffer 공간 8칸으로 나뉨
- STAT Sample: STAT Storage로 넣는 응급 Sample (POL-SMP-008)

## 규칙

1. STAT Storage에는 Sample Socket만 넣음. Consumable·Reagent, PK Tube, IC는 넣지 않음 (Trolley로 넣음). Load Materials에서 Sample이 없는 Socket은 MS_Alert_015, Reagent Socket은 MS_Alert_001을 보여 줌.
2. Run 중에 STAT Storage에 Sample을 넣으면 Trolley의 Sample보다 먼저 검사함. 처리 순서는 POL-SMP-008을 따름. Sample을 넣은 뒤 사용자가 화면에서 [Run]을 눌러야 검사가 시작됨.
3. 쓴 Sample은 Buffer 공간(8칸)이 아닌 사용자 접근 공간(4칸)으로만 돌아옴.

## 예외

없음

## 근거

- 정책서_2026.08.28 "STAT Storage 입고 및 회수 정책"
- LI-TSS-DXI-01 디스크립션 1 (Sample Socket, 빈 Socket MS_Alert_015, Reagent Socket MS_Alert_001)
- 팀원 POL-DCK-04, POL-SMP-008
- 2026-11-03 사용자 답변 (MS14): STAT은 이제 Sample만 넣도록 정책이 바뀜. 8월 정책서의 Consumable·Reagent·PK Tube·IC 입고와 STAT 품목 우선 소모는 이전 내역

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-DCK-04) | |
| | 2026-11-03 | STAT Storage는 Sample Socket만 (MS14) | 사용자 답변 |
