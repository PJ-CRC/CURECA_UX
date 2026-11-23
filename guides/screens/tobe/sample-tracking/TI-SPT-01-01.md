---
cid: TI-SPT-01-01
pair_cid: LI-SPT-01-01
tl_relation: 동일
title: Details
path: Sample Tracking > Samples > Details
type: Popup
version: 2.1.11
date: 2026.10.08
author: 정다예
client_mode: []
user_type: []
policies: [POL-SMP-001, POL-SMP-002, POL-TST-006 · DS-0008]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3158-53196
---
# TI-SPT-01-01 Details

- T/L 차이: 없음 (Sample Location 항목 이름은 질문 대기)
- 호출하는 화면: [TI-SPT-01] Samples (리스트 행 선택 → 상세), [TI-SPT-02] 96-DWP (5-1 [More] → 이동), [TI-SPT-03] PCR Plate (6-1 [More] → 이동), [TI-SPT-01-02] Protocol Info (8-1 [More] → Popup)
- 호출되는 곳: TI-SPT-01 Samples 리스트 행

## 디스크립션

**0  <span style="color:red">Details</span> 화면**
- 정의
  - 검사 중 또는 검사 완료된 Sample의 상세 정보를 볼 수 있는 화면
  - 기본 정보 및 단계별 정보 노출
- 동작
  - 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출

**1  <span style="color:red">Details</span> 타이틀 영역**
- 정의
  - Sample의 기본 속성 정보 영역
- 노출 항목
  - Sample ID
  - Product : <span style="color:red">RP1, RP2, RP3, PB, SARS2, SC2FabR, RVM, GI-V, GI-B1, GI-B2, GI-P, GI-H1, GI-B1P, GI-EB, H.ClariR, Allplex HPV28, Allplex HPV HR, Anyplex II HPV HR, STI-12, STI-EA, CA, GU, VS, CGMT, NGDR, M.AziR, M.MoxiR, BV plus, STI-EAQ, STI-7e</span>
  - Status : 공통 UX 참고(COMM-4-a(4/4))
- 정책 참고 : POL-SMP-001

**2  검사 단계 정보 영역**
- 정의
  - 검사 프로세스 단계별 Module · Unit 및 검사 시간 정보 영역
  - 모든 단계의 Module 및 Unit 정보는 Run Start 시점부터 노출
  - Start 및 End Date/Time의 경우 해당 단계 진/출입 시 노출
- 노출 항목
  - Process : Sample Preparation, Nucleic Acid Extraction, PCR Setup, Plate Sealing, PCR
  - Module : <span style="color:red">Module 이름 정보</span>(단, Sample Preparation 단계의 경우 Module/Unit 정보 미노출)
  - Unit : <span style="color:red">상위 Module 내 Unit 이름 정보, 같은 Unit이 여러 대면 이름 (번호)</span>
  - Start Date/Time : <span style="color:red">그 단계의 Module이 Plate를 넘겨받아 Plate Barcode를 읽은 시점</span>
  - End Date/Time : <span style="color:red">그 단계 작업이 끝나 Plate가 Module에서 나온 시점</span>
- 정책 참고 : POL-SMP-002

**3  General 영역**
- 정의
  - Sample의 기본 속성 정보 영역
  - 사용자가 선택한 리스트 내 노출되는 정보와 동일한 정보
- 노출 항목
  - Sample Type
  - Order Date
  - Start Date/Time : <span style="color:red">Prep 시스템이 Sample Barcode를 읽은 시점</span>
  - End Date/Time : L-IOS가 <span style="color:red">D.A PC</span>(결과처리 시스템)로부터 검사 결과를 받은 시점
  - Canceled Date : 데이터 존재 시 노출/부재시 '-' 노출
  - Canceled : 데이터 존재 시 노출/부재시 '-' 노출
  - <span style="color:red">~~Status : 정의된 검체 상태 중 해당 되는 상태 노출~~</span>
  - STAT : 데이터 존재 시 노출/부재시 '-' 노출
- 정책 참고 : POL-SMP-002

**4  Sample Location 영역**
- 정의
  - <span style="color:red">Sample Storage</span> Module에서의 Sample 위치 노출 영역
  - Sample 회수 전 : <span style="color:red">Inbound Trolley</span> 내 Sample 위치 값
  - Sample 회수 후 : Outbound Trolley 내 Sample 위치 값
- 노출 항목
  - Location Type(<span style="color:red">Sample</span> 투입구 유형) : Trolley, STAT
  - Return <span style="color:red">Status</span> : N [Sample 회수 전 : <span style="color:red">Inbound Trolley</span> 정보] / Y [Sample 회수 후 : Outbound Trolley 정보]
  - <span style="color:red">Trolley ID</span> : 시스템에 등록된 Trolley ID 정보 (8자리)
  - Tray Position : Tray 층수(F 단위 표기) / 위치
  - STAT Slot No. : STAT 슬롯 내 Socket 순번
  - Socket ID : 육안으로 확인 가능한 Socket ID 정보
  - Socket Position : Socket 내 Sample 위치 정보
