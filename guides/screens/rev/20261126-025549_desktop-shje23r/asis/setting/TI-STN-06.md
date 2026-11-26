---
cid: TI-STN-06
pair_cid:
tl_relation: 단독
title: SMTP Setting
path: Setting > SMTP Setting
type: Page
version: 2.1.11
date: 2026.10.08
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-595093
---
# TI-STN-06 SMTP Setting

> 기존 화면(작업방 `SMTP Setting_asis` 페이지, Ver 2.1.11)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (디스크립션 0 `T-IOS 시스템 전용 메뉴`)
- 호출하는 화면: Confirm_010 (5 Save)
- 호출되는 곳: LNB > Setting > SMTP Setting. 계정 생성 · 수정 시 안내 메일 발송에 쓰임([TI-STN-05-01-P] 6-1, [TI-STN-05-02-P])

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | SMTP Setting | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Test Policy Setting | Test Protocol Setting | LIS Setting | System Setting | Account Setting | Account Setting | Information | Keira Knightley | Logout
- Use SMTP Feature | Enable | Disable
- SMTP Server | \\192.168.0.100\data\csv
- Port Number | 464
- SMTP Authentication
  - User ID and Password verified successfully.
  - Authentication Status | Enable | Disable
  - User ID | seegene1234
  - Password | •••••••• | Verify
- Security Method
  - Encryption | None | STARTTLS | SSL/TLS
- Save

### 사용 컴포넌트

Radio Button (7), 1 Depth (6), 2 Depth (6), Description Number (6), Form/Input Text Box (3), Square (2), Interface/Eye_Slash_Outlined (1), Arrow/Chevron_Up (1), Interface/Setting_Outlined (1), Frame (1)

### 디스크립션 (원문)

#### 0. SMTP Setting 화면

- 정의
- 계정 생성 및 정보 수정 시, 관련 안내 메일(임시 비밀번호 등)을
- 발송하기 위한 SMTP 서버 연동 설정 화면
- T-IOS 시스템 전용 메뉴

#### 1. Use SMTP Feature 사용 여부 설정 영역(Radio Button)

- 동작
- Default: Disable
- Enable 또는 Disable 중 단일 선택 가능

#### 2. Server 주소 및 Port 번호 영역(Text Input)

- 노출 항목
- SMTP Server
- Port Number
- 입력 조건 없음

#### 3. SMTP Authentication 설정 영역

- 노출 항목
- Authentication Status
- ㄴ Default: Disable
- ㄴ Enable 또는 Disable 중 단일 선택 가능
- User ID
- Password

#### 3-1. [Verify] 버튼

- 정의
- 사용자가 [3]에서 입력한 계정 정보 검증 버튼
- 동작
- [3] Authentication Status 항목이 Enable일 경우 활성화
- ㄴ 단, 상위 개념인 [1]이 Disable일 경우 하위 항목 설정과
- 무관하게 비활성화로 노출
- 버튼 선택 시 계정 일치 여부에 따른 안내 메시지 노출
- ㄴ 일치 : User ID and Password verified successfully.
- ㄴ 불일치 : Invalid User ID or Password. Please check and try again.
- ㄴ 참고 : TI-STN-06/Case1

#### 4. Security Method 설정 영역(Radio Button)

- 동작
- Default: None
- 노출 항목 중 단일 선택 가능
- 노출 항목
- None
- STARTTLS
- SSL/TLS

#### 5. [Save] 버튼

- 동작
- 최초 설정 포함하여 Use SMTP Feature 설정 값이 Enable인
- 상태에서 Setting 값 중 하나라도 변경 사항 존재 시 활성화
- SMTP 계정이 일치하지 않을 경우 비활성화
- ㄴ 참고 : TI-STN-06/Case1
- Use SMTP Feature 설정 값이 Disable인 경우 비활성화
- 선택 시 팝업 노출 : Confirm_010

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-STN-06/Case`([3543:595242](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-595242), 2252×2080)에 있습니다. 케이스마다 오른쪽 패널이 있고 화면 정보만 있습니다(CID `TI-STN-06/Case`, 작성자 정다예, Ver · Date `-`, 디스크립션 번호 `0`). 원본에 `Case 1.`이 두 번 있습니다(번호 원본 그대로). 프레임 칸의 y는 케이스 제목 글자 자리입니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | SMTP 계정이 일치하지 않을 경우 | [Verify] 결과 불일치 | 위 프레임 y 16 |
| 1 | SMTP 사용 여부가 Disable일 경우 | Use SMTP Feature Disable | 위 프레임 y 1056 |

- SMTP 계정이 일치하지 않을 경우: SMTP Authentication 아래 `Invalid User ID or Password. Please check and try again.`, `Save` 옆 `Disabled 상태`. GNB 시각 `Network Status | 2026-06-25 11:00`
- SMTP 사용 여부가 Disable일 경우: 맨 위 항목 이름이 `Use SMTP Settings`(기획 화면은 `Use SMTP Feature`). Password · Verify 옆 `Disabled 상태`, `Save` 옆 `Disabled 상태`
