---
cid: LI-SPT-01-01
pair_cid: TI-SPT-01-01
tl_relation: 동일
title: Details
path: Sample Tracking > Samples > Details
type: Popup
version: 2.1.11
date: 2026.10.08
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: [POL-SMP-001 · DS-0008, POL-SMP-002]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3102-56993
---
# LI-SPT-01-01 Details

- T/L 차이: 4 Sample Location의 Trolley 항목 이름이 L-IOS는 Trolley ID, T-IOS는 Trolley Name (반영 대기 R01, 질문 대기 Q10). 목록 노출 개수 Dropdown 없음 (LI-SPT-01과 같음)
- 호출하는 화면: [LI-SPT-02-01] 96-DWP Details (5-1 [More]), [LI-SPT-03-01] PCR Plate Details (6-1 [More]), [LI-SPT-01-02] Protocol Info - Pre-Treatment Protocol · [LI-SPT-01-03] Protocol Info - Extraction Protocol (8-1 [More])
- 호출되는 곳: [LI-SPT-01] Samples (목록 행 선택 → 같은 화면 오른쪽에 열림)

## 디스크립션

**0  <span style="color:red">Details</span> 화면**
- 정의
  - 검사 중 또는 검사 완료된 검체의 상세 정보를 볼 수 있는 화면
  - 기본 정보 및 단계별 정보 노출
- 동작
  - 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출
- User Type : Service, Admin, User
- L-IOS Client Mode : Main Mode, Console Mode, MS Mode

**1  <span style="color:red">Details</span> 타이틀 영역**
- 정의
  - 검체의 기본 속성 정보 영역
- 표출 항목
  - Sample ID
  - Product : RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P, <span style="color:red">Allplex HPV28</span>, STI-12
  - Status
    - 공통 UX 참고 : COMM-4-a
- 정책 참고 : POL-SMP-001

**2  검사 단계 정보 영역**
- 정의
  - 검사 프로세스 단계별 장비 및 검사 시간 정보 영역
  - 모든 단계의 Module 및 Unit 정보는 Run Start 시점부터 노출
  - Start 및 End Date/Time의 경우 해당 단계 진/출입 시 노출
- 표출 항목
  - Process : Sample Preparation, Nucleic Acid Extraction, PCR Setup, Plate Sealing, PCR
  - Module : Module <span style="color:red">이름</span> 정보(단, Sample Preparation 단계의 경우 Module/Unit 정보 미노출)
  - Unit : 상위 Module내 Unit <span style="color:red">이름 (번호)</span> 정보
  - Start Date/Time : <span style="color:red">그 단계의 Module이 Plate를 넘겨받아 Plate Barcode를 읽은 시점</span>
  - End Date/Time : <span style="color:red">그 단계 작업이 끝나 Plate가 Module에서 나온 시점</span>
- 정책 참고 : POL-SMP-002

**3  General 영역**
- 정의
  - 검체의 기본 속성 정보 영역
  - 사용자가 선택한 리스트 내 표출되는 정보와 동일한 정보
- 표출 항목
  - Sample Type
  - Order Date
  - Start Date/Time : <span style="color:red">Prep 시스템이 Sample Barcode를 읽은 시점</span>
  - End Date/Time : L-IOS가 <span style="color:red">D.A PC</span>(결과처리 시스템)로부터 검사 결과를 받은 시점
  - Canceled Date : 데이터 존재 시 노출/부재시 '-' 노출
  - Canceled : 데이터 존재 시 노출/부재시 '-' 노출
  - <span style="color:red">~~Status : 정의된 검체 상태 중 해당 되는 상태 노출~~</span>
  - STAT : 데이터 존재 시 노출/부재시 '-' 노출
- 표기 : 일시는 YYYY-MM-DD hh:mm:ss
- 정책 참고 : POL-SMP-002
- 케이스 참고 : LI-SPT-01-01/Case > Case 1

**4  Sample Location 영역**
- 정의
  - [Sample Storage] Module에서의 검체 위치 노출 영역
  - 샘플 회수 전 : <span style="color:red">Inbound Trolley</span> 내 검체 위치 값
  - 샘플 회수 후 : Outbound Trolley 내 검체 위치 값
- 표출 항목
  - Location Type(샘플 투입구 유형) : Trolley, STAT
  - Return <span style="color:red">Status</span>
    - N [샘플 회수 전 : <span style="color:red">Inbound Trolley</span> 정보]
    - Y [샘플 회수 후 : Outbound Trolley 정보]
  - Trolley ID : 시스템에 등록된 Trolley ID 정보 (8자리)
  - Tray Position : 트레이 층수(F 단위 표기) / 위치
  - STAT Slot No. : STAT 슬롯 내 Socket 순번
  - Socket ID : <span style="color:red">육안으로 확인 가능한 Socket ID 정보</span>
  - Socket Position : <span style="color:red">Socket 내 Sample 위치 정보</span>
- 케이스 참고 : LI-SPT-01-01/Case > Case 2

