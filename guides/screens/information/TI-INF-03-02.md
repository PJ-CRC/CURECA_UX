---
cid: TI-INF-03-02
pair_cid:
tl_relation: 단독
title: Run Report Detail
path: Information > Report > Detail
type: Page
version: 2.1.14
date: 2026-10-30
author: 정다예
service_mode: []
user_type: []
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6089-662998
figma_region: 2.1 2차
---
# TI-INF-03-02 Run Report Detail

> 기존 화면(작업방 Profile/Information 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 화면. IA 화면 이름은 "Datail"(오타), Figma 화면 이름은 "Run Report", 경로 "Information > Run Report". 프레임 높이 4116px의 리포트 문서 화면 (GNB·LNB 없음)
- 관련 정책: POL-SMP-002, POL-SMP-004
- 호출하는 화면: 없음 (TI-INF-03-01 [View]에서 열림)
- 다른 프레임: [TI-INF-03-02/Case1](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7650-560833) (Instrument Error 0건)

## 기존 화면

### 화면 글자

- REPORT ID RPT-2026-0901-001 | Generated Date/Time 2026-09-01 08:31:04
- End Status Failed | SW 버전: T-IOS v3.2.1 | L-IOS v3.2.1 | CFX96 v3.2.1 | SG Viewer v3.2.1
- CURECA (Module Count by Type): Sample Storage | Prep Consumable Storage | Sample Preparation | High-throughput Extraction | Flexible Extraction | PCR Setup | Plate Sealing | Universal PCR
- Run Summary
- Batch ID BAT-2026-0901-001 | Run By seegene1234 | Start Date/Time 2026-04-24 11:10:20 | End Date/Time 2026-04-24 14:25:45
- Samples (Total / Processed) 1,902 / 1,803 (STAT 32 / STAT 21) | Products (Total / Processed) (STAT 165 / STAT 86) | Total TAT (Turnaround Time) 5h 48m
- Completed | Failed | Not tested
- Tests by Product Group: Group | Product | Count | Ratio → GI (GI-V, GI-B1, GI-B2, GI-P) 746 39% | HPV (Allplex HPV28) 214 11% | RP (RP1, RP2, RP3, PB) 812 43% | RTI (STI-12) 130 7%
- Tests by Process: No | Process | Product Status (Completed | Failed) → 01 Sample Preparation 1,847 | 02 Nucleic Acid Extraction 1,816 | 03 PCR Setup 1,816 / 13 | 04 Plate Sealing 1,803 / 0 | 05 PCR 1,803 / 7
- Run Events Summary
- Events by Type: Type | Error | Warning → Instrument | Inventory | Sample | System
- Events by Module Type: Module Type별 Error | Warning (8종)
- Event History (Instrument Type Only): Code | Description | Module | Unit | Occurred Date/Time
- Module / Unit Operation Summary: Module / Unit | Run-time (Current Run | Cumulative) | Instrument Events (Current Run | Cumulative)

### 사용 컴포넌트

Table (13), Description Number (8), Tag Status (1)

### 디스크립션 (원문)

#### 0. Run Report Detail 화면

- 정의
- Run Report 목록에서 특정 리포트 선택 시 노출되는 상세 화면

#### 1. 리포트 및 CURECA 장비의 기본 정보 영역

- 정의
- 리포트 기본 정보, 구동 당시 시스템 SW 버전,
- 장비 모듈 설치 현황을 종합 노출하는 상단 카드 영역

#### 1-1. 리포트 기본 정보

- REPORT ID
- 리포트 생성 시 시스템에서 자동 부여되는 고유 식별자
- Generated Date/Time
- 배치 종료(정상 완료 또는 실패) 후 리포트가 생성된 일시
- 노출 형태 : YYYY-MM-DD HH:mm:ss

#### 1-2. Batch 종료 상태 및 SW 버전 정보

- End Status
- 배치 최종 종료 상태 정보
- 공통 UX 참고 : COMM-4-a
- SW 버전 정보 (4종)
- 리포트 생성 시점의 소프트웨어 버전 정보 노출

#### 1-3. CURECA (Module Count by Type)

- 표출 모듈 (총 8종)
- Sample Storage, Prep Consumable Storage, Sample Preparation, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR
- 장비 구성에 등록된 타입별 실제 대수(수량) 노출
- 사용중인 모듈을 기준으로 카운팅
- 단, 설치된 모듈 대수가 없을 경우 0으로 표기

#### 2. Run Summary 정보 영역

- 정의
- 해당 리포트 배치의 구동 요약 정보, 검체 처리 결과, 검사군별
- 통계 및 단계별 처리 상태를 제공하는 종합 요약 영역

#### 2-1. Batch 기본 정보

- Batch ID
- 배치 고유 식별자 정보 노출
- Test Status 메뉴의 Batch Card 내 ID와 동일 정보
- Run By
- 해당 배치를 실행한 사용자의 User ID
- Run Preparation 메뉴에서 [Run Start]를 실행한 계정
- Start Date/Time
- 해당 배치를 실행한 시점
- Run Preparation 메뉴에서 [Run Start]를 실행한 시점
- Test Status 메뉴의 Start Date/Time와 동일 정보
- End Date/Time
- 해당 배치가 종료된 시점
- Test Status 메뉴의 End Date/Time와 동일 정보
- Samples (Total / Processed)
- Total : Trolley에 적재되어 검사된 전체 검체 수
- Processed : Completed+Failed+Not tested 상태 검체 수
- STAT: 응급 검체 /검사 건수
- Products (Total / Processed)
- 전체 검사 단위 건 수 및 처리된 검사 단위 건 수 노출
- Total TAT (Turnaround Time)
- 배치 시작부터 종료까지 소요된 총 검사 시간 표기
- End Date/Time - Start Date/Time
- Completed (완료) : Product 단위 완료 검사 수
- Failed (실패) : Product 단위 실패 검사 수
- Not tested (미검사) : Product 미수행 검사 수
- ㄴ공통 UX 참고 : COMM-4-a

#### 2-2. Tests by Product Group

- 정의
- 검사군별 검사 건수 및 비중을 보여주는 도넛 차트 및 범례 테이블
- 도넛 차트
- 검사군별 비율에 따른 시각화 및 중앙에 전체 총 검사 수 노출
- 표출 데이터(Table)
- Group
- ㄴ검사군 명칭 및 차트 색상 범례 매핑 (예: RP, GI, HPV, RTI)
- Product
- ㄴ해당 그룹에 속한 세부 검사 항목 목록 표기
- Count
- ㄴ해당 검사군의 총 검사 건수
- Ratio
- ㄴ전체 대비 점유 백분율 (%, 소수점 없이 정수 또는 반올림)
- 정렬
- 검사군명 기준 오름차순
- 공통 UX 참고 : COMM-4-b

#### 2-3. Tests by Product Group

- 정의
- 검사 단계별 검체 검사 상태(Completed / Failed) 현황 테이블
- 도넛 차트
- 검사군별 비율(%)에 따른 시각화 및 전체 총 검사 수 노출
- 표출 데이터(Table)
- Process : 세부 공정 단계명
- ㄴSample Preparation, Nucleic Acid Extraction, PCR Setup, Plate Sealing, PCR
- Product Status
- ㄴCompleted (완료) : Product 단위 완료 검사 수
- ㄴFailed (실패) : Product 단위 실패 검사 수
- 딴, 특정 공정에서 실패 건수가 0건일 경우 0으로 표기

#### 3. Run Events Summary 영역

- 정의
- 해당 배치 구동 중 발생한 이벤트(Error, Warning)의 유형별
- /모듈별 통계 및 장비 에러 상세 이력을 제공하는 종합 영역
- Case
- 배치 구동 중 Instrument의 Error가 0건인 경우
- 표출 예시 : TI-INF-03-02/Case1

#### 3-1. Events by Type

- 정의
- 이벤트 유형별 발생 건수 및 심각도(Error, Warning) 현황을
- 보여주는 막대 그래프 차트 및 데이터 테이블
- 세로 막대 차트
- X축 : 이벤트 타입 (Instrument, Inventory, Sample, System)
- Y축 : 발생 건수(Count) 수치
- 상단 라벨
- ㄴ각 타입별 전체 발생 건수 합계(Error+Warning) 표기
- 하단 범례 및 집계 테이블 (Legend & Table)
- Type
- ㄴ이벤트 분류명 (Instrument, Inventory, Sample, System)
- Error : Error 상태 이벤트 발생 건수
- Warning : Warning 상태 이벤트 발생 건수

#### 3-2. Events by Module Type

- 정의
- CURECA 장비 모듈별 이벤트 발생 건수와 심각도를 보여주는 누적 가로 막대 차트
- 가로 누적 바 차트
- Y축 : CURECA 모듈 타입 목록 (총 8종)
- ㄴ 단, 모듈 대수가 0인 항목은 차트에서 제외
- X축 : 이벤트 발생 건수
- Error(Red) + Warning(Orange) 누적 막대 형태로 시각화
- 우측 수치 표기 (Count Summary)
- 각 모듈 라인 우측에 Error 건수와 Warning 건수를 분리하여 표기
- 이벤트 발생 이력이 없는 모듈의 경우 0 / 0으로 표기

#### 3-3. Event History (Instrument Type Only)

- 정의
- 발생한 이벤트 중 Instrument 타입이면서 심각도가 Error인
  - 건에 대한 상세 발생 이력 정보
- Event History에서 표출되는 데이터와 동일 레벨
- 표출 데이터(Table)
- Code
- ㄴ시스템에서 관리되고 있는 이벤트 에러 코드
- Description
- ㄴ시스템에서 관리되고 있는 해당 에러 코드의 에러 메시지
- Module
- ㄴ 에러가 발생한 모듈명
- Unit
- ㄴ 모듈 내부의 발생 세부 유닛명
- Occurred Date/Time
- ㄴ에러 발생 일시 (YYYY-MM-DD HH:mm:ss)
- 정렬
- Occurred Date/Time 기준 내림차순(최신순) 정렬

#### 4. Module / Unit Operation Summary 영역

- 정의
- CURECA 장비의 각 모듈 및 하위 유닛별 가동 시간(Run-time)과
- 장비 이벤트(Error/Warning) 발생 현황을 배치 단위(Current Run) 및 시스템 누적(Cumulative) 기준으로 제공
- 동일 모듈이 N대일 경우, 각 모듈별 분리하여 표기

#### 4-3. 표출 데이터(Table)

- Module / Unit (Device 만 해당)
- 계층 구조 노출 (Tree/Group 형태)
- 최상위 : Module 명
- 하위 : 해당 모듈에 소속된 Unit 명
- 단, Sample Storage, Prep Consumable Storage의 경우 Device가 아니므로 제외
- Run-time
- Current Run
- ㄴ해당 배치 구동 중 해당 Module/Unit이 실제로 가동된 시간 표기
- ㄴ단위 및 포맷 : 시간·분 단위 정수, h · m 표기
- ㄴ(예: 29 h 15 m, 0 h 45 m)
- ㄴ초 단위는 버림
- Cumulative
- ㄴ시스템 셋업 이후 해당 Module/Unit의 총 누적 가동 시간 표기
- ㄴ단위 및 포맷 : 시간 단위 정수, 천 단위 콤마(,) 적용 + h 표기
- ㄴ(예: 4,380 h)
- ㄴ분 단위는 버림
- Instrument Events ( Error / Warning )
- Current Run
- ㄴ해당 배치 구동 중 발생한 Instrument 타입 이벤트 건수 표기
- ㄴ표기 형식 : Error 건수 / Warning 건수
- Cumulative
- ㄴ시스템 셋업 이후 해당 Module/Unit에서 누적 발생한 Instrument 타입 이벤트 건수 표기
- ㄴ 표기 형식 : 누적 Error 건수 / 누적 Warning 건수

### 케이스

- Case 1. 배치 구동 중 Instrument의 Error가 0건인 경우 ([TI-INF-03-02/Case1](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7650-560833))

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | IA 화면 이름 "Datail", Figma 화면 이름 "Run Report" | Detail (IA 오타 수정), 화면 이름을 Run Report Detail 등으로 구분 | `ia/ia-screens.csv`, 디스크립션 0 | 대기 |
| 2 | 권한 | User Type별 접근 정의 없음 | TI-INF-03-01과 같이: T-IOS에서만, Service·Admin·User 모두 볼 수 있음 | `policy/permission-matrix.csv` Information > Report, POL-SMP-004 규칙 6 | 대기 |
| 3 | 디스크립션 | 2-3 제목이 2-2와 같은 "Tests by Product Group" | Tests by Process (화면 글자와 같게) | 화면 글자 | 대기 |
| 4 | 디스크립션 | 2-3에 "도넛 차트 ... 검사군별 비율" 문장이 있으나 화면은 단계별 표 | 2-2에서 복사된 문장으로 보임. 지움 | 화면 글자 | 대기 (확인 필요) |
| 5 | 디스크립션 | 2-3 "딴," | 단, | 오타 | 대기 |
| 6 | 표기 | "Not tested" (화면, 2-1) | Not Tested | `glossary/terms.csv` 쓰지 않는 표현 Not tested | 대기 |
| 7 | 디스크립션 | 번호 4 아래에 4-3만 있음 (4-1, 4-2 없음) | 번호 정리 | 디스크립션 | 대기 |
| 8 | 디스크립션 | 1-1 Generated Date/Time "배치 종료(정상 완료 또는 실패) 후" | 배치 종료 후 (End Status 5개 값 모두) | `glossary/status-values.csv` 검사 배치 완료 상태 | 대기 |
| 9 | 디스크립션 | 3-1 "Error 상태 이벤트", "Warning 상태 이벤트" | Error 등급, Warning 등급 (Event Level) | `glossary/status-values.csv` 이벤트 등급 | 대기 |
| 10 | 디스크립션 | 1-2 SW 버전 4종이 어떤 시스템인지 디스크립션에 없음 (화면은 T-IOS, L-IOS, CFX96, SG Viewer) | 4종을 디스크립션에 적음 | 화면 글자 | 대기 |
| 11 | 디스크립션 | 2-1 Samples Total "Trolley에 적재되어 검사된 전체 검체 수" | STAT Storage Sample 포함 여부를 팀 논의 후 정함 | PD-0003 | 대기 (확인 필요) |
| 12 | 디스크립션 | 4-3 Run-time Current Run "h · m", Cumulative "h" 표기. Instruments Run-time은 h만 | Run-time 표기를 POL-EQP-005와 맞춤 | POL-EQP-005 | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
