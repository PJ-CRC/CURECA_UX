---
cid: TI-STN-01-01
pair_cid:
tl_relation: 단독
title: Cost Setting
path: Policy Setting > Cost Setting
type: Popup
version: 2.0
date: 2026.06.15
author: BREX
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-523070
---
# TI-STN-01-01 Cost Setting

> 기존 화면(작업방 `Policy Setting_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 팝업 (IA에 L 짝 없음)
- 호출하는 화면: Confirm_010 (5 [Apply])
- 호출되는 곳: [TI-STN-01] Policy Setting 2 Cost Setting

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (뒤 화면) (GNB) TIOS / (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Test Policy Setting | Information | Test Protocol Setting | LIS Setting | System Setting | Account Setting | Keira Knightley
- Cost Setting | USD
- Tab: Consumables | Reagents
- No. | Product Name | Quantity | Usage | Cost per Package
  - 1 | 96-DWP | 1 ea | 0 | USD
  - 2 | PCR Plate | 1 ea | 0 | USD
  - 3 | Sealing Film | 100 ea | 0 | USD
  - 4 | Stool Swab | 24 ea/rack | 0 | USD
  - 5 | Empty Standard Tube | 48 ea/rack | 0 | USD
  - 6 | MM Tube | 14 ea/rack | 0 | USD
  - 7 | 300 ㎕ Tip | 96 ea/rack | 0 | USD
  - 8 | 1,000 ㎕ Tip | 96 ea/rack | 0 | USD
  - 9 | Wide Bore Tip | 96 ea/rack | 0 | USD
- Close | Apply

### 사용 컴포넌트

Switch/On,Off (9), Description Number (7), Table (5), 2 Depth (5), Tab/Underline (2), Button/Primary_1Button_62 (2), Popup (1), Dropdown 48/Default (1), Component 4 (1), Arrow/Chevron_Up (1)

### 디스크립션 (원문)

#### 1. 통화 구분

- 노출 : Cost setting의 통화 DB 모두 노출
- 출력 : KRW / USD / EUR / GBP 출력
- 디폴트 : USD
- 선택 시 → 선택 값으로 출력 변경 & (1-1) 통화 모두 반영

#### 2. Consumables / Reagents 탭

- 디폴트 : Consumables 활성화
- 비활성화 탭 선택 시 → 선택한 탭 활성화 & 기존 탭 비활성화

#### 3. Consumables 목록

- 노출 : Consumables의 product DB 모두 노출
- 출력 : Product name 출력
- 정렬 : Common UX > ‘4-b. Data Notation Rules for Inventory’ 정렬 정의에 따름

#### 4. Usage

- 디폴트 : 비활성화
- 선택 시 → 해당 row 활성화 & (4-1) Textfield 활성화
- (4-1) Cost
- 디폴트 : ‘0’ 노출
- 입력 값 조건 :
- 0 or 양수인 숫자만 입력 가능 [소수점(.) 입력 허용]
- ㄴ 그 외, 음수, 특수문자, 문자 입력 불가

#### 5. 기능버튼

- [Close] 버튼
- 선택 시 → 해당 팝업 닫힘
- [Apply] 버튼
- 활성화 조건 : 아래 항목 모두 만족 시, 활성화
- ㄴ 목록 중 ④ Usage 1개 이상인 경우
- ㄴ (4-1) 값 ≠ Null 값인 경우
- 선택 시 → Confirm_010 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 없고, 기획 프레임 아래에 Reagents 탭을 정의한 별도 프레임 `TI-STN-01-01 / 세부정의`([3543:523268](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-523268), 1607×968)가 있습니다. 제목 `Cost Setting_Product List`, 오른쪽 패널(Ver 2.0, Date 2026.06.15, CID TI-STN-01-01, 작성자 BREX, 화면 Cost Setting, 경로 Policy Setting > Cost Setting)과 번호 1 ~ 3 디스크립션이 있습니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | Cost Setting_Product List | Reagents 탭 선택 | 위 프레임 |

- 화면 글자: Cost Setting | USD / Tab: Consumables | Reagents / No. | Product Name | Quantity | Cost per Package
  - 1 | LB Tub | 96 rxns/rack | 30 | USD
  - 2 | LB Tub (Prep) | 100 rxns/rack | 30 | USD
  - 3 | PBS Tub | 100 rxns/rack | 30 | USD
  - 4 | Saline Tub | 100 rxns/rack | 30 | USD
  - 5 | ASL Standard Tube | 48 rxns/rack | 30 | USD
  - 6 | PBS Standard Tube | 48 rxns/rack | 30 | USD
  - 7 | Saline Standard Tube | 48 rxns/rack | 30 | USD
  - 8 | STARMag M96 Kit | 96 rxns/DWP | 30 | USD
  - 9 | STARMag Universal Cartridge Kit | 96 rxns/set | 30 | USD
  - 10 | Allplex_GI-B1_Assay | 100 rxns/set | 30 | USD
  - Close | Apply
- 디스크립션
  - 1 Reagents 목록 — 노출 : 업로드된 Assay pack의 전처리, 추출, PCR 시약 정보 모두 노출 / 출력 : 제품 명칭 l Quantity / - Quantity : 수량 / 장비입고단위 / ㄴ Common UX > 4-b. Data Notation Rules for Inventory’ 정의 참고 / 정렬 : 출력 Quantity 동일 경로에서의 정의와 동일
  - 2 Cost — 디폴트 : ‘0’ 노출 / 입력 값 조건 : / - 0 or 양수인 숫자만 입력 가능 [소수점(.) 입력 허용] / ㄴ 그 외, 음수, 특수문자, 문자 입력 불가
  - 3 기능버튼 — [Close] 버튼 / - 선택 시 → 해당 팝업 닫힘 / [Apply] 버튼 / - 활성화 조건 : ② 값 ≠ Null 값인 경우 / - 선택 시 → Confirm_010 노출
