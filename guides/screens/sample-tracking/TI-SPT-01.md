---
cid: TI-SPT-01
pair_cid: LI-SPT-01
tl_relation: 동일
title: Samples
path: Sample Tracking > Samples
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-110169
figma_region: 2.1 2차
---
# TI-SPT-01 Samples

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: IA는 짝 화면 동일(Y). 디스크립션 3 [Export] 설명이 L-IOS(LI-SPT-01)와 다름 (반영 대기 목록 4)
- 관련 정책: POL-SMP-001, POL-SMP-002, POL-SMP-003, POL-SMP-005, POL-COM-006
- 호출하는 화면: Samples Details (TI-SPT-01-01, 같은 화면 오른쪽에 열림)
- 다른 프레임: [TI-SPT-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-110521), [이름이 TI-SPT-01-01인 TI-SPT-01 프레임 (Ver 2.1, 디스크립션 없음)](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1335-135567)

## 기존 화면

### 화면 글자

- (GNB·LNB) Test Management 화면(TI-TMG-01)과 같은 T-IOS 공통 영역. LNB에서 Sample Tracking (Samples, 96-DWP, PCR Plate) 선택
- Samples
- Sample ID | Product: All | Sample Type: All | Date: Order Date, 2026-03-05 ~ 2026-03-11 | Status: All | STAT Only | Reset | Search
- Items | Export
- Sample ID | Product | Sample Type | Order Date | Status | Progress | Start Date/Time | End Date/Time | STAT
- AA0005001 | RP1 | Sputum | Not Tested | - | -
- AA0005002 | STI-12 | Thinprep | Ready | - | -
- AA0005003 | STI-12 | Surepath | Failed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- AA0005004 | STI-12 | Swab | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- AA0005005 | PB | Saliva | Running | 2026-03-05 10:22:48 | -
- (이하 예시 줄 생략. Progress는 단계 아이콘으로 표시)

### 사용 컴포넌트

Description Number (12), Table (11), Tag Status (10), Table/Filled Table Cell (10), Arrow/Chevron_Right (10), Title (8)

### 디스크립션 (원문)

#### 0. Samples 화면

- 정의
- Run Start로 통해 검사를 시작한 검체 정보
- 검체별 검사 단위로 리스트 노출
- 동작
- 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출

#### 1. 검색 영역

- 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 : COMM-5-s

#### 1-1. Sample ID(Text Input)

- 기능 : 검체 ID를 입력하여 데이터 조회
- 동작
- 하위 리스트 내 Sample ID 컬럼 대상으로 입력
- 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
- 영문 입력 시 대소문자를 구분하지 않음

#### 1-2. Product(Multi-Select Dropdown)

- 기능
- 검사 항목을 다중 선택하여 데이터 조회
- 공통 UX 참고 : COMM-5-f(2/2)
- Default : All
- 드롭다운 리스트 항목
- All, RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P, Allplex HPV28, STI-12

#### 1-3. Sample Type(Multi-Select Dropdown)

- 기능
- 검체 타입을 다중 선택하여 데이터 조회
- 공통 UX 참고 : COMM-5-f(2/2)
- Default : All
- 드롭다운 리스트 항목
- All, Swab, Aspirate, BAL, Saliva, Sputum, Raw stool, Cary-blair, eNAT stool, Fecal swab, Thinprep, Surepath, Cellpreserv, Urine, Semen

#### 1-4. Date(Cascading Dropdown)

- 기능
- 조회 기준(일자 유형)을 먼저 선택하고, 특정 일자 및 기간 설정하여 데이터 조회
- 공통 UX 참고 : COMM-5-d(1/5)
- 일자 유형[좌] : 조회하고 싶은 일자 유형 선택
- 특정 일자 및 기간[우] : 선택 유형에 대한 일자 및 기간 설정
- 단, 오늘 기준 미래일자는 선택 불가
- Default
- 일자 유형[좌] : Order Date
- 특정 일자 및 기간[우] : 시작일-7일 전 ~ 종료일-Today
- 드롭다운 리스트 항목
- Order Date, Start Date, End Date

#### 1-5. Status(Dropdown)

- 기능
- 검사 상태를 단일 선택하여 데이터 조회
- 공통 UX 참고 : COMM-5-f(1/2)
- Default : All
- 드롭다운 리스트 항목
- All, Ready, Not Tested, Running, Completed, Failed

#### 1-6. STAT Only(Check box)

- 기능 : 응급 상태의 검체 데이터 조회
- Default : UnSelected(미선택)
- 리스트 노출
- Selected(선택) 시, 응급 상태의 검체만 노출
- UnSelected(미선택) 시, 전체 검체 노출

