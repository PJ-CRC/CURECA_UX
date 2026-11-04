---
cid: LI-TSS-PSI-LMM-02
pair_cid:
tl_relation: 단독
title: Insert the MM tube
path: Material Setup > Prepare Carrier > Load MM Tubes > Insert the MM tube
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-397377
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LMM-02 Insert the MM tube

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load MM Tubes Step 2 (MM Tube는 스캔 없이 수동 적재)
- 관련 정책: POL-MAT-002, POL-MAT-004, POL-MAT-005, POL-MAT-008
- 호출하는 화면: LI-TSS-PSI-LMM-03, MS_Alert_001, MS_Alert_032
- 다른 프레임: 없음
- 취소선(제거됨): 1 오류 "작업 중인 Socket 외, 다른 Socket 스캔 → MS_Alert_016" (→ 스캔 시 MS_Alert_001)

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load MM Tubes
- STEP 1 Scan the socket | STEP 2 Insert the MM tube | STEP 3 Confirm the socket
- Load 14 MM tubes as shown on the screen. / When MM tubes loading is complete, click the [Done] button below. / * Note: 14 MM tubes must be loaded.
- Done

### 사용 컴포넌트

Description Number (2), Frame (1), Button/Secondary_1Button_44 (1)

### 디스크립션 (원문)

#### 1. MM Tube 적재

- 유저 수동 적재
- Socket 스캔
  - 오류) ~~작업 중인 Socket 외, 다른 Socket 스캔~~ 스캔 시 (스캔 항목 없음)
    - ㄴ ~~MS_Alert_016 팝업 노출~~ MS_Alert_001 팝업 노출

#### 2. [Done] 버튼

- 디폴트 : 활성화
- 선택 시 → 아래 항목 반영
  - Socket & 하위 MM Tube 데이터 저장
  - [LI-TSS-PSI-LMM-03] 화면으로 이동
- 저장 실패 시
  - ㄴ MS_Alert_032 팝업 노출

### 케이스

- 없음

### 버전 메모

- 없음

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 정책 반영 | MM Tube 수 "14 MM tubes must be loaded" (Socket 1개 14 ea). 품목 표는 MM Tube "28 ea/rack" | 디스크립션에 넣음: MM Tube는 Socket 하나에 14개. 품목 표의 "28 ea/rack"은 씨젠 문서 오류로 14 ea/socket으로 고침 | `glossary/consumables.csv` MM Tube, 2026-11-03 사용자 답변 (MS7) | 대기 |
| 2 | 디스크립션 | MM Tube 수동 적재라 적재 수를 시스템이 모름. [Done] 디폴트 활성 = 14개 적재로 간주하는지 | 디스크립션에 넣음: MM Tube는 모두 같은 Tube라 하나씩 읽지 않고, Socket을 꽉 채워(14개) 넣는 것이 정책. [Done]은 14개를 채운 Socket으로 저장 | 2026-11-03 사용자 답변 (MS6, MS7) | 대기 |
| 3 | 디스크립션 | Remove 없음 (다른 적재 화면에는 있음) | 디스크립션에 넣음: MM Tube는 위치값이 필요 없어 [Remove]를 두지 않음 | 2026-11-03 사용자 답변 (MS6) | 대기 |
| 4 | 표기 | "유저", "MM tube", "팝업" | 사용자, MM Tube, Popup | `glossary/terms.csv` | 대기 |
| 5 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
