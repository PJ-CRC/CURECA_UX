---
cid: TI-STN-01-02
pair_cid: LI-STN-01-02
tl_relation: 기능 추가
title: Device Usage Setting
path: Policy Setting > Device Usage Setting
type: Popup
version: 2.0
date: 2026.06.15
author: BREX
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-523611
---
# TI-STN-01-02 Device Usage Setting

> 기존 화면(작업방 `Policy Setting_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- 팝업 제목은 `Extraction Module Usage Setting` (패널 화면 이름은 `Device Usage Setting`)
- T/L 차이: T-IOS는 체크박스로 설정하고 [Close] | [Apply]. L-IOS(LI-STN-01-02)는 View 화면이고 [Close]만 있음. 검사 항목 예시 이름 표기가 다름(T `RP1` · `Allplex HPV28`, L `RP1A` · `Allplex_HPV28`)
- 호출하는 화면: Confirm_010 (2 [Apply])
- 호출되는 곳: [TI-STN-01] Policy Setting 3 Extraction Module Usage Setting

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (뒤 화면) (GNB) TIOS / (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Test Policy Setting | Information | Test Protocol Setting | LIS Setting | System Setting | Account Setting | Keira Knightley
- Extraction Module Usage Setting
- Extraction module availability
- Product | High-throughput Extraction | Flexible Extraction
  - RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12 (행마다 체크박스 2개)
- Select the devices available for each test. At least one extraction device must be selected. Multiple selections are allowed.
- Close | Apply

### 사용 컴포넌트

Checkbox (20), 2 Depth (5), Table (4), Description Number (3), Button/Primary_1Button_62 (2), Popup (1), Popup/Notice (1), Component 4 (1), Arrow/Chevron_Up (1)

### 디스크립션 (원문)

#### 1. 추출 장치별 사용 가능 여부

- 정의 : Module 중 최소 1개 필수 선택
- 노출 : Assay pack에 따른 모든 검사 항목 코드 노출
- 출력 : 검사 항목 코드 출력
- 정렬 : Product Name 기준 오름차순
- (Common UX > ‘4-b. Data Notation Rules for Inventory’ 정렬 정의에 따름)
- 모든 체크박스 해제 시 :
- 마지막 선택 해제한 체크박스 유지
- (1-1) 얼럿 배너 노출
- (1-1) 얼럿 배너
- 디폴트 : 미노출
- 노출 시, 팝업 닫기 전까지 노출 고정

#### 2. 기능버튼

- [Close] 버튼
- 선택 시 → 해당 팝업 닫힘
- [Apply] 버튼
- 디폴트 : 비활성화
- 활성화 조건 : 변경 이벤트 발생 & 추출 장치 중 1개 이상 선택 시, 활성화
- ㄴ 값 수정 후, 최종 데이터가 기존 값과 동일하더라도 활성화 유지
- 선택 시 → Confirm_010 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 없고, 기획 프레임 아래에 별도 프레임 `TI-STN-01-02 / 세부정의`([3543:523431](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-523431), 1895×1602)가 있습니다. 원본에 Case 번호가 없습니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | 추출 장비별 사용 가능 여부_체크박스 해제 Case | ① STI-12 체크박스 모두 해제 시 | 위 프레임 (위쪽) |
| - | M9600 / STARlet에 따른 디폴트 시약 Setting 정의 | 핵산 추출 장비 디폴트 | 위 프레임 (아래쪽) |

- 체크박스 해제 Case: 설명 `(1-1) 마지막 선택 해제한 체크박스 유지` / `(1-2) 얼럿 배너 노출`. 팝업 두 장(해제 전 · 해제 후) — Extraction Module Usage Setting / Extraction module availability / Product | Flexible Extraction | High-throughput Extraction / RP1A | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex_HPV28 | STI-12 / 배너 `Select the devices available for each test. At least one extraction device must be selected. Multiple selections are allowed.` / Close | Apply
- 디폴트 시약 Setting 정의: `아래 표에서의 핵산 추출 장비 X인 경우, 장비별 사용 가능 여부가 비활성화(디폴트)를 의미함`. 그 아래 표는 글자 레이어로 읽히지 않음
