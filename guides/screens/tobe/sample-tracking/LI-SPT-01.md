---
cid: LI-SPT-01
pair_cid: TI-SPT-01
tl_relation: 기능 추가
title: Samples
path: Sample Tracking > Samples
type: Page
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: []
policies: [POL-SMP-001, POL-SMP-002, POL-SMP-003, POL-SMP-005, POL-COM-006]
basis: 2026-11-23 14:40 · history f4a5f93f
basis_versions:
  rules: CURECA 작업규칙 @2026-11-20
  policy: CURECA 정책서 @2026-11-03
  glossary: 기준데이터 @2026-11-19
  screens: 화면 정의서 @2026-11-23
  ux_guide: Common UX 가이드 (UX가이드_Common-UX-가이드) @2026-11-17
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3158-53203
---
# LI-SPT-01 Samples

- T/L 차이: [Export] 저장 방법(L-IOS는 경로 저장 · USB 저장 Popup), 노출 개수 10줄 고정
- 호출하는 화면: [LI-SPT-01-01] Details (리스트 행 선택 → 상세), [COMM-5-m(2/4)] Import / Export Popup ([Export] → 저장 Popup)
- 호출되는 곳: LNB Sample Tracking > Samples

## 디스크립션

**0  Samples 화면**
- 정의
  - Run Start<span style="color:red">를</span> 통해 검사를 시작한 Sample 정보
  - Sample별 검사 단위로 리스트 노출
- 동작
  - 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출

**1  검색 영역**
- 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 : COMM-5-p

**1-1  Sample ID(Text Input)**
- 기능 : Sample ID를 입력하여 데이터 조회
- 동작
  - 하위 리스트 내 Sample ID 컬럼 대상으로 입력
  - 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
  - 영문 입력 시 대소문자를 구분하지 않음

**1-2  Product(Multi-Select Dropdown)**
- 기능
  - 검사 항목을 다중 선택하여 데이터 조회
- 기본값 : All
- 드롭다운 리스트 항목
  - <span style="color:red">All, RP1, RP2, RP3, PB, SARS2, SC2FabR, RVM, GI-V, GI-B1, GI-B2, GI-P, GI-H1, GI-B1P, GI-EB, H.ClariR, Allplex HPV28, Allplex HPV HR, Anyplex II HPV HR, STI-12, STI-EA, CA, GU, VS, CGMT, NGDR, M.AziR, M.MoxiR, BV plus, STI-EAQ, STI-7e</span>
- 공통 UX 참고 : COMM-5-h(1/2)

**1-3  Sample Type(Multi-Select Dropdown)**
- 기능
  - Sample 타입을 다중 선택하여 데이터 조회
- 기본값 : All
- 드롭다운 리스트 항목
  - All, Swab, Aspirate, BAL, Saliva, Sputum, Raw stool, Cary-blair, eNAT stool, Fecal swab, Thinprep, Surepath, Cellpreserv, Urine, Semen
- 공통 UX 참고 : COMM-5-h(1/2)

**1-4  Date(Cascading Dropdown)**
- 기능
  - 조회 기준(일자 유형)을 먼저 선택하고, 특정 일자 및 기간 설정하여 데이터 조회
  - 일자 유형[좌] : 조회하고 싶은 일자 유형 선택
  - 특정 일자 및 기간[우] : 선택 유형에 대한 일자 및 기간 설정
  - 단, 오늘 기준 미래일자는 선택 불가
- 기본값
  - 일자 유형[좌] : Order Date
  - 특정 일자 및 기간[우] : 시작일-7일 전 ~ 종료일-Today
- 드롭다운 리스트 항목
  - Order Date, Start Date, End Date
- 공통 UX 참고 : COMM-5-h(2/2)

**1-5  Status(Dropdown)**
- 기능
  - 검사 상태를 단일 선택하여 데이터 조회
- 기본값 : All
- 드롭다운 리스트 항목
  - All, <span style="color:red">Ordered, </span>Ready, Not Tested, Running, Completed, Failed
- 공통 UX 참고 : COMM-5-h(1/2)

