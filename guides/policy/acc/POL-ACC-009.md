---
id: POL-ACC-009
title: Profile 정보 수정
summary: 사용자는 Profile에서 Name과 Email을 고치고 비밀번호를 바꿀 수 있으며, ID는 바꿀 수 없고 Email은 입력했을 때만 형식을 검증함
domain: ACC
menus: [Profile]
cids: [TI-CPW-01-P, LI-CPW-01-P, TI-CPW-02-P, LI-CPW-02-P]
status: 확정
version:
date: 2026-11-02
sources: [TI-CPW-01-P·LI-CPW-01-P·TI-CPW-02-P 디스크립션, 2026-11-02 사용자 확인]
provisional: []
alerts: [Confirm_007, Confirm_010]
data: []
replaced_by:
---
# POL-ACC-009 Profile 정보 수정

## 정의

- Profile: LNB의 Profile에서 여는 Popup. General(기본 정보)과 Change Password 탭으로 구성

## 규칙

1. ID는 계정을 만든 뒤 바꿀 수 없어 읽기 전용으로 보여 줌 (POL-ACC-002).
2. Name은 필수가 아니며 글자 수와 형식 제한이 없음.
3. Email은 필수가 아니며, 입력한 경우에만 이메일 형식(abc@domain.com)을 검증함. 계정 생성의 Email도 같음.
4. 비밀번호를 바꿀 때는 현재 비밀번호, 새 비밀번호, 새 비밀번호 확인을 모두 입력해야 하며, 새 비밀번호는 POL-ACC-006 조건을 따름.
5. 바꾼 값은 [Save](Confirm_010)로 저장하고, [Cancel]은 Confirm_007로 확인함.
6. T-IOS General 탭의 Event notifications는 POL-EVT-003을 따름.

## 예외

없음

## 근거

- Profile 화면 디스크립션 (TI-CPW-01-P, LI-CPW-01-P, TI-CPW-02-P)
- Email 필수 아님·입력 시 검증: 2026-11-02 사용자 확인

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
