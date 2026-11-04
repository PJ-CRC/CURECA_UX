---
cid: TI-SVS-01-P
pair_cid: LI-SVS-01-P
tl_relation: 기능 추가
title: Sample Tube Details
path: Setting > Tube Setting > Details
type: Popup
version: 2.1.01
date: 2026-08-07
author: BREX
service_mode: []
user_type: [Service]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8376-349184
figma_region: 2.1 2차
---
# TI-SVS-01-P Sample Tube Details

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: T-IOS만 [Delete], [Modify]
- 관련 정책: POL-TST-009
- 다른 프레임: Modify 화면 (8376:349475)

## 기존 화면

### 화면 글자

- 목록 옆 Sample tube details: Code Info (System Code *, LIS Code), Tube Info (Name …)

### 디스크립션 (원문)

#### 화면 노출 경로

- 목록에서 row 선택 시, View 팝업 노출

#### 1. [Add] 버튼

- 선택 시 → 목록 최상단 빈 row 생성 & 활성화 (Modify 팝업 화면 참고)

#### 2. 검체 튜브 설정 Row

- 선택된 항목 활성화
- (2-1) 미선택 항목 선택 시 → 선택한 row 활성화, 선택한 row에 따른 ③ 정보 변경 노출, 이전 선택한 row 활성화 X

#### 3. Sample tube details

- 노출 : 목록 항목 선택 시 → 해당 정보 노출
- 출력 : Modify 팝업에서 저장 완료된 입력 값 출력
- 3-1 [닫기] 버튼: 선택 시 → Sample tube details 팝업 닫힘

#### 4. [Delete] 버튼

- 디폴트 : 활성화
- 선택 시 → Confirm_009 노출
- 삭제 완료 Case: 항목 없음 → [TI-SVS-01] 세부정의 참고. 항목 N개 존재 → 삭제한 row 바로 아래 항목 활성화 & Details 노출

#### 5. [Modify] 버튼

- 선택 시 → Modify 화면으로 전환

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 알럿 | [Delete] → Confirm_009 | Confirm_009는 "Local Storage Detected"(로컬 드라이브 경고)라 삭제 확인에 맞지 않음. 삭제 확인 알럿 ID로 바꿈 | `policy/alert-catalog.csv` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | (버전 메모 없음) | BREX | Figma 화면 정보 |
