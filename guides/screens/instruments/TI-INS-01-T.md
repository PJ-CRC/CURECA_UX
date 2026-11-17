---
cid: TI-INS-01-T
pair_cid: LI-INS-01-T
tl_relation: 기능 추가
title: Overview Tab
path: Instruments > Overview
type: Page
version: 2.1.06
date: 2026.09.28
author: 서보경
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-EQP-001, POL-EQP-002, POL-EQP-009]
basis:
basis_versions:
source: tobe
figma:
---
# TI-INS-01-T Overview Tab

- T/L 차이: L-IOS(LI-INS-01-T)에는 [Door Control] 버튼이 더 있음
- 호출하는 화면: 각 Module Type Tab ([View All] → 같은 Instruments 화면의 그 Module Type Tab)

## 디스크립션

```
0  Overview 화면
 ● 정의
   - CURECA 장비의 현황을 확인하고 상세 내용을 조회하는 화면
   - 장비를 Module 단위로 조회
 ● 진입 방법
   - LNB의 Instrument 메뉴로 진입
 ● User Type : Service, Admin, User

1  Tab 영역
 ● 정의
   - Overview : 전체 장비 현황을 이미지 기반 대시보드 형태로 제공
   - All : 전체 장비 정보를 목록 형태로 제공
   - 그 외 Tab : Module Type 기준 Tab
 ● 동작
   - 등록되지 않은 Module Type Tab 진입 시 Alert_004 노출
     (No registered modules available for this type. Displayed only when modules are registered.)

2  Prep / Dx 장비 구분 영역
 ● 표출 항목
   - Sample Preparation (Prep) System : 3개 Module로 구성, 검체 입고 후 전처리 과정을 수행하는 단계
   - Diagnostics (Dx) System : 5개 Module로 구성, 전처리 이후 진단 과정을 수행하는 단계

3  Module 영역
 ● 정의
   - Module Type 단위로 구분하여 정보 제공
   - Module Type별 전체 장비 대수의 상태를 요약 형태로 제공

3-1  Module Type Title
 ● 정의 : 카드 상단에 Module Type 이름 표기

3-2  Module 사용 여부 Status
 ● 표출 항목
   - Enabled n : 사용 상태(Enabled)인 Module 수
   - Total n : 그 Module Type의 전체 등록 Module 수
   - (Disabled n) : 미사용 상태(Disabled)인 Module이 있을 때만 노출, 그 수량
 ● 정책 참고 : POL-EQP-009

3-3  Module 이미지 영역
 ● 정의 : Module Type을 대표하는 장비 이미지 노출

3-4  [View All] 버튼
 ● 동작
   - 클릭 시 그 Module Type Tab으로 이동
   - 같은 Type의 Module 목록 노출

3-5  Module Status 영역
 ● 정의
   - 상태별로 해당하는 Module 수 노출
   - 왼쪽 항목(Connected / Status / Door Status) 기준으로 구분
 ● 표출 항목
   - Connected : 연결 상태별 Module 수 (Connected, Disconnected)
   - Status : 장비 모듈 상태별 Module 수 (Ready, Running, Paused, Error)
   - Door Status : 장비 모듈 도어 열림 상태별 Module 수 (Open, Closed)
   - Door가 2개인 Module(Sample Preparation)은 Door가 하나라도 열려 있으면 Open, 모두 닫혀 있으면 Closed
   - 해당 Module이 없으면 '-' 노출
 ● 정책 참고 : POL-EQP-001

3-6  Event History 요약 영역
 ● 정의 : Module Type에서 발생한 Event 수 합산 노출
 ● 산출 방식
   - Event Status가 Open인 Event만 합산
   - Level별로 Error와 Warning 수를 따로 노출
 ● 표기
   - Error : 빨강
   - Warning : 노랑

4  Event 표기 영역
 ● 정의
   - Module에서 발생한 장비 Event가 있을 때 아이콘 노출
   - Event Level(Error / Warning)에 따라 아이콘 구분

4-1  Event Icon
 ● 노출 조건 : Event Status가 Open인 Event가 있을 때
 ● 동작
   - 아이콘 클릭 시 툴팁 노출
   - [X] 클릭 시 툴팁 닫힘
 ● 표출 항목
   - Open 상태 Event 중 최신 1건
   - 표기 : [{Module Name}] {Event Code}, {Event Description}

5  범례 영역
 ● 정의 : 상단 상태값 표시 영역의 범례
 ● 표출 항목 : Connected, Disconnected, Running, Paused, Error, Ready

6  Door Status Tooltip
 ● 동작 : Door Status 옆 Info 아이콘에 올리면 툴팁 노출
 ● 툴팁 내용 : Shows door open/close status and provides Unlock / Lock functions to open or lock the module door
 ● 공통 UX 참고 : COMM-5-o
```

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 2 | 장비 구분 | Sample Preparation (Prep) System, Diagnostics (Dx) System | 기존 화면 (오타 고침) |
| 3-1 | Module Type | Sample Storage, Prep Consumable Storage, Sample Preparation, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR | `glossary/module-units.csv`, 기존 화면 |
| 3-2 | 사용 여부 | Enabled 3 · Total 4 (Disabled 1) 등 기존 화면 값 | 기존 화면 (Enablde → Enabled) |
| 3-5 | 상태값 | Connected, Disconnected / Ready, Running, Paused, Error / Open, Closed | `glossary/status-values.csv` |
| 4-1 | Event 툴팁 | [HT Extraction(3)] E0001, Plate Gripper Failure. | 기존 화면 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | Language ID | 상태 (신규 / 변경 / 제거) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- |
| 1 | Overview, All, Sample Storage, Prep Consumable Storage, Sample Preparation, Ht Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR | | | |
| 1 | No registered modules available for this type. Displayed only when modules are registered. | | | |
| 2 | Sample Preparation (Prep) System | | | |
| 2 | Diagnostics (Dx) System | | | |
| 3-1 | Sample Storage, Prep Consumable Storage, Sample Preparation, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR | | | |
| 3-2 | Enabled, Total, Disabled | | | |
| 3-4 | View All | | | |
| 3-5 | Connected, Status, Door Status, Open, Closed | | | |
| 3-6 | Event | | | |
| 5 | Connected, Disconnected, Running, Paused, Error, Ready | | | |
| 6 | Shows door open/close status and provides Unlock / Lock functions to open or lock the module door | | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |
| 1 | Alert_004 | 등록되지 않은 Module Type Tab 진입 시 | OK : 팝업 닫힘, 기존 화면 유지 |

