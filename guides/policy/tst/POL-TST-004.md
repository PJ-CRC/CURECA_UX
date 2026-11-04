---
id: POL-TST-004
title: 추출 장치 할당 정책
summary: Nucleic Acid Extraction Device Allocation Policy는 Prioritize Cost Reduction(기본)과 Prioritize TAT Reduction 중 하나이며, Cost Reduction은 입력한 Sample 수 이상이면 High-throughput Extraction, 미만이면 Flexible Extraction을 먼저 씀
domain: TST
menus: [Setting]
cids: [TI-STN-01, LI-STN-01, TI-STN-01-03, TI-STN-01-04, LI-STN-01-04]
status: 확정
version:
date: 2026-11-02
sources: [TI-STN-01 디스크립션 4 (Ver 2.0), TI-STN-01-03·TI-STN-01-04 디스크립션과 화면 문구]
provisional: []
alerts: [Alert_046]
data: []
replaced_by:
---
# POL-TST-004 추출 장치 할당 정책

## 정의

| 정책 | 할당 방식 |
| --- | --- |
| Prioritize Cost Reduction | Sample 수가 입력한 기준(Setting count) 이상이면 High-throughput Extraction, 미만이면 Flexible Extraction을 먼저 씀 |
| Prioritize TAT Reduction | High-throughput Extraction을 먼저 써서 TAT를 줄임 |

## 규칙

1. 기본값은 Prioritize Cost Reduction임.
2. Setting count는 1~94 사이 정수이며, 1보다 작게 넣으면 1, 94보다 크게 넣으면 94로 바꿈.
3. Analyze Breakpoint는 Cost Setting의 단가로 계산한 최적 Sample 수(Breakpoint)를 보여 줌.
4. Comparison Simulation은 오늘부터 최대 3개월 전까지의 날짜 하나를 골라, 그날 진행한 검사로 두 정책의 Total Cost와 Total TAT를 비교해 보여 줌. 오늘을 고르면 조회한 시점까지의 검사로 계산함.

## 예외

- Breakpoint 계산 방식은 화면에 정의가 없음 (TI-STN-01-04 반영 대기 목록)

## 근거

- TI-STN-01 디스크립션 4 (기본값, Setting count 1~94, Analyze Breakpoint), 화면 문구 "Prioritize High-throughput Extraction for optimal number you entered or more samples; otherwise, prioritize Flexible Extraction."
- 8월 정책서의 "Prioritize Cost Reduction 메뉴", "Nucleic Acid Extraction Device Allocation Policy 메뉴"는 Policy Setting 안의 이 정책 항목과 Analyze Breakpoint·Compare임 (팀원 Q17 해소)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
