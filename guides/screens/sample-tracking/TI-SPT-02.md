---
cid: TI-SPT-02
pair_cid: LI-SPT-02
tl_relation: 동일
title: 96-DWP
path: Sample Tracking > 96 DWP
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-261073
figma_region: 2.1 2차
---
# TI-SPT-02 96-DWP

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: IA는 짝 화면 동일(Y). 디스크립션 3 [Export] 설명이 L-IOS(LI-SPT-02)와 다름
- 관련 정책: POL-SMP-002, POL-SMP-005, POL-SMP-010, POL-COM-006
- 호출하는 화면: 96-DWP Details (TI-SPT-02-01, 같은 화면 오른쪽에 열림)
- 다른 프레임: [TI-SPT-02/Case1](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-262374)

## 기존 화면

### 화면 글자

- (GNB·LNB) T-IOS 공통 영역. LNB에서 Sample Tracking (Samples, 96-DWP, PCR Plate) 선택
- 96-DWP
- Plate ID | Status: All | Date: Start Date, 2026-03-05 ~ 2026-03-11 | Reset | Search
- Items | Export
- Plate ID | Sample (Total, STAT) | Progress | Status | Start Date/Time | End Date/Time
- PL0005001 | Running | 2026-03-05 10:22:48 | -
- PL0005002 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- PL0005006 | Failed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- (이하 예시 줄 생략, PL0005001~PL0005020)

### 사용 컴포넌트

Table (12), Table/Filled Table Cell (10), Arrow/Chevron_Right (10), Description Number (9), Title (6), Dropdown Outlined (3)

### 디스크립션 (원문)

#### 0. 96-DWP 화면

- 정의
- 96-DWP 단위의 검사 진행 정보
- Plate 단위로 리스트 노출
- 동작
- 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출

#### 1. 검색 영역

- 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 : COMM-5-s

#### 1-1. Plate ID(Text Input)

- 기능 : Plate ID를 입력하여 데이터 조회
- 동작
- 하위 리스트 내 Plate ID 컬럼 대상으로 입력
- 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
- 영문 입력 시 대소문자를 구분하지 않음

#### 1-2. Status(Dropdown)

- 기능
- 검사 상태를 단일 선택하여 데이터 조회
- 공통 UX 참고 : COMM-5-f(1/2)
- Default : All
- 드롭다운 리스트 항목
- All, Not Tested, Running, Completed, Failed

#### 1-3. Date(Cascading Dropdown)

- 기능
- 조회 기준(일자 유형)을 먼저 선택하고, 특정 일자 및 기간 설정하여 데이터 조회
- 공통 UX 참고 : COMM-5-d(1/5)
- 일자 유형[좌] : 조회하고 싶은 일자 유형 선택
- 특정 일자 및 기간[우] : 선택 유형에 대한 일자 및 기간 설정
- 단, 오늘 기준 미래일자는 선택 불가
- Default
- 일자 유형[좌] : Start Date/Time
- 특정 일자 및 기간[우] : 시작일-7일 전 ~ 종료일-Today
- 드롭다운 리스트 항목
- Start Date, End Date

#### 2. Plate 리스트

- 정의 : 96-DWP별 검사 정보 리스트
- 공통 UX 참고 : COMM-5-m
- 정렬
- Default : Start Date/Time 기준 내림차순
- 동작
- 특정 Plate 행 클릭 시 Plate 상세 노출 : TI-SPT-02-01

#### 2-1. 리스트 표출 항목

- Plate ID
  - Sample Preparation 단계에서 찍힌 96-DWP 정보
- Sample(Total / STAT)
  - 상위 Plate에 분주된 Sample 단위 개수 및 응급 상태 개수
- Progress
  - 전체 검사 프로세스 대비 단계별 진행 현황 정보
  - 상태 값 : COMM-4-a
- Status
  - 검체의 검사 진행 상태 정보
  - 상태 값 : COMM-4-a
- Start Date/Time
  - 96-DWP가 Sample Preparation 모듈에 진입해 검사 전 바코드가 찍히는 시점
- End Date/Time
  - 96-DWP가 PCR Setup 모듈에서 작업 완료 후 바코드가 찍히는 시점

#### 2-2. Progress 상태 정보(Tooltip)

- 공통 UX 참고 : COMM-5-o
- 표출 예시 : TI-SPT-02/Case1

#### 3. [Export] 버튼

- 버튼 선택 시, OS에서 제공하는 파일함이 팝업으로 제공되어 저장경로를 설정 후 내보내기 할 수 있음
- 대상 범위: 목록에 노출된 전체 리스트
- 저장 항목: Detail에서 제공되는 모든 내용
- 형식: 엑셀파일

#### 4. 페이지네이션

- 공통 UX 참고 : COMM-5-i

### 케이스

- TI-SPT-02/Case1: Progress 상태 정보 Tooltip (프레임에 Case 제목 글자 없음)

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 상태값 | 1-2 Status 목록에 Not Tested (Plate 상태값은 Running, Completed, Failed) | Status 목록에서 Not Tested를 뺌: All, Running, Completed, Failed. Status는 Plate 상태 (POL-SMP-010) | `glossary/status-values.csv` Plate 상태, POL-SMP-010 | 대기 |
| R02 | 디스크립션 | 2-1 Status "검체의 검사 진행 상태 정보" (Plate 목록) | Plate 상태 (Running, Completed, Failed) (POL-SMP-010) | `glossary/status-values.csv`, POL-SMP-010 | 대기 |
| R03 | 디스크립션 | 1-3 Default 일자 유형 "Start Date/Time", 목록은 "Start Date, End Date" | 표기 하나로 | 디스크립션 | 대기 |
| R04 | T/L 차이 | 3 [Export]: T-IOS는 "OS 파일함, 엑셀파일", L-IOS는 ".CVS, COMM-5-j(4/4)". IA는 짝 화면 동일 | 파일 형식은 T-IOS·L-IOS 모두 .csv. 저장 방법만 다름: T-IOS는 OS 파일 탐색기, L-IOS는 경로 저장·USB 저장 Popup (COMM-5-j(4/4)) | POL-COM-006 규칙 1·3·4 | 대기 |
| R05 | 화면 정보 | IA 경로 "96 DWP", 화면 "96-DWP" | 96-DWP | `glossary/terms.csv` DWP | 대기 |
| R06 | 디스크립션 | 2-1 "Sample Preparation 모듈", "PCR Setup 모듈", Progress "상태 값 : COMM-4-a" | Module 표준어, 단계 표시는 검사 단계 기준 | `glossary/terms.csv`, `glossary/test-stages.csv` | 대기 |
| R07 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | | [3] Export 선택 시 노출 내용 수정 | 정다예 | Figma 버전 메모 |
| 2.1.11 | 2026-10-08 | 테이블 데이터 수정: 검사 단계별 모듈 명 열 삭제, 검사 시작 및 종료 일시 추가 | 정다예 | Figma 버전 메모 |
