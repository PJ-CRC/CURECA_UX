---
cid: LI-TMG-02
pair_cid: TI-TMG-02
tl_relation: 동일
title: Test Status
path: Test Management > Test Status
type: Page
version: 2.1.14
date: 2026.10.30
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-117342
---
# LI-TMG-02 Test Status

> 기존 화면(작업방 `Test Status_asis` 페이지, Ver 2.1.14)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 디스크립션은 TI-TMG-02와 같음. 화면 글자는 GNB · LNB와 Batch 카드 ID 순서만 다름(L은 위에서부터 BAT-2026-0901-003 · 002 · 001, T는 001 · 002 · 003)
- 호출하는 화면: (원문에 없음)
- 호출되는 곳: LNB > Test Management > Test Status
- 관련 정책: POL-SMP-001, POL-SMP-002, POL-SMP-004, POL-SMP-005, POL-SMP-008, POL-SMP-009. 검사 배치 완료 상태는 Test Status 화면에 우선 넣지 않음 (POL-SMP-004 규칙 4)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Network Status | Instrument | T-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Test Order | Test Status | Sample Tracking | Instrument | Inventory | Setting | Run | Quick Start | Information | Manual | Keira Knightley
- Test Status | Running
- 전체 요약: Total Batches : 3 | Remaining Time 07 : 04 | 57% | Elapsed Time 7 hr 51 min | Estimated Total Time 14 hr 55 min
- Progress (Processed / Total) 2,011 / 3,721 (STAT 96) | Completed 1,532 | Failed 42 | Not tested 437
- 단계(Sample Preparation | Nucleic Acid Extraction | PCR Setup | Plate Sealing | PCR): 100% · 95% · 70% · 58% · 41% / Running: 0 · Completed: 3,284 · Failed: 0 | Running: 42 · Completed: 3,209 · Failed: 42 | Running: 570 · Completed: 2,639 · Failed: 0 | Running: 747 · Completed: 2,176 · Failed: 0 | Running: 644 · Completed: 1,532 · Failed: 0
- Batch List
  - BAT-2026-0901-003 | Start Date/Time : 2026-04-24 14:23:15 | End Date/Time : - | 437 / 1,248 (STAT 50) | Completed 0 · Failed 0 · Not tested 437 | Progress 54% | 1 hr 22 min / 1 hr 38 min / 3 hr 0 min | 단계 100% · 100% · 65% · 40% · 0% / Running: 0 · Completed: 811 · Failed: 0 | Running: 0 · Completed: 811 · Failed: 0 | Running: 284 · Completed: 527 · Failed: 0 | Running: 487 · Completed: 324 · Failed: 0 | Running: 324 · Completed: 0 · Failed: 0
  - BAT-2026-0901-002 | Start Date/Time : 2026-04-24 13:15:42 | End Date/Time : - | 42 / 950 (STAT 23) | Completed 0 · Failed 42 · Not tested 0 | Progress 35% | 1 hr 47 min / 58 min / 2 hr 45 min | 단계 100% · 91% · 64% · 35% · 0% / Running: 0 · Completed: 950 · Failed: 0 | Running: 42 · Completed: 866 · Failed: 42 | Running: 286 · Completed: 580 · Failed: 0 | Running: 260 · Completed: 320 · Failed: 0 | Running: 320 · Completed: 0 · Failed: 0
  - BAT-2026-0901-001 | Start Date/Time : 2026-04-24 11:10:20 | End Date/Time : 2026-04-24 14:25:45 | 1,532 / 1,532 (STAT 0) | Completed 1532 · Failed 0 · Not tested 0 | Progress 100% | 0 min / 3 hr 15 min / 3 hr 15 min | 단계 100% × 5 / Running: 0 · Completed: 1,532 · Failed: 0 (5단계 같음)
- 각 카드 항목 이름: Progress (Processed / Total) | Completed | Failed | Not tested | Progress | Remaining Time | Elapsed Time | Estimated Total Time

### 사용 컴포넌트

Arrow/Chevron_Right (19), Description Number (9), Component 3 (1), Frame (1), Label/Status/Round (1), Contents/Scroll Bar (1)

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

#### 2-3. 검사 단계별  검사 현황 정보 영역

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

#### 3-3. 검사 단계별  검사 현황 정보 영역

- 표출 항목
- Progress (%)
  - : ((정상 완료 검사 수량 + 실패 검사 수량) ÷ 총 검사 수량) x 100
