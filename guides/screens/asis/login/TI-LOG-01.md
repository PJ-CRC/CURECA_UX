---
cid: TI-LOG-01
pair_cid: LI-LOG-01
tl_relation: 기능 추가
title: Sign in
path: Sign in
type: Page
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3538-12055
---
# TI-LOG-01 Sign in

> 기존 화면(작업방 `Login_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 5번이 T-IOS는 ~~[Exit] 버튼~~(제거됨), L-IOS는 [Shut Down] 버튼. Figma 프레임 이름 · 패널 CID는 `TI-LOG`(IA CID `TI-LOG-01`)
- 호출하는 화면: [TI-LOG-P] 초기 비밀번호 재설정 (4 [Sign In] → 원문 표기 그대로)
- 호출되는 곳: (원문에 없음)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- T-IOS
- ID
- Please enter your ID
- Password
- Please enter your password
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

#### 5. ~~[Exit] 버튼~~

- ~~선택 시, 프로그램 종료~~

#### 6. Copyright 정보

- 로그인 페이지에서만 노출
- 표출 텍스트 : © Seegene Inc. All rights reserved.

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | 아이디/비밀번호 오류 시 | ID 및 PW 입력값이 유효하지 않을 경우 (노란 띠: 1-1. 아이디/비밀번호 오류 시 에러 메시지 표시) | [TI-LOG/Case](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3538-12003) |

- 케이스 패널 1 (원문)
  - ID 및 PW 입력값이 유효하지 않을 경우
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
- 케이스 화면 글자: T-IOS | Invalid ID or password. (1/10 attempts) | ID | User123 | Password | •••••••• | Sign In
