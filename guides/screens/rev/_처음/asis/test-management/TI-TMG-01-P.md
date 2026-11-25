---
cid: TI-TMG-01-P
pair_cid:
tl_relation: 단독
title: Resend Results to LIS
path: Test Management > Test Order > Resend
type: Popup
version: 2.1.17
date: 2026.11.13
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-102056
---
# TI-TMG-01-P Resend Results to LIS

> 기존 화면(작업방 `Test Order_asis` 페이지, Ver 2.1.17)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 팝업 (IA에 L 짝 없음)
- 호출하는 화면: Confirm_031 (5 [Resend All]), Alert_047 (5 · 6), [TI-TMG-01] (6 Alert_047 [OK] 뒤 리스트 갱신)
- 호출되는 곳: [TI-TMG-01] 4 [Resend Results] (원문 0은 `[Resend]` 버튼으로 적음)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- Resend Results to LIS
- The test results below failed to send to the LIS. Select the results to resend.
- Items 98 | 10 Items
- Sample ID | Product | Sample Type | Order Date | Start Date/Time | End Date/Time
- AA0005003 | RP1 | Saliva | 2025-03-05 | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- AA0005007 | PB | Swab | 2025-03-05 | 2026-03-05 10:40:12 | 2026-03-05 11:40:12
- AA0005009 | GI-B1 | eNAT stool | 2025-03-05 | 2026-03-05 11:05:31 | 2026-03-05 12:05:31
- AA0005011 | RP2 | Sputum | 2025-03-05 | 2026-03-05 11:30:02 | 2026-03-05 12:30:02
- AA0005014 | STI-12 | Urine | 2025-03-05 | 2026-03-05 12:10:45 | 2026-03-05 13:10:45
- AA0005015 | RP3 | Swab | 2025-03-06 | 2026-03-06 09:12:10 | 2026-03-06 10:05:44
- AA0005018 | GI-V | Raw stool | 2025-03-06 | 2026-03-06 09:30:22 | 2026-03-06 10:21:03
- AA0005021 | Allplex HPV28 | Thinprep | 2025-03-06 | 2026-03-06 09:48:51 | 2026-03-06 10:40:17
- AA0005022 | RP1 | Saliva | 2025-03-06 | 2026-03-06 10:02:33 | 2026-03-06 10:58:29
- AA0005025 | GI-P | Fecal swab | 2025-03-06 | 2026-03-06 10:15:08 | 2026-03-06 11:12:56
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
- Cancel | Resend All | Resend Selected

### 사용 컴포넌트

Frame 58 (20), Checkbox (11), Table (10), Tag Status (10), Frame 50 (10), Frame 42 (10), Description Number (8), Title (6), Square (3), Dropdown Outlined (1), Page number (1)

### 디스크립션 (원문)

#### 0. 재전송 대상 선택 팝업

- 정의
- LIS 결과 전송에 실패한 항목을 선택하여 재전송하는 팝업
- 노출 조건
- TI-TMG-01 [Resend] 버튼 클릭 시
- 리스트 대상
- TI-TMG-01 리스트의 현재 조회 조건 AND Status가 Completed AND LIS Transmission이 Failed인 항목 전체
- 조회 조건이 없을 경우(Default), Status가 Completed이고 LIS Transmission이 Failed인 항목 전체
- 팝업 내 별도 조회 기능 없음

#### 1. 팝업 문구

- 고정 타이틀 및 상세 문구 노출
- 타이틀 : Resend Results to LIS
- 내용 : The test results below failed to send to the LIS. Select the results to resend.
- 재전송 대상이 없을 경우 리스트 영역 문구 노출
- No failed results to resend.

#### 2. 재전송 대상 리스트

- Items : 재전송 대상 전체 건수
- Sample ID
- T-IOS에서 수신되는 검체 ID 정보
- Product
- T-IOS에서 수신되는 검사 항목 정보
- 하나의 검사 항목 단위 정보 노출
- Sample Type
- T-IOS에서 수신되는 검체 타입 정보
- Order Date
- LIS 접수 일자 정보
- 표기 : YYYY-MM-DD
- Start Date/Time
- Prep 장비에서 바코드 찍은 시간 시점
- End Date/Time
- L-IOS가 D.A.PC(결과처리 시스템)로부터 검사 결과를 받은 시점
- 정렬 : End Date/Time 기준 최신순

#### 2-1. 노출 개수(Dropdown)

- Items 옆 단위 보기 UI
- 10 / 30 / 50 / 100 Items
- Default : 10 Items
- 선택 시 해당 개수로 즉시 갱신, 1페이지로 이동

#### 2-2. Checkbox

- 개별 선택 : 행 체크박스 선택/해제
- 헤더 체크박스 : 현재 페이지 전체 선택, 재선택 시 해제
- 일부 선택 시 헤더 체크박스 Indeterminate 상태
- Default : 전체 미선택

#### 3. 페이지네이션

- 공통 UX 참고 : COMM-5-i

#### 4. [Cancel] 버튼

- 클릭 시, 재전송 없이 팝업 닫힘

#### 5. [Resend All] 버튼

- 리스트 대상 전체 항목(모든 페이지) 재전송
- 체크박스 선택 여부와 무관
- Default : 활성화 (재전송 대상이 없을 경우 비활성화)
- 클릭 시, 팝업 노출 : Confirm_031
- [Resend] 선택 시 → 전체 항목 LIS로 재전송 요청 & Alert_047 노출
- [Cancel] 선택 시 → Confirm 닫힘, 재전송하지 않음

#### 6. [Resend Selected] 버튼

- 선택한 항목만 재전송
- Default : 비활성화
- 활성화 조건 : 1건 이상 선택된 경우
- 클릭 시, 선택 항목 LIS로 재전송 요청 & 팝업 노출 : Alert_047
- Alert_047 [OK] 선택 시 → Alert 및 TI-TMG-01-P 닫힘, TI-TMG-01 리스트 갱신

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Test Order_asis` 페이지에 TI-TMG-01-P 케이스 프레임 없음)
