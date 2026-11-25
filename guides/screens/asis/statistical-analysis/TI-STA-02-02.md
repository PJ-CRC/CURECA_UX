---
cid: TI-STA-02-02
pair_cid:
tl_relation: 단독
title: Test Ratio (%) - Table
path: Statistical Analysis > Test Analytics > Test Ratio (%) - Table
type: Page
version: 2.0
date: 2026-06-15
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1077148
figma_region: 2.1 2차
---
# TI-STA-02-02 Test Ratio (%) - Table

> 기존 화면(기존 작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. Figma 화면 이름은 "Test Analytics _ Test Ratio". TI-STA-02-01의 View를 Table로 바꾼 화면
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-004, POL-COM-006
- 호출하는 화면: Test Ratio (%) - Chart (TI-STA-02-01)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- Test Ratio | Export, Key Metrics
- (합계 표) TI-STA-02-01과 같음
- (Unit : count)
- (표) Product | 날짜 열 7개
- RP1 | 3.2%(150) | 14.5%(1,100) | … (RP2 ~ STI-12 행 같은 형식, STI-12에 0.0%(0) 예시)
- Total | 100%(4,750) | 100%(7,600) | …
- Filter Options: TI-STA-02-01과 같음

### 사용 컴포넌트

Table (107), Square (22), Table/Filled Table Cell (11), 1 Depth (7), Description Number (5), Dropdown Outlined (2)

### 디스크립션 (원문)

#### 0. Test Analytics _ Test Ratio 화면

- 정의
- 지정한 조회 기간 내 검사 항목별 차지하는 비율(비중) 정보 제공

#### 1. 검사 항목별 검사 건 수 및 비율(비중) 정보 영역

- 아래 참고 화면과 내용 동일
- 참고 : TI-STA-02-01

#### 2. 검사 비율 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 비율 추이 통계 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 검사 건 수 단위 정보 (Unit : count)

#### 2-1. Legend 종류 및 날짜 영역

- TI-STA-01-02 2-1과 같음

#### 2-2. 검사 항목별 검사 건 수 및 비율(비중) 정보 영역

- 동작
- 필터에서 선택한 검사 항목 노출
- 마스터 코드 순서에 따라 위에서 아래로 정렬되어 노출
- 표출 항목
- 각 셀 데이터는 비율%(개별 건수) 형태로 노출
- 데이터가 0인 경우에도 생략하지 않고 0.0%(0) 포맷으로 노출
- 단, 필터에서 선택된 검사 항목이 1개 미만일 경우, 안내 문구 노출
- 참고 : TI-STA-01/Case > Case 3

#### 2-3. Total 행(맨 아래 행 고정)

- 해당 일자(또는 월)별로 선택된 모든 항목의 검사 건수 총 합산 값 및 기준 비율을 100%(총 건수) 포맷으로 고정 표출
- 단, 데이터가 없을 경우 ‘-’로 표기
- 참고 : TI-STA-01/Case > Case 3
