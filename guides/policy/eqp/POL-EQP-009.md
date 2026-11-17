---
id: POL-EQP-009
title: Management (Enabled 설정)
summary: 같은 Module 또는 같은 Device Unit이 2대 이상일 때 T-IOS에서 Service만 사용 여부(Enabled)를 바꿀 수 있으며 최소 1대는 Enabled여야 함
domain: EQP
menus: [Instruments]
cids: [TI-INS-02-01-P, LI-INS-02-01-P, TI-INS-02-T, LI-INS-02-T, TI-INS-01-T, LI-INS-01-T, TI-ADS]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 장비 관리 및 정의 > Enable Setting, TI-INS-02-01-P 디스크립션 (Ver 2.1.01), LI-INS-02-01-P 디스크립션 (Ver 2.1.01), IA v1.15 문서 이력 v1.03, 2026-11-02 사용자 확인]
provisional: []
alerts: [Alert_013, Alert_014, Alert_015]
data: [policy/permission-matrix.csv, glossary/module-units.csv]
replaced_by:
---
# POL-EQP-009 Management (Enabled 설정)

## 정의

- Enabled: Module 또는 Device Unit의 사용 여부. 화면에는 Enabled = Y, Disabled = N으로 표시함
- Management Popup: Module과 Device Unit의 Run-time, Error Rate, Enabled를 보여 주는 Popup. 8월 정책서의 "Enable Setting"이 IA v1.03에서 Management로 바뀜

## 규칙

1. 같은 Module이 2대 이상 설치되어 있을 때 Module마다 Enabled를 설정할 수 있음.
2. 같은 Module이 2대 이상일 때 최소 1대는 Enabled여야 하며, 모두 Disabled로 저장하면 Alert_014를 표시함.
3. Module이 1대일 때 그 Module은 Disabled로 바꿀 수 없음 (Alert_014).
4. 한 Module 안에 같은 Device Unit이 2대 이상 설치되어 있을 때 Device Unit마다 Enabled를 설정할 수 있음. 예: Universal PCR의 CFX96, Plate Sealing의 Sealer, Sample Preparation에 Sample Pretreatment가 위아래로 2대 설치된 경우
5. Module이 Enabled일 때 그 안의 같은 Device Unit 중 최소 1대는 Enabled여야 하며, 모두 Disabled로 저장하면 Alert_015를 표시함.
6. Module을 Disabled로 바꾸면 그 Module의 Device Unit은 자동으로 Disabled가 되고 Enabled를 선택할 수 없음. Module을 다시 Enabled로 바꾸면 Device Unit도 Enabled가 됨.
7. 장비 통합 상태가 Ready 또는 Not Initialized이고 장비 모듈 상태가 Ready 또는 Not Initialized일 때만 Enabled를 바꿀 수 있음. 장비 모듈 상태가 Running이면 Alert_013을 표시함.
8. Enabled 변경은 T-IOS에서 User Type이 Service일 때만 가능함. T-IOS의 Admin, User는 조회만 가능함.
9. L-IOS의 Management Popup은 모든 User Type이 조회만 가능함.

## 예외

없음

## 근거

- 정책서_2026.08.28 "Enable Setting (모듈 및 유닛 사용 설정)": 최소 1대 Enabled. 설정 대상을 "CFX96과 Sealer만"으로 적은 부분은 2026-11-02 사용자 확인으로 "같은 Device Unit이 2대 이상인 경우"로 넓힘
- TI-INS-02-01-P 디스크립션 (Radio 버튼 동작, [Save] 유효성 체크)
- 변경 가능 상태, T-IOS Service만 변경, L-IOS 조회만: 2026-11-02 사용자 확인

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-INS-02) | |