**1-6  STAT Only(Check box)**
- 기능 : 응급 상태의 Sample 데이터 조회
- 기본값 : UnSelected(미선택)
- 리스트 노출
  - Selected(선택) 시, 응급 상태의 Sample만 노출
  - UnSelected(미선택) 시, 전체 Sample 노출
- 공통 UX 참고 : COMM-5-q

**1-7  [Reset] · [Search] 버튼**
- <span style="color:red">동작</span>
  - <span style="color:red">[Reset] 클릭 시, 설정한 조회 조건을 모두 기본값으로 초기화</span>
  - <span style="color:red">[Search] 클릭 시, 모든 조회 조건을 함께 적용한 결과를 리스트에 노출</span>
- <span style="color:red">공통 UX 참고 : COMM-5-p</span>

**2  Samples 리스트**
- 정의 : 검사 접수된 Sample 중 Run을 실행한 Sample 리스트
- <span style="color:red">노출 단위 : 검사 항목(Product) 단위로 한 줄씩 노출</span>
- 정렬
  - 기본값 : Start Date/Time 기준 최신순(내림차순)
  - 기본값 조건 동일 시, Sample ID 기준 오름차순
  - <span style="color:red">정렬 가능 칸 : Order Date, Start Date/Time, End Date/Time</span>
- <span style="color:red">노출 개수 : 10 items 고정</span>
- <span style="color:red">데이터가 없을 때 : 리스트 영역에 No Data 노출, Items 0</span>
- 동작
  - 특정 Sample 행 클릭 시 Sample 상세 노출 : <span style="color:red">LI-SPT-01-01</span>
- 공통 UX 참고 : COMM-5-g
- 정책 참고 : POL-SMP-005

**2-1  리스트 노출 항목**
- Sample ID
  - T-IOS에서 수신되는 Sample ID 정보
- Product
  - T-IOS에서 수신되는 검사 항목 정보
  - 하나의 검사 항목 단위 정보 노출
- Sample Type
  - T-IOS에서 수신되는 Sample 타입 정보
- Order Date
  - LIS 접수 일자 정보
  - 표기 : YYYY-MM-DD
- Status
  - Sample의 검사 진행 상태 정보
  - 상태 값 : COMM-4-a(4/4)
- Progress
  - 전체 검사 프로세스 대비 단계별 진행 현황 정보
  - <span style="color:red">검사 단계 : Sample Preparation, Nucleic Acid Extraction, PCR Setup, Plate Sealing, PCR</span>
- Start Date/Time
  - <span style="color:red">Prep 시스템이 Sample Barcode를 읽은 시점</span>
  - <span style="color:red">표기 : YYYY-MM-DD hh:mm:ss / 데이터 부재 시 '-' 노출</span>
- End Date/Time
  - L-IOS가 <span style="color:red">D.A PC</span>(결과처리 시스템)로부터 검사 결과를 받은 시점
  - <span style="color:red">표기 : YYYY-MM-DD hh:mm:ss / 데이터 부재 시 '-' 노출</span>
- STAT
  - T-IOS에서 수신되는 Sample 응급 여/부 상태 정보
- 정책 참고 : POL-SMP-001, POL-SMP-002
- 케이스 참고 : LI-SPT-01/Case > Case 1

**2-2  Progress 상태 정보(Tooltip)**
- 공통 UX 참고 : COMM-5-v
- 케이스 참고 : <span style="color:red">LI-SPT-01/Case > Case 2</span>

**3  [Export] 버튼**
- <span style="color:red">활성화 조건</span>
  - <span style="color:red">리스트 0건 시 비활성화</span>
- 동작
  - 리스트에 노출된 데이터를 파일(<span style="color:red">.csv</span>) 형태로 저장
  - 버튼 선택 시, Popup 노출 : <span style="color:red">COMM-5-m(2/4)</span>
  - <span style="color:red">경로 저장 또는 USB 저장 선택</span>
  - <span style="color:red">저장 완료 · 실패를 따로 안내하지 않음 (Popup의 저장 결과로 확인)</span>
- 정책 참고 : POL-COM-006

