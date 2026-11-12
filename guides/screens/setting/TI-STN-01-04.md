---
cid: TI-STN-01-04
pair_cid: LI-STN-01-04
tl_relation: 기능 추가
title: Analyze Breakpoint
path: Setting > Policy Setting > Analyze Breakpoint
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6596-296441
figma_region: 2.1 2차
---
# TI-STN-01-04 Analyze Breakpoint

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: 내용은 같음. L-IOS(LI-STN-01-04)는 조회 전용
- 관련 정책: POL-TST-003, POL-TST-004

## 기존 화면

### 화면 글자

- Analyze Breakpoint
- Optimal samples count | Cost per test | Breakpoint | High-throughput Extraction | Samples count | Flexible Extraction
- Shows the sample count breakpoint for optimal device allocation. High-throughput Extraction: Optimized for high-throughput testing. Provides relatively short TAT, but costs may increase with fewer samples. Flexible Extraction: Suitable for few samples with lower cost. However, TAT may increase as the number of samples increase. * The samples count is calculated based on the cost values entered for each device.
- OK

### 디스크립션 (원문)

#### 1. [OK] 버튼

- 선택 시 → 해당 팝업 닫힘

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | [OK]만 설명. Breakpoint 계산 방식과 표시 항목 설명이 없음 | POL-TST-004 참조, 계산 방식 정의 필요 | 헌법 8조 | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | BREX | Figma 화면 정보 |
