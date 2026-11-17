---
cid: LI-INS-01-P
pair_cid:
tl_relation: 단독
title: Door Control Popup
path: Instruments > Overview > Door Control
type: Popup
version: 2.1.13
date: 2026.11.13
author: 이상헌
client_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: [POL-EQP-001 · DS-0004, POL-EQP-004 · DS-0004, POL-EQP-008 · DS-0004 · DS-0005]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2826-26709
---
# LI-INS-01-P Door Control Popup

- T/L 차이: L-IOS만 있음
- 호출되는 곳: [LI-INS-01-T] Overview Tab의 [Door Control], [LI-INS-02-T] All Tab, Material Setup > Load Materials, Empty Waste Bin (`ia/ia-screens.csv`)

## 디스크립션

```
0  Door Control Popup
 ● 정의
   - Module 외부 유리문(Door)의 잠금 해제와 잠금을 하는 Popup
   - 같은 Module Type의 여러 Module을 한 번에 잠금 해제
   - 모달 형태로 화면 위에 노출
 ● 동작
   - 장비 통합 상태에 따라 Door 잠금 해제 가능 여부가 정해짐
   - Door 잠금이 하나라도 해제되면 그 Module의 장비 모듈 상태는 Paused
   - 장비 통합 상태가 Ready, Not Initialized, Error일 때도 잠금이 해제되면 Paused
   - Door를 닫아도 자동으로 잠기지 않음, [Lock]을 눌러야 잠김 (Door 단위)
   - Run Start 시 Unlocked인 Door는 자동으로 Locked
 ● User Type : Service, Admin, User
 ● L-IOS Client Mode : Main Mode, Console Mode
 ● 정책 참고 : POL-EQP-004, POL-EQP-008

1  Module Type
 ● 정의 : 사용자가 선택해 들어온 Module Type 이름을 Popup 상단에 표기

2  Module별 영역
 ● 정의 : 같은 Type의 Module이 목록 형태로 나열
 ● 동작
   - Module은 인덱스 기준으로 나눠 영역별로 노출
   - Module 수가 영역을 넘으면 오른쪽 스크롤로 전체 Module 확인
   - Door 제어는 Module(인덱스) 단위

2-1  Module 상태값
 ● 정의 : 각 Module의 지금 장비 모듈 상태
 ● 동작
   - 최초 진입 시 사용자가 Module을 클릭해 들어온 순간의 상태값 노출
   - [Unlock] 또는 [Unlock all doors]로 Door가 Unlocked가 되면 Module 상태값도 함께 갱신
   - Running 상태에서 [Unlock] 클릭 시 Running → Pausing → Paused
   - [Lock]으로 Door가 Locked가 되면 Paused 전 상태로 갱신 (Run 중이었으면 Running, 아니면 그 전 상태)
 ● 정책 참고 : POL-EQP-004

2-2  Door Unit Name
 ● 정의 : 그 Module의 Door Unit 이름 노출
 ● 동작
   - Door Unit은 목록형으로 나열, Module이 가진 Door 수만큼 노출
   - 같은 Module Type이라도 제조사별로 Door Unit 수가 다를 수 있음

2-3  Door Status
 ● 표출 항목 : Open / Closed
 ● 동작 : 제어 이벤트가 생기면 상태값 동기화
 ● 정책 참고 : POL-EQP-001

2-4  Door Lock Status 아이콘
 ● 정의 : Door Unit 옆 자물쇠 아이콘으로 잠금 상태 노출
 ● 표출 항목
   - Locked : 닫힌 자물쇠 아이콘
   - Unlocked : 열린 자물쇠 아이콘

2-5  [Unlock] / [Lock] 버튼
 ● [Unlock] 활성화 조건
   - 장비 통합 상태가 Not Initialized, Ready, Error : 모든 Door 잠금 해제 가능
   - 장비 통합 상태가 Running, Partial Running, Paused : Sample Storage, Prep Consumable Storage, Sample Preparation, High-throughput Extraction, Plate Sealing의 Door만 조건부 가능
   - 장비 통합 상태가 Running, Partial Running : Flexible Extraction, PCR Setup, Universal PCR은 잠금 해제 불가 (Disabled)
   - 장비 통합 상태가 Initializing, Stopping : 잠금 해제 불가 (Disabled)
 ● [Unlock] 동작
   - 장비 모듈 상태가 Ready, Error, Paused이면 클릭 시 즉시 잠금 해제
   - 장비 모듈 상태가 Running이면 클릭 → 확인 팝업 → Pausing → 진행 중인 작업을 마친 뒤 Paused → 잠금 해제
   - Plate Sealing 잠금 해제 시 PCR Setup도 함께 Paused
   - 잠금 해제되면 버튼이 [Lock]으로 바뀜
 ● [Lock]
   - Lock Status가 Unlocked일 때 노출, 늘 활성
   - 클릭 시 그 Door 즉시 잠금(Locked), 버튼은 [Unlock]으로 바뀜
   - Door가 Open이면 클릭 시 Confirm_031 노출 (Please close the door.), [OK] 클릭 시 닫힘, Door는 Unlocked 유지
 ● 참고 : LI-INS-01-P/Case > Case 1, Case 2, Case 3, Case 5, Case 6
 ● 정책 참고 : POL-EQP-004, POL-EQP-008

2-6  안내 문구
 ● 정의 : Door를 닫은 뒤 [Lock]을 눌러야 잠긴다는 안내
 ● 표출 항목 : Close the door, then press Lock to lock it.

2-7  Door Unit 영역 안 안내 문구
 ● 노출 조건
   - 장비 통합 상태가 Running 또는 Partial Running이라 잠금 해제가 불가할 때 : Cannot unlock while the system is running.
   - 장비 모듈 상태가 Running일 때 [Unlock]을 눌러 Pausing으로 바뀌는 순간 : Pausing for door unlocking. Please wait.
 ● 참고 : LI-INS-01-P/Case > Case 1, Case 2

3  [Unlock all doors] 버튼
 ● 활성화 조건
   - 장비 통합 상태가 Ready, Error, Paused, Not Initialized일 때 활성
   - 그 밖의 상태에서는 Disabled
 ● 동작
   - 클릭 시 선택한 Type의 모든 Module Door가 Unlocked
   - Door가 Unlocked가 되면 그 Module 상태는 Paused
   - 버튼은 클릭 뒤에도 계속 노출
 ● 참고 : LI-INS-01-P/Case > Case 4
 ● 정책 참고 : POL-EQP-008

3-1  [X] 버튼
 ● 동작 : 클릭 시 Popup 닫힘, 진입 전 화면 유지
```

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | Module Type | Sample Storage | 기존 화면 |
| 2-1 | Module 상태 | Paused | `glossary/status-values.csv` |
| 2-2 | Door Unit | Door (Left), Door (Right) | `policy/equipment-states.md` 5절 |
| 2-3 | Door Status | Open, Closed | `glossary/status-values.csv` |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | Language ID | 상태 (신규 / 변경 / 제거) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- |
| 0 | Door Control | | | |
| 2-1 | Ready, Running, Pausing, Paused, Error | | | |
| 2-2 | Door (Left), Door (Right), Door (Rear) | | | |
| 2-3 | Open, Closed | | | |
| 2-5 | Unlock, Lock | | | |
| 2-5 | Please close the door. | | | |
| 2-5 | Finishing current task, then pausing. Once paused, the lock will be released and the door can be opened. | | | |
| 2-5 | For safety, PCR Setup Module will also pause. | | | |
| 2-6 | Close the door, then press Lock to lock it. | | | |
| 2-7 | Cannot unlock while the system is running. | | | |
| 2-7 | Pausing for door unlocking. Please wait. | | | |
| 3 | Unlock all doors | | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |
| 2-5 | (확인 문구, 반영 대기 R04) | 장비 모듈 상태가 Running일 때 [Unlock] | Continue : Pausing 진행 / Cancel : 닫힘 |
| 2-5 | Confirm_031 | Door가 Open일 때 [Lock] | OK : 닫힘, Door는 Unlocked 유지 |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 1 | 장비 통합 상태가 Running, Partial Running일 때 Door 잠금 해제가 불가한 Module | Flexible Extraction, PCR Setup, Universal PCR | 2-5, 2-7 | 1 | 기존 원본 |
| 2 | 장비 통합 상태가 Running, Partial Running이고 장비 모듈 상태가 Running일 때 [Unlock] | Sample Preparation 등 조건부 허용 Module | 2-1, 2-5, 2-7 | 6 | 기존 원본 |
| 3 | 연관 Module이 함께 Paused | Plate Sealing 잠금 해제 → PCR Setup | 2-5 | 6 | 기존 원본 |
| 4 | [Unlock all doors] 활성 · 비활성 | 장비 통합 상태 Ready, Error, Paused, Not Initialized / 그 밖 | 3 | 1 | 기존 원본 |
| 5 | [Unlock] → Pausing → Paused → 닫기 → [Lock] → 다시 가동 | Running 중 잠금 해제와 잠금 | 2-1, 2-5, 2-6 | 6 | 기존 원본 |
| 6 | Door가 Open일 때 [Lock] | Open · Unlocked | 2-5 | 2 | 기존 원본 |

