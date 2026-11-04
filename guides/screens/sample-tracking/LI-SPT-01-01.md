---
cid: LI-SPT-01-01
pair_cid: TI-SPT-01-01
tl_relation: 동일
title: Samples Details
path: Sample Tracking > Samples > Details
type: Popup
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-111485
figma_region: 2.1 2차
---
# LI-SPT-01-01 Samples Details

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: Sample Location의 항목 이름이 T-IOS는 Trolley Name, L-IOS는 Trolley ID (반영 대기 목록 1)
- 관련 정책: POL-SMP-002
- 호출하는 화면: 96-DWP Details (LI-SPT-02-01), PCR Plate Details (LI-SPT-03-01), Protocol Info (LI-SPT-01-02)
- 다른 프레임: [LI-SPT-01-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3649-678644)

## 기존 화면

### 화면 글자

- (GNB·LNB) L-IOS 공통 영역 (LNB에 Material Setup, Run, Quick Start, Shut Down)
- 본문은 TI-SPT-01-01과 같음. 다른 점: Sample Location의 "Trolley Name" 대신 "Trolley ID", General의 Start Date/Time 예시 2024-07-01 10:30

### 디스크립션 (원문)

- 원문은 TI-SPT-01-01과 같음. 다른 점 (4 Sample Location 표출 항목):
  - Location Type(검체 투입구 유형) : Trolley, STAT
  - Trolley ID : 시스템에 등록된 Trolley ID 정보 (8자리)
  - Socket ID, Socket Position에 설명 없음 (T-IOS는 "육안으로 확인 가능한 Socket ID 정보", "Socket 내 Sample 위치 정보")

### 케이스

- Case 1. 검체 상태별 데이터 노출 항목
- Case 2. 샘플 투입 유형별 표출 데이터 노출 예시

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | T/L 차이 | 4 Sample Location 항목 "Trolley ID" (T-IOS는 Trolley Name). IA는 짝 화면 동일 | 하나로 정함 | TI-SPT-01-01 4 | 대기 (확인 필요) |
| 2 | 디스크립션 | 4 Socket ID, Socket Position 설명 없음 | T-IOS 원문과 맞춤 | TI-SPT-01-01 4 | 대기 |
| 3 | 화면 정보 | 화면 이름 "Samples Details", 디스크립션 "Sample Details" | IA 기준 이름 하나로 | `ia/ia-screens.csv` | 대기 |
| 4 | 디스크립션 | TI-SPT-01-01 반영 대기 목록 2~10과 같은 표기·내용 (Allplex_HPV28, Module 고유 ID, General의 Status, WELL No., [96 DWP], Reagents 제목, 8-1 팝업 하나만 엶 등) | TI-SPT-01-01과 같이 | TI-SPT-01-01 반영 대기 목록 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.02 | | Sample Detail 화면 보완: 정보 그룹핑 기준 수정, Sample Location 정보 항목 추가, Protocol Info 정보 추가 | 정다예 | Figma 버전 메모 |
| 2.1.11 | 2026-10-08 | 워딩 수정 (언어셋 반영): Tray Floor / Position → Tray Position | 정다예 | Figma 버전 메모 |
