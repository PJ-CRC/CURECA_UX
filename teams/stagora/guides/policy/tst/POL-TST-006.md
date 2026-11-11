---
id: POL-TST-006
title: Protocol Setting
summary: Pre-Treatment·Extraction Protocol은 T-IOS에서 복사·수정·삭제하고 L-IOS는 조회만 하며, Seegene 기본 Protocol(SG protocol)은 바꾸거나 지울 수 없고 장비 통합 상태가 Not Initialized 또는 Ready일 때만 바꿀 수 있음
domain: TST
menus: [Setting]
cids: [TI-STN-03-01, TI-STN-03-01-01, TI-STN-03-01-02, TI-STN-03-01-02-01-V, TI-STN-03-01-02-01-M, TI-STN-03-02, TI-STN-03-02-01, TI-STN-03-02-02-V, TI-STN-03-02-02-M, LI-STN-03-01, LI-STN-03-01-02, LI-STN-03-01-02-01, LI-STN-03-02, LI-STN-03-02-02]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > Test Policy > Protocol 공통 정책, TI-STN-03-01·03-01-01·03-02 디스크립션 (Ver 2.0)]
provisional: []
alerts: [Confirm_010, Confirm_012]
data: [policy/permission-matrix.csv]
replaced_by:
---
# POL-TST-006 Protocol Setting

## 정의

- Pre-Treatment Protocol: Sample Type별 Pre-Treatment Process 묶음
- Extraction Protocol: Nucleic Acid Extraction(M9600) 조건 묶음 (Standby state setting conditions, Operation conditions)
- SG protocol: Seegene이 제공하는 기본 Protocol

## 규칙

1. Protocol 추가(복사)·변경·수정·삭제는 T-IOS에서만 함. L-IOS는 조회만 함.
2. SG protocol과 그 하위 항목은 수정·삭제할 수 없음.
3. 장비 통합 상태가 Not Initialized 또는 Ready일 때만 Protocol을 추가·변경·수정·삭제할 수 있음. Running, Partial Running, Stopping, Paused, Error, Initializing일 때는 바꿀 수 없음 (POL-TST-001과 같은 조건).
4. 새 Protocol은 기존 Protocol을 [Copy]해서 만들며, 복사본은 원본 바로 아래에 생김.
5. Protocol Name은 공백 포함 최대 50자이며 \ / : * ? " < > | 를 쓸 수 없음.
6. 종류마다 [Apply]한 Protocol 하나가 사용 중(Applied)이 됨. 다른 Protocol을 Apply하면 기존 Applied는 해제됨.
7. Extraction Protocol은 최소 1개, 최대 25개임.
8. 고친 내용은 [Save](Confirm_010)로 저장하고, 저장하지 않고 [Cancel]하면 Confirm_012로 확인함.

## 예외

없음

## 근거

- 정책서_2026.08.28 Protocol 공통 정책 ("T-IOS에서 추가, 변경, 수정, 삭제할 수 있으며, L-IOS에는 View 기능만 제공", "SG protocol은 수정 및 삭제할 수 없음", "RUN 중에는 protocol 추가, 변경, 수정, 삭제가 불가능")
- TI-STN-03-01-01 디스크립션 (이름 조건, Apply), TI-STN-03-02 (최대 25개)
- 규칙 3의 상태 조건: 2026-11-02 사용자 확인 (T5). 이미 진행 중인 Run 중간에 바꾼 Protocol이 반영되면 고객이 헷갈릴 수 있어 Ready·Not Initialized로 한정

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-TST-05) | |
| | 2026-11-02 | 바꿀 수 있는 장비 통합 상태를 Not Initialized·Ready로 명확히 함 (규칙 3) | |
