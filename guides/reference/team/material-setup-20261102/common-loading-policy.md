# 공통 적재 정책서

## 1. 목적 및 적용 범위

검체 Trolley, 소모품 Trolley, 검체 Tray, 소모품 Tray, PK/IC Setup, PCR Setup의 적재 프로세스에 공통 적용되는 데이터·매핑·컨펌·저장·복귀 규칙을 정의한다. 흐름별 적재 가능 조건과 전용 얼럿은 각 개별 정책서에서 정의한다.

## 2. 용어 및 적재 계층

### 2.1 적재 단위

| 구분 | 종류 |
|---|---|
| Trolley | 검체 Trolley, 소모품 Trolley, 데이터 없는 Trolley |
| Tray | 검체 Tray, 소모품 Tray, 데이터 없는 Tray |
| 검체 Tray 적재 항목 | 검체 socket (검체가 적재된 socket)만 적재 |
| 소모품 Tray 적재 항목 | 소모품/시약만 적재: DWP, Standard tube, Tub, Tip/Swab, PK/IC tube |
| 하이라이팅 적재 항목 | 검체(→ socket), PK/IC tube(→ PK/IC socket), PCR box(→ PCR socket) |

- 본 문서는 여러 흐름을 함께 설명할 때 각 흐름의 적재 대상을 **하위 항목**으로 부른다. 흐름별 정책서에서는 구체 명칭(검체 socket, 소모품/시약, PK/IC tube, PCR box)을 쓴다.

**소모품/시약의 결합 구조**

| 소모품/시약 | 소모품 Tray 적재 방식 |
|---|---|
| DWP | 소모품 rack과 결합하지 않고 단독으로 적재 |
| Tip/Swab | 소모품 rack과 결합하여 적재 |
| Standard tube | socket에 적재한 뒤 소모품 rack과 결합하여 적재 |
| PK/IC tube | socket에 적재(PK/IC Setup)한 뒤 소모품 rack과 결합하여 적재 |
| Tub | frame에 적재한 뒤 소모품 rack과 결합하여 적재 |

- 소모품 rack은 스캔하지 않고 물리적으로만 결합한다. 소모품 Tray 흐름에서는 socket, frame, Tip/Swab, DWP의 자체 바코드를 스캔한다.
- 소모품 rack과 PCR socket은 다른 종류이다. PCR socket은 PCR Setup·MM Tube 메뉴에서 스캔하며, Tray에 적재하지 않고 cold storage에 적재한다.

### 2.2 계층 및 매핑

| 구분 | 하위 | 중위 | 상위 |
|---|---|---|---|
| 검체 계열 | 검체, 검체 socket | 검체 Tray | 검체 Trolley |
| 소모품 계열 | 소모품/시약 (DWP 단독, 또는 소모품 rack과 결합) | 소모품 Tray | 소모품 Trolley |
| PK/IC 계열 | PK/IC tube | PK/IC socket | 소모품 rack과 결합 후 소모품 Tray (PK/IC Setup 후 소모품 Tray 흐름에서 적재) |
| PCR 계열 | PCR box | PCR socket | cold storage (DX 장비, 본 정책서 범위 밖) |

- 각 적재 단위는 상위·하위 단위와 데이터로 매핑된다.
- 본 문서에서 상위는 Tray와 연결되는 Trolley Floor를, 하위는 Tray에 적재된 하위 항목을 뜻한다.
- 적재 항목은 **검체**와 **소모품/시약**으로 구분한다. PK/IC는 소모품/시약에 속하며, PK/IC Setup 흐름에서는 `적재 항목 = PK/IC`로 판단한다.
- G1 socket(= G10 socket, 화면·개발 문구에서는 G10으로 표기)은 검체 또는 PK/IC만 사용하며, 적재된 내용물에 따라 검체 socket(적재 항목 = 검체) 또는 PK/IC socket(적재 항목 = PK/IC)이 된다. Standard tube도 사용할 수 있으나 사용 후 폐기하므로 별도 분기를 두지 않는다.
- PK/IC socket은 소모품/시약이므로 검체 Tray에는 적재할 수 없고, 소모품 rack과 결합하여 소모품 Tray에 적재한다.
- PCR socket은 PCR box 또는 MM tube 용도로만 사용하며, 용도에 따라 PCR box socket(적재 항목 = PCR box) 또는 MM tube socket(적재 항목 = MM tube)이 된다. MM tube는 개별 스캔 없이 socket 용도로만 지정한다. PCR socket은 Tray에 적재하지 않고 cold storage에 적재한다.