**4  페이지네이션**
- <span style="color:red">형식 : Number Pagination</span>
- 공통 UX 참고 : COMM-5-l

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1-1 ~ 1-6 | 검색 조건 | Sample ID (빈 칸) · Product All · Sample Type All · Date Order Date 2026-03-05 ~ 2026-03-11 · Status All · STAT Only 미선택 | 기존 원본 1460:112005 |
| 2 | Items | 10 | 화면 예시 행 수 |
| 2-1 | 행 1 | AA0005001 · RP1 · Sputum · 2026-03-05 · Not Tested · - · - · - | 기존 원본 행 1 · `glossary/status-values.csv` · `test-items.csv` · `sample-types.csv` (Order Date는 기존 원본에 값이 없어 검색 기간 안의 날짜) |
| 2-1 | 행 2 | AA0005001 · RP2 · Sputum · 2026-03-05 · Not Tested · - · - · - | 기존 원본 행 2 · `glossary/status-values.csv` · `test-items.csv` · `sample-types.csv` (Order Date는 기존 원본에 값이 없어 검색 기간 안의 날짜) |
| 2-1 | 행 3 | AA0005001 · RP3 · Sputum · 2026-03-05 · Not Tested · - · - · - | 기존 원본 행 3 · `glossary/status-values.csv` · `test-items.csv` · `sample-types.csv` (Order Date는 기존 원본에 값이 없어 검색 기간 안의 날짜) |
| 2-1 | 행 4 | AA0005002 · STI-12 · Thinprep · 2026-03-05 · Ready · - · - · - | 기존 원본 행 4 · `glossary/status-values.csv` · `test-items.csv` · `sample-types.csv` (Order Date는 기존 원본에 값이 없어 검색 기간 안의 날짜) |
| 2-1 | 행 5 | AA0005003 · STI-12 · Surepath · 2026-03-05 · Failed · 2026-03-05 10:22:48 · 2026-03-05 11:22:48 · - | 기존 원본 행 5 · `glossary/status-values.csv` · `test-items.csv` · `sample-types.csv` (Order Date는 기존 원본에 값이 없어 검색 기간 안의 날짜) |
| 2-1 | 행 6 | AA0005004 · STI-12 · Swab · 2026-03-05 · Completed · 2026-03-05 10:22:48 · 2026-03-05 11:22:48 · - | 기존 원본 행 6 · `glossary/status-values.csv` · `test-items.csv` · `sample-types.csv` (Order Date는 기존 원본에 값이 없어 검색 기간 안의 날짜) |
| 2-1 | 행 7 | AA0005005 · PB · Saliva · 2026-03-05 · Running · 2026-03-05 10:22:48 · - · - | 기존 원본 행 7 · `glossary/status-values.csv` · `test-items.csv` · `sample-types.csv` (Order Date는 기존 원본에 값이 없어 검색 기간 안의 날짜) |
| 2-1 | 행 8 | AA0005006 · GI-B1 · eNAT stool · 2026-03-05 · Running · 2026-03-05 10:22:48 · - · - | 기존 원본 행 8 · `glossary/status-values.csv` · `test-items.csv` · `sample-types.csv` (Order Date는 기존 원본에 값이 없어 검색 기간 안의 날짜) |
| 2-1 | 행 9 | AA0005006 · GI-B2 · eNAT stool · 2026-03-05 · Running · 2026-03-05 10:22:48 · - · - | 기존 원본 행 9 · `glossary/status-values.csv` · `test-items.csv` · `sample-types.csv` (Order Date는 기존 원본에 값이 없어 검색 기간 안의 날짜) |
| 2-1 | 행 10 | AA0005007 · Allplex HPV28 · Surepath · 2026-03-05 · Running · 2026-03-05 10:22:48 · - · - | 기존 원본 행 10 · `glossary/status-values.csv` · `test-items.csv` · `sample-types.csv` (Order Date는 기존 원본에 값이 없어 검색 기간 안의 날짜) |
| 2-1 | Progress | 상태별 단계 노출 (Not Tested · Ready: 모두 대기, Running: 진행 중 단계까지, Completed: 모두 완료, Failed: 실패 단계) | `glossary/test-stages.csv` · 기존 원본 |
| 4 | 페이지네이션 | 1 / 10페이지 (First) | COMM-5-l |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 0 | Samples | 화면 | LID-SPT-001 | - | FR · Échantillons |
| 1-1 | Sample ID | 화면 | LID-RUN-019 | - | FR · ID échantillon |
| 1-2 | Product | 화면 | LID-RUN-023 | - | ES · Producto |
| 1-2 | All | 화면 · 디스크립션 | LID-EVT-003 | - | PT · Todos |
| 1-3 | Sample Type | 화면 | LID-STN-023 | - | FR · Type d'échantillon |
| 1-4 | Date | 화면 | LID-TMG-002 | - | DE · Datum |
| 1-4 | Order Date | 화면 · 디스크립션 | LID-RUN-020 | - | ES · Fecha de Solicitud |
| 1-4 | Start Date | 디스크립션 | LID-SPT-037 | - | ES · Fecha de Inicio |
| 1-4 | End Date | 디스크립션 | LID-SPT-038 | - | PT · Data de Término |
| 1-5 | Status | 화면 | LID-SPT-002 | - | DE · Status |
| 1-5 | Ordered | 디스크립션 | LID-TMG-036 | 신규 | PT · Solicitado |
| 1-5 | Ready | 디스크립션 | LID-TMG-037 | - | DE · Bereit |
| 1-5 | Not Tested | 화면 · 디스크립션 | LID-DAS-019 | - | DE · Nicht Getestet |
| 1-5 | Running | 화면 · 디스크립션 | LID-TMG-038 | - | IT · In Esecuzione |
| 1-5 | Completed | 화면 · 디스크립션 | LID-TMG-039 | - | DE · Abgeschlossen |
| 1-5 | Failed | 화면 · 디스크립션 | LID-DAS-018 | - | DE · Fehlgeschlagen |
| 1-6 | STAT Only | 화면 | LID-RUN-022 | - | FR · STAT uniquement |
| 1-7 | Reset | 화면 | LID-EVT-022 | - | FR · Réinitialiser |
| 1-7 | Search | 화면 | LID-STN-016 | - | FR · Rechercher |
| 2 | Items | 화면 | LID-STN-006 | - | ES · Elementos |
| 2 | No Data | 디스크립션 | | 신규 | FR · Aucune donnée |
| 2-1 | Progress | 화면 | LID-SPT-003 | - | DE · Fortschritt |
| 2-1 | Start Date/Time | 화면 | LID-TMG-004 | - | ES · Fecha/Hora de Inicio |
| 2-1 | End Date/Time | 화면 | LID-TMG-005 | - | PT · Data/Hora de Término |
| 2-1 | STAT | 화면 | LID-RUN-024 | - |  |
| 2-1 | Sample Preparation | 케이스 | LID-SPT-024 | - |  |
| 2-1 | Nucleic Acid Extraction | 케이스 | LID-SPT-025 | - |  |
| 2-1 | PCR Setup | 케이스 | LID-SPT-026 | - |  |
| 2-1 | Plate Sealing | 케이스 | LID-SPT-032 | - |  |
| 2-1 | PCR | 케이스 | LID-SPT-033 | - |  |
| 3 | Export | 화면 | LID-EVT-023 | - | DE · Exportieren |

