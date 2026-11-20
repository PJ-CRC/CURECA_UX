---
cid: LI-SPT-01-02
pair_cid: TI-SPT-01-02
tl_relation: 동일
title: Protocol Info - Pre-Treatment Protocol
path: Sample Tracking > Samples > Protocol Info - Pre-Treatment Protocol
type: Popup
version: 2.1.02
date: 2026.08.14
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: [POL-TST-001 · DS-0008, POL-TST-006 · DS-0008]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=SECTION_LI
---
# LI-SPT-01-02 Protocol Info - Pre-Treatment Protocol

- T/L 차이: 3 상세 정보 참고 화면 CID만 다름 (L-IOS LI-STN-03-01-02-01, T-IOS TI-STN-03-01-02-01-V)
- 호출하는 화면: [LI-SPT-01-03] Protocol Info - Extraction Protocol (1 Extraction Protocol 탭)
- 호출되는 곳: [LI-SPT-01-01] Details (8-1 [More])

## 디스크립션

**0  Protocol Info 팝업**
- 정의
  - Pre-Treatment(전처리) 및 Extraction(핵산 추출) 단계에서 사용되는 프로토콜 정보
- User Type : Service, Admin, User
- L-IOS Client Mode : Main Mode, Console Mode, MS Mode

**1  Protocol 유형(Tab)**
- 정의
  - 프로토콜 유형 탭(Tab) 구성
  - 활성 탭 변경 시, 해당 단계의 하위 데이터 세트를 동기화하여 노출
- Default
  - 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 표출 항목
  - Pre-Treatment Protocol
  - Extraction Protocol

**2  Pre-Treatment Protocol 기본 정보 영역**
- 정의
  - Pre-Treatment(전처리) 단계에서 적용된 프로토콜 정보
- 표출 항목
  - Protocol Name
    - <span style="color:red">General Setting의 Allow Protocol Changes Before Test가 On이면 Run 준비 Check Test Protocol 단계에서 사용자가 고른 프로토콜 명</span>
    - <span style="color:red">Off이거나 고르지 않았으면 Protocol Setting에서 Apply한(Applied) 프로토콜 명</span>
  - Modified by : 상위 프로토콜 정보를 최종으로 편집한 사용자 ID 정보
  - Modified Date/Time : 상위 프로토콜 정보를 최종으로 편집 후 저장한 일시 정보
- 정책 참고 : POL-TST-001, POL-TST-006

**3  Pre-Treatment Protocol 상세 정보 영역**
- 정의
  - <span style="color:red">Protocol Setting</span> > Pre-Treatment Protocol Setting에서 설정한 정보 노출
- 표출 항목
  - Process guide 참고 : <span style="color:red">LI-STN-03-01-02-01</span> / 세부정의

**4  [Close] 버튼**
- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

**5  [X] 버튼**
- 클릭 시, 팝업이 닫힌 후 기존 화면 노출

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | 탭 | Pre-Treatment Protocol 선택 · Extraction Protocol | 기존 기획 프레임 (기존 작업방 1460:111240, 작업 페이지 사본 3074:83069) |
| 2 | 기본 정보 | Test Protocol AA · Admin 01 · 2026-03-24 10:24:56 | 기존 기획 프레임 |
| 3 | Process 1 | Vortexing · rpm 1,000 · Time (sec) 1,200 | 기존 기획 프레임 |
| 3 | Process 2 | Centrifugation · g force (RCF) 1,000 · Time (sec) 1,200 | 기존 기획 프레임 |
| 3 | Process 3 | Transfer Supernatant | 기존 기획 프레임 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 0 | Protocol Info | 화면 | | - | |
| 1 | Pre-Treatment Protocol | 화면 | | - | |
| 1 | Extraction Protocol | 화면 | | - | |
| 2 | Protocol Name | 화면 | | - | |
| 2 | Modified by | 화면 | | - | |
| 2 | Modified Date/Time | 화면 | | - | |
| 3 | Process 1 · Process 2 · Process 3 | 화면 | | - | |
| 3 | Vortexing | 화면 | | - | |
| 3 | Centrifugation | 화면 | | - | |
| 3 | Transfer Supernatant | 화면 | | - | |
| 3 | rpm | 화면 | | - | |
| 3 | g force (RCF) | 화면 | | - | |
| 3 | Time (sec) | 화면 | | - | |
| 4 | Close | 화면 | | - | |

## Alert · Confirm · Toast

없음

## 케이스

없음

## 반영 대기 목록

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 점검 발견 | 3 참조 "TI-STN-03-01-02-01" (L-IOS 화면에서 T-IOS CID) | L-IOS Protocol Setting CID(LI-STN-03-01-02-01) | `screens/setting/` | 작업 중 (20261120-최고관리자-samples) |
| R02 | 점검 발견 | 화면 이름 "Samples Details" | IA 이름 | `ia/ia-screens.csv` | 작업 중 (20261120-최고관리자-samples) |
| R03 | 기준 자료 변경 | 2 "Run Preparation 단계에서 선택한 프로토콜", "Applied된 프로토콜", 3 "Protocol setting" | 디스크립션에 넣음: General Setting의 Allow Protocol Changes Before Test가 On이면 Run 준비 Check Test Protocol 단계에서 고른 Protocol, Off이거나 고르지 않았으면 Protocol Setting에서 Apply한(Applied) Protocol. 3 Protocol Setting | POL-TST-006, POL-TST-001 규칙 8, POL-TST-006 규칙 6 (2단계 근거) | 작업 중 (20261120-최고관리자-samples) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.02 | 2026-11-20 | 작업방에 새로 그림 (기존 작업방 [1460:111240](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-111240) · Ver 2.1.02). 3단계 초안: R01 · R02 · R03 반영(작업 중) | Claude (최고관리자 요청) | 20261120-최고관리자-samples, POL-TST-001 · POL-TST-006 · DS-0008 |
