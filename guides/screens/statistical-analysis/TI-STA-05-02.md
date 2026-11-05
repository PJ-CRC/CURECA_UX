---
cid: TI-STA-05-02
pair_cid:
tl_relation: 단독
title: Instrument Run-time - Table
path: Statistical Analysis > Test Analytics > Instrument Run-time - Table
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-173792
figma_region: 2.1 2차
---
# TI-STA-05-02 Instrument Run-time - Table

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. TI-STA-05-01의 Segmented Control을 Table로 바꾼 화면. Figma 경로는 "Statistical Analysis > Instrument"
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-006, POL-EQP-005, POL-COM-006
- 호출하는 화면: Instrument Run-time - Chart (TI-STA-05-01)
- 다른 프레임: Legend 선택 예시 [Prep Consumable Storage 선택](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-173591), [High-throughput Extraction 선택](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-173961), [Sample Preparation 선택](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-174162)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- (Tab) Run-time Trend | Error Rate Trend, (Segmented Control) Chart | Table, Export
- Run-time Trend
- (합계 표) Total | Sample Storage …
- (Unit : hour)
- (표) Module | 날짜 열 → Sample Storage 행들, Total 행
- Filter Options: Date Range (Daily | Monthly), Legend (Module | Unit, Module 드롭다운, Select All, 체크박스)

### 사용 컴포넌트

Table (26), Square (6), 1 Depth (6), 2 Depth (5), Description Number (5), Dropdown Outlined (3), Table/Filled Table Cell (2), Form/CheckBox (1)

### 디스크립션 (원문)

#### 0. Instrument _ Run-time Trend 화면

- 원문은 TI-STA-05-01 0과 같음

#### 1. 장비별 가동 시간 합계 정보(Table 형태)

- 정의
- 필터에서 선택한 장비별 가동 시간 누적 합계 표출 영역
- 동작
- 전체 테이블 너비 100% 고정
- 노출 열 개수에 따라 너비 자동 균등 분할
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 표출 항목
- Total (첫 순서 고정)
- ㄴ 선택된 장비 항목 기준, 조회 기간 내 누적 가동 시간 총합 표출
- 선택된 장비 항목
- ㄴ 개별 장비 항목별 조회 기간 내 누적 가동 시간 각각 표출
- ㄴ 마스터 코드 순서에 따라 좌→우 고정 배치

#### 2. 가동 시간 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 가동 시간 추이 정보 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 가동 시간 단위 정보 (Unit : hour)

#### 2-1. Legend 종류 및 날짜 영역

- 표출 항목
- 첫 번째 열 헤더 고정
- ㄴ필터에서 선택된 Legend 종류(Module, Unit)
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 조회 기간 단위 장비별 가동 시간 영역

- 동작
- 필터에서 선택한 장비 항목 노출
- 마스터 코드 순서에 따라 위에서 아래로 정렬되어 노출
- 표출 항목
- 각 셀 데이터는 장비별 가동 시간(수치) 노출
- 데이터가 0인 경우에도 생략하지 않고 0 포맷으로 노출
- 단, 필터에서 선택된 장비 항목이 1개 미만일 경우, 안내 문구 노출
- 참고 : TI-STA-05-01/Case 2

#### 2-3. Total 행(맨 아래 행 고정)

- 해당 일자(또는 월)별로 선택된 모든 항목의 가동 시간 총 합산 값
- 고정 표출
- 단, 데이터가 없을 경우 ‘-’로 표기

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | TI-STA-05(Test Forecasting)와 CID 계층이 겹침, Figma 경로와 IA 경로가 다름 | TI-STA-05-01 반영 대기 목록 1, 2와 같음 | `ia/change-requests.md` 1·2 | 대기 |
| R02 | 디스크립션 | Tab, Date Range, Legend, Export 설명 없음 | TI-STA-05-01 1, 2, 4, 5, 6과 같음을 적음 | 디스크립션 | 대기 |
| R03 | 정책 반영 | 셀 값의 표시 단위(시간, 분 버림)가 없음 | POL-EQP-005 규칙 4와 맞춤 | POL-EQP-005 | 대기 |
| R04 | 표기 | "Prep Consumable Storage(1)" 등 이름과 번호 붙여 씀 (다른 프레임) | Prep Consumable Storage (1) | `glossary/terms.csv` Module | 대기 |
| R05 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
