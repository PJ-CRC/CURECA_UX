---
id: POL-EVT-002
title: Event 상태 변경과 Notes
summary: Event Status 변경과 Notes 작성은 L-IOS에서만 하며(Main Mode), T-IOS는 조회만 함. 바꾼 시각과 사용자를 기록함
domain: EVT
menus: [Event History]
cids: [TI-EVT-P, LI-EVT-P, TI-EVT-01-P, LI-EVT-01-P]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > Event, System, 사용자 및 권한, LI-EVT-P 디스크립션 (Ver 2.1.01), LI-EVT-01-P 디스크립션 (Ver 2.1.14), 2026-10-30 권한 결정]
provisional: []
alerts: [Confirm_003]
data: [policy/permission-matrix.csv, policy/service-mode-matrix.csv]
replaced_by:
---
# POL-EVT-002 Event 상태 변경과 Notes

## 정의

- Status Control: Event Status를 Open ↔ Closed로 바꾸는 기능
- Note Writing: Event에 조치 내용(Resolution Notes)을 남기는 기능

## 규칙

1. Event Status는 L-IOS에서 Open에서 Closed로, Closed에서 Open으로 바꿀 수 있음. T-IOS는 Status를 바꾸지 않고 보여 주기만 함.
2. Status Control과 Note Writing은 모든 User Type이 쓸 수 있음. L-IOS에서는 Main Mode일 때만 쓸 수 있고, 그 밖의 Service Mode에서는 조회만 가능함.
3. Notes는 L-IOS에서만 쓸 수 있음. T-IOS는 L-IOS에서 쓴 Notes를 읽기만 함.
4. L-IOS의 [Mark all as Closed]는 지금 검색 조건(기간, Type, Module, Level, Status)으로 불러온 목록의 모든 페이지에서 Status가 Open인 Event를 한 번에 Closed로 바꾸며 Confirm_003으로 확인함. T-IOS에는 이 기능이 없음.
5. Notes는 필수가 아니며 최대 300자임. 저장하면 그 Event의 조치 기록이 되고, 취소하면 반영하지 않음.
6. Status나 Notes가 바뀌면 바꾼 일시(Updated Date/Time)와 바꾼 사용자의 로그인 ID(Updated by)를 기록하고 보여 줌.

## 예외

없음

## 근거

- 정책서_2026.08.28 "이벤트 발생 시 Open으로 생성되며 확인 후 수동으로 Closed 변경"
- 권한: `policy/permission-matrix.csv` (모든 User Type), `policy/service-mode-matrix.csv` (Main Mode만)
- Notes 300자: LI-EVT-01-P 디스크립션 "최대 500자 → 300자" (500자는 취소선)
- T-IOS의 Status 변경(TI-EVT-P 4)과 [Mark as Closed](5, 5-1)는 Figma에서 취소선으로 제거된 항목 (2026-11-02 확인)
- [Mark all as Closed] 범위: 2026-11-02 사용자 확인

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
| | 2026-11-02 | T-IOS는 Status 변경 없음(취소선 확인), [Mark all as Closed] 규칙 추가 | |
