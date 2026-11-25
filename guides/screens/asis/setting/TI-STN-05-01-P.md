---
cid: TI-STN-05-01-P
pair_cid:
tl_relation: 단독
title: Create New User
path: Setting > Account Setting > Add User
type: Popup
version: 2.1.03
date: 2026.08.21
author: 정다예
client_mode: []
user_type: [Service, Admin]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-579427
---
# TI-STN-05-01-P Create New User

> 기존 화면(작업방 `Account Setting_asis` 페이지, Ver 2.1.03)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (T-IOS와 L-IOS의 통합 사용자 계정 추가)
- 호출하는 화면: Confirm_007 (7 Cancel), [TI-STN-05-02-P] 계정 생성 완료 팝업 (8 Create)
- 호출되는 곳: [TI-STN-05] 4 [Add User]
- 관련 정책: POL-ACC-001, POL-ACC-002, POL-ACC-005, POL-ACC-006 / 임시 정책 PV-0002
- 버전 메모(프레임 오른쪽 위 `ver`): v2.1.03 update / 이름, 이메일 정보 추가

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- Create New User
- Enter details to create a new user account.
- User Type — User | Admin
- ID * — `Please enter a valid ID` | Check ID (안내 아이콘)
- Temporary Password * — `Please enter a valid password` | Generate | Copy (안내 아이콘)
  - Enter a password manually or click the generate button.
- Name — `Please enter full name`
- Email — `Please enter a valid email address`
  - After creating an account, a temporary password will be automatically sent to email.
- Cancel | Create

### 사용 컴포넌트

Description Number (15), Square (5), Popup/Popup Middle Text (2), Interface/Info_Circle_Outlined (2), Interface/Eye_Slash_Outlined (1)

### 디스크립션 (원문)

#### 0. Create New User 팝업

- 정의
- T-IOS와 L-IOS의 통합 사용자 계정 추가 화면

#### 1. 타이틀 및 상세 문구

- 타이틀 : Create New User
- 내용 : Enter details to create a new user account.

#### 2. User Type(Radio Button)

- 동작
- Default: 신규 생성 시 User 권한 기본 활성화
- User 또는 Admin 중 1개 권한만 단일 선택 가능

#### 3. ID(Text Input)

- 공통 UX 참고 : COMM-5-n
- Placeholder : Please enter your ID
- 동작
- 선택시, 입력필드 활성화
- 이미 유효성 검증 및 중복 체크를 통과하여 완료된 상태이더라도,
  - 사용자가 해당 인풋 박스를 다시 클릭하여 수정하려고 할 경우
  - 기존 입력 값을 초기화 처리
- 입력 조건
- 최소 글자 수: 4자
- 영문 소문자, 숫자, 특수문자(_ -) 포함 4자 이상
- 대문자 입력 시 소문자로 자동 변환

#### 3-1. ID 생성 조건 안내 툴팁(Tooltip)

- 공통 UX 참고 : COMM-5-o
- 표출 예시 : TI-STN-05-01-P/Case > Case 3

#### 3-2. [Check ID] 버튼

- 정의
- 아이디 유효성 검증 및 중복 체크 기능
- 동작
- 유효성 검증 및 중복 체크 실패 시 안내 문구 노출
- 표출 문구 (TI-STN-05-01-P/Case > Case 1)
- ID 입력 형식이 유효하지 않을 경우
- : Only 4-32 characters with lowercase letters, numbers, and symbols (_ , -) are allowed.
- 등록된(이미 존재하는) ID인 경우
- : This username is already taken.
- 아이디 유효성 검증을 하지 않은 상태로 [Create] 버튼 선택 시
- : Please check ID availability.
- 아이디 유효성 검증을 완료한 경우
- : This username is available.

#### 4. Temporary Password(Text Input)

