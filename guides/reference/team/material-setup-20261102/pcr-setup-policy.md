# PCR Setup 적재 정책서

## 1. 개요

| 항목 | 내용 |
|---|---|
| 대상 | PCR box의 PCR socket 적재 (PCR Setup) |
| 시나리오 | (1) Trolley 선택 또는 Skip → (2) PCR socket 스캔 → (3) PCR box 스캔 (적재 slot 하이라이팅) |
| LPR-02 | `LI-TSS-PSI-LPR-02` PCR Setup 가이드 화면. PCR socket을 스캔하는 화면 |
| LPR-03 | `LI-TSS-PSI-LPR-03` PCR 적재 가이드. 흐름도의 복귀 지점이며, PCR box 스캔은 이 가이드에서 진행한다 |

- 이 메뉴의 목적은 **PCR box를 PCR socket의 slot에 적재하는 행위**이다.
- Trolley 선택 또는 Skip은 적재 정책(컨펌·얼럿 판단)에 영향을 주지 않는다.
- 이 흐름은 **하이라이팅 적재 흐름**이다(공통 정책서 4.4). PCR box를 스캔하면 시스템이 적재할 slot을 하이라이팅하며, 사용자는 위치를 스캔하지 않는다. 따라서 **컨펌 B가 없다**.
- LPR-03에는 **[Remove] 기능**이 있어, PCR socket의 slot에 적재된 PCR box를 제거할 수 있다. slot을 비우는 방법은 `[Remove]`뿐이다. `[Remove]`도 변경 예정 사항으로 기록되며 `[Done]`을 눌러야 반영된다(8장).
- PCR Setup을 마친 PCR socket은 Tray에 적재하지 않고 DX 장비인 cold storage에 적재한다. cold storage 적재는 본 정책서의 범위가 아니다.
- 공통 데이터·컨펌·저장·복귀 원칙은 `common-loading-policy.md`를 따른다. 공통 정책서의 Trolley·Tray는 이 흐름에서 PCR socket·PCR box로 읽는다(공통 정책서 2.6).
- 흐름도의 "PCR cack"은 PCR socket, "(3) PK/IC 스캔"은 (3) PCR box 스캔, "스캔 항목 = PK/IC tube 여부"는 스캔 항목 = PCR box 여부의 오기로 보고 정리했다.

---

## 2. 용어 및 적재 계층

### 2.1 적재 단위

적재 단위의 종류와 소모품/시약의 결합 구조는 공통 정책서 2.1·2.2를 따른다.

### 2.2 PCR socket과 PCR box

- **PCR socket**: PCR box 또는 MM tube 용도로만 사용하는 socket이다. 적재 항목은 socket의 용도로 판단하며, PCR box 용이면 `적재 항목 = PCR box`, MM tube 용이면 `적재 항목 = MM tube`(MM tube socket)이다.
- **MM tube socket**: MM tube 메뉴에서 PCR socket을 스캔하여 "MM tube 용 socket"으로 지정한 socket이다. MM tube는 별도 스캔 없이 물리적으로만 적재하므로, MM tube 개별 데이터는 socket에 연결되지 않는다. Standard tube와 같은 방식이다.
- **PCR box**: Lot이 구성된 PCR box이다. PCR box는 소모품/시약 계열에 속한다(공통 정책서 2.2).
- **slot**: PCR socket 내부에서 PCR box가 적재되는 위치이다. PCR socket 1개에는 PCR box를 **최대 2개**(A·B slot) 적재하며, 몇 개를 적재할지는 사용자가 정한다.
- **Allplex HPV 28**: 이 시약의 PCR box는 socket 1개에 **1개만** 적재한다. HPV 28 box가 적재된 socket은 가득 찬 것으로 본다.

### 2.3 적재 계층

| 구분 | 하위 | 상위 |
|---|---|---|
| PCR 계열 | PCR box | PCR socket (slot) |

