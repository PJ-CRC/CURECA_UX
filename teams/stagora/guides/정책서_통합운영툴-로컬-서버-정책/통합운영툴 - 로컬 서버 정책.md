# 통합운영툴 - 로컬 서버 정책

로컬 서버(Server Type = Local)로 운영하는 C-Lab 어드민의 정책을 규칙 · 상태값 · 예외 처리는 표로, 로직 · 프로세스는 플로우 차트로 정리한다. 업로드한 4개 문서(로컬용 어드민 서비스 변경 사항 v2.7, 로컬 서버 Product 마스터 PRD v2.2, 로컬 서버 HL7 격리 데이터 PRD v2.2, C-Lab 로컬서버 종합검사 구성 정책 v1.0)를 기준으로 했다.

> 플로우 차트는 글자 도형(코드 블록)으로 그렸다. 도형 안의 `◇`는 분기, `[ ]`는 처리, `([ ])`는 시작 · 끝이다. 문서와 다른 점이 보이면 원본 PRD를 따른다.

### 기준 문서

| 문서 | 버전 | 작성일 | 다루는 것 |
|---|---|---|---|
| 로컬용 어드민 서비스 변경 사항 (로컬 서버 PRD) | v2.7 | 2026-10-23 | Local 설정 · 계정 · 비밀번호 · 권한 · 메뉴 |
| 로컬 서버 Product 마스터 PRD | v2.2 | 2026-11-06 | 본사 마스터 가져오기 |
| 로컬 서버 HL7 격리 데이터 PRD | v2.2 | 2026-10-28 | HL7 격리 · 재처리 · 숨김 |
| C-Lab 로컬서버 종합검사 구성 정책 | v1.0 | 2026-11-06 | 종합검사 구성 |

## 0. 문서 구성 (목차)

### 0-1. 대분류

| 번호 | 대분류 | 핵심 |
|---|---|---|
| 1 | 로컬 서버 기본 정책 | Local이면 적용하는 로직 7가지 |
| 2 | 계정 · 비밀번호 · 권한 | 메일 없는 운영, 임시 비밀번호, Role |
| 3 | 본사 마스터 가져오기 | 수동 + 매일 자동, 전체 되돌리기 |
| 4 | HL7 격리 데이터 | 격리 코드별 재처리 · 숨김 |
| 5 | 종합검사 구성 | 검사 세트 2개, Analyte Type |
| 6 | 메뉴 변경 | 유지 · 변경 · 신규 · 제외 |
| 7 | 미결사항 | 정해지지 않은 항목 |

## 1. 로컬 서버 기본 정책

Lab Info의 서버 유형이 Local이면 아래 로직을 적용한다. 대상은 검사실 사이트와 C-Lab 어드민이다.

### 1-1. 서버 유형 설정

| 설정 | 위치 | 값 | 개발 영향 |
|---|---|---|---|
| 서버 유형 | Lab Info | Local / Cloud | Local이면 1-2 로직을 적용한다 |

### 1-2. Local 로직

| # | 로직 | 내용 |
|---|---|---|
| 1 | Central 연계 제외 | Central 리전 이메일 연계를 하지 않는다. 계정 중복 체크는 로컬 안에서 한다 |
| 2 | 메일 끄기 | 메일을 보내지 않는다. 2차 인증 끄기 · 임시 비밀번호 화면 표시 · 비밀번호 찾기는 관리자 요청 안내 · 탈퇴 안내 메일 없음 |
| 3 | Role Group 조회 | LAB (Local)만 조회한다 |
| 4 | Service Access | 계정 등록 · 수정 화면에 Statistical Report Viewer만 보여준다. Lab은 숨기고 고정한다 |
| 5 | 회원 재가입 허용 | 탈퇴 후 재가입을 허용한다 |
| 6 | 본사 마스터 가져오기 | Product 마스터 · Supply · Common Code · 국가를 본사에서 가져온다 (3장) |
| 7 | 마스터 직접 입력 제외 | 마스터 등록 · 수정 · 삭제를 제외한다. Product 메뉴는 조회만 한다 |

### 1-3. 릴레이 서버 설정 (변경 · Local)

| 규칙 | 내용 |
|---|---|
| 필수 항목 | Local용 릴레이 서버에 대해 입력해야 하는 항목만 필수로 한다 |

### 1-4. 메일 사용 기능의 대체

| 메일을 쓰던 기능 | Local에서 바꾼 방식 |
|---|---|
| 2차 인증 | 끈다 |
| 임시 비밀번호 전달 | 등록 완료 창에 화면으로 보여준다 (2-1) |
| 검사실 사이트 비밀번호 찾기 | "관리자에게 비밀번호 초기화를 요청하세요" 안내 (2-2) |
| 비밀번호 초기화 | 어드민이 임시 비밀번호를 화면으로 확인한다 (2-2) |
| 탈퇴 안내 | 메일을 보내지 않는다 |

### 1-5. 서버 유형별 처리 흐름

```text
([Lab Info 서버 유형 확인])
          │
    ◇ Local 인가? ◇
     │ 예                      │ 아니오
     ▼                         ▼
 [1-2 Local 로직 적용]     [Cloud 기존 로직]
  · Central 연계 제외
  · 메일 끄기 / 2차 인증 끄기
  · Role Group = LAB (Local)
  · 마스터 가져오기 · 직접 입력 제외
```

