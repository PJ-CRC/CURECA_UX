---
cid: LI-INS-02-01-P
pair_cid: TI-INS-02-01-P
tl_relation: 기능 추가
title: Management Popup
path: Instruments > All > Management
type: Popup
version: 2.1.01
date: 2026.08.07
author: 서보경
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: [POL-EQP-005, POL-EQP-009, POL-EQP-010]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2824-26490
---
# LI-INS-02-01-P Management Popup

- T/L 차이: L-IOS는 모든 User Type이 조회만. T-IOS(TI-INS-02-01-P)는 Service가 Enabled를 바꿀 수 있음
- 호출되는 곳: [LI-INS-02-T] All Tab의 [Management]

## 디스크립션

```
0  Management Popup
 ● 정의
   - Module 및 Device Unit의 Run-time, Error Rate, 사용 여부(Enabled)를 확인하는 Popup
 ● 동작
   - All Tab의 [Management] 클릭 시 노출
   - 모든 User Type이 조회만 가능 (사용 여부 변경 없음)
 ● User Type : Service, Admin, User
 ● L-IOS Client Mode : Main Mode, Console Mode, MS Mode
 ● 정책 참고 : POL-EQP-009

1  목록
 ● 정의 : 선택한 Module Type의 Module · Device Unit 목록
 ● 표출 항목
   - Module - Device : Module 이름(인덱스), 그 아래 Device Unit 이름
   - Serial No. : Module 또는 Device의 제조번호, 제공하지 않으면 '-'
   - Run-time(h) : Module 또는 Device가 Running인 시간의 누적 값
   - Enabled : 사용 여부 (Enabled = Y / Disabled = N)
 ● 산출 방식 (Run-time)
   - 집계 대상 Module : 전체
   - 집계 대상 Device : Sample Pretreatment, Sample Aliquot, M9600, STARlet, Sealer, CFX96
   - Module 또는 Device 상태가 Running인 시간의 누적 값
 ● 참고 : LI-INS-02-01-P/Case > Case 3
 ● 정책 참고 : POL-EQP-005, POL-EQP-009

1-1  Module Type(Dropdown)
 ● 기능 : 목록에 표시할 Module Type 선택
 ● Default : All Tab에서 선택한 Module의 Type
 ● 드롭다운 리스트 항목
   - Sample Storage, Prep Consumable Storage, Sample Preparation, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR
 ● 동작 : 선택하면 그 Type의 목록으로 바뀜

1-2  아코디언
 ● 노출 조건 : Module 안에 Device Unit이 있을 때만 아코디언 제공
 ● 동작 : 각각 따로 열고 닫음, 여러 개를 동시에 열 수 있음

2  Error Rate
 ● 노출 조건 : User Type이 Service일 때만 노출
 ● 산출 방식
   - (가동 실패 횟수 / 총 가동 횟수) x 100
   - 집계 대상 Module : 전체
   - 집계 대상 Device : Sample Pretreatment, Sample Aliquot, M9600, STARlet, Sealer, CFX96
   - 총 가동 횟수 : Prep 검체/소모품 저장 Module은 Trolley가 입고되어 가동이 시작된 시점, Prep 검체 전처리 Module은 Sample이 장착된 Rack이 로딩되어 가동이 시작된 시점, Dx 전체 Module · Device는 Plate가 입고되어 가동이 시작된 시점
   - 가동 실패 횟수 : 가동 시작 뒤 오류로 가동이 중단된 시점 (소모품 부족 · Waste Bin Full로 인한 중단은 제외)
 ● 참고 : LI-INS-02-01-P/Case > Case 1, Case 2
 ● 정책 참고 : POL-EQP-010

3  [OK] 버튼
 ● 동작 : 클릭 시 Popup 닫힘, 진입 전 화면 유지
```

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1-1 | Module Type | Sample Preparation | 기존 화면 |
| 1 | 목록 | Sample Preparation (1) · Sample Aliquot (Upper) · Sample Aliquot (Lower) … 9행, Serial No. A123B123C1234f123, Run-time 9,193, Enabled Y / N | 기존 화면 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | Language ID | 상태 (신규 / 변경 / 제거) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- |
| 0 | Management | | | |
| 1 | Module - Device, Serial No., Run-time(h), Enabled, Y, N | | | |
| 2 | Error Rate | | | |
| 3 | OK | | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | User Type이 User 또는 Admin일 때 Error Rate 미표기 | User, Admin | 2 | 3 | 기존 원본 |
| 2 | User Type이 Service일 때 Error Rate 표기 | Service | 2 | 3 | 기존 원본 |
| 3 | Module에 Device Unit이 없을 때 | Device Unit 없음 | 1, 1-2 | 3 | 기존 원본 |

## 변경 확인

| 번호 (C) | 디스크립션 번호 | 기존 화면 | 바꿔 그린 것 | 근거 (정책 ID · 반영 대기 ID · 이유) | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- |
| C20 | 2 | Account Type의 Sevice일 경우만 노출, Case Account Type | 표기 수정 (Account Type → User Type, Sevice → Service) | R01, `glossary/terms.csv` | - | |
| C21 | 0 | Datail | 표기 수정 (Datail → Detail) | R04, 오타 | - | |
| C26 | 0 | 조회 전용임이 분명하지 않음 | 모든 User Type이 조회만 가능 (변경 없음) 명시 | R02, POL-EQP-009 | - | |
| C35 | 0 | 디스크립션 없는 번호 표시 1-3 | 번호 표시 1-3 지움 (기존 화면 1-3 표시에 맞는 디스크립션 없음) | 기존 화면 번호 표시가 디스크립션과 다름 | - | |

## 질문 대기

| 번호 (Q) | 디스크립션 번호 | 질문 | 논의 대상 (DS) | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- |

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | "Account Type의 Sevice일 경우만 노출" | User Type이 Service일 때만 | `glossary/terms.csv` | 대기 |
| R02 | 정책 반영 | 조회 전용임이 디스크립션에 분명하지 않음 | L-IOS는 모든 User Type이 조회만 (Enabled 변경 없음) | POL-EQP-009 | 대기 |
| R03 | 디스크립션 | Error Rate 표시 위치 | 고객 논의 중(CA-0001) | POL-EQP-010 | 대기 (고객 논의) |
| R04 | 디스크립션 | Datail | Detail | 오타 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | 팝업 재정의 | 서보경 | Figma 버전 메모 |
| | 2026-11-12 | 연동 변경: L-IOS Client Mode 이름 바꿈 (머리말 키 `client_mode`, 표기 L-IOS Client Mode · MS Mode, 경로 `policy/client-mode-matrix.csv`) | 서보경 | DS-0001 |
| | 2026-11-17 | 화면 MD를 tobe로 새로 씀 (기존 작업방 Instruments 2.1 2차 [10069-368209](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-368209) · Ver 2.1.01). 반영 대기 R01 · R02 · R04 반영(작업 중), 기존 원본 케이스 3개 옮김(Case 3은 원본 「모듈에 Device Unit이 없는 Case」에 번호를 붙임), C20 · C21 · C26 · C35. 작업방에 새로 그림 (섹션 [2824-26490](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2824-26490), Figma는 R041 · R007에서 그림) | Claude (요청 최고관리자) | 20261117-최고관리자-instruments |
