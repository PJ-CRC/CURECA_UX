---
cid: LI-INS-02-01-P
pair_cid: TI-INS-02-01-P
tl_relation: 기능 추가
title: Management Popup
path: Instruments > All > Management
type: Popup
version: 2.1.01
date: 2026-08-07
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-119585
figma_region: 2.1 1차
---
# LI-INS-02-01-P Management Popup

> 기존 화면(작업방 Instruments 페이지, 2.1 1차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: L-IOS는 조회만. T-IOS(TI-INS-02-01-P)는 Service가 Enabled를 바꿀 수 있음
- 관련 정책: POL-EQP-005, POL-EQP-009, POL-EQP-010 / 고객 논의 CA-0001

## 기존 화면

### 화면 글자

- Management
- Sample Preparation
- Module - Device | Serial No. | Run-time(h) | Enabled
- Sample Preparation (1) | A123B123C1234f123 | 9,193 | Y
- Sample Aliquot (Upper) | A123B123C1234f123 | 9,193 | Y
- Sample Aliquot (Lower) | A123B123C1234f123 | 9,193 | Y
- Sample Preparation (2) | A123B123C1234f123 | 9,193 | Y
- Sample Aliquot (Upper) | A123B123C1234f123 | 9,193 | N
- Sample Pretreatment (Lower) | A123B123C1234f123 | 9,193 | Y
- Sample Preparation (3) | A123B123C1234f123 | 9,193 | N
- Sample Aliquot (Upper) | A123B123C1234f123 | 9,193 | N
- Sample Pretreatment (Lower) | A123B123C1234f123 | 9,193 | N
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
- Run-time: 아래 내역 참고 (Run-time 집계 정의 원문은 TI-INS-02-01-P 1과 같음)

#### 1-1. Module Type 드랍박스

- 원문은 TI-INS-02-01-P 1-1과 같음

#### 1-2. 아코디언

- 원문은 TI-INS-02-01-P 1-2와 같음

#### 2. Error Rate

- 원문은 TI-INS-02-01-P 2와 같음 (Account Type의 Sevice일 경우만 노출, 집계 대상·기준·데이터 저장)

#### 3. [OK] 버튼

- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

### 케이스

- Case2. Account Type=Service일 경우, Error Rate 표기
- Case1. Account Type=User or Admin일 경우, Error Rate 미표기

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 디스크립션 | "Account Type의 Sevice일 경우만 노출" | User Type이 Service일 때만 | `glossary/terms.csv` | 대기 |
| 2 | 정책 반영 | 조회 전용임이 디스크립션에 분명하지 않음 | L-IOS는 모든 User Type이 조회만 (Enabled 변경 없음) | POL-EQP-009 | 대기 |
| 3 | 디스크립션 | Error Rate 표시 위치 | 고객 논의 중(CA-0001) | POL-EQP-010 | 대기 (고객 논의) |
| 4 | 디스크립션 | Datail | Detail | 오타 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | 팝업 재정의 | 서보경 | Figma 버전 메모 |
