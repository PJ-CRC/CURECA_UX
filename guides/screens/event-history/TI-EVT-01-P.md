---
cid: TI-EVT-01-P
pair_cid: LI-EVT-01-P
tl_relation: 기능 추가
title: Event History Detail
path: Event History > Event Detail
type: Popup
version: 2.1.14
date: 2026-10-30
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1875-44254
figma_region: 2.1 2차
---
# TI-EVT-01-P Event History Detail

> 기존 화면(작업방 Event History 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: T-IOS는 Notes가 읽기 전용(L-IOS에서 쓴 내용만 보임). L-IOS(LI-EVT-01-P)는 Notes 작성과 Status 변경이 있음
- 관련 정책: POL-EVT-001, POL-EVT-002

## 기존 화면

### 화면 글자

- Updated Date/Time. 2026-09-29 16:01 / Updated by. ID123423
- Type | Instrument | Occurred Date/Time | 2025-09-29 15:57
- F180T001 | Level | Error | Status | Open
- Pick Up Fail
- Vision inspection for After Used consumable Check failed / Failed to dispose of consumable (Effect)
- Verify the unit inside the device (Recommended Action)
- Module: FlexibleExtraction | Unit: Starlet | Process: Nucleic Acid Extraction
- List

### 디스크립션 (원문)

#### 0. 화면 정의

- Event History의 특정 Event의 상세 정보가 표기되는 화면이다.
- 진입 방법: Event History 목록에서 특정 Event을 클릭 시 진입된다. (이중 팝업이 아닌, Event 팝업 내에서 목록 → 상세로 전환되는 구조)

#### 1. Event Info

- Event Info 영역은 선택한 Event의 상세 정보를 확인할 수 있는 영역으로, Event과 관련된 주요 속성들을 제공함
- Event ID: Event을 식별하기 위한 고유 키 값으로, Event별로 서로 다른 ID가 부여됨
- ID 생성규칙: Event 생성 시 시스템에서 자동으로 순차 증가되는 고유 ID가 부여. 생성된 ID는 중복되지 않으며, Event 식별을 위한 Primary Key로 사용됨.
- Event Code: Event의 발생 유형을 구분하는 코드 값(에러 코드와 유사한 개념)
- Description: Event Code에 따라 정의된 Event의 상세 내용이 표시됨
- Effect: Event Code에 연계된 Scenario Code의 ‘description’ 내용 표기. 연계된 코드가 없는 경우, ‘-’ 표기. N개인 경우, 목록형으로 기호를 표기하여 N개 표시(UI참고). 참고 문서명: [SRD] CURECA Prep 및 Dx 장비 Event 정의
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

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 표기 | Module "FlexibleExtraction", Unit "Starlet" (코드명·소문자) | Flexible Extraction (1), STARlet | `glossary/modules.csv`, `module-units.csv` | 대기 |
| 2 | 디스크립션 | 1 "Created Date", 화면 "Occurred Date/Time" | 하나로 통일 | 화면 글자 | 대기 |
| 3 | 정책 반영 | T-IOS에서 Status를 바꿀 수 있는지 상세 화면에 없음 (목록 TI-EVT-P 4는 바꿀 수 있음) | POL-EVT-002 참조 | POL-EVT-002 | 대기 |
| 4 | 출처 | Effect의 참고 문서 "[SRD] CURECA Prep 및 Dx 장비 Event 정의"가 기준 출처 목록에 없음 | 값은 고객·개발사가 관리하는 문서를 따름. 저장소에 넣지 않음 | POL-EVT-001 규칙 7 | 반영 불필요 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | Effect 항목 추가 | 서보경 | Figma 버전 메모 |
