---
cid: LI-SPT-01-02
pair_cid: TI-SPT-01-02
tl_relation: 동일
title: Protocol Info - Pre-Treatment Protocol
path: Sample Tracking > Samples > Details > Protocol Info - Pre-Treatment Protocol
type: Popup
version: 2.1.02
date: 2026.08.14
author: 정다예
client_mode: []
user_type: []
policies: [POL-TST-001 · DS-0008, POL-TST-006 · DS-0008]
basis:
basis_versions:
source: tobe
figma:
---
# LI-SPT-01-02 Protocol Info - Pre-Treatment Protocol

- T/L 차이: 없음
- 호출하는 화면: [LI-SPT-01-03] Extraction Protocol 탭 (1 탭 전환)
- 호출되는 곳: LI-SPT-01-01 Details 8-1 [More]

## 디스크립션

**0  Protocol Info 팝업**
- 정의
  - Pre-Treatment(전처리) 및 Extraction(핵산 추출) 단계에서 사용되는 프로토콜 정보

**1  Protocol 유형(Tab)**
- 정의
  - 프로토콜 유형 탭(Tab) 구성
  - 활성 탭 변경 시, 해당 단계의 하위 데이터 세트를 동기화하여 노출
- Default
  - 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 표출 항목
  - Pre-Treatment Protocol
  - Extraction Protocol
- 공통 UX 참고 : COMM-5-s

**2  Pre-Treatment Protocol 기본 정보 영역**
- 정의
  - Pre-Treatment(전처리) 단계에서 적용된 프로토콜 정보
- 표출 항목
  - Protocol Name : <span style="color:red">Allow Protocol Changes Before Test가 On이면 Run 준비의 Check Test Protocol 단계에서 고른 프로토콜 명</span>
  - Protocol Name : <span style="color:red">Off이면 Protocol Setting에서 Apply한(Applied) 프로토콜 명</span>
  - Modified by : 상위 프로토콜 정보를 최종으로 편집한 사용자 ID 정보
  - Modified Date/Time : 상위 프로토콜 정보를 최종으로 편집 후 저장한 일시 정보
- 정책 참고 : POL-TST-001, POL-TST-006

**3  Pre-Treatment Protocol 상세 정보 영역**
- 정의
  - <span style="color:red">Protocol Setting</span> > Pre-Treatment Protocol Setting에서 설정한 정보 노출
- 표출 항목
  - Process guide 참고 : <span style="color:red">LI-STN-03-01-02-01</span> / 세부정의
- 정책 참고 : POL-TST-006

**4  [Close] 버튼**
- 동작
  - 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

**5  [X] 버튼**
- 동작
  - 클릭 시, 팝업이 닫힌 후 기존 화면 노출
- 공통 UX 참고 : COMM-5-m

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | 탭 | Pre-Treatment Protocol 선택 | 기존 원본 1460:111240 |
| 2 | 기본 정보 | Test Protocol AA · Admin 01 · 2026-03-24 10:24:56 | 기존 원본 |
| 3 | 상세 정보 | Process 1 Vortexing · Process 2 Centrifugation · Process 3 Transfer Supernatant … — 기존 원본 값 | 기존 원본 |

## 화면 표기 글자

| 번호 | 화면 표기 글자 (영어) | 출처 (화면 / 디스크립션 / 케이스) | Language ID | 상태 (신규 / 변경 / 제거 / -) | 가장 긴 언어 · 번역 글자 |
| --- | --- | --- | --- | --- | --- |
| 0 | Protocol Info | 화면 | | - | |
| 1 | Pre-Treatment Protocol | 화면 | | - | |
| 1 | Extraction Protocol | 화면 | | - | |
| 2 | Protocol Name | 화면 | | - | |
| 2 | Modified by | 화면 | | - | |
| 2 | Modified Date/Time | 화면 | | - | |
| 3 | Process | 화면 | | - | |
| 3 | Vortexing | 화면 | | - | |
| 3 | Centrifugation | 화면 | | - | |
| 3 | Transfer Supernatant | 화면 | | - | |
| 3 | Time (sec) | 화면 | | - | |
| 3 | g force (RCF) | 화면 | | - | |
| 4 | Close | 화면 | | - | |

## Alert · Confirm · Toast

| 번호 | 종류 (알럿 / 컨펌 / 토스트) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 없음 | | | | |

## 케이스

| Case | 제목 | 조건 | 디스크립션 번호 | 종류 | 근거 |
| --- | --- | --- | --- | --- | --- |
| 없음 | | | | | |

## 반영 대기 목록

<!-- 쓰는 법은 reference-rules/pending-changes.md. 타입: 논의 결정 / 다른 화면 파급 / 기준 자료 변경 / 외부 원본 변경 / 점검 발견.
     상태: 대기 / 작업 중 (작업 기록 이름) / 반영 완료 (날짜) / 제외 (날짜, 이유). 줄은 지우지 않습니다. -->

| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 점검 발견 | 3 참조 "TI-STN-03-01-02-01" (L-IOS 화면에서 T-IOS CID) | L-IOS Protocol Setting CID(LI-STN-03-01-02-01) | `screens/setting/` | 작업 중 (20261123-최고관리자-samples-2) |
| R02 | 점검 발견 | 화면 이름 "Samples Details" | IA 이름 | `ia/ia-screens.csv` | 작업 중 (20261123-최고관리자-samples-2) |
| R03 | 기준 자료 변경 | 2 "Run Preparation 단계에서 선택한 프로토콜", "Applied된 프로토콜", 3 "Protocol setting" | TI-SPT-01-02 반영 대기 목록 3·4와 같이 | POL-TST-006 | 작업 중 (20261123-최고관리자-samples-2) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- |
| 2.1.02 | 2026-11-20 | 작업방에 새로 그림 (기존 작업방 [1460:111240](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-111240) · Ver 2.1.02). 3단계 초안: R01 · R02 · R03 반영(작업 중) | Claude (최고관리자 요청) | 20261120-최고관리자-samples, POL-TST-001 · POL-TST-006 · DS-0008 |
| | 2026-11-23 | 멈춘 작업(20261120-최고관리자-samples)이 쓴 화면 MD 내용 · 섹션 링크를 지우고 빈 틀로 되돌림. 반영 대기 목록은 asis 화면 MD의 원래 변경 전 · 변경 후 · 상태로 되돌림(그 작업이 더한 줄은 상태만 대기로) | Claude (최고관리자 요청 R045) | 20261123-최고관리자-samples |
| | 2026-11-23 | 멈춘 작업(20261123-최고관리자-samples)이 쓴 화면 MD 내용 · 섹션 링크를 지우고 그 작업 시작 전 빈 틀로 되돌림(R046 새 작업 20261123-최고관리자-samples-2). 반영 대기 목록도 그 작업 시작 전 상태로 | Claude | R046 |
| 2.1.02 | 2026-11-23 | 작업방(Sample Tracking Ⓛ / Ⓣ_re)에 새로 그림 (기존 작업방 [1460:111240](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-111240) · Ver 2.1.02). 3단계 초안 | Claude | R01 · R02 · R03 |
