---
id: POL-EQP-002
title: 장비 통합 상태 전환
summary: 장비 통합 상태는 트리거와 장비 모듈 상태 조건에 따라 전환되며, 통신 단절 시 즉시 Error가 됨
domain: EQP
menus: [Dashboard, Instruments]
cids: [TI-DAS, LI-DAS, TI-INS-01-T, LI-INS-01-T, TI-INS-02-T, LI-INS-02-T]
status: 확정
version:
date: 2026-11-02
sources: [씨젠 상태 정보 261021 > 장비 통합 상태 처리 조건, Common UX V2.2.00 COMM-4-a(2/4)]
provisional: []
alerts: []
data: [policy/integrated-state-transitions.csv, policy/equipment-states.md]
replaced_by:
---
# POL-EQP-002 장비 통합 상태 전환

## 정의

- 전환 조건 전체(이전 상태, 트리거, 장비 모듈 상태 조건, 전환 후 상태)는 `policy/integrated-state-transitions.csv`가 기준임.
- Run 완료: Prep 시스템과 Dx 시스템에 할당된 모든 Sample의 검사가 끝나고, 결과가 D.A PC를 거쳐 T-IOS로 모두 전달된 시점.

## 규칙

1. 전원 인가 후 장비 통합 상태는 Not Initialized임.
2. 장비 통합 상태가 Running일 때 Running인 Module이 1대 이상이면서 Pausing, Paused 또는 Error인 Module이 1대 이상이면 장비 통합 상태는 Partial Running으로 전환됨.
3. 장비 통합 상태가 Running일 때 모든 Module이 Paused가 되면 장비 통합 상태는 Paused로 전환됨.
4. 장비 통합 상태가 Partial Running일 때 Paused인 Module이 1대 이상이고 Running·Pausing·Error인 Module이 없으면 장비 통합 상태는 Paused로 전환됨.
5. Run 중이 아닐 때(예: Ready) Door 잠금 해제로 일부 Module만 Paused가 되면 장비 통합 상태는 바뀌지 않음. 모든 Module이 Paused가 될 때만 Paused가 됨.
6. Run 완료 전에는 모든 Module이 Ready여도 장비 통합 상태는 Running을 유지함.
7. Run 완료는 L-IOS가 최종 판단함.
8. 통신 단절 또는 프로그램 자체 오류가 발생하면 어느 상태에서든 장비 통합 상태는 즉시 Error로 전환됨.

## 예외

- Module이 Error에서 고쳐져도, 물리적으로 이어진 다른 Module 때문에 Run이 다시 시작되지 않을 수 있음 (MT-20261013-01). 어떤 Module끼리 이어져 있는지는 Module 문서(`policy/modules/`)에 모음. Error에서 Ready로 돌아가는 조건은 고객 확인 중 (CA-0002, CA-0010)

## 근거

- 씨젠 상태 정보 261021 > 장비 통합 상태 처리 조건 (21개 전환)
- Run 중이 아닐 때 Paused의 영향(규칙 5): 2026-11-02 사용자 설명. 씨젠 전환표에는 Run 중이 아닌 상태에서 Paused로 가는 전환이 없어, 씨젠 문서 새 버전을 받을 때 확인
- 8월 정책서의 Ready 조건 "모든 모듈이 Idle", Partial Running 조건 "1대 이상의 모듈에서 Error", Paused 없음은 씨젠 원본 기준으로 바꿈 (`policy/policy-backlog.md` 고칠 것 7)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
| | 2026-11-02 | Running → Paused 조건을 씨젠 전환표대로 "모든 Module이 Paused"로 고침, Run 중이 아닐 때 규칙 5 추가 | |
| | 2026-11-06 | 고쳐진 Module이 이어진 Module 때문에 다시 시작되지 않을 수 있음 (예외) | MT-20261013-01 |
