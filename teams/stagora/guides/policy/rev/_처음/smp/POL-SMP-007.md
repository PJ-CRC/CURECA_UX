---
id: POL-SMP-007
title: Run 준비와 시작 조건
summary: Run 준비는 Sample, (Test Protocol), Consumable, Reagent, Waste Bin/Bottle 확인 순서로 하며, Sample 정보 로드 실패·Tray 없음·네트워크 오프라인·Module Door 열림이 있으면 Run을 시작할 수 없음. Run 준비에 들어가면 재고·Waste 상태, 만료 Reagent와 관계없이 Run Start를 할 수 있음
domain: SMP
menus: [Run, Quick Start]
cids: [LI-RUN-P, LI-RUN-01, LI-RUN-02, LI-RUN-02-01, LI-RUN-03, LI-RUN-04, LI-QUK]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 검체/검사 정의 > 만료 시약 검사 불가, LI-RUN-P·LI-RUN-01~04·LI-QUK 디스크립션, 2026-11-02 사용자 결정 (SM2, SM2-a, SM3, SM4)]
provisional: []
alerts: [Alert_001, Confirm_001, Confirm_002]
data: []
replaced_by:
---
# POL-SMP-007 Run 준비와 시작 조건

## 정의

- Run 준비 단계: Check Run Samples → Check Test Protocol → Check Consumables → Check Reagents → Check waste bin/bottle → [Run Start]
- Run 대상 Sample: 검사 접수된 Sample 중 Trolley 또는 STAT Storage로 도킹된 Sample

## 규칙

1. Check Test Protocol 단계는 Policy Setting의 Allow Protocol Changes Before Test가 On일 때만 나옴. Off이면 Protocol Setting에서 Apply한 Protocol로 Run함 (POL-TST-001 규칙 8).
2. [Run]이나 [Quick Start]를 누를 때 아래 중 하나라도 해당하면 Run 준비로 넘어가지 않고 Notifications Before Run Preparation Popup(LI-RUN-P)에 문제 항목을 보여 줌.
   - Trolley 또는 STAT Storage의 Sample 정보 로드 실패
   - 도킹된 Consumable Trolley 1층에 Tray가 없음
   - 네트워크(Instrument, T-IOS, D.A PC) 중 하나라도 오프라인. Instrument는 1대라도 오프라인이면 오프라인
   - Module의 Door(Storage, Waste Bin 문 제외)가 하나라도 Open
3. Expiration Date가 지난 Reagent가 있어도 [Run Start]를 할 수 있음. Instrument가 Reagent를 쓰기 직전에 그 Barcode를 읽어 Expiration Date를 확인하고, 지났으면 Dx 시스템은 그 Reagent를 자동으로 폐기하고, Prep 시스템은 쓰지 않고 Trolley로 반환함 (POL-INV-004 규칙 4).
4. Run 준비에 들어가면 Consumable·Reagent 재고 상태(Insufficient, Low)와 Waste Bin/Bottle 상태(Full, Almost Full)와 관계없이 [Run Start]를 할 수 있음. 부족하거나 가득 찬 항목은 검사가 그 항목을 쓰는 단계에 이르렀을 때 Error가 됨. 예: 4번째 단계에서 쓰는 Consumable이 없으면 Sample이 1~3단계를 거쳐 4단계에 이르렀을 때 Error가 남.
5. Check Test Protocol에서 고른 Protocol은 그 Run에만 쓰임. Protocol Setting의 Applied Protocol은 바뀌지 않음.
6. [Run Start]와 [Quick Start] 실행은 Confirm_002로 확인함. Run 준비 중 [Cancel]이나 메뉴 이동은 Confirm_001로 확인함.
7. Quick Start는 규칙 2의 조건을 모두 통과할 때 요약 Popup 하나로 Run 준비 단계를 대신함.
8. Quick Start는 Protocol Setting의 Applied Protocol로만 Run함. Allow Protocol Changes Before Test가 On이어도 Quick Start에서는 Protocol을 고를 수 없음.

## 예외

없음

## 근거

- 정책서_2026.08.28 "만료 시약 검사 불가": Run Start 불가는 없어짐. 만료 Reagent는 Instrument가 쓰기 직전 Barcode로 확인해 자동 폐기 (2026-11-02 사용자 전달, SM2-a)
- LI-RUN-P 디스크립션 (실행 불가 항목), LI-RUN-01~04·LI-QUK 디스크립션
- 규칙 3·4·5·8: 2026-11-02 사용자 결정 (SM2-a, SM2, SM3, SM4)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SMP-09) | |
| | 2026-11-02 | 재고·Waste 상태와 Run Start, Protocol 적용 범위, Quick Start Protocol 정함 (SM2, SM3, SM4) | 사용자 결정 |
| | 2026-11-02 | 만료 Reagent로 Run Start를 막던 제약 없앰, 쓰기 직전 Barcode 확인 후 자동 폐기 (SM2-a) | 사용자 전달 (최신 정책) |
| | 2026-11-03 | 만료 Reagent 처리를 Dx(폐기)·Prep(Trolley 반환)으로 나눔 (IV4) | 사용자 확인 |
