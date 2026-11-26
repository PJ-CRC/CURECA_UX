---
cid: TI-INF-03-01
pair_cid:
tl_relation: 단독
title: Run Report
path: Information > Run Report
type: Page
version: 2.1.14
date: 2026.10.30
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-503700
---
# TI-INF-03-01 Run Report

> 기존 화면(작업방 `Run Report_asis` 페이지, Ver 2.1.14)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-INF-03-02] Run Report Detail (2-2 View, 브라우저 새 탭 PDF 뷰어)
- 호출되는 곳: LNB > Information > Run Report
- 관련 정책: POL-SMP-004

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) TIOS | Running | Instrument | L-IOS | D.A PC | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30
- (LNB) Run Report | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Run Report | Program Info | User Manual | Keira Knightley
- Report ID, Batch ID, Run By | End Status | All | Generated Date | 2026-03-05 ~ 2026-03-11 | Reset | Search
- Items | 638 | 10 items | Download
- □ | Report ID | Batch ID | Run By | End Status | Generated Date/Time
- RPT-2026-0901-005 | BAT-2026-0901-024 | seegene123 | Failed | 2026-09-01 10:22:48 | View
- RPT-2026-0901-004 | BAT-2026-0901-023 | seegene126 | Completed | 2026-09-01 14:22:48 | View
- RPT-2026-0901-003 | BAT-2026-0901-022 | seegene126 | Completed | 2026-09-01 16:22:48 | View
- RPT-2026-0901-002 | BAT-2026-0901-021 | seegene123 | Completed | 2026-09-01 18:22:48 | View
- RPT-2026-0901-001 | BAT-2026-0901-020 | seegene123 | Failed | 2026-09-01 22:22:48 | View
- RPT-2026-0831-004 | BAT-2026-0901-019 | seegene123 | Completed | 2026-08-31 10:22:48 | View
- RPT-2026-0831-003 | BAT-2026-0901-018 | seegene126 | Failed | 2026-08-31 12:22:48 | View
- RPT-2026-0831-002 | BAT-2026-0901-017 | seegene126 | Completed | 2026-08-31 14:22:48 | View
- RPT-2026-0831-001 | BAT-2026-0901-016 | seegene123 | Completed | 2026-08-31 18:22:48 | View
- RPT-2026-0830-007 | BAT-2026-0901-015 | seegene123 | Completed | 2026-08-30 18:22:48 | View
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

### 사용 컴포넌트

Table (24), Square (13), Form/CheckBox (10), Table/Filled Table  Cell (10), Description Number (9), 1 Depth (8), Icon (6), Title (6), Dropdown Outlined (3), Profile (1), Interface/Dots (1), Frame (1) (표 칸 Frame 인스턴스 3종 각 10개 제외)

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

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임이 없습니다.

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
