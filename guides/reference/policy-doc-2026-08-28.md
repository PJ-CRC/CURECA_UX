# 정책서_2026.08.28 (원문)

> 출처: [1-2. CURECA 기획 디자인 작업방 Part.2 › 정책서_2026.08.28](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1317-107579) 페이지 (node 1317:107579). 2026-11-06에 프레임 글자를 그대로 뽑았습니다. 고치지 않습니다.
>
> - 각 프레임은 표(정책명 · 정책 설명 · 연관 메뉴 · 기능 · update · 비고)인데, 글자만 위에서 아래로 옮겨 칸 구분이 없어졌습니다. 정책마다 끝의 `-`는 빈 칸입니다. 표 모양은 Figma에서 봅니다.
> - 취소선 글자는 `~~ ~~`로 표시합니다(이 페이지에는 없었음).
> - 개정 이력: V2.1.01(2026-08-07), V2.1.04(2026-08-21). 그 밖의 내용은 그 전(8월 초) 기준입니다.

## 2.1 Revision History (2336:798177)

```text
StoryBoard에서 변경된 내용입니다.
버전 | 변경날짜 | 구분 | 변경사항 | 담당자
V2.1.04 | 26/08/21 | Material Setup | Cold Storage_PCR Rack 정책 추가 | 하승현
        |          | 시약 폐기 | 유효기간 경과 시, 자동 폐기 정책 수정 | 서보경
        |          | 시약 유효기간 관리 | Inventory 내 유효기간 조회, Inventory UX/UI 변경에 따른 기존 정책 수정 | 서보경
        |          | 소모품/시약 재고 상태값 정의 | 상태값 변경에 따른 내역 반영 | 서보경
        |          | 페기물함 상태값 정의 | 상태값 변경에 따른 내역 반영 | 서보경
        |          | 장비 관리 및 정의 | Door 개폐 및 잠금 전환 규칙 / 자동 잠금 정책 변경 반영 | 서보경
        |          | 검체/검사 정의 | 데이터 관리 시점 및 상태값 정의 / 구동 중단 및 도킹 해제 정보 변경 / STAT을 통한 검사 케이스 정의 / Batch Card 생성 및 초기화 정보 추가 | 서보경
V2.1.01 | 26/08/07 | 검체/검사 정의 | 만료 시약 검사 불가 조건 추가 | 정다예
        |          | 로그인/로그아웃 | Session Timeout 관련 항목 추가 / 종료 및 노출 조건 항목 추가 | 정다예
        |          | Event, System, 사용자 및 권한 | Event 메시지 팝업 노출 조건 | 정다예
```

## 공통 (1317:108048)

```text
공통 정책서
플랫폼 설명
        1-1) 개요
              CURECA 장비 관리 및 관제를 위한 애플리케이션으로, 장비와의 직접 연동 및 원격 관리 기능을 제공함.
L-IOS
장비와 직접 연동되어 구동 제어, 소모품 관리, 오류 감지 및 처리 기능을 지원.
Material Setup(L-IOS 내 구현)
검체와 검사에 필요한 소모품 및 시약을 셋업하고, 관련 데이터를 체계적으로 관리할 수 있는 기능을 제공
T-IOS
장비의 구동 상태를 원격으로 모니터링할 수 있으며, 테스트 정책 설정, 사용자 관리 등 시스템 운영 전반을 관리할 수 있는 기능을 제공.

         1-2) 지원 해상도
기본: 1920x1080
최소: 1280 x 720
운영
        2-1) 운영 언어
현재 버전에서는 영문 단일 언어로 운영

        2-2) 모듈 구성 운영
현재 버전에서는 개별 모듈 또는 일부 모듈을 조합하여 운영하는 방식을 지원하지 않으며, Prep 및 DX 시스템을 포함한 8대 전체 모듈을 단일 시스템으로 통합 운영하는 환경만을 지원
```

## 검체/검사 정의 (1317:107876)

