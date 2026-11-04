---
cid: TI-TMG-02
pair_cid: LI-TMG-02
tl_relation: 동일
title: Test Status
path: Test Management > Test Status
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-413074
figma_region: 2.1 2차
---
# TI-TMG-02 Test Status

> 기존 화면(작업방 Test Management 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 관련 정책: POL-SMP-001, POL-SMP-002, POL-SMP-004, POL-SMP-005, POL-SMP-008, POL-SMP-009. 검사 배치 완료 상태는 Test Status 화면에 우선 넣지 않음 (POL-SMP-004 규칙 4)
- 다른 프레임: [TI-TMG-02/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-411632)

## 기존 화면

### 화면 글자

- (GNB) Network Status | Instrument | L-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | TIOS
- (LNB) Dashboard | Test Management (Test Order, Test Status) | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Manual | Keira Knightley
- Test Status | Running
- (전체 요약) Total Batches : 3 | Progress (Processed / Total) 2,011 / 3,721 (STAT 96) | Completed | Failed | Not tested | Remaining Time 07 : 04 | Elapsed Time 7 hr 51 min | Estimated Total Time 14 hr 55 min
- (단계별) 57% | Sample Preparation 100% | Nucleic Acid Extraction 95% | PCR Setup 70% | Plate Sealing 58% | PCR 41% | 단계마다 Running: n | Completed: n | Failed: n
- Batch List
- (Batch 카드) BAT-2026-0901-001 | Progress (Processed / Total) 437 / 1,248 (STAT 50) | Completed | Failed | Not tested | Start Date/Time : 2026-04-24 14:23:15 | End Date/Time : - | Progress 54% | Remaining Time 1 hr 22 min | Elapsed Time 1 hr 38 min | Estimated Total Time 3 hr 0 min | 단계별 % 와 Running·Completed·Failed
- (Batch 카드) BAT-2026-0901-002 (진행 중), BAT-2026-0901-003 (End Date/Time : 2026-04-24 14:25:45, Progress 100%)

### 사용 컴포넌트

Arrow/Chevron_Right (19), Description Number (9), 1 Depth (7), Label/Status/Round (1), Contents/Scroll Bar (1)

### 디스크립션 (원문)

#### 0. Test Status 화면

- 정의
- Batch(Run)별 및 단계별 실시간 검사 현황 정보
- 현재 장비 내 활성화된(In-progress) 검사 기준 데이터 노출

#### 1. CURECA 구동 상태 정보

- 현재 CURECA 장비 구동 상태 정보 노출
- 장비의 실시간 상태 값에 따라 하위 정보 동적 노출
- Running
  - : 모든 데이터 노출 (현재 기획안과 동일)
- Not Initialized / Ready
  - : 데이터가 없는 경우, 해당 영역은 "-"로 표기
  - : 참고 예시 : LI-TMG-02/Case > Case 2
- Patial Running / Error
  - : Error 상태 장비가 포함된 Batch 카드에 한하여 에러 발생 시점의 수치 및 상태 멈춤
- 상태값 : COMM-4-a

#### 2. 전체 검사 현황 요약 정보 영역

- 정의
- Batch별 검사 데이터를 합산하여 요약 정보 제공

#### 2-1. 전체 Batch 기본 정보 영역

- 표출 항목
- Total Batches : 하단 Batch List에 노출되고 있는 Batch 개수
- Progress : 전체 Batch 기준 검사 진행률
- Remaining Time : 전체 Batch 기준 잔여 검사 시간
- Elapsed Time : 전체 Batch 기준 누적 검사 시간
- Estimated Total Time : 전체 Batch 기준 총 예상 소요 시간

#### 2-2. 전체 Product 검사 상태별 현황 정보 영역

- 정의
- 전체 Batch 내 검사 대상(Product)의 상태별 합계 수량 카운팅
- 표출 항목
- Progress>Total : 검사 대상 Product 수량
- Progress>Total>STAT : 검사 대상 중 응급 상태 Product 수량
- Progress>Processed : 검사가 종료된 Product 수량
- Completed : 검사 완료(성공)된 Product 수량
- Failed : 검사 실패된 Product 수량
- Not Tested : 검사 진행 불가 Product 수량

#### 2-3. 검사 단계별 검사 현황 정보 영역

- 표출 항목
- Progress (%)
  - : ((정상 완료 검사 수량 + 실패 검사 수량) ÷ 총 검사 수량) x 100
- Running : 현재 단계에서 검사 진행 중인 Product 수량
- Completed : 현재 단계에서 검사 완료(성공)된 Product 수량
- Failed : 현재 단계에서 검사 실패된 Product 수량
- 정책
- 검사 단계별 검사 진행률의 경우 앞선 단계에서 Failed나 Not Tested 발생 시 분모에서 차감하는 로직으로 적용

#### 3. Batch List 정보 영역

- 동작
- 생성 : 장비가 Running 상태 시작 시점부터 Ready 상태 도달 전까지의 Batch 카드 누적 노출
- 초기화 : 장비가 다음 Running 상태 시작 시 기존 카드 리스트 초기화 후 신규 데이터 적재
  - (참고 : LI-TMG-02/Case > Case 4)
- Batch 카드가 콘텐츠 영역을 초과할 경우, 해당 영역 내 우측 세로 스크롤 생성
- Batch 카드가 3개 이상 생성될 경우, 앵커 노출
  - 참고 : LI-TMG-02/Case > Case 3
- 정렬
- Default : Start Date/Time 기준 최신순(내림차순)
- 단, 배치가 종료될 경우 맨 하단으로 카드 이동
  - (End Date/Time 기준 최신순)

#### 3-1. Batch 기본 정보 영역

- 표출 항목
- Batch ID : 배치 생성 시 시스템에서 자동 부여되는 고유 식별자
- Start Date/Time : Run 또는 Quick Start를 통해 Run Start를 요청한 시점
- End Date/Time : Batch에 포함된 검체 중, 최종 검체의 검사 결과가 D.A.PC 시스템으로부터 수신 완료된 시점
- Progress : 해당 Batch 기준 검사 진행률
- Remaining Time : 해당 Batch 기준 잔여 검사 시간
- Elapsed Time : 해당 Batch 기준 누적 검사 시간
- Estimated Total Time : 해당 Batch 기준 총 예상 소요 시간

#### 3-2. Product 검사 상태별 현황 정보 영역

- 정의
- Batch 내 검사 대상(Product)의 상태별 수량 카운팅
- 표출 항목
- Progress/Total : 검사 대상 Product 수량
- Progress/Total/STAT : 검사 대상 중 응급 상태 Product 수량
- Progress/Processed : 검사가 종료된 Product 수량
- Completed : 검사 완료(성공)된 Product 수량
- Failed : 검사 실패된 Product 수량
- Not Tested : 검사 진행 불가 Product 수량

#### 3-3. 검사 단계별 검사 현황 정보 영역

- 2-3과 같은 원문 (Progress (%) 계산식, Running·Completed·Failed, 앞선 단계 Failed·Not Tested는 분모에서 차감)

### 케이스

- Case 1. Test 상태별 데이터 노출 예시
- Case 2. 장비 미구동 시 데이터 표출 예시
- Case 3. Batch 카드 3개 이상 생성 시
- Case 4. 모든 Batch 완료 후 초기화 전

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | 1·3 케이스 참조가 "LI-TMG-02/Case" | TI-TMG-02/Case | 케이스 프레임 이름 | 대기 |
| 2 | 표기 | 1 "Patial Running" | Partial Running | `glossary/terms.csv` | 대기 |
| 3 | 표기 | 화면 글자 "Not tested" (디스크립션은 Not Tested) | Not Tested | `glossary/terms.csv` | 대기 |
| 4 | 디스크립션 | 1 "CURECA 구동 상태", "장비 구동 상태" | 장비 통합 상태 | `glossary/terms.csv` 장비 통합 상태 | 대기 |
| 5 | 디스크립션 | 1 상태별 동작에 Not Initialized / Ready, Running, Partial Running / Error만 있음 (Initializing, Stopping, Paused 없음) | 장비 통합 상태값 전체 기준으로 정함 | `glossary/status-values.csv` 장비 통합 상태 | 대기 (확인 필요) |
| 6 | 디스크립션 | 3 "Ready 상태 도달 전까지 카드 누적"과 "다음 Running 시작 시 초기화"가 함께 있어 Ready 뒤 카드가 남는지 모호함 (Case 4 "모든 Batch 완료 후 초기화 전") | 카드 유지·초기화 시점을 한 문장으로 | 디스크립션 3, Case 4 | 대기 (확인 필요) |
| 7 | 정책 반영 | 2-2·3-2에 Completed, Failed, Not Tested (Product 수량) 표시. 검사 배치 완료 상태값은 화면에 없음 | 반영 대기 14대로 배치 완료 상태는 넣지 않음 (지금 화면과 같음) | `policy/policy-backlog.md` 14 | 대기 |
| 8 | 디스크립션 | 2-2 "Progress>Total", 3-2 "Progress/Total" 표기 다름 | 하나로 | 디스크립션 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | Batch 생성 정책 수정: 단순 인덱스 → 고유 번호 부여 | 정다예 | Figma 버전 메모 |
