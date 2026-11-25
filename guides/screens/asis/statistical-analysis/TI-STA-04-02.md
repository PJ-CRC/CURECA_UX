---
cid: TI-STA-04-02
pair_cid:
tl_relation: 단독
title: Avg. Test Cost - Table
path: Statistical Analysis > Test Analytics > Avg. Test Cost - Table
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1076606
figma_region: 2.1 2차
---
# TI-STA-04-02 Avg. Test Cost - Table

> 기존 화면(기존 작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. Figma 화면 이름은 "Test Analytics _ Test Cost". TI-STA-04-01의 View를 Table로 바꾼 화면
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-004, POL-TST-003, POL-COM-006
- 호출하는 화면: Avg. Test Cost - Chart (TI-STA-04-01)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- Test Cost (Average) | Export, Key Metrics
- (요약 표) TI-STA-04-01과 같음
- (Unit : USD)
- (표) Product | 날짜 열 7개
- RP3 | $4.80 | $7.40 | $3.20 | … (PB, GI-B1, GI-B2, Allplex HPV28 행 같은 형식)
- Filter Options: TI-STA-04-01과 같음

### 사용 컴포넌트

Table (53), Square (20), 1 Depth (7), Table/Filled Table Cell (5), Description Number (4), Dropdown Outlined (2)

### 디스크립션 (원문)

#### 0. Test Analytics _ Test Cost 화면

- 정의
- 사용자가 조회한 기간 내 검사 항목별 평균 비용의 변동 추이 정보 제공

#### 1. 검사 항목별 평균 비용 정보 영역

- 아래 참고 화면과 내용 동일
- 참고 : TI-STA-04-01

#### 2. 검사 비용 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 비용 추이 통계 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 검사 비용 단위 정보 (Unit : USD)

#### 2-1. Legend 구분 및 날짜 영역

- 표출 항목
- 첫 번째 열 헤더 고정
- ㄴ Product
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 검사 항목별 평균 비용 정보 영역

- 동작
- 필터에서 선택한 검사 항목 노출
- 마스터 코드 순서에 따라 위에서 아래로 정렬되어 노출
- 표출 항목
- 각 셀 데이터는 금액 형태로 노출
  - (통화 기호 $ 필수 적용 및 소수점 둘째 자리까지 표출)
- 데이터가 0인 경우에도 생략하지 않고 $0.00 포맷으로 노출
- 단, 필터에서 선택된 검사 항목이 1개 미만일 경우, 안내 문구 노출
- 참고 : TI-STA-01/Case > Case 3