```text
검체 상태
검체는 검사 진행 상황에 따라 6개의 상태로 정의됨
Ordered
- 검사 오더가 접수되어 검사 시작 전인 상태
Ready
- 검사 배치가 시작된 후 검체 로딩 전 상태
Not Tested
- 검체 로딩 후 바코드 오류로 인해 검사가 시작되지 못한 상태
Running
- 검체가 로딩되어 검사가 진행 중인 상태
Completed
- 검사가 정상적으로 완료된 상태
Failed
- 검사가 실패한 상태 /  LIS 결과 전송X
Test Order
Test Status
Samples
-
-
-
데이터 관리 시점 및 상태값 정의
데이터 상태 전환 시점 (구동 시작)
검체 트롤리 도킹 후, [Run Start] 버튼을 누르는 시점을 기준으로 데이터 상태가 변경됨.
이때, 기존 'Ordered' 상태였던 검체들이 일괄 'Ready' 상태로 전환됨.
Not Tested (가칭) 상태값 트리거 조건
아래의 예외 상황이 발생하면 해당 검체의 상태가 'Not Tested' 처리됨.
데이터 불일치: 최초 적재된 검체 데이터와 Prep 장비가 실제 스캔한 값이 서로 불일치(인식 오류 검체)하는 경우.
최종 회수: 입고된 Rack(바코드 불일치 검체 + 정상 분주 완료 검체) 그대로 회수 트롤리에 입고됨
구동 중단 및 도킹 해제: [Run Start] 이후 검사가 정상 진행되지 못하고 Run이 중단되어, 검체가 트롤리에서 전처리 장비로 진입하지 못한 채 트롤리가 도킹 해제(제거)된 경우는 Ordered 상태가 된다.
Test Order
Samples
-
-
-
Plate 상태
Plate 검사 진행 상황에 따라 3개의 상태로 정의됨
Running
- Plate가 로딩되어 분주 또는 검사가 진행 중인 상태
Completed
- 검사가 완료된 상태
Failed
- 검사가 실패된 상태
96-DWP
PCR Plate
-
-
-
검사 시작/종료 시간 정의
샘플 단위 전체 프로세스 기준 (Test Order)
- Start Date/Time : Prep 장비에서 바코드 찍힌 시점
- End Date/Time : L-IOS가 D.A.PC(결과처리 시스템)로부터 검사결과를 받은 시점
배치 단위 전체 프로세스 기준 (Test Status)
- Start Date/Time : Run 또는 Quick Start를 통해 Run Start를 요청한 시점
- End Date/Time : Batch에 포함된 검체 중, 최종 검체의 검사 결과가 D.A.PC 시스템으로부터 수신 완료된 시점
Plate 및 샘플 단위 검사 단계별 기준 (Samples Detail)
- Start Date/Time : Plate가 해당 단계의 장비에 안착되어 인식이 시작되는 시점
- End Date/Time : Plate의 해당 단계 작업이 완료되어 장비로부터 수거되는 시점
Test Order
Test Status
Samples
-
-
-
검체 재검사
바코드 오류 및 훼손 등으로 인해 로딩 전 검사 실패한 경우
- 해당 검체 상태는 "Not tested"로 정의되며, 이 경우 병원 측의 별도 재검 요청 절차는 해당되지 않음. 자체적으로 재검사를 진행하는 방식으로 처리
장비 고장 등으로 인해 로딩 후 검사 실패한 경우
- 해당 검체 상태는 검사 실패로 정의되며, 이 경우 병원 측의 재검사 요청 접수 절차통해 재검사가 진행됨
-
-
-
-
Batch Card 생성 및 초기화
Batch 단위의 검사 현황 정보 카드가 생성 시점과 초기화되는 시점을 정의 
생성 : 장비가 Running 상태 시작 시점부터 Ready 상태 도달 전까지의 Batch 카드 누적 노출
초기화 : 장비가 다음 Running 상태 시작 시 기존 카드 리스트 초기화 후 신규 데이터 적재
검사가 진행중인 Trolley가 있는 상태에서 STAT으로 검체를 투입했을 경우 별도의 카드가 생성됨
(단, 트롤리 장착과 동시에 STAT에 검체 장착 후 Run 시 1개 배치 생성됨
Test Status
-
-
-
검체/검사 단위 표기
각 메뉴별 사용자에게 제공하고자하는 정보 특성에 따라 Sample 또는 Product 단위를 다르게 표출
Sample 단위 정보 표출 메뉴
- Run Preparation, Quick Start, 96-DWP
Product 단위 정보 표출 메뉴
- Test Order, Test Status, Samples, PCR Plate
-
-
-
-
검사 시작 후 오더 취소
검사가 시작된 후 오더가 취소된 경우 중단하지 않고 끝까지 검사를 진행함
검사가 진행 중이더라도 오더가 취소된 시점에 오더 취소 여부와 일시 정보 표출
Samples
-
-
-
만료 시약 검사 불가
Run 구동 준비 단계에서 유통기한 만료된 시약이 있을 경우, Run start 불가
단, Run 구동 중 유효기간이 지날 경우에는 그대로 검사 진행
Run
-
-
-
STAT을 통한 검사
검사가 진행중인 Trolley가 있는 상태에서 STAT으로 검체를 투입했을 경우 STAT상태의 검체 유무에 따라 아래와 같이 검사가 진행됨
- STAT상태의 검체가 없는 경우 : 현재 검사 진행중인 Trolley내 검체를 모두 처리한 후 이어서 진행
- STAT상태의 검체가 1개라도 있는 경우 : 현재 검사 진행중인 Trolley내 검체 중 작업하고 있는 Rack까지만 처리 후 STAT에 투입된 Rack을 우선적으로 처리
Run
-
-
-
```

