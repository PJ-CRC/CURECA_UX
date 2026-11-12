---
cid: LI-TSS-PSI-LCR-02-03
pair_cid:
tl_relation: 단독
title: Confirm the trolley
path: Material Setup > Prepare Carrier > Load Consumables and Reagents into Trolley > Load Tray into Trolley > Confirm the trolley
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-133472
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LCR-02-03 Confirm the trolley

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load Tray into Trolley (Consumable) Step 3
- 관련 정책: POL-MAT-003, POL-MAT-007
- 호출하는 화면: LI-TSS-PSI-LCR-02-02 (새 Trolley 스캔), LI-TSS-PSI-LCR-02-01 (Add New), LI-TSS-PSI-LCR (Finish), MS_Confirm_012
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Tray into Trolley
- STEP 1 Scan the trolley | STEP 2 Scan loaded tray | STEP 3 Confirm the trolley
- The trolley setup is complete. / If you need to set up another trolley, click the [Add New] button or scan the QR code on the new trolley. / Click [Finish] to go to the Carrier manual screen.
- New
- Add new | Finish

### 사용 컴포넌트

Description Number (3), Button/Secondary_1Button_44 (2), Frame (1)

### 디스크립션 (원문)

#### 1. New trolley 스캔

- [LI-TSS-PSI-LCR-02-02] 화면으로 이동
- Case 1) 검체 적재 trolley를 스캔한 경우
  - ㄴ MS_Confirm_012 팝업 노출
  - ㄴ OK 선택 시 → [LI-TSS-PSI-LCR-02-02] 화면으로 이동

#### 2. [Add New] 버튼

- 스캔 시 → [LI-TSS-PSI-LCR-02-01] 화면으로 이동

#### 3. [Finish] 버튼

- 선택 시 → [LI-TSS-PSI-LCR] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "Prepare Carrier(3/3)", 경로 "Load consumables and reagents > Prepare Carrier(3/3)" | IA "Confirm the trolley" | `ia/ia-screens.csv` | 대기 |
| R02 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.05)를 반영한 Ver로 | 버전 메모 | 대기 (확인 필요) |
| R03 | 디스크립션 | 2 [Add New] "스캔 시 →" | 선택 시 → | 디스크립션 | 대기 |
| R04 | 문구 | "go to the Carrier manual screen" | [Finish]는 LI-TSS-PSI-LCR로 감. 화면 이름과 맞게 | 디스크립션 3 | 대기 |
| R05 | 화면 | 버튼 "Add new" | [Add New] | 디스크립션 2 | 대기 |
| R06 | 표기 | "검체", "trolley", "팝업" | Sample, Trolley, Popup | `glossary/terms.csv` | 대기 |
| R07 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선) | BREX | Figma 버전 메모 |
