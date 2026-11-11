---
cid: LI-LOG-02-P
pair_cid: TI-LOG-02-P
tl_relation: 동일
title: Account Locked
path: Login > Temporary Account Locked
type: Popup
version: 2.1.01
date: 2026-08-07
author: 정다예
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1890-367997
figma_region: 2.1 2차
---
# LI-LOG-02-P Account Locked

> 기존 화면(작업방 Login 페이지, 2.1 2차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 관련 정책: POL-ACC-007

- 취소선(Figma에서 제거된 항목): 1의 "관리자가 설정한 제한 시간 경과 시 시스템 자동으로 차단 해제"

## 기존 화면

- 화면 글자와 디스크립션 원문은 TI-LOG-02-P와 같음

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 버튼 설명은 [X], [Close], 화면은 [Ok] 하나 | 화면 버튼과 맞춤 | 화면 글자 | 대기 |
| R02 | 정책 반영 | "5분 기준으로 역산", "관리자가 설정한 제한 시간" | 잠금 시간은 5분 고정. "관리자가 설정한 제한 시간" 문구는 취소선으로 이미 제거됨. "5분 기준" 표기는 POL-ACC-007 참조로 | POL-ACC-007 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | Ok 버튼 추가 | 정다예 | Figma 버전 메모 |