## 시약/소모품 사용 및 폐기 (1317:107580)

```text
시약 폐기
유효기간 경과 시
DX 장비일 경우, 장비 내에서 자동으로 폐기 처리되도록 로직으로 적용
Prep 장비일 경우, 실제 사용되지 않고 Trolley로 반환됨(미사용 후 입고된 그대로 다시 반환)
재사용 회수 초과 시
시약별로 지정된 기준 재사용 횟수를 초과할 경우 자동으로 폐기 처리됨.
본 항목은 사용자 화면(UI)에 별도로 노출되거나 관리되지 않으며, 시스템 백엔드 로직에 의해 자동 폐기됨.
-
-
-
-
시약 유효기간 관리
Inventory 내 유효기간 조회
각 소모품 또는 시약별 Item details 버튼을 통해 입고 단위별 유효기간을 확인할 수 있음
장비 가동(Run) 전 유효기간 최종 확인
단, 장비 가동 전 진행되는 'Check Reagents' 단계에서는 해당 Run에 실제 사용될 시약의 유효기간을 개별적으로 확인 및 검증할 수 있음.
Inventory
-
-
-
시약 보관 및 재사용
보관 구조: 일부 사용 후 잔여량이 발생한 시약은 다시 디캡핑(Decapping)하여 냉장고에 보관 및 재사용함
사용 기준: 시약별 최대 허용 재사용 횟수는 각 품목의 규격에 따라 상이함.
사용 횟수 산정(카운팅) 기준
카운팅 시점: 1개의 Plate(DWP, PCR Plate)에 분주하기 위해 장비가 시약을 흡입(Aspiration)하는 시점에 사용 횟수 1회 추가(Count +1)로 간주함.
-
-
-
-
동일 Lot 사용
핵산 추출 시약
대상 시약: STARMag M96 Kit, STARMag Universal Cartridge Kit
기본 방침: LOT 매칭이 불가능한 예외 상황에 한해 임의의 LOT 사용을 허용함.
Prep 단계 세부 동작 로직
[LOT 일치 시] DX에 입고된 시약 중 LOT가 일치하는 품목이 존재할 경우, DX로부터 LOT 정보를 수신하여 일치하는 시약으로 자동 분주함.
[LOT 불일치 시] LOT 일치는 필수 규격이 아닌 '권고사항'이므로, 일치하는 시약이 없더라도 불일치 상태에서의 분주 및 사용을 허용함.
PCR 시약
대상 시약: 사용하는 시약 전체
기본 방침: 기존과 동일하게 LOT가 상호 일치하는 경우에만 사용 가능함 (교차 사용 불가).
-
-
-
-
전처리 용기별 시약 사용 정책
개요: 동일한 전처리 시약이 장비 내에 Standard Tube 형태와 Tub 형태로 공존할 경우, 시스템은 전처리 공정 단계에 맞게 사용됨
공정별 용기 매핑
검체를 처음 옮겨 담을 때는 Standard Tube 사용.
상등액 제거 후 추가 분주를 통해 시약을 넣을 때는 Tub 사용.
적용 시약 예시
PBS Standard Tube / PBS Tub 및 Saline Standard Tube / Saline Tub
-
-
-
-
소모품 및 시약 변동(인/아웃) 시점 정의
Out (반출 상태 처리 시점)
스토리지(Storage) 내에 보관 중이던 소모품을 로봇팔이 모듈 내 실제 사용 위치로 이송을 시작하는 시점을 'Out'으로 간주함
Inventory Usage History (재고 사용 이력 기록 시점)
해당 소모품이 데이터상에서 완전히 '사용 완료'로 반영되는 시점은, 장비(기계)가 해당 소모품을 최종 폐기(Dispose)하는 시점을 기준으로 함.
Inventory Usage History
-
-
-
PCR 시약 IC 사용 정책
동일 Lot 사용 기준을 충족하기 위해, 조합 검사 시 동일한 IC를 사용하더라도 최초 구성 시에는 각 시약 박스에 해당되는 IC를 모두 구성하여 검사를 진행함
단, 실제 구동 단계에서는 1개의 검체에 대해 RP 조합 검사를 수행하는 경우, RP1 시약 박스에 포함된 RP-V IC가 RP2 및 RP3 검사의 각 IC 대신 사용 가능함
-
-
-
-
시약 만료 상태값 정의
Run 준비 단계에서 표기되는 정보
Valid / 만료일까지 30일 이상 남은 상태
Under 30 days / 만료일까지 30일 미만 남은 상태
Expired / 만료된 상태
Run
-
-
-
소모품/시약 재고 상태값 정의
Run(구동) 중일 경우, 검사에 필요한 소모품/시약 대비 장비에 입고된 수량을 비교하여 아래 상태값으로 표기됨
Sufficient /잔여 수량이 필요 수량 이상인 경우
Low / 잔여 수량이 필요 수량 미만이나 현재 장비 가동은 가능한 경우
Insufficient / 잔여 수량이 부족하여 현재 장비 가동이 중단된 경우
Inventory
-
-
-
```

