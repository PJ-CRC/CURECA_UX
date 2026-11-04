---
cid: LI-EVT-01-P
pair_cid: TI-EVT-01-P
tl_relation: 기능 추가
title: Event History Detail
path: Event History > Event Detail
type: Popup
version: 2.1.14
date: 2026-10-30
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1875-80526
figma_region: 2.1 2차
---
# LI-EVT-01-P Event History Detail

> 기존 화면(작업방 Event History 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: Notes 작성(인라인 편집)과 Status 변경이 있음. 둘 다 Main Mode만 (`policy/service-mode-matrix.csv`)
- 관련 정책: POL-EVT-001, POL-EVT-002

- 취소선(Figma에서 제거된 항목): 3 Notes의 "500자" (→ 300자)

## 기존 화면

### 화면 글자

- TI-EVT-01-P와 같음 (일시가 초까지 표시: 2026-09-29 16:01:13)

### 디스크립션 (원문)

#### 0 ~ 2

- 원문은 TI-EVT-01-P 0 ~ 2와 같음. 다른 점: Status "Event 최초 생성 시 Open 상태로 설정되며, [1-2] 영역의 Toggle 기능을 통해 상태를 변경할 수 있음 (기능 활성화 조건 참고 : LI-EVT-P)"

#### 3. Notes

- Resolution Notes 영역은 선택한 Event에 대한 조치 이력을 기록할 수 있는 메모장 역할을 수행함
- Optional: 입력 필수값이 아니며, 사용자가 필요 시 작성 가능
- Input Type: 멀티라인 텍스트 박스(Multiline Textarea) 제공, 최대 500자 → 300자 입력 가능
- Placeholder: Enter action details
- Inline Editing: 텍스트 박스를 클릭하면 활성화 상태로 전환되며, 입력 완료 후 우측에 Save / Cancel 버튼 아이콘이 표시됨
- Behavior: 저장 시 입력 내용이 해당 Event의 조치 기록으로 등록되며, 취소 시 입력한 내용이 반영되지 않음
- 기능 활성화 조건: 공통 UX 참고 : COMM-3-a. 단, 활성화 되지 않는 모드일 경우 View 모드로 노출

#### 4 ~ 6

- 원문은 TI-EVT-01-P 4 ~ 6과 같음 (7 "닫기"가 6과 중복)

### 케이스

- Case. Resolution Notes - Inline edit

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 디스크립션 | Notes "최대 500자 → 300자" | 300자 (500자는 취소선으로 제거됨) | Figma 취소선, POL-EVT-002 | 반영 불필요 (취소선) |
| 2 | 디스크립션 | 6, 7 "닫기" 중복 | 하나로 | 디스크립션 | 대기 |
| 3 | 정책 반영 | Status·Notes "공통 UX 참고 : COMM-3-a" | POL-EVT-002 참조 | POL-EVT-002 | 대기 |
| 4 | 표기 | Module "FlexibleExtraction", Unit "Starlet" | Flexible Extraction (1), STARlet | `glossary/modules.csv` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | Effect 항목 추가 | 서보경 | Figma 버전 메모 |
