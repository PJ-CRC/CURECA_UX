---
id: POL-ACC-004
title: 로그아웃과 종료
summary: 모든 User Type은 Logout을 쓰며, 종료는 Service만 [Exit], Admin·User는 [Shut Down]이고 장비 통합 상태가 Running·Error일 때는 종료할 수 없음
domain: ACC
menus: [LNB]
cids: [LI-LOG-01, TI-LOG-01]
status: 확정
version:
date: 2026-11-02
sources: [Common UX V2.2.00 COMM-3-a(1/2), 정책서_2026.08.28 > 로그인/로그아웃, 2026-11-02 사용자 확인]
provisional: []
alerts: []
data: [policy/permission-matrix.csv]
replaced_by:
---
# POL-ACC-004 로그아웃과 종료

## 정의

| 버튼 | 하는 일 |
| --- | --- |
| Logout | 로그아웃 |
| [Exit] | 프로그램 종료와 시스템 종료 |
| [Shut Down] | 시스템 종료 |

## 규칙

1. 모든 User Type은 Logout을 쓸 수 있음.
2. User Type이 Service일 때 [Exit]를 보여 줌.
3. User Type이 Admin 또는 User일 때 [Shut Down]을 보여 줌.
4. 장비 통합 상태가 Running 또는 Error일 때 프로그램 종료와 시스템 종료는 불가.
5. L-IOS 로그인 화면(Sign in)의 [Shut Down]은 로그인 전이므로 누구나 쓸 수 있음 (Confirm_020).
6. T-IOS 로그인 화면에는 종료 버튼이 없음.

## 예외

- 장비 통합 상태에 따라 Logout을 막을지는 고객 논의 대상 (CA-0004)

## 근거

- Common UX COMM-3-a(1/2): Service [Exit], Admin·User [Shut Down] (8월 정책서의 "Service·Admin 프로그램 종료 가능"은 Common UX 기준으로 바꿈, `policy/policy-backlog.md` 고칠 것 2)
- 정책서_2026.08.28 "시스템이 Running 상태이거나 Error 상태일 경우 프로그램 종료 및 시스템 종료 불가", 2026-11-02 사용자 확인 (`policy/policy-backlog.md` 추가할 것 1)
- 로그인 화면의 종료 버튼: 2026-11-02 사용자 확인 (T-IOS 로그인 디스크립션의 [Exit]는 취소선으로 제거된 항목)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-LOG-06) | |
