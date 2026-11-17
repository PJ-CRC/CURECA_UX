---
id: POL-SYS-002
title: LIS Code Mapping
summary: LIS 코드와 CURECA 코드(Sample Type, Test, Target)의 대응을 T-IOS에서 관리하며, 처음 설치할 때 CURECA 값으로 채워 두고 필요하면 고침
domain: SYS
menus: [Setting]
cids: [TI-STN-04-02-T]
status: 확정
version:
date: 2026-11-02
sources: [TI-STN-04-02-T 디스크립션 (Ver 2.1.12)]
provisional: []
alerts: [Confirm_010, Confirm_016]
data: [glossary/sample-types.csv, glossary/test-items.csv]
replaced_by:
---
# POL-SYS-002 LIS Code Mapping

## 정의

| Code Type | 관리 항목 | 출처 |
| --- | --- | --- |
| Sample Type Code | Sample Type | Assay Pack의 공통 정보 |
| Test Code | 검사 항목 | Assay Pack의 PCR 정보 |
| Target Code | Target을 따로 쓰는 검사 항목과 그 Target (2단계) | Assay Pack의 PCR 정보 중 Target 이름을 쓰는 검사 항목 |

## 규칙

1. 관리 항목은 Assay Pack에 들어 있는 정보로 정해지며, Assay Pack이 바뀌면 항목도 바뀜.
2. 화면에는 코드 대신 UI 표기 이름(Sample Type 이름, 검사 항목 이름)을 보여 줌.
3. 처음 설치할 때 LIS Code에는 CURECA가 관리하는 값이 채워져 있고, 사용자가 필요하면 고침.
4. 입력한 LIS Code는 LIS 연동 때 대응 기준으로 씀.
5. 고친 내용은 [Save]를 눌러야 반영되며, 저장하지 않고 화면을 떠나면 Confirm_016을 보여 줌.
6. Code Mapping은 CURECA마다 따로 둠 (POL-COM-005).

## 예외

없음

## 근거

- TI-STN-04-02-T 디스크립션 (v2.1.12: 고정 관리 항목에서 Assay Pack 기준 동적 추가 방식으로 바뀜)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