- Running : 현재 단계에서 검사 진행 중인 Product 수량
- Completed : 현재 단계에서 검사 완료(성공)된 Product 수량
- Failed : 현재 단계에서 검사 실패된 Product 수량
- 정책
- 검사 단계별 검사 진행률의 경우 앞선 단계에서 Failed나 Not Tested 발생 시 분모에서 차감하는 로직으로 적용

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Test 상태별 데이터 노출 예시 | 노란 띠 1-1 검사 완료 상태 · 1-2 검사 진행 중 상태 | [LI-TMG-02/Case](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-117852) |
| 2 | 장비 미구동 시 데이터 표출 예시 (패널 화면 이름: 장비가 준비 중일 경우 데이터 노출 예시) | 노란 띠 1-1 시스템 진입 후 최초 Initializing 직후 Ready 상태일 경우 · 1-2 Not Initialized 상태일 경우 | 같은 프레임 |
| 3 | Batch 카드 3개 이상 생성 시 | Batch List 내 카드가 3개 이상 | 같은 프레임 |
| 4 | 모든 Batch 완료 후 초기화 전 (패널 화면 이름: 장비가 준비 중일 경우 데이터 노출 예시) | 모든 Batch 완료 뒤 다음 Running 전 | 같은 프레임 |

- Case 1 (원문)
  - 1-1. 검사 완료 상태 — 검사 단위의 모든 검체 검사가 완료되어 Start Date/Time과  End Date/Time 노출 / 현재 장비에 진행되고 있는 모든 검사 완료 후 장비가 Ready상태가 될 때까지 노출 이후 해당 페이지에서 사라짐 — 예시 카드: BAT-2026-0901-003, 1,532 / 1,532 (STAT 0), Completed 1532 · Failed 0 · Not tested 0, Start 2026-04-24 11:10:20 · End 2026-04-24 14:25:45, Progress 100%, 단계별 100%, 0 min / 3 hr 15 min / 3 hr 15 min
  - 1-2. 검사 진행 중 상태 — 검사 시작은 되었지만 아직 완료되지 않은 상태로 Start Date/Time 만 노출 / 검사 단계별 현재 배치에서 검사 완료한 검사단위 검체 수 및 백분율 누적 수치 노출 / 특정 검사 단계에서 Failed된 검사가 있을 경우 다음 단계의 백분율 계산 시 분모에서 제외 — 예시 카드: BAT-2026-0901-001, 437 / 1,248 (STAT 50), Completed 0 · Failed 0 · Not tested 437, Start 2026-04-24 14:23:15 · End -, Progress 54%, 단계별 100% · 100% · 65% · 40% · 0%, 1 hr 22 min / 1 hr 38 min / 3 hr 0 min
  - 케이스 패널: 화면 정보만 있고 디스크립션 없음(번호 칸 `0`)
- Case 2 (원문)
  - 두 화면 모두: Test Status | 상태(1-1 `Ready` / 1-2 `Not Initialized`) | Total Batches : - | - / - (STAT -) | Completed · Failed · Not tested `-` | Remaining Time - : - | -% | 단계별 0% | Elapsed Time · Estimated Total Time - min | Running · Completed · Failed `-` | Batch List | `There are no tests in progress.`
  - 케이스 패널: 화면 정보만 있고 디스크립션 없음(번호 칸 `0`)
- Case 3 (원문)
  - 케이스 패널 1. 배치 리스트 앵커 내비게이션 / 노출 조건 / - Batch List 내 카드가 3개 이상 생성될 경우 노출 / 동작 / -각 Batch 탭 클릭 시, 하단 대용량 리스트 내 해당 Batch 구간으로 화면이 즉시 스크롤 이동 / 사용자가 마우스 휠이나 터치로 하단 리스트를 직접 스크롤할 때, 현재 화면에 노출 중인 Batch 구간에 맞춰 상단 Batch 탭의 활성화 상태가 동적으로 실시간 연동
  - 케이스 화면 글자: 기본 화면과 같은 요약 영역 + Batch List 위 앵커 `Batch (1) | Batch (2) | Batch (3) | Batch (4) | Batch (5)` + 카드 BAT-2026-0901-004 · BAT-2026-0901-002 · BAT-2026-0901-001 (값은 원본 프레임 참고)
- Case 4 (원문)
  - 설명: 장비가 Running 상태 시작 시점부터 Ready 상태 도달 전까지의 Batch 카드 누적 노출 / 장비가 다음 Running 상태가 되기 전까지 이전 배치 카드가 완료되어있는 상태 화면 노출
  - 케이스 화면 글자: Test Status | Ready | Total Batches : 3 | 3,721 / 3,721 (STAT 96) | Completed 3,284 · Failed 42 · Not tested 437 | Remaining Time 00 : 00 | 100% | 단계별 100% | 14 hr 55 min / 14 hr 55 min, 카드 3개 모두 End Date/Time이 있는 완료 상태 (값은 원본 프레임 참고)
  - 케이스 패널: 화면 정보만 있고 디스크립션 없음(번호 칸 `0`)
