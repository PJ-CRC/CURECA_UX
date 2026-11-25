---
cid: TI-SVS-01-P
pair_cid: LI-SVS-01-P
tl_relation: 기능 추가
title: Sample Tube Details
path: Setting > Sample Tube Setting > Sample tube details
type: Popup
version: 2.1.01
date: 2026.08.07
author: BREX
client_mode: []
user_type: [Service]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-618372
---
# TI-SVS-01-P Sample Tube Details

> 기존 화면(작업방 `Tube Setting_asis` 페이지, Ver 2.1.01)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS에만 [Add] · [Delete] · [Modify]와 Modify 화면이 있음. L-IOS(LI-SVS-01-P)는 보기만(Row 선택 · 닫기). L 화면은 필수 표시(*)가 Height · Cap Size · Body Size · Type에도 있고, 코드 칸 이름이 `LIS Tube Code`
- 같은 CID 프레임이 2개입니다: 보기 [3543:618372](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-618372)(디스크립션 1 ~ 5)와 Modify [3543:618663](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-618663)(디스크립션 1 ~ 6). 두 프레임을 차례로 적습니다.
- 호출하는 화면: Confirm_009 (보기 4 Delete), Confirm_012 (Modify 1 · 5 이탈 · Cancel), Confirm_010 (Modify 6 Save)
- 호출되는 곳: [TI-SVS-01] 3 [Add] · 4-1 [상세 보기]
- 관련 정책: POL-TST-009
- 버전 메모(프레임 오른쪽 위 `ver`): v2.1.11 update / Sample Type 항목 추가 / Tube Info, Tube spec > Tube Info 병합 / 명칭 변경 : LIS Code → LIS Tube Code / 순서 변경 : SYS Code ←> LIs Tube Code

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

보기 프레임 (3543:618372)

- (GNB) TIOS | Tube Setting | Running | Instrument | L-IOS | D.A PC | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Policy Setting | Information | Protocol Setting | LIS Setting | System Setting | Account Setting | Tube Setting | Keira Knightley
- LIS Code | Enter LIS Code | System Code | Enter System Code | Reset | Search
- Items | 100 | Add | Sample tube details
- Tube name | System Code | LIS Code | Socket Type | Height (mm) | Code Info | Cap size (mm) | Body Size (mm) | Modified Date/Time | Details
- System Code * | LIS Code
- Tube 1 | SYS-001 | LIS-001 | Socket 11 | 100.000 | 13.000 | 13.000 | 2026-03-24 10:24:56
- SYS-001 | LIS-001
- Tube 2 | SYS-002 | LIS-002 | Socket 14 | 90.000 | Tube Info | 11.000 | 10.000 | 2026-03-24 10:24:56
- Name * | Manufacturer | Model | Catalog No.
- Tube 3 | SYS-003 | LIS-003 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Tube 3 | - | - | -
- Tube 4 | SYS-004 | LIS-004 | Socket 15 | 85.000 | Height (mm) | 12.000 | Cap Size (mm) | 11.000 | Body Size (mm) | 2026-03-24 10:24:56 | Bottom Type
- 100.000 | 13.000 | 13.000 | Flat
- Tube 5 | SYS-005 | LIS-005 | Socket 15 | 85.000 | Socket Type | G14 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Group * | No. *
- Tube 6 | SYS-006 | LIS-006 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Socket G10 | 4
- Tube 7 | SYS-007 | LIS-007 | Socket 15 | 85.000 | Sample Type | 12.000 | 11.000 | 2026-03-24 10:24:56
- Type
- Tube 8 | SYS-008 | LIS-008 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Swab
- Tube 9 | SYS-009 | LIS-009 | Socket 15 | 85.000 | Note | 12.000 | 11.000 | 2026-03-24 10:24:56
- Typing test
- Tube 10 | SYS-0010 | LIS-010 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- 0 | / 200 Characters
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
- Delete | Modify

