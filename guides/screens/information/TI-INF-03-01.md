---
cid: TI-INF-03-01
pair_cid:
tl_relation: 단독
title: Run Report
path: Information > Report
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6071-650739
figma_region: 2.1 2차
---
# TI-INF-03-01 Run Report

> 기존 화면(작업방 Profile/Information 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 화면. IA 화면 이름은 "Report", Figma 화면 이름과 경로는 "Run Report" (Information > Run Report)
- User Type: `policy/permission-matrix.csv`에 Information > Report 줄이 없음 (Program만 있음)
- 관련 정책: POL-SMP-004
- 호출하는 화면: Run Report Detail (TI-INF-03-02, 새 탭 PDF 뷰어)

## 기존 화면

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | TIOS
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information (Run Report | Program | Manual) | Keira Knightley
- Run Report
- Report ID, Batch ID, Run By | End Status: All | Generated Date: 2026-03-05 ~ 2026-03-11 | Reset | Search
- Items 10 items | Download
- □ | Report ID | Batch ID | Run By | End Status | Generated Date/Time
- RPT-2026-0901-005 | BAT-2026-0901-024 | seegene123 | Failed | 2026-09-01 10:22:48 | View
- RPT-2026-0901-004 | BAT-2026-0901-023 | seegene126 | Completed | 2026-09-01 14:22:48 | View
- (같은 형식의 행 8개 더, End Status는 Completed 또는 Failed)

### 사용 컴포넌트

Square (13), Table (11), Form/CheckBox (10), Table/Filled Table Cell (10), Description Number (9), 1 Depth (8), Title (6), Dropdown Outlined (3), Form/Input Text Box (1), Page number (1)

### 디스크립션 (원문)

#### 0. Run Report 화면

- 정의
- Batch단위로 생성되는 레포트 확인 화면

#### 1. 검색 영역

- 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 : COMM-5-s

#### 1-1. Report ID, Batch ID, Run By(Text Input)

- 기능
- 리포트 ID, 배치 ID, 구동 ID(Run By)를 입력하여 데이터 조회
- 동작
- 하위 리스트 내 Report ID, Batch ID, Run By 컬럼 대상으로 입력
- 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
- 영문 입력 시 대소문자를 구분하지 않음

#### 1-2. End Status(Dropdown)

- 기능
- 검사 상태를 단일 선택하여 데이터 조회
- 공통 UX 참고 : COMM-5-f(1/2)
- Default : All
- 드롭다운 리스트 항목
- All, Completed, Failed, Not Tested, Partially Completed, Stopped

#### 1-3. Generated Date

- 기능
- 특정 일자 및 기간 설정하여 데이터 조회
- 공통 UX 참고 : COMM-5-d(1/5)
- Default
- 시작일-7일 전 ~ 종료일-Today
- 단, 오늘 기준 미래일자는 선택 불가
- 최대 1년까지 선택 가능

#### 2. Report 리스트

- 정의 : Run Start 기준으로 생성되는 배치단위 리포트 리스트
- 공통 UX 참고 : COMM-5-m
- 정렬
- Default : Generated Date/Time 기준 최신순(내림차순)

#### 2-1. 리스트 표출 항목

- Report ID
- 리포트 생성 시 시스템에서 자동 부여되는 고유 식별자
- Batch ID
- 배치 생성 시 부여되는 고유 ID
- Test Status 메뉴의 Batch Card ID와 동일
- Run By
- 해당 배치를 실행한 사용자의 User ID
- Run Preparation 메뉴에서 [Run Start]를 실행한 계정
- End Status
- 배치 최종 종료 상태 정보
- 공통 UX 참고 : COMM-4-a
- Generated Date/Time
- 배치 종료(정상 완료 또는 실패) 후 리포트가 생성된 일시
- 노출 형태 : YYYY-MM-DD HH:mm:ss

#### 2-2. [View] 버튼

- 정의
- 생성된 리포트 문서를 브라우저 내장 PDF 뷰어를 통해 열람할 수 있는 기능 버튼
- 동작
- 선택 시 브라우저 새 탭(_blank)으로 PDF 뷰어 화면 호출
- 선택 시, TI-INF-03-02 노출

#### 2-3. [Download] 버튼

- 정의
- 선택된 리포트 파일을 로컬 PC로 다운로드하는 기능 버튼
- Default : 비활성화 상태
- 활성화 조건
- 리스트 내 체크박스가 1개 이상 선택된 경우 즉시 활성화
- 동작
- 단일 선택 (1개)
- ㄴ 해당 리포트 파일 1건 즉시 다운로드
- 다중 선택 (N개)
- ㄴ 선택된 각 리포트 파일 순차 다운로드 처리

#### 3. 페이지네이션

- 공통 UX 참고 : COMM-5-i

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "Run Report", 경로 "Information > Run Report" | IA는 "Report" (Information > Report). 어느 쪽으로 맞출지 정함 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R02 | 권한 | User Type별 접근 정의 없음 | 디스크립션에 넣음: T-IOS에서만 보이는 메뉴이며, Service·Admin·User 모두 볼 수 있음 | `policy/permission-matrix.csv` Information > Report, POL-SMP-004 규칙 6 | 대기 |
| R03 | 디스크립션 | 1-2 "검사 상태를 단일 선택" | 검사 배치 완료 상태 (값은 상태값 표와 같음) | `glossary/status-values.csv` 검사 배치 완료 상태 | 대기 |
| R04 | 디스크립션 | 2-1 Generated Date/Time "배치 종료(정상 완료 또는 실패) 후" | End Status 값이 5개(Not Tested, Partially Completed, Stopped 포함)라 "배치 종료 후"로 정리 | `glossary/status-values.csv` | 대기 |
| R05 | 디스크립션 | 1-1 "구동 ID(Run By)" | 실행한 User ID (2-1과 같은 말로) | `glossary/terms.csv` Run (구동은 쓰지 않는 표현) | 대기 |
| R06 | 디스크립션 | 2-2 "새 탭 PDF 뷰어 호출"과 "TI-INF-03-02 노출"이 함께 있음 | TI-INF-03-02가 PDF 뷰어로 보여 주는 리포트 화면인지 정리 | 디스크립션 | 대기 (확인 필요) |
| R07 | 화면 글자 | LNB Information 아래 "Manual" | IA에 Manual 화면 없음. 메뉴 유지 여부 확인 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R08 | 표기 | 레포트 / 리포트 섞어 씀 | 하나로 통일 | 디스크립션 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
