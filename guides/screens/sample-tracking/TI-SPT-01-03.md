---
cid: TI-SPT-01-03
pair_cid: LI-SPT-01-03
tl_relation: 동일
title: Protocol Info - Extraction Protocol
path: Sample Tracking > Samples > Protocol Info - Extraction Protocol
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-109471
figma_region: 2.1 2차
---
# TI-SPT-01-03 Protocol Info - Extraction Protocol

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.1.02)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- Protocol Info Popup의 Extraction Protocol 탭. Pre-Treatment Protocol 탭은 TI-SPT-01-02
- Figma 프레임 이름이 "TI-SPT-01-02" (화면 정보 CID는 TI-SPT-01-03)
- 관련 정책: (정책 작성 전). 상세 항목은 Protocol Setting(POL-TST-006, POL-TST-007) 기준
- 호출하는 화면: 없음

## 기존 화면

### 화면 글자

- Protocol Info | X
- Pre-Treatment Protocol | Extraction Protocol
- Protocol Name | Test Protocol AA | Modified by | Admin 01 | Modified Date/Time | 2026-03-24 10:24:56
- Operation conditions
- Step | Plate | Volume(μL) | Keep Temp.(˚C) | Action | Temp.(˚C) | Mixing Time(min) | Mixing Speed(rpm) | Collect Time(sec) | Vapor Time(min) | Pause
- (범위) Volume (0~2,000) | Keep Temp. (0~130) | Step (1~35) | Plate (1~8) | Temp. (0~2,000) | Mixing Time (0.0 ~ 999.9) | Mixing Speed (500 ~ 3600) | Collect Time (0.0 ~ 999.9) | Vapor Time (0.0 ~ 999.9)
- 1 | 4 | 600 | 25 | For. U/D | 600 | 0.5 | 3,000 | 0.5 | 0.5 | Off
- 5 | 7 | 0 | N/A | Not use | 0 | 10.0 | 1,500 | 10.0 | 10.0 | On
- (Step 1~6과 빈 줄 예시. 이하 생략)
- Close

### 디스크립션 (원문)

#### 0~1

- 원문은 TI-SPT-01-02 0, 1과 같음

#### 2. Extraction Protocol 기본 정보 영역

- 정의
- Extraction Protocol(핵산추출)단계에서 적용된 프로토콜 정보
- 표출 항목
- Protocol Name
- : 사용자가 Run Preparation 단계에서 선택한 프로토콜 명
- : 단, 선택하지 않을 경우 Applied된 프로토콜 명 노출
- Modified by
- : 상위 프로토콜 정보를 최종으로 편집한 사용자 ID 정보
- Modified Date/Time
- : 상위 프로토콜 정보를 최종으로 편집 후 저장한 일시 정보

#### 3. Extraction Protocol 상세 정보 영역

- 정의
- Protocol setting > Extraction Protocol Setting에서 설정한 정보 노출
- 표출 항목
- Process guide 참고 : TI-STN-03-02-02-M / 세부정의

#### 4~5

- 원문은 TI-SPT-01-02 4, 5와 같음 ([Close], [X])

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Figma 프레임 이름 "TI-SPT-01-02" (화면 정보 CID는 TI-SPT-01-03) | 프레임 이름 TI-SPT-01-03 | `ia/ia-screens.csv` | 대기 |
| R02 | 화면 정보 | 화면 이름 "Samples Details", 경로 "Sample Tracking > Samples Details > Protocol Info" | IA 이름 "Protocol Info - Extraction Protocol" | `ia/ia-screens.csv` | 대기 |
| R03 | 화면 글자 | 범위 표기 Temp.(˚C) "(0~2,000)" (Volume과 같은 범위) | Extraction Protocol Setting 화면의 범위와 맞춤 | TI-STN-03-02-02-M, POL-TST-007 | 대기 (확인 필요) |
| R04 | 디스크립션 | 2 "Run Preparation 단계에서 선택한 프로토콜", "Applied된 프로토콜" | TI-SPT-01-02 반영 대기 목록 3과 같이 | POL-TST-006 | 대기 (확인 필요) |
| R05 | 디스크립션 | 3 "Protocol setting", 3 참조가 M9600용(-M)만 있음 (STARlet용 -V 없음) | Protocol Setting, 추출 장치별 참조 | `screens/setting/TI-STN-03-02-02-V.md` | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.02 | 2026-08-14 | Protocol Info 팝업 추가 | 정다예 | Figma 버전 메모 |
