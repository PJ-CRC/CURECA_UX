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
client_mode: [Console Mode]
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

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. Load MM Tubes Step 2 (MM Tube는 스캔 없이 수동 적재)
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
