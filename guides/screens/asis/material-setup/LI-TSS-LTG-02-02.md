---
cid: LI-TSS-LTG-02-02
pair_cid:
tl_relation: 단독
title: Confirm the IC setup
path: Material Setup > Group Lots > Group PCR Reagent Kit > Confirm the IC setup
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8440-141180
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-LTG-02-02 Confirm the IC setup

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. Group PCR Reagent Kit Step 2
- 관련 정책: POL-INV-007 (`cids`에 있음), POL-MAT-009
- 호출하는 화면: LI-TSS-LTG-02-01 (Add New), LI-TSS-LTG (Finish)
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Group PCR Reagent Kit
- (Step 표시) STEP 1 Scan the IC tube | STEP 2 Confirm the IC setup. LTG-02-01과 같이 다른 Step 이름이 겹쳐 남아 있음
- The Lot grouping is complete. / If you need to set up another IC setup, scan the barcode on the new PCR box. / Click [Finish] to go to the Lot manual screen.
- Group PCR Reagent Kit details
- PCR box | IC tube
- Add New | Finish

### 사용 컴포넌트

layout/spacing (2), Description Number (2), Frame (1), Divider (1)

### 디스크립션 (원문)

#### 1. [Add New] 버튼

- 선택 시 → [LI-TSS-LTG-02-01] 화면으로 이동

#### 2. [Finish] 버튼

- 선택 시 → [LI-TSS-LTG] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- 없음