## Alert · Confirm · Toast

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 없음 | | | | |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | Sample 상태별 데이터 노출 예시 | Ready · Not Tested · Running · Completed · Failed | 2-1 | 1 | 기존 원본 |
| 2 | Progress 상태 정보 Tooltip | Progress에 마우스를 올림 | 2-2 | 2 | 기존 원본 |

## 반영 대기 목록

<!-- 쓰는 법은 reference-rules/pending-changes.md. 타입: 논의 결정 / 다른 화면 파급 / 기준 자료 변경 / 외부 원본 변경 / 점검 발견.
     상태: 대기 / 작업 중 (작업 기록 이름) / 반영 완료 (날짜) / 제외 (날짜, 이유). 줄은 지우지 않습니다. -->

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 점검 발견 | 3 ".CVS" | .CSV | 오타 | 반영 완료 (2026-11-23) |
| R02 | 기준 자료 변경 | 3 [Export]가 T-IOS(OS 파일함, 엑셀파일)와 다름. IA는 짝 화면 동일 | 파일 형식은 T-IOS·L-IOS 모두 .csv. 저장 방법만 다름: T-IOS는 OS 파일 탐색기, L-IOS는 경로 저장·USB 저장 Popup (COMM-5-j(4/4)) | POL-COM-006 규칙 1·3·4 | 반영 완료 (2026-11-23) |
| R03 | 점검 발견 | 0 "Run Start로 통해" | Run Start를 통해 | 오타 | 반영 완료 (2026-11-23) |
| R04 | 기준 자료 변경 | 2-1 Start Date/Time "Prep 장비에서 바코드 찍은 시간", Progress "상태 값 : COMM-4-a" | TI-SPT-01 반영 대기 목록 6·7과 같이 | `glossary/terms.csv`, `glossary/test-stages.csv` | 반영 완료 (2026-11-23) |
| R05 | 기준 자료 변경 | 1-2 Product 목록이 11개로 고정 | 검사 항목 목록 기준 확인 | `glossary/test-items.csv` | 대기 (확인 필요) |
| R06 | 점검 발견 | 버전 메모 없음 (TI-SPT-01은 v2.1.01 Export 수정 메모가 있음) | T/L 버전 맞춤 | Figma 버전 메모 | 대기 (확인 필요) |
| R07 | 기준 자료 변경 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 반영 완료 (2026-11-23) |
| R08 | 점검 발견 | 2 "특정 샘플 행 클릭 시 샘플 상세 노출 : TI-SPT-01-01", 2-2 "표출 예시 : TI-SPT-01/Case → Case 2" (L-IOS 화면에서 T-IOS CID) | 디스크립션에 넣음: 2는 LI-SPT-01-01, 2-2는 LI-SPT-01/Case → Case 2 | 케이스 3 다시 옮기기 (2026-11-20, 작업 기록 20261120-최고관리자-samples) | 반영 완료 (2026-11-23) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-11-20 | 작업방에 새로 그림 (기존 작업방 [1460:112005](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-112005) · Ver 2.0). 3단계 초안: R01 · R02 · R03 · R04 · R07 · R08 반영(작업 중), 상태값 순서(Common UX · 정책) | Claude (최고관리자 요청) | 20261120-최고관리자-samples, POL-SMP-001 · 002 · 005, POL-COM-006 |
| | 2026-11-23 | 멈춘 작업(20261120-최고관리자-samples)이 쓴 화면 MD 내용 · 섹션 링크를 지우고 빈 틀로 되돌림. 반영 대기 목록은 asis 화면 MD의 원래 변경 전 · 변경 후 · 상태로 되돌림(그 작업이 더한 줄은 상태만 대기로) | Claude (최고관리자 요청 R045) | 20261123-최고관리자-samples |
| | 2026-11-23 | 멈춘 작업(20261123-최고관리자-samples)이 쓴 화면 MD 내용 · 섹션 링크를 지우고 그 작업 시작 전 빈 틀로 되돌림(R046 새 작업 20261123-최고관리자-samples-2). 반영 대기 목록도 그 작업 시작 전 상태로 | Claude | R046 |
| 2.0 | 2026-11-23 | 작업방(Sample Tracking Ⓛ / Ⓣ_re)에 새로 그림 (기존 작업방 [1460:112005](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-112005) · Ver 2.0). 3단계 초안 | Claude | R01 · R02 · R03 · R04 · R07 · R08 |
|  | 2026-11-23 | 3 [Export] 저장 완료 · 실패 안내 없음 명시 (Q6 답) | Claude (최고관리자 요청 R046) | DS-0009 |
| 2.0 | 2026-11-23 | 5단계 완료: 반영 대기 반영 완료 (R01 · R02 · R03 · R04 · R07 · R08), UX 확정 · 재설계 후 변경 내역 메모 | Claude | R01 · R02 · R03 · R04 · R07 · R08 |
