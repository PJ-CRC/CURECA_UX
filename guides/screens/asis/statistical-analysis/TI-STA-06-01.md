---
cid: TI-STA-06-01
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
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-440233
---
# TI-STA-06-01 Instrument _ Error Rate Trend

> 기존 화면(작업방 `SA_Instrument_asis` 페이지, Ver 2.1.03)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-06-02] Error Rate Trend Table (2 Table), [TI-STA-05-01] Run-time Trend (1 Tab)
- 호출되는 곳: [TI-STA-05-01] 1 Tab Error Rate Trend (노출 조건: Account Type이 Service일 경우만)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Instrument | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Instrument | Inventory | Event | Test Forecasting | Setting | Information | Keira Knightley | Logout
- 탭: Run-time Trend | Error Rate Trend
- Chart | Table | Export
- Error Rate Trend (Cumulative) | (Unit : %)
- 누적 에러율: Consumable / Storage (1) 10% | Consumable / Storage (2) 11% | Consumable / Storage (3) 13% | Consumable / Storage (4) 16%
- 차트: Y축 30% · 25% · 20% · 15% · 10% · 0% | X축 2026-01 | 2026-02 | 2026-03 | 2026-04 | 2026-05 | 2026-06 | 2026-07
- 오른쪽 조회 영역
  - Date Range: Daily | Monthly / 2026-01 | 2026-07
  - Legend: Module | Unit / Consumable Storage (Dropdown) / Select All | Consumable Storage (1) | Consumable Storage (2) | Consumable Storage (3) | Consumable Storage (4)

### 사용 컴포넌트

Description Number (10), Square (6), 1 Depth (6), 2 Depth (5), Form/CheckBox (5), Dropdown Outlined (3), ViewMode/Barchart (1), ViewMode/Data_List (1), Frame (1), Arrow/Chevron_Up (1), Interface/Setting_Outlined (1)

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

#### 1. 통계 지표 정보 영역(Tab)

- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 동작
- 활성 탭 변경 시, 각 Tab의 디폴트 세팅 값으로 재로딩
- 단일 선택, 다른 항목 선택 시 기존 활성화된 항목은 비활성화
- Tab 표출 항목
- Run-time Trend
- Error Rate Trend
- 노출 조건
- Error Rate Trend는 Account Type이 Sevice일 경우만 노출

#### 2. 차트 형태 영역(Segmented Control)

- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 동작
- Chart 선택 시 꺾은선 그래프로 표출 (참고 : TI-STA-06-01)
- Table 선택 시 표로 표출 (참고 : TI-STA-06-02)

#### 3. 누적 Error Rate 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 누적 에러율 추이 비교 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 표출 항목
- 타이틀 : Error Rate Trend (Cumulative)
- 가동 시간 단위 정보 : (Unit : %)
- 기간별/장비별 누적 에러율 추이 차트 및 수치 정보

#### 3-1. 조회 기간(X축) 정보

- 동작
- 텍스트 겹침 방지를 위해 라이브러리의 Auto-skip 기능 활성화 및 가로 폭에 따른 라벨 개수 자동 최적화
- 표출 항목
- 사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 3-2. 에러율(Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 데이터의
- 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- 에러율 라벨 표출

#### 3-3. 데이터 뷰 영역(차트 or 테이블)

- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 마우스 오버 시 해당 시점의 상세 데이터 툴팁 팝업 노출
  - (참고 : TI-STA-06-02/Case 1)
- 표출 항목
- 선택 항목별 에러율 기반의 단일 또는 다중 꺾은선 형태로 표출

#### 3-4. 장비별 누적 에러율 정보

- 정의
- 필터에서 선택한 장비별 누적 에러율 표출 영역
- 동작
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 선택 항목이 영역을 넘어갈 경우 스크롤 노출
- 표출 항목
- 선택된 장비 항목
- ㄴ 개별 장비 항목별 조회 기간 내 누적 에러율 각각 표출
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

#### 5. 통계 대상(장비 항목) 선택 영역 : Legend

- Default
- Module 탭 활성화
- 드롭박스 내 첫번째 항목 Select, 하위 전체 항목 Select
- 동작
- Select All 선택 시 전체 항목 Select, 재 선택 시 전체 해제
- 전체 해제 시 범례 선택 안내 문구 노출
- ㄴ Please select one or more legends.
- ㄴ 참고 : TI-STA-05-01/Case 2
- 모든 하위 항목이 Select될 경우, [Select All] 버튼도 자동으로
- 활성화 상태로 변경
- 활성화된 개별 칩 중 단 하나라도 클릭하여 해제할 경우, [Select All] 버튼은 즉시 비활성화(Off) 상태로 동적 변경
- 표출 항목
- Module 단위 선택 시 노출 데이터
- ㄴ참고 : TI-STA-05-01/Case 3
- Unit 단위 선택 시 노출 데이터
- ㄴ참고 : TI-STA-05-01/Case 4

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

케이스는 같은 페이지의 별도 프레임 `TI-STA-06-01/Case`([3543:439482](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-439482), 2252×1490)에 있습니다. 케이스마다 오른쪽 패널이 있고, 패널 CID는 원문 그대로 `TI-STA-05-01/Case`입니다(작성자 정다예, Ver 2.1.03, Date 2026.08.21, 디스크립션 `0` / `- / -`). 디스크립션 3-3은 `TI-STA-06-02/Case 1`을 가리키지만 그 이름의 프레임은 없습니다(원문 그대로). 디스크립션 5는 `TI-STA-05-01/Case`의 Case 2 · 3 · 4를 가리킵니다(내용은 [TI-STA-05-01] 케이스 절).

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Chart 상세 데이터 Tooltip | 차트 내 특정 시점에 마우스 오버 | 위 프레임 (0, 0) |
| 2 | Legend 전체 해제 시 | Legend 전체 해제 | 위 프레임 (0, 761) |

- Case 1: 툴팁 예시 `01-04 | Total : 13%` / Consumable Storage (1) 12% | Consumable Storage (2) 13% | Consumable Storage (3) 11% | Consumable Storage (4) 15% (같은 툴팁이 두 자리에 있음). 차트 제목 Error Rate Trend (Cumulative), Y축 30% ~ 0%, X축 2026-01 ~ 2026-07
- Case 2: 차트 자리에 `Please select one or more legends.` 안내. 오른쪽 Date Range 2026-01-01 | 2026-01-07, Legend Consumable Storage · Select All · Consumable Storage (1) ~ (4)
