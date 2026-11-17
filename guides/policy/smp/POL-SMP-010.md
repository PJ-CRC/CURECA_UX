---
id: POL-SMP-010
title: Plate 상태
summary: 96-DWP와 PCR Plate는 Running, Completed, Failed 3개 상태만 가지며, Plate 목록의 Status 필터도 이 3개만 씀
domain: SMP
menus: [Sample Tracking]
cids: [TI-SPT-02, LI-SPT-02, TI-SPT-03, LI-SPT-03]
status: 확정
version:
date: 2026-11-02
sources: [씨젠 상태 정보 261021 > 검사 상태, 2026-11-02 사용자 결정 (SM1)]
provisional: []
alerts: []
data: [glossary/status-values.csv]
replaced_by:
---
# POL-SMP-010 Plate 상태

## 정의

- Plate 상태 값과 정의는 `glossary/status-values.csv`의 Plate 상태가 기준임: Running, Completed, Failed
- Running 구간: 96-DWP는 Sample Preparation ~ PCR Setup, PCR Plate는 PCR Setup ~ PCR

## 규칙

1. Plate는 Running, Completed, Failed 3개 상태만 가짐. Not Tested는 Sample 상태이며 Plate 상태가 아님 (POL-SMP-001).
2. 96-DWP와 PCR Plate 목록의 Status 필터는 All, Running, Completed, Failed로 함.
3. Module Error나 사용자 Stop으로 진행 중인 Plate가 폐기되면 Plate는 Failed가 되고, 그 Plate의 Sample도 Failed가 됨.

## 예외

없음

## 근거

- 씨젠 상태 정보 261021 "검사 상태" (`glossary/status-values.csv` Plate 상태, Sample 상태 Failed)
- Status 필터에서 Not Tested 제외: 2026-11-02 사용자 결정 (SM1)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SMP-03) | 사용자 결정 |
