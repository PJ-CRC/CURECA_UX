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
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-318226
---
# TI-INS-02-01-P Management Popup

> 기존 화면(작업방 `Instrument_asis` 페이지, Ver 2.1.18)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS는 사용 여부를 바꾸는 설정 팝업(Enable / Disable 라디오, 1-3, 3 [Save] · [Cancle]), L-IOS(LI-INS-02-01-P)는 보기 전용(Enabled Y/N, [OK]). 0 정의 문장도 다름
- 호출하는 화면: Alert_013 · Alert_014 · Alert_015 (3 [Save] 유효성 · 장비 상태), Toast `Changes saved.` (3)
- 호출되는 곳: [TI-INS-02-T] All Tab 2-2 [Management]
- 관련 정책: POL-EQP-005, POL-EQP-009, POL-EQP-010 / 고객 논의 CA-0001
- 참조 프레임: 같은 페이지의 [「모듈별 예시 노출 예시」 프레임](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-319005) (프레임 이름 `TI-INS-02-01-P`, 1132px, 아래 「케이스」에 글자를 옮김)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- Management | Sample Pre-treatment (드롭박스)
- Module - Device | Serial No. | Run-time(h) | Enable
- Sample Pre-treatment (1) | A123B123C1234f123 | 9,193 | Enable · Disable
  - Sample Aliquoting (Upper) | A123B123C1234f123 | 9,193 | Enable · Disable
  - Sample Aliquoting (Lower) | A123B123C1234f123 | 9,193 | Enable · Disable
- Sample Pre-treatment (2) | A123B123C1234f123 | 9,193 | Enable · Disable
  - Sample Aliquoting (Upper) | A123B123C1234f123 | 9,193 | Enable · Disable
  - Sample Processing (Lower) | A123B123C1234f123 | 9,193 | Enable · Disable
- Sample Pre-treatment (3) | A123B123C1234f123 | 9,193 | Enable · Disable
  - Sample Aliquoting (Upper) | A123B123C1234f123 | 9,193 | Enable · Disable
  - Sample Processing (Lower) | A123B123C1234f123 | 9,193 | Enable · Disable
- Cancle | Save

### 사용 컴포넌트

Radio Button (18), Description Number (5), Table (4), Arrow/Chevron_Up (3), Square (2), Dropdown 48 (1)

### 디스크립션 (원문)

#### 0. 팝업 정의

- Module 및 Device 장치의 사용 여부를 설정하는 팝업이다.
- 진입방법
- Instrument 메뉴의 Datail 페이지 내 ‘Management’ 클릭 시, 접근할 수 있다.

#### 1. 목록

- 최초 진입 시, 모든 아코디언 열린 상태로 진입
- Serial No: Module 또는 Device의 제조번호가 노출됨. 다만, 제공하지 않을 경우 ‘-’으로 표기됨. 해당 값을 실제 설치된 Module 및 Device를 구분하기 위한 값으로 사용되될 예정
- Run-time: 아래 내역 참고
- [Run-time 집계 정의]
- 1)집계 대상
- Module: 전체
- Device: Sample Processing, Sample Aliquoting, M9600, STARlet, Sealer, CFX96
- 2) 집계 기준
- Module 또는 Device 상태가 Running인 시간의 누적 값
- 3) 데이터 저장 및 처리
- 제어단에서 누적 가동 시간을 집계하여 각 시스템(제어, L-IOS, T-IOS)의 데이터베이스(또는 파일)에 영구 저장 (Running 상태에서 다른 상태로 전환되는 시점에 저장)
- 가동 시간 데이터가 데이터베이스(혹은 파일)에 저장되는 시점에 해당 데이터를 L-IOS로 전송하여 사용자에게 정보 제공 및 유지보수 기반 정보로 활용
- 가동 시간에 기반하여 다수 개의 모듈 또는 CFX96 6대 대한 작업 배정 시, 균등하게 배정하여 특정 모듈 또는 기능 장치로의 작업 쏠림 방지

#### 1-1. Module Type 드랍박스

- Default: 진입 전, Detail Page에서 선택된 Module의 Type이 선택되어서 진입됨
- 데이터: Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR
- 정렬 기준: 위에 기입된 순서대로 정렬
- Module Type 선택하면 그에 맞는 내용이 자동으로 변경됨

#### 1-2. 아코디언

- Module 내 Device가 있을 경우, 아코디언 기능을 제공
- 각 개별 작동으로, N개를 동시에 열 수 있는 구조
- Module 내 Device가 없을 경우, 아코디언 기능은 제공하지 않음

#### 1-3. Radio 버튼 작동 방식

- Module을 Disable할 경우, 아래 관련된 Device unit도 자동으로 Disable이 선택되며 Enable는 선택할 수 없게 비활성화됨
- Module을 Disable에서 Enable 선택 시, Device Unit도 자동으로 ‘Enable’상태로 변경됨

#### 2. Error Rate

