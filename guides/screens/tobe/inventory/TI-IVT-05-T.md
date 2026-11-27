---
cid: TI-IVT-05-T
pair_cid: LI-IVT-05-T
tl_relation: 동일   # 동일 | 권한 차이 | 기능 추가 | 단독
title: Waste Bin/Bottle
path: Inventory > Waste Bin/Bottle Tab
type: Tab          # Page | Popup | Tab
version: 2.1.11
date: 2026.10.08
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-INV-001, POL-INV-005, POL-LOD-005, POL-EQP-009]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3903-7493
---
# TI-IVT-05-T Waste Bin/Bottle

- T/L 차이: 화면 · 디스크립션 같음. LNB 메뉴만 다름
- 호출하는 화면: 없음 (4 [Refresh]만)
- 호출되는 곳: Inventory Tab 구성 ([TI-IVT-01-T] 등)
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Waste Bin/Bottle 화면**
- 정의
  - <span style="color:red">CURECA</span> 장비의 <span style="color:red">Waste Bin/Bottle</span> 상태를 확인하는 화면
  - <span style="color:red">Module</span>별 <span style="color:red">Waste Bin/Bottle</span> 적재 상태(Fill Level) 및 상태 값(<span style="color:red">Waste Bin/Bottle Status</span>) 확인 가능
- 노출 조건
  - <span style="color:red">Enabled인 Module</span> 대상으로만 노출
  - <span style="color:red">Module (Index)</span> + <span style="color:red">Waste Bin/Bottle</span> Unit 기준 Row 생성
  - <span style="color:red">각 Module에 설치된 제조사의 Waste Bin/Bottle Unit만 노출</span>
- User Type : Service, Admin, User
- 정책 참고 : POL-INV-001, POL-INV-005, POL-EQP-009

**1  Status Filter(Chip 영역)**
- 기능
  - Status : Full, Almost Full, Available
  - 상태값 옆 숫자는 좌측 영역의 Status별 건수 노출
- Default : <span style="color:red">모든 Chip이 선택되지 않은 상태</span>, 전체 데이터 항목 노출
- 동작
  - Chip 선택 시 : Status 값에 해당하는 데이터만 필터링하여 노출
  - 선택 상태의 Chip 재선택 : 선택 해제, 필터링 해제되어 전체 데이터 노출
  - 다중 선택 : Chip은 여러 개 동시에 선택 가능하며 선택된 상태값에 해당되는 모든 데이터가 필터링되어 노출
  - 적용 범위 : 좌측 / 우측 영역 모두 선택된 Status 값에 해당하는 항목만 필터링하여 노출
- 공통 UX 참고 : COMM-5-f

**2  카드 리스트(좌측 영역)**
- 정의
  - <span style="color:red">Module</span> 유형을 기준으로 그룹화하여 카드 형태로 노출
  - 단, <span style="color:red">Waste Bin/Bottle이 없는 Module</span>은 제외
- Default : 첫 번째 카드가 선택된 상태로 노출
- 동작
  - 카드 전체 단위로 클릭 가능
  - 클릭 시 우측 영역(3)에 해당 카드의 상세 정보 노출
- 정렬 (항목 또는 카드 전체 해당)
  - 설계서에 정의된 순서에 따라 정렬 : Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR
- 공통 UX 참고 : COMM-5-e
- 정책 참고 : POL-INV-005

**2-1  카드 제목**
- 표기 방식 : <span style="color:red">Waste Bin/Bottle이 있는 Module</span> 유형을 기준으로 노출

**2-2  Status**
- 정의
  - 각 <span style="color:red">Waste Bin/Bottle</span>의 최대 수량 대비 현재 폐기 수량을 기준하여 상태를 정의된 아이콘 형식으로 노출
  - <span style="color:red">상태 정의 : Available 적재율 70% 미만, Almost Full 70% 이상, Full 100% (만재 센서 감지)</span>
- 표기 방식
  - 동일 <span style="color:red">Module</span> 유형을 기준으로 우측 <span style="color:red">Module</span>별 <span style="color:red">Waste Bin/Bottle</span> 상태 값이 다를 경우 왼쪽 상태 값은 우선순위(Full > Almost Full > Available)로 노출
  - 예시 : Sample Pre-treatment (2) → 설계서의 우측 상세에는 Full 1개, Almost Full 1개 노출되어 있지만, 좌측 카드에는 Full 값으로 노출
- 공통 UX 참고 : COMM-4-a(3/4)
- 정책 참고 : POL-INV-005

**3  카드 리스트(우측 영역)**
- 정의
  - 좌측에서 선택된 <span style="color:red">Module</span> 유형별 카드 정보를 각 <span style="color:red">Module</span> Index 단위로 노출
  - <span style="color:red">Module (Index)</span> + <span style="color:red">Waste Bin/Bottle</span> 기준으로 Row 생성
- 정렬
  - 상위 항목 : <span style="color:red">Module (Index)</span> 기준 오름차순
  - 하위 항목 : 설계서에 정의된 순서에 따라 정렬
- 노출 조건 (항목 또는 카드 전체 해당)
  - <span style="color:red">Waste Bin/Bottle이 있는 Module</span> 기준 노출
- 공통 UX 참고 : COMM-5-e
- 정책 참고 : POL-INV-005

**3-1  <span style="color:red">Module</span> 개별 카드**
- 정의 : 좌측에서 선택한 카드 항목에 해당되는 '<span style="color:red">Module</span> 이름' 기준 구성
- 타이틀 : 시스템에서 관리하고 있는 <span style="color:red">Module (Index)</span>

