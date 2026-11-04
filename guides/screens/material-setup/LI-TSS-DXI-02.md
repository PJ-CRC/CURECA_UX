---
cid: LI-TSS-DXI-02
pair_cid:
tl_relation: 단독
title: DWP/Spin Tip storage
path: Material Setup > Load Materials > DWP/Spin Tip storage
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-137910
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-DXI-02 DWP/Spin Tip storage

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: Console Mode. High-throughput Extraction의 WB1·WB2·EB·MB·Spin Tip Storage에 DWP/Spin Tip 적재
- 관련 정책: POL-EQP-006 (`cids`에 있음), POL-MAT-002, POL-MAT-004, POL-LOD-002
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-DXI (Done), MS_Alert_003, MS_Alert_004, MS_Alert_027, MS_Alert_028, MS_Alert_029, MS_Alert_030, MS_Alert_031 (세부 정의), MS_Alert_032
- 다른 프레임: 세부 정의 [8313:138711](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-138711), Required Quantity 버튼 세부 정의 [8313:138847](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-138847) (CID LI-TSS-DXI-02~7 공통, 여기에 옮김). 공통 정의는 LI-TSS-DXI-01

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Check the required quantities for each module. | Required Quantity (Accordion)
- High-throughput Extraction (N) > WB1 storage
- Scan the QR code of the WB1 DWP. / Scan the QR code on the storage ~~location~~ slot to load / Place the WB1 DWP on the scanned location with the barcode facing front. / Repeat the action until you have loaded the required quantity. / Close the door and check the lock. / Click [Done] to go to the Load Materials manual.
- Number of filled ~~sections~~ slots in the storage | Remove
- 02/12 | N/M
- Done

### 사용 컴포넌트

Description Number (8), Frame (1), Accordion/Default (1), Tool Tip/Default (1), Button/Secondary_1Button_44 (1), Button/Tertiary_1Button_28 (1)

### 디스크립션 (원문)

#### 1. Storage Title

- 정의 : [LI-TSS-DXI] 화면에서 스캔한 storage unit명칭 출력
  - 아래 출력 정의 참고
- 노출 :
  - 모듈 1대인 경우 → [모듈명 > 스토리지명] 노출
  - 모듈 N대인 경우 → [모듈명 (인덱스 번호) > 스토리지명] 노출
    - ㄴ ex) 두 번째 모듈 스캔 시, HtExtraction (2) > WB1 storage 노출
- (1-1), (1-2) 메뉴얼 출력 정의
  - 정의 : Storage의 UI 명칭 출력
    - 아래 출력 정의 참고

#### 2. DWP/Spin tip or Storage 내부 스캔

- Toast 팝업 노출
  - Main text: The scan has been completed.
- 정상) storage 내부 스캔 시
  - ㄴ ③ 카운팅 추가
- 위치 스캔 전에 다른 항목 스캔 시
  - ㄴ 마지막 항목으로 교체 & Toast 팝업 노출
- 항목 스캔 전에 위치 먼저 스캔 시
  - ㄴ Toast 팝업 노출: Scan the reagent before scanning the storage ~~location~~ slot.
- 오류)
  - Case 1) DWP or Spin tip 스캔 시
    - ㄴ 유효기간이 만료된 시약을 스캔한 경우
    - ㄴ MS_Alert_003 팝업 노출
  - Case 2) DWP or Spin tip 외, 스캔 시
    - ㄴ Storage가 열린 상태에서 다른 Storage 코드를 스캔한 경우
    - ㄴ MS_Alert_027 팝업 노출
  - Case 3) 사용 중인 위치값 스캔 시
    - ㄴ MS_Alert_028 팝업 노출
  - Case 4) 폐기된 소모품/시약 스캔 시
    - ㄴ MS_Alert_004 팝업 노출
  - Case 5) 이미 적재된 항목 스캔 시
    - ㄴ MS_Alert_029 팝업 노출
    - ㄴ 다른 모듈 storage에 적재된 항목 포함
  - Case 6) storage가 가득 찬 상태에서 새 항목 스캔 시
    - ㄴ MS_Alert_030 팝업 노출

#### 3. Number of filled ~~sections~~ slots in the storage

- 해당 Storage 적재 개수
  - 디폴트 : N/M (투입 시약 개수 모두 동일)
  - 출력 : 적재된 시약 수 / 적재 가능한 시약 수
    - ㄴ 적재 가능한 시약 수: 장비 DB에 따른 자동 출력
  - 카운팅 조건 :
    - DWP or Spin tip & storage 내부 스캔 시, 카운팅 추가
