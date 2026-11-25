---
cid: TI-SVS-01
pair_cid: LI-SVS-01
tl_relation: 기능 추가
title: Sample Tube Setting
path: Setting > Sample Tube Setting
type: Page
version: 2.1.01
date: 2026.08.07
author: BREX
client_mode: []
user_type: [Service]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-618167
---
# TI-SVS-01 Sample Tube Setting

> 기존 화면(작업방 `Tube Setting_asis` 페이지, Ver 2.1.01)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS에만 [Add](3)가 있음. 목록 열 순서가 다름(T `System Code | LIS Code`, L(LI-SVS-01) `LIS Code | System Code`). L은 번호가 당겨짐(T 4 목록 = L 3)
- 호출하는 화면: [TI-SVS-01-P] Sample tube details (3 Add, 4-1 상세 보기)
- 호출되는 곳: LNB > Setting > Tube Setting
- 관련 정책: POL-TST-009
- 페이지의 Revision History(T-IOS): v2.1.00 | 26/07/22 | All | 초안 설계 | - | 하승현

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) TIOS | Tube Setting | Running | Instrument | L-IOS | D.A PC | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Policy Setting | Information | Protocol Setting | LIS Setting | System Setting | Account Setting | Tube Setting | Keira Knightley
- LIS Code | Enter LIS code | System Code | Enter system code | Reset | Search
- Items | 100 | Add
- Tube name | System Code | LIS Code | Socket Type | Height (mm) | Cap size (mm) | Body Size (mm) | Modified Date/Time | Details
- Tube 1 | SYS-001 | LIS-001 | Socket 11 | 100.000 | 13.000 | 13.000 | 2026-03-24 10:24:56
- Tube 2 | SYS-002 | LIS-002 | Socket 14 | 90.000 | 11.000 | 10.000 | 2026-03-24 10:24:56
- Tube 3 | SYS-003 | LIS-003 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Tube 4 | SYS-004 | LIS-004 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Tube 5 | SYS-005 | LIS-005 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Tube 6 | SYS-006 | LIS-006 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Tube 7 | SYS-007 | LIS-007 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Tube 8 | SYS-008 | LIS-008 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Tube 9 | SYS-009 | LIS-009 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Tube 10 | SYS-0010 | LIS-010 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

### 사용 컴포넌트

Table (70), Title (30), Description Number (8), 2 Depth (6), Square (3), Form/Input Text Box (2), Page number (1), Component 4 (1), Frame (1), Arrow/Chevron_Up (1)

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

#### 3. [Add] 버튼

- 디폴트 : 활성화
- 선택 시 → [TI-SVS-01-P] 팝업 노출

#### 4. 목록

- 출력 : 검체 튜브 설정 등록 시, 입력한 값 출력
- 단, 디자인 영역 넘을 경우, 말줄임(...) 표기
- 정렬 : 등록일 내림차순
- 4-1 [상세 보기] 버튼
- 선택 시 → [TI-SVS-01-P] 팝업 노출

#### 5. Pagenation

- 공통 UX > COMM-5-i 정의 참고

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 없고, 디스크립션의 "세부정의 참고"가 가리키는 별도 프레임 `TI-SVS-01 / 세부정의`([3543:618921](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-618921), 1734×1031, 기획 프레임 아래)가 있습니다. 원본에 Case 번호가 없습니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | Sample tube 설정 항목 없을 경우 | 등록된 튜브 설정 없음 | 위 프레임 |
| - | 1-2. 검색 결과 없음 정의 | 검색 조건과 일치한 항목 없음 | 위 프레임 |

- Sample tube 설정 항목 없을 경우: `Sample tube 설정한 항목이 없을 경우, 안내 문구 노출`. Items 0 | Add, `No sample tube settings found. / Click Add to create a new setting.` (예시 목록 머리 순서는 `LIS Code | System Code`)
- 1-2: `LIS Code 검색 조건 & System Code 검색 조건과 일치한 항목이 없을 경우, 검색 결과 없음 문구 노출`. Items 0 | Add, `No results found.`
