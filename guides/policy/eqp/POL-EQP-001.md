---
id: POL-EQP-001
title: CURECA Status 구조
summary: CURECA 상태는 장비 통합 상태, 장비 모듈 상태, 검사 장치 상태의 3단계와 Unit Type별 상태로 나뉨
domain: EQP
menus: [Dashboard, Instruments]
cids: [TI-DAS, LI-DAS, TI-ADS, TI-INS-01-T, LI-INS-01-T, TI-INS-02-T, LI-INS-02-T, TI-INS-02-01-P, LI-INS-02-01-P]
status: 확정
version:
date: 2026-11-02
sources: [씨젠 상태 정보 261021 > 장비 상태, Common UX V2.2.00 COMM-4-a(2/4)~(3/4), reference/status-values-2026-10-30.png, reference/status-values-unit-2026-10-30.png]
provisional: []
alerts: []
data: [glossary/status-values.csv, policy/equipment-states.md]
replaced_by:
---
# POL-EQP-001 CURECA Status 구조

## 정의

- CURECA Status: Instrument 자체의 상태. Sample·재고·Event처럼 소프트웨어가 관리하는 System Status와 구분함.
- 상태값의 코드명, UI 표기, 정의는 `glossary/status-values.csv`가 기준임. 이 정책은 상태의 단계와 관계만 정함.

| 단계 | 대상 | 상태값 |
| --- | --- | --- |
| 장비 통합 상태 | CURECA 전체 | Not Initialized / Initializing / Ready / Running / Partial Running / Stopping / Paused / Error |
| 장비 모듈 상태 | Module | Not Initialized / Initializing / Ready / Running / Stopping / Pausing / Paused / Error |
| 검사 장치 상태 | Device Unit | Ready / Running / Error |
| Unit Type별 상태 | Door Unit, Storage Unit, Waste Bin/Bottle Unit | 장비 모듈 도어 잠금 상태, 장비 모듈 도어 열림 상태, 저장 장치 도킹 상태, 폐기함/폐액통 상태 |
| 연결 상태 | Module, Device Unit | Connected / Disconnected |

## 규칙

1. 장비 통합 상태는 장비 모듈 상태들을 모아 정해짐 (POL-EQP-002).
2. 상태값을 화면이나 문서에 쓸 때는 어느 단계의 상태인지 함께 밝힘. 예: "장비 모듈 상태가 Paused일 때"
3. 검사 장치 상태 Ready의 코드명은 Idle, UI 표기는 Ready임.
4. 연결 상태는 Module과 Device Unit 둘 다 가짐.
5. Door가 2개인 Module(Sample Preparation)의 장비 모듈 도어 열림 상태는 Door가 하나라도 열려 있으면 Open, 모두 닫혀 있으면 Closed로 표시함.

## 예외

- Dashboard는 공간이 부족해 Closed인 Door의 개수를 표시하지 않음. 상태값 Closed 자체는 그대로 있음.

## 근거

- 씨젠 상태 정보 261021 > 장비 상태 (원본 `reference/customer/system-status/`)
- 검사 장치 상태 코드명 Idle 유지, 연결 상태 Module·Device 둘 다: 2026-11-02 확인 (`policy/equipment-states.md` 6절)
- Door 2개 Module의 표시: TI-INS-02-T, LI-INS-02-T 디스크립션 "Door 상태값 표기"

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (8월 정책서 "CURECA 전체 구동 상태값 정의", "모듈 상태값 정의", "디바이스 상태값 정의"를 씨젠 상태 정보 261021 기준으로 정리) | |