- 본 정책서에서 "상위"는 **PCR socket(slot)**, "하위"는 PCR socket에 적재된 **PCR box**를 뜻한다.
- PCR Setup에서 PCR socket에는 PCR box만 적재할 수 있다.

---

## 3. 공통 정책 적용

### 3.1 컨펌 적용

| 스캔 대상 | 데이터 상태 | 컨펌 / 얼럿 |
|---|---|---|
| socket | 스캔 항목 ≠ PCR socket | **Alert_027** |
| socket | 데이터 없음 | 없음 |
| socket | 데이터 있음 + 적재 항목 = PCR box | 없음 (기존 PCR box socket에 이어서 적재하는 것이 정상) |
| socket | 데이터 있음 + 적재 항목 ≠ PCR box (MM tube socket) | **컨펌 A** |
| box | 스캔 항목 ≠ PCR box (socket 포함) | **Alert_027** |
| box | 폐기된 PCR box | **Alert_047** |
| box | 유효기간이 만료된 PCR box | **Alert_029** |
| box | PCR box + Lot 미구성 | **Alert_024** |
| box | PCR box + Lot 구성 + 현재 작업 중인 socket에 이미 적재됨 (저장된 연결과 변경 예정 상태에 기록된 연결 모두 포함) | **Alert_044** |
| box | PCR box + Lot 구성 + 현재 socket에 적재된 box와 유효기간이 다름 | **Alert_011** |
| box | PCR box + Lot 구성 + 현재 socket의 모든 slot이 가득 참 (변경 예정 상태 기준, HPV 28 포함) | **Alert_043** |
| box | PCR box + Lot 구성 + 다른 socket과 연결됨 (저장된 연결과 변경 예정 상태에 기록된 연결 모두 포함) | **컨펌 C** |
| box | PCR box + Lot 구성 + 어떤 socket과도 연결 없음 | 없음 (하이라이팅 slot에 적재) |
| box | `[Remove]`로 제거 예정인 box | 상위 연결 없음으로 판단 (Alert_044·컨펌 C 없음) |

### 3.2 다른 흐름과의 대응

| 구분 | Trolley 흐름 | Tray 흐름 | PK/IC Setup | PCR Setup (본 정책서) |
|---|---|---|---|---|
| 진입 단위 (컨펌 A) | Trolley | Tray | PK/IC socket | PCR socket |
| 하위 단위 (컨펌 C) | Tray | 검체 socket·소모품/시약 | PK/IC tube | PCR box |
| 적재 위치 (컨펌 B) | Floor | Tray 내부 위치 | 없음 (slot 하이라이팅) | 없음 (slot 하이라이팅) |

- 적재 위치를 스캔하지 않으므로 컨펌 B와 B 판단 규칙(공통 정책서 4.1의 C–B 관계)은 이 흐름에 적용하지 않는다.

---

## 4. 전체 플로우

