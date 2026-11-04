---
cid: LI-TSS-PSI-PKI-01
pair_cid:
tl_relation: 단독
title: Check the PK/IC tube
path: Material Setup > Prepare Carrier > Load PK/IC Tubes > Check the PK/IC tube
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-398228
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-PKI-01 Check the PK/IC tube

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load PK/IC Tubes Step 1. LI-TSS-PSI-01에서 Trolley를 고르면 보이는 필요 수량 확인 화면 ([Skip]이면 이 화면 없이 PKI-02)
- 관련 정책: POL-INV-007 (`cids`에 있음), POL-MAT-008
- 호출하는 화면: LI-TSS-PSI-PKI-02 (Next)
- 다른 프레임: 없음
- 취소선(제거됨): 2 이동 대상 "[LI-TSS-PSI-LPR-02]" (→ PKI-02)

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load PK/IC Tubes
- STEP 1 Check the PK/IC tube | STEP 2 Scan the socket | STEP 3 Scan the PK/IC tube | STEP 4 Confirm the socket
- Prepare according to the quantity of PK/IC tube shown on the screen. / After preparing the PK/IC tube, click the [Next] button below.
- PK/IC tube Required Quantity
- PK tube (48/tube) | RP-V IC (48/tube)
- PB IC (48/tube)
- GI-BP IC (48/tube)
- Next

### 사용 컴포넌트

Table (2), Description Number (2), Frame (1), Button/Secondary_1Button_44 (1)

### 디스크립션 (원문)

#### 1. PK/IC tube Required Quantity

- 노출 정의 :
  - [LI-TSS-PSI-01] > trolley 선택 & [Select] 버튼 선택 시 노출
  - 해당 trolley에 필요한 PK/IC tube 개수 정보 노출

#### 2. [Next] 버튼

- 선택 시 → ~~[LI-TSS-PSI-LPR-02]~~ [LI-TSS-PSI-PKI-02] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- 없음

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | 화면 이름 "Check the PK/IC Tube" | IA "Check the PK/IC tube"와 대소문자 통일 | `ia/ia-screens.csv` | 대기 |
| 2 | 화면 데이터 | "(48/tube)" | 품목 표 단위로: PK Tube 96 rxns/tube, IC(RP-V IC·PB IC·GI-BP IC) 100 rxns/tube | `glossary/consumables.csv`, `glossary/pcr-reagents.csv` | 대기 (확인 필요) |
| 3 | 정책 반영 | 필요 수량 계산 기준(선택한 Trolley의 Sample 검사에 필요한 PK/IC)이 디스크립션에 없음 | POL-INV-007과 Required Qty 산출 기준 확인 | POL-INV-007 | 대기 (확인 필요) |
| 4 | 표기 | "trolley", "tube" | Trolley, Tube | `glossary/terms.csv` | 대기 |
| 5 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
