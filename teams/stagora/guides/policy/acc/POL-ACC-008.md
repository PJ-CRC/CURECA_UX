---
id: POL-ACC-008
title: Session Timeout
summary: Session Timeout은 기본 Off이며, On이면 5~120분(5분 단위, 기본 60분) 동안 조작이 없을 때 자동 로그아웃함. 장비 통합 상태가 Ready 또는 Not Initialized일 때만 적용함
domain: ACC
menus: [Setting]
cids: [TI-STN-02, LI-STN-02]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > 로그인/로그아웃 > Session Timeout, TI-STN-02·LI-STN-02 디스크립션 2 (Ver 2.1.03), 2026-11-02 사용자 확인]
provisional: []
alerts: [Alert_016]
data: [policy/permission-matrix.csv]
replaced_by:
---
# POL-ACC-008 Session Timeout

## 정의

- Session Timeout: 사용자가 일정 시간 조작하지 않으면 보안을 위해 세션을 자동으로 끝내는 기능

## 규칙

1. Session Timeout의 기본값은 Off임.
2. On일 때 시간은 5분 단위로 5~120분 중 고르며 기본값은 60분임. Off이면 시간 선택을 비활성화함.
3. 장비 통합 상태가 Ready 또는 Not Initialized일 때만 Session Timeout을 적용함.
4. 시간이 지나 세션이 끝난 뒤 사용자가 화면을 조작하면 Alert_016을 보여 주고 로그인 화면으로 이동함.
5. 설정을 바꾸면 이미 로그인한 세션은 기존 값을 유지하고, 바꾼 뒤 새로 로그인한 세션부터 새 값을 씀.
6. 설정은 System Setting에서 User Type이 Service 또는 Admin일 때 바꿈. L-IOS는 Main Mode에서만 바꿈 (`policy/service-mode-matrix.csv`).

## 예외

없음

## 근거

- 정책서_2026.08.28 "Session Timeout" (Idle(Ready) → Ready, `policy/policy-backlog.md` 고칠 것 4)
- TI-STN-02 디스크립션 2·2-1 (시간 범위, 기본 60분, 적용 방식)
- 기본 Off와 적용 상태: 2026-11-02 사용자 확인 (팀원 Q5 해소)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-LOG-05) | |
