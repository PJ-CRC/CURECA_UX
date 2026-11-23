---
cid: LI-INS-02-T
pair_cid: TI-INS-02-T
tl_relation: 기능 추가
title: All Tab
path: Instrument > All Tab
type: Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: [POL-EQP-001, POL-EQP-004, POL-EQP-005, POL-EQP-008 · DS-0011, POL-EQP-009, POL-EVT-001]
basis:         # 화면 기준: 시각 · history 커밋 (reference-rules/work-log.md "작업 기준")
basis_versions: # 문서마다 basis 시각 전에 마지막으로 바뀐 때 (rules · policy · glossary · screens · ux_guide 모두 @날짜)
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=3219-23345
---
# LI-INS-02-T All Tab

- T/L 차이: T-IOS(TI-INS-02-T)에 없는 Door 영역의 [Unlock] · [Lock] 버튼(3-1)이 있음. [Management]는 조회 전용 Popup(LI-INS-02-01-P)을 엶
- 호출하는 화면: [LI-INS-02-01-P] Management Popup (2-2 [Management] → 팝업), [LI-EVT-P] Event History Popup (1-3 Event 아이콘 · 7-1 [More] → 팝업)
- 호출되는 곳: [LI-INS-01-T] Overview Tab 1 Tab (All)

## 디스크립션

**0  <span style="color:red">All Tab 화면</span>**
- <span style="color:red">정의 : 전체 장비 정보를 목록(List) 형태로 제공</span>
- <span style="color:red">User Type : Service, Admin, User</span>
- <span style="color:red">L-IOS Client Mode : Main Mode, Console Mode, MS Mode</span>

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
  - 아이콘 클릭 시 해당 Module Name으로 필터링된 Event History 팝업 노출 : LI-EVT-P
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
- Title : Module 이름 + 인덱스 표기

**2-2  [Management] 버튼**
- 동작 : 클릭 시 팝업 노출 : LI-INS-02-01-P
- 정책 참고 : POL-EQP-009

**3  Door**
- 정의 : Module의 Door Status와 Lock Status 확인 영역
- 표출 항목
  - Lock Status : Locked / Unlocked
- 표기
  - Locked → [Unlock] 버튼, Unlocked → [Lock] 버튼 표시
- 정책 참고 : POL-EQP-001

**3-1  [Unlock] / [Lock] 버튼**
- [Unlock] 동작
  - 클릭 시 팝업 노출 : Confirm_008
  - <span style="color:red">OK 선택 시 해당 Door 잠금 해제 요청</span>
  - <span style="color:red">장비 모듈 상태가 Running이면 Pausing을 거쳐 Paused가 된 뒤 잠금 해제</span>
  - <span style="color:red">Door 잠금이 해제되면 해당 Module의 장비 모듈 상태는 Paused로 변경</span>
- [Lock] 동작 (Lock Status = Unlocked일 때)
  - 클릭 시 즉시 잠금 → Lock Status Locked, 버튼은 [Unlock]으로 바뀜
  - [Lock] 버튼은 늘 활성(Enabled) 상태로 표시
  - Door가 Open이면 [Lock] 클릭 시 문 닫기 안내 팝업 노출 : Confirm_031
- 활성화 조건
  - <span style="color:red">L-IOS Client Mode가 MS Mode일 때 [Unlock] · [Lock] 비활성화</span>
