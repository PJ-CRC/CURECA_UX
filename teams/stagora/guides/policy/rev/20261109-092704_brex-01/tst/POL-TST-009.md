---
id: POL-TST-009
title: Tube Setting
summary: Sample Tube 정보(System Code, LIS Code, Socket Type, 치수, 선택 입력 Sample Type)는 Service가 T-IOS에서 추가·수정·삭제하며 L-IOS는 조회만 함. LIS에 Tube Type이 없으면 Sample Type으로 Tube를 찾음
domain: TST
menus: [Setting]
cids: [TI-SVS-01, TI-SVS-01-P, LI-SVS-01, LI-SVS-01-P]
status: 확정
version:
date: 2026-11-06
sources: [TI-SVS-01·TI-SVS-01-P 디스크립션 (Ver 2.1.01), MT-20260917-01, MT-20260922-01, MT-20261006-01, 2026-11-06 사용자 확인]
provisional: []
alerts: [Confirm_010, Confirm_012]
data: [policy/permission-matrix.csv, policy/service-mode-matrix.csv]
replaced_by:
---
# POL-TST-009 Tube Setting

## 정의

- Tube Setting: Sample Tube 종류별로 System Code, LIS Code, Socket Type, Height·Cap size·Body Size(mm)를 등록하는 설정

## 규칙

1. Tube Setting은 User Type이 Service일 때만 씀. L-IOS는 모든 Service Mode에서 조회만 함 (POL-ACC-001).
2. T-IOS에서 Tube를 추가·수정·삭제함. System Code는 필수임.
3. 목록은 등록일 최신순으로 보여 줌.
4. Tube 하나를 등록할 때 Sample Type은 선택 입력임. 같은 Sample Type을 여러 Tube에 넣는 것을 막지 않음 (2026-11-06 사용자 확인).
5. LIS에서 Tube Type 정보가 오면 그 Tube Type으로 Tube 정보를 찾음. 이때 Sample Type은 쓰지 않음.
6. LIS에서 Tube Type 정보가 오지 않으면(보통 그러함) Sample Type으로 Tube Type을 찾아, Sample이 어떤 Tube에 담겨 왔는지 앎. 그래서 이 경우에는 Sample Type이 입력되어 있어야 함 (질문 1).

## 이유

- 규칙 4: 예전에는 Sample Type을 필수로 해 같은 Sample Type이 두 번 등록되는 것을 막았음. Service User Type이 쓰는 메뉴라 알맞게 등록할 것으로 보고, 제약을 풀고 고를 수 있게만 함 (2026-11-06 사용자 확인).
- 규칙 5 · 6: LIS가 Tube Type을 거의 주지 않고, 준다 해도 믿을 수 없는 경우가 있음 (MT-20260616-01, MT-20260917-01, MT-20260922-01).

## 질문

1. (규칙 6) Tube Type이 오지 않을 때 Sample Type으로 찾는데, 같은 Sample Type이 여러 Tube에 등록되어 있으면 어느 Tube를 쓰는지
2. 평가 기간에는 Sample Type 하나에 Tube Type 하나로 고정해 쓴다는 결정(MT-20260917-01)이 지금도 맞는지

## 예외

- 입력 값 조건(코드 형식, 치수 범위, 중복)은 화면에 정의가 없음 (TI-SVS-01 반영 대기 목록)

## 근거

- TI-SVS-01, TI-SVS-01-P 디스크립션
- 권한: `policy/permission-matrix.csv` (Tube Setting Service만), `policy/service-mode-matrix.csv`

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
| | 2026-11-06 | Sample Type 선택 입력(규칙 4), LIS Tube Type 유무에 따라 찾는 방법(규칙 5 · 6), 이유 · 질문 더함 | 회의 09-17 · 09-22 · 10-06, 사용자 확인 |
