# 논의 리스트

> 항목 머리말에서 다시 만드는 보기입니다. 손으로 고치지 않습니다. 마지막으로 만든 날: 2026-11-27.

각 줄: ID | 제목 | 누가 정하나 | 걸린 정책 | 걸린 화면 | 생긴 날 | 상태

## 1. 결정 · 반영할 것

| ID | 제목 | 누가 정하나 | 걸린 정책 | 걸린 화면 | 생긴 날 | 상태 |
| --- | --- | --- | --- | --- | --- | --- |
| [DS-0014](DS-0014.md) | Inventory Reagent의 Spare Cap 항목을 Tub 바로 아래에 두고, Cap을 채워야 Run을 마칠 수 있을 때만 부족으로 보여 줌 | 고객 | POL-INV-003, POL-INV-002, POL-LOD-004 | TI-IVT-04-T, LI-IVT-04-T | 2026-11-27 | 결정 |

## 2. 논의 중 · 고객

| ID | 제목 | 누가 정하나 | 걸린 정책 | 걸린 화면 | 생긴 날 | 상태 |
| --- | --- | --- | --- | --- | --- | --- |
| [DS-0002](DS-0002.md) | L-IOS Client Mode별 용도 설명을 새 기능 표에 맞게 다시 쓰기 | 고객 | POL-COM-001, POL-MAT-001 | LI-TSS-LTG, LI-TSS-PSI, LI-TSS-PSI-SAM, LI-TSS-PSI-LCR | 2026-11-12 | 논의 중 |

## 3. 논의 중 · 내부

없음

## 4. 결정 · 작업 중

| ID | 제목 | 누가 정하나 | 걸린 정책 | 걸린 화면 | 생긴 날 | 상태 |
| --- | --- | --- | --- | --- | --- | --- |
| [DS-0012](DS-0012.md) | Alert 카탈로그 Confirm_029 · Confirm_030 발생 조건을 POL-TST-008 규칙 6(File details에서 바꾸고 [Save])에 맞춤 | 내부 (최고관리자) | POL-TST-008 | TI-STN-08, TI-STN-08-P | 2026-11-25 | 결정 |

## 5. 보류

없음

## 6. 후속 확인 필요

없음

## 종료 (따로 요청할 때만 보여 줌)

| ID | 제목 | 누가 정하나 | 걸린 정책 | 걸린 화면 | 생긴 날 | 상태 |
| --- | --- | --- | --- | --- | --- | --- |
| [DS-0013](DS-0013.md) | POL-INV-002 cids에 Item details Popup(TI/LI-IVT-03-T-P, TI/LI-IVT-04-T-P)을 더함 | 내부 | POL-INV-002 | TI-IVT-03-T-P, LI-IVT-03-T-P, TI-IVT-04-T-P, LI-IVT-04-T-P | 2026-11-27 | 종료 |
| [DS-0001](DS-0001.md) | Service Mode를 L-IOS Client Mode로 바꾸고 기능 표를 새 표로 고침 | 내부 (서보경) | POL-ACC-001, POL-ACC-008, POL-COM-001, POL-EVT-002, POL-EVT-003, POL-INV-005, POL-LOD-005, POL-MAT-001, POL-SYS-004, POL-TST-008, POL-TST-009 | Material Setup 30개, LI-STN-02 (이름 바꾸기는 화면 MD 187개를 함께 고침) | 2026-11-12 | 종료 |
| [DS-0003](DS-0003.md) | 장비 통합 상태의 영문 · 화면 라벨을 CURECA Status로 정하고, 상태값 분류 이름을 Hardware Status로 바꿈 | 내부 (서보경) | POL-EQP-001 | LI-STN-02 | 2026-11-12 | 종료 |
| [DS-0004](DS-0004.md) | Module · Unit 이름 바꿈 (Consumable Storage, Sample Pre-treatment, Sample Processing, Sample Aliquoting) | 내부 (서보경) | POL-COM-003, POL-EQP-001, POL-EQP-004, POL-EQP-005, POL-EQP-008, POL-EQP-009, POL-EQP-010, POL-INV-001, POL-INV-005, POL-INV-007, POL-LOD-001 ~ 004, POL-SMP-008 | Module · Unit 이름이 나오는 화면 36개 (Dashboard · Event History · Instruments · Inventory · Material Setup · Run · Sample Tracking · Statistical Analysis · Test Management) | 2026-11-18 | 종료 |
| [DS-0005](DS-0005.md) | 씨젠 상태 정보 261119 반영 (Sample Pre-treatment 폐기함 Unit, 상태 전환 조건, 폐기함 상태) | 내부 (서보경) | POL-EQP-002, POL-INV-005 | - | 2026-11-19 | 종료 |
| [DS-0006](DS-0006.md) | 헌법 개정 v1.15 (개정 이력은 git 기록으로, 4조의 "함께 고침"을 뺌) | 내부 (서보경) | - | - | 2026-11-19 | 종료 |
| [DS-0007](DS-0007.md) | 헌법 개정 v1.16 (공통 자료는 정책서와 룰 문서, 기준 자료는 흐름 문서가 정한 때에 고침) | 내부 (서보경) | - | - | 2026-11-19 | 종료 |
| [DS-0008](DS-0008.md) | 디스크립션 · 규칙 문서에서 "팝업 · 알럿 · 컨펌 · 토스트" 대신 Popup · Alert · Confirm · Toast (용어집 표준어) | 내부 (서보경) | - | - | 2026-11-20 | 종료 |
| [DS-0009](DS-0009.md) | Error인 Module은 Door를 열어도 Error를 유지하고, 오류 복구가 끝날 때까지 Error로 둠 | 내부 | POL-EQP-004, POL-EQP-002 | LI-INS-01-P, LI-INS-01-T, LI-INS-02-T, TI-INS-01-T, TI-INS-02-T, TI-DAS, LI-DAS | 2026-11-25 | 종료 |
| [DS-0010](DS-0010.md) | Run 중 Door 잠금을 해제한 뒤 Door를 열지 않아도 Paused를 유지함 | 내부 | POL-EQP-008, POL-EQP-004 | LI-INS-01-P | 2026-11-25 | 종료 |
| [DS-0011](DS-0011.md) | Empty Waste Bin은 Console Mode에서만 제공함 | 내부 | POL-INV-005, POL-LOD-005 | LI-IVT-05-T | 2026-11-25 | 종료 |
