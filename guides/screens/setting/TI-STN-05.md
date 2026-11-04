---
cid: TI-STN-05
pair_cid:
tl_relation: 단독
title: Account Setting
path: Setting > Account Setting
type: Page
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=568-57371
figma_region: 2.1 2차
---
# TI-STN-05 Account Setting

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. 여기서 만든 계정을 T-IOS와 L-IOS에서 함께 씀
- 관련 정책: POL-ACC-001, POL-ACC-002, POL-ACC-005, POL-ACC-006 / 임시 정책 PV-0002
- 호출하는 화면: Create New User (TI-STN-05-01-P), User Details (TI-STN-05-03-P)

## 기존 화면

### 화면 글자

- 검색: User ID, User Name, Email | User Type (All) | Search
- Items | Delete | Add User
- 목록 헤더: □ | User ID | User Type | User Name | Email | Registration Date | Last Login Date | Modified Date/Time
- 목록 예: User 1 | Admin | James Smith | john.doe@seegene.com | 2026-04-24 11:10:20 … User 10 | User | - | - | 2026-04-24 11:10:20

### 디스크립션 (원문)

#### 0. Account Setting 화면

- 정의
- T-IOS와 L-IOS의 사용자 계정을 관리하는 화면

#### 1. 검색 영역

- 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 : COMM-5-s

#### 1-1. User ID, User Name, Email(Text Input)

- 기능 : 사용자 ID, 사용자 이름, 이메일을 입력하여 데이터 조회
- 동작
- 하위 리스트 내 User ID, User Name, Email 컬럼 대상으로 입력
- 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
- 영문 입력 시 대소문자를 구분하지 않음

#### 1-2. User Type(Dropdown)

- 기능
- 사용자 유형을 단일 선택하여 데이터 조회
- 공통 UX 참고 : COMM-5-f(1/2)
- Default : All
- 드롭다운 리스트 항목
- All, Admin, User

#### 2. User 리스트

- 정의 : Admin이 생성한 모든 계정 (Admin, User 포함) 리스트
- 공통 UX 참고 : COMM-5-m
- 정렬
- Default : Modified Date/Time 기준 최신순(내림차순)
- Default 조건 동일 시, User ID 기준 오름차순
- 동작
- 특정 유저 행 클릭 시 계정 상세 팝업 노출 : TI-STN-05-02-P

#### 2-1. 리스트 표출 항목

- User ID: User 생성 시 ID 필드에 입력한 정보. 생성 시 중복 여부 체크 필요
- User Type: User 생성 시 설정한 유형 정보. 표출 항목 : Admin, User
- User Name: User 생성 시 Name 필드에 입력한 정보. Null 값일 경우 ‘-’로 노출
- Email: User 생성 시 Email 필드에 입력한 정보. Null 값일 경우 ‘-’로 노출
- Registration Date: 최초 계정 생성 일자 정보
- Last Login Date: 해당 계정이 L-IOS 또는 T-IOS에 마지막으로 로그인한 일자 정보
- Modified Date/Time: 계정을 최종으로 수정한 일시 정보. 팝업 내 [Save] 버튼 클릭 완료 시점

#### 3. [Delete] 버튼

- 정의 : User List를 단일 또는 다중 선택하여 삭제하는 기능
- 동작
- Default : Disabled 상태
- 리스트 내 체크박스에서 1개 이상의 항목이 선택되는 즉시 [Delete] 버튼이 Enabled 상태로 전환
- [Delete] 버튼 클릭 시 팝업 노출 : Confirm_015

#### 4. [Add User] 버튼

- 정의 : User의 계정을 추가하는 기능
- 동작
- 선택 시, 팝업 노출 : TI-STN-05-01-P

#### 5. 페이지네이션

- 공통 UX 참고 : COMM-5-i

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 디스크립션 | 2 "행 클릭 시 계정 상세 팝업 : TI-STN-05-02-P" | TI-STN-05-03-P (User Details). 05-02-P는 Account Created | `ia/ia-screens.csv` | 대기 |
| 2 | 정책 반영 | 목록 범위 "Admin이 생성한 모든 계정", User Type 필터 All/Admin/User. Service 계정이 목록에 나오는지, Service가 만든 계정은 어떻게 되는지 없음 | 임시 정책 PV-0002 반영 (Admin에게 Service 계정 숨김, Service 계정 최소 1개, 자기 계정 삭제 불가 Alert_047) | PV-0002, CA-0003 | 대기 |
| 3 | 정책 반영 | 삭제 제한 없음 (자기 계정, 로그인 중인 계정, 마지막 Admin 삭제) | 임시 정책 PV-0002 반영 (Admin에게 Service 계정 숨김, Service 계정 최소 1개, 자기 계정 삭제 불가 Alert_047) | PV-0002, CA-0003 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
