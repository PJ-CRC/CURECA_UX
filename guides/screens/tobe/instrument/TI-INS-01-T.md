---
cid: TI-INS-01-T
pair_cid: LI-INS-01-T
tl_relation: 기능 추가
title: Overview Tab
path: Instrument > Overview Tab
type: Page
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-EQP-001, POL-EQP-002, POL-EQP-009, POL-EVT-001]
basis:         # 화면 기준: 시각 · history 커밋 (reference-rules/work-log.md "작업 기준")
basis_versions: # 문서마다 basis 시각 전에 마지막으로 바뀐 때 (rules · policy · glossary · screens · ux_guide 모두 @날짜)
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=3219-23336
---
# TI-INS-01-T Overview Tab

- T/L 차이: L-IOS(LI-INS-01-T)에는 Module 카드마다 [Door Control] 버튼이 더 있음
- 호출하는 화면: [TI-INS-02-T] All Tab (1 Tab → All), Module Type Tab (3-4 [View All] → 그 Module Type Tab)
- 호출되는 곳: LNB Instrument 메뉴

## 디스크립션

**0  Overview Tab 화면**
- 정의
  - <span style="color:red">CURECA</span> 장비의 현황을 확인하고 상세 내용을 조회하는 화면
  - 장비를 Module 단위로 조회 가능
- 동작
  - LNB의 Instrument 메뉴 선택 시 진입
- User Type : Service, Admin, User

**1  Tab 영역**
- 정의
  - Overview : 전체 장비 현황을 이미지 기반 대시보드 형태로 제공
  - All : 전체 장비 정보를 목록(List) 형태로 제공
  - 그 외 Tab : Module Type 기준
- 동작
  - 등록되지 않은 Module Tab 진입 시 팝업 노출 : <span style="color:red">Alert_004</span>
- 공통 UX 참고 : COMM-5-s

**2  Prep / Dx 장비 구분 영역**
- Prep System
  - 총 3개의 Module로 구성
  - 검체 입고 후 전처리 과정을 수행하는 단계
- Dx System
  - 총 5개의 Module로 구성
  - 전처리 이후의 진단 과정을 수행하는 단계

**3  Module 영역**
- 정의
  - Module 단위로 구분하여 정보 제공
  - 각 Module별 전체 장비 대수의 상태를 요약 형태로 제공

**3-1  Module Type Title**
- 정의 : 각 카드 상단에 Module Type 이름 노출

**3-2  Module 사용 여부 Status**
- 표출 항목
  - Total : 해당 Module Type의 전체 등록 수 노출
  - <span style="color:red">~~In Use : 사용 상태의 Module 수 노출~~</span>
  - <span style="color:red">~~Not in Use : 미사용 상태의 Module이 존재할 경우에만 노출되며, 해당 수량 노출~~</span>
  - <span style="color:red">Enabled : 사용(Enabled) 상태의 Module 수 노출</span>
  - <span style="color:red">Disabled : 미사용(Disabled) 상태의 Module이 있을 경우에만 노출</span>
- <span style="color:red">표기 : Enabled n · Total n (Disabled n)</span>
- 정책 참고 : POL-EQP-009

**3-3  Module 이미지 영역**
- 정의 : Module Type에 따라 해당 장비를 대표하는 이미지가 카드 영역에 노출

**3-4  [View All] 버튼**
- 동작
  - 클릭 시 해당 Module Type Tab으로 이동
  - 동일 Type의 Module 목록 노출

**3-5  Module Status 영역**
- 정의
  - 각 상태별로 해당되는 Module 수 노출
  - 좌측 항목(Connected / Status / Door Status) 기준으로 Module 수를 구분하여 노출
  - <span style="color:red">~~자세한 상태값에 대한 내역은 우측의 Instrument Detail Info page 참고~~</span>
- <span style="color:red">표출 항목</span>
  - <span style="color:red">Connected : Module 연결 상태 (Connected, Disconnected)</span>
  - <span style="color:red">Status : 장비 모듈 상태</span>
  - <span style="color:red">Door Status : 장비 모듈 도어 열림 상태 (Open, Closed)</span>
- 공통 UX 참고 : COMM-4-a(3/4)
- 정책 참고 : POL-EQP-001, POL-EQP-002

**3-6  Event History 요약 영역**
- 정의 : 각 Module Type에서 발생한 Event 개수 합산 노출
- 산출 방식
  - Event Status가 Open인 Event만 합산
  - Level을 구분하여 Error와 Warning 수를 따로 노출
- 표기
  - Error : 빨강
  - Warning : 노랑
- 정책 참고 : POL-EVT-001

**4  Event 표기 영역**
- 노출 조건 : Module에서 발생한 장비 Event가 있을 경우 노출
- 표기
  - 아이콘 노출
  - Event Level에 따라 차등 표현(Error/Warning)

**4-1  Event Icon(Tooltip)**
- 노출 조건 : Event Status가 Open인 항목이 있을 경우
- 동작
  - 아이콘 클릭 시 툴팁 형식으로 내용 노출
  - [X] 클릭 시 닫힘
- 표시 기준 : Status가 Open인 Event 중 최신 1건
- 표기 형식 : [{Module Name}]\n{Event Code}, {Event Description}
- 공통 UX 참고 : COMM-5-v
- 정책 참고 : POL-EVT-001

