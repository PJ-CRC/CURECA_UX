---
id: POL-EQP-004
title: Pausing과 Paused
summary: Door 잠금이 해제되면 그 Module은 Paused가 되며, Running 중이면 Pausing을 거침. Module 고장이 아니므로 Error가 아님
domain: EQP
menus: [Instruments, Dashboard]
cids: [LI-INS-01-P, LI-INS-01-T, LI-INS-02-T, TI-INS-01-T, TI-INS-02-T, TI-DAS, LI-DAS]
status: 확정
version:
date: 2026-11-02
sources: [씨젠 상태 정보 261021 > 장비 상태, LI-INS-01-P 디스크립션, 2026-10-30 사용자 설명, 2026-11-02 사용자 확인]
provisional: []
alerts: []
data: [policy/equipment-states.md]
replaced_by:
---
# POL-EQP-004 Pausing과 Paused

## 정의

- Pausing: Module이 진행 중인 작업 단위를 마치고 멈추는 중인 장비 모듈 상태
- Paused: 사용자 동작 때문에 Module이 잠시 멈춘 장비 모듈 상태. Module 고장이 아니므로 Error가 아님

## 규칙

1. Door 잠금이 해제되면 그 Module의 장비 모듈 상태는 Paused가 됨. 장비 통합 상태가 Ready, Not Initialized, Error일 때도 같음.
2. Door가 2개 이상인 Module(Sample Storage, Sample Preparation)은 Door 하나라도 잠금이 해제되면 그 Module이 Paused가 됨. Door 구성은 `glossary/module-units.csv`를 따름.
3. 장비 모듈 상태가 Running일 때 사용자가 Door Control에서 [Unlock]을 요청하면 Module은 진행 중인 작업 단위를 마칠 때까지 Pausing이 되고, 마친 뒤 Paused가 되며 Door 잠금이 해제됨.
4. Plate Sealing의 Door 잠금 해제로 Plate Sealing이 Paused가 될 때 PCR Setup도 함께 Paused가 됨.
5. Dx 쪽 Module의 Storage Drawer는 장비 모듈 상태가 Running일 때도 열 수 있으며, 열었다고 바로 Paused가 되지는 않음.
6. Storage Drawer가 열려 있을 때 Device가 Consumable을 다시 채우려고 로봇팔이 그 Storage에 접근하면 그 Module은 Paused가 됨. Drawer가 닫히면 이어서 진행함.
7. Door가 닫히고 5초 뒤 자동으로 잠기면 Paused였던 Module은 Paused 전 상태로 돌아감. Run 중에 Paused가 됐으면 Running으로, Run 중이 아닐 때(예: Ready) Paused가 됐으면 그 전 상태(Ready)로 돌아감.
8. Paused인 Module이 장비 통합 상태에 주는 영향은 POL-EQP-002를 따름: Run 중 1대라도 Paused이고 Running인 Module이 있으면 Partial Running, 모든 Module이 Paused면 Paused. Run 중이 아닐 때 일부만 Paused면 장비 통합 상태는 바뀌지 않음.

## 예외

- 지금까지 Pausing이 생기는 경우는 Door Control의 [Unlock]이 유일함.
- 규칙 1의 "Error일 때도 Paused"는 MT-20260922-01 "Error면 Door를 열어도 Error 유지"와 다름. 고객 확인 중 (CA-0010). 확인 전까지 규칙 1을 그대로 둠.

## 근거

- 씨젠 상태 정보 261021 > 장비 상태 (Pausing, Paused 정의)
- Door Control Popup [LI-INS-01-P](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/1-2.-CURECA_%EA%B8%B0%ED%9A%8D-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9E%91%EC%97%85%EB%B0%A9-Part.2-?node-id=4961-83155) 안내 문구
- 2026-10-30 사용자 설명, 2026-11-02 Storage Drawer 조건 정정. Run 중이 아닐 때도 Door 잠금 해제 시 Paused, Door가 여러 개면 하나라도 해제 시 Paused: 2026-11-02 사용자 확인 (씨젠 정의의 "모듈 가동 중"보다 넓힘) (`policy/equipment-states.md` 5절)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (8월 정책서에 없음, `policy/policy-backlog.md` 추가할 것 3) | |
| | 2026-11-02 | Run 중이 아닐 때의 Door 잠금 해제와 Door가 여러 개인 Module 규칙 추가 | |
| | 2026-11-02 | Door가 잠긴 뒤 Paused 전 상태로 돌아가는 규칙 (규칙 7) | |
| | 2026-11-06 | Error일 때 Door를 여는 경우를 고객 확인 목록에 올림 (예외, CA-0010) | MT-20260922-01 |
