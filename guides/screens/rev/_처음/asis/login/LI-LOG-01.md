---
cid: LI-LOG-01
pair_cid: TI-LOG-01
tl_relation: 기능 추가
title: Sign in
path: Login
type: Page
version: 2.1.03
date: 2026-08-21
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1890-367898
figma_region: 2.1 2차
---
# LI-LOG-01 Sign in

> 기존 화면(기존 작업방 Login 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- Figma 프레임 이름은 "LI-LOG" (IA CID는 LI-LOG-01)
- T/L 차이: TI-LOG-01에 더해 [Shut Down] 버튼(Confirm_020)이 있음
- 관련 정책: POL-ACC-003, POL-ACC-004, POL-ACC-005, POL-ACC-006, POL-ACC-007
- 호출하는 화면: Reset Initial Password (LI-LOG-01-P), Account Locked (LI-LOG-02-P)
- 다른 프레임: [LI-LOG/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1890-368138)

## 기존 화면

### 화면 글자

- L-IOS
- ID | Please enter your ID
- Password | Please enter your password
- Sign In
- Shut Down
- © Seegene Inc. All rights reserved.

### 사용 컴포넌트

Description Number (6), Square (1), Interface/Eye_Slash_Outlined (1)

### 디스크립션 (원문)

#### 1 ~ 4

- 원문은 TI-LOG-01 1 ~ 4와 같음. 다른 점: 유효성 메시지 "LI-LOG/Case > Case 1", 초기 비밀번호 재설정 화면 "LI-LOG-P"

#### 5. [Shut Down] 버튼

- 선택 시, 팝업 노출 : Confirm_020

#### 6. Copyright 정보

- 로그인 페이지에서만 노출
- 표출 텍스트 : © Seegene Inc. All rights reserved.