```mermaid
flowchart LR
  subgraph SG1["(2) PCR socket 스캔"]
    direction LR
    S1(["PCR Setup 가이드 화면<br/>LPR-02"]) --> S2[/"PCR socket 스캔"/] --> G0{"스캔 항목<br/>= PCR socket?"}
    G0 -- Y --> D1{"socket<br/>데이터 존재?"}
    D1 -- Y --> D2{"적재 항목<br/>= PCR box?"}
    D2 -- "N (MM tube socket)" --> CA{"컨펌 A<br/>신규 작업 여부"}
    G0 -- N --> A27S["Alert_027<br/>(닫힘 & LPR-02 복귀)"]
  end
  subgraph SG2["(3) PCR box 스캔 (slot 하이라이팅)"]
    direction LR
    G["PCR box 적재 가이드<br/>LPR-03"] --> T[/"PCR box 스캔"/] --> E0{"스캔 항목<br/>= PCR box?"}
    E0 -- Y --> E1{"Lot 구성 여부"}
    E1 -- Y --> E2{"현재 socket에<br/>이미 적재됨?"}
    E2 -- N --> E3{"현재 socket<br/>slot 가득 참?"}
    E3 -- N --> E4{"다른 socket과 매핑?<br/>(상위 정보 매핑)"}
    E4 -- Y --> CC{"컨펌 C<br/>신규 작업 여부"}
    CC -- Y --> L["하이라이팅 slot에<br/>적재 진행"]
    L --> DONE(["정상 적재 완료"])
    E0 -- N --> A27["Alert_027<br/>(닫힘 & LPR-03 복귀)"]
    E1 -- N --> A24["Alert_024<br/>(닫힘 & LPR-03 복귀)"]
    E2 -- Y --> AL6["Alert_044: 적재 위치값 출력<br/>(닫힘 & LPR-03 복귀)"]
    E3 -- Y --> AL5["Alert_043<br/>(닫힘 & LPR-03 복귀)"]
    E4 -- N --> L
    A27 ~~~ A24 ~~~ AL6 ~~~ AL5
  end
  D1 -- N --> G
  D2 -- Y --> G
  CA -- Y --> G
  CA -- N --> S1
  CC -- N --> G
```

- 흐름은 좌 → 우 방향이며, 얼럿 박스에는 닫힘 후 복귀 화면을 함께 표기했다(복귀 화살표는 생략).
- 위 플로우에서 `G`(LPR-03)로의 복귀는 모두 **초기화**(PCR box 스캔부터 다시 시작)이다.
- PCR socket 스캔 단계의 Alert_027 닫힘과 컨펌 A의 N만 PCR Setup 가이드 화면(LPR-02)으로 복귀한다.
- Alert_043·044 분기는 흐름도에 추가될 예정이다. Alert_044 → Alert_043 → 컨펌 C의 판단 순서는 PK/IC Setup과 동일하다.
- "정상 적재 완료"는 box 1건의 스캔 흐름이 끝난 상태이며, 데이터는 `[Done]`을 눌러야 저장된다.

---

## 5. 단계별 정책

### 5.1 (2) PCR socket 스캔 (LPR-02)

| # | 조건 | 노출 | 다음 |
|---|---|---|---|
| 1 | 스캔 항목 ≠ PCR socket (Tray, Trolley, tube 등 포함) | Alert_027 | 얼럿 닫힘 & LPR-02 복귀 |
| 2 | socket 데이터 없음 | 없음 | PCR 적재 가이드 노출(LPR-03) → PCR box 스캔 |
| 3 | socket 데이터 있음 + 적재 항목 = PCR box | 없음 | PCR 적재 가이드 노출(LPR-03) → PCR box 스캔 |
| 4 | socket 데이터 있음 + 적재 항목 ≠ PCR box (MM tube socket) | 컨펌 A | Y: PCR 적재 가이드 노출 후 PCR box 스캔 / N: LPR-02 복귀 |

- PCR socket인지 가장 먼저 판단한다. PCR socket이 아니면 데이터 유무와 관계없이 Alert_027을 노출하고 LPR-02로 복귀한다.

### 5.2 (3) PCR box 스캔 (LPR-03)

