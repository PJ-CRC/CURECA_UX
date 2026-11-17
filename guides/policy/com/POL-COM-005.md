---
id: POL-COM-005
title: 여러 대 CURECA 운영
summary: CURECA 한 대는 하나의 독립된 도메인이며 모든 설정을 장비마다 따로 가짐. T-IOS는 상단의 CURECA 선택으로 장비를 바꿔 보고, Dashboard(All)는 2대 이상 고객에게만 제공함
domain: COM
menus: [Dashboard(All), Dashboard, Setting]
cids: [TI-ADS, TI-ADS-P, TI-DAS, TI-STN-04-01-T, TI-STN-04-02-T]
status: 확정
version:
date: 2026-11-02
sources: [TI-ADS 디스크립션 (Ver 2.1.14), 2026-11-02 사용자 확인]
provisional: []
alerts: []
data: []
replaced_by:
---
# POL-COM-005 여러 대 CURECA 운영

## 정의

- CURECA 한 대는 하나의 독립된 도메인(객체)임. 한 고객이 여러 대(최대 3대)를 설치하면 T-IOS에서 도메인을 바꿔 가며 관리함
- CURECA 선택: T-IOS 상단(GNB)의 CURECA 드롭다운. 이름은 "CURECA (Index)" 또는 사용자가 정한 Display Name

## 규칙

1. Dashboard(All)는 CURECA를 2대 이상 설치한 고객에게만 보임. 1대만 설치한 고객에게는 보이지 않음.
2. Dashboard(All)는 설치한 CURECA를 한 화면에 모아 요약해 보여 줌 (화면에는 최대 3대).
3. Dashboard(All)를 뺀 메뉴는 상단에서 고른 CURECA 기준의 데이터를 보여 줌.
4. Dashboard(All)에서 CURECA의 [Enter]를 누르면 그 CURECA의 Dashboard로 이동하고 상단의 CURECA 선택도 그 장비로 바뀜.
5. 모든 설정은 CURECA마다 따로 둠: 계정(Account Setting)과 Profile, Policy Setting, Protocol Setting, System Setting, LIS Setting, SMTP Setting, Assay Pack Setting, Tube Setting (POL-SYS-001, POL-SYS-002 등).

## 예외

없음

## 근거

- TI-ADS 디스크립션 (CURECA 전환, [Enter], 최대 3대)
- 1대 고객에게 Dashboard(All) 미제공, 메뉴가 선택한 CURECA 기준, LIS 설정 CURECA별: 2026-11-02 사용자 확인
- 3개 도메인, 모든 설정 장비별: 2026-11-02 사용자 확인 (C2)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
| | 2026-11-02 | 장비별 독립 도메인과 모든 설정 장비별 (규칙 5) | |
