---
cid: TI-IVT-05-T
pair_cid: LI-IVT-05-T
tl_relation: 동일
title: Waste Bin/Bottle
path: Inventory > Waste bin
type: Tab
version: 2.1.11
date: 2026-10-08
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5572-1302256
figma_region: 2.1 2차
---
# TI-IVT-05-T Waste Bin/Bottle

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- IA 화면 이름은 "Waste bin", Figma 화면 정보 경로는 "Inventory > Waste Bin/Bottle Tab"
- T/L 차이: 없음 (LI-IVT-05-T와 같음)
- 관련 정책: POL-INV-001, POL-INV-005, POL-EQP-009, POL-LOD-005
- 호출하는 화면: 없음. 비움 처리(Confirm Empty)는 Material Setup > Empty Waste Bin으로 옮겨짐 (v2.1.11)

## 기존 화면

### 화면 글자

- (GNB·LNB는 T-IOS 공통)
- Summary | Overview | Consumables | Reagents | Waste Bin/Bottle | Usage History
- (Chip) Status | Full 3 | Almost Full 4 | Available 3 | Refresh
- (좌측 카드, 각 Status 아이콘) Sample Preparation: Sample Preparation (1)~(3) | High-throughput Extraction: (1)~(2) | Flexible Extraction | PCR Setup: (1)~(2) | Plate Sealing: PlateSealing (2) | Universal PCR
- (우측 모듈 카드) Sample Preparation (1)~(3) → Unit | Fill Level(%) | Status | Last Emptied Date/Time
- Waste Bin (Upper) | 100% | 2025-09-29 15:57:20 / Liquid Waste Bottle (Upper) | 100% / Waste Bin (Lower) | 100% / Liquid Waste Bottle (Lower) | 100% (Sample Preparation (2)는 99%, 71%, 78% 등)

### 사용 컴포넌트

Interface/triangle-exclamation_Solid (14), Description Number (12), Item_Segment Tabs (6), Chip (3), Frame (1), Square (1), Component 4 (1)

### 디스크립션 (원문)

#### 0. Waste Bin/Bottle 화면

- 정의
- Cureca 장비의 폐기물함 상태를 확인하는 화면
- 모듈별 폐기물 적재 상태(Fill Level) 및 상태 값(Waste Status) 확인 가능
- 노출 조건
- 사용여부가 ‘사용’인 모듈 대상으로만 노출
- Moule(index) + Waste bin/bottle Unit 기준 Row 생성

#### 1. Status Filter(Chip 영역)

- Status
- Full, Almost Full, Available
- 상태값 옆 숫자는 좌측 영역의 Status별 건수가 표기됨
- 동작
- Default : 모든 탭이 미선택 된 상태, 전체 데이터 항목 노출
- Chip 선택 시 : Status 값에 해당하는 데이터만 필터링하여 표기
- 선택 상태의 Chip 재선택 : 선택 해제, 필터링 해제되어 전체 데이터 표기
- 다중 선택 : Chip은 여러 개 동시에 선택 가능하며 선택된 상태값에 해당되는 모든 데이터가 필터링되어 보여짐
- 적용 범위
- 좌측 / 우측 영역 모두 선택된 Status값에 해당 하는 항목만
- 필터링하여 노출

#### 2. 카드 리스트(좌측 영역)

- 데이터 표기
- 모듈 유형을 기준으로 그룹화하여 카드 형태로 표기
- 단, Waste Bin이 존재하지 않는 모듈은 제외
- 동작
- Default : 첫 번째 카드가 선택된 상태로 노출
- 클릭 영역 : 카드 전체 단위로 클릭 가능
- 클릭 시 우측 영역(3)에 해당 카드의 상세 정보 표시
- 정렬(항목 또는 카드 전체 해당)
- 설계서에 정의된 순서에 따라 정렬
- ㄴSample Preparation
- ㄴHigh-throughput Extraction
- ㄴFlexible Extraction
- ㄴPCR Setup
- ㄴPlate Sealing
- ㄴUniversal PCR

#### 2-1. 카드 제목

- 표기 방식
- Waste Bin이 존재하는 모듈 유형을 기준으로 표기

#### 2-2. Status

- 정의
- 각 폐기함의 최대 수량 대비 현재 폐기 수량을 기준하여 상태 표시
- 각 상태별 정의된 아이콘 형식으로 표기
- 상태 정의
- 공통 UX 참고 : COMM-4-a
- 표기 방식
- 동일 모듈 유형을 기준으로 우측 모듈별 폐기함 상태 값이 다를 경우 왼쪽 상태 값은 우선순위(Full>Almost Full>Available)로 표기
- 예시 : Sample Preparation (2)
- ㄴ설계서의 우측 상세에는 Full 1개, Almost Full 1개 표기되어 있지만, 좌측 카드에는 Full 값으로 표기

#### 3. 카드 리스트(우측 영역)

- 정의
- 좌측에서 선택된 모듈 유형별 카드  정보를 각 모듈 인덱스 단위로 표기
- Module[index] + Waste Bin 기준으로 Row 생성
- 정렬
- 상위 항목 : Module[index] 기준 오름차순
- 하위 항목 : 설계서에 정의된 순서 따라 정렬
- 노출 조건(항목 또는 카드 전체 해당)
- Waste Bin이 1개이상 존재하는 Module 기준 노출

