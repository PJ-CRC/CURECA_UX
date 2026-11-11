---
cid: TI-STA-04-01
pair_cid:
tl_relation: 단독
title: Avg. Test Cost - Chart
path: Statistical Analysis > Test Analytics > Avg. Test Cost - Chart
type: Page
version: 2.1.14
date: 2026-10-30
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1076345
figma_region: 2.1 2차
---
# TI-STA-04-01 Avg. Test Cost - Chart

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. Figma 화면 이름은 "Test Analytics _ Test Cost"
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-004, POL-TST-003, POL-COM-006
- 호출하는 화면: Avg. Test Cost - Table (TI-STA-04-02)
- 다른 프레임: [TI-STA-04/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1079072)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- Test Cost (Average) | Export
- Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
- (요약 표) RP3 | PB | GI-B1 | GI-B2 | Allplex HPV28 → $8.00 | $6.00 | $8.00 | $4.00 | $6.00
- (Unit : USD), Y축 $2.00 ~ $10.00
- (차트 범례) RP3 | PB | GI-B1 | GI-B2 | Allplex HPV28
- Filter Options: Date Range (Daily | Monthly), Legend (Select All, RP1 ~ STI-12 칩, Product | Sample Type 탭 없음), View (Chart | Table)

### 사용 컴포넌트

Square (20), Description Number (12), 1 Depth (7), Table (5), Table/Filled Table Cell (5), Dropdown Outlined (2)

### 디스크립션 (원문)

- 3-1, 4, 5, 6, 6-1의 원문은 TI-STA-01-01 3-1, 4, 5, 6, 6-1과 같음

#### 0. Test Analytics _ Test Cost 화면

- 정의
- 사용자가 조회한 기간 내 검사 항목별 평균 비용의 변동 추이 정보제공
- Policy Setting > Cost Setting 메뉴에 등록된 단가 정보를 기반으로 차트 데이터 생성
- 차트 미노출 조건
- 검사 항목에 매핑된 필수 소모품 또는 시약 중 단가(Cost)가 하나라도 설정되지 않은 항목이 있는 경우, 해당 검사 항목은 차트 표출 대상에서 제외 처리

#### 1. 차트 타이틀 및 검사 관련 비용 최종 업데이트 일자

- 정의
- 사용자가 선택한 Key Metrics 항목 노출
- Cost 정보 최종 업데이트 일자
- 표출 항목
- Test Cost 표출

#### 2. 검사 항목별 평균 비용 정보 영역

- 정의
- 필터에서 선택한 검사 항목별 평균 비용을 표출하는 요약 영역
- 동작
- 전체 테이블 너비 100% 고정이며
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 표출 항목
- 헤더 컬럼
- ㄴ 필터에서 선택된 검사 항목명 노출
- ㄴ 마스터 코드 순서에 따라 좌➔우 고정 배치
- 데이터 셀
- ㄴ해당 검사 항목의 전체 기간 평균 비용을 통화 기호와 함께 표출

#### 3. 검사 비용 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 비용 변동 추이 비교 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영

#### 3-2. 검사 비용(Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 데이터의
- 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- Y축 최상단 단위 정보 (Unit : USD) 고정 텍스트 표출
- 해당 금액 축 라벨 수치 표출 (통화 기호 $ 필수 적용)

#### 3-3. 데이터 뷰 영역(차트 or 테이블)

- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 마우스 오버 시 해당 시점의 상세 데이터 툴팁 팝업 노출
  - (참고 : TI-STA-01/Case > Case 1)
- 표출 항목
- 선택 항목별 검사 건수 기반의 다중 꺾은선 형태로 표출

#### 6-2. 통계 대상(검사 항목) 선택 영역 : Legend

- Default : Product 탭 활성화, 전체 항목 Select
- Select All 선택 시 전체 항목 Select, 재 선택 시 전체 해제
- 단, 검사 항목에 매핑된 필수 소모품 또는 시약 중 단가(Cost)가 하나라도 설정되지 않은 항목이 있는 경우, 해당 검사 항목은 비활성화 처리 됨
- 전체 해제 시 범례 선택 안내 문구 노출
- Please select one or more legends.
- 참고 : TI-STA-01/Case > Case 3
- 모든 검사 항목이 Select될 경우, [Select All] 버튼도 자동으로
- 활성화 상태로 변경
- 활성화된 개별 칩 중 단 하나라도 클릭하여 해제할 경우, [Select All] 버튼은 즉시 비활성화(Off) 상태로 동적 변경
- 표출 항목
  - ㄴ RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P, Allplex HPV28, STI-12
- 정렬 (표출 항목)
- 공통 UX 참고 : COMM-4-a

#### 6-3. 차트 형태 선택 영역

- Chart 선택 시 꺾은선 그래프로 표출
- 참고 : TI-STA-04-01
- Table 선택 시 표로 표출
- 참고 : TI-STA-04-02

### 케이스

- TI-STA-04/Case: Case 1. Chart 상세 데이터 Tooltip

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 정책 반영 | 단위가 "(Unit : USD)", 통화 기호 "$" 고정 | 디스크립션에 넣음: 단위와 통화 기호는 Cost Setting에서 고른 통화(KRW, USD, EUR, GBP)를 따름. KRW는 소수점을 보여 주지 않음. 화면 예시도 고른 통화로 | POL-TST-003 규칙 1, POL-STA-004 정의 | 대기 |
| R02 | 디스크립션 | 3-3 "선택 항목별 검사 건수 기반의 다중 꺾은선" (TI-STA-01-01에서 복사된 것으로 보임) | 평균 비용 기반 | 디스크립션 | 대기 |
| R03 | 디스크립션 | 6-2 "Default : Product 탭 활성화"인데 화면에 Product / Sample Type 탭이 없음 | 탭 문구 지움 | 화면 글자 | 대기 |
| R04 | 디스크립션 | 1 "Cost 정보 최종 업데이트 일자"를 노출한다고 하나 화면에 없음 | 화면에 넣거나 디스크립션에서 지움 | 화면 글자 | 대기 (확인 필요) |
| R05 | 디스크립션 | 0 "차트 표출 대상에서 제외"와 6-2 "비활성화 처리"가 함께 있음. 요약 표·차트 예시에 RP1 등 5개 항목이 빠져 있으나 칩은 모두 선택 상태로 보임 | 디스크립션에 넣음: 단가가 빠진 검사 항목은 차트에서 빼고 Legend 칩도 비활성으로 보여 줌. 화면 예시도 빠진 항목의 칩을 비활성으로 | POL-STA-004 규칙 5 | 대기 |
| R06 | 디스크립션 | 평균 비용 계산식(검사 1건당 Consumable·Reagent 사용량 × 단가 등)이 없음 | 디스크립션에 넣음: 평균 비용 계산식은 개발에서 관리하므로 디스크립션에 식을 적지 않음 | POL-STA-004 규칙 6 | 대기 |
| R07 | 디스크립션 | "Policy Setting > Cost Setting 메뉴" | Cost Setting은 Policy Setting 안의 Popup | POL-TST-003 정의 | 대기 |
| R08 | 화면 정보 | Figma 화면 이름 "Test Analytics _ Test Cost", 화면 타이틀 "Test Cost (Average)", IA 이름 "Avg. Test Cost - Chart" | 하나로 통일 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R09 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | | [5] Export 선택 시 노출 내용 수정 | 정다예 | Figma 버전 메모 |
| 2.1.14 | 2026-10-30 | Policy Setting : Cost Setting 입력 값에 따른 데이터 노출 조건 | 정다예 | Figma 버전 메모 |
