---
id: POL-TST-005
title: Extraction Module Usage Setting
summary: 검사 항목마다 쓸 수 있는 추출 Module(High-throughput Extraction, Flexible Extraction)을 T-IOS에서 정하며, 최소 1개는 사용으로 둬야 함
domain: TST
menus: [Setting]
cids: [TI-STN-01, TI-STN-01-02, LI-STN-01-02]
status: 확정
version:
date: 2026-11-02
sources: [씨젠 검사 항목 261102 > 검사 항목별 추출 장치 매핑 정보, TI-STN-01-02 디스크립션 (Ver 2.0, v2.1.12·v2.1.13 메모)]
provisional: []
alerts: [Confirm_010]
data: [glossary/test-items.csv]
replaced_by:
---
# POL-TST-005 Extraction Module Usage Setting

## 정의

- 검사 항목마다 High-throughput Extraction(M9600)과 Flexible Extraction(STARlet) 중 어느 쪽에서 Nucleic Acid Extraction을 할 수 있는지 정하는 설정
- 검사 항목 목록과 기본값은 `glossary/test-items.csv`의 M9600·STARlet 칸이 기준임

## 규칙

1. 목록에는 Assay Pack에 있는 모든 검사 항목을 보여 줌.
2. 기본값은 씨젠 검사 항목 원본의 추출 장치 매핑을 따름.
3. 검사 항목마다 최소 1개의 추출 Module은 사용으로 둬야 함. 마지막 하나를 끄려고 하면 끄지 않고 안내 배너를 보여 줌.
4. T-IOS에서만 바꾸며, L-IOS는 조회만 함.

## 예외

없음

## 근거

- 씨젠 검사 항목 261102 > 검사 항목별 추출 장치 매핑 정보 (`policy/policy-backlog.md` 추가할 것 10)
- TI-STN-01-02 디스크립션 (v2.1.12에서 기본값 M9600 ↔ STARlet 변경 메모가 있으나, 기본값은 씨젠 원본 기준)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
| | 2026-11-03 | 인용 원본을 씨젠 검사 항목 261102로 바꿈 (내용 같음) | `reference/updates/2026-11-03_소모품·시약_검사항목.md` |
