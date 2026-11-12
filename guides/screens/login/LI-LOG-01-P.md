---
cid: LI-LOG-01-P
pair_cid: TI-LOG-01-P
tl_relation: 동일
title: Reset Initial Password
path: Login > New Password
type: Popup
version: 2.1.11
date: 2026-10-08
author: 정다예
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1890-367950
figma_region: 2.1 2차
---
# LI-LOG-01-P Reset Initial Password

> 기존 화면(작업방 Login 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- 관련 정책: POL-ACC-003, POL-ACC-004, POL-ACC-005, POL-ACC-006, POL-ACC-007
- 다른 프레임: [LI-LOG-01-P/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1890-368044)

## 기존 화면

### 화면 글자

- TI-LOG-01-P와 같음

### 디스크립션 (원문)

- 원문은 TI-LOG-01-P와 같음. 다른 점:
  - 1-1 Placeholder "Please enter a valid password."
  - 1-1 정책에 "각 문자 유형을 최소 1자 이상 포함"이 없음
  - 케이스 참조가 "LI-PRF-01/Case", "LI-LOG-P/Case", 이동 화면이 "LI-LOG"

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 디스크립션의 "LI-PRF-01/Case", "LI-LOG-P", "LI-LOG" | LI-LOG-01-P/Case, LI-LOG-01-P, LI-LOG-01 | `ia/ia-screens.csv` | 대기 |
| R02 | 정책 반영 | 비밀번호 조건에 "각 문자 유형 최소 1자"가 없음 (TI-LOG-01-P에는 있음) | POL-ACC-006으로 통일 (영문 대문자·소문자·숫자 각 1자 이상, 특수문자는 선택) | POL-ACC-006 | 대기 |
| R03 | 디스크립션 | 1-3 "1-2에 입력한 값과", [Cancle] | 1-1, [Cancel] | 디스크립션 | 대기 |
| R04 | 정책 반영 | [Cancel]을 누르면 팝업만 닫힘 | 디스크립션에 넣음: 로그인 화면으로 돌아가고, 다음 로그인 때 이 Popup을 다시 보여 줌 | POL-ACC-003 규칙 5 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | | X 버튼 → Cancel 버튼으로 변경 | 정다예 | Figma 버전 메모 |
| 2.1.11 | 2026-10-08 | 워딩 수정 (언어셋 반영): Change Password → Save | 정다예 | Figma 버전 메모 |
