---
cid: LI-INS-01-P
pair_cid:
tl_relation: 단독
title: Door Control Popup
path: Instrument > Overview Tab > Door Control Popup
type: Popup
version: 2.1.17
date: 2026.11.13
author: 이상헌
client_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: [POL-EQP-004 · DS-0011, POL-EQP-008 · DS-0011]
basis:         # 화면 기준: 시각 · history 커밋 (reference-rules/work-log.md "작업 기준")
basis_versions: # 문서마다 basis 시각 전에 마지막으로 바뀐 때 (rules · policy · glossary · screens · ux_guide 모두 @날짜)
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=3219-23344
---
# LI-INS-01-P Door Control Popup

- T/L 차이: L-IOS에만 있음 (짝 없음)
- 호출하는 화면: Confirm_031 · Confirm_032 · Confirm_033
- 호출되는 곳: [LI-INS-01-T] Overview Tab 6 [Door Control], [LI-INS-02-T] All Tab (Door), Material Setup > Load Materials, Empty Waste Bin (`ia/ia-screens.csv`)

## 디스크립션

**0  Door Control Popup**
- 팝업 정의
  - 외부 유리문 잠금 해제를 수행하기 위한 팝업 화면
  - 동일 Module Type 기준으로 복수 Module에 대한 잠금 해제를 처리할 수 있는 구조
  - 모달 형태로 화면이 오버레이되어 노출
- 정책
  - ~~기존: Module 상태값에 따른 Door Lock해제를 할 수 있음.~~
  - 변경 : 통합 상태에 따라 <span style="color:red">Lock</span> 해제 가능
  - <span style="color:red">~~Unlock 1개라도 해당 되면 Module의 상태값은 Paused로 변경됨~~</span>
  - <span style="color:red">Door 잠금이 해제되면 그 Module의 장비 모듈 상태는 장비 통합 상태와 관계없이 Paused로 변경</span>
  - <span style="color:red">Door가 여러 개인 Module은 Door 하나라도 잠금이 해제되면 Paused로 변경</span>
  - 변경 : 문을 닫아도 자동으로 잠기지 않음. [Lock] 버튼을 눌러야 Door가 잠김 (Door 단위, 기존: 닫고 5초 후 자동 Lock)
- User Type : Service, Admin, User
- L-IOS Client Mode : Main Mode, Console Mode
- 정책 참고 : POL-EQP-004, POL-EQP-008

**1  Module type**
- 정의 : 사용자가 선택하여 들어온 Module의 Type명을 화면 상단에 표기

**2  Module별 영역**
- 정의 : 동일한 Type에 속하는 Module들이 목록 형태로 나열
- 표기 방식
  - 각 Module은 index 기준으로 구분되어 개별 영역으로 표시
  - 일정 개수 이상이 나열되어 화면 영역을 초과할 경우 우측에 스크롤이 생성되어 전체 Module 확인 가능
- 제어 방식 : Door 상태는 Module(index) 단위로 제어

**2-1  Module 상태값**
- 정의
  - 각 Module 해당 시점의 상태값 표시
  - 최초 진입 시 사용자가 해당 Module을 클릭하여 들어온 순간의 상태값 그대로 표기
- 상태 업데이트
  - Unlock 버튼 또는 Unlock all doors 버튼 클릭 시 Door가 Unlocked로 변경되면서 Module 상태값도 함께 갱신
  - Running 상태에서 Unlock을 클릭할 경우 Module 상태가 Running에서 Pausing으로 전환
  - Door 제어 이벤트가 발생하면 Module 상태값도 동기화되어 업데이트
  - [Lock] 클릭으로 Door가 Locked가 되면 Module 상태값도 함께 갱신 (기존 자동 Lock 후 장비 재시작(Running) 흐름을 [Lock] 클릭 기준으로 적용)
- 공통 UX 참고 : COMM-4-a(3/4)
- 정책 참고 : POL-EQP-004

**2-2  Door Unit Name**
- 정의
  - 해당 Module에서 제공되는 Door Unit의 이름 표시
  - Door Unit은 목록형으로 나열되며 Module이 가진 Door 개수에 따라 표시 개수가 달라짐
- 데이터 구조
  - Door 데이터는 고정된 구조가 아니라 Module 정보에 따라 달라짐
  - 동일한 Module Type이라도 제조사별로 Door Unit 개수가 다를 수 있음
  - Door 데이터는 Module 정의 정보(CURECA 시스템 구성 요소 및 상태 정보 문서 등)를 참고하여 구현 필요

