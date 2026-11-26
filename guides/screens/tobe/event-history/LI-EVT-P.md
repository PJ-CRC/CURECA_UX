---
cid: LI-EVT-P
pair_cid: TI-EVT-P
tl_relation: 기능 추가
title: Event History
path: Event History
type: Popup
version: 2.1.01
date: 2026.08.07
author: 서보경
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: [POL-EVT-001, POL-EVT-002, POL-COM-006]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1257
---
# LI-EVT-P Event History

- T/L 차이: L-IOS에만 4 Status Toggle(상태 변경), 5 [Mark all as Closed] 버튼, 6 [Export]의 저장 위치 선택 Popup이 있음. T-IOS에만 9 노출 개수 Dropdown이 있음
- 호출하는 화면: [LI-EVT-01-P] Event Detail (목록에서 Event 클릭 → 상세로 전환), Confirm_003 (5 [Mark all as Closed]), COMM-5-m(2/4) Import/Export Popup (6 [Export])
- 호출되는 곳: 상단 Bar `Event` 아이콘, 각 화면의 Event 아이콘
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Event History 화면**
- 정의
  - CURECA Instrument 또는 System에서 이상 상태 발생 시, Error 및 Warning 메시지를 조회하고 관리하는 메뉴
  - Event 메뉴는 Popup으로 제공
- 동작
  - 상단 Bar의 Event 아이콘 클릭 시 진입
  - 각 화면(페이지)에 노출된 Event 아이콘을 통해서도 동일하게 진입 가능
- User Type : Service, Admin, User
- L-IOS Client Mode : Main Mode, Console Mode, MS Mode

**1  검색 영역**
- 정의
  - 입력 및 선택 후 [Search] 버튼 클릭 시, 해당되는 값 노출
- Event ID, Code(Text Input)
  - 정확히 일치하는 값만 노출
- Type(Dropdown)
  - Default : All
  - 드롭다운 리스트 항목 : ~~All, Instrument, Consumable, Reagent, Waste Bin/bottle, System~~
  - All, Instrument, Inventory, Sample, System
  - 정렬 기준 : 위에 적힌 순서대로 노출
- Module(Dropdown)
  - Module 유형으로 검색하는 필터
  - Default : All
  - 드롭다운 리스트 항목 : All, Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR
  - 정렬 기준 : 위에 적힌 순서대로 노출
- Level(Dropdown)
  - Default : All
  - 드롭다운 리스트 항목 : All, Error, Warning
- Status(Dropdown)
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
  - Items : 목록에 노출된 총 Event 개수 노출
  - Open : 목록에 노출된 전체 리스트에서 Status가 Open인 Event 개수의 합 노출
- 정책 참고 : POL-EVT-001

**3  목록**
- 정의 : 검색 조건에 해당하는 Event 리스트
- 정렬
  - Default : Occurred Date/Time 최신순
  - 정렬 가능한 컬럼 항목 : Occurred Date/Time
- 컬럼 항목
  - Type : ~~Instrument, Consumable, Reagent, Waste Bin/bottle, System~~
  - Instrument, Inventory, Sample, System
  - Code : Event Code
  - Description : Event Code에 따라 정의된 Event 내용
  - Module : Event가 발생한 Module / Instrument와 무관한 Event는 '-' 노출
  - Unit : Event가 발생한 Unit / Module 단위 Event 또는 Instrument와 무관한 Event는 '-' 노출
  - Level : Error, Warning
  - Occurred Date/Time : Event 발생 일시 / 표기 : YYYY-MM-DD hh:mm
  - Status : Open, Closed (4 Toggle로 노출)
- 동작
  - 한 페이지에 최대 10개 노출
  - 최초 진입 시, 상단 기간 검색의 Default 기간에 맞춰 오늘 기준 7일 전까지의 데이터만 노출
  - 텍스트는 1줄까지만 노출 / 데이터 값이 영역을 초과할 경우 '…'으로 노출
  - '…' 노출 영역에 마우스 오버 시 전체 데이터(추가 정보)를 Tooltip으로 노출
  - 검색 조건과 일치한 항목이 없을 경우, 'No results found.' 노출
