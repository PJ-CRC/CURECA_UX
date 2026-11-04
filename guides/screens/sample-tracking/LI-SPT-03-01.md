---
cid: LI-SPT-03-01
pair_cid: TI-SPT-03-01
tl_relation: 동일
title: PCR Plate Details
path: Sample Tracking > PCR Plate > Details
type: Popup
version: 2.0
date: 2026-06-15
author: 정다예
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-311215
figma_region: 2.1 2차
---
# LI-SPT-03-01 PCR Plate Details

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: Plate Info 라벨이 "Product Total / Product STAT" (T-IOS는 Total Products / STAT Products)
- 관련 정책: (정책 작성 전)
- 호출하는 화면: Samples (LI-SPT-01)
- 다른 프레임: [LI-SPT-03-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-309778)

## 기존 화면

### 화면 글자

- (GNB·LNB) L-IOS 공통 영역 (LNB에 Material Setup, Run, Quick Start)
- 본문은 TI-SPT-03-01과 같음. 다른 점: Plate Info 라벨 "Product Total", "Product STAT"

### 디스크립션 (원문)

- 원문은 TI-SPT-03-01과 같음 (케이스 참조 "…-SPT-02-01/Case → Case 1", "… Case 3"도 같음. 디스크립션 1-1은 Total Products / STAT Products)

### 케이스

- Case 1. Plate 기본 정보 영역(Tab) 노출 데이터 항목
- Case 2. Plate / List 표출 상태 및 유형
- Case 3. C(대조군) Well 선택 시 표출 데이터

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 글자 | Plate Info 라벨 "Product Total", "Product STAT" (디스크립션 1-1과 T-IOS는 Total Products, STAT Products) | Total Products, STAT Products | 디스크립션 1-1 | 대기 |
| 2 | 화면 정보 | 1·3-1 케이스 참조가 96-DWP Details 케이스 | LI-SPT-03-01/Case | 케이스 프레임 | 대기 |
| 3 | 디스크립션 | TI-SPT-03-01 반영 대기 목록 3~7과 같음 | TI-SPT-03-01과 같이 | TI-SPT-03-01 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
