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
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47110
---
# TI-EVT-P Event History

> 기존 화면(작업방 `Event History_asis` 페이지, Ver 2.1.01)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS(LI-EVT-P)는 4 Status가 Toggle(상태 변경 가능), 5 [Mark all as Closed] 버튼, 6 [Export]에 L-IOS 저장 방식이 더 있음. T-IOS는 4의 상태 변경 · 5 Mark as Closed · 5-1이 제거됨(취소선)
- 호출하는 화면: [TI-EVT-01-P] Event History Detail (목록에서 Event 클릭, TI-EVT-01-P 0 진입 방법)
- 호출되는 곳: 상단 Bar `Event` 아이콘, 각 화면의 Event 아이콘 (0 진입 방법)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- Event History
- Event Id, Code | Type | All | Module | All | Level | All | Status | All | 2026-03-11 ~ 2026-03-17 | Reset | Search
- Items | 1,112 | OPEN | 20 | Export
- Type | Code | Description | Module | Unit | Level | Occurred Date/Time | Status
- Instrument | ER-5231 | Pick Up Fail | Sample Storage | Inbound Trolley | Error | 2025-09-29 15:57:00 | Open
- Instrument | ER-1234 | Open the door | Consumable Storage | Trolley | Error | 2025-09-29 15:57:00 | Open
- Inventory | ER-5423 | Consumables are low. Please check and refill. Consumables... | Sample Pre-treatment | Sample Processing | Warning | 2025-09-29 15:57:00 | Open
- Instrument | ER-1234 | Open the door | High-throughput Extraction | Spin Tip Storage | Error | 2025-09-29 15:57:00 | Closed
- Instrument | ER-1234 | Open the door | Flexible Extraction | Buffer Cartridge Storage | Error | 2025-09-29 15:57:00 | Open
- Inventory | ER-5423 | Consumables are low. Please check and refill. | PCR Setup | 300 μL Tip Storage (1) | Warning | 2025-09-29 15:57:00 | Open
- Inventory | ER-5423 | Consumables are low. Please check and refill. | Universal PCR | CFX96-1 | Warning | 2025-09-29 15:57:00 | Closed
- Instrument | ER-1234 | Open the door | Sample Storage | Outbound Trolley | Error | 2025-09-29 15:57:00 | Closed
- Instrument | ER-1234 | Open the door | Consumable Storage | Trolley | Error | 2025-09-29 15:57:00 | Closed
- Instrument | ER-5231 | Pick Up Fail | Flexible Extraction | MB Tube Storage | Error | 2025-09-29 15:57:00 | Closed
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

### 사용 컴포넌트

Description Number (6), Form/Dropdown Box (4), Square (3), Page number (1), Form/Input Text Box (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비 또는 구동 시스템에서 이상 상태가 발생할 경우, 에러(Error) 및 경고(Warning) 메시지를 조회하고 관리할 수 있는 메뉴이다. Event메뉴는 팝업으로 제공된다.
- 진입 방법
- 상단 Bar의 ‘Event’ 아이콘 클릭 시 해당 메뉴로 진입할 수 있으며, 각 화면(페이지)에 표시된 Event 아이콘을 통해서도 동일하게 접근이 가능하다.

#### 1. 검색 영역

- 입력 및 선택 후 ‘search’ 버튼을 클릭 시, 해당되는 값이 노출되는 방식
- Event ID, Code: 정확히 일치하는 값만 노출
- Type (Event Type)
- Default: all / 데이터: All, Instrument, Inventory, Sample, System
- 정렬 기준: 위의 적힌 순서대로 표기
- Module
- 모듈의 타입으로 검색하는 필터
- Default: All / 데이터: All, Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR
- 정렬 기준: 위의 기입된 순서대로 표기
- Level
- Default: All / 데이터: All, Error, Warning
- Statue
- Default: All / 데이터: All, Open, Closed
- 기간 검색
- Default: 시작일-7일 전 ~ 종료일-Today
- 오늘 기준 미래일자는 선택 불가
- 기간 선택 정책: 최대 1년
- Reset 버튼
- 클릭 시, 모두 Default 값으로 초기화

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
- ~~Event의 Status의 상태값을 변경하는 기능~~
- ~~Event 최초 생성 시, Open으로 등록되며 클릭 시 Closed로 상태값이 변경 됨.~~
- ~~재클릭 시, Closed에서 Open으로 변경 가능~~

#### 5. ~~Mark as Closed~~

- ~~[5-1] 의 체크박스 선택 후 해당 버튼을 클릭 시, 일괄 Event의 Status를 Closed로 변경할 수 있는 기능~~

#### 5-1. ~~[Mark as Closed] 버튼 클릭~~

- ~~체크박스 선택 후 클릭~~
- ~~Confirm_L_003 팝업 노출~~
- ~~체크박스 미선택 후 클릭~~
- ~~Alert_L_003 팝업 노출~~

#### 6. [Export] 버튼

- T-IOS 경우 클릭 시, 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음
- 대상 범위: 목록에 노출된 전체 리스트
- 저장 항목: Detail에서 제공되는 모든 내용
- 형식:CSV

#### 7. 닫기

- 클릭 시, 팝업이 닫힘

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| - (원본에 번호 없음) | 목록의 텍스트 영역의 ‘...’ 줄임된 경우, 마우스 hover시, 툴팁박스로 전체 내용 제공 | 목록 텍스트가 ‘...’로 줄임된 경우 마우스 hover | 기획 프레임 안 `case` ([3543:47370](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47370)) |

- 케이스 화면 글자: 툴팁 `Consumables are low. Please check and refill. Consumables are low. Please check and refill.Consumables are low. Please check and refill.`
