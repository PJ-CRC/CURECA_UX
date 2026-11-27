---
cid: LI-LOG-01-P
pair_cid: TI-LOG-01-P
tl_relation: 동일
title: Reset Initial Password
path: -
type: Popup
version: 2.1.11
date: 2026.10.08
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: [POL-ACC-003, POL-ACC-006]
basis:
basis_versions:
source: tobe
figma:
---
# LI-LOG-01-P Reset Initial Password

- T/L 차이: 없음
- 호출하는 화면: [LI-LOG-01] Sign in (2 [Save] · 3 [Cancel] → 로그인 화면)
- 호출되는 곳: [LI-LOG-01] Sign in 4 [Sign In]
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  최초 로그인 시 초기 비밀번호 변경 Popup**
- 노출 조건
  - 계정 생성 이후 최초 로그인 시 노출
  - <span style="color:red">관리자(Service, Admin)가 비밀번호를 다시 정한 뒤 로그인 시 노출</span>
- 공통 UX 참고 : COMM-5-m
- User Type : Service, Admin, User
- L-IOS Client Mode : Main Mode, Console Mode, MS Mode
- 정책 참고 : POL-ACC-003

**1  초기 비밀번호 변경 안내 문구**
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Reset Initial Password
- 내용 : For your account security, please update your initial password<span style="color:red">.</span>

**1-1  New Password(Password Input)**
- 정의
  - 새로 변경할 비밀번호를 입력하는 필드
- Placeholder : <span style="color:red">Please enter a valid password</span>
- 입력 조건
  - 8 자 이상, 64 자 이하
  - 허용 문자 : 영문 대문자(A-Z), 영문 소문자(a-z), 숫자(0-9), 특수문자 (! @ # $ % ^ & * ( ) _ - + = [ ] { } ; ' : " , . < > ? /)
  - 대소문자 구분
  - <span style="color:red">영문 대문자, 영문 소문자, 숫자 각 1자 이상 포함 (특수문자는 선택)</span>
- 동작
  - [Save] 버튼 클릭 시 유효성 검사 진행
  - 비밀번호 정책 불일치 시 하단에 에러메시지 노출
- 공통 UX 참고 : COMM-5-t
- 정책 참고 : POL-ACC-006
- 케이스 참고 : LI-LOG-01-P/Case > Case 1

**1-2  Password 생성 조건 안내 Tooltip**
- 공통 UX 참고 : COMM-5-v
- 케이스 참고 : LI-LOG-01-P/Case > Case 3

**1-3  Confirm New Password(Password Input)**
- 정의
  - 새 비밀번호를 재입력하여 확인하는 필드
- Placeholder : Repeat the password
- 동작
  - [Save] 버튼 클릭 시 유효성 검사 진행
  - <span style="color:red">(1-1)</span>에 입력한 값과 일치하지 않을 경우 에러 메시지 노출
- 공통 UX 참고 : COMM-5-t
- 케이스 참고 : LI-LOG-01-P/Case > Case 2

**2  [Save] 버튼**
- 활성화 조건
  - Default: 비활성화
  - [새 비밀번호], [새 비밀번호 확인] 2개 필드 모두 최소 1자 이상 입력 시 버튼 활성화
- 동작
  - 입력된 정보의 유효성 검증 후 비밀번호 변경 실행
  - 단, 유효성 검증에 실패 할 경우 표출 항목 별 안내 문구 노출
  - 유효성 검증 완료 후 로그인 화면으로 이동 : LI-LOG-01
  - (변경한 비밀번호로 재로그인 진행)
- 정책 참고 : POL-ACC-003

**3  [<span style="color:red">Cancel</span>] 버튼**
- 동작
  - 클릭 시, <span style="color:red">Popup이 닫히고 로그인 화면으로 이동 : LI-LOG-01</span>
  - <span style="color:red">다음 로그인 시 이 Popup 다시 노출</span>
- 정책 참고 : POL-ACC-003

## 케이스

### Case 1. 새 비밀번호 유효성 체크 실패 시

- 디스크립션 번호 : 1-1
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

### Case 2. 새 비밀번호 불일치 시

- 디스크립션 번호 : 1-3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

### Case 3. 비밀번호 Tooltip

- 디스크립션 번호 : 1-2
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

## Alert · Confirm · Toast

없음

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| Case 1 | New Password 입력값 · 오류 문구 | •••••••• · Only 8-64 characters with English letters, numbers, and special characters (!@#$%^&*()_-+={}[]:;"'<>,.?/) are allowed. | 기존 원본 LI-LOG-01-P/Case `3538:12403` |
| Case 2 | Confirm New Password 입력값 · 오류 문구 | •••••••• · Passwords do not match. | 기존 원본 LI-LOG-01-P/Case `3538:12403` |
| Case 3 | Tooltip 글 | Password rules / 8–64 characters are allowed / Letters (A-Z, a-z), numbers (0-9), and special characters are allowed / Case-sensitive | 기존 원본 LI-LOG-01-P/Case `3538:12403` |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Reset Initial Password | 화면 1 · 케이스 Case 1 · Case 2 | |
| For your account security, please update your initial password. | 화면 1 · 케이스 Case 1 · Case 2 | |
| New Password | 화면 1-1 · 케이스 Case 1 · Case 2 · Case 3 | |
| Please enter a valid password | 화면 1-1 | |
| Confirm New Password | 화면 1-3 · 케이스 Case 1 · Case 2 | |
| Repeat the password | 화면 1-3 | |
| Cancel | 화면 3 · 케이스 Case 1 · Case 2 | |
| Save | 화면 2 · 케이스 Case 1 · Case 2 | |
| Only 8-64 characters with English letters, numbers, and special characters (!@#$%^&*()_-+={}[]:;"'<>,.?/) are allowed. | 케이스 Case 1 | |
| Passwords do not match. | 케이스 Case 2 | |
| Password rules | 케이스 Case 3 | |
| 8–64 characters are allowed | 케이스 Case 3 | |
| Letters (A-Z, a-z), numbers (0-9), and special characters are allowed | 케이스 Case 3 | |
| Case-sensitive | 케이스 Case 3 | |
