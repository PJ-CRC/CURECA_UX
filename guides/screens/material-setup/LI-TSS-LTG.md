---
cid: LI-TSS-LTG
pair_cid:
tl_relation: 단독
title: Group Lots
path: Material Setup > Group Lots
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8440-141362
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-LTG Group Lots

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode
- 관련 정책: POL-MAT-001, POL-MAT-009
- 호출하는 화면: LI-TSS-LTG-01-01, LI-TSS-LTG-02-01
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Select items for Lot grouping
- Group Universal Cartridge Kit | Group PCR Reagent Kit (이미지 버튼)

### 사용 컴포넌트

Description Number (3), Frame (1)

### 디스크립션 (원문)

#### 1. Group Lots

- 하위 메뉴 선택 시 → 해당 화면으로 이동
- 1-1 STARMag Universal Cartridge Kit Setup
  - 선택 시 → [LI-TSS-LTG-01-01] 화면으로 이동
- 1-2 IC reagent Setup
  - 선택 시 → [LI-TSS-LTG-02-01] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- 없음

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 1-1 "STARMag Universal Cartridge Kit Setup", 1-2 "IC reagent Setup" | 화면·IA 이름과 같게: Group Universal Cartridge Kit, Group PCR Reagent Kit | 화면 글자, `ia/ia-screens.csv` | 대기 |
| R02 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
