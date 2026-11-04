---
cid: LI-IVT-04-T
pair_cid: TI-IVT-04-T
tl_relation: 동일
title: Inventory Reagent
path: Inventory > Reagents
type: Tab
version: 2.1.13
date: 2026-10-23
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3638-102586
figma_region: 2.1 2차
---
# LI-IVT-04-T Inventory Reagent

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.13)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 없음 (TI-IVT-04-T와 같음)
- 관련 정책: POL-INV-001, POL-INV-002, POL-INV-003, POL-INV-004, POL-EQP-009, POL-INV-007
- 호출하는 화면: Reagent Item details Popup (LI-IVT-04-T-P)

- 취소선(Figma에서 제거된 항목): TI-IVT-04-T와 같음 (0의 옛 개수 표기 방식)

## 기존 화면

### 화면 글자

- TI-IVT-04-T와 같음 (GNB·LNB는 L-IOS 공통). 다른 점: PCR Kit 카드의 구성 시약 이름이 알파벳 순서로 나열됨 (예: "5X Real-time One-step Buffer, 5X RP1 MOM, Real-time One-step Enzyme, RNase-free Water, RP1 PC"). T-IOS는 순서가 정해져 있지 않음

### 디스크립션 (원문)

- 원문은 TI-IVT-04-T 0~5와 같음. 3-7의 팝업 CID도 "[TI-IVT-04-T-P]"로 같음

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | 3-7 "클릭 시, [TI-IVT-04-T-P] 팝업 호출" (L-IOS 화면) | LI-IVT-04-T-P | `ia/ia-screens.csv` | 대기 |
| 2 | 화면 글자 | PCR Kit 구성 시약 나열 순서가 T-IOS와 다름 | 한 가지 정렬 기준으로 통일 (COMM-4-b) | TI-IVT-04-T 화면 글자 | 대기 (확인 필요) |
| 3 | 상태값 | Reagent에 재고 상태(Sufficient / Low / Insufficient)를 씀 | TI-IVT-04-T 반영 대기 목록 1·2와 같음 | `glossary/status-values.csv 재고 상태`, POL-INV-003 | 대기 |
| 4 | 디스크립션 | 번호 중복, 단위 혼용(rxns, T), "유효기간", "유효기가", 2-5 첫 문장 | TI-IVT-04-T 반영 대기 목록 3~7과 같음 | TI-IVT-04-T | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.13 | 2026-10-23 | 표기 및 정렬 기준 변경 반영. UI 변경 (표기 단위 변경에 따른 간격 재조정). Pretreatment Reagents 카드 내 구분선 제거 | 서보경 | Figma 버전 메모 |