- 공통 UX 참고 : COMM-5-n
- Placeholder : Please enter a valid password
- 동작
- 선택시, 입력 필드 활성화
- 유효성 검증 실패 시 안내 문구 노출
- 입력 조건
- 최소 글자 수: 8자
- 영문, 숫자, 특수 문자(! @ # $ % ^ & * ( ) _ - + = [ ] { } ; ' : " , . < > ? /)포함 최소 8자 이상
- 대소문자 구분
- 각 문자 유형을 최소 1자 이상 포함
- 유효성 메시지 : TI-STN-05-01-P/Case > Case 4

#### 4-1. Password 생성 조건 안내 툴팁(Tooltip)

- 공통 UX 참고 : COMM-5-o
- 표출 예시 : TI-STN-05-01-P/Case > Case 6

#### 4-2. [Generate] 버튼

- 정의
- 사용자가 비밀번호를 직접 입력하지 않고도, 시스템이 제공하는
  - 임시/난수 비밀번호를 자동으로 생성해 주는 기능
- 동작
- [Generate] 버튼 클릭 시, Password 입력 필드 내에 조건에
  - 맞는 난수 비밀번호가 자동으로 생성되어 입력
- 기존에 Password 필드에 입력되어 있던 텍스트가 있다면 새로운 난수로 덮어쓰기 처리함.
- 난수 비밀번호 생성 조건
- 고정 글자 : 8자
- 영문 대문자 (A-Z) : 최소 1자 이상 필수 포함
- 영문 소문자 (a-z) : 최소 1자 이상 필수 포함
- 숫자 (0-9) : 최소 1자 이상 필수 포함

#### 4-3. [Copy] 버튼

- 정의
- 사용자가 직접 입력했거나 [Generate] 버튼을 통해 자동 생성된 Password 필드의 비밀번호를 클립보드에 복사하는 편의 기능
- 동작
- [Copy] 버튼 클릭 시, 해당 시점에 Password 입력 필드에
  - 입력되어 있는 텍스트 문자열 전체를 사용자 PC/장치의
  - 클립보드로 즉시 복사

#### 4-4. Password 자동 생성 안내 문구

- Default : 화면 진입 시 인풋 박스 하단에 기본 노출
- 미노출(숨김)조건
- 사용자가 비밀번호를 입력한 후 유효성 검증에 실패하여
  - 에러 메시지가 출력되는 시점에는 본 안내 문구를 화면에서
  - 일시적으로 숨김 처리
- 참고 : TI-STN-05-01-P/Case > Case 4
- 내용
- Enter a password manually or click the generate button.

#### 5. Name(Text Input)

- 공통 UX 참고 : COMM-5-n
- Placeholder : Please enter full name
- 동작
- 선택시, 입력 필드 활성화
- 입력 조건
- 필수 값 아님 (Null 허용, 글자 수 및 포맷 제한 없음)

#### 6. Email(Text Input)

- 공통 UX 참고 : COMM-5-n
- Placeholder : Please enter a valid email address
- 동작
- 선택시, 입력 필드 활성화
- 1자리 이상 입력 시 유효성 검증 필요
- 유효성 검증 실패 시 안내 문구 노출
- 입력 조건
- 이메일 표준 포맷 준수 (abc@domain.com 형식)
- 유효성 메시지 : TI-STN-05-01-P/Case > Case 5

#### 6-1. 비밀번호 자동 전송 안내 문구

- Default : 화면 진입 시 인풋 박스 하단에 기본 노출
- 미노출(숨김)조건
- 사용자가 이메일을 입력한 후 유효성 검증에 실패하여
  - 에러 메시지가 출력되는 시점에는 본 안내 문구를 화면에서
  - 일시적으로 숨김 처리
- 참고 : TI-STN-05-01-P/Case > Case 5
- 내용
- SMTP 설정 여부에 따라 다른 문구 노출
- 참고 : TI-STN-05-01-P/Case > Case 2

#### 7. [Cancel] 버튼

- 클릭 시, 팝업 노출 : Confirm_007
- Leave 선택 시 TI-STN-05 페이지 노출

#### 8. [Create] 버튼

- Default : 비활성화
- 활성화 조건
- 아이디 유효성 및 중복 체크가 완료된 상태에서 비밀번호가
  - 1자리 이상 입력된 경우
- 클릭 시, 계정 생성 완료 팝업 노출
- SMTP 설정 및 이메일 입력 여부에 따라 팝업 케이스 분기 노출
- 참고 : TI-STN-05-02-P

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-STN-05-01-P/Case`([3543:579748](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-579748), 2252×6482)에 있습니다. 케이스마다 오른쪽 패널이 있고 화면 정보만 있습니다(CID `TI-STN-05-01-P/Case`, 작성자 정다예, Ver · Date `-`, 디스크립션 번호 `0`). 프레임 칸의 y는 케이스 제목 글자 자리입니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | [Create] 버튼 활성화 조건 | 필수 입력 완료 | 위 프레임 y 16 |
| 2 | SMTP 설정 여부에 따른 안내 문구 | SMTP 설정 완료 / 미설정 | 위 프레임 y 1066 |
| 3 | 아이디 유효성 체크 및 중복 체크 | [Check ID] 선택, ID 재입력 | 위 프레임 y 2181 |
| 4 | 비밀번호 유효성 체크 | 비밀번호 형식 오류 | 위 프레임 y 4027 |
| 5 | 이메일 형식이 올바르지 않은 경우 | Email 1자 이상 입력 후 형식 오류 | 위 프레임 y 4933 |
| 6 | 아이디 / 비밀번호 Tooltip | ID · Temporary Password 안내 아이콘 | 위 프레임 y 5887 |

- Case 1 — 1-1. 필수 입력 필드 입력 완료 시: `ID 유효성 검증 완료 및 Password 1자 이상 입력 시 (두 조건 필수)`. 빈 화면은 `Cancel | Create` 옆 `Disabled 상태`, 입력 화면은 ID seegene1234 + `This username is available.` · Password •••••••• · Name John Doe · Email user1234@seegene.com
- Case 2
  - 1-1. SMTP 설정 완료 시: `계정을 생성하면 임시 비밀번호가 자동으로 이메일로 전송된다는 안내 문구 노출` → `After creating an account, a temporary password will be automatically sent to email.`
  - 1-2. SMTP 미설정 시: `이 이메일 주소로 임시 비밀번호를 자동 전송하려면 SMTP 설정이 필요하다는 문구 노출` → `SMTP setup required to auto-send temporary passwords to this email.`
- Case 3
  - 3-1. [Check ID] 버튼 선택 시 : ID 입력 형식이 유효하지 않을 경우 — ID `see` → `Only 4-32 characters with lowercase letters, numbers, and symbols (_ , -) are allowed.`
  - 3-2. [Check ID] 버튼 선택 시 : ID 입력 형식이 유효하지 않을 경우 (원문 제목 그대로) — ID `seegene_1` → `This username is already taken.`
  - 3-3. ID 검증 완료 시 — ID `see` → `This username is available.`
  - 3-4. 검증이 완료된 ID 재 입력 시 — ID 입력 칸이 비워지고 커서(`ㅣ`)만 있음
- Case 4: Temporary Password •••••••• 아래 `Only 8-64 characters with English letters, numbers, and special characters (!@#$%^&*()_-+={}[]:;"'<>,.?/) are allowed.` (안내 문구 숨김)
- Case 5: `이메일은 필수 입력 필드가 아니기 때문에 이메일 입력 필드 내 1자 이상 작성할 경우 유효성 검증 진행`. Email `user1234seegene.com` 아래 `Please enter a valid email address.`
- Case 6: ID 툴팁 `ID rules` / `4–32 characters are allowed` / `Lowercase letters (a-z), numbers (0-9), and _, - are allowed` / `Case-insensitive (Uppercase will be auto-converted)`. Temporary Password 툴팁 `Password rules` / `8–64 characters are allowed` / `Letters (A-Z, a-z), numbers (0-9), and special characters are allowed` / `Case-sensitive`