#### 3-1. 모듈 개별 카드

- 정의
- 좌측에서 선택한 카드 항목에 해당되는 ‘모듈명’ 기준 구성
- 타이틀
- 시스템에서 관리하고 있는 모듈명(Module[index])

#### 3-2. Unit

- 해당 모듈에 포함되어 있는 폐기물 함을 기준으로
- ‘Unit’기준으로 표기

#### 3-3. Fill Level(%)

- 정의
- 폐기물함 용량 대비 사용량 기준으로 계산한 현황 정보
- 각 폐기물함별 최대 수용 개수(Max Capacity)와 누적 사용 개수(Used Count)를 기반으로 산출
- 데이터 계산식
- (현재까지 누적 사용 개수 / 최대 수용 개수) * 100(%)
- 백분율(%) 형태로 환산하여 표시
- 단, 만재 센서 미감지 상태에서 산출된 계산값이 100% 이상이
- 되더라도 최대 표기 퍼센트는 99%로 제한함
- 동작
- 누적 사용 개수 기반으로 Fill Level(%)을 계산하여 실시간 표기 (최대 99%까지 표기)
- 예외 케이스
- [3-6] 최대 개수 도달/초과 후 만재 센서 미작동 시
- ㄴ 표시 퍼센트 : 99% 고정
- ㄴ Status 상태 : Almost Full 상태 (Warning)
- 최대 개수 도달 전 만재 센서 작동 시
- ㄴ 표시 퍼센트 : 100% 상태로 즉시 변경
- ㄴ Status 상태 : Full 상태 (Error)
- 만재 센서가 없는 폐기물인 경우
- ㄴ 센서 감지 로직을 제외, 계산식에 의해 100% 도달 시
- 100% / Full 상태 (Error)로 처리
- 동작
- Material Setup > Empty Waste Bin에서 Confirm Empty
- 버튼을 통해 비움 처리를 수행한 시점 기준으로 초기화
- 이후 발생하는 폐기물은 0부터 재카운팅

#### 3-4. 모듈 하위 폐기물 별 Status

- 정의
- 각 폐기물함별 실제 카운팅 또는 센서를 기반으로 상태 노출
- 상태 정의
- 공통 UX 참고 : COMM-4-a
- 표기 방식
- Available 상태와 Almost Full 상태는 실제 카운팅을 기반으로
- 상태 노출
- Full은 센서가 동작하는 시점에 상태 노출

#### 3-5. Last Emptied Date/Time

- 정의
- Material Setup > Empty Waste Bin에서 Confirm Empty
- 버튼을 통해 비움 처리를 마지막으로 수행한 시점

#### 4. [Refresh] 버튼

- 버튼 클릭 시 목록의 데이터가 최신 상태로 갱신되어 표시

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | IA 화면 이름 "Waste bin", 화면 "Waste Bin/Bottle" | IA를 Waste Bin/Bottle로 | `ia/ia-screens.csv`, 화면 정보 | 대기 (확인 필요) |
| R02 | 표기 | 0 "상태 값(Waste Status)" | Waste Bin/Bottle Status | `glossary/terms.csv` | 대기 |
| R03 | 디스크립션 | 0 "Moule(index)" | Module (index) | 오타 | 대기 |
| R04 | 디스크립션 | 3-3 "[3-6] 최대 개수 도달/초과 후…" (3-6 없음) | 번호 지움 | 디스크립션 | 대기 |
| R05 | 디스크립션 | 2·3 "Waste Bin이 존재하지 않는 모듈은 제외", "Waste Bin이 1개이상 존재하는 Module" | Waste Bin/Bottle은 Module마다 가진 Waste Bin과 Liquid Waste Bottle을 함께 부르는 이름이므로 "Waste Bin/Bottle이 있는 Module"로 씀. Unit 칸은 Module별 Unit 이름 그대로 | POL-INV-005 규칙 7, `glossary/module-units.csv` | 대기 |
| R06 | 디스크립션 | 3-3 99% 고정 시 Almost Full, Fill Level 70%·100% 기준은 COMM-4-a에만 있음 | 상태값 표 기준(Available 70% 미만, Almost Full 70% 이상, Full 100%)과 99% 제한·센서 규칙을 정책으로 묶음 | `glossary/status-values.csv` | 대기 (확인 필요) |
| R07 | 화면 글자 | "PlateSealing (2)" | Plate Sealing (2) | 띄어쓰기 | 대기 |
| R08 | 디스크립션 | "폐기물함", "폐기함", "폐기물 함", "모듈" 한국어 혼용 | Waste Bin/Bottle, Module | `glossary/terms.csv` | 대기 |
| R09 | 디스크립션 | 1 "Default : 모든 탭이 미선택 된 상태" (Chip을 말함) | 모든 Chip이 선택되지 않은 상태 | 디스크립션 | 대기 |
| R10 | 디스크립션 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | POL-EQP-009 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.11 | 2026-10-08 | 기존 화면 UX/UI 개선. Confirm Empty 기능 이관 (MS 참고) | 정다예 | Figma 버전 메모 |
