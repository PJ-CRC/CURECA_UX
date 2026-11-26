---
cid: LI-EVT-01-P
pair_cid: TI-EVT-01-P
tl_relation: 기능 추가
title: Event Detail
path: Event History > Event Detail
type: Popup
version: 2.1.14
date: 2026.10.30
author: 서보경
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: [POL-EVT-001, POL-EVT-002]
basis: 2026-11-26 20:00 · history a15b3986
basis_versions:
  rules: CURECA 작업규칙 @2026-11-26 14:30
  policy: 정책서 @2026-11-25 21:21
  glossary: 기준데이터 @2026-11-26 15:17
  screens: 화면 정의서 @2026-11-26 03:39
  common_ux: Common UX (common-ux/comm-index.md) @2026-11-25 16:08
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1258
---
# LI-EVT-01-P Event Detail

- T/L 차이: L-IOS에만 1-2 Status Toggle(상태 변경)과 3 Resolution Notes 입력(Inline Editing)이 있음
- 호출하는 화면: [LI-EVT-P] Event History 목록 (5 [List] 버튼)
- 호출되는 곳: [LI-EVT-P] Event History 목록에서 Event 클릭, [LI-EVT-02-P] Event Message의 [View Details]
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Event Detail 화면**
- 정의
  - Event History의 특정 Event의 상세 정보가 노출되는 화면
- 동작
  - Event History 목록에서 특정 Event 클릭 시 진입
  - 이중 Popup이 아닌, Event Popup 내에서 목록 → 상세로 전환되는 구조
- User Type : Service, Admin, User
- L-IOS Client Mode : Main Mode, Console Mode, MS Mode

**1  Event Info**
- 정의
  - 선택한 Event의 상세 정보를 확인할 수 있는 영역으로, Event와 관련된 주요 속성 제공
- 노출 항목
  - Event ID : Event를 식별하기 위한 고유 키 값으로, Event별로 서로 다른 ID 부여
  - ㄴ ID 생성 규칙 : Event 생성 시 시스템에서 자동으로 순차 증가되는 고유 ID 부여. 생성된 ID는 중복되지 않으며, Event 식별을 위한 Primary Key로 사용
  - Event Code : Event의 발생 유형을 구분하는 코드 값(에러 코드와 유사한 개념)
  - Type : Event 종류 (Instrument, Inventory, Sample, System)
  - Description : Event Code에 따라 정의된 Event의 상세 내용 노출
  - Effect : Event Code에 연계된 Scenario Code의 'description' 내용 노출
  - ㄴ 연계된 코드가 없는 경우, '-' 노출
  - ㄴ N개인 경우, 목록형으로 기호를 표기하여 N개 노출
  - ㄴ 참고 문서명 : [SRD] CURECA Prep 및 Dx 장비 Event 정의
  - Recommended Action : Event Code에 따라 정의된 조치 방법 노출
  - Level : Event의 중요도를 나타내며, Error 또는 Warning 값으로 구분
  - Status : Event 최초 생성 시 Open 상태로 설정되며, 1-2 Toggle로 상태 변경 가능
  - Occurred Date/Time : Event 발생 일시 / 표기 : YYYY-MM-DD hh:mm
- 정책 참고 : POL-EVT-001

**1-2  Status(Toggle)**
- 정의
  - Event의 Status(Open / Closed)를 변경하는 Toggle
- 활성화 조건
  - L-IOS Client Mode가 Main Mode일 때 활성화
  - 단, 활성화되지 않는 Mode(Console Mode, MS Mode)일 경우 View 모드로 노출
- 공통 UX 참고 : COMM-5-q
- 정책 참고 : POL-EVT-002

**2  Instrument Info**
- 정의
  - Event가 Instrument에서 발생한 경우, 해당 Instrument의 Module / Unit / Process 정보 노출
  - Event가 Module 단위에서만 유효한 경우, Unit 값은 '-' 노출
  - Instrument와 무관한 Event의 경우, Module / Unit / Process 전체 '-' 노출
- 정책 참고 : POL-EVT-001

**3  Notes**
- 정의
  - Resolution Notes 영역은 선택한 Event에 대한 조치 이력을 기록할 수 있는 메모장 역할
- 기능
  - Optional : 입력 필수값이 아니며, 사용자가 필요 시 작성 가능
  - Input Type : 멀티라인 텍스트 박스(Multiline Textarea) 제공, 최대 300자 입력 가능
  - Placeholder : Enter action details
  - Inline Editing : 텍스트 박스를 클릭하면 활성화 상태로 전환되며, 입력 완료 후 우측에 Save / Cancel 버튼 아이콘 노출
- 활성화 조건
  - L-IOS Client Mode가 Main Mode일 때 활성화
  - 단, 활성화되지 않는 Mode(Console Mode, MS Mode)일 경우 View 모드로 노출
- 동작
  - 저장 시 입력 내용이 해당 Event의 조치 기록으로 등록
  - 취소 시 입력한 내용 미반영
- 케이스 참고 : LI-EVT-01-P/Case > Case 1
- 공통 UX 참고 : COMM-5-t
- 정책 참고 : POL-EVT-002

