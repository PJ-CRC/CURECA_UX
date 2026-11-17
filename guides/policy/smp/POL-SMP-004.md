---
id: POL-SMP-004
title: Batch와 Batch 카드
summary: Batch는 Run Start마다 생기는 검사 묶음이며, Test Status의 Batch 카드는 장비 통합 상태가 Running을 시작할 때부터 쌓이고 다음 Running 시작 때 초기화됨
domain: SMP
menus: [Test Management, Information]
cids: [TI-TMG-02, LI-TMG-02, TI-INF-03-01, TI-INF-03-02, TI-DAS, LI-DAS]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 검체/검사 정의 > Batch Card 생성 및 초기화, 씨젠 상태 정보 261021 > 검사 배치 완료 상태, TI-TMG-02 디스크립션 (v2.1.14), TI-INF-03-01 디스크립션, 팀원 POL-SMP-11 (사용자 전달 2026-11-02), 2026-11-02 사용자 결정 (SM7)]
provisional: []
alerts: []
data: [glossary/status-values.csv]
replaced_by:
---
# POL-SMP-004 Batch와 Batch 카드

## 정의

- Batch(검사 배치): [Run Start] 한 번으로 시작된 검사 묶음
- Batch ID: Batch가 생길 때 시스템이 주는 고유 번호
- 검사 배치 완료 상태: Completed, Failed, Not Tested, Partially Completed, Stopped (`glossary/status-values.csv`)

## 규칙

1. Test Status의 Batch 카드는 장비 통합 상태가 Running을 시작할 때부터 Ready에 이를 때까지 쌓아 보여 주고, 다음 Running이 시작될 때 지우고 새로 쌓음.
2. 진행 중인 Batch 카드는 Start Date/Time 최신순으로, 끝난 Batch 카드는 그 아래에 보여 줌.
3. 검사가 진행 중인 Trolley가 있을 때 STAT Storage로 Sample을 넣으면 별도 Batch 카드가 생김. 단, Trolley를 장착하면서 동시에 STAT에 Sample을 넣고 Run하면 Batch 하나만 생김.
4. 검사 배치 완료 상태는 Run Report(Information > Report)에서 씀. Test Status 화면에는 우선 넣지 않음 (고객사 협의).
5. Run Report는 Batch가 끝난 뒤 Batch 단위로 생기며, Run By는 [Run Start]를 실행한 계정의 ID, Batch ID는 Test Status의 Batch 카드 ID와 같음.
6. Run Report는 T-IOS에서만 보이며, User Type과 관계없이 모든 계정이 볼 수 있음 (`policy/permission-matrix.csv`).

## 예외

없음

## 근거

- 정책서_2026.08.28 "Batch Card 생성 및 초기화"
- TI-TMG-02 3-1 (v2.1.14 Batch ID를 고유 번호로), TI-INF-03-01 디스크립션
- 검사 배치 완료 상태의 용도: 팀원 쪽 사용자 전달 2026-11-02 (`policy/policy-backlog.md` 추가할 것 14)
- Run Report 접근 범위: 2026-11-02 사용자 결정 (SM7). 이번에 추가된 메뉴

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SMP-06·11) | |
| | 2026-11-02 | Run Report 접근 범위 정함 (SM7) | 사용자 결정 |