#### 2. Samples 리스트

- 정의 : 검사 접수된 검체 중 Run을 실행한 검체 리스트
- 공통 UX 참고 : COMM-5-m
- 정렬
- Default : Start Date/Time 기준 최신순(내림차순)
- Default 조건 동일 시, Sample ID 기준 오름차순
- 동작
- 특정 샘플 행 클릭 시 샘플 상세 노출 : TI-SPT-01-01

#### 2-1. 리스트 표출 항목

- Sample ID
  - T-IOS에서 수신되는 검체 ID 정보
- Product
  - T-IOS에서 수신되는 검사 항목 정보
  - 하나의 검사 항목 단위 정보 노출
- Sample Type
  - T-IOS에서 수신되는 검체 타입 정보
- Order Date
  - LIS 접수 일자 정보
  - 표기 : YYYY-MM-DD
- Status
  - 검체의 검사 진행 상태 정보
  - 상태 값 : COMM-4-a
- Progress
  - 전체 검사 프로세스 대비 단계별 진행 현황 정보
  - 상태 값 : COMM-4-a
- Start Date/Time
  - Prep 장비에서 바코드 찍은 시간 시점
- End Date/Time
  - L-IOS가 D.A.PC(결과처리 시스템)로부터 검사 결과를 받은 시점
- STAT
  - T-IOS에서 수신되는 검체 응급 여/부 상태 정보

#### 2-2. Progress 상태 정보(Tooltip)

- 공통 UX 참고 : COMM-5-o
- 표출 예시 : TI-SPT-01/Case → Case 2

#### 3. [Export] 버튼

- 버튼 선택 시, OS에서 제공하는 파일함이 팝업으로 제공되어 저장경로를 설정 후 내보내기 할 수 있음
- 대상 범위: 목록에 노출된 전체 리스트
- 저장 항목: Detail에서 제공되는 모든 내용
- 형식: 엑셀파일

#### 4. 페이지네이션

- 공통 UX 참고 : COMM-5-i

### 케이스

- Case 1. Sample 상태별 데이터 노출 예시
- Case 2. Progress 상태 정보 Tooltip

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 프레임 1335:135567의 이름은 "TI-SPT-01-01"인데 화면 정보 CID는 TI-SPT-01 (Ver 2.1, 2026-06-25). 디스크립션이 비어 있고 상세 영역 글자가 프랑스어(Processus, Unité 등) | 시안·언어 확인용으로 보고 옮기지 않음. 프레임 이름 정리 또는 삭제 확인 | Figma 프레임 | 대기 (확인 필요) |
| R02 | 화면 정보 | 화면 정보 Ver 2.0인데 버전 메모에 v2.1.01이 있음 | Ver를 버전 메모와 맞춤 | Figma 버전 메모 | 대기 |
| R03 | 디스크립션 | 0 "Run Start로 통해" | Run Start를 통해 | 오타 | 대기 |
| R04 | T/L 차이 | 3 [Export]: T-IOS는 "OS 파일함, 엑셀파일, 저장 항목은 Detail의 모든 내용", L-IOS는 ".CVS 파일, COMM-5-j(4/4) 팝업". IA는 짝 화면 동일 | 파일 형식은 T-IOS·L-IOS 모두 .csv. 저장 방법만 다름: T-IOS는 OS 파일 탐색기, L-IOS는 경로 저장·USB 저장 Popup (COMM-5-j(4/4)) | POL-COM-006 규칙 1·3·4 | 대기 |
| R05 | 디스크립션 | 2-1 "T-IOS에서 수신되는 검체 ID·검사 항목·검체 타입·응급 여부" (T-IOS 화면) | T-IOS 기준 출처로 고쳐 씀 | 디스크립션 | 대기 (확인 필요) |
| R06 | 디스크립션 | 2-1 Start Date/Time "Prep 장비에서 바코드 찍은 시간" | 어느 Module인지 표준어로 | `glossary/terms.csv` | 대기 (확인 필요) |
| R07 | 디스크립션 | 2-1 Progress "상태 값 : COMM-4-a" (Progress는 단계 진행 표시) | 단계 표시 기준을 검사 단계(`glossary/test-stages.csv`)로 | `glossary/test-stages.csv` | 대기 (확인 필요) |
| R08 | 디스크립션 | 1-2 Product 목록이 11개로 고정 | 검사 항목 목록 기준 확인 | `glossary/test-items.csv` | 대기 (확인 필요) |
| R09 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (화면 정보 기준) | 정다예 | Figma 화면 정보 |
| 2.1.01 | | [3] Export 선택 시 노출 내용 수정 | 정다예 | Figma 버전 메모 |
