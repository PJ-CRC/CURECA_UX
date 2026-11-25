---
cid: LI-SVS-01-P
pair_cid: TI-SVS-01-P
tl_relation: 기능 추가
title: Sample Tube Details
path: Setting > Sample Tube Setting > Sample tube details
type: Popup
version: 2.1.01
date: 2026.08.07
author: BREX
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-619556
---
# LI-SVS-01-P Sample Tube Details

> 기존 화면(작업방 `Tube Setting_asis` 페이지, Ver 2.1.01)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS는 보기만(1 Row 선택 · 2 닫기). [Add] · [Delete] · [Modify]와 Modify 화면은 T-IOS(TI-SVS-01-P)에만 있음. 화면은 코드 칸 이름이 `LIS Tube Code`이고 Height · Cap Size · Body Size · Type에 필수 표시(*)가 있음
- 호출하는 화면: 없음
- 호출되는 곳: [LI-SVS-01] 3-1 [상세 보기]

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (바닥 화면 GNB · LNB · 검색 · 목록은 LI-SVS-01과 같음. 이 프레임에는 Items 100 옆에 `Add`가 그려져 있음)
- 오른쪽 Sample tube details (X)
  - Code Info: System Code * SYS-001 | LIS Tube Code LIS-001
  - Tube Info: Name * Tube 3 | Manufacturer - | Model - | Catalog No. -
  - Height * (mm) 100.000 | Cap Size * (mm) 13.000 | Body Size * (mm) 13.000 | Bottom Type Flat
  - Socket Type G14 — Group * Socket G10 | No. * 4
  - Sample Type — Type * Swab
  - Note — Typing test (0 / 200 Characters)

### 사용 컴포넌트

Table (70), Title (30), Divider (12), Description Number (4), Square (3), Form/Input Text Box (2), Page number (1), Frame (1), Label/Default (1), Interface/Close (1), Component 3 (1)

### 디스크립션 (원문)

#### 1. 검체 튜브 설정 Row

- 선택된 항목 활성화
- (1-1) 미선택 항목 선택 시 → 아래 항목 반영
- 선택한 row 활성화
- 선택한 row에 따른 ② 정보 변경 노출
- 이전 선택한 row 활성화 X

#### 2. Sample tube details

- 노출 : 목록 항목 선택 시 → 해당 정보 노출
- 2-1 [닫기] 버튼
- 선택 시 → Sample tube details 팝업 닫힘

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임과 세부정의 프레임이 없습니다.

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