| # | 조건 | 노출 | 다음 |
|---|---|---|---|
| 1 | 스캔 항목 ≠ PCR box (socket 포함) | Alert_027 | 얼럿 닫힘 & LPR-03 복귀 |
| 1-1 | 폐기된 PCR box | Alert_047 | 얼럿 닫힘 & LPR-03 복귀 |
| 2 | 유효기간이 만료된 PCR box | Alert_029 | 얼럿 닫힘 & LPR-03 복귀 |
| 3 | PCR box + Lot 미구성 | Alert_024 | 얼럿 닫힘 & LPR-03 복귀 |
| 4 | PCR box + Lot 구성 + 현재 socket에 이미 적재됨 | Alert_044 | 얼럿 닫힘 & LPR-03 복귀 |
| 5 | PCR box + Lot 구성 + 현재 socket의 box와 유효기간이 다름 | Alert_011 | 얼럿 닫힘 & LPR-03 복귀 |
| 6 | PCR box + Lot 구성 + 현재 socket의 모든 slot이 가득 참 | Alert_043 | 얼럿 닫힘 & LPR-03 복귀 |
| 7 | PCR box + Lot 구성 + 다른 socket과 매핑 없음 | 없음 | 하이라이팅 slot에 적재 → 정상 적재 완료 |
| 8 | PCR box + Lot 구성 + 다른 socket과 매핑 있음 | 컨펌 C | Y: 하이라이팅 slot에 적재 → 정상 적재 완료 / N: LPR-03 복귀 |

- 판단 순서: Alert_027 → Alert_047 → Alert_029 → Alert_024 → Alert_044 → Alert_011 → Alert_043 → 컨펌 C.
- LPR-03에서 스캔할 수 있는 것은 PCR box뿐이다. socket을 스캔하면 Alert_027이다. 다른 PCR box를 연달아 스캔하는 것은 다음 slot에 적재하는 정상 동작이므로 얼럿을 띄우지 않는다.
- 가득 참: 2개가 적재된 socket, 또는 Allplex HPV 28 box가 적재된 socket. HPV 28 box는 비어 있는 socket에만 적재할 수 있으므로, 다른 box가 이미 있는 socket에 HPV 28 box를 스캔해도 Alert_043이다.
- 현재 socket에 이미 적재된 box(저장된 연결, 또는 같은 작업에서 적재하여 변경 예정 상태에 기록된 연결)를 다시 스캔하면 컨펌 C 대신 **Alert_044**으로 적재 위치를 알린다. 같은 socket 안에서 box의 slot을 옮기려면 `[Remove]`로 제거한 뒤 다시 스캔한다.
- **기존 데이터 매핑**은 스캔한 box가 현재 socket이 아닌 다른 PCR socket(상위)과 연결되어 있는지를 기준으로 판단한다. 변경 예정 상태에 기록된 연결도 포함한다.
- `[Remove]`로 제거한 box는 상위 연결이 없는 것으로 보아 다시 스캔해도 Alert_044과 컨펌 C를 노출하지 않는다.

### 5.3 slot 하이라이팅

- PCR box가 적재 가능하다고 판단되면 시스템이 적재할 slot을 하이라이팅한다.
- slot은 순차적으로 채운다. `[Remove]`로 앞 slot을 비운 경우에도 마지막 slot까지 먼저 채운 뒤, 비워 둔 앞 slot을 하이라이팅한다. *(세부 규칙은 개발 정의를 따른다)*
- **가득 참**은 PCR socket의 모든 slot에 PCR box가 적재된 상태이며, 변경 예정 상태를 기준으로 판단한다. `[Remove]`로 비운 slot과 컨펌 A로 전환한 socket의 slot은 빈 slot으로 본다.
- 가득 찬 socket에서 새 box를 적재하려면 `[Remove]`로 slot을 비워야 한다.

---

## 6. 컨펌 정의

### 6.1 컨펌 A (MM tube socket 스캔)

| 구분 | 내용 |
|---|---|
| 노출 조건 | socket 데이터 있음 + 적재 항목 ≠ PCR box (MM tube socket) |
| Main | Use this socket for PCR boxes? |
| Sub | Loaded MM tubes will be unlinked. Reload them through their menu. |
| Y | 동의 기록 → PCR 적재 가이드 노출 후 PCR box 스캔 (데이터 반영은 `[Done]` 시점) |
| N | LPR-02 복귀 |