- (3-1) [Remove] 버튼
  - 디폴트 : 비활성화
  - 활성화 조건 : DWP or Spin tip의 적재된 시약 수가 1 이상인 경우, 활성화
  - 선택 시 → [LI-TSS-CMP-01] 팝업 노출
    - ㄴ Remove는 변경 예정으로 기록, [Done] 선택 시 반영

#### 4. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : (3-1) 활성화 정의와 동일
- 선택 시 → 아래 항목 반영
  - DWP or Spin tip 데이터 저장
  - [LI-TSS-DXI] 화면으로 이동 & Toast 팝업 노출
    - ㄴ Toast 팝업 text : DX storage loading is complete.
- 저장 실패 시
  - ㄴ MS_Alert_032 팝업 노출
- ※ 추가 정책 : 사용자가 물리적으로 storage unit을 닫을 경우, [Done] 선택과 동일한 액션을 가짐

#### 5. [Required Quantity] 버튼

- 디폴트: Accordion 닫힘
- 선택 시 → Accordion 펼침
- 관련 정의 및 노출 항목 → Required Quantity 버튼 기능 정의 참고

### 세부 정의 (원문)

8313:138711 "LI-TSS-DXI-02 / 세부정의"

- High-throughput Extraction 노출 이미지 CASE 정의
  - WB1 / WB2 / EB / MB storage 스캔 시, 노출 이미지
  - Spin Tip storage 스캔 시, 노출 이미지
- High-throughput Extraction 출력명 정의

| Stoage Unit 명 | Ht-Extraction 입고 시, 스캔 항목 |
| --- | --- |
| WB1 storage | WB1 DWP |
| WB2 storage | WB2 DWP |
| EB storage | EB DWP |
| MB storage | MB DWP |
| Spin Tip storage | Spin Tip |
| Spare storage | MS_Alert_031 노출 |

8313:138847 "Inventory 버튼 선택 시, 세부정의" (화면 정보 Ver 2.0, 2026.06.15, CID LI-TSS-DXI-02~7, BREX)

- Storage별 Required Quantity 표기 항목 (Common UX > Data Notation Rules for Inventory 정의 참고)

| Module | Storage | 적재 항목명 | 표기 방식 |
| --- | --- | --- | --- |
| High-throughput Extraction | MB Storage | MB DWP | 96T (1 DWP) |
| High-throughput Extraction | WB1 Storage | WB1 DWP | 96T (1 DWP) |
| High-throughput Extraction | WB2 Storage | WB2 DWP | 96T (1 DWP) |
| High-throughput Extraction | EB Storage | EB DWP | 96T (1 DWP) |
| High-throughput Extraction | Spin Tip Storage | Spin Tip | 96T (1 DWP) |
| Flexible Extraction | MB Tube Storage | MB Tube | 96T (1 tube) |
| Flexible Extraction | Buffer Cartridge Storage | BB TUB, WB1 TUB, WB2 TUB, WB3 TUB, EB TUB | 96T (1 tube) |
| Flexible Extraction | Buffer Cartridge Storage | Buffer Cartridge Cap | 5 ea (1 set) |
| PCR Setup | 1000 μL Tip Storage | 1000 μL Tip | 96 ea (1 rack) |
| PCR Setup | 300 μL Tip Storage(1) | 300 μL Tip | 96 ea (1 rack) |
| PCR Setup | 300 μL Tip Storage(2) | 300 μL Tip | 96 ea (1 rack) |
| PCR Setup | PCR Plate Storage | PCR Plate | 1 ea |
| Plate Sealing | Cold Storage | 검사별 시약 | 100T (1 set) |
| Plate Sealing | Cold Storage | MM Tube | 14 ea (1 socket) |
| Plate Sealing | Sealer Film Storage | Sealing Film | 100 ea |

- Required Quantity 버튼 기능 정의
  - 닫힘 상태(디폴트): Inventory (버튼)
  - 펼힘 상태_기본 스캔 case: Check the required quantities for each reagent. / Required Quantity / MB Tube 96T (1 tube)
  - 펼힘 상태_Buffer Cartridge Storage 스캔 case: BB TUB, WB1 TUB, WB2 TUB, WB3 TUB, EB TUB 96T (1 tube) / Buffer Cartridge Cap 5 ea (1 set)
  - 펼힘 상태_Cold storage 스캔 case: MM Tube 14 ea (1 socket) / PCR Reagents: RP1, RP2, RP3, PB, GI-V, GI-P, GI-B1, GI-B2 각 200T (2 sets)
