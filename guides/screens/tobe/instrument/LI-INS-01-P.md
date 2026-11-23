---
cid: LI-INS-01-P
pair_cid: 
tl_relation: 단독
title: Door Control Popup
path: Instrument > Overview Tab > Door Control Popup
type: Popup
version: 2.1.17
date: 2026.11.13
author: 이상헌
client_mode: []
user_type: []
policies: []   # 정책 ID. 작업 완료 전인 결정으로 그렸으면 "POL-EQP-004 · DS-0012"처럼 논의 대상 ID를 함께 적고, 5단계(완료) 반영 뒤 뗌
basis:         # 화면 기준: 시각 · history 커밋 (reference-rules/work-log.md "작업 기준")
basis_versions: # 문서마다 basis 시각 전에 마지막으로 바뀐 때 (rules · policy · glossary · screens · ux_guide 모두 @날짜)
source: tobe   # To-Be 화면 MD. 작업방에 그렸는지는 머리말 figma로 가름
figma:         # 작업방의 이 CID 섹션 링크
---
# LI-INS-01-P Door Control Popup

- T/L 차이:
- 호출하는 화면: [CID] 화면 이름 (어디서 → 어디로)
- 호출되는 곳: (공통 팝업이면 호출 위치 목록)

## 디스크립션

<!-- 원본입니다. Figma 패널에 그대로 들어갑니다. 쓰는 법은 reference-rules/description.md, 작성예시문서는 examples/description-samples.md.
     바뀐 글 표시(빨간 글씨 · 빨간 취소선)는 reference-rules/description.md 7절 "바뀐 글 표시"의 HTML 태그로 적습니다.
     코드(화면 · 케이스 · Alert · Confirm · Toast · 공통 UX · 정책)는 화면 MD에 색을 적지 않습니다. Figma 패널에서만 파란색으로 칠합니다(reference-rules/description.md 7절 "참고 코드 표시").
     아래는 모양 예시입니다. 실제 내용으로 바꿔 씁니다. -->

**0  ○○ 화면**
- 정의
  - 내용
- 동작
  - 내용
- User Type : 
- L-IOS Client Mode : (L-IOS 화면에만 씀)

**1  ○○ 영역**
- 정의
  - 내용
- 공통 UX 참고 : 

**1-1  항목 이름(Dropdown)**
- 기능 : 
- Default : 
- 드롭다운 리스트 항목
  - 내용
- 공통 UX 참고 : 

**2  ○○ 리스트**
- 정의 : 
- 정렬
  - Default : 
- 표출 항목
  - 항목 이름 : 무슨 값인지 / 표기 / 값이 없을 때
- 동작
  - 내용
- 공통 UX 참고 : 

**3  [버튼 이름] 버튼**
- 정의
  - 내용
- 활성화 조건
  - 내용
- 동작
  - 내용
- 정책 참고 : 

## 화면 예시

<!-- 그릴 때 화면에 넣는 예시 값. 상태값 · 단위 · 품목 · 수치는 용어집 · 정책 · glossary csv 기준. 기준이 없으면 만들지 않고 "질문 대기"에 올립니다.
     목록 · 표는 한 페이지 최대 노출 개수만큼 행을 채웁니다. 줄였으면 이유를 적습니다. -->

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |

## 화면 표기 글자

<!-- 화면에 표기되는 영어 글자를 디스크립션 번호와 함께 적습니다. 번역 전체는 여기에 적지 않습니다(flow/4-revise-verify.md 절차 4번 "언어셋을 정리하고 UI팀에 넘길 것을 보여 줌"에서 대상 목록을 모아서 함).
     출처: 그 글자를 찾은 곳. 화면(기획 프레임) / 디스크립션(디스크립션에 적힌 화면 표기 글자, 예: 드롭다운 리스트 항목 · 툴팁 · 안내 문구) / 케이스(케이스 화면). 여러 곳이면 한 줄에 `화면 · 케이스`처럼 적습니다. 디스크립션의 설명 글은 적지 않습니다. 3단계에서 적습니다.
     Language ID: 언어셋 원본(language-set/db/)에 있는 글자의 ID. 번역 전체는 이 ID로 원본에서 찾습니다. 아직 언어셋과 맞춰 보지 않았으면 비워 둡니다.
     상태: 진행 중인 작업에서 생긴 글자는 신규, 영어 글자가 바뀐 줄은 변경("화면 표기 글자 (영어)" 칸에 "변경 전 → 변경 후"), 이 화면에서 없어진 글자는 줄을 지우지 않고 제거(다른 화면은 쓸 수 있으므로 언어셋에서 삭제한다는 뜻이 아님). 바뀐 것이 없는 글자는 `-`. 5단계에서 언어셋 원본에 반영하면 다시 `-`로 돌립니다.
     가장 긴 언어 · 번역 글자: 제공 언어 가운데 가장 긴 언어와 그 언어로 번역한 글자(예: "DE · (독일어로 번역한 글자)"). 4단계 절차 4번에서 채웁니다. 그 전에는 비워 둡니다. -->

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |

