---
cid: TI-STN-04-01-T
pair_cid:
tl_relation: 단독
title: Interface Configuration
path: Setting > LIS Setting > Interface Configuration
type: Tab
version: 2.1.01
date: 2026-07-21
author: 서보경
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3412-172905
figma_region: 2.1 2차
---
# TI-STN-04-01-T Interface Configuration

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴
- 관련 정책: POL-SYS-001

- 취소선(Figma에서 제거된 항목): 4 LIS Network의 "(Send Test Results)"

## 기존 화면

### 화면 글자

- Interface Configuration | Code Mapping
- Configure LIS interface settings for order and result transmission.
- General: Interface Type | HL7, Transport Protocol | MLLP, Order Reception Mode | Push Mode
- T-IOS Network (Push Mode Only): Port
- LIS Network: Host Address (IP) | IP Address, Port | Port
- Save

### 디스크립션 (원문)

#### 0. 메뉴 정의

- 병원 LIS 시스템과 CURECA 시스템 연동 방식을 설정하는 메뉴이다.
- 진입 방법: LNB의 ‘Setting > LIS Setting’을 통해 진입할 수 있다.
- Default: All / 데이터: All, Error, Warning

#### 1. Interface Type

- HL7 고정 (기존 Rest API 방식 제거)

#### 2. Transport Protocol

- HL7 메시지 전송 방식을 설정하는 항목
- Default: MLLP / 데이터: MLLP, HTTP

#### 3. Order Reception Mode

- 수신 받을 방식을 설정하는 항목
- Default: Query Mode / 데이터: Query Mode, Push Mode

#### 3-2. Push Mode

- Order Reception Mode ‘Push Mode’ 선택 시, ‘T-IOS Network (Order Reception Mode: Push Mode Only)’ 영역에 검사 오더 수신에 사용할 Port 번호를 설정해야 함
- Text Field 형태로 제공되며, 기본값(Default)은 20200으로 설정되어 있으며 다른 값으로 변경 가능함

#### 3-3. Query Mode

- Order Reception Mode ‘Query Mode’ 선택 시 추가로 설정하는 항목값은 없음

#### 4. T-IOS Network (Order Reception Mode: Push Mode Only)

- Order Reception Mode에서 ‘Push’를 선택할 경우만 설정할 수 있음
- Query를 선택할 경우에는 Port 텍스트 필드 내 입력값이 제거되면서 disabled처리
- 다시 Order Reception Mode에서 Query에서 ‘Push’를 선택할 경우, Port 텍스트 필드 영역이 활성화 되며 default 값을 20200으로 자동 기입됨

#### 4. LIS Network (Send Test Results)

- 검사 결과(Test Result)를 LIS로 전송하기 위한 네트워크 연결 정보를 설정하는 항목
- Host Address(IP): 검사 결과를 수신할 LIS 서버의 Host Address(IP)를 입력하는 항목. Text Field 형태로 제공되며, 기본값(Default)은 빈 값(Empty)으로 표시
- Port: 검사 결과 전송 시 사용할 LIS 서버의 Port 번호를 입력하는 항목. Text Field 형태로 제공되며, 기본값(Default)은 빈 값(Empty)으로 표시

#### 5. [Save] 버튼

- 클릭 시, Confirm_010 팝업 노출

#### 5-1. 저장되지 않은 변경사항 안내

- 수정 후 저장하지 않고 페이지 이동 또는 메뉴 변경 시, Confirm_016 팝업 노출

### 케이스

- Case. Order Reception Mode에서 ‘Query’를 선택 했을 경우, T-IOS Network 영역의 Port 텍스트 필드 disabled 처리

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 0에 "Default: All / 데이터: All, Error, Warning" (다른 화면에서 복사된 것으로 보임) | 지움 | 디스크립션 | 대기 |
| R02 | 디스크립션 | 번호 4가 두 번 (T-IOS Network, LIS Network), 3-1 없음 | 번호 정리 | 디스크립션 | 대기 |
| R03 | 화면 글자 | 화면 예시는 Push Mode 선택, 디스크립션 기본값은 Query Mode | 기본 상태 화면을 기본값과 맞춤 | 디스크립션 3 | 대기 |
| R04 | 정책 반영 | CURECA가 여러 대일 때(TI-ADS) LIS 설정이 장비마다인지 화면에 없음 | 디스크립션에 넣음: LIS 설정은 상단에서 고른 CURECA마다 | POL-SYS-001 규칙 7, POL-COM-005 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-07-21 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
