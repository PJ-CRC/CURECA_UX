# Assay Pack 파일 구조 (원본 캡처)

> 출처: 씨젠 "CURECA Assay Pack Manager 요구사항 명세서" R06 (2026-10-26). 원본 엑셀은 씨젠 보안 레이블(DRM)이 걸려 있어 사용자가 화면을 캡처해 전달함 (2026-11-02). 인용 약칭: `씨젠 Assay Pack 명세 R06`

이 폴더의 캡처는 원본입니다. 고치지 않습니다. 정책과 화면설계서는 이 구조와 예시 값을 기준으로 실제 데이터를 씁니다 (POL-TST-008, POL-TST-010).

## 파일

| 파일 | 내용 |
| --- | --- |
| R06-261026-master-structure.webp | Master 파일 입력 구조 |
| R06-261026-pretreatment-structure.png | Pretreatment(전처리 시약) 파일 입력 구조 |
| R06-261026-extraction-structure.webp | Extraction(추출 시약) 파일 입력 구조 |
| R06-261026-pcr-structure.webp | PCR 시약 파일 입력 구조 |
| R06-261026-*-example | 파일별 JSON 예시 |

## 구조 요약

| File type | 주요 정보 (JSON 키) |
| --- | --- |
| Master | 파일 정보(fileType, fileVersion 1~10000, fileCreationDateTime yyyy-MM-dd HH:mm:ss), 검사군 목록(testGroupId·Name·Code, 1~100개), 검체 타입 목록(sampleTypeId·Name·Code, 1~100개), 바코드 체계 목록(barcodeSchemaId·Name, 총 길이, 유효기간 Segment 순서, Segment 순서·명칭·길이), 품목 그룹 목록(itemGroupId·Name), PCR 시약 Socket 구성품 목록(componentId, componentType, 색상 코드) |
| Pretreatment | 파일 정보, 시약 기본 정보(productName·Code, maxRxns, maxUsageCount, 품목 그룹), 바코드 정보(바코드 체계, Segment 순서·명칭·고유 코드), 수량 정보(quantity, baseUnit, packagingUnit), 저장소 위치(moduleCode, unitCode) |
| Extraction | 파일 정보, 시약 기본 정보, 바코드 정보, 구성품 목록(1~100개: 구성품 명칭·코드, maxRxns, maxUsageCount, 품목 그룹, 바코드 정보, 수량 정보, 저장소 위치) |
| PCR | 파일 정보, 시약 기본 정보(productName·Code, testItemName·Code, testGroupId·Name, isTestTargetSelectable, testTargetNames 0~100개), 검체 타입 매핑 정보(sampleTypeId·Name, 1~100개), 바코드 정보, 추출 장치별 사용 가능 여부(m9600, starlet), 구성품 목록(품목 그룹, 바코드, 수량, 저장소 위치, PCR 시약 Socket 구성품 정보: componentId·Type·약어, Socket 위치 Row A~B·Column 1~7, 1~2개) |

- PCR 파일의 시약 기본 정보 중 "최대 Reaction 수", "최대 사용 가능 횟수"는 원본에서 취소선(제거). 구성품 단위로 있음
- 이름(명칭)은 화면에 보이는 값이고, JSON에는 코드로 바꿔 저장하는 항목이 있음 (예: 검사군 명칭 → testGroupCode, Module 명칭 → moduleCode)

## 예시 값

| 항목 | 예시 |
| --- | --- |
| 검사군 | TEST_GROUP_1 RP, TEST_GROUP_2 GI |
| 검체 타입 | SAMPLE_TYPE_6 Raw_stool, SAMPLE_TYPE_7 Cary-blair, SAMPLE_TYPE_8 eNAT_stool, SAMPLE_TYPE_9 Fecal_swab |
| PCR 시약 | Allplex™ GI-Bacteria(I) Assay (GI-B1, 검사군 GI, Target 선택 가능, Target: Sh/EI, Cam, Yer, Vib, CdB, Aer, Sal) |
| 수량 표기 | 100 rxns / set, 96 rxns / tub, 1 ea / rack |