### 2.3 Trolley 적재 규칙

- 검체 Trolley에는 검체 Tray만, 소모품 Trolley에는 소모품 Tray 또는 빈 Tray만 적재할 수 있다.
- Trolley는 검체 Trolley, 소모품 Trolley, 빈 Trolley(데이터 없음) 세 가지이다.
- 검체와 소모품이 하나의 Trolley에 혼재하는 상황은 발생하지 않는다. 따라서 기존 적재 유형이 불명확하거나 두 유형이 동시에 존재하는 경우는 고려하지 않는다.
- Trolley Floor에는 Tray만 연결될 수 있다.
- 모든 Tray(검체·소모품)에는 하위 항목(검체 socket 또는 소모품/시약)을 **최대 10개**(Tray 내부 위치 10개) 적재한다.
- 시스템은 데이터 연결만 막을 수 있다. 사용자가 물리적으로 잘못된 위치(예: 검체 Trolley 1F)에 넣는 행위는 막을 수 없다.
- Tray와 Floor의 연결을 해제하면 해당 Floor의 Tray 연결 데이터는 없는 상태가 된다.
- Tray의 상위 연결을 해제하더라도 Tray 및 하위 항목 데이터는 보존할 수 있다.

### 2.3-1 Trolley 선택 (`LI-TSS-PSI-01`)

소모품 Tray·PK/IC·PCR 적재 메뉴에 들어가면 Trolley 선택 팝업이 뜬다.

- 목록: 검체 구성이 완료되고 Run start 전인 검체 Trolley. **Setup Date/Time**은 그 Trolley를 SAM-03-02에서 **마지막으로 `[Done]`한 시점**이며, Trolley를 다시 수정하고 `[Done]`하면 갱신된다.
- Trolley를 **선택**하면 그 Trolley의 검체를 검사하는 데 필요한 소모품/시약 수량(Required Quantity)을 보여 준다. 선택은 **수량 표시용**이며, 소모품 Tray와 검체 Trolley 사이에 데이터 연결은 생기지 않는다. 실제 적재는 소모품 Tray에 하고, 그 Tray는 소모품 Trolley에 올린다.
- 채운 수량은 `[Done]` 때 **선택한 검체 Trolley 몫**으로 저장되며, 다시 같은 Trolley를 선택하면 이어서 센다. 세부 규칙은 `consumables-tray-policy.md` 1장을 따른다.
- **Skip**하면 필요 수량이 없으므로, 필요 목록·필요 수량에 따른 제한 없이 모든 소모품/시약 바코드를 스캔할 수 있다.

### 2.4 기본 적재 순서

1. Trolley 스캔
2. 적재 가이드 진입
3. Tray 스캔
4. Trolley Floor 스캔
5. 필요한 Tray를 모두 적재
6. `[Done]` 선택
7. 변경 사항 저장 및 적용

### 2.5 저장된 데이터와 변경 예정 상태

