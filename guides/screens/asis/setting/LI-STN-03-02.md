---
cid: LI-STN-03-02
pair_cid: TI-STN-03-02
tl_relation: 기능 추가
title: Extraction Protocol
path: Protocol Setting > Extraction Protocol
type: Tab
version: 2.0
date: 2026.06.15
author: BREX
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-540983
---
# LI-STN-03-02 Extraction Protocol

> 기존 화면(작업방 `Protocol Setting_asis` 페이지, Ver 2.0)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS에는 검색 [Reset] · [Edit] · [Copy]가 없음(T-IOS TI-STN-03-02의 2-2 · 4 · 목록 Copy). 번호가 당겨짐(L 4 목록 = T 5)
- 호출하는 화면: [LI-STN-03-01] Pre-Treatment Protocol (1 Tab), 목록 정의는 [LI-STN-03-01] 참고 (4)
- 호출되는 곳: [LI-STN-03-01] 1 Extraction Protocol 탭
- 관련 정책: POL-TST-006

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) LIOS | Network Status | Protocol Setting | Instrument | T-IOS | D.A PC | Running | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30
- (LNB) Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Policy Setting | System Setting | Protocol Setting | Run | Quick Start | Information | | | Manual | Keira Knightley
- Pre-Treatment Protocol | Extraction Protocol
- Protocol Name | Enter protocol Name | Modified by | Enter modified by | Search
- Items | 25
- Protocol Name | Usage | Modified by | Modified Date/Time
- SG-RESPI | SG protocol | Applied | - | -
- Test Protocol AA | - | Admin01 | 2026-03-24 10:24:56
- Test Protocol BB | - | Admin02 | 2026-03-24 10:24:56
- Test Protocol CC | - | Admin03 | 2026-03-24 10:24:56
- Test Protocol DD | - | Admin04 | 2026-03-24 10:24:56
- Test Protocol EE | - | Admin05 | 2026-03-24 10:24:56
- Test Protocol FF | - | Admin06 | 2026-03-24 10:24:56
- Test Protocol GG | - | Admin07 | 2026-03-24 10:24:56
- Test Protocol HH | - | Admin08 | 2026-03-24 10:24:56
- Test Protocol II | - | Admin09 | 2026-03-24 10:24:56
- 1 | 2 | 3

### 사용 컴포넌트

Table (44), Description Number (12), ⛔️ Item_Segment Tabs (2), Square Text Badge (2), Form/Input Text Box (2), Title (1), Page number (1), Frame (1), Square (1), Component 3 (1)

### 디스크립션 (원문)

#### 1. Pre-Treatment Protocol 탭

- 선택 시 → [LI-STN-03-01] 화면으로 이동

#### 2. 검색 영역

- 2-1 검색 필드
- 정의 : 각 검색 필터 항목, AND 조건으로 결합한 결과 노출
- 2-2 [Search] 버튼
- 선택 시 → &검색어% Like 검색 진행
- 검색 결과 없음 Case 참고 → Case 정의 바로가기

#### 3. Items 개수

- 정의 : 핵산 프로토콜 모든 항목 개수 총합 출력
- 최소/최대값 정의 :
- 최소 1개
- 최대 25개

#### 4. 목록

- 노출 : Extraction Protocol 항목 모두 노출
- 정의 : Pre-Treatment Protocol 세부 정의와 동일
- [LI-STN-03-01] 화면 참고

#### 5. Pagenation

- 공통 UX > COMM-5-i 정의 참고

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

이 화면만의 케이스 · 세부정의 프레임은 없습니다. 2-2 "Case 정의 바로가기"(검색 결과 없음)와 4 목록 정의는 `LI-STN-03-01 / 세부정의`([3543:541759](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-541759))에 있습니다(내용은 [LI-STN-03-01] 케이스 절).

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | 2-3. 검색 결과 없음 정의 | 검색 조건과 일치한 항목 없음 | `LI-STN-03-01 / 세부정의` |