## 2. 계정 · 비밀번호 · 권한

### 2-1. 임시 비밀번호 전달 (변경 · Local)

| 규칙 | 내용 |
|---|---|
| 표시 시점 | 어드민 · 검사실 유저를 등록하면 완료 창에 아이디 · 임시 비밀번호를 보여준다 |
| 전달 | 등록한 어드민이 본인에게 직접 전달한다 |
| 다시 보기 | 창을 닫으면 다시 볼 수 없다. 잃어버리면 비밀번호를 초기화한다 (2-2) |

### 2-2. 비밀번호 초기화 (신규 · 변경 · Local)

| 대상 | 동작 |
|---|---|
| 검사실 사이트 '비밀번호를 잃어버리셨습니까' | "관리자에게 비밀번호 초기화를 요청하세요"를 보여준다 |
| 어드민 계정 · 검사실 유저 상세 `[비밀번호 초기화]` | 임시 비밀번호를 한 번 보여준다. 전달은 2-1과 같다 |
| 검사실 유저의 `[비밀번호 초기화]` | 새로 만든다 |

```text
([사용자: 비밀번호 분실])
        ▼
 [검사실 사이트 → "관리자에게 초기화를 요청하세요" 안내]
        ▼
 [어드민: 계정 상세 → 비밀번호 초기화]
        ▼
 [임시 비밀번호를 한 번 표시]
        ▼
 [어드민이 본인에게 직접 전달]
        ▼
 ([끝])   ※ 창을 닫으면 다시 볼 수 없음 → 필요하면 다시 초기화
```

### 2-3. Service Access (변경 · Local)

| 규칙 | 내용 |
|---|---|
| 노출 값 | Statistical Report Viewer만 보여준다 |
| Lab | 보여주지 않고 검사실 계정에 고정한다 |
| 선택 대상 | Statistical Report Viewer는 검사실 유저만 선택할 수 있다 |

### 2-4. 권한 (RBAC)

| 규칙 | 내용 |
|---|---|
| Role Group | LAB (Local)을 추가하고, Local이면 LAB (Local)만 조회한다 |
| Role | Admin만 추가한다 |
| Product 메뉴 | LAB (Local) Admin에 조회와 `[본사 마스터 가져오기]`만 준다. 마스터 직접 입력은 제외한다 |
| 감사 로그 Role Group 값 | LAB (Local) |

## 3. 본사 마스터 가져오기

로컬의 Product 마스터 · Supply · 기준 데이터는 본사(클라우드) 마스터를 가져와 쓴다. 로컬에서는 조회만 한다.

```text
본사 마스터 → 가져오기(수동 · 매일 자동, 순서대로 반영) → 로컬 마스터(조회 전용) → HL7 처리
```

### 3-1. 기본 규칙

| 항목 | 내용 |
|---|---|
| 방향 | 본사 → 로컬. 로컬 마스터를 본사로 보내는 것은 제외 |
| 가져오기 | `[본사 마스터 가져오기]`(수동) + 매일 자동. 한 번 실행하면 대상 마스터 전체를 순서대로 반영 |
| 대상 | Product 마스터 5종 + Supply + 기준 데이터 2종 (총 8종) |
| 로컬 입력 | 대상 마스터 직접 입력(등록 · 수정 · 삭제) 전부 제외. 가져오기로만 바뀐다 |

### 3-2. ID 원칙

| 규칙 | 내용 |
|---|---|
| ID | 본사 마스터 ID를 그대로 쓴다. 로컬에서 마스터 ID를 새로 만들지 않는다 |
| 반영 기준 | ID 기준으로 추가 · 변경 · 미사용 처리한다 |
| 삭제 · 미사용 | 본사에서 삭제 · 미사용 처리한 항목은 로컬에서 지우지 않고 미사용으로 바꾼다 (기존 검사 데이터 참조용) |

### 3-3. 가져오는 내용 · 반영 순서

| 순서 | 마스터 | 구분 | 참조하는 마스터 |
|:-:|---|---|---|
| 1 | Common Code | 기준 데이터 | — |
| 2 | 국가 | 기준 데이터 | — |
| 3 | Supply (소모품) | 소모품 | — |
| 4 | Upstream Analyte | Product | — |
| 5 | Analyte | Product | Upstream Analyte |
| 6 | Disease | Product | — |
| 7 | Regulatory | Product | — |
| 8 | Assay | Product | Analyte · Disease · Regulatory · Upstream Analyte · 국가(판매 국가) |

| 규칙 | 내용 |
|---|---|
| 일괄 가져오기 | 대상 마스터 전체를 한 번에 가져온다. 마스터별 개별 가져오기는 제외 |
| 반영 순서 | 참조되는 마스터가 먼저다. 표에 없는 참조도 같은 원칙으로 정한다 |
| 화면 없는 마스터 | Common Code · 국가 · Supply는 로컬에 화면이 없고 데이터만 가져온다 |
| Supply | 본사에도 화면이 없고 DB(supply_info)에서 직접 최신화한다. 다른 마스터와 참조 관계 없음 |

**가져오기 제외 마스터**

| 마스터 | 제외 이유 |
|---|---|
| Corporate (법인) | 로컬 Basic 제외 메뉴 |
| Hospitals (병원) | 로컬 Basic 제외 메뉴 |
| Role & Permission | 로컬 Basic 제외 메뉴. 로컬 권한은 로컬 서버 PRD 4장 설정을 따른다 |

