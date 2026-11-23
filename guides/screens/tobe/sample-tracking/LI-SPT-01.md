---
cid: LI-SPT-01
pair_cid: TI-SPT-01
tl_relation: 동일
title: Samples
path: Sample Tracking > Samples
type: Page
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: [POL-SMP-001, POL-SMP-002, POL-SMP-005, POL-COM-006]
basis: 2026-11-23 09:35 · history 2336f0eb
basis_versions: rules @2026-11-20 · policy @2026-11-20 · glossary @2026-11-20 · screens @2026-11-23 · ux_guide @2026-11-20
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3123-53239
---
# LI-SPT-01 Samples

- T/L 차이: 3 [Export] 저장 방법 (L-IOS는 Import / Export Popup에서 경로 저장 · USB 저장), 노출 개수 Dropdown 없음 (L-IOS는 10줄 고정)
- 호출하는 화면: [LI-SPT-01-01] Details (리스트 행 선택 → 같은 화면 오른쪽에 열림), Import / Export Popup (COMM-5-m(2/4), [Export] 선택)
- 호출되는 곳: LNB Sample Tracking > Samples

## 디스크립션

**0  Samples 화면**
- 정의
  - <span style="color:red">Run Start를 통해</span> 검사를 시작한 검체 정보
  - 검체별 검사 단위로 리스트 노출
- 동작
  - 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출
- User Type : Service, Admin, User
- L-IOS Client Mode : Main Mode, Console Mode, MS Mode

**1  검색 영역**
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
- 공통 UX 참고 : COMM-5-h(1/2)

**1-3  Sample Type(Multi-Select Dropdown)**
- 기능
  - 검체 타입을 다중 선택하여 데이터 조회
- Default : All
- 드롭다운 리스트 항목
  - All, Swab, Aspirate, BAL, Saliva, Sputum, Raw stool, Cary-blair, eNAT stool, Fecal swab, Thinprep, Surepath, Cellpreserv, Urine, Semen
- 공통 UX 참고 : COMM-5-h(1/2)

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
- 공통 UX 참고 : COMM-5-h(2/2), COMM-5-d

**1-5  Status(Dropdown)**
- 기능
  - 검사 상태를 단일 선택하여 데이터 조회
- Default : All
- 드롭다운 리스트 항목
  - <span style="color:red">All, Ready, Running, Completed, Failed, Not Tested</span>
- 공통 UX 참고 : COMM-5-h(1/2)

**1-6  STAT Only(Check box)**
- 기능 : 응급 상태의 검체 데이터 조회
- Default : UnSelected(미선택)
- 리스트 노출
  - Selected(선택) 시, 응급 상태의 검체만 노출
  - UnSelected(미선택) 시, 전체 검체 노출

**2  Samples 리스트**
- 정의 : 검사 접수된 검체 중 Run을 실행한 검체 리스트
- 정렬
  - Default : Start Date/Time 기준 최신순(내림차순)
  - Default 조건 동일 시, Sample ID 기준 오름차순
  - <span style="color:red">정렬되는 칸 : Order Date, Start Date/Time, End Date/Time</span>
- 동작
  - 특정 샘플 행 클릭 시 샘플 상세 노출 : <span style="color:red">LI-SPT-01-01</span>
  - <span style="color:red">데이터 부재 시 리스트 영역에 안내 문구 노출 : No Data</span>
  - <span style="color:red">조회 중 로딩 노출 : Spinner</span>
- 공통 UX 참고 : COMM-5-g, COMM-5-r, COMM-5-k
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
  - <span style="color:red">~~상태 값 : COMM-4-a~~</span>
  - <span style="color:red">검사 단계 : Sample Preparation, Nucleic Acid Extraction, PCR Setup, Plate Sealing, PCR</span>
- Start Date/Time
  - <span style="color:red">Prep 시스템이 Sample Barcode를 읽은 시점</span>
- End Date/Time
  - L-IOS가 <span style="color:red">D.A PC</span>(결과처리 시스템)로부터 검사 결과를 받은 시점
- STAT
  - T-IOS에서 수신되는 검체 응급 여/부 상태 정보
- 정책 참고 : POL-SMP-001, POL-SMP-002
- <span style="color:red">케이스 참고 : LI-SPT-01/Case > Case 1</span>