Modify 프레임 (3543:618663)

- (GNB) TIOS | Tube Setting | Running | Instrument | L-IOS | D.A PC | Event | Error | 3 | Warning | 2 | 2026-04-10 11:30
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Policy Setting | Information | Protocol Setting | LIS Setting | System Setting | Account Setting | Tube Setting | Keira Knightley
- LIS Code | Enter LIS Code | System Code | Enter System Code | Reset | Search
- Items | 100 | Add | Sample tube details
- Tube name | System Code | LIS Code | Socket Type | Height (mm) | Code Info | Cap size (mm) | Body Size (mm) | Modified Date/Time | Details
- System Code * | LIS Code
- Tube 1 | SYS-001 | LIS-001 | Socket 11 | 100.000 | 13.000 | 13.000 | 2026-03-24 10:24:56
- Enter System Code | Enter LIS Code
- Tube 2 | SYS-002 | LIS-002 | Socket 14 | 90.000 | Tube Info | 11.000 | 10.000 | 2026-03-24 10:24:56
- Name * | Manufacturer | Model | Catalog No.
- Tube 2 | SYS-002 | LIS-3 | Socket 14 | 90.000 | 11.000 | 10.000 | 2026-03-24 10:24:56
- Enter Name | Enter Manufacturer | Enter Model | Enter Catalog No.
- Tube 4 | SYS-004 | LIS-004 | Socket 15 | 85.000 | Height (mm) | 12.000 | Cap Size (mm) | 11.000 | Body Size (mm) | 2026-03-24 10:24:56 | Bottom Type
- Enter Height | Enter Cap Size | Enter Body Size | None
- Tube 5 | SYS-005 | LIS-005 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Socket Type | G10
- Tube 6 | SYS-006 | LIS-006 | Socket 15 | 85.000 | Group * | 12.000 | 11.000 | No. * | 2026-03-24 10:24:56
- Socket G10 | None
- Tube 7 | SYS-007 | LIS-007 | Socket 15 | 85.000 | Sample Type | 12.000 | 11.000 | 2026-03-24 10:24:56
- Type
- Tube 8 | SYS-008 | LIS-008 | Socket 15 | 85.000 | Swab | 12.000 | 11.000 | 2026-03-24 10:24:56
- Note
- Tube 9 | SYS-009 | LIS-009 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- Enter notes
- Tube 10 | SYS-0010 | LIS-010 | Socket 15 | 85.000 | 12.000 | 11.000 | 2026-03-24 10:24:56
- 0 | / 200 Characters
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
- Cancel | Save

### 사용 컴포넌트

- 보기: Table (70), Title (30), Divider (12), Description Number (7), 2 Depth (6), Square (3), Form/Input Text Box (2), Page number (1), Component 4 (1), Frame (1), Arrow/Chevron_Up (1), Button/Primary_1Button_62 (1), Primary Buttons_1Button_Height 63 (1), Label/Default (1), Interface/Close (1)
- Modify: Table (70), Title (30), Text Field_38/Default (9), Description Number (8), 2 Depth (6), Divider (4), Dropdown 38/Default (4), Square (3), Form/Input Text Box (2), Page number (1), Component 4 (1), Frame (1), Arrow/Chevron_Up (1), Button/Primary_1Button_62 (1), Primary Buttons_1Button_Height 63 (1), Label/Default (1), Interface/Close (1)

### 디스크립션 (원문)

보기 프레임 (3543:618372)

#### 1. [Add] 버튼

- 선택 시 → 목록 최상단 빈 row 생성 & 활성화
- Modify 팝업 화면 참고

#### 2. 검체 튜브 설정 Row

- 선택된 항목 활성화
- (2-1) 미선택 항목 선택 시 → 아래 항목 반영
- 선택한 row 활성화
- 선택한 row에 따른 ③ 정보 변경 노출
- 이전 선택한 row 활성화 X

