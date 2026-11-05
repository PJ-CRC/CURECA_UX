---
cid: LI-RUN-P
pair_cid:
tl_relation: 단독
title: Run Preparation Popup
path: Run > Run Notification
type: Popup
version: 2.1.05
date: 2026-09-04
author: 정다예
service_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6902-44848
figma_region: 2.1 2차
---
# LI-RUN-P Run Preparation Popup

> 기존 화면(작업방 Run/Quick Start 페이지, 2.1 2차 영역, Ver 2.1.05)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. IA 화면 이름은 "Run Notification". Run 실행 조건을 만족하지 못할 때 LNB·Dashboard의 [Run]과 Quick Start(LI-QUK)에서 열림
- 관련 정책: POL-EQP-003 (Run, Quick Start 버튼), POL-SMP-007, POL-LOD-001

## 기존 화면

### 화면 글자

- Notifications Before Run Preparation
- Please check all of the items below and run it again.
- Sample Data Load Failed | Loading Error. Check device status and try again.
- No Tray Detected On Trolley 1F (Consumable Trolley) | Please place an empty tray on trolley 1F and try again.
- Network Status | Please check the network status. | Instrument | T-IOS | D.A PC (항목별 연결 아이콘)
- Door Status | Please check the door open status of the module. | Module: High-throughput Extraction | Flexible Extraction(3) | Universal PCR
- OK

### 사용 컴포넌트

Description Number (9), Table (4), Icon/instrument (3), Table/Filled Table Cell (3), Popup/Popup Middle Text (2), Interface/Check_Circle_Outlined (2), Icon/Popup Status (1), Interface/Close_Circle_Outlined (1), Icon/Connect (1), Interface/Close (1)

### 디스크립션 (원문)

#### 0. Run 실행 불가 팝업

- 노출 조건
- 하위 항목 중 1개 이상 문제가 있을 경우 팝업 노출
- 미노출 조건
- 모든 항목이 AND 조건으로 만족할 경우 미노출
- 표출 항목
- Sample 정보 로드 실패 알림
- 네트워크 온/오프라인 상태 알림
- 장비 도어 개방 알림

#### 1. 팝업 문구

- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Notifications Before Run Preparation
- 내용 : Please check all of the items below and run it again.

#### 2. Sample 정보 로드 실패 알림 영역

- 노출 조건
- Trolley에 장착된 Sample 정보 로드 실패 시
- 응급 서랍 내 Sample 정보 로드 실패 시
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Sample Data Load Failed
- 내용 : Loading Error. Check device status and try again.

#### 3. 소모품 트롤리 1층 내 트레이 없음 알림 영역

- 노출 조건
- 도킹된 Consumables Trolley 1층에 Tray가 장착되어 있지
- 않은 경우
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : No Tray Detected On Trolley 1F (Consumable Trolley)
- 내용 : Please place an empty tray on trolley 1F and try again.

#### 4. 네트워크 연결 상태 알림 영역

- 노출 조건
- 전체 항목 중 1개 이상의 항목이 오프라인 상태일 경우 노출
- 모든 네트워크 항목이 온라인 상태일 경우, 해당 알림 미노출
- 알림 노출 시, 오프라인 항목뿐만 아니라 현재 온라인인 항목을
  - 포함한 전체 노출
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Network Status
- 내용 : Loading Error. Check device status and try again.
- 표출 항목
- 네트워크 유형
- 연결 상태(온라인 / 오프라인)

#### 4-1. 네트워크 유형

- 시스템에 등록된 네트워크 유형 노출
- Instrument, T-IOS, D.A PC

#### 4-2. 연결 상태

- 온라인 / 오프라인 상태 노출
- Instrument의 경우, 1대 이상 오프라인 시 오프라인 상태 노출

#### 5. 문 열림 상태 알림 영역

- 정의
- Module의 유리문 대상(Storage 및 Waste bin 문 제외)
- 노출 조건
- 전체 장비 중 1개 이상의 장비에 문상태가 Open일 경우 노출
- 전체 장비의 문 상태가 Closed일 경우 해당 알림 미노출
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Door Status
- 내용 : Please check the door open status of the module.
- 표출 항목
- 시스템에 등록된 Module명

#### 6. [확인] 버튼

- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

#### 7. [X] 버튼

- 클릭 시, 팝업이 닫힌 후 기존 화면 노출

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "Run Preparation Popup", IA "Run Notification" | 하나로 맞춤 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R02 | 화면 정보 | 경로 "LNB > RUN / Dashboard > RUN" | Run (대문자 RUN은 쓰지 않음) | `glossary/terms.csv` Run | 대기 |
| R03 | 디스크립션 | 0 표출 항목에 3(Tray 없음 알림)이 빠짐 | 표출 항목에 Tray 없음 알림 추가 | 디스크립션 3 | 대기 |
| R04 | 문구 | 4 내용 "Loading Error. Check device status and try again." (2와 같은 문장), 화면은 "Please check the network status." | 화면 문구로 통일 | 화면 글자 | 대기 |
| R05 | 디스크립션 | 6 [확인] 버튼 | [OK] (화면 글자) | 화면 글자, `screen-fixes/README.md` 영어 표준어 | 대기 |
| R06 | 디스크립션 | 4 연결 상태 "온라인 / 오프라인" | 연결 상태 값 Connected / Disconnected와 같은 말로 쓸지 정함 | `glossary/status-values.csv` 연결 상태 | 대기 (확인 필요) |
| R07 | 디스크립션 | 5 "문 열림", "장비 도어 개방", "문상태가 Open" | Door, Door 열림 상태 Open / Closed | `glossary/terms.csv` Door (도어·문은 쓰지 않는 표현) | 대기 |
| R08 | 표기 | "Flexible Extraction(3)", "Waste bin" | Flexible Extraction (3), Waste Bin | 이름 (번호) 띄어쓰기, `glossary/terms.csv` | 대기 |
| R09 | 표기 | "Consumables Trolley", "트롤리", "트레이" | Consumable Trolley(화면 글자와 같게), Trolley, Tray | `glossary/terms.csv` | 대기 |
| R10 | 디스크립션 | 2와 Alert_001(같은 제목·문구)의 관계가 없음. Alert_001은 Run 구동 준비 중 도킹 해제 때 | 시작 전 확인(이 Popup)과 진행 중 Alert_001을 구분해 적음 | `policy/alert-catalog.csv` Alert_001 | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.05 | 2026-09-04 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
