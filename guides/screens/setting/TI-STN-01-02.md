---
cid: TI-STN-01-02
pair_cid: LI-STN-01-02
tl_relation: 기능 추가
title: Extraction Module Usage Setting
path: Setting > Policy Setting > Extraction Module Usage Setting
type: Popup
version: 2.0
date: 2026-06-15
author: BREX
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6596-297239
figma_region: 2.1 2차
---
# TI-STN-01-02 Extraction Module Usage Setting

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: T-IOS에서만 설정. L-IOS(LI-STN-01-02)는 조회만
- 관련 정책: POL-TST-005

## 기존 화면

### 화면 글자

- Extraction Module Usage Setting
- Extraction module availability
- 목록 헤더: Product | High-throughput Extraction | Flexible Extraction
- 목록 예: RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P (체크박스)

### 디스크립션 (원문)

#### 1. 추출 장치별 사용 가능 여부

- 정의 : Module 중 최소 1개 필수 선택
- 노출 : Assay pack에 따른 모든 검사 항목 코드 노출
- 출력 : 검사 항목 코드 출력
- 정렬 : Product Name 기준 오름차순 (Common UX > 4-b. Data Notation Rules for Inventory 정렬 정의에 따름)
- 모든 체크박스 해제 시 : 마지막 선택 해제한 체크박스 유지, (1-1) 얼럿 배너 노출
- (1-1) 얼럿 배너: 디폴트 : 미노출. 노출 시, 팝업 닫기 전까지 노출 고정

#### 2. 기능버튼

- [Close] 버튼: 선택 시 → 해당 팝업 닫힘
- [Apply] 버튼: 디폴트 : 비활성화. 활성화 조건 : 변경 이벤트 발생 & 추출 장치 중 1개 이상 선택 시, 활성화. 값 수정 후, 최종 데이터가 기존 값과 동일하더라도 활성화 유지. 선택 시 → Confirm_010 노출

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "Device Usage Setting" | Extraction Module Usage Setting (IA) | IA | 대기 |
| R02 | 표기 | 검사 항목 예시가 RP1~GI-P 일부 | 검사 항목은 `glossary/test-items.csv` 30개 기준. 기본값은 씨젠 검사 항목 261102의 추출 장치 매핑(M9600, STARlet) | `glossary/test-items.csv`, 반영 대기 추가할 것 10 | 대기 |
| R03 | 표기 | "얼럿 배너" | Alert 배너 (문구 ID 확인) | `glossary/terms.csv` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.12 | | PCR 시약 추가, 핵산 추출 장비 디폴트 Setting 변경 (M9600 ↔ STARlet) | | Figma 버전 메모 |
| 2.1.13 | | 시약 목록 Assay pack에 따른 정렬 디스크립션 추가 | | Figma 버전 메모 |
