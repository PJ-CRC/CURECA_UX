---
cid: LI-TSS-PSI-SAM
pair_cid:
tl_relation: 단독
title: Load Samples into Trolley
path: Material Setup > Prepare Carrier > Load Samples into Trolley
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-129057
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-SAM Load Samples into Trolley

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode
- 관련 정책: POL-MAT-001, POL-MAT-006, POL-MAT-010
- 호출하는 화면: LI-TSS-PSI-SAM-01-01, LI-TSS-PSI-SAM-02-01, LI-TSS-PSI-SAM-03-01, LI-TSS-PSI (Previous)
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Samples into Trolley
- (이미지 자리) 수급 예정 | 수급 예정 | 수급 예정
- Load Samples into Socket | Load Socket into Tray | Load Tray into Trolley
- Previous

### 사용 컴포넌트

Description Number (5), Frame (1), Button/Secondary_1Button_44 (1)

### 디스크립션 (원문)

#### 1. Load samples

- 하위 메뉴 선택 시 → 해당 화면으로 이동
- 1-1 Load Samples into Socket
  - 선택 시 → [LI-TSS-PSI-SAM-01-01] 화면으로 이동
- 1-2 Load Socket into Tray
  - 선택 시 → [LI-TSS-PSI-SAM-02-01] 화면으로 이동
- 1-3 Load Tray into Trolley
  - 선택 시 → [LI-TSS-PSI-SAM-03-01] 화면으로 이동

#### 2. [Previous] 버튼

- 선택 시 → [LI-TSS-PSI] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- 없음

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | 화면 이름·경로 "Load samples" | Load Samples into Trolley | `ia/ia-screens.csv` | 대기 |
| 2 | 화면 | 이미지 자리 "수급 예정" 3개 | 이미지 넣기 | 화면 글자 | 대기 |
| 3 | 디스크립션 | 1 제목 "Load samples" | Load Samples into Trolley | `ia/ia-screens.csv` | 대기 |
| 4 | 화면 | [Previous] 버튼이 있음. LI-TSS-PSI-LCR에는 [Previous]가 2개 겹쳐 있고 LI-TSS-LTG에는 없음 | 하위 메뉴 화면의 [Previous] 유무 통일 | LI-TSS-PSI-LCR, LI-TSS-LTG | 대기 (확인 필요) |
| 5 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
