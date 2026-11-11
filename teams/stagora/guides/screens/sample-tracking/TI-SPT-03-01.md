---
cid: TI-SPT-03-01
pair_cid: LI-SPT-03-01
tl_relation: 동일
title: PCR Plate Details
path: Sample Tracking > PCR Plate > Details
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-306131
figma_region: 2.1 2차
---
# TI-SPT-03-01 PCR Plate Details

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- IA 화면 이름은 "Details", Type은 Popup. 화면은 PCR Plate 목록 오른쪽에서 밀려 나오는 상세 영역
- 96-DWP Details(TI-SPT-02-01)와 같은 구조에 대조군·검사 항목 범례와 Kit 열이 더 있음
- 관련 정책: (정책 작성 전)
- 호출하는 화면: Samples (TI-SPT-01, 3 Samples 리스트 클릭 시 이동)
- 다른 프레임: [TI-SPT-03-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-304654)

## 기존 화면

### 화면 글자

- (왼쪽) TI-SPT-03 PCR Plate 목록 (축소)
- Plate Details | X
- Plate Info | Progress
- ID | PL0005001 | Total Products | STAT Products
- (Plate 그림) A~H 행, 1~12 열 | 범례 Negative, Positive | 검사 항목 범례 RP1, RP2, RP3, PB | Reset
- Well No. | Sample ID | Product | Sample Type | Kit | STAT
- A01 | AA0005001 | Allplex™ Respiratory Panel 1
- G05 | Negative control | Allplex™ Respiratory Panel 2
- H05 | Positive control | Allplex™ Respiratory Panel 2

### 디스크립션 (원문)

#### 0. PCR Plate 상세 화면

- 정의
- Plate의 기본 정보 및 검사 단계 정보
- PCR Plate에 분주된 검체별 검사 단위 정보

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
- ID, 분주된 검사 항목 수 정보
- 표출 항목
- ID : Plate 고유 ID (바코드 정보)
- Total Products : PCR Plate에 분주된 Product 개수
- STAT Products : PCR Plate에 분주된 Product 중 STAT 개수

#### 1-2. Progress : 검사 단계 영역

- 정의
- PCR Plate의 검사 단계별 검사 수행 장비명
- PCR Plate의 검사 단계별 검사 시작 시간, 완료 시간
- 표출 항목
- Module : 검사 단계별 검사 수행 Module명
- Start Date/Time : PCR Plate를 해당 단계 장치에 놓는 시점
- End Date/Time : PCR Plate가 해당 단계 작업이 끝난 후 장치에서 가져나가는 시점

#### 2. Plate 선택 영역

- 정의
- 장비 내 로딩된 PCR Plate의 Well 위치별 검체 배치 현황 정보
- 표출 케이스 : TI-SPT-03-01/Case → Case 2
- 동작
- 특정 검체 선택 시, 하단 리스트 내 검체 정보 노출
- 개별 Well 선택 시 Selected 상태로 변경
- Selected 상태에서 한번 더 선택시 Unselected 상태로 변경
- 최대 멀티 선택 가능한 검체 수 : 96개
- 행/열 단위 헤더는 단순 정보 영역으로 클릭 불가
- Default : 모든 검체가 Unselected 상태

#### 2-1. 대조군 범례 정보 영역

- 표출 항목
- Positive(Positive Control) : 양성 대조군
- Negative(Negative Control) : 음성 대조군

#### 2-2. 검사 항목 범례 정보 영역

- 정의
- 상위 PCR Plate에 검사한 항목에 대한 범례 정보
- 검사 항목
- RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P, Allplex HPV28, STI-12

#### 2-3. [Select All] 버튼

- 동작
- 클릭 시 모든 검체를 일괄 Selected 상태로 변경
- 한번 더, 클릭 시 모든 검체를 일괄 Unselected 상태로 변경

#### 2-4. [Reset] 버튼

- 동작
- 현재 선택된 모든 검체를 비선택Unselected 상태로 일괄 변경

#### 3. Plate 내 Samples 리스트

- 정의
- Plate에서 Selected 상태인 Sample 정보 리스트
- Selected 상태인 Sample가 없을 경우 하위 문구 노출
- Please select a sample from the Plate.
- 표출 케이스 : TI-SPT-03-01/Case → Case 2
- 동작
- 말줄임 처리된 항목 : COMM-5-o
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
  - 단, 대조군 선택 시 표출 정보 : TI-SPT-02-01/Case → Case 3
- Product
  - 상위 Sample의 단일 단위 검사 항목 정보
- Sample Type
  - 상위 Sample의 유형 정보
- Kit
  - Well에 사용된 시약 명 정보
- STAT
  - 선택된 검체의 응급 여/부 상태 정보

#### 4. [X] 버튼

- 클릭 시, 상세 정보 닫힘 (리스트 노출)

### 케이스

- Case 1. Plate 기본 정보 영역(Tab) 노출 데이터 항목
- Case 2. Plate / List 표출 상태 및 유형
- Case 3. C(대조군) Well 선택 시 표출 데이터

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 1 "TI-SPT-02-01/Case → Case 1", 3-1 "TI-SPT-02-01/Case → Case 3" (Case 3은 TI-SPT-03-01/Case에만 있음) | TI-SPT-03-01/Case | 케이스 프레임 | 대기 |
| R02 | 화면 정보 | 화면 이름 "PCR Plate Details", 경로 "Sample Tracking > PCR Plate" | IA 기준 (PCR Plate > Details) | `ia/ia-screens.csv` | 대기 |
| R03 | 디스크립션 | 2-2 검사 항목 범례가 10개로 고정 | Plate에서 검사한 항목만 보이는지, 목록 기준 확인 | `glossary/test-items.csv` | 대기 (확인 필요) |
| R04 | 디스크립션 | 2-4 "비선택Unselected", 3 "Sample가" | Unselected, Sample이 | 오타 | 대기 |
| R05 | 디스크립션 | 3-1 Kit "시약 명", 화면 예시는 제품 이름(Allplex™ Respiratory Panel 1) | Product Name 표준어로 | `glossary/terms.csv` Product Name | 대기 |
| R06 | 디스크립션 | 1-2 "검사 수행 장비명", "Module명" | Module 이름 (번호) 표기 기준으로 | `glossary/terms.csv` Module | 대기 |
| R07 | 화면 글자 | 2-3 [Select All]이 디스크립션에 있는데 화면 글자에는 [Reset]만 보임 | 화면에 버튼이 있는지 확인 | 화면 글자 | 대기 (확인 필요) |
| R08 | T/L 차이 | Plate Info 라벨 "Total Products / STAT Products" (L-IOS는 "Product Total / Product STAT") | 하나로 | LI-SPT-03-01 화면 글자 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
