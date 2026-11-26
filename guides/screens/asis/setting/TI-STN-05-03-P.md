---
cid: TI-STN-05-03-P
pair_cid:
tl_relation: 단독
title: User Details
path: Setting > Account Setting
type: Popup
version: 2.1.03
date: 2026.08.21
author: 정다예
client_mode: []
user_type: [Service, Admin]
policies: []
provisional: [PV-0002]
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-579535
---
# TI-STN-05-03-P User Details

> 기존 화면(작업방 `Account Setting_asis` 페이지, Ver 2.1.03)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (T-IOS와 L-IOS의 통합 사용자 계정 상세)
- 같은 CID 프레임이 2개입니다: 보기(읽기 모드) [3543:579535](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-579535)(디스크립션 0 ~ 3)와 편집 [3543:579605](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-579605)(디스크립션 0 ~ 7). 두 프레임을 차례로 적습니다.
- 호출하는 화면: Confirm_007 (편집 6 Cancel), 저장 팝업 (편집 7 Save → TI-STN-05-03-P/Case 2)
- 호출되는 곳: [TI-STN-05] 목록 행 클릭 (TI-STN-05 원문은 `TI-STN-05-02-P`를 가리킴)
- 관련 정책: POL-ACC-001, POL-ACC-002, POL-ACC-005, POL-ACC-006 / 임시 정책 PV-0002

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- 보기 (3543:579535)
  - User Details (X)
  - User Type — User | Admin
  - ID — seegene1234
  - Password — `Passwords are encrypted for security`
  - Name — John Doe
  - Email — user1234@seegene.com
  - Edit
- 편집 (3543:579605)
  - User Details (X)
  - User Type — User | Admin
  - ID — seegene1234
  - Password * — Password Reset
  - Name — John Doe
  - Email — user1234@seegene.com
    - After creating an account, a temporary password will be automatically sent to email.
  - Cancel | Save

### 사용 컴포넌트

- 보기: Description Number (3), Popup/Popup Middle Text (1)
- 편집: Description Number (7), Square (2), Popup/Popup Middle Text (1)

### 디스크립션 (원문)

보기 프레임 (3543:579535)

#### 0. User Details 팝업

- 정의
- T-IOS와 L-IOS의 통합 사용자 계정 상세 화면
- 노출 조건
- Account Setting 내 List에서 하나의 User List 선택 시 노출

#### 1. User Details 팝업

- 타이틀
- User Details
- 동작
- Default: 모든 항목 비활성화 (읽기 모드)
- [Edit]버튼 선택 시 ID를 제외한 모든 항목 활성화 (편집 가능)
- 표출 항목
- User Type
- ㄴUser 생성 시 설정한 유형 정보
- User ID
- ㄴUser 생성 시 ID 필드에 입력한 정보
- Password
- ㄴPlaceholder : Passwords are encrypted for security
- Name
- ㄴUser 생성 시 Name 필드에 입력한 정보
- Email
- ㄴUser 생성 시 Email 필드에 입력한 정보

#### 2. [Edit] 버튼

- 클릭 시, ID를 제외한 모든 항목 활성화
- 참고 : TI-STN-05-03-P

#### 3. [X] 버튼

- 클릭 시, 팝업 닫힘 및 TI-STN-05 페이지 노출

편집 프레임 (3543:579605)

#### 0. User Details 팝업

- 정의
- T-IOS와 L-IOS의 통합 사용자 계정 상세 화면
- 노출 조건
- Account Setting 내 List에서 하나의 User List 선택 시 노출

#### 1. User Type(Radio Button)

- 동작
- Default : 사용자가 최종으로 설정한 권한 활성화
- User 또는 Admin 중 1개 권한만 단일 선택 가능

#### 2. ID (Read-only)

- 최초 계정 생성 시 DB에 저장된 사용자 ID 정보를 그대로 노출
- 최초 생성 이후 변경이 불가하므로 비활성화 상태로 고정

#### 3. Password : [Password Reset] 버튼

