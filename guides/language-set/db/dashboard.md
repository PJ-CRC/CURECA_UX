# 언어셋 · Dashboard

> 원본입니다. 고치는 법과 엑셀로 뽑는 법은 `language-set/README.md`. 항목을 더하거나 바꾸거나 지우면 `language-set/db/history.md` "항목 이력"에 한 줄을 더합니다.

- 언어셋 v0.05 목록 시트에서 옮김 (2026-11-17), v0.06 반영 (2026-11-19). 행 54개, 사용 45개 · 삭제 9개

| Language ID | 재사용 | 상태 | 검증 상태 | 플랫폼 | Type | English | Korean | German | Portuguese | Spanish | Italian | French | 참조 시트 | 비고 | Menu | CID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LID-DAS-001 |  | 사용 | 법인 검토 완료 | T/L | title | Today’s Orders |  | Heutige Aufträge | Pedidos de Hoje | Solicitudes de Hoy | Ordini di Oggi | Commandes du jour |  | 영역 타이틀 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-002 |  | 사용 | 법인 검토 완료 | T/L | txt | Orders |  | Aufträge | Pedidos | Solicitudes | Ordini | Commandes |  | 접수된 검사 주문 총합 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-014 |  | 사용 | AI 번역 | T/L | txt | Pending |  | Ausstehend | Pendente | Pendiente | In Attesa | En attente | LID-COM-SCD-009 | 주문 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-015 |  | 사용 | AI 번역 | T/L | txt | In Progress |  | In Bearbeitung | Em Andamento | En Curso | In Corso | En cours | LID-COM-SCD-010 | 주문 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-016 |  | 사용 | AI 번역 | T/L | txt | Completed |  | Abgeschlossen | Concluído | Completado | Completato | Terminé | LID-COM-SCD-011 | 주문 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-TMG-022 | ref | 사용 | 법인 검토 완료 | T/L | title | Test Status |  | Teststatus | Estado do Teste | Estado de la Prueba | Stato Test | Statut du test | LID-COM-MEN-011 | 영역 타이틀 | Dashboard | TI-DAS / LI-DAS |
| LID-TMG-023 | ref | 사용 | 법인 검토 완료 | T/L | txt | Total Batches |  | Batches Gesamt | Total de Batches | Total de Batches | Totale Batch | Total des batchs |  | 전체 Batch 수 | Dashboard | TI-DAS / LI-DAS |
| LID-TMG-024 | ref | 사용 | 법인 검토 완료 | T/L | txt | Remaining Time |  | Verbleibende Zeit | Tempo Restante | Tiempo Restante | Tempo Rimanente | Temps restant |  | 잔여 검사 시간 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-003 |  | 삭제 | 법인 검토 완료 | T/L | txt | Elapsed Time |  | Verstrichene Zeit | Tempo Decorrido | Tiempo Transcurrido | Tempo Trascorso | Temps écoulé |  | 같은 문구 LID-TMG-026 과 합침, 아래 ref 행 | Dashboard | TI-DAS / LI-DAS |
| LID-TMG-026 | ref | 사용 | AI 번역 | T/L | txt | Elapsed |  | Verstrichen | Decorrido | Transcurrido | Trascorso | Écoulé |  |  | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-004 |  | 삭제 | 법인 검토 완료 | T/L | txt | Estimated Total Time |  | Geschätzte Gesamtzeit | Tempo Total Estimado | Tiempo Total Estimado | Tempo Totale Stimato | Temps total estimé |  | 같은 문구 LID-TMG-027 과 합침, 아래 ref 행 | Dashboard | TI-DAS / LI-DAS |
| LID-TMG-027 | ref | 사용 | AI 번역 | T/L | txt | Estimated Total |  | Geschätzt gesamt | Total Estimado | Total Estimado | Totale Stimato | Total estimé |  |  | Dashboard | TI-DAS / LI-DAS |
| LID-TMG-028 | ref | 사용 | 법인 검토 완료 | T/L | txt | 00h 00m |  | 00Std 00Min | 00h 00m | 00h 00m | 00h 00m | 00h 00m |  | 소요 시간 (숫자·단위 붙여 씀) | Dashboard | TI-DAS / LI-DAS |
| LID-TMG-029 | ref | 삭제 | 법인 검토 완료 | T/L | txt | Processed/Total |  | Verarbeitet/Gesamt | Processado/Total | Procesado/Total | Elaborato/Totale | Traité/Total |  | Processed, Total로 분리 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-017 |  | 사용 | AI 번역 | T/L | txt | Processed |  | Verarbeitet | Processados | Procesados | Elaborati | Traités |  | 검사 종료 항목 수량 | Dashboard | TI-DAS / LI-DAS |
| LID-SPT-023 | ref | 사용 | AI 번역 | T/L | txt | Total |  | Gesamt | Total | Total | Totale | Total |  | 검사 대상 항목 수량 | Dashboard | TI-DAS / LI-DAS |
| LID-RUN-024 | ref | 사용 | 법인 검토 완료 | T/L | txt | STAT |  | - | - | - | - | - |  | 응급 검체 개수 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-018 |  | 사용 | AI 번역 | T/L | txt | Failed |  | Fehlgeschlagen | Falhou | Fallido | Non Riuscito | Échoué | LID-COM-SCD-004 | 검체 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-019 |  | 사용 | AI 번역 | T/L | txt | Not Tested |  | Nicht Getestet | Não Testado | No Analizado | Non Testato | Non testé | LID-COM-SCD-006 | 검체 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-SPT-015 | ref | 사용 | 법인 검토 완료 | T/L | btn | More |  | Mehr | Mais | Más | Altro | Plus | LID-COM-BTN-018 | 더보기 버튼 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-008 |  | 사용 | 법인 검토 완료 | T/L | title | Instrument Status |  | Gerätestatus | Estado do Instrumento | Estado del Instrumento | Stato Strumento | État de l'instrument |  | 영역 타이틀 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-020 |  | 사용 | AI 번역 | T/L | txt | Not Initialized |  | Nicht initialisiert | Não Inicializado | No Inicializado | Non Inizializzato | Non initialisé | LID-COM-SCD-012 | CURECA 구동 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-021 |  | 사용 | AI 번역 | T/L | txt | Initializing |  | Initialisierung | Inicializando | Inicializando | Inizializzazione | Initialisation | LID-COM-SCD-013 | CURECA 구동 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-022 |  | 사용 | AI 번역 | T/L | txt | Ready |  | Bereit | Disponivel | Listo | Pronto | Prêt | LID-COM-SCD-014 | CURECA 구동 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-023 |  | 사용 | AI 번역 | T/L | txt | Running |  | Läuft | Em Execução | En Ejecución | In Esecuzione | En cours | LID-COM-SCD-015 | CURECA 구동 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-024 |  | 사용 | AI 번역 | T/L | txt | Stopping |  | Stoppt | Parando | Deteniéndose | Arresto in Corso | Arrêt en cours | LID-COM-SCD-018 | CURECA 구동 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-025 |  | 사용 | AI 번역 | T/L | txt | Partial Running |  | Teilweises Laufen | Execução Parcial | Ejecución Parcial | Esecuzione Parziale | Exécution partielle | LID-COM-SCD-019 | CURECA 구동 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-026 |  | 사용 | AI 번역 | T/L | txt | Paused |  | Pausiert | Em Pausa | En Pausa | In Pausa | En pause | LID-COM-SCD-016 | CURECA 구동 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-EVT-037 | ref | 사용 | AI 번역 | T/L | txt | Error |  | Fehler | Erro | Error | Errore | Erreur | LID-COM-SCD-020 | CURECA 구동 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-006 |  | 사용 | 법인 검토 완료 | L | btn | Initialize |  | Initialisieren | Inicializar | Inicializar | Inizializza | Initialiser |  | 장비 초기화 버튼 | Dashboard | LI-DAS |
| LID-DAS-007 |  | 사용 | 법인 검토 완료 | L | btn | Stop |  | Stopp | Parar | Detener | Arresta | Arrêter |  | 구동 중단 버튼 | Dashboard | LI-DAS |
| LID-INS-018 | ref | 사용 | AI 번역 | T/L | txt | Event |  | Ereignis | Evento | Evento | Evento | Événement |  | 이벤트 아이콘 | Dashboard | TI-DAS / LI-DAS |
| LID-EVT-005 | ref | 사용 | AI 번역 | T/L | txt | Instrument |  | Instrument | Instrumento | Instrumento | Strumento | Instrument | LID-COM-MEN-016 | 연결 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-INS-007 | ref | 삭제 | 법인 검토 완료 | L | btn | Door Control |  | Tür-Steuerung | Controlo da Porta | Control de Puerta | Controllo Door | Contrôle de la door |  | Door로 변경 | Dashboard | LI-DAS |
| LID-INS-011 | ref | 사용 | AI 번역 | L | btn | Door |  | - | - | - | - | - | LID-COM-TRM-015 | Door Control 팝업 버튼 | Dashboard | LI-DAS |
| LID-EVT-042 | ref | 사용 | AI 번역 | T/L | txt | Open |  | Offen | Aberto | Abierto | Aperto | Ouvert | LID-COM-SCD-027 | 문 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-EVT-043 | ref | 사용 | AI 번역 | T/L | txt | Closed |  | Geschlossen | Fechado | Cerrado | Chiuso | Fermé | LID-COM-SCD-028 | 문 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-IVT-005 | ref | 삭제 | 법인 검토 완료 | T/L | title | Requirements for Run Completion |  | Anforderungen für den Laufabschluss | Requisitos para Conclusão da corrida | Requisitos para Completar el Run | Requisiti per il Completamento del Run | Exigences pour terminer le run |  | Inventory Status로 변경 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-027 |  | 사용 | AI 번역 | T/L | title | Inventory Status |  | Bestandsstatus | Estado do Inventário | Estado del Inventario | Stato Inventario | État de l'inventaire |  | 영역 타이틀 | Dashboard | TI-DAS / LI-DAS |
| LID-RUN-031 | ref | 사용 | 법인 검토 완료 | T/L | txt | Required Qty |  | Erforderliche Menge | Qtd. Necessária | Cant. Requerida | Qtà Richiesta | Qté requise |  | 필요 수량 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-028 |  | 사용 | AI 번역 | T/L | txt | Insufficient |  | Unzureichend | Insuficiente | Insuficiente | Insufficiente | Insuffisant | LID-COM-SCD-043 | 재고 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-029 |  | 사용 | AI 번역 | T/L | txt | Low |  | Niedrig | Baixo | Bajo | Basso | Faible | LID-COM-SCD-045 | 재고 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-009 |  | 사용 | AI 번역 | T/L | txt | Shown only if system running or Inbound Trolley docked |  | Nur angezeigt, wenn das System läuft oder der Inbound Trolley angedockt ist | Apresentado apenas se o sistema estiver em execução ou o Inbound Trolley estiver acoplado | Se muestra solo si el sistema está en ejecución o el Inbound Trolley está acoplado | Visualizzato solo se il sistema è in esecuzione o l'Inbound Trolley è agganciato | Affiché uniquement si le système fonctionne ou si l'Inbound Trolley est arrimé |  | 재고 영역 미노출 안내 | Dashboard | TI-DAS / LI-DAS |
| LID-IVT-010 | ref | 사용 | 법인 검토 완료 | T/L | title | Waste Bin/Bottle Status |  | Waste Bin/Bottle-Status | Estado do Waste Bin/Bottle | Estado del Waste Bin/Bottle | Stato Waste Bin/Bottle | État du Waste Bin/Bottle |  | 영역 타이틀 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-030 |  | 사용 | AI 번역 | T/L | txt | Full |  | Voll | Cheio | Lleno | Pieno | Plein | LID-COM-SCD-035 | 폐기물 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-031 |  | 사용 | AI 번역 | T/L | txt | Almost Full |  | Fast voll | Quase Cheio | Casi Lleno | Quasi Pieno | Presque plein | LID-COM-SCD-036 | 폐기물 상태 | Dashboard | TI-DAS / LI-DAS |
| LID-IVT-009 | ref | 사용 | 법인 검토 완료 | T/L | txt | No actions required |  | Keine Maßnahmen erforderlich | Nenhuma ação necessária | No se requiere ninguna acción | Nessuna azione richiesta | Aucune action requise |  | 표시 항목 없음 안내 | Dashboard | TI-DAS / LI-DAS |
| LID-DAS-010 |  | 삭제 | 법인 검토 완료 | L | alt-txt | Initialization in Progress |  | Initialisierung läuft | Inicialização em Andamento | Inicialización en Curso | Inizializzazione in Corso | Initialisation en cours |  | 초기화 팝업 메인 타이틀 | Dashboard | LI-DAS |
| LID-DAS-011 |  | 삭제 | 법인 검토 완료 | L | alt-txt | Please wait while the system is being initialized. |  | Bitte warten, während das System initialisiert wird. | Aguarde enquanto o sistema é inicializado. | Espere mientras se inicializa el sistema. | Attendere durante l'inizializzazione del sistema. | Veuillez patienter pendant l'initialisation du système. |  | 초기화 팝업 서브 타이틀 | Dashboard | LI-DAS |
| LID-DAS-012 |  | 삭제 | 법인 검토 완료 | L | alt-txt | Run(Test) is being stopped |  | Run(Test) wird gestoppt | Run(Test) está sendo interrompido | Run(Prueba) se está deteniendo | Run(Test) in fase di arresto | Le Run (Test) est en cours d'arrêt |  | 구동 중단 팝업 메인 타이틀 | Dashboard | LI-DAS |
| LID-DAS-013 |  | 삭제 | 법인 검토 완료 | L | alt-txt | System is stopping. Please wait. |  | System wird gestoppt. Bitte warten. | O sistema está a parar. Aguarde. | El sistema se está deteniendo. Espere. | Il sistema si sta arrestando. Attendere. | Le système est en cours d'arrêt. Veuillez patienter. |  | 구동 중단 팝업 서브 타이틀 | Dashboard | LI-DAS |
| LID-LOG-028 | ref | 사용 | AI 번역 | T/L | btn | Shut Down |  | Herunterfahren | Encerrar | Apagar | Spegni | Éteindre | LID-COM-MEN-043 | LNB 시스템 종료 버튼 | Dashboard | TI-DAS / LI-DAS |
| LID-STN-076 | ref | 사용 | AI 번역 | T/L | txt | Admin |  | - | - | - | - | - | LID-COM-SCD-050 | LNB 권한 표시 | Dashboard | TI-DAS / LI-DAS |
| LID-STN-075 | ref | 사용 | AI 번역 | T/L | txt | User |  | Benutzer | Utilizador | Usuario | Utente | Utilisateur | LID-COM-SCD-051 | LNB 권한 표시 | Dashboard | TI-DAS / LI-DAS |

## 변경 이력

| 날짜 | 바뀐 것 | 근거 |
| --- | --- | --- |
| 2026-11-17 | 언어셋 v0.05 엑셀 목록 시트에서 옮겨 원본으로 만듦 | 사용자 요청 (서보경) |
| 2026-11-19 | 언어셋 v0.06 반영 (`db/history.md` 항목 이력 v0.06 줄) | 언어셋 v0.06 (하승현), 사용자 요청 (서보경) |