### 3-4. 본사 제공 API

| 규칙 | 내용 |
|---|---|
| 제공 범위 | 대상 마스터 전체와 기준 버전을 내려준다 |
| 같은 시점 | 전체를 같은 시점 기준으로 내려준다 (시점이 다르면 참조가 맞지 않는다) |
| 기준 버전 | 본사 마스터가 마지막으로 바뀐 일시. 대상 마스터 중 하나라도 바뀌면 갱신한다 |
| Supply | DB에서 직접 바꾸므로 바꿀 때 upd_dt도 함께 갱신한다 (기준 버전에 반영돼야 다음에 받는다) |
| 방향 | 본사가 로컬로 보내지 않는다. 로컬이 요청할 때만 내려준다 |

### 3-5. 수동 · 자동 실행

| 구분 | 실행 | 기록하는 실행자 |
|---|---|---|
| 수동 | LAB (Local) Admin이 `[본사 마스터 가져오기]`를 한 번 누르면 전체를 3-3 순서대로 반영 | 실행한 계정 |
| 자동 | 매일 1회, 서버 현지 시각 04:00 (서버마다 시작 시각을 0~30분 안에서 분산) | SYSTEM |

| 규칙 | 내용 |
|---|---|
| 흐름 | 수동 · 자동 모두 3-6 흐름을 따른다 |
| 04:00 이유 | 각국 서머타임 전환 시간(01:00~03:00)을 피하고 검사실 업무 시작 전에 반영된다. 서버 시간대는 납품 때 현지 시간대로 맞춘다 |
| 동시 실행 | 한 번에 하나만 실행한다. 진행 중이면 버튼을 비활성으로 하고, 자동은 그 회차를 건너뛴다 |

### 3-6. 적용 흐름

```text
 ([수동 클릭 / 자동 04:00])
            ▼
   ◇ 이미 실행 중? ◇ ── 예 ──▶ ([수동: 버튼 비활성 / 자동: 회차 건너뜀])
            │ 아니오
            ▼
 [① 기준 버전 확인]
            ▼
   ◇ 본사 = 로컬? ◇ ── 예 ──▶ ([끝: "이미 최신 본사 마스터입니다."])
            │ 아니오
            ▼
 [② 대상 마스터 전체 내려받기] ── 연결 실패 ──▶ ([로컬 변경 없음 · 실패 표시])
            ▼
 [③ 검사: 형식 · 빈 데이터 · 중복 · 참조 · 버전]
            │
   ◇ 하나라도 실패? ◇ ── 예 ──▶ ([반영하지 않고 끝 · 실패 표시])
            │ 아니오
            ▼
 [④ 3-3 순서대로 한 마스터씩 반영 (전체가 하나의 작업)]
            │
   ◇ 중간 실패 · 멈춤? ◇ ── 예 ──▶ ([이번에 반영한 것 모두 되돌림])
            │ 아니오
            ▼
 [⑤ 기준 버전 · 일시 · 결과 · 건수 저장 + 감사 로그 OPS]
            ▼
 ([끝: 성공 — 추가 n · 변경 n · 미사용 n])
```

### 3-7. 받은 데이터 검사 (실패 조건)

| 검사 | 실패 조건 |
|---|---|
| 형식 | 필수 항목이 비었거나 형식이 맞지 않는다 |
| 빈 데이터 | 마스터 하나라도 0건이다 |
| 중복 | 같은 마스터 안에 같은 ID가 2개 이상이다 |
| 참조 | 참조하는 항목이 받은 데이터에 없다 — Analyte → Upstream Analyte, Assay → Analyte · Disease · Regulatory · Upstream Analyte · 국가. 참조가 없는 경우는 검사 제외 (예: RUO Assay의 Regulatory · 판매 국가) |
| 버전 | 받은 기준 버전이 로컬보다 이전이다 |

하나라도 실패하면 반영하지 않고 끝낸다.

### 3-8. 가져오기 상태값

| 항목 | 값 | 설명 |
|---|---|---|
| 마지막 가져오기 결과 | 성공 | 새로 반영함 (추가 n · 변경 n · 미사용 n) |
| | 이미 최신 | 기준 버전이 같아 내려받지 않음 |
| | 실패 | 연결 실패 · 검사 실패 · 반영 중 실패 |
| 실행 구분 | 수동 / 자동 | 수동 = 실행한 계정, 자동 = SYSTEM |
| 마스터 항목 상태 | 사용 / 미사용 | 본사에서 삭제 · 미사용 처리한 항목은 '미사용'으로 표시 |
| 진행 | n/8 마스터명 | 진행 중에는 버튼 비활성 + 반영 중인 마스터와 순서 표시 (예: 5/8 Analyte) |

### 3-9. 케이스 · 예외 처리

