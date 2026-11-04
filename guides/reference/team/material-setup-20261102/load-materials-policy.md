# Load Materials (DX 영역) 적재 정책서

## 1. 개요

| 항목 | 내용 |
|---|---|
| 대상 | Load Materials 메뉴에서 장비 모듈의 storage(DX 영역)에 소모품·시약·socket을 적재 |
| 시나리오 | (1) DXI에서 모듈 storage QR 스캔 → (2) storage 화면 진입 → (3) 항목 스캔 → (4) storage 위치 스캔(위치 스캔형만) → (5) `[Done]` 또는 storage 문 닫기로 저장 |
| DXI | `LI-TSS-DXI` Load Materials 메인. 모듈 storage QR을 스캔해 storage 화면으로 이동 |
| DXI-01~06 | storage별 적재 화면 (아래 2.1) |
| DXI-07 | Sealer Film 개수 입력 |
| DXI-08·09 | Buffer Cartridge cap·Tub cap 보충 확인 |

- DX 영역은 Trolley·Tray처럼 **다른 곳과 데이터가 연결된 항목을 다시 스캔해서 옮길 수 없다**(클라이언트 합의). 다른 모듈·storage로 옮기려면 먼저 `[Remove]`로 빼야 한다.
- 그래서 Prepare Carrier의 컨펌 A·B·C(Confirm_026·027·028)는 쓰지 않고, 모두 얼럿으로 막는다.
- DX용 시약·소모품은 Assay pack에 등록된 **Segment 고유 코드**(LB·WB·MB·EB 등)로 구분된다. 그래서 같은 종류(예: DWP)라도 DX용과 Prepare Carrier용이 섞이지 않으며, 다른 흐름의 항목을 스캔하면 Alert_027이다.
- LPR(PCR Setup)에서 적재한 PCR socket은 Cold Storage(DXI-06)에 넣는 것이 정상 흐름이다.
- 공통 데이터·저장·복귀 원칙은 `common-loading-policy.md`를 따른다.

---

## 2. 용어 및 storage 구분

### 2.1 storage 구분

| 화면 | Storage (모듈) | 적재 항목 | 방식 |
|---|---|---|---|
| DXI-01 | STAT storage (Sample Preparation) | 검체 socket | 위치 스캔형 |
| DXI-02 | DWP/Spin Tip storage (High-throughput Extraction) | DWP, Spin tip | 위치 스캔형 |
| DXI-03 | MB Tube storage (Flexible Extraction) | MB tube | 바로 넣기형 |
| DXI-04 | Buffer Cartridge storage (Flexible Extraction) | Buffer Cartridge | 위치 스캔형 |
| DXI-05 | Tip/PCR Plate storage (PCR Setup) | Tip, PCR plate | 바로 넣기형 |
| DXI-06 | Cold Storage (Plate sealing) | PCR socket, MM tube socket | 위치 스캔형 |

- **위치 스캔형**: 항목을 스캔한 뒤 storage 위치 QR을 스캔해서 적재한다. `[Remove]`가 있다.
- **바로 넣기형**: 항목을 스캔하면 바로 적재로 센다. 위치를 스캔하지 않으므로 `[Remove]`가 없다.
- 영문 표기는 storage **slot**(복수 slots)이다. "section"은 쓰지 않는다.
- 화면 타이틀은 `모듈명 > storage명`, 모듈이 여러 대면 `모듈명 (인덱스) > storage명`이다.

---

## 3. 단계별 정책

### 3.1 (1) 모듈 storage QR 스캔 (DXI)

| # | 조건 | 노출 | 다음 |
|---|---|---|---|
| 1 | storage 내부에서 소모품·시약이 이동 중 | Alert_034 | DXI 유지 |
| 2 | 정상 | 토스트 `The scanned storage unit has been opened.` | 해당 storage 화면 |

### 3.2 (3) 항목 스캔 (DXI-01~06)

| # | 조건 | 노출 | 다음 |
|---|---|---|---|
| 1 | 다른 storage QR 스캔 (storage가 열린 상태) | Alert_012 | 현재 화면 유지 |
| 2 | 이 storage에 넣을 수 없는 항목 | Alert_027 | 현재 화면 유지 |
| 2-1 | (DXI-01) 시약 socket | Alert_027 | 현재 화면 유지 |
| 2-2 | (DXI-01) 검체 없는 빈 socket | Alert_041 | 현재 화면 유지 |
| 2-3 | (DXI-06) PCR box·MM tube가 없는 빈 PCR socket | Alert_027 | 현재 화면 유지 |
| 3 | 폐기된 소모품/시약 | Alert_047 | 현재 화면 유지 |
| 4 | 유효기간이 만료된 시약 (DXI-01 검체 socket, DXI-05 Tip·PCR plate 소모품은 해당 없음. 소모품은 유효기간이 없음) | Alert_029 | 현재 화면 유지 |
| 5 | 이 storage에 이미 적재된 항목, 또는 다른 storage·Tray·Trolley에 연결된 항목 | Alert_044 (현재 위치 안내) | 현재 화면 유지 |
| 6 | storage의 모든 slot이 가득 참 + 새 항목 | Alert_043 (storage 문구) | 현재 화면 유지 |
| 7 | 정상 | 토스트 `The scan has been completed.` | 위치 스캔형: 위치 스캔 / 바로 넣기형: 적재 수 +1 |