## Material Setup (1317:107721)

```text
Carrier(기물) 장착 정책
공통 정의 : 소켓, 트레이, 트롤리 구성 시, 동일 메뉴의 동일 항목끼리 구성해야 함
- 검체와 소모품/시약을 혼합하여 하나의 소켓, 트레이, 트롤리에 적재할 수 없음
- e.g) 소켓 적재 시, 검체 소켓과 소모품/시약 소켓을 한 트레이에 적재할 수 없음
Carrier Setup
-
-
-
소켓(Socket) 내 검체 장착 정책
기본 방침: 검체 튜브를 소켓에 적재할 때, [동일 검사군]가 상호 일치하는 경우에만 한 소켓에 함께 장착할 수 있음
- e.g) R1, R2, R3은 동일 소켓에 적재 가능
Test Order에 접수되지 않거나 취소된 검사의 Sample은 적재 불가능
Carrier Setup
-Sample
-
-
-
PCR Regents 소켓(Socket)
구성 정책
기본 방침: PCR 전용 소켓 사용하며, 1개 소켓에는 1개 종류의 시약만 허용.
소켓 구성 시, 유효기간이 동일한 시약만 구성 가능
수량 기준: 1개 소켓당 최대 2개 세트(Box 단위) 구성 가능
예외: 구성 튜브(Tube) 수가 많은 시약은 최대 1개 세트만 구성.
PCR Box 내 IC(Internal Control)는 분리되어 'STAT Storage'로 입고.
*참조: 시약 세부 사양은 엑셀 파일 [CURECA 소모품 및 시약 정보]를 참조
Carrier Setup
-PCR reagents
-
-
-
MM tube 소켓(Socket)
구성 정책
기본 방침: PCR 전용 소켓과 동일한 소켓을 사용하여 구성
수량 기준: 1개의 소켓에 무조건 14개의 MM Tube를 전량 채워서 구성해야 함
Carrier Setup
-MM Tube
-
-
-
Data  저장 정책
기본 방침: 메뉴얼에서 [Done] 버튼 클릭 시, 데이터가 저장됨
- 데이터 저장되기 전, 메뉴를 이탈할 경우, 데이터는 저장되지 않음
- 작업 중인 기물 데이터를 종료하기 전까지 추가 작업을 진행할 수 없음
화면 안내 대상 외, 현재 작업 단계에 유효하지 않은 Carrier를 스캔할 수 없음
Material setup
-
-
-
기물 데이터
리셋(Reset) 및 갱신 정책
공통 정의 : 해당 기물의 데이터만 리셋되며, 하위 기물의 데이터는 유지함
- 대상 기물 : Lot, Socket(Sample, PCR reagent), Tray, Trolley, Drawer(STAT, DX)
트롤리(Trolley) 구성 기물: Run Start(장비 구동 시작) 시점을 기점으로 시스템이 자동으로 데이터를 리셋함
PCR 전용 소켓: 사용자가 소켓(기물)을 인식(바코드 스캔 등/찍었을 때)하는 시점에 기존 데이터가 리셋되며 신규 정보로 업데이트됨.
-
-
-
-
```

## 트롤리 도킹 & Drawer Loading (1317:107950)

