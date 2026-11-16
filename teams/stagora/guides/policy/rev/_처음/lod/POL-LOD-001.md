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
5. Run 하나에는 Sample Trolley 한 대만 씀. 새 Sample Trolley를 넣을 때마다 Run 준비에서 [Run Start]를 눌러야 그 Trolley의 검사가 시작됨. 끝나지 않은 Sample Trolley를 빼려면 Run을 멈춘 뒤 뺌.
6. Inbound Trolley의 Sample이 모두 처리 단계로 넘어가면 Run 중이라도 Inbound Trolley와 Outbound Trolley를 함께 바꿀 수 있음. 이때 아직 처리 중이던 Rack은 새 Outbound Trolley의 1F 빈 Tray로 돌아옴.
7. 그래서 Inbound Trolley는 1F에 Tray를 두지 않고(POL-MAT-006 규칙 8), Outbound Trolley는 1F에 빈 Tray를 넣어 둠. Outbound Trolley는 따로 구성하지 않고 그대로 넣음.
8. 사용자는 Inventory > Overview의 Sample Storage 현황(Samples (Inbound Trolley), Samples (Test In Progress), Samples (Outbound Trolley))을 보고 바꿀 때를 정함 (POL-INV-001 규칙 7).

## 예외

없음

## 근거

- 정책서_2026.08.28 "검체 및 소모품 트롤리 도킹/제어 정책", "저장 장치 도킹 상태값 정의"
- 팀원 POL-DCK-01·05, POL-DCK-06 Sample Storage Trolley 1층 운영 (팀원 쪽 사용자 확인 2026-10-16)
- 2026-11-03 사용자 답변 (MS1): Consumable Trolley 1F 빈 Tray는 반환 자리

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-DCK-01·05·06) | |
