---
cid: LI-EVT-P
pair_cid: TI-EVT-P
tl_relation: 기능 추가
title: Event History
path: Event History
type: Popup
version: 2.1.01
date: 2026-08-07
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1875-80724
figma_region: 2.1 2차
---
# LI-EVT-P Event History

> 기존 화면(작업방 Event History 페이지, 2.1 2차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: [Mark all as Closed]가 있음. Status 변경은 Main Mode만 (`policy/service-mode-matrix.csv`)
- 관련 정책: POL-EVT-001, POL-EVT-002, POL-COM-006
- 호출하는 화면: Event History Detail (LI-EVT-01-P)

- 취소선(Figma에서 제거된 항목): 1·3의 옛 Event Type 값(Instrument, Consumable, Reagent, Waste Bin/bottle, System)

## 기존 화면

### 화면 글자

- 검색 영역과 목록은 TI-EVT-P와 같음
- Export | Mark all as Closed
- Module 이름은 "Sample Storage(1)"처럼 번호까지 표기

### 디스크립션 (원문)

#### 0 ~ 3

- 원문은 TI-EVT-P 0 ~ 3과 같음. 다른 점: 1 Type 데이터에 옛 값(Instrument, Consumable, Reagent, Waste Bin/bottle, System)과 새 값(Instrument, Inventory, Sample, System)이 함께 적혀 있음. 3에도 Event type 옛 값·새 값이 함께 있음

#### 4. Status - Open/Closed Toggle

- Event의 Status의 상태값을 변경하는 기능
- Event 최초 생성 시, OPEN으로 등록되며 클릭 시 Closed로 상태값이 변경 됨.
- 재클릭 시, Closed에서 OPEN으로 변경 가능
- 기능 활성화 조건: 공통 UX 참고 : COMM-3-a
- 단, 활성화 되지 않는 모드일 경우 View 모드로 노출

#### 5. [Mark all as Closed] 버튼

- 상태값이 Open인 모든 Events를 Closed로 변경하는 기능
- 클릭 시, Confirm_003 팝업 노출

#### 6. [Export] 버튼

- L-IOS 경우 클릭 시, 경로 저장 또는 USB 저장 선택하는 팝업 제공 (자세한 내역은 Common UX-‘COMM-5-j(4/4)’ 참고)
- T-IOS 경우 클릭 시, 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음
- 대상 범위: 목록에 노출된 전체 리스트
- 저장 항목: Detail에서 제공되는 모든 내용
- 형식:CSV

#### 7. 닫기

- 클릭 시, 팝업이 닫힘

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 디스크립션 | 1·3에 Event Type 옛 값과 새 값이 함께 있음 | 옛 값은 취소선으로 이미 제거됨 | Figma 취소선 | 반영 불필요 (취소선) |
| 2 | 정책 반영 | 5 [Mark all as Closed] 범위 "상태값이 Open인 모든 Events" | 디스크립션에 넣음: 지금 검색 조건으로 불러온 목록의 모든 페이지에서 Open인 Event 전체 | POL-EVT-002 규칙 4 | 대기 |
| 3 | 정책 반영 | 4 "공통 UX 참고 : COMM-3-a" | Status 변경 가능 조건은 POL-EVT-002 참조 | POL-EVT-002 | 대기 |
| 4 | 표기 | OPEN, Statue, Cureca | Open, Status, CURECA | `glossary/status-values.csv`, 오타 | 대기 |
| 5 | 표기 | Expiration date Status, Under 30 Day | 대소문자 통일, Under 30 days | `glossary/review-v0.md` | 대기 (최신 영역 화면에서 확인) |
| 6 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | Event Type 항목 변경, 목록의 체크박스 제거, Mark as Closed 버튼명·정책 변경(5), Export 방식 변경(6) | 서보경 | Figma 버전 메모 |