- **저장된 데이터**: 실제로 저장되어 있는 데이터 상태이다.
- **변경 예정 상태**: 현재 적재 가이드에서 사용자가 컨펌 Y로 동의한 변경 사항을 기록해 둔 상태이다. `[Done]` 전에는 저장된 데이터에 반영되지 않는다.
- 후속 컨펌의 노출 여부는 저장된 데이터만 보지 않고, 변경 예정 상태를 함께 고려하여 판단한다.
- 변경 예정 상태에 이미 기록된 연결(예: 같은 작업에서 직전에 적재한 Tray–Floor 연결)도 후속 컨펌 판단에 포함한다.

### 2.6 Tray 흐름, PK/IC Setup, PCR Setup 적용

| 구분 | Trolley 흐름 | Tray 흐름 | PK/IC Setup | PCR Setup |
|---|---|---|---|---|
| 진입 단위 (컨펌 A) | Trolley | Tray | PK/IC socket | PCR socket |
| 하위 단위 (컨펌 C) | Tray | 검체 socket 또는 소모품/시약 | PK/IC tube | PCR box |
| 적재 위치 (컨펌 B) | Floor | Tray 내부 위치 | 없음 (slot 하이라이팅, 4.4) | 없음 (slot 하이라이팅, 4.4) |

- 공통 데이터·컨펌·저장·복귀 원칙은 Tray 흐름, PK/IC Setup, PCR Setup에도 동일하게 적용한다. 본문의 Trolley, Tray, Floor는 각 흐름에서 위 표에 따라 읽는다.
- 적재 위치를 스캔하지 않는 흐름(PK/IC Setup, PCR Setup)에는 컨펌 B와 4.1의 C–B 관계 규칙을 적용하지 않는다.
- 소모품 Tray의 Step 1 guide 완료 후 동일 소모품/시약을 다시 스캔하면 `[Done]` 전까지 데이터 없음으로 취급하는 예외는 소모품 Tray 정책에만 적용하며, 다른 Tray 흐름에 일반화하지 않는다.
- 복귀 시 다시 시작하는 지점은 해당 흐름의 하위 단위 스캔이다(Trolley 흐름: Tray 스캔, 검체 Tray: 검체 socket 스캔, 소모품 Tray: 소모품/시약 스캔, PK/IC Setup: PK/IC tube 스캔, PCR Setup: PCR box 스캔). 컨펌 A의 N은 첫 스캔 화면(Trolley 스캔 화면(SAM-03-01, LCR-02-01), Tray 스캔 화면(SAM-02-01, LCR-01-02), PK/IC Setup 가이드 화면, PCR Setup 가이드 화면)으로 복귀한다.

## 3. 신규 작업 컨펌의 공통 원칙

1. 데이터가 존재하는 Trolley·Tray 또는 하위 항목을 스캔하면 원칙적으로 신규 작업 여부를 컨펌으로 확인한다. 실제 노출 조건은 4장의 컨펌 정의와 개별 정책서를 따른다.
2. 컨펌 Y는 변경 동의이며 **변경 예정 사항을 기록**하는 행위이다. 실제 데이터는 변경하지 않는다. N은 작업 취소 후 해당 정책에 정의된 화면으로 복귀한다.
3. 신규 작업 시 초기화 대상의 기존 상위·하위 연결 중 정책에서 지정한 연결만 해제한다. 하위 항목의 데이터는 별도 명시가 없는 한 유지한다.
4. 실제 데이터 변경은 `[Done]` 시점에 변경 예정 사항을 일괄 저장하고 적용한다.
5. 정상 프로세스상 기존 데이터가 존재하는 것이 당연한 경우 등 컨펌 예외는 개별 정책서에서 명시한다.

## 4. 공통 컨펌 동작

