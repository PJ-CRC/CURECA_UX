---
id: POL-TST-002
title: Test Cut-off Time
summary: Today’s Orders를 하루 단위로 나누는 마감 시각이며 기본값은 06:00으로, 이 시각이 되면 전날 오더 집계를 마감하고 새로 집계함
domain: TST
menus: [Setting, Dashboard, Dashboard (All)]
cids: [TI-STN-01, LI-STN-01, TI-DAS, LI-DAS, TI-ADS]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > Test Policy > 검사 리셋 시점 설정, TI-STN-01 디스크립션 6-1 (Ver 2.0), TI-DAS 디스크립션 1 (Ver 2.1.14)]
provisional: []
alerts: []
data: []
replaced_by:
---
# POL-TST-002 Test Cut-off Time

## 정의

- Test Cut-off Time: Dashboard의 Today’s Orders를 하루 단위로 나누는 마감 시각. 0시가 아니라 실제 검사 주기(야간 Run 등)에 맞춰 집계하기 위함

## 규칙

1. Test Cut-off Time의 기본값은 06:00이며 Policy Setting > General Setting에서 바꿈.
2. Test Cut-off Time이 되면 전날 오더 집계를 마감하고, Dashboard의 Today’s Orders를 새 주기로 바꿈.
3. Today’s Orders의 "오늘"은 마지막 Test Cut-off Time부터 지금까지임.

## 예외

없음

## 근거

- 정책서_2026.08.28 "검사 리셋 시점 설정 (오더 집계 기준 시간 설정?)": 화면 이름 Test Cut-off Time으로 정함 (팀원 Q6 해소)
- 기본값 06:00: TI-STN-01 디스크립션 6-1 (SRS 단서와 같음)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-TST-02) | |
