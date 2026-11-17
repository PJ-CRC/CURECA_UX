---
cid: LI-INS-01-T
pair_cid: TI-INS-01-T
tl_relation: 기능 추가
title: Overview Tab
path: Instruments > Overview
type: Page
version: 2.1.17
date: 2026.11.13
author: 이상헌
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: [POL-EQP-001, POL-EQP-002, POL-EQP-008 · DS-0004, POL-EQP-009]
basis:
basis_versions:
source: tobe
figma:
---
# LI-INS-01-T Overview Tab

- T/L 차이: TI-INS-01-T에 더해 [Door Control] 버튼(6)이 있음
- 호출하는 화면: [LI-INS-01-P] Door Control Popup ([Door Control] → Popup), 각 Module Type Tab ([View All])

## 디스크립션

```
0  Overview 화면
 ● 정의
   - CURECA 장비의 현황을 확인하고 상세 내용을 조회하는 화면
   - 장비를 Module 단위로 조회
 ● 동작
   - LNB의 Instrument 메뉴로 진입
 ● User Type : Service, Admin, User
 ● L-IOS Client Mode : Main Mode, Console Mode, MS Mode

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
   - 왼쪽 항목(Connected / Status / Door Status) 기준으로 Module 수를 구분하여 노출
   - 자세한 상태값에 대한 내역은 우측의 Instrument Detail Info page 참고

3-6  Event History 요약 영역
 ● 정의 : Module Type에서 발생한 Event 수 합산 노출
 ● 산출 방식
   - Event Status가 Open인 Event만 합산
   - Level별로 Error와 Warning 수를 따로 노출
 ● 표출 항목
   - Error 수 : 빨강
   - Warning 수 : 노랑

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

5  Door Status Tooltip
 ● 동작 : Door Status 옆 Info 아이콘에 올리면 툴팁 노출
 ● 툴팁 내용 : Shows door open/close status and provides Unlock / Lock functions to open or lock the module door
 ● 공통 UX 참고 : COMM-5-o

6  [Door Control] 버튼
 ● 정의
   - Module Type별 Door Control Popup을 여는 버튼
 ● 활성화 조건
   - 공통 UX 참고 : COMM-3-a
 ● 동작
   - 클릭 시 그 Module Type의 Door Control Popup 노출 : LI-INS-01-P
   - Popup에서 Door별 [Unlock](잠금 해제) · [Lock](잠금) 가능
   - Door를 닫아도 자동으로 잠기지 않음, [Lock]을 눌러야 잠김
 ● 정책 참고 : POL-EQP-008

7  범례 영역
 ● 정의 : 상단 상태값 표시 영역의 범례
 ● 표출 항목 : Connected, Disconnected, Running, Paused, Error, Ready
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
| 5 | Shows door open/close status and provides Unlock / Lock functions to open or lock the module door | | | |
| 6 | Door Control | | | |
| 7 | Connected, Disconnected, Running, Paused, Error, Ready | | | |

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
| C1 | 0 | Cureca 장비의 현황 | 표기 수정 (Cureca → CURECA) | R01, `glossary/terms.csv` | - | |
| C3 | 3-2 | Total / In Use / Not in Use | 표출 항목을 화면 표기대로 (Enabled n · Total n (Disabled n)) | R02, POL-EQP-009 | - | |
| C4 | 2, 3-2 | Dignosctics, Enablde | 표기 수정 (Dignosctics → Diagnostics, Enablde → Enabled) | R03, 오타 | O | |
| C7 | 6 | 기능 활성화 조건 COMM-3-a, Door Control 팝업에서 Unlock · Lock 가능 | 동작을 Door Control 기준으로 정리 (Popup 호출, Door별 [Unlock] · [Lock], 자동 잠금 없음) | R04, POL-EQP-008 · DS-0004 | - | |
| C8 | 6 | 디스크립션 제목 "Unlock 버튼 (L-IOS Only)" / 화면 글자 "Door Control" | 버튼 이름 통일 (Unlock 버튼 → [Door Control] 버튼) | R05, 화면 글자 | - | |

## 질문 대기

| 번호 (Q) | 디스크립션 번호 | 질문 | 논의 대상 (DS) | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- |
| Q2 | 6 | [Door Control] 버튼 활성화 조건 (기존 디스크립션은 COMM-3-a만, 정책서는 Popup 안 [Unlock] 조건만 정함) | | |

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | "Cureca 장비의 현황" | CURECA | `glossary/terms.csv` | 작업 중 (20261117-최고관리자-instruments) |
| R02 | 디스크립션 | 3-2가 "Total / In Use / Not in Use" | 화면(v2.1.06)은 "Enabled n · Total n (Disabled n)". 화면과 POL-EQP-009의 Enabled 표기에 맞춤 | Figma 버전 메모 v2.1.06 | 작업 중 (20261117-최고관리자-instruments) |
| R03 | 표기 | Enablde, Dignosctics | Enabled, Diagnostics | 오타 | 작업 중 (20261117-최고관리자-instruments) |
| R04 | 디스크립션 | 6 "기능 활성화 조건 - 공통 UX 참고 : COMM-3-a" | Door Control 잠금 해제 조건은 POL-EQP-008 참조 | POL-EQP-008 | 작업 중 (20261117-최고관리자-instruments) |
| R05 | 문구 | Door 버튼 라벨이 화면은 "Door Control", 디스크립션은 "Unlock 버튼" | 하나로 통일 | 화면 글자와 디스크립션 6 | 작업 중 (20261117-최고관리자-instruments) |
| R06 | 점검 발견 | 3-5 "자세한 상태값에 대한 내역은 우측의 Instrument Detail Info page 참고" (없는 화면을 가리킴) | 상태값 · Door 2개 Module 표시를 풀어 씀 (TI-INS-01-T R06과 같게) | 2026-11-17 3단계 다시 그리며 찾음, POL-EQP-001 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.06 | 2026-09-28 | Module 상태값에 Paused 추가. 상태값 표기 순서 변경. 상단 Enabled 요약 영역 UI 변경. 단어 변경 Enable → Enabled. Door Control 버튼 UI 변경 | 서보경 | Figma 버전 메모 |
| | 2026-11-12 | 연동 변경: L-IOS Client Mode 이름 바꿈 (머리말 키 `client_mode`, 표기 L-IOS Client Mode · MS Mode, 경로 `policy/client-mode-matrix.csv`) | 서보경 | DS-0001 |
| 2.1.17 | 2026-11-13 | Door Status 툴팁 · Unlock 버튼(6) 정의에 Lock 기능 추가 | 이상헌 | Figma 버전 메모 v2.1.17 |
| | 2026-11-17 | 작업방에 새로 그림 (기존 작업방 Instruments 2.1 2차 [10069-367211](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-367211) · Ver 2.1.17). `source: asis` → `tobe`, 화면 정보 Ver · Date · 작성자를 기존 패널 값(2.1.17 · 2026.11.13 · 이상헌)으로 맞춤, 반영 대기 R01 ~ R05 반영(작업 중), R06(점검 발견) 더함, C1 · C3 · C4 · C7 · C8 · Q2 | Claude (요청 최고관리자) | 20261117-최고관리자-instruments, R01 ~ R05 |
