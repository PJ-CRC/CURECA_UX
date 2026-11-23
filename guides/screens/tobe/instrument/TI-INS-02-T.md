---
cid: TI-INS-02-T
pair_cid: LI-INS-02-T
tl_relation: 기능 추가
title: All Tab
path: Instrument > All Tab
type: Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-EQP-001, POL-EQP-005, POL-EQP-009, POL-EVT-001]
basis:         # 화면 기준: 시각 · history 커밋 (reference-rules/work-log.md "작업 기준")
basis_versions: # 문서마다 basis 시각 전에 마지막으로 바뀐 때 (rules · policy · glossary · screens · ux_guide 모두 @날짜)
source: tobe
figma:
---
# TI-INS-02-T All Tab

- T/L 차이: L-IOS(LI-INS-02-T)에는 Door 영역에 [Unlock] · [Lock] 버튼이 더 있음. [Management]가 여는 Popup이 다름(T-IOS는 Service가 Enabled 변경, L-IOS는 조회만)
- 호출하는 화면: [TI-INS-02-01-P] Management Popup (2-2 [Management] → 팝업), [TI-EVT-P] Event History Popup (1-3 Event 아이콘 · 7-1 [More] → 팝업)
- 호출되는 곳: [TI-INS-01-T] Overview Tab 1 Tab (All)

## 디스크립션

**0  <span style="color:red">All Tab 화면</span>**
- <span style="color:red">정의 : 전체 장비 정보를 목록(List) 형태로 제공</span>
- <span style="color:red">User Type : Service, Admin, User</span>

**1  Module 목록(좌측 영역)**
- 정의 : 한 페이지에 최대 10개 노출(1920*1080 기준)
- 정렬
  - Default : Module name 기준 오름차순
- 동작
  - 최초 진입 시 첫 번째 Module이 선택된 상태로 노출
- 표출 항목
  - Connected : Module의 연결 상태 노출
    - 상태값 : Connected / <span style="color:red">Disconnected</span>
  - Status : Module의 작동 상태 노출
    - 상세 정의는 Common UX 기준 따름
  - ~~Enable~~ → Enabled : 장비의 사용 여부 값 표기
    - Enabled = 'Y' / Disabled = 'N'
  - Run-time : 장비가 가동된 시간 기준으로 표기
    - 가동 시간 = 상태가 Running 중인 시간의 총합
    - 11 시간 55분일 경우 11h으로 표기 (m단위 버림)
- Run-time 집계 정의
  - 집계 대상 : Module 전체, Device는 Sample Processing, Sample Aliquoting, M9600, STARlet, Sealer, CFX96
  - 집계 기준 : Module 또는 Device 상태가 Running인 시간의 누적 값
  - 데이터 저장 및 처리 : 제어단에서 누적 가동 시간을 집계하여 각 시스템(제어, L-IOS, T-IOS)의 데이터베이스(또는 파일)에 영구 저장 (Running 상태에서 다른 상태로 전환되는 시점에 저장)
  - 가동 시간 데이터가 데이터베이스(혹은 파일)에 저장되는 시점에 해당 데이터를 L-IOS로 전송하여 사용자에게 정보 제공 및 유지보수 기반 정보로 활용
  - 가동 시간에 기반하여 다수 개의 Module 또는 CFX96 6대에 대한 작업 배정 시 균등하게 배정하여 특정 Module 또는 기능 장치로의 작업 쏠림 방지
- 공통 UX 참고 : COMM-5-g, COMM-4-a(3/4)
- 정책 참고 : POL-EQP-001, POL-EQP-005

**1-1  검색 필터(Dropdown)**
- 기능 : Module Name 검색
- 동작 : 텍스트 입력(Search) 방식으로 검색 가능
- Default : All Modules
- 드롭다운 리스트 항목
  - 데이터 : 전체 Module List 기준
  - 정렬 기준 : 오름차순
- 공통 UX 참고 : COMM-5-h(1/2)

**1-2  Module 개수 표기**
- 정의
  - Module List 타이틀 옆에 (n) 값 노출
  - 현재 목록에 해당하는 Module 수 노출 (해당 페이지가 아닌 목록의 총 개수)

