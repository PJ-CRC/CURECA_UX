---
cid: LI-SPT-01-03
pair_cid: TI-SPT-01-03
tl_relation: 동일
title: Samples Details
path: Sample Tracking > Samples Details > Protocol Info
type: Popup
version: 2.1.02
date: 2026-08-14
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-111307
figma_region: 2.1 2차
---
# LI-SPT-01-03 Protocol Info - Extraction Protocol

> 기존 화면(기존 작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.1.02)을 2026-11-02에 옮기고 2026-11-20 · 2026-11-23에 다시 옮긴 것입니다(케이스 3, 작업 기록 `20261120-최고관리자-samples` · `20261123-최고관리자-samples` · `20261123-최고관리자-samples-2`. 2026-11-23은 두 번 모두 바뀐 곳 없음). 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- Figma 프레임 이름이 "LI-SPT-01-02" (화면 정보 CID는 LI-SPT-01-03)
- 관련 정책: (정책 작성 전)

## 기존 화면

### 화면 글자

- TI-SPT-01-03과 같음

### 디스크립션 (원문)

- 원문은 TI-SPT-01-03과 같음 (3의 참조도 "TI-STN-03-02-02-M"으로 같음)

## 반영 대기 목록

`screens/tobe/`로 옮김 (2026-11-20)

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Figma 프레임 이름 "LI-SPT-01-02" | LI-SPT-01-03 | `ia/ia-screens.csv` | 대기 |
| R02 | 화면 정보 | 3 참조 "TI-STN-03-02-02-M" (L-IOS 화면에서 T-IOS CID) | L-IOS Protocol Setting CID(LI-STN-03-02-02) | `screens/setting/` | 대기 |
| R03 | 화면 정보 | 화면 이름 "Samples Details" | IA 이름 | `ia/ia-screens.csv` | 대기 |
| R04 | 화면 글자 | Temp.(˚C) 범위 "(0~2,000)" | TI-SPT-01-03 반영 대기 목록 3과 같이 | POL-TST-007 | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.02 | 2026-08-14 | Protocol Info 팝업 추가 | 정다예 | Figma 버전 메모 |
| | 2026-11-12 | 연동 변경: L-IOS Client Mode 이름 바꿈 (머리말 키 `client_mode`, 표기 L-IOS Client Mode · MS Mode, 경로 `policy/client-mode-matrix.csv`) | 서보경 | DS-0001 |
