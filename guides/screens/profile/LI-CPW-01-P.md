---
cid: LI-CPW-01-P
pair_cid: TI-CPW-01-P
tl_relation: 기능 추가
title: Profile (General)
path: Profile > General
type: Popup
version: 2.1.03
date: 2026-08-21
author: 정다예
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3008-549678
figma_region: 2.1 2차
---
# LI-CPW-01-P Profile (General)

> 기존 화면(작업방 Profile / Information 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: Event notifications가 없음 (T-IOS에만)
- 관련 정책: POL-ACC-006, POL-ACC-009
- 다른 프레임: [LI-CPW-01-P/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3008-550099)

## 기존 화면

### 화면 글자

- Profile
- General | Change Password
- ID | John Doe
- Name | John Doe
- Email | user1234@seegene.com
- Cancel | Save

### 디스크립션 (원문)

#### 0 ~ 1-2

- 원문은 TI-CPW-01-P 0 ~ 1-2와 같음

#### 1-3. Email(Text Input)

- 공통 UX 참고 : COMM-5-n
- Default : 사용자가 최종으로 입력한 정보 그대로 노출
- 동작
- 선택시, 입력 필드 활성화
- 수정 시 유효성 재검증 필요
- 유효성 검증 실패 시 안내 문구 노출
- 입력 조건
- 필수 값 아님 (Null 허용)
- 1자 이상 입력 시 유효성 검증
- 이메일 표준 포맷 준수 (abc@domain.com 형식)
- 유효성 메시지 : LI-CPW-01-P/Case 2

#### 2 ~ 3

- 원문은 TI-CPW-01-P 2 ~ 3과 같음 (Cancel → Confirm_007, Save → Confirm_010)

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 정책 반영 | Email "필수 값 아님" (TI-CPW-01-P에는 없음) | T/L 같게 (ACC 정책) | TI-CPW-01-P | 대기 (확인 필요) |
| 2 | 화면 글자 | ID 칸 예시 값이 "John Doe" | ID 예시 값으로 | ID 조건 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