```text
검체 및 소모품 트롤리 도킹/제어 정책
자동 인식 구조: 트롤리를 장비에 도킹 시, 별도의 바코드 스캔 없이 장비가 시스템상에서 자동으로 트롤리를 인식하는 구조
트롤리 구성 비율: 검체 트롤리 1대당 N대의 소모품 트롤리를 구성할 수 있음.
구동(Run) 중 트롤리 교체 및 제약 조건
소모품 트롤리 (자유로운 교체 가능): 장비 구동 중에도 언제든지 기존 트롤리를 제거하고 신규 트롤리를 즉시 도킹(교체)할 수 있음.
검체 트롤리 교체: Run에 1개의 검체 트롤리만 적용할 수 있으며, 완료되지 않은 검체 트롤리를 제거하기 위해서는 구동 중단한 후 제거 가능
입고 방식: Instrument 내 Door Control을 통해 잠금을 해제하고 문을 열고 입고를 진행함.
-
-
-
-
DX Storage 투입부 제어 정책
개방 방식: Drawer Loading 화면을 통해 DX Storage의 투입부를 제어 및 개방할 수 있음.
중복 개방 제한: 단 하나의 투입부만 개방 가능하며, 복수(N개)의 투입부를 동시에 여는 것은 불가능함
스토리지별 입고 방식: 각 Storage별로 입고 방식이 상이하므로, 자세한 사항은 해당 메뉴 내 제공되는 가이드(Guide)를 통해 확인 후 입고 진행
Drawer Loading
-
-
-
Cold Storage_PCR Rack 정책
사용 방식: 
PCR Rack이 상부로 이동 >  시약 흡입 시작/종료 > 남은 시약이 Rack으로 돌아오고 기존 Storage 위치로 돌아옴
시약을 다 사용한 경우 → 자동 폐기되며 Rack만 Storage의 원래 위치로 돌아옴

위치값 리셋: 
시약을 자동 폐기한 시점으로부터 해당 PCR rack 위치값은 자동 리셋됨
Drawer Loading
-
-
-
STAT Storage 입고 및 회수 정책
공간 구성: STAT Storage는 사용자 접근 공간(4칸)과 Buffer 공간(8칸)으로 분리되어 있음.
STAT 전용 입고 대상 품목
소켓에 장착된 검체 (Sample in socket)
트롤리(Trolley)에 구성되는 모든 소모품 및 시약
STARMag Universal Cartridge Kit의 PK Tube
PCR Reagent 내의 IC (Internal Control)
우선순위 및 자원 소모 제어 로직
긴급 검사(검체) 제어: 장비 구동(Run) 중에 긴급 검사 검체이 STAT Storage에 입고되면, 트롤리에 입고된 검체보다 최우선 순위로 검사 처리함.
단, 사용자가 검체 입고 완료 후 반드시 화면에서 [Run] 버튼을 클릭해야만 검사가 시작됨.
소모품 및 시약 제어: STAT Storage에 소모품 또는 시약이 입고될 경우, 시스템은 기존 트롤리에 장착된 소모품/시약보다 STAT에 입고된 자원을 선행하여 소모(우선 사용 처리)함.
반출 및 회수 위치: 사용된 검체 회수 시, Buffer 공간(8칸)이 아닌 사용자 접근 공간(4칸)으로만 회수 및 반출됨.
Drawer Loading
-
-
-
저장 장치 도킹 상태값 정의
모듈의 Storage의 서랍 또는 문의 개폐여부에 따라 아래와 같이 상태갑싱 표기됨
Docked / 도킹됨 (서랍 또는 문이 닫힌 상태)
Undocked / 도킹 해제 (서랍 또는 문이 열린 상태)
Instrument
-
-
-
```

## 장비 관리 및 정의 (1317:107654)

