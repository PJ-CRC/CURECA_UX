---
cid: LI-IVT-01-T
pair_cid: TI-IVT-01-T
tl_relation: 동일
title: Inventory Summary
path: Inventory > Summary
type: Page
version: 2.1.14
date: 2026-10-30
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3637-89954
figma_region: 2.1 2차
---
# LI-IVT-01-T Inventory Summary

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 없음 (화면 글자와 디스크립션이 TI-IVT-01-T와 같음. 다른 점은 아래 취소선뿐)
- 관련 정책: POL-INV-001, POL-INV-002, POL-INV-003, POL-INV-005, POL-EQP-009
- 호출하는 화면: 없음

- 취소선(Figma에서 제거된 항목): 1-7 툴팁 문구 "Shows required items by replenishment priority, visible only when system is running or Inbound Trolley is docked", "Shows required items by replenishment priority"

## 기존 화면

### 화면 글자

- TI-IVT-01-T와 같음 (GNB·LNB는 L-IOS 공통)

### 디스크립션 (원문)

- 원문은 TI-IVT-01-T와 같음. 다른 점:
  - 1-3 취소선 문장(최대 적재량 capacity 표기)이 없음
  - 1-7 툴팁 문구 4개 중 앞의 2개가 취소선 (T-IOS는 취소선 없음)

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 표기 | 화면 카드 "Comsumable" | Consumable | `glossary/terms.csv` | 대기 |
| 2 | 상태값 | 1-1·1-5 "Empty 및 Insufficient" (화면 카드는 Insufficient, Low) | TI-IVT-01-T 반영 대기 목록 2와 같음 (Empty → Insufficient) | `glossary/status-values.csv 재고 상태`, POL-INV-003 규칙 7 | 대기 |
| 3 | 상태값 | 1 "'Docking' 상태" | Docked | `glossary/status-values.csv` | 대기 |
| 4 | 문구 | 3-5 툴팁 "Full and Warning status" | Full and Almost Full | `glossary/status-values.csv` | 대기 |
| 5 | 표기 | 3-4 "Waste Status Icon" | Waste Bin/Bottle Status Icon | `glossary/terms.csv` | 대기 |
| 6 | 디스크립션 | 1-7 툴팁 취소선이 L-IOS에만 있음 | TI-IVT-01-T와 같은 현재 문구로 맞춤 | TI-IVT-01-T 반영 대기 목록 6 | 대기 (확인 필요) |
| 7 | 디스크립션 | 번호 2 없음, 0 "사용여부가 '사용'인 모듈" | 번호 정리, Enabled인 Module | POL-EQP-009 | 대기 |
| 8 | 화면 정보 | IA "짝 화면 동일"이 비어 있으나 화면은 같음 | IA 확인 | `ia/ia-screens.csv` | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.13 | | 표기 및 정렬 기준 변경 반영. Requirements for Run Completion UI 변경 (잔여 및 필요량 부분). Capacity 항목 제거 | 서보경 | Figma 버전 메모 |
| 2.1.14 | 2026-10-30 | 명칭 변경: Requirements for Run Completion → Inventory status. Inventory status Tooltip 내용 변경 | 서보경 | Figma 버전 메모 |
