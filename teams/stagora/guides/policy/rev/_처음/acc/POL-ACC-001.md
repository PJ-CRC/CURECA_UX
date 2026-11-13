---
id: POL-ACC-001
title: User Type과 권한
summary: 사용자는 Service, Admin, User 세 User Type으로 나뉘며 메뉴와 기능은 권한 매트릭스, Service Mode, 제품 제한이 모두 허용할 때만 보임
domain: ACC
menus: [Setting, Instruments, Login]
cids: [TI-STN-05, TI-STN-05-01-P, TI-STN-05-03-P]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > Event, System, 사용자 및 권한, Common UX V2.2.00 COMM-3-a(1/2), 2026-10-30 권한 결정]
provisional: []
alerts: []
data: [policy/permission-matrix.csv, policy/service-mode-matrix.csv, policy/permission.md]
replaced_by:
---
# POL-ACC-001 User Type과 권한

## 정의

| User Type | 누가 갖나 |
| --- | --- |
| Service | Instrument를 설치·셋팅하는 고객사 직원. 숨겨진 기능까지 모든 메뉴 |
| Admin | Instrument를 구매한 기관의 관리자. 운영 관리 메뉴 |
| User | 구매 기관에서 검사를 하는 사용자. 권한이 부여된 기본 메뉴와 기능 |

- 메뉴·기능별 허용 여부는 `policy/permission-matrix.csv`, L-IOS Service Mode별 허용 여부는 `policy/service-mode-matrix.csv`가 기준임

## 규칙

1. 메뉴와 버튼은 User Type 권한, Service Mode(L-IOS만), 제품 제한(T-IOS에서만 설정 등)이 모두 허용할 때만 보임.
2. User Type별 메뉴 접근 권한을 화면에서 바꾸는 기능은 없음.
3. 계정은 CURECA마다 따로 있음. 한 CURECA의 T-IOS에서 만든 계정은 그 CURECA의 T-IOS와 L-IOS에서 함께 씀 (POL-COM-005).
4. Admin은 Tube Setting, Assay Pack Setting을 뺀 Setting 하위 메뉴를 씀.
5. User Type이 Service일 때만 쓸 수 있는 기능: Tube Setting, Assay Pack Setting, Policy Setting의 NC/PC Dispensing Order·Sample Dispensing Options 영역, Error Rate 표시(POL-EQP-010), Management의 Enabled 변경(POL-EQP-009), [Exit](POL-ACC-004).

## 예외

없음

## 근거

- 정책서_2026.08.28 "계정 유형", "등급별 접근 권한". "Admin은 Setting 메뉴 접근 불가"는 2026-10-30 결정으로 바꿈 (`policy/policy-backlog.md` 고칠 것 1)
- 용어: 계정 유형·등급·Account Type → User Type (`glossary/terms.csv`)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SYS-01) | |
