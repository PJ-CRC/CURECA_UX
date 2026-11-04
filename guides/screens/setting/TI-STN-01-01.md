---
cid: TI-STN-01-01
pair_cid:
tl_relation: 단독
title: Cost Setting
path: Setting > Policy Setting > Cost Setting
type: Popup
version: 2.0
date: 2026-06-15
author: BREX
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6596-296496
figma_region: 2.1 2차
---
# TI-STN-01-01 Cost Setting

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용
- 관련 정책: POL-TST-003

## 기존 화면

### 화면 글자

- Cost Setting | 통화 USD
- Consumables | Reagents
- 목록 헤더: No. | Product Name | Quantity | Usage | Cost per Package
- 목록 예: 96-DWP 1 ea, PCR Plate 1 ea, Sealing Film 100 ea, Stool Swab 24 ea/rack, Empty Standard Tube 48 ea/rack, MM Tube 14 ea/rack, 300 ㎕ Tip 96 ea/rack, 1,000 ㎕ Tip 96 ea/rack, Wide Bore Tip 96 ea/rack (각 USD)
- Close | Apply

### 디스크립션 (원문)

#### 1. 통화 구분

- 노출 : Cost setting의 통화 DB 모두 노출
- 출력 : KRW / USD / EUR / GBP 출력
- 디폴트 : USD
- 선택 시 → 선택 값으로 출력 변경 & (1-1) 통화 모두 반영

#### 2. Consumables / Reagents 탭

- 디폴트 : Consumables 활성화
- 비활성화 탭 선택 시 → 선택한 탭 활성화 & 기존 탭 비활성화

#### 3. Consumables 목록

- 노출 : Consumables의 product DB 모두 노출
- 출력 : Product name 출력
- 정렬 : Common UX > 4-b. Data Notation Rules for Inventory 정렬 정의에 따름

#### 4. Usage

- 디폴트 : 비활성화
- 선택 시 → 해당 row 활성화 & (4-1) Textfield 활성화
- (4-1) Cost: 디폴트 : 0 노출. 입력 값 조건 : 0 or 양수인 숫자만 입력 가능 [소수점(.) 입력 허용]. 그 외, 음수, 특수문자, 문자 입력 불가

#### 5. 기능버튼

- [Close] 버튼: 선택 시 → 해당 팝업 닫힘
- [Apply] 버튼: 활성화 조건 : 아래 항목 모두 만족 시, 활성화 (목록 중 ④ Usage 1개 이상인 경우, (4-1) 값 ≠ Null 값인 경우). 선택 시 → Confirm_010 노출

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 표기 | 300 ㎕ Tip, 1,000 ㎕ Tip | 300 μL Tip, 1000 μL Tip | `glossary/glossary.md` Tip 용량 표기 | 대기 |
| 2 | 표기 | Quantity "24 ea/rack" 등 | Consumable 수량 표기 규칙 `{수량} ea ({n} {단위})` | Common UX COMM-4-b | 대기 |
| 3 | 디스크립션 | Reagents 탭 설명이 없음 (버전 메모 v2.1.14 "시약 목록 Assay pack에 따른 정렬") | Reagents 탭 정의 추가 | Figma 버전 메모 | 대기 |
| 4 | 정책 반영 | Consumable 품목은 씨젠 소모품·시약 새 버전 기준 | 새 버전 반영 후 확인 | `background/worklist.md` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.12 | | PCR 시약 추가 | | Figma 버전 메모 |
| 2.1.14 | | 소모품 / 시약 탭 구분 추가, 소모품 목록 사용 여부 기능 추가, 시약 목록 Assay pack에 따른 정렬 디스크립션 추가, Alert / Confirm 업데이트 | | Figma 버전 메모 |
