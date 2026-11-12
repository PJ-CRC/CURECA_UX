---
cid: LI-TSS-PSI-SAM-01-04
pair_cid:
tl_relation: 단독
title: Confirm the socket scan
path: Material Setup > Prepare Carrier > Load Samples into Trolley > Load Samples into Socket > Confirm the socket scan
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-131722
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-SAM-01-04 Confirm the socket scan

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load Samples into Socket Step 4
- 관련 정책: POL-MAT-003, POL-MAT-006
- 호출하는 화면: LI-TSS-PSI-SAM-01-02 (새 Sample 스캔), LI-TSS-PSI-SAM-01-01 (Add New), LI-TSS-PSI-SAM (Finish), MS_Confirm_001, MS_Alert_007, MS_Alert_008, MS_Alert_009
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Samples into Socket
- STEP 1 Scan the sample tube | STEP 2 Scan the socket | STEP 3 Insert the sample tube | STEP 4 Confirm the socket
- The socket setup is complete. / If you need to set up another socket, click the [Add New] button or scan the barcode on the new sample tube. / Click [Finish] to go to the Carrier manual screen.
- New
- Add new | Finish

### 사용 컴포넌트

Description Number (3), Button/Secondary_1Button_44 (2), Frame (1)

### 디스크립션 (원문)

#### 1. New Sample tube 스캔

- 정상)
  - [LI-TSS-PSI-SAM-01-02] 화면으로 이동
  - Case 1) 다른 socket에 적재된 Sample을 스캔한 경우
    - ㄴ MS_Confirm_001 팝업 노출
    - ㄴ OK 선택 시 → [LI-TSS-PSI-SAM-01-02] 화면으로 이동
- 오류)
  - Case 1) 검사 오더가 등록되지 않은 Sample을 스캔한 경우
    - ㄴ MS_Alert_007 팝업 노출
  - Case 2) 취소된 검사의 Sample을 스캔한 경우
    - ㄴ MS_Alert_008 팝업 노출
  - Case 3) Tube setting에 등록되지 않은 Sample 스캔 시
    - ㄴ MS_Alert_009 팝업 노출

#### 2. [Add New] 버튼

- 선택 시 → [LI-TSS-PSI-SAM-01-01] 화면으로 이동

#### 3. [Finish] 버튼

- 선택 시 → [LI-TSS-PSI-SAM] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / Alert / Confirm 업데이트 / - Alert_033 팝업 추가

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "Confirm the socket", Ver 2.0 | IA "Confirm the socket scan"과 통일. 버전 메모(v2.1.05)를 반영한 Ver로 | `ia/ia-screens.csv`, 버전 메모 | 대기 |
| R02 | 화면 | 버튼 "Add new" | 디스크립션 [Add New]와 대소문자 통일 | 화면 글자, 디스크립션 2 | 대기 |
| R03 | 문구 | "Click [Finish] to go to the Carrier manual screen." | [Finish]는 LI-TSS-PSI-SAM(Load Samples into Trolley)으로 감. 화면 이름과 맞게 | 디스크립션 3 | 대기 |
| R04 | 표기 | "socket", "팝업" | Socket, Popup | `glossary/terms.csv` | 대기 |
| R05 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | Alert / Confirm 업데이트 (Alert_033 추가) | BREX | Figma 버전 메모 |