| 컨펌 | 공통 의미 | Y 처리 | N 처리 |
|---|---|---|---|
| A | 기존 Trolley를 신규 작업 대상으로 전환 | 동의 기록 후 적재 가이드 진입. 데이터는 `[Done]` 시 반영 | Trolley 스캔 화면으로 복귀 |
| C | 이미 Floor와 연결된 Tray를 새 Floor에 적재 (스캔한 Tray의 기존 Tray–Floor 연결 해제) | 동의 기록 후 Floor 스캔 단계로 진행 | 적재 가이드로 복귀하고 현재 진행 중인 Tray의 스캔 및 동의 상태를 초기화(이미 정상 적재 완료로 기록된 다른 Tray의 변경 예정 사항은 유지) |
| B | 스캔한 Floor에 이미 연결된 Tray와의 연결 해제 | 동의 기록 후 정상 적재 완료 처리. 데이터는 `[Done]` 시 반영 | 적재 가이드로 복귀하고 현재 진행 중인 Tray의 스캔 및 동의 상태를 초기화(이미 정상 적재 완료로 기록된 다른 Tray의 변경 예정 사항은 유지) |

- 화면 설계서 ID: 컨펌 A = `Confirm_026`, 컨펌 B = `Confirm_027`, 컨펌 C = `Confirm_028`. 하나의 ID에 흐름별 케이스와 문구를 함께 둔다.
- A/C/B의 실제 노출 조건은 각 개별 정책서에서 정의한다.
- 컨펌 A는 검체 Trolley 흐름에서는 소모품 Trolley를, 소모품 Trolley 흐름에서는 검체 Trolley를, PK/IC Setup에서는 적재 항목이 PK/IC가 아닌 socket(검체 socket)을, PCR Setup에서는 적재 항목이 PCR box가 아닌 socket(MM tube socket)을 스캔했을 때 노출된다.
- PK/IC Setup·PCR Setup에서 컨펌 C는 다른 상위(socket)에 연결된 하위 단위에만 노출하며, Y는 Floor 스캔 대신 하이라이팅 slot에 적재를 진행한다. 현재 상위에 이미 적재된 하위 단위는 4.4의 재스캔 얼럿을 따른다.
- 빈 Tray는 Tray에 하위 항목(검체 socket 또는 소모품/시약)이 연결되어 있지 않은 Tray이며, Tray 데이터가 전혀 없는 Tray를 포함한다. 물리적 적재 여부와 무관하다.
- PK/IC Setup·PCR Setup은 첫 스캔(socket)에서 대상이 아니면(G1 socket 아님, PCR socket 아님) Alert_027을 노출하고 첫 스캔 화면으로 복귀한다.
- 컨펌 문구는 짧게 쓰며, Main은 컨펌이 하는 일을 동사로 묻고(A: Use, B: Replace, C: Reassign), Sub는 Main과 겹치지 않게 끊기는 연결과 유효하게 남는 데이터를 안내한다. 흐름별 문구는 각 정책서에서 정의한다.
  - 컨펌 A (Trolley 예): `Use this trolley for specimens?` / `Loaded trays will be unlinked, but their data remains valid.`
  - 컨펌 B (Trolley 예): `Replace the tray on this floor?` / `The current tray will be unlinked, but its data remains valid.`
  - 컨펌 C (Trolley 예): `Reassign this tray to a new floor?` / `The previous floor link will be removed, but the other trays on that trolley remain valid.`
  - 컨펌 C의 Sub는 옮기는 항목이 빠진 뒤 이전 상위(Trolley, Tray, socket)에 남아 있는 나머지 항목이 유효하다는 점을 안내한다.
- 컨펌 문구는 현재 영문 Main/Sub 기준이며, 언어별 문구는 언어셋 등록 시 확정한다.

### 4.1 컨펌 C와 B의 관계

- C는 **스캔한 Tray가 기존에 연결되어 있던 Floor와의 연결**을, B는 **스캔한 Floor에 기존에 연결되어 있던 Tray와의 연결**을 해제하는 서로 다른 동의이다.
- 일반적인 노출 순서는 `Tray 스캔 → C 노출 → C=Y → Floor 스캔 → 필요 시 B 노출`이다.
- **C에서 해제 예정으로 기록한 연결은 B 판단에서 제외한다.**
  - 예) Tray A가 기존 3F에 연결되어 있을 때, Tray A 스캔 → C 노출 → C=Y → Tray A와 3F의 연결을 해제 예정으로 기록 → 3F 스캔. 이때 3F의 기존 연결은 이미 해제 예정이므로 해당 연결을 대상으로 B를 노출하지 않는다.
