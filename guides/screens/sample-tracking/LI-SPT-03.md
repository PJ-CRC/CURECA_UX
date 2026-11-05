---
cid: LI-SPT-03
pair_cid: TI-SPT-03
tl_relation: 동일
title: PCR Plate
path: Sample Tracking > PCR Plate
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-310802
figma_region: 2.1 2차
---
# LI-SPT-03 PCR Plate

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 디스크립션 3 [Export] 설명이 T-IOS(TI-SPT-03)와 다름
- 관련 정책: POL-SMP-002, POL-SMP-005, POL-SMP-010, POL-COM-006
- 호출하는 화면: PCR Plate Details (LI-SPT-03-01), Import/Export Popup (COMM-5-j(4/4))
- 다른 프레임: [LI-SPT-03/Case1](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-309718)

## 기존 화면

### 화면 글자

- (GNB·LNB) L-IOS 공통 영역 (LNB에 Material Setup, Run, Quick Start, Shut Down)
- 본문은 TI-SPT-03과 같음

### 디스크립션 (원문)

- 원문은 TI-SPT-03과 같음. 다른 점:
  - 2 "특정 Plate 행 클릭 시 Plate 상세 노출 : LI-SPT-02-01"
  - 2-2 "표출 예시 : LI-SPT-02/Case1"
  - 3 [Export]: "리스트에 노출된 데이터를 파일(.CVS) 형태로 저장", "버튼 선택 시, 팝업 노출 : COMM-5-j(4/4)"

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 2 상세 화면 "LI-SPT-02-01", 2-2 케이스 "LI-SPT-02/Case1" (96-DWP 화면 참조) | LI-SPT-03-01, LI-SPT-03/Case1 | `ia/ia-screens.csv` | 대기 |
| R02 | 디스크립션 | 3 ".CVS" | .CSV | 오타 | 대기 |
| R03 | T/L 차이 | 3 [Export]가 T-IOS(엑셀파일)와 다름. IA는 짝 화면 동일 | 파일 형식은 T-IOS·L-IOS 모두 .csv. 저장 방법만 다름: T-IOS는 OS 파일 탐색기, L-IOS는 경로 저장·USB 저장 Popup (COMM-5-j(4/4)) | POL-COM-006 규칙 1·3·4 | 대기 |
| R04 | 디스크립션 | 2-1 Start Date/Time "96-DWP가 PCR Setup 모듈에 진입해" | PCR Setup Module이 PCR Plate를 넘겨받아 그 Barcode를 읽은 시점 (POL-SMP-002 규칙 3) | POL-SMP-002 | 대기 |
| R05 | 상태값 | 1-2 Status 목록에 Not Tested, 2-1 Status "검체의 검사 진행 상태" | Status 목록에서 Not Tested를 뺌: All, Running, Completed, Failed. Status는 Plate 상태 (POL-SMP-010) | `glossary/status-values.csv`, POL-SMP-010 | 대기 |
| R06 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.11 | 2026-10-08 | 테이블 데이터 수정: 검사 단계별 모듈 명 열 삭제, 검사 시작 및 종료 일시 추가 | 정다예 | Figma 버전 메모 |