**2-3  Door Status**
- 정의 : Door의 열림(Open) / 닫힘(Closed) 상태값 표기
- 동작 : 제어 이벤트가 발생되면 그에 맞춰 해당 상태값도 동기화되어 업데이트

**2-4  Door Lock Status 아이콘**
- 정의
  - 각 Door Unit 옆에 자물쇠 아이콘으로 값 표시
  - Door의 Lock 상태와 아이콘이 실시간으로 연동
- 표기
  - Locked 상태 → 닫힌 자물쇠 아이콘
  - Unlocked 상태 → 열린 자물쇠 아이콘

**2-5  [Unlock] / [Lock] 버튼**
- Door Unlock이 즉시 가능한 케이스
  - <span style="color:red">~~Module 상태가 'Ready, Error, Paused'일 경우, Unlock을 클릭할 경우 즉시 해제가 되어 문을 열 수 있음~~</span>
  - <span style="color:red">장비 통합 상태가 Not Initialized, Ready, Error(검사 진행 중이 아님)일 경우 Unlock 클릭 시 즉시 해제되어 문을 열 수 있음</span>
  - <span style="color:red">장비 통합 상태가 Running, Partial Running, Paused, Error(검사 진행 중)일 경우 Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Plate Sealing의 Door만 잠금 해제 가능</span>
- Door Unlock이 즉시 불가능한 케이스
  - <span style="color:red">장비 모듈 상태</span>가 Running일 경우 Unlock 버튼 클릭 시 현재 작업을 마무리한 후 Unlock 진행
  - Unlock 클릭 → 확인 팝업 노출 : Confirm_032 → Pausing 상태로 전환 → Paused 상태가 된 이후 Unlock 진행 → 도어 오픈 가능
  - <span style="color:red">Plate Sealing의 Unlock 클릭 시 확인 팝업 노출 : Confirm_033 (PCR Setup Module도 함께 Paused)</span>
- Door Unlock이 불가능한 케이스
  - [Unlock] 버튼이 Disabled 상태로 제공
  - <span style="color:red">장비 통합 상태가 Initializing, Stopping일 경우 모든 Door</span>
  - <span style="color:red">장비 통합 상태가 Running, Partial Running일 경우 Flexible Extraction, PCR Setup, Universal PCR의 Door</span>
- 상태 갱신 : Door가 Unlocked 상태가 되면 버튼이 [Lock]으로 바뀜 (기존 "Unlocked" Disabled 표기 대신)
- [Lock] 버튼 : Lock Status가 Unlocked일 때 표시
  - 클릭 시 해당 Door를 즉시 잠금(Locked) → 버튼은 [Unlock]으로 바뀜
  - [Lock] 버튼은 늘 활성(Enabled) 상태로 표시 (Unlock과 같은 Filled 스타일)
  - Door가 Open인 상태에서 [Lock] 클릭 시 문 닫기 안내 팝업 노출 : Confirm_031
  - Confirm_031에서 [OK] 클릭 시 닫힘, Door는 Unlocked 유지
- 자동 잠금 없음 : 문을 닫아도 잠기지 않으며 [Lock]을 눌러야 잠김 (기존: 닫고 5초 후 자동 Lock)
- 케이스 참고 : LI-INS-01-P/Case > Case 1, LI-INS-01-P/Case > Case 2, LI-INS-01-P/Case > Case 3, LI-INS-01-P/Case > Case 4, LI-INS-01-P/Case > Case 7
- 정책 참고 : POL-EQP-004, POL-EQP-008

**2-6  안내 문구**
- 정의 : 문을 닫은 뒤 [Lock] 버튼을 눌러야 잠긴다는 내용을 안내하는 문구 (기존: 닫고 5초 후 자동 Lock 안내)
- [안내 문구 변경 됨]

**2-7  Door Unit 영역 내 안내 문구**
- 정의 : 각 상황별로 Door Unit 영역 하단에 안내 문구 노출
- 장비 통합 상태가 Running 또는 Partial Running일 경우 Unlock이 불가능한 케이스
  - "Cannot unlock while the system is running." 문구 노출
- 장비 모듈 상태가 Running일 때 사용자가 Unlock을 클릭하면 해당 Module이 Pausing 상태로 전환되는 케이스
  - "Pausing for door unlocking. Please wait." Pausing 상태로 전환되는 순간에 맞춰 안내 문구 노출
- 케이스 참고 : LI-INS-01-P/Case > Case 1, LI-INS-01-P/Case > Case 3

