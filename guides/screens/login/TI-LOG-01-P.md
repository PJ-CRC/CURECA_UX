---
cid: TI-LOG-01-P
pair_cid: LI-LOG-01-P
tl_relation: 동일
title: Reset Initial Password
path: Login > New Password
type: Popup
version: 2.1.11
date: 2026-10-08
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1890-366934
figma_region: 2.1 2차
---
# TI-LOG-01-P Reset Initial Password

> 기존 화면(작업방 Login 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- IA 화면 이름은 "New Password"
- 관련 정책: POL-ACC-003, POL-ACC-004, POL-ACC-005, POL-ACC-006, POL-ACC-007
- 다른 프레임: [TI-LOG-01-P/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1890-367090)

## 기존 화면

### 화면 글자

- Reset Initial Password
- For your account security, please update your initial password.
- New Password | Please enter a valid password
- Confirm New Password | Repeat the password
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
- Placeholder : 8-64 characters: Letters, numbers, and special characters
- 정책
- 8 자 이상, 64 자 이하
- 허용 문자 : 영문 대문자(A-Z), 영문 소문자(a-z), 숫자(0-9),
- 특수문자 (! @ # $ % ^ & * ( ) _ - + = [ ] { } ; ' : " , . < > ? /)
- 대소문자 구분
- 각 문자 유형을 최소 1자 이상 포함
- 동작
- [Save] 버튼 클릭 시 유효성 검사 진행
- 비밀번호 정책 불일치 시 하단에 에러메시지 노출
- 예시 : TI-LOG-P/Case > Case 2

#### 1-2. Password 생성 조건 안내 툴팁(Tooltip)

- 공통 UX 참고 : COMM-5-o
- 표출 예시 : TI-LOG-P/Case > Case 3

#### 1-3. Confirm New Password 입력 영역

- 정의
- 새 비밀번호를 재입력하여 확인하는 필드
- Placeholder : Repeat the password
- 동작
- [Save] 버튼 클릭 시 유효성 검사 진행
- 1-2에 입력한 값과 일치하지 않을 경우 에러 메시지 노출
- 예시 : TI-LOG-P/Case > Case 3

#### 2. [Save] 버튼

- Default: 비활성화
- [새 비밀번호], [새 비밀번호 확인] 2개 필드 모두 최소 1자 이상
- 입력 시 버튼 활성화
- 동작
- 입력된 정보의 유효성 검증 후 비밀번호 변경 실행
- 단, 유효성 검증에 실패 할 경우 표출 항목 별 안내 문구 노출
- 유효성 검증 완료 후 로그인 화면으로 이동 : TI-LOG
- (변경한 비밀번호로 재로그인 진행)

#### 3. [Cancle] 버튼

- 클릭 시, 팝업이 닫힘

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 디스크립션의 "TI-LOG-P", "TI-LOG" | TI-LOG-01-P, TI-LOG-01 | `ia/ia-screens.csv` | 대기 |
| R02 | 문구 | Placeholder가 디스크립션 "8-64 characters: Letters, numbers, and special characters", 화면 "Please enter a valid password" | 하나로 통일 (LI-LOG-01-P 디스크립션은 화면과 같음) | 화면 글자 | 대기 |
| R03 | 정책 반영 | "각 문자 유형을 최소 1자 이상 포함"이 T-IOS에만 있음 (LI-LOG-01-P에는 없음) | POL-ACC-006으로 통일 (영문 대문자·소문자·숫자 각 1자 이상, 특수문자는 선택) | POL-ACC-006 | 대기 |
| R04 | 디스크립션 | 1-3 "1-2에 입력한 값과" (1-2는 툴팁) | 1-1에 입력한 값과 | 디스크립션 | 대기 |
| R05 | 디스크립션 | [Cancle] | [Cancel] | 오타 | 대기 |
| R06 | 정책 반영 | [Cancel]을 누르면 팝업만 닫힘 | 디스크립션에 넣음: 로그인 화면으로 돌아가고, 다음 로그인 때 이 Popup을 다시 보여 줌 | POL-ACC-003 규칙 5 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | | X 버튼 → Cancel 버튼으로 변경 | 정다예 | Figma 버전 메모 |
| 2.1.11 | 2026-10-08 | 워딩 수정 (언어셋 반영): Change Password → Save | 정다예 | Figma 버전 메모 |
