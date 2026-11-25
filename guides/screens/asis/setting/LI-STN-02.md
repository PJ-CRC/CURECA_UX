---
cid: LI-STN-02
pair_cid: TI-STN-02
tl_relation: 기능 추가
title: System Setting
path: Setting > System Setting
type: Page
version: 2.1.17
date: 2026.11.13
author: 서보경
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-573554
---
# LI-STN-02 System Setting

> 기존 화면(작업방 `System Setting_asis` 페이지, Ver 2.1.17)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS에만 1 Language(이 PC의 L-IOS 프로그램에만 적용) · 3 Export / Import Location · 7-2 Confirm_032 · 7-3 Alert_049가 있음. T-IOS(TI-STN-02)는 Language를 취소선으로 지움(v2.1.17, Profile 팝업으로 이관 — TI-CPW-01-P 1-4)
- 호출하는 화면: Alert_016 (2 세션 종료), Confirm_009 (3-2 로컬 드라이브 경로), Confirm_016 (7-1), Confirm_032 (7-2 재시작 여부), Alert_049 (7-3 저장 불가), Save Toast `Settings have been saved.` (7), 경로 저장 · USB 저장 선택 팝업 (6-2, Common UX COMM-5-j(4/4))
- 호출되는 곳: LNB > Setting > System Setting (User Type Service, Admin만)
- 관련 정책: POL-ACC-008, Export / Import Location·Log Management는 SYS 정책
- 버전 메모(프레임 오른쪽 위 `ver`, 케이스 프레임에도 같은 메모): v2.1.17 update / Language 정책 추가 및 flow 추가
- 원본 디스크립션 번호는 0 ~ 3-2 · 6 ~ 7-3입니다(4 · 5 없음).

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | System Setting
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- General
  - Languge | English (Dropdown)
  - Session Timeout | On | Off | 60 분
  - *Automatically locks the system after a period of inactivity.
  - Export / Import Location | Path: | \\192.168.0.100\data\csv (폴더 버튼)
  - *Please configure a network location for importing and exporting files. Saving to local drives (such as C: or D:) is not recommended.
  - Save
- Log Management
  - Log Date Range | 2026-03-11 ~ 2026-03-17 | Export
  - *Export system activity and error logs for the selected period, including device status, test and Event history, inventory usage, detailed error information, and login/logout activity.

### 사용 컴포넌트

