---
cid: TI-SPT-02-01
pair_cid: LI-SPT-02-01
tl_relation: 동일
title: 96-DWP Details
path: Sample Tracking > 96 DWP > Details
type: Popup
version: 2.0
date: 2026-06-15
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-261530
figma_region: 2.1 2차
---
# TI-SPT-02-01 96-DWP Details

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- IA 화면 이름은 "Details", Type은 Popup. 화면은 96-DWP 목록 오른쪽에서 밀려 나오는 상세 영역
- 관련 정책: (정책 작성 전)
- 호출하는 화면: Samples (TI-SPT-01, 3 Samples 리스트 클릭 시 이동)
- 다른 프레임: [TI-SPT-02-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-262434)

## 기존 화면

### 화면 글자

- (왼쪽) TI-SPT-02 96-DWP 목록 (축소)
- Plate Details | X
- Plate Info | Progress
- ID | PL0005001 | Total Samples | STAT Samples | Reagent | STARMag M96 Kit | Barcode | EX2923G01LB
- (Plate 그림) A~H 행, 1~12 열 | Reset
- Well No. | Sample ID | Product | Sample Type | STAT
- C08 | AA0005008 | RP1, PB | Saliva
- C09 | AA0005038 | RP1, RP2, RP3 | Aspirate
- D05 | AA0005583 | RP1 | Sputum
- D08 | AA0005203 | RP2, RP3 | Saliva

### 디스크립션 (원문)

#### 0. 96-DWP 상세 화면

- 정의
- Plate의 기본 정보 및 검사 단계 정보
- 96-DWP에 분주된 검체별 검사 정보

#### 1. Plate 기본 정보 영역(Tab)

- 정의
- 검사 정보 항목에 따른 탭(Tab) 메뉴 구성
- 표출 예시 : TI-SPT-02-01/Case → Case 1
- 동작
- 활성 탭 변경 시, 해당 단계의 하위 데이터 세트를 동기화하여 노출
- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- Tab 표출 항목
- Plate Info
- Progress

#### 1-1. Plate Info : Plate 기본 정보 영역

- 정의
- ID, 분주된 샘플 수, 사용 시약 정보
- 표출 항목
- ID : Plate 고유 ID (바코드 정보)
- Total Samples : 96-DWP에 분주된 Sample 개수
- STAT Samples : 96-DWP에 분주된 Sample 중 STAT 개수
- Reagent : Plate에 사용된 시약 명 정보
- Barcode : 바코드 체계 참고 (COMM-4-b)
  - ㄴ 시약 유형에 따라 바코드가 2개로 표출될 수 있음
  - ㄴ 표출 케이스 : TI-SPT-02-01/Case → Case 1

#### 1-2. Progress : 검사 단계 영역

- 정의
- 96-DWP의 검사 단계별 검사 수행 장비명
- 96-DWP의 검사 단계별 검사 시작 시간, 완료 시간
- 표출 항목
- Module : 검사 단계별 검사 수행 Module명
- Start Date/Time : 96-DWP를 해당 단계 장치에 놓는 시점
- End Date/Time : 96-DWP가 해당 단계 작업이 끝난 후 장치에서 가져나가는 시점

#### 2. Plate 선택 영역

- 정의
- 장비 내 로딩된 96-DWP의 Well 위치별 검체 배치 현황 정보
- 표출 케이스 : TI-SPT-02-01/Case → Case 2
- 동작
- 특정 검체 선택 시, 하단 리스트 내 검체 정보 노출
- 개별 Well 선택 시 Selected 상태로 변경
- Selected 상태에서 한번 더 선택시 Unselected 상태로 변경
- 최대 멀티 선택 가능한 검체 수 : 96개
- 행/열 단위 헤더는 단순 정보 영역으로 클릭 불가
- Default : 모든 검체가 Unselected 상태

#### 2-1. [Select All] 버튼

- 동작
- 클릭 시 모든 검체를 일괄 Selected 상태로 변경
- 한번 더, 클릭 시 모든 검체를 일괄 Unselected 상태로 변경

#### 2-2. [Reset] 버튼

- 동작
- 현재 선택된 모든 검체를 비선택Unselected 상태로 일괄 변경

#### 3. Plate 내 Samples 리스트

- 정의
- Plate에서 Selected 상태인 Sample 정보 리스트
- Selected 상태인 Sample가 없을 경우 하위 문구 노출
- Please select a sample from the Plate.
- 표출 케이스 : TI-SPT-02-01/Case → Case 2
- 동작
- 하나의 리스트 클릭 시 [Samples] 메뉴 내 해당 검체 정보로 이동
- 단, [Samples] 메뉴는 검사 단위로 표출되고 있어, 해당 검체의 모든 검사 항목이 소팅된 상태로 노출
- 검사 항목 중 첫번째 항목의 상세가 펼쳐진 상태로 노출
- 정렬
- Well No. 기준으로 오름차순

#### 3-1. 리스트 표출 항목

- Well No.
  - Plate에서 Selected 상태인 Sample 위치(좌표) 정보
- Sample ID
  - 상위 Plate에서 Selected 상태인 Sample ID 정보
- Product
  - 상위 Sample의 전체 검사 항목 정보
- Sample Type
  - 상위 Sample 검체 타입 정보
- STAT
  - 선택된 검체의 응급 여/부 상태 정보

#### 4. [X] 버튼

- 클릭 시, 상세 정보 닫힘 (리스트 노출)

### 케이스

- Case 1. Plate 기본 정보 영역(Tab) 노출 데이터 항목
- Case 2. Plate / List 표출 상태 및 유형

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "96-DWP Details", 경로 "Sample Tracking > 96-DWP" | IA 기준 (96-DWP > Details) | `ia/ia-screens.csv` | 대기 |
| R02 | 화면 글자 | 2-1 [Select All]이 디스크립션에 있는데 화면 글자에는 [Reset]만 보임 | 화면에 버튼이 있는지 확인 | 화면 글자 | 대기 (확인 필요) |
| R03 | 디스크립션 | 2-2 "비선택Unselected", 3 "Sample가" | Unselected, Sample이 | 오타 | 대기 |
| R04 | 디스크립션 | 1-2 "검사 수행 장비명", "Module명", "해당 단계 장치" | Module 이름 (번호) 표기 기준으로 | `glossary/terms.csv` Module | 대기 |
| R05 | 디스크립션 | 3 이동 화면을 "[Samples] 메뉴"로만 적음 | TI-SPT-01 (상세 TI-SPT-01-01 펼침) | `ia/ia-screens.csv` | 대기 |
| R06 | 디스크립션 | 3 안내 문구 "Please select a sample from the Plate." | 언어셋 ID로 관리 | `rules/language-set.md` | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
