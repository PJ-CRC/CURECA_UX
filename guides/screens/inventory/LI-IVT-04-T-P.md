---
cid: LI-IVT-04-T-P
pair_cid: TI-IVT-04-T-P
tl_relation: 동일
title: Reagent Item details Popup
path: Inventory > Reagents > Item details
type: Popup
version: 2.1.04
date: 2026-08-28
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3638-102318
figma_region: 2.1 2차
---
# LI-IVT-04-T-P Reagent Item details Popup

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.04)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 프레임 이름과 화면 정보 CID가 "LI-IVT-04-T"로 되어 있음 (화면은 Item details Popup)
- T/L 차이: 없음 (TI-IVT-04-T-P와 같음)
- 관련 정책: POL-INV-001, POL-INV-004, POL-EQP-009, POL-INV-007
- 호출하는 화면: 없음. Reagents Tab(LI-IVT-04-T)과 Run의 Check Reagents(LI-RUN-03)의 [Item details]에서 열림 (IA에서 Run 아래에도 중복으로 둠)
- 다른 프레임: [LI-IVT-04-T-P (Run 페이지, Ver 2.1.11, 2026-10-08, 정다예)](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6902-44082)
- Run 페이지 프레임과 다른 점 (2026-11-02 비교):
  - 0이 "시약 상세 팝업 화면 / 정의"로 진입 방법이 없고, 데이터 기준이 2의 "데이터 표출 기준"으로 옮겨져 있음
  - 2-1 Remaining Rxns가 "남은 반응 수T 표기" (이 프레임은 "남은 반응 수 rxns 표기")
  - 화면 예시 제목이 LB Tub (Prep), 합계 "2,010 rxns (22 tubes)", 뒤 화면 Tab 없음
  - 화면 정보의 화면·경로가 "Run Preparation", "LNB > Run"
- 이 파일은 Inventory 페이지 프레임을 기준으로 함. Run 프레임 Ver 2.1.11 메모("유효기간 만료 시약 리스트 → 전체 리스트")는 이 프레임에 이미 반영된 상태(전체 리스트)와 같음

## 기존 화면

### 화면 글자

- TI-IVT-04-T-P와 같음

### 디스크립션 (원문)

- 원문은 TI-IVT-04-T-P 0~6과 같음

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 프레임 이름과 화면 정보 CID "LI-IVT-04-T" | LI-IVT-04-T-P | `ia/ia-screens.csv` | 대기 |
| R02 | 화면 정보 | 같은 CID 프레임이 두 곳에 있음: Inventory 페이지(Ver 2.1.04, 서보경), Run 페이지(Ver 2.1.11, 정다예). 0·2 구성과 2-1 단위 표기가 다름 | LI-IVT-03-T-P 반영 대기 목록 1과 같이 Inventory 원본 기준 | POL-INV-001 규칙 8 | 대기 |
| R03 | 디스크립션 | "유효기한", "흡입한 회수", "반응 수T" | Expiration Date, 흡입한 횟수, rxns | TI-IVT-04-T-P 반영 대기 목록 2~4 | 대기 |
| R04 | 디스크립션 | 2-1 "DX 서랍식 입고", "해당 소모품의 위치 값" | Dx 시스템 Storage의 Drawer, 해당 Reagent의 위치 값 | `glossary/terms.csv` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.04 | 2026-08-28 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
| 2.1.11 | 2026-10-08 | (Run 페이지 프레임) 리스트 노출 항목 기준 변경: 유효기간 만료 시약 리스트 → 전체 리스트 | 정다예 | Figma 버전 메모 (Run 페이지) |
