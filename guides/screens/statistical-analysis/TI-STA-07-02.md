---
cid: TI-STA-07-02
pair_cid:
tl_relation: 단독
title: 소모품 및 시약 사용량 - Table
path: Statistical Analysis > Test Analytics > 소모품 및 시약 사용량 - Table
type: Page
version: 2.1.03
date: 2026-08-21
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-158873
figma_region: 2.1 2차
---
# TI-STA-07-02 소모품 및 시약 사용량 - Table

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. TI-STA-07-01의 Segmented Control을 Table로 바꾼 화면. 화면 타이틀은 "Usage & Cost Trend"
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-006, POL-TST-003, POL-INV-006, POL-COM-006
- 호출하는 화면: 소모품 및 시약 사용량 - Chart (TI-STA-07-01)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- Usage & Cost Trend, (Segmented Control) Chart | Table, Export
- (합계 표) Total Usage | Total Cost → 231 sets(23,100 ea) | $2,279
- (Unit : count, USD)
- (표) 날짜 열 7개
- Usage | 17 sets(1,700 ea) | 24 sets(2,400 ea) | …
- Cost | $166 | $235 | $312 | $388 | $291 | $478 | $402
- Filter Options: Date Range (Daily | Monthly), Legend (Consumable | Reagent, 드롭다운 "PCR", Reagent 제품명 목록)

### 사용 컴포넌트

Table (26), Square (6), 1 Depth (6), 2 Depth (5), Description Number (4), Dropdown Outlined (3), Table/Filled Table Cell (2), Interface/Setting_Outlined (1)

### 디스크립션 (원문)

#### 0. Inventory _ Usage & Cost Trend 화면

- 원문은 TI-STA-07-01 0과 같음

#### 1. 사용량 및 비용 합계 정보(Table 형태)

- 원문은 TI-STA-07-01 3-1과 같음

#### 2. 사용량 및 비용 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 사용량 및 비용 통계 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 소모품/시약 사용량 및 비용 단위 정보 (Unit : count, USD)

#### 2-1. 날짜 영역

- 표출 항목
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 조회 기간별 사용량 및 비용 정보 영역

- 동작
- 행(Row) 구성
- ㄴ Usage 및 Cost 2개 지표 행 고정 노출
- 표출 항목
- Usage 행
- ㄴ 묶음단위(낱개 수량)
- Cost 행
- ㄴ 비용
- 데이터가 0인 경우에도 생략하지 않고 0으로 노출

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | IA 화면 이름 "소모품 및 시약 사용량 - Table" (한국어) | TI-STA-07-01 반영 대기 목록 1과 같음 (Usage & Cost Trend - Table) | `ia/change-requests.md` 3 | 대기 |
| R02 | 정책 반영 | Ver 2.1.03으로 TI-STA-07-01 v2.1.14의 Cost Setting 노출 조건이 반영되지 않음 | Table 화면에도 같은 조건을 적음 | TI-STA-07-01 5 | 대기 |
| R03 | 정책 반영 | "(Unit : count, USD)", "$" 고정 | Cost Setting에서 고른 통화를 따름 | POL-TST-003 규칙 1 | 대기 |
| R04 | 디스크립션 | Legend, Date Range, Export 설명 없음 | TI-STA-07-01 4, 5, 6과 같음을 적음 | 디스크립션 | 대기 |
| R05 | 표기 | "(Unit : count)"인데 값은 "sets(ea)" | TI-STA-07-01 반영 대기 목록 6과 같음 | POL-STA-006 규칙 8 | 대기 |
| R06 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
