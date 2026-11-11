---
cid: TI-STN-01-03
pair_cid:
tl_relation: 단독
title: Comparison Simulation
path: Setting > Policy Setting > Comparison Simulation
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6596-296343
figma_region: 2.1 2차
---
# TI-STN-01-03 Comparison Simulation

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용
- 관련 정책: POL-TST-004

## 기존 화면

### 화면 글자

- Comparison Simulation
- Order Date | Total | Total product count | 675 tests / 225 samples
- Product: RP1 | RP2 | RP3 | RB | GI-B1 | GI-B2 | GI-V | GI-P | HPV28 | STI-12
- Prioritize Cost Reduction: Total Cost 6,750 USD, Total TAT 2h 10m
- Prioritize TAT Reduction: Total Cost 11,250 USD, Total TAT 50m

### 디스크립션 (원문)

#### 1. Simulation Type

- 디폴트 : Order Date
- 1-1 Calendar: 공통 UX > 5-d. Calendar_단일 선택 케이스 정의 참고. 일자 선택 & [적용] 버튼 선택 시 → ② , ③ 정보 업데이트. 금일 일자로 부터 최대 3개월 전 일자까지 선택 가능. 금일 선택 시 → 해당 시점 조회된 검사 항목까지 산출

#### 2. 전체 tests/sample 개수 및 검사 항목 코드

- 노출 정보 : (1-1) 해당 일자에 진행한 전체 tests/sample 개수 및 검사 항목 코드 노출

#### 3. Cost or TAT 우선순위 정보

- 노출 정보 : (1-1) 해당 일자에 진행한 tests 중 cost or TAT 우선순위에 따른 정보 노출

#### 4. [OK] 버튼

- 선택 시 → 해당 팝업 닫힘

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 표기 | 검사 항목 "RB", "HPV28" | PB, 검사 항목 UI 표기 | `glossary/test-items.csv` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | BREX | Figma 화면 정보 |
