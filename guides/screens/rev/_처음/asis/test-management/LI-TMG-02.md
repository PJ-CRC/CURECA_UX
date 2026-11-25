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
client_mode: [Main Mode, Console Mode, MS Mode]
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

> 기존 화면(기존 작업방 Test Management 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

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
