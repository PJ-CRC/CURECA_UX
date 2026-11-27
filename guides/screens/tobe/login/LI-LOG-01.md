---
cid: LI-LOG-01
pair_cid: TI-LOG-01
tl_relation: 기능 추가
title: Sign in
path: Sign in
type: Page
version: 2.1.03
date: 2026.08.21
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: [POL-ACC-003, POL-ACC-004, POL-ACC-005, POL-ACC-006, POL-ACC-007]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=4073-13
---
# LI-LOG-01 Sign in

- T/L 차이: T-IOS에는 종료 버튼이 없고, L-IOS에는 [Shut Down] 버튼(5)이 있음
- 호출하는 화면: [LI-LOG-01-P] Reset Initial Password (4 [Sign In] → 최초 로그인 · 관리자 비밀번호 재설정 뒤), [LI-LOG-02-P] Account Locked (4 [Sign In] → 인증 실패 누적 10회), Confirm_020 (5 [Shut Down])
- 호출되는 곳: 프로그램 시작, 로그아웃 · Session Timeout 뒤
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Sign in 화면**
- User Type : Service, Admin, User
- L-IOS Client Mode : Main Mode, Console Mode, MS Mode

**1  Logo**
- 시스템 로고 이미지 노출

**2  ID(Text Input)**
- 공통 UX 참고 : COMM-5-t
- Placeholder : Please enter your ID
- 선택시, 입력필드 활성화
- 입력 조건
  - <span style="color:red">4자 이상, 32자 이하</span>
  - 영문 소문자, 숫자, 특수문자(_ -) <span style="color:red">사용 가능</span>
  - 대문자 입력 시 소문자로 자동 변환
- 유효성 메시지 : <span style="color:red">LI-LOG-01/Case</span> > Case 1
- 정책 참고 : POL-ACC-005

**3  Password(Password Input)**
- 공통 UX 참고 : COMM-5-t
- Placeholder : Please enter your password
- 선택시, 입력필드 활성화
- 입력 조건
  - <span style="color:red">8자 이상, 64자 이하</span>
  - 영문 <span style="color:red">대문자(A-Z), 영문 소문자(a-z)</span>, 숫자<span style="color:red">(0-9)</span>, 특수 문자(! @ # $ % ^ & * ( ) _ - + = [ ] { } ; ' : " , . < > ? /) <span style="color:red">사용 가능</span>
  - <span style="color:red">영문 대문자, 영문 소문자, 숫자 각 1자 이상 포함 (특수문자는 선택)</span>
  - 대소문자 구분
- 유효성 메시지 : <span style="color:red">LI-LOG-01/Case</span> > Case 1
- 정책 참고 : POL-ACC-006

**4  [Sign In] 버튼**
- 활성화 조건
  - Default: 비활성화
  - [아이디], [비밀번호] 2개 필드 모두 최소 1자 이상 입력 시 버튼 활성화
- 동작
  - 계정 인증 성공 시, 최초 로그인일 경우 비밀번호 변경 필요
  - 초기 비밀번호 재설정 화면 노출 : <span style="color:red">LI-LOG-01-P</span>
  - <span style="color:red">인증 실패 누적 10회 시 계정 잠금, Popup 노출 : LI-LOG-02-P</span>
- 정책 참고 : POL-ACC-003, POL-ACC-007

**5  [Shut Down] 버튼**
- 동작
  - 선택 시, Confirm 노출 : Confirm_020
- 정책 참고 : POL-ACC-004

**6  Copyright 정보**
- 로그인 페이지에서만 노출
- 표출 텍스트 : © Seegene Inc. All rights reserved.

## 케이스

### Case 1. 아이디/비밀번호 오류 시

- 디스크립션 번호 : 2, 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. 아이디/비밀번호 오류 시 에러 메시지 표시

- 1. ID 및 PW 입력값이 유효하지 않을 경우
  - 실패 횟수 카운팅 기준
    - 입력된 ID의 DB 존재 여부를 따지지 않고 해당 입력 ID 문자열 기준으로 실패 횟수를 누적
  - 노출 조건
    - 입력한 ID가 DB 정보와 다를 때 노출
    - 입력한 PW가 DB 정보와 다를 때 노출
    - 입력한 ID/PW가 모두 DB 정보와 다를 때 노출
  - 미노출
    - 정확한 ID/PW 입력 시 유효성 메시지 미노출
  - 내용
    - Invalid ID or password. ({n}/10 attempts)
    - n : 로그인 시도 실패 횟수 (ID/PW 구분 없이 누적 집계)
    - <span style="color:red">n이 10이 되면 Account Locked Popup 노출 : LI-LOG-02-P</span>

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 5 | Confirm | Confirm_020 | [Shut Down] 선택 시 | Shut Down 선택 시 → 시스템 종료 / Cancel 선택 시 → 해당 Confirm 닫힘 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | Logo · 시스템 표시 | CURECA 로고, L-IOS | 기존 원본 `Login_asis` LI-LOG `3538:12254` |
| Case 1 | ID · Password 입력값 | User123 · •••••••• | 기존 원본 LI-LOG/Case `3538:12497` |
| Case 1 | 오류 문구 | Invalid ID or password. (1/10 attempts) | 기존 원본 LI-LOG/Case `3538:12497` |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| L-IOS | 화면 1 · 케이스 Case 1-1 | |
| ID | 화면 2 · 케이스 Case 1-1 | |
| Please enter your ID | 화면 2 | |
| Password | 화면 3 · 케이스 Case 1-1 | |
| Please enter your password | 화면 3 | |
| Sign In | 화면 4 · 케이스 Case 1-1 | |
| Shut Down | 화면 5 | |
| © Seegene Inc. All rights reserved. | 화면 6 | |
| Invalid ID or password. ({n}/10 attempts) | 케이스 Case 1-1 (n = 1) | |