**신규 작업 시 정의**
- `[Done]` 시 MM tube 용 PCR socket → PCR box 용 PCR socket으로 변경 (socket의 용도 변경, Data reset)
- MM tube는 개별 데이터 없이 socket 용도로만 지정되어 있으므로, socket과 MM tube 간의 연결이 끊기는 것은 곧 socket의 MM tube 용도 지정이 해제되는 것을 뜻한다.
- 신규가 된 socket에 적재된 MM tube는 사용자가 물리적으로 제거 필요 *(화면에는 노출하지 않는 메모)*

**추가 규칙**
- A에 Y로 동의하면 변경 예정 상태에서 해당 socket의 모든 slot은 빈 값으로 기록한다. 하이라이팅과 가득 참 판단은 이 상태를 기준으로 한다.
- A에 Y로 동의했더라도 `[Done]` 전에 메뉴를 벗어나면 동의 및 변경 예정 사항을 폐기하며, 같은 socket을 다시 스캔하면 A를 다시 노출한다.

### 6.2 컨펌 C (PCR box 스캔)

| 구분 | 내용 |
|---|---|
| 노출 조건 | PCR box + Lot 구성 + 다른 socket과 매핑 있음 |
| Main | Reassign this PCR box to a new socket? |
| Sub | The previous socket link will be removed, but the other PCR boxes in that socket remain valid. |
| Y | 동의 기록(스캔한 box와 기존 socket slot 연결을 해제 예정으로 기록) → 하이라이팅 slot에 적재 진행 |
| N | LPR-03 복귀 (현재 진행 중인 box의 스캔 및 동의 상태 초기화. 이미 정상 적재 완료로 기록된 다른 box의 변경 예정 사항은 유지) |

**신규 작업 시 정의**
- `[Done]` 시 스캔한 box와 기존 socket slot 간의 연결 해제
- box와 box의 Lot 데이터는 보존

---

## 7. 얼럿 정의

| 얼럿 | 노출 조건 | Main | Sub | 닫힘 후 |
|---|---|---|---|---|
| Alert_027 | PCR socket 스캔 시 스캔 항목 ≠ PCR socket | Invalid code for the current workflow. | Verify the required item for this step and try again. | LPR-02 복귀 |
| Alert_027 | PCR box 스캔 시 스캔 항목 ≠ PCR box | Invalid code for the current workflow. | Verify the required item for this step and try again. | LPR-03 복귀 |
| Alert_047 | 폐기된 PCR box 스캔 | This item has been discarded. | Scan another consumable/reagent. | LPR-03 복귀 |
| Alert_029 | 유효기간이 만료된 PCR box 스캔 | The scanned reagent has expired. | Scan a reagent that is within its expiration date. | LPR-03 복귀 |
| Alert_024 | Lot이 구성되지 않은 PCR box 스캔 | Lot Group mismatch. | Scan a reagent that matches the configured Lot group. | LPR-03 복귀 |
| Alert_011 | 현재 socket에 적재된 box와 유효기간이 다른 PCR box 스캔 | Expiration date mismatch. | Only reagents with the same expiration date can be loaded into this socket. | LPR-03 복귀 |
| Alert_043 | 현재 socket의 모든 slot이 가득 찬 상태에서 PCR box 스캔 | All slots in this socket are full. | To load a new PCR box, [Remove] a loaded box before loading. | LPR-03 복귀 |
| Alert_044 | 현재 socket에 이미 적재된 PCR box 재스캔 | This is already loaded in [스캔 항목 적재 위치값]. |  | LPR-03 복귀 |

- Alert_027의 문구는 Trolley 정책서에서 확정된 문구와 동일하다.
- Alert_043·044은 하이라이팅 적재 흐름 공통 얼럿이다(공통 정책서 4.4). Alert_043는 흐름별로 `{적재 항목}`만 바꿔 출력한다. Alert_044의 `[스캔 항목 적재 위치값]`에는 box가 적재된 slot 위치를 출력한다.

---

## 8. 데이터 저장, 취소 및 복귀 정책

### 8.1 데이터 반영 시점

