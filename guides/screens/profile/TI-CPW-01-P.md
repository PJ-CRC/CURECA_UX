---
cid: TI-CPW-01-P
pair_cid: LI-CPW-01-P
tl_relation: 기능 추가
title: Profile (General)
path: Profile > General
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2546-452840
figma_region: 2.1 2차
---
# TI-CPW-01-P Profile (General)

> 기존 화면(작업방 Profile / Information 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: T-IOS에만 Event notifications(On/Off)가 있음
- 관련 정책: POL-ACC-009, POL-EVT-003
- 다른 프레임: [TI-CPW-01-P/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3008-548836)

## 기존 화면

### 화면 글자

- Profile
- General | Change Password
- ID | John Doe
- Name | John Doe
- Email | user1234@seegene.com
- Event notifications | On | Off
- Cancel | Save

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

#### 1-4. Event notifications(Radio Button)

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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 정책 반영 | Email 필수 여부가 없음. LI-CPW-01-P는 "필수 값 아님, 1자 이상 입력 시 검증" | T/L 같게 (ACC 정책) | LI-CPW-01-P | 대기 (확인 필요) |
| R02 | 화면 글자 | ID 칸 예시 값이 "John Doe" | ID 예시 값으로 (예: user1234) | ID 조건 | 대기 |
| R03 | 화면 정보 | 화면 이름 "LNB > Profile" | Profile (General) | IA | 대기 |
| R04 | 디스크립션 | 1-4 "1개 권한만 단일 선택" | 둘 중 하나만 선택 | 디스크립션 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | | X 버튼 → Cancel 버튼으로 변경 | 정다예 | Figma 버전 메모 |
| 2.1.11 | 2026-10-08 | Event 알림 수신 설정 기능 추가 | 정다예 | Figma 버전 메모 |
