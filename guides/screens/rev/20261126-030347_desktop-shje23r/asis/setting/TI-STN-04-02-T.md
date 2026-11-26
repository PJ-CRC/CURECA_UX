---
cid: TI-STN-04-02-T
pair_cid:
tl_relation: 단독
title: Code Mapping
path: Setting > LIS Setting > Code Mapping tab
type: Tab
version: 2.1.12
date: 2026.10.16
author: 서보경
client_mode: []
user_type: [Service, Admin]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-567498
---
# TI-STN-04-02-T Code Mapping

> 기존 화면(작업방 `LIS Setting_asis` 페이지, Ver 2.1.12)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (디스크립션 0 `T-IOS only`)
- 호출하는 화면: [TI-STN-04-01-T] Interface Configuration (탭), Confirm_010 (5 Save), Confirm_016 (5 저장하지 않고 이동)
- 호출되는 곳: [TI-STN-04-01-T] Code Mapping 탭
- 관련 정책: POL-SYS-002
- 버전 메모(프레임 오른쪽 위 `ver` 2개): v2.1.11 update / 메뉴명 변경 / LIS Settings →LIS Setting · v2.1.12 update / Code Mapping ‘데이터 관련 정의’ 추가 / 기존 고정관리 항목에서 동적 추가 방식으로 변경 / 2depth 구조 UI 추가(Target Code case)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | LIS Setting
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Test Policy Setting | Information | Test Protocol Setting | LIS Setting | System Setting | Account Setting | Keira Knightley
- 탭: Interface Configuration | Code Mapping
- 왼쪽 Code Type: Sample Type Code 14 | Target Code 10 | Test Code 30
- 오른쪽 Sample Type Code
  - 검색 `Search by sample type or LIS code` | Items 14
  - 목록: No. | Sample Type Name | LIS Sample Type Code
  - 01 Aspirate | Asp | Edit
  - 02 BAL | BAL | Edit
  - 03 Cary-blair | Cary-blair | Edit
  - 04 Cellpreserv | Cellpreserv | Done | × (편집 중)
  - 05 eNAT_stool ~ 14 Urine (Fecal_swab · Raw_stool · Saliva · Semen · Sputum · Surepath · Swab · Thinprep · Urine) | 같은 값 | Edit
- Save (화면 아래 고정)

### 사용 컴포넌트

