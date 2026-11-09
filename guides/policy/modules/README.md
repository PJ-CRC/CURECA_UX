# Module 특성

> 상태: 초안 v0.1 (2026-11-06). 지금 저장소에 있는 자료로만 썼습니다. Module별 특성 · 소모품 · 시약 자료를 받으면 채웁니다.

정책을 쓰거나 점검할 때, 그 정책에 나오는 Module 파일을 먼저 읽습니다. 정책은 화면이 아니라 장비가 실제로 하는 일에 맞아야 하기 때문입니다.

- **쓰는 때:** 정책 작성 · 점검, 회의록 대조, 화면 설계에서 Module · Unit · 검체 · 소모품 · 시약이 나오면 해당 Module 파일을 읽습니다.
- **표시:** 문장 끝 괄호는 출처입니다. 출처 없이 흐름에서 미루어 본 것은 **(추정)**으로 적고, 근거로 쓰기 전에 확인받습니다.
- **모르는 것:** 파일마다 "모르는 것"에 질문을 모읍니다. 답을 받으면 그 문장을 본문으로 옮기고 출처를 적습니다.
- 이름과 표기는 `glossary/modules.csv`, `glossary/module-units.csv`, `glossary/consumables.csv`, `glossary/pcr-reagents.csv`가 기준입니다. 이 폴더는 그 표를 옮겨 쓰지 않고, 표에 없는 **역할 · 흐름 · 제약**을 적습니다.

## 시스템 구성

| 시스템 | Module | 검사 단계 | 파일 |
| --- | --- | --- | --- |
| Prep 시스템 | Sample Storage | Sample Preparation | [sample-storage.md](sample-storage.md) |
| | Prep Consumable Storage | Sample Preparation | [prep-consumable-storage.md](prep-consumable-storage.md) |
| | Sample Preparation | Sample Preparation | [sample-preparation.md](sample-preparation.md) |
| Dx 시스템 | High-throughput Extraction | Nucleic Acid Extraction | [ht-extraction.md](ht-extraction.md) |
| | Flexible Extraction | Nucleic Acid Extraction | [flexible-extraction.md](flexible-extraction.md) |
| | PCR Setup | PCR Setup | [pcr-setup.md](pcr-setup.md) |
| | Plate Sealing | Plate Sealing | [plate-sealing.md](plate-sealing.md) |
| | Universal PCR | PCR | [universal-pcr.md](universal-pcr.md) |

- 8종을 모두 갖춘 하나의 시스템만 지원합니다. 같은 Module은 여러 대일 수 있고, 일은 Run-time 기준으로 고르게 나눕니다 (POL-COM-003, POL-EQP-005).
- 제어 주체: Prep 시스템은 Sample Preparation Master Control System(PrepMcs), Dx 시스템은 Diagnostic Master Control System(DxMcs)이 제어합니다. 결과 판독은 D.A PC, 장비 화면은 L-IOS(장비마다 LIOS01, LIOS02 …), 원격 관제는 T-IOS입니다 (씨젠 상태 정보 261021 > Actor).
- 장비 구성(Module · Unit 수와 배치)은 장비 사이 통신으로 자동 설정됨. 사람이 화면에서 장비 구성을 입력하는 메뉴는 없음 (MT-20260728-01)
- PCR Setup과 Plate Sealing은 짝으로 설치함. 재단 예: Plate Sealing 3대(Sealer 6대), 추출은 M9600만 (MT-20260910-02)
- Module이 Error에서 고쳐져도 물리적으로 이어진 다른 Module 때문에 Run이 다시 시작되지 않을 수 있음 (MT-20261013-01, POL-EQP-002 예외)

## 검사 흐름 (한눈에)

```
LIS 오더 ─▶ Material Setup (Trolley · Tray · Socket 구성, L-IOS)
           │
           ▼
Sample Storage ──Inbound Trolley──▶ Sample Preparation ◀── Prep Consumable Storage (Trolley)
  (STAT Storage로 응급 Sample)         전처리 · 분주 → 96-DWP
           ▲                                  │
           └──Outbound Trolley◀── 쓴 Sample Rack │
                                              ▼
                         Nucleic Acid Extraction: High-throughput(M9600) 또는 Flexible(STARlet)
                                              │ (할당: POL-TST-004 · 005)
                                              ▼
                         PCR Setup (STARlet): 96-DWP 추출물 + PCR Reagent → PCR Plate
                                              │        ▲ PCR Reagent · MM Tube는 Cold Storage(Plate Sealing)
                                              ▼
                         Plate Sealing: Sealer로 PCR Plate 실링
                                              ▼
                         Universal PCR: CFX96 증폭 · 측정 → D.A PC 판독 → L-IOS → T-IOS · LIS
```

- 96-DWP는 Sample Preparation부터 PCR Setup까지, PCR Plate는 PCR Setup부터 PCR까지 움직입니다 (POL-SMP-010 정의).
- Run 완료: Prep와 Dx에 할당된 모든 Sample의 검사가 끝나고 결과가 D.A PC를 거쳐 T-IOS까지 전달된 때. 최종 판단은 L-IOS (`policy/equipment-states.md` 4절).
- 화살표 사이의 옮김(로봇, 컨베이어 등)은 자료가 없습니다 → 각 파일 "모르는 것".

## 모든 Module에 공통으로 모르는 것

1. Module과 Module 사이에서 Plate를 옮기는 방법과, 옮기다 실패하면 어떻게 되는지
2. 한 Module이 Error일 때 앞뒤 Module에 있던 Plate · Sample이 어떻게 되는지 (기다림 / 다른 Module로 / 폐기)
3. Stop 이후: Plate에 들어가지 않은 Sample, 폐기된 Plate의 물리적 위치, 이미 쓴 소모품 · 시약의 사용량 처리, 다음 Run (2026-11-05 대화에서 나옴)
4. 같은 Module이 여러 대일 때 한 대가 Error · Disabled면 남은 Module로 넘기는지
5. 물리적으로 이어진 Module 쌍(PCR Setup · Plate Sealing 말고 더 있는지)과, 한쪽이 Error일 때 다른 쪽이 멈추는지