**5  96-DWP Plate 정보 영역**
- 정의
  - 검사 단계별 사용 Plate 상세 정보 영역
  - 선택된 검사 단계에서의 Plate 상세 정보 노출
- 표출 항목
  - ID : Plate 고유 ID (바코드 정보)
  - <span style="color:red">Well No.</span> : Plate 내 검체 위치 (행/열 좌표 정보)

**5-1  [More] 버튼**
- 정의
  - 96-DWP Plate 상세 정보 이동 버튼
- 동작
  - 클릭 시 <span style="color:red">[96-DWP]</span> 메뉴 내 해당 <span style="color:red">Sample이</span> 포함된 Plate 상세 정보 페이지로 즉시 이동 : LI-SPT-02-01
  - 이동 시 해당 Sample이 Plate 내에서 해당 검체만 활성화 된 상태로 노출

**6  PCR Plate 정보 영역**
- 정의
  - 검사 단계별 사용 Plate 상세 정보 영역
  - 선택된 검사 단계에서의 Plate 상세 정보 노출
- 표출 항목
  - ID : Plate 고유 ID (바코드 정보)
  - <span style="color:red">Well No.</span> : Plate 내 검체 위치 (행/열 좌표 정보)

**6-1  [More] 버튼**
- 정의
  - PCR Plate 상세 정보 이동 버튼
- 동작
  - 클릭 시 [PCR Plate] 메뉴 내 해당 <span style="color:red">Sample이</span> 포함된 Plate 상세 정보 페이지로 즉시 이동 : LI-SPT-03-01
  - 이동 시 해당 Sample이 Plate 내에서 해당 검체만 활성화 된 상태로 노출

**7  Reagents 정보 영역**
- 정의
  - 검사 단계별 사용(투입)된 시약 정보 오름차순 노출
- 노출
  - 검사 단계의 시약 데이터가 존재할 경우에만 영역 노출, 데이터 부재 시 영역 전체를 미노출 처리
- 정렬
  - 공통 UX 참고 : COMM-4-a
- 표출 항목
  - Kit : 시약 제품명 (구성품 단위 노출 X)
  - Barcode : 바코드 체계 참고 (COMM-4-b)
    - 단, 하위 시약은 대표 바코드 표기
    - 1) M96 Kit : LB DWP 바코드
    - 2) UC Kit : TUB 대표 바코드 (EB TUB 오른편에 부착된 바코드)

**8  Protocol 정보 영역**
- 정의
  - 전처리 및 핵산추출 단계에서 적용된 프로토콜 정보
  - Protocol Setting 메뉴에서 생성 관리
- 표출 항목
  - Pre-Treatment Protocol : 전처리 단계에서 적용된 프로토콜 명 노출
  - Extraction Protocol : 핵산 추출 단계에서 적용된 프로토콜 명 노출

**8-1  [More] 버튼**
- 정의
  - Protocol 상세 정보 노출 버튼
- 동작
  - 클릭 시, Protocol Info 팝업 노출
  - <span style="color:red">Pre-Treatment Protocol 탭 : LI-SPT-01-02, Extraction Protocol 탭 : LI-SPT-01-03</span>

