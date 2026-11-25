---
cid: TI-SPT-01-02
pair_cid: LI-SPT-01-02
tl_relation: 동일
title: Samples Details
path: Sample Tracking > Samples Details > Protocol Info
type: Popup
version: 2.1.02
date: 2026.08.14
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-166446
---
# TI-SPT-01-02 Protocol Info - Pre-Treatment Protocol

> 기존 화면(작업방 `Samples_asis` 페이지, Ver 2.1.02)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 화면 글자 · 디스크립션이 LI-SPT-01-02와 같음
- 호출하는 화면: (원문에 없음. 4 [Close] · 5 [X]는 팝업 닫고 기존 화면 유지)
- 호출되는 곳: [TI-SPT-01-01] Samples Details 8-1 [More]

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- Protocol Info
- Pre-Treatment Protocol | Extraction Protocol
- Protocol Name | Test Protocol AA | Modified by | Admin 01 | Modified Date/Time | 2026-03-24 10:24:56
- Process 1 | Vortexing | rpm | 1,000 | Time (sec) | 1,200
- Process 2 | Centrifugation | g force (RCF) | 1,000 | Time (sec) | 1,200
- Process 3 | Transfer Supernatant
- Close

### 사용 컴포넌트

Description Number (5), Square (3), Popup/Popup Middle Text (1), Interface/Close (1)

### 디스크립션 (원문)

#### 0. Protocol Info 팝업

- 정의
- Pre-Treatment(전처리) 및 Extraction(핵산 추출) 단계에서 사용되는 프로토콜 정보

#### 1. Protocol 유형(Tab)

- 정의
- 프로토콜 유형 탭(Tab) 구성
- 활성 탭 변경 시, 해당 단계의 하위 데이터 세트를 동기화하여 노출
- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 표출 항목
- Pre-Treatment Protocol
- Extraction Protocol

#### 2. Pre-Treatment Protocol 기본 정보 영역

- 정의
- Pre-Treatment(전처리) 단계에서 적용된 프로토콜 정보
- 표출 항목
- Protocol Name
- : 사용자가 Run Preparation 단계에서 선택한 프로토콜 명
- : 단, 선택하지 않을 경우 Applied된 프로토콜 명 노출
- Modified by
- : 상위 프로토콜 정보를 최종으로 편집한 사용자 ID 정보
- Modified Date/Time
- : 상위 프로토콜 정보를 최종으로 편집 후 저장한 일시 정보

#### 3. Pre-Treatment Protocol 상세 정보 영역

- 정의
- Protocol setting > Pre-Treatment Protocol Setting에서 설정한 정보 노출
- 표출 항목
- Process guide 참고 : TI-STN-03-01-02-01 / 세부정의

#### 4. [Close] 버튼

- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

#### 5. [X] 버튼

- 클릭 시, 팝업이 닫힌 후 기존 화면 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Samples_asis` 페이지에 TI-SPT-01-02 케이스 프레임 없음)
