---
menu: Statistical Analysis
cids: [TI-STA-01-01, TI-STA-01-02, TI-STA-02-01, TI-STA-02-02, TI-STA-03-01, TI-STA-03-02, TI-STA-04-01, TI-STA-04-02, TI-STA-05-01, TI-STA-05-02, TI-STA-06-01, TI-STA-06-02, TI-STA-07-01, TI-STA-07-02, TI-STA-08-01, TI-STA-08-02, TI-STA-05]
owner: 정다예
ux_status:
ui_status:
delivery_status:
delivered_version:
delivered_date:
---
# Statistical Analysis

- 2026-11-02: 작업방 Statistical Analysis 페이지의 2.1 2차 영역에서 기획 화면 17개를 옮김. T-IOS 전용 메뉴. 상태 칸은 아직 기록하지 않음
- 화면 구성: Test Analytics(Test Count, Test Ratio, Test TAT, Test Cost를 Key Metrics로 전환, 각각 Chart·Table), Instrument(Run-time Trend, Error Rate Trend Tab), Inventory(Usage & Cost Trend), Event(Event Trend), Test Forecasting. Instrument, Inventory, Event 화면은 Figma 경로가 "Statistical Analysis > Instrument / Inventory / Event"인데 IA에는 모두 Test Analytics 아래 Lv.3로 있음
- IA CID 계층이 겹침: TI-STA-05는 Test Forecasting, TI-STA-05-01·05-02는 Instrument Run-time. Instrument·Inventory·Event 화면의 디스크립션이 "TI-STA-05_Skeleton"을 참조함
- IA 화면 이름 일부가 한국어: TI-STA-07-01·07-02 "소모품 및 시약 사용량", TI-STA-08-01·08-02 "Event 통계" (화면 타이틀은 Usage & Cost Trend, Event Trend)
- 옮기지 않은 프레임
  - "TI-STA-01-02"라는 이름의 프레임 2개(2138:1114403, 2138:1114639): 패널 CID는 TI-STN-05 (Account Setting, Ver 1.1). 이 메뉴 화면이 아님
  - Color Description(2138:1082902): CID 없음. 통계 차트 색상 가이드 (제품군 RP·GI·HPV·STI·Etc별 색상군 안에서 나열순으로 씀, Sample Type은 제품군과 관계없이 씀)
  - Skeleton 프레임(TI-STA-05_Skeleton 등)과 2.1 1차 영역 프레임
- 케이스 프레임: TI-STA-01/Case, TI-STA-02/Case, TI-STA-03/Case, TI-STA-04/Case, TI-STA-05/Case, TI-STA-05-01/Case, TI-STA-06-01/Case(패널 CID는 TI-STA-05-01/Case), TI-STA-07-01/Case, TI-STA-08-01/Case. 각 CID 파일의 "다른 프레임"에 링크
- 같은 CID의 다른 프레임(Legend 선택 예시): TI-STA-05-01 3개, TI-STA-05-02 3개, TI-STA-08-01 1개, TI-STA-08-02 1개. 각 CID 파일의 "다른 프레임"에 링크

## 상태 이력

| 날짜 | 축 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
