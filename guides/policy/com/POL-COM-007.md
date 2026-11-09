---
id: POL-COM-007
title: 실시간 데이터 갱신
summary: Dashboard, Inventory, Test Status처럼 장비 데이터를 보여 주는 화면은 새로고침 버튼 없이도 Instrument가 보내는 Event Push를 받는 즉시 데이터를 자동으로 바꿔 보여 줌
domain: COM
menus: [Dashboard, Instrument, Inventory, Test Management, Sample Tracking]
cids: []
status: 확정
version:
date: 2026-11-06
sources: [MT-20260916-01, 2026-11-06 사용자 설명]
provisional: []
alerts: []
data: []
replaced_by:
---
# POL-COM-007 실시간 데이터 갱신

## 정의

- Event Push: Instrument가 항목별로 데이터가 바뀔 때마다 L-IOS · T-IOS로 보내는 알림. 화면 데이터 갱신의 기준임 (장비 오류 기록인 Event(POL-EVT-001)와는 다름)
- 실시간 화면: 장비 상태 · 재고 · 검사 진행처럼 Instrument에서 오는 데이터를 보여 주는 화면 (Dashboard, Instrument, Inventory, Test Status 등)

## 규칙

1. 실시간 화면은 메뉴에 들어간 뒤 사용자가 새로고침 버튼을 누르지 않아도 데이터를 자동으로 바꿔 보여 줌.
2. Event Push가 들어오면 바로 그 항목의 데이터를 바꿈. 정해진 주기로 다시 읽는 방식이 아님.

## 이유

- 장비가 항목별로 Event Push를 보내므로, 받는 대로 바꾸면 사용자가 늘 지금 상태를 봄 (MT-20260916-01).

## 예외

없음

## 질문

1. 기존 화면의 [Refresh] 버튼(Inventory Summary, Run 준비 Check Consumables 등)을 그대로 둘지 (자동 갱신과 함께 둘지, 뺄지)
2. 실시간 화면에 들어가는 메뉴 목록 (Sample Tracking, Statistical Analysis 포함 여부)
3. 통신이 끊겨 Event Push가 오지 않을 때 화면 표시 (POL-EQP-002의 통신 단절 Error와의 관계)

## 근거

- MT-20260916-01 "대시보드 및 실시간성 데이터 표기 메뉴 데이터 리프레시 주기: 모두 실시간성 반영. 모든 항목별로 이벤트 보내주기 때문에 이벤트 푸시에 따라 실시간 반영"
- 2026-11-06 사용자 설명: 새로고침 버튼이 아니라 Event Push가 들어오면 바로 자동 업데이트

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-06 | 최초 작성 | MT-20260916-01, 사용자 설명 |