| # | 상황 | 처리 |
|:-:|---|---|
| 1 | 본사에 새 항목 | 로컬에 추가한다 |
| 2 | 본사에서 항목 변경 | 로컬 값을 본사 값으로 바꾼다 |
| 3 | 본사에서 삭제 · 미사용 | 로컬에서 지우지 않고 미사용으로 바꾼다 |
| 4 | 본사 변경 없음 | 내려받지 않는다. "이미 최신 본사 마스터입니다." |
| 5 | 본사 연결 실패 | 로컬 마스터는 바꾸지 않는다. 실패를 표시하고, 자동은 다음 날 다시 실행한다. 필요하면 수동으로 가져온다 |
| 6 | 검사 실패 | 적용하지 않는다. 로컬 마스터는 바꾸지 않고 실패를 표시한다 |
| 7 | 반영 중 실패 · 멈춤 (전원 · 네트워크) | 이번에 반영한 마스터를 모두 되돌린다. 앞 순서 마스터만 반영된 상태로 남기지 않는다 |
| 8 | 수동 · 자동이 겹침 | 먼저 시작한 것만 실행한다 |
| 9 | 받은 기준 버전이 로컬보다 이전 | 적용하지 않는다 |
| 10 | 로컬 마스터가 비어 있음 (첫 설치) | 첫 가져오기 전까지 HL7 결과는 MISSING_ASSAY로 격리된다. 상단에 "본사 마스터를 아직 가져오지 않았습니다."를 보여준다 |
| 11 | HL7 MISSING_ASSAY | 본사 마스터를 가져온 뒤 재처리한다 (4-6) |
| 12 | 가져온 뒤에도 Assay가 없음 | 본사 마스터에 없는 Assay다. 운영팀에 문의한다 |
| 13 | 로컬에서 직접 입력 시도 | 등록 · 수정 · 삭제를 화면과 API 모두에서 막는다 |
| 14 | 참조되는 항목이 본사에서 미사용 (예: Analyte가 참조하는 Upstream Analyte) | 미사용으로 바꾸고 참조는 그대로 유지한다 |

### 3-10. 화면 · 메시지

Product 메뉴 화면 위쪽에 가져오기 상태를 보여준다 (Product 메뉴 화면 공통). 목록 · 상세는 조회만 하고 등록 · 수정 · 삭제 버튼은 제외한다.

| 항목 | 내용 |
|---|---|
| 본사 기준 버전 | 로컬에 적용된 본사 마스터 기준 버전(일시) |
| 마지막 가져오기 | 일시 · 수동 / 자동 · 결과 (성공 · 이미 최신 · 실패) |
| 다음 자동 가져오기 | 예정 일시 |
| `[본사 마스터 가져오기]` | LAB (Local) Admin에게 보여준다. 진행 중이면 비활성 |

| 상황 | 메시지 |
|---|---|
| 확인 창 | 본사 마스터를 가져올까요? 로컬 마스터가 본사 기준으로 바뀝니다. |
| 진행 중 | 본사 마스터를 가져오는 중입니다. (5/8 Analyte) |
| 성공 | 본사 마스터를 가져왔습니다. 추가 n · 변경 n · 미사용 n |
| 이미 최신 | 이미 최신 본사 마스터입니다. |
| 연결 실패 | 본사에 연결하지 못했습니다. 잠시 후 다시 시도해 주세요. 계속되면 운영팀에 문의해 주세요. |
| 검사 실패 | 받은 마스터에 오류가 있어 적용하지 않았습니다. 운영팀에 문의해 주세요. |
| 가져온 적 없음 | 본사 마스터를 아직 가져오지 않았습니다. |

### 3-11. 권한 · 감사 로그

| 대상 | 권한 |
|---|---|
| LAB (Local) Admin | Product 마스터 조회, `[본사 마스터 가져오기]` |

| 규칙 | 내용 |
|---|---|
| 감사 로그 | 가져오기로 마스터가 바뀌면 OPS(UPDATE)로 1행 남긴다. 수동은 실행한 계정, 자동은 SYSTEM |
| target_field | 바뀐 마스터 이름 |

## 4. HL7 격리 데이터

로컬 서버가 받은 HL7 중 결과에 반영하지 못한 데이터는 격리된다. C-Lab 어드민은 원인을 확인하고, 격리 코드에 따라 재처리하거나 처리하지 않을 데이터를 숨긴다(Display = No). 정의되지 않은 오류는 운영팀에 문의한다.

| 항목 | 내용 |
|---|---|
| 대상 | 서버 유형이 Local인 C-Lab 어드민 — LAB (Local) Admin |
| 메뉴 | HL7 격리 데이터 (신규) |
| 단위 | 목록은 데이터(HL7 1건, 약 96 well) 단위, 오류는 well 단위 |

### 4-1. 격리 코드별 사유 · 조치

표에 없는 격리 코드 · 세부 구분은 '그 외'로 보여준다. 문구는 한국어로 제공한다.

