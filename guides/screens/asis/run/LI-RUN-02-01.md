---
cid: LI-RUN-02-01
pair_cid:
tl_relation: 단독
title: Run Preparation
path: LNB > Run
type: Page
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-78975
---
# LI-RUN-02-01 Run Preparation

> 기존 화면(작업방 `Run_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS 단독 화면 (IA에 T 짝 없음). Run Preparation Step 2/5 (Check test protocol, Policy Setting 「Allow Protocol Changes Before Test」가 ON일 때만 노출)
- 호출하는 화면: [LI-RUN-01] (5 [Previous]), [LI-RUN-02] (6 [Next]), Confirm_001 (0 · 4 [Cancel]), Alert_001 (0)
- 호출되는 곳: (원문에 없음)
- 참조 프레임: 같은 페이지의 [Run Preparation - Check Test Protocol 단계 노출 여부](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-79245) 섹션 (기획 프레임 밖이라 옮기지 않음)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Run Preparation
- STEP 1 | Check samples | STEP 2 | Check test protocol | STEP 3 | Check consumables | STEP 4 | Check reagents | STEP 5 | Check waste bin/bottle
- Pre-Treatment Protocol | Extraction Protocol
- Items 26 | Please load any additional consumables resulting from the protocol change into the trolley. | Items 26
- Protocol Name | Usage | Modified by | Modified Date/Time (두 목록 같음)
- Pre-Treatment 목록
  - Seegene Protocol | SG protocol | Applied | - | -
  - Pre-Treatment Test Protocol AA | - | Admin02 | 2026-03-24 10:24:56
  - Pre-Treatment Test Protocol BB | - | Admin03 | 2026-03-24 10:24:56
  - Pre-Treatment Test Protocol CC | - | Admin04 | 2026-03-24 10:24:56
  - Pre-Treatment Test Protocol DD | - | Admin03 | 2026-03-24 10:24:56
  - Pre-Treatment Test Protocol EE | - | Admin03 | 2026-03-24 10:24:56
  - Pre-Treatment Test Protocol FF | - | Admin03 | 2026-03-24 10:24:56
  - Pre-Treatment Test Protocol GG | - | Admin03 | 2026-03-24 10:24:56
  - Pre-Treatment Test Protocol HH | - | Admin03 | 2026-03-24 10:24:56
- Extraction 목록
  - Seegene Protocol | SG protocol | - | - | -
  - Extraction Test Protocol AA | Applied | Admin25 | 2026-03-24 10:24:56
  - Extraction Test Protocol BB | - | Admin23 | 2026-03-24 10:24:56
  - Extraction Test Protocol CC | - | Admin12 | 2026-03-24 10:24:56
  - Extraction Test Protocol DD | - | Admin24 | 2026-03-24 10:24:56
  - Extraction Test Protocol EE | - | Admin06 | 2026-03-24 10:24:56
  - Extraction Test Protocol FF | - | Admin07 | 2026-03-24 10:24:56
  - Extraction Test Protocol GG | - | Admin05 | 2026-03-24 10:24:56
  - Extraction Test Protocol HH | - | Admin05 | 2026-03-24 10:24:56
- Cancel | Previous | Next

### 사용 컴포넌트

Form/Radio BTN (18), Frame 42 (18), Table (16), Description (16), Frame 50 (15), Frame 55 (14), Title (10), Description Number (9), Square Text Badge (4), Frame 54 (4), Contents/Scroll Bar (1), Arrow/Chevron_Left (1), Icon/Popup Status (1), Frame 56 (1), Arrow/Chevron_Right (1), Component 4 (1), Frame (1)

### 디스크립션 (원문)

#### 0. Run Preparation(구동 준비)화면

- 정의
- [Step 2/5] Run 실행을 위한 프로토콜 정보 확인 화면
- 컨펌 및 알럿
- 페이지 이탈 시(LNB 메뉴 선택 등)팝업 노출 : Confirm_001
- Sample 정보 로드 불가 시 팝업 노출 : Alert_001
- 노출 조건
- Setting > Policy Setting 메뉴에서 Allow Protocol Changes Before Test 항목 값을 ON으로 설정한 경우 노출
- 단, OFF로 설정한 경우 Applied 설정된 Protocol로 Run 진행

#### 1. Run Preparation 진행 상태(Progress Bar)

- 진행 상태 표시
- Step 1과 Step 2 인디케이터 활성화 상태
- Step 3, Step 4은 비활성화 상태
- 단순 인디케이터 방식으로 인터랙션 불가

#### 2. Pre-Treatment Protocol 리스트

- 정의 : Seegene에서 기본으로 제공하는 Protocol과 Protocol Setting 메뉴를 통해 사용자가 생성한 Protocol 리스트 노출
- 공통 UX 참고 : COMM-5-m
- 정렬(Default)
- 1순위 고정: SG Protocol(시스템 기본 프로토콜)
- 2순위 고정: 사용자 적용(Applied) Protocol
- 그 외 리스트는 Modified Date/Time 기준 내림차순 정렬
- 선택(Default)
- Protocol Setting 메뉴에서 Applied 된 프로토콜 Select 상태
- 동작
- 콘텐츠 영역을 초과할 경우, 해당 영역 내 우측 세로 스크롤 생성

#### 2-1. 리스트 표출 항목

- Protocol Name
- SG Protocol(시스템 기본 프로토콜)명 정보
- 그 외 : 사용자가 Protocol 시 입력한 프로토콜 명 정보
- Usage
- 사용자가 Applied 설정한 프로토콜 표시
- Modified by
- 해당 Protocol의 세부 데이터를 최종으로 수정한 사용자 ID 정보
- Modified Date/Time
- 해당 Protocol의 세부 데이터가 최종으로 수정된 일시 정보

#### 2-2. 프로토콜 변경 선택에 따른 안내 문구(고정 노출)

- 고정 문구 노출 (데이터 상태에 따른 가변 없음)
- 내용 : Please load any additional consumables resulting from the protocol change into the trolley.

#### 3. Extraction Protocol 리스트

- 정의 : Seegene에서 기본으로 제공하는 Protocol과 Protocol Setting 메뉴를 통해 사용자가 생성한 Protocol 리스트 노출
- 공통 UX 참고 : COMM-5-m
- 정렬 (Default)
- 1순위 고정: SG Protocol (시스템 기본 프로토콜)
- 2순위 고정: 사용자 적용(Applied) Protocol
- 그 외 리스트는 Modified Date/Time 기준 내림차순 정렬
- 동작
- 콘텐츠 영역을 초과할 경우, 해당 영역 내 우측 세로 스크롤 생성

#### 3-1. 리스트 표출 항목

- Protocol Name
- SG Protocol(시스템 기본 프로토콜)명 정보 (고정)
- 그 외 : 사용자가 Protocol 시 입력한 프로토콜 명 정보
- Usage
- 사용자가 Applied 설정한 프로토콜 표시
- Modified ID
- 해당 Protocol의 세부 데이터를 최종으로 수정한 사용자 ID 정보
- Modified Date/Time
- 해당 Protocol의 세부 데이터가 최종으로 수정된 일시 정보

#### 4. [Cancel] 버튼

- 클릭 시 팝업 노출 : Confirm_001

#### 5. [Previous] 버튼

- 클릭 시 LI-RUN-01(이전 단계)으로 이동

#### 6. [Next] 버튼

- 클릭 시 LI-RUN-02(다음 단계)으로 이동

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Run_asis` 페이지에 LI-RUN-02-01 케이스 프레임 없음)
