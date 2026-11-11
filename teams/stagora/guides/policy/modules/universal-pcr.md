# Universal PCR (유니버설 PCR)

> Dx 시스템 · 검사 단계 PCR. 초안 v0.1 (2026-11-06)

## 역할

CFX96으로 PCR 증폭 · 측정을 합니다. 측정 결과는 D.A PC가 판독합니다.

## Unit (`glossary/module-units.csv`)

- Device: CFX96 (#) — 한 Module에 설치 대수가 가변(0..N), 호기 번호로 표기 (예: CFX96 (1))
- Waste: Waste Bin
- Door

## 흐름에서

- **받는 것:** Plate Sealing의 실링한 PCR Plate
- **내보내는 것:** 측정 데이터 → D.A PC → L-IOS → T-IOS · LIS. PCR Plate의 End는 PCR Module에서 나온 시점 (POL-SMP-002 규칙 3)
- Sample · Batch의 End는 L-IOS가 D.A PC에서 결과를 받은 시점 (POL-SMP-002 정의)

## 특성 · 제약

1. CFX96이 여러 대면 Run-time 기준으로 고르게 배정 (POL-EQP-005 규칙 5)
2. 가동 중 Door 잠금 해제 불가 (`policy/equipment-states.md` 5절)
3. Failed Sample 결과는 LIS로 보내지 않음 (POL-SMP-001 출처 "Failed - LIS 결과 전송X")
4. 재단에 설치된 Universal PCR은 Module 6대에 Waste Bin 1개를 씀(QR · 서랍형). 표준은 Module 1대에 1개 (MT-20260904-01)

## 관련 정책

POL-EQP-005 · 008 · 009 · 010, POL-SMP-002 · 010, POL-INV-005

## 모르는 것

1. 다 쓴 PCR Plate는 Waste Bin으로 가는지
2. CFX96 한 대가 Error일 때 그 안의 PCR Plate는 Failed인지, 다른 CFX96로 옮기는지
3. D.A PC 판독이 실패하거나 연결이 끊기면 Sample 상태
4. 한 PCR Plate의 측정 시간(TAT 계산과 관련)
