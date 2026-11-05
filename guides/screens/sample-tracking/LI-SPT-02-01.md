---
cid: LI-SPT-02-01
pair_cid: TI-SPT-02-01
tl_relation: 동일
title: 96-DWP Details
path: Sample Tracking > 96 DWP > Details
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-267512
figma_region: 2.1 2차
---
# LI-SPT-02-01 96-DWP Details

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 관련 정책: (정책 작성 전)
- 호출하는 화면: Samples (LI-SPT-01)
- 다른 프레임: [LI-SPT-02-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-268370)

## 기존 화면

### 화면 글자

- (GNB·LNB) L-IOS 공통 영역 (LNB에 Material Setup, Run, Quick Start, Shut Down)
- 본문은 TI-SPT-02-01과 같음

### 디스크립션 (원문)

- 원문은 TI-SPT-02-01과 같음. 다른 점: 1-1 Barcode에 "시약 유형에 따라 바코드가 2개로 표출될 수 있음", "표출 케이스 : …/Case → Case 1" 두 줄이 없음

### 케이스

- Case 1. Plate 기본 정보 영역(Tab) 노출 데이터 항목
- Case 2. Plate / List 표출 상태 및 유형

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | T/L 차이 | 1-1 Barcode에 "바코드가 2개로 표출될 수 있음"이 없음 (T-IOS에는 있음) | T-IOS와 맞춤 | TI-SPT-02-01 1-1 | 대기 |
| R02 | 디스크립션 | TI-SPT-02-01 반영 대기 목록 1~6과 같음 ([Select All] 확인, "비선택Unselected", "Sample가", Module명, 이동 화면 CID, 안내 문구 언어셋) | TI-SPT-02-01과 같이 | TI-SPT-02-01 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
