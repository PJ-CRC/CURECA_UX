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
service_mode: [TSS Mode]
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

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. LI-TSS-PSI-LCR-01-03의 [Step 1. Guide] 또는 데이터 없는 Socket/Frame 스캔 시 자동으로 여는 안내 Popup (Standard tube Guide, Tub Guide 2장)
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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 2 [>] "비활성화 조건 : ② 버튼 선택 시, 활성화" | 비활성화 조건 : [>] 선택(Tub Guide 노출) 시 비활성화 | 오타·모순 | 대기 |
| R02 | 디스크립션 | [OK] 버튼 정의 없음. 자동 노출(데이터 없는 Socket/Frame 스캔) 때 어느 Guide를 먼저 보여 주는지 없음 | [OK] 닫힘, 스캔한 종류(Socket→Standard tube, Frame→Tub)에 맞는 Guide 먼저 노출 여부 확인 | LI-TSS-PSI-LCR-01-03 4 | 대기 (확인 필요) |
| R03 | 알럿 | MS 목록은 MS_Alert_003·004·020의 사용 화면에 이 Popup을 두는데 디스크립션에 알럿이 없음 | 디스크립션에 넣음: Guide Popup이 떠 있는 동안에도 스캔을 받음. 만료(MS_Alert_003)·폐기(MS_Alert_004)·필요 수량 충족(MS_Alert_020) 알럿이 그대로 적용됨 | 2026-11-03 사용자 답변 (MS10) | 대기 |
| R04 | 문구 | "pop-up", "standard tube" | Popup 표기와 Standard Tube 대소문자 | `glossary/terms.csv` | 대기 (확인 필요) |
| R05 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
