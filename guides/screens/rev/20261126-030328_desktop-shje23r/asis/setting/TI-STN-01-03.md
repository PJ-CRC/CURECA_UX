---
cid: TI-STN-01-03
pair_cid:
tl_relation: 단독
title: Comparison Simulation
path: Policy Setting > Comparison Simulation
type: Popup
version: 2.0
date: 2026.06.15
author: BREX
client_mode: []
user_type: [Service, Admin]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-522915
---
# TI-STN-01-03 Comparison Simulation

> 기존 화면(작업방 `Policy Setting_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 팝업 (IA에 L 짝 없음)
- 호출하는 화면: 없음 (1-1 Calendar는 공통 UX 5-d, 4 [OK] 닫기)
- 호출되는 곳: [TI-STN-01] Policy Setting 4-1 [Compare]
- 관련 정책: POL-TST-004

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (뒤 화면) (GNB) TIOS / (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Test Policy Setting | Information | Test Protocol Setting | LIS Setting | System Setting | Account Setting | Keira Knightley
- Comparison Simulation
- Order Date | 2026-05-06
- Total: 675 tests / 225 samples
- Product: RP1 | RP2 | RP3 | RB | GI-B1 | GI-B2 | GI-V | GI-P | HPV28 | STI-12
- Prioritize Cost Reduction | Prioritize TAT Reduction
  - Total Cost: 6,750 USD | 11,250 USD
  - Total TAT (Turnaround Time): 2h 10m | 50m
  - Prioritize High-throughput Extraction for optimal number you entered or more samples; otherwise, prioritize Flexible Extraction. | Minimize turnaround time by prioritizing High-throughput Extraction for device allocation.
- OK

### 사용 컴포넌트

Tag Status (10), Description Number (5), 2 Depth (5), Popup (1), Dropdown Outlined (1), Button/Primary_1Button_62 (1), Component 4 (1), Arrow/Chevron_Up (1)

### 디스크립션 (원문)

#### 1. Simulation Type

- 디폴트 : Order Date
- 1-1 Calendar
- 공통 UX > 5-d. Calendar_단일 선택 케이스 정의 참고
- 일자 선택 & [적용] 버튼 선택 시 → ② , ③ 정보 업데이트
- 금일 일자로 부터 최대 3개월 전 일자까지 선택 가능
- 금일 선택 시 → 해당 시점 조회된 검사 항목까지 산출

#### 2. 전체 tests/sample 개수 및 검사 항목 코드

- 노출 정보 : (1-1) 해당 일자에 진행한 전체 tests/sample 개수 및 검사 항목 코드 노출

#### 3. Cost or TAT 우선순위 정보

- 노출 정보 : (1-1) 해당 일자에 진행한 tests 중 cost or TAT 우선순위에 따른 정보 노출

#### 4. [OK] 버튼

- 선택 시 → 해당 팝업 닫힘

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Policy Setting_asis` 페이지에 TI-STN-01-03 케이스 프레임 없음)
