---
cid: LI-QUK
pair_cid:
tl_relation: 단독
title: Quick Start
path: Quick Start
type: Popup
version: 2.1.11
date: 2026-10-08
author: 정다예
service_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3373-196532
figma_region: 2.1 2차
---
# LI-QUK Quick Start

> 기존 화면(작업방 Run/Quick Start 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Run Preparation 단계(LI-RUN-01 ~ LI-RUN-04) 대신 요약 Popup 하나로 확인하고 검사 실행. 진입 경로는 LNB > Quick Start, Test Status > Quick Start
- 관련 정책: POL-EQP-003 (Quick Start 버튼 활성 조건), POL-SMP-005, POL-SMP-007, POL-INV-002, POL-INV-003, POL-INV-005
- 호출하는 화면: Run Preparation Popup (LI-RUN-P, 실행 조건 불만족 시), Confirm_001, Confirm_002
- 다른 프레임: [LI-QUK/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-240453) (소모품 / 시약 데이터 로딩 중)

## 기존 화면

### 화면 글자

- Quick Start
- Check samples, consumables, and reagents for the run
- Total Sample 1,500 | STAT Sample
- Check consumables stock: Insufficient | Low | Sufficient
- Check reagent stock: Insufficient | Low | Sufficient | Expired reagents are discarded or returned unused, depending on the instrument.
- Check test protocol: Pre-Treatment Protocol Test Protocol AA | Extraction Protocol SG protocol (예시 Test Protocol BB)
- Check waste bin/bottle: Full | Almost Full | Available
- Cancel | Quick Start

### 사용 컴포넌트

Table (11), Table/Filled Table Cell (10), Description Number (9), Interface/Check (4), Popup/Popup Middle Text (2), Contents/Scroll Bar (1), Square (1), Interface/Info_Circle_Outlined (1), Square Text Badge (1)

### 디스크립션 (원문)

#### 0. Quick Start 팝업

- 노출 조건
- Run 실행 조건이 모두 만족할 시
- ㄴ단, Run 실행 조건이 불만족 시 LI-RUN-P 팝업 노출
- 표출 항목
- 검사 대상 검체 수 영역
- Run 실행을 위해 필요한 소모품 수량 기준 재고 상태
- Run 실행을 위해 필요한 시약 수량 기준 재고 상태
- Run 실행을 위해 필요한 시약 유효기한 상태

#### 1. 팝업 문구

- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Quick Start
- 내용 : Check samples, consumables, and reagents for the run

#### 2. Run 대상 검체 수 영역

- 노출 항목
- Total Sample : (트롤리에 도킹된)검사 대상 총 검체 수
- STAT Sample : (트롤리에 도킹된)검사 대상 검체 중 응급 검체 수

#### 3. Run 실행을 위해 필요한 소모품 수량 기준 재고 상태 영역

- 타이틀 : Check consumables stock
- 노출 항목
- Insufficient : 재고가 0인 소모품 항목 수
- Low : 재고가 부족한 소모품 항목 수
- Sufficient : 재고가 충분한 소모품 항목 수
- 데이터 집계 기준
- 모듈 하위의 Unit 기준 카운팅
- 공통 UX 참고 : COMM-4-a

#### 4. Run 실행을 위해 필요한 시약 수량 기준 재고 상태 영역

- 타이틀 : Check reagent stock
- 노출 항목
- nsufficient : 재고가 0인 시약 항목 수
- Low : 재고가 부족한 시약 항목 수
- Sufficient : 재고가 충분한 시약 항목 수
- 데이터 집계 기준
- 모듈 하위의 Unit 기준 카운팅
- 공통 UX 참고 : COMM-4-a

#### 4-1. 시약 유효기한 만료 문구

- 노출 조건
- 현재 적재된 Location(Trolley+Module+Storage)
- 내 유효기한이 만료된 시약이 1개라도 있을 경우 노출
- 노출 문구
- Expired reagents are discarded or returned unused, depending on the instrument.

#### 5. Run 실행 시 적용되는 프로토콜 항목 영역

- 타이틀 : Check test protocol
- 노출 항목
- Pre-Treatment Protocol : Protocol Setting 메뉴에서
- Applied 된 Protocol Name 노출
- Extraction Protocol : Protocol Setting 메뉴에서
- Applied 된 Protocol Name 노출

#### 6. 장비 내 waste bin/bottle 상태 영역

- 타이틀 : Check waste bin/bottle
- 노출 항목
- Full(만재) : 폐기함/폐액통 적재율이 100%인 경우
- Almost Full(만재 임박) : 폐기함/폐액통 적재율이 70%이상인 경우
- Available(여유) : 폐기함/폐액통 적재율이 70%미만인 경우
- 데이터 집계 기준
- 모듈별 하위 폐기함 기준으로 카운팅
- 공통 UX 참고 : COMM-4-a

#### 7. [Cancel] 버튼

- 클릭 시 팝업 노출 : Confirm_001

#### 8. [Quick Start] 버튼

- 클릭 시, 팝업 노출 : Confirm_002

### 케이스

- Case 1. 소모품 / 시약 데이터 로딩 중 Case ([LI-QUK/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1897-240453))

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 0 표출 항목에 Check test protocol(5), Check waste bin/bottle(6)이 빠짐. "시약 유효기한 상태"는 4-1 문구만 남음 (v2.1.04에서 Under 30 Days 삭제) | 표출 항목을 1~6과 맞춤 | 디스크립션, 버전 메모 | 대기 |
| R02 | 디스크립션 | 4 "nsufficient" | Insufficient | 오타 | 대기 |
| R03 | 상태값 | 3 Insufficient "재고가 0인", Low "재고가 부족한" | TI-IVT-03-T 반영 대기 목록 1과 같이 (정의는 상태값 표, 화면 문구는 예시) | `glossary/status-values.csv 재고 상태`, POL-INV-003 | 대기 |
| R04 | 상태값 | 4 Reagent에 재고 상태(Insufficient / Low / Sufficient)를 씀 | 디스크립션에 넣음: Reagent도 Consumable과 같은 재고 상태(Sufficient, Low, Insufficient)를 씀 | `glossary/status-values.csv 재고 상태`, POL-INV-003 | 대기 |
| R05 | 표기 | 4-1 "유효기한", 버전 메모 "유효기간" | Expiration Date | `glossary/terms.csv` | 대기 |
| R06 | 디스크립션 | 2 "(트롤리에 도킹된)" | STAT Storage Sample을 Total Sample·STAT Sample에 어떻게 셈할지 팀 논의 후 정함 | PD-0003, LI-RUN-01 2 | 대기 (확인 필요) |
| R07 | 디스크립션 | 5 Protocol은 Applied 값만 보여 줌. Allow Protocol Changes Before Test가 ON이어도 Quick Start에서는 바꿀 수 없는지 설명 없음 | 디스크립션에 넣음: Quick Start는 Protocol Setting의 Applied Protocol로만 Run함. Allow Protocol Changes Before Test가 On이어도 여기서는 Protocol을 고를 수 없음 | POL-SMP-007 규칙 8 | 대기 |
| R08 | 디스크립션 | 6 "장비 내 waste bin/bottle", "폐기함", 화면 "Check waste bin/bottle" | Waste Bin/Bottle | `glossary/terms.csv` | 대기 |
| R09 | 표기 | 화면 "SG protocol" | LI-RUN-02-01 반영 대기 목록 6과 같이 통일 | 화면 글자 | 대기 |
| R10 | 알럿 | 7 [Cancel] → Confirm_001. 카탈로그 Confirm_001 조건은 "Quick Start 진행 중 [X] 선택 시" | 조건을 [Cancel]로 맞추거나 [X]를 화면에 둠 | `policy/alert-catalog.csv` Confirm_001 | 대기 (확인 필요) |
| R11 | 알럿 | 8 [Quick Start] → Confirm_002. 카탈로그 조건은 "[Run Start] 선택 시" | 조건에 Quick Start 추가 | `policy/alert-catalog.csv` Confirm_002 | 대기 |
| R12 | 디스크립션 | 0 "Run 실행 조건" 내용이 없음 (LI-RUN-P 항목을 가리키는 것으로 보임) | LI-RUN-P 항목으로 적고, POL-EQP-003 규칙 6(장비 통합 상태)과 함께 적음 | POL-EQP-003 | 대기 |
| R13 | 화면 정보 | 경로 "LNB > Quick Start / Test Status > Quick Start" | IA 경로 Quick Start. Test Status 화면(TI-TMG-02/LI-TMG-02)에 Quick Start 진입이 있는지 확인 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R14 | 정책 반영 | 4-1 만료 Reagent 안내 "Expired reagents are discarded or returned unused, depending on the instrument." | LI-RUN-03 반영 대기 목록 13과 같이 문구 유지. 만료 Reagent가 있어도 [Quick Start]를 할 수 있음 | POL-INV-004 규칙 4, POL-SMP-007 규칙 3 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.04 | | 유효기한 상태 수정 (Under 30 Days 삭제). 유효기간 초과 시약 안내 문구 추가 | 정다예 | Figma 버전 메모 |
| 2.1.11 | 2026-10-08 | 폐기물 상태 정보 추가 | 정다예 | Figma 버전 메모 |
