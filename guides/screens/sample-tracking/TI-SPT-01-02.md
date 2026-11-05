---
cid: TI-SPT-01-02
pair_cid: LI-SPT-01-02
tl_relation: 동일
title: Protocol Info - Pre-Treatment Protocol
path: Sample Tracking > Samples > Protocol Info - Pre-Treatment Protocol
type: Popup
version: 2.1.02
date: 2026-08-14
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-109404
figma_region: 2.1 2차
---
# TI-SPT-01-02 Protocol Info - Pre-Treatment Protocol

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.1.02)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- Protocol Info Popup의 Pre-Treatment Protocol 탭. Extraction Protocol 탭은 TI-SPT-01-03
- 관련 정책: (정책 작성 전). 상세 항목은 Protocol Setting(POL-TST-006) 기준
- 호출하는 화면: 없음 (Samples Details TI-SPT-01-01 8-1 [More]에서 열림)

## 기존 화면

### 화면 글자

- Protocol Info | X
- Pre-Treatment Protocol | Extraction Protocol
- Protocol Name | Test Protocol AA | Modified by | Admin 01 | Modified Date/Time | 2026-03-24 10:24:56
- Process 1 | Vortexing | rpm | 1,000 | Time (sec) | 1,200
- Process 2 | Centrifugation | g force (RCF) | 1,000 | Time (sec) | 1,200
- Process 3 | Transfer Supernatant
- Close

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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "Samples Details", 경로 "Sample Tracking > Samples Details > Protocol Info" | IA 이름 "Protocol Info - Pre-Treatment Protocol" | `ia/ia-screens.csv` | 대기 |
| R02 | 화면 정보 | 3 참조 "TI-STN-03-01-02-01" (지금 CID는 TI-STN-03-01-02-01-V, -M으로 나뉨) | 맞는 CID로 | `screens/setting/` | 대기 |
| R03 | 디스크립션 | 2 "Run Preparation 단계에서 선택한 프로토콜", "Applied된 프로토콜" | Run 화면(LI-RUN-02-01 Check Test Protocol)과 Protocol Setting의 Applied 표기 기준으로. Check Test Protocol 단계는 Setting에서 사용할 때만 나옴 | `policy/policy-backlog.md` 5, POL-TST-006 | 대기 (확인 필요) |
| R04 | 디스크립션 | 3 "Protocol setting" | Protocol Setting | 표기 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.02 | 2026-08-14 | Protocol Info 팝업 추가 | 정다예 | Figma 버전 메모 |
