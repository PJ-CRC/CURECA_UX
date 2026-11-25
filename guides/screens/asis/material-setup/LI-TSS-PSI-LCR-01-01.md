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
client_mode: [Console Mode]
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

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. Load Consumables and Reagents into Tray Step 1. LI-TSS-PSI-01에서 Trolley를 고르면 보이는 필요 수량 확인 화면 ([Skip]이면 이 화면 없이 LCR-01-02)
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
