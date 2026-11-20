---
cid: TI-INS-02-T
pair_cid: LI-INS-02-T
tl_relation: 기능 추가
title: All Tab
path: Instruments > All
type: Tab
version: 2.1.06
date: 2026.09.28
author: 서보경
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-EQP-001, POL-EQP-005, POL-EQP-009, POL-EQP-010]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2815-24789
---
# TI-INS-02-T All Tab

- T/L 차이: L-IOS(LI-INS-02-T)에는 Door 영역의 [Unlock] · [Lock](3-1)이 더 있음
- 호출하는 화면: [TI-INS-02-01-P] Management Popup ([Management]), [TI-EVT-P] Event History Popup (Event 아이콘 · [More])

## 디스크립션

```
0  All 화면
 ● 정의
   - 전체 Module 목록과 선택한 Module의 상세 정보를 조회하는 화면
 ● User Type : Service, Admin, User

1  Module 목록(좌측 영역)
 ● 정의 : 등록된 전체 Module 목록
 ● 정렬
   - Default : Module Name 기준 오름차순
 ● 동작
   - 한 페이지에 최대 10개 노출(1920*1080 기준)
   - 최초 진입 시 첫 번째 Module이 선택된 상태로 노출
 ● 표출 항목
   - Connected : Module의 연결 상태 (Connected / Disconnected)
   - Status : 장비 모듈 상태 (공통 UX 참고 : COMM-4-a)
   - Door : 장비 모듈 도어 열림 상태 (1-4)
   - Enabled : Module 사용 여부 (Enabled = Y / Disabled = N)
   - Run-time(h) : Module이 Running인 시간의 누적 합, 시간 단위 표기(분 단위 버림)
   - Event : Level별 Open 상태 Event 수 (1-3)
 ● 산출 방식 (Run-time)
   - 집계 대상 Module : 전체
   - 집계 대상 Device : Sample Pretreatment, Sample Aliquot, M9600, STARlet, Sealer, CFX96
   - Module 또는 Device 상태가 Running인 시간의 누적 값
   - 예시 : 11시간 55분 → 11h
 ● 정책 참고 : POL-EQP-001, POL-EQP-005, POL-EQP-009

1-1  검색 필터(Dropdown)
 ● 기능 : Module Name 검색
 ● Default : All Modules
 ● 드롭다운 리스트 항목 : 전체 Module List 기준, 오름차순

1-2  Module 개수 표기
 ● 정의 : Module List 타이틀 옆에 (n) 노출
 ● 표출 항목 : 지금 목록의 Module 총 개수(그 페이지가 아니라 목록 전체)

1-3  Event 아이콘
 ● 정의 : Module 단위 Event 현황 확인 및 접근
 ● 표출 항목
   - 빨간 박스 : Status가 Open인 Error 수
   - 노란 박스 : Status가 Open인 Warning 수
 ● 동작
   - 클릭 시 그 Module Name으로 필터링된 Event History Popup 노출 (최신순)
   - Event가 0건이어도 클릭 가능

1-4  Door 상태값 표기
 ● 표출 항목 : Open / Closed
 ● Door가 2개인 Module(Sample Preparation)
   - 하나라도 열려 있으면 Open
   - 모두 닫혀 있으면 Closed
 ● 정책 참고 : POL-EQP-001

2  Module Details(우측 영역)
 ● 정의 : 선택한 Module 안 Unit 단위 장비의 상세 정보 영역

2-2  [Management] 버튼
 ● 동작 : 클릭 시 조건 없이 Management Popup 노출 : TI-INS-02-01-P
 ● 정책 참고 : POL-EQP-009

3  Door 영역
 ● 정의 : Module의 Door 열림 상태와 잠금 상태 확인
 ● 표출 항목
   - Door : Door Unit 이름
   - Status : Open / Closed
   - Lock Status : Locked / Unlocked

4  Device 영역
 ● 정의 : Module에 속한 검사 장치 상태 확인
 ● 표출 항목
   - Unit : Device 장비명
   - Connected : Device 연결 상태 (Connected / Disconnected)
   - Status : 검사 장치 상태 (Ready, Running, Error)
   - Enabled : Device 사용 여부 (Enabled = Y / Disabled = N), 해당 없으면 '-'
 ● 정책 참고 : POL-EQP-009

5  Storage 영역
 ● 정의 : 검체 · 소모품 · 시약을 저장하는 Unit 정보 영역
 ● 표출 항목
   - Unit : Storage 장비명
   - Docking Status : 트롤리 단위 입고 Unit의 Trolley 또는 서랍 도킹 상태 (Docked / Undocked)
   - Storage Type : 상온 · 냉장 저장소 구분
   - Current Temp : Storage Type이 냉장일 때 현재 온도
 ● 공통 UX 참고 : COMM-4-a

6  Waste 영역
 ● 정의 : 소모품 · 시약 사용 후 폐기되는 Waste Unit 현황 영역
 ● 표출 항목
   - Unit : Waste Bin/Bottle 장비명 (예: Waste Bin (Upper), Liquid Waste Bottle (Upper))
   - Docking Status : Waste Bin 도킹 상태
   - Waste Bin/Bottle Status : Available / Almost Full / Full
 ● 공통 UX 참고 : COMM-4-a

7  Event History 영역
 ● 정의 : 선택한 Module의 Event 내역
 ● 표출 항목
   - 발생 시간 최신순으로 Status가 Open인 Event 최대 4건
   - Date/Time : 오늘이면 hh:mm:ss, 오늘 이전이면 mm-dd

7-1  [More] 버튼
 ● 동작
   - 클릭 시 Event History Popup 노출
   - 클릭한 Module Name과 일치하는 Event만 최신순으로 노출
```

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | Module 목록 | Universal PCR (2), Sample Storage (2), Prep Consumable Storage (1) … 10행 | 기존 화면 (이름 (번호) 띄어쓰기) |
| 1 | Connected | Connected / Disconnected | `glossary/status-values.csv` |
| 5 | Unit | STAT Storage | `glossary/module-units.csv` |
| 6 | Unit | Waste Bin (Upper), Waste Bin (Lower), Liquid Waste Bottle (Upper) | `glossary/module-units.csv` |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | Language ID | 상태 (신규 / 변경 / 제거) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- |
| 1 | Module List, Module, Connected, Status, Door, Enabled, Run-time(h), Event | | | |
| 1-1 | All Modules | | | |
| 2-2 | Management | | | |
| 3 | Door, Status, Lock Status, Open, Closed, Locked, Unlocked | | | |
| 4 | Device, Unit, Connected, Status, Enabled | | | |
| 5 | Storage, Unit, Docking Status, Storage Type, Current Temp, No item | | | |
| 6 | Waste Bin/Bottle, Unit, Docking Status, Waste Bin/Bottle Status | | | |
| 7 | Event History | | | |
| 7-1 | More | | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |

