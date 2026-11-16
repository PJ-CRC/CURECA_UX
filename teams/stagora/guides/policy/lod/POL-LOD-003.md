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

- STAT Storage: Sample Preparation Module의 Storage. 사용자 접근 공간과 Buffer 공간(8칸)으로 나뉨. 사용자 접근 공간은 Sample Preparation 제조사에 따라 단디메카 4칸, 로체시스템즈 3칸으로 운영할 예정임 (Teams 글 T13. 원문 "반디"는 단디메카의 오타, 2026-11-06 사용자 확인)
- STAT Sample: STAT Storage로 넣는 응급 Sample (POL-SMP-008)

## 규칙

1. STAT Storage에는 Sample Socket만 넣음. Consumable·Reagent, PK Tube, IC는 넣지 않음 (Trolley로 넣음). Load Materials에서 Sample이 없는 Socket은 MS_Alert_015, Reagent Socket은 MS_Alert_001을 보여 줌.
2. Run 중에 STAT Storage에 Sample을 넣으면 Trolley의 Sample보다 먼저 검사함. 처리 순서는 POL-SMP-008을 따름. Sample을 넣은 뒤 사용자가 화면에서 [Run]을 눌러야 검사가 시작됨.
3. 쓴 Sample은 Buffer 공간(8칸)이 아닌 사용자 접근 공간으로만 돌아옴.
4. Sample Rack(Socket 포함)을 넣은 칸은 그 Rack이 돌아올 자리이므로, 돌아올 때까지 다른 Rack을 넣을 수 없음 (Teams 글 T13).
5. 제조사가 달라도 Load Materials 화면(LI-TSS-DXI-01)은 같음. 넣을 수 있는 칸 수를 세는 영역만 3 또는 4로 보여 줌 (2026-11-06 사용자 확인, 디스크립션에 반영됨).

## 이유

- 규칙 1: 예전(8월 정책서)에는 Sample과 함께 Consumable · Reagent, PK Tube, IC도 STAT으로 넣을 수 있었으나 최종으로 Sample만 넣도록 정함 (2026-11-03 MS14, Teams 글 T13).
- 규칙 4: 쓴 Sample은 사용자 접근 공간으로만 돌아오므로(규칙 3), 넣은 칸을 비워 두지 않으면 돌아올 자리가 없음.

## 예외

없음

## 질문

1. ~~"반디"가 어느 제조사인지, 화면에 반영해야 하는지~~ → 단디메카. 화면은 같고 칸 수 영역만 3 · 4 (규칙 5, 2026-11-06 답)
2. (규칙 4) 돌아올 때까지 막힌 칸을 스캔하면 띄울 알럿 ID, 화면에서 막힌 칸을 어떻게 보여 주는지
3. 사용자 접근 공간이 모두 막혀 있으면 STAT Sample을 넣을 수 없는지

## 근거

- 정책서_2026.08.28 "STAT Storage 입고 및 회수 정책"
- LI-TSS-DXI-01 디스크립션 1 (Sample Socket, 빈 Socket MS_Alert_015, Reagent Socket MS_Alert_001)
- 팀원 POL-DCK-04, POL-SMP-008
- 2026-11-03 사용자 답변 (MS14): STAT은 이제 Sample만 넣도록 정책이 바뀜. 8월 정책서의 Consumable·Reagent·PK Tube·IC 입고와 STAT 품목 우선 소모는 이전 내역
- Teams 글 2026-11-06 T13 "STAT Storage 정책 변경" (Sample만, 제조사별 칸 수, 돌아올 칸 비워 둠)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-DCK-04) | |
| | 2026-11-03 | STAT Storage는 Sample Socket만 (MS14) | 사용자 답변 |
| | 2026-11-06 | 사용자 접근 공간 칸 수를 제조사별로(단디메카 4 · 로체시스템즈 3칸), Rack이 돌아올 칸은 비워 둠 (규칙 4), 화면은 칸 수 영역만 다름 (규칙 5) | Teams 글 T13, 사용자 확인 |
