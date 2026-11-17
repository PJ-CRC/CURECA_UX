---
id: POL-SMP-003
title: 재검사
summary: 로딩 전 Barcode 문제로 Not Tested가 된 Sample은 검사실이 자체로 다시 검사하고, 로딩 후 Instrument 고장 등으로 Failed가 된 Sample은 병원의 재검사 요청을 받아 다시 검사함
domain: SMP
menus: [Test Management, Sample Tracking]
cids: [TI-TMG-01, LI-TMG-01, TI-SPT-01, LI-SPT-01]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 검체/검사 정의 > 재검사]
provisional: []
alerts: []
data: [glossary/status-values.csv]
replaced_by:
---
# POL-SMP-003 재검사

## 정의

없음

## 규칙

1. Sample이 Not Tested이면(Barcode 훼손·불일치 등) 병원의 재검사 요청 절차를 거치지 않고, 검사실이 자체로 다시 검사함.
2. Sample이 Failed이면(로딩 후 Instrument 고장 등) 병원의 재검사 요청을 받아 다시 검사함.

## 예외

없음

## 근거

- 정책서_2026.08.28 "바코드 오류 및 훼손 등으로 인해 로딩 전 검사 실패한 경우", "장비 고장 등으로 인해 로딩 후 검사 실패한 경우" (Not Tested 정의는 POL-SMP-001)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SMP-05) | |
