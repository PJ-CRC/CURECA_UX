---
cid: TI-EVT-P
pair_cid: LI-EVT-P
tl_relation: 기능 추가
title: Event History
path: Event History
type: Popup
version: 2.1.01
date: 2026-08-07
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1875-43955
figma_region: 2.1 2차
---
# TI-EVT-P Event History

> 기존 화면(작업방 Event History 페이지, 2.1 2차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: T-IOS는 Status 변경과 일괄 Closed가 없음(취소선으로 제거). L-IOS(LI-EVT-P)는 Status 변경과 [Mark all as Closed]가 있음
- 관련 정책: POL-EVT-001, POL-EVT-002, POL-COM-006
- 호출하는 화면: Event History Detail (TI-EVT-01-P, 같은 팝업 안에서 전환)

- 취소선(Figma에서 제거된 항목): 4 Status 변경(Open ↔ Closed), 5 Mark as Closed, 5-1 [Mark as Closed] 버튼. T-IOS에서는 Status를 바꾸지 않음

## 기존 화면

### 화면 글자

- 검색: Type (All) | Module (All) | Level (All) | Status (All) | 2026-03-11 ~ 2026-03-17 | Reset | Search
- Export
- OPEN (목록 요약)
- 목록 헤더: Code | Description | Module | Unit | Level | Occurred Date/Time | Status
- 목록 예: ER-5231 | Pick Up Fail | Sample Storage | Inbound Trolley | Error | 2025-09-29 15:57:00 | Open, ER-5423 | Consumables are low. Please check and refill. | PCR Setup | 300 μL Tip Storage (1) | Warning | … | Open, ER-5423 | … | Universal PCR | CFX96-1 | Warning | … | Closed

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비 또는 구동 시스템에서 이상 상태가 발생할 경우, 에러(Error) 및 경고(Warning) 메시지를 조회하고 관리할 수 있는 메뉴이다. Event메뉴는 팝업으로 제공된다.
- 진입 방법
- 상단 Bar의 ‘Event’ 아이콘 클릭 시 해당 메뉴로 진입할 수 있으며, 각 화면(페이지)에 표시된 Event 아이콘을 통해서도 동일하게 접근이 가능하다.

#### 1. 검색 영역

- 입력 및 선택 후 ‘search’ 버튼을 클릭 시, 해당되는 값이 노출되는 방식
- Event ID, Code: 정확히 일치하는 값만 노출
- Type (Event Type): Default: all / 데이터: All, Instrument, Inventory, Sample, System. 정렬 기준: 위의 적힌 순서대로 표기
- Module: 모듈의 타입으로 검색하는 필터. Default: All / 데이터: All, Sample Storage, Prep Consumable Storage, Sample Preparation, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR. 정렬 기준: 위의 기입된 순서대로 표기
- Level: Default: All / 데이터: All, Error, Warning
- Statue: Default: All / 데이터: All, Open, Closed
- 기간 검색: Default: 시작일-7일 전 ~ 종료일-Today. 오늘 기준 미래일자는 선택 불가. 기간 선택 정책: 최대 1년
- Reset 버튼: 클릭 시, 모두 Default 값으로 초기화

#### 2. 목록 요약

- Total Event: 목록에 노출된 총 Event 개수 표기
- Open: 목록에 노출된 전체 리스트에서 Status가 ‘Open’값의 개수의 총 합을 표기

#### 3. 목록

- 한 페이지에 최대 10개 표기
- 정렬 기준: Occurred Date/Time 최신순
- 최초 진입 시, 상단 기간 검색의 Default 기간에 맞춰서 오늘기준 7일전까지의 데이터만 노출함
- 텍스트는 1줄까지만 표기 / 데이터 값이 영역을 초과할 경우 ‘…’으로 표시
- ‘…’ 표시 영역에 마우스 오버 시 전체 데이터(추가 정보) 툴팁으로 노출

#### 4. Status - Open/Closed

- Open 또는 Closed 값이 표기됨
- Event의 Status의 상태값을 변경하는 기능
- Event 최초 생성 시, Open으로 등록되며 클릭 시 Closed로 상태값이 변경 됨.
- 재클릭 시, Closed에서 Open으로 변경 가능

#### 5. Mark as Closed

- [5-1] 의 체크박스 선택 후 해당 버튼을 클릭 시, 일괄 Event의 Status를 Closed로 변경할 수 있는 기능

#### 5-1. [Mark as Closed] 버튼 클릭

- 체크박스 선택 후 클릭: Confirm_L_003 팝업 노출
- 체크박스 미선택 후 클릭: Alert_L_003 팝업 노출

#### 6. [Export] 버튼

- T-IOS 경우 클릭 시, 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음
- 대상 범위: 목록에 노출된 전체 리스트
- 저장 항목: Detail에서 제공되는 모든 내용
- 형식:CSV

#### 7. 닫기

- 클릭 시, 팝업이 닫힘

### 케이스

- Case. 목록의 텍스트 영역의 ‘...’ 줄임된 경우, 마우스 hover시, 툴팁박스로 전체 내용 제공

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 알럿 | 5-1 "Confirm_L_003", "Alert_L_003". Alert_003은 알럿 관리 페이지에서 삭제됨 | 취소선으로 이미 제거됨. T-IOS는 Status 변경과 일괄 Closed가 없음 | Figma 취소선, POL-EVT-002 | 반영 불필요 (취소선) |
| 2 | 정책 반영 | 5 체크박스 + [Mark as Closed]. 화면 글자에는 버튼이 없음. L-IOS는 [Mark all as Closed] | 취소선으로 이미 제거됨. T-IOS는 Status 변경과 일괄 Closed가 없음 | Figma 취소선, POL-EVT-002 | 반영 불필요 (취소선) |
| 3 | 표기 | Expiration date Status | 대소문자 통일 (PD-0001 결정 후) | `glossary/review-v0.md` | 대기 (최신 영역 화면에서 확인) |
| 4 | 표기 | Under 30 Day | Under 30 days | `glossary/status-values.csv` 시약 만료 상태 | 대기 (최신 영역 화면에서 확인) |
| 5 | 디스크립션 | Statue, Cureca, 1 "Event ID, Code" 검색 (화면에 입력 칸 없음) | Status, CURECA, 검색 항목을 화면과 맞춤 | 오타, 화면 글자 | 대기 |
| 6 | 표기 | 목록 요약 "OPEN", Unit "CFX96-1" | Open, CFX96 (1) | `glossary/status-values.csv`, 이름 (번호) | 대기 |
| 7 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | Event Type 항목 변경: Instrument, Consumable, Reagent, Waste Bin/bottle, System → Instrument, Inventory, Sample, System | 서보경 | Figma 버전 메모 |
