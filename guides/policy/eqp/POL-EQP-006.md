---
id: POL-EQP-006
title: Spare Storage
summary: High-throughput Extraction의 Spare Storage는 예비 공간이며 그 Drawer Barcode를 스캔하면 Alert_028을 표시함
domain: EQP
menus: [Material Setup]
cids: [LI-TSS-DXI-02]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 장비 관리 및 정의 > Spare storage 정의, 알럿 관리 페이지 Alert_028]
provisional: []
alerts: [Alert_028]
data: [glossary/module-units.csv]
replaced_by:
---
# POL-EQP-006 Spare Storage

## 정의

- Spare Storage: High-throughput Extraction Module의 예비 Storage. 지금은 쓰지 않으며, 앞으로 별도 Storage가 필요한 경우(예: WB3 Module 추가)에 대비한 공간임.

## 규칙

1. Spare Storage는 지금 사용하지 않는 Storage로 둠.
2. 사용자가 Spare Storage의 Drawer Barcode를 스캔하면 Alert_028을 표시함.

## 예외

없음

## 근거

- 정책서_2026.08.28 "Spare storage 정의"
- 알럿 관리 페이지 Alert_028 ("This slot is reserved for future system updates.")

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-INS-04) | |
