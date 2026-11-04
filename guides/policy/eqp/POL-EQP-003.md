---
id: POL-EQP-003
title: Initialize, Stop, Run, Quick Start 버튼
summary: Initialize, Stop, Run, Quick Start 버튼은 장비 통합 상태에 따라 활성화됨
domain: EQP
menus: [Dashboard, Run, Quick Start]
cids: [LI-DAS, LI-RUN, LI-QUK]
status: 확정
version:
date: 2026-11-02
sources: [Common UX V2.2.00 COMM-4-a(2/4), Common UX V2.2.00 COMM-3-a(1/2)]
provisional: []
alerts: []
data: [policy/equipment-states.md]
replaced_by:
---
# POL-EQP-003 Initialize, Stop, Run, Quick Start 버튼

## 정의

| 버튼 | 하는 일 |
| --- | --- |
| [Initialize] | Instrument 초기화 |
| [Stop] | 진행 중인 검사를 중단(폐기)하고 Initializing을 거쳐 Ready로 전환 |
| [Run] | 검사 실행. Run Preparation 단계로 이동 |
| [Quick Start] | Run Preparation 단계 대신 요약 Popup 하나만 확인하고 검사 실행 |

## 규칙

1. 장비 통합 상태가 Not Initialized일 때만 [Initialize]는 활성화됨.
2. [Initialize]를 누르면 장비 통합 상태는 Initializing으로 전환되고, 진행바를 표시하며 모든 기능 사용이 제한됨. 완료 신호를 받으면 Ready로 전환되고 완료를 안내함.
3. 장비 통합 상태가 Running 또는 Partial Running일 때만 [Stop]은 활성화됨.
4. [Stop]을 누르면 장비 통합 상태는 Stopping으로 전환되고, 진행바 Popup을 표시하며 모든 기능 사용이 일시 제한됨. 완료되면 Ready로 자동 전환되고 완료를 안내함.
5. [Stop]은 일부 Module이 아니라 Instrument 전체를 멈춤.
6. 장비 통합 상태가 Ready, Running, Partial Running일 때만 [Run]과 [Quick Start]는 활성화됨.
7. 장비 통합 상태가 Not Initialized일 때는 초기화 필요 안내 Popup을 표시하고, 초기화 관련 메뉴 외에는 비활성화됨.

## 예외

없음

## 근거

- Common UX V2.2.00 COMM-4-a(2/4)의 버튼 정의와 상태별 UX action
- `policy/equipment-states.md` 2·3절

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