**2-2  Progress 상태 정보(Tooltip)**
- <span style="color:red">표출 항목</span>
  - <span style="color:red">제목 : Progress Status</span>
  - <span style="color:red">검사 단계별 진행 칸 : -, Sample Preparation, Nucleic Acid Extraction, PCR Setup, Plate Sealing, PCR</span>
- 공통 UX 참고 : COMM-5-v
- 케이스 참고 : <span style="color:red">LI-SPT-01/Case > Case 2</span>

**3  [Export] 버튼**
- 리스트에 노출된 데이터를 파일(<span style="color:red">.csv</span>) 형태로 저장
- 버튼 선택 시, 팝업 노출 : <span style="color:red">COMM-5-m(2/4)</span>
- <span style="color:red">정책 참고 : POL-COM-006</span>

**4  페이지네이션**
- <span style="color:red">형 : 숫자형</span>
- 공통 UX 참고 : COMM-5-l

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1-1 | Sample ID | 빈 칸 (placeholder Sample ID) | 기존 원본 1460:112005 |
| 1-2 · 1-3 · 1-5 | Product · Sample Type · Status | All | 디스크립션 Default |
| 1-4 | Date | Order Date, 2026-03-05 ~ 2026-03-11 | 기존 원본 1460:112005 |
| 2 | Items | 638 | 기존 원본 1460:112005 |
| 2-1 | 행 1 ~ 10 | TI-SPT-01 화면 예시와 같은 10행 (10행 = L-IOS 고정 노출 개수) | 기존 원본 1460:112005, 상태값 `glossary/status-values.csv` (Sample), 검사 항목 `glossary/test-items.csv` UI 표기, 검체 타입 `glossary/sample-types.csv` |
| 2-1 | Progress 진행 칸 | 기존 원본 행과 같은 칸 수 | 기존 원본 1460:112005, `glossary/test-stages.csv` 5단계 |
| 4 | 페이지네이션 | 2페이지 선택 (Second Page) | 기존 원본 1460:112005 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 0 | Samples | 화면 (타이틀 · LNB) | | - | |
| 0 | 96-DWP | 화면 (LNB) | | - | |
| 0 | PCR Plate | 화면 (LNB) | | - | |
| 1-1 | Sample ID | 화면 · 케이스 | | - | |
| 1-2 | Product | 화면 · 케이스 | | - | |
| 1-2 · 1-3 · 1-5 | All | 화면 · 디스크립션 | | - | |
| 1-2 | RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P, Allplex HPV28, STI-12 | 화면 · 디스크립션 | | - | |
| 1-3 | Sample Type | 화면 · 케이스 | | - | |
| 1-3 | Swab, Aspirate, BAL, Saliva, Sputum, Raw stool, Cary-blair, eNAT stool, Fecal swab, Thinprep, Surepath, Cellpreserv, Urine, Semen | 화면 · 디스크립션 | | - | |
| 1-4 | Date | 화면 | | - | |
| 1-4 | Order Date | 화면 · 디스크립션 · 케이스 | | - | |
| 1-4 | Start Date | 디스크립션 | | - | |
| 1-4 | End Date | 디스크립션 | | - | |
| 1-5 | Status | 화면 · 케이스 | | - | |
| 1-5 · 2-1 | Ready, Running, Completed, Failed, Not Tested | 화면 · 디스크립션 · 케이스 | | - | |
| 1-6 | STAT Only | 화면 | | - | |
| 1 | Reset | 화면 | | - | |
| 1 | Search | 화면 | | - | |
| 2 | Items | 화면 | | - | |
| 2 | No Data | 디스크립션 | | - | |
| 2-1 | Progress | 화면 · 케이스 | | - | |
| 2-1 | Start Date/Time | 화면 · 케이스 | | - | |
| 2-1 | End Date/Time | 화면 · 케이스 | | - | |
| 2-1 | STAT | 화면 · 케이스 | | - | |
| 2-2 | Progress Status | 디스크립션 · 케이스 | | - | |
| 2-2 | Sample Preparation, Nucleic Acid Extraction, PCR Setup, Plate Sealing, PCR | 디스크립션 · 케이스 | | - | |
| 3 | Export | 화면 | | - | |