- 선택 시 비밀번호 입력 필드 활성화, 자동 생성 및 복사 버튼 노출
- 참고 : TI-STN-05-03-P/Case 1

#### 4. Name(Text Input)

- 공통 UX 참고 : COMM-5-n
- Default : 사용자가 최종으로 입력한 정보 그대로 노출
- 동작
- 선택시, 입력 필드 활성화
- 입력 조건
- 필수 값 아님 (Null 허용, 글자 수 및 포맷 제한 없음)

#### 5. Email(Text Input)

- 공통 UX 참고 : COMM-5-n
- Default : 사용자가 최종으로 입력한 정보 그대로 노출
- 동작
- 선택시, 입력 필드 활성화
- 수정 시 유효성 재검증 필요
- 유효성 검증 실패 시 안내 문구 노출
- 입력 조건
- 이메일 표준 포맷 준수 (abc@domain.com 형식)
- 유효성 메시지 : TI-STN-05-03-P/Case1

#### 5-1. 비밀번호 자동 전송 안내 문구

- Default : 화면 진입 시 인풋 박스 하단에 기본 노출
- 미노출(숨김)조건
- 사용자가 이메일을 입력한 후 유효성 검증에 실패하여
  - 에러 메시지가 출력되는 시점에는 본 안내 문구를 화면에서
  - 일시적으로 숨김 처리
- 참고 : TI-STN-05-01-P/Case > Case 5
- 내용
- SMTP 설정 여부에 따라 다른 문구 노출
- 참고 : TI-STN-05-01-P/Case > Case 2

#### 6. [Cancel] 버튼

- 클릭 시, 팝업 노출 : Confirm_007
- Leave 선택 시 TI-STN-05 페이지 노출

#### 7. [Save] 버튼