## Alert · Confirm · Toast

<!-- Alert · Confirm · Toast를 모두 적습니다. 코드는 카탈로그(alert/)의 ID. 카탈로그에 없으면 3단계에서 카탈로그에 새 줄을 더해 그 코드를 씁니다(flow/3-design.md 공통 1의 9, 케이스 3의 토스트는 3-2). 토스트는 버튼 동작을 `-`로 둡니다. -->

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |

## 케이스

<!-- 케이스 화면의 원본입니다 (flow/3-design.md 공통 5 "케이스 화면", 작성예시문서 examples/case-samples.md).
     근거는 셋 중 하나: 기존 원본 / 디스크립션 조건 / 요청자. 어느 것도 아니면 올리지 않고 질문 대기에 둡니다.
     종류(디스크립션 조건일 때): 1 상태별 데이터 노출, 2 올리거나 눌렀을 때 뜨는 것, 3 유형 · 대상에 따라 표출 항목 구성이 다른 것,
     4 개수가 기준을 넘어 요소가 생기거나 배치가 바뀌는 것, 5 처음 들어왔거나 데이터가 없을 때, 6 한 번의 조작으로 여러 단계를 거쳐 바뀌는 것.
     Case 번호는 바꾸지 않고, 지워도 다시 쓰지 않습니다. 케이스가 없으면 "없음"이라고 적습니다. -->

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |

## 반영 대기 목록

<!-- 쓰는 법은 reference-rules/pending-changes.md. 타입: 논의 결정 / 다른 화면 파급 / 기준 자료 변경 / 외부 원본 변경 / 점검 발견.
     상태: 대기 / 작업 중 (작업 기록 이름) / 반영 완료 (날짜) / 제외 (날짜, 이유). 줄은 지우지 않습니다. -->

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 기준 자료 변경 | Section 17 메모 "통합 상태가 Ready, Paused, Error 상태일 경우, Unlock all doors 버튼 사용 가능" | 장비 통합 상태가 Ready, Error, Paused, Not Initialized일 때 활성화 (디스크립션 3은 이미 맞음) | POL-EQP-008, 2026-11-02 확인 | 대기 |
| R02 | 기준 자료 변경 | "Locks automatically 5 seconds after the door is closed." / "The door will be automatically locked 5 seconds after it is closed." 두 가지 | 하나로 통일 | `archive/glossary/review-v0.md` 화면 정정 대상 추가 | 대기 |
| R03 | 점검 발견 | "Cannot unlock while the module is running." / "Cannot unlock while the system is running." 두 가지 | 쓰임을 구분하거나 하나로 통일 | 같음 | 대기 |
| R04 | 기준 자료 변경 | 확인 문구 "Do you want to continue? Finishing current task, then pausing…" | 알럿 관리 페이지 Confirm_008 ("Unlock the door?")과 다름. 어느 쪽이 맞는지 확인 후 통일 | `alert/alert-catalog.md` 3절 | 대기 (확인 필요) |
| R05 | 점검 발견 | Ruuning, Lcok | Running, Lock | 오타 | 대기 |
| R06 | 기준 자료 변경 | Lock 버튼 없음 (다시 잠그는 기능 없음) | 디스크립션에 Door를 닫으면 5초 뒤 자동 잠금, Run Start 때 Unlocked Door 자동 잠금을 정책 ID로 참조 | POL-EQP-008 | 대기 |
| R07 | 기준 자료 변경 | 0·3 "Unlock 1개라도 해당 되면 Module의 상태값은 Paused로 변경됨" | 뜻은 맞음 (장비 통합 상태와 관계없이 Door 잠금이 해제되면 Paused, Door가 여러 개인 Module은 하나라도 해제되면 Paused). 이 뜻이 드러나게 문장 정리 | POL-EQP-004 규칙 1·2, 2026-11-02 확인 | 대기 |
| R08 | 기준 자료 변경 | 2-5가 장비 모듈 상태(Ready, Error, Paused) 기준, 0은 통합 상태 기준 | 장비 통합 상태별 허용과 조건부 허용 Module 기준으로 통일 | POL-EQP-008 | 대기 |
| R09 | 기준 자료 변경 | Run 중 잠금 해제 후 Door를 열지 않은 경우의 동작이 없음 | 디스크립션에 넣음: 임시 정책 PV-0001 (Run 중 잠금 해제 후 Door를 열지 않으면 Paused 유지). 화면에 "임시 정책 포함" 표시 | PV-0001 (적용한 화면), POL-EQP-008 | 대기 (임시 정책 적용 예정) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
