---
cid: TI-STN-04-02-T
pair_cid:
tl_relation: 단독
title: Code Mapping
path: Setting > LIS Setting > Code Mapping
type: Tab
version: 2.1.12
date: 2026-10-16
author: 서보경
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5708-160086
figma_region: 2.1 2차
---
# TI-STN-04-02-T Code Mapping

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.1.12)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴
- 관련 정책: POL-SYS-002
- 케이스: Test Code 화면, Target Code 화면, 필터 화면 (같은 프레임 아래쪽)

## 기존 화면

### 화면 글자

- Interface Configuration | Code Mapping
- Code Type: Sample Type Code | Test Code | Target Code
- Search by sample type or LIS code | Items
- 목록 헤더: No. | Sample Type Name | LIS Sample Type Code
- 목록 예: Aspirate | Asp | Edit, BAL | BAL | Edit, Cary-blair | Cary-blair | Edit, Cellpreserv | Cellpreserv | × | Done, eNAT_stool, Fecal_swab, Raw_stool, Saliva, Semen

### 디스크립션 (원문)

#### 0. 메뉴 정의

- T-IOS only
- LIS에서 전달되는 외부 코드와 우리 시스템 코드 간 매핑을 정의하는 메뉴이다.
- 진입 방법: LNB의 ‘Setting > LIS Setting’을 통해 진입할 수 있다.
- 데이터 관련 정의
- Sample Type Code: Assay pack 관리에서 fileType이 ‘common’ 정보에서 내 ‘sampleTypeInfo’ 정보가 관리항목이다. 실제로는 ‘sampleTypeCode’로 관리되나 화면에는 ‘sampleTypeName’ 값으로 표시됨
- Test Code: Assay pack 관리에서 fileType이 ‘PCR’인 정보에서 내 ‘testItemCode’ 정보가 관리항목이다. 다만 화면에는 ‘testItemName’ 값으로 표시됨
- Target Code Case: Assay pack 관리에서 fileType이 ‘PCR’인 목록 중에 ‘isTargetNames’ 값이 True인 경우만 항목에 추가되어 관리된다. 이때 ‘testTargetNames’ 항목들이 2 depth 항목으로 제공되어 관리됨

#### 1. Code Type - 좌측 영역

- 진입 시, 디폴트로 첫번째 영역에 선택되어 표기됨
- 정렬: 오름차순
- 특정 항목 클릭 시, 우측에 관련된 내역이 표기됨

#### 1-1. 관리 항목수 표시 영역

- 표기 기준: 해당 type이 관리하는 항목의 총 개수를 표시한다. (예: Sample Type Code라면 등록된 Sample Type 항목 수를 표기)
- Depth 구조 처리: 구조가 단일 depth일 경우 → 전체 항목 개수를 그대로 표시. 구조가 다중 depth일 경우(Target Code 등) → 1 depth의 항목 개수까지만 표시한다. (하위 depth의 세부 항목은 합산하지 않음)

#### 2. 우측 영역 (단일 구조)

- 각 항목에 대응되는 LIS Code를 입력할 수 있으며, 입력된 코드는 LIS 연동 시 매핑 기준으로 사용됨
- LIS Code 영역 기본값: 최초 설치 시, CURECA 시스템이 관리하는 값이 자동으로 입력(pre-filled)되어 있으며 필요에 따라 수정하여 사용
- 정렬: 오름차순

#### 2-1. 검색 영역

- 검색 대상: System Code 또는 LIS Code를 기준으로 검색 가능
- 검색 결과: 입력된 키워드와 일치하는 항목이 필터링되어 표기됨. 코드 매핑 화면에서 해당 항목만 리스트에 노출 (아래 케이스 화면 참고)

#### 2-2. System code 기입 영역

- 실제 System Code가 아닌 UI 표기명으로 표기됨

#### 3. 우측 영역 (depth 구조)

- Depth 구조가 있는 경우 좌측에는 설정 화면이, 우측에는 해당 Depth에서 관리하는 항목이 노출됨
- 진입 시, 디폴트로 첫번째 영역에 선택되어 표기됨
- 우측 및 좌측 항목 정렬: 오름차순
- 특정 항목 클릭 시, 우측에 관련된 내역이 표기됨

#### 4. 수정 기능 - [Edit] 버튼

- 진입 동작: Edit 클릭 시 해당 항목이 [4-1]Text field로 전환되어 edit 모드 진입
- 입력 및 저장 처리: 값 입력 후 Done 버튼 클릭 또는 Enter 입력 또는 다른 영역 클릭 시 → 입력값 저장 처리, edit 모드 종료, 화면은 원래 상태로 복귀
- 취소 처리: X 클릭 시 저장 없이 edit 모드 종료
- [4-2] 저장 완료 후 표시: 수정된 항목은 색상으로 구분되어 변경 내역을 강조. 단, 이전 값과 동일한 값을 입력한 경우에는 변경사항 없음으로 처리되어 색상 표시가 되지 않음

#### 5. [Save] 버튼

- 버튼 활성화 조건: 최소 1건이라도 수정된 내역이 있으면 버튼 활성화. 수정된 내역이 없으면 버튼 비활성화
- 버튼 클릭 시 동작: Confirm_010 팝업 노출
- 페이지 이동/메뉴 변경 시 동작: 수정 후 저장하지 않고 다른 페이지로 이동하거나 메뉴를 변경할 경우, Confirm_016 팝업 노출
- 저장 후 상태 갱신: 저장 완료 시, 수정 내역이 반영되고 버튼은 다시 비활성화 상태로 전환됨
- 해당 영역 고정되어 항시 노출(스크롤 영역X)

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 표기 | Sample Type 이름 예시 (Aspirate, Cary-blair, Cellpreserv 등) | `glossary/sample-types.csv`의 UI 표기와 맞춤 | `glossary/sample-types.csv` | 대기 |
| 2 | 디스크립션 | 4 Done·Enter로 "입력값 저장 처리"와 5 [Save]로 최종 저장이 섞임 | 행 단위 확정과 [Save] 저장을 구분해 씀 | 디스크립션 | 대기 |
| 3 | 디스크립션 | Assay Pack 데이터 키 이름(fileType, sampleTypeInfo 등)을 디스크립션에 직접 적음 | 데이터 정의는 Assay Pack 기준 자료로 옮기고 ID로 참조 | 헌법 3조 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.11 | | 메뉴명 변경 LIS Settings → LIS Setting | 서보경 | Figma 버전 메모 |
| 2.1.12 | 2026-10-16 | Code Mapping 데이터 관련 정의 추가, 고정 관리 항목에서 동적 추가 방식으로 변경, 2depth 구조 UI 추가(Target Code) | 서보경 | Figma 버전 메모 |
