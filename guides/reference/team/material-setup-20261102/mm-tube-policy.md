# MM Tube 적재 정책서

## 1. 개요

| 항목 | 내용 |
|---|---|
| 대상 | MM tube의 PCR socket 적재 (Load MM Tubes) |
| 시나리오 | (1) PCR socket 스캔 → (2) MM tube 수동 적재 → (3) `[Done]` |
| LMM-01 | `LI-TSS-PSI-LMM-01` PCR socket 스캔 화면 |
| LMM-02 | `LI-TSS-PSI-LMM-02` MM tube 적재 화면. 사용자가 MM tube 14개를 화면 안내대로 직접 넣는다 |
| LMM-03 | `LI-TSS-PSI-LMM-03` 완료 화면. 새 socket을 스캔하면 LMM-02로, `[Add New]`는 LMM-01로 이동한다 |

- 이 메뉴의 목적은 **PCR socket을 MM tube 용으로 지정하는 행위**이다.
- MM tube에는 바코드가 없다. 사용자가 물리적으로만 적재하며, MM tube 개별 데이터는 socket에 연결되지 않는다.
- 따라서 LMM-02에는 스캔할 항목이 없고, `[Remove]` 기능도 없다.
- `[Done]` 전에 메뉴를 벗어나면 Confirm_007(Leave without saving?)을 노출한다.
- 공통 데이터·컨펌·저장·복귀 원칙은 `common-loading-policy.md`를 따른다. PCR socket의 용도(PCR box 용 / MM tube 용)는 `pcr-setup-policy.md` 2.2를 따른다.

---

## 2. 컨펌·얼럿 적용

| 화면 | 스캔 대상 | 상태 | 컨펌 / 얼럿 |
|---|---|---|---|
| LMM-01 | 스캔 항목 | PCR socket이 아님 | **Alert_027** |
| LMM-01 | PCR socket | 데이터 없음 | 없음 → LMM-02 |
| LMM-01 | PCR socket | MM tube 용 socket | 없음 → LMM-02 |
| LMM-01 | PCR socket | PCR box 용 socket (PCR box 적재) | **Confirm_026** (컨펌 A) |
| LMM-02 | 스캔 항목 | 무엇이든 (스캔할 항목 없음) | **Alert_027** |
| LMM-03 | PCR socket | LMM-01과 같음 | LMM-01과 같음 |

- PCR socket인지 가장 먼저 판단한다.

---

## 3. 단계별 정책

### 3.1 (1) PCR socket 스캔 (LMM-01, LMM-03)

| # | 조건 | 노출 | 다음 |
|---|---|---|---|
| 1 | 스캔 항목 ≠ PCR socket | Alert_027 | 얼럿 닫힘 & 현재 화면 유지 |
| 2 | 빈 PCR socket 또는 MM tube 용 socket | 없음 | LMM-02로 이동 |
| 3 | PCR box 용 socket | Confirm_026 | Y: LMM-02로 이동 / N: 현재 화면 유지 |

### 3.2 (2) MM tube 적재 (LMM-02)

| # | 조건 | 노출 | 다음 |
|---|---|---|---|
| 1 | 스캔 (어떤 항목이든) | Alert_027 | 얼럿 닫힘 & LMM-02 유지 |
| 2 | `[Done]` 선택 | 없음 | socket을 MM tube 용으로 저장 → LMM-03 |
| 3 | `[Done]` 저장 실패 | Alert_045 | 현재 화면 유지, 재시도 가능 |

- `[Done]`은 기본 활성화 상태이다.

---

## 4. 컨펌 정의

### 4.1 컨펌 A (PCR box 용 socket 스캔)

| 구분 | 내용 |
|---|---|
| 노출 조건 | PCR socket 데이터 있음 + 적재 항목 = PCR box |
| Main | Use this socket for MM tubes? |
| Sub | Loaded PCR boxes will be unlinked. Reload them through their menu. |
| Y | 동의 기록 → LMM-02 (데이터 반영은 `[Done]` 시점) |
| N | 현재 화면 유지 |

**신규 작업 시 정의**
- `[Done]` 시 PCR box 용 socket → MM tube 용 socket으로 변경 (Data reset)
- socket과 PCR box 간의 연결 해제 (PCR box와 Lot 데이터는 유지)
- socket에 적재된 PCR box는 사용자가 물리적으로 제거 필요 *(화면에는 노출하지 않는 메모)*
- A에 Y로 동의했더라도 `[Done]` 전에 메뉴를 벗어나면 폐기하며, 같은 socket을 다시 스캔하면 A를 다시 노출한다.

---

## 5. 얼럿 정의

| 얼럿 | 노출 조건 | Main | Sub | 닫힘 후 |
|---|---|---|---|---|
| Alert_027 | LMM-01·03에서 PCR socket이 아닌 항목 스캔 / LMM-02에서 스캔 | Invalid code for the current workflow. | Verify the required item for this step and try again. | 현재 화면 유지 |
| Alert_045 | `[Done]` 저장 실패 | Failed to save. | Your changes are kept. Please try again. | 현재 화면 유지 |

---

## 6. 데이터 저장

| 이력 | `[Done]` 시 반영 |
|---|---|
| (공통) | 스캔한 PCR socket을 MM tube 용으로 지정 |
| 컨펌 A | PCR box 용 → MM tube 용 변경, socket과 PCR box 연결 해제 |

- 저장 실패 시 부분 반영 없이 기존 데이터를 유지한다(공통 정책서 5.4).
