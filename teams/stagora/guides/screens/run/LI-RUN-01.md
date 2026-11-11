---
cid: LI-RUN-01
pair_cid:
tl_relation: 단독
title: Run Preparation
path: Run > Check Run Samples
type: Page
version: 2.0
date: 2026-06-15
author: 정다예
service_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6902-42317
figma_region: 2.1 2차
---
# LI-RUN-01 Run Preparation (Check Run Samples)

> 기존 화면(작업방 Run/Quick Start 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Run Preparation Step 1. IA 화면 이름은 "Check Run Samples"
- 관련 정책: POL-EQP-003 (Run 버튼), POL-SMP-005, POL-SMP-007, POL-SMP-008, POL-LOD-001, POL-LOD-003
- 호출하는 화면: Confirm_001, Alert_001, 다음 단계 LI-RUN-02 (Check Test Protocol을 쓰면 LI-RUN-02-01)

## 기존 화면

### 화면 글자

- STEP 1 Check samples | STEP 2 Check consumables | STEP 3 Check reagents | STEP 4 Check waste bin/bottle
- Total Samples | STAT Samples
- Sample ID | Order Date (Select a Date) | STAT Only | Reset | Search
- Items
- Sample ID | Product | Sample Type | Order Date | STAT
- AA0005001 | RP1, RP2, RP3 | Swab
- AA0005002 | STI-12 | Surepath
- (같은 형식의 행 7개 더: GI-B1, GI-B2 / GI-V, GI-P / Allplex HPV28 등, Sample Type Urine, eNAT stool, Cellpreserv, Fecal swab)
- Cancel | Next

### 사용 컴포넌트

Description (17), Description Number (13), Tag Status (13), Table (9), Title (5), Frame/Instrument_Status (3), Square (2), Form/Input Text Box (1), Dropdown Outlined (1), Checkbox (1), Page number (1)

### 디스크립션 (원문)

#### 0. Run Preparation(구동 준비)화면

- 정의
- [Step 1/4] Run 실행을 위한 검체 정보 확인 화면
- 컨펌 및 알럿
- 페이지 이탈 시(LNB 메뉴 선택 등)팝업 노출 : Confirm_001
- Sample 정보 로드 불가 시 팝업 노출 : Alert_001
- 진입 방법
- LNB > [RUN] 버튼 선택 시 진입
- Dashboard > [RUN] 버튼 선택 시 진입
- Run Status > [RUN] 버튼 선택 시 진입

#### 1. Run Preparation 진행 상태(Progress Bar)

- 진행 상태 표시
- Step 1 인디케이터만 활성화 상태
- Step 2와 Step 3는 비활성화 상태
- 단순 인디케이터 방식으로 인터랙션 불가

#### 2. 샘플 정보 요약

- 정의 : Trolley 또는 응급 서랍 내 장착된 Sample 대상
- 표출 항목
- Sample 건수
- STAT(응급) 상태의 Sample 건수

#### 2-1. 전체 Sample(검체) 건수

- 하위 리스트 내 Sample 단위 기준 건수 노출 (STAT 상태 포함)

#### 2-2. STAT(응급) 건수

- 하위 리스트 내 STAT 상태의 Sample 건수 노출

#### 3. 검색 영역

- 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 : COMM-5-s

#### 3-1. Sample ID(Text Input)

- 기능 : 검체 ID를 입력하여 데이터 조회
- 동작
- 하위 리스트 내 Sample ID 컬럼 대상으로 입력
- 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
- 영문 입력 시 대소문자를 구분하지 않음

#### 3-2. Order Date

- 기능 : 오더 수신 일자/기간을 설정하여 데이터 조회
- 공통 UX 참고 : COMM-5-d(1/5)
- Default: 초기 진입 시 빈 값

#### 3-3. STAT Only(Check box)

- 기능 : 응급 상태의 검체 데이터 조회
- Default : UnSelected(미선택)
- 리스트 노출
- Selected(선택) 시, 응급 상태의 검체만 노출
- UnSelected(미선택) 시, 전체 검체 노출

#### 4. Run Samples 리스트

- 정의 : 검사 접수된 검체 중 Run 실행을 위해 Trolley 또는 응급 서랍을 통해 도킹된 상태의 검체 리스트
- 공통 UX 참고 : COMM-5-m
- 정렬
- Default : Order Date 기준 최신순(내림차순)
- Default 조건 동일 시, Sample ID 기준 오름차순

#### 4-1. 리스트 표출 항목

- Sample ID
- T-IOS에서 수신되는 검체 ID 정보
- Product
- T-IOS에서 수신되는 검사 항목 정보
- 검사 항목이 N개 일 경우 정렬 조건 참고 : COMM-4-a
- Sample Type
- T-IOS에서 수신되는 검체 타입 정보
- Order Date
- LIS 접수 일자 정보
- 표기 : YYYY-MM-DD
- STAT
- T-IOS에서 수신되는 검체 응급 상태(여/부) 정보

#### 5. 페이지네이션

- 공통 UX 참고 : COMM-5-i

#### 6. [Cancel] 버튼

- 클릭 시 팝업 노출 : Confirm_001

#### 7. [Next] 버튼

- 클릭 시 LI-RUN-02(다음 단계)으로 이동

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 0 진입 방법 "[RUN] 버튼", "Run Status > [RUN]" | [Run], 화면 이름 확인 (Test Status 메뉴인지) | `glossary/terms.csv` Run, `ia/ia-screens.csv` | 대기 (확인 필요) |
| R02 | 디스크립션 | 1 "Step 2와 Step 3는 비활성화" (단계는 4개, Check Test Protocol을 쓰면 5개) | 현재 단계 외 모든 단계 비활성 | 화면 글자 | 대기 |
| R03 | 디스크립션 | 7 [Next] → LI-RUN-02 | Check Test Protocol 단계가 보일 때는 LI-RUN-02-01로 이동 (LI-RUN-02-01 0 노출 조건) | LI-RUN-02-01 | 대기 |
| R04 | 화면 정보 | 화면 이름 "Run Preparation"(5개 단계 화면 모두 같음), 단계 이름 "Check samples", IA "Check Run Samples" | 단계별 화면 이름을 IA와 맞춤 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R05 | 디스크립션 | "구동 준비", "검체", "샘플" | Run Preparation, Sample | `glossary/terms.csv` (구동·검체·샘플은 쓰지 않는 표현) | 대기 |
| R06 | 디스크립션 | 0 "Sample 정보 로드 불가 시 Alert_001". 카탈로그의 Alert_001 조건은 "Run 구동 준비 중 Trolley 도킹 해제 및 응급 서랍 장착 해제 시" | 카탈로그 조건 문장으로 통일 | `policy/alert-catalog.csv` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
