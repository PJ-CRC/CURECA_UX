---
cid: TI-STA-06-02
pair_cid:
tl_relation: 단독
title: Instrument _ Error Rate Trend
path: Statistical Analysis > Instrument
type: Tab
version: 2.1.03
date: 2026.08.21
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-440479
---
# TI-STA-06-02 Instrument _ Error Rate Trend

> 기존 화면(작업방 `SA_Instrument_asis` 페이지, Ver 2.1.03)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-06-01] Error Rate Trend Chart (View Chart), [TI-STA-05-02] Run-time Trend (Tab)
- 호출되는 곳: [TI-STA-06-01] 2 Table

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Instrument | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Instrument | Inventory | Event | Test Forecasting | Setting | Information | Keira Knightley | Logout
- 탭: Run-time Trend | Error Rate Trend
- Chart | Table | Export
- Error Rate Trend (Cumulative)
- 누적 에러율 표: Consumable Storage (1) | Consumable Storage (2) | Consumable Storage (3) | Consumable Storage (4)
  - 10% | 11% | 13% | 16%
- (Unit : %)
- 표: Module | 2026-01 | 2026-02 | 2026-03 | 2026-04 | 2026-05 | 2026-06 | 2026-07
  - Consumable Storage (1) | 8 | 9 | 10 | 12 | 9 | 9 | 12
  - Consumable Storage (2) | 8 | 10 | 10 | 13 | 14 | 10 | 13
  - Consumable Storage (3) | 14 | 11 | 14 | 11 | 12 | 13 | 14
  - Consumable Storage (4) | 15 | 16 | 16 | 15 | 16 | 16 | 16
  - Total | 11 | 11 | 12 | 13 | 13 | 12 | 14
- 오른쪽 조회 영역
  - Date Range: Daily | Monthly / 2026-01 | 2026-07
  - Legend: Module | Unit / Consumable Storage (Dropdown) / Select All | Consumable Storage (1) | Consumable Storage (2) | Consumable Storage (3) | Consumable Storage (4)

### 사용 컴포넌트

Table (52), Square (6), 1 Depth (6), 2 Depth (5), Form/CheckBox (5), Description Number (5), Table/Filled Table  Cell (4), Dropdown Outlined (3), Frame (1), Arrow/Chevron_Up (1), Interface/Setting_Outlined (1), ViewMode/Barchart (1), ViewMode/Data_List (1)

### 디스크립션 (원문)

#### 0. Instrument _ Error Rate Trend 화면

- 정의
- 사용자가 조회한 기간 내 장비 별 누적 에러율 정보 제공
- 동작
- 최초 진입 후, 데이터 로딩 시 스켈레톤 화면 노출
- 참고 : TI-STA-05_Skeleton
- 데이터 산출식
- (에러 횟수 / 전체 구동 횟수) * 100
- 구동 횟수 기준 : DWP가 장비에 입고되는 기준 +1씩 카운팅
- 에러 횟수 기준 : 씨젠 측에서 에러코드 정의 후 공유될 예정

#### 1. 장비별 누적 에러율 정보(Table 형태)

- 정의
- 필터에서 선택한 장비별 누적 에러율 표출 영역
- 동작
- 전체 테이블 너비 100% 고정
- 노출 열 개수에 따라 너비 자동 균등 분할
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 표출 항목
- 선택된 장비 항목
- ㄴ 개별 장비 항목별 조회 기간 내 누적 가동 시간 각각 표출
- ㄴ 마스터 코드 순서에 따라 좌→우 고정 배치

#### 2. 누적 에러율 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 누적 에러율 추이 정보 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 가동율 단위 정보 (Unit : %)

#### 2-1. Legend 종류 및 날짜 영역

- 표출 항목
- 첫 번째 열 헤더 고정
- ㄴ필터에서 선택된 Legend 종류(Module, Unit)
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 조회 기간 단위 장비별 누적 에러율 영역

- 동작
- 필터에서 선택한 장비 항목 노출
- 마스터 코드 순서에 따라 위에서 아래로 정렬되어 노출
- 표출 항목
- 각 셀 데이터는 장비별 누적 에러율(수치) 노출
- 데이터가 0인 경우에도 생략하지 않고 0 포맷으로 노출
- 단, 필터에서 선택된 장비 항목이 1개 미만일 경우, 안내 문구 노출
- 참고 : TI-STA-06-01/Case 2

#### 2-3. Total 행(맨 아래 행 고정)

- 해당 일자(또는 월)별로 선택된 모든 항목별 누적 에러율 고정 표출
- 단, 데이터가 없을 경우 ‘-’로 표기

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

이 화면만의 케이스 프레임은 없습니다. 디스크립션 2-2가 가리키는 것은 `TI-STA-06-01/Case`([3543:439482](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-439482))의 Case 2입니다(내용은 [TI-STA-06-01] 케이스 절).

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 2 | Legend 전체 해제 시 | Legend 전체 해제 | `TI-STA-06-01/Case` (0, 761) |
