---
id: POL-EVT-003
title: Event Message Popup 노출
summary: Event가 생기면 Event Message Popup을 띄우며, L-IOS는 Main Mode·Console Mode에서만, T-IOS는 사용자가 Event notifications를 켰을 때만 보여 줌
domain: EVT
menus: [Event History, Profile]
cids: [TI-EVT-02-P, LI-EVT-02-P, TI-CPW-01-P]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > Event, System, 사용자 및 권한, TI-EVT-02-P·LI-EVT-02-P 디스크립션 (Ver 2.1.01), TI-CPW-01-P 디스크립션 (Ver 2.1.11)]
provisional: []
alerts: []
data: [policy/service-mode-matrix.csv]
replaced_by:
---
# POL-EVT-003 Event Message Popup 노출

## 정의

- Event Message Popup: Event가 생겼을 때 화면 위에 띄우는 Popup (TI-EVT-02-P, LI-EVT-02-P)

## 규칙

1. L-IOS는 Service Mode가 Main Mode 또는 Console Mode일 때만 Event Message Popup을 보여 줌. TSS Mode에서는 보여 주지 않음.
2. T-IOS는 사용자가 Profile > General의 Event notifications를 On으로 두었을 때만 보여 줌. 기본값은 On임.
3. 로그인한 뒤에 생긴 Event부터 보여 줌.
4. Event가 여러 개 생기면 Popup을 쌓아서 보여 주고, 2개 이상이면 현재 순서와 전체 개수(예: 1/20), [Close All], 이전·다음 이동을 보여 줌.
5. [Close]를 누르면 그 Event만 목록에서 빠지고 전체 개수도 줄어듦. 이동만 하고 닫지 않은 Event는 남음.
6. [View Details]를 누르면 Popup을 모두 닫고 그 Event의 상세(Event History Detail)로 이동함.

## 예외

없음

## 근거

- 정책서_2026.08.28 "L-IOS - 콘솔, 메인 PC에서만 노출 / T-IOS - 사용자 개별 설정에 따라 노출 여부 결정". 메인 PC는 Main Mode, 콘솔 PC는 Console Mode (`policy/service-mode.md` 0절)
- T-IOS 개별 설정은 Profile > General의 Event notifications (TI-CPW-01-P, Ver 2.1.11). 팀원 Q11 해소

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SYS-04) | |