#### 3. Sample tube details

- 노출 : 목록 항목 선택 시 → 해당 정보 노출
- 출력 : Modify 팝업에서 저장 완료된 입력 값 출력
- 3-1 [닫기] 버튼
- 선택 시 → Sample tube details 팝업 닫힘

#### 4. [Delete] 버튼

- 디폴트 : 활성화
- 선택 시 → Confirm_009 노출
- 삭제 완료 Case
- ㄴ 항목 없음 → [TI-SVS-01] 세부정의 참고
- ㄴ 항목 N개 존재 → 삭제한 row 바로 아래 항목 활성화 & Details 노출

#### 5. [Modify] 버튼

- 선택 시 → Modify 화면으로 전환

Modify 프레임 (3543:618663)

#### 1. Sample tube details

- 신규 생성 or 편집 화면 이탈 정의 :
- details 입력 값 & [Save] 버튼 외, 모두 해당
- 선택 시 → Confirm_012 노출 > 기존 데이터 유지 & 화면 이탈

#### 2. Height / Cap Size / Body Size

- 필드 정의 : 숫자만 입력 가능
- 출력 : view 화면에서 소수점 셋째 자리까지 노출
- ex 1) 15.12345 입력 시, ‘15.123’으로 출력
- (2-1) Bottom Type
- 노출 : Tube Specification DB의 Bottom Type 값 모두 노출
- 출력 :
- None
- Flat
- Round (U-bottom)
- Conical (V-bottom)
- Skirted Conical
- Custom

#### 3. Socket Type

- Group 항목
- 노출 : Socket Type DB의 Group 값 모두 노출
- 출력 : Socket G10~G50 출력 (10단위)
- 디폴트 : Socket G10
- No. 항목
- 노출 : Socket Type DB의 No. 값 모두 노출
- 출력 : None, 1~9 출력
- 디폴트 : None
- (3-1) Socket Type 설정 완료 배지
- 출력 : ‘Group’의 십의 자리 & ‘No.’의 일의 자리 합산 값 출력
- ex 1) ‘Group’=Socket G10 & ‘No.’=None인 경우, G10 출력
- ex 2) ‘Group’=Socket G30 & ‘No.’=3인 경우, G33 출력

#### 4. Sample Type

- 노출 : Sample Type DB의 Type 값 모두 노출
- 검체 타입 : Swab / Aspirate / BAL / Saliva / Sputum / Raw_stool / Cary-blair / eNAT_stool / Fecal_swab / Thinprep / Surepath / Cellpreserv / Urine / Semen
- 디폴트 : Swab

#### 5. [Cancel] 버튼

- 선택 시 → Confirm_012 노출
- ① 이탈 정의에 따름

#### 6. [Save] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : 필수 항목 모두 입력 시, 활성화
- 선택 시 → Confirm_010 노출
- 저장 완료 Case) View 화면으로 전환
- 신규 생성 Case) 아래 정의에 따름
- ㄴ 신규 Row 목록 최상단 노출 & 활성화
- ㄴ 우측 상세 정보 내, 신규 row 정보 출력

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 없고, 별도 프레임 `TI-SVS-01-P / 세부정의`([3543:619002](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-619002), 1734×1031, Modify 프레임 오른쪽)가 있습니다. 원본에 Case 번호가 없습니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | Sample tube 추가 시, 화면 Case | [Add]로 새 튜브 저장 | 위 프레임 |

- 목록 맨 위에 새 행 `Test Tube | SYS-001 | LIS-001 | Socket 11 | 100.000 | 13.000 | 13.000 | 2026-03-24 10:24:56`, 오른쪽 Sample tube details에 Name * Test Tube · 보기 화면 값(SYS-001 · LIS-001 · 100.000 · 13.000 · 13.000 · Flat · G14 · Socket G10 / 4 · Swab · Typing test), Delete | Modify
