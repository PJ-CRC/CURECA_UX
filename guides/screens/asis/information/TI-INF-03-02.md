---
cid: TI-INF-03-02
pair_cid:
tl_relation: 단독
title: Run Report Detail
path: Information > Run Report
type: Page
version: 2.1.14
date: 2026.10.30
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-503969
---
# TI-INF-03-02 Run Report Detail

> 기존 화면(작업방 `Run Report_asis` 페이지, Ver 2.1.14)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 패널 화면 이름은 `Run Report`이고, 기획 프레임 높이가 4116이라 리포트 전체가 화면 아래로 이어집니다.
- 호출하는 화면: 없음
- 호출되는 곳: [TI-INF-03-01] 2-2 [View] (브라우저 새 탭 PDF 뷰어)
- 원본 디스크립션 번호는 0 ~ 4 · 4-3입니다(4-1 · 4-2 없음).

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- 기본 정보 (y 206 ~)
  - REPORT ID RPT-2026-0901-001 | Generated Date/Time 2026-09-01 08:31:04
  - End Status Failed | T-IOS v3.2.1 | L-IOS v3.2.1 | CFX96 v3.2.1 | SG Viewer v3.2.1
  - CURECA (Module Count by Type): Sample Storage 1 | Consumable Storage 1 | Sample Pre-treatment 2 | High-throughput Extraction 1 | Flexible Extraction 1 | PCR Setup 1 | Plate Sealing 1 | Universal PCR 1
- Run Summary (y 535 ~)
  - Batch ID BAT-2026-0901-001 | Run By seegene1234
  - Start Date/Time 2026-04-24 11:10:20 | End Date/Time 2026-04-24 14:25:45
  - Samples (Total / Processed) 823 / 700 (STAT 32 / STAT 21) | Products (Total / Processed) 1,902 / 928 (STAT 165 / STAT 86) | Total TAT (Turnaround Time) 5h 48m
  - Completed 1,803 | Failed 51 | Not tested 24
  - ❖ Tests by Product Group — 도넛 Total 1,902 / 표 Group | Product | Count | Ratio: GI | GI-V, GI-B1, GI-B2, GI-P | 746 | 39% · HPV | Allplex HPV28 | 214 | 11% · RP | RP1, RP2, RP3, PB | 812 | 43% · RTI | STI-12 | 130 | 7%
  - ❖ Tests by Process — No | Process | Product Status Completed | Failed: 01 Sample Preparation 1,847 | 31 · 02 Nucleic Acid Extraction 1,816 | 0 · 03 PCR Setup 1,816 | 13 · 04 Plate Sealing 1,803 | 0 · 05 PCR 1,803 | 7
- Run Events Summary (y 1360 ~)
  - ❖ Events by Type — 막대(Y 0 ~ 12, 위 라벨 6 · 7 · 8 · 11) / 표 Type | Error | Warning: Instrument 2 | 4 · Inventory 1 | 6 · Sample 3 | 5 · System 4 | 7
  - ❖ Events by Module Type — Error | Warning: Sample Storage 0 | 0 · Consumable Storage 1 | 3 · Sample Pre-treatment 3 | 4 · High-throughput Extraction 1 | 2 · Flexible Extraction 1 | 2 · PCR Setup 1 | 3 · Plate Sealing 2 | 4 · Universal PCR 1 | 4 (X축 0 ~ 10)
  - ❖ Event History (Instrument Type Only) — Code | Description | Module | Unit | Occurred Date/Time
    - ER-5231 | Pick Up Fail | Sample Storage | Inbound Trolley | 2025-09-29 15:57:00
    - ER-1234 | Open the door | Consumable Storage (1) | Trolley | 2025-09-29 15:57:00
    - ER-1234 | Open the door | High-throughoutput Extraction | Spin Tip Storage | 2025-09-29 15:57:00
    - ER-1234 | Open the door | Universal PCR(1) | Outbound Trolley | 2025-09-29 15:57:00
- Module / Unit Operation Summary (y 2239 ~)
  - 머리: Module / Unit | Run-time(h) Current Run · Cumulative | Instrument Events ( Error / Warning ) Current Run · Cumulative
  - Sample Pre-treatment (1) · Sample Processing (Upper) · Sample Processing (Lower) · Sample Aliquoting (Upper) · Sample Aliquoting (Lower) · Sample Pre-treatment (2) · Sample Processing (Upper) · Sample Processing (Lower) | 48 h | 32,850 h
  - High-throughput Extraction | 38 h | 45,990 h · M9600 | 29 h 15 m | 45,990 h
  - Flexible Extraction | 29 h 15 m | 21,900 h · Flexible Extraction | 38 h | 21,900 h
  - PCR Setup (1) · STARlet · PCR Setup (2) · STARlet | 19 h | 19,710 h
  - Plate Sealing · Sealer (1) · Sealer (2) | 8 h | 9,710 h
  - Universal PCR · CFX96 (1) ~ CFX96 (6) | 21 h | 35,040 h
  - 이벤트 칸은 모든 행이 `1 / 1` · `1 / 1`

### 사용 컴포넌트

Icon (33), Checkbox (18), Table (13), Check/Line (8), Description Number (8), Tag Status (1)

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
- Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR
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
  - ---------------------------------------------------------
- Samples (Total / Processed)
- Total : Trolley에 적재되어 검사된 전체 검체 수
- Processed : Completed+Failed+Not tested 상태 검체 수
- STAT: 응급 검체 /검사 건수
- Products (Total / Processed)
- 전체 검사 단위 건 수 및 처리된 검사 단위 건 수 노출
- Total TAT (Turnaround Time)
- 배치 시작부터 종료까지 소요된 총 검사 시간 표기
- End Date/Time - Start Date/Time
  - ---------------------------------------------------------
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
- 단, Sample Storage, Consumable Storage의 경우 Device가 아니므로 제외
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

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-INF-03-02/Case1`([3543:513703](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-513703), 2252×1700)에 있습니다. 오른쪽 패널은 화면 정보만 있습니다(CID `TI-INF-03-02/Case1`, 작성자 정다예, Ver · Date `-`, 디스크립션 `0`).

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | 배치 구동 중 Instrument의 Error가 0건인 경우 | Instrument Error 0건 | 위 프레임 y 16 |

- Run Events Summary — Events by Type 표 Instrument `0 | 6` · Inventory `1 | 6` · Sample `3 | 5` · System `4 | 7`, Events by Module Type은 기획 화면과 같음
- 표 제목이 `❖ Instrument Error-Level Event History`(기획 화면은 `Event History (Instrument Type Only)`), 목록 자리에 `No error events occurred.`