- 케이스 참고 : TI-SPT-01-01/Case > Case 2

**5  96-DWP Plate 정보 영역**
- 정의
  - 검사 단계별 사용 Plate 상세 정보 영역
  - 선택된 검사 단계에서의 Plate 상세 정보 노출
- 노출 항목
  - ID : Plate 고유 ID (Barcode 정보)
  - <span style="color:red">Well No.</span> : Plate 내 Sample 위치 (행/열 좌표 정보)

**5-1  [More] 버튼**
- 정의
  - 96-DWP Plate 상세 정보 이동 버튼
- 동작
  - 클릭 시 <span style="color:red">[96-DWP]</span> 메뉴 내 해당 Sample<span style="color:red">이</span> 포함된 Plate 상세 정보 페이지로 즉시 이동
  - 이동 시 해당 Sample이 Plate 내에서 해당 Sample만 활성화 된 상태로 노출

**6  PCR Plate 정보 영역**
- 정의
  - 검사 단계별 사용 Plate 상세 정보 영역
  - 선택된 검사 단계에서의 Plate 상세 정보 노출
- 노출 항목
  - ID : Plate 고유 ID (Barcode 정보)
  - <span style="color:red">Well No.</span> : Plate 내 Sample 위치 (행/열 좌표 정보)

**6-1  [More] 버튼**
- 정의
  - PCR Plate 상세 정보 이동 버튼
- 동작
  - 클릭 시 [PCR Plate] 메뉴 내 해당 Sample<span style="color:red">이</span> 포함된 Plate 상세 정보 페이지로 즉시 이동
  - 이동 시 해당 Sample이 Plate 내에서 해당 Sample만 활성화 된 상태로 노출

**7  Reagents 정보 영역**
- 정의
  - 검사 단계별 사용(투입)된 Reagent 정보 오름차순 노출
- 노출 조건
  - 검사 단계의 Reagent 데이터가 존재할 경우에만 영역 노출, 데이터 부재 시 영역 전체를 미노출 처리
- 정렬 : 공통 UX 참고 : <span style="color:red">COMM-4-b(3/5)</span>
- 노출 항목
  - Kit : Reagent 제품명 (구성품 단위 노출 X)
  - Barcode : Barcode 체계 참고 (COMM-4-b)
  - 단, 하위 Reagent은 대표 Barcode 표기
  - 1) M96 Kit : LB DWP Barcode
  - 2) UC Kit : TUB 대표 Barcode (EB TUB 오른편에 부착된 Barcode)

**8  Protocol 정보 영역**
- 정의
  - 전처리 및 핵산 추출 단계에서 적용된 Protocol 정보
  - Protocol Setting 메뉴에서 생성 관리
- 노출 항목
  - Pre-Treatment Protocol : 전처리 단계에서 적용된 Protocol 명 노출
  - Extraction Protocol : 핵산 추출 단계에서 적용된 Protocol 명 노출
- 정책 참고 : POL-TST-006

**8-1  [More] 버튼**
- 정의
  - Protocol 상세 정보 노출 버튼
- 동작
  - 클릭 시, TI-SPT-01-02 Popup 노출
  - <span style="color:red">Popup의 Pre-Treatment Protocol 탭 : TI-SPT-01-02, Extraction Protocol 탭 : TI-SPT-01-03</span>