**5  범례 영역**
- 정의 : 상단 상태값 표시 영역의 범례 제공

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | Tab | Overview (선택), All, Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR | `glossary/modules.csv` 순서 · 기존 화면 (기존 작업방 3249:111508) |
| 2 | 장비 구분 제목 | Sample Preparation (Prep) System / Diagnostics (Dx) System | 기존 화면 (Prep 시스템의 Sample Preparation은 그대로, `glossary/modules.csv` 2026-11-18) |
| 3-1 | Module 카드 (Prep) | Sample Storage · Consumable Storage · Sample Pre-treatment | `glossary/modules.csv` |
| 3-1 | Module 카드 (Dx) | High-throughput Extraction · Flexible Extraction · PCR Setup · Plate Sealing · Universal PCR | `glossary/modules.csv` |
| 3-2 | 사용 여부 (카드 순서대로) | Enabled 1 · Total 1 / Enabled 1 · Total 1 / Enabled 3 · Total 4 (Disabled 1) / Enabled 3 · Total 3 / Enabled 3 · Total 3 / Enabled 3 · Total 4 (Disabled 1) / Enabled 2 · Total 3 (Disabled 1) / Enabled 6 · Total 6 | 기존 화면 |
| 3-5 | Connected · Status · Door Status | 기존 화면의 카드별 Module 수 그대로 | 기존 화면, `glossary/status-values.csv` |
| 3-6 | Event 개수 | 기존 화면 그대로 (Error 빨강 · Warning 노랑) | 기존 화면 |
| 4-1 | Event 툴팁 | [High-throughput Extraction (3)] E0001, Plate Gripper Failure. | 기존 화면 (Module 이름은 `glossary/modules.csv`) |
| 5 | 범례 | Disconnected, Connected, Running, Paused, Error, Ready | 기존 화면, `glossary/status-values.csv` |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 1 | Overview | 화면 | | - | |
| 1 | All | 화면 | | - | |
| 1 | Sample Storage | 화면 | | - | |
| 1 | Consumable Storage | 화면 | | - | |
| 1 | Sample Pre-treatment | 화면 | | - | |
| 1 | High-throughput Extraction | 화면 | | - | |
| 1 | Flexible Extraction | 화면 | | - | |
| 1 | PCR Setup | 화면 | | - | |
| 1 | Plate Sealing | 화면 | | - | |
| 1 | Universal PCR | 화면 | | - | |
| 2 | Sample Preparation (Prep) System | 화면 | | - | |
| 2 | Diagnostics (Dx) System | 화면 | | - | |
| 3-2 | Enabled | 화면 | | - | |
| 3-2 | Total | 화면 | | - | |
| 3-2 | Disabled | 화면 | | - | |
| 3-4 | View All | 화면 | | - | |
| 3-5 | Connected | 화면 | | - | |
| 3-5 | Status | 화면 | | - | |
| 3-5 | Door Status | 화면 | | - | |
| 3-5 | Open | 화면 | | - | |
| 3-5 | Closed | 화면 | | - | |
| 3-6 | Event | 화면 | | - | |
| 5 | Disconnected | 화면 | | - | |
| 5 | Running | 화면 | | - | |
| 5 | Paused | 화면 | | - | |
| 5 | Error | 화면 | | - | |
| 5 | Ready | 화면 | | - | |

## Alert · Confirm · Toast

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 1 | 알럿 | Alert_004 | 등록되지 않은 Module Tab 진입 시 | OK 선택 시 → 해당 팝업 닫힘, 기존 작업 화면 유지 |

## 케이스

없음 (기존 원본에 케이스 프레임 없음)

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 기준 자료 변경 | 등록되지 않은 Module Tab 진입 시 "Alert_L_004" | Alert_004 | `alert/alert-catalog.csv`, LI-INS-01-T | 작업 중 (20261123-최고관리자-instruments) |
| R02 | 기준 자료 변경 | "Cureca 장비의 현황" | CURECA | `glossary/terms.csv` | 작업 중 (20261123-최고관리자-instruments) |
| R03 | 점검 발견 | 오른쪽 패널의 CID 칸이 "TI-INS-02-T" | TI-INS-01-T | Figma 프레임 이름, IA | 작업 중 (20261123-최고관리자-instruments) |
| R04 | 점검 발견 | 3-2가 "Total / In Use / Not in Use" | 화면(v2.1.06)은 "Enabled n · Total n (Disabled n)". 디스크립션을 화면과 POL-EQP-009의 Enabled 표기에 맞춤 | Figma 버전 메모 v2.1.06 | 작업 중 (20261123-최고관리자-instruments) |
| R05 | 점검 발견 | Enablde, Dignosctics | Enabled, Diagnostics | 오타 | 작업 중 (20261123-최고관리자-instruments) |
| R06 | 기준 자료 변경 | 3-5 "우측의 Instrument Detail Info page 참고" | 상태값은 `glossary/status-values.csv`와 POL-EQP-001 참조 | POL-EQP-001 | 작업 중 (20261123-최고관리자-instruments) |
| R07 | 점검 발견 | 1 · 화면 Tab 이름 "Ht Extraction" (카드 제목은 High-throughput Extraction) | Tab 이름 High-throughput Extraction | `glossary/modules.csv`, 2026-11-23 다시 옮김 | 작업 중 (20261123-최고관리자-instruments) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.18 | 2026-11-23 | 작업방에 새로 그림 (기존 작업방 [3249:111508](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-111508) · Ver 2.1.18). 반영 대기 R01 ~ R07 반영 (작업 중) | Claude (20261123-최고관리자-instruments) | R01 ~ R07 |
