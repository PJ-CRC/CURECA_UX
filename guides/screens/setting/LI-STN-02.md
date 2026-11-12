---
cid: LI-STN-02
pair_cid: TI-STN-02
tl_relation: 기능 추가
title: System Setting
path: Setting > System Setting
type: Page
version: 2.1.03
date: 2026-08-21
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2978-152765
figma_region: 2.1 1차
---
# LI-STN-02 System Setting

> 기존 화면(작업방 Setting 페이지, 2.1 1차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: TI-STN-02에 더해 Export / Import Location이 있음
- Service Mode: View는 모든 Mode, 설정 변경은 Main Mode만 (`policy/service-mode-matrix.csv`)
- 관련 정책: POL-ACC-008, Export / Import Location·Log Management는 SYS 정책

- 취소선(Figma에서 제거된 항목): 4 Data Backup, 4-1 [Backup], 5 Restore from Backup, 5-1 [Restore]

## 기존 화면

### 화면 글자

- General
- Languge | English
- Session Timeout | On | Off | 분
- *Automatically locks the system after a period of inactivity.
- Export / Import Location | Path: \\192.168.0.100\data\csv
- *Please configure a network location for importing and exporting files. Saving to local drives (such as C: or D:) is not recommended.
- Save
- Log Management | Log Date Range | 2026-03-11 ~ 2026-03-17 | Export

### 디스크립션 (원문)

#### 0 ~ 2-1

- 원문은 TI-STN-02 0 ~ 2-1과 같음

#### 3. Export / Import Location

- 사용자가 Export / Import 파일이 저장되거나 불러와질 기본 경로(Location)를 설정할 수 있음
- 사용자는 직접 경로(Path)를 입력할 수 있으며, 경로 선택 버튼(3-2)을 통해 원하는 폴더를 선택하여 경로를 자동으로 입력할 수 있음
- 적용 방식: Save 이후 신규 작업부터 적용

#### 3-1. Path Text Field

- 경로를 직접 입력도 또는 폴더 경로 선택 기능을 통해 자동 입력 가능
- 입력 가능한 형식은 Windows 경로 형식을 따름 (예: D:\Backup\Config)

#### 3-2. [폴더 경로 선택] 버튼

- 버튼을 클릭하면 Windows 탐색기(Folder Browser Dialog) 실행
- 탐색기에서 선택 가능한 대상은 “폴더(Folder)” 기준으로 제한
- 폴더 선택 후 [확인] 버튼 클릭 시 Validation 체크 (본 Alert는 권장 안내 목적이며 저장을 강제 제한하지 않음)
- 로컬 드라이브 경로가 감지될 경우 Confirm_009 노출 (예, C:\, D:\ 기타 Local Disk 경로)
- 그 외 네트워크 경로일 경우, 팝업 없이 아래 입력 정책에 따라 입력됨
- 선택한 폴더 경로가 Path 입력 필드에 자동 입력됨. 기존 입력값이 있을 경우 선택한 경로로 변경됨
- [취소] 선택 시 기존 값은 유지된다.

#### 4 ~ 5-1. Data Backup, Restore from Backup

- (원문 있음. 버전 메모 v2.1.03에서 기능 제거)

#### 6 ~ 6-2. Log Management

- 원문은 TI-STN-02 6 ~ 6-1과 같음. 6-2 [Export]: L-IOS는 경로 저장 또는 USB 저장 선택 팝업 (Common UX COMM-5-j(4/4))

#### 7 ~ 7-1

- 원문은 TI-STN-02 7 ~ 7-1과 같음

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 0 "데이터 백업, 복구"와 4~5-1 설명이 남아 있음 | 3~5(또는 4~5)는 취소선으로 이미 제거됨. 0의 "데이터 백업, 복구" 문구만 정리 | Figma 취소선, 버전 메모 v2.1.03 | 대기 |
| R02 | 표기 | Languge, Cureca, Patial Running | Language, CURECA, Partial Running | 오타 | 대기 |
| R03 | 정책 반영 | Session Timeout 기본 On/Off, 적용 장비 상태 조건이 없음 | 기본 Off, 장비 통합 상태가 Ready·Not Initialized일 때만 적용 | POL-ACC-008 | 대기 |
| R04 | 정책 반영 | 계정 잠금 해제 시간 설정 항목 없음 | 설정 항목 두지 않음 (잠금 시간 5분 고정) | POL-ACC-007 | 제외 (2026-11-04, 바꿀 것 칸 참고) |
| R05 | 화면 글자 | 단위 "분" (한국어) | 영어 표기 | `old-rules/language-set.md` | 대기 |
| R08 | 정책 반영 | 1 Language "현재 기준, English만 제공" | 6개 언어(영어, 한국어, 포르투갈어, 스페인어, 이탈리아어, 프랑스어) 중 선택, 기본 English | POL-COM-004 | 제외 (2026-11-04, R10으로 대체) |
| R09 | 정책 반영 | 6-2 [Export] "전체 로그를 하나의 파일로 Packaging 하여 지정된 폴더 경로에 저장" | 디스크립션에는 고른 기간의 Log를 내려받는다고만 적음. 파일 형식·구성은 정하지 않음 (Service User Type이 장비 파악에 쓰는 자료, 개발에서 묶어 내보냄) | POL-SYS-004 규칙 2 | 대기 |
| R10 | 정책 반영 | 1 Language "현재 기준, English만 제공" | 디스크립션에 넣음: 7개 언어(영어, 한국어, 독일어, 포르투갈어, 스페인어, 이탈리아어, 프랑스어) 중 선택, 기본 English. 화면 예시도 Language 목록에 7개 언어 | POL-COM-004 (2026-11-04 7개 언어 정정), 짝 TI-STN-02-R10 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | Data Backup and Restore 기능 제거 | 서보경 | Figma 버전 메모 |