```text
Door 개폐 및 잠금 전환 규칙
정의: 모듈 상단(일부 하단)에 위치한 유리문 형태의 폐쇄 구조체를 'Door'라 칭함.
상태 분류
잠금 상태: Lock / Unlock
개폐 상태: Open / Close
Door 오픈 및 제어 조건
Door는 기본적으로 Lock 상태이며, 잠금 해제(Unlock) 절차가 선행되어야만 Open이 가능함.
잠금 해제 방법: 'Instrument' 메뉴 내 [Door control] 기능을 통해 시스템적으로 잠금을 해제함.
Unlock 전환 후, 사용자가 화면에서 임의로 다시 Lock하는 기능은 지원하지 않음
(현재 개발 범위 제외).
장비가 구동(Running) 중인 경우, 해당 모듈 단위의 Door는 Unlock할 수 없음. (Not Initialized / Ready / Error 상태에만 잠금 해제 가능)
자동 잠금
문을 열고 닫았따는 신호를 감지하면 닫은 시점으로부터 5초후 자동 잠금 처리 됨
문을 한번도 열지 않았을 경우는 계속해서 Unlock상태를 유지하다가 'Run(장비 구동)'이 시작되는 시점에 자동으로 잠금처리 됨
Instrument
Door control
-
-
Enable Setting (모듈 및 유닛 사용 설정)
개요: 동일한 모듈(Module) 또는 모듈 내 유닛(Unit)이 다수(N대) 배치된 경우, 각 하드웨어의 사용 여부(Enable/Disable)를 개별 제어하여 일부만 선택적으로 가동할 수 있음.
필수 제약 조건: 최소 1대 가동 필수: 모듈 및 유닛 전체를 Disable할 수 없으며, 무조건 최소 1대 이상은 '사용 중(Enable)' 상태로 유지되어야 함
현 범위 설정 가능 대상
개별 유닛 설정은 아래의 2개 모듈에서만 제한적으로 제공됨.
Universal PCR의 CFX device
Plate Sealing의 Sealer device
제어 UI 경로: 'Instrument' 메뉴를 통해 제공됨.
Instrument
Enable Setting
-
-
Error Rate
개요: 장비의 유지보수 기반 정보로 활용하기 위해 관리되는 항목
노출 영역: Instrument 내 모듈의 Detail 영역 모듈명 밑에 표시됨
노출 대상: Account Type이 Service 계정으로 접속시에만 제공됨
집계 대상
Module : 전체
Device: M9600, STARlet, Sealer, CFX96
집계 기준
(가동 실패 횟수 / 총 가동 횟수) x 100
총 가동 횟수 집계 기준
Prep 검체/소모품 저장 모듈: 모듈에 Trolley가 입고되어 가동이 시작된 시점
Prep 검체 전처리 모듈: 모듈에 Sample이 장착된 Rack이 로딩되어 가동이 시작된 시점
Dx 전체 모듈/기능 장치: 모듈 또는 기능 장치에 Plate가 입고되어 가동이 시작된 시점
가동 실패 횟수 집계 기준
가동이 시작 된 후(총 가동 횟수 집계 시점 이후), 오류에 의해 가동이 중단된 시점 (단, 소모품 부족이나 Waste Bin Full에 의한 가동 중단은 집계 제외)
Instrument
-
-
-
Spare storage 정의
High-throughput Extraction 모듈의 Spare storage는 현재 사용되지 않고, 향후 필요 사례에 대비한 예비 용도에 해당됨. 예를 들어, WB3 모듈 추가 시 별도 storage 요구 발생과 같은 상황을 고려하여 구성됨
서랍 바코드 스캔 시, "현재 사용하지 않는 서랍입니다" 알럿 표출됨
Instrument
-
-
-
CURECA 전체 구동 상태값 정의
Not Initialized / 초기화 필요
조건: 장비 전원을 인가했을 때, 최초 설정 값
Initializing / 초기화 중
조건: Initialize 버튼을 클릭 했을 때, 초기화 중으로 변경
Ready / 준비 완료
조건: 모든 모듈이 Idle 상태로 초기화 완료 또는 Running 종료 됐을 경우 다시 Ready 상태로 전환됨
Running / 가동 중
조건: Run Start를 클릭 했을 경우, 가동 중으로 변경(검사를 시작한 경우)
Stopping / 가동 중지 중
조건: Stop 버튼을 클릭 했을 때, 중지 중으로 변경
Partial Running / 부분 가동 중
조건: Running 중에 1대 이상의 모듈에서 Error가 발생 됐을 경우
Error / 오류
조건: Running 중 전체 모듈이 Error 상태이거나 Ready 상태에서 모듈 1대 이상에서 Error가 발생했을 경우
-
-
-
-
모듈 상태값 정의
Ready / 준비 완료
Running / 가동 중
Error / 오류
Instrument
-
-
-
디바이스 상태값 정의
Ready / 준비 완료
Running / 가동 중
Error / 오류
Instrument
-
-
-
페기물함 상태값 정의
Available / 폐기물함(통) 적재율이 70% 미만인 경우
AlmostFull / 폐기물함(통) 적재율이 70% 이상인 경우
Full / 폐기물함(통) 적재율이 100%인 경우
Inventory
-
-
-
```

## Test Policy (1317:107989)

