---
cid: TI-STN-05-03-P
pair_cid:
tl_relation: 단독
title: User Details
path: Setting > Account Setting > User Details
type: Popup
version: 2.1.03
date: 2026-08-21
author: 정다예
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: [PV-0002]
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=568-57759
figma_region: 2.1 2차
---
# TI-STN-05-03-P User Details

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 같은 CID 프레임이 2개(읽기 모드 568:57759, 편집 모드로 보이는 568:57823)이며 읽기 모드 프레임을 옮겼습니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 관련 정책: POL-ACC-001, POL-ACC-002, POL-ACC-005, POL-ACC-006 / 임시 정책 PV-0002
- 다른 프레임: [두 번째 프레임](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=568-57823), [TI-STN-05-03-P/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2997-277841)

## 기존 화면

### 화면 글자

- User Details
- User Type | User | Admin
- ID | seegene1234
- Password | Passwords are encrypted for security
- Name | John Doe
- Email | user1234@seegene.com
- Edit

### 디스크립션 (원문)

#### 0. User Details 팝업

- 정의: T-IOS와 L-IOS의 통합 사용자 계정 상세 화면
- 노출 조건: Account Setting 내 List에서 하나의 User List 선택 시 노출

#### 1. User Details 팝업

- 타이틀 : User Details
- 동작
- Default: 모든 항목 비활성화 (읽기 모드)
- [Edit]버튼 선택 시 ID를 제외한 모든 항목 활성화 (편집 가능)
- 표출 항목
- User Type: User 생성 시 설정한 유형 정보
- User ID: User 생성 시 ID 필드에 입력한 정보
- Password: Placeholder : Passwords are encrypted for security
- Name: User 생성 시 Name 필드에 입력한 정보
- Email: User 생성 시 Email 필드에 입력한 정보

#### 2. [Edit] 버튼

- 클릭 시, ID를 제외한 모든 항목 활성화
- 참고 : TI-STN-05-03-P

#### 3. [X] 버튼

- 클릭 시, 팝업 닫힘 및 TI-STN-05 페이지 노출

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 정책 반영 | 편집 모드에서 Password를 다시 정했을 때의 동작이 없음 | 디스크립션에 넣음: 그 사용자는 다음 로그인 때 Reset Initial Password Popup으로 비밀번호를 바꿈, SMTP가 연동되어 있고 Email이 있으면 새 비밀번호를 메일로 보냄. Admin은 다른 Admin 계정도 수정 가능(PV-0002) | POL-ACC-003 규칙 6·7, PV-0002 | 대기 |
| 2 | 디스크립션 | 편집 모드 저장([Save]) 설명이 없음. 목록의 Modified Date/Time은 "팝업 내 [Save]" 시점 | 편집 모드 프레임 내용까지 옮겨 정리 | TI-STN-05 2-1 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
