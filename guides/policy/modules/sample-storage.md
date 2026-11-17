# Sample Storage (검체 저장소)

> Prep 시스템 · 검사 단계 Sample Preparation. 초안 v0.1 (2026-11-06)

## 역할

Sample을 담은 Trolley를 받아 Prep 시스템에 넣고, 처리한 Sample을 회수 Trolley로 내보냅니다.

## Unit

- Inbound Trolley(투입, Door (Left)), Outbound Trolley(회수, Door (Right)) (`glossary/module-units.csv`)

## 흐름에서

- **받는 것:** Material Setup에서 구성한 Sample Trolley (Sample → Socket → Tray → Trolley, POL-MAT-001 · 006)
- **내보내는 것:** 쓴 Sample Rack → Outbound Trolley. Not Tested Sample도 정상 분주된 Sample과 같은 Rack으로 나감 (POL-SMP-001 규칙 5)
- 도킹하면 Barcode 스캔 없이 Trolley를 자동 인식 (POL-LOD-001 규칙 1)

## 특성 · 제약

1. Run 하나에 Sample Trolley 한 대. 새 Trolley를 넣으면 [Run Start]를 다시 눌러야 그 Trolley 검사가 시작됨 (POL-LOD-001 규칙 5)
2. [Run Start] 뒤에는 Inbound Trolley에 Sample이 남아 있으면 도킹 해제 불가. 남은 Trolley를 빼려면 Run을 멈춘 뒤 빼고, 들어가지 못한 Sample은 Ordered로 돌아감 (POL-LOD-001 규칙 6 · 7)
3. 마지막 Sample이 Sample Preparation으로 넘어가 Inbound Trolley가 비면 Run 중에도 Inbound · Outbound를 함께 바꿀 수 있음. 처리 중이던 Rack은 새 Outbound Trolley 1F 빈 Tray로 돌아옴 (POL-LOD-001 규칙 6)
4. 그래서 Inbound Trolley 1F에는 Tray를 두지 않고, Outbound Trolley 1F에는 빈 Tray를 둠 (POL-LOD-001 규칙 8)
5. 가동 중 Door (Left) · (Right)는 Trolley 교체를 위해 조건부로 열 수 있음 (`policy/equipment-states.md` 5절)
6. Sample Rack이 1개라도 남아 있으면 Tray · Trolley 값이 리셋되지 않고 사용 중으로 봄 (`policy/policy-backlog.md` 13번 상세)
7. 도킹 방식이 제조사마다 다름: 단디메카는 센서로 확인하고 유리문을 닫으면 자동으로 잠기고 도킹되며 진행하던 Run을 이어 감. 로체시스템즈는 QR 스캔 후 유리문을 닫고 걸쇠를 걸어 도킹함. 도킹 해제는 Door Control [Unlock]으로 함 (POL-LOD-001 규칙 10 · 11)
8. 단디메카 장비는 Sample Storage에 냉장 Buffer 4칸이 있고, 로체시스템즈 장비는 Buffer 공간이 없음 (MT-20260820-01)
9. 장비는 Inbound Trolley의 Rack을 꽂힌 순서대로 가져가지 않고, 알고리즘으로 정한 최적 순서에 맞춰 가져감 (MT-20260827-01, 2026-11-06 사용자 설명)
10. 참고 Event: [Run Start] 뒤 회수 Trolley의 Door를 연 기록이 없으면 Warning Event가 생김 (POL-LOD-001 참고)

## 관련 정책

POL-LOD-001, POL-MAT-006, POL-MAT-010, POL-SMP-001, POL-INV-001, POL-EQP-008

## 모르는 것

1. "Run을 멈춘 뒤 뺌"의 멈춤은 [Stop](전체 중단)인지, Door Unlock으로 생기는 Paused인지
2. 도킹된 Trolley 스캔 불가 알럿(MT-20261105-01, 추가 예정)의 알럿 ID (POL-LOD-001 질문 1)
3. Outbound Trolley가 가득 차면 어떻게 되는지 (Paused / Error / 알림)
4. Inbound Trolley에 Sample이 남았을 때 Door를 열면(도킹 해제 불가, POL-LOD-001 규칙 6) 화면에 무엇을 보여 주는지