- Default : 비활성화
- 활성화 조건
- 변경 사항이 있을 경우 and 입력된 항목의 검증이 완료되었을 경우
- 선택 시, 변경 항목에 따라 팝업 케이스 분기 노출
- 참고 : TI-STN-05-03-P/Case 2

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-STN-05-03-P/Case`([3543:580559](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-580559), 2252×3976)에 있습니다. 오른쪽 패널(CID `TI-STN-05-03-P/Case`, 작성자 정다예, Ver · Date `-`, 화면 `User Type 및 비밀번호 변경 Case`)에 디스크립션이 있습니다. 프레임 칸의 y는 케이스 제목 글자 자리입니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | User Details 정보 변경 Case (ID 제외) | 목록 선택 → [Edit] → [Password Reset] → [Save] 검증 | 위 프레임 y 16 |
| 2 | [save] 버튼 선택 후 노출 팝업 Case | 비밀번호 변경 후 [Save] | 위 프레임 y 2615 |

- Case 1 패널 디스크립션
  - (번호 없음) Temporary Password(Text Input) / 공통 UX 참고 : COMM-5-n / 동작 / - 이전 팝업에서 [Password Reset] 선택 시 바로 입력 필드 활성화 / 입력 조건 / - 최소 글자 수: 8자 / - 영문, 숫자, 특수 문자(…)포함 최소 8자 이상 / - 대소문자 구분 / 유효성 메시지 : TI-STN-05-01-P/Case > Case 2
  - 1-1 Password 생성 조건 안내 툴팁(Tooltip) / 공통 UX 참고 : COMM-5-o / 표출 예시 : TI-STN-05-01-P/Case > Case 3
  - 1-2 [Generate] 버튼 — TI-STN-05-01-P 4-2와 같은 글
  - 1-3 [Copy] 버튼 — TI-STN-05-01-P 4-3과 같은 글
  - 1-4 Password 자동 생성 안내 문구 — TI-STN-05-01-P 4-4와 같은 글(참고 줄만 `TI-STN-05-01-P/Case > Case 2`)
  - (번호 없음) Password 변경 완료 안내 문구 팝업 / 타이틀 : Temporary Password Issued / 내용 : The temporary password for this user has been successfully generated
  - (번호 없음) 임시 비밀번호 표시 필드 / 사용자가 직접 입력 또는 자동 생성하여 편집한 비밀번호 노출
  - 3-1 Copy Icon / 동작 / - 버튼 클릭 시, [3] 영역에 표출된 임시 비밀번호 문자열 전체를 사용자의 클립보드에 즉시 복사
  - 3-2 Password 전달 안내 문구 / 내용 : Copy the generated password and send it to the user.
  - (번호 없음) [OK] 버튼 / 선택 시 팝업 닫힌 후, TI-STN-05 화면 노출 / 편집된 계정은 Modified Date/Time가 가장 최신으로 / 리스트 내 최상단에 노출
- Case 1 화면
  - 1-1. User List 선택 시 — 보기 화면(Password `Passwords are encrypted for security.`, Edit)
  - 1-2. [Edit] 버튼 선택 시 — Password * Password Reset, Email 아래 `After creating an account, a temporary password will be automatically sent to email.`, Cancel | Save
  - 1-3. [Password Reset] 버튼 선택 시 — Temporary Password * 입력 칸 · Generate · Copy, `Enter a password manually or click the generate button.`, Email 아래 `SMTP setup required to auto-send temporary passwords to this email.`
  - 1-4. [Save] 버튼 선택 시 : 비밀번호 유효성 검증 실패 — `비밀번호 직접 입력 시 유효성 체크 필요 / 비밀번호 변경 및 저장 완료 후 사용자가 최초 시스템에 접근 시 비밀번호 세팅 필요`. `Only 8-64 characters with English letters, numbers, and special characters (!@#$%^&*()_-+={}[]:;"'<>,.?/) are allowed.`
  - 1-5. [Save] 버튼 선택 시 : Email 유효성 검증 실패 — `Email 1자리 이상 입력 시 유효성 검증 필요 / 이메일 표준 포맷 준수 (abc@domain.com 형식) 여부 검증`. Email `user1234seegene.com` 아래 `Please enter a valid email address.`
- Case 2 패널 디스크립션: `User Details 정보 변경 후 [Save] 버튼 선택 시 노출 팝업 / 노출 조건 / - User Details 정보 수정 후 [Save] 버튼 클릭 시, 변경 항목에 따라 팝업 케이스 분기 노출 / 일반 정보 변경 시 / - User Type, Name, Email 중 1개 이상 변경된 경우 / - 팝업 노출 : Confirm_10 / 임시 비밀번호 변경 시 / - Temporary Password 항목이 변경된 경우 / - 참고 : Case 2. [save] 버튼 선택 후 노출 팝업 Case`
- Case 2 화면
  - 1-1. 비밀번호 수정 및 임시 비밀번호 메일 전송이 성공한 경우: `이메일 정보가 존재하고 비밀번호 변경 및 임시 비밀번호 전송에 성공한 경우 노출 팝업 / SMTP 연동 완료 및 이메일 입력이 전제되어야 함` → Password Updated Successfully / The password has been successfully updated, and the temporary password has been sent to the registered email address. / OK
  - 1-2. 이메일이 입력되지 않아 메일 발송이 불가한 경우: `이메일이 입력되지 않거나 SMTP가 미설정된 상태에서 비밀번호를 변경한 경우 노출 팝업 / 비밀번호 변경 성공 및 생성된 비밀번호 수동 전달(공유) 안내 문구 노출` → Password Updated / The password has been successfully updated. Please copy the generated password and deliver it to the user manually. / `alks7j5d3lf` (2-1) / 2-2 Once this window is closed, the temporary password cannot be displayed again. / OK
  - 1-3. SMTP 서버 등의 이슈로 메일 전송에 실패한 경우: (설명은 TI-STN-05-02-P/Case 1-3과 같음) → Password Updated (Email Delivery Failed) / The password has been successfully updated, but the temporary password email could not be sent. Please copy the password below and deliver it to the user manually. / `alks7j5d3lf` / Once this window is closed, the temporary password cannot be displayed again. / OK
