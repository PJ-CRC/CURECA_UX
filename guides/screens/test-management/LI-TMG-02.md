---
cid: LI-TMG-02
pair_cid: TI-TMG-02
tl_relation: 동일
title: Test Status
path: Test Management > Test Status
type: Page
version: 2.1.14
date: 2026-10-30
author: 정다예
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-388701
figma_region: 2.1 2차
---
# LI-TMG-02 Test Status

> 기존 화면(작업방 Test Management 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- 관련 정책: POL-SMP-001, POL-SMP-002, POL-SMP-004, POL-SMP-005, POL-SMP-008, POL-SMP-009. 검사 배치 완료 상태는 Test Status 화면에 우선 넣지 않음 (POL-SMP-004 규칙 4)
- 다른 프레임: [LI-TMG-02/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-389211)

## 기존 화면

### 화면 글자

- (GNB) Network Status | Instrument | T-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | LIOS
- (LNB) Dashboard | Material Setup | Test Management (Test Order, Test Status) | Sample Tracking | Instrument | Inventory | Setting | Run | Quick Start | Information | Manual | Keira Knightley
- 본문은 TI-TMG-02와 같음

### 디스크립션 (원문)

- 원문은 TI-TMG-02 0~3-3과 같음 (케이스 참조도 "LI-TMG-02/Case"로 같음)

### 케이스

- Case 1. Test 상태별 데이터 노출 예시
- Case 2. 장비 미구동 시 데이터 표출 예시
- Case 3. Batch 카드 3개 이상 생성 시
- Case 4. 모든 Batch 완료 후 초기화 전

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 표기 | 1 "Patial Running", 화면 글자 "Not tested" | Partial Running, Not Tested | `glossary/terms.csv` | 대기 |
| R02 | 디스크립션 | 1 "CURECA 구동 상태", "장비 구동 상태" | 장비 통합 상태 | `glossary/terms.csv` | 대기 |
| R03 | 디스크립션 | 1 상태별 동작에 Initializing, Stopping, Paused 없음 | 장비 통합 상태값 전체 기준으로 정함 | `glossary/status-values.csv` | 대기 (확인 필요) |
| R04 | 디스크립션 | 3 Batch 카드 유지·초기화 시점이 모호함 | 한 문장으로 | TI-TMG-02 반영 대기 목록 6 | 대기 (확인 필요) |
| R05 | 디스크립션 | 2-2 "Progress>Total", 3-2 "Progress/Total" 표기 다름 | 하나로 | 디스크립션 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | Batch 생성 정책 수정: 단순 인덱스 → 고유 번호 부여 | 정다예 | Figma 버전 메모 |
