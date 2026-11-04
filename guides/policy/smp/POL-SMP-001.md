---
id: POL-SMP-001
title: Sample 상태와 전환
summary: Sample은 Ordered, Ready, Running, Completed, Failed, Not Tested 6개 상태를 가지며, Run Start 때 도킹된 Ordered Sample이 모두 Ready가 됨
domain: SMP
menus: [Test Management, Sample Tracking, Dashboard]
cids: [TI-TMG-01, LI-TMG-01, TI-TMG-02, LI-TMG-02, TI-SPT-01, LI-SPT-01, TI-DAS, LI-DAS]
status: 확정
version:
date: 2026-11-02
sources: [씨젠 상태 정보 261021 > 검사 상태, 정책서_2026.08.28 > 검체/검사 정의, 2026-11-02 사용자 결정 (Not Tested)]
provisional: []
alerts: []
data: [glossary/status-values.csv]
replaced_by:
---
# POL-SMP-001 Sample 상태와 전환

## 정의

- Sample 상태 값과 정의는 `glossary/status-values.csv`의 Sample 상태가 기준임: Ordered, Ready, Running, Completed, Failed, Not Tested
- 로딩: Prep 시스템이 Sample Barcode를 읽는 것

## 규칙

1. LIS에서 검사 오더를 받으면 Sample은 Ordered임.
2. Sample Trolley를 도킹하고(또는 STAT Storage에 넣고) [Run Start]를 누르면 Ordered인 Sample이 모두 Ready가 됨.
3. Sample이 로딩되어 검사가 진행되면 Running, 정상으로 끝나면 Completed, 실패하면 Failed가 됨.
4. 검사 시작 후 Ready였던 Sample이 Prep 시스템에서 검사가 진행되지 못한 채 회수되면 Not Tested가 됨. 원인은 Barcode 훼손으로 인식 불가, 또는 Socket 안의 위치에 등록된 Barcode와 불일치임.
5. Not Tested Sample은 정상 분주된 Sample과 같은 Rack에 담긴 채 회수 Trolley로 나감.
6. [Run Start] 뒤 Run이 중단되어 Sample이 Trolley에서 Prep 시스템으로 들어가지 못한 채 Trolley가 도킹 해제되면, 그 Sample은 다시 Ordered가 됨.
7. Failed Sample의 결과는 LIS로 보내지 않음.

## 예외

없음

## 근거

- 씨젠 상태 정보 261021 > 검사 상태 (상태 값, Not Tested 원인)
- 정책서_2026.08.28 "검체 상태값", "데이터 상태 전환 시점", "Not Tested 트리거 조건", "Failed - LIS 결과 전송X"
- Not Tested 정의: 2026-11-02 사용자 결정 (`policy/policy-backlog.md` 추가할 것 11, 팀원 Q7)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SMP-01·02) | |
