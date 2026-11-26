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
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3538-12309
---
# LI-LOG-01-P Reset Initial Password

> 기존 화면(작업방 `Login_asis` 페이지, Ver 2.1.11)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: TI-LOG-01-P와 디스크립션이 다른 곳: 1-1 Placeholder(L `Please enter a valid password.` / T `8-64 characters: Letters, numbers, and special characters`), 1-1 정책 「각 문자 유형을 최소 1자 이상 포함」(T에만), 1-1 · 1-3 예시의 케이스 코드(L `LI-PRF-01/Case` / T `TI-LOG-P/Case`)
- 호출하는 화면: [LI-LOG] 로그인 화면 (2 [Save] → 유효성 검증 완료 후 이동)
- 호출되는 곳: [LI-LOG] Sign in 4 [Sign In] (원문 표기 `LI-LOG-P`)
- 관련 정책: POL-ACC-003, POL-ACC-004, POL-ACC-005, POL-ACC-006, POL-ACC-007

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- Reset Initial Password
- For your account security, please update your initial password.
- New Password
- Please enter a valid password
- Confirm New Password
- Repeat the password
- Cancel | Save

### 사용 컴포넌트

Description Number (6), Popup/Popup Middle Text (2), Interface/Eye_Slash_Outlined (2), Square (2), Interface/Info_Circle_Outlined (1)

### 디스크립션 (원문)

#### 0. 최초 로그인 시 초기 비밀번호 변경 팝업

- 노출 조건
- 계정 생성 이후 최초 로그인 시 노출

#### 1. 초기 비밀번호 변경 안내 문구

- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Reset Initial Password
- 내용 : For your account security, please update your initial password

#### 1-1. New Password 입력 영역

- 정의
- 새로 변경할 비밀번호를 입력하는 필드
- Placeholder : Please enter a valid password.
- 정책
- 8 자 이상, 64 자 이하
- 허용 문자 : 영문 대문자(A-Z), 영문 소문자(a-z), 숫자(0-9),
- 특수문자 (! @ # $ % ^ & * ( ) _ - + = [ ] { } ; ' : " , . < > ? /)
- 대소문자 구분
- 동작
- [Save] 버튼 클릭 시 유효성 검사 진행
- 비밀번호 정책 불일치 시 하단에 에러메시지 노출
- 예시 : LI-PRF-01/Case > Case 2

#### 1-2. Password 생성 조건 안내 툴팁(Tooltip)

- 공통 UX 참고 : COMM-5-o
- 표출 예시 : LI-LOG-P/Case > Case 3

#### 1-3. Confirm New Password 입력 영역

- 정의
- 새 비밀번호를 재입력하여 확인하는 필드
- Placeholder : Repeat the password
- 동작
- [Save] 버튼 클릭 시 유효성 검사 진행
- 1-2에 입력한 값과 일치하지 않을 경우 에러 메시지 노출
- 예시 : LI-PRF-01/Case > Case 3

#### 2. [Save] 버튼

- Default: 비활성화
- [새 비밀번호], [새 비밀번호 확인] 2개 필드 모두 최소 1자 이상
- 입력 시 버튼 활성화
- 동작
- 입력된 정보의 유효성 검증 후 비밀번호 변경 실행
- 단, 유효성 검증에 실패 할 경우 표출 항목 별 안내 문구 노출
- 유효성 검증 완료 후 로그인 화면으로 이동 : LI-LOG
- (변경한 비밀번호로 재로그인 진행)

#### 3. [Cancle] 버튼

- 클릭 시, 팝업이 닫힘

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | 새 비밀번호 유효성 체크 실패 시 | 새 비밀번호 유효성 검사 실패 시 (케이스 패널 화면 이름) | [LI-LOG-01-P/Case](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3538-12403) |
| 2 | 새 비밀번호 불일치 시 | 새 비밀번호 불일치 시 (케이스 패널 화면 이름) | 같은 프레임 |
| 3 | 비밀번호 Tooltip | 비밀번호 Tooltip (케이스 패널 화면 이름) | 같은 프레임 |

- 케이스 패널: Case마다 화면 정보만 있고 디스크립션 번호 · 내용 없음(번호 칸 `0`)
- 케이스 화면 글자
  - Case 1: New Password 아래 `Only 8-64 characters with English letters, numbers, and special characters (!@#$%^&*()_-+={}[]:;"'<>,.?/) are allowed.`
  - Case 2: Confirm New Password 아래 `Passwords do not match.`
  - Case 3: 툴팁 `Password rules` / `8–64 characters are allowed` / `Letters (A-Z, a-z), numbers (0-9), and special characters are allowed` / `Case-sensitive`