Description Number (10), Square (3), Form/Dropdown Box (2), Radio Button (2), File&Folder/Folder_Open_Outlined (1), Form/Input Text Box (1), Component 4 (1), Frame (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 어플리케이션의 시스템 설정 및 데이터 백업, 복구, 로그 추출을 할 수 있는 메뉴이다
- 진입 방법
- LNB의 ‘Setting > System Setting’을 통해 진입할 수 있다.
- User Type이 Service, Admin 만 진입할 수 있음

#### 1. Languge

- 어플리케이션의 언어를 변경하는 기능
- Default: English / 데이터: Deutsch, English, Español, Français, Italiano, Português, 한국어
- 정렬기준: 오름차순 (유니코드 정렬 결과와 같음)
- ~~현재 기준, ‘English’만 제공~~
- 설정 범위: 이 PC에 설치된 L-IOS 프로그램에만 적용됨
- 같은 장비에 연결된 다른 PC의 L-IOS 프로그램(L-IOS Client Mode별 PC)에는 적용되지 않으며, PC마다 따로 설정함
- 저장 조건: General 영역의 다른 설정과 같이, CURECA Status가 Ready 또는 Not Initialized일 때만 [Save]로 저장할 수 있음 (7 참고)
- 적용 시점: [Save] 후 L-IOS 프로그램을 다시 시작해야 변경한 언어가 화면에 적용됨 (7-2)

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

#### 3. Export / Import Location

- 사용자가 Export / Import 파일이 저장되거나 불러와질 기본 경로(Location)를 설정할 수 있음
- 사용자는 직접 경로(Path)를 입력할 수 있으며, 경로 선택 버튼(3-2)을 통해 원하는 폴더를 선택하여 경로를 자동으로 입력할 수 있음
- 적용 방식
- Save 이후 신규 작업부터 적용

#### 3-1. Path Text Field

- 경로를 직접 입력도 또는 폴더 경로 선택 기능을 통해 자동 입력 가능
- 입력 가능한 형식은 Windows 경로 형식을 따름
- 예: D:\Backup\Config

#### 3-2. [폴더 경로 선택] 버튼

- 버튼을 클릭하면 Windows 탐색기(Folder Browser Dialog) 실행
- 탐색기에서 선택 가능한 대상은 “폴더(Folder)” 기준으로 제한
- 폴더 선택 후 [확인] 버튼 클릭 시:
- Validation 체크
- (본 Alert는 권장 안내 목적이며 저장을 강제 제한하지 않음)
- 로컬 드라이브 경로가 감지될 경우 Confirm_009 노출
- (예, C:\, D:\ 기타 Local Disk 경로)
- 그 외 네트워크 경로일 경우, 팝업 없이 아래 입력 정책에 따라 입력됨
- 선택한 폴더 경로가 Path 입력 필드에 자동 입력됨
- 기존 입력값이 있을 경우 선택한 경로로 변경됨
- [취소] 선택 시 기존 값은 유지된다.

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

- L-IOS 경우 클릭 시, 경로 저장 또는 USB 저장 선택하는 팝업 제공
- 자세한 내역은 Common UX-‘COMM-5-j(4/4)’ 참고
- T-IOS 경우 클릭 시, 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음
- 전체 로그를 하나의 파일로 Packaging 하여 지정된 폴더 경로에 저장

#### 7. [Save] 버튼

- 설정 변경 후 Save 버튼을 클릭해야 최종적으로 설정이 반영
- 저장이 완료되면 성공 여부를 Toast Popup 메시지로 안내
- 문구: Settings have been saved.
- Language를 변경하고 저장한 경우, Toast 노출 후 재시작 여부 Confirm_032 노출 (7-2)
- 저장 조건: CURECA Status가 Ready 또는 Not Initialized일 때만 저장할 수 있음. 그 외 상태(예: Running)에서 [Save]를 선택하면 Alert_049 노출 (7-3)
- General 영역의 설정(Language, Session Timeout, Export / Import Location)은 [Save]로 함께 저장되므로, Alert_049가 노출되면 General 영역의 변경 내용을 모두 저장하지 않음
- Language 외 설정만 변경한 경우에는 Toast만 노출(언어 변경하지 않았을 경우 시스템 재시작 팝업 미노출)

#### 7-1. 저장되지 않은 변경사항 안내

- 수정 후 저장하지 않고 페이지 이동 또는 메뉴 변경 시, Confirm_016 팝업 노출

#### 7-2. Confirm_032 (재시작 여부)

- Language를 변경하고 [Save]로 저장이 완료되면 Toast 노출 후 이어서 노출
- [Restart Now] 선택 시 → L-IOS 프로그램이 다시 시작되고 변경한 언어로 실행됨
- [Later] 선택 시 → 팝업 닫힘, 지금 언어로 계속 사용. 다음에 L-IOS 프로그램을 실행할 때 변경한 언어 적용

#### 7-3. Alert_049 (저장 불가)

- CURECA Status가 Ready 또는 Not Initialized가 아닐 때(예: Running) [Save]를 선택하면 노출
- [OK] 선택 시 → 팝업 닫힘, General 영역의 변경 내용을 모두 저장하지 않고 화면 유지

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `LI-STN-02/Case`([3543:574160](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-574160), 1920×1124, 기획 프레임 오른쪽)에 있습니다. 오른쪽 패널(화면 정보 · 디스크립션)은 없습니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | General 설정 변경 후 [Save] 선택 (1-1. CURECA Status가 Ready 또는 Not Initialized일 때 (Language 변경) / 1-2. CURECA Status가 Ready 또는 Not Initialized가 아닐 때 (예: Running)) | General 설정 변경 후 [Save] | 위 프레임 y 16 |

- 1-1 (y 135)
  - 설명: `Language를 바꾸고 [Save]를 선택하면 저장 완료 Toast가 노출된 뒤, 이어서 재시작 여부 Confirm_032가 노출됨`
  - 흐름: Language Deutsch 선택 → Save(7) → Toast `Settings have been saved.` → Confirm_032(7-2) `Restart to apply the language?` / `The new language will be applied after L-IOS restarts. You can restart now or later.` / [Later] | [Restart Now]
  - 순서 글: `1. Language에서 다른 언어 선택 (예: Deutsch) / 2. [Save] 선택 / 3. 저장 완료 Toast 노출 (Settings have been saved.) / 4. 재시작 여부 Confirm_032 노출`
- 1-2 (y 693)
  - 설명: `General 영역의 설정을 바꾸고 [Save]를 선택하면 Alert_049가 노출되고, 변경 내용은 모두 저장되지 않음`
  - Alert_049(7-3): `Settings cannot be saved now.` / `Settings can be saved only when CURECA Status is Ready or Not Initialized.` / [OK]
