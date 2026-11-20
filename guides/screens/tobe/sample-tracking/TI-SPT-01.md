---
cid: TI-SPT-01
pair_cid: LI-SPT-01
tl_relation: 동일
title: Samples
path: Sample Tracking > Samples
type: Page
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-SMP-001, POL-SMP-002, POL-SMP-005, POL-COM-006]
basis:
basis_versions:
source: tobe
figma:
---
# TI-SPT-01 Samples

- T/L 차이: 3 [Export]의 저장 방법만 다름 (T-IOS는 OS 파일 탐색기, L-IOS는 경로 저장 · USB 저장 Popup). 2-3 노출 개수 Dropdown은 T-IOS에만 있음 (Common UX COMM-5-g)
- 호출하는 화면: [TI-SPT-01-01] Details (목록 행 선택 → 같은 화면 오른쪽에 열림)
- 호출되는 곳: LNB Sample Tracking > Samples

## 디스크립션

**0  Samples 화면**
- 정의
  - Run Start<span style="color:red">를</span> 통해 검사를 시작한 검체 정보
  - 검체별 검사 단위로 리스트 노출
- 동작
  - 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출
- User Type : Service, Admin, User

**1  검색 영역**
- 정의
  - 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 : COMM-5-p

**1-1  Sample ID(Text Input)**
- 기능 : 검체 ID를 입력하여 데이터 조회
- 동작
  - 하위 리스트 내 Sample ID 컬럼 대상으로 입력
  - 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
  - 영문 입력 시 대소문자를 구분하지 않음

**1-2  Product(Multi-Select Dropdown)**
- 기능
  - 검사 항목을 다중 선택하여 데이터 조회
- Default : All
- 드롭다운 리스트 항목
  - All, RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P, Allplex HPV28, STI-12
- 공통 UX 참고 : COMM-5-h(2/2)

**1-3  Sample Type(Multi-Select Dropdown)**
- 기능
  - 검체 타입을 다중 선택하여 데이터 조회
- Default : All
- 드롭다운 리스트 항목
  - All, Swab, Aspirate, BAL, Saliva, Sputum, Raw stool, Cary-blair, eNAT stool, Fecal swab, Thinprep, Surepath, Cellpreserv, Urine, Semen
- 공통 UX 참고 : COMM-5-h(2/2)

**1-4  Date(Cascading Dropdown)**
- 기능
  - 조회 기준(일자 유형)을 먼저 선택하고, 특정 일자 및 기간 설정하여 데이터 조회
  - 일자 유형[좌] : 조회하고 싶은 일자 유형 선택
  - 특정 일자 및 기간[우] : 선택 유형에 대한 일자 및 기간 설정
  - 단, 오늘 기준 미래일자는 선택 불가
- Default
  - 일자 유형[좌] : Order Date
  - 특정 일자 및 기간[우] : 시작일-7일 전 ~ 종료일-Today
- 드롭다운 리스트 항목
  - Order Date, Start Date, End Date
- 공통 UX 참고 : COMM-5-d(1/5)

**1-5  Status(Dropdown)**
- 기능
  - 검사 상태를 단일 선택하여 데이터 조회
- Default : All
- 드롭다운 리스트 항목
  - All, <span style="color:red">Ready, Running, Completed, Failed, Not Tested</span>
- 공통 UX 참고 : COMM-5-h(1/2)
- 정책 참고 : POL-SMP-001

**1-6  STAT Only(Check box)**
- 기능 : 응급 상태의 검체 데이터 조회
- Default : UnSelected(미선택)
- 리스트 노출
  - Selected(선택) 시, 응급 상태의 검체만 노출
  - UnSelected(미선택) 시, 전체 검체 노출
- 공통 UX 참고 : COMM-5-q

**2  Samples 리스트**
- 정의 : 검사 접수된 검체 중 Run을 실행한 검체 리스트
- 정렬
  - Default : Start Date/Time 기준 최신순(내림차순)
  - Default 조건 동일 시, Sample ID 기준 오름차순
  - 정렬되는 칸 : Order Date, Start Date/Time, End Date/Time
- 동작
  - 특정 샘플 행 클릭 시 샘플 상세 노출 : TI-SPT-01-01
- 공통 UX 참고 : COMM-5-g, COMM-5-r
- 정책 참고 : POL-SMP-005