**9  [X] 버튼**
- 동작
  - 클릭 시, 상세 정보가 닫히고, 리스트 영역이 우측으로 확장되어 노출

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | 타이틀 | AA0005005 · PB · Running | 기존 원본 1460:109649 · `glossary/status-values.csv` |
| 2 | 검사 단계 | Sample Preparation · - · - · 2026-03-05 10:40:30 · 2026-03-05 11:00:00 / Nucleic Acid Extraction · High-throughput Extraction · M9600 · 2026-03-05 11:10:30 · - / PCR Setup · PCR Setup · STARlet · - · - / Plate Sealing · Plate Sealing · Sealer (1) · - · - / PCR · Universal PCR · CFX96 (2) · - · - | 기존 원본 · `glossary/test-stages.csv` · `module-units.csv` |
| 3 | General | Sputum · 2026-03-05 · 2024-07-01 09:00 · - · - · - · - | 기존 원본 (Order Date는 기존 원본에 값이 없어 Samples 예시와 같은 날짜) |
| 4 | Sample Location | Trolley · N · 8462-1981 · 3F / C02 · - · SK462135 · B05 | 기존 원본 |
| 5 | 96-DWP Plate | SDP0096B14253616467 · <span style="color:red">C01</span> | 기존 원본 (CO1 → C01) |
| 6 | PCR Plate | SDP0096B14253616467 · <span style="color:red">A02</span> | 기존 원본 (AO2 → A02) |
| 7 | Reagent Info | PBS Standard Tube · PR0925I01LB12354 / STARMag Universal Cartridge Kit · 260520280609EX294628G01EB144S / Allplex™ GI-Bacteria(I) Assay · 260520280809GI04XMOM | 기존 원본 |
| 8 | Protocol Info | Test Protocol AA · Test Protocol BB | 기존 원본 케이스 (본 화면 값 없음) |
| (왼쪽) | 축소된 Samples 목록 | TI-SPT-01 화면 예시와 같음 | TI-SPT-01 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 0 | Product | 화면 (축소된 Samples 목록) | LID-RUN-023 | - | ES · Producto |
| 2 | Process | 화면 | LID-STN-026 | - | FR · Processus |
| 2 | Module | 화면 | LID-EVT-012 | - | PT · Módulo |
| 2 | Unit | 화면 | LID-EVT-013 | - | DE · Einheit |
| 2 | Start Date/Time | 화면 | LID-TMG-004 | - | ES · Fecha/Hora de Inicio |
| 2 | End Date/Time | 화면 | LID-TMG-005 | - | PT · Data/Hora de Término |
| 2 | Sample Preparation | 화면 | LID-SPT-024 | - |  |
| 2 | Nucleic Acid Extraction | 화면 | LID-SPT-025 | - |  |
| 2 | PCR Setup | 화면 | LID-SPT-026 | - |  |
| 2 | Plate Sealing | 화면 | LID-SPT-032 | - |  |
| 2 | PCR | 화면 | LID-SPT-033 | - |  |
| 3 | General | 화면 | LID-STN-197 | - | DE · Allgemein |
| 3 | Sample Type | 화면 | LID-STN-023 | - | FR · Type d'échantillon |
| 3 | Order Date | 화면 | LID-RUN-020 | - | ES · Fecha de Solicitud |
| 3 | Canceled Date | 화면 | LID-TMG-003 | - | PT · Data de Cancelamento |
| 3 | Canceled | 화면 | LID-TMG-006 | - | DE · Storniert |
| 3 | STAT | 화면 | LID-RUN-024 | - |  |
| 4 | Sample Location | 화면 | LID-SPT-007 | - | FR · Emplacement de l'échantillon |
| 4 | Location Type | 화면 | LID-SPT-039 | - | PT · Tipo de Localização |
| 4 | Return Status | 화면 | LID-SPT-008 | - | ES · Estado de Devolución |
| 4 | Trolley Name → Trolley ID | 화면 |  | 변경 |  |
| 4 | Tray Position | 화면 | LID-SPT-010 | - | ES · Posición del Tray |
| 4 | STAT Slot No. | 화면 | LID-SPT-040 | - | FR · N° d'emplacement STAT |
| 4 | Socket ID | 화면 | LID-SPT-041 | - | ES · ID del Socket |
| 4 | Socket Position | 화면 | LID-SPT-011 | - | ES · Posición del Socket |
| 5 | 96-DWP Plate | 화면 | LID-SPT-013 | - |  |
| 5 | ID | 화면 | LID-LOG-003 | - | DE · ID |
| 5 | Well No. | 화면 | LID-SPT-016 | - | ES · N.º de Pocillo |
| 5-1 | More | 화면 | LID-SPT-015 | - | IT · Altro |
| 6 | PCR Plate | 화면 | LID-SPT-031 | - |  |
| 7 | Reagent Info | 화면 | LID-SPT-017 | - | FR · Informations sur le réactif |
| 7 | Kit | 화면 | LID-SPT-046 | - |  |
| 7 | Barcode | 화면 | LID-SPT-018 | - | PT · Código de Barras |
| 8 | Protocol Info | 화면 | LID-SPT-042 | - | FR · Informations sur le protocole |
| 8 | Pre-Treatment Protocol | 화면 | LID-STN-002 | - | IT · Protocollo di Pretrattamento |
| 8 | Extraction Protocol | 화면 | LID-STN-003 | - | IT · Protocollo di Estrazione |

## Alert · Confirm · Toast

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 없음 | | | | |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | Sample 상태별 데이터 노출 항목 | Sample 상태별 | 2, 3 | 1 | 기존 원본 |
| 2 | Sample 투입 유형별 데이터 노출 예시 | Trolley / STAT | 4 | 3 | 기존 원본 |

## 반영 대기 목록