**3-2  Unit**
- 해당 <span style="color:red">Module</span>에 포함되어 있는 <span style="color:red">Waste Bin/Bottle</span>을 기준으로 'Unit' 기준으로 노출
- <span style="color:red">Module마다 가진 Unit 이름 그대로 노출 (예: Waste Bin (Upper), Liquid Waste Bottle (Lower))</span>
- 정책 참고 : POL-INV-005

**3-3  Fill Level(%)**
- 정의
  - <span style="color:red">Waste Bin/Bottle</span> 용량 대비 사용량 기준으로 계산한 현황 정보
  - 각 <span style="color:red">Waste Bin/Bottle</span>별 최대 수용 개수(Max Capacity)와 누적 사용 개수(Used Count)를 기반으로 산출
- 산출 방식
  - (현재까지 누적 사용 개수 / 최대 수용 개수) * 100(%)
  - 백분율(%) 형태로 환산하여 노출
  - 단, 만재 센서 미감지 상태에서 산출된 계산값이 100% 이상이 되더라도 최대 노출 퍼센트는 99%로 제한
- 동작
  - 누적 사용 개수 기반으로 Fill Level(%)을 계산하여 실시간 노출 (최대 99%까지 노출)
  - 예외 케이스 : 최대 개수 도달/초과 후 만재 센서 미작동 시 → 노출 퍼센트 99% 고정, Status 상태 Almost Full
  - 예외 케이스 : 최대 개수 도달 전 만재 센서 작동 시 → 노출 퍼센트 100% 상태로 즉시 변경, Status 상태 Full
  - 예외 케이스 : 만재 센서가 없는 <span style="color:red">Waste Bin/Bottle</span>인 경우 → 센서 감지 로직을 제외, 계산식에 의해 100% 도달 시 100% / Full 상태로 처리
  - Material Setup > Empty Waste Bin에서 [Confirm Empty] 버튼을 통해 비움 처리를 수행한 시점 기준으로 초기화
  - 이후 발생하는 폐기물은 0부터 재카운팅
- 정책 참고 : POL-INV-005, POL-LOD-005

**3-4  <span style="color:red">Module</span> 하위 <span style="color:red">Waste Bin/Bottle</span> 별 Status**
- 정의 : 각 <span style="color:red">Waste Bin/Bottle</span>별 실제 카운팅 또는 센서를 기반으로 상태 노출
- 표기 방식
  - Available 상태와 Almost Full 상태는 실제 카운팅을 기반으로 상태 노출
  - Full은 센서가 동작하는 시점에 상태 노출
- 공통 UX 참고 : COMM-4-a(3/4)
- 정책 참고 : POL-INV-005

**3-5  Last Emptied Date/Time**
- 정의 : Material Setup > Empty Waste Bin에서 [Confirm Empty] 버튼을 통해 비움 처리를 마지막으로 수행한 시점
- 정책 참고 : POL-LOD-005

**4  [Refresh] 버튼**
- 동작
  - 클릭 시 목록의 데이터가 최신 상태로 갱신되어 노출
  - <span style="color:red">데이터를 불러오지 못할 경우 Alert 노출 : Alert_020</span>
- 정책 참고 : POL-INV-001

## 케이스

없음 (`Inventory_asis` 페이지에 TI-IVT-05-T 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 4 | Alert | Alert_020 | 데이터를 불러오지 못했을 때 | OK 선택 시 → 해당 Alert 닫힘 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | Tab | Summary / Overview / Consumables / Reagents / Waste Bin/Bottle (선택) / Usage History | POL-INV-001 정의 |
| 1 | Chip | Full 3 / Almost Full 4 / Available 3 | 기존 원본, `status-values.csv` 폐기함/폐액통 상태 |
| 2 | 카드 6장 | Sample Pre-treatment: Sample Pre-treatment (1) · (2) · (3) / High-throughput Extraction: High-throughput Extraction (1) · (2) / Flexible Extraction: Flexible Extraction (1) / PCR Setup: PCR Setup (1) · (2) / Plate Sealing: Plate Sealing (1) · (2) / Universal PCR: Universal PCR (1) | 기존 원본, `glossary.md` 이름 (번호), `modules.csv` |
| 2-2 | 카드 Status | 기존 원본 그대로 | `status-values.csv` |
| 3 | Sample Pre-treatment 상세 3장 | 기존 원본 그대로 (Waste Bin (Upper) · Liquid Waste Bottle (Upper) · Waste Bin (Lower) · Liquid Waste Bottle (Lower), Fill Level · Last Emptied Date/Time 값 그대로) | `Inventory_asis` TI-IVT-05-T 오른쪽 상세, `module-units.csv` (단디메카 구성) |
| 3-4 | Status | 100% Full, 99% · 71% · 78% Almost Full, 69% Available | `status-values.csv` 폐기함/폐액통 상태, POL-INV-005 |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Inventory | 화면 제목 | |
| Summary · Overview · Consumables · Reagents · Waste Bin/Bottle · Usage History | 화면 Tab | |
| Status | 화면 1 · 2-2 · 3-4 | |
| Full · Almost Full · Available | 화면 1 · 2-2 · 3-4 | |
| Refresh | 화면 4 | |
| Sample Pre-treatment · High-throughput Extraction · Flexible Extraction · PCR Setup · Plate Sealing · Universal PCR | 화면 2-1 · 3-1 (Module 이름) | |
| Unit · Fill Level(%) · Last Emptied Date/Time | 화면 3 열 제목 | |
| Waste Bin (Upper) · Liquid Waste Bottle (Upper) · Waste Bin (Lower) · Liquid Waste Bottle (Lower) | 화면 3-2 (Unit 이름) | |
| {n}% | 화면 3-3 (n = 적재율) | |