- 판단 순서는 장비·개발 로직에 따른다(정책서에서 정하지 않음).
- 다른 곳에 연결된 항목을 옮기려면 원래 위치에서 `[Remove]` 후 `[Done]`하고 다시 적재한다.

### 3.3 (4) storage 위치 스캔 (위치 스캔형만)

| # | 조건 | 노출 | 다음 |
|---|---|---|---|
| 1 | 다른 storage 위치 스캔 | Alert_012 | 현재 화면 유지 |
| 2 | 이미 항목이 있는 위치 | Alert_032 | 현재 화면 유지 (항목 스캔부터 다시) |
| 3 | 빈 위치 | 없음 | 적재 수 +1 |

- 항목보다 위치를 먼저 스캔하면 토스트로 순서를 안내한다(공통 정책서 4.5). 문구는 `Scan the {항목} before scanning the storage slot.`이며, {항목}은 소모품이면 consumable, 시약이면 reagent, STAT(검체 socket)은 socket이다.
  - DXI-01 socket / DXI-02 consumable / DXI-04·06 reagent
- 위치를 스캔하기 전에 다른 항목을 스캔하면 마지막 항목으로 바꾸고 토스트를 노출한다(공통 정책서 4.5).
- 위치를 교체하는 컨펌(Confirm_027)은 쓰지 않는다. 바꾸려면 `[Remove]` 후 다시 적재한다.

---

## 4. Remove · 저장

- `[Remove]`(위치 스캔형만) → `LI-TSS-CMP-01`에서 위치 선택 → Confirm_006 → Alert_005. 제거는 변경 예정으로 기록하고 `[Done]` 때 반영한다.
- `[Done]` 활성화: 위치 스캔형은 적재 1개 이상, 바로 넣기형은 스캔 1개 이상.
- `[Done]` 또는 **storage 문을 물리적으로 닫으면** 저장하고 DXI로 이동한다. 토스트 `DX storage loading is complete.`
- 저장 실패 시 Alert_045. 변경 예정 상태를 유지하고 다시 시도할 수 있다.
- `[Done]` 전에 메뉴를 벗어나면 변경 예정 사항은 폐기한다.

---

## 5. 기타 화면

| 화면 | 내용 |
|---|---|
| DXI-07 Sealer Film | 모듈 인덱스별 필름 개수 입력 → [Apply]. Apply 안 한 인덱스로 이동 시 Confirm_022, [Reset] Confirm_024, 일부만 Apply 후 [Done] Confirm_023 |
| DXI-08 Buffer Cartridge cap refill | Flexible Extraction 모듈별 [Confirm refill] → Confirm_025 |
| DXI-09 Tub Cap Refill | 재사용 가능 Tub 목록(Tub명 / Trolley floor / Tray slot) [Confirm refill] → Confirm_025. 소모품 Tray의 Alert_042(Tub cap 보충 안내)와 연결 |
| Required Quantity 버튼 | 모듈 스케줄에 따른 storage별 필요 수량 표시. 적재를 막지 않음 |

---

## 6. 얼럿 정의

| 얼럿 | 노출 조건 | Main | Sub |
|---|---|---|---|
| Alert_043 (storage) | storage의 모든 slot이 가득 찬 상태에서 새 항목 스캔 | All slots in this storage are full. | 위치 스캔형: To load a new item, [Remove] a loaded item before loading. / 바로 넣기형: 없음 |
| Alert_044 | 이미 적재된 항목, 또는 다른 곳에 연결된 항목 스캔 | This is already loaded in [스캔 항목 적재 위치값]. | |
| Alert_045 | 저장 실패 | Failed to save. | Your changes are kept. Please try again. |
| Alert_047 | 폐기된 소모품/시약 | This item has been discarded. | Scan another consumable/reagent. |
| Alert_012·027·029·032·034·041 | 위 3장 | 피그마 Alert 표 문구 | |

## 7. 후속 정리

| # | 항목 | 상태 |
|---|---|---|
| 1 | Alert_043 storage 문구, 위치 스캔 순서 토스트 문구 | 피그마 반영 시 확정 |
| 2 | DXI-03·05 Remove 버튼 삭제 (UI) | 디자인 수정 필요 |
