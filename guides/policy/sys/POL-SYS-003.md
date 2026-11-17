---
id: POL-SYS-003
title: SMTP 연동
summary: 계정 안내 메일(계정 생성 때의 임시 비밀번호, 관리자가 다시 정한 비밀번호)은 T-IOS에서 SMTP를 Enable로 설정하고 서버·인증·보안 방식을 저장했을 때만 보냄
domain: SYS
menus: [Setting]
cids: [TI-STN-06, TI-STN-05-01-P, TI-STN-05-02-P, TI-STN-05-03-P]
status: 확정
version:
date: 2026-11-02
sources: [TI-STN-06 디스크립션 (Ver 2.1.11)]
provisional: []
alerts: [Confirm_010]
data: [policy/permission-matrix.csv]
replaced_by:
---
# POL-SYS-003 SMTP 연동

## 정의

- SMTP Setting: 계정 생성·정보 수정 때 안내 메일을 보내기 위한 메일 서버 연동 설정 (T-IOS 전용)

## 규칙

1. Use SMTP Feature의 기본값은 Disable임. Disable이면 안내 메일을 보내지 않음 (POL-ACC-002 규칙 7).
2. Authentication Status의 기본값은 Disable이며, Enable일 때 User ID와 Password를 [Verify]로 확인함.
3. Security Method는 None, STARTTLS, SSL/TLS 중 하나이며 기본값은 None임.
4. Use SMTP Feature가 Enable이고 바뀐 값이 있을 때 [Save]가 활성화됨. 인증이 맞지 않으면 저장할 수 없음. Disable로 바꿨을 때의 저장 방식은 팀 논의 중 (PD-0002).
5. 설정은 User Type이 Service 또는 Admin일 때 바꿀 수 있음 (`policy/permission-matrix.csv` SMTP Setting).

## 예외

없음

## 근거

- TI-STN-06 디스크립션

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
