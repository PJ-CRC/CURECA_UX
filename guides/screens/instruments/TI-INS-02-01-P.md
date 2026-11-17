---
cid: TI-INS-02-01-P
pair_cid: LI-INS-02-01-P
tl_relation: 기능 추가
title: Management Popup
path: Instruments > All > Management
type: Popup
version: 2.1.01
date: 2026.08.07
author: 서보경
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-EQP-005, POL-EQP-009, POL-EQP-010]
basis:
basis_versions:
source: tobe
figma:
---
# TI-INS-02-01-P Management Popup

- T/L 차이: T-IOS는 User Type이 Service일 때 Enabled를 바꿀 수 있음. L-IOS(LI-INS-02-01-P)는 조회만
- 호출되는 곳: [TI-INS-02-T] All Tab의 [Management]

## 디스크립션

```
0  Management Popup
 ● 정의
   - Module 및 Device Unit의 Run-time, Error Rate, 사용 여부(Enabled)를 확인하고 설정하는 Popup
 ● 동작
   - All Tab의 [Management] 클릭 시 노출
   - 사용 여부(Enabled) 변경은 User Type이 Service일 때만 가능
   - User Type이 Admin, User이면 조회만 가능
 ● User Type : Service, Admin, User
 ● 정책 참고 : POL-EQP-009

1  목록
 ● 정의 : 선택한 Module Type의 Module · Device Unit 목록
 ● 동작 : 최초 진입 시 모든 아코디언이 열린 상태로 노출
 ● 표출 항목
   - Module - Device : Module 이름(인덱스), 그 아래 Device Unit 이름
   - Serial No. : Module 또는 Device의 제조번호, 제공하지 않으면 '-'
   - Run-time(h) : Module 또는 Device가 Running인 시간의 누적 값
   - Enabled : 사용 여부 Radio 버튼 (Enabled / Disabled)
 ● 산출 방식 (Run-time)
   - 집계 대상 Module : 전체
   - 집계 대상 Device : Sample Pretreatment, Sample Aliquot, M9600, STARlet, Sealer, CFX96
   - Module 또는 Device 상태가 Running인 시간의 누적 값
 ● 정책 참고 : POL-EQP-005

1-1  Module Type(Dropdown)
 ● 기능 : 목록에 표시할 Module Type 선택
 ● Default : All Tab에서 선택한 Module의 Type
 ● 드롭다운 리스트 항목
   - Sample Storage, Prep Consumable Storage, Sample Preparation, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR
 ● 동작 : 선택하면 그 Type의 목록으로 바뀜

1-2  아코디언
 ● 노출 조건 : Module 안에 Device Unit이 있을 때만 아코디언 제공
 ● 동작 : 각각 따로 열고 닫음, 여러 개를 동시에 열 수 있음

1-3  Radio 버튼
 ● 기능 : Module 또는 Device Unit의 사용 여부(Enabled / Disabled) 선택
 ● 노출 조건
   - Module : 같은 Module이 2대 이상일 때 Module마다 설정
   - Device Unit : 한 Module 안에 같은 Device Unit이 2대 이상일 때 Device Unit마다 설정 (예: CFX96, Sealer, Sample Pretreatment 2대)
 ● 동작
   - Module을 Disabled로 고르면 그 Module의 Device Unit도 Disabled가 되고 Enabled는 선택 불가
   - Module을 다시 Enabled로 고르면 Device Unit도 Enabled
 ● 정책 참고 : POL-EQP-009

2  Error Rate
 ● 노출 조건 : User Type이 Service일 때만 노출
 ● 산출 방식
   - (가동 실패 횟수 / 총 가동 횟수) x 100
   - 집계 대상 Module : 전체
   - 집계 대상 Device : Sample Pretreatment, Sample Aliquot, M9600, STARlet, Sealer, CFX96
   - 총 가동 횟수 : Prep 검체/소모품 저장 Module은 Trolley가 입고되어 가동이 시작된 시점, Prep 검체 전처리 Module은 Sample이 장착된 Rack이 로딩되어 가동이 시작된 시점, Dx 전체 Module · Device는 Plate가 입고되어 가동이 시작된 시점
   - 가동 실패 횟수 : 가동 시작 뒤 오류로 가동이 중단된 시점 (소모품 부족 · Waste Bin Full로 인한 중단은 제외)
 ● 참고 : TI-INS-02-01-P/Case > Case 1, Case 2
 ● 정책 참고 : POL-EQP-010

3  [Save] 버튼
 ● 활성화 조건 : User Type이 Service일 때
 ● 동작
   - 장비 통합 상태가 Ready 또는 Not Initialized이고 장비 모듈 상태가 Ready 또는 Not Initialized일 때만 저장 가능
   - 장비 모듈 상태가 Running이면 Alert_013 노출
   - 같은 Module이 2대 이상일 때 모두 Disabled로 저장하면 Alert_014 노출 (최소 1대는 Enabled)
   - Module이 1대이면 Disabled로 바꿀 수 없음 (Alert_014)
   - Module이 Enabled일 때 같은 Device Unit을 모두 Disabled로 저장하면 Alert_015 노출
   - 저장되면 Popup 닫힘, Toast 노출 (Changes saved.), 진입 전 화면 새로고침
 ● 정책 참고 : POL-EQP-009

3-1  [Cancel] 버튼
 ● 동작 : 클릭 시 Popup 닫힘, 진입 전 화면 유지
```

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1-1 | Module Type | Sample Preparation | 기존 화면 |
| 1 | 목록 | Sample Preparation (1) · Sample Aliquot (Upper) · Sample Aliquot (Lower) … 9행, Serial No. A123B123C1234f123, Run-time 9,193 | 기존 화면 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | Language ID | 상태 (신규 / 변경 / 제거) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- |
| 0 | Management | | | |
| 1 | Module - Device, Serial No., Run-time(h), Enabled | | | |
| 1-3 | Enabled, Disabled | | | |
| 2 | Error Rate | | | |
| 3 | Save | | | |
| 3 | Changes saved. | | | |
| 3 | Changes aren’t allowed while the module is running. | | | |
| 3 | At least one module must remain enabled. | | | |
| 3 | At least one Device must remain enabled. | | | |
| 3-1 | Cancel | | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |
| 3 | Alert_013 | 장비 모듈 상태가 Running일 때 [Save] | OK : 닫힘, 기존 화면 유지 |
| 3 | Alert_014 | Module을 모두 Disabled로 저장 · Module 1대를 Disabled로 | OK : 닫힘, 기존 화면 유지 |
| 3 | Alert_015 | 같은 Device Unit을 모두 Disabled로 저장 | OK : 닫힘, 기존 화면 유지 |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | User Type이 User 또는 Admin일 때 Error Rate 미표기 | User, Admin | 2 | 3 | 기존 원본 |
| 2 | User Type이 Service일 때 Error Rate 표기 | Service | 2 | 3 | 기존 원본 |

