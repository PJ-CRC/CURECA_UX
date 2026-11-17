---
id: POL-TST-003
title: Cost Setting
summary: Consumable·Reagent의 포장 단가를 T-IOS에서 통화와 함께 입력하며, 이 값은 Analyze Breakpoint, Comparison Simulation, Test Cost 통계의 계산에 쓰임
domain: TST
menus: [Setting, Statistical Analysis]
cids: [TI-STN-01, TI-STN-01-01, TI-STN-01-03, TI-STN-01-04, TI-STA-04-01, TI-STA-04-02, TI-STA-07-01, TI-STA-07-02]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > Test Policy > Cost Setting, TI-STN-01-01 디스크립션 (Ver 2.0, v2.1.14 메모), TI-STN-01 디스크립션 4-3]
provisional: []
alerts: [Confirm_010, Alert_046]
data: []
replaced_by:
---
# POL-TST-003 Cost Setting

## 정의

- Cost Setting: Consumable과 Reagent의 납품 단가(포장 단위)를 관리하는 T-IOS 전용 Popup

## 규칙

1. 통화는 KRW, USD, EUR, GBP 중 하나이며 기본값은 USD임. 통화를 바꾸면 모든 단가 표시에 반영함.
2. 품목마다 Usage를 켜야 단가를 입력할 수 있음. 단가는 0 이상의 숫자이며 소수점을 허용함.
3. Usage를 켠 품목이 1개 이상이고 단가가 비어 있지 않을 때 [Apply]로 저장함.
4. 입력한 단가는 Analyze Breakpoint, Comparison Simulation, Statistical Analysis의 Test Cost 계산에 씀.
5. Cost Setting을 하지 않은 상태에서 Analyze Breakpoint를 누르면 Alert_046을 보여 줌.

## 예외

없음

## 근거

- 정책서_2026.08.28 Cost Setting 개요와 데이터 활용처 ("Prioritize Cost Reduction 메뉴의 Analyze breakpoint", "Nucleic Acid Extraction Device Allocation Policy 메뉴의 Compare", "Test Analytics메뉴의 Test Cost 통계"): 팀원 Q17 해소 (POL-TST-004)
- TI-STN-01-01 디스크립션, TI-STN-01 4-3 (v2.1.14 Alert_046)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-TST-03) | |
| | 2026-11-02 | 관련 CID에 Statistical Analysis 화면 추가 (POL-STA-006) | |
