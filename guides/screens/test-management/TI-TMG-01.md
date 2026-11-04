---
cid: TI-TMG-01
pair_cid: LI-TMG-01
tl_relation: 동일
title: Test Order
path: Test Management > Test Order
type: Page
version: 2.1.11
date: 2026-10-08
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-436470
figma_region: 2.1 2차
---
# TI-TMG-01 Test Order

> 기존 화면(작업방 Test Management 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: IA는 짝 화면 동일(Y). 디스크립션 4 [Import]·[Export] 설명이 L-IOS(LI-TMG-01)와 다름 (반영 대기 목록 4)
- 관련 정책: POL-SMP-001, POL-SMP-002, POL-SMP-003, POL-SMP-005, POL-SMP-006, POL-SMP-008, POL-COM-006
- 호출하는 화면: Alert_031 (Import 파일 형식 오류)
- 다른 프레임: [TI-TMG-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-436883)

## 기존 화면

### 화면 글자

- (GNB) Network Status | Instrument | L-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | TIOS
- (LNB) Dashboard | Test Management (Test Order, Test Status) | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Manual | Keira Knightley
- Test Order
- Sample ID | Product: All | Sample Type: All | Date: Order Date, 2026-03-05 ~ 2026-03-11 | Status: All | Canceled Only | STAT Only | Reset | Search
- Items | Total Samples | STAT | Total Products | Refresh | Import | Export
- Sample ID | Product | Sample Type | Order Date | Status | Start Date/Time | End Date/Time | Canceled Date | Canceled | STAT
- AA0005001 | RP1 | Swab | Ordered | - | - | - | -
- AA0005001 | RP3 | Swab | Running | 2026-03-05 10:22:48 | - | - | -
- AA0005002 | PB | Swab | Failed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48 | - | -
- AA0005003 | RP1 | Saliva | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48 | - | -
- AA0005006 | GI-B1 | eNAT stool | Not Tested | - | - | - | -
- (이하 예시 줄 생략. Status 예시: Ordered, Ready, Running, Failed, Completed, Not Tested)

### 사용 컴포넌트

Description (14), Description Number (13), Title (10), Table (10), Tag Status (10), Table/Filled Table Cell (10), Frame/Instrument_Status (10), 1 Depth (7), Dropdown Outlined (5), Square (5), Checkbox (2), Form/Input Text Box (1)

### 디스크립션 (원문)

#### 0. Test Order 화면

- 정의
- T-IOS를 통해 접수 받은 검체 정보
- 검체별 검사 단위로 리스트 노출

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
- Order Date, Canceled Date, Start Date, End Date

#### 1-5. Status(Dropdown)

- 기능
- 검사 상태를 단일 선택하여 데이터 조회
- 공통 UX 참고 : COMM-5-f(1/2)
- Default : All
- 드롭다운 리스트 항목
- All, Ordered, Ready, Not Tested, Running, Completed, Failed

#### 1-6. Canceled Only(Check box)

- 기능 : 취소 상태의 검체 데이터 조회
- Default : UnSelected(미선택)
- 리스트 노출
- Selected(선택) 시, 취소 상태의 검체만 노출
- UnSelected(미선택) 시, 전체 검체 노출

#### 1-7. STAT Only(Check box)

- 기능 : 응급 상태의 검체 데이터 조회
- Default : UnSelected(미선택)
- 리스트 노출
- Selected(선택) 시, 응급 상태의 검체만 노출
- UnSelected(미선택) 시, 전체 검체 노출

#### 2. Test order 리스트

- 정의 : 검사 접수된 검체 중 Run 실행을 위해 Trolley 또는 응급 서랍을 통해 도킹된 상태의 검체 리스트(검사 항목 단위)
- 공통 UX 참고 : COMM-5-m
- 정렬
- Default : Order Date 기준 최신순(내림차순)
- Default 조건 동일 시, Sample ID 기준 오름차순

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
- Start Date/Time
  - Prep 장비에서 바코드 찍은 시간 시점
- End Date/Time
  - L-IOS가 D.A.PC(결과처리 시스템)로부터 검사 결과를 받은 시점
- Canceled Date
  - LIS 취소 접수 일자 정보
  - 검사 접수 취소 건에 한하여 노출
  - 표기 : YYYY-MM-DD
- Canceled
  - LIS에서 수신되는 검체 오더 취소 여/부 정보
- STAT
  - T-IOS에서 수신되는 검체 응급 여/부 상태 정보

#### 3. 검사 오더 정보 요약

- 동작
- 사용자 필터링 결과에 따른 요약 지표 즉시 업데이트
- 표출 항목
- Total Samples : LIS에서 접수된 전체 Sample 건수
- STAT : 전체 Sample 중 STAT(응급)상태 건수
- Total Products : 전체 Sample별 Product(검사 항목) 단위 건수

#### 4. 리스트 제어 버튼

- [Refresh] 버튼
  - 설정된 조회 조건 유지, 리스트 데이터를 최신 상태로 업데이트
- [Import] 버튼
  - 버튼 선택 시, OS에서 제공하는 파일함이 팝업으로 제공되어 경로를 선택한 후 가져오기 할 수 있음
  - 형식: 엑셀파일
  - 단, 파일 형식이 올바르지 않는 경우 Alert_031 팝업 노출
- [Export] 버튼
  - 버튼 선택 시, OS에서 제공하는 파일함이 팝업으로 제공되어 저장경로를 설정 후 내보내기 할 수 있음
  - 대상 범위: 목록에 노출된 전체 리스트
  - 저장 항목: 목록에서 제공되는 모든 내용
  - 형식: 엑셀파일

#### 5. 페이지네이션

- 공통 UX 참고 : COMM-5-i

### 케이스

- Case 1. Sample 상태별 데이터 노출 예시 (TI-TMG-01/Case)

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 디스크립션 | 0 "T-IOS를 통해 접수 받은 검체 정보", 2-1 "T-IOS에서 수신되는 검체 ID·검사 항목·검체 타입·응급 여부" (T-IOS 화면인데 출처가 T-IOS로 적힘. L-IOS 원문을 그대로 쓴 것으로 보임) | T-IOS 기준 출처(LIS 등)로 고쳐 씀 | 디스크립션 | 대기 (확인 필요) |
| 2 | 디스크립션 | 2 "Test order 리스트" | Test Order 리스트 | 화면 글자 | 대기 |
| 3 | 디스크립션 | 2-1 Start Date/Time "Prep 장비에서 바코드 찍은 시간" | 어느 Module(Sample Preparation Module 등)인지 표준어로 | `glossary/terms.csv` Prep 시스템, Module | 대기 (확인 필요) |
| 4 | T/L 차이 | 4 [Import]·[Export]: T-IOS는 "OS 파일함, 엑셀파일", L-IOS는 ".CVS 파일, COMM-5-j(4/4) 팝업". IA는 짝 화면 동일 | Export 파일 형식은 .csv, 저장 방법은 T-IOS OS 파일 탐색기 / L-IOS 경로·USB Popup (POL-COM-006). Import는 .csv와 엑셀을 모두 받음 (고객 논의 CA-0008) | POL-COM-006 규칙 5 | 대기 |
| 5 | 디스크립션 | 1-2 Product 목록이 11개 (RP1~STI-12)로 고정 | 검사 항목 목록(30개) 전체인지, Assay Pack에 등록된 것만인지 정함 | `glossary/test-items.csv` | 대기 (확인 필요) |
| 6 | 디스크립션 | 2 정의 "응급 서랍을 통해 도킹" | 표준어(STAT Storage, Drawer)로 | `glossary/terms.csv` Drawer, `glossary/module-units.csv` | 대기 |
| 7 | 디스크립션 | 2 정의는 "도킹된 상태의 검체 리스트"인데 Status 필터·예시에 Ordered(검사 시작 전)가 있음 | 목록 대상(접수 전체인지, 도킹된 것만인지) 확인 | `glossary/status-values.csv` Sample 상태 | 대기 (확인 필요) |
| 8 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | | [4] Export 선택 시 노출 내용 수정. [4] Import 선택 시 노출 내용 수정 | 정다예 | Figma 버전 메모 |
| 2.1.11 | 2026-10-08 | 테이블 내 데이터 정렬 순서 변경 | 정다예 | Figma 버전 메모 |
