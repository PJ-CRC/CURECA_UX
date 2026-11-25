---
cid: LI-TSS-PSI-LMM-03
pair_cid:
tl_relation: 단독
title: Confirm the socket
path: Material Setup > Prepare Carrier > Load MM Tubes > Confirm the socket
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-397242
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LMM-03 Confirm the socket

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. Load MM Tubes Step 3
- 관련 정책: POL-MAT-003, POL-MAT-008
- 호출하는 화면: LI-TSS-PSI-LMM-02 (새 Socket 스캔), LI-TSS-PSI-LMM-01 (Add New), LI-TSS-PSI (Finish), MS_Confirm_017
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load MM Tubes
- STEP 1 Scan the socket | STEP 2 Insert the MM tube | STEP 3 Confirm the socket
- The MM tube loading is complete. / If you need to set up another MM Tube, click the [Add New] button or scan the QR code on the new socket. / Click [Finish] to go to the Carrier manual screen.
- MM Tube Socket 구성 이미지 필요
- Add new | Finish

### 사용 컴포넌트

Description Number (3), Button/Secondary_1Button_44 (2), Frame (1)

### 디스크립션 (원문)

#### 1. New socket 스캔

- [LI-TSS-PSI-LMM-02] 화면으로 이동
- 정상)
  - PCR 시약 적재 socket 스캔 시
    - ㄴ MS_Confirm_017 팝업 노출

#### 2. [Add New] 버튼

- 선택 시 → ~~[[LI-TSS-PSI-LMM-01]~~ [LI-TSS-PSI-LMM-01] 화면으로 이동

#### 3. [Finish] 버튼

- 선택 시 → [LI-TSS-PSI] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고
