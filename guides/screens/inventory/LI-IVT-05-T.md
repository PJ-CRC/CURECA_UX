---
cid: LI-IVT-05-T
pair_cid: TI-IVT-05-T
tl_relation: 동일
title: Waste Bin/Bottle
path: Inventory > Waste bin
type: Tab
version: 2.1.11
date: 2026-10-08
author: 정다예
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5521-206950
figma_region: 2.1 2차
---
# LI-IVT-05-T Waste Bin/Bottle

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 없음 (TI-IVT-05-T와 같음)
- 관련 정책: POL-INV-001, POL-INV-005, POL-EQP-009, POL-LOD-005
- 호출하는 화면: 없음. 비움 처리(Confirm Empty)는 Material Setup > Empty Waste Bin (Console Mode)으로 옮겨짐

## 기존 화면

### 화면 글자

- TI-IVT-05-T와 같음 (GNB·LNB는 L-IOS 공통)

### 디스크립션 (원문)

- 원문은 TI-IVT-05-T 0~4와 같음

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | IA 화면 이름 "Waste bin", 화면 "Waste Bin/Bottle" | IA를 Waste Bin/Bottle로 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| 2 | 디스크립션 | "Waste Status", "Moule(index)", "[3-6]", Waste Bin만 기준으로 한 노출 조건, 한국어 혼용 | TI-IVT-05-T 반영 대기 목록 2~5·8과 같음 | TI-IVT-05-T | 대기 |
| 3 | 디스크립션 | 3-3·3-5 Confirm Empty 위치 "Material Setup > Empty Waste Bin" | 비움 처리는 L-IOS Material Setup > Empty Waste Bin에서 함. T-IOS는 관제용이라 비움 기능 없음. 지금은 Console Mode에서만 제공 (Main Mode 제공 여부는 고객 논의 CA-0007) | POL-INV-005 규칙 5·6, `policy/service-mode-matrix.csv` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.11 | 2026-10-08 | 기존 화면 UX/UI 개선. Confirm Empty 기능 이관 (MS 참고) | 정다예 | Figma 버전 메모 |
