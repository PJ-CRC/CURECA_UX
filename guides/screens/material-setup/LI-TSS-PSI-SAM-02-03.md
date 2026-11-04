---
cid: LI-TSS-PSI-SAM-02-03
pair_cid:
tl_relation: 단독
title: Confirm the tray scan
path: Material Setup > Prepare Carrier > Load Samples into Trolley > Load Socket into Tray > Confirm the tray scan
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-131444
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-SAM-02-03 Confirm the tray scan

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load Socket into Tray Step 3
- 관련 정책: POL-MAT-003, POL-MAT-006
- 호출하는 화면: LI-TSS-PSI-SAM-02-02 (새 Tray 스캔), LI-TSS-PSI-SAM-02-01 (Add New), LI-TSS-PSI-SAM (Finish), MS_Confirm_003
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Socket into Tray
- STEP 1 Scan the tray | STEP 2 Scan loaded socket | STEP 3 Confirm the tray
- The tray setup is complete. / If you need to set up another tray, click the [Add New] button or scan the QR code on the new tray. / Click [Finish] to go to the Carrier manual screen.
- New
- Add new | Finish

### 사용 컴포넌트

Description Number (3), Button/Secondary_1Button_44 (2), Frame (1)

### 디스크립션 (원문)

#### 1. New tray 스캔

- 빈 tray or 검체 적재 tray 스캔한 경우
  - [LI-TSS-PSI-SAM-02-02] 화면으로 이동
- 소모품/시약 적재 tray를 스캔한 경우
  - ㄴ MS_Confirm_003 팝업 노출
  - ㄴ OK 선택 시 → [LI-TSS-PSI-SAM-02-02] 화면으로 이동

#### 2. [Add New] 버튼

- 선택 시 → [LI-TSS-PSI-SAM-02-01] 화면으로 이동

#### 3. [Finish] 버튼

- 선택 시 → [LI-TSS-PSI-SAM] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | 화면 이름 "Confirm the tray", Ver 2.0 | IA "Confirm the tray scan"과 통일. 버전 메모(v2.1.05)를 반영한 Ver로 | `ia/ia-screens.csv`, 버전 메모 | 대기 |
| 2 | 화면 | 버튼 "Add new" | [Add New]와 대소문자 통일 | 디스크립션 2 | 대기 |
| 3 | 문구 | "go to the Carrier manual screen" | [Finish]는 LI-TSS-PSI-SAM으로 감. 화면 이름과 맞게 | 디스크립션 3 | 대기 |
| 4 | 표기 | "검체", "소모품/시약", "tray", "팝업" | Sample, Consumable/Reagent, Tray, Popup | `glossary/terms.csv` | 대기 |
| 5 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선) | BREX | Figma 버전 메모 |
