---
cid: TI-STN-05
pair_cid:
tl_relation: 단독
title: Account Setting
path: Setting > Account Setting
type: Page
version: 2.1.03
date: 2026.08.21
author: 정다예
client_mode: []
user_type: [Service, Admin]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-579110
---
# TI-STN-05 Account Setting

> 기존 화면(작업방 `Account Setting_asis` 페이지, Ver 2.1.03)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (T-IOS와 L-IOS의 사용자 계정을 함께 관리)
- 호출하는 화면: [TI-STN-05-02-P] 계정 상세 팝업 (2 행 클릭, 원문 그대로. 같은 페이지의 User Details 프레임은 TI-STN-05-03-P), Confirm_015 (3 Delete), [TI-STN-05-01-P] Create New User (4 Add User)
- 호출되는 곳: LNB > Setting > Account Setting
- 관련 정책: POL-ACC-001, POL-ACC-002, POL-ACC-005, POL-ACC-006 / 임시 정책 PV-0002
- 버전 메모(프레임 오른쪽 위 `ver`): v2.1.03 update / 이름, 이메일 정보 추가
- 기획 프레임 밖에는 섹션 `이메일 연동 Flow`([3543:578983](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-578983))가 있습니다(옮기지 않음).

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Account Setting | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Policy Setting | Protocol Setting | LIS Setting | System Setting | Account Setting | Information | Manual | Keira Knightley
- 검색: `User ID, User Name, Email` | User Type All | Search
- Items 638 | Delete | Add User
- 목록: □ | User ID | User Type | User Name | Email | Registration Date | Last Login Date | Modified Date/Time
  - User 1 | Admin | James Smith | john.doe@seegene.com | 2026-03-05 | 2026-03-07 | 2026-04-24 11:10:20
  - User 2 | Admin | Michael Brown | david.jones@seegene.com | (같은 날짜)
  - User 3 | Admin | Sarah Williams | -
  - User 4 | Admin | David Jones | -
  - User 5 | User | - | emily.j@seegene.com
  - User 6 | User | - | sarah.williams@seegene.com
  - User 7 | User | - | jessica.m@seegene.com
  - User 8 | User | Jessica Miller | daniel.davis@seegene.com
  - User 9 | User | - | -
  - User 10 | User | - | -
- 페이지: 1 ~ 10

### 사용 컴포넌트

Table (11), Form/CheckBox (10), Arrow/Chevron_Right (10), Title (8), Description Number (8), 1 Depth (6), 2 Depth (5), Square (4), Form/Input Text Box (1), Dropdown Outlined (1), Page number (1), Arrow/Chevron_Up (1), Interface/Setting_Outlined (1), Layout/Align_Right_05_Solid (1), Frame (1) (표 칸 Frame 인스턴스 6종 각 10개 제외)

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

- User ID
- User 생성 시 ID 필드에 입력한 정보
- 생성 시 중복 여부 체크 필요
- User Type
- User 생성 시 설정한 유형 정보
- 표출 항목 : Admin, User
- User Name
- User 생성 시 Name 필드에 입력한 정보
- Null 값일 경우 ‘-’로 노출
- Email
- User 생성 시 Email 필드에 입력한 정보
- Null 값일 경우 ‘-’로 노출
- Registration Date
- 최초 계정 생성 일자 정보
- Last Login Date
- 해당 계정이 L-IOS 또는 T-IOS에 마지막으로 로그인한 일자 정보
- Modified Date/Time
- 계정을 최종으로 수정한 일시 정보
- 팝업 내 [Save] 버튼 클릭 완료 시점

#### 3. [Delete] 버튼

- 정의 : User List를 단일 또는 다중 선택하여 삭제하는 기능
- 동작
- Default : Disabled 상태
- 리스트 내 체크박스에서 1개 이상의 항목이 선택되는 즉시
  - [Delete] 버튼이 Enabled 상태로 전환
- [Delete] 버튼 클릭 시 팝업 노출 : Confirm_015

#### 4. [Add User] 버튼

- 정의 : User의 계정을 추가하는 기능
- 동작
- 선택 시, 팝업 노출 : TI-STN-05-01-P

#### 5. 페이지네이션

- 공통 UX 참고 : COMM-5-i

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

이 화면만의 케이스 프레임은 없습니다.

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
