---
cid: LI-TSS-PSI-LPR-01
pair_cid:
tl_relation: 단독
title: Check the PCR reagent
path: Material Setup > Prepare Carrier > Load PCR Reagents > Check the PCR reagent
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-399465
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LPR-01 Check the PCR reagent

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load PCR Reagents Step 1. LI-TSS-PSI-01에서 Trolley를 고르면 보이는 필요 수량 확인 화면 ([Skip]이면 이 화면 없이 LPR-02)
- 관련 정책: POL-INV-007 (`cids`에 있음), POL-MAT-008
- 호출하는 화면: LI-TSS-PSI-LPR-02 (Next)
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load PCR Reagents
- STEP 1 Check the PCR reagent | STEP 2 Scan the socket | STEP 3 Scan the PCR reagent | STEP 4 Confirm the socket
- Prepare according to the quantity of reagent shown on the screen. / After preparing the reagent, click the [Next] button below.
- PCR reagent Required Quantity
- RP1 (17 sets) | RP2 (17 sets) | GI-V (14 sets)
- Next

### 사용 컴포넌트

Table (2), Description Number (2), Frame (1), Button/Secondary_1Button_44 (1)

### 디스크립션 (원문)

#### 1. PCR reagent Required Quantity

- 노출 정의 :
  - [LI-TSS-PSI-01] > trolley 선택 & [Select] 버튼 선택 시 노출
  - 해당 trolley에 필요한 PCR 시약 개수 정보 노출

#### 2. [Next] 버튼

- 선택 시 → [LI-TSS-PSI-LPR-02] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- 없음

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 데이터 | "RP1 (17 sets)", "RP2 (17 sets)", "GI-V (14 sets)". LPR-02~04 예시는 RP1 00/02, RP3 00/02, GI-V 00/03 | 예시 값 통일. 이름은 품목 표의 제품명(Allplex™ Respiratory Panel 1 등) 또는 약칭 기준을 정함. 단위는 100 rxns/set | `glossary/pcr-reagents.csv`, LI-TSS-PSI-LPR-02 | 대기 (확인 필요) |
| R02 | 정책 반영 | PCR Reagent는 Assay Pack이 구조를 정함. 필요 수량을 box(set) 단위로 셀지, 구성품(MOM 등) 단위로 셀지 | POL-INV-007 기준 확인 | POL-INV-007, `rules/screen-spec.md` 1절 | 대기 (확인 필요) |
| R03 | 표기 | "PCR 시약", "trolley", "reagent" | PCR Reagent, Trolley | `glossary/terms.csv` | 대기 |
| R04 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