Description Number (9), 2 Depth (5), ⛔️ Item_Segment Tabs (2), Component 4 (1), Frame (1), Arrow/Chevron_Up (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- T-IOS only
- LIS에서 전달되는 외부 코드와 우리 시스템 코드 간 매핑을 정의하는 메뉴이다.
- 진입 방법
- LNB의 ‘Setting > LIS Setting’을 통해 진입할 수 있다.
- 데이터 관련 정의
- Sample Type Code
- Assay pack 관리에서 fileType이 ‘common’ 정보에서 내 ‘sampleTypeInfo’ 정보가 관리항목이다.
- 실제로는 ‘sampleTypeCode’로 관리되나 화면에는 ‘sampleTypeName’ 값으로 표시됨
- Test Code
- Assay pack 관리에서 fileType이 ‘PCR’인 정보에서 내 ‘testItemCode’ 정보가 관리항목이다.
- 다만 화면에는 ‘testItemName’ 값으로 표시됨
- Target Code Case
- Assay pack 관리에서 fileType이 ‘PCR’인 목록 중에 ‘isTargetNames’ 값이 True인 경우만 항목에 추가되어 관리된다.
- 이때 ‘testTargetNames’ 항목들이 2 depth 항목으로 제공되어 관리됨

#### 1. Code Type - 좌측 영역

- 진입 시, 디폴트로 첫번째 영역에 선택되어 표기됨
- 정렬: 오름차순
- 특정 항목 클릭 시, 우측에 관련된 내역이 표기됨

#### 1-1. 관리 항목수 표시 영역

- 표기 기준
- 해당 type이 관리하는 항목의 총 개수를 표시한다. (예: Sample Type Code라면 등록된 Sample Type 항목 수를 표기)
- Depth 구조 처리
- 구조가 단일 depth일 경우 → 전체 항목 개수를 그대로 표시.
- 구조가 다중 depth일 경우(Target Code 등) → 1 depth의 항목 개수까지만 표시한다. (하위 depth의 세부 항목은 합산하지 않음)

#### 2. 우측 영역 (단일 구조)

- 각 항목에 대응되는 LIS Code를 입력할 수 있으며, 입력된 코드는 LIS 연동 시 매핑 기준으로 사용됨
- LIS Code 영역 기본값
- 최초 설치 시, CURECA 시스템이 관리하는 값이 자동으로 입력(pre-filled)되어 있으며 필요에 따라 수정하여 사용
- 정렬: 오름차순

#### 2-1. 검색 영역

- 검색 대상
- System Code 또는 LIS Code를 기준으로 검색 가능
- 검색 결과
- 입력된 키워드와 일치하는 항목이 필터링되어 표기됨
- 코드 매핑 화면에서 해당 항목만 리스트에 노출
  - (아래 케이스 화면 참고)

#### 2-2. System code 기입 영역

- 실제 System Code가 아닌 UI 표기명으로 표기됨

#### 3. 우측 영역 (depth 구조)

- Depth 구조가 있는 경우 좌측에는 설정 화면이, 우측에는 해당 Depth에서 관리하는 항목이 노출됨
- 진입 시, 디폴트로 첫번째 영역에 선택되어 표기됨
- 우측 및 좌측 항목 정렬: 오름차순
- 특정 항목 클릭 시, 우측에 관련된 내역이 표기됨

#### 4. 수정 기능 - [Edit] 버튼

- 진입 동작
- Edit 클릭 시 해당 항목이 [4-1]Text field로 전환되어 edit 모드 진입
- 입력 및 저장 처리
- 값 입력 후 Done 버튼 클릭 또는 Enter 입력 또는 다른 영역 클릭 시 → 입력값 저장 처리, edit 모드 종료, 화면은 원래 상태로 복귀
- 취소 처리
- X 클릭 시 저장 없이 edit 모드 종료
- [4-2] 저장 완료 후 표시
- 수정된 항목은 색상으로 구분되어 변경 내역을 강조
- 단, 이전 값과 동일한 값을 입력한 경우에는 변경사항 없음으로 처리되어 색상 표시가 되지 않음

#### 5. [Save] 버튼

- 버튼 활성화 조건
- 최소 1건이라도 수정된 내역이 있으면 버튼 활성화
- 수정된 내역이 없으면 버튼 비활성화
- 버튼 클릭 시 동작
- Confirm_010 팝업 노출
- 저장되지 않은 변경사항 안내 및 확인 요청
- 페이지 이동/메뉴 변경 시 동작
- 수정 후 저장하지 않고 다른 페이지로 이동하거나 메뉴를 변경할 경우,
- Confirm_016 팝업 노출
- 저장 후 상태 갱신
- 저장 완료 시, 수정 내역이 반영되고 버튼은 다시 비활성화 상태로 전환됨
- 해당 영역 고정되어 항시 노출(스크롤 영역X)

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 기획 프레임 안, 화면 아래(y 1221 ~)에 있습니다. 원본에 Case 번호가 없습니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | Case. Target Code 화면 | Code Type에서 Target Code 선택 (depth 구조) | 기획 프레임 y 1221 |
| - | Case. Test Code 화면 | Code Type에서 Test Code 선택 | 기획 프레임 y 2159 |
| - | Case. 필터 화면 | Target Code에서 제품 검색 | 기획 프레임 y 3128 |

- Target Code 화면
  - 왼쪽 Products 10 — 검색 `Search product name` — Allplex HPV28 28 targets | Anyplex II HPV HR 14 targets | GI-B1 7 targets | GI-B2 6 targets | GI-V 6 targets | PB 7 targets | RP1 7 targets | RP2 7 targets | RP3 5 targets (각 › )
  - 오른쪽 Target Codes GI-B1 — 검색 `Search target or LIS code` | Items 7 — No. | Target Code | LIS Target Code: 01 Aer · 02 Cam · 03 CdB · 04 Sal · 05 Sh/EI · 06 Vib · 07 Yer (LIS 코드 같은 값, Edit)
  - Save
- Test Code 화면
  - 검색 `Search by product or LIS code` | Items 30 — No. | Product Name | LIS Test Code
  - 01 Allplex HPV HR | Allplex_HPV_HR · 02 Allplex HPV28 | Allplex_HPV28 (Done | × 편집 중) · 03 Anyplex II HPV HR · 04 BV plus · 05 CA · 06 CGMT · 07 GI-B1 · 08 GI-B1P · 09 GI-B2 · 10 GI-EB · 11 GI-H1 · 12 GI-P · 13 GI-V · 14 GU · 15 H.ClariR · 16 M.AziR · 17 M.MoxiR · 18 NGDR · 19 PB · 20 RP1 · 21 RP2 · 22 RP3 · 23 RVM · 24 SARS2 · 25 SC2FabR · 26 STI-7e · 27 STI-12 · 28 STI-EA · 29 STI-EAQ · 30 VS (03 이후 LIS 코드는 같은 값, Edit)
  - Save
- 필터 화면 (Test Code 목록과 겹쳐 그려져 있음)
  - Code Type Target Code, Products 검색 `Search product name`에 결과 Items 1, 오른쪽 Target Codes GI-B1 — 01 Aer | Aer | Edit
  - 왼쪽 제품 목록은 Target Code 화면과 같음
  - Save
