---
cid: LI-STN-01-02
pair_cid: TI-STN-01-02
tl_relation: 기능 추가
title: Extraction Module Usage Setting
path: Policy Setting > Extraction Module Usage Setting
type: Popup
version: 2.0
date: 2026.06.15
author: BREX
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-522358
---
# LI-STN-01-02 Extraction Module Usage Setting

> 기존 화면(작업방 `Policy Setting_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS는 View 화면(세부 항목 설정은 T-IOS에서만)이고 [Close]만 있음. T-IOS(TI-STN-01-02)는 체크박스 설정 · 얼럿 배너 · [Apply]를 정의. 검사 항목 예시 이름 표기가 다름(L `RP1A` · `Allplex_HPV28`, T `RP1` · `Allplex HPV28`)
- 호출하는 화면: 없음 (2 [Close] 닫기)
- 호출되는 곳: [LI-STN-01] Policy Setting 2 Extraction Module Usage Setting [View]
- 관련 정책: POL-TST-005

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (뒤 화면) (GNB) LIOS / (LNB) Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Extraction Module Usage Setting
- Extraction module availability
- Product | High-throughput Extraction | Flexible Extraction
  - RP1A | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex_HPV28 | STI-12 (행마다 체크박스 2개)
- Select the devices available for each test. At least one extraction device must be selected. Multiple selections are allowed.
- Close

### 사용 컴포넌트

Checkbox (20), Table (4), Description Number (2), Popup (1), Popup/Notice (1), Button/Primary_1Button_62 (1), Component 4 (1)

### 디스크립션 (원문)

#### 1. Extraction Module Usage Setting

- 정의 : L-IOS에서는 View 화면 제공
- 세부 항목 설정의 경우 T-IOS 화면에서 가능 (only)
- 노출, 출력, 정렬 정의 T-IOS와 동일

#### 2. [Close] 버튼

- 선택 시 → 해당 팝업 닫힘

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Policy Setting_asis` 페이지에 LI-STN-01-02 케이스 프레임 없음)
