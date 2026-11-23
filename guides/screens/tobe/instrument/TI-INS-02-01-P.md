---
cid: TI-INS-02-01-P
pair_cid: LI-INS-02-01-P
tl_relation: 기능 추가
title: Management Popup
path: Instrument > All Tab > Management Popup
type: Popup
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-EQP-005, POL-EQP-009, POL-EQP-010]
basis:         # 화면 기준: 시각 · history 커밋 (reference-rules/work-log.md "작업 기준")
basis_versions: # 문서마다 basis 시각 전에 마지막으로 바뀐 때 (rules · policy · glossary · screens · ux_guide 모두 @날짜)
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=3219-23338
---
# TI-INS-02-01-P Management Popup

- T/L 차이: T-IOS는 User Type이 Service일 때 Enabled를 바꾸고 [Save] · [Cancel]이 있음. L-IOS(LI-INS-02-01-P)는 모든 User Type이 조회만 하고 [OK]만 있음
- 호출하는 화면: 없음
- 호출되는 곳: [TI-INS-02-T] All Tab 2-2 [Management]

## 디스크립션

**0  Management Popup**
- 정의 : Module 및 Device 장치의 사용 여부를 설정하는 팝업
- 동작 : Instrument 메뉴의 <span style="color:red">Detail</span> 페이지 내 [Management] 클릭 시 진입
- User Type : Service, Admin, User

**1  목록**
- 동작 : 최초 진입 시 모든 아코디언이 열린 상태로 진입
- 표출 항목
  - Serial No. : Module 또는 Device의 제조번호 노출, 제공하지 않을 경우 '-' 표기
    - 실제 설치된 Module 및 Device를 구분하기 위한 값으로 사용 예정
  - Run-time(h) : 아래 Run-time 집계 정의
- Run-time 집계 정의
  - 집계 대상 : Module 전체, Device는 Sample Processing, Sample Aliquoting, M9600, STARlet, Sealer, CFX96
  - 집계 기준 : Module 또는 Device 상태가 Running인 시간의 누적 값
  - 데이터 저장 및 처리 : 제어단에서 누적 가동 시간을 집계하여 각 시스템(제어, L-IOS, T-IOS)의 데이터베이스(또는 파일)에 영구 저장 (Running 상태에서 다른 상태로 전환되는 시점에 저장)
  - 가동 시간 데이터가 데이터베이스(혹은 파일)에 저장되는 시점에 해당 데이터를 L-IOS로 전송하여 사용자에게 정보 제공 및 유지보수 기반 정보로 활용
  - 가동 시간에 기반하여 다수 개의 Module 또는 CFX96 6대에 대한 작업 배정 시 균등하게 배정하여 특정 Module 또는 기능 장치로의 작업 쏠림 방지
- 공통 UX 참고 : COMM-5-g
- 정책 참고 : POL-EQP-005

**1-1  Module Type(Dropdown)**
- Default : 진입 전 Detail Page에서 선택된 Module의 Type
- 드롭다운 리스트 항목
  - Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR
  - 정렬 : 위에 기입된 순서대로
- 동작 : Module Type 선택 시 그에 맞는 내용으로 자동 변경
- 공통 UX 참고 : COMM-5-h(1/2)

**1-2  아코디언**
- 노출 조건
  - Module 내 Device가 있을 경우 아코디언 기능 제공
  - Module 내 Device가 없을 경우 아코디언 기능 미제공
- 동작 : 각 개별 작동, N개를 동시에 열 수 있는 구조
- 공통 UX 참고 : COMM-5-a
- 케이스 참고 : TI-INS-02-01-P/Case > Case 3

**1-3  Radio 버튼 작동 방식**
- <span style="color:red">설정 대상</span>
  - <span style="color:red">한 Module 안에 같은 Device Unit이 2대 이상일 때만 Device Unit마다 설정 (예: CFX96, Sealer, Sample Processing)</span>
- <span style="color:red">활성화 조건</span>
  - <span style="color:red">User Type이 Service일 때만 선택 가능</span>
  - <span style="color:red">User Type이 Admin, User일 때 조회만 가능</span>
- 동작
  - Module을 Disable할 경우 아래 관련된 Device Unit도 자동으로 Disable이 선택되며 Enable은 선택할 수 없게 비활성화
  - Module을 Disable에서 Enable 선택 시 Device Unit도 자동으로 Enable 상태로 변경
- 공통 UX 참고 : COMM-5-q
- 정책 참고 : POL-EQP-009

**2  Error Rate**
- 노출 조건
  - <span style="color:red">User Type</span>에 따라 항목 노출
  - <span style="color:red">User Type이 Service일 때만</span> 노출
- 집계 대상
  - Module : 전체
  - Device : Sample Processing, Sample Aliquoting, M9600, STARlet, Sealer, CFX96
