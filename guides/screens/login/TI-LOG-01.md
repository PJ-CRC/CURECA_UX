---
cid: TI-LOG-01
pair_cid: LI-LOG-01
tl_relation: 기능 추가
title: Sign in
path: Login
type: Page
version: 2.0
date: 2026-06-15
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1890-367035
figma_region: 2.1 2차
---
# TI-LOG-01 Sign in

> 기존 화면(작업방 Login 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- Figma 프레임 이름은 "TI-LOG" (IA CID는 TI-LOG-01)
- T/L 차이: L-IOS(LI-LOG-01)는 [Shut Down] 버튼이 있음
- 관련 정책: POL-ACC-003, POL-ACC-004, POL-ACC-005, POL-ACC-006, POL-ACC-007
- 호출하는 화면: Reset Initial Password (TI-LOG-01-P), Account Locked (TI-LOG-02-P)
- 다른 프레임: [TI-LOG/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1890-366983) (유효성 메시지 케이스)

- 취소선(Figma에서 제거된 항목): 5 [Exit] 버튼

## 기존 화면

### 화면 글자

- T-IOS
- ID | Please enter your ID
- Password | Please enter your password
- Sign In
- © Seegene Inc. All rights reserved.

### 사용 컴포넌트

Description Number (5), Square (1), Interface/Eye_Slash_Outlined (1)

### 디스크립션 (원문)

#### 1. Logo

- 시스템 로고 이미지 노출

#### 2. ID 입력 필드

- 공통 UX 참고 : COMM-5-n
- Placeholder : Please enter your ID
- 선택시, 입력필드 활성화
- 입력 조건
- 최소 글자 수: 4자
- 영문 소문자, 숫자, 특수문자(_ -) 포함 4자 이상
- 대문자 입력 시 소문자로 자동 변환
- 유효성 메시지 : TI-LOG/Case > Case 1

#### 3. PW 입력 필드

- 공통 UX 참고 : COMM-5-n
- Placeholder: Please enter your password
- 선택시, 입력필드 활성화
- 입력 조건
- 최소 글자 수: 8자
- 영문, 숫자, 특수 문자(! @ # $ % ^ & * ( ) _ - + = [ ] { } ; ' : " , . < > ? /)포함 최소 8자 이상
- 대소문자 구분
- 유효성 메시지 : TI-LOG/Case > Case 1

#### 4. [Sign In] 버튼

- Default: 비활성화
- [아이디], [비밀번호] 2개 필드 모두 최소 1자 이상
- 입력 시 버튼 활성화
- 계정 인증 성공 시, 최초 로그인일 경우 비밀번호 변경 필요
- 초기 비밀번호 재설정 화면 노출 : TI-LOG-P

#### 5. [Exit] 버튼

- 선택 시, 프로그램 종료

#### 6. Copyright 정보

- 로그인 페이지에서만 노출
- 표출 텍스트 : © Seegene Inc. All rights reserved.

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | Figma 프레임 이름·CID 칸 "TI-LOG", 디스크립션의 "TI-LOG-P" | TI-LOG-01, TI-LOG-01-P | `ia/ia-screens.csv` | 대기 |
| 2 | 디스크립션 | 5 [Exit] 버튼 설명 | Figma에서 취소선으로 제거된 항목. 다시 그릴 때 넣지 않음 | 2026-11-02 사용자 확인, POL-ACC-004 규칙 6 | 반영 불필요 |
| 3 | 디스크립션 | ID·비밀번호 조건을 화면에 다시 적음 (최대 길이 없음) | 정책 ID로 참조 | 헌법 3조 | 대기 |
| 4 | 표기 | Sign in / Sign In (화면 이름과 버튼) | 대소문자 PD-0001 결정 후 통일 | PD-0001 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
