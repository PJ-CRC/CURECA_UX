---
id: POL-EQP-005
title: Run-time
summary: Run-time은 Module 또는 Device의 상태가 Running인 시간의 누적 값이며 시간 단위로 버림해 표시함
domain: EQP
menus: [Instruments]
cids: [TI-INS-02-T, LI-INS-02-T, TI-INS-02-01-P, LI-INS-02-01-P, TI-STA-05-01, TI-STA-05-02]
status: 확정
version:
date: 2026-11-02
sources: [TI-INS-02-T 디스크립션 (Ver 2.1.06), TI-INS-02-01-P 디스크립션 (Ver 2.1.01), LI-INS-02-01-P 디스크립션 (Ver 2.1.01)]
provisional: []
alerts: []
data: [glossary/modules.csv, glossary/module-units.csv]
replaced_by:
---
# POL-EQP-005 Run-time

## 정의

- Run-time: Module 또는 Device Unit의 상태가 Running인 시간의 누적 값
- 집계 대상: Module 전체, Device Unit 중 Sample Pretreatment, Sample Aliquot, M9600, STARlet, Sealer, CFX96

## 규칙

1. Run-time은 장비 모듈 상태 또는 검사 장치 상태가 Running인 시간을 누적해 집계함.
2. 제어 시스템이 누적 Run-time을 집계하고, 상태가 Running에서 다른 상태로 바뀌는 시점에 제어 시스템, L-IOS, T-IOS에 영구 저장함.
3. 저장 시점에 Run-time 데이터를 L-IOS로 보내 사용자에게 보여 주고 유지보수 정보로 씀.
4. Run-time은 시간(h) 단위로 표시하고 분은 버림. 예: 11시간 55분 → 11h
5. 같은 Module이 여러 대이거나 CFX96이 여러 대일 때, 작업은 Run-time을 기준으로 균등하게 배정해 특정 Module이나 Device로 쏠리지 않게 함.

## 예외

없음

## 근거

- Instruments All Tab(TI-INS-02-T, LI-INS-02-T)과 Management Popup(TI-INS-02-01-P, LI-INS-02-01-P) 디스크립션 "Run-time 집계 정의"
- Ver 2.1.01: 집계 대상 Device에 Sample Pretreatment, Sample Aliquot 추가

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (8월 정책서에 없음, 화면 디스크립션에서 옮김) | |
| | 2026-11-02 | 관련 CID에 Statistical Analysis 화면 추가 (POL-STA-006) | |