- Account Type에 따라 항목 노출
- Account Type의 Sevice일 경우만 노출
- 자세한 내역은 아래 case 참고
- 1) 집계 대상
- Module : 전체
- Device: Sample Processing, Sample Aliquoting, M9600, STARlet, Sealer, CFX96
- 2) 집계 기준
- (가동 실패 횟수 / 총 가동 횟수) x 100
- 총 가동 횟수 집계 기준
  - => Prep 검체/소모품 저장 모듈: 모듈에 Trolley가 입고되어 가동이 시작된 시점
  - => Prep 검체 전처리 모듈: 모듈에 Sample이 장착된 Rack이 로딩되어 가동이 시작된 시점
  - => Dx 전체 모듈/기능 장치: 모듈 또는 기능 장치에 Plate가 입고되어 가동이 시작된 시점
- 가동 실패 횟수 집계 기준: 가동이 시작 된 후(총 가동 횟수 집계 시점 이후), 오류에 의해 가동이 중단된 시점 (단, 소모품 부족이나 Waste Bin Full에 의한 가동 중단은 집계 제외)
- 3) 데이터 저장 및 처리
- 제어단에서 누적 불량률을 집계하여 각 시스템(제어, L-IOS, T-IOS)의 데이터베이스(또는 파일)에 영구 저장 (가동 중단 발생 시점에 저장)
- 불량률 데이터가 데이터베이스(혹은 파일)에 저장되는 시점에 해당 데이터를 L-IOS로 전송하여 사용자(엔지니어)에게 정보 제공 및 유지보수 기반 정보로 활용
- 불량률에 기반하여 다수 개의 모듈 또는 CFX96 6대에 대한 작업 배정 시, 불량률이 높은 모듈 또는 기능 장치로의 배정 우선순위를 낮춤

#### 3. [Save] 버튼

- 유효성 체크
- 정책
- Module : 최소 1대 이상 Enabled 상태가 되어야 함.
- Module의 N대일 경우, 최소 1대는 Enabled되어야 함. 1대 일경우에는 Disable상태로 변경 불가
- 모두 Disable을 선택 후 [Save]버튼을 클릭했을 경우, Alert_014 팝업 노출
- Device Unit : Module이 Enabled일 경우 Device가 최소 1대 이상이 Enabled 상태가 되어야 함.
- 모두 Disable을 선택 후 [Save]버튼을 클릭 했을 경우, Alert_015 팝업 노출
- 장비 상태 체크
- 수정 가능한 상태: CURECA 구동 상태값이 ‘Ready 및 not initialized’일 경우에만 수정 가능
- 장비 상태가 ‘Running’일 경우, Alert_013 팝업 노출
- 유효성 체크가 정상적으로 확인되면 내역 저장되고 팝업 닫히며, 토스트 메시지 제공
- 메시지 내용 = “Changes saved.”
- 팝업 닫힌 후 팝업 진입 전 화면 상태에서 ‘새로고침’ 적용
- [Cancle] 버튼
- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| - (원본에 번호 없음) | 모듈에 Device Unit이 없는 Case | Module 안에 Device가 없음 (아코디언 없음) | 기획 프레임 안 `case` (y 1108) |
| - (원본에 번호 없음) | Account Type별 노출 Case | Case1. Account Type=User or Admin일 경우, Error Rate 미표기 / Case2. Account Type=Service일 경우, Error Rate 표기 | 기획 프레임 안 `case` (y 1671) |
| - (원본에 번호 없음) | 모듈별 예시 노출 예시 | Module Type마다 목록 예시 | 같은 페이지 별도 프레임 `TI-INS-02-01-P` ([3543:319005](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-319005)) |

- 모듈에 Device Unit이 없는 Case: Management | Sample Storage — Sample Storage (1) · (2) · (3) | A123B123C1234f123 | 9,193 | Enable · Disable | Cancle | Save
- Account Type별 노출 Case
  - Case1 (User or Admin): Management | Sample Pre-treatment 목록 (Error Rate 열 없음) — Sample Pre-treatment (1) · (2)와 그 Device
  - Case2 (Service): Management | Sample Storage — Module - Device | Serial No. | Run-time(h) | Error Rate | Enable — Sample Storage (1) · (2) | A123B123C1234f123 | 9,193 | 8% | Enable · Disable
- 모듈별 예시 노출 예시 (Module - Device | Serial No. | Run-time(h) | Enable, 모든 값 A123B123C1234f123 · 9,193)
  - Sample Storage (1) · (2)
  - Consumable Storage (1) · (2)
  - Sample Pre-treatment (1) ~ (3) — Device Sample Aliquoting (Upper) · Sample Aliquoting (Lower) 또는 Sample Processing (Lower)
  - High-throughput Extraction (1) · (2) — Device M9600 (Enable 칸 없음)
  - Flexible Extraction (1) — Device STARlet (Enable 칸 없음)
  - PCR Setup (1) · (2) — Device STARlet (Enable 칸 없음)
  - Plate Sealing (1) — Device Sealer (1) · Sealer (2)
  - Universal PCR (1) — Device CFX96 (1) · CFX96 (2) … (원본 프레임 참고)
