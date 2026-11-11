---
cid: LI-IVT-03-T
pair_cid: TI-IVT-03-T
tl_relation: 동일
title: Inventory Consumables
path: Inventory > Consumables
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3638-103442
figma_region: 2.1 2차
---
# LI-IVT-03-T Inventory Consumables

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.13)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 없음 (TI-IVT-03-T와 같음)
- 관련 정책: POL-INV-001, POL-INV-002, POL-INV-003, POL-EQP-009
- 호출하는 화면: Consumables Item details popup (LI-IVT-03-T-P)

- 취소선(Figma에서 제거된 항목): TI-IVT-03-T와 같음 (0의 옛 개수 표기 방식)

## 기존 화면

### 화면 글자

- TI-IVT-03-T와 같음 (GNB·LNB는 L-IOS 공통)

### 디스크립션 (원문)

- 원문은 TI-IVT-03-T 0~5와 같음. 3-7의 팝업 CID도 "[TI-IVT-03-T-P]"로 같음

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 3-7 "클릭 시, [TI-IVT-03-T-P] 팝업 호출" (L-IOS 화면) | LI-IVT-03-T-P | `ia/ia-screens.csv` | 대기 |
| R02 | 상태값 | 2-6 Insufficient·Low 정의, 1 "sufficient" | TI-IVT-03-T 반영 대기 목록 1·2와 같음 | `glossary/status-values.csv 재고 상태`, POL-INV-003 | 대기 |
| R03 | 디스크립션 | 2-5 첫 문장 Remaining Qty, 노출 조건, 툴팁 Capacity 문구, "차감되지 않는며", 한국어 혼용 | TI-IVT-03-T 반영 대기 목록 3~7과 같음 | TI-IVT-03-T | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.13 | 2026-10-23 | 표기 및 정렬 기준 변경 반영 | 서보경 | Figma 버전 메모 |
