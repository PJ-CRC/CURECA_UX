---
id: POL-SMP-002
title: 검사 시작·종료 시각
summary: 검사 시각은 Sample 단위, Batch 단위, Plate·단계 단위로 기준이 다르며, 끝나는 시각은 L-IOS가 D.A PC에서 결과를 받은 때임
domain: SMP
menus: [Test Management, Sample Tracking, Information]
cids: [TI-TMG-01, LI-TMG-01, TI-TMG-02, LI-TMG-02, TI-SPT-01, LI-SPT-01, TI-SPT-01-01, LI-SPT-01-01, TI-SPT-02, LI-SPT-02, TI-SPT-03, LI-SPT-03, TI-INF-03-02]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 검체/검사 정의 > 검사 시작/종료 시간 정의, TI-TMG-01·TI-TMG-02·TI-SPT-02 디스크립션, 2026-11-02 사용자 결정 (SM6)]
provisional: []
alerts: []
data: []
replaced_by:
---
# POL-SMP-002 검사 시작·종료 시각

## 정의

| 단위 | 화면 | Start Date/Time | End Date/Time |
| --- | --- | --- | --- |
| Sample (검사 항목) | Test Order, Samples | Prep 쪽에서 Sample Barcode를 읽은 시점 | L-IOS가 D.A PC에서 그 검사 결과를 받은 시점 |
| Batch | Test Status | Run 또는 Quick Start에서 [Run Start]를 요청한 시점 | Batch의 마지막 Sample 결과를 L-IOS가 D.A PC에서 받은 시점 |
| Plate·검사 단계 | Samples Details, 96-DWP, PCR Plate | 그 단계의 Module이 Plate를 넘겨받아 그 Plate의 Barcode를 읽은 시점 | 그 단계 작업이 끝나 Plate가 Module에서 나온 시점 |

## 규칙

1. Order Date와 Canceled Date는 LIS에서 오더를 받은 일자와 취소된 일자임.
2. 96-DWP의 Start는 Sample Preparation 단계에서 읽은 시점, End는 PCR Setup 단계를 마치고 읽은 시점임.
3. PCR Plate의 Start는 PCR Setup Module이 PCR Plate를 넘겨받아 그 Barcode를 읽은 시점, End는 PCR Module에서 나온 시점임. 모든 Plate·검사 단계의 Start 기준은 같음.
4. 일시는 YYYY-MM-DD hh:mm:ss로 보여 줌.

## 예외

없음

## 근거

- 정책서_2026.08.28 "검사 시작/종료 시간 정의" (D.A.PC → D.A PC)
- TI-TMG-01 2-1, TI-TMG-02 3-1, TI-SPT-02 디스크립션
- Plate·검사 단계 Start 기준: 2026-11-02 사용자 결정 (SM6)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SMP-04) | |
| | 2026-11-02 | Plate·검사 단계 Start 기준 정함 (SM6) | 사용자 결정 |
