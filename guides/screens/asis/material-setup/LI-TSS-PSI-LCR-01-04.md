---
cid: LI-TSS-PSI-LCR-01-04
pair_cid:
tl_relation: 단독
title: Confirm the socket
path: Material Setup > Prepare Carrier > Load Consumables and Reagents into Trolley > Load Consumables and Reagents into Tray > Confirm the socket
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-130254
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LCR-01-04 Confirm the tray

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. Load Consumables and Reagents into Tray Step 4
- 관련 정책: POL-MAT-003, POL-MAT-007
- 호출하는 화면: LI-TSS-PSI-LCR-01-03 (새 Tray 스캔), LI-TSS-PSI-LCR-01-02 (Add New), LI-TSS-PSI-LCR (Finish), MS_Confirm_009
- 다른 프레임: 없음
- 취소선(제거됨): 화면 이름 "Confirm the socket" (→ Confirm the tray)

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Consumables and Reagents into Tray
- STEP 1 Check the consumables/reagents | STEP 2 Scan the tray | STEP 3 Scan loaded consumables/reagents | STEP 4 Confirm the tray
- The tray setup is complete. / If you need to set up another tray, click the [Add New] button or scan the QR code on the new tray. / Click [Finish] to go to the consumables and reagents manual screen.
- New
- Required Quantity: Reagent | Consumable (LCR-01-03과 같은 예시 값, PK/IC 줄 없음)
- Add new | Finish

### 사용 컴포넌트

Description Number (3), Button/Secondary_1Button_44 (2), Frame (1), layout/spacing (1), Divider (1)

### 디스크립션 (원문)

#### 1. New tray 스캔

- [LI-TSS-PSI-LCR-01-03] 화면으로 이동
- Case 1) 검체 적재 tray를 스캔한 경우
  - ㄴ MS_Confirm_009 팝업 노출
  - ㄴ OK 선택 시 → [LI-TSS-PSI-LCR-01-03] 화면으로 이동

#### 2. [Add New] 버튼

- 선택 시 → [LI-TSS-PSI-LCR-01-02] 화면으로 이동 & 적재 개수 유지

#### 3. [Finish] 버튼

- 선택 시 → [LI-TSS-PSI-LCR] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 정책 변경으로 인한 수정 항목 / - Prep Consumable 투입 항목 추가 (PK/IC 정책 변경) / - 시약 부분 스크롤 기능 추가
