---
id: POL-EQP-010
title: Error Rate
summary: Error Rate는 가동 실패 횟수를 총 가동 횟수로 나눈 백분율이며 User Type이 Service일 때만 보여 줌
domain: EQP
menus: [Instruments]
cids: [TI-INS-02-01-P, LI-INS-02-01-P, TI-INS-02-T, LI-INS-02-T, TI-STA-06-01, TI-STA-06-02]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 장비 관리 및 정의 > Error Rate, TI-INS-02-01-P 디스크립션 (Ver 2.1.01), LI-INS-02-01-P 디스크립션 (Ver 2.1.01)]
provisional: []
alerts: []
data: [policy/permission-matrix.csv, glossary/module-units.csv]
replaced_by:
---
# POL-EQP-010 Error Rate

## 정의

- Error Rate: 유지보수에 쓰기 위한 지표. (가동 실패 횟수 ÷ 총 가동 횟수) × 100
- 집계 대상: Module 전체, Device Unit 중 Sample Pretreatment, Sample Aliquot, M9600, STARlet, Sealer, CFX96

| 집계 항목 | 대상 | 집계 시점 |
| --- | --- | --- |
| 총 가동 횟수 | Prep 쪽 Sample Storage, Prep Consumable Storage | Module에 Trolley가 들어와 가동이 시작된 시점 |
| 총 가동 횟수 | Sample Preparation | Sample을 꽂은 Rack이 로딩되어 가동이 시작된 시점 |
| 총 가동 횟수 | Dx 쪽 모든 Module과 Device Unit | Plate가 들어와 가동이 시작된 시점 |
| 가동 실패 횟수 | 전체 | 가동이 시작된 뒤 오류로 가동이 중단된 시점 |

## 규칙

1. Consumable 부족이나 Waste Bin Full로 가동이 중단된 경우는 가동 실패 횟수에 넣지 않음.
2. 제어 시스템이 누적 Error Rate를 집계하고, 가동 중단이 생긴 시점에 제어 시스템, L-IOS, T-IOS에 영구 저장함.
3. 저장 시점에 Error Rate 데이터를 L-IOS로 보내 사용자(엔지니어)에게 보여 주고 유지보수 정보로 씀.
4. 같은 Module이 여러 대이거나 CFX96이 여러 대일 때, Error Rate가 높은 Module이나 Device Unit은 작업 배정 우선순위를 낮춤.
5. Error Rate는 User Type이 Service일 때만 보여 줌. Admin, User에게는 표시하지 않음.

## 예외

- 표시 위치는 고객 논의 대상임 (CA-0001). 8월 정책서는 "Instrument Detail 영역 Module 이름 아래", 지금 화면(Ver 2.1.01)은 Management Popup임.

## 근거

- 정책서_2026.08.28 "Error Rate"
- 집계 대상 Device Unit은 화면 Ver 2.1.01 기준 (8월 정책서의 4종에 Sample Pretreatment, Sample Aliquot 추가)
- Management Popup(TI-INS-02-01-P, LI-INS-02-01-P) 디스크립션 "데이터 저장 및 처리"

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-INS-03) | CA-0001 |
| | 2026-11-02 | 관련 CID에 Statistical Analysis 화면 추가 (POL-STA-006) | |