- 동일 Tray를 동일 Floor에 다시 적재하는 경우에도 같은 규칙을 적용한다. C=Y 후 해당 Floor를 스캔하면 B는 노출하지 않으며, `[Done]`에서 기존 연결 해제와 새 연결 생성을 일괄 반영한다.
- 스캔하는 Floor에 C에서 해제 예정으로 기록한 연결이 아닌 다른 Tray 연결이 있으면 B를 노출한다.
- 변경 예정 상태에 이미 기록된 Floor 연결도 B 판단 대상이다. 예) Tray B를 4F에 적재(정상 적재 완료)한 뒤 `[Done]` 전에 Tray C를 4F에 적재하면, 4F에 Tray B 연결이 기록되어 있으므로 B를 노출한다.
- 변경 예정 상태에 이미 연결이 기록된 Tray를 같은 작업 안에서 다시 스캔하면 C를 노출한다. C=Y 후 같은 Floor를 다시 스캔하면 해당 연결은 이미 해제 예정이므로 B 없이 정상 적재된다.

### 4.2 컨펌 A 추가 규칙

- A에 Y로 동의했더라도 `[Done]` 전에 메뉴를 벗어나면 동의 및 변경 예정 사항을 폐기한다. 이후 같은 Trolley를 다시 스캔하면 A를 다시 노출한다.
- A에 Y로 동의하면 변경 예정 상태에서 해당 Trolley의 모든 Floor는 빈 값으로 기록한다. `[Done]` 전까지 그 Trolley의 Floor를 스캔하면 적재 데이터가 없는 것으로 판단하므로 컨펌 B를 노출하지 않는다.
- Trolley 내부에 기존 Tray가 물리적으로 남아 있다면 사용자가 제거해야 한다. 이는 내부 작업 참고사항이며 화면에 표시할 문구는 아니다.

### 4.3 `[Remove]`

- `[Remove]`는 대부분의 화면에 제공되는 공통 기능이며 일부 화면에는 없다. 검체 Trolley 적재 가이드(SAM-03-02), 소모품 Trolley 적재 가이드(LCR-02-02), 검체 Tray 적재 가이드(SAM-02-02), 소모품 Tray 적재 가이드(LCR-01-03)에 있다. PK/IC 적재 가이드(PKI-03), PCR 적재 가이드(LPR-03)에도 있다.
- `[Remove]`는 스캔한 Trolley의 Floor에 적재된 Tray(Tray 흐름에서는 Tray 내부 위치에 적재된 검체 socket 또는 소모품/시약, PK/IC Setup에서는 PK/IC socket slot에 적재된 PK/IC tube, PCR Setup에서는 PCR socket slot에 적재된 PCR box)를 제거하는 기능이다. 다른 변경과 마찬가지로 변경 예정 사항으로 기록하며 `[Done]`을 눌러야 반영된다. `[Done]` 전에 메뉴를 벗어나면 폐기한다.
- `[Remove]` 팝업(`LI-TSS-CMP-01`)에서 위치를 고르고 `[Remove]`를 누르면 Confirm_006(Remove 확인)을 노출한다. Confirm_006에서 Remove를 선택하면 Alert_005(Remove 완료 안내)를 노출한다. Alert_005는 사용자 안내용이며, 제거는 변경 예정 사항으로만 기록되고 `[Done]` 시 반영되는 점은 같다.
- 제거 후에는 변경 예정 상태에서 해당 Floor가 빈 값이고 제거한 Tray는 상위 연결이 없으므로, 같은 작업 안에서 그 Floor를 스캔해도 B를, 제거한 Tray를 다시 스캔해도 C를 노출하지 않는다.

