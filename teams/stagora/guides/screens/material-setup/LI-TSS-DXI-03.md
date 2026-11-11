---
cid: LI-TSS-DXI-03
pair_cid:
tl_relation: 단독
title: MB Tube storage
path: Material Setup > Load Materials > MB Tube storage
type: Page
version: 2.0
date: 2026-06-15
author: BREX
service_mode: [Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-138175
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-DXI-03 MB Tube storage

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: Console Mode. Flexible Extraction의 MB Tube Storage에 MB Tube 적재 (위치 스캔 없음)
- 관련 정책: POL-MAT-002, POL-MAT-004, POL-LOD-002
- 호출하는 화면: LI-TSS-DXI (Done), MS_Alert_003, MS_Alert_004, MS_Alert_027, MS_Alert_029, MS_Alert_030, MS_Alert_032
- 다른 프레임: 없음. Required Quantity 버튼 세부 정의는 LI-TSS-DXI-02, 공통 정의는 LI-TSS-DXI-01
- 취소선(제거됨): 2 "(2-1) [Remove] 버튼" 정의 전체 ("위치 스캔이 없어 [Remove] 버튼 삭제"), 3 활성 조건 "(2-1) 활성화 정의와 동일"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Check the required quantities for each module. | Required Quantity (Accordion)
- FlexibleExtraction (N) > MB Tube storage
- Scan the QR code of the MB tube. / Insert MB tube into storage slot. / Repeat the action until you have loaded the required quantity. / Close the door and check the lock. / Click [Done] to go to the Load Materials manual.
- Number of filled ~~sections~~ slots in the storage | Remove
- 02/12 | N/M
- Done

### 사용 컴포넌트

Description Number (6), Frame (1), Accordion/Default (1), Button/Secondary_1Button_44 (1), Button/Tertiary_1Button_28 (1), Tool Tip/Default (1)

### 디스크립션 (원문)

#### 1. MB Tube 스캔

- 정상)
  - ② 카운팅 추가
- 오류
  - Case 1) MB Tube 스캔 시
    - ㄴ 유효기간이 만료된 시약을 스캔한 경우
    - ㄴ MS_Alert_003 팝업 노출
  - Case 2) MB Tube 외, 스캔 시
    - ㄴ Storage가 열린 상태에서 다른 Storage 코드를 스캔한 경우
    - ㄴ MS_Alert_027 팝업 노출
  - Case 3) 폐기된 소모품/시약 스캔 시
    - ㄴ MS_Alert_004 팝업 노출
  - Case 4) 이미 적재된 MB Tube 스캔 시
    - ㄴ MS_Alert_029 팝업 노출
    - ㄴ 다른 모듈 storage에 적재된 항목 포함
  - Case 5) storage가 가득 찬 상태에서 새 MB Tube 스캔 시
    - ㄴ MS_Alert_030 팝업 노출

#### 2. Number of filled ~~sections~~ slots in the storage

- 해당 Storage 적재 개수
  - 디폴트 : N/M
  - 출력 : 적재된 시약 수 / 적재 가능한 시약 수
    - ㄴ 적재 가능한 시약 수: 장비 DB에 따른 자동 출력
  - 카운팅 조건 :
    - MB Tube 스캔 시, 카운팅 추가
- ~~(2-1) [Remove] 버튼~~
  - ~~디폴트 : 비활성화~~
  - ~~활성화 조건 : MB Tube의 적재된 시약 수가 1 이상인 경우, 활성화~~
  - ~~선택 시 → [LI-TSS-CMP-01] 팝업 노출~~
- 위치 스캔이 없어 [Remove] 버튼 삭제

#### 3. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : ~~(2-1) 활성화 정의와 동일~~ MB Tube 1개 이상 스캔 시, 활성화
- 선택 시 → 아래 항목 반영
  - 해당 MB Tube 데이터 저장
  - [LI-TSS-DXI] 화면으로 이동 & Toast 팝업 노출
    - ㄴ Toast 팝업 text : DX storage loading is complete.
- 저장 실패 시
  - ㄴ MS_Alert_032 팝업 노출
- ※ 추가 정책 : 사용자가 물리적으로 storage unit을 닫을 경우, [Done] 선택과 동일한 액션을 가짐

#### 4. 모듈명

- 경로 : [LI-TSS-DXI] 화면에서 스캔한 모듈명 스캔 시, 노출
- 노출 :
  - 모듈 1대인 경우 → [모듈명 > 스토리지명] 노출
  - 모듈 N대인 경우 → [모듈명 (인덱스 번호) > 스토리지명] 노출
    - ㄴ ex) 두 번째 모듈 스캔 시, FlexibleExtraction (2) > MB Tube storage 노출

#### 5. [Required Quantity] 버튼

- 디폴트: Accordion 닫힘
- 선택 시 → Accordion 펼침
- 관련 정의 및 노출 항목 → Required Quantity 버튼 기능 정의 참고

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 이미지 변경 건 / - 대상 화면: MB Tube / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고
- v2.1.06 update / DX storage 닫음 시, Done 버튼 기능과 동일 정의
- v2.1.12 update / DX 필요수량 추가 / Module index 표기

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면·디스크립션 | 디스크립션은 [Remove] 삭제인데 화면에 Remove 버튼이 남아 있음 | 화면에서 Remove 버튼을 지움. 디스크립션도 Remove 없이 씀: MB Tube Storage 안에 BCR 장치가 있어 Instrument가 Barcode를 읽어 위치를 스스로 알고 가져가므로 위치값을 지울 필요가 없음. 화면 예시도 Remove 없이 | 2026-11-03 사용자 답변 (MS6-a) | 대기 |
| R02 | 디스크립션 | Remove가 없으면 잘못 넣은 MB Tube를 지우는 방법이 없음 (Storage 닫음 = [Done]) | Remove를 두지 않음 (반영 대기 목록 1). 위치는 BCR 장치가 읽어 관리함 | 2026-11-03 사용자 답변 (MS6-a) | 대기 |
| R03 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.12까지) 반영 Ver | 버전 메모 | 대기 (확인 필요) |
| R04 | 표기 | 타이틀 "FlexibleExtraction (N) > MB Tube storage" (코드명) | Flexible Extraction (2) > MB Tube Storage | `glossary/modules.csv`, `glossary/module-units.csv` | 대기 |
| R05 | 화면 | 카운터 "02/12"와 "N/M"이 겹쳐 있음 | 하나만 | 디스크립션 2 | 대기 |
| R06 | 표기 | "시약", "소모품/시약", "유효기간", "MB tube", "Toast 팝업" | Reagent, Consumable/Reagent, Expiration Date, MB Tube, Toast | `glossary/terms.csv`, `glossary/consumables.csv` | 대기 |
| R07 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | MB Tube 이미지 변경, 디스크립션 수정 | BREX | Figma 버전 메모 |
| 2.1.06 | | DX storage를 닫으면 [Done]과 같은 동작 | BREX | Figma 버전 메모 |
| 2.1.12 | | DX 필요 수량 추가, Module index 표기 | BREX | Figma 버전 메모 |
