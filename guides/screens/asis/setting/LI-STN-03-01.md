---
cid: LI-STN-03-01
pair_cid: TI-STN-03-01
tl_relation: 기능 추가
title: Pre-Treatment Protocol
path: Protocol Setting > Pre-Treatment Protocol
type: Page
version: 2.0
date: 2026.06.15
author: BREX
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-540815
---
# LI-STN-03-01 Pre-Treatment Protocol

> 기존 화면(작업방 `Protocol Setting_asis` 페이지, Ver 2.0)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS에는 [Edit] · [Copy]가 없음(T-IOS TI-STN-03-01의 4 · 5-5). 번호가 하나씩 당겨짐(L 4 목록 = T 5)
- 호출하는 화면: [LI-STN-03-02] Extraction Protocol (1 Tab), 상세 화면 (4-5, 원문 `[LI-STN-03-01-01]`. 같은 페이지의 Setting 프레임 이름은 LI-STN-03-01-02)
- 호출되는 곳: LNB > Setting > Protocol Setting (기본 탭)
- 관련 정책: POL-TST-006

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) LIOS | Network Status | Protocol Setting | Instrument | T-IOS | D.A PC | Running | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30
- (LNB) Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Policy Setting | System Setting | Protocol Setting | Run | Quick Start | Information | | | Manual | Keira Knightley
- Pre-Treatment Protocol | Extraction Protocol
- Protocol Name | Enter protocol name | Modified by | Enter modified by | Search
- Items | 1,000
- Protocol Name | Usage | Modified by | Modified Date/Time
- Seegene Protocol | SG protocol | Applied | - | -
- Test Protocol AA | - | Admin01 | 2026-03-24 10:24:56
- Test Protocol BB | - | Admin02 | 2026-03-24 10:24:56
- Test Protocol CC | - | Admin03 | 2026-03-24 10:24:56
- Test Protocol DD | - | Admin04 | 2026-03-24 10:24:56
- Test Protocol EE | - | Admin05 | 2026-03-24 10:24:56
- Test Protocol FF | - | Admin06 | 2026-03-24 10:24:56
- Test Protocol GG | - | Admin07 | 2026-03-24 10:24:56
- Test Protocol HH | - | Admin08 | 2026-03-24 10:24:56
- Test Protocol II | - | Admin09 | 2026-03-24 10:24:56
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

### 사용 컴포넌트

Table (45), Description Number (12), Form/Input Text Box (2), ⛔️ Item_Segment Tabs (2), Square Text Badge (2), Square (1), Title (1), Page number (1), Frame (1), Component 3 (1)

### 디스크립션 (원문)

#### 1. Tap 메뉴

- 디폴트 : [LI-STN-03-01] 화면 노출
- Extraction Protocol 탭
- 선택 시 → [LI-STN-03-02] 화면으로 이동

#### 2. 검색 영역

- 2-1 검색 필드
- 정의 : 각 검색 필터 항목, AND 조건으로 결합한 결과 노출
- 2-2 [Search] 버튼
- 선택 시 → &검색어% Like 검색 진행
- 검색 결과 없음 Case 참고 → Case 정의 바로가기

#### 3. Items 개수

- 정의 : 전처리 프로토콜 모든 항목 개수 총합 출력

#### 4. 목록

- 노출 : Pre-Treatment protocol 항목 모두 노출
- 정렬 Case 참고 → Case 정의 바로가기
- 4-1  Protocol Name
- 정의 : 사용자가 입력한 프로토콜명 노출
- SG protocol 배지
- 노출 조건 : Seegene에서 제공하는 기본 프로토콜인 경우, 노출
- 4-2 Usage
- 정의 : 사용자가 해당 프로토콜 사용 여부 노출
- 프로토콜 사용 시 : Applied 플래그 노출
- [TI-STN-03-01-01] 화면에서 [Apply] 버튼 선택 & 저장한 경우, 노출
- 프로토콜 미사용 시 : 하이픈(-) 노출
- 4-3 Modified by
- 정의 : 해당 프로토콜의 마지막 편집자 ID 노출
- 최초 생성 시, 생성한 ID 노출
- 단, SG protocol은 하이픈(-) 처리
- 4-4 Modified Date/Time
- 정의 : 해당 프로토콜의 마지막 편집일자 노출
- 최초 생성 시, 생성 일자 노출
- 단, SG protocol은 하이픈(-) 처리
- 출력 : yyyy-mm-dd hh-mm-ss
- 4-5 상세 화면 이동 버튼
- 선택 시 → [LI-STN-03-01-01] 화면으로 이동

#### 5. Pagenation

- 공통 UX > COMM-5-i 정의 참고

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 없고, 디스크립션의 "Case 정의 바로가기"가 가리키는 별도 프레임 `LI-STN-03-01 / 세부정의`([3543:541759](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-541759), 1734×1072, 기획 프레임 아래)가 있습니다. 원본에 Case 번호가 없습니다(정렬 정의 안의 Case 1 · 2만 있음). T-IOS 세부정의의 5-5 Copy본 명칭 정의는 없습니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | 2-3. 검색 결과 없음 정의 | Protocol Name · Modified by 검색 조건과 일치한 항목 없음 | 위 프레임 |
| - | 5. 목록 정렬 정의 (Case 1) [SG protocol] = 적용 프로토콜 / Case 2) [SG protocol] ≠ 적용 프로토콜) | 목록 정렬 | 위 프레임 |

- 2-3: 설명 `Protocol Name 검색 조건 & Modified by 검색 조건과 일치한 항목이 없을 경우, 검색 결과 없음 노출`. 예시 Protocol Name `OAKS` · Modified by `10000`, Items 0, 목록 머리에 `Copy` 열이 있음, `No results found.`
- 5 정렬: `정의 : 아래 순번에 따라 목록을 정렬함 / - (1) [SG protocol] 최상단 위치 고정 / - (2) 적용하고 있는 프로토콜 / - (3) (1), (2) 외, Modified Date/Time 내림차순`. Case 1은 Seegene Protocol Applied → Test Protocol AA → BB, Case 2는 Seegene Protocol → Test Protocol BB(Applied) → AA. 예시 표 머리에 `Copy` 열이 있음
