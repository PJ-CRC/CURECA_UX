---
cid: TI-STA-08-01
pair_cid:
tl_relation: 단독
title: Event 통계 - Chart
path: Statistical Analysis > Test Analytics > Event 통계 - Chart
type: Page
version: 2.1.14
date: 2026-10-26
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7688-119974
figma_region: 2.1 2차
---
# TI-STA-08-01 Event 통계 - Chart

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. IA 화면 이름이 한국어("Event 통계"). 화면 타이틀은 "Event Trend", Figma 경로는 "Statistical Analysis > Event"
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-006, POL-EVT-001, POL-COM-006
- 호출하는 화면: Event 통계 - Table (TI-STA-08-02)
- 다른 프레임: [Legend Module 탭, Prep Consumable Storage 선택](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7688-120248), [TI-STA-08-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7688-120987)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- (Tab) Event Trend, (Segmented Control) Chart | Table, Export
- Event Trend | (Unit : count)
- (합계) Total | Instrument | Inventory | Sample | System
- Filter Options
- Date Range: Daily | Monthly
- Legend: Event Type | Module, Select All, Instrument | Inventory | Sample | System 체크박스

### 사용 컴포넌트

Description Number (10), 1 Depth (6), Form/CheckBox (5), 2 Depth (5), Square (4), Date&Time/Calendar_Outlined (2), Interface/Info_Circle_Outlined (2), ViewMode/Barchart (1), ViewMode/Data_List (1)

### 디스크립션 (원문)

- 3-1, 4, 6의 원문은 TI-STA-05-01 3-1, 4, 6과 같음

#### 0. Event _ Event Trend 화면

- 정의
- 사용자가 조회한 기간 내 이벤트 유형별/모듈별 이벤트 발생 건수 정보 제공
- 동작
- 최초 진입 후, 데이터 로딩 시 스켈레톤 화면 노출
- 참고 : TI-STA-05_Skeleton
- 데이터 산출식
- 이벤트 발생 건수 = 조회 기간 내 발생한 Error, Warning 건수의 총합

#### 1. 통계 지표 정보 영역(Tab)

- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- Tab 표출 항목
- Event Trend

#### 2. 차트 형태 영역(Segmented Control)

- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 동작
- Chart 선택 시 꺾은선 그래프로 표출 (참고 : TI-STA-08-01)
- Table 선택 시 표로 표출 (참고 : TI-STA-08-02)

#### 3. Event 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 이벤트 발생 건수 변동 추이 비교 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 표출 항목
- 타이틀 : Event Trend
- 발생 건수 단위 정보 : (Unit : count)
- 기간별/항목별 이벤트 발생 건수 추이 차트 및 수치 정보

#### 3-2. 발생 건수(Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 데이터의 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 발생 건수는 정수 단위로 라벨 표출
- 표출 항목
- 발생 건수 라벨 표출

#### 3-3. 데이터 뷰 영역(차트 or 테이블)

- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 마우스 오버 시 해당 시점의 상세 데이터 툴팁 팝업 노출
  - (참고 : TI-STA-08-01/Case 1)
- 표출 항목
- 선택 항목별 이벤트 발생 건수 기반의 단일 또는 다중 꺾은선 형태로 표출

#### 3-4. 항목별 이벤트 발생 건수 합계 정보

- 정의
- 필터에서 선택한 항목(Event Type 또는 Module)별 이벤트 발생 건수 누적 합계 표출 영역
- 동작
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 선택 항목이 영역을 넘어갈 경우 스크롤 노출
- 표출 항목
- Total (첫 순서 고정)
- ㄴ 선택된 항목 기준, 조회 기간 내 누적 이벤트 발생 건수 총합 표출
- 선택된 항목
- ㄴ 개별 항목별 조회 기간 내 누적 이벤트 발생 건수 각각 표출
- ㄴ 마스터 코드 순서에 따라 노출

#### 5. 통계 대상(이벤트 유형) 선택 영역 : Legend

- Default
- Event Type 탭 활성화
- 하위 전체 항목 Select
- 동작
- Event Type / Module 탭 중 단일 선택
- Module 탭 선택 시 Module Type 드롭박스 노출
- ㄴ 드롭박스 내 첫번째 항목 Select, 하위 전체 항목 Select
- Select All 선택 시 전체 항목 Select, 재 선택 시 전체 해제
- 전체 해제 시 범례 선택 안내 문구 노출
- ㄴ Please select one or more legends.
- ㄴ 참고 : TI-STA-08-01/Case 2
- 모든 하위 항목이 Select될 경우, [Select All] 버튼도 자동으로 활성화 상태로 변경
- 활성화된 개별 칩 중 단 하나라도 클릭하여 해제할 경우, [Select All] 버튼은 즉시 비활성화(Off) 상태로 동적 변경
- 표출 항목
- Event Type 선택 시 노출 데이터
- ㄴ Instrument, Inventory, Sample, System
- Module Type 드롭박스 노출 데이터
- ㄴ참고 : TI-STA-08-01/Case 3
- Module 단위 선택 시 노출 데이터
- ㄴ참고 : TI-STA-08-01/Case 4

### 케이스

- TI-STA-08-01/Case: Case 1. Chart 상세 데이터 Tooltip / Case 2. Legend 전체 해제 시 / Case 3. Module / Dropdown 노출 데이터 / Case 4. Module 단위 선택 시 노출 데이터

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | IA 화면 이름 "Event 통계 - Chart" (한국어), 화면 타이틀 "Event Trend", Figma 화면 이름 "Statistical Analysis" | IA 화면 이름을 Event Trend - Chart로 (Figma 기준). IA 수정 요청함 | `ia/change-requests.md` 4 | 대기 |
| 2 | 화면 정보 | Figma 경로 "Statistical Analysis > Event", IA는 Test Analytics 아래 | 메뉴 구조는 Statistical Analysis > Test Analytics / Instrument / Inventory / Event (Figma 기준). IA 수정 요청함 | `ia/change-requests.md` 1, POL-STA-001 규칙 1 | 대기 |
| 3 | 디스크립션 | 산출식이 Error·Warning 총합만 있음. Event Level(Error / Warning)로 나눠 보는 필터가 없고, Event Status(Open / Closed)와 무관하게 세는지 적혀 있지 않음 | 디스크립션에 넣음: Event Status(Open, Closed)와 관계없이 세고, Error와 Warning은 나누지 않고 합계로 보여 줌 | POL-STA-006 정의·규칙 5 | 대기 |
| 4 | 디스크립션 | Module 탭에서 Module이 없는 Event(System 등)를 어떻게 세는지 없음 | 디스크립션에 넣음: Module 기준으로 볼 때 Module이 없는 Event(System 등)는 빼고 보여 줌 | POL-STA-006 규칙 5 | 대기 |
| 5 | 디스크립션 | "이벤트", "모듈" | Event, Module | `glossary/terms.csv` | 대기 |
| 6 | 표기 | 다른 프레임 "Prep Consumable Storage(1)" | Prep Consumable Storage (1) | `glossary/terms.csv` Module | 대기 |
| 7 | 화면 정보 | "TI-STA-05_Skeleton" 참조 (TI-STA-05는 Test Forecasting) | Skeleton 프레임 CID 확인 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| 8 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-26 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
