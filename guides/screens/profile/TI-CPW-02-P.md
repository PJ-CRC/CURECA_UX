---
cid: TI-CPW-02-P
pair_cid: LI-CPW-02-P
tl_relation: 동일
title: Profile (Change Password)
path: Profile > Change Password
type: Popup
version: 2.1.03
date: 2026-08-21
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2398-19955
figma_region: 2.1 2차
---
# TI-CPW-02-P Profile (Change Password)

> 기존 화면(작업방 Profile / Information 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 관련 정책: POL-ACC-006, POL-ACC-009
- 다른 프레임: [TI-CPW-02-P/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3008-548094)

## 기존 화면

### 화면 글자

- Profile
- General | Change Password
- Current Password | Enter your current password
- New Password | Please enter a valid password
- Confirm New Password | Repeat the password
- Cancel | Save

### 디스크립션 (원문)

#### 0 ~ 1

- 원문은 TI-CPW-01-P 0 ~ 1과 같음

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

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 디스크립션 | 1-2 비밀번호 조건을 화면에 다시 적음 | 정책 ID로 참조 | 헌법 3조 | 대기 |
| 2 | 화면 정보 | 화면 이름 "LNB > Profile" | Profile (Change Password) | IA | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
