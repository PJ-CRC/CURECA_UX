---
cid: TI-STA-01-02
pair_cid:
tl_relation: 단독
title: Test Count - Table
path: Statistical Analysis > Test Analytics > Test Count - Table
type: Page
version: 2.0
date: 2026-06-15
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1075776
figma_region: 2.1 2차
---
# TI-STA-01-02 Test Count - Table

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. Figma 화면 이름은 "Test Analytics _ Test Count". TI-STA-01-01의 View를 Table로 바꾼 화면
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-004, POL-COM-006
- 호출하는 화면: Test Count - Chart (TI-STA-01-01)
- 다른 프레임: [TI-STA-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1077425)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- Test Count | Export
- Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
- (합계 표) Total | RP1 ~ STI-12, 368,950 | 40,250 | …
- (Unit : count)
- (표) Product | 날짜 열 7개
- RP1 | 4,900 | 7,100 | 3,500 | … (RP2 ~ STI-12 행 같은 형식)
- Total | 54,400 | 55,150 | 43,700 | 52,750 | 60,950 | 48,400 | 53,600
- Filter Options: Date Range (Daily | Monthly), Legend (Product | Sample Type, Select All, 칩), View (Chart | Table)

### 사용 컴포넌트

Table (107), Square (22), Description (12), Table/Filled Table Cell (11), 1 Depth (7), Description Number (5), Dropdown Outlined (2)

### 디스크립션 (원문)

#### 0. Test Analytics _ Test Count 화면

- 정의
- 사용자가 조회한 기간 내 검사 항목 별 검사 건 수 정보 제공

#### 1. 검사 항목별 검사 건 수 합계 정보 영역

- 아래 참고 화면과 내용 동일
- 참고 : TI-STA-01-01

#### 2. 검사 건수 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 건수 변동 추이 비교 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 검사 건 수 단위 정보 (Unit : count)

#### 2-1. Legend 종류 및 날짜 영역

- 표출 항목
- 첫 번째 열 헤더 고정
- ㄴ필터에서 선택된 Legend 종류(Product, Sample Type)
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 조회 기간 단위 검사 항목별 검사 건 수 영역

- 동작
- 필터에서 선택한 검사 항목 노출
- 마스터 코드 순서에 따라 위에서 아래로 정렬되어 노출
- 표출 항목
- 각 셀 데이터는 검사 항목별 검사 건수(수치) 노출
- 데이터가 0인 경우에도 생략하지 않고 0 포맷으로 노출
- 단, 필터에서 선택된 검사 항목이 1개 미만일 경우, 안내 문구 노출
- 참고 : TI-STA-01/Case > Case 3

#### 2-3. Total 행(맨 아래 행 고정)

- 해당 일자(또는 월)별로 선택된 모든 항목의 검사 건수 총 합산 값
- 고정 표출
- 단, 데이터가 없을 경우 ‘-’로 표기
- 참고 : TI-STA-01/Case > Case 3

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 2-2 "데이터가 0인 경우에도 0으로 노출", 2-3 "데이터가 없을 경우 ‘-’" (0과 데이터 없음의 구분이 적혀 있지 않음) | 디스크립션에 넣음: 실제 값이 0이면 0, 데이터가 없으면 '-'. 화면 예시도 두 경우를 구분해 보여 줌 | POL-STA-003 규칙 6 | 대기 |
| R02 | 디스크립션 | Filter Options(Date Range, Legend, View)와 Export 설명 없음 | TI-STA-01-01 5, 6과 같음을 적음 | 디스크립션 | 대기 |
| R03 | 화면 정보 | Figma 화면 이름 "Test Analytics _ Test Count", IA 이름 "Test Count - Table" | 하나로 통일 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R04 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |
| R05 | 정책 반영 | 검사 건수 집계 기준이 없음 | 디스크립션에 넣음: 검사 건수는 오더 기준으로 세며 Completed, Failed와 관계없이 모두 셈 | POL-STA-004 정의 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