## 변경 확인

| 번호 (C) | 디스크립션 번호 | 기존 화면 | 바꿔 그린 것 | 근거 (정책 ID · 반영 대기 ID · 이유) | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- |
| C20 | 2 | Account Type의 Sevice일 경우만 노출, Case Account Type | 표기 수정 (Account Type → User Type, Sevice → Service) | R01, `glossary/terms.csv` | - | |
| C21 | 0, 3-1 | [Cancle], Datail | 표기 수정 (Cancle → Cancel, Datail → Detail) | R02, 오타 | O | |
| C22 | 0, 3 | Enabled 변경 권한 정의 없음 | Enabled 변경은 Service만, Admin · User는 조회만 | R03, POL-EQP-009, `policy/permission-matrix.csv` | O | |
| C23 | 3 | 수정 가능 상태 "CURECA 구동 상태값이 Ready 및 not initialized" | 장비 통합 상태 · 장비 모듈 상태가 Ready 또는 Not Initialized일 때 | R04, POL-EQP-009 | O | |
| C24 | 1-3 | Device Unit 설정 대상 정의 없음 | 같은 Device Unit이 2대 이상일 때만 Device Unit별 설정 | R05, POL-EQP-009 | O | |
| C25 | 1 | 표 헤더 Enable, Radio Enable / Disable | 표기 수정 (Enable → Enabled, Disable → Disabled) | R08 | O | |

