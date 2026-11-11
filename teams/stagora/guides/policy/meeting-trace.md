# 회의 결정 대조표

> 상태: 1차 (2026-11-06). 회의록 44건(2026-06-09 ~ 11-05)을 시간 순서로 읽고, 정책이 될 문장마다 8월 정책서 · 지금 정책 · 화면 · Common UX와 맞대었습니다. 같은 날 사용자 답과 바로잡음을 받아 정책 파일 · Module 문서에 넣었습니다.

## 0. 어떻게 봤나

| 칸 | 기준 |
| --- | --- |
| 8월 정책서 | `reference/policy-doc-2026-08-28.md`. 8월 초 기준이며 V2.1.01(08-07) · V2.1.04(08-21) 개정이 들어 있음. 그 뒤 회의 결정은 정책서에 없는 것이 정상 |
| 지금 정책 | `policy/` 정책 파일 (2026-11-06 기준) |
| 화면 | 관련 화면 MD의 `date`(Figma 화면 정보). 회의보다 뒤면 반영됐을 수 있어 내용을 확인함. **Material Setup 화면은 거의 모두 2026-06-15로 남아 있어 date로 판단할 수 없음** |
| Common UX | 적용된 "Common UX 가이드 _1105" (g20261105-daye-J001) |
| Teams 글 | `reference/teams/2026-11-06-policy-notes.md` (T01 ~ T15, 2026-08-16 이후, 대부분 9 ~ 10월) |
| 같은 주제가 여러 번 | 마지막 결정을 따르고, 바뀐 순서를 "흐름" 칸에 남김 |

판정: **반영** 지금 정책에 있음 · **빠짐** 정책에 없음(넣을 것) · **충돌** 지금 정책과 다름 · **확인** 순서나 최종 결정을 모름 · (정책이 아닌 일정 · 범위 · UI 배치는 적지 않음)

## 1. 요약

