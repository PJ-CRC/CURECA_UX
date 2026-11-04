---
cid: TI-STN-05-01-P
pair_cid:
tl_relation: 단독
title: Create New User
path: Setting > Account Setting > Create New User
type: Popup
version: 2.1.03
date: 2026-08-21
author: 정다예
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=568-57665
figma_region: 2.1 2차
---
# TI-STN-05-01-P Create New User

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 관련 정책: POL-ACC-001, POL-ACC-002, POL-ACC-005, POL-ACC-006 / 임시 정책 PV-0002
- 다른 프레임: [TI-STN-05-01-P/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=568-58021) (유효성 메시지, SMTP 분기)

## 기존 화면

### 화면 글자

- Create New User
- Enter details to create a new user account.
- User Type | User | Admin
- ID * | Please enter a valid ID | Check ID
- Temporary Password * | Generate | Copy | Please enter a valid password
- Enter a password manually or click the generate button.
- Name | Please enter full name
- Email | Please enter a valid email address
- After creating an account, a temporary password will be automatically sent to email.
- Cancel | Create

### 디스크립션 (원문)

#### 0. Create New User 팝업

- 정의: T-IOS와 L-IOS의 통합 사용자 계정 추가 화면

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
- 이미 유효성 검증 및 중복 체크를 통과하여 완료된 상태이더라도, 사용자가 해당 인풋 박스를 다시 클릭하여 수정하려고 할 경우 기존 입력 값을 초기화 처리
- 입력 조건
- 최소 글자 수: 4자
- 영문 소문자, 숫자, 특수문자(_ -) 포함 4자 이상
- 대문자 입력 시 소문자로 자동 변환

#### 3-1. ID 생성 조건 안내 툴팁(Tooltip)

- 공통 UX 참고 : COMM-5-o
- 표출 예시 : TI-STN-05-01-P/Case > Case 3

#### 3-2. [Check ID] 버튼

- 정의: 아이디 유효성 검증 및 중복 체크 기능
- 동작: 유효성 검증 및 중복 체크 실패 시 안내 문구 노출
- 표출 문구 (TI-STN-05-01-P/Case > Case 1)
- ID 입력 형식이 유효하지 않을 경우 : Only 4-32 characters with lowercase letters, numbers, and symbols (_ , -) are allowed.
- 등록된(이미 존재하는) ID인 경우 : This username is already taken.
- 아이디 유효성 검증을 하지 않은 상태로 [Create] 버튼 선택 시 : Please check ID availability.
- 아이디 유효성 검증을 완료한 경우 : This username is available.

#### 4. Temporary Password(Text Input)

- 공통 UX 참고 : COMM-5-n
- Placeholder : Please enter a valid password
- 동작: 선택시, 입력 필드 활성화. 유효성 검증 실패 시 안내 문구 노출
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

- 정의: 사용자가 비밀번호를 직접 입력하지 않고도, 시스템이 제공하는 임시/난수 비밀번호를 자동으로 생성해 주는 기능
- 동작: [Generate] 버튼 클릭 시, Password 입력 필드 내에 조건에 맞는 난수 비밀번호가 자동으로 생성되어 입력. 기존에 Password 필드에 입력되어 있던 텍스트가 있다면 새로운 난수로 덮어쓰기 처리함.
- 난수 비밀번호 생성 조건
- 고정 글자 : 8자
- 영문 대문자 (A-Z) : 최소 1자 이상 필수 포함
- 영문 소문자 (a-z) : 최소 1자 이상 필수 포함
- 숫자 (0-9) : 최소 1자 이상 필수 포함

#### 4-3. [Copy] 버튼

- 정의: 사용자가 직접 입력했거나 [Generate] 버튼을 통해 자동 생성된 Password 필드의 비밀번호를 클립보드에 복사하는 편의 기능
- 동작: [Copy] 버튼 클릭 시, 해당 시점에 Password 입력 필드에 입력되어 있는 텍스트 문자열 전체를 사용자 PC/장치의 클립보드로 즉시 복사

#### 4-4. Password 자동 생성 안내 문구

- Default : 화면 진입 시 인풋 박스 하단에 기본 노출
- 미노출(숨김)조건: 사용자가 비밀번호를 입력한 후 유효성 검증에 실패하여 에러 메시지가 출력되는 시점에는 본 안내 문구를 화면에서 일시적으로 숨김 처리 (참고 : TI-STN-05-01-P/Case > Case 4)
- 내용 : Enter a password manually or click the generate button.

#### 5. Name(Text Input)

- 공통 UX 참고 : COMM-5-n
- Placeholder : Please enter full name
- 입력 조건 : 필수 값 아님 (Null 허용, 글자 수 및 포맷 제한 없음)

#### 6. Email(Text Input)

- 공통 UX 참고 : COMM-5-n
- Placeholder : Please enter a valid email address
- 동작: 1자리 이상 입력 시 유효성 검증 필요. 유효성 검증 실패 시 안내 문구 노출
- 입력 조건 : 이메일 표준 포맷 준수 (abc@domain.com 형식)
- 유효성 메시지 : TI-STN-05-01-P/Case > Case 5

#### 6-1. 비밀번호 자동 전송 안내 문구

- Default : 화면 진입 시 인풋 박스 하단에 기본 노출
- 미노출(숨김)조건: 이메일 유효성 검증에 실패하여 에러 메시지가 출력되는 시점에는 일시적으로 숨김 (참고 : TI-STN-05-01-P/Case > Case 5)
- 내용: SMTP 설정 여부에 따라 다른 문구 노출 (참고 : TI-STN-05-01-P/Case > Case 2)

#### 7. [Cancel] 버튼

- 클릭 시, 팝업 노출 : Confirm_007
- Leave 선택 시 TI-STN-05 페이지 노출

#### 8. [Create] 버튼

- Default : 비활성화
- 활성화 조건: 아이디 유효성 및 중복 체크가 완료된 상태에서 비밀번호가 1자리 이상 입력된 경우
- 클릭 시, 계정 생성 완료 팝업 노출
- SMTP 설정 및 이메일 입력 여부에 따라 팝업 케이스 분기 노출 (참고 : TI-STN-05-02-P)

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 정책 반영 | [Generate] 난수 비밀번호는 대문자·소문자·숫자만 필수, 특수문자 없음. 4 비밀번호 조건은 "각 문자 유형 최소 1자" | 지금 [Generate] 조건이 맞음 (특수문자는 필수 아님). 디스크립션은 POL-ACC-006 참조 | POL-ACC-006 | 대기 |
| 2 | 디스크립션 | 3 ID 입력 조건에 최대 길이(32자)가 없음. 오류 문구에는 "4-32 characters" | 정책 ID로 참조 (4~32자) | 8월 정책서 아이디 조건 | 대기 |
| 3 | 디스크립션 | 3 Placeholder "Please enter your ID", 화면 "Please enter a valid ID" | 하나로 통일 | 화면 글자 | 대기 |
| 4 | 문구 | "symbols (_ , -)" | symbols (_, -) | 표기 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
