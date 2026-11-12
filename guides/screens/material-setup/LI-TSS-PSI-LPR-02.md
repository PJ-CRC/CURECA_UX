---
cid: LI-TSS-PSI-LPR-02
pair_cid:
tl_relation: 단독
title: Scan the socket
path: Material Setup > Prepare Carrier > Load PCR Reagents > Scan the socket
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-399633
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LPR-02 Scan the socket

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load PCR Reagents Step 2
- 관련 정책: POL-MAT-003, POL-MAT-008
- 호출하는 화면: LI-TSS-PSI-LPR-03, MS_Confirm_015
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load PCR Reagents
- STEP 2 Check the PCR reagent | STEP 2 Scan the socket | STEP 3 Scan the PCR reagent | STEP 4 Confirm the socket
- Scan the QR code on the PCR reagent socket. / Once the scan is complete, you will be taken to the next screen.
- PCR 시약 장착할 Socket 스캔 이미지 필요
- Required Quantity: RP1 00/02 | RP3 00/02 | GI-V 00/03
- (스크롤 영역) LB Tub (Prep) 00/05 | ASL Standard Tube 03/05 | LB DWP 00/05 | PBS Tub 00/05
- Next

### 사용 컴포넌트

Description Number (3), Frame (1), Button/Secondary_1Button_44 (1), layout/spacing (1), Divider (1)

### 디스크립션 (원문)

#### 1. Socket 스캔

- [LI-TSS-PSI-LPR-03] 화면으로 이동
- 정상)
  - MM tube 적재 socket 스캔 시
    - ㄴ MS_Confirm_015 팝업 노출
- (1-1) Required Quantity
  - 노출 정의 :
    - [LI-TSS-PSI-01] > trolley 선택 시 → 노출

#### 2. [Next] 버튼

- 디폴트 : 비활성화
- 스캔 시 → (2-1)과 동일하게 변경 & 다음 화면으로 이동

#### 2-1. Scan

- (내용 없음)

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.05)를 반영한 Ver로 | 버전 메모 | 대기 (확인 필요) |
| R02 | 화면 | Step 표시 "STEP 2 Check the PCR reagent" | STEP 1 | 화면 글자 | 대기 |
| R03 | 화면 데이터 | Required Quantity "RP1, RP3, GI-V" (LPR-01은 RP1, RP2, GI-V), LCR Reagent 줄이 남아 있음 | 예시 통일, LCR 줄 지움 | LI-TSS-PSI-LPR-01 | 대기 |
| R04 | 디스크립션 | MS_Confirm_015 OK 뒤 이동 없음. PCR socket이 아닌 Socket·코드 스캔 케이스 없음 | MS_Confirm_015 OK 선택 시 → LPR-03. MS_Alert_001은 넣지 않음. MS 목록에 명시한 경우에만 적용 (2026-11-03 사용자 답변 MS4). 담당자 적재 정책서는 PCR socket이 아니면 Alert_027(= MS_Alert_001)이었으나 MS 목록에는 이 경우가 없음 | `policy/alert-catalog-ms.csv` MS_Alert_001, 2026-11-03 사용자 답변 (MS4), `reference/team/material-setup-20261102/pcr-setup-policy.md` | 대기 |
| R05 | 디스크립션 | 2 [Next], 2-1 Scan 내용 없음 | LI-TSS-PSI-SAM-01-01 반영 대기 목록 3과 같이 | 디스크립션 | 대기 (확인 필요) |
| R06 | 표기 | "PCR 시약", "MM tube", "socket", "팝업" | PCR Reagent, MM Tube, Socket, Popup | `glossary/terms.csv`, `glossary/consumables.csv` | 대기 |
| R07 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선) | BREX | Figma 버전 메모 |