| 격리 코드 | 세부 구분 | 표시 이름 | 사유 | 조치 |
|---|---|---|---|---|
| TENANT_MISMATCH | ROOT_CLAB_MISMATCH | C-Lab 불일치 | 검사 결과를 보낸 C-Lab이 이 서버의 C-Lab(본원)과 맞지 않는다 | SG 뷰어의 C-Lab 설정을 이 서버의 C-Lab으로 고친 뒤 결과를 다시 보낸다. 이 데이터는 [숨김] |
| TENANT_MISMATCH | ROOT_CLAB_NOT_FOUND | C-Lab 불일치 | 보낸 C-Lab의 본원 정보를 찾지 못했다 | SG 뷰어의 C-Lab 설정 확인. 계속되면 운영팀 문의 |
| TENANT_MISMATCH | DEFAULT | C-Lab 불일치 | 보낸 C-Lab 정보를 확인할 수 없다 | SG 뷰어의 C-Lab 설정 확인. 계속되면 운영팀 문의 |
| MISSING_SAMPLE_ID | SAMPLE_WELL_ONLY | 검체 번호 없음 | 검체(SAMPLE) well 모두에 Sample ID가 없어 결과 전체를 반영하지 못했다. 대조군(NC · PC) well은 없어도 된다 | 검사 장비나 검체 접수 정보의 Sample ID 확인. 고쳤다면 결과를 다시 보내고 이 데이터는 [숨김] |
| MISSING_SAMPLE_ID | PRELIMINARY_ANY_WELL | 검체 번호 없음 | 예비 결과(preliminary)에 Sample ID가 없는 well이 있다. 예비 결과는 대조군 포함 모든 well에 Sample ID가 있어야 한다 | 위와 같음 |
| MISSING_ASSAY | NOT_FOUND | Assay 확인 필요 | 결과의 제품(Assay)이 Assay 마스터에 없다 | 빠진 Assay 확인 → [Assay 마스터로 이동]에서 마스터 최신화 → [재처리] |
| MISSING_ASSAY | AMBIGUOUS | Assay 확인 필요 | 제품명이 같은 Assay가 여러 개이고 Service ID로도 하나를 정하지 못했다 | Product Name · Service ID 확인 → 마스터 최신화 → [재처리]. 계속되면 운영팀 문의 |
| MISSING_ASSAY | DEFAULT | Assay 확인 필요 | 제품명과 Service ID로 Assay를 찾지 못한 well이 있다 | Product Name · Service ID 확인 → 마스터 최신화 → [재처리] |
| 그 외 | — | 기타 오류 | 정의되지 않은 오류로 결과를 반영하지 못했다 | 운영팀에 문의 |

| 코드 | 판정 기준 |
|---|---|
| MISSING_ASSAY | OBR productNm / serviceId로 assay_id 매핑 실패. well 중 assay_id가 null인 경우 |
| MISSING_SAMPLE_ID | OBR 파싱 결과 sample_id가 없거나 sample_receipt_info의 sample_id가 빈 값이라 반영할 수 없음 |

### 4-2. 재처리 · 숨김 가능 여부

| 격리 코드 | 재처리 | 숨김 |
|---|:-:|:-:|
| TENANT_MISMATCH | — | ○ |
| MISSING_SAMPLE_ID | — | ○ |
| MISSING_ASSAY | ○ | ○ |
| 그 외 | — | ○ |

### 4-3. 목록 화면

데이터 1건이 한 행이고, 오류는 대표 상태 하나로 보여준다.

| 열 | 필드 | 규칙 |
|---|---|---|
| 선택 | — | 체크박스. 머리글 체크박스는 현재 페이지 전체 선택 |
| 대표 상태 | reason | 표시 이름과 격리 코드 · 세부 구분 함께 표시 (예: Assay 확인 필요 (MISSING_ASSAY · NOT_FOUND)) |
| 사유 | — | 4-1 사유. 한 줄로 앞부분만, 넘치면 말줄임(…) |
| 원부 파일 | — | `[다운로드]`. 수신한 HL7 원부 파일을 그대로 내려받음 |
| Error Detail | error_detail | `[Error Detail]` 버튼 + 오류 well 수. 누르면 팝업 |
| 등록 일시 / 수정 일시 | reg_dt / upd_dt | |
| 등록자 / 수정자 | reg_user_id / upd_user_id | |
| Display | 신규 필드 | Yes · No. 숨긴 데이터는 No |
| 조치 | — | 4-2에 따라 `[재처리]` · `[숨김]` (`[재처리]`는 MISSING_ASSAY만) |

| 규칙 | 내용 |
|---|---|
| 정렬 | 등록 일시(reg_dt) 최신순 |
| 기본 표시 | Display = Yes인 데이터만. Display 필터(Yes · No · 전체)로 숨긴 데이터 조회 |
| 일괄 버튼 | 목록 위 `[재처리]` · `[숨김]`으로 체크한 데이터를 한 번에 처리 (4-8) |

### 4-4. Error Detail 팝업

오류를 에러 유형(격리 코드 · 세부 구분)별로 묶어 보여준다.

| 구역 | 표시 |
|---|---|
| 위 | 파일명 · 전송 시간 · 오류 well 수 / 전체 well 수 |
| 유형별 | 표시 이름 · 격리 코드 · 세부 구분 · 사유 · 조치 · 오류 well 수 |
| 오류 well 표 | Well · Sample ID + 유형별 필수 필드 |
| 아래 | `[재처리]` · `[숨김]` (목록의 조치와 같음) |

| 에러 유형 | 필수 필드 |
|---|---|
| TENANT_MISMATCH | C-Lab ID |
| MISSING_SAMPLE_ID | Sample ID |
| MISSING_ASSAY | Product Name · Service ID |
| 그 외 | — |

| 규칙 | 내용 |
|---|---|
| 필드 이름 | 내부 필드명 대신 영어 표시 이름 (productNm → Product Name, serviceId → Service ID, sample_id → Sample ID) |
| MISSING_ASSAY 묶음 | 빠진 Assay(Product Name · Service ID)를 중복 없이 보여주고 `[Assay 마스터로 이동]` 표시 → Assay 마스터 메뉴(Product > Seegene > Assay) 열기 |
| 진단 정보 없음 | 표 대신 '상세 진단 정보 없음' |

### 4-5. 숨김 (전체 격리 코드)

