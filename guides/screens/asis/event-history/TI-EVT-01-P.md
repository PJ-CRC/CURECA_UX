---
cid: TI-EVT-01-P
pair_cid: LI-EVT-01-P
tl_relation: 기능 추가
title: Event History Detail
path: Event History > Event History Detail
type: Popup
version: 2.1.14
date: 2026.10.30
author: 서보경
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47409
---
# TI-EVT-01-P Event History Detail

> 기존 화면(작업방 `Event History_asis` 페이지, Ver 2.1.14)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS(LI-EVT-01-P)는 1 Status를 [1-2] Toggle로 바꿀 수 있고, 3 Notes에 Resolution Notes 입력(인라인 편집)이 있음. T-IOS 3 Notes는 Read only. 화면 위 번호 표시 `1-2`는 T에도 있으나 T 디스크립션에는 1-2 블록이 없음
- 호출하는 화면: [TI-EVT-P] Event History 목록 (5 List 버튼)
- 호출되는 곳: [TI-EVT-P] Event History 목록에서 Event 클릭 (0 진입 방법), [TI-EVT-02-P] Event Message의 [View Details] (원문은 `LI-EVT-01-P`로 적음)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- Event History
- Event Info | Updated Date/Time. 2026-09-29 16:01  /  Updated by. ID123423
- Event ID | 235123 | Type | Instrument | Occurred Date/Time | 2025-09-29 15:57
- Code | F180T001 | Level | Error | Status | Open
- Description | Pick Up Fail
- Effect | Vision inspection for After Used consumable Check failed / Failed to dispose of consumable
- Recommended Action | Verify the unit inside the device
- Instrument Info
- Module | FlexibleExtraction | Unit | Starlet | Process | Nucleic Acid Extraction
- Notes
- Resolution Notes
- FlexibleExtraction
- List

### 사용 컴포넌트

⛔️ Item_Basic Data Table (22), Divider (7), Description Number (7), Basic (1), Square (1)

### 디스크립션 (원문)

#### 0. 화면 정의

- Event History의 특정 Event의 상세 정보가 표기되는 화면이다.
- 진입 방법
- Event History 목록에서 특정 Event을 클릭 시 진입된다.
  - (이중 팝업이 아닌, Event 팝업 내에서 목록 → 상세로 전환되는 구조)

#### 1. Event Info

- Event Info 영역은 선택한 Event의 상세 정보를 확인할 수 있는 영역으로, Event과 관련된 주요 속성들을 제공함
- Event ID: Event을 식별하기 위한 고유 키 값으로, Event별로 서로 다른 ID가 부여됨
- ID 생성규칙: Event 생성 시 시스템에서 자동으로 순차 증가되는 고유 ID가 부여. 생성된 ID는 중복되지 않으며, Event 식별을 위한 Primary Key로 사용됨.
- Event Code: Event의 발생 유형을 구분하는 코드 값(에러 코드와 유사한 개념)
- Description: Event Code에 따라 정의된 Event의 상세 내용이 표시됨
- Effect: Event Code에 연계된 Scenario Code의 ‘description’ 내용 표기
- 표기 방식
- 연계된 코드가 없는 경우, ‘-’ 표기
- N개인 경우, 목록형으로 기호를 표기하여 N개 표시(UI참고)
- 참고 문서명: [SRD] CURECA Prep 및 Dx 장비 Event 정의
- Recommended Action: Event Code에 따라 정의된 조치 방법이 표시됨
- Level: Event의 중요도를 나타내며, Error 또는 Warning 값으로 구분됨
- Status: Event Status 값인 Open 또는 Closed가 표기됨
- Created Date: Event 발생 일시

#### 2. Instrument Info

- Event이 장비에서 발생한 경우, 해당 장비의 Module / Unit / Process 정보 표시
- Event이 Module 단위에서만 유효한 경우, Unit 값은 -으로 표시
- 장비와 무관한 Event의 경우, Module / Unit / Process 전체를 -으로 표시

#### 3. Notes

- Read only 영역으로 L-IOS에서 작성했을 경우, 노출됨

#### 4. Updated Date/Time, Updated by

- Event의 Status 값이나 Resolution Notes가 변경/작성될 경우, 변경 시점과 변경 사용자의 정보를 표시하는 영역
- Updated Date: 정보가 변경된 일시
- Updated by: 정보를 변경한 사용자의 로그인 ID

#### 5. List 버튼

- 동작: 버튼 클릭 시 Event 목록 페이지로 이동
- 이전 페이지 유지: 사용자가 특정 페이지(예: 페이지 3)에서 상세 페이지로 진입한 경우, 이전에 조회하던 페이지(페이지 3)로 복귀

#### 6. 닫기

- 클릭 시, Event 팝업이 닫힘

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Event History_asis` 페이지에 TI-EVT-01-P 케이스 프레임 없음)
