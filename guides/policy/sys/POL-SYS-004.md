---
id: POL-SYS-004
title: Log 내보내기와 파일 위치
summary: System Setting에서 1~30일 기간의 시스템·오류 Log를 하나의 파일로 내보내며, L-IOS는 Export·Import 기본 경로를 설정함
domain: SYS
menus: [Setting]
cids: [TI-STN-02, LI-STN-02]
status: 확정
version:
date: 2026-11-02
sources: [TI-STN-02·LI-STN-02 디스크립션 (Ver 2.1.03)]
provisional: []
alerts: [Confirm_009, Confirm_016]
data: [policy/permission-matrix.csv, policy/service-mode-matrix.csv]
replaced_by:
---
# POL-SYS-004 Log 내보내기와 파일 위치

## 정의

- 시스템 Log: 로그인·로그아웃, Instrument 상태 제어와 변화, 검사 진행, Sample·Consumable 투입과 배출, 시스템 간 통신, Event 발생, 설정 변경 등 운영 기록
- 오류 Log: 오류 원인 분석용 기록 (오류 기본 정보, 직전 Log, Stack Trace, 시스템 환경 정보 등)

## 규칙

1. Log 기간은 1일 이상 최대 30일까지 고를 수 있고, 오늘 이후 날짜는 고를 수 없음.
2. 고른 기간의 Log를 내려받음. 이 파일은 Service User Type이 장비 상태를 파악하는 자료로 쓰며, 파일 형식과 구성은 UX 정책서에서 정하지 않고 개발에서 묶어 내보냄. 그래서 파일 형식 규칙(POL-COM-006)에서 뺌. T-IOS는 저장 경로를 고르고, L-IOS는 경로 저장 또는 USB 저장을 고름 (Common UX COMM-5-j(4/4)).
3. L-IOS는 Export·Import 파일의 기본 경로(Export / Import Location)를 설정함. 로컬 드라이브 경로를 고르면 Confirm_009로 권장하지 않음을 알리지만 저장은 막지 않음. 저장 뒤 새 작업부터 적용함.
4. Data Backup과 Restore from Backup은 v2.1.03에서 제거되어 제공하지 않음.

## 예외

없음

## 근거

- TI-STN-02, LI-STN-02 디스크립션과 버전 메모 v2.1.03
- Log 항목의 자세한 정의는 SRS 참조 (기준 출처 목록에 없음)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
| | 2026-11-03 | Log Export는 Service가 장비 파악에 쓰는 자료라 형식·구성을 정하지 않고 파일 형식 규칙(POL-COM-006)에서 뺌 | 사용자 확인 |