| 규칙 | 내용 |
|---|---|
| 삭제 | 격리 데이터는 삭제하지 않는다 |
| 숨김 | 처리하지 않을 데이터는 `[숨김]`으로 Display를 No로 바꿔 목록에서 숨긴다 |
| 확인 창 | "이 데이터를 숨길까요? 숨긴 데이터는 Display 필터에서 볼 수 있습니다." |
| 완료 안내 | "숨겼습니다." |
| 조회 | Display 필터(No · 전체) |

### 4-6. 재처리 (MISSING_ASSAY)

확인 창: "Assay 마스터를 최신화한 뒤 재처리해야 반영됩니다. 재처리할까요?" 확인하면 저장된 HL7을 처음부터 다시 처리하고, 끝날 때까지 그 데이터의 `[재처리]`를 막는다.

| 결과 | 처리 | 안내 |
|---|---|---|
| 성공 | 결과를 반영하고 목록에서 뺀다 | 재처리했습니다. 결과가 반영되었습니다. |
| 다시 격리 | 목록에 그대로 두고 대표 상태 · 오류 well을 새 결과로 바꾼다 | 아직 반영하지 못했습니다. 바뀐 안내를 확인해 주세요. |
| 처리 중 오류 | 목록에 그대로 둔다 | 재처리하지 못했습니다. 운영팀에 문의해 주세요. |

성공이 아니면 수정 일시 · 수정자를 바꾼다.

### 4-7. 격리 처리 흐름

```text
 ([HL7 수신])
       ▼
 [로컬 서버 처리]
       │
 ◇ 결과 반영 가능? ◇ ── 예 ──▶ ([결과 반영])
       │ 아니오
       ▼
 [격리 데이터로 저장 · 격리 코드 부여 · Display = Yes]
       ▼
 [C-Lab 어드민 「HL7 격리 데이터」 목록에 표시]
       ▼
 [Error Detail에서 원인 확인]
       │
 ◇ 격리 코드가 MISSING_ASSAY 인가? ◇
   │ 예                                 │ 아니오
   ▼                                    ▼
 [Assay 마스터로 이동]               [조치 안내대로 원인 해결
   ▼                                   (SG 뷰어 설정 · Sample ID 확인)]
 [본사 마스터 가져오기]                   │
   ▼                                    ◇ 결과를 다시 보냈거나 처리 안 함? ◇
 [재처리]                                  ▼
   │                                     [숨김 → Display = No]
 ◇ 결과 ◇
  ├ 성공 ─────▶ ([목록에서 제외 · 결과 반영])
  ├ 다시 격리 ─▶ ([목록 유지 · 대표 상태 갱신])
  └ 처리 중 오류 ▶ ([목록 유지 · 운영팀 문의])
```

### 4-8. 일괄 처리

| 규칙 | 내용 |
|---|---|
| 선택 범위 | 현재 페이지 안에서만 체크한다 |
| 버튼 활성 | 1건 이상 체크하면 `[재처리]` · `[숨김]` 활성 |
| 일괄 재처리 | 체크한 건 중 MISSING_ASSAY만 처리. 확인 창: "체크한 n건 중 m건을 재처리할까요? 재처리 대상이 아닌 k건은 제외합니다." (제외 건이 없으면 뒤 문장 생략) |
| 일괄 숨김 | 체크한 건을 모두 숨김. 확인 창: "체크한 n건을 숨길까요? 숨긴 데이터는 Display 필터에서 볼 수 있습니다." |
| 처리 방식 | 건마다 따로 처리. 건별 결과는 4-5 · 4-6과 같고, 끝나면 결과를 모아 보여준다 (예: "재처리 m건: 반영 a건 · 다시 격리 b건 · 오류 c건", "n건을 숨겼습니다.") |
| 재처리 중인 건 | 체크할 수 없다 |

### 4-9. 권한 · 감사 로그

| 규칙 | 내용 |
|---|---|
| 권한 | LAB (Local) Admin에 'HL7 격리 데이터' 메뉴와 `[재처리]` · `[숨김]` · `[다운로드]` 권한 |
| 감사 로그 | 재처리 · 숨김 모두 OPS로 적재. UPDATE이고 재처리 target_field = 처리 상태, 숨김 target_field = Display |
| 건수 | 격리 데이터 1건당 1행 (일괄 처리도 건마다 1행) |
| 화면 표시 | OPS는 Audit Log 화면에 표시하지 않는다 (적재만) |

### 4-10. Assay 마스터 연계 순서

MISSING_ASSAY로 격리된 데이터는 본사 마스터를 가져온 뒤 재처리한다.

| 순서 | 화면 | 동작 |
|:-:|---|---|
| 1 | HL7 격리 데이터 > Error Detail | `[Assay 마스터로 이동]` |
| 2 | Product > Seegene > Assay | `[본사 마스터 가져오기]` |
| 3 | HL7 격리 데이터 | `[재처리]` |

| 규칙 | 내용 |
|---|---|
| 자동 재처리 없음 | 가져오기는 격리 데이터를 자동으로 재처리하지 않는다 |
| 다시 MISSING_ASSAY | 본사 마스터에 없는 Assay다. 운영팀에 문의한다 |
| 매칭 기준 | HL7의 Product Name(productNm) · Service ID(serviceId)로 Assay를 찾는다 |

## 5. 종합검사 구성

