---
cid: LI-TSS-PSI-LCR-01-01
pair_cid:
tl_relation: 단독
title: Check the Consumable & reagent
path: Material Setup > Prepare Carrier > Load Consumables and Reagents into Trolley > Load Consumables and Reagents into Tray > Check the Consumable & reagent
type: Page
version: 2.0
date: 2026-06-15
author: BREX
service_mode: [TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-129606
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LCR-01-01 Check the consumables/reagents

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load Consumables and Reagents into Tray Step 1. LI-TSS-PSI-01에서 Trolley를 고르면 보이는 필요 수량 확인 화면 ([Skip]이면 이 화면 없이 LCR-01-02)
- 관련 정책: POL-MAT-007
- 호출하는 화면: LI-TSS-PSI-LCR-01-02 (Next)
- 다른 프레임: 없음
- 취소선(제거됨): 화면 이름 "Check the consumable & reagent" (→ consumables/reagents)

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Consumables and Reagents into Tray
- STEP 1 Check the consumables/reagents | STEP 2 Scan the tray | STEP 3 Scan loaded consumables/reagents | STEP 4 Confirm the tray
- Prepare according to the quantity of consumable & reagent shown on the screen. / After preparing the consumable & reagent, click the [Next] button below.
- Consumable Required Quantity | Reagent Required Quantity
- 1000 μL Tip (5/box) | PBS Standard Tube (5/box)
- Empty Standard Tube (3/box) | Saline Standard Tube (3/box)
- Stool Swab (6/box) | ASL Standard Tube (3/box)
- Prelyser Standard Tube (3/box)
- Next

### 사용 컴포넌트

Icon Button (7), Table (4), Description Number (3), Frame (1)

### 디스크립션 (원문)

#### 1. Consumable/ Reagent Required Quantity

- 노출 정의 :
  - [LI-TSS-PSI-01] > trolley 선택 & [Select] 버튼 선택 시 노출
  - 해당 trolley에 필요한 소모품 및 시약 개수 정보 노출
- (1-1)해당  소모품 및 시약 이미지 노출

#### 2. [Next] 버튼

- 선택 시 → [LI-TSS-PSI-LCR-01-02] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- 없음

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | IA | IA 이름 "Check the Consumable & reagent", 화면 "Check the consumables/reagents" | 하나로 통일 (IA 고칠지) | `ia/ia-screens.csv` | 대기 (확인 필요) |
| 2 | 화면 데이터 | 수량 표기 "(5/box)", "(3/box)" | 실제 단위로: 1000 μL Tip 96 ea/rack, Empty Standard Tube 48 ea/rack, Stool Swab 24 ea/rack, PBS·Saline·Prelyser Standard Tube 48 rxns/rack. 필요 수량 표기 형식(낱개 수 + 입고 단위)도 정함 | `glossary/consumables.csv` | 대기 (확인 필요) |
| 3 | 화면 데이터 | "ASL Standard Tube" | `glossary/consumables.csv`에 없는 품목. 품목 표에 넣을지 화면에서 뺄지 | `glossary/consumables.csv` | 대기 (확인 필요) |
| 4 | 화면 데이터 | 필요 수량 목록에 Wide Bore Tip, 300 μL Tip, 96-DWP, Tub류, LB DWP, PK/IC Tube가 없음 (LCR-01-02·03 목록에는 있음) | 세 화면의 예시 목록 통일 | LI-TSS-PSI-LCR-01-02, LI-TSS-PSI-LCR-01-03 | 대기 |
| 5 | 문구 | "consumable & reagent" | consumables/reagents (Step 이름과 통일) | 화면 글자 | 대기 |
| 6 | 표기 | "소모품 및 시약", "trolley" | Consumable 및 Reagent, Trolley | `glossary/terms.csv` | 대기 |
| 7 | 정책 반영 | Select Trolley를 고른 뒤 노출되는 이유가 없음 | 디스크립션에 넣음: Load Consumables and Reagents에 들어가면 Select Trolley Popup(LI-TSS-PSI-01)이 먼저 뜸. Sample Trolley를 고르면 그 Sample 기준으로 필요한 Consumable·Reagent 개수를 계산해 보여 주고, 사용자는 그 개수를 보고 Tray를 구성함. 고르기는 안내용이며 데이터 연결은 생기지 않음 | 2026-11-03 사용자 답변 (MS2) | 대기 |
| 8 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
