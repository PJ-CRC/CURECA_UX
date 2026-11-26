---
cid: TI-EVT-P
pair_cid: LI-EVT-P
tl_relation: 기능 추가
title: Event History
path: Event History
type: Popup
version: 2.1.01
date: 2026.08.07
author: 서보경
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-EVT-001, POL-EVT-002, POL-COM-006]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1250
---
# TI-EVT-P Event History

- T/L 차이: L-IOS(LI-EVT-P)는 4 Status가 Toggle(상태 변경), 5 [Mark all as Closed] 버튼, 6 [Export]가 저장 위치 선택 Popup. T-IOS는 4 Status 값만 노출
- 호출하는 화면: [TI-EVT-01-P] Event Detail (목록에서 Event 클릭 → 상세로 전환)
- 호출되는 곳: 상단 Bar `Event` 아이콘, 각 화면의 Event 아이콘
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Event History 화면**
- 정의
  - <span style="color:red">CURECA</span> <span style="color:red">Instrument</span> 또는 <span style="color:red">System</span>에서 이상 상태 발생 시, Error 및 Warning 메시지를 조회하고 관리하는 메뉴
  - Event 메뉴는 <span style="color:red">Popup</span>으로 제공
- 동작
  - 상단 Bar의 Event 아이콘 클릭 시 진입
  - 각 화면(페이지)에 <span style="color:red">노출</span>된 Event 아이콘을 통해서도 동일하게 진입 가능
- User Type : Service, Admin, User

**1  검색 영역**
- 정의
  - 입력 및 선택 후 [Search] 버튼 클릭 시, 해당되는 값 노출
- Event ID, Code(Text Input)
  - 정확히 일치하는 값만 노출
- Type(Dropdown)
  - Default : <span style="color:red">All</span>
  - 드롭다운 리스트 항목 : All, Instrument, Inventory, Sample, System
  - 정렬 기준 : 위에 적힌 순서대로 노출
- Module(Dropdown)
  - <span style="color:red">Module</span> 유형으로 검색하는 필터
  - Default : All
  - 드롭다운 리스트 항목 : All, Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR
  - 정렬 기준 : 위에 적힌 순서대로 노출
- Level(Dropdown)
  - Default : All
  - 드롭다운 리스트 항목 : All, Error, Warning
- <span style="color:red">Status</span>(Dropdown)
  - Default : All
  - 드롭다운 리스트 항목 : All, Open, Closed
- 기간 검색(Period)
  - Default : 시작일-7일 전 ~ 종료일-Today
  - 오늘 기준 미래일자는 선택 불가
  - 기간 선택 정책 : 최대 1년
- [Reset] 버튼
  - 클릭 시, 모두 Default 값으로 초기화
- 공통 UX 참고 : COMM-5-p, COMM-5-d

**2  목록 요약**
- 노출 항목
  - <span style="color:red">Items</span> : 목록에 노출된 총 Event 개수 노출
  - Open : 목록에 노출된 전체 리스트에서 Status가 Open인 Event 개수의 합 노출
- 정책 참고 : POL-EVT-001

**3  목록**
- 정의 : 검색 조건에 해당하는 Event 리스트
- 정렬
  - Default : Occurred Date/Time 최신순
  - <span style="color:red">정렬 가능한 컬럼 항목 : Occurred Date/Time</span>
- <span style="color:red">컬럼 항목</span>
  - <span style="color:red">Type : Event 종류 (Instrument, Inventory, Sample, System)</span>
  - <span style="color:red">Code : Event Code</span>
  - <span style="color:red">Description : Event Code에 따라 정의된 Event 내용</span>
  - <span style="color:red">Module : Event가 발생한 Module / Instrument와 무관한 Event는 '-' 노출</span>
  - <span style="color:red">Unit : Event가 발생한 Unit / Module 단위 Event 또는 Instrument와 무관한 Event는 '-' 노출</span>
  - <span style="color:red">Level : Error, Warning</span>
  - <span style="color:red">Occurred Date/Time : Event 발생 일시 / 표기 : YYYY-MM-DD hh:mm</span>
  - <span style="color:red">Status : Open, Closed</span>
- 동작
  - 한 페이지에 <span style="color:red">9 노출 개수 Dropdown에서 선택한 개수만큼</span> 노출
  - 최초 진입 시, 상단 기간 검색의 Default 기간에 맞춰 오늘 기준 7일 전까지의 데이터만 노출
  - 텍스트는 1줄까지만 노출 / 데이터 값이 영역을 초과할 경우 '…'으로 노출
  - '…' 노출 영역에 마우스 오버 시 전체 데이터(추가 정보)를 <span style="color:red">Tooltip</span>으로 노출
  - <span style="color:red">검색 조건과 일치한 항목이 없을 경우, 'No results found.' 노출</span>
- <span style="color:red">~~케이스 참고 : TI-EVT-P/Case > Case 1~~</span>
- 공통 UX 참고 : COMM-5-g, COMM-5-r, COMM-5-v
- 정책 참고 : POL-EVT-001

**4  Status - Open/Closed**
- 정의
  - Open 또는 Closed 값 노출
- 정책 참고 : POL-EVT-002

