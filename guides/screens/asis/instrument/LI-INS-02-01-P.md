---
cid: LI-INS-02-01-P
pair_cid: TI-INS-02-01-P
tl_relation: 기능 추가
title: Management Popup
path: Instrument > All Tab > Management Popup
type: Popup
version: 2.1.18
date: 2026-11-19
author: 이상헌
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-368209
figma_region: 2.1 2차
---
# LI-INS-02-01-P Management Popup

> 기존 화면(기존 작업방 Instruments 페이지, 2.1 2차 영역, Ver 2.1.18)을 2026-11-02에 옮기고 2026-11-23에 다시 옮긴 것입니다(케이스 3, 작업 기록 `20261123-최고관리자-instruments`). 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: L-IOS는 조회만. T-IOS(TI-INS-02-01-P)는 Service가 Enabled를 바꿀 수 있음
- 관련 정책: POL-EQP-005, POL-EQP-009, POL-EQP-010 / 고객 논의 CA-0001

## 기존 화면

### 화면 글자

- Management
- Sample Pre-treatment (Module Type Dropdown)
- Module - Device | Serial No. | Run-time(h) | Enabled
- Sample Pre-treatment (1) | A123B123C1234f123 | 9,193 | Y
- Sample Aliquoting (Upper) | A123B123C1234f123 | 9,193 | Y
- Sample Aliquoting (Lower) | A123B123C1234f123 | 9,193 | Y
- Sample Pre-treatment (2) | A123B123C1234f123 | 9,193 | Y
- Sample Aliquoting (Upper) | A123B123C1234f123 | 9,193 | N
- Sample Processing (Lower) | A123B123C1234f123 | 9,193 | Y
- Sample Pre-treatment (3) | A123B123C1234f123 | 9,193 | N
- Sample Aliquoting (Upper) | A123B123C1234f123 | 9,193 | N
- Sample Processing (Lower) | A123B123C1234f123 | 9,193 | N
- OK

### 사용 컴포넌트

Description Number (5), Table (4), Arrow/Chevron_Up (3), Interface/Close (1), Dropdown 48 (1), Square (1)

### 디스크립션 (원문)

#### 0. 팝업 정의

- Module 및 Device의 Run-time, Error Rate, Enabled 정보를 확인할 수 있는 팝업이다.
- 진입방법
- Instrument 메뉴의 Datail 페이지 내 ‘Management’ 클릭 시, 접근할 수 있다.

#### 1. 목록

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

#### 3. [OK] 버튼

- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

### 케이스

- Case1. Account Type=User or Admin일 경우, Error Rate 미표기
- Case2. Account Type=Service일 경우, Error Rate 표기

## 반영 대기 목록

`screens/tobe/`로 옮김 (2026-11-23)

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | "Account Type의 Sevice일 경우만 노출" | User Type이 Service일 때만 | `glossary/terms.csv` | 대기 |
| R02 | 정책 반영 | 조회 전용임이 디스크립션에 분명하지 않음 | L-IOS는 모든 User Type이 조회만 (Enabled 변경 없음) | POL-EQP-009 | 대기 |
| R03 | 디스크립션 | Error Rate 표시 위치 | 고객 논의 중(CA-0001) | POL-EQP-010 | 대기 (고객 논의) |
| R04 | 디스크립션 | Datail | Detail | 오타 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | 팝업 재정의 | 서보경 | Figma 버전 메모 |
| | 2026-11-12 | 연동 변경: L-IOS Client Mode 이름 바꿈 (머리말 키 `client_mode`, 표기 L-IOS Client Mode · MS Mode, 경로 `policy/client-mode-matrix.csv`) | 서보경 | DS-0001 |
| | 2026-11-18 | 연동 변경: Module · Unit 이름 바꿈(Prep Consumable Storage → Consumable Storage, Sample Preparation Module → Sample Pre-treatment, Sample Pretreatment → Sample Processing, Sample Aliquot → Sample Aliquoting). 검사 단계 · Reagent 태그 · Prep 시스템의 Sample Preparation은 그대로 | 서보경 | `glossary/modules.csv`, `glossary/module-units.csv` (2026-11-18) |
| 2.1.18 | 2026-11-19 | 모듈 명칭 변경: Prep Consumable Storage → Consumable Storage, Sample Preparation → Sample Pre-treatment, Upper/Lower Sample Pretreatment → Sample Processing (Upper/Lower), Upper/Lower Sample Aliquot → Sample Aliquoting (Upper/Lower) | 이상헌 | Figma 버전 메모 |
