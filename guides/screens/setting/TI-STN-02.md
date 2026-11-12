---
cid: TI-STN-02
pair_cid: LI-STN-02
tl_relation: 기능 추가
title: System Setting
path: Setting > System Setting
type: Page
version: 2.1.03
date: 2026-08-21
author: 서보경
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2978-151967
figma_region: 2.1 1차
---
# TI-STN-02 System Setting

> 기존 화면(작업방 Setting 페이지, 2.1 1차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: L-IOS(LI-STN-02)에는 Export / Import Location이 남아 있음
- 관련 정책: POL-ACC-008, Log Management는 SYS 정책

- 취소선(Figma에서 제거된 항목): 3 Export / Import Location, 3-1, 3-2, 4 Data Backup, 4-1 [Backup], 5 Restore from Backup, 5-1 [Restore]

## 기존 화면

### 화면 글자

- General
- Languge | English
- Session Timeout | On | Off | 분
- *Automatically locks the system after a period of inactivity.
- Save
- Log Management
- Log Date Range | 2026-03-11 ~ 2026-03-17 | Export
- *Export system activity and error logs for the selected period, including device status, test and Event history, inventory usage, detailed error information, and login/logout activity.

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 어플리케이션의 시스템 설정 및 데이터 백업, 복구, 로그 추출을 할 수 있는 메뉴이다
- 진입 방법
- LNB의 ‘Setting > System Setting’을 통해 진입할 수 있다.

#### 1. Languge

- 어플리케이션의 언어를 변경하는 기능
- Default: English / 데이터: English
- 현재 기준, ‘English’만 제공

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

#### 3 ~ 5-1. Export / Import Location, Data Backup, Restore from Backup

- (원문 있음. 버전 메모 v2.1.03에서 기능 제거. 화면에는 없음)
- 5 원문: "Cureca 장비 구동 상태가 Running 및 Patial Running 일 경우에는 Restore 불가"

#### 6. Log Management

- 시스템 로그 및 오류 로그에 대한 내역을 Export할 수 있는 기능
- 시스템 로그: 시스템 운영 전반의 상태를 기록 (예: 로그인/로그아웃, 장비 상태 제어, 장비 상태 변화, 검사 진행, 검체 및 소모품 투입/배출, 인터페이스 시스템 간 통신, 이벤트 발생, 설정 변경 등)
- 오류 로그: 시스템 오류 발생 시 원인 분석을 위한 데이터 기록 (예: 오류 기본 정보, 오류 발생 직전 로그, Stack Trace, 시스템 환경 정보 등)
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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 0 "데이터 백업, 복구"와 3~5-1 설명이 남아 있음 | 3~5(또는 4~5)는 취소선으로 이미 제거됨. 0의 "데이터 백업, 복구" 문구만 정리 | Figma 취소선, 버전 메모 v2.1.03 | 대기 |
| R02 | 표기 | Languge, Seting, Cureca, Patial Running | Language, Setting, CURECA, Partial Running | 오타, `glossary/terms.csv` | 대기 |
| R03 | 정책 반영 | Session Timeout 기본 On/Off가 없음, Ready·Not Initialized일 때만 적용한다는 조건이 없음 | 기본 Off, 장비 통합 상태가 Ready·Not Initialized일 때만 적용 | POL-ACC-008 | 대기 |
| R04 | 문구 | "Automatically locks the system after a period of inactivity." (디스크립션은 자동 로그아웃) | 로그아웃 뜻으로 문구 정리 | 디스크립션 2 | 대기 |
| R05 | 정책 반영 | 계정 잠금 해제 시간 설정 항목이 화면에 없음 (Account Locked 화면은 "관리자가 설정한 제한 시간") | 설정 항목 두지 않음 (잠금 시간 5분 고정) | POL-ACC-007 | 제외 (2026-11-04, 바꿀 것 칸 참고) |
| R06 | 화면 글자 | 단위 "분" (한국어) | min 등 영어 표기 | `old-rules/language-set.md` | 대기 |
| R07 | 디스크립션 | 6-2 "L only ... USB 저장 팝업" (T-IOS 화면에 L-IOS 동작) | T-IOS 동작만 남김 | 디스크립션 | 대기 |
| R08 | 정책 반영 | 1 Language "현재 기준, English만 제공" | 6개 언어(영어, 한국어, 포르투갈어, 스페인어, 이탈리아어, 프랑스어) 중 선택, 기본 English | POL-COM-004 | 제외 (2026-11-04, R10으로 대체) |
| R09 | 정책 반영 | 6-2 [Export] "전체 로그를 하나의 파일로 Packaging 하여 지정된 폴더 경로에 저장" | 디스크립션에는 고른 기간의 Log를 내려받는다고만 적음. 파일 형식·구성은 정하지 않음 (Service User Type이 장비 파악에 쓰는 자료, 개발에서 묶어 내보냄) | POL-SYS-004 규칙 2 | 대기 |
| R10 | 정책 반영 | 1 Language "현재 기준, English만 제공" | 디스크립션에 넣음: 7개 언어(영어, 한국어, 독일어, 포르투갈어, 스페인어, 이탈리아어, 프랑스어) 중 선택, 기본 English. 화면 예시도 Language 목록에 7개 언어 | POL-COM-004 (2026-11-04 7개 언어 정정), 짝 LI-STN-02-R10 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | General Setting > Export / Import Location 항목 제거, Data Backup and Restore 기능 제거 | 서보경 | Figma 버전 메모 |
