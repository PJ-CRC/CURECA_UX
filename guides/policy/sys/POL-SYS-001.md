---
id: POL-SYS-001
title: LIS 연동 설정
summary: LIS와는 HL7로 연동하며, 오더 수신은 Query Mode(기본) 또는 Push Mode로, 결과 전송은 LIS Network에 설정한 주소로 함
domain: SYS
menus: [Setting]
cids: [TI-STN-04-01-T]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > Event, System, 사용자 및 권한 > LIS, TI-STN-04-01-T 디스크립션 (Ver 2.1.01)]
provisional: []
alerts: [Confirm_010, Confirm_016]
data: [policy/permission-matrix.csv]
replaced_by:
---
# POL-SYS-001 LIS 연동 설정

## 정의

- LIS: 병원의 검사 정보 시스템. CURECA는 LIS에서 검사 오더를 받고 검사 결과를 LIS로 보냄
- 설정 화면: T-IOS Setting > LIS Setting > Interface Configuration (T-IOS 전용)

## 규칙

1. LIS 인터페이스와 CURECA는 1:1로 연결함.
2. Interface Type은 HL7로 고정함.
3. Transport Protocol은 MLLP 또는 HTTP이며 기본값은 MLLP임.
4. Order Reception Mode는 Query Mode 또는 Push Mode이며 기본값은 Query Mode임.
5. Push Mode일 때만 T-IOS Network의 오더 수신 Port를 설정하며 기본값은 20200임. Query Mode로 바꾸면 Port 값을 지우고 비활성화하며, 다시 Push Mode로 바꾸면 20200을 채움.
6. 검사 결과를 보낼 LIS 서버의 Host Address(IP)와 Port는 LIS Network에 입력하며 기본값은 비어 있음.
7. LIS 설정은 CURECA마다 따로 두며, T-IOS 상단에서 고른 CURECA의 설정을 보여 주고 바꿈 (POL-COM-005).
8. 설정은 User Type이 Service 또는 Admin일 때 바꿀 수 있음 (`policy/permission-matrix.csv` Setting).

## 예외

없음

## 근거

- 정책서_2026.08.28 "LIS 인터페이스와 큐레카(QREKA) 장비는 1:1 연결" (QREKA → CURECA)
- TI-STN-04-01-T 디스크립션 (기존 Rest API 방식 제거, HL7 고정)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-SYS-02) | |
