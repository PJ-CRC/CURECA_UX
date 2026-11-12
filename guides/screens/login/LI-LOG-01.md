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
service_mode: [Main Mode, Console Mode, TSS Mode]
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

> 기존 화면(작업방 Login 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Figma 프레임 이름·CID 칸 "LI-LOG", 디스크립션의 "LI-LOG-P" | LI-LOG-01, LI-LOG-01-P | `ia/ia-screens.csv` | 대기 |
| R02 | 디스크립션 | ID·비밀번호 조건을 화면에 다시 적음 (최대 길이 없음) | 정책 ID로 참조 | 헌법 3조 | 대기 |
| R03 | 정책 반영 | 로그인 전 [Shut Down]은 모든 사용자에게 보임 | 맞음. 누구나 쓸 수 있음 | POL-ACC-004 규칙 5 | 제외 (2026-11-04, 바꿀 것 칸 참고) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