```text
PCR Regents 조합 검사 정책
호흡기 검사군 (조합 가능): Allplex RP1, RP2, RP3, PB 간 조합 검사 가능
소화기 검사군 (조합 가능): Allplex GI-V, GI-B(I), GI-B(II), GI-P 간 조합 검사 가능
성매개 감염병 (단독): Anyplex II STI-12는 단독 검사만 수행 (타 시약과 조합 불가)
인유두종 바이러스 (단독): Allplex HPV 28은 단독 검사만 수행 (타 시약과 조합 불가)
-
-
-
-
검사 리셋 시점 설정
(오더 집계 기준 시간 설정?)
개요: 야간 장비 가동 등 현장 업무 사이클에 맞추어, 대시보드의 'Today's Order'를 구분·집계하는 마감 기준 시간을 설정할 수 있음
표준 0시(자정) 기준의 날짜 구분이 아닌, 실제 검사 사이클에 맞춘 데이터 연속성을 보장하기 위함임
시스템 동작 및 대시보드 반영
설정된 'Cut-off Time'에 도달하면 전일 오더 집계가 마감되며, 이에 따라 대시보드의 Today's Order 데이터가 새 주기로 전환(갱신)됨.
Policy setting, Dashboard
Test Cut-off Time
-
-
원가 설정
개요: 시약 및 소모품의 납품 단가를 관리 및 설정하는 화면
데이터 연동 및 활용처: 설정된 단가 정보는 아래 기능의 비용 도출 및 계산 로직의 원천 데이터로 활용됨
Prioritize Cost Reduction 메뉴의 Analyze breakpoint 분석
Nucleic Acid Extraction Device Allocation Policy 메뉴의 Compare 분석
Test Analytics메뉴의 Test Cost 통계에 사용
Policy setting, Test Analytics
Cost Setting
-
-
Policy 정책
공통 정책 : 
T-IOS에서 설정, 변경할 수 있으며, L-IOS에는 View 기능만 제공함
계정별 메뉴 노출이 구분됨
- Service 계정 : 모든 항목 노출
- Admin 계정 : 
ㄴ (1)NC/PC Dispensing Order, (2)Sample Dispensing Options 메뉴 외, 모든 항목 노출
T-IOS에서만 Cost setting 항목이 노출됨
Policy setting
Pre-Treatment Protocol Extraction Protocol
-
-
Protocol 정책
공통 정책 : 
T-IOS에서 추가, 변경, 수정, 삭제할 수 있으며, L-IOS에는 View 기능만 제공함
Seegene에서 제공하는 기본 Protocol(SG protocol)은 수정 및 삭제할 수 없음
RUN 중에는 protocol 추가, 변경, 수정, 삭제가 불가능함
Protocol setting
Pre-Treatment Protocol Extraction Protocol
-
-
Protocol,
M9600 하드웨어 사양 기반 설정 제약 정책
8번 슬롯 - 전용 팁 고정
8번 자리에는 오직 Spin Tip만 지정할 수 있도록 제한함.
tip이 아닌걸로 지정은 되나 하드웨어 구조상 Tip만 지정되게 하고자 함
히팅(Heating) 시스템 위치 제한
히팅 시스템이 장착된 특정 자리(예: 1, 2, 3, 6번 등 확정된 슬롯) 외에는 온도 설정 기능 자체를 비활성화(Disable) 처리.
SW상 모든 Plate에 heating 값 입력이 되나, 해당 자리에 Heating system이 없어 Heating 적용 불가함
빈 슬롯 표기 방식
사용하지 않는 빈 자리는 기존의 '빈 칸' 공백 표기 대신, 'Not Used'라는 명확한 텍스트 상태값으로 표시함.
Protocol setting
Extraction Protocol
-
-
Plate 바코드 노출 기준
96-DWP 바코드 표기 시 처음 작업이 시작되는 LB바코드를 기준으로 노출
Samples
96-DWP

-
-
```

## 통계 (1317:107844)

```text
데이터 표출
Test Analytics
- 지표 변경 시 필터 옵션(날짜 및 범례 등)은 초기화
- Daily 단위로 전일 기준 최근 14일간 데이터 노출
Test Forecasting
- 예측 결과 표출 시 예측 데이터 기준 최대 60일 우선 노출
-
-
-
-
데이터 설정 범위
Daily
- Min Range : 최소 1일
- Max Range : 최대 3개월(90일)
- 과거(어제)부터 선택 가능, 오늘 및 미래 날짜는 비활성화
Monthly
- Min Range : 최소 1개월
- Max Range : 최대 1년(12개월)
- 당월 선택 가능 (오늘 날짜 포함 이후 날짜 집계 제외), 미래 월은 비활성화
-
-
-
-
날짜 연동 규칙
Daily ➔ Monthly 전환 시 데이터 상속
Monthly ➔ Daily 전환 시 데이터 상속
단, 변환된 일자 범위가 Daily 최대 조회 한도(3개월/90일)를 초과할 경우,
종료월의 말일을 기준으로 역산하여 최대 3개월(90일) 범위로 기간 노출
-
-
-
-
```