**1-3  Event 아이콘**
- 정의 : Module 단위 Event 현황 확인 및 접근
- 동작
  - 아이콘 클릭 시 해당 Module Name으로 필터링된 Event History 팝업 노출 : TI-EVT-P
  - Error와 Warning 정보는 따로 클릭되지 않고 동일 영역에서 접근 가능
  - 필터링 조건 : 클릭한 Module Name과 일치하는 Event만 노출 (최신순)
- 표기
  - 박스 내 숫자 : Level별로 Status가 Open인 Event 수 (Event가 0건이어도 클릭 가능)
  - 빨간 박스 : Error 수 / 노란 박스 : Warning 수
- 정책 참고 : POL-EVT-001

**1-4  Door 상태값 표기**
- 표기
  - 열림 : Open / 닫힘 : Closed
- Module에 문이 2개일 경우(= Sample Pre-treatment)
  - 한 개라도 열려 있을 경우 = Open
  - 두 개 모두 닫혀 있을 경우 = Closed
- 정책 참고 : POL-EQP-001

**2  Module Details(우측 영역)**
- 정의 : Module 내 Unit 단위 장비의 상세 정보를 확인하는 영역

**2-2  [~~Enable setting~~ → Management] 버튼**
- 동작
  - 클릭 시 조건 없이 팝업 노출 : TI-INS-02-01-P
  - 아래 조건 모두 제거 요청 및 관련 조건은 팝업 안에서 처리할 예정
  - ~~장비 상태가 'Running'일 경우~~
    - ~~Alert_013 팝업 노출~~
  - ~~관리되는 Module이 1대일 경우~~
    - ~~Alert_014 팝업 노출~~
  - ~~장비 상태가 'Ready 또는 not initialized일 경우~~
    - ~~TI-INS-02-01-P 팝업 노출~~
- 정책 참고 : POL-EQP-009

**3  Door**
- 정의 : Module의 Door Status와 Lock Status 확인 영역
- 표출 항목
  - Door : Door Unit 이름
  - Status : 장비 모듈 도어 열림 상태 (Open, Closed)
  - Lock Status : 장비 모듈 도어 잠금 상태 (Locked, Unlocked)
- 정책 참고 : POL-EQP-001

**4  Device**
- 정의 : Module에 속한 검사 장비 상태 확인
- 표출 항목
  - Unit : Device 장비명 노출
  - Connected : Device 연결 상태 노출
  - Status : Device 작동 상태 노출 (Ready, Running, Error)
  - ~~Enable~~ → Enabled
    - 현재 적용 대상 : 'TI-INS-02-01-P' 화면 참고
    - 해당 없을 경우 '-' 표기
    - 상태값 : 사용(Enabled) = Y, 사용 안 함(Disabled) = N으로 표기
    - <span style="color:red">T-IOS</span>에서 사용 여부 설정 가능
- 공통 UX 참고 : COMM-4-a(3/4)

**5  Storage**
- 정의 : 검체/소모품/시약을 저장하는 Unit의 정보를 확인하는 영역
- 표출 항목
  - Unit : Storage 장비명 노출
  - Docking Status : 트롤리 단위 입고 Unit일 경우 상태 노출
    - 검체/소모품/시약 투입 구역 Trolley 또는 서랍의 열림/닫힘 상태 노출
  - Storage Type : 상온 저장소 여부 및 냉장 저장소 여부 노출
  - Current Temp : Storage Type이 Refrigerator인 경우 해당 냉장 장치의 현재 온도 노출
- 공통 UX 참고 : COMM-4-a(3/4)

**6  Waste**
- 정의 : 소모품/시약 사용 후 폐기되는 Waste Unit 현황 확인
- 표출 항목
  - Unit : Waste Bin/Bottle 장비명 노출
  - Docking Status : Waste Bin 문의 열림/닫힘 상태 노출
    - Docking Status가 없는 것은 '-'로 표기
  - <span style="color:red">Waste Bin/Bottle Status</span> : Waste Bin 폐기물 양 상태값 노출