<!-- 쓰는 법은 reference-rules/pending-changes.md. 타입: 논의 결정 / 다른 화면 파급 / 기준 자료 변경 / 외부 원본 변경 / 점검 발견.
     상태: 대기 / 작업 중 (작업 기록 이름) / 반영 완료 (날짜) / 제외 (날짜, 이유). 줄은 지우지 않습니다. -->

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 점검 발견 | 화면 이름 "Samples Details", 경로 "Sample Tracking > Samples Details", 디스크립션 0·1 "Sample Details" | IA 기준(Samples > Details)으로 이름 하나로 | `ia/ia-screens.csv` | 작업 중 (20261123-최고관리자-samples-2) |
| R02 | 기준 자료 변경 | 1 Product "Allplex_HPV28" | Allplex HPV28 | `glossary/test-items.csv` UI 표기 | 작업 중 (20261123-최고관리자-samples-2) |
| R03 | 기준 자료 변경 | 2 Module·Unit "고유 ID 정보"인데 화면은 Module 이름(High-throughput Extraction)과 Unit 이름(M9600, Sealer (1)) | 이름 (번호)로 표시한다고 고쳐 씀 | `glossary/terms.csv` Module, Unit | 작업 중 (20261123-최고관리자-samples-2) |
| R04 | 점검 발견 | 3 General 표출 항목에 Status가 있는데 화면 General 영역에는 없음 (Status는 타이틀 영역에 있음) | 하나로 맞춤 | 화면 글자 | 작업 중 (20261123-최고관리자-samples-2) |
| R05 | 점검 발견 | 4 "InboundTrolley", "Return status" (화면은 Return Status) | Inbound Trolley, Return Status | 표기 | 작업 중 (20261123-최고관리자-samples-2) |
| R06 | 점검 발견 | 5·6 "WELL No." (화면은 Well No.), 화면 예시 "CO1", "AO2" (영문 O) | Well No., C01, A02 | 화면 글자 | 작업 중 (20261123-최고관리자-samples-2) |
| R07 | 기준 자료 변경 | 5-1 "[96 DWP] 메뉴", "Sample가" | [96-DWP] 메뉴, Sample이 | `glossary/terms.csv` DWP, 오타 | 작업 중 (20261123-최고관리자-samples-2) |
| R08 | 점검 발견 | 7 제목 "Reagents 정보 영역" (화면은 Reagent Info), 정렬 "공통 UX 참고 : COMM-4-a" (상태값 문서) | 제목 맞춤, 정렬 기준 문서 확인 | 화면 글자 | 대기 (확인 필요) |
| R09 | 점검 발견 | 8-1 [More]는 TI-SPT-01-02만 엶. Extraction Protocol 팝업(TI-SPT-01-03)이 따로 있음 | Pre-Treatment·Extraction 각각 어느 팝업을 여는지 적음 | `ia/ia-screens.csv` | 작업 중 (20261123-최고관리자-samples-2) |
| R10 | 기준 자료 변경 | 3 Start Date/Time "Prep 장비에서 바코드 찍은 시간", 4 "[Sample Storage] Module", "샘플 투입구" | 표준어 (Sample Storage Module, Module 이름) | `glossary/terms.csv` | 작업 중 (20261123-최고관리자-samples-2) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.11 | 2026-11-20 | 작업방에 새로 그림 (기존 작업방 [1460:109649](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-109649) · Ver 2.1.11). 3단계 초안: R01 · R02 · R03 · R04 · R05 · R06 · R07 · R09 반영(작업 중), 검사 단계 · General 일시 정의와 표기(POL-SMP-002) | Claude (최고관리자 요청) | 20261120-최고관리자-samples, POL-SMP-001 · DS-0008, POL-SMP-002 |
| | 2026-11-23 | 멈춘 작업(20261120-최고관리자-samples)이 쓴 화면 MD 내용 · 섹션 링크를 지우고 빈 틀로 되돌림. 반영 대기 목록은 asis 화면 MD의 원래 변경 전 · 변경 후 · 상태로 되돌림(그 작업이 더한 줄은 상태만 대기로) | Claude (최고관리자 요청 R045) | 20261123-최고관리자-samples |
| | 2026-11-23 | 멈춘 작업(20261123-최고관리자-samples)이 쓴 화면 MD 내용 · 섹션 링크를 지우고 그 작업 시작 전 빈 틀로 되돌림(R046 새 작업 20261123-최고관리자-samples-2). 반영 대기 목록도 그 작업 시작 전 상태로 | Claude | R046 |
| 2.1.11 | 2026-11-23 | 작업방(Sample Tracking Ⓛ / Ⓣ_re)에 새로 그림 (기존 작업방 [1460:109649](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-109649) · Ver 2.1.11). 3단계 초안 | Claude | R01 · R02 · R03 · R04 · R05 · R06 · R07 · R09 · R10 |