## 로그인/로그아웃 (1317:107806)

```text
계정 생성
시스템 최초 설치 후 Service 계정으로 접속하여 Admin 또는 User 계정 생성
-
-
-
-
초기 비밀번호 설정
계정 생성 후 최초 로그인 시 초기 비밀번호 변경 필요
-
-
-
-
아이디 생성 조건
허용 길이 : 4 자 이상, 32 자 이하
허용 문자 : 영문 소문자(a-z), 숫자(0-9), 특수문자 - 허용 특수문자: _ - 
대소문자를 구분하지 않아야 한다. (대문자 입력 시 소문자로 자동 변환 후 저장)
이미 사용 중인 ID 의 생성을 허용하지 않아야 함
각 문자 유형을 최소 1자 이상 포함해야 함
-
-
-
-
비밀번호 생성 조건
허용 길이 : 8 자 이상, 64 자 이하
허용 문자 : 영문 대문자(A-Z), 영문 소문자(a-z), 숫자(0-9), 특수문자 - 허용 특수문자: ! @ # $ % ^ & * ( ) _ - + = [ ] { } ; ' : " , . < > ? / 3)
대소문자를 구분해야 함
-
-
-
-
Session Timeout
사용자의 비활성 상태가 일정 시간 이상 지속될 경우, 보안을 위해 자동으로 세션을 종료
장비가 Idle(Ready), Not Initialized 2가지 상태일 경우에만 해당됨
-
-
-
-
종료 및 노출 조건
사용자 권한별 노출되는 종료 유형이 다름
- Service, Admin : 로그아웃, 프로그램 종료, 시스템 종료
- User : 로그아웃, 시스템 종료
단, 시스템이 Running 상태이거나 Error 상태일 경우 프로그램 종료 및 시스템 종료 불가
-
-
-
-
```

## Event, System, 사용자 및 권한 (1317:107774)

```text
계정 유형 및 권한
계정 유형: 시스템 사용자는 user, admin, service 총 3가지 등급으로 분류하여 관리함.
계정 유형별 메뉴 접근 설정: 각 계정 유형(등급)에 따른 메뉴 접근 권한 설정 기능은 현재 개발 범위에서 제외함
등급별 접근 권한
user(일반 사용자): 권한이 부여된 기본 메뉴 및 기능만 접근 가능.
admin(관리자): 모든 메뉴에 접근 가능함. 단, 일부 메뉴 내 특정 상세 항목 미노출됨
service (엔지니어/서비스): 최상위 권한으로, 시스템 내 모든 메뉴 및 숨겨진 모든 기능에 대한 접근·제어 권한을 가짐.
Admin은 Setting 메뉴 접근 불가
Service 등급 전용 접근 기능
아래 기능들은 service 계정 로그인 시에만 활성화 및 접근이 가능함.
Instrument 메뉴 내 error rate 확인
Policy setting 메뉴 내 NC/PC Dispensing Order, Sample Dispensing Options 설정
-
-
-
계정 유형별 메뉴 접근 권한을 사용자가 UI(화면)에서 직접 수정 및 관리하는 기능은 지원하지 않음.
Preset Mode(가칭): 시스템 내에 미리 정의된 '설치 모드'를 구축하고, 장비 최초 설치 시 해당 사이트의 운영 목적에 맞는 모드를 선택하여 적용함.
설치 시 지정된 모드에 따라, 해당 장비 시스템에서는 허용된 특정 메뉴만 원천적으로 노출 및 접근되도록 고정됨
예시: Material Setup 전용 모드로 장비를 설치한 경우, 해당 장비의 유저는 로그인 시 Material Setup 메뉴만 화면에 노출되며 그 외 메뉴는 숨김 처리됨.
LIS 연동 정책
LIS 인터페이스와 큐레카(QREKA) 장비는 1:1 연결
-
-
-

Event 상태값 정의
Event 등급(Level)
Warning / 장비 가동이 가능하나 주의가 필요한 상태
Error / 장비를 가동할 수 없는 상태
Event 상태(Status)
이벤트 발생 시, Open으로 생성되며 확인 후 수동으로 Closed 변경하는 방식
Open / 이벤트 확인 및 처리되지 않은 상태
Closed / 이벤트 확인 및 처리된 상태
Event History
-
-

Event 메시지 팝업 노출 조건
L-IOS
- 콘솔, 메인 PC에서만 노출
T-IOS
- 사용자 개별 설정에 따라 노출 여부 결정
Event History
-
-
```
