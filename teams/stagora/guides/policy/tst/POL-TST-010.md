---
id: POL-TST-010
title: 검사 항목과 조합 검사
summary: 검사 항목 30종과 검사군·검체 타입·Target 정보는 Assay Pack에서 받아 쓰며, 한 Sample의 조합 검사는 같은 검사군 안에서만 할 수 있음
domain: TST
menus: [Test Management, Material Setup, Setting]
cids: [TI-TMG-01, LI-TMG-01, TI-STN-01-02, TI-STN-04-02-T, TI-STN-08-P]
status: 확정
version:
date: 2026-11-02
sources: [씨젠 검사 항목 261102 > 검사 항목 정보·검사 항목별 검체 타입 매핑 정보, 씨젠 Assay Pack 명세 R06 > PCR·Master 파일 구조, 정책서_2026.08.28 > Test Policy > PCR Regents 조합 검사 정책, 2026-11-02 사용자 확인]
provisional: []
alerts: []
data: [glossary/test-items.csv, glossary/sample-types.csv, reference/customer/assay-pack/README.md]
replaced_by:
---
# POL-TST-010 검사 항목과 조합 검사

## 정의

- 검사 항목: PCR 시약(Assay) 하나로 하는 검사. 지금 30종이며 목록은 `glossary/test-items.csv`가 기준임 (처음 10종에서 20종이 늘어남)
- 검사군: 검사 항목의 묶음. RP 7종, GI 8종, HPV 3종, RTI 12종 (Assay Pack Master의 검사군 목록, PCR 파일의 testGroupId)
- 조합 검사: 한 Sample로 검사 항목 여러 개를 함께 하는 것

## 규칙

1. 검사 항목, 검사군, 검사 항목별 사용 가능 검체 타입, 검사 Target은 Assay Pack(Master, PCR 파일)에서 받아 보여 줌. 화면설계서의 예시 값도 이 실제 값(`glossary/test-items.csv`, `glossary/sample-types.csv`)을 씀.
2. 한 Sample의 조합 검사는 같은 검사군에 속한 검사 항목끼리만 할 수 있음. 다른 검사군의 검사 항목은 함께 할 수 없음.
3. 검사 항목마다 사용 가능한 검체 타입이 정해져 있음 (PCR 파일의 검체 타입 매핑 정보). 검사군별 사용 가능 검체 타입은 `glossary/sample-types.csv`를 따름. Sample 하나는 검체 타입 하나로 인식하며, 조합 검사는 Sample 하나 기준으로 하므로 조합한 검사 항목은 모두 그 Sample의 검체 타입을 지원해야 함.
4. Target 선택이 가능한 검사 항목(PCR 파일의 isTestTargetSelectable이 true, `glossary/test-items.csv`의 Target Masking 가능 Y)만 검사 Target 일부를 골라 검사할 수 있음.
5. 검사 항목별 추출 장치 사용 가능 여부는 POL-TST-005를 따름.

## 예외

- HPV, RTI 검사군 안에서의 조합 가능 여부는 고객 논의 대상 (CA-0005, 8월 정책서는 "STI-12, HPV 28은 단독 검사만"). 판정 전까지 이 두 검사군의 조합 규칙은 화면에 쓰지 않음

## 근거

- 정책서_2026.08.28 "PCR Regents 조합 검사 정책" (호흡기·소화기 검사군 안에서 조합)
- 2026-11-02 사용자 확인: 검사 항목 30종, 조합 규칙은 Assay Pack 구조에서 오는 값이며 정책으로 추적함
- Sample 1개 = 검체 타입 1개, 조합 검사는 Sample 1개 기준: 2026-11-02 사용자 확인 (T1-b)
- 씨젠 Assay Pack 명세 R06 (`reference/customer/assay-pack/`)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-TST-01) | |
| | 2026-11-03 | 인용 원본을 씨젠 검사 항목 261102로 바꿈 (내용 같음) | `reference/updates/2026-11-03_소모품·시약_검사항목.md` |
