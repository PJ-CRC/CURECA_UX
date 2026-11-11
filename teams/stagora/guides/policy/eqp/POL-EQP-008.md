---
id: POL-EQP-008
title: Door 잠금 해제와 자동 잠금
summary: Door는 L-IOS Door Control로만 잠금 해제하며, 닫히면 5초 뒤 자동으로 잠기고 다시 잠그는 버튼은 없음
domain: EQP
menus: [Instruments, Dashboard, Material Setup]
cids: [LI-INS-01-P, LI-INS-01-T, LI-INS-02-T, TI-INS-02-T, LI-DAS, TI-DAS]
status: 확정
version:
date: 2026-11-02
sources: [씨젠 상태 정보 261021 > 도어 잠금 해제 조건, 정책서_2026.08.28 > 장비 관리 및 정의 > Door 개폐 및 잠금 전환 규칙, LI-INS-01-P 디스크립션, 2026-10-30·11-02 사용자 확인]
provisional: [PV-0001]
alerts: [Confirm_008]
data: [policy/equipment-states.md, glossary/status-values.csv]
replaced_by:
---
# POL-EQP-008 Door 잠금 해제와 자동 잠금

## 정의

- Door: Module 상단(일부 하단)의 유리문. Unit Type이 Door인 Unit
- 장비 모듈 도어 잠금 상태: Locked / Unlocked, 장비 모듈 도어 열림 상태: Open / Closed
- 장비 통합 상태별 잠금 해제 허용과, 검사 진행 중 조건부로 열 수 있는 Module·Door 표는 `policy/equipment-states.md` 5절이 기준임

## 규칙

1. Door는 기본으로 Locked이며, 잠금 해제를 거쳐야 Open이 가능함.
2. 잠금 해제는 L-IOS Door Control Popup(LI-INS-01-P)의 [Unlock]으로 요청함.
3. 사용자가 화면에서 Door를 다시 잠그는 기능은 없음. Door를 닫으면 5초 뒤 자동으로 Locked가 됨.
4. 장비 통합 상태가 Initializing 또는 Stopping일 때 Door 잠금 해제는 불가.
5. 장비 통합 상태가 Running 또는 Partial Running일 때 Flexible Extraction, PCR Setup, Universal PCR의 Door 잠금 해제는 불가.
6. 장비 통합 상태가 Running, Partial Running, Paused일 때 Sample Storage, Prep Consumable Storage, Sample Preparation, High-throughput Extraction, Plate Sealing의 Door는 조건부로 잠금 해제 가능 (`policy/equipment-states.md` 5절 표).
7. 장비 모듈 상태가 Running일 때 잠금 해제를 요청하면 Module은 Pausing을 거쳐 Paused가 된 뒤 Door 잠금이 해제됨 (POL-EQP-004).
8. 장비 통합 상태가 Ready, Error, Paused, Not Initialized일 때만 [Unlock all doors]는 활성화됨.
9. Run Start를 하면 Unlocked인 Door는 자동으로 Locked가 되고 Run이 진행됨.
10. Door가 2개인 Module(Sample Preparation)의 장비 모듈 도어 열림 상태 표시는 POL-EQP-001을 따름.

## 예외

- High-throughput Extraction의 Door 조건부 잠금 해제는 표준형 장비만 해당함. 맞춤형 장비(재단)는 DWP Film Waste Bin이 서랍형이라 가동 중 Door 개방을 허용하지 않음.
- Plate Sealing은 PCR Setup과 물리적 간섭 가능성이 있어 두 Module 상태를 함께 판단하며, 둘 중 하나라도 Running이면 두 Module 모두 Paused로 바꾼 뒤 개방을 허용함.
- Run 중 잠금을 해제한 뒤 Door를 한 번도 열지 않은 경우의 동작은 아직 정의되지 않음. 임시 정책 PV-0001을 따름.

## 근거

- 씨젠 상태 정보 261021 > 도어 잠금 해제 조건 (8월 정책서의 "Running 중 Unlock 불가"는 이 기준으로 바뀜)
- 정책서_2026.08.28 "Door 개폐 및 잠금 전환 규칙" (기본 Locked, 다시 잠그는 기능 없음, 5초 자동 잠금, Run 시작 시 자동 잠금)
- [Unlock all doors] 활성 조건: 2026-10-30 확인. 다시 잠그는 기능 없음과 Run Start 자동 잠금: 2026-11-02 사용자 확인

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-INS-01) | PV-0001 |