- 산출 방식
  - (가동 실패 횟수 / 총 가동 횟수) x 100
  - 총 가동 횟수 집계 기준
    - Prep 검체/소모품 저장 Module : Module에 Trolley가 입고되어 가동이 시작된 시점
    - Prep 검체 전처리 Module : Module에 Sample이 장착된 Rack이 로딩되어 가동이 시작된 시점
    - Dx 전체 Module/기능 장치 : Module 또는 기능 장치에 Plate가 입고되어 가동이 시작된 시점
  - 가동 실패 횟수 집계 기준 : 가동이 시작된 후(총 가동 횟수 집계 시점 이후) 오류에 의해 가동이 중단된 시점 (단, 소모품 부족이나 Waste Bin Full에 의한 가동 중단은 집계 제외)
- 데이터 저장 및 처리
  - 제어단에서 누적 불량률을 집계하여 각 시스템(제어, L-IOS, T-IOS)의 데이터베이스(또는 파일)에 영구 저장 (가동 중단 발생 시점에 저장)
  - 불량률 데이터가 데이터베이스(혹은 파일)에 저장되는 시점에 해당 데이터를 L-IOS로 전송하여 사용자(엔지니어)에게 정보 제공 및 유지보수 기반 정보로 활용
  - 불량률에 기반하여 다수 개의 Module 또는 CFX96 6대에 대한 작업 배정 시 불량률이 높은 Module 또는 기능 장치로의 배정 우선순위를 낮춤
- 케이스 참고 : TI-INS-02-01-P/Case > Case 1, TI-INS-02-01-P/Case > Case 2
- 정책 참고 : POL-EQP-010

**3  [Save] 버튼**
- 유효성 체크
  - Module : 최소 1대 이상 Enabled 상태가 되어야 함
  - Module이 N대일 경우 최소 1대는 Enabled, 1대일 경우 Disable 상태로 변경 불가
  - Module을 모두 Disable 선택 후 [Save] 클릭 시 팝업 노출 : Alert_014
  - Device Unit : Module이 Enabled일 경우 Device가 최소 1대 이상 Enabled 상태가 되어야 함
  - Device Unit을 모두 Disable 선택 후 [Save] 클릭 시 팝업 노출 : Alert_015
- 장비 상태 체크
  - <span style="color:red">~~수정 가능한 상태 : CURECA 구동 상태값이 'Ready 및 not initialized'일 경우에만 수정 가능~~</span>
  - <span style="color:red">수정 가능한 상태 : 장비 통합 상태가 Ready 또는 Not Initialized이고 장비 모듈 상태가 Ready 또는 Not Initialized일 때만 수정 가능</span>
  - <span style="color:red">장비 모듈 상태</span>가 Running일 경우 팝업 노출 : Alert_013
- 동작
  - 유효성 체크가 정상적으로 확인되면 내역 저장 후 팝업 닫힘
  - 저장 시 토스트 노출 : Toast_001
  - 팝업 닫힌 후 팝업 진입 전 화면 상태에서 새로고침 적용
- [<span style="color:red">Cancel</span>] 버튼
  - 클릭 시 해당 팝업 닫힘, 기존 진입 화면 유지
- 정책 참고 : POL-EQP-009

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1-1 | Module Type | Sample Pre-treatment | 기존 화면 (기존 작업방 3249:112456) |
| 1 | 표 머리 | Module - Device · Serial No. · Run-time(h) · Enabled | 기존 화면, 반영 대기 R08 |
| 1 | Module 행 3개 | Sample Pre-treatment (1) · (2) · (3) · A123B123C1234f123 · 9,193 | 기존 화면 |
| 1 | Device 행 (Module마다 4개) | Sample Processing (Upper) · Sample Processing (Lower) · Sample Aliquoting (Upper) · Sample Aliquoting (Lower) · A123B123C1234f123 · 9,193 | `glossary/module-units.csv`, 반영 대기 R09 |
| 1-3 | Radio | Enable · Disable (기존 화면의 선택 그대로) | 기존 화면 |
| 2 | Error Rate | 기존 화면 Case 2 값 그대로 (Sample Storage (1) · (2), 8%) | 기존 화면 |
| Case 3 | Module 행 3개 (Device Unit 없음) | Sample Storage (1) · (2) · (3) | 기존 화면 케이스, `glossary/module-units.csv` |
| 3 | 버튼 | Cancel · Save | 기존 화면 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 0 | Management | 화면 | | - | |
| 1-1 | Sample Pre-treatment | 화면 | | - | |
| 1 | Module - Device | 화면 | | - | |
| 1 | Serial No. | 화면 | | - | |
| 1 | Run-time(h) | 화면 | | - | |
| 1 | Enabled | 화면 | | - | |
| 1 | Sample Processing (Upper) · (Lower), Sample Aliquoting (Upper) · (Lower) | 화면 | | - | |
| 1-3 | Enable | 화면 | | - | |
| 1-3 | Disable | 화면 | | - | |
| 2 | Error Rate | 케이스 | | - | |
| 3 | Cancel | 화면 | | - | |
| 3 | Save | 화면 | | - | |

