---
id: POL-SMP-008
title: STAT 검사
summary: STAT Sample은 응급 Sample이며, 검사 중인 Trolley가 있을 때 STAT Storage에 넣으면 진행 중인 Rack까지만 처리하고 STAT Rack을 먼저 처리함
domain: SMP
menus: [Material Setup, Test Management, Run]
cids: [LI-TSS-DXI-01, TI-TMG-01, LI-TMG-01, TI-TMG-02, LI-TMG-02, LI-RUN-01]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 검체/검사 정의 > STAT을 통한 검사, 팀원 Q8 (팀원 쪽 사용자 확인 2026-10-15)]
provisional: []
alerts: []
data: []
replaced_by:
---
# POL-SMP-008 STAT 검사

## 정의

- STAT Sample: STAT Storage로 넣는 응급 Sample. 8월 정책서의 "STAT 상태의 검체"는 응급 Sample을 뜻함

## 규칙

1. 검사가 진행 중인 Trolley가 있을 때 STAT Storage에 Sample을 넣으면:
   - STAT Sample이 없으면: 진행 중인 Trolley의 Sample을 모두 처리한 뒤 이어서 진행함
   - STAT Sample이 1개라도 있으면: Sample Preparation이 Inbound Trolley에서 가져와 처리하던 Socket까지만 처리하고, 그다음 STAT에 넣은 Sample을 처리함. Sample Preparation은 Socket을 하나씩 가져와 다 처리하면 다음 Socket을 가져옴 (MT-20260828-01, 2026-11-06 사용자 설명).
2. 이때 STAT Sample은 별도 Batch로 잡힘 (POL-SMP-004 규칙 3).
3. Test Order와 Run 준비 화면은 Total Sample과 함께 STAT Sample 수를 따로 보여 줌.
4. Inbound Trolley에서 온 Sample과 STAT Storage에서 온 Sample은 같은 96-DWP에 분주하지 않음. Inbound Trolley Sample의 96-DWP가 다 차지 않았어도 STAT Sample은 다른 96-DWP에 분주해 나눠 검사함 (MT-20260828-01, 2026-11-06 사용자 설명).
5. STAT Sample을 먼저 처리하는 동안에도 앞 Batch의 TAT는 멈추지 않고 늘어남 (MT-20260828-01).

## 이유

- 규칙 4: 두 Batch의 Sample을 한 96-DWP에 섞으면 Batch별로 결과와 시간을 나눠 볼 수 없으므로, 96-DWP를 따로 씀.

## 예외

없음

## 근거

- 정책서_2026.08.28 "STAT을 통한 검사"
- STAT = 응급 Sample: 팀원 쪽 사용자 확인 2026-10-15 (`policy/policy-backlog.md` 추가할 것 15)
- STAT Storage의 투입·도킹 규칙은 LOD 정책에서 다룸 (Material Setup 2차 포함 때)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SMP-10) | |
| | 2026-11-06 | STAT은 처리 중이던 Socket까지 마친 뒤 처리(규칙 1), 96-DWP를 나눔(규칙 4), 앞 Batch TAT는 계속 늘어남(규칙 5) | MT-20260828-01, 사용자 설명 |