**4  Updated Date/Time, Updated by**
- 정의
  - Event의 Status 값이나 Resolution Notes가 변경/작성될 경우, 변경 시점과 변경 사용자의 정보를 노출하는 영역
- 노출 항목
  - Updated Date : 정보가 변경된 일시 / 표기 : YYYY-MM-DD hh:mm
  - Updated by : 정보를 변경한 사용자의 로그인 ID
- 정책 참고 : POL-EVT-002

**5  [List] 버튼**
- 동작
  - 클릭 시 Event 목록 페이지로 이동
  - 이전 페이지 유지 : 사용자가 특정 페이지(예: 페이지 3)에서 상세 페이지로 진입한 경우, 이전에 조회하던 페이지(페이지 3)로 복귀
  - 3 Resolution Notes 입력 중 클릭 시, Confirm 노출 : Confirm_016

**6  닫기**
- 동작
  - 클릭 시, Event Popup 닫힘
  - 3 Resolution Notes 입력 중 클릭 시, Confirm 노출 : Confirm_016

## 케이스

### Case 1. Resolution Notes - Inline edit

- 디스크립션 번호 : 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. 최초 진입 및 입력된 값이 없을 경우

- Place holder 'Enter action details.' 표기

#### 1-2. Text box 클릭 시

- 영역 활성화 되며 우측에 Cancel 및 Save Icon 노출

#### 1-3. 입력 완료 후 Save Icon을 클릭 시

- 영역 비활성화 되며 입력된 내용만 노출됨

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 5 | Confirm | Confirm_016 | Resolution Notes 입력 중 [List] 클릭 시 | Leave 선택 시 → 입력한 내용 미반영, Event 목록으로 이동 / Cancel 선택 시 → 해당 Confirm 닫힘 |
| 6 | Confirm | Confirm_016 | Resolution Notes 입력 중 닫기 클릭 시 | Leave 선택 시 → 입력한 내용 미반영, Popup 닫힘 / Cancel 선택 시 → 해당 Confirm 닫힘 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 제목 | Event History | 기존 원본 (LI-EVT-01-P 기획 프레임 `3543:46640`) |
| 1 | Event Info 표 | 기존 원본 그대로 (Event ID 235123 · Type Instrument · Code F180T001 · Level Error · Description Pick Up Fail · Effect 2줄 · Recommended Action) / Occurred Date/Time `2025-09-29 15:57` | 기존 원본 `3543:46640`, COMM-4-a(1/4) 일시 표기 |
| 1-2 | Status Toggle | Open | 기존 원본 `3543:46640` |
| 2 | Module · Unit · Process | Flexible Extraction · STARlet · Nucleic Acid Extraction | 기존 원본, 반영 대기 LI-EVT-01-P-R04 (`glossary/modules.csv` · `module-units.csv`), Q4 답 (Module 1대면 번호 표기 안 함) |
| 3 | Resolution Notes | Enter action details. (placeholder) | 기존 원본 |
| 4 | Updated Date/Time · Updated by | 2026-09-29 16:01 · ID123423 | 기존 원본, COMM-4-a(1/4) 일시 표기 |
| 5 | 버튼 | List | 기존 원본 |
| Case 1-2 | 입력 칸 | 텍스트 입력 중 / 0 /300자 | 기존 원본 `3543:46798` (100자 → 300자, POL-EVT-002) |
| Case 1-3 | 입력 칸 | 텍스트 입력 완료 | 기존 원본 `3543:46798` |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Event History | 화면 제목 | LID-EVT-001 |
| Event Info | 화면 1 | LID-EVT-029 |
| Event ID | 화면 1 | LID-EVT-030 |
| Type | 화면 1 | LID-EVT-004 |
| Instrument | 화면 1 | LID-EVT-005 |
| Occurred Date/Time | 화면 1 | LID-EVT-016 |
| Code | 화면 1 | LID-EVT-010 |
| Level | 화면 1 | LID-EVT-014 |
| Error | 화면 1 | LID-EVT-037 |
| Status | 화면 1 | LID-EVT-017 |
| Open | 화면 1-2 | LID-EVT-042 |
| Description | 화면 1 | LID-EVT-011 |
| Effect | 화면 1 | LID-EVT-045 |
| Recommended Action | 화면 1 | LID-EVT-031 |
| Instrument Info | 화면 2 | LID-EVT-032 |
| Module | 화면 2 | LID-EVT-012 |
| Unit | 화면 2 | LID-EVT-013 |
| Process | 화면 2 | LID-STN-026 |
| Flexible Extraction | 화면 2 | |
| STARlet | 화면 2 | |
| Nucleic Acid Extraction | 화면 2 | LID-SPT-025 |
| Notes | 화면 3 · 케이스 Case 1 | LID-EVT-033 |
| Resolution Notes | 케이스 Case 1 | |
| Enter action details. | 화면 3 · 케이스 Case 1-1 | LID-EVT-034 |
| Updated Date/Time. {date} | 화면 4 (date = 2026-09-29 16:01) | |
| Updated by. {id} | 화면 4 (id = ID123423) | |
| List | 화면 5 | LID-EVT-036 |
| {n} /300자 | 케이스 Case 1-2 (n = 0) | |
