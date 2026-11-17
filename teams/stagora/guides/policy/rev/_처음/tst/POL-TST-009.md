---
id: POL-TST-009
title: Tube Setting
summary: Sample Tube 정보(System Code, LIS Code, Socket Type, 치수)는 Service가 T-IOS에서 추가·수정·삭제하며 L-IOS는 조회만 함
domain: TST
menus: [Setting]
cids: [TI-SVS-01, TI-SVS-01-P, LI-SVS-01, LI-SVS-01-P]
status: 확정
version:
date: 2026-11-02
sources: [TI-SVS-01·TI-SVS-01-P 디스크립션 (Ver 2.1.01)]
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

## 예외

- 입력 값 조건(코드 형식, 치수 범위, 중복)은 화면에 정의가 없음 (TI-SVS-01 반영 대기 목록)

## 근거

- TI-SVS-01, TI-SVS-01-P 디스크립션
- 권한: `policy/permission-matrix.csv` (Tube Setting Service만), `policy/service-mode-matrix.csv`

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
