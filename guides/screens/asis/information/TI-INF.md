---
cid: TI-INF
pair_cid: LI-INF
tl_relation: 동일
title: Information
path: Information > Program
type: Page
version: 2.0
date: 2026-06-15
author: 서보경
client_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=711-97859
figma_region: 2.1 1차
---
# TI-INF Information

> 기존 화면(기존 작업방 Profile/Information 페이지, 2.1 1차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- IA 화면 이름은 "Program"
- 관련 정책: (정책 작성 전)
- 호출하는 화면: Release Notes Popup (TI-INF-01-P), Installation information Popup (TI-INF-02-P)

## 기존 화면

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error | Warning | 2026-04-10 11:30 | TIOS
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information (Run Report | Program | Manual) | Keira Knightley
- Information
- (로고) TIOS | V1.01.005
- Release Notes | Installation information
- Re-Architecting High-Multiplex Laboratories
- From managing instruments to operating a laboratory that runs itself
- CURECA™ establishes a new foundation for high-multiplex laboratories. Moving beyond conventional automation, it integrates Seegene’s advanced multiplex technology into a unified, modular system architecture. … (소개 문단 계속)

### 사용 컴포넌트

1 Depth (8), Description Number (5), Interface/Dots (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 프로그램 정보를 모아 표기하는 메뉴이다.
- 진입 방법
- LNB의 ‘Information’을 통해 진입할 수 있다.

#### 1. 로고 영역

- CURECA 로고 표기

#### 2. 버전

- 현재 설치된 버전 표기

#### 3. Release Notes

- 클릭 시, Release Notes 팝업 노출
- CID: TI-INF-01-P

#### 4. Installation information

- 클릭 시, Installation information 팝업 노출
- CID: TI-INF-02-P

#### 5. Program Purpose

- 프로그램 소개 영역으로 현재 화면기준으로 문구 적용
