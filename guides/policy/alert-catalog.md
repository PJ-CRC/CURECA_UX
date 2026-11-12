# 알럿·안내 카탈로그

> 상태: 초안 v0.3 (2026-11-02). 출처: 알럿 관리 페이지 [2-1. CURECA 기획팀 공유용 Part.2 > Alert / Confirm](https://www.figma.com/design/YJGJKb3YUu0iwGdMq0myjS/2-1.-CURECA_%EA%B8%B0%ED%9A%8D%ED%8C%80-%EA%B3%B5%EC%9C%A0%EC%9A%A9-Part.2-?node-id=317-95954) (Revision V2.1.14, 2026-10-30). 데이터: [alert-catalog.csv](alert-catalog.csv)

사용자가 실수할 수 있는 지점에 정책에 정의된 안내와 알럿이 있는지 점검하는 기준 자료입니다(헌법 8조). 문구의 원본은 알럿 관리 페이지이며, 이 카탈로그는 그 내용을 옮기고 작업방 화면과 맞춰 본 결과입니다.

> 알럿 체계 재정리 예정 (`background/todo.md` 작업 9, 2026-11-02): 전체 알럿 케이스를 모아 공통 케이스로 묶고 빠진 알럿을 추가함. 그 전까지 화면 MD의 알럿 정보는 지우지 않고 남기며, 이 카탈로그의 "삭제 (관리 페이지 반영 필요)", "추가 (관리 페이지 반영 필요)" 표시도 그 작업에서 함께 다시 봄.

> 알럿 체계 분리 (2026-11-03 결정): Material Setup은 나중에 별도 프로그램으로 쓰일 수 있어 알럿을 일반 메뉴와 나눔. Material Setup 알럿은 MS_Alert_###, MS_Confirm_### 체계로 [alert-catalog-ms.csv](alert-catalog-ms.csv)에 두고, 이 카탈로그는 일반 메뉴만 다룸. 담당자 정책서 MD의 예전 ID(Alert_027·035~047, Confirm_006·026~028)는 이 카탈로그의 같은 번호와 겹치지만, Material Setup이 새 체계를 쓰므로 충돌하지 않음. 이 카탈로그에서 Material Setup 화면(LI-TSS-*)을 쓰는 항목은 작업 9에서 MS 체계로 옮김.

## 1. 구성

| 구분 | ID | 사용 | 삭제 (취소선) |
| --- | --- | --- | --- |
| Alert | 44개 (Alert_001 ~ 046) | 43 | Alert_003 |
| Confirm | 29개 (Confirm_001 ~ 030) | 26 | Confirm_004, 005, 017 |

- 한 ID에 발생 조건이 여러 개인 경우가 있어 csv는 88행입니다 (예: Alert_006은 Sample, Socket, Tray, Consumable, Reagent 중복 스캔 5가지).
- 등급: Error 40행, Warning 26행, Progress 13행, Done 9행
- 관리 페이지에는 예전 버전 섹션(Alert ~038, Confirm ~025)도 남아 있습니다. 최신 섹션을 기준으로 옮겼습니다.

## 2. 칸

| 칸 | 내용 |
| --- | --- |
| ID, 종류 | `Alert_###`, `Confirm_###` / Alert, Confirm |
| 등급 | Error, Warning, Done, Progress (관리 페이지 표기) |
| 사용 여부 | 사용 / 삭제 (관리 페이지에서 취소선) |
| 발생 조건 | 관리 페이지의 케이스 설명 |
| 제목, 부제 | Main title, Sub title (영어 문구) |
| Primary 버튼, Secondary 버튼 | 버튼 이름 |
| 버튼 동작 | 버튼을 눌렀을 때 |
| 사용 화면 (CID) | 이 ID를 부르는 화면의 CID를 쉼표(,)로 구분. 작업방 메뉴 12개와 Common UX 전체를 찾아 모음. CID가 없는 프레임에서만 부르면 괄호로 적음 |
| 사용 메뉴 (작업방 페이지) | 이 ID를 부르는 작업방 페이지 |
| 확인할 점 | 관리 페이지와 화면이 다르거나 관리 페이지 안에서 맞지 않는 곳 |

## 3. 관리 페이지와 화면이 다른 곳

| # | 내용 | ID |
| --- | --- | --- |
| 1 | 관리 페이지에서 삭제됐는데 화면이 아직 부름 | Alert_003 (Event History) |
| 2 | 화면 안에 적힌 문구가 관리 페이지와 다름 | Confirm_008 (Door Control 화면: "Do you want to continue? Finishing current task, then pausing…", 관리 페이지: "Unlock the door?"), Confirm_023 (Material Setup 화면: "Do you want to confirm this action?", 관리 페이지: "Proceed without saving unapplied module settings?") |
| 3 | 관리 페이지에는 있지만 작업방 화면에서 부르지 않음 (사용 화면 "없음") | Alert_005, 017, 018, 019, 030, 045, 046 (삭제된 Alert_002, Confirm_004, 005, 017 제외). 화면 디스크립션에 ID를 적지 않았을 가능성이 있음 |
| 4 | 빈 번호 | Alert_043, 044 (Revision에는 "Alert_039~046 추가"), Confirm_027 |
| 5 | CID가 없는 프레임에서만 부름 | Alert_021, 022, 023, Confirm_013, 014 (Dashboard "구동 프로세스" 프레임), Alert_003 (Event History "Popup" 프레임) |

## 4. 관리 페이지 안에서 맞지 않는 곳

| # | 내용 | ID |
| --- | --- | --- |
| 1 | 버튼 이름과 동작 설명의 버튼이 다름 | Confirm_003 (OK / "Confirm 선택 시"), Confirm_008 (OK·Cancel / "Leave·Close 선택 시"), Confirm_011, 012 (OK / "Continue 선택 시") |
| 2 | Revision V2.1.05에서 제거한 Reset 케이스가 남아 있음 | Alert_005 |
| 3 | 모드 이름이 용어집과 다름 ("Main, Console, Material Setup 모드") | Alert_030 (Service Mode: Main Mode, Console Mode, TSS Mode) |
| 4 | 영어 문법 | Alert_006 "This is a already scanned …", Alert_005 "The delete is complete.", Alert_019 "The cancel is complete." |
| 5 | 표기 | 모든 Confirm의 "Secondry button" (Secondary), 제목 표기 "Main title" / "Main Title" 혼용 |

## 5. 아직 카탈로그에 없는 것

- **ID 없는 화면 안내 문구:** 예) Door Control의 "Cannot unlock while the system is running.", "Locks automatically 5 seconds after the door is closed." 같은 뜻 문구가 두 가지로 쓰인 경우도 있습니다(`archive/glossary/review-v0.md` 화면 정정 대상).
- **Toast:** Confirm_026, 029, 030의 동작에 나오는 Toast 문구 ("The selected files have been deleted." 등)
- **발생 조건의 장비 상태 연결:** 예) Alert_013은 Module이 Running일 때. 장비 상태 정의서와 연결은 다음 단계입니다.
