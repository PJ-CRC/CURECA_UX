---
cid: TI-STA-08-02
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
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-471774
---
# TI-STA-08-02 Event _ Event Trend

> 기존 화면(작업방 `SA_Event_asis` 페이지, Ver 2.1.14)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-08-01] Event Trend Chart (View Chart)
- 호출되는 곳: [TI-STA-08-01] 2 Table
- 같은 페이지에 Legend를 Module로 고른 모양의 같은 CID 프레임이 1개 더 있습니다(아래 케이스 절).

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Event | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Instrument | Inventory | Event | Test Forecasting | Setting | Information | Keira Knightley | Logout
- 탭: Event Trend
- Chart | Table | Export
- Event Trend
- 합계 표: Total | Instrument | Inventory | Sample | System
  - 215 | 27 | 84 | 61 | 43
- (Unit : count)
- 표: Event Type | 01-01 | 01-02 | 01-03 | 01-04 | 01-05 | 01-06 | 01-07
  - Instrument | 2 | 3 | 4 | 6 | 3 | 3 | 6
  - Inventory | 11 | 13 | 12 | 11 | 13 | 12 | 12
  - Sample | 10 | 7 | 10 | 5 | 9 | 10 | 10
  - System | 5 | 6 | 6 | 6 | 5 | 6 | 9
  - Total | 28 | 29 | 32 | 28 | 30 | 31 | 37
- 오른쪽 조회 영역
  - Date Range: Daily | Monthly / 2026-01-01 | 2026-01-07
  - Legend: Event Type | Module / Select All | Instrument | Inventory | Sample | System

### 사용 컴포넌트

Table (53), 1 Depth (6), Form/CheckBox (5), 2 Depth (5), Table/Filled Table  Cell (5), Description Number (5), Square (4), Date&Time/Calendar_Outlined (2), Interface/Info_Circle_Outlined (2), Frame (1), Arrow/Chevron_Up (1), Interface/Setting_Outlined (1), ViewMode/Barchart (1), ViewMode/Data_List (1)

### 디스크립션 (원문)

#### 0. Event _ Event Trend 화면

- 정의
- 사용자가 조회한 기간 내 이벤트 유형별/모듈별 이벤트 발생 건수 정보 제공
- 동작
- 최초 진입 후, 데이터 로딩 시 스켈레톤 화면 노출
- 참고 : TI-STA-05_Skeleton
- 데이터 산출식
- 이벤트 발생 건수 = 조회 기간 내 발생한 Error, Warning 건수의 총합

#### 1. 항목별 이벤트 발생 건수 합계 정보(Table 형태)

- 정의
- 필터에서 선택한 항목(Event Type 또는 Module)별 이벤트 발생 건수 누적 합계 표출 영역
- 동작
- 전체 테이블 너비 100% 고정
- 노출 열 개수에 따라 너비 자동 균등 분할
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 표출 항목
- Total (첫 순서 고정)
- ㄴ 선택된 항목 기준, 조회 기간 내 누적 이벤트 발생 건수 총합 표출
- 선택된 항목
- ㄴ 개별 항목별 조회 기간 내 누적 이벤트 발생 건수 각각 표출
- ㄴ 마스터 코드 순서에 따라 좌→우 고정 배치

#### 2. 이벤트 발생 건수 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 이벤트 발생 건수 추이 정보 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 발생 건수 단위 정보 (Unit : count)

#### 2-1. Legend 종류 및 날짜 영역

- 표출 항목
- 첫 번째 열 헤더 고정
- ㄴ필터에서 선택된 Legend 종류(Event Type, Module)
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 조회 기간 단위 항목별 이벤트 발생 건수 영역

- 동작
- 필터에서 선택한 항목 노출
- 마스터 코드 순서에 따라 위에서 아래로 정렬되어 노출
- 표출 항목
- 각 셀 데이터는 항목별 이벤트 발생 건수(수치) 노출
- 데이터가 0인 경우에도 생략하지 않고 0 포맷으로 노출
- 단, 필터에서 선택된 항목이 1개 미만일 경우, 안내 문구 노출
- 참고 : TI-STA-08-01/Case 2

#### 2-3. Total 행(맨 아래 행 고정)

- 해당 일자(또는 월)별로 선택된 모든 항목의 이벤트 발생 건수 총 합산 값 고정 표출
- 단, 데이터가 없을 경우 ‘-’로 표기

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

이 화면만의 케이스 프레임은 없습니다. 디스크립션 2-2가 가리키는 것은 `TI-STA-08-01/Case`([3543:472251](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-472251))의 Case 2입니다(내용은 [TI-STA-08-01] 케이스 절).

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 2 | Legend 전체 해제 시 | Legend 전체 해제 | `TI-STA-08-01/Case` y 777 |

같은 CID의 프레임 (기획 프레임 아래, 라벨 없음, 패널 디스크립션 `0`만):

| 프레임 | 모양 |
| --- | --- |
| [3543:472009](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-472009) | Legend Module 선택. 합계 Total 301 · Consumable Storage (1) 53 · (2) 96 · (3) 70 · (4) 82. 표 머리 Module, 행 (1) 6 · 7 · 8 · 9 · 7 · 7 · 9 / (2) 13 · 14 · 14 · 13 · 14 · 14 · 14 / (3) 8 · 9 · 9 · 11 · 13 · 9 · 11 / (4) 12 · 10 · 12 · 8 · 16 · 12 · 12 / Total 39 · 40 · 43 · 41 · 50 · 42 · 46 |
