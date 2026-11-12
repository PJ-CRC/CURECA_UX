---
cid: TI-SPT-03
pair_cid: LI-SPT-03
tl_relation: 동일
title: PCR Plate
path: Sample Tracking > PCR Plate
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-305678
figma_region: 2.1 2차
---
# TI-SPT-03 PCR Plate

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- 96-DWP 화면(TI-SPT-02)과 같은 구조. 다른 문장만 아래 디스크립션에 따로 적음
- T/L 차이: IA는 짝 화면 동일(Y). 디스크립션 3 [Export] 설명이 L-IOS(LI-SPT-03)와 다름
- 관련 정책: POL-SMP-002, POL-SMP-005, POL-SMP-010, POL-COM-006
- 호출하는 화면: PCR Plate Details (TI-SPT-03-01, 같은 화면 오른쪽에 열림)
- 다른 프레임: [TI-SPT-03/Case1](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-304594)

## 기존 화면

### 화면 글자

- (GNB·LNB) T-IOS 공통 영역. LNB에서 Sample Tracking (Samples, 96-DWP, PCR Plate) 선택
- PCR Plate
- Plate ID | Status: All | Date: Start Date, 2026-03-05 ~ 2026-03-11 | Reset | Search
- Items | Export
- Plate ID | Sample (Total, STAT) | Progress | Status | Start Date/Time | End Date/Time
- PL0005001 | Running | 2026-03-05 10:22:48 | -
- PL0005002 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- (이하 예시 줄 생략. 예시 데이터는 TI-SPT-02와 같음)

### 사용 컴포넌트

Table (12), Table/Filled Table Cell (10), Arrow/Chevron_Right (10), Description Number (9), Title (6), Dropdown Outlined (3)

### 디스크립션 (원문)

- 1-1~1-3, 2-2, 3, 4는 TI-SPT-02와 같음 (Status 목록 "All, Not Tested, Running, Completed, Failed", Default 일자 유형 Start Date/Time, Export 엑셀파일). 다른 절:

#### 0. PCR Plate 화면

- 정의
- PCR Plate 단위의 검사 진행 정보
- Plate 단위로 리스트 노출
- 동작
- 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출

#### 2. Plate 리스트

- 정의 : PCR Plate별 검사 정보 리스트
- 공통 UX 참고 : COMM-5-m
- 정렬
- Default : Start Date/Time 기준 내림차순
- 동작
- 특정 Plate 행 클릭 시 Plate 상세 노출 : TI-SPT-03-01

#### 2-1. 리스트 표출 항목

- Plate ID
  - PCR Setup 단계에서 찍힌 PCR Plate 정보
- Sample(Total / STAT)
  - 상위 Plate에 분주된 Sample 단위 개수 및 응급 상태 개수
- Progress
  - 전체 검사 프로세스 대비 단계별 진행 현황 정보
  - 상태 값 : COMM-4-a
- Status
  - 검체의 검사 진행 상태 정보
  - 상태 값 : COMM-4-a
- Start Date/Time
  - 96-DWP가 PCR Setup 모듈에 진입해 검사 전 바코드가 찍히는 시점
- End Date/Time
  - PCR Plate가 Universal PCR 모듈에서 작업 완료 후 장치에서 나가기 전 바코드가 찍히는 시점

#### 2-2. Progress 상태 정보(Tooltip)

- 공통 UX 참고 : COMM-5-o
- 표출 예시 : TI-SPT-03/Case1

### 케이스

- TI-SPT-03/Case1: Progress 상태 정보 Tooltip (프레임에 Case 제목 글자 없음)

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 2-1 Start Date/Time "96-DWP가 PCR Setup 모듈에 진입해" (PCR Plate 목록) | PCR Setup Module이 PCR Plate를 넘겨받아 그 Barcode를 읽은 시점 (POL-SMP-002 규칙 3) | POL-SMP-002 | 대기 |
| R02 | 상태값 | 1-2 Status 목록에 Not Tested, 2-1 Status "검체의 검사 진행 상태" | Status 목록에서 Not Tested를 뺌: All, Running, Completed, Failed. Status는 Plate 상태 (POL-SMP-010) | `glossary/status-values.csv`, POL-SMP-010 | 대기 |
| R03 | 화면 글자 | 예시 데이터(Plate ID PL0005001~)가 96-DWP 화면과 같음 | PCR Plate 예시로 | 화면 글자 | 대기 |
| R04 | T/L 차이 | 3 [Export]: T-IOS는 엑셀파일, L-IOS는 .CVS·COMM-5-j(4/4). IA는 짝 화면 동일 | 파일 형식은 T-IOS·L-IOS 모두 .csv. 저장 방법만 다름: T-IOS는 OS 파일 탐색기, L-IOS는 경로 저장·USB 저장 Popup (COMM-5-j(4/4)) | POL-COM-006 규칙 1·3·4 | 대기 |
| R05 | 디스크립션 | 1-3 Default "Start Date/Time"과 목록 "Start Date" 표기 다름, 2-1 "모듈" | TI-SPT-02 반영 대기 목록 3·6과 같이 | 디스크립션 | 대기 |
| R06 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | | [3] Export 선택 시 노출 내용 수정 | 정다예 | Figma 버전 메모 |
| 2.1.11 | 2026-10-08 | 테이블 데이터 수정: 검사 단계별 모듈 명 열 삭제, 검사 시작 및 종료 일시 추가 | 정다예 | Figma 버전 메모 |