- 컨펌 A·C의 Y와 `[Remove]`는 **동의와 변경 예정 사항만 기록**한다. 어떤 동작을 하더라도 `[Done]` 전에는 실제 연결이 해제되지 않으며, 해제는 이 흐름 안에서 기록만 된다.
- 실제 데이터 변경은 사용자가 필요한 box를 모두 처리하고 **`[Done]`을 눌렀을 때 한 번에 반영**한다.

`[Done]` 시 반영되는 내용:

| 컨펌 Y 이력 | 반영 내용 |
|---|---|
| 컨펌 A | MM tube 용 PCR socket → PCR box 용 PCR socket으로 변경(Data reset), MM tube 용도 지정 해제(모든 slot이 빈 값이 됨) |
| 컨펌 C | 스캔한 box와 기존 socket slot 간 연결 해제 |
| `[Remove]` | PCR socket slot에서 제거한 box의 연결 해제 |
| (공통) | 스캔한 box와 하이라이팅된 slot 간 신규 매핑 생성, box의 Lot 데이터 유지 |

### 8.2 메뉴 이탈

- `[Done]` 전에 메뉴를 벗어나면 A·C 동의 기록과 `[Remove]`를 포함한 모든 변경 예정 사항을 폐기하고 기존 데이터는 변경하지 않는다.

### 8.3 저장 실패

- 저장 중 오류가 발생해도 부분 반영은 허용하지 않으며, 기존 저장 데이터는 유지한다.
- 저장 실패 시 현재 적재 가이드 화면과 변경 예정 상태를 유지한다. Alert 확인 후 현재 화면에서 재시도할 수 있으며, 재시도 시 유지 중인 변경 예정 사항을 다시 저장한다.
- 저장 실패 Alert는 Alert_045(Main: `Failed to save.` / Sub: `Your changes are kept. Please try again.`)를 사용한다.

### 8.4 복귀 시 처리

| 복귀 사유 | 복귀 화면 | 데이터 | 상태 |
|---|---|---|---|
| Alert_027 / Alert_047 / Alert_029 / Alert_024 / Alert_044 / Alert_011 / Alert_043 닫힘 | LPR-03 | 변경 없음 | 초기화 (PCR box 스캔부터 다시) |
| 컨펌 C의 N | LPR-03 | 변경 없음 | 초기화 |
| PCR socket 스캔 시 Alert_027 닫힘 | LPR-02 | 변경 없음 | PCR socket 스캔부터 다시 |
| 컨펌 A의 N | LPR-02 | 변경 없음 | PCR socket 스캔부터 다시 |

- 얼럿 닫힘과 C의 N은 현재 진행 중인 box의 스캔 및 동의 상태만 초기화한다. 이미 정상 적재 완료로 기록된 다른 box의 변경 예정 사항은 유지되며 `[Done]` 시 저장된다.
- 복귀 후 방금 스캔한 box와 그 컨펌 C 동의는 유지하지 않는다. 같은 box를 다시 스캔하면 컨펌 C가 다시 노출될 수 있다.

---

## 9. 비고

- 컨펌 A·C의 문구는 간략안 기준이다. 언어별 문구는 언어셋 등록 시 확정한다.

## 10. 후속 정리 항목

| # | 항목 | 상태 |
|---|---|---|
| 1 | 얼럿·컨펌 ID (Alert_039~045, Confirm_026~028) | 확정 (2026-10-29 화면 설계서 검토) |
| 2 | 컨펌 A·C 문구 | 간략안 적용, 최종 확정 필요 |
| 3 | 흐름도 오기 수정(PCR cack, (3) PK/IC 스캔, 스캔 항목 = PK/IC tube), PCR socket 스캔 Alert_027·Alert_043·044 분기 추가 | 흐름도 수정 시 반영 |
| 4 | 저장 실패 Alert (Alert_045) ID 및 문구 | 확정 (2026-10-29 화면 설계서 검토) |
