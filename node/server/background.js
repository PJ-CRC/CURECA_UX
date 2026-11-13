// 백그라운드 일(3단계) — 기존 guide_server.ps1의 켤 때 할 일 · 1초마다 확인과 같게
//  켤 때: 새 설치 표시(예전 작업 링크 비우기) · 이력 채우기(Hist-Backfill) · 작업 페이지 맞추기(Fix-EditablePages) · 윈도우 바로가기(Ensure-Shortcuts)
//  1초마다: 깃 동기화 반복 프로세스 띄우기(죽으면 30초 뒤 다시, Sync-Tick) · 감시 자동 시작(켠 지 5초, 그 뒤 2분마다, Auto-Watch) · 탭이 모두 닫히면 끄기(Idle-Check)
//  --readonly면 아무것도 하지 않는다
'use strict';
const fs = require('fs');
const path = require('path');
const { spawn, spawnSync } = require('child_process');
const core = require('./core');
const { C } = core;

module.exports = function start(h) {
  if (C.readonly) return;
  const log = (s) => console.log(`  [${core.now().replace('T', ' ').slice(0, 19)}] ${s}`);
  const errLog = (where, e) => console.error(`  [${core.now().replace('T', ' ').slice(0, 19)}] 오류(${where}): ${e && e.message ? e.message : e}`);

  // ── 새로 설치한 폴더(처음 켬 · projects 없음): PC에 남은 시작 안내의 예전 작업 링크 · 완료 표시를 비운다(이름 · 로그인 · 체크는 그대로) ──
  try {
    const flag = path.join(C.root, 'workbench', '.installed');
    if (!core.exists(flag)) {
      if (!core.exists(C.projRoot) && core.exists(C.setupFile)) {
        const s = core.readSetup();
        if (s.figmaUrl) { s.figmaUrl = ''; s.done = false; s.updatedAt = core.now(); core.writeJson(C.setupFile, s); log('새 설치: 예전 작업 링크를 비웠습니다. 시작 안내 3단계에서 작업할 Figma 링크를 넣으세요.'); }
      }
      core.writeText(flag, new Date().toISOString());
    }
  } catch (e) { errLog('새 설치 확인', e); }

  // ── 이력 채우기(Hist-Backfill): 이 PC의 요청 중 이력이 없거나 상태 · 시각이 다른 것을 다시 남긴다 ──
  try {
    const r = core.readJson(C.reqFile);
    for (const i of core.arr(r && r.items).filter(Boolean)) {
      const e = core.readJson(path.join(C.histEntries, `${C.pcSlug}_${i.id}.json`));
      if (!e || e.status !== i.status || e.at !== i.updatedAt || (i.createdAt && !e.createdAt && i.status !== '완료')) h.histFromRequest(i);
    }
  } catch (e) { errLog('이력 채우기', e); }
  // ── 작업 페이지 맞추기(Fix-EditablePages): 프로젝트마다 작업 링크로 수정 가능 페이지를 다시 정한다 ──
  try { for (const d of fs.readdirSync(C.projRoot, { withFileTypes: true })) { if (!d.isDirectory()) continue; const p = h.readProj(d.name); if (p && p.link) h.setEditablePage(d.name, p.link); } } catch (e) {}

  // ── 윈도우 바로가기(Ensure-Shortcuts): 설치 폴더 · 바탕 화면에 아이콘 붙은 「Figma AI Run」(누르면 Figma AI Run.bat) ──
  //  시험용으로 띄운 서버(환경 변수 WB_NO_SHORTCUT=1)는 건드리지 않는다 — 바탕 화면 바로가기가 시험 폴더를 가리키게 바뀌던 일(2026-11-11)
  if (process.platform === 'win32' && process.env.WB_NO_SHORTCUT !== '1') {
    const bat = path.join(C.root, 'Figma AI Run.bat'), ico = path.join(C.root, 'tools', 'app_icon', 'FigmaAIRun.ico');
    if (core.exists(bat) && core.exists(ico)) {
      const ps = `$sh = New-Object -ComObject WScript.Shell; $places = @($env:WB_ROOT); try { $d = [Environment]::GetFolderPath('Desktop'); if ($d) { $places += $d } } catch {}
foreach ($dir in $places) { $lnk = Join-Path $dir 'Figma AI Run.lnk'; try { if (Test-Path $lnk) { $o = $sh.CreateShortcut($lnk); if ($o.TargetPath -eq $env:WB_BAT -and $o.IconLocation -like ($env:WB_ICO + '*')) { continue } }
  $s = $sh.CreateShortcut($lnk); $s.TargetPath = $env:WB_BAT; $s.WorkingDirectory = $env:WB_ROOT; $s.IconLocation = $env:WB_ICO + ',0'; $s.WindowStyle = 7; $s.Description = 'UX AI TEST Workbench 실행'; $s.Save(); Write-Output "바로가기를 만들었습니다: $lnk" } catch { Write-Output "바로가기를 만들지 못했습니다($lnk): $($_.Exception.Message)" } }`;
      try { const r = spawnSync('powershell', ['-NoProfile', '-NonInteractive', '-Command', ps], { encoding: 'utf8', timeout: 30000, windowsHide: true, env: Object.assign({}, process.env, { WB_ROOT: C.root, WB_BAT: bat, WB_ICO: ico }) });
        for (const l of String(r.stdout || '').split(/\r?\n/).filter(Boolean)) log(l); } catch (e) { errLog('바로가기', e); }
    }
  }

  // ── 깃 동기화(Sync-Tick): history_sync 반복 프로세스(5초마다 확인)를 띄운다. 죽으면 30초 뒤 다시 ──
  let syncProc = null, syncLast = 0;
  function syncTick() {
    // 이 PC만 동기화를 잠시 끔(workbench/.history_sync_off): 새 규칙 구조를 이 PC에서만 시험할 때(2026-11-12). 띄우지 않고, 돌던 것은 끈다
    if (core.exists(path.join(C.root, 'workbench', '.history_sync_off'))) { if (syncProc && syncProc.exitCode == null) { try { syncProc.kill(); } catch (e) {} } return; }
    if ((!syncProc || syncProc.exitCode != null || syncProc.signalCode) && Date.now() - syncLast >= 30000) {
      syncLast = Date.now();
      const env = Object.assign({}, process.env, { WB_USER: String(core.readSetup().user || '') });   // 깃 사용자 설정이 없는 PC는 작업자 이름으로 커밋
      try {
        syncProc = C.isMac ? spawn('/bin/bash', [path.join(C.root, 'workbench', 'history_sync.sh'), '--loop', String(process.pid)], { env, stdio: 'ignore', detached: true })
          : spawn('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(C.root, 'workbench', 'history_sync.ps1'), '-Loop', '-ServerPid', String(process.pid)], { env, stdio: 'ignore', windowsHide: true });   // (윈도우는 detached로 띄우면 PowerShell이 바로 끝난다)
        syncProc.on('error', () => {}); syncProc.unref();
      } catch (e) { syncProc = null; }
    }
  }

  // ── 감시 자동 시작(Auto-Watch): 켠 지 5초 뒤, 그 뒤 2분마다. 사용자가 끈 것 · 중지 신호 · 대화형 감시(60초 안)는 건너뛴다 ──
  let watchAt = Date.now() + 5000, watchFirst = true;
  function autoWatch(first) {
    const s = core.readSetup(); if (s.autoWatch === false) return;
    const a = h.agentInfo(); if (a.alive) return;
    if (!first && (a.status === 'stopped' || a.stopping)) return;
    if (!first && core.exists(path.join(C.root, 'workbench', '.agent_stop'))) return;
    if (!h.findClaudeCode()) return;
    const hb = core.readJson(path.join(C.root, 'workbench', '.watcher.json')); const age = hb && hb.at ? (Date.now() - Date.parse(hb.at)) / 1000 : null;
    if (age != null && age < 60) return;
    try { h.startAgent(); log('요청 감시를 백그라운드로 시작했습니다(창 없음). 상태는 시작 안내 5단계(CLI)에서 봅니다.'); } catch (e) { log('백그라운드 감시 시작 못 함: ' + e.message); }
  }

  // ── 탭이 모두 닫히면 끄기(Idle-Check): 20초마다 알리던 탭이 150초 동안 소식이 없으면 닫힌 것. 마지막이 닫히고 3초 뒤, 감시가 동작 중이면 끄지 않는다 ──
  function idleCheck() {
    for (const k of Object.keys(C.pages || {})) if (Date.now() - C.pages[k] > 150000) delete C.pages[k];
    if (Object.keys(C.pages || {}).length || !C.anyPage) { C.emptySince = null; return; }
    if (!C.emptySince) C.emptySince = Date.now();
    if (Date.now() - C.emptySince < 3000) return;
    if (h.agentInfo().alive) return;
    log('Workbench 탭을 모두 닫아 서버를 껐습니다.'); setTimeout(() => process.exit(0), 100);
  }

  // ── 멈춘 「진행 중」 되돌리기(2026-11-13 점검 F1): 처리하던 Claude가 끊기면 요청 · 작업이 「진행 중」으로 영영 남았다(감시는 대기 · 보류만 본다)
  //  10분 동안 움직임이 없으면 「대기」로 되돌려 다시 처리되게 한다. 움직임 = 그 항목의 updatedAt(상태 · 메모 갱신),
  //  또는 백그라운드 에이전트가 지금 그 항목을 처리 중(.agent.json 상태 working, 메시지에 그 ID). 오래 걸리는 단계 작업은 Claude가 몇 분마다 메모를 갱신한다(requests.md)
  const STALE_MS = 10 * 60 * 1000;
  function freeStale() {
    const ag = h.agentInfo(), busy = ag.alive && ag.status === 'working' ? ag.msg : '';
    const old = (x) => { const t = Date.parse(x.updatedAt || x.startedAt || ''); return !isNaN(t) && Date.now() - t > STALE_MS && !(busy && new RegExp('\\b' + String(x.id).replace(/[^\w]/g, '') + '\\b').test(busy)); };
    const note = '10분 동안 움직임이 없어 「대기」로 되돌림(다시 처리)';
    const r = core.readJson(C.reqFile);
    if (r && core.arr(r.items).some((x) => x && x.status === '진행 중' && old(x))) {
      const now = core.now(), done = [];
      for (const x of core.arr(r.items)) if (x && x.status === '진행 중' && old(x)) { if (x.startedAt) h.closeRun(x, now); x.status = '대기'; x.note = note; x.updatedAt = now; done.push(x); }
      r.version = (parseInt(r.version, 10) || 0) + 1; core.writeJson(C.reqFile, r);
      for (const x of done) { try { h.histFromRequest(x); } catch (e) {} }
      log('멈춘 요청을 대기로 되돌림: ' + done.map((x) => x.id).join(', '));
    }
    const jj = core.readJson(C.jobFile);
    if (jj && core.arr(jj.items).some((x) => x && x.status === '진행 중' && old(x))) {
      const now = core.now(), done = [];
      for (const x of core.arr(jj.items)) if (x && x.status === '진행 중' && old(x)) { x.status = '대기'; x.takenBy = ''; x.note = note; x.updatedAt = now; done.push(x.id); }
      jj.version = (parseInt(jj.version, 10) || 0) + 1; core.writeJson(C.jobFile, jj);
      log('멈춘 작업을 대기로 되돌림: ' + done.join(', '));
    }
  }
  let staleAt = Date.now() + 30000;

  // ── 절전에서 깨어남(2026-11-13): 1초마다 도는 확인 사이가 30초 넘게 벌어지면 PC가 멈췄다가(절전 · 최대 절전) 깨어난 것.
  //  그대로 두면 탭 신호가 「150초 넘게 없음」이라 깨어나자마자 탭이 모두 닫힌 것으로 보고 서버가 꺼졌다 → 탭 시각을 지금으로 돌려 다시 신호를 보낼 시간을 준다.
  //  에이전트 상태 기록도 멈춰 있었으니 멈춘 「진행 중」 되돌리기는 2분 미룬다(처리 중인 것을 끊긴 것으로 보지 않게)
  let lastTick = Date.now();
  function wakeCheck() {
    const now = Date.now(), gap = now - lastTick; lastTick = now;
    if (gap < 30000) return;
    for (const k of Object.keys(C.pages || {})) C.pages[k] = now;
    C.emptySince = null; staleAt = Math.max(staleAt, now + 120000);
    log(`절전에서 깨어남(${Math.round(gap / 1000)}초 멈춤) — 탭 · 진행 중 확인을 잠시 미룹니다.`);
  }

  setInterval(() => {
    try { wakeCheck(); } catch (e) {}
    if (Date.now() >= staleAt) { staleAt = Date.now() + 60000; try { freeStale(); } catch (e) { errLog('멈춘 진행 중 확인', e); } }
    try { syncTick(); } catch (e) { errLog('이력 동기화', e); }
    if (Date.now() >= watchAt) { watchAt = Date.now() + 120000; const f = watchFirst; watchFirst = false; try { autoWatch(f); } catch (e) { errLog('감시 자동 시작', e); } }
    try { idleCheck(); } catch (e) { errLog('탭 확인', e); }
  }, 1000);
};
