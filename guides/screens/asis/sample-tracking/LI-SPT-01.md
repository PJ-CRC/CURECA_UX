---
cid: LI-SPT-01
pair_cid: TI-SPT-01
tl_relation: 동일
title: Samples
path: Sample Tracking > Samples
type: Page
version: 2.0
date: 2026-06-15
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-112005
figma_region: 2.1 2차
---
# LI-SPT-01 Samples

> 기존 화면(기존 작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: 디스크립션 3 [Export] 설명이 T-IOS(TI-SPT-01)와 다름
- 관련 정책: POL-SMP-001, POL-SMP-002, POL-SMP-003, POL-SMP-005, POL-COM-006
- 호출하는 화면: Samples Details (LI-SPT-01-01), Import/Export Popup (COMM-5-j(4/4))
- 다른 프레임: [LI-SPT-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-112357)

## 기존 화면

### 화면 글자

- (GNB·LNB) L-IOS 공통 영역 (LNB에 Material Setup, Run, Quick Start, Shut Down이 있고 Statistical Analysis는 없음)
- 본문은 TI-SPT-01과 같음

### 디스크립션 (원문)

- 원문은 TI-SPT-01 0~2-2, 4와 같음 (상세 화면 참조 "TI-SPT-01-01", 케이스 참조 "TI-SPT-01/Case"도 LI로 바뀐 것 외에 같음). 다른 절:

#### 3. [Export] 버튼

- 리스트에 노출된 데이터를 파일(.CVS) 형태로 저장
- 버튼 선택 시, 팝업 노출 : COMM-5-j(4/4)

### 케이스

- Case 1. Sample 상태별 데이터 노출 예시
- Case 2. Progress 상태 정보 Tooltip