## 변경 확인

| 번호 (C) | 디스크립션 번호 | 기존 화면 | 바꿔 그린 것 | 근거 (정책 ID · 반영 대기 ID · 이유) | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- |
| C27 | 3 | 케이스 메모 "통합 상태가 Ready, Paused, Error 상태일 경우, Unlock all doors 버튼 사용 가능" | 활성 조건에 Not Initialized 포함 (Ready, Error, Paused, Not Initialized) | R01, POL-EQP-008 | O | |
| C29 | 2-7 | Cannot unlock while the module is running. / Cannot unlock while the system is running. | 문구 통일 (→ Cannot unlock while the system is running.) | R03, `policy/equipment-states.md` 5절 | O | |
| C30 | 0, 2-1 | Ruuning, Lcok | 표기 수정 (Ruuning → Running, Lcok → Lock) | R05, 오타 | - | |
| C31 | 0, 2-5 | 자동 잠금 정책 표현 혼재, Run Start 자동 잠금 없음 | 자동 잠금 없음 · [Lock]으로 잠금 · Run Start 때 Unlocked Door 자동 잠금 | R06, POL-EQP-008 · DS-0004 | O | |
| C32 | 0, 3 | Unlock 1개라도 해당 되면 Module의 상태값은 Paused로 변경됨 | 문장 정리 (장비 통합 상태와 관계없이 잠금 해제 시 Paused, Door가 여러 개면 하나라도) | R07, POL-EQP-004 | - | |
| C33 | 2-5 | 즉시 가능 · 불가 조건이 장비 모듈 상태(Ready, Error, Paused) 기준 | 장비 통합 상태별 허용 · 조건부 허용 Module 기준으로 통일 | R08, POL-EQP-008, `policy/equipment-states.md` 5절 | O | |
| C34 | 0 | 취소선 "기존: Module 상태값에 따른 Door Lock해제를 할 수 있음." | 취소선 항목 1개 지움 (기존 디스크립션에서 이미 지운 내용) | 기존 화면 취소선 | - | |

