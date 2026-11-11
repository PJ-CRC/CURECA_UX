---
cid: LI-TMG-01
pair_cid: TI-TMG-01
tl_relation: 동일
title: Test Order
path: Test Management > Test Order
type: Page
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-435392
figma_region: 2.1 2차
---
# LI-TMG-01 Test Order

> 기존 화면(작업방 Test Management 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 디스크립션 4 [Import]·[Export] 설명이 T-IOS(TI-TMG-01)와 다름
- 관련 정책: POL-SMP-001, POL-SMP-002, POL-SMP-003, POL-SMP-005, POL-SMP-006, POL-SMP-008, POL-COM-006
- 호출하는 화면: Alert_031 (Import 파일 형식 오류), Import/Export Popup (COMM-5-j(4/4))
- 다른 프레임: [LI-TMG-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-435761)

## 기존 화면

### 화면 글자

- (GNB) Network Status | Instrument | T-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | LIOS
- (LNB) Dashboard | Material Setup | Test Management (Test Order, Test Status) | Sample Tracking | Instrument | Inventory | Setting | Run | Quick Start | Information | Manual | Keira Knightley
- 본문은 TI-TMG-01과 같음

### 디스크립션 (원문)

- 원문은 TI-TMG-01 0~3, 5와 같음. 다른 절:

#### 4. 리스트 제어 버튼

- [Refresh] 버튼
  - 설정된 조회 조건 유지, 리스트 데이터를 최신 상태로 업데이트
- [Import] 버튼
  - 외부 파일(.CVS)을 업로드하여 검사 오더 데이터를 일괄 등록
  - 버튼 선택 시, 팝업 노출 : COMM-5-j(4/4)
  - 단, 파일 형식이 올바르지 않는 경우 Alert_031 팝업 노출
- [Export] 버튼
  - 리스트에 노출된 데이터를 파일(.CVS) 형태로 저장
  - 버튼 선택 시, 팝업 노출 : COMM-5-j(4/4)

### 케이스

- Case 1. Sample 상태별 데이터 노출 예시 (LI-TMG-01/Case)

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 4 ".CVS" | .CSV | 오타 | 대기 |
| R02 | T/L 차이 | 4 [Import]·[Export]: L-IOS는 ".CVS 파일, COMM-5-j(4/4) 팝업", T-IOS는 "OS 파일함, 엑셀파일". IA는 짝 화면 동일 | Export 파일 형식은 .csv, 저장 방법은 T-IOS OS 파일 탐색기 / L-IOS 경로·USB Popup (POL-COM-006). Import는 .csv와 엑셀을 모두 받음 (고객 논의 CA-0008) | POL-COM-006 규칙 5 | 대기 |
| R03 | 디스크립션 | 2-1 Start Date/Time "Prep 장비에서 바코드 찍은 시간" | 어느 Module인지 표준어로 | `glossary/terms.csv` Prep 시스템, Module | 대기 (확인 필요) |
| R04 | 디스크립션 | 2 "Test order 리스트", "응급 서랍" | Test Order 리스트, 표준어(STAT Storage, Drawer) | 화면 글자, `glossary/terms.csv` | 대기 |
| R05 | 디스크립션 | 1-2 Product 목록이 11개로 고정 | 검사 항목 목록 기준 확인 | `glossary/test-items.csv` | 대기 (확인 필요) |
| R06 | 디스크립션 | 2 정의는 "도킹된 상태의 검체 리스트"인데 Status에 Ordered가 있음 | 목록 대상 확인 | `glossary/status-values.csv` | 대기 (확인 필요) |
| R07 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | | [4] Import 선택 시 노출 내용 수정 | 정다예 | Figma 버전 메모 |
| 2.1.11 | 2026-10-08 | 테이블 내 데이터 정렬 순서 변경 | 정다예 | Figma 버전 메모 |