## Alert · Confirm · Toast

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| - | 없음 | | | |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | Sample 상태별 데이터 노출 예시 | 1-1 검사 시작 후 Prep 시스템에서 검사가 진행되지 못한 채 회수된 검체 / 1-2 검사 진행 중 특정 단계에서 검사 실패한 검체 / 1-3 검사 대기 중인 검체 | 2-1 | 1 | 기존 원본 |
| 2 | Progress 상태 정보 Tooltip | Progress Info 아이콘에 마우스 오버 | 2-2 | 2 | 기존 원본 |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 점검 발견 | 3 ".CVS" | .CSV | 오타 | 작업 중 (20261123-최고관리자-samples) |
| R02 | 기준 자료 변경 | 3 [Export]가 T-IOS(OS 파일함, 엑셀파일)와 다름. IA는 짝 화면 동일 | 파일 형식은 T-IOS·L-IOS 모두 .csv. 저장 방법만 다름: T-IOS는 OS 파일 탐색기, L-IOS는 경로 저장·USB 저장 Popup (COMM-5-j(4/4)) | POL-COM-006 규칙 1·3·4 | 작업 중 (20261123-최고관리자-samples) |
| R03 | 점검 발견 | 0 "Run Start로 통해" | Run Start를 통해 | 오타 | 작업 중 (20261123-최고관리자-samples) |
| R04 | 기준 자료 변경 | 2-1 Start Date/Time "Prep 장비에서 바코드 찍은 시간", Progress "상태 값 : COMM-4-a" | TI-SPT-01 R06 · R07과 같이 (Prep 시스템이 Sample Barcode를 읽은 시점, 검사 단계 5개) | `glossary/terms.csv`, `glossary/test-stages.csv`, POL-SMP-002 (2단계 근거) | 작업 중 (20261123-최고관리자-samples) |
| R05 | 기준 자료 변경 | 1-2 Product 목록이 11개로 고정 | 검사 항목 목록 기준 확인 | `glossary/test-items.csv` | 대기 (확인 필요) |
| R06 | 점검 발견 | 버전 메모 없음 (TI-SPT-01은 v2.1.01 Export 수정 메모가 있음) | T/L 버전 맞춤 | Figma 버전 메모 | 대기 (확인 필요) |
| R07 | 기준 자료 변경 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 작업 중 (20261123-최고관리자-samples) |
| R08 | 점검 발견 | 2 "특정 샘플 행 클릭 시 샘플 상세 노출 : TI-SPT-01-01", 2-2 "표출 예시 : TI-SPT-01/Case → Case 2" (L-IOS 화면에서 T-IOS CID) | 디스크립션에 넣음: 2는 LI-SPT-01-01, 2-2는 LI-SPT-01/Case → Case 2 | 케이스 3 다시 옮기기 (2026-11-20, 작업 기록 20261120-최고관리자-samples) | 작업 중 (20261123-최고관리자-samples) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-11-20 | 작업방에 새로 그림 (기존 작업방 [1460:112005](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-112005) · Ver 2.0). 3단계 초안: R01 · R02 · R03 · R04 · R07 · R08 반영(작업 중), 상태값 순서(Common UX · 정책) | Claude (최고관리자 요청) | 20261120-최고관리자-samples, POL-SMP-001 · 002 · 005, POL-COM-006 |
| | 2026-11-23 | 멈춘 작업(20261120-최고관리자-samples)이 쓴 화면 MD 내용 · 섹션 링크를 지우고 빈 틀로 되돌림. 반영 대기 목록은 asis 화면 MD의 원래 변경 전 · 변경 후 · 상태로 되돌림(그 작업이 더한 줄은 상태만 대기로) | Claude (최고관리자 요청 R045) | 20261123-최고관리자-samples |
| 2.0 | 2026-11-23 | 작업방(Sample Tracking Ⓛ / Ⓣ_re)에 새로 그림 (기존 작업방 [1460:112005](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-112005) · Ver 2.0). 3단계: R01 · R02 · R03 · R04 · R07 · R08 반영(작업 중), 상태값 순서 · 정렬되는 칸 · No Data · 로딩 · 페이지네이션 형 · 툴팁 표출 항목(Common UX) | Claude (최고관리자 요청 R045) | 20261123-최고관리자-samples, POL-SMP-001 · 002 · 005, POL-COM-006 |
