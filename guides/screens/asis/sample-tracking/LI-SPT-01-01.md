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
client_mode: [Main Mode, Console Mode, MS Mode]
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

> 기존 화면(기존 작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

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
