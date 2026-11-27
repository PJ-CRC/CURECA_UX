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
policies: [POL-SYS-002, POL-COM-005, POL-TST-010]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-20
---
# TI-STN-04-02-T Code Mapping

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STN-04-01-T] Interface Configuration (탭 → Interface Configuration 탭), Alert_048 (4 같은 LIS Code 확정), Confirm_010 (5 [Save]), Confirm_016 (5 저장하지 않고 이동)
- 호출되는 곳: [TI-STN-04-01-T] Code Mapping 탭
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Code Mapping 화면**
- 정의
  - T-IOS only
  - LIS에서 전달되는 외부 코드와 우리 시스템 코드 간 매핑을 정의하는 메뉴
  - CURECA가 여러 대 설치된 경우, Top Navigation에서 선택한 CURECA의 Code Mapping 화면 (한 대만 설치된 경우 해당 없음)
- 진입 방법
  - LNB의 ‘Setting > LIS Setting’을 통해 진입
- 데이터 관련 정의
  - Sample Type Code
    - Assay Pack Master 파일(fileType: Master)의 검체 타입 목록(sampleTypeId · sampleTypeName · sampleTypeCode)이 관리 항목
    - 화면에는 sampleTypeName 노출, LIS Sample Type Code 기본값은 sampleTypeCode
  - Test Code
    - Assay Pack PCR 파일(fileType: PCR)의 시약 기본 정보 중 검사 항목(testItemCode · testItemName)이 관리 항목
    - 화면에는 testItemName 노출, LIS Test Code 기본값은 testItemCode
  - Target Code Case
    - Assay Pack PCR 파일 중 isTestTargetSelectable이 true인 검사 항목만 관리 항목
    - 그 검사 항목의 testTargetNames가 2 Depth 항목으로 제공되어 관리됨
  - Assay Pack이 바뀌면 관리 항목도 바뀜
  - 파라미터 기준 : 씨젠 Assay Pack 명세 R06 (2026-10-26)
- User Type : Service, Admin
- 정책 참고 : POL-SYS-002, POL-COM-005, POL-TST-010

**1  Code Type - 좌측 영역**
- 진입 시 첫 번째 항목이 Default로 선택되어 표기
- 정렬 : 오름차순
- 특정 항목 클릭 시 우측에 관련된 내역 표기
- 공통 UX 참고 : COMM-5-s

**1-1  관리 항목수 표시 영역**
- 표기 기준
  - 해당 Type이 관리하는 항목의 총 개수 표시 (예: Sample Type Code라면 등록된 Sample Type 항목 수 표기)
- Depth 구조 처리
  - 구조가 단일 Depth일 경우 → 전체 항목 개수를 그대로 표시
  - 구조가 다중 Depth일 경우(Target Code 등) → 1 Depth의 항목 개수까지만 표시 (하위 Depth의 세부 항목은 합산하지 않음)

**2  우측 영역 (단일 구조)**
- 각 항목에 대응되는 LIS Code를 입력할 수 있으며, 입력된 코드는 LIS 연동 시 매핑 기준으로 사용
- LIS Code 영역 Default
  - 최초 설치 시 CURECA 시스템이 관리하는 값이 자동으로 입력(pre-filled)되어 있으며 필요에 따라 수정하여 사용
- 정렬 : 오름차순
- 목록 전체 노출 (Pagination 없음)
- 컬럼 항목
  - No. : 목록 순번
  - Sample Type Name · Product Name · Target Code : 항목의 UI 표기 이름
  - LIS Sample Type Code · LIS Test Code · LIS Target Code : 그 항목에 대응되는 LIS Code
- 공통 UX 참고 : COMM-5-g
- 정책 참고 : POL-SYS-002, POL-TST-010

**2-1  검색 영역**
- 검색 대상
  - Sample Type Name 또는 LIS Sample Type Code를 기준으로 검색 가능