## 질문 대기

| 번호 (Q) | 디스크립션 번호 | 질문 | 논의 대상 (DS) | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- |
| Q3 | 2-6 | [Lock] 안내 문구 하나 고르기 (Close the door, then press Lock to lock it. / Close the door and press the 'Lock' button to resume the module / Close the door and press Lock. The module will resume once locked.) | | |
| Q4 | 2-5 | Door가 Open일 때 [Lock] 안내 팝업 (디스크립션 · DS-0005는 Confirm_031 "Please close the door.", 케이스 프레임은 Alert_048 "The door is open. Close the door, then press Lock again.") | DS-0005 | |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | Section 17 메모 "통합 상태가 Ready, Paused, Error 상태일 경우, Unlock all doors 버튼 사용 가능" | 장비 통합 상태가 Ready, Error, Paused, Not Initialized일 때 활성화 (디스크립션 3은 이미 맞음) | POL-EQP-008, 2026-11-02 확인 | 작업 중 (20261117-최고관리자-instruments) |
| R02 | 문구 | "Locks automatically 5 seconds after the door is closed." / "The door will be automatically locked 5 seconds after it is closed." 두 가지 | 하나로 통일 | `archive/glossary/review-v0.md` 화면 정정 대상 추가 | 작업 중 (20261117-최고관리자-instruments) |
| R03 | 문구 | "Cannot unlock while the module is running." / "Cannot unlock while the system is running." 두 가지 | 쓰임을 구분하거나 하나로 통일 | 같음 | 작업 중 (20261117-최고관리자-instruments) |
| R04 | 알럿 | 확인 문구 "Do you want to continue? Finishing current task, then pausing…" | 알럿 관리 페이지 Confirm_008 ("Unlock the door?")과 다름. 어느 쪽이 맞는지 확인 후 통일 | `policy/alert-catalog.md` 3절 | 대기 (확인 필요) |
| R05 | 디스크립션 | Ruuning, Lcok | Running, Lock | 오타 | 작업 중 (20261117-최고관리자-instruments) |
| R06 | 정책 반영 | Lock 버튼 없음 (다시 잠그는 기능 없음) | 디스크립션에 Door를 닫으면 5초 뒤 자동 잠금, Run Start 때 Unlocked Door 자동 잠금을 정책 ID로 참조 | POL-EQP-008 | 작업 중 (20261117-최고관리자-instruments) |
| R07 | 디스크립션 | 0·3 "Unlock 1개라도 해당 되면 Module의 상태값은 Paused로 변경됨" | 뜻은 맞음 (장비 통합 상태와 관계없이 Door 잠금이 해제되면 Paused, Door가 여러 개인 Module은 하나라도 해제되면 Paused). 이 뜻이 드러나게 문장 정리 | POL-EQP-004 규칙 1·2, 2026-11-02 확인 | 작업 중 (20261117-최고관리자-instruments) |
| R08 | 디스크립션 | 2-5가 장비 모듈 상태(Ready, Error, Paused) 기준, 0은 통합 상태 기준 | 장비 통합 상태별 허용과 조건부 허용 Module 기준으로 통일 | POL-EQP-008 | 작업 중 (20261117-최고관리자-instruments) |
| R09 | 정책 반영 | Run 중 잠금 해제 후 Door를 열지 않은 경우의 동작이 없음 | 디스크립션에 넣음: 임시 정책 PV-0001 (Run 중 잠금 해제 후 Door를 열지 않으면 Paused 유지). 화면에 "임시 정책 포함" 표시 | PV-0001 (적용한 화면), POL-EQP-008 | 대기 (임시 정책 적용 예정) |
| R10 | 점검 발견 | v2.1.17에서 자동 잠금 폐지 · [Lock] 버튼 추가 (닫고 5초 뒤 자동 잠금 문구 없어짐). R02 · R06의 "지금"과 다름 | POL-EQP-008(5초 자동 잠금)과 맞는지 확인하고 R02 · R06의 바꿀 것을 다시 정함 | 2026-11-17 다시 옮김, POL-EQP-008 | 대기 (확인 필요) |
| R11 | 점검 발견 | 오른쪽 패널 Ver 2.1.13, 버전 메모 v2.1.17 | Ver 표기를 하나로 맞춤 | 2026-11-17 다시 옮김 | 대기 |
| R12 | 점검 발견 | [Lock] · Door Open 때 Confirm_031("Please close the door.") | 알럿 카탈로그에 Confirm_031이 있는지 확인 | 2026-11-17 다시 옮김, `policy/alert-catalog.csv` | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.06 | 2026-09-28 | 정책 변경에 따른 UX/UI 변경 | 서보경 | Figma 버전 메모 |
| | 2026-11-12 | 연동 변경: L-IOS Client Mode 이름 바꿈 (머리말 키 `client_mode`, 표기 L-IOS Client Mode · MS Mode, 경로 `policy/client-mode-matrix.csv`) | 서보경 | DS-0001 |
| 2.1.13 | 2026-11-13 | Unlocked 상태 Door의 버튼을 “Unlocked”(Disabled) → [Lock]으로 변경, 하단 안내 문구 [Lock] 버튼 안내, 자동 잠금 폐지, 문 열린 채 [Lock] → 문 닫기 안내 팝업(Confirm_031) (버전 메모 v2.1.17) | 이상헌 | Figma 버전 메모 v2.1.17 |
| | 2026-11-17 | 화면 MD를 tobe로 새로 씀 (기존 작업방 Instruments 2.1 2차 [10069-368536](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-368536) · 패널 Ver 2.1.13). 화면 정보를 기존 패널 값(2.1.13 · 2026.11.13 · 이상헌)으로 맞춤, 반영 대기 R01 ~ R03 · R05 ~ R08 반영(작업 중, R02 · R06은 DS-0004 A안 기준 — R02는 Q3로), 취소선 항목 지움, 기존 원본 케이스 6개에 Case 번호를 붙여 옮김, C27 · C29 ~ C34 · Q3 · Q4. 작업방에 새로 그림 (섹션 [2826-26709](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2826-26709), Figma는 R041 · R007에서 그림) | Claude (요청 최고관리자) | 20261117-최고관리자-instruments, DS-0004, DS-0005 |
