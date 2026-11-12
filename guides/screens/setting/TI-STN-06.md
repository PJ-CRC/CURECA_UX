---
cid: TI-STN-06
pair_cid:
tl_relation: 단독
title: SMTP Setting
path: Setting > SMTP Setting
type: Page
version: 2.1.11
date: 2026-10-08
author: 정다예
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=502-45075
figma_region: 2.1 2차
---
# TI-STN-06 SMTP Setting

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴
- 관련 정책: POL-SYS-003, POL-ACC-002 (임시 비밀번호 메일)
- 다른 프레임: [TI-STN-06/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=502-45213)

## 기존 화면

### 화면 글자

- Use SMTP Feature | Enable | Disable
- SMTP Server | \\192.168.0.100\data\csv
- Port Number
- SMTP Authentication: Authentication Status | Enable | Disable, User ID | seegene1234, Password | ••••••••, Verify
- User ID and Password verified successfully.
- Security Method: Encryption | None | STARTTLS | SSL/TLS
- Save

### 디스크립션 (원문)

#### 0. SMTP Setting 화면

- 정의: 계정 생성 및 정보 수정 시, 관련 안내 메일(임시 비밀번호 등)을 발송하기 위한 SMTP 서버 연동 설정 화면
- T-IOS 시스템 전용 메뉴

#### 1. Use SMTP Feature 사용 여부 설정 영역(Radio Button)

- Default: Disable
- Enable 또는 Disable 중 단일 선택 가능

#### 2. Server 주소 및 Port 번호 영역(Text Input)

- 노출 항목: SMTP Server, Port Number
- 입력 조건 없음

#### 3. SMTP Authentication 설정 영역

- Authentication Status: Default: Disable. Enable 또는 Disable 중 단일 선택 가능
- User ID
- Password

#### 3-1. [Verify] 버튼

- 정의: 사용자가 [3]에서 입력한 계정 정보 검증 버튼
- 동작: [3] Authentication Status 항목이 Enable일 경우 활성화. 단, 상위 개념인 [1]이 Disable일 경우 하위 항목 설정과 무관하게 비활성화로 노출
- 버튼 선택 시 계정 일치 여부에 따른 안내 메시지 노출
- 일치 : User ID and Password verified successfully.
- 불일치 : Invalid User ID or Password. Please check and try again.
- 참고 : TI-STN-06/Case1

#### 4. Security Method 설정 영역(Radio Button)

- Default: None
- 노출 항목 중 단일 선택 가능: None, STARTTLS, SSL/TLS

#### 5. [Save] 버튼

- 최초 설정 포함하여 Use SMTP Feature 설정 값이 Enable인 상태에서 Setting 값 중 하나라도 변경 사항 존재 시 활성화
- SMTP 계정이 일치하지 않을 경우 비활성화 (참고 : TI-STN-06/Case1)
- Use SMTP Feature 설정 값이 Disable인 경우 비활성화
- 선택 시 팝업 노출 : Confirm_010

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 글자 | SMTP Server 예시 값이 파일 경로("\\192.168.0.100\data\csv") | 서버 주소 예시로 (예: smtp.example.com) | 화면 | 대기 |
| R02 | 디스크립션 | 5 Use SMTP Feature를 Enable에서 Disable로 바꿔 저장하는 경우 [Save]가 비활성화되어 끌 수 없음 | 팀 논의 후 정함 | PD-0002 | 대기 (팀 논의) |
| R03 | 디스크립션 | 2 "입력 조건 없음" (Port Number 형식) | 숫자만 등 조건 확인 | 헌법 8조 | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.11 | 2026-10-08 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
