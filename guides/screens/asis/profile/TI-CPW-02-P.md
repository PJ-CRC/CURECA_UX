---
cid: TI-CPW-02-P
pair_cid: LI-CPW-02-P
tl_relation: 동일
title: Profile (Change Password)
path: LNB > Profile > Change Password
type: Popup
version: 2.1.03
date: 2026.08.21
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-495389
---
# TI-CPW-02-P Profile (Change Password)

> 기존 화면(작업방 `Profile_asis` 페이지, Ver 2.1.03)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: LI-CPW-02-P와 화면 · 디스크립션이 같음(케이스 참고 줄의 CID만 다름)
- 호출하는 화면: [TI-CPW-01-P] General (1 Tab), Confirm_007 (2 Cancel), Confirm_010 (3 Save)
- 호출되는 곳: [TI-CPW-01-P] 1 Tab Change Password

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- Profile
- 탭: General | Change Password
- Current Password — Enter your current password
- New Password (안내 아이콘) — Please enter a valid password
- Confirm New Password — Repeat the password
- Cancel | Save

### 사용 컴포넌트

Description Number (7), Interface/Eye_Slash_Outlined (3), Square (2), Popup/Popup Middle Text (1), Interface/Info_Circle_Outlined (1)

### 디스크립션 (원문)

#### 0. Profile 팝업

- 정의
- 사용자의 기본 정보 (이름, 이메일) 수정 및 비밀번호 변경 팝업
- 노출 조건
- LNB 내 Profile 영역 선택 시 노출

#### 1. 정보 유형에 따른 그룹핑 영역(Tab)

- 정의
- 사용자 정보 유형에 따른 탭(Tab) 메뉴 구성
- 활성 탭 변경 시, 해당 단계의 하위 데이터 세트를 동기화하여 노출
- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- Tab 표출 항목
- General
- Change Password

#### 1-1. Current Password 입력 영역

- 정의
- 현재 사용 중인 비밀번호를 입력하는 필드
- Placeholder : Enter your current password
- 동작
- [Save] 버튼 클릭 시 유효성 검사 진행
- 입력값 불일치 시 하단에 에러메시지 노출
- 표출 예시 : TI-CPW-02-P/Case > Case 2

#### 1-2. New Password 입력 영역

- 정의
- 새로 변경할 비밀번호를 입력하는 필드
- Placeholder : Please enter a valid password
- 정책
- 8 자 이상, 64 자 이하
- 허용 문자 : 영문 대문자(A-Z), 영문 소문자(a-z), 숫자(0-9),
- 특수문자 (! @ # $ % ^ & * ( ) _ - + = [ ] { } ; ' : " , . < > ? /)
- 대소문자 구분
- 각 문자 유형을 최소 1자 이상 포함
- 동작
- [Save] 버튼 클릭 시 유효성 검사 진행
- 비밀번호 정책 불일치 시 하단에 에러메시지 노출
- 표출 예시 : TI-CPW-02-P/Case > Case 2

#### 1-3. Password 생성 조건 안내 툴팁(Tooltip)

- 공통 UX 참고 : COMM-5-o
- 표출 예시 : TI-CPW-02-P/Case > Case 3

#### 1-4. Confirm New Password 입력 영역

- 정의
- 새 비밀번호를 재입력하여 확인하는 필드
- Placeholder : Repeat the password
- 동작
- [Save] 버튼 클릭 시 유효성 검사 진행
- 1-2에 입력한 값과 일치하지 않을 경우 에러 메시지 노출
- 표출 예시 : TI-CPW-02-P/Case > Case 2

#### 2. [Cancel] 버튼

- 클릭 시, 팝업 노출 : Confirm_007
- Leave 선택 시 이전 페이지 노출

#### 3. [Save] 버튼

- Default: 비활성화
- [기존 비밀번호], [새 비밀번호], [새 비밀번호 확인] 3개 필드 모두 최소 1자 이상 입력 시 버튼 활성화
- 동작
- 클릭 시, 팝업 노출 : Confirm_010
- 단, 유효성 검증에 실패 할 경우 표출 항목 별 안내 문구 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-CPW-02-P/Case`([3543:496485](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-496485), 2252×2344)에 있습니다. 케이스마다 오른쪽 패널이 있고 화면 정보만 있습니다(CID `TI-CPW-02-P/Case`, 작성자 정다예, Ver · Date `-`, 화면 원문 Case 1 · 2 `Proflie` / Case 3 `비밀번호 Tooltip`, 디스크립션 번호 `0`). 프레임 칸의 y는 케이스 제목 글자 자리입니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | [Save] 버튼 활성화 조건 | 팝업 처음 열림 (변경 전) | 위 프레임 y 16 |
| 2 | 비밀번호 유효성 검증 문구 Case | [Save] 후 유효성 검사 실패 | 위 프레임 y 983 |
| 3 | 비밀번호 Tooltip | New Password 안내 아이콘 | 위 프레임 y 1981 |

- Case 1: TI-CPW-01-P/Case의 Case 1과 같음(1-1 General 탭 `Disabled 상태` / 1-2 3개 필드 모두 최소 1자 이상 텍스트 입력 시, [Save] 버튼 활성화 `Disabled 상태`)
- Case 2
  - 2-1 기존 비밀번호 불일치 시: Current Password 아래 `The current password you entered is incorrect.`
  - 2-2 새 비밀번호 유효성 검사 실패 시: New Password 아래 `Only 8-64 characters with English letters, numbers, and special characters (!@#$%^&*()_-+={}[]:;"'<>,.?/) are allowed.`
  - 2-3 새 비밀번호 불일치 시: Confirm New Password 아래 `Passwords do not match.`
- Case 3: New Password 툴팁 `Password rules` / `8–64 characters are allowed` / `Letters (A-Z, a-z), numbers (0-9), and special characters are allowed` / `Case-sensitive`
