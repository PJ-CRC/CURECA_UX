---
cid: TI-STN-04-01-T
pair_cid:
tl_relation: 단독
title: Interface Configuration
path: Setting > LIS Setting > Interface Configuration tab
type: Tab
version: 2.1.01
date: 2026.07.21
author: 서보경
client_mode: []
user_type: [Service, Admin]
policies: [POL-SYS-001, POL-COM-005]
basis: 2026-11-27 14:45 · history 31f20afa
basis_versions:
  rules: CURECA 작업규칙 @2026-11-27 11:34
  policy: 정책서 @2026-11-25 21:21
  glossary: 기준데이터 @2026-11-25 21:21
  screens: 화면 정의서 @2026-11-26 03:39
  common_ux: Common UX (common-ux/comm-index.md) @2026-11-26 16:53
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-18
---
# TI-STN-04-01-T Interface Configuration

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STN-04-02-T] Code Mapping (탭 → Code Mapping 탭), Confirm_010 (5 [Save]), Confirm_016 (5-1 저장하지 않고 이동)
- 호출되는 곳: LNB > Setting > LIS Setting (기본 탭)
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Interface Configuration 화면**
- 정의
  - 병원 LIS 시스템과 CURECA 시스템 연동 방식을 설정하는 메뉴
  - CURECA가 여러 대 설치된 경우, Top Navigation에서 선택한 CURECA의 LIS 설정 화면 (한 대만 설치된 경우 해당 없음)
- 진입 방법
  - LNB의 ‘Setting > LIS Setting’을 통해 진입
- User Type : Service, Admin
- 정책 참고 : POL-SYS-001, POL-COM-005

**1  Interface Type**
- HL7 고정 (기존 Rest API 방식 제거)
- 정책 참고 : POL-SYS-001

**2  Transport Protocol(Dropdown)**
- HL7 메시지 전송 방식을 설정하는 항목
- Default : MLLP
- 드롭다운 리스트 항목
  - MLLP, HTTP
- 공통 UX 참고 : COMM-5-h
- 정책 참고 : POL-SYS-001

**3  Order Reception Mode(Dropdown)**
- 수신 받을 방식을 설정하는 항목
- Default : Query Mode
- 드롭다운 리스트 항목
  - Query Mode, Push Mode
- 공통 UX 참고 : COMM-5-h
- 정책 참고 : POL-SYS-001
- 케이스 참고 : TI-STN-04-01-T/Case > Case 1

**3-2  Order Reception Mode ‘Push Mode’ 선택 시**
- ‘T-IOS Network (Push Mode Only)’ 영역에 검사 오더 수신에 사용할 Port 번호 설정
- Text Input 형태로 제공되며, Default는 20200이고 다른 값으로 변경 가능
- 케이스 참고 : TI-STN-04-01-T/Case > Case 1

**3-3  Order Reception Mode ‘Query Mode’ 선택 시**
- 추가로 설정하는 항목값 없음
- 케이스 참고 : TI-STN-04-01-T/Case > Case 1

**4  T-IOS Network (Push Mode Only)**
- Order Reception Mode에서 ‘Push Mode’를 선택할 경우만 설정 가능
- ‘Query Mode’를 선택할 경우 Port 영역의 Text Input 입력값이 제거되며 Text Input Disabled 처리
- 다시 Order Reception Mode에서 ‘Query Mode’에서 ‘Push Mode’를 선택할 경우, Port 영역의 Text Input이 활성화되며 Default 값 20200 자동 기입
- Port는 필수값이 아니며 입력 형식 · 범위 검사 없음
- 공통 UX 참고 : COMM-5-t
- 정책 참고 : POL-SYS-001
- 케이스 참고 : TI-STN-04-01-T/Case > Case 1

**5  [Save] 버튼**
- 클릭 시 Confirm 노출 : Confirm_010
- 공통 UX 참고 : COMM-5-c

**5-1  저장되지 않은 변경사항 안내**
- 수정 후 저장하지 않고 페이지 이동 또는 메뉴 변경 시 Confirm 노출 : Confirm_016

