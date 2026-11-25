---
cid: LI-TSS-PSI-LCR-01-03-01
pair_cid:
tl_relation: 단독
title: STEP 1. Guide
path: Material Setup > Prepare Carrier > Load Consumables and Reagents into Trolley > Load Consumables and Reagents into Tray > Scan loaded socket > STEP 1. Guide
type: Popup
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-129829
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LCR-01-03-01 STEP 1. Guide

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. LI-TSS-PSI-LCR-01-03의 [Step 1. Guide] 또는 데이터 없는 Socket/Frame 스캔 시 자동으로 여는 안내 Popup (Standard tube Guide, Tub Guide 2장)
- 관련 정책: POL-MAT-007
- 호출하는 화면: 없음 (MS 목록은 MS_Alert_003, MS_Alert_004, MS_Alert_020의 사용 화면에 이 CID를 둠)
- 다른 프레임: 세부 정의 [8011:129970](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-129970) (Tub Guide)

## 기존 화면

### 화면 글자

- STEP 1. Guide
- Standard tube
- (1) Load the socket onto the rack, then scan the socket QR code. (2) Scan the code of any loaded standard tube. (3) Close this pop-up and proceed to Step 2.
- [<] | [>]
- OK

### 사용 컴포넌트

layout/spacing (3), Popup/Data Popup (2), Description Number (2), Arrow/Chevron_Left (1), Arrow/Chevron_Right (1)

### 디스크립션 (원문)

#### 1. [<] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : ② 버튼 선택 시, 활성화
- ※ 단, Tub guide에서 버튼 선택 시 → Standard tube Guide 노출

#### 2. [>] 버튼

- 디폴트 : 활성화
- 비활성화 조건 : ② 버튼 선택 시, 활성화
- 선택 시 → Tub Guide 노출 (STEP 1. Guide 노출 케이스 참고)

### 세부 정의 (원문)

8011:129970 "LI-TSS-PSI-LCR-01-03-01 / 세부정의"

- STEP 1. Guide 노출 케이스
- Tub Guide 노출 케이스
  - STEP 1. Guide / Tub
  - 1 Load the Tub frame onto the rack, then scan the Tub frame QR code.
  - 2 Scan the Tub QR code.
  - 3 Insert the Cap and Tub into the Tub frame as shown on the screen.
  - 4 Close this pop-up and proceed to Step 2.
  - OK

### 케이스

- Tub Guide: 세부 정의 8011:129970

### 버전 메모

- 없음