**9  [X] 버튼**
- 클릭 시, 상세 정보가 닫히고, 리스트 영역이 우측으로 확장되어 노출

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| (왼쪽) | Samples 목록 (축소) | LI-SPT-01 목록 10행, AA0005005 · PB · Saliva 행 선택 | 작업방 LI-SPT-01 (3092:54562), 기존 기획 프레임 (기존 작업방 1460:111485) |
| 1 | 타이틀 | AA0005005 · PB · Running | 기존 기획 프레임, `status-values.csv` |
| 2 | 행 1 | Sample Preparation · - · - · 2026-03-05 10:40:30 · 2026-03-05 11:00:00 | `test-stages.csv`, 기존 기획 프레임 |
| 2 | 행 2 | Nucleic Acid Extraction · High-throughput Extraction · M9600 · 2026-03-05 11:10:30 · - | `modules.csv` · `module-units.csv` |
| 2 | 행 3 | PCR Setup · PCR Setup · STARlet · - · - | 같음 |
| 2 | 행 4 | Plate Sealing · Plate Sealing · Sealer (1) · - · - | 같음 |
| 2 | 행 5 | PCR · Universal PCR · CFX96 (2) · - · - | 같음 |
| 3 | General | Sputum · 2024-07-01 · <span style="color:red">2024-07-01 09:00:00</span> · <span style="color:red">2024-07-01 10:30:00</span> · - · - · - | `sample-types.csv`, POL-SMP-002 규칙 4 |
| 4 | Sample Location | Trolley · N · 8462-1981 · 3F / C02 · - · SK462135 · B05 | 기존 기획 프레임 |
| 5 | 96-DWP Plate | SDP0096B14253616467 · <span style="color:red">C01</span> | 기존 기획 프레임 |
| 6 | PCR Plate | SDP0096B14253616467 · <span style="color:red">A02</span> | 기존 기획 프레임 |
| 7 | Reagent Info | PBS Standard Tube · PR0925I01LB12354 / STARMag Universal Cartridge Kit · 260520280609EX294628G01EB144S / Allplex™ GI-Bacteria(I) Assay · 260520280809GI04XMOM | 기존 기획 프레임 |
| 8 | Protocol Info | Test Protocol AA · Test Protocol BB | 기존 기획 프레임 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 2 | Process | 화면 · 케이스 | | - | |
| 2 | Module | 화면 · 케이스 | | - | |
| 2 | Unit | 화면 · 케이스 | | - | |
| 2 · 3 | Start Date/Time | 화면 · 케이스 | | - | |
| 2 · 3 | End Date/Time | 화면 · 케이스 | | - | |
| 3 | General | 화면 · 케이스 | | - | |
| 3 | Sample Type | 화면 · 케이스 | | - | |
| 3 | Order Date | 화면 · 케이스 | | - | |
| 3 | Canceled Date | 화면 · 케이스 | | - | |
| 3 | Canceled | 화면 · 케이스 | | - | |
| 3 | STAT | 화면 · 케이스 | | - | |
| 4 | Sample Location | 화면 · 케이스 | | - | |
| 4 | Location Type | 화면 · 케이스 | | - | |
| 4 | Trolley · STAT | 디스크립션 · 케이스 | | - | |
| 4 | Return Status | 화면 · 케이스 | | - | |
| 4 | Trolley ID | 화면 | | - | |
| 4 | Trolley Name | 케이스 | | - | |
| 4 | Tray Position | 화면 · 케이스 | | - | |
| 4 | STAT Slot No. | 화면 · 케이스 | | - | |
| 4 | Socket ID | 화면 · 케이스 | | - | |
| 4 | Socket Position | 화면 · 케이스 | | - | |
| 5 | 96-DWP Plate | 화면 · 케이스 | | - | |
| 5 · 6 | ID | 화면 · 케이스 | | - | |
| 5 · 6 | Well No. | 화면 · 케이스 | | - | |
| 5-1 · 6-1 · 8-1 | More | 화면 · 케이스 | | - | |
| 6 | PCR Plate | 화면 · 케이스 | | - | |
| 7 | Reagent Info | 화면 · 케이스 | | - | |
| 7 | Kit | 화면 · 케이스 | | - | |
| 7 | Barcode | 화면 · 케이스 | | - | |
| 8 | Protocol Info | 화면 · 케이스 | | - | |
| 8 | Pre-Treatment Protocol | 화면 · 케이스 | | - | |
| 8 | Extraction Protocol | 화면 · 케이스 | | - | |

- 왼쪽 축소 목록 · 검색 영역 글자는 LI-SPT-01 표에 있음

## Alert · Confirm · Toast

없음

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | 검체 상태별 데이터 노출 항목 | 1-1 검사 진행 중 오더 취소된 검체 / 1-2 검사 대기 중 검체 (Trolley에서 검사 대기 중인 검체) 및 Not Tested 상태 검체 | 3 | 1 | 기존 원본 |
| 2 | 샘플 투입 유형별 표출 데이터 노출 예시 | 2-1 Trolley로 검체를 투입한 경우 / 2-2 STAT으로 검체를 투입한 경우 | 4 | 3 | 기존 원본 |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 점검 발견 | 4 Sample Location 항목 "Trolley ID" (T-IOS는 Trolley Name). IA는 짝 화면 동일 | 하나로 정함 | TI-SPT-01-01 4 | 대기 (확인 필요) |
| R02 | 점검 발견 | 4 Socket ID, Socket Position 설명 없음 | T-IOS 원문과 맞춤 | TI-SPT-01-01 4 | 작업 중 (20261120-최고관리자-samples) |
| R03 | 점검 발견 | 화면 이름 "Samples Details", 디스크립션 "Sample Details" | IA 기준 이름 하나로 | `ia/ia-screens.csv` | 작업 중 (20261120-최고관리자-samples) |
| R04 | 점검 발견 | TI-SPT-01-01 반영 대기 목록 2~10과 같은 표기·내용 (Allplex_HPV28, Module 고유 ID, General의 Status, WELL No., [96 DWP], Reagents 제목, 8-1 팝업 하나만 엶 등) | TI-SPT-01-01과 같이 | TI-SPT-01-01 반영 대기 목록 | 작업 중 (20261120-최고관리자-samples) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.11 | 2026-11-20 | 작업방에 새로 그림 (기존 작업방 [1460:111485](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-111485) · Ver 2.1.11). 3단계 초안: R02 · R03 · R04 반영(작업 중, R04는 TI-SPT-01-01 R02 ~ R07 · R09와 같게. Reagents 제목 · 정렬은 대기), 검사 단계 · General 일시 정의와 표기(POL-SMP-002) | Claude (최고관리자 요청) | 20261120-최고관리자-samples, POL-SMP-001 · DS-0008, POL-SMP-002 |