**2-1  리스트 표출 항목**
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
  - <span style="color:red">검사 단계 : Sample Preparation, Nucleic Acid Extraction, PCR Setup, Plate Sealing, PCR</span>
- Start Date/Time
  - <span style="color:red">Prep 시스템이 Sample Barcode를 읽은 시점</span>
- End Date/Time
  - L-IOS가 <span style="color:red">D.A PC</span>(결과처리 시스템)로부터 검사 결과를 받은 시점
- STAT
  - T-IOS에서 수신되는 검체 응급 여부 상태 정보
- 정책 참고 : POL-SMP-001, POL-SMP-002

**2-2  Progress 상태 정보(Tooltip)**
- 공통 UX 참고 : COMM-5-v
- 케이스 참고 : TI-SPT-01/Case > Case 2

**2-3  노출 개수(Dropdown)**
- Default : 10 items
- 드롭다운 리스트 항목
  - 10, 30, 50, 100
- 공통 UX 참고 : COMM-5-g

**3  [Export] 버튼**
- 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음
- 대상 범위 : 목록에 노출된 전체 리스트
- 저장 항목 : Detail이 있을 경우 Detail에서 제공되는 모든 내용
- 형식 : <span style="color:red">.csv</span>
- 정책 참고 : POL-COM-006

**4  페이지네이션**
- 숫자형 페이지네이션
- 공통 UX 참고 : COMM-5-l

- 케이스 참고 : TI-SPT-01/Case > Case 1 (Sample 상태별 데이터 노출, 2-1 블록에서 가리킴)

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1-1 | Sample ID 입력 | (빈 칸, placeholder Sample ID) | 기존 기획 프레임 (기존 작업방 1460:110169) |
| 1-2 · 1-3 | Product · Sample Type | All | Default |
| 1-4 | Date | Order Date, 2026-03-05 ~ 2026-03-11 | 기존 기획 프레임 |
| 1-5 | Status | All | Default |
| 2 | Items | 638 | 기존 기획 프레임 |
| 2-1 | 행 1 ~ 3 | AA0005001 · RP1 / RP2 / RP3 · Sputum · 2026-03-05 · Not Tested · - · - · STAT | `test-items.csv` · `sample-types.csv` · `status-values.csv`, 기존 기획 프레임 |
| 2-1 | 행 4 | AA0005002 · STI-12 · Thinprep · 2026-03-05 · Ready · - · - | 같음 |
| 2-1 | 행 5 | AA0005003 · STI-12 · Surepath · 2026-03-05 · Failed · 2026-03-05 10:22:48 · 2026-03-05 11:22:48 | 같음 |
| 2-1 | 행 6 | AA0005004 · STI-12 · Swab · 2026-03-05 · Completed · 2026-03-05 10:22:48 · 2026-03-05 11:22:48 | 같음 |
| 2-1 | 행 7 | AA0005005 · PB · Saliva · 2026-03-05 · Running · 2026-03-05 10:22:48 · - | 같음 |
| 2-1 | 행 8 · 9 | AA0005006 · GI-B1 / GI-B2 · eNAT stool · 2026-03-05 · Running · 2026-03-05 10:22:48 · - | 같음 |
| 2-1 | 행 10 | AA0005007 · Allplex HPV28 · Surepath · 2026-03-05 · Running · 2026-03-05 10:22:48 · - | 같음 |
| 2-3 | 노출 개수 | 10 items | Common UX COMM-5-g |
| 4 | 페이지네이션 | 2페이지 선택 (1 ~ 10) | 기존 기획 프레임 |

- 목록 10행 = 한 페이지 노출 개수 (Common UX COMM-5-g)

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 0 | Samples | 화면 | | - | |
| 1-1 | Sample ID | 화면 | | - | |
| 1-2 | Product | 화면 | | - | |
| 1-2 · 1-3 · 1-5 | All | 화면 · 디스크립션 | | - | |
| 1-3 | Sample Type | 화면 | | - | |
| 1-4 | Date | 화면 | | - | |
| 1-4 | Order Date | 화면 · 디스크립션 | | - | |
| 1-4 | Start Date | 디스크립션 | | - | |
| 1-4 | End Date | 디스크립션 | | - | |
| 1-5 | Status | 화면 | | - | |
| 1-6 | STAT Only | 화면 | | - | |
| 1 | Reset | 화면 | | - | |
| 1 | Search | 화면 | | - | |
| 2 | Items | 화면 | | - | |
| 2-1 | Progress | 화면 | | - | |
| 2-1 | Start Date/Time | 화면 | | - | |
| 2-1 | End Date/Time | 화면 | | - | |
| 2-1 | STAT | 화면 | | - | |
| 2-3 | 10 items | 화면 · 디스크립션 | | - | |
| 3 | Export | 화면 | | - | |