**6  LIS Network**
- 검사 결과(Test Result)를 LIS로 전송하기 위한 네트워크 연결 정보를 설정하는 항목
- Host Address(IP) : 검사 결과를 수신할 LIS 서버의 Host Address(IP)를 입력하는 항목
  - Text Input 형태로 제공되며, Default는 빈 값(Empty)으로 표시
- Port : 검사 결과 전송 시 사용할 LIS 서버의 Port 번호를 입력하는 항목
  - Text Input 형태로 제공되며, Default는 빈 값(Empty)으로 표시
- Host Address(IP) · Port는 필수값이 아니며 입력 형식 · 범위 검사 없음
- 공통 UX 참고 : COMM-5-t
- 정책 참고 : POL-SYS-001

## 케이스

### Case 1. Order Reception Mode에서 ‘Query Mode’를 선택했을 경우, T-IOS Network 영역의 Port Text Input Disabled 처리

- 디스크립션 번호 : 3, 3-2, 3-3, 4
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. Order Reception Mode에서 Query Mode를 고를 때

#### 1-2. Query Mode를 선택한 뒤

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 5 | Confirm | Confirm_010 | [Save] 버튼 클릭 시 | OK 선택 시 → 데이터 저장 & Alert_017 노출 / Close 선택 시 → 해당 Alert 닫힘 |
| 5-1 | Confirm | Confirm_016 | 수정 후 저장하지 않고 페이지 이동 또는 메뉴 변경 시 | Leave 선택 시 → 클릭한 메뉴로 이동 / Cancel 선택 시 → 해당 Alert 닫힘 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | Interface Type | HL7 | POL-SYS-001 규칙 2 |
| 2 | Transport Protocol | MLLP | POL-SYS-001 규칙 3 (Default) |
| 3 | Order Reception Mode | Query Mode | POL-SYS-001 규칙 4 (Default) |
| 4 | Port (T-IOS Network) | 빈 값 · Disabled | POL-SYS-001 규칙 5 (Query Mode일 때) |
| 6 | Host Address (IP) | IP Address (입력 안내 글) | 기존 원본 (`3543:568738`) |
| 6 | Port (LIS Network) | Port (입력 안내 글) | 기존 원본 (`3543:568738`) |
| Case 1-2 | Port (T-IOS Network) | 20200 | 기존 원본 케이스 |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| LIS Setting | 화면 제목 | LID-STN-193 |
| Interface Configuration | 탭 · 화면 영역 제목 | LID-STN-194 |
| Code Mapping | 탭 | LID-STN-195 |
| Configure LIS interface settings for order and result transmission. | 화면 영역 안내 문구 | |
| General | 화면 영역 제목 | LID-STN-197 |
| Interface Type | 화면 1 | LID-STN-198 |
| HL7 | 화면 1 | LID-STN-199 |
| Transport Protocol | 화면 2 | LID-STN-201 |
| MLLP | 화면 2 · 디스크립션 2 | LID-STN-202 |
| HTTP | 디스크립션 2 | LID-STN-203 |
| Order Reception Mode | 화면 3 · 케이스 Case 1-1 · 1-2 · 1-3 | LID-STN-264 |
| Query Mode | 화면 3 · 디스크립션 3 · 케이스 Case 1-1 · 1-3 | LID-STN-265 |
| Push Mode | 디스크립션 3 · 케이스 Case 1-1 · 1-2 | LID-STN-266 |
| T-IOS Network (Push Mode Only) | 화면 4 · 케이스 Case 1-2 · 1-3 | LID-STN-204 · LID-STN-267 |
| Port | 화면 4 · 화면 6 · 케이스 Case 1-2 · 1-3 | LID-STN-205 |
| LIS Network | 화면 6 | LID-STN-206 |
| Host Address (IP) | 화면 6 | LID-STN-207 |
| IP Address | 화면 6 | |
| Save | 화면 5 | LID-STN-022 |
