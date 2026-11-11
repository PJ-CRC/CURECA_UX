---
cid: LI-RUN-02-01
pair_cid:
tl_relation: 단독
title: Run Preparation
path: Run > Check Test Protocol
type: Page
version: 2.0
date: 2026-06-15
author: 정다예
service_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6902-44543
figma_region: 2.1 2차
---
# LI-RUN-02-01 Run Preparation (Check Test Protocol)

> 기존 화면(작업방 Run/Quick Start 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Run Preparation Step 2/5. Policy Setting의 Allow Protocol Changes Before Test가 ON일 때만 나옴 (`policy/permission-matrix.csv` Run > Check Test Protocol 단계)
- 관련 정책: POL-SMP-007. Protocol 목록·Applied는 POL-TST-006 (Protocol Setting) 참고
- 호출하는 화면: Confirm_001, Alert_001, 이전 LI-RUN-01, 다음 LI-RUN-02

## 기존 화면

### 화면 글자

- STEP 1 Check samples | STEP 2 Check test protocol | STEP 3 Check consumables | STEP 4 Check reagents | STEP 5 Check waste bin/bottle
- Pre-Treatment Protocol | Extraction Protocol
- Items | Please load any additional consumables resulting from the protocol change into the trolley.
- (두 표 모두) Protocol Name | Usage | Modified by | Modified Date/Time
- Seegene Protocol (SG protocol) | Applied (Pre-Treatment) / - (Extraction) | - | -
- Pre-Treatment Test Protocol AA | - | Admin02 | 2026-03-24 10:24:56 ; Extraction Test Protocol AA | Applied | Admin25 | 2026-03-24 10:24:56
- (같은 형식의 행 BB ~ HH, 행마다 라디오 버튼)
- Cancel | Previous | Next

### 사용 컴포넌트

Form/Radio BTN (18), Table (16), Description (16), Title (10), Description Number (9), Square Text Badge (4), Contents/Scroll Bar (1)

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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | CID LI-RUN-02-01은 Check Consumables(LI-RUN-02)의 하위처럼 보이고 IA 순서도 Check Consumables 다음이나, 화면은 Step 2 (Check Consumables 앞) | 단계 순서와 CID·IA 순서를 맞출지 확인 | `ia/ia-screens.csv`, 화면 글자 | 대기 (확인 필요) |
| R02 | 디스크립션 | 1 "Step 3, Step 4은 비활성화" (단계는 5개) | Step 3 ~ Step 5 비활성 | 화면 글자 | 대기 |
| R03 | 디스크립션 | 3 Extraction Protocol에 "선택(Default)" 항목이 없음 (2에는 있음) | 2와 같이 Applied Protocol 선택 상태를 적음 | 디스크립션 2 | 대기 |
| R04 | 디스크립션 | 2-1 "Modified by", 3-1 "Modified ID" | Modified by (화면 글자) | 화면 글자 | 대기 |
| R05 | 디스크립션 | 2-1 "사용자가 Protocol 시 입력한" | 사용자가 Protocol 생성 시 입력한 (빠진 말로 보임) | 디스크립션 | 대기 |
| R06 | 표기 | Protocol Name "Seegene Protocol", 디스크립션 "SG Protocol", 화면 배지 "SG protocol" | 하나로 통일 | 화면 글자 | 대기 |
| R07 | 디스크립션 | 고른 Protocol이 이번 Run에만 쓰이는지, Protocol Setting의 Applied도 바뀌는지 없음 | 디스크립션에 넣음: 여기서 고른 Protocol은 이번 Run에만 쓰이고, Protocol Setting의 Applied Protocol은 바뀌지 않음 | POL-SMP-007 규칙 5 | 대기 |
| R08 | 문구 | 2-2 "into the trolley" | Trolley 표기 확인 (문장 안 소문자) | `glossary/terms.csv` Trolley | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (화면 정보 Ver) | 정다예 | Figma 화면 정보 |
| 2.1.04 | | 추가 소모품 입고 안내 문구 수정 | 정다예 | Figma 버전 메모 (화면 정보 Ver 2.0보다 높음) |