## Alert · Confirm · Toast

없음

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | Sample 상태별 데이터 노출 예시 | 1-1 검사 시작 후 회수된 검체 (Not Tested) / 1-2 검사 실패한 검체 (Failed) / 1-3 대기 중인 검체 (Ready) | 2-1 | 1 | 기존 원본 |
| 2 | Progress 상태 정보 Tooltip | Progress 영역에 마우스를 올렸을 때 | 2-2 | 2 | 기존 원본 |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 점검 발견 | 프레임 1335:135567의 이름은 "TI-SPT-01-01"인데 화면 정보 CID는 TI-SPT-01 (Ver 2.1, 2026-06-25). 디스크립션이 비어 있고 상세 영역 글자가 프랑스어(Processus, Unité 등) | 시안·언어 확인용으로 보고 옮기지 않음. 프레임 이름 정리 또는 삭제 확인 | Figma 프레임 | 대기 (확인 필요) |
| R02 | 점검 발견 | 화면 정보 Ver 2.0인데 버전 메모에 v2.1.01이 있음 | Ver를 버전 메모와 맞춤 | Figma 버전 메모 | 제외 (2026-11-20, 케이스 3 규칙과 부딪힘: 화면 정보 Ver는 기존 화면 Ver 그대로) |
| R03 | 점검 발견 | 0 "Run Start로 통해" | Run Start를 통해 | 오타 | 작업 중 (20261120-최고관리자-samples) |
| R04 | 기준 자료 변경 | 3 [Export]: T-IOS는 "OS 파일함, 엑셀파일, 저장 항목은 Detail의 모든 내용", L-IOS는 ".CVS 파일, COMM-5-j(4/4) 팝업". IA는 짝 화면 동일 | 파일 형식은 T-IOS·L-IOS 모두 .csv. 저장 방법만 다름: T-IOS는 OS 파일 탐색기, L-IOS는 경로 저장·USB 저장 Popup (COMM-5-j(4/4)) | POL-COM-006 규칙 1·3·4 | 작업 중 (20261120-최고관리자-samples) |
| R05 | 점검 발견 | 2-1 "T-IOS에서 수신되는 검체 ID·검사 항목·검체 타입·응급 여부" (T-IOS 화면) | T-IOS 기준 출처로 고쳐 씀 | 디스크립션 | 대기 (확인 필요) |
| R06 | 기준 자료 변경 | 2-1 Start Date/Time "Prep 장비에서 바코드 찍은 시간" | 디스크립션에 넣음: Prep 시스템이 Sample Barcode를 읽은 시점 | `glossary/terms.csv`, POL-SMP-002 (2단계 근거) | 작업 중 (20261120-최고관리자-samples) |
| R07 | 기준 자료 변경 | 2-1 Progress "상태 값 : COMM-4-a" (Progress는 단계 진행 표시) | 디스크립션에 넣음: Progress는 검사 단계 5개(Sample Preparation → Nucleic Acid Extraction → PCR Setup → Plate Sealing → PCR)의 진행을 보여 줌 | `glossary/test-stages.csv`, test-stages.csv (2단계 근거) | 작업 중 (20261120-최고관리자-samples) |
| R08 | 기준 자료 변경 | 1-2 Product 목록이 11개로 고정 | 검사 항목 목록 기준 확인 | `glossary/test-items.csv` | 대기 (확인 필요) |
| R09 | 기준 자료 변경 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 작업 중 (20261120-최고관리자-samples) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-11-20 | 작업방에 새로 그림 (기존 작업방 [1460:110169](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-110169) · Ver 2.0). 3단계 초안: R03 · R04 · R06 · R07 · R09 반영(작업 중), 상태값 순서 · 노출 개수 Dropdown(Common UX) | Claude (최고관리자 요청) | 20261120-최고관리자-samples, POL-SMP-001 · 002 · 005, POL-COM-006 |
