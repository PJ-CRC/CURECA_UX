---
cid: TI-IVT-06-T
pair_cid: LI-IVT-06-T
tl_relation: 동일
title: Inventory Usage History
path: Inventory > Usage History
type: Tab
version: 2.1.11
date: 2026-10-16
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5635-254441
figma_region: 2.1 2차
---
# TI-IVT-06-T Inventory Usage History

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: LI-IVT-06-T는 Ver 0.6 프레임만 있어 비교 기준이 다름 (LI-IVT-06-T 참고)
- 관련 정책: POL-INV-001, POL-INV-006, POL-EQP-009, POL-COM-006
- 호출하는 화면: 없음
- 다른 프레임: [TI-IVT-06-T Ver 2.0 (2026-06-15)](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3412-232534) (같은 2차 영역의 이전 프레임)

## 기존 화면

### 화면 글자

- (GNB·LNB는 T-IOS 공통)
- Summary | Overview | Consumables | Reagents | Waste Bin/Bottle | Usage History
- Item Type | Name | Barcode | Module-Unit | Reset | Search
- All | Name | Barcode | Select a module | Select a module first | 2026-03-17 ~ 2026-03-21
- Items | Export
- Item Type | Name | Barcode | Usage | Module | Unit | Date/Time
- Reagents | 5X RP2 MOM, Real-time One-step Enzyme, 5X Real-time One-step Buffer | PR01ST0112314124124 | Plate Sealing(1) | Plate Sealing | 2026-03-21 11:20:11
- Reagents | PBS Standard Tube | PR02PBS012312312312 | Prep Consumable Storage(1) | Trolley | 2026-03-21 15:57:11
- Consumable | 1000 μL Tip | Prep Consumable Storage(1) | Trolley | 2026-03-20 15:57:11
- Consumable | Empty Standard Tube | PR01ST0112312412323 | Prep Consumable Storage(1) | Plate Sealing | 2026-03-20 15:57:11
- Consumable | PCR Plate | PR01ST0112312412323 | PCR Setup(1) | PCR Setup | 2026-03-20 15:57:11
- (같은 형식 줄 5개 더)

### 사용 컴포넌트

Table (25), Table/Filled Table Cell (20), Item_Segment Tabs (6), Form/Dropdown Box (3), Square (3), Description Number (3), Title (2), Form/Input Text Box (2)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비의 Storage에 사용되느 소모품 또는 시약의 사용 이력을 확인하는 화면이다.
- 진입 방법
- LNB의 ‘Inventory의 ‘Usage Tab’을 통해 진입할 수 있다.
- 데이터 기준
- 사용여부가 ‘사용’인 모듈 대상으로만 노출된다.
- 장비가 사용 후 폐기하는 시점기준으로 이력 관리
- Unit + Barcode + Usage+Date/Time 기준 Row 생성

#### 1. 검색 영역

- 공통 검색 컴포넌트: ‘COMM-5-s, Type3’ 참고
- Item Type
- Default: All / 데이터: All, Consumable, Reagent
- Name: 입력값을 기준으로 부분 일치(Like) 검색 수행
- Barcode: 입력값을 기준으로 부분 일치(Like) 검색 수행
- Module-Unit 조합형(index형)
- Module name 선택 후 해당 Module의 Unit list 중에 선택할 수 있는 방식
- Module: Module Name 기준으로 선택(오름차순)
- Dropdown 적용 방식: COMM-5-f(1/2)의 type1
- Unit: 선택된 Module에 속한 Storage Unit 리스트를 호출하여 선택(오름차순)
- 기간 검색
- 오늘 기준 최근 7일 범위로 자동 설정됨
- Default: 시작일-7일 전 ~ 종료일-Today
- 오늘 기준 미래일자는 선택 불가
- 기간 선택 정책: 최대 1년

#### 2. 목록

- 정렬기준: Date/Time 기준 최신순(내림차순)
- 목록 노출 기준
- 오늘 기준 7일간의 내용만 목록에 노출
- Item Type: Consumable 또는 Reagent로 표시됨
- Name: 소모품명 또는 시약명 표시됨
- Barcode: 아이템의 Barcode를 표시
- Usage: 폐기 시점의 사용 개수를 표기
- Module: 해당 소모품을 저장하는 모듈명을 표시
- Unit: 해당 소모품을 저장했던 Storage Unit명을 표시
- Date/Time: 폐기 시점 표시됨 (시스템 기준)

#### 3. [Export] 버튼

- 리스트에 노출된 데이터를 로컬 PC에 파일(.CVS) 형태로 저장

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 글자 | 목록 Item Type 값 "Reagents" (디스크립션 데이터는 Consumable, Reagent) | Reagent | 디스크립션 1 | 대기 |
| R02 | 화면 글자 | Usage 열 값이 예시 줄에 없음, 일부 줄은 Barcode도 없음 | 예시 값 채움 | 화면 글자 | 대기 |
| R03 | 화면 글자 | Prep Consumable Storage(1)의 Unit이 "Plate Sealing"인 줄, Plate Sealing(1)의 Unit이 "Trolley"인 줄 | 실제 Module-Unit 조합으로 | `glossary/module-units.csv` | 대기 |
| R04 | 디스크립션 | 2 "오늘 기준 7일간의 내용만 목록에 노출" / 1 기간 검색 최대 1년 | 기본 조회 기간이 7일이라는 뜻으로 고침 | 디스크립션 | 대기 (확인 필요) |
| R05 | 디스크립션 | 3 ".CVS" | .CSV | 오타 | 대기 |
| R06 | 디스크립션 | 0 "'Usage Tab'", "사용되느" | Usage History Tab, 사용되는 | 오타, IA | 대기 |
| R07 | 표기 | "Plate Sealing(1)", "Prep Consumable Storage(1)" | Plate Sealing (1), Prep Consumable Storage (1) | 이름 (번호) 띄어쓰기 | 대기 |
| R08 | 디스크립션 | 0 "사용여부가 '사용'인 모듈", "소모품", "시약" | Enabled인 Module, Consumable, Reagent | POL-EQP-009, `glossary/terms.csv` | 대기 |
| R09 | 디스크립션 | 0 이력 기준 "장비가 사용 후 폐기하는 시점" / TI-IVT-03-T 2-4 정책 안내는 "저장 장치로 반환 시"에도 사용 수량을 이력에 기록 | 디스크립션에 넣음: Usage History는 폐기할 때만 기록함 (사용 완료, 최대 사용 횟수 초과, Expiration Date 경과). 반환할 때는 기록하지 않음 | POL-INV-006 규칙 1 | 대기 |
| R10 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.11 | 2026-10-16 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