**3  [Unlock all doors] 버튼**
- 활성화 조건
  - 통합 상태가 'Ready, Error, Paused, Not Initialized'일 경우에만 버튼 활성화
  - 그 외 상태값일 때는 버튼이 Disabled 처리되어 클릭 불가
- 동작
  - 버튼 클릭 시 선택된 Type에 속하는 모든 Module의 Door Lock 상태가 Unlocked로 변경
  - Door가 Unlocked로 변경되면 해당 Module의 상태값은 Paused로 전환
  - [Unlock all doors] 버튼 자체는 Disabled 처리되지 않고 계속 표시
- [X] 닫기 버튼
  - 클릭 시 해당 팝업 닫힘, 기존 진입 화면 유지
- 케이스 참고 : LI-INS-01-P/Case > Case 5, LI-INS-01-P/Case > Case 6
- 정책 참고 : POL-EQP-008

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | Module type | Sample Storage | 기존 화면 (기존 작업방 10069:368536) |
| 2 · 2-1 | Module (index) · 상태 | Sample Storage (1) · Paused | 기존 화면 (상태 그대로). Module 이름은 Module type과 Door 구성에 맞춤 (기존 화면은 Sample Pre-treatment (1), `glossary/module-units.csv`) |
| 2-2 · 2-3 · 2-5 | Door 행 | Door (Left) · Open · [Lock] / Door (Right) · Closed · [Unlock] | 기존 화면, `glossary/module-units.csv` (Sample Storage Door (Left) · (Right)) |
| 2-6 | 안내 문구 | Close the door, then press Lock to lock it. | 기존 화면 |
| 3 | 버튼 | Unlock all doors | 기존 화면 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 0 | Door Control | 화면 | | - | |
| 1 | Sample Storage | 화면 | | - | |
| 2-1 | Paused | 화면 · 케이스 | | - | |
| 2-1 | Pausing | 케이스 | | - | |
| 2-1 | Running | 케이스 | | - | |
| 2-2 | Door (Left) | 화면 | | - | |
| 2-2 | Door (Right) | 화면 | | - | |
| 2-3 | Open | 화면 | | - | |
| 2-3 | Closed | 화면 | | - | |
| 2-5 | Unlock | 화면 · 케이스 | | - | |
| 2-5 | Lock | 화면 · 케이스 | | - | |
| 2-6 | Close the door, then press Lock to lock it. | 화면 | | - | |
| 2-6 | Close the door and press Lock. The module will resume once locked. | 케이스 | | - | |
| 2-6 | Close the door and press the 'Lock' button to resume the module | 케이스 | | - | |
| 2-7 | Cannot unlock while the system is running. | 디스크립션 · 케이스 | | - | |
| 2-7 | Pausing for door unlocking. Please wait. | 디스크립션 · 케이스 | | - | |
| 3 | Unlock all doors | 화면 | | - | |

