---
id: POL-ACC-002
title: 계정 생성
summary: Service와 Admin은 T-IOS Account Setting에서 Admin·User 계정을 만들며, ID는 형식과 중복 확인을 거쳐야 하고 만든 뒤 바꿀 수 없음
domain: ACC
menus: [Setting]
cids: [TI-STN-05, TI-STN-05-01-P, TI-STN-05-02-P, TI-STN-05-03-P]
status: 확정
version:
date: 2026-11-05
sources: [정책서_2026.08.28 > 로그인/로그아웃 > 계정 생성, TI-STN-05-01-P 디스크립션 (Ver 2.1.03), TI-STN-05-02-P 디스크립션 (Ver 2.1.03), 2026-10-30 사용자 확인, PV-0002 (2026-11-05 승인)]
provisional: []
alerts: [Alert_047]
data: [policy/permission-matrix.csv]
replaced_by:
---
# POL-ACC-002 계정 생성

## 정의

- 계정 생성은 T-IOS Setting > Account Setting의 Create New User Popup(TI-STN-05-01-P)에서 함
- ID·비밀번호 조건은 ACC 판정 후 별도 정책으로 둠 (`background/policy-refinement.md` A1·A2)

## 규칙

1. 최초 설치 때는 Service 계정만 있음. Service가 고객용 Admin 계정을 만들어 전달하며, User 계정도 만들 수 있음.
2. User Type이 Service 또는 Admin일 때 Admin과 User 계정을 만들 수 있음.
3. 새 계정의 User Type 기본값은 User이며, Admin과 User 중 하나를 고름.
4. ID는 [Check ID]로 형식과 중복을 확인해야 계정을 만들 수 있음. 확인한 뒤 ID 칸을 다시 고치면 확인 결과가 초기화됨.
5. 비밀번호는 직접 입력하거나 [Generate]로 만들 수 있음.
6. 계정을 만들 때 Name과 Email은 필수가 아님. Email을 입력하면 이메일 형식을 검증함.
7. SMTP가 연동되어 있고 Email을 입력했으면 임시 비밀번호를 그 이메일로 보냄. SMTP가 연동되지 않았거나 Email이 없거나 메일 전송에 실패하면 다른 안내를 보여 줌 (TI-STN-05-02-P/Case).
8. 계정을 만든 뒤 ID는 바꿀 수 없음.
9. Service 계정은 최소 1개를 남겨야 함. 모든 Service 계정을 지울 수 없음.
10. 자기 계정은 지울 수 없음.
11. Account Setting(TI-STN-05)에서 규칙 9 · 10에 걸리는 계정이 들어 있는 삭제를 하면 Alert_047을 보여 주고 지우지 않음.

## 예외

없음

## 근거

- 정책서_2026.08.28 "시스템 최초 설치 후 Service 계정으로 접속하여 Admin 또는 User 계정 생성"
- 2026-10-30 확인: Admin도 Admin·User 계정 생성, 최초 설치 흐름 (`policy/permission.md` 5절)
- Create New User, Account Created, User Details 디스크립션

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-LOG-01) | |
| | 2026-11-05 | 규칙 9 · 10 · 11 추가 (Service 계정 최소 1개, 자기 계정 삭제 불가, Alert_047). 반영 대기 줄: TI-STN-05-R06, TI-STN-05-01-P-R05 · TI-STN-05-03-P-R03(확인 필요) | PV-0002 (2026-11-05 승인, 서보경), CA-0003 |
