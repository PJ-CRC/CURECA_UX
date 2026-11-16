---
id: POL-COM-001
title: 플랫폼 구성
summary: CURECA 소프트웨어는 Instrument와 직접 연동하는 L-IOS와 원격 관제·운영 관리를 하는 T-IOS로 구성되며, Material Setup은 L-IOS 안에 있음
domain: COM
menus: []
cids: []
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 공통 > 플랫폼 설명]
provisional: []
alerts: []
data: [policy/service-mode.md]
replaced_by:
---
# POL-COM-001 플랫폼 구성

## 정의

| 구분 | 역할 |
| --- | --- |
| L-IOS | Instrument와 직접 연동. Run 제어, Consumable 관리, 오류 감지와 처리 |
| Material Setup | L-IOS 안의 메뉴. Sample과 검사에 필요한 Consumable·Reagent를 셋업하고 그 데이터를 관리 |
| T-IOS | Instrument 상태 원격 모니터링, 검사 정책 설정, 사용자 관리 등 운영 전반 관리 |

## 규칙

1. L-IOS는 설치할 때 Service Mode(Main Mode, Console Mode, TSS Mode) 중 하나로 정해지며, 모드에 따라 보이는 메뉴와 기능이 다름 (`policy/service-mode.md`).
2. 계정은 T-IOS에서 만들고 T-IOS와 L-IOS에서 함께 씀 (POL-ACC-001).
3. L-IOS는 서버 PC에서 L-IOS UI와 L-IOS 서버로 나뉘어 돌아감. L-IOS UI가 문제로 꺼지면 Windows가 L-IOS UI 프로그램을 자동으로 다시 실행함 (MT-20260805-01).

## 예외

없음

## 근거

- 정책서_2026.08.28 공통 "1-1) 개요"
- MT-20260805-01 "L-ios UI 이슈로 인해 종료될 경우, Windows에서 L-ios UI 프로그램 자동 실행" (규칙 3)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-CMN-01) | |
| | 2026-11-06 | L-IOS UI 자동 재실행 (규칙 3) | MT-20260805-01 |
