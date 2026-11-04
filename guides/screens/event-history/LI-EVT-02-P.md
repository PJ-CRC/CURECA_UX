---
cid: LI-EVT-02-P
pair_cid: TI-EVT-02-P
tl_relation: 동일
title: Event Message Popup
path: Event History > Event Message
type: Popup
version: 2.1.01
date: 2026-08-07
author: 서보경
service_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5655-640507
figma_region: 2.1 1차
---
# LI-EVT-02-P Event Message Popup

> 기존 화면(작업방 Event History 페이지, 2.1 1차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 2차 영역에는 이 화면이 없습니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 관련 정책: POL-EVT-001, POL-EVT-003

## 기존 화면

- 화면 글자는 TI-EVT-02-P와 같음

### 디스크립션 (원문)

#### 0. 화면 정의

- Event가 발생 시, 화면에 표기되는 message popup이다.
- 노출 PC Type: Main PC(장비에 붙어 있는 PC), 콘솔용 PC (그 외에는 미노출)
- [팝업 노출 정책]
- 노출 조건: 최초 로그인 이후 발생되는 메시지부터 노출되며, 여러 개 발생 시, 누적되어 팝업으로 동시에 노출됨
- 노출 형태: 여러 개의 팝업이 겹쳐서 화면에 표시됨

#### 1 ~ 11

- 원문은 TI-EVT-02-P 1 ~ 11과 같음

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 정책 반영 | 0 "Main PC, 콘솔용 PC" | Service Mode로 표기: Main Mode, Console Mode (TSS Mode 제외) | POL-EVT-003, `policy/service-mode.md` | 대기 |
| 2 | 디스크립션 | 3 Type "Instrument, Consumable, Reagent" | Instrument, Inventory, Sample, System | `glossary/status-values.csv` | 대기 |
| 3 | 표기 | Eorrer, warning | Error, Warning | 오타 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | 다중 메시지 노출 정책 및 기능 추가 | 서보경 | Figma 버전 메모 |