### 4.4 하이라이팅 적재 흐름

- 하위 단위를 스캔하면 시스템이 적재할 slot을 하이라이팅하고, 사용자가 위치를 스캔하지 않는 흐름이다. 다음 3가지가 해당한다.
  - 검체를 socket에 적재 (`specimen-socket-policy.md`)
  - PK/IC tube를 PK/IC socket에 적재 (`pkic-setup-policy.md`)
  - PCR box를 PCR socket에 적재 (`pcr-setup-policy.md`)
- 위치를 스캔하지 않으므로 컨펌 B와 4.1의 C–B 관계 규칙을 적용하지 않는다.
- Trolley·Tray 흐름은 하위 단위 스캔과 위치 스캔이 함께 이루어지고 사용 중인 위치는 B로 교체할 수 있으므로, 아래 얼럿은 하이라이팅 적재 흐름에만 적용한다.
- **가득 참 얼럿(Alert_043)**: 상위(socket)의 모든 slot이 가득 찬 상태에서 새로운 하위 항목을 스캔하면 노출한다. 가득 참은 변경 예정 상태 기준이며, `[Remove]` 또는 컨펌 A로 비운 slot은 빈 slot으로 본다.
  - Main: `All slots in this socket are full.` / Sub: `To load a new {적재 항목}, [Remove] a loaded {적재 항목} before loading.`
  - ID는 Alert_043 하나로 두고, `{적재 항목}`만 흐름별로 바꿔 출력한다.

  | 흐름 | Main | Sub |
  |---|---|---|
  | 검체 → socket | All slots in this socket are full. | To load a new sample, [Remove] a loaded sample before loading. |
  | PK/IC tube → PK/IC socket | All slots in this socket are full. | To load a new PK/IC tube, [Remove] a loaded tube before loading. |
  | PCR box → PCR socket | All slots in this socket are full. | To load a new PCR box, [Remove] a loaded box before loading. |

- **재스캔 얼럿(Alert_044)**: 현재 상위에 이미 적재된 항목(저장된 연결과 변경 예정 상태에 기록된 연결 포함)을 다시 스캔하면 노출하고 적재 위치를 알린다.
  - Main: `This is already loaded in [스캔 항목 적재 위치값].` (검체 → socket 흐름에도 동일 적용)
- slot을 비우는 방법은 `[Remove]`뿐이다.
- slot은 순차적으로 채우며, `[Remove]`로 앞 slot을 비운 경우에도 마지막 slot까지 채운 뒤 비워 둔 slot을 하이라이팅한다. 세부 규칙은 개발 정의를 따른다.
- 얼럿을 닫으면 적재 가이드로 복귀하며 하위 단위 스캔부터 다시 시작한다.

### 4.5 위치 스캔 흐름의 스캔 순서·대상 규칙

Trolley·Tray 흐름(검체 Trolley, 소모품 Trolley, 검체 Tray, 소모품 Tray)처럼 한 화면에서 하위 항목 스캔과 위치 스캔이 함께 이루어지는 흐름에 적용한다.

| 상황 | 처리 |
|---|---|
| 하위 항목을 스캔한 뒤 위치를 스캔하기 전에 다른 하위 항목을 스캔 | 얼럿 없이 마지막에 스캔한 항목으로 바꾼다. 스캔 완료 토스트(스캔한 항목과 수량, 시약 테스트 수는 `N rxns` 형식)를 노출하고, 컨펌 C 등은 새 항목 기준으로 판단한다 |
| 하위 항목을 스캔하기 전에 위치를 먼저 스캔 | 토스트로 안내한다 (아래 문구) |
| 작업 중인 Trolley·Tray가 아닌 다른 Trolley의 층·다른 Tray의 내부 위치를 스캔 | Alert_007 |
| Trolley 전체 바코드·Tray 전체 바코드를 적재 가이드에서 스캔 (작업 중인 것 포함) | Alert_027 (적재 가이드에서 스캔할 수 있는 것은 하위 항목과 위치뿐) |