- 케이스 참고 : LI-INS-02-T/Case > Case 1, LI-INS-01-P/Case > Case 7
- 정책 참고 : POL-EQP-004, POL-EQP-008

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
  - 클릭 시 Event History 팝업 노출 : LI-EVT-P
  - 필터링 조건 : 클릭한 Module Name과 일치하는 Event만 노출 (최신순)

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| Tab | Tab | Overview, All (선택), Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR | `glossary/modules.csv` · 기존 화면 (기존 작업방 10069:367730) |
| 1-2 | Module 개수 | Module List (34) | 기존 화면 |
| 1 | Module 목록 10행 (Module · Status · Door · Enabled · Run-time(h)) | Universal PCR (2) · Running · Closed · Y · 2,621 / Sample Storage (2) · Running · Closed · Y · 2,621 / Consumable Storage (1) · - · - · N · 2,621 / Consumable Storage (2) · Running · Closed · Y · 2,621 / Sample Pre-treatment (1) · Running · Closed · Y · 2,621 / Sample Pre-treatment (2) · Running · Closed · Y · 2,621 / High-throughput Extraction (1) · Running · Closed · Y · 2,621 / High-throughput Extraction (2) · Running · Closed · Y · 2,621 / Flexible Extraction (1) · Running · Closed · Y · 2,621 / Flexible Extraction (2) · Running · Closed · Y · 2,621 | 기존 화면 (최대 10행), 이름 (번호)는 반영 대기 R05 |
| 1 | Connected · Event | 기존 화면 그대로 (Consumable Storage (1)은 Disconnected · Event '-') | 기존 화면, `glossary/status-values.csv` |
| 2 | Module Details 제목 | Universal PCR (2) | 기존 화면 |
| 3 | Door | Door · Closed · Locked · [Unlock] | `glossary/module-units.csv` (Universal PCR) · `status-values.csv` |
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
| 3-1 | Unlock | 화면 · 케이스 | | - | |
| 3-1 | Lock | 디스크립션 | | - | |
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

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 3-1 | 컨펌 | Confirm_008 | [Unlock] 클릭 시 | Leave 선택 시 → 메인 화면으로 이동 / Close 선택 시 → 해당 얼럿 닫힘 (카탈로그 그대로. 카탈로그 확인할 점: 버튼은 OK / Cancel) |
| 3-1 | 컨펌 | Confirm_031 | Door가 Open인 상태에서 [Lock] 클릭 시 | OK 선택 시 → 해당 팝업 닫힘, Door는 Unlocked 유지 |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | L-IOS Client Mode에 따른 Door [Unlock] · [Lock] 버튼 상태 | Main Mode · Console Mode / MS Mode | 3-1 | 1 | 요청자 (2026-11-23 2단계 답 "케이스 모두 그림: L-IOS MS Mode Door Control X") |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 기준 자료 변경 | Connected 항목 상태값 "Connected / Unconnected" | Connected / Disconnected | `glossary/status-values.csv` 연결 상태 | 작업 중 (20261123-최고관리자-instruments) |
| R02 | 기준 자료 변경 | 2-1 Error Rate가 남아 있음. 버전 메모 v2.1.01은 "Error Rate 제거(2-1)" | 취소선으로 이미 제거됨. 표시 위치는 고객 논의 중(CA-0001) | POL-EQP-010 | 제외 (2026-11-04, 취소선) |
| R03 | 기준 자료 변경 | Module Details (Sample Pre-treatment): STAT Storage (Upper), STAT Storage (Lower) | STAT Storage | `glossary/module-units.csv`, `archive/glossary/review-v0.md` | 작업 중 (20261123-최고관리자-instruments) |
| R04 | 점검 발견 | Module Details (Sample Pre-treatment): Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower) | Waste Bin (Upper), Waste Bin (Lower) | 같음 | 제외 (2026-11-19, 씨젠 상태 정보 261119에서 Tip · Film Waste Bin이 로체시스템즈 장비의 Unit으로 생김. 폐기함은 설치된 제조사의 Unit으로 표기함, DS-0005) |
| R05 | 점검 발견 | Liquid Waste Bottle(Upper), Sample Storage(2) 등 이름과 번호 붙여 씀 | Liquid Waste Bottle (Upper), Sample Storage (2) | 이름 (번호) 띄어쓰기 | 작업 중 (20261123-최고관리자-instruments) |
| R06 | 기준 자료 변경 | Waste Status | Waste Bin/Bottle Status | `glossary/terms.csv` | 작업 중 (20261123-최고관리자-instruments) |
| R07 | 점검 발견 | 4-1 [Run-time Info] 설명이 남아 있음 | 취소선으로 이미 제거됨 | Figma 취소선 | 제외 (2026-11-04, 취소선) |
| R08 | 기준 자료 변경 | 3 "Unlock을 클릭 시,", 3-1 "클릭 시," 문장이 끊김 | [Unlock]을 누르면 Door Control 흐름(POL-EQP-008)으로 정리. Confirm_008 문구 확인 필요 | POL-EQP-008, `alert/alert-catalog.md` 3절 | 작업 중 (20261123-최고관리자-instruments) |
| R09 | 기준 자료 변경 | T-IO S, Account type | T-IOS, User Type | 오타, `glossary/terms.csv` | 작업 중 (20261123-최고관리자-instruments) |
| R10 | 점검 발견 | 화면 Tab 이름 "Ht Extraction" | Tab 이름 High-throughput Extraction | `glossary/modules.csv`, 2026-11-23 다시 옮김 | 작업 중 (20261123-최고관리자-instruments) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.18 | 2026-11-23 | 작업방에 새로 그림 (기존 작업방 [10069:367730](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-367730) · Ver 2.1.18). 반영 대기 R01 · R03 · R05 · R06 · R08 · R09 · R10 반영 (작업 중). 제거된 요소 2-1 · 4-1 지움. 0 화면 정의 더함. Case 1 (MS Mode) 더함 (요청자) | Claude (20261123-최고관리자-instruments) | R01 · R03 · R05 · R06 · R08 · R09 · R10, DS-0011 |
