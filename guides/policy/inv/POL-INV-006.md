---
id: POL-INV-006
title: Usage History와 품목 In/Out 시점
summary: 품목은 로봇팔이 Storage에서 사용 위치로 옮기기 시작할 때 Out이 되고, Instrument가 최종 폐기할 때 Usage History에 사용 완료로 남으며, Usage History는 기본 최근 7일, 최대 1년을 조회함
domain: INV
menus: [Inventory, Statistical Analysis]
cids: [TI-IVT-06-T, LI-IVT-06-T, TI-STA-07-01, TI-STA-07-02]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > 시약/소모품 사용 및 폐기 > 소모품 및 시약 변동(인/아웃) 시점 정의, TI-IVT-06-T 디스크립션 (Ver 2.1.11), 팀원 POL-RGT-06, 2026-11-03 사용자 확인 (IV5, IV6, IV10)]
provisional: []
alerts: []
data: []
replaced_by:
---
# POL-INV-006 Usage History와 품목 In/Out 시점

## 정의

| 시점 | 기준 |
| --- | --- |
| Out | Storage에 있던 품목을 로봇팔이 Module 안 실제 사용 위치로 옮기기 시작한 때 |
| Usage History 기록 | Instrument가 그 품목을 폐기(Dispose)한 때. 사용 완료, 최대 사용 횟수 초과, Expiration Date 경과로 인한 폐기 모두 |

## 규칙

1. Usage History는 폐기할 때만 기록함. 사용 후 Storage나 Trolley로 반환할 때는 기록하지 않음.
2. Usage History는 Unit + Barcode + Usage + Date/Time 단위로 한 줄을 만듦. Usage는 폐기 때의 사용 개수, Date/Time은 폐기 시각(시스템 기준)임.
3. 조회 기간 기본값은 오늘 기준 최근 7일(7일 전 ~ 오늘)이며 최대 1년까지 고를 수 있음. 미래 날짜는 고를 수 없음.
4. 검색 조건: Item Type(All, Consumable, Reagent, 기본값 All), Name·Barcode(부분 일치), Module과 그 Module의 Storage Unit(오름차순).
5. 목록은 Date/Time 최신순으로 보여 줌.
6. [Export]는 목록의 데이터를 .csv 파일로 내보냄 (POL-COM-006).
7. L-IOS(LI-IVT-06-T)도 T-IOS(TI-IVT-06-T, Ver 2.1.11)와 같은 기준을 씀.
8. Statistical Analysis의 Usage & Cost Trend는 이 이력을 씀 (POL-STA-006).

## 이유

- 규칙 1: MT-20260929-01에서 "폐기 및 리턴 시점에 표기"를 논의했으나, 폐기할 때만 기록하는 것으로 정함 (2026-11-03 IV5, 2026-11-06 사용자 확인). 반환한 품목은 다시 쓰므로 사용 완료가 아님.

## 예외

없음

## 근거

- 정책서_2026.08.28 "소모품 및 시약 변동(인/아웃) 시점 정의"
- TI-IVT-06-T 디스크립션 0, 1, 2 (Ver 2.1.11)
- 2026-11-03 사용자 확인: 폐기(사용 완료, 사용 횟수 초과, Expiration Date 경과)할 때만 기록 (IV5), L-IOS도 T-IOS 기준 (IV6), 파일은 .csv (IV10)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-RGT-06) | |
| | 2026-11-03 | 폐기할 때만 기록, L-IOS도 T-IOS 기준, Export .csv (IV5, IV6, IV10) | 사용자 확인 |
| | 2026-11-06 | 폐기 때만 기록하는 이유와 09-29 회의와의 관계를 남김 | 사용자 확인 |