## 케이스

없음 (기존 원본에 케이스 프레임 없음)

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |

## 변경 확인

| 번호 (C) | 디스크립션 번호 | 기존 화면 | 바꿔 그린 것 | 근거 (정책 ID · 반영 대기 ID · 이유) | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- |
| C1 | 0 | Cureca 장비의 현황 | 표기 수정 (Cureca → CURECA) | R02, `glossary/terms.csv` | - | |
| C2 | 1 | Alert_L_004 팝업 노출 | 알럿 ID 수정 (Alert_L_004 → Alert_004, 문구 함께 적음) | R01, `policy/alert-catalog.csv` | O | |
| C3 | 3-2 | Total / In Use / Not in Use | 표출 항목을 화면 표기대로 (Enabled n · Total n (Disabled n)) | R04, POL-EQP-009 | - | |
| C4 | 2, 3-2 | Dignosctics, Enablde | 표기 수정 (Dignosctics → Diagnostics, Enablde → Enabled) | R05, 오타 | O | |
| C5 | 3-5 | 자세한 상태값은 우측의 Instrument Detail Info page 참고 | 상태값 · Door 2개 Module 표시를 풀어 씀 | R06, POL-EQP-001, `glossary/status-values.csv` | - | |
| C6 | 0 | 패널 CID TI-INS-02-T | 패널 CID 수정 (TI-INS-02-T → TI-INS-01-T) | R03, IA · 프레임 이름 | - | |
| C9 | 0 | 디스크립션 없는 번호 표시 6(Event 줄), Door Status Info 아이콘 번호 5(범례 5와 겹침) | 번호 표시 정리 (설명 없는 6 지움, Door Status 툴팁 5 → 6) | 기존 화면 번호 표시가 디스크립션과 다름 | - | |

## 질문 대기

| 번호 (Q) | 디스크립션 번호 | 질문 | 논의 대상 (DS) | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- |
| Q1 | 6 | T-IOS Door Status 툴팁 문구 (기존 T 디스크립션에 없음. L-IOS 문구를 따랐으나 Unlock / Lock 기능 안내가 T-IOS에 맞는지) | | |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 알럿 | 등록되지 않은 Module Tab 진입 시 "Alert_L_004" | Alert_004 | `policy/alert-catalog.csv`, LI-INS-01-T | 작업 중 (20261117-최고관리자-instruments) |
| R02 | 디스크립션 | "Cureca 장비의 현황" | CURECA | `glossary/terms.csv` | 작업 중 (20261117-최고관리자-instruments) |
| R03 | 화면 정보 | 오른쪽 패널의 CID 칸이 "TI-INS-02-T" | TI-INS-01-T | Figma 프레임 이름, IA | 작업 중 (20261117-최고관리자-instruments) |
| R04 | 디스크립션 | 3-2가 "Total / In Use / Not in Use" | 화면(v2.1.06)은 "Enabled n · Total n (Disabled n)". 디스크립션을 화면과 POL-EQP-009의 Enabled 표기에 맞춤 | Figma 버전 메모 v2.1.06 | 작업 중 (20261117-최고관리자-instruments) |
| R05 | 표기 | Enablde, Dignosctics | Enabled, Diagnostics | 오타 | 작업 중 (20261117-최고관리자-instruments) |
| R06 | 디스크립션 | 3-5 "우측의 Instrument Detail Info page 참고" | 상태값은 `glossary/status-values.csv`와 POL-EQP-001 참조 | POL-EQP-001 | 작업 중 (20261117-최고관리자-instruments) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.06 | 2026-09-28 | Module 상태값에 Paused 추가. 단어 변경 Enable → Enabled | 서보경 | Figma 버전 메모 |
| | 2026-11-12 | 연동 변경: L-IOS Client Mode 이름 바꿈 (머리말 키 `client_mode`, 표기 L-IOS Client Mode · MS Mode, 경로 `policy/client-mode-matrix.csv`) | 서보경 | DS-0001 |
| | 2026-11-17 | 작업방에 새로 그림 (기존 작업방 Instruments 2.1 2차 [3249-111508](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-111508) · Ver 2.1.06). `source: asis` → `tobe`, 반영 대기 R01 ~ R06 반영(작업 중), C1 ~ C6 · C9 · Q1 | Claude (요청 최고관리자) | 20261117-최고관리자-instruments, R01 ~ R06 |
