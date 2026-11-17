---
id: POL-TST-007
title: M9600 Extraction Protocol 설정 제약
summary: M9600의 Plate 1~8 배치는 최초 설정대로 고정하며(8번은 Tip), Heating이 있는 Plate 1·2·3·6에서만 온도를 설정하고 쓰지 않는 Plate는 Not Used로 표시함
domain: TST
menus: [Setting]
cids: [TI-STN-03-02-02-V, TI-STN-03-02-02-M, LI-STN-03-02-02]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > Test Policy > M9600 하드웨어 사양 기반 설정 제약 정책, TI-STN-03-02-02-V·M 화면 문구 (Ver 2.0)]
provisional: []
alerts: []
data: []
replaced_by:
---
# POL-TST-007 M9600 Extraction Protocol 설정 제약

## 정의

- M9600: High-throughput Extraction의 Device Unit. Extraction Protocol은 Plate 위치별 조건을 정함

## 규칙

1. Plate 배치는 최초 설정대로 고정하며 사용자가 바꿀 수 없음 (고객 요청): Plate 1 LB, Plate 2 WB1, Plate 3 WB2, Plate 4 MB, Plate 5 Not Used, Plate 6 EB, Plate 7 Not Used, Plate 8 Tip.
2. Plate 8은 Spin Tip 전용임.
3. Heating 시스템이 있는 Plate는 1, 2, 3, 6번이며, 이 Plate에서만 온도를 설정할 수 있음. 나머지 Plate는 온도 설정을 비활성화함.
4. 쓰지 않는 Plate 자리(5, 7)는 빈칸 대신 Not Used로 표시함.

## 예외

없음

## 근거

- 정책서_2026.08.28 "M9600 하드웨어 사양 기반 설정 제약 정책" (Heating 위치 제한, 빈 슬롯 Not Used)
- Heating Plate 번호: TI-STN-03-02-02 화면 문구 "There are 4 plates with heating system(1, 2, 3 and 6)." (8월 정책서의 "예: 1, 2, 3, 6번 등"을 확정, 팀원 Q20 해소)
- Plate 고정 배치와 Plate 8 Spin Tip 전용: 2026-11-02 사용자 확인 (고객 요청, 팀원 Q19 해소). 배치는 TI-STN-03-02-02-V 화면 예시 기준

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-TST-06) | |
| | 2026-11-02 | Plate 배치 고정과 Plate 8 Spin Tip 전용 추가 (규칙 1·2) | |