- 검색 결과
  - 입력된 키워드와 일치하는 항목이 필터링되어 표기
  - 코드 매핑 화면에서 해당 항목만 리스트에 노출
  - 일치하는 항목이 없으면 목록에 문구 노출 : No results found.
- 공통 UX 참고 : COMM-5-t
- 케이스 참고 : TI-STN-04-02-T/Case > Case 3

**2-2  System Code 기입 영역**
- 실제 System Code가 아닌 UI 표기명으로 표기

**3  우측 영역 (Depth 구조)**
- Depth 구조가 있는 경우 좌측에는 설정 화면이, 우측에는 해당 Depth에서 관리하는 항목 노출
- 진입 시 첫 번째 항목이 Default로 선택되어 표기
- 우측 및 좌측 항목 정렬 : 오름차순
- 특정 항목 클릭 시 우측에 관련된 내역 표기
- 케이스 참고 : TI-STN-04-02-T/Case > Case 1

**4  수정 기능 - [Edit] 버튼**
- 진입 동작
  - Edit 클릭 시 해당 항목이 [4-1] Text Input으로 전환되어 Edit 모드 진입
- 입력 및 확정 처리
  - 값 입력 후 Done 버튼 클릭 또는 Enter 입력 또는 다른 영역 클릭 시 → 입력값 확정, Edit 모드 종료, 화면은 원래 상태로 복귀
  - 확정한 값은 [Save] 클릭 시 저장
  - 빈 값으로 확정하면 Default 값(최초 설치 시 CURECA 시스템이 관리하는 값)으로 바뀌어 저장
  - 다른 항목과 같은 LIS Code는 사용 불가, 같은 값으로 확정하면 Alert 노출 : Alert_048 (확정되지 않음)
- 취소 처리
  - X 클릭 시 입력값 확정 없이 Edit 모드 종료
- [4-2] 확정 후 표시
  - 수정된 항목은 색으로 변경 내역 강조 (색은 UI에서 정함)
  - 단, 이전 값과 동일한 값을 입력한 경우에는 변경사항 없음으로 처리되어 색상 표시가 되지 않음
- 공통 UX 참고 : COMM-5-t
- 정책 참고 : POL-SYS-002

**5  [Save] 버튼**
- 버튼 활성화 조건
  - 최소 1건이라도 수정된 내역이 있으면 버튼 활성화
  - 수정된 내역이 없으면 버튼 비활성화
- 버튼 클릭 시 동작
  - Confirm 노출 : Confirm_010
- 저장되지 않은 변경사항 안내 및 확인 요청
- 페이지 이동/메뉴 변경 시 동작
  - 수정 후 저장하지 않고 다른 페이지로 이동하거나 메뉴를 변경할 경우 Confirm 노출 : Confirm_016
- 저장 후 상태 갱신
  - 저장 완료 시 수정 내역이 반영되고 버튼은 다시 비활성화 상태로 전환
- 해당 영역 고정되어 항시 노출(스크롤 영역X)
- 공통 UX 참고 : COMM-5-c
- 정책 참고 : POL-SYS-002

## 케이스

### Case 1. Target Code 화면

- 디스크립션 번호 : 1, 1-1, 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. Code Type에서 Target Code를 선택했을 때

### Case 2. Test Code 화면

- 디스크립션 번호 : 1, 2, 4
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 2-1. Code Type에서 Test Code를 선택했을 때

### Case 3. 필터 화면