검사실 사용자는 C-Lab 내 데이터를 기반으로 종합검사 Report를 생성하기 위해 검사실별 종합검사 구성을 직접 설정할 수 있어야 한다. C-Lab 구성은 Cloud 기반 종합검사 Report 구성과 별도로 관리하며 C-Lab에서 생성되는 Report에만 적용한다.

### 5-1. 기본 구성 규칙

| 규칙 | 내용 |
|---|---|
| 종합검사 수 | 1개 이상 설정 가능 |
| 검사 세트 수 | 종합검사당 정확히 2개 (Test Set #1, #2) |
| Analyte Type | 각 검사 세트에 Report에 포함할 Analyte Type 설정 |
| Assay | 각 Analyte Type에 1개 이상 선택 |
| 구성 완료 | 2개 검사 세트의 설정이 모두 완료되어야 구성 완료로 인정 |
| 검사 세트 순서 | 사용자가 설정 가능. 설정 순서가 C-Lab 종합검사 Report의 표시 순서에 반영된다 |
| Cloud 구성과의 관계 | Cloud 기반 종합검사 구성과 별도 관리 |

```text
종합검사
├── 검사 세트 #1 ── Analyte Type ── Assay 1개 이상
└── 검사 세트 #2 ── Analyte Type ── Assay 1개 이상
```

### 5-2. 종합검사별 Analyte Type 규칙

| 종합검사 | 사용 가능한 Analyte Type | 검사 세트당 Analyte Type 수 | 구성 예시 |
|---|---|:-:|---|
| ABI (Airway and Bronchopulmonary Infections) | Virus · Bacteria | 1개 | #1 Virus / #2 Bacteria, 또는 순서 반대 |
| GTI (Gastrointestinal Tract Infections) | Virus · Bacteria · Parasite | 1~2개 | #1 Virus / #2 Bacteria · #1 Virus + Bacteria / #2 Parasite · #1 Bacteria / #2 Parasite + Virus |
| RTI (Reproductive Tract Infections) | STI · HPV | 1개 | #1 STI / #2 HPV, 순서 변경 가능 |

### 5-3. 종합검사별 Analyte Type 및 Assay 구성

| 종합검사 | Analyte Type | Assay |
|---|---|---|
| ABI | VIRUS | Allplex™ Respiratory Panel 1 · 1A · 2 · 3, Allplex™ RV Essential Assay, Allplex™ RV Master Assay, Allplex™ SARS-CoV-2 Assay, Allplex™ SARS-CoV-2/FluA/FluB/RSV Assay, Novaplex™ Respiratory Panel 1 · 1A · 2 · 3, Novaplex™ RV Essential Assay, Novaplex™ RV Master Assay, Novaplex™ SARS-CoV-2/FluA/FluB/RSV Assay |
| ABI | BACTERIA | Allplex™ Respiratory Panel 4, Allplex™ PneumoBacter Assay, Anyplex™ II RB5 Detection, Novaplex™ PneumoBacter Assay |
| GTI | VIRUS | Allplex™ GI-Virus Assay, Allplex™ GI-Virus plus Assay, Novaplex™ GI-Virus Assay |
| GTI | BACTERIA | Allplex™ GI-Bacteria(I) Assay, Allplex™ GI-Bacteria(I) plus Assay, Allplex™ GI-Bacteria(II) Assay, Allplex™ GI-EB Screening Assay, Novaplex™ GI-EB screening Assay, Novaplex™ GI-Bacteria(II) Assay, Novaplex™ GI-Bacteria(I) Assay |
| GTI | PARASITE | Allplex™ GI-Parasite Assay, Allplex™ GI-Helminth(I) Assay, Novaplex™ GI-Helminth(I) Assay, Novaplex™ GI-Parasite Assay |
| RTI | STI | Allplex™ STI Essential Assay, Allplex™ STI Essential Assay Q(MH,UU), Allplex™ Genital ulcer Assay, Allplex™ Candidiasis Assay, Allplex™ CT/NG/MG/TV Assay, Anyplex™ II STI-7e Detection, Anyplex™ II STI-12 Detection, Novaplex™ CT/NG/MG/TV Assay, Novaplex™ STI Essential Assay, Novaplex™ Genital ulcer Assay, Novaplex™ Candidiasis Assay |
| RTI | HPV | Allplex™ HPV HR Detection, Allplex™ HPV28 Detection, Anyplex™ II HPV HR Detection, Anyplex™ II HPV28 Detection, Novaplex™ HPV28 Detection, Novaplex™ HPV HR Detection, Novaplex™ II HPV HR Detection, Novaplex™ II HPV28 Detection |

### 5-4. 구성 완료 조건 (상태값)

모든 조건을 충족한 경우에만 구성 완료로 처리한다.

| # | 조건 |
|:-:|---|
| 1 | 검사 세트 #1과 #2가 모두 설정되어 있다 |
| 2 | 각 검사 세트에 허용된 Analyte Type이 설정되어 있다 |
| 3 | 설정된 각 Analyte Type에 최소 1개의 Assay가 선택되어 있다 |
| 4 | GTI는 하나의 검사 세트에 최대 2개의 Analyte Type |

| 종합검사 상태 | 조건 | Report 생성 |
|---|---|---|
| 구성 완료 | 위 4개 조건 충족 | 사용 가능 |
| 구성 미완료 | 한 가지라도 미충족 | 사용할 수 없다 |

### 5-5. 구성 흐름

```text
 ([종합검사 구성 시작: ABI · GTI · RTI 선택])
        ▼
 [검사 세트 #1 설정: Analyte Type 선택]
        ▼
 [Analyte Type별 Assay 1개 이상 선택]
        ▼
 [검사 세트 #2 설정: Analyte Type 선택 → Assay 1개 이상]
        ▼
 [검사 세트 순서 설정 (Report 표시 순서)]
        ▼
 ◇ 5-4 조건 4가지 모두 충족? ◇
   │ 예                      │ 아니오
   ▼                         ▼
 ([구성 완료                 ([구성 미완료
   → C-Lab Report 생성 가능])    → Report 생성 불가])
```

## 6. 메뉴 변경

구분 — 유지: 클라우드와 동일 · 변경: 로컬 환경에 맞게 변경 · 신규: 로컬 전용 기능. Basic = 로컬 Basic에서 제공 여부(O/X).

| 메뉴 | 하위 메뉴 | 기능 | Basic | 상세 변경 사항 |
|---|---|---|:-:|---|
| 로그인 | 로그인 기능 | | O | 2차 인증 제거 |
| 로그인 | 아이디 찾기 | | X | C-Lab 어드민에게 문의하라는 문구 제공 |
| Labs | 본원/분원 리스트 | | O | |
| Labs | Lab Info | C-Lab 등록 정보 제공 | O | 설정 추가 — Local / Cloud 여부 |
| Labs | IP Access Control | 검사실 사이트 IP 접근 제어 | X | |
| Labs | Hospitals | C-Lab의 고객 병원 등록 | X | LIS 연동으로 병원 받는 경우는 TBD |
| Labs | Users | 검사실 직원 등록 / 관리 | O | Service Access — Statistical Report Viewer만 노출 |
| Labs | Invitation | 임상의 초대 | X | 어드민이 회원 가입 |
| Labs | Relationship Manager | 영업 담당 관리 | X | 어드민이 회원 가입 |
| Labs | Relay Server Info | 릴레이 서버 정보 입력 · 설정 | O | 로컬용 릴레이 서버에 필요한 정보 확인 · 변경 |
| Labs | Config | 설정 관리 | X | 메뉴 제외 및 설정 후 로컬 반입 — DB 업데이트 가능 여부 확인 |
| Lab Setting | Analyte Symptom Management | 증상 관리 | X | |
| Lab Setting | Data Criteria | 임상의 IP 변경 가능 횟수 제어 | X | |
| Lab Setting | Inquiries | 검사실/임상의 질의 응답 | X | |
| Lab Setting | Admin Log | 어드민 작업 로그 | O | |
| Admin | Account | 어드민 유저 등록 · 관리 | O | |
| Admin | IP Access Control | 어드민 서비스 IP 접근 제어 | X | 제외 |
| Master Data | Corporate | 법인 마스터 | X | |
| Master Data | Hospitals | 전체 병원 마스터 | X | |
| Master Data | Common Code | 공통 코드 | X | 데이터는 본사 마스터 가져오기로 반영 |
| Master Data | Role & Permission | Role과 접근제어 관리 | X | |
| Product | Analyte · Assay · Disease · Regulatory · Upstream Analyte | 각 마스터 관리 | O | 조회 전용. 본사 마스터 가져오기로만 반영, 직접 입력 제외 |
| Product | Invitation | 어드민 유저 초대 | X | |
| Product | Notification | | X | 각 서비스에서 공지 노출 개발 |
| Product | FAQ | | (원본 미기재) | |
| (신규) | HL7 격리 데이터 | HL7 격리 · 재처리 · 숨김 | — | 로컬 전용 신규 메뉴 (4장) |

### 6-1. Basic / Premium 기능 구분

| 기능 | Basic | Premium |
|---|:-:|:-:|
| Hospitals | X | O |
| Notification | X | O |
| FAQ | X | O |

## 7. 미결사항

| 문서 | # | 항목 | 내용 |
|---|:-:|---|---|
| Product 마스터 | 1 | 연결 경로 · 인증 | 폐쇄망 로컬 서버가 본사 API에 접속하는 경로와 인증 방식 |
| Product 마스터 | 2 | 로컬 노출 조정 | 본사 마스터 전체를 보여줄지, C-Lab 국가에서 판매하는 Assay와 RUO만 보여줄지 |
| Product 마스터 | 3 | HL7 매칭 항목 | Product Name · Service ID가 본사 마스터에 모두 들어 있는지, 같은 Product Name을 Service ID로 구분할 수 있는지 |
| HL7 격리 | 1 | 사유가 섞인 데이터 | 한 데이터에 격리 코드가 다른 well이 같이 있을 때(예: MISSING_ASSAY + MISSING_SAMPLE_ID)의 대표 상태와 조치 |
| HL7 격리 | 2 | 보관 기간 | 격리 데이터(숨긴 데이터 포함)를 언제까지 보관할지 |
| HL7 격리 | 3 | 숨김 되돌리기 | 숨긴 데이터를 다시 Display = Yes로 바꾸거나 재처리할 수 있게 할지 |
| HL7 격리 | 4 | 원부 파일의 개인정보 | 원부 파일에 환자 정보가 있으면 다운로드를 개인정보 원문 다운로드(보안 감사 로그 PII)로 볼지 |
| 로컬 서버 PRD | — | Hospitals LIS 연동 | LIS 연동으로 병원을 받는 경우는 TBD |
