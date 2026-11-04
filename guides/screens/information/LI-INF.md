---
cid: LI-INF
pair_cid: TI-INF
tl_relation: 동일
title: Information
path: Information > Program
type: Page
version: 1.0
date: 2026-06-15
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=711-98081
figma_region: 2.1 1차
---
# LI-INF Information

> 기존 화면(작업방 Profile/Information 페이지, 2.1 1차 영역, Ver 1.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- IA 화면 이름은 "Program". L-IOS에는 Run Report(TI-INF-03-*)가 없음
- 관련 정책: (정책 작성 전)
- 호출하는 화면: Release Notes Popup (LI-INF-01-P), Installation information Popup (LI-INF-02-P)

## 기존 화면

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error | Warning | 2026-04-10 11:30 | LIOS
- (LNB) Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information (Program | Manual) | Quick Start | Run | Keira Knightley | Shut Down
- 나머지는 TI-INF와 같음 (로고 LIOS, V1.01.005, Release Notes | Installation information, 소개 문단)

### 디스크립션 (원문)

- 원문은 TI-INF와 같음. 다른 점:
  - 3 "CID: LI-INF-01-P", 4 "CID: LI-INF-02-P"

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | 화면 정보 CID "LI-STN-02", 경로 "Information", Ver 1.0 (TI-INF는 2.0) | LI-INF, Information > Program, 버전 확인 | `ia/ia-screens.csv`, Figma 프레임 이름 | 대기 |
| 2 | 표기 | 0 "Cureca 프로그램" | CURECA | `glossary/terms.csv` | 대기 |
| 3 | 디스크립션 | 0 진입 방법 "LNB의 ‘Information’" | LNB의 Information > Program | 화면 글자 (LNB) | 대기 |
| 4 | 화면 글자 | LNB Information 아래 "Manual" | IA에 Manual 화면 없음. 메뉴 유지 여부 확인 | `ia/ia-screens.csv` | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 1.0 | 2026-06-15 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