- 공통 UX 참고 : COMM-4-a(3/4)

**7  Event History**
- 정의 : 선택된 장비의 Event 내역을 확인하는 영역
- 표출 항목
  - 발생 시간 기준 최신순으로 Status가 Open인 Event 최대 4건 노출
- Date/Time 표기
  - 오늘일 경우 : hh:dd:ss(시:분:초)
  - 오늘 이전 일인 경우 : mm-dd(월-일)
- 정책 참고 : POL-EVT-001

**7-1  Event History [More] 버튼**
- 동작
  - 클릭 시 Event History 팝업 노출 : TI-EVT-P
  - 필터링 조건 : 클릭한 Module Name과 일치하는 Event만 노출 (최신순)

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| Tab | Tab | Overview, All (선택), Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR | `glossary/modules.csv` · 기존 화면 (기존 작업방 3249:111981) |
| 1-2 | Module 개수 | Module List (34) | 기존 화면 |
| 1 | Module 목록 10행 (Module · Status · Door · Enabled · Run-time(h)) | Universal PCR (2) · Running · Closed · Y · 2,621 / Sample Storage (2) · Running · Closed · Y · 2,621 / Consumable Storage (1) · - · - · N · 2,621 / Consumable Storage (2) · Running · Closed · Y · 2,621 / Sample Pre-treatment (1) · Running · Closed · Y · 2,621 / Sample Pre-treatment (2) · Running · Closed · Y · 2,621 / High-throughput Extraction (1) · Running · Closed · Y · 2,621 / High-throughput Extraction (2) · Running · Closed · Y · 2,621 / Flexible Extraction (1) · Running · Closed · Y · 2,621 / Flexible Extraction (2) · Running · Closed · Y · 2,621 | 기존 화면 (최대 10행), 이름 (번호)는 반영 대기 R05 |
| 1 | Connected · Event | 기존 화면 그대로 (Consumable Storage (1)은 Disconnected · Event '-') | 기존 화면, `glossary/status-values.csv` |
| 2 | Module Details 제목 | Universal PCR (2) | 기존 화면 |
| 3 | Door | Door · Closed · Locked | `glossary/module-units.csv` (Universal PCR) · `status-values.csv` |
| 4 | Device | CFX96 (1) ~ (6) · Running · Y (CFX96 (3)은 - · - · N) | 기존 화면, `glossary/module-units.csv` |
| 5 | Storage | No item | 기존 화면 (Universal PCR에 Storage Unit 없음, `module-units.csv`) |
| 6 | Waste Bin/Bottle | Waste Bin · - · Available | `glossary/module-units.csv` (Universal PCR의 Waste Bin) · `status-values.csv` |
| 7 | Event History | 기존 화면 그대로 (최대 4건) | 기존 화면 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| Tab | Overview | 화면 | | - | |
| Tab | All | 화면 | | - | |
| Tab | High-throughput Extraction 외 Module Type 8개 | 화면 | | - | |
| 1-2 | Module List | 화면 | | - | |
| 1-1 | All Modules | 화면 · 디스크립션 | | - | |
| 1 | Module | 화면 | | - | |
| 1 | Connected | 화면 | | - | |
| 1 | Disconnected | 디스크립션 | | - | |
| 1 | Status | 화면 | | - | |
| 1 | Door | 화면 | | - | |
| 1 | Enabled | 화면 | | - | |
| 1 | Run-time(h) | 화면 | | - | |
| 1 | Event | 화면 | | - | |
| 1 | Running | 화면 | | - | |
| 1-4 | Open | 디스크립션 | | - | |
| 1-4 | Closed | 화면 | | - | |
| 2-2 | Management | 화면 | | - | |
| 3 | Lock Status | 화면 | | - | |
| 3 | Locked | 화면 | | - | |
| 3 | Unlocked | 디스크립션 | | - | |
| 4 | Device | 화면 | | - | |
| 4 | Unit | 화면 | | - | |
| 5 | Storage | 화면 | | - | |
| 5 | Docking Status | 화면 | | - | |
| 5 | Storage Type | 화면 | | - | |
| 5 | Current Temp | 화면 | | - | |
| 5 | No item | 화면 | | - | |
| 6 | Waste Bin/Bottle | 화면 | | - | |
| 6 | Waste Bin/Bottle Status | 화면 | | - | |
| 6 | Waste Bin | 화면 | | - | |
| 6 | Available | 화면 | | - | |
| 7 | Event History | 화면 | | - | |
| 7-1 | More | 화면 | | - | |

