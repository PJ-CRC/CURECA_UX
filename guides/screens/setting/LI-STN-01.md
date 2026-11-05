---
cid: LI-STN-01
pair_cid: TI-STN-01
tl_relation: 기능 추가
title: Policy Setting
path: Setting > Policy Setting
type: Page
version: 2.0
date: 2026-06-15
author: BREX
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6596-295919
figma_region: 2.1 2차
---
# LI-STN-01 Policy Setting

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 조회만. 화면 위 안내 "You can configure the following settings in the T-IOS", 각 항목은 [View]
- 관련 정책: POL-TST-001

## 기존 화면

### 화면 글자

- You can configure the following settings in the T-IOS
- 나머지 항목은 TI-STN-01과 같고 버튼은 [View]

### 디스크립션 (원문)

#### 1. Policy Setting

- 정의 : L-IOS에서는 View 화면 제공
- 세부 항목 설정의 경우 T-IOS 화면에서 가능 (only)

#### 2. Extraction Module Usage Setting

- 선택 시 → [LI-STN-01-02] 팝업 노출

#### 3. Analyze Breakpoint

- 선택 시 → [LI-STN-01-03] 팝업 노출

#### 4. NC/PC Dispensing Order 영역

- 노출 조건 : Service 계정으로 로그인 시, 해당 영역 노출. 그 외 계정으로 로그인 시, 해당 영역 미노출
- 디폴트 : NC-PC

#### 5. Sample Dispensing Options

- 노출 조건 : Service 계정으로 로그인 시, 해당 영역 노출. 그 외 계정으로 로그인 시, 해당 영역 미노출
- 디폴트 : 96-DWP

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 3 Analyze Breakpoint → "LI-STN-01-03" | LI-STN-01-04 (IA) | `ia/ia-screens.csv` | 대기 |
| R02 | 정책 반영 | Cost Setting 항목이 L-IOS 화면에도 보임 | Cost Setting은 T-IOS만 (POL-TST-001) | 8월 정책서 Policy 공통 정책 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | BREX | Figma 화면 정보 |
