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
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-568738
---
# TI-STN-04-01-T Interface Configuration

> 기존 화면(작업방 `LIS Setting_asis` 페이지, Ver 2.1.01)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STN-04-02-T] Code Mapping (탭), Confirm_010 (5 Save), Confirm_016 (5-1 저장하지 않고 이동)
- 호출되는 곳: LNB > Setting > LIS Setting (기본 탭)
- 원본 디스크립션에 `4.` 번호가 두 번 있고(T-IOS Network · LIS Network), `3-1`은 없습니다.

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | LIS Setting
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Test Policy Setting | Information | Test Protocol Setting | LIS Setting | System Setting | Account Setting | Keira Knightley
- 탭: Interface Configuration | Code Mapping
- Interface Configuration — Configure LIS interface settings for order and result transmission.
- General
  - Interface Type | HL7
  - Transport Protocol | MLLP
  - Order Reception Mode | Push Mode
- T-IOS Network (Push Mode Only)
  - Port | 20200
- LIS Network
  - Host Address (IP) | `IP Address`
  - Port | `Port`
- Save

### 사용 컴포넌트

Description Number (5), 2 Depth (5), Form/Input Text Box (3), Form/Dropdown Box (2), ⛔️ Item_Segment Tabs (2), Square (1), Component 4 (1), Frame (1), Arrow/Chevron_Up (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- 병원 LIS 시스템과 CURECA 시스템 연동 방식을 설정하는 메뉴이다.
- 진입 방법
- LNB의 ‘Setting > LIS Setting’을 통해 진입할 수 있다.
- Default: All / 데이터: All, Error, Warning

#### 1. Interface Type

- HL7 고정 (기존 Rest API 방식 제거)

#### 2. Transport Protocol

- HL7 메시지 전송 방식을 설정하는 항목
- Default: MLLP / 데이터: MLLP, HTTP

#### 3. Order Reception Mode

- 수신 받을 방식을 설정하는 항목
- Default: Query Mode / 데이터: Query Mode, Push Mode

#### 3-2. Order Reception Mode ‘Push Mode’ 선택 시,

- ‘T-IOS Network (Order Reception Mode: Push Mode Only)’ 영역에 검사 오더 수신에 사용할 Port 번호를 설정해야 함
- Text Field 형태로 제공되며, 기본값(Default)은 20200으로 설정되어 있으며 다른 값으로 변경 가능함

#### 3-3. Order Reception Mode ‘Query Mode’ 선택 시

- 추가로 설정하는 항목값은 없음

#### 4. T-IOS Network (Order Reception Mode: Push Mode Only)

- Order Reception Mode에서 ‘Push’를 선택할 경우만 설정할 수 있음
- Query를 선택할 경우에는 Port 텍스트 필드 내 입력값이 제거되면서 disabled처리
- 다시 Order Reception Mode에서 Query에서 ‘Push’를 선택할 경우, Port 텍스트 필드 영역이 활성화 되며 default 값을 20200으로 자동 기입됨

#### 4. LIS Network ~~(Send Test Results)~~

- 검사 결과(Test Result)를 LIS로 전송하기 위한 네트워크 연결 정보를 설정하는 항목
- Host Address(IP): 검사 결과를 수신할 LIS 서버의 Host Address(IP)를 입력하는 항목.
- Text Field 형태로 제공되며, 기본값(Default)은 빈 값(Empty)으로 표시
- Port: 검사 결과 전송 시 사용할 LIS 서버의 Port 번호를 입력하는 항목.
- Text Field 형태로 제공되며, 기본값(Default)은 빈 값(Empty)으로 표시

#### 5. [Save] 버튼

- 클릭 시, Confirm_010 팝업 노출

#### 5-1. 저장되지 않은 변경사항 안내

- 수정 후 저장하지 않고 페이지 이동 또는 메뉴 변경 시, Confirm_016 팝업 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 기획 프레임 안, 화면 아래(y 1114 ~)에 있습니다. 원본에 Case 번호가 없습니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | Case.Order Reception Mode에서 ‘Query’를 선택 했을 경우,T-IOS Network 영역의 Port 텍스트 필드 disabled 처리 | Order Reception Mode Query 선택 | 기획 프레임 y 1114 |

- 화면: Order Reception Mode 드롭다운(Query Mode | Push Mode) → Query Mode 선택 시 T-IOS Network (Push Mode Only) Port `20200` → `None`(비활성)
