---
cid: TI-STN-02
pair_cid: LI-STN-02
tl_relation: 기능 추가
title: System Setting
path: Setting > System Setting
type: Page
version: 2.1.17
date: 2026.11.13
author: 서보경
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-573493
---
# TI-STN-02 System Setting

> 기존 화면(작업방 `System Setting_asis` 페이지, Ver 2.1.17)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS에는 Language(1, 취소선) · Export / Import Location(3)이 없음. L-IOS(LI-STN-02)에만 1 Language · 3 Export / Import Location · 7-2 Confirm_032 · 7-3 Alert_049가 있음. 6-2 [Export]는 T 원문이 `L only, 클릭 시, 경로 저장 또는 USB 저장 선택하는 팝업 제공`과 윈도우 탐색기 호출을 함께 적음
- 호출하는 화면: Alert_016 (2 세션 종료), Confirm_016 (7-1 저장하지 않고 이동), Save Toast `Settings have been saved.` (7)
- 호출되는 곳: LNB > Setting > System Setting (User Type Service, Admin만)
- 버전 메모(프레임 오른쪽 위 `ver`): v2.1.17 update / Language 설정 기능 제거
- 원본 디스크립션 번호는 0 · 1 · 2 · 2-1 · 6 · 6-1 · 6-2 · 7 · 7-1입니다(3 ~ 5 없음).

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | System Setting
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- General
  - Session Timeout | On | Off | 60 분
  - *Automatically locks the system after a period of inactivity.
  - Save
- Log Management
  - Log Date Range | 2026-03-11 ~ 2026-03-17 | Export
  - *Export system activity and error logs for the selected period, including device status, test and Event history, inventory usage, detailed error information, and login/logout activity.

### 사용 컴포넌트

Description Number (6), Square (2), Radio Button (2), Form/Dropdown Box (1), File&Folder/Folder_Open_Outlined (1), Component 4 (1), Frame (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 어플리케이션의 시스템 설정 및 데이터 백업, 복구, 로그 추출을 할 수 있는 메뉴이다
- 진입 방법
- LNB의 ‘Setting > System Setting’을 통해 진입할 수 있다.
- User Type이 Service, Admin 만 진입할 수 있음

#### 1. ~~Languge~~

- ~~어플리케이션의 언어를 변경하는 기능~~
- ~~Default: English / 데이터: English~~
- ~~현재 기준, ‘English’만 제공~~

#### 2. Session Timeout

- 사용자의 비활성 상태가 일정 시간 이상 지속될 경우, 보안을 위해 자동으로 세션을 종료시키는 기능
- 관리자는 Session Timeout 시간을 설정하여 사용자의 로그인 유지 시간을 제어할 수 있으며, 설정된 시간이 초과되면 자동 로그아웃 처리
- 세션이 종료된 이후 사용자가 화면을 다시 조작하거나 접근을 시도할 경우, 세션 종료 안내 Alert를 표시하고 재로그인 페이지로 이동
- Alert_016 팝업 노출
- 적용 방식
- 이미 로그인 중인 사용자 세션 → 기존 Timeout 유지
- 설정 변경 이후 새롭게 로그인하거나 세션 생성된 사용자 → 신규 Timeout 적용

#### 2-1. 시간 설정

- Session Timeout 설정이 On일 경우, 5분 단위로 선택할 수 있음
- Default: 60분 / 데이터: 5, 10, 15 ~ 120(오름차순)
- Session Timeout설정이 Off로 되어 있을 경우, disabled 처리

#### 6. Log Management

- 시스템 로그 및 오류 로그에 대한 내역을 Export할 수 있는 기능
- 시스템 로그
- 시스템 운영 전반의 상태를 기록 (예: 로그인/로그아웃, 장비 상태 제어, 장비 상태 변화, 검사 진행, 검체 및 소모품 투입/배출, 인터페이스 시스템 간 통신, 이벤트 발생, 설정 변경 등)
- 오류 로그
- 시스템 오류 발생 시 원인 분석을 위한 데이터 기록 (예: 오류 기본 정보, 오류 발생 직전 로그, Stack Trace, 시스템 환경 정보 등)
- 자세한 내역은 SRS 참고 필요

#### 6-1. Log Date Range

- 1일 이상 기간으로 선택 할 수 있음
- 최대 30일 선택 가능
- 오늘 날짜까지 선택 가능하며 미래 날짜는 선택 불가

#### 6-2. [Export] 버튼

- L only, 클릭 시, 경로 저장 또는 USB 저장 선택하는 팝업 제공
- 자세한 내역은 Common UX 참고
- 클릭 시, 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음
- 전체 로그를 하나의 파일로 Packaging 하여 지정된 폴더 경로에 저장

#### 7. [Save] 버튼

- 설정 변경 후 Save 버튼을 클릭해야 최종적으로 설정이 반영
- 저장이 완료되면 성공 여부를 Toast Popup 메시지로 안내
- 문구: Settings have been saved.

#### 7-1. 저장되지 않은 변경사항 안내

- 수정 후 저장하지 않고 페이지 이동 또는 메뉴 변경 시, Confirm_016 팝업 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임이 없습니다. (같은 페이지의 `LI-STN-02/Case`는 L-IOS Language 저장 케이스입니다.)

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
