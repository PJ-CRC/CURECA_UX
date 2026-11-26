---
cid: LI-EVT-02-P
pair_cid: TI-EVT-02-P
tl_relation: 동일
title: Event Message
path: Event History > Event Message
type: Popup
version: 2.1.14
date: 2026.10.26
author: 서보경
client_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: [POL-EVT-001, POL-EVT-003]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1259
---
# LI-EVT-02-P Event Message

- T/L 차이: 0 화면 정의만 다름(L-IOS는 노출되는 L-IOS Client Mode가 정해져 있음). 1 ~ 12는 같음
- 호출하는 화면: [LI-EVT-01-P] Event Detail (9 [View Details])
- 호출되는 곳: Event 발생 시
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  <span style="color:red">Event Message</span> 화면**
- 정의
  - Event 발생 시, 화면에 <span style="color:red">노출</span>되는 <span style="color:red">Event Message Popup</span>
- 노출 조건
  - <span style="color:red">노출되는 L-IOS Client Mode : Main Mode, Console Mode (그 외 Mode 미노출)</span>
  - 최초 로그인 이후 발생되는 메시지부터 노출되며, 여러 개 발생 시 누적되어 <span style="color:red">Popup</span>으로 동시에 노출
  - 노출 형태 : 여러 개의 <span style="color:red">Popup</span>이 겹쳐서 화면에 <span style="color:red">노출</span>
- 스크롤
  - 노출되는 내용이 많을 경우, 줄임 처리하지 않고 모두 노출
  - 최대 <span style="color:red">Popup</span> 크기를 초과할 경우, 스크롤 적용(UI 참고)
- User Type : Service, Admin, User
- L-IOS Client Mode : Main Mode, Console Mode
- 정책 참고 : POL-EVT-003

**1  Level**
- <span style="color:red">Event</span>의 Level인 <span style="color:red">Error</span>, <span style="color:red">Warning</span> 값 <span style="color:red">노출</span>
- 정책 참고 : POL-EVT-001

**2  Code**
- Event Code <span style="color:red">노출</span>

**3  Type**
- Instrument, Inventory, Sample, System 중 해당되는 항목 <span style="color:red">노출</span>
- 정책 참고 : POL-EVT-001

**4  Description**
- <span style="color:red">Event</span> 내용 <span style="color:red">노출</span>

**5  Effect**
- Event Code에 연계된 Scenario Code의 'description' 내용 <span style="color:red">노출</span>
- 표기 방식
  - 연계된 코드가 없는 경우, '-' 노출
  - N개인 경우, 목록형으로 기호를 표기하여 N개 노출
- 참고 문서명 : [SRD] CURECA Prep 및 Dx 장비 Event 정의

**6  Recommended Action**
- 조치 방법 내용 <span style="color:red">노출</span>

**7  Module, Unit**
- Event가 발생한 <span style="color:red">Instrument</span> 정보 <span style="color:red">노출</span>

**8  [Close] 버튼**
- 동작
  - 클릭 시, <span style="color:red">Popup</span> 닫힘
  - N개일 경우, <span style="color:red">Popup</span>이 닫히며 메시지 총 개수에서 제거되고 여러 개 <span style="color:red">Popup</span> 구조 리스트에서 제거
- 정책 참고 : POL-EVT-003

**9  [View Details] 버튼**
- 동작
  - 클릭 시, 해당 Event의 <span style="color:red">Event Detail</span> 화면으로 이동 : LI-EVT-01-P
  - N개일 경우, 클릭 시 <span style="color:red">Popup</span>이 모두 닫히며 이동
- 정책 참고 : POL-EVT-003

**10  [Close All] 버튼**
- 노출 조건
  - Event Message Popup이 2개 이상일 경우 노출(1개일 경우 미노출)
- 동작
  - 클릭 시, 화면에 떠 있는 모든 Event Message Popup 일괄 닫힘
- 정책 참고 : POL-EVT-003

**11  메시지 개수 표기**
- 노출 조건
  - Event Message Popup이 2개 이상일 경우 노출(1개일 경우 미노출)
- 노출 항목
  - 현재 보고 있는 메시지 순서 / 총 발생한 Event Message 개수
- 정책 참고 : POL-EVT-003

**12  [< >] 메시지 변경 버튼**
- 동작
  - 클릭 시, 다음 메시지 또는 이전 메시지 확인 가능
  - [Close]를 클릭하지 않으면, 확인한 메시지도 사라지지 않고 계속 남아 순서대로 다시 확인 가능
- 공통 UX 참고 : COMM-5-m(3/4)

## 케이스

없음 (`Event History_asis` 페이지에 LI-EVT-02-P 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| - | - | - | 없음 | - |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | Level 아이콘 | Error | 기존 원본 `3543:47634` (Icon/Popup Status) · `glossary/status-values.csv` Event Level |
| 2 | Event Code | E0203 | 기존 원본 `3543:47634` |
| 3 | Type | Inventory | `glossary/status-values.csv` Event Type (기존 Consumable → Inventory) |
| 4 | Description | GANTRY Well Plate Expansion Operation Time Out Error | 기존 원본 |
| 5 | Effect | Failed to transfer Consumable to next Module / Failed to unload consumable from STARlet | 기존 원본 |
| 6 | Recommended Action | Check GANTRY Well Plate Expansion Cylinder | 기존 원본 |
| 7 | Module · Unit | High-throughput Extraction (1) · M9600 | 기존 원본, `glossary/glossary.md` (이름과 번호 띄어 씀) |
| 11 | 메시지 개수 | 1/20 | 기존 원본 |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| {n}/{m} | 화면 11 (n = 1, m = 20) | |
| Close All | 화면 10 | |
| Event Code: | 화면 2 | |
| Type: | 화면 3 | |
| Inventory | 화면 3 | |
| Instrument | 디스크립션 3 | |
| Sample | 디스크립션 3 | |
| System | 디스크립션 3 | |
| Error | 디스크립션 1 | |
| Warning | 디스크립션 1 | |
| Description | 화면 4 | |
| Effect | 화면 5 | |
| Recommended Action | 화면 6 | |
| Module: | 화면 7 | |
| Unit: | 화면 7 | |
| High-throughput Extraction (1) | 화면 7 | |
| M9600 | 화면 7 | |
| Close | 화면 8 | |
| View Details | 화면 9 | |
