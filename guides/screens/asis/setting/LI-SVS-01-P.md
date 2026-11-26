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
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-619556
---
# LI-SVS-01-P Sample Tube Details

> 기존 화면(작업방 `Tube Setting_asis` 페이지, Ver 2.1.01)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS는 보기만(1 Row 선택 · 2 닫기). [Add] · [Delete] · [Modify]와 Modify 화면은 T-IOS(TI-SVS-01-P)에만 있음. 화면은 코드 칸 이름이 `LIS Tube Code`이고 Height · Cap Size · Body Size · Type에 필수 표시(*)가 있음
- 호출하는 화면: 없음
- 호출되는 곳: [LI-SVS-01] 3-1 [상세 보기]
- 관련 정책: POL-TST-009

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) LIOS | Tube Setting | Running | Instrument | L-IOS | D.A PC | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30
- (LNB) Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Policy Setting | System Setting | Protocol Setting | Tube Setting | Run | Quick Start | Information | | | Manual | Keira Knightley
- LIS Code | Enter LIS Code | System Code | Enter System Code | Reset | Search
- Items | 100 | Add | Sample tube details
- Tube name | LIS Code | System Code | Socket Type | Height (mm) | Code Info | Cap size (mm) | Body Size (mm) | Modified Date/Time | Details
- System Code * | LIS Tube Code
- Tube 1 | LIS-001 | SYS-001 | Socket 11 | 100.000 | 13.000 | 13.000 | 2026-03-24 10:24:56
- SYS-001 | LIS-001
- Tube 2 | LIS-002 | SYS-002 | Socket 14 | 90.000 | Tube Info | 11.000 | 10.000 | 2026-03-24 10:24:56
- Name * | Manufacturer | Model | Catalog No.
- Tube 3 | LIS-003 | SYS-003 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Tube 3 | - | - | -
- Tube 4 | LIS-004 | SYS-004 | Socket 15 | 85.000 | Height * (mm) | 12.000 | Cap Size * (mm) | 11.000 | Body Size * (mm) | 2026-03-24 10:24:56 | Bottom Type
- 100.000 | 13.000 | 13.000 | Flat
- Tube 5 | LIS-005 | SYS-005 | Socket 15 | 85.000 | Socket Type | G14 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Group * | No. *
- Tube 6 | LIS-006 | SYS-006 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Socket G10 | 4
- Tube 7 | LIS-007 | SYS-007 | Socket 15 | 85.000 | Sample Type | 12.000 | 11.000 | 2026-03-24 10:24:56
- Type *
- Tube 8 | LIS-008 | SYS-008 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Swab
- Tube 9 | LIS-009 | SYS-009 | Socket 15 | 85.000 | Note | 12.000 | 11.000 | 2026-03-24 10:24:56
- Typing test
- Tube 10 | LIS-010 | SYS-0010 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- 0 | / 200 Characters
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

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
