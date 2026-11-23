---
cid:
pair_cid:
tl_relation:   # 동일 | 권한 차이 | 기능 추가 | 단독
title:
path:
type:          # Page | Popup | Tab
version:       # X.Y.ZZ. 케이스 1 · 2는 4단계 UX 확정 때 요청자가 정한 값(그 전까지 케이스 1은 기존 Ver, 케이스 2는 비움), 케이스 3은 기존 화면의 Ver 그대로 (reference-rules/description.md 7절 "화면 정보에 적는 값")
date:          # YYYY.MM.DD. 케이스 3은 기존 화면의 Date 그대로, 케이스 1 · 2는 작성일
author:        # 케이스 3은 기존 화면 담당자 그대로, 케이스 1 · 2는 요청자
client_mode: []
user_type: []
policies: []   # 정책 ID. 작업 완료 전인 결정으로 그렸으면 "POL-EQP-004 · DS-0012"처럼 논의 대상 ID를 함께 적고, 5단계(완료) 반영 뒤 뗌
basis:         # 화면 기준: 시각 · history 커밋 (reference-rules/work-log.md "작업 기준")
basis_versions: # 문서마다 basis 시각 전에 마지막으로 바뀐 때 (rules · policy · glossary · screens · ux_guide 모두 @날짜)
source: tobe   # To-Be 화면 MD. 작업방에 그렸는지는 머리말 figma로 가름
figma:         # 작업방의 이 CID 섹션 링크
---
# CID 화면 이름

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
| R01 | 점검 발견 | 화면 이름 "Samples Details", 경로 "Sample Tracking > Samples Details", 디스크립션 0·1 "Sample Details" | IA 기준(Samples > Details)으로 이름 하나로 | `ia/ia-screens.csv` | 작업 중 (20261123-최고관리자-samples-2) |
| R02 | 기준 자료 변경 | 1 Product "Allplex_HPV28" | Allplex HPV28 | `glossary/test-items.csv` UI 표기 | 작업 중 (20261123-최고관리자-samples-2) |
| R03 | 기준 자료 변경 | 2 Module·Unit "고유 ID 정보"인데 화면은 Module 이름(High-throughput Extraction)과 Unit 이름(M9600, Sealer (1)) | 이름 (번호)로 표시한다고 고쳐 씀 | `glossary/terms.csv` Module, Unit | 작업 중 (20261123-최고관리자-samples-2) |
| R04 | 점검 발견 | 3 General 표출 항목에 Status가 있는데 화면 General 영역에는 없음 (Status는 타이틀 영역에 있음) | 하나로 맞춤 | 화면 글자 | 작업 중 (20261123-최고관리자-samples-2) |
| R05 | 점검 발견 | 4 "InboundTrolley", "Return status" (화면은 Return Status) | Inbound Trolley, Return Status | 표기 | 작업 중 (20261123-최고관리자-samples-2) |
| R06 | 점검 발견 | 5·6 "WELL No." (화면은 Well No.), 화면 예시 "CO1", "AO2" (영문 O) | Well No., C01, A02 | 화면 글자 | 작업 중 (20261123-최고관리자-samples-2) |
| R07 | 기준 자료 변경 | 5-1 "[96 DWP] 메뉴", "Sample가" | [96-DWP] 메뉴, Sample이 | `glossary/terms.csv` DWP, 오타 | 작업 중 (20261123-최고관리자-samples-2) |
| R08 | 점검 발견 | 7 제목 "Reagents 정보 영역" (화면은 Reagent Info), 정렬 "공통 UX 참고 : COMM-4-a" (상태값 문서) | 제목 맞춤, 정렬 기준 문서 확인 | 화면 글자 | 대기 (확인 필요) |
| R09 | 점검 발견 | 8-1 [More]는 TI-SPT-01-02만 엶. Extraction Protocol 팝업(TI-SPT-01-03)이 따로 있음 | Pre-Treatment·Extraction 각각 어느 팝업을 여는지 적음 | `ia/ia-screens.csv` | 작업 중 (20261123-최고관리자-samples-2) |
| R10 | 기준 자료 변경 | 3 Start Date/Time "Prep 장비에서 바코드 찍은 시간", 4 "[Sample Storage] Module", "샘플 투입구" | 표준어 (Sample Storage Module, Module 이름) | `glossary/terms.csv` | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.11 | 2026-11-20 | 작업방에 새로 그림 (기존 작업방 [1460:109649](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-109649) · Ver 2.1.11). 3단계 초안: R01 · R02 · R03 · R04 · R05 · R06 · R07 · R09 반영(작업 중), 검사 단계 · General 일시 정의와 표기(POL-SMP-002) | Claude (최고관리자 요청) | 20261120-최고관리자-samples, POL-SMP-001 · DS-0008, POL-SMP-002 |
| | 2026-11-23 | 멈춘 작업(20261120-최고관리자-samples)이 쓴 화면 MD 내용 · 섹션 링크를 지우고 빈 틀로 되돌림. 반영 대기 목록은 asis 화면 MD의 원래 변경 전 · 변경 후 · 상태로 되돌림(그 작업이 더한 줄은 상태만 대기로) | Claude (최고관리자 요청 R045) | 20261123-최고관리자-samples |
| | 2026-11-23 | 멈춘 작업(20261123-최고관리자-samples)이 쓴 화면 MD 내용 · 섹션 링크를 지우고 그 작업 시작 전 빈 틀로 되돌림(R046 새 작업 20261123-최고관리자-samples-2). 반영 대기 목록도 그 작업 시작 전 상태로 | Claude | R046 |