## 질문 대기

| 번호 (Q) | 디스크립션 번호 | 질문 | 논의 대상 (DS) | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- |
| Q5 | 3 | User Type이 Admin · User일 때 [Save] · Radio 버튼 모습 (숨김 / Disabled, 정책은 "조회만"만 정함) | | |

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | "Account Type의 Sevice일 경우만 노출" | User Type이 Service일 때만 | `glossary/terms.csv` | 작업 중 (20261117-최고관리자-instruments) |
| R02 | 디스크립션 | [Cancle], Datail | [Cancel], Detail | 오타 | 작업 중 (20261117-최고관리자-instruments) |
| R03 | 정책 반영 | Enabled 변경 권한이 화면에 없음 | 변경은 User Type이 Service일 때만, Admin·User는 조회만 | POL-EQP-009, `policy/permission-matrix.csv` | 작업 중 (20261117-최고관리자-instruments) |
| R04 | 정책 반영 | 변경 가능 조건 "CURECA 구동 상태값이 Ready 및 not initialized일 경우" | 장비 통합 상태가 Ready 또는 Not Initialized이고 장비 모듈 상태가 Ready 또는 Not Initialized일 때 | POL-EQP-009 | 작업 중 (20261117-최고관리자-instruments) |
| R05 | 정책 반영 | Device Unit 설정 대상이 정해져 있지 않음 | 한 Module 안에 같은 Device Unit이 2대 이상일 때만 Device Unit별로 설정 (예: CFX96, Sealer, Sample Pretreatment 2대) | POL-EQP-009 | 작업 중 (20261117-최고관리자-instruments) |
| R06 | 알럿 | Module 상태가 Running이 아닌 이유(Error, Paused 등)로 바꿀 수 없을 때의 알럿이 없음. Alert_013은 "while the module is running" | 알럿 정의 필요 | POL-EQP-009, 헌법 8조 | 대기 (정의 필요) |
| R07 | 디스크립션 | Error Rate 표시 위치 | 고객 논의 중(CA-0001) | POL-EQP-010 | 대기 (고객 논의) |
| R08 | 표기 | 표 헤더 "Enable" | Enabled (L-IOS, All Tab과 같게) | LI-INS-02-01-P | 작업 중 (20261117-최고관리자-instruments) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | Enable setting Popup을 Management Popup으로 변경 및 화면설계 변경. Module 및 Device에 Serial Number 추가. Device Enable 정책 변경(관리 대상 추가 및 대수 관련 정책 변경) | 서보경 | Figma 버전 메모 |
| | 2026-11-12 | 연동 변경: L-IOS Client Mode 이름 바꿈 (머리말 키 `client_mode`, 표기 L-IOS Client Mode · MS Mode, 경로 `policy/client-mode-matrix.csv`) | 서보경 | DS-0001 |
| | 2026-11-17 | 화면 MD를 tobe로 새로 씀 (기존 작업방 Instruments 2.1 2차 [3249-112456](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-112456) · Ver 2.1.01). 반영 대기 R01 ~ R05 · R08 반영(작업 중), C20 ~ C25 · Q5. User Type 케이스 화면은 그리지 않고 디스크립션에만(2단계 답). Figma는 다음 요청에서 그림 | Claude (요청 최고관리자) | 20261117-최고관리자-instruments |
