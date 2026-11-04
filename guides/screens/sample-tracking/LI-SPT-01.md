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
service_mode: [Main Mode, Console Mode, TSS Mode]
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

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

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

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 디스크립션 | 3 ".CVS" | .CSV | 오타 | 대기 |
| 2 | T/L 차이 | 3 [Export]가 T-IOS(OS 파일함, 엑셀파일)와 다름. IA는 짝 화면 동일 | 파일 형식은 T-IOS·L-IOS 모두 .csv. 저장 방법만 다름: T-IOS는 OS 파일 탐색기, L-IOS는 경로 저장·USB 저장 Popup (COMM-5-j(4/4)) | POL-COM-006 규칙 1·3·4 | 대기 |
| 3 | 디스크립션 | 0 "Run Start로 통해" | Run Start를 통해 | 오타 | 대기 |
| 4 | 디스크립션 | 2-1 Start Date/Time "Prep 장비에서 바코드 찍은 시간", Progress "상태 값 : COMM-4-a" | TI-SPT-01 반영 대기 목록 6·7과 같이 | `glossary/terms.csv`, `glossary/test-stages.csv` | 대기 (확인 필요) |
| 5 | 디스크립션 | 1-2 Product 목록이 11개로 고정 | 검사 항목 목록 기준 확인 | `glossary/test-items.csv` | 대기 (확인 필요) |
| 6 | 화면 정보 | 버전 메모 없음 (TI-SPT-01은 v2.1.01 Export 수정 메모가 있음) | T/L 버전 맞춤 | Figma 버전 메모 | 대기 (확인 필요) |
| 7 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