## 케이스

없음 (기존 원본에 케이스 프레임 없음)

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |

## 변경 확인

| 번호 (C) | 디스크립션 번호 | 기존 화면 | 바꿔 그린 것 | 근거 (정책 ID · 반영 대기 ID · 이유) | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- |
| C10 | 1 | Connected / Unconnected | 상태값 수정 (Unconnected → Disconnected) | R01, `glossary/status-values.csv` | O | |
| C11 | 5 | STAT Storage (Upper), STAT Storage (Lower) | 표기 수정 (→ STAT Storage) | R03, `glossary/module-units.csv` | O | |
| C12 | 6 | Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower) | 표기 수정 (→ Waste Bin (Upper), Waste Bin (Lower)) | R04, `glossary/module-units.csv` | O | |
| C13 | 1, 6 | Sample Storage(2), Liquid Waste Bottle(Upper) | 표기 수정 (이름 (번호) 띄어쓰기) | R05 | O | |
| C14 | 6 | Waste Status | 표기 수정 (Waste Status → Waste Bin/Bottle Status) | R06, `glossary/terms.csv` | O | |
| C15 | 4 | T-IO S, Account type | 표기 수정 (T-IO S → T-IOS, Account type → User Type) | R09, `glossary/terms.csv` | - | |
| C16 | 7 | hh:dd:ss(시:분:초) | 표기 수정 (hh:dd:ss → hh:mm:ss) | R11, 오타 | O | |
| C18 | 0 | 취소선 2-1 Error Rate, 2-2 옛 조건, 4-1 [Run-time Info], 4-2 [Enable setting] | 취소선 항목 4개 지움 (기존 디스크립션에서 이미 지운 기능) | 기존 화면 취소선 (R02 · R07 · R08 제외) | - | |

