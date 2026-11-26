---
cid: TI-STN-05-02-P
pair_cid:
tl_relation: 단독
title: Account Created
path: Setting > Account Setting > Add User
type: Popup
version: 2.1.03
date: 2026.08.21
author: 정다예
client_mode: []
user_type: [Service, Admin]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-580928
---
# TI-STN-05-02-P Account Created

> 기존 화면(작업방 `Account Setting_asis` 페이지, Ver 2.1.03)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독
- 호출하는 화면: 없음 (닫힌 뒤 [TI-STN-05])
- 호출되는 곳: [TI-STN-05-01-P] 8 [Create]
- 관련 정책: POL-ACC-001, POL-ACC-002, POL-ACC-005, POL-ACC-006 / 임시 정책 PV-0002
- 버전 메모(프레임 오른쪽 위 `ver`): v2.1.03 update / 계정 비밀번호 자동 전송 팝업 추가
- 같은 이름의 프레임이 하나 더 있습니다: 임시 비밀번호 안내 메일 화면([3543:579680](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-579680), 패널 CID `TI-STN-05`, Ver 1.1, Date 2026.06.25, 디스크립션 `0` / 빈칸). 아래 케이스 절에 적었습니다.

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (바닥 화면은 TI-STN-05)
- Account Created Successfully (X)
- The user account has been successfully created, and the temporary password has been sent to the registered email address.
- OK

### 사용 컴포넌트

Description Number (3), Popup/Popup Middle Text (2), Interface/Close (1), Square (1)

### 디스크립션 (원문)

#### 0. 계정 생성 완료 팝업

- SMTP 설정 및 이메일 입력 여부에 따라 팝업 케이스 분기 노출

#### 1. 계정 생성 완료 팝업

- 노출 조건 (AND)
- SMTP 설정 및 연동 완료 상태
- Email 입력 및 검증 완료 상태
- 예외 분기 (다른 팝업 노출)
- SMTP 미연동 또는 Email 미입력 시
- SMTP 서버 오류로 인한 메일 전송 실패 시
- 참고 : TI-STN-05-02-P/Case
- 타이틀 및 상세 문구
- 타이틀 : Account Created Successfully
- 내용 : The user account has been successfully created, and the temporary password has been sent to the registered email address.

#### 2. [확인] 버튼

- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

#### 3. [X] 버튼

- 클릭 시, 팝업이 닫힌 후 기존 화면 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-STN-05-02-P/Case`([3543:580489](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-580489), 2252×1385)에 있습니다. 오른쪽 패널(CID `TI-STN-05-02-P/Case`, 작성자 정다예, Ver · Date `-`)에 디스크립션 1 · 2 · 2-1 · 2-2 · 3 · 4가 있습니다. 프레임 칸의 y는 케이스 제목 글자 자리입니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | 이메일 유효성 및 입력 여부에 따른 완료 팝업 Case | [Create] 후 SMTP · 이메일 상태 | 위 프레임 y 16 |
| - | (같은 이름 프레임) 임시 비밀번호 안내 메일 | 메일 수신 화면 | [3543:579680](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-579680) |

- Case 1 패널 디스크립션
  - 1 계정 생성 완료 안내 문구 팝업 / 타이틀 및 상세 문구 / - 타이틀 : Account Created / - 내용 : The new account has been successfully created. Please copy the generated password and deliver it to the user manually.
  - 2 임시 비밀번호 표시 필드 / 사용자가 직접 입력 또는 자동 생성하여 편집한 비밀번호 노출
  - 2-1 Copy Icon / 동작 / - 버튼 클릭 시, [3] 영역에 표출된 임시 비밀번호 문자열 전체를 사용자의 클립보드에 즉시 복사
  - 2-2 Password 전달 안내 문구 / 내용 : Once this window is closed, the temporary password cannot be displayed again.
  - 3 [OK] 버튼 / 선택 시 팝업 닫힌 후, TI-STN-05 화면 노출 / 생성된 계정은 Modified Date/Time가 가장 최신으로 / 리스트 내 최상단에 노출
  - 4 [X] 버튼 / 클릭 시, 팝업이 닫힌 후 기존 화면 노출
- 1-1. 계정 생성 및 임시 비밀번호 메일 전송이 성공한 경우: `이메일 정보가 일치하여 계정 생성과 임시 비밀번호 전송에 성공한 경우 노출 팝업 / SMTP 설정 완료 및 이메일 입력이 전제되어야 함` → Account Created Successfully / The user account has been successfully created, and the temporary password has been sent to the registered email address. / OK
- 1-2. 이메일이 입력되지 않아 메일 발송이 불가한 경우: `이메일이 입력되지 않거나 SMTP가 미설정된 경우 노출 팝업 / 계정 생성 성공 및 비밀번호 공유 필요 문구 노출` → Account Created / The new account has been successfully created. Please copy the generated password and deliver it to the user manually. / `alks7j5d3lf` (2-1 Copy) / 2-2 Once this window is closed, the temporary password cannot be displayed again. / OK
- 1-3. SMTP 서버 등의 이슈로 메일 전송에 실패한 경우: `이메일 전송 후 서버 다운 등 실시간 검증이 가능한 이슈로 메일 전송에 실패한 경우 노출 팝업 / 이메일 주소 오기입 등으로 인한 메일 반송 등, 실시간 검증이 불가능한 예외 케이스는 시스템 내 별도의 피드백을 제공하지 않음 / SMTP 설정 완료 및 이메일 입력이 전제되어야 함` → Account Created (Email Delivery Failed) / The user account has been successfully created, but the temporary password email could not be sent. / Please copy the password below and deliver it to the user manually. / `alks7j5d3lf` / Once this window is closed, the temporary password cannot be displayed again. / OK
- 임시 비밀번호 안내 메일 (3543:579680): External · Thu, Jun 25, 9:05 AM / T-IOS 로고 / temporary password guide / Hi, / A temporary password has been generated for your account. / ID seegene1234 / Temporary Password seegene1234@@ / Once you log in with your temporary password, please update your password for security purposes. / SIS 이용약관 | Copyright © Seegene All Rights Reserved. | 개인정보 처리 방침
