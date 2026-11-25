---
cid: LI-TSS-PSI-LCR-01-02
pair_cid:
tl_relation: 단독
title: Scan the tray
path: Material Setup > Prepare Carrier > Load Consumables and Reagents into Trolley > Load Consumables and Reagents into Tray > Scan the tray
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-130621
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LCR-01-02 Scan the tray

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. Load Consumables and Reagents into Tray Step 2
- 관련 정책: POL-MAT-003, POL-MAT-007
- 호출하는 화면: LI-TSS-PSI-LCR-01-03, MS_Confirm_009
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Consumables and Reagents into Tray
- STEP 1 Check the consumables/reagents | STEP 2 Scan the tray | STEP 3 Scan loaded consumables/reagents | STEP 4 Confirm the tray
- Scan the QR code on the empty tray. / Once the scan is complete, you will be taken to the next screen
- Required Quantity: Reagent | Consumable
- PBS Standard Tube 00/05 | Wide Bore Tip 00/03
- Saline Standard Tub 00/03 | 1000 μL Tip 00/05
- ASL Standard Tube 00/05 | 300 μL Tip 00/05
- PBS Tub 00/03 | Empty Standard Tube 00/05
- 96-DWP 00/05 | Stool Swab 00/05
- (스크롤 영역) LB Tub (Prep) 00/05 | ASL Standard Tube 03/05 | LB DWP 00/05 | PBS Tub 00/05
- Next

### 사용 컴포넌트

Description Number (3), Frame (1), Button/Secondary_1Button_44 (1), layout/spacing (1), Divider (1)

### 디스크립션 (원문)

#### 1. Tray 스캔

- [LI-TSS-PSI-LCR-01-03] 화면으로 이동
- Case 1) 검체 적재 tray를 스캔한 경우
  - ㄴ MS_Confirm_009 팝업 노출
  - ㄴ OK 선택 시 → [LI-TSS-PSI-LCR-01-03] 화면으로 이동
- (1-1) Required Quantity
  - 노출 정의 :
    - [LI-TSS-PSI-01] > trolley 선택 시 → 노출

#### 2. [Next] 버튼

- 디폴트 : 비활성화
- 스캔 시 → (2-1)과 동일하게 변경 & 다음 화면으로 이동

#### 2-1. Scan

- (내용 없음)

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고
