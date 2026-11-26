---
cid: TI-STA-08-01
pair_cid:
tl_relation: 단독
title: Event _ Event Trend
path: Statistical Analysis > Event
type: Tab
version: 2.1.14
date: 2026.10.26
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-471238
---
# TI-STA-08-01 Event _ Event Trend

> 기존 화면(작업방 `SA_Event_asis` 페이지, Ver 2.1.14)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-08-02] Event Trend Table (2 Table)
- 호출되는 곳: LNB > Statistical Analysis > Event (탭은 Event Trend 하나)
- 같은 페이지에 Legend를 Module로 고른 모양의 같은 CID 프레임이 1개 더 있습니다(아래 케이스 절).

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Event | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Instrument | Inventory | Event | Test Forecasting | Setting | Information | Keira Knightley | Logout
- 탭: Event Trend
- Chart | Table | Export
- Event Trend | (Unit : count)
- 합계: Total 215 | Instrument 27 | Inventory 84 | Sample 61 | System 43
- 차트: Y축 25 · 20 · 15 · 10 · 5 · 0 | X축 01-01 | 01-02 | 01-03 | 01-04 | 01-05 | 01-06 | 01-07
- 오른쪽 조회 영역
  - Date Range: Daily | Monthly / 2026-01-01 | 2026-01-07
  - Legend: Event Type | Module / Select All | Instrument | Inventory | Sample | System

### 사용 컴포넌트

Description Number (10), 1 Depth (6), Form/CheckBox (5), 2 Depth (5), Square (4), Date&Time/Calendar_Outlined (2), Interface/Info_Circle_Outlined (2), ViewMode/Barchart (1), ViewMode/Data_List (1), Frame (1), Arrow/Chevron_Up (1), Interface/Setting_Outlined (1)

### 디스크립션 (원문)

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

#### 3-1. 조회 기간(X축) 정보

- 동작
- 텍스트 겹침 방지를 위해 라이브러리의 Auto-skip 기능 활성화 및 가로 폭에 따른 라벨 개수 자동 최적화
- 표출 항목
- 사용자가 설정한 조회 기간 일자별/월별 날짜 표출

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

#### 4. 통계 일자 설정 영역 : Date Range

- Default : Daily 탭 활성화, 전일 기준 최근 14일간 데이터 노출
- Daily (일간 조회 정책)
- Min Range : 최소 1일
- Max Range : 최대 3개월(90일)
- 과거(어제)부터 선택 가능, 오늘 및 미래 날짜는 비활성화
- Monthly (월간 조회 정책)
- Min Range : 최소 1개월
- Max Range : 최대 1년(12개월)
- 당월 선택 가능 (오늘 날짜 포함 이후 날짜 집계 제외), 미래 월은 비활성화
- 동작
- Daily ➔ Monthly 전환 시 데이터 상속
- Daily 상태에서 특정 일자 범위를 선택한 후 Monthly 클릭 시,
- 기존에 선택되어 있던 일자의 연/월 정보를 기준으로 월단위
- 범위를 자동 확장 매핑하여 노출
- Monthly ➔ Daily 전환 시 데이터 상속 및 최대 범위 제한
- 기존 선택된 월의 시작월 1일부터 종료 월의 말일까지로
- 일자 범위를 자동 변환
- 단, 변환된 일자 범위가 Daily 최대 조회 한도(3개월/90일)를
- 초과할 경우, 종료월의 말일을 기준으로 역산하여 최대 3개월(90일)
- 범위로 기간 노출
- 공통 UX 참고 : COMM-5-d

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

#### 6. [Export] 버튼

- 정의
- 화면에 표출된 통계 데이터 및 설정값을 CSV 파일로 내보내는
- 기능 버튼
- 동작
- 클릭 시 OS 파일 탐색기가 호출되어 사용자가 저장 경로 및
- 파일명을 지정하여 다운로드
- 포맷 (Format) : .csv
- 포함 데이터
- 범례 설정값, 필터 조건, 테이블 집계 결과값 등 화면 내 표출된 전체 데이터셋 포함

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-STA-08-01/Case`([3543:472251](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-472251), 2252×3268)에 있습니다. Case 1 ~ 3에는 오른쪽 패널이 있습니다(CID `TI-STA-08-01/Case`, 작성자 정다예, Ver · Date `-`, 디스크립션 `- / -`). Case 4에는 패널이 없습니다. 프레임 칸의 y는 케이스 제목 글자 자리입니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Chart 상세 데이터 Tooltip | 차트 내 특정 시점에 마우스 오버 | 위 프레임 y 16 |
| 2 | Legend 전체 해제 시 | Legend 전체 해제 | 위 프레임 y 777 |
| 3 | Module / Dropdown 노출 데이터 | Legend Module 탭에서 Module Type 드롭박스 열기 | 위 프레임 y 1508 |
| 4 | Module 단위 선택 시 노출 데이터 | Legend Module에서 Module Type 선택 | 위 프레임 y 2282 |

- Case 1: 툴팁 예시 `01-04 | Total : 41` / Consumable Storage (1) | Consumable Storage (2) 13 | Consumable Storage (3) 11 | Consumable Storage (4) (같은 툴팁이 두 자리에 있음). 화면은 Legend `Event Type | Module`에 Consumable Storage · Select All · Consumable Storage (1) ~ (4), 합계 Total 301 · Consumable / Storage (1) 53 · (2) 96 · (3) 70 · (4) 82, Y축 20 · 16 · 12
- Case 2: 차트 자리에 `Please select one or more legends.` 안내. 오른쪽 Legend `Event Type | Module` / Consumable Storage · Select All · Consumable Storage (1) ~ (4)
- Case 3
  - 설명: Module 선택 시, 시스템에서 관리하고 있는 전체 Module Type 항목 노출
  - 드롭박스(선택값 Sample Pre-treatment): Sample Storage | Consumable Storage | Sample Pre-treatment | High-throughput Extraction | Flexible Extraction | PCR Setup | Plate Sealing | Universal PCR
- Case 4
  - 설명: Legend에서 Module 선택 시 Module 단위 범례 선택 가능 / 드롭 박스를 통한 Module Type 선택 필요 / Module Type 선택 시 N대의 모듈명 노출 및 다중 선택
  - 예시(Module Type마다 Select All + 4대): Sample Storage(1) ~ (4) | Consumable Storage (1) ~ (4) | Sample Pre-treatment (1) ~ (4) | High-throughput Extraction(1) ~ (4) | Flexible Extraction(1) ~ (4) | PCR Setup(1) ~ (4) (원문 `PCR Setupe(3)`) | Plate Sealing(1) ~ (4) | Universal PCR(1) ~ (4)

같은 CID의 프레임 (기획 프레임 아래, 라벨 없음, 패널 디스크립션 `0`만):

| 프레임 | 모양 |
| --- | --- |
| [3543:471512](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-471512) | Legend Module 선택. Consumable Storage · Select All · Consumable Storage (1) ~ (4), 합계 Total 301 · Consumable / Storage (1) 53 · (2) 96 · (3) 70 · (4) 82, Y축 20 · 16 · 12 · 8 · 4 · 0 |