## 질문 대기

| 번호 (Q) | 디스크립션 번호 | 질문 | 논의 대상 (DS) | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 표기 | Connected 항목 상태값 "Connected / Unconnected" | Connected / Disconnected | `glossary/status-values.csv` 연결 상태 | 대기 |
| R02 | 디스크립션 | 2-1 Error Rate가 남아 있음. 버전 메모 v2.1.01은 "Error Rate 제거(2-1)" | 취소선으로 이미 제거됨. 표시 위치는 고객 논의 중(CA-0001) | POL-EQP-010 | 제외 (2026-11-04, 취소선) |
| R03 | 표기 | Module Details (Sample Preparation): STAT Storage (Upper), STAT Storage (Lower) | STAT Storage | `glossary/module-units.csv`, `archive/glossary/review-v0.md` | 대기 |
| R04 | 표기 | Module Details (Sample Preparation): Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower) | Waste Bin (Upper), Waste Bin (Lower) | 같음 | 대기 |
| R05 | 표기 | Liquid Waste Bottle(Upper), Sample Storage(2) 등 이름과 번호 붙여 씀 | Liquid Waste Bottle (Upper), Sample Storage (2) | 이름 (번호) 띄어쓰기 | 대기 |
| R06 | 표기 | Waste Status | Waste Bin/Bottle Status | `glossary/terms.csv` | 대기 |
| R07 | 디스크립션 | 4-1 [Run-time Info], 4-2 [Enable setting] 설명이 남아 있음 | 취소선으로 이미 제거됨 | Figma 취소선 | 제외 (2026-11-04, 취소선) |
| R08 | 디스크립션 | 2-2 "[Enable setting → Management] 버튼 ... 아래 조건 모두 제거 요청" 메모 | 옛 조건은 취소선으로 제거됨. [Management]를 누르면 조건 없이 Popup을 엶 | Figma 취소선, POL-EQP-009 | 제외 (2026-11-04, 취소선) |
| R09 | 표기 | T-IO S, Account type | T-IOS, User Type | 오타, `glossary/terms.csv` | 대기 |
| R10 | 표기 | LNB에 Instrument가 두 번 | 확인 필요 (디자인 화면 기준) | 화면 글자 | 대기 (확인 필요) |
| R11 | 점검 발견 | 7 Date/Time 표기 "hh:dd:ss(시:분:초)" | hh:mm:ss | 오타, 2026-11-17 다시 옮김 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.01 | | Error Rate 제거(2-1). Setting 버튼명 변경 Setting → Management(2-2). Run-time Info 버튼 제거(4-1). Enable setting 버튼 제거(4-2). 좌측 목록과 Device 영역 항목명 Enable → Enabled. Run-time 집계 대상에 Sample Pretreatment, Sample Aliquot 추가 | 서보경 | Figma 버전 메모 |
| 2.1.06 | 2026-09-28 | Detail Door 영역 UI 변경 | 서보경 | Figma 버전 메모 |
| | 2026-11-12 | 연동 변경: L-IOS Client Mode 이름 바꿈 (머리말 키 `client_mode`, 표기 L-IOS Client Mode · MS Mode, 경로 `policy/client-mode-matrix.csv`) | 서보경 | DS-0001 |
| | 2026-11-17 | 화면 MD를 tobe로 새로 씀 (기존 작업방 Instruments 2.1 2차 [3249-111981](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-111981) · Ver 2.1.06). 반영 대기 R01 · R03 ~ R06 · R09 · R11 반영(작업 중), 취소선 항목 지움, C10 ~ C16 · C18. 작업방에 새로 그림 (섹션 [2815-24789](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2815-24789), Figma는 R041 · R007에서 그림) | Claude (요청 최고관리자) | 20261117-최고관리자-instruments |