## Alert · Confirm · Toast

없음 (2-2의 Alert_013 · Alert_014는 기존 작업방에서 취소선으로 제거됨)

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |

## 케이스

없음 (기존 원본에 케이스 프레임 없음)

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 기준 자료 변경 | Connected 항목 상태값 "Connected / Unconnected" | Connected / Disconnected | `glossary/status-values.csv` 연결 상태 | 작업 중 (20261123-최고관리자-instruments) |
| R02 | 기준 자료 변경 | 2-1 Error Rate가 남아 있음. 버전 메모 v2.1.01은 "Error Rate 제거(2-1)" | 취소선으로 이미 제거됨. 표시 위치는 고객 논의 중(CA-0001) | POL-EQP-010 | 제외 (2026-11-04, 취소선) |
| R03 | 기준 자료 변경 | Module Details (Sample Pre-treatment): STAT Storage (Upper), STAT Storage (Lower) | STAT Storage | `glossary/module-units.csv`, `archive/glossary/review-v0.md` | 작업 중 (20261123-최고관리자-instruments) |
| R04 | 점검 발견 | Module Details (Sample Pre-treatment): Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower) | Waste Bin (Upper), Waste Bin (Lower) | 같음 | 제외 (2026-11-19, 씨젠 상태 정보 261119에서 Tip · Film Waste Bin이 로체시스템즈 장비의 Unit으로 생김. 폐기함은 설치된 제조사의 Unit으로 표기함, DS-0005) |
| R05 | 점검 발견 | Liquid Waste Bottle(Upper), Sample Storage(2) 등 이름과 번호 붙여 씀 | Liquid Waste Bottle (Upper), Sample Storage (2) | 이름 (번호) 띄어쓰기 | 작업 중 (20261123-최고관리자-instruments) |
| R06 | 기준 자료 변경 | Waste Status | Waste Bin/Bottle Status | `glossary/terms.csv` | 작업 중 (20261123-최고관리자-instruments) |
| R07 | 점검 발견 | 4-1 [Run-time Info], 4-2 [Enable setting] 설명이 남아 있음 | 취소선으로 이미 제거됨 | Figma 취소선 | 제외 (2026-11-04, 취소선) |
| R08 | 기준 자료 변경 | 2-2 "[Enable setting → Management] 버튼 ... 아래 조건 모두 제거 요청" 메모 | 옛 조건은 취소선으로 제거됨. [Management]를 누르면 조건 없이 Popup을 엶 | Figma 취소선, POL-EQP-009 | 제외 (2026-11-04, 취소선) |
| R09 | 기준 자료 변경 | T-IO S, Account type | T-IOS, User Type | 오타, `glossary/terms.csv` | 작업 중 (20261123-최고관리자-instruments) |
| R10 | 점검 발견 | LNB에 Instrument가 두 번 | 확인 필요 (디자인 화면 기준) | 화면 글자 | 대기 (확인 필요) |
| R11 | 점검 발견 | 화면 Tab 이름 "Ht Extraction" | Tab 이름 High-throughput Extraction | `glossary/modules.csv`, 2026-11-23 다시 옮김 | 작업 중 (20261123-최고관리자-instruments) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.18 | 2026-11-23 | 작업방에 새로 그림 (기존 작업방 [3249:111981](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-111981) · Ver 2.1.18). 반영 대기 R01 · R03 · R05 · R06 · R09 · R11 반영 (작업 중). 제거된 요소 2-1 · 4-1 · 4-2 지움. 0 화면 정의 더함 | Claude (20261123-최고관리자-instruments) | R01 · R03 · R05 · R06 · R09 · R11 |
