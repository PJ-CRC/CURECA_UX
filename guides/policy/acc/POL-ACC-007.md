---
id: POL-ACC-007
title: 계정 잠금
summary: 로그인을 10회 연속 실패하면 계정을 5분 동안 잠그고, 5분이 지나면 자동으로 풀며 실패 횟수를 0으로 되돌림
domain: ACC
menus: [Login]
cids: [TI-LOG-01, LI-LOG-01, TI-LOG-02-P, LI-LOG-02-P]
status: 확정
version:
date: 2026-11-02
sources: [TI-LOG-02-P·LI-LOG-02-P 디스크립션 (Ver 2.1.01), 2026-11-02 사용자 확인]
provisional: []
alerts: []
data: []
replaced_by:
---
# POL-ACC-007 계정 잠금

## 정의

없음

## 규칙

1. 로그인 인증 실패가 누적 10회가 되면 그 계정을 바로 잠그고 Account Locked Popup을 보여 줌.
2. 잠금 시간은 5분으로 고정이며 설정으로 바꿀 수 없음.
3. Account Locked Popup은 남은 시간을 5분에서 거꾸로 세어 보여 줌.
4. 5분이 지나면 잠금을 자동으로 풀고 인증 실패 횟수를 0으로 되돌림.

## 예외

없음

## 근거

- TI-LOG-02-P 디스크립션 (10회, 해제 시 실패 횟수 초기화, 5분 기준 역산)
- 잠금 시간 고정 5분: 2026-11-02 사용자 확인 (디스크립션의 "관리자가 설정한 제한 시간"은 쓰지 않음)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