## Alert · Confirm · Toast

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 3 | 알럿 | Alert_014 | Module을 모두 Disable 선택 후 [Save] 클릭 시 | OK 선택 시 → 해당 팝업 닫힘, 기존 작업 화면 유지 |
| 3 | 알럿 | Alert_015 | Device Unit을 모두 Disable 선택 후 [Save] 클릭 시 | OK 선택 시 → 해당 팝업 닫힘, 기존 작업 화면 유지 |
| 3 | 알럿 | Alert_013 | 장비 모듈 상태가 Running일 때 [Save] 클릭 시 | OK 선택 시 → 해당 팝업 닫힘, 기존 작업 화면 유지 |
| 3 | 토스트 | Toast_001 | 저장 시 | - |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | User Type이 Admin · User일 때 Error Rate 미표기 | User Type = Admin, User | 2 | 3 | 기존 원본 |
| 2 | User Type이 Service일 때 Error Rate 표기 | User Type = Service | 2 | 3 | 기존 원본 |
| 3 | Module에 Device Unit이 없는 경우 | Module 내 Device Unit 없음 (예: Sample Storage) | 1-2 | 3 | 기존 원본 (원본 "모듈에 Device Unit이 없는 Case", 번호 없어 끝 번호 다음으로 붙임) |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 기준 자료 변경 | "Account Type의 Sevice일 경우만 노출" | User Type이 Service일 때만 | `glossary/terms.csv` | 작업 중 (20261123-최고관리자-instruments) |
| R02 | 점검 발견 | [Cancle], Datail | [Cancel], Detail | 오타 | 작업 중 (20261123-최고관리자-instruments) |
| R03 | 기준 자료 변경 | Enabled 변경 권한이 화면에 없음 | 변경은 User Type이 Service일 때만, Admin·User는 조회만 | POL-EQP-009, `policy/permission-matrix.csv` | 작업 중 (20261123-최고관리자-instruments) |
| R04 | 기준 자료 변경 | 변경 가능 조건 "CURECA 구동 상태값이 Ready 및 not initialized일 경우" | 장비 통합 상태가 Ready 또는 Not Initialized이고 장비 모듈 상태가 Ready 또는 Not Initialized일 때 | POL-EQP-009 | 작업 중 (20261123-최고관리자-instruments) |
| R05 | 기준 자료 변경 | Device Unit 설정 대상이 정해져 있지 않음 | 한 Module 안에 같은 Device Unit이 2대 이상일 때만 Device Unit별로 설정 (예: CFX96, Sealer, Sample Processing 2대) | POL-EQP-009 | 작업 중 (20261123-최고관리자-instruments) |
| R06 | 기준 자료 변경 | Module 상태가 Running이 아닌 이유(Error, Paused 등)로 바꿀 수 없을 때의 알럿이 없음. Alert_013은 "while the module is running" | 알럿 정의 필요 | POL-EQP-009, 헌법 8조 | 대기 (정의 필요) |
| R07 | 기준 자료 변경 | Error Rate 표시 위치 | 고객 논의 중(CA-0001) | POL-EQP-010 | 대기 (고객 논의) |
| R08 | 점검 발견 | 표 헤더 "Enable" | Enabled (L-IOS, All Tab과 같게) | LI-INS-02-01-P | 작업 중 (20261123-최고관리자-instruments) |
| R09 | 점검 발견 | 화면 예시 Device 행: Sample Pre-treatment (1) 아래 Sample Aliquoting (Upper) · (Lower), (2) · (3) 아래 Sample Aliquoting (Upper) · Sample Processing (Lower) (Module마다 구성이 다르고 Device 4개 중 2개만) | 화면 예시도 Sample Pre-treatment의 Device Unit 4개(Sample Processing (Upper) · (Lower), Sample Aliquoting (Upper) · (Lower))로 맞춤 | `glossary/module-units.csv`, 2026-11-23 다시 옮김 | 작업 중 (20261123-최고관리자-instruments) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.18 | 2026-11-23 | 작업방에 새로 그림 (기존 작업방 [3249:112456](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-112456) · Ver 2.1.18). 반영 대기 R01 ~ R05 · R08 · R09 반영 (작업 중). 토스트 문구를 코드(Toast_001)로 바꿈 | Claude (20261123-최고관리자-instruments) | R01 ~ R05 · R08 · R09 |
