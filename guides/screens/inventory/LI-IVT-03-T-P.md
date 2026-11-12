---
cid: LI-IVT-03-T-P
pair_cid: TI-IVT-03-T-P
tl_relation: 동일
title: Consumables Item details popup
path: Inventory > Consumables > Item details
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3638-102106
figma_region: 2.1 2차
---
# LI-IVT-03-T-P Consumables Item details popup

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.04)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: 없음 (TI-IVT-03-T-P와 같음)
- 관련 정책: POL-INV-001, POL-INV-004, POL-EQP-009
- 호출하는 화면: 없음. Consumables Tab(LI-IVT-03-T)과 Run의 Check Consumables(LI-RUN-02)의 [Item details]에서 열림 (IA에서 Run 아래에도 중복으로 둠)
- 다른 프레임: [LI-IVT-03-T-P (Run 페이지, Ver 2.1.11, 2026-10-08, 정다예)](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6902-44339)
- Run 페이지 프레임과 다른 점 (2026-11-02 비교): 디스크립션 0~6은 같음. 다른 점은 합계 표기 "2,021 ea (22 rack)"(이 프레임은 "2,021 (22 rack)"), 뒤 화면 Tab이 없음, 화면 정보의 화면·경로가 "Run Preparation", "LNB > Run"(Run 화면에서 복사됨)
- 이 파일은 Inventory 페이지 프레임을 기준으로 함. 두 프레임의 디스크립션이 같고, Run 프레임의 Ver 2.1.11 메모는 Run 화면(LI-RUN-02)의 [Item details] 버튼 추가에 대한 것이라 Inventory 프레임 내용이 최신과 다르지 않음

## 기존 화면

### 화면 글자

- TI-IVT-03-T-P와 같음

### 디스크립션 (원문)

- 원문은 TI-IVT-03-T-P 0~6과 같음

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 같은 CID 프레임이 두 곳에 있음: Inventory 페이지(Ver 2.1.04, 서보경), Run 페이지(Ver 2.1.11, 정다예) | Inventory 페이지 프레임이 원본. Run 페이지 프레임은 같은 Popup을 Run에서 부른다는 표시이므로 다시 그릴 때 Inventory 원본에 맞춤 | POL-INV-001 규칙 8 | 대기 |
| R02 | 화면 글자 | 합계 "2,021 (22 rack)" | 2,021 ea (22 racks) | TI-IVT-03-T-P 반영 대기 목록 1 | 대기 |
| R03 | 디스크립션 | 2-1 "DX 서랍식 입고", "소모품", "바코드" | Dx 시스템 Storage의 Drawer, Consumable, Barcode | `glossary/terms.csv` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.04 | 2026-08-28 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
| 2.1.11 | 2026-10-08 | (Run 페이지 프레임) Item details 버튼 추가 (기존 유효기한 만료 / 시약 안내 문구 내 more 버튼 삭제). 카드 및 하위 항목 노출 조건 수정 | 정다예 | Figma 버전 메모 (Run 페이지) |