**6  [Export] 버튼**
- 동작
  - 클릭 시, 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음
- 대상 범위 : 목록에 노출된 전체 리스트
- 저장 항목 : Detail에서 제공되는 모든 내용
- 형식 : <span style="color:red">.csv</span>
- 정책 참고 : POL-COM-006

**7  닫기**
- 동작
  - 클릭 시, <span style="color:red">Popup</span> 닫힘

**8  <span style="color:red">페이지네이션</span>**
- <span style="color:red">Pagination 유형 : Type 1 Number</span>
- <span style="color:red">공통 UX 참고 : COMM-5-l</span>

**9  <span style="color:red">노출 개수 Dropdown</span>**
- <span style="color:red">드롭다운 리스트 항목 : 10 items, 30 items, 50 items, 100 items</span>
- <span style="color:red">Default : 10 items</span>
- <span style="color:red">선택 시 해당 개수로 목록 즉시 업데이트</span>
- <span style="color:red">공통 UX 참고 : COMM-5-g</span>

## 케이스

### Case 1. 목록의 텍스트 영역의 '...' 줄임된 경우, 마우스 hover시, Tooltip으로 전체 내용 제공

- 디스크립션 번호 : 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. 목록 텍스트가 '...'로 줄임된 경우 마우스 hover

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| - | - | - | 없음 | - |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 제목 | Event History | 기존 원본 `3543:47118` |
| 1 | Event ID, Code 입력 칸 | Event ID, Code (placeholder) | 기존 원본 `3543:47343`, 반영 대기 TI-EVT-P-R05 (Event Id → Event ID) |
| 1 | Type · Module · Level · Status | All · All · All · All | 기존 원본 `3543:47347` · `47350` · `47354` · `47358` |
| 1 | 기간 | 2026-03-11 ~ 2026-03-17 | 기존 원본 `3543:47360` |
| 2 | Items · Open | 1,112 · 20 | 기존 원본 `3543:47121` (OPEN → Open, `glossary/status-values.csv` Event Status) |
| 3 | 목록 | 기존 원본 10행 그대로 / 3행 Unit `Sample Processing (Upper)` / 7행 Unit `CFX96 (1)` / 1 ~ 10행 Occurred Date/Time `2025-09-29 15:57` | 기존 원본 `3543:47130`, `glossary/module-units.csv`, COMM-4-a(1/4) 일시 표기 |
| 3 | Level | Error · Warning (기존 원본 행 그대로) | `glossary/status-values.csv` Event Level (Status/Event Level) |
| 8 | 페이지 | 1 ~ 10 (2 선택) | 기존 원본 `3543:47127` |
| 9 | 노출 개수 | 10 items | COMM-5-g Basic Table (Q5 답) |
| Case 1-1 | Tooltip | Consumables are low. Please check and refill. Consumables are low. Please check and refill. Consumables are low. Please check and refill. | 기존 원본 `3543:47386` (refill.Consumables → refill. Consumables) |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Event History | 화면 제목 | |
| Event ID, Code | 화면 1 | |
| Type | 화면 1 · 화면 3 | |
| Module | 화면 1 · 화면 3 | |
| Level | 화면 1 · 화면 3 | |
| Status | 화면 1 · 화면 3 | |
| All | 화면 1 · 디스크립션 1 | |
| Instrument | 디스크립션 1 · 화면 3 | |
| Inventory | 디스크립션 1 · 화면 3 | |
| Sample | 디스크립션 1 | |
| System | 디스크립션 1 | |
| Sample Storage | 디스크립션 1 · 화면 3 | |
| Consumable Storage | 디스크립션 1 · 화면 3 | |
| Sample Pre-treatment | 디스크립션 1 · 화면 3 | |
| High-throughput Extraction | 디스크립션 1 · 화면 3 | |
| Flexible Extraction | 디스크립션 1 · 화면 3 | |
| PCR Setup | 디스크립션 1 · 화면 3 | |
| Plate Sealing | 디스크립션 1 | |
| Universal PCR | 디스크립션 1 · 화면 3 | |
| Error | 디스크립션 1 · 화면 3 | |
| Warning | 디스크립션 1 · 화면 3 | |
| Open | 디스크립션 1 · 화면 2 · 화면 3 | |
| Closed | 디스크립션 1 · 화면 3 | |
| Reset | 화면 1 | |
| Search | 화면 1 | |
| Items | 화면 2 | |
| {n} items | 화면 9 · 디스크립션 9 (n = 10, 30, 50, 100) | |
| No results found. | 디스크립션 3 | |
| Export | 화면 6 | |
| Code | 화면 3 | |
| Description | 화면 3 | |
| Unit | 화면 3 | |
| Occurred Date/Time | 화면 3 | |
| Inbound Trolley | 화면 3 | |
| Outbound Trolley | 화면 3 | |
| Trolley | 화면 3 | |
| Sample Processing (Upper) | 화면 3 | |
| Spin Tip Storage | 화면 3 | |
| Buffer Cartridge Storage | 화면 3 | |
| 300 μL Tip Storage (1) | 화면 3 | |
| CFX96 (1) | 화면 3 | |
| MB Tube Storage | 화면 3 | |
