---
id: POL-LOD-001
title: Trolley 도킹과 교체
summary: Trolley는 도킹하면 Barcode 스캔 없이 자동으로 인식되며, Consumable Trolley는 Run 중에도 언제든 바꿀 수 있고, Sample Trolley는 Run 하나에 한 대이며 Inbound Trolley의 Sample이 모두 처리 단계로 넘어가면 Outbound Trolley와 함께 바꿀 수 있음
domain: LOD
menus: [Run, Instrument, Inventory, Material Setup]
cids: [LI-RUN-P, LI-RUN-01, LI-INS-01-P, TI-IVT-02-T, LI-IVT-02-T, LI-TSS-PSI-SAM-03-02, LI-TSS-PSI-LCR-02-02]
status: 확정
version:
date: 2026-11-03
sources: [정책서_2026.08.28 > 트롤리 도킹 & Drawer Loading > 검체 및 소모품 트롤리 도킹/제어 정책, 저장 장치 도킹 상태값 정의, 팀원 POL-DCK-01·05·06 (팀원 쪽 사용자 확인 2026-10-16), 2026-11-03 사용자 답변 (MS1)]
provisional: []
alerts: []
data: [glossary/status-values.csv]
replaced_by:
---
# POL-LOD-001 Trolley 도킹과 교체

## 정의

- 저장 장치 도킹 상태 값과 정의는 `glossary/status-values.csv`의 저장 장치 도킹 상태가 기준임: Docked(Drawer 또는 Door가 닫힘), Undocked(열림)
- Sample Storage에는 Trolley 2대가 들어감: Inbound Trolley(Left Door, 투입), Outbound Trolley(Right Door, 회수)

## 규칙

1. Trolley를 Instrument에 도킹하면 Barcode를 따로 스캔하지 않아도 Instrument가 Trolley를 자동으로 인식함.
2. Trolley를 넣을 때는 Instrument의 Door Control로 Door 잠금을 풀고 Door를 열어 넣음 (POL-EQP-008).
3. Sample Trolley 한 대에 Consumable Trolley 여러 대를 구성할 수 있음.
4. Consumable Trolley는 Run 중에도 언제든 빼고 새 Trolley를 바로 도킹할 수 있음. 바꿀 때 Prep 시스템에서 쓰던 품목은 새 Trolley의 1F 빈 Tray로 돌아옴 (POL-MAT-007 규칙 10).
5. Run 하나에는 Sample Trolley 한 대만 씀. 새 Sample Trolley를 넣을 때마다 Run 준비에서 [Run Start]를 눌러야 그 Trolley의 검사가 시작됨.
6. [Run Start] 뒤에는 Inbound Trolley에 Sample이 남아 있는 동안 도킹을 해제할 수 없음. 마지막 Sample이 Sample Preparation으로 넘어가 Inbound Trolley가 비면, Run 중이라도 도킹을 해제하고 Inbound Trolley와 Outbound Trolley를 함께 바꿀 수 있음. 이때 아직 처리 중이던 Rack은 새 Outbound Trolley의 1F 빈 Tray로 돌아옴 (MT-20261026-01, 2026-11-06 사용자 확인).
7. Sample이 남은 Inbound Trolley를 빼야 하면 Run을 멈춘 뒤 뺌. 이때 Prep 시스템으로 들어가지 못한 Sample은 Ordered로 돌아감 (POL-SMP-001 규칙 6).
8. 그래서 Inbound Trolley는 1F에 Tray를 두지 않고(POL-MAT-006 규칙 8), Outbound Trolley는 1F에 빈 Tray를 넣어 둠. Outbound Trolley는 따로 구성하지 않고 그대로 넣음.
9. 사용자는 Inventory > Overview의 Sample Storage 현황(Samples (Inbound Trolley), Samples (Test In Progress), Samples (Outbound Trolley))을 보고 바꿀 때를 정함 (POL-INV-001 규칙 7).
10. 도킹 방식은 Sample Preparation 제조사마다 다름. 단디메카는 센서로 정상 도킹을 확인하고, 사용자가 유리문을 닫으면 Door가 자동으로 잠기고 Trolley가 도킹됨. 진행하던 Run이 있으면 이어서 진행함. 로체시스템즈는 Trolley를 넣고 QR을 스캔해 확인한 뒤, 유리문을 닫고 Door의 걸쇠를 걸면 도킹됨 (MT-20260828-01).
11. 도킹을 풀기 위한 장치는 따로 없음. Instrument가 Door 상태가 바뀌는 것을 보고 도킹 · 도킹 해제를 처리함. Trolley를 빼려면 Door Control에서 [Unlock]하면 Instrument가 도킹을 풀고 Door 잠금을 해제함 (MT-20260828-01).
12. 도킹된 Trolley를 Material Setup에서 스캔하면 쓸 수 없다는 알럿을 보여 줌 (MT-20261105-01, 추가 예정. 알럿 ID는 질문 1).

## 참고: 관련 Event

Event Message는 Instrument와 개발사가 만들고, CURECA 화면은 받은 대로 보여 줌 (POL-EVT-001 규칙 7). 아래는 어떤 상황에 생기는지 알고 검토에 쓰려고 적음.

- 회수 Trolley: [Run Start] 뒤 Door를 연 기록이 없으면 Warning Event가 생김 (MT-20261021-01).

## 질문

1. (규칙 12) 도킹된 Trolley 스캔 알럿 ID와 문구, Trolley 흐름(Sample · Consumable) 중 어디서 띄우는지

## 이유

- 규칙 6: 8월 정책서는 "완료되지 않은 검체 트롤리는 구동 중단 후 제거"였고, 10-26 회의에서 "Run Start 이후 도킹 해제 불가"로 정했다가, Inbound Trolley가 비면(마지막 Sample이 Sample Preparation으로 넘어가면) Run 중에도 해제할 수 있도록 바뀜 (2026-11-06 사용자 확인). Sample이 남은 Trolley를 빼면 그 Sample을 처리할 수 없기 때문임.

## 예외

없음

## 근거

- 정책서_2026.08.28 "검체 및 소모품 트롤리 도킹/제어 정책", "저장 장치 도킹 상태값 정의"
- 팀원 POL-DCK-01·05, POL-DCK-06 Sample Storage Trolley 1층 운영 (팀원 쪽 사용자 확인 2026-10-16)
- 2026-11-03 사용자 답변 (MS1): Consumable Trolley 1F 빈 Tray는 반환 자리
- MT-20261026-01 "검체 트롤리(투입)는 Run Start 이후 도킹 해제할 수 없음", 2026-11-06 사용자 확인 (규칙 6 · 7)
- MT-20260828-01 업체별 도킹 방식 · 회수 시나리오 (규칙 10 · 11), MT-20261021-01 회수 트롤리 Event, MT-20261105-01 도킹된 트롤리 스캔 알럿 (규칙 12)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-DCK-01·05·06) | |
| | 2026-11-06 | Inbound Trolley는 Sample이 남아 있으면 도킹 해제 불가, 비면 Run 중에도 해제 가능 (규칙 6 · 7). 규칙 번호 다시 매김 | MT-20261026-01, 사용자 확인 |
| | 2026-11-06 | 제조사별 도킹(규칙 10), 도킹 해제는 Door 상태로(규칙 11), 도킹된 Trolley 스캔 알럿(규칙 12, 추가 예정), 관련 Event 참고 | MT-20260828-01, MT-20261021-01, MT-20261105-01 |
