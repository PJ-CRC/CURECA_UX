---
cid: LI-TSS-LTG-01-02
pair_cid:
tl_relation: 단독
title: Confirm the Lot grouping
path: Material Setup > Group Lots > Group Universal Cartridge Kit > Confirm the Lot grouping
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8440-140695
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-LTG-01-02 Confirm the Lot grouping

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Group Universal Cartridge Kit Step 2
- 관련 정책: POL-MAT-009
- 호출하는 화면: LI-TSS-LTG-01-01 (Add New), LI-TSS-LTG (Finish)
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Group Universal Cartridge Kit
- STEP 1 Scan for Lot grouping | STEP 2 Confirm the Lot grouping
- The Lot grouping is complete. / If you need to set up another lot grouping, scan the barcode on the side of the EB tub. / Click [Finish] to go to the Lot manual screen.
- Lot(라뜨) 구성 완료 이미지 필요
- Group Universal Cartridge Kit details
- Tub | MB tube | PK tube
- Add New | Finish

### 사용 컴포넌트

Description Number (3), layout/spacing (2), Frame (1), Divider (1)

### 디스크립션 (원문)

#### 1. [Add New] 버튼

- 선택 시 → [LI-TSS-LTG-01-01] 화면으로 이동

#### 2. [Finish] 버튼

- 선택 시 → [LI-TSS-LTG] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- 없음

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면·디스크립션 | 안내 문구 "scan the barcode on the side of the EB tub"인데 이 화면에서 새 EB tub 스캔 동작이 디스크립션에 없음 | 스캔 시 LI-TSS-LTG-01-01로 이동하는지와 오류 알럿(MS_Alert_002~005) 정의 | 화면 글자, 디스크립션 | 대기 (확인 필요) |
| R02 | 문구 | "Click [Finish] to go to the Lot manual screen." | [Finish]는 LI-TSS-LTG(Group Lots)로 감. 화면 이름과 맞게 | 디스크립션 2 | 대기 |
| R03 | 화면 | "Lot(라뜨) 구성 완료 이미지 필요" 자리 표시 | 이미지 넣기 | 화면 글자 | 대기 |
| R04 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