| 판정 (3절 72줄) | 건수 |
| --- | --- |
| 반영 | 57 (11-06 답과 바로잡음으로 넣음) |
| 제외 | 3 (#29 · #33 · #63, 11-06 사용자 결정) |
| 고객 확인 | 3 (#2 · #48 · #49, CA-0002 · CA-0010) |
| 내부 논의 | 1 (#43, PD-0009) |
| 확인 | 8 (#27 · 47 · 54 · 56 · 64 · 66 · 70 · 71, 회의 뒤 결과를 모르는 것) |

- 2026-06 ~ 07월 회의 결정은 대부분 8월 정책서에 들어갔거나 범위 · 일정 이야기임.
- 빠진 것은 거의 **9 ~ 10월 회의의 장비 동작 · 예외**임 (Door와 Error, 반환 시점, 회수 트롤리 Event, PCR 시약 제거, 필요 수량 계산 시점 등). 화면 디스크립션에 들어갔을 수 있으나 정책 파일에는 없음.
- 회의에서 정한 뒤 Teams 글이나 다음 회의에서 다시 바뀐 주제가 많음: Buffer Cartridge 재사용(4번 바뀜), 소모품 Trolley 리셋(3번), Sealer Waste Bin 개수(3번), 'T'/'rxns' 표기(3번).

## 2. 주제별 흐름 (여러 번 바뀐 것)

| 주제 | 흐름 | 지금 정책 | 판정 |
| --- | --- | --- | --- |
| Buffer Cartridge 재사용 | 8월 정책서 없음 → 08-28 Cap을 감지 못해 재사용 불가, 씨젠 검토 → 09-04 "1회 사용 후 폐기 확정, 여분 Cap은 폐기 때 닫기용(안전)" → 10-06 스케줄상 쓸 계획이 없으면 반환, 컨펌 버튼 팝업 → 10-06 Cap 에러는 Event → Teams T06 · T11 재사용 가능 | 재사용 (POL-LOD-004 규칙 13 ~ 20) | 반영 (11-06 답: Teams 글이 최종) |
| Prep Tub Cap | 10-20 지금은 쓰기 전 Cap 확인 안 함, 씨젠이 요청 예정 → 10-26 쓰기 전 확인 후 사용 → Teams T01 | 쓰기 전 확인 (POL-LOD-004 규칙 21 ~ 23) | 반영 |
| 소모품 Trolley 리셋 | 8월 정책서 Run Start 때 리셋 → 08-21 리셋 때문에 남은 것을 추적 못 함 → 08-25 Start 리셋 없앰, 폐기 때만 → 08-27 리셋하지 않음 → Teams T10 소진 때만 | 소진 때만 (POL-MAT-010 규칙 5) | 반영 |
| 검체 Trolley 리셋 | 8월 정책서 Run Start 때 리셋 → 09-17 Run Start 때 리셋하지 않음(Stop하면 시작 안 한 검체가 있음) → 10-26 모든 검체 소진 후, 회수 트롤리 도착 시점, Socket 단위 | 회수 트롤리로 옮겨진 때 (POL-MAT-010 정의 표) | 반영 |
| STAT Storage 품목 | 8월 정책서 검체 · 소모품 · PK · IC → 08-20 IC 보관 공간 이슈 → 08-21 PK/IC 상온 가능, Trolley로. STAT은 검체만, 논리적 점유 → Teams T13 | Sample만 (POL-LOD-003) | 반영 |
| Sealer Waste Bin 개수 | 09-10 만재 카운팅 기준 확인 예정 → 09-16 "v1.0 90장 / v1.1 40장, 지금 v1.0, 만재 80장" → Teams T08 "만재 카운팅 20개" → 11-06 사용자 확인 20개 | Film 120장 입고, Waste Bin 만재 20장 (POL-INV-005 정의, POL-LOD-004 정의) | 반영 (11-06 답) |
| Fill Level 표시 | 09-16 센서가 울리지 않으면 100% 넘어도 "100% 표기 유지, Almost Full" → 화면 TI-IVT-05-T(10-08) "최대 99%" → Common UX 4-a "최대 개수 초과 후 센서 미작동 시 Almost Full" | 99% (POL-INV-005 규칙 2) | 반영 (11-06 답: 99%가 최신) |
| 수량 표기 T / rxns | 08-11 'rxns' → 'T' → 10-06 'T'를 뺀 단위는 띄어씀 → 10-30 결정 · Teams T05 'T' → 'rxns' | rxns (용어집) | 반영 |
| 백업 · 복원 | 08-11 기능 제거 · 이력 조회 추가 → 08-13 기능 유지, 자동 백업 · 시간 · 범위 등 (재정의 예정) → 08-14 UI 기능 제거, 서버로 이관 → Teams T15 | 서버 작업 (POL-SYS-004 규칙 5) | 반영 |
| Door와 Paused | 8월 정책서 Running 중 Unlock 불가(Not Initialized / Ready / Error만) → 08-28 Ready · Error만(유지), Dx Storage는 모든 상태에서 열림 → 09-01 Paused 상태 추가 → 09-16 Running 중에도 Pause로 열 수 있음, Ready에서도 열면 Paused → 09-22 **Error면 열어도 Error 유지** | Error일 때도 Paused (POL-EQP-004 규칙 1) | **고객 확인** CA-0010 |
| [Unlock all doors] 활성 | 09-17 Running이면 비활성, Ready · Error일 때만 → 10-30 확인 Ready · Error · Paused · Not Initialized | Ready · Error · Paused · Not Initialized (POL-EQP-008 규칙 8) | 반영 (뒤 결정) |
| Run 준비 필요 수량 | 08-19 Step 2 "구동 중인 것까지 모두 합산" → 08-25 전체 Run 기준 → Teams T07 · 11-06 사용자 확인 | 진행 중 Run 포함 (POL-SMP-007 규칙 10, POL-INV-003) | 반영 |
| Usage History 기록 시점 | 8월 정책서 폐기 때 → 08-21 개념 변경 필요 → 09-29 **폐기 및 리턴 시점에 표기** → 11-03 사용자 확인 폐기 때만 (IV5) | 폐기 때만 (POL-INV-006 규칙 1) | 반영 (11-06 답) |
| 시약 사용 횟수 기준 | 8월 정책서 흡입 때 +1 → 08-25 **decapping 기준(재확인 예정)** | Decapping (POL-INV-004 규칙 2, 11-06 고침) | 반영 (11-06 답) |
| 투입 Trolley 교체 | 8월 정책서 구동 중단 후 제거 → 08-27 언도킹하려면 모든 물품이 Trolley로 돌아와야 함(수분 ~ 수십 분) → 10-26 **투입 Trolley는 Run Start 이후 도킹 해제 불가** | Sample이 남으면 해제 불가, 비면 Run 중에도 해제 (POL-LOD-001 규칙 6 · 7, 11-06 고침) | 반영 (11-06 답) |
| 필요 수량보다 더 넣기 | MS 정책서 현업 문의 중 → 11-03 더 넣을 수 있음 | 문의 중 (POL-MAT-007 예외) | **빠짐** |

## 3. 회의별 대조

정책 문장이 있는 회의만 적었습니다. 06-09 · 06-29 · 07-01 · 07-07 · 07-10 · 07-20 · 07-22 · 08-14(일정) · 08-27(일정) · 09-10-01(언어셋) · 09-29(일정) · 10-20(일정) · 11-03(범위)의 나머지 줄은 범위 · 일정 · 화면 배치입니다.

| # | 회의 | 문장 (줄임) | 대상 | 8월 정책서 | 지금 정책 | 판정 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 06-16 | 다중 관제: L-IOS 하나를 골라 보거나 여러 L을 통합 대시보드로, 권한별 차등 없음 | T-IOS | 없음 | POL-COM-005 | 반영 |
| 2 | 06-22 | Error 처리 후 재가동 트리거를 장비 회사에 확인, 소모품 Error는 입고 후 자동 인지 | 전체 Module | 없음 | `policy-backlog.md` 추가 12 (복구 후 정상 아니면 동작 미정) | **고객 확인** CA-0002 · CA-0010 (09-22 #49와 같은 주제) |
| 3 | 06-30 | 프로그램 종료는 Service만, 시스템 종료는 전체 | L-IOS | 있음(로그인/로그아웃) | POL-ACC-004 | 반영 |
| 4 | 06-30 | Service Mode별 메뉴 숨김, 기능은 보이되 안내 팝업 | L-IOS | Preset Mode(가칭) | `policy/service-mode.md` | 반영 |
| 5 | 07-13 | Inventory: Dx Module이 N대면 어느 Module로 보낼지 미리 정해 필요 개수 표시 | Dx | 없음 | POL-INV-001 · 003 (Module Index별) | 반영 |
| 6 | 07-14 | LIS: HL7 편집 불가, REST API 삭제, 쿼리 · Push 방식, T-IOS Port 20200 | SYS | LIS 1:1만 | POL-SYS-001 | 반영 |
| 7 | 07-14 · 07-28 | 통계: 가동 시간 · 가동률 · 불량률(Module · Unit별), 소모품 사용 비용 | STA | 통계(기간) | POL-STA-004 · 006 | 반영 |
| 8 | 07-21 | Run 중 만료된 시약은 허용 | Run | 있음(만료 시약 검사 불가 단서) | POL-SMP-007 규칙 3 (Run 전에도 허용으로 더 넓어짐) | 반영 |
| 9 | 07-21 | 전처리 Device는 항상 하단, 분주 type에 따라 Unit 구분 | Sample Preparation | 없음 | 없음 | 반영 (11-06: Sample Preparation 문서 5) |
| 10 | 07-28 | 장비 구성은 장비 사이 통신으로 자동 설정 (수동 설정 메뉴 제외) | 전체 | 없음 | 없음 | 반영 (11-06: Module 문서 README) |
| 11 | 08-05 | 상태값 재정의 (장비 · 모듈 · 이벤트 · 경광등) | 전체 | 일부 | POL-EQP-001 · 002 · 007, `equipment-states.md` | 반영 |
| 12 | 08-05 | Logout 때 종료 구분: User는 시스템 종료만, Service는 둘 다 | ACC | 있음(Service · Admin 둘 다) | POL-ACC-004 (Service는 Exit, Admin · User는 Shut Down) | 반영 (뒤 결정) |
| 13 | 08-05 | Event 팝업은 메인 · 콘솔 PC만(TSS 제외), 개수 제한 없이 겹쳐 보임, 일괄 Closed | EVT | 있음(V2.1.01) | POL-EVT-003 | 반영 |
| 14 | 08-05 | L-IOS UI가 꺼지면 Windows가 자동으로 다시 실행 | L-IOS | 없음 | 없음 | 반영 (11-06: POL-COM-001 규칙 3) |
| 15 | 08-05 | Idle · Not Initialized에서 60분 이상 움직임 없으면 로그아웃 | ACC | 있음(시간 없음) | POL-ACC-008 (기본 60분, 5 ~ 120) | 반영 |
| 16 | 08-05 | PCR 시약 Socket 1개에 2 set(200) | MAT | 있음(최대 2세트) | POL-MAT-008 | 반영 |
| 17 | 08-05 | Event Type: Sample, Instrument, Inventory, System | EVT | 없음 | POL-EVT-001 | 반영 |
| 18 | 08-05-02 | Sample Storage Door 2개, Sample Preparation Door는 업체별 1 · 2개, STAT은 업체별 1 ~ N | 장비 | 없음 | `module-units.csv`, Module 문서 | 반영 |
| 19 | 08-13 | Logout과 Exit 따로, 엔지니어 계정은 팝업 | ACC | - | POL-ACC-004 | 반영 |
| 20 | 08-13 | Error Rate는 누적 집계 | EQP | 있음 | POL-EQP-010 | 반영 |
| 21 | 08-13 | 알럿 · 컨펌은 "이어서 진행" | MAT | 없음 | POL-MAT-003 · 010 규칙 6 | 반영 |
| 22 | 08-19 | MB Tube 최대 입고 5개 (카트리지 단위와 맞춤, 10칸 중 5칸 막음) | Flexible Extraction | 없음 | 없음 | 반영 (11-06: POL-LOD-002 규칙 15) |
| 23 | 08-19 | Prep은 Run이 끝나면 쓰던 소모품 · 시약을 모두 Trolley로 돌려보냄 | Prep | 없음 | POL-INV-004 규칙 5 (무엇이 돌아오는지) | 반영 |
| 24 | 08-19 · 08-20 | Dx Storage 칸 수는 모델별로 다름(표준형 기본, 맞춤형 최대, 예: DWP 5 · 6칸). 하드웨어가 올려 주는 값을 그대로 표시 | Dx | 없음 | 없음 | 반영 (11-06: POL-LOD-002 규칙 16) |
| 25 | 08-19 | 단디메카 · 로체시스템즈 장비 소프트웨어는 따로 개발 (화면 차이는 아직 없음) | Sample Preparation | 없음 | Module 문서(제조사 차이) | 반영 |
| 26 | 08-20 | 단디메카: STAT 4칸, Sample Storage 냉장 Buffer 4칸 / 로체시스템즈: STAT 3칸, Buffer 없음 | Sample Storage · Preparation | 없음 | POL-LOD-003 (STAT 칸 수) | 반영 (11-06: Buffer 칸은 Sample Storage 문서 8) |
| 27 | 08-20 | Tip · MB Tube처럼 위치 없이 넣는 것은 리셋(delete) 때 전체 리셋 | MAT | 없음 | POL-LOD-002 규칙 12 ([Remove] 없음) | 확인 (전체 리셋이 지금도 있는지) |
| 28 | 08-21 | STAT: 검체만, 논리적 점유. Sample 외 소모품을 넣으면 불가 알럿, 회수 안 된 칸에 넣으면 사용 중 알럿 | LOD | 다름 | POL-LOD-003 규칙 1 · 4 | 반영 (알럿 ID는 질문) |
| 29 | 08-21 | 일부 쓰고 돌아온 소모품: 장비가 쓴 것을 인지해 이어서 쓰는지 개발사 확인, 없으면 3번 옮겨 시도 후 회수 | Prep | 없음 | 없음 | 제외 (11-06 사용자 결정) |
| 30 | 08-21 | Dx가 보낸 PCR과 맞지 않는 IC가 있으면 Event Message | Prep · PCR | 없음 | 없음 | 반영 (11-06 바로잡음: Lot 구성이 맞는 IC가 하나도 없으면 Error, Sample Preparation 멈춤. POL-INV-007 규칙 6) |
| 31 | 08-21 | PCR 시약은 0 rxns일 때만 폐기. 10 ~ 20 rxns 남으면 사용자가 Delete로 제거 | Cold Storage | 다름(재사용 횟수 초과 시 자동 폐기) | 없음 | 반영 (11-06 바로잡음: 0 rxns면 자동 폐기, 남아도 [Remove]로 뺄 수 있음. Delete → Remove. POL-INV-007 규칙 7) |
| 32 | 08-25 | 시약 최대 사용 횟수 기준은 decapping (재확인 예정) | INV | 흡입 | Decapping (11-06 고침) | 반영 (11-06 답) |
| 33 | 08-27 | 가동 중 Trolley를 언도킹하려면 모든 물품이 돌아와야 함(수분 ~ 수십 분), 언도킹 대기 안내 | Prep | 없음 | 없음 | 제외 (11-06: 오래 걸려 정책을 바꿈, 넣지 않음) |
| 34 | 08-27 | 투입 Trolley의 검체 Rack은 하나씩 순서대로 로딩 | Sample Storage | 없음 | 없음 | 반영 (11-06 바로잡음: 순서대로가 아니라 알고리즘의 최적 순서. Sample Storage 문서 9) |
| 35 | 08-28 | 도킹: 단디메카는 센서로 인식, 유리문을 닫으면 자동 Lock · 도킹, 진행하던 Run 이어 감 / 로체시스템즈는 QR로 확인, 걸쇠로 도킹. Lock 해제 장치는 따로 없고 Door 상태로 자동 처리 | Sample Storage · Prep Consumable Storage | 없음 | POL-LOD-001 규칙 1 (자동 인식만) | 반영 (11-06: POL-LOD-001 규칙 10 · 11) |
| 36 | 08-28 | Dx Storage는 유리문이 없어 모든 상태에서 열 수 있음. 열 수 없으면 알럿 후 다시 시도 | Dx | 없음 | POL-LOD-002 규칙 2 (옮기는 중이면 MS_Alert_026) | 반영 |
| 37 | 08-28 | STAT 검체 Run: 전처리에 들어간 검체 Socket을 다 처리한 뒤 STAT Socket. DWP는 Trolley 것과 STAT 것을 섞지 않음. 기존 Batch TAT는 계속 늘어남 | SMP | 있음(Rack 단위) | POL-SMP-008 규칙 1 · 2 | 반영 (11-06 바로잡음: 처리 중이던 Socket까지 마친 뒤 STAT, 96-DWP를 나눔. POL-SMP-008 규칙 1 · 4 · 5) |
| 38 | 09-01 | Trolley 최하단 1층을 회수용 Buffer로 씀 | Prep | 없음 | POL-LOD-001 규칙 8, POL-MAT-007 규칙 10 | 반영 |
| 39 | 09-01 | Run이 끝나 CURECA가 Running → Ready가 될 때 전처리 Buffer의 소모품이 돌아옴 | Prep | 없음 | 없음 | 반영 (11-06: Sample Preparation 문서 6) |
| 40 | 09-01 | High-throughput Extraction 씰 · 팁 Waste Bin은 만재 센서 없음(필름 반사), 위치는 표준형 상부 · 맞춤형 하부. Sample Preparation 분주 Unit 1개당 Waste Bin 2개 | Waste | 없음 | `module-units.csv` 비고 일부 | 반영 (11-06: Module 문서 HT Extraction 6, Sample Preparation 7) |
| 41 | 09-01 · 09-16 | 전처리 Buffer 공간: 단디메카 실온 2 · 냉장 4 / 분주 Module Buffer 3개 | Sample Preparation | 없음 | 없음 | 반영 (11-06: Sample Preparation 문서 6) |
| 42 | 09-04 | 재단 Universal PCR Waste Bin은 Module 6대에 1개, QR · 서랍형 | Universal PCR | 없음 | 없음 | 반영 (11-06: Universal PCR 문서 4) |
| 43 | 09-16 | TSS에서 PCR 시약을 제거하면 Used 처리 (묶인 IC도 함께) | MAT | 없음 | 없음 | **내부 논의** PD-0009 (뜻을 먼저 맞춤) |
| 44 | 09-16 | 실시간 데이터는 모두 Event Push로 바로 반영 | COM | 없음 | 없음 | 반영 (11-06 바로잡음: 새로고침 없이 Event Push가 오면 바로 자동 갱신. 새 POL-COM-007) |
| 45 | 09-16 | Drawer 적재 가이드 화면에서 문을 닫으면 자동으로 저장하고 화면 전환 (Sealer 예외). 09-17 Storage를 물리적으로 닫으면 [Done]과 같음 | LOD | 없음 | POL-LOD-002 규칙 13 | 반영 (Sealer 예외는 POL-LOD-004 규칙 11과 맞는지 확인) |
| 46 | 09-17 | Run Start 뒤 스캔되지 않고 Trolley에 있다가 중지되면 Ordered로 | SMP | 있음 | POL-SMP-001 규칙 6 | 반영 |
| 47 | 09-17 | 평가 기간에는 Sample Type 하나에 Sample Tube Type 하나로 고정 | TST | 없음 | POL-TST-009 | 확인 (10-06 재단 재확인) |
| 48 | 09-22 | **Error 상태면 Door를 열어도 Error 유지** | EQP | 없음 | POL-EQP-004 규칙 1 (Error에서도 Paused) | **고객 확인** CA-0010 |
| 49 | 09-22 | 사용자가 풀 수 있는 Error(소모품 부족 등)는 문을 닫으면 자동으로 Ready | EQP | 없음 | `policy-backlog.md` 추가 12 | **고객 확인** CA-0010 (Error와 Door와 함께) |
| 50 | 09-22 | Tube Setting: 튜브 하나에 Sample Type N개, LIS Code 선택 · 중복 불가, System Code 필수 | TST | 없음 | POL-TST-009 규칙 4 ~ 6 (11-06 고침) | 반영 (11-06 답: Sample Type 선택 입력) |
| 51 | 09-22 | Profile 수정은 Service Mode와 관계없이 같음 | ACC | 없음 | POL-ACC-009 | 반영 여부 확인 |
| 52 | 09-23 | Trolley를 도킹하면 Run Start 전에도 Inventory 상태 · 부족 수량을 보여 줌. Event 알람은 Run Start 뒤 | INV | 없음 | POL-INV-003 규칙 2 | 반영 (POL-INV-003 규칙 3-1) |
| 53 | 09-29 | STAT으로 검체를 넣으면 STAT Storage를 닫는 때 소모품 수량을 계산 | INV | 없음 | 없음 | 반영 (11-06: POL-INV-003 규칙 3-2) |
| 54 | 09-30 | Test Status: Running = 검체 스캔 때, Complete = DWP 분주 완료 때 | SMP | 다름(결과 수신) | POL-SMP-002 | **확인** (어느 상태의 기준인지) |
| 55 | 09-30 | Run · Quick Start에 Waste Bin 상태 단계 | Run | 없음 | POL-SMP-007 정의 | 반영 |
| 56 | 09-30 | 회수 Trolley도 코드를 스캔해 Tray 위치를 알 수 있음 | Sample Storage | 없음 | 없음 | 확인 (Sample Tracking) |
| 57 | 10-06 | 재검사: LIS에서 재검사 목록을 보고 L-IOS에서 Sample 확인 (쿼리 기반 오더) | SMP | 있음 | POL-SMP-003 | 반영 |
| 58 | 10-06 | Buffer Cartridge는 장비 상태가 아니라 스케줄상 쓸 계획이 없으면 반환 | Flexible Extraction | 없음 | 없음 | 반영 (11-06: 최신. 전체 Run 스케줄에서 더 쓸 일이 없으면 Cap을 닫아 반환. POL-LOD-004 규칙 14) |
| 59 | 10-06 | Cartridge Cap 에러는 Error Event로 관리 (Location 표시 없음) | Flexible Extraction | 없음 | POL-LOD-004 규칙 16 | 반영 |
| 60 | 10-13 | Cap이 없는 시약도 잔여 수량에 넣음 | INV | 없음 | 없음 | 반영 (11-06: POL-INV-002 규칙 7) |
| 61 | 10-13 | Module Error는 고쳐도 물리적으로 이어진 Module 때문에 다시 시작되지 않을 수 있음 | EQP | 없음 | 없음 | 반영 (11-06: POL-EQP-002 예외, Module 문서 README) |
| 62 | 10-13 | Assay Pack 추출 장비 사용 가능 = 기본 사용 설정 (꺼져 있어도 켤 수 있음) | TST | 없음 | POL-TST-005 | 반영 |
| 63 | 10-20 | 도킹된 상태에서 소모품을 고치면 Door를 닫을 때 정보가 바뀜 (개발사 확인 필요) | Prep | 없음 | 없음 | 제외 (11-06 사용자 결정) |
| 64 | 10-21 | Cost Setting: 소모품 사용 여부(기본 사용 안 함), 시약은 Assay Pack 기준. 단가가 없으면 Analyze Breakpoint 알럿, 통계 표시하지 않음 | TST | 원가 설정 | POL-TST-003 | 확인 (규칙 비교 필요) |
| 65 | 10-21 | 회수 Trolley: Run Start 뒤 Door를 연 기록이 없으면 Warning Event | Sample Storage | 없음 | 없음 | 반영 (11-06: 내용만 남김. Event는 장비 · 개발사가 만들고 우리는 표시. POL-LOD-001 "참고: 관련 Event") |
| 66 | 10-21 | 유리문 안 Waste Bin의 도킹 여부를 보여 줄 수 있는지 개발사 확인 | Waste | 없음 | 없음 | 확인 (답 모름) |
| 67 | 10-26 | 투입 Trolley는 Run Start 이후 도킹 해제 불가 | Sample Storage | 다름 | POL-LOD-001 규칙 6 · 7 (11-06 고침) | 반영 (11-06 답: 비면 해제 가능) |
| 68 | 10-26 | Event: Error Code 1건 : Scenario Code N건, Effect에 줄바꿈으로, Event Popup에도 Effect | EVT | 없음 | POL-EVT-001 규칙 3 | 반영 (Popup Effect는 POL-EVT-003 확인) |
| 69 | 10-26 | PCR Setup STARlet: 시약을 가져가 장비에 거치, Socket은 Storage로 | PCR Setup | 다름 | POL-LOD-004 규칙 1 ~ 6 | 반영 |
| 70 | 11-03 | 필요 수량보다 더 넣을 수 있음. 다른 Trolley에 묶인 Tray를 다시 찍으면 앞 Trolley 몫에서 뺌. 필요 없는 품목은 필요 수량 "-" | MAT | 없음 | POL-MAT-007 예외(문의 중) | **확인** (고객이 개발사와 검토 후 확정 예정. POL-MAT-007 예외에 적음) |
| 71 | 11-03 | [Remove]로 Tray 데이터를 지우면 Trolley 정보도 함께 지움 (브렉스 내부 논의) | MAT | 없음 | 없음 | 확인 (내부 결정) |
| 72 | 11-05 | 도킹된 Trolley를 스캔하면 불가 알럿 | MAT · LOD | 없음 | 없음 | 반영 (11-06: 추가 예정. POL-LOD-001 규칙 12, 알럿 ID는 질문) |

## 4. 질문과 답 (2026-11-06)

| # | 질문 | 답 | 반영한 곳 |
| --- | --- | --- | --- |
| 1 | Buffer Cartridge: 09-04 "1회 사용 후 폐기 확정"과 Teams T06 · T11 "재사용" 중 최종 | 재사용으로 다시 바뀜. Teams 글이 최종 | POL-LOD-004 근거 |
| 2 | Sealer Waste Bin: 09-16 "만재 80장"과 Teams T08 "20개" | Film 입고 120장, Waste Bin 만재 20장 | POL-LOD-004 정의 · 질문 8 (입력 최대 100), POL-INV-005 정의, Plate Sealing 문서 |
| 3 | Fill Level: 09-16 "100% 유지"와 화면 "최대 99%" | 99%가 최신. 만재 센서가 울려야 100% | POL-INV-005 이유 |
| 4 | Error와 Door: 09-22 "Error 유지"와 POL-EQP-004 "Paused" | 사용자도 확인할 예정. 고객 확인 목록에 올림 | CA-0010, POL-EQP-004 예외 |
| 5 | Usage History: 09-29 "폐기 및 리턴"과 11-03 "폐기 때만" | 폐기 때만 | POL-INV-006 이유 |
| 6 | 시약 사용 횟수: 08-25 "decapping"과 정책 "흡입" | Decapping이 최신 | POL-INV-004 규칙 2 · 이유 · 질문 1, Plate Sealing 문서 |
| 7 | 투입 Trolley: 10-26 "Run Start 이후 도킹 해제 불가"와 POL-LOD-001 | 마지막 Sample이 전처리로 넘어가 Inbound Trolley가 비면 Run 중에도 해제 가능 | POL-LOD-001 규칙 6 · 7 · 이유, Sample Storage 문서 |
| 8 | Tube Setting: 09-22 "N개, 옵션"과 10-06 "1:1, 필수" | Sample Type은 선택 입력, 중복 제약 풂. LIS에 Tube Type이 있으면 그것으로, 없으면 Sample Type으로 찾음 | POL-TST-009 규칙 4 ~ 6 · 이유 · 질문 |

## 5. 다음에 할 것

1. ~~4절 답을 받아 충돌 · 확인 줄을 정합니다.~~ (2026-11-06)
2. ~~**빠짐** 25줄을 정책 파일에 넣습니다.~~ (2026-11-06, 3줄은 제외, 1줄은 PD-0009, 1줄은 CA-0010, 1줄은 고객 · 개발사 검토 중)
3. ~~Module 문서에 장비 사실(#9 · 10 · 22 · 24 · 26 · 34 · 35 · 40 · 41 · 42 · 61)을 더합니다.~~ (2026-11-06)
4. 확인 8줄(#27 · 47 · 54 · 56 · 64 · 66 · 70 · 71)은 다음 회의나 Teams 답을 받으면 정함
5. 화면은 새로 그릴 때 정책을 기준으로 다시 쓰므로, 이 표로 반영 대기 줄은 만들지 않습니다.