- 공통 UX 참고 : COMM-5-g, COMM-5-r, COMM-5-v
- 정책 참고 : POL-EVT-001

**4  Status - Open/Closed Toggle**
- 정의
  - Event의 Status 값을 변경하는 기능
- 활성화 조건
  - L-IOS Client Mode가 Main Mode일 때 활성화
  - 단, 활성화되지 않는 Mode(Console Mode, MS Mode)일 경우 View 모드로 노출
- 동작
  - Event 최초 생성 시, Open으로 등록되며 클릭 시 Closed로 변경
  - 재클릭 시, Closed에서 Open으로 변경 가능
- 공통 UX 참고 : COMM-5-q
- 정책 참고 : POL-EVT-002

**5  [Mark all as Closed] 버튼**
- 정의
  - 지금 검색 조건으로 불러온 목록의 모든 페이지에서 Status가 Open인 Event 전체를 Closed로 변경하는 기능
- 동작
  - 클릭 시, Confirm 노출 : Confirm_003
- 정책 참고 : POL-EVT-002

**6  [Export] 버튼**
- 동작
  - 클릭 시, 경로 저장 또는 USB 저장을 선택하는 Popup 노출 : COMM-5-m(2/4)
- 대상 범위 : 목록에 노출된 전체 리스트
- 저장 항목 : Detail에서 제공되는 모든 내용
- 형식 : .csv
- 정책 참고 : POL-COM-006

**7  닫기**
- 동작
  - 클릭 시, Popup 닫힘

**8  페이지네이션**
- Pagination 유형 : Type 1 Number
- 공통 UX 참고 : COMM-5-l

## 케이스

없음 (Case 1 Tooltip 케이스는 요청자 요청으로 지움, 2026-11-26 — 검토 질의 7. Case 번호 1은 다시 쓰지 않음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 5 | Confirm | Confirm_003 | [Mark all as Closed] 버튼 클릭 시 | OK 선택 시 → Confirm이 닫힌 후, 목록 새로고침 / Cancel 선택 시 → 해당 Confirm 닫힘, 기존 작업 화면 유지 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 제목 | Event History | 기존 원본 `3543:46812` |
| 1 | Event ID, Code 입력 칸 | Event ID, Code (placeholder) | 기존 원본 `3543:47039` |
| 1 | Type · Module · Level · Status | All · All · All · All | 기존 원본 `3543:47037` |
| 1 | 기간 | 2026-03-11 ~ 2026-03-17 | 기존 원본 `3543:47055` |
| 2 | Items · Open | 1,112 · 20 | 기존 원본 `3543:46815` (OPEN → Open, `glossary/status-values.csv` Event Status) |
| 3 | 목록 | 기존 원본 10행 그대로 / Module 이름 뒤 번호 `(1)` 뺌 (Q4 답: Module이 1대면 번호 표기 안 함) / 3행 Unit `Sample Processing (Upper)` / 7행 Unit `CFX96 (1)` / 1 ~ 10행 Occurred Date/Time `2025-09-29 15:57` | 기존 원본 `3543:46825`, `glossary/glossary.md` · `module-units.csv`, COMM-4-a(1/4) 일시 표기 |
| 3 | Level | Error · Warning (기존 원본 행 그대로) | `glossary/status-values.csv` Event Level (Status/Event Level) |
| 4 | Status Toggle | 기존 원본 행 그대로 (Open 7행 · Closed 3행) | 기존 원본 `3543:46825` |
| 8 | 페이지 | 1 ~ 10 (2 선택) | 기존 원본 `3543:46821` |

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
| No results found. | 디스크립션 3 | |
| Error | 디스크립션 1 · 화면 3 | |
| Warning | 디스크립션 1 · 화면 3 | |
| Open | 디스크립션 1 · 화면 2 · 화면 4 | |
| Closed | 디스크립션 1 · 화면 4 | |
| Reset | 화면 1 | |
| Search | 화면 1 | |
| Items | 화면 2 | |
| Export | 화면 6 | |
| Mark all as Closed | 화면 5 | |
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