- (패널) # Inventory 버튼 영역 / 노출 정의: [LI-TSS-DXI-02]~[LI-TSS-DXI-07] 화면 노출
- (패널) 1 Inventory 버튼 / 정의: 장비 스케쥴링에 따른 스캔한 storage (인덱스)에서 필요 적재 수량을 노출하기 위함 / 출력: 적재 항목명 & 용량 및 수량 단위 출력
  - (1-1) 적재 항목명 & 표기방식 / 공통 참고 항목 : Common UX > Data Notation Rules for Inventory 정의에 따름 / 노출 : 스캔한 storage에 적재되는 항목명 및 표기 방식 노출
  - (1-2) 정렬 정의 : 공통 참고 항목 참고

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고
- v2.1.06 update / DX storage 닫음 시, Done 버튼 기능과 동일 정의
- v2.1.12 update / DX 필요수량 추가 / Module index 표기

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.12까지) 반영 Ver | 버전 메모 | 대기 (확인 필요) |
| 2 | 표기 | 타이틀 "High-throughput Extraction (N) > WB1 storage", 예시 "HtExtraction (2) > WB1 storage" (코드명) | High-throughput Extraction (2) > WB1 Storage | `glossary/modules.csv`, `glossary/module-units.csv` | 대기 |
| 3 | 알럿 | Spare Storage 스캔(MS_Alert_031)이 세부 정의 표에만 있고 디스크립션 2에 없음 | 디스크립션 오류 Case에 추가 | `policy/alert-catalog-ms.csv` MS_Alert_031 | 대기 |
| 4 | 디스크립션 | 2 Case 2 "DWP or Spin tip 외, 스캔 시" 아래에 MS_Alert_027(다른 Storage 코드)만 있음. 다른 품목(예: WB1 Storage에 EB DWP) 스캔 케이스 없음 | Storage와 맞지 않는 품목 스캔 알럿(MS_Alert_001 등) 정의 | 세부 정의 출력명 표 | 대기 (확인 필요) |
| 5 | 화면 | 버튼 이름: 화면 "Required Quantity", 세부 정의 "Inventory" | 하나로 통일 | 세부 정의 8313:138847 | 대기 (확인 필요) |
| 6 | 화면 | 카운터 "02/12"와 "N/M"이 겹쳐 있음 | 하나만 | 디스크립션 3 | 대기 |
| 7 | 표기 | 세부 정의 표기 "96T (1 DWP)", "100T (1 set)", "200T (2 sets)" | rxns 단위 (T → rxns, LCR-01-03 세부 정의는 이미 rxns). 품목 표: DWP 96 rxns/DWP, PCR 100 rxns/set | `glossary/consumables.csv`, `glossary/pcr-reagents.csv`, `background/worklist.md` "T → rxns" | 대기 |
| 8 | 표기 | 세부 정의 "BB TUB, WB1 TUB…", "Stoage Unit 명", "펼힘", "스케쥴링", "300 μL Tip Storage(1)" | BB Tub, WB1 Tub…, Storage Unit 이름, 펼침, 스케줄링, 300 μL Tip Storage (1) | `glossary/consumables.csv`, 오타 | 대기 |
| 9 | 화면 데이터 | PCR Reagent 약칭 "RP1, PB, GI-B1…" | 품목 표 구성품·제품 이름 기준 표기 방식 정함 | `glossary/pcr-reagents.csv` | 대기 (확인 필요) |
| 10 | 디스크립션 | 2 "Scan the reagent before scanning…" (Spin Tip 포함) | 대상 이름 확인 | 디스크립션 2 | 대기 |
| 11 | 표기 | "시약", "소모품/시약", "유효기간", "모듈명", "스토리지명", "메뉴얼", "Toast 팝업" | Reagent, Consumable/Reagent, Expiration Date, Module 이름, Storage 이름, 매뉴얼, Toast | `glossary/terms.csv` | 대기 |
| 12 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선) | BREX | Figma 버전 메모 |
| 2.1.06 | | DX storage를 닫으면 [Done]과 같은 동작 | BREX | Figma 버전 메모 |
| 2.1.12 | | DX 필요 수량 추가, Module index 표기 | BREX | Figma 버전 메모 |
