---
cid: LI-TSS-PSI-LPR-04
pair_cid:
tl_relation: 단독
title: Confirm the socket
path: Material Setup > Prepare Carrier > Load PCR Reagents > Confirm the socket
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-399915
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LPR-04 Confirm the socket

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load PCR Reagents Step 4
- 관련 정책: POL-MAT-003, POL-MAT-008
- 호출하는 화면: LI-TSS-PSI-LPR-03 (새 Socket 스캔), LI-TSS-PSI-LPR-02 (Add New), LI-TSS-PSI (Finish), MS_Confirm_015
- 다른 프레임: 없음
- 취소선(제거됨): 경로 "Load PCR reagent"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load PCR Reagents
- STEP 2 Check the PCR reagent | STEP 2 Scan the socket | STEP 3 Scan the PCR reagent | STEP 4 Confirm the socket
- The socket setup is complete. / If you need to set up another PCR reagent box, click the [Add New] button or scan the QR code on the new PCR reagent socket. / Click [Finish] to go to the Carrier manual screen.
- NEW | PCR 시약 장착할 Socket 스캔 이미지 필요
- Required Quantity: RP1 02/02 | RP3 00/02 | GI-V 00/03
- (스크롤 영역) LB Tub (Prep) 00/05 | ASL Standard Tube 03/05 | LB DWP 00/05 | PBS Tub 00/05
- Add new | Finish

### 사용 컴포넌트

Description Number (3), Button/Secondary_1Button_44 (2), Frame (1), layout/spacing (1), Divider (1)

### 디스크립션 (원문)

#### 1. New PCR reagent socket 스캔

- [LI-TSS-PSI-LPR-03] 화면으로 이동
- Case 1) MM tube 적재 socket 스캔 시
  - ㄴ MS_Confirm_015 팝업 노출

#### 2. [Add New] 버튼

- 선택 시 → [LI-TSS-PSI-LPR-02] 화면으로 이동 & 적재 개수 유지

#### 3. [Finish] 버튼

- 선택 시 → [LI-TSS-PSI] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Ver 2.0, 경로에 취소선 남음 | 버전 메모 반영 Ver, 경로 정리 | 버전 메모 | 대기 |
| R02 | 화면 | Step 표시 "STEP 2 Check the PCR reagent", LCR Reagent 줄 남음 | STEP 1, 줄 지움 | 화면 글자 | 대기 |
| R03 | 문구 | "If you need to set up another PCR reagent box" / "go to the Carrier manual screen" | another socket / [Finish]는 LI-TSS-PSI로 감 | 디스크립션 3 | 대기 |
| R04 | 디스크립션 | MS_Confirm_015 OK 뒤 이동 없음 | OK 선택 시 → LPR-03 | MS_Confirm_015 | 대기 |
| R05 | 화면 | 버튼 "Add new" | [Add New] | 디스크립션 2 | 대기 |
| R06 | 표기 | "PCR 시약", "MM tube", "socket", "팝업" | PCR Reagent, MM Tube, Socket, Popup | `glossary/terms.csv` | 대기 |
| R07 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선) | BREX | Figma 버전 메모 |