- 디스크립션 번호 : 2-1
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 3-1. Target Code에서 Target을 검색했을 때

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 5 | Confirm | Confirm_010 | [Save] 버튼 클릭 시 | OK 선택 시 → 데이터 저장 & Alert_017 노출 / Close 선택 시 → 해당 Alert 닫힘 |
| 4 | Alert | Alert_048 | 다른 항목과 같은 LIS Code로 확정 시 | OK 선택 시 → 해당 Alert 닫힘 |
| 5 | Confirm | Confirm_016 | 수정 후 저장하지 않고 다른 페이지로 이동하거나 메뉴 변경 시 | Leave 선택 시 → 클릭한 메뉴로 이동 / Cancel 선택 시 → 해당 Alert 닫힘 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1-1 | Code Type 항목 수 | Sample Type Code 14 / Target Code 9 / Test Code 30 | `glossary/sample-types.csv` 14종 · `glossary/test-items.csv` Target Masking 가능 Y 9종 · 30종 |
| 2 | Sample Type 목록 (Sample Type Name / LIS Sample Type Code) | Aspirate / Asp · BAL / BAL · Cary-blair / Cary-blair · Cellpreserv / Cellpreserv (Edit 모드) · eNAT stool / eNAT_stool · Fecal swab / Fecal_swab · Raw stool / Raw_stool · Saliva / Saliva · Semen / Semen · Sputum / Sputum · Surepath / Surepath · Swab / Swab · Thinprep / Thinprep · Urine / Urine | `glossary/sample-types.csv` UI 표기 · 코드, LIS 코드는 기존 원본 14행 그대로 (`3543:567498`) |
| 2 | Items | 14 | `glossary/sample-types.csv` |
| Case 1 | Products 목록 | Allplex HPV28 28 targets · Anyplex II HPV HR 14 targets · GI-B1 7 targets · GI-B2 6 targets · GI-V 6 targets · PB 7 targets · RP1 7 targets · RP2 7 targets · RP3 5 targets, Products 9 | `glossary/test-items.csv` (Target Masking 가능 Y) |
| Case 1 | GI-B1 Target 목록 | 기존 원본 7행 그대로 (Aer · Cam · CdB · Sal · Sh/EI · Vib · Yer) | `glossary/test-items.csv`, 기존 원본 (`3543:568320`) |
| Case 2 | Test Code 목록 | 기존 원본 30행의 Product Name 그대로 (Allplex HPV HR … , Items 30) / LIS Test Code는 검사 항목 코드: HPVHR-HP72/73 · Allplex_HPV28 · HPV_HR · BV_plus · H_ClariR · M_AziR · M_MoxiR, 나머지는 이름 = 코드 | `glossary/test-items.csv` 검사 항목 코드 (Q4의 답), 기존 원본 (`3543:567542`) |
| Case 3 | 필터 결과 | 기존 원본 1행 그대로 (Aer, Items 1) | 기존 원본 (`3543:568577`) |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| LIS Setting | 화면 제목 | |
| Interface Configuration | 탭 | |
| Code Mapping | 탭 | |
| Code Type | 화면 1 · 케이스 Case 1 · 2 · 3 | |
| Sample Type Code | 화면 1 · 화면 2 · 케이스 Case 1 · 2 · 3 | |
| Target Code | 화면 1 · 케이스 Case 1 · 3 | |
| Test Code | 화면 1 · 케이스 Case 2 | |
| Search by sample type or LIS code | 화면 2-1 | |
| No results found. | 디스크립션 2-1 | |
| {n} Items | 화면 2 · 케이스 Case 1 · 2 · 3 (n = 14 · 7 · 30 · 1) | |
| No. | 화면 2 · 케이스 Case 1 · 2 · 3 | |
| Sample Type Name | 화면 2 | |
| LIS Sample Type Code | 화면 2 | |
| Edit | 화면 4 · 케이스 Case 1 · 2 · 3 | |
| Done | 화면 4-1 · 케이스 Case 2 | |
| Save | 화면 5 · 케이스 Case 1 · 2 · 3 | |
| Products | 케이스 Case 1 · 3 | |
| Search product name | 케이스 Case 1 · 3 | |
| {n} targets | 케이스 Case 1 · 3 (n = 28 · 14 · 7 · 6 · 5) | |
| Target Codes | 케이스 Case 1 · 3 | |
| Search target or LIS code | 케이스 Case 1 · 3 | |
| LIS Target Code | 케이스 Case 1 · 3 | |
| Search by product or LIS code | 케이스 Case 2 | |
| Product Name | 케이스 Case 2 | |
| LIS Test Code | 케이스 Case 2 | |
