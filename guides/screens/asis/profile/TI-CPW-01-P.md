---
cid: TI-CPW-01-P
pair_cid: LI-CPW-01-P
tl_relation: 기능 추가
title: Profile (General)
path: LNB > Profile > General
type: Popup
version: 2.1.17
date: 2026.11.13
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-496407
---
# TI-CPW-01-P Profile (General)

> 기존 화면(작업방 `Profile_asis` 페이지, Ver 2.1.17)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS에만 1-4 Language(Dropdown) · 1-5 Event notifications(Radio Button)가 있음. 1-3 Email 입력 조건은 L(LI-CPW-01-P)에만 「필수 값 아님 (Null 허용) / 1자 이상 입력 시 유효성 검증」이 있음(T는 케이스 2 설명에만 있음)
- 호출하는 화면: [TI-CPW-02-P] Change Password (1 Tab), Confirm_007 (2 Cancel), Confirm_010 (3 Save), 이벤트 메시지 팝업 예시 [TI-EVT-02-P] (1-5)
- 호출되는 곳: LNB 내 Profile 영역 선택 (0)
- 관련 정책: POL-ACC-009, POL-EVT-003
- 버전 메모(프레임 오른쪽 위): V2.1.01 update / X 버튼 --> Cancel 버튼으로 변경 · v2.1.03 update / 이름 및 이메일 수정 기능 추가 · v2.1.11 update / Event 알림 수신 설정 기능 추가 · v2.1.17 update / Language 설정 기능 이관 - 기존 System Setting 내 Language 설정 기능을 Profile 팝업으로 이동

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- Profile
- 탭: General | Change Password
- ID — John Doe
- Name — John Doe
- Email — user1234@seegene.com
- Language — English (Dropdown)
- Event notifications — On | Off
- Cancel | Save

### 사용 컴포넌트

Description Number (7), Radio Button (2), Square (2), Popup/Popup Middle Text (1), Form/Dropdown Box (1)

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

#### 1-1. ID (Read-only)

- 최초 계정 생성 시 DB에 저장된 사용자 ID 정보를 그대로 노출
- 최초 생성 이후 변경이 불가하므로 비활성화 상태로 고정

#### 1-2. Name(Text Input)

- 공통 UX 참고 : COMM-5-n
- Default : 사용자가 최종으로 입력한 정보 그대로 노출
- 동작
- 선택시, 입력 필드 활성화
- 입력 조건
- 필수 값 아님 (Null 허용, 글자 수 및 포맷 제한 없음)

#### 1-3. Email(Text Input)

- 공통 UX 참고 : COMM-5-n
- Default : 사용자가 최종으로 입력한 정보 그대로 노출
- 동작
- 선택시, 입력 필드 활성화
- 수정 시 유효성 재검증 필요
- 유효성 검증 실패 시 안내 문구 노출
- 입력 조건
- 이메일 표준 포맷 준수 (abc@domain.com 형식)
- 유효성 메시지 : TI-CPW-01-P/Case 2

#### 1-4. Language(Dropdown)

- 공통 UX 참고 : COMM-5-f
- Default : English
- 드롭다운 리스트 항목
- Deutsch, English, Español, Français, Italiano, Português, 한국어
- 정렬기준
- 오름차순 (유니코드 정렬 결과와 같음)
- 설정 범위
- 현재 로그인 된 계정의 T-IOS 시스템에만 적용
- 동일 계정의 L-IOS 프로그램(L-IOS Client Mode별 PC)에는 적용되지 않으며, PC마다 따로 설정함
- 동작
- 변경 후 [Save] 버튼 선택 시, 즉시 적용

#### 1-5. Event notifications(Radio Button)

- 동작
- Default : ON 상태 활성화
- ON 또는 OFF 중 1개 권한만 단일 선택 가능
- ON 설정
- ㄴ Event 발생 시 이벤트 메시지 팝업 노출
- ㄴ 노출 팝업 예시 참고 : TI-EVT-02-P
- OFF 설정
- ㄴ 이벤트 메시지 팝업 미노출

#### 2. [Cancel] 버튼

- 클릭 시, 팝업 노출 : Confirm_007
- Leave 선택 시 이전 페이지 노출

#### 3. [Save] 버튼

- Default: 비활성화
- 기존 값 대비 변경 사항 존재 시 버튼 활성화
- 동작
- 클릭 시, 팝업 노출 : Confirm_010
- 단, 유효성 검증에 실패 할 경우 안내 문구 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-CPW-01-P/Case`([3543:496738](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-496738), 2252×1971)에 있습니다. 케이스마다 오른쪽 패널이 있고 화면 정보만 있습니다(CID `TI-CPW-01-P/Case`, 작성자 정다예, Ver · Date `-`, 화면 원문 `Proflie`, 디스크립션 번호 `0`). 프레임 칸의 y는 케이스 제목 글자 자리입니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | [Save] 버튼 활성화 조건 | 팝업 처음 열림 (변경 전) | 위 프레임 y 16 |
| 2 | 이메일 형식이 올바르지 않은 경우 | Email 1자 이상 입력 후 유효성 검증 실패 | 위 프레임 y 1006 |

- Case 1
  - 1-1 데이터 수정/변경 시 [Save] 버튼 활성화: General 탭(ID · Name · Email · Language English · Event notifications On | Off), `Cancel | Save` 옆 `Disabled 상태`
  - 1-2 3개 필드 모두 최소 1자 이상 텍스트 입력 시, [Save] 버튼 활성화: Change Password 모양(Current Password · New Password · Confirm New Password, Placeholder), `Cancel | Save` 옆 `Disabled 상태`
- Case 2
  - 설명: 이메일은 필수 입력 필드가 아니기 때문에 이메일 입력 필드 내 1자 이상 작성할 경우 유효성 검증 진행
  - 2-1 이메일 유효성 검증 실패 시 안내 문구 노출: Email `user1234seegene.com` 아래 `Please enter a valid email address.`
