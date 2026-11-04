---
cid: LI-IVT-06-T
pair_cid: TI-IVT-06-T
tl_relation: 동일
title: Inventory Usage History
path: Inventory > Usage History
type: Tab
version: "0.6"
date: 2026-05-14
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2648-50597
figma_region: 2.1 2차
---
# LI-IVT-06-T Inventory Usage History

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 0.6)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 2차 영역 프레임도 Ver 0.6 (2026-05-14)이라 TI-IVT-06-T(Ver 2.1.11)보다 오래됨. 1차 영역 프레임(5635:105929)도 Ver 0.6
- T/L 차이: Export 동작이 다름(L-IOS는 경로 저장 또는 USB 저장 선택 팝업). 나머지 차이는 버전 차이로 보임 (아래 디스크립션)
- 관련 정책: POL-INV-001, POL-INV-006, POL-EQP-009, POL-COM-006
- 호출하는 화면: Export 저장 팝업 (Common UX COMM-5-j(4/4))

## 기존 화면

### 화면 글자

- TI-IVT-06-T와 같음 (GNB·LNB는 L-IOS 공통). 다른 점: Item Type 드롭다운 기본값 표기 "All Item Types" (T-IOS는 "All")

### 디스크립션 (원문)

- 원문은 TI-IVT-06-T와 같음. 다른 점:
  - 0 "Barcode + Usage+Date/Time 기준 Row 생성" (T-IOS는 앞에 Unit이 있음)
  - 2 Usage: "Barcode 단위로 표시됨", "Storage에서 내부 장치로 이동되는 시점 기준" (T-IOS는 "폐기 시점의 사용 개수를 표기")
  - 3 [Export] 버튼:
    - 대상 범위: 목록에 노출된 전체 리스트
    - 저장 항목: 목록에 제공되는 모든 내용
    - 형식: .CVS
    - L-IOS 경우 클릭 시, 경로 저장 또는 USB 저장 선택하는 팝업 제공
    - 자세한 내역은 Common UX-‘COMM-5-j(4/4)’ 참고
    - T-IOS 경우 클릭 시, 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | 최신 영역 프레임이 Ver 0.6 (2026-05-14). TI-IVT-06-T는 Ver 2.1.11 | L-IOS 화면을 T-IOS(Ver 2.1.11) 기준으로 다시 그림 | POL-INV-006 규칙 7 | 대기 |
| 2 | 디스크립션 | 2 Usage 기준 "Storage에서 내부 장치로 이동되는 시점" / T-IOS "폐기 시점의 사용 개수" | T-IOS와 같이: Usage는 폐기 때의 사용 개수, 폐기할 때만 기록 | POL-INV-006 규칙 1·2 | 대기 |
| 3 | 디스크립션 | 0 Row 기준에 Unit이 없음 | TI-IVT-06-T와 맞춤 | TI-IVT-06-T | 대기 |
| 4 | 화면 글자 | Item Type 기본값 "All Item Types" (T-IOS "All") | 하나로 통일 | TI-IVT-06-T | 대기 |
| 5 | 디스크립션 | 3 형식 ".CVS" | .CSV | 오타 | 대기 |
| 6 | 화면 글자 | 목록 "Reagents", 빈 Usage·Barcode 값, Module과 Unit이 맞지 않는 예시 줄 | TI-IVT-06-T 반영 대기 목록 1~3과 같음 | TI-IVT-06-T | 대기 |
| 7 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 0.6 | 2026-05-14 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
