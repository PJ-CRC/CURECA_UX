---
cid: LI-SVS-01
pair_cid: TI-SVS-01
tl_relation: 기능 추가
title: Sample Tube Setting
path: Setting > Sample Tube Setting
type: Page
version: 2.1.01
date: 2026.08.07
author: BREX
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-619284
---
# LI-SVS-01 Sample Tube Setting

> 기존 화면(작업방 `Tube Setting_asis` 페이지, Ver 2.1.01)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS에는 [Add]가 없음(T-IOS TI-SVS-01의 3). 목록 열 순서가 `LIS Code | System Code`(T는 반대). 번호가 당겨짐(L 3 목록 = T 4)
- 호출하는 화면: [LI-SVS-01-P] Sample tube details (3-1 상세 보기)
- 호출되는 곳: LNB > Setting > Tube Setting
- 관련 정책: POL-TST-009
- 페이지의 Revision History(L-IOS): v2.1.00 | 26/09/28 | All | 초안 설계 | - | 하승현

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | Tube Setting
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Policy Setting | System Setting | Protocol Setting | Tube Setting | Run | Quick Start | Information | Manual | Keira Knightley
- 검색: LIS Code `Enter LIS code` | System Code `Enter system code` | Reset | Search
- Items 100
- 목록: Tube name | LIS Code | System Code | Socket Type | Height (mm) | Cap size (mm) | Body Size (mm) | Modified Date/Time | Details
  - Tube 1 | LIS-001 | SYS-001 | Socket 11 | 100.000 | 13.000 | 13.000 | 2026-03-24 10:24:56
  - Tube 2 | LIS-002 | SYS-002 | Socket 14 | 90.000 | 11.000 | 10.000 | 2026-03-24 10:24:56
  - Tube 3 ~ 10 | LIS-003 ~ LIS-010 | SYS-003 ~ SYS-0010 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- 페이지: 1 ~ 10

### 사용 컴포넌트

Table (70), Title (30), Description Number (7), Form/Input Text Box (2), Square (2), Page number (1), Frame (1), Component 3 (1)

### 디스크립션 (원문)

#### 1. 검색 영역

- 1-1 검색 필드
- 정의 : 각 검색 필터 항목, AND 조건으로 결합한 결과 노출
- 1-2 기능 버튼
- [Reset] 버튼
- 선택 시 → 검색 필드 초기화
- [Search] 버튼
- 선택 시 → &검색어% Like 검색 진행
- ㄴ 검색 결과 없음 Case → 세부정의 참고

#### 2. Items 개수

- 정의 : 검체 튜브 설정 완료한 모든 항목 개수 총합 출력

#### 3. 목록

- 출력 : 검체 튜브 설정 등록 시, 입력한 값 출력
- 단, 디자인 영역 넘을 경우, 말줄임(...) 표기
- 정렬 : 등록일 내림차순
- 3-1 [상세 보기] 버튼
- 선택 시 → [LI-SVS-01-P] 팝업 노출

#### 4. Pagenation

- 공통 UX > COMM-5-i 정의 참고

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 없고, 디스크립션의 "세부정의 참고"가 가리키는 별도 프레임 `LI-SVS-01 / 세부정의`([3543:619472](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-619472), 1734×1052, 기획 프레임 아래)가 있습니다. 내용은 T-IOS 세부정의와 같고, 예시 화면에 L에는 없는 [Add]가 그려져 있습니다. 원본에 Case 번호가 없습니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | Sample tube 설정 항목 없을 경우 | 등록된 튜브 설정 없음 | 위 프레임 |
| - | 1-2. 검색 결과 없음 정의 | 검색 조건과 일치한 항목 없음 | 위 프레임 |

- Sample tube 설정 항목 없을 경우: `Sample tube 설정한 항목이 없을 경우, 안내 문구 노출`. Items 0 | Add, `No sample tube settings found. / Click Add to create a new setting.`
- 1-2: `LIS Code 검색 조건 & System Code 검색 조건과 일치한 항목이 없을 경우, 검색 결과 없음 문구 노출`. Items 0 | Add, `No results found.`
