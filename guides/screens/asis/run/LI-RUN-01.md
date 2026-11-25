---
cid: LI-RUN-01
pair_cid:
tl_relation: 단독
title: Run Preparation
path: LNB > Run
type: Page
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-76459
---
# LI-RUN-01 Run Preparation

> 기존 화면(작업방 `Run_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS 단독 화면 (IA에 T 짝 없음). Run Preparation Step 1 (Check samples)
- 호출하는 화면: [LI-RUN-02] (7 [Next]), Confirm_001 (0 페이지 이탈 · 6 [Cancel]), Alert_001 (0 Sample 정보 로드 불가)
- 호출되는 곳: LNB > [RUN], Dashboard > [RUN], Run Status > [RUN] (0 진입 방법)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Run Preparation
- STEP 1 | Check samples | STEP 2 | Check consumables | STEP 3 | Check reagents | STEP 4 | Check waste bin/bottle
- Total Samples 500 | STAT Samples 200
- Sample ID | Order Date | Select a Date | STAT Only | Reset | Search
- Items | 500
- Sample ID | Product | Sample Type | Order Date | STAT
- AA0005001 | RP1 | RP2 | RP3 | Swab | 2026-03-05
- AA0005002 | STI-12 | Surepath | 2026-03-06
- AA0005003 | STI-12 | Urine | 2026-03-07
- AA0005004 | GI-B1 | GI-B2 | eNAT stool | 2026-03-06
- AA0005005 | STI-12 | Cellpreserv | 2026-03-06
- AA0005006 | STI-12 | Urine | 2026-03-06
- AA0005007 | GI-V | GI-P | Fecal swab | 2026-03-06
- AA0005008 | Allplex HPV28 | Cellpreserv | 2026-03-07
- AA0005009 | Allplex HPV28 | Surepath | 2026-03-07
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
- Cancel | Next

### 사용 컴포넌트

Description (17), Description Number (13), Tag Status (13), Table (9), Frame 50 (9), Frame 42 (9), Title (5), Frame/Instrument_Status (3), Square (2), Arrow/Chevron_Right (1), Form/Input Text Box (1), Dropdown Outlined (1), Checkbox (1), Page number (1), Component 4 (1), Frame (1)

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

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Run_asis` 페이지에 LI-RUN-01 케이스 프레임 없음)
