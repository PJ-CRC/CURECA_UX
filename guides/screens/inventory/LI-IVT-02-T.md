---
cid: LI-IVT-02-T
pair_cid: TI-IVT-02-T
tl_relation: 동일
title: Inventory Overview
path: Inventory > Overview
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6350-69221
figma_region: 2.1 2차
---
# LI-IVT-02-T Inventory Overview

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.13)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 없음 (화면 글자와 디스크립션이 TI-IVT-02-T와 같음)
- 관련 정책: POL-INV-001, POL-INV-002, POL-EQP-009, POL-LOD-001
- 호출하는 화면: Alert_020 (데이터 로드 실패)
- 다른 프레임: [SB_Inventory_Overview_Detail Info](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6550-224564) (CID 없음)

- 취소선(Figma에서 제거된 항목): TI-IVT-02-T와 같음 (1-3 옛 최대 적재 용량 표기 방식)

## 기존 화면

### 화면 글자

- TI-IVT-02-T와 같음 (GNB·LNB는 L-IOS 공통)

### 디스크립션 (원문)

- 원문은 TI-IVT-02-T 0~3과 같음

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 표기 | Tab 이름 "Reagent" | Reagents | IA | 대기 |
| 2 | 디스크립션 | 1-2 "데이트 업데이트", 1-3 "차감되지 않는며" | 데이터 업데이트, 차감되지 않으며 | 오타 | 대기 |
| 3 | 디스크립션 | 0 "사용여부가 '사용'인 모듈", 1-1 "투입 트롤리", "회수 트롤리", "검체" | Enabled인 Module, Inbound Trolley, Outbound Trolley, Sample | POL-EQP-009, `glossary/terms.csv` | 대기 |
| 4 | 화면 정보 | IA "짝 화면 동일"이 비어 있으나 TI-IVT-02-T와 같음 | IA 확인 | `ia/ia-screens.csv` | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.12 | | Sample Storage Module 추가. 일부 UX/UI 변경. 신규 모듈 추가에 따른 일부 UI 변경. 잔여표기량 정책 변경에 따른 UI 변경. 잔여량 표기 정책 변경 | 서보경 | Figma 버전 메모 |
| 2.1.13 | 2026-10-23 | 표기 및 정렬 기준 변경 반영 | 서보경 | Figma 버전 메모 |