## Alert · Confirm · Toast

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 2-5 | 컨펌 | Confirm_032 | 장비 모듈 상태가 Running인 Module의 [Unlock] 클릭 시 | Continue 선택 시 → Module이 Pausing으로 전환, Paused가 된 뒤 Door 잠금 해제 / Cancel 선택 시 → 해당 팝업 닫힘 |
| 2-5 | 컨펌 | Confirm_033 | Plate Sealing의 [Unlock] 클릭 시 (Plate Sealing 또는 PCR Setup이 Running) | Continue 선택 시 → Plate Sealing · PCR Setup이 Pausing으로 전환, Paused가 된 뒤 Door 잠금 해제 / Cancel 선택 시 → 해당 팝업 닫힘 |
| 2-5 | 컨펌 | Confirm_031 | Door가 Open인 상태에서 [Lock] 클릭 시 | OK 선택 시 → 해당 팝업 닫힘, Door는 Unlocked 유지 |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | 장비 통합 상태가 Running, Partial Running일 때 Door 잠금 해제가 불가능한 Module (Flexible Extraction, PCR Setup, Universal PCR) | 장비 통합 상태 = Running, Partial Running | 2-5, 2-7 | 1 | 기존 원본 |
| 2 | Door Unlock · Open 상태값 정의 | Door 잠금 상태 · 열림 상태별 | 2-3, 2-4, 2-5 | 1 | 기존 원본 |
| 3 | 장비 통합 상태가 Running, Partial Running이고 장비 모듈 상태가 Running일 때 버튼 노출 (Sample Pre-treatment, High-throughput Extraction, Sample Storage, Consumable Storage) | 장비 통합 상태 = Running, Partial Running · 장비 모듈 상태 = Running | 2-1, 2-5, 2-7 | 6 | 기존 원본 |
| 4 | 장비 통합 상태가 Running이고 장비 모듈 상태가 Running일 때 연관 Module도 함께 Paused (Plate Sealing) | Plate Sealing · PCR Setup | 2-5 | 6 | 기존 원본 |
| 5 | 장비 통합 상태가 Running 또는 Partial Running일 때 [Unlock all doors] Disabled | 장비 통합 상태 = Running, Partial Running | 3 | 1 | 기존 원본 |
| 6 | 장비 통합 상태가 Ready, Error, Paused, Not Initialized일 때 [Unlock all doors] 사용 가능 | 장비 통합 상태 = Ready, Error, Paused, Not Initialized | 3 | 1 | 기존 원본 |
| 7 | Door가 Open인 상태에서 [Lock] 클릭 시 문 닫기 안내 팝업 | Door = Open · Unlocked | 2-5 | 2 | 기존 원본 |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 기준 자료 변경 | Section 17 메모 "통합 상태가 Ready, Paused, Error 상태일 경우, Unlock all doors 버튼 사용 가능" | 장비 통합 상태가 Ready, Error, Paused, Not Initialized일 때 활성화 (디스크립션 3은 이미 맞음) | POL-EQP-008, 2026-11-02 확인 | 작업 중 (20261123-최고관리자-instruments) |
| R02 | 기준 자료 변경 | "Locks automatically 5 seconds after the door is closed." / "The door will be automatically locked 5 seconds after it is closed." 두 가지 | 하나로 통일 | `archive/glossary/review-v0.md` 화면 정정 대상 추가 | 대기 |
| R03 | 점검 발견 | "Cannot unlock while the module is running." / "Cannot unlock while the system is running." 두 가지 | 쓰임을 구분하거나 하나로 통일 | 같음 | 작업 중 (20261123-최고관리자-instruments) |
| R04 | 기준 자료 변경 | 확인 문구 "Do you want to continue? Finishing current task, then pausing…" | 알럿 관리 페이지 Confirm_008 ("Unlock the door?")과 다름. 어느 쪽이 맞는지 확인 후 통일 | `alert/alert-catalog.md` 3절 | 대기 (확인 필요) |
| R05 | 점검 발견 | Ruuning, Lcok | Running, Lock | 오타 | 작업 중 (20261123-최고관리자-instruments) |
| R06 | 기준 자료 변경 | Lock 버튼 없음 (다시 잠그는 기능 없음) | 디스크립션에 Door를 닫으면 5초 뒤 자동 잠금, Run Start 때 Unlocked Door 자동 잠금을 정책 ID로 참조 | POL-EQP-008 | 대기 |
| R07 | 기준 자료 변경 | 0·3 "Unlock 1개라도 해당 되면 Module의 상태값은 Paused로 변경됨" | 뜻은 맞음 (장비 통합 상태와 관계없이 Door 잠금이 해제되면 Paused, Door가 여러 개인 Module은 하나라도 해제되면 Paused). 이 뜻이 드러나게 문장 정리 | POL-EQP-004 규칙 1·2, 2026-11-02 확인 | 작업 중 (20261123-최고관리자-instruments) |
| R08 | 기준 자료 변경 | 2-5가 장비 모듈 상태(Ready, Error, Paused) 기준, 0은 통합 상태 기준 | 장비 통합 상태별 허용과 조건부 허용 Module 기준으로 통일 | POL-EQP-008 | 작업 중 (20261123-최고관리자-instruments) |
| R09 | 기준 자료 변경 | Run 중 잠금 해제 후 Door를 열지 않은 경우의 동작이 없음 | 디스크립션에 넣음: 임시 정책 PV-0001 (Run 중 잠금 해제 후 Door를 열지 않으면 Paused 유지). 화면에 "임시 정책 포함" 표시 | PV-0001 (적용한 화면), POL-EQP-008 | 대기 (임시 정책 적용 예정) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.17 | 2026-11-23 | 작업방에 새로 그림 (기존 작업방 [10069:368536](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-368536) · 케이스 [10069:368639](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-368639) · Ver 2.1.17). 반영 대기 R01 · R03 · R05 · R07 · R08 반영 (작업 중). 확인 팝업 문구를 코드(Confirm_031 · 032 · 033)로 바꿈. 케이스 7개 Case 1 ~ 7로 번호 붙여 옮김 | Claude (20261123-최고관리자-instruments) | R01 · R03 · R05 · R07 · R08, DS-0011 |