- 스캔 순서 오류 토스트 문구
  - 소모품 Tray: `Scan the consumable/reagent before scanning the tray slot.` (소모품·시약이 함께 적재되는 화면)
  - 검체 Tray: `Scan the socket before scanning the tray slot.`
  - 검체·소모품 Trolley: `Scan the tray before scanning the trolley floor.`
- 하이라이팅 적재 흐름(4.4)은 위치를 스캔하지 않으므로 이 규칙을 적용하지 않는다. 하이라이팅 흐름의 적재 가이드에서 하위 항목이 아닌 것(socket 등)을 스캔하면 Alert_027이다.

## 5. 데이터 저장 및 반영 원칙

### 5.1 반영 시점

A·B·C에서 Y를 선택하는 행위는 변경 동의 및 변경 예정 사항의 기록이다. 사용자가 필요한 Tray를 모두 처리한 뒤 `[Done]`을 누르면 그때까지 기록한 변경 사항을 일괄 저장하고 적용한다. 소모품 Tray 흐름의 Step 1 guide에서 등록한 소모품/시약 데이터도 `[Done]` 전까지는 변경 예정 사항이다.

### 5.2 반영 내용

실제 적용 항목은 해당 작업 중 사용자가 Y를 선택한 컨펌 이력에 따른다.

| 컨펌 이력 | 데이터 반영 |
|---|---|
| A | 기존 Trolley의 신규 작업 전환 및 기존 Trolley–Floor/Tray 연결 해제(모든 Floor가 빈 값이 됨). 내부 Tray와 그 하위 항목 데이터는 유지 |
| C | 스캔한 Tray와 기존 Floor 간 연결 해제. Tray와 하위 항목 데이터는 유지 |
| B | 스캔한 Floor의 기존 Tray 연결 해제. 기존 Tray 및 하위 항목 데이터는 유지. 단, C에서 이미 해제 예정으로 기록된 연결은 제외 |
| 공통 | 스캔한 Tray와 스캔한 Floor 사이의 신규 매핑 생성. 하위 항목 데이터는 유지 |

### 5.3 메뉴 이탈

메뉴를 벗어나는 것은 `[Done]`을 누르지 않은 것과 같다. `[Done]` 전에 메뉴를 벗어나면 다음을 모두 폐기하고 기존 데이터는 변경하지 않는다.

- A·B·C 동의 기록
- Tray–Floor 연결 해제 예정 사항
- 기존 Floor 연결 해제 예정 사항
- 신규 Tray–Floor 연결 예정 사항
- `[Remove]`로 기록한 Tray 제거 예정 사항
- Step 1 guide에서 등록한 소모품/시약 데이터(소모품 Tray 흐름)
- 그 밖에 현재 적재 가이드에서 기록한 변경 예정 사항

### 5.4 저장 실패

- 저장 중 오류가 발생해도 부분 반영은 허용하지 않으며, 기존 저장 데이터는 유지한다.
- 저장 실패 시 현재 적재 가이드 화면과 변경 예정 상태를 유지한다.
- 저장 실패 Alert를 표시한다. 사용자가 Alert를 확인하면 현재 화면에서 재시도할 수 있으며, 재시도 시 유지 중인 변경 예정 사항을 다시 저장한다.
- 저장 실패는 일반적인 얼럿 닫힘 후 복귀 규칙과 다르며, 스캔 상태와 변경 예정 사항을 초기화하지 않는다.
- 저장 실패 Alert는 Alert_045(Main: `Failed to save.` / Sub: `Your changes are kept. Please try again.`)를 사용한다.

## 6. 복귀 및 초기화 원칙

- 얼럿을 닫거나 C/B에서 N을 선택하면 적재 가이드로 복귀하며, Tray 스캔부터 다시 시작한다.
- A에서 N을 선택하면 Trolley 스캔 화면으로 복귀한다.
- 복귀 시 데이터 변경은 발생하지 않는다.
- C/B에서 N을 선택하면 현재 진행 중인 Tray의 스캔 및 동의 상태만 초기화한다. 이미 정상 적재 완료로 기록된 다른 Tray의 변경 예정 사항은 유지되며 `[Done]` 시 저장된다. Tray 흐름에서는 현재 진행 중인 검체 socket 또는 소모품/시약만, PK/IC Setup에서는 현재 진행 중인 PK/IC tube만, PCR Setup에서는 현재 진행 중인 PCR box만 초기화하며, 다른 하위 항목의 변경 예정 사항은 유지한다.
- 복귀 후 방금 스캔한 Tray와 그 컨펌 C 동의는 유지하지 않는다. 같은 Tray를 다시 스캔하면 컨펌 C가 다시 노출될 수 있다.
- 적재 가이드에서 Tray 스캔 후 Floor 스캔을 기다리는 별도 상태 표시는 제공하지 않는다.

## 7. 적용 범위 및 분리 원칙

- 검체 Trolley의 Floor별 적재 가능 여부, 빈 Tray 처리, 검체 전용 얼럿은 `specimen-trolley-policy.md`를 따른다.
- 소모품 Trolley의 Floor별 적재 가능 여부, 빈 Tray 처리, 소모품 전용 얼럿은 `consumables-trolley-policy.md`를 따른다.
- Sample tube의 검체 socket 적재 조건, slot 하이라이팅, 검체 socket 전용 얼럿은 `specimen-socket-policy.md`를 따른다.
- 검체 Tray의 검체 socket 적재 가능 조건과 검체 Tray 전용 얼럿은 `specimen-tray-policy.md`를 따른다.
- 소모품 Tray의 소모품/시약 적재 가능 조건, Step 1 guide, 소모품 Tray 전용 얼럿은 `consumables-tray-policy.md`를 따른다.
- PK/IC tube의 PK/IC socket 적재 조건, Lot 구성 판단, slot 하이라이팅, PK/IC 전용 얼럿은 `pkic-setup-policy.md`를 따른다.
- PCR box의 PCR socket 적재 조건, Lot 구성 판단, slot 하이라이팅, PCR 전용 얼럿은 `pcr-setup-policy.md`를 따른다.
- PCR socket을 MM tube 용으로 지정하는 흐름(Load MM Tubes)은 `mm-tube-policy.md`를 따른다.
- 장비 모듈 storage(DX 영역)에 적재하는 흐름(Load Materials)은 `load-materials-policy.md`를 따른다. DX 영역은 컨펌 A·B·C를 쓰지 않고, 다른 곳에 연결된 항목은 `[Remove]` 후에만 옮긴다.
- 개별 정책과 공통 정책이 상충하는 경우, 공통 데이터 처리 원칙을 유지하되 적재 허용 조건과 전용 얼럿은 개별 정책서의 명시적 규칙을 따른다.

## 8. 후속 정리 항목

| # | 항목 | 상태 |
|---|---|---|
| 1 | 얼럿·컨펌 ID (Alert_039~045, Confirm_026~028) | 확정 (2026-10-29 화면 설계서 검토) |
| 2 | 저장 실패 Alert (Alert_045) ID 및 문구 | 확정 (2026-10-29 화면 설계서 검토) |
| 4 | 첫 스캔 화면의 `[Next]` 버튼 (SAM-01-01·02-01·03-01 등): 스캔하면 자동으로 다음 화면으로 이동하고, 스캔 전에는 비활성화라 누를 일이 없음 | 화면에서 제거 검토 |
| 3 | 검체 socket 적재 정책서 작성 (하이라이팅 적재 흐름) | 작성 완료 (`specimen-socket-policy.md`, 2026-10-29) |
