'use strict';
// 백그라운드 Claude 에이전트(2026-11-16, workbench/agent.ps1 · agent.pl + watch_requests.ps1 · .pl을 Node 한 벌로 — 윈도우 · 맥 같은 코드)
//   node node/agent.js --claude <claude 실행 파일>        (서버가 창 없이 띄운다. 시작 안내에서 시작 · 중지)
//  - 창 없이 Workbench 요청 · 작업을 감시하고(1분씩 반복), 처리할 것이 생기면 Claude Code CLI를 띄워 처리한다
//    `claude -p --input-format stream-json --output-format stream-json`. 한 차례(감시 결과 하나)를 처리하면 세션을 닫는다
//    (세션을 두면 매 호출마다 앞 요청 대화를 다시 읽어 토큰의 98%가 그것이었다, 2026-11-06)
//    단, 「보류」 + 질문으로 끝난 차례는 세션을 55분 두고 그 요청의 답이 오면 같은 세션에 답만 보낸다(KEEP_MIN, 2026-11-18)
//  - 한 요청에서 Claude 출력이 20분 넘게 없으면(멈춤) 끊는다(출력이 이어지는 한 오래 걸리는 단계 작업은 끊지 않는다)
//  - 처리 전 준비 확인(토큰 안 씀): CLI 로그인(auth status) · Figma MCP 연결(mcp list). 안 되면 요청을 보내지 않는다
//  - 5분마다 사용 한도 확인(가장 싼 모델에 짧은 질문, 약 850토큰) → workbench/.plan_usage.json(상단 「Claude 24% · …」)
//  - 상태: workbench/.agent.json {at, host, pid, status(idle|working|login|figma|error|stopped), msg} — 15초마다
//  - 중지: workbench/.agent_stop. 새 세션: workbench/.agent_renew(「Claude 로그인 · Figma 연결」 창을 열 때). 기록: workbench/.agent.log(최근 500KB)
//  - 같은 감시 결과가 3번 연달아 처리되지 않으면 10분 쉬고 status=error(토큰 낭비 방지)
//  - 이 설치 폴더의 에이전트는 하나만(이름 붙은 파이프 · 소켓을 잡지 못하면 끝낸다)
//  - 감시(watch): 「대기」 요청 → PENDING, 겹침 대기로 「보류」였다 풀린 요청 → RESUME, 다른 PC가 같은 프레임을 처리 중이거나 먼저 등록 → CONFLICT,
//    처리할 작업 → JOBS(캡처는 20초 뒤 — 그동안 Figma 플러그인 · 토큰 캡처가 받을 기회, 자동 캡처 · 글 수정은 Claude가 받지 않음)
const fs = require('fs');
const path = require('path');
const os = require('os');
const net = require('net');
const crypto = require('crypto');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..'), WB = path.join(ROOT, 'workbench');
const W = process.platform === 'win32';
const STATE = path.join(WB, '.agent.json'), STOP = path.join(WB, '.agent_stop'), LOGF = path.join(WB, '.agent.log'), RENEW = path.join(WB, '.agent_renew');
// 사람이 Workbench · 변경 이력에서 「멈추기」를 누른 요청 ID(한 줄에 하나, 서버가 씀). 처리 중인 차례에 그 ID가 있으면 그 세션만 끊는다(2026-11-16)
const CANCEL = path.join(WB, '.agent_cancel');
const cancelIds = () => { try { return fs.readFileSync(CANCEL, 'utf8').split(/\s+/).filter(Boolean); } catch (e) { return []; } };
const HOST = (W && process.env.COMPUTERNAME) || os.hostname();
const SLUG = HOST.toLowerCase().replace(/[^a-z0-9-]/g, '-');
const COMPACT = 80, IDLE_MIN = 30, TURN_MIN = 20, USAGE_MIN = 5;
// 질문을 남긴 세션은 닫지 않고 답을 기다린다(2026-11-18): 「보류」 + 질문(ask)으로 끝난 차례는 세션을 KEEP_MIN분 두고,
//  답이 와서 같은 요청만 다시 「대기」가 되면 그 세션에 답만 보낸다. 예전에는 답이 1분 만에 와도 새 세션이 규칙 · 작업 기록 · 화면 MD를
//  처음부터 다시 읽었다(R037 · R038 · R039 모두 두 번씩, 한 번에 7만 ~ 17만 토큰). 55분 = 대화 캐시(1시간) 안.
//  대화가 KEEP_MAX 토큰보다 크면 두지 않는다(큰 대화를 이어 보내는 값이 다시 읽기보다 커진다)
// KEEP_MAX(2026-11-26): 이 대화 크기까지는 끊지 않고 같은 세션으로 간다(질문 답 기다림 · 이어서 계속). 넘으면 새 세션(안전선 — 자동 요약 COMPACT 80% 전에)
//  예전 25만은 「끊는 기준 35만 · 45만」보다 낮아 질문을 남긴 세션이 닫혔다(R003 09:24, 29만 → 답 뒤 새 세션 18분)
const KEEP_MIN = 55, KEEP_MAX = 700000;
// 사용 한도가 거의 찼을 때(2026-11-18): 처리는 막지 않고 알리기만 한다. WARN_PCT 이상이면 Claude에게 「끊길 수 있으니 화면마다 중간 저장」을 알리고,
//  처리 중 상태 글(시작 안내)과 기록에 사용량을 붙인다 — 중간에 한도에 걸려도 한 일이 남게(R041: 14분 일하고 결과 없이 끝남)
const WARN_PCT = 80;
const exists = (f) => { try { fs.accessSync(f); return true; } catch (e) { return false; } };
const readJson = (f) => { try { return JSON.parse(fs.readFileSync(f, 'utf8').replace(/^﻿/, '')); } catch (e) { return null; } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function now() {
  const d = new Date(), p = (n) => String(n).padStart(2, '0'), off = -d.getTimezoneOffset(), s = off >= 0 ? '+' : '-', a = Math.abs(off);
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}${s}${p(Math.floor(a / 60))}:${p(a % 60)}`;
}
// act · tool · ids(2026-11-20): 처리 중일 때 Claude가 마지막으로 움직인 시각 · 지금 쓰는 도구 · 처리 중인 요청 · 작업 ID — Workbench 답변에 「살아 있음」을 보인다
const St = { status: 'idle', msg: '', act: '', tool: '', ids: [] }; let savedAt = 0;
// 이 에이전트 코드의 버전(파일 해시). 서버가 지금 agent.js와 다르면(업데이트 · 수정) 중지 → 다시 띄운다(2026-11-18)
const VER = (() => { try { return crypto.createHash('sha1').update(fs.readFileSync(__filename)).digest('hex').slice(0, 12); } catch (e) { return ''; } })();
function save(status, msg) {
  if (status) St.status = status; if (msg != null) St.msg = msg;
  if (St.status !== 'working') { St.act = ''; St.tool = ''; St.ids = []; }
  const live = St.status === 'working' ? { act: St.act, tool: St.tool, ids: St.ids } : {};
  try { fs.writeFileSync(STATE, JSON.stringify(Object.assign({ at: now(), host: HOST, pid: process.pid, status: St.status, msg: St.msg, ver: VER, claude: CLAUDE }, live)), 'utf8'); } catch (e) {}
  savedAt = Date.now();
}
function log(s) {
  try {
    if (exists(LOGF) && fs.statSync(LOGF).size > 500 * 1024) { const t = fs.readFileSync(LOGF, 'utf8'); fs.writeFileSync(LOGF, t.slice(t.length - 200 * 1024), 'utf8'); }
    fs.appendFileSync(LOGF, `[${now()}] ${s}\n`, 'utf8');
  } catch (e) {}
}

// ── 하나만: 이 설치 폴더 이름으로 파이프(윈도우) · 소켓(맥)을 잡는다. 프로세스가 끝나면(강제 종료 포함) 풀린다 ──
function single() {
  const h = crypto.createHash('sha1').update(ROOT.toLowerCase()).digest('hex').slice(0, 16);
  const addr = W ? `\\\\?\\pipe\\uxai_workbench_agent_${h}` : path.join(os.tmpdir(), `uxai_workbench_agent_${h}.sock`);
  return new Promise((res) => {
    const srv = net.createServer((c) => c.end());
    srv.on('error', (e) => {
      if (e.code !== 'EADDRINUSE' || W) return res(false);
      // 맥: 지난 실행이 남긴 소켓 파일이면(연결 안 됨) 지우고 다시
      const c = net.connect(addr); c.on('connect', () => { c.end(); res(false); });
      c.on('error', () => { try { fs.unlinkSync(addr); } catch (x) {} srv.listen(addr, () => res(true)); });
    });
    srv.listen(addr, () => res(true));
    srv.unref();
  });
}

// ── Claude 실행 파일 ──
let CLAUDE = '', PORT = 8765;
(function args() { const a = process.argv.slice(2); for (let i = 0; i < a.length; i++) { if (a[i] === '--claude') CLAUDE = a[i + 1] || ''; if (a[i] === '--port') PORT = parseInt(a[i + 1], 10) || 8765; } })();
// 원래 답변 남기기(2026-11-18): 한 차례를 마치면 Claude의 원래 답변(마지막 요약 글)을 그 차례의 요청(R…)마다 서버에 붙인다 → Workbench 「자세히」
async function saveRaw(ids, text) {
  const rq = ids.filter((x) => /^R\d+$/.test(x)); if (!rq.length || !String(text || '').trim()) return;
  try {
    const r = await fetch(`http://127.0.0.1:${PORT}/api/requests`, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify({ action: 'raw', ids: rq, text: String(text) }) });
    if (!r.ok) log('원래 답변 저장 실패: ' + r.status + ' ' + (await r.text()).slice(0, 160));
  } catch (e) { log('원래 답변 저장 실패: ' + e.message); }
}
// 사용 한도로 끊긴 차례의 요청 · 작업을 「대기」로 돌린다(2026-11-23): 「진행 중」으로 두면 한도가 풀린 뒤 새 세션이
//  「이미 진행 중」으로 거절당해 사람이 멈춤 → 다시 진행을 눌러야 이어졌다. 「대기」면 다음 감시 차례에 그대로 다시 받아
//  작업 기록의 이어 갈 곳부터 이어 간다. 사람이 멈춘 것 · 질문을 남긴 「보류」 · 끝난 것은 건드리지 않는다
// 고른 모델을 쓸 수 없음(2026-11-24, 예: Fable은 사용 크레딧이 있어야 함): 그 차례의 요청은 「보류」, 작업은 「실패」로 — 같은 요청을 다시 띄워 헛돌지 않게.
//  사람은 다른 모델을 골라 다시 요청한다
async function holdOnModel(ids, model, why) {
  const done = [];
  for (const id of ids) {
    const isR = /^R\d+$/.test(id);
    const body = { action: 'update', id, status: isR ? '보류' : '실패', by: 'Claude', note: `모델 ${model || '기본'}을 쓸 수 없어 처리하지 못했습니다 — ${why}. 다른 모델을 골라 다시 요청하세요.` };
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/api/${isR ? 'requests' : 'jobs'}`, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) });
      if (r.ok) done.push(id); else log(`모델 사용 불가 — ${id} 바꾸기 실패: ${r.status} ${(await r.text()).slice(0, 160)}`);
    } catch (e) { log(`모델 사용 불가 — ${id} 바꾸기 실패: ${e.message}`); }
  }
  return done;
}
async function releaseOnLimit(ids, hm) {
  const rq = ((readJson(path.join(WB, 'edit_requests.json')) || {}).items || []).filter(Boolean), jb = ((readJson(path.join(WB, 'jobs.json')) || {}).items || []).filter(Boolean);
  const done = [];
  for (const id of ids) {
    const isR = /^R\d+$/.test(id), x = (isR ? rq : jb).find((i) => i.id === id);
    if (!x || x.status !== '진행 중') continue;
    const was = String(x.note || '').replace(/^사용 한도로 멈춤 — [^(]*\(멈출 때: (.*)\)$/, '$1');
    const body = { action: 'update', id, status: '대기', by: 'Claude', note: `사용 한도로 멈춤 — ${hm}에 이어 함` + (was ? ` (멈출 때: ${was.slice(0, 300)})` : '') };
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/api/${isR ? 'requests' : 'jobs'}`, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) });
      if (r.ok) done.push(id); else log(`사용 한도 — ${id} 「대기」로 돌리기 실패: ${r.status} ${(await r.text()).slice(0, 160)}`);
    } catch (e) { log(`사용 한도 — ${id} 「대기」로 돌리기 실패: ${e.message}`); }
  }
  return done;
}
// 지금 대화 크기(2026-11-25): 처리 중인 Claude가 「나눠서 이어 가기」를 정할 때 읽는다(requests-flow.md). Claude는 자기 대화 크기를 모르므로
//  응답마다 받은 사용량(입력 + 캐시)을 workbench/.agent_ctx.json에 적어 둔다(5초에 한 번까지). 예전에는 기준 없이 단계 경계마다 끊어
//  대화가 7 ~ 13%일 때도 새 세션을 띄웠다(R001, 세션마다 시작 비용 약 13만 ~ 21만 토큰)
// 창 크기(2026-11-26): 세션의 창은 차례가 끝날 때(result)에야 알려진다. 예전에는 그 전까지 기본값 20만을 적어, 처리 중인 Claude가
//  「창이 거의 찼다」며 19만에서 스스로 끊었다(R003 11:06 · 11:15 · 11:19 — 실제 창 100만). 알게 된 값을 기억해 두고, 모르면 0(모름)
const WINF = path.join(WB, '.agent_win.json');
let WIN = Number((readJson(WINF) || {}).win) || 0;
// 창 크기를 아직 모르면(새 PC 첫 세션) 「모름」 대신 100만으로(2026-11-27): 모른다고 하면 Claude가 20만으로 짐작해 스스로 끊을 수 있다. 지금 쓰는 모델은 100만
function ctxHint() { return `
- 대화 크기: 지금 약 ${Math.round(((S && S.ctx) || 0) / 10000)}만 토큰, 창 크기 ${WIN ? Math.round(WIN / 10000) + '만' : '100만(이 PC에서 아직 재지 않아 기본값)'}. 끊는 기준은 docs/claude/requests-flow.md 「끊지 않고 이어 가기」뿐이다(창 크기로 따로 끊지 않는다).`; }
let ctxSavedAt = 0;
function saveCtx() {
  if (!S || Date.now() - ctxSavedAt < 5000) return; ctxSavedAt = Date.now();
  try { fs.writeFileSync(path.join(WB, '.agent_ctx.json'), JSON.stringify({ at: now(), ids: S.turnIds || [], ctx: S.ctx || 0, win: S.win || WIN || 0 }), 'utf8'); } catch (e) {}
}
function claudeCmd(args) {
  // .cmd · .bat(npm 설치)은 셸로 띄운다
  //  (cmd.exe는 Node의 \" 이스케이프를 모르니 줄을 직접 만들어 그대로 넘긴다: 모든 인자를 "…"로, 빈 인자도 "")
  if (W && /\.(cmd|bat)$/i.test(CLAUDE)) return { cmd: 'cmd.exe', args: ['/d', '/s', '/c', '"' + [CLAUDE].concat(args).map((x) => '"' + String(x).replace(/"/g, '""') + '"').join(' ') + '"'], verbatim: true };
  return { cmd: CLAUDE, args };
}
const spawnOpt = (c, o) => Object.assign({ windowsHide: true, detached: !W }, o, c.verbatim ? { windowsVerbatimArguments: true } : {});
function killTree(p) {
  if (!p || p.exitCode != null) return;
  try { if (W) spawn('taskkill', ['/PID', String(p.pid), '/T', '/F'], { windowsHide: true, stdio: 'ignore' }); else process.kill(-p.pid, 'SIGKILL'); } catch (e) { try { p.kill('SIGKILL'); } catch (x) {} }
}
// CLI 명령을 짧게 실행해 출력(표준 + 오류)을 받는다. 시간이 넘으면 끊는다. 기다리는 동안 15초마다 상태를 쓴다
function runCli(args, sec, dir) {
  return new Promise((res) => {
    const c = claudeCmd(args); let out = '', p;
    try { p = spawn(c.cmd, c.args, spawnOpt(c, { cwd: dir || ROOT, env: process.env })); } catch (e) { return res(''); }
    p.stdout.on('data', (d) => { out += d.toString('utf8'); }); p.stderr.on('data', (d) => { out += d.toString('utf8'); });
    const hb = setInterval(() => save(null, null), 15000);
    const t = setTimeout(() => { killTree(p); }, sec * 1000);
    const end = () => { clearInterval(hb); clearTimeout(t); res(out); };
    p.on('error', end); p.on('close', end);
  });
}

// ── 사용 한도 ──
function saveUsage(ri) {
  try {
    const w = ri && ri.unifiedWindows; if (!w) return;
    const isoS = (s) => { if (!(Number(s) > 0)) return ''; const d = new Date(Number(s) * 1000); const p = (n) => String(n).padStart(2, '0'), off = -d.getTimezoneOffset(), sg = off >= 0 ? '+' : '-', a = Math.abs(off); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}${sg}${p(Math.floor(a / 60))}:${p(a % 60)}`; };
    const list = [];
    const win = (label, x) => { const o = { label, percentUsed: Math.round(100 * Number(x.utilization) || 0) }; const r = isoS(x.resetsAt); if (r) o.resetsAt = r; return o; };
    if (w.five_hour) list.push(win('5-hour limit', w.five_hour));
    if (w.seven_day) list.push(win('Weekly · all models', w.seven_day));
    if (list.length) fs.writeFileSync(path.join(WB, '.plan_usage.json'), JSON.stringify({ at: now(), plan: '', by: 'agent', windows: list }), 'utf8');
  } catch (e) {}
}
// 한도가 풀렸는지: 마지막으로 읽은 사용량에서 5시간 · 주간 모두 100% 미만이면 풀림(사용량을 아직 못 읽었으면 모름 = false)
function limitOver(since) {
  const u = readJson(path.join(WB, '.plan_usage.json')); const w = u && Array.isArray(u.windows) ? u.windows : [];
  return w.length > 0 && (T(u.at) || 0) >= since - 2000 && w.every((x) => Number(x.percentUsed) < 100);
}
// 지금 사용량: 초기화 시각이 지나지 않은 창 중 가장 높은 것 {pct, label, resetsAt}(못 읽었으면 null)
function usageNow() {
  const u = readJson(path.join(WB, '.plan_usage.json')); const w = u && Array.isArray(u.windows) ? u.windows : [];
  let top = null;
  for (const x of w) { const r = T(x.resetsAt); if (r && r <= Date.now()) continue; const p = Number(x.percentUsed) || 0; if (!top || p > top.pct) top = { pct: p, label: /^Weekly/.test(x.label) ? '주간' : '5시간', resetsAt: r }; }
  return top;
}
const hmOf = (t) => { const d = new Date(t), same = d.toDateString() === new Date().toDateString(); return (same ? '' : (d.getMonth() + 1) + '/' + d.getDate() + ' ') + d.toTimeString().slice(0, 5); };
function usageHint() {
  const u = usageNow(); if (!u || u.pct < WARN_PCT) return '';
  return `\n- 지금 Claude 사용량이 ${u.label} ${u.pct}%${u.resetsAt ? '(' + hmOf(u.resetsAt) + ' 초기화)' : ''}라 처리 중 한도에 걸려 끊길 수 있다. 끊겨도 한 일이 남게: 화면(프레임) · 파일 하나를 끝낼 때마다 작업 기록의 이어 갈 곳 줄(CURECA는 「이어서 작업할 곳:」)과 요청 note(update)를 먼저 고친다. 사용량이 높다는 이유로 대상 중간에 끊지 않는다(끊는 곳은 docs/claude/requests-flow.md 「끊지 않고 이어 가기」). 기록을 화면마다 고쳐 두면 한도에 걸려 끊겨도 다음 세션이 거기서 이어 간다(docs/claude/requests-flow.md 「끊겨도 한 일이 남게」).`;
}
// 요청이 없을 때도 5분마다: 아주 짧은 질문(가장 싼 모델 · 도구 없음)을 보내 rate_limit_event를 읽는다. CLAUDE.md를 읽지 않게 임시 폴더에서
async function probeUsage() {
  let dir = path.join(os.tmpdir(), 'uxai_usage_probe'); try { fs.mkdirSync(dir, { recursive: true }); } catch (e) { dir = ROOT; }
  const o = await runCli(['-p', '.', '--model', 'haiku', '--output-format', 'stream-json', '--verbose', '--tools', '', '--system-prompt', 'Reply with one dot.', '--strict-mcp-config', '--max-turns', '1', '--no-session-persistence'], 60, dir);
  for (const l of o.split(/\r?\n/)) { if (!l.includes('"rate_limit_event"')) continue; try { const m = JSON.parse(l); if (m.rate_limit_info && m.rate_limit_info.unifiedWindows) { saveUsage(m.rate_limit_info); return true; } } catch (e) {} }
  log('한도 확인: 사용률을 받지 못함 ' + o.replace(/\s+/g, ' ').slice(0, 160)); return false;
}
// 처리 전 준비 확인(토큰 안 씀)
async function checkReady() {
  const a = await runCli(['auth', 'status'], 30);
  if (/"loggedIn"\s*:\s*false/.test(a)) { save('login', 'Claude Code CLI에 로그인되어 있지 않습니다. 시작 안내 5단계(CLI) 「Claude 로그인 · Figma 연결」 창에서 /login을 하세요.'); log('준비 확인: CLI 로그인 안 됨'); return false; }
  const m = await runCli(['mcp', 'list'], 90);
  const lines = m.split(/\r?\n/).filter((l) => /^\s*(claude\.ai )?figma\b[^:]*:/i.test(l));
  if (lines.some((l) => /Connected/.test(l))) { log('준비 확인: 로그인 · Figma 연결됨'); return true; }
  if (!m.trim()) { log('준비 확인: mcp list 응답 없음 — 그대로 진행'); return true; }
  const why = !lines.length ? 'Figma MCP가 등록되어 있지 않음' : lines.some((l) => /auth/i.test(l)) ? 'Figma 인증 필요' : 'Figma 연결 실패';
  save('figma', `Figma 연결이 안 되어 있습니다(${why}). 시작 안내 5단계(CLI) 「Claude 로그인 · Figma 연결」 창에서 /mcp → figma → Authenticate를 하세요. 요청은 연결될 때까지 「대기」로 둡니다.`);
  log(`준비 확인: ${why}\n${lines.join('\n')}`); return false;
}

// ── Claude 세션 ──
let S = null;   // { p, turns, last, ctx, win, lines[], waiters[], ended, err, keep[] }
// 연결 도구는 Figma만 싣는다(2026-11-18): 이 PC에 등록된 figma MCP(사용자 · 이 폴더 범위)만 골라 --strict-mcp-config로 넘긴다.
//  claude.ai 커넥터(Notion · Canva · Google Drive 등 20여 개)를 빼서 시작할 때 토큰이 약 2,700 줄고, 인증이 필요한 연결을 확인하느라 쓰는 시간도 없다.
//  figma가 claude.ai 커넥터로만 연결된 PC면(등록된 figma 없음) 예전처럼 전부 싣는다
function mcpArgs() {
  try {
    const j = readJson(path.join(os.homedir(), '.claude.json')) || {}, pick = {};
    const add = (m) => { for (const k of Object.keys(m || {})) if (/figma/i.test(k) && m[k] && typeof m[k] === 'object') pick[k] = m[k]; };
    add(j.mcpServers);
    for (const k of Object.keys(j.projects || {})) if (path.resolve(k).toLowerCase() === ROOT.toLowerCase()) add(j.projects[k].mcpServers);
    add((readJson(path.join(ROOT, '.mcp.json')) || {}).mcpServers);
    if (!Object.keys(pick).length) return [];
    const f = path.join(WB, '.agent_mcp.json'); fs.writeFileSync(f, JSON.stringify({ mcpServers: pick }), 'utf8');
    return ['--strict-mcp-config', '--mcp-config', f];
  } catch (e) { return []; }
}
function startSession(model, effort) {
  const c = claudeCmd((model ? ['--model', model] : []).concat(effort ? ['--effort', effort] : [], ['-p', '--input-format', 'stream-json', '--output-format', 'stream-json', '--verbose', '--permission-mode', 'acceptEdits',
    '--allowedTools', 'Bash,PowerShell,Read,Write,Edit,Glob,Grep,TodoWrite,WebFetch,Skill,Agent,Task,mcp__figma,mcp__claude_ai_Figma']).concat(mcpArgs()));
  let p;
  try { p = spawn(c.cmd, c.args, spawnOpt(c, { cwd: ROOT, env: Object.assign({}, process.env, { CLAUDE_AUTOCOMPACT_PCT_OVERRIDE: String(COMPACT) }) })); }
  catch (e) { log('세션 시작 실패: ' + e.message); return false; }
  const s = { model: model || '', effort: effort || '', p, turns: 0, last: Date.now(), ctx: 0, win: WIN, conts: 0, lines: [], waiters: [], ended: false, err: '' };
  let buf = '';
  p.stdout.on('data', (d) => { buf += d.toString('utf8'); let i; while ((i = buf.indexOf('\n')) >= 0) { const l = buf.slice(0, i).replace(/\r$/, ''); buf = buf.slice(i + 1); s.lines.push(l); const w = s.waiters.shift(); if (w) w(); } });
  p.stderr.on('data', (d) => { s.err = (s.err + d.toString('utf8')).slice(-4000); });
  const fin = () => { s.ended = true; while (s.waiters.length) s.waiters.shift()(); };
  p.on('close', fin); p.on('error', (e) => { s.err += e.message; fin(); });
  S = s; log(`세션 시작 (claude pid ${p.pid}${model ? ', 모델 ' + model : ''}${effort ? ', 강도 ' + effort : ''})`); return true;
}
let Ready = null, nextCheck = 0;
async function stopSession(why, keepReady) {
  if (!S) return; const p = S.p;
  try { p.stdin.end(); } catch (e) {}
  const t0 = Date.now(); while (p.exitCode == null && Date.now() - t0 < 10000) await sleep(250);
  if (p.exitCode == null) killTree(p);
  log(`세션 종료 (${why})`); S = null;
  if (!keepReady) { Ready = null; nextCheck = 0; }
}
// 다음 줄(없으면 ms 동안 기다림). null = 시간 넘음, undefined = 세션 끝남
function nextLine(ms) {
  return new Promise((res) => {
    if (S.lines.length) return res(S.lines.shift());
    if (S.ended) return res(undefined);
    let t = null; const w = () => { clearTimeout(t); res(S.lines.length ? S.lines.shift() : (S.ended ? undefined : null)); };
    S.waiters.push(w); t = setTimeout(() => { const i = S.waiters.indexOf(w); if (i >= 0) S.waiters.splice(i, 1); res(null); }, ms);
  });
}
async function sendTurn(text) {
  const p = S.p;
  try { p.stdin.write(JSON.stringify({ type: 'user', message: { role: 'user', content: text } }) + '\n'); } catch (e) { return { ok: false, dead: true, text: '보내기 실패: ' + e.message }; }
  let until = Date.now() + TURN_MIN * 60000, out = '', started = false, tick = Date.now();
  while (true) {
    const l = await nextLine(15000);
    { const gap = Date.now() - tick; if (gap > 60000) until += gap - 15000; tick = Date.now(); }   // 절전에서 깨어남: 멈춘 동안은 「응답 없음」으로 세지 않는다(2026-11-18)
    if (Date.now() - savedAt >= 15000) save(null, null);
    // 멈추기: 이 차례에서 처리 중인 요청 · 작업 ID가 멈춤 목록에 있으면 바로 끊는다(남은 ID는 다음 처리 때를 위해 파일에 둔다)
    if (exists(CANCEL)) {
      const ids = cancelIds(), mine = (S.turnIds || []).filter((x) => ids.includes(x));
      if (mine.length) { const rest = ids.filter((x) => !mine.includes(x)); try { if (rest.length) fs.writeFileSync(CANCEL, rest.join('\n')); else fs.rmSync(CANCEL, { force: true }); } catch (e) {} return { ok: false, cancelled: mine, text: '사람이 멈춤: ' + mine.join(', ') }; }
    }
    if (l === null) { if (Date.now() > until) return { ok: false, dead: true, text: `응답이 ${TURN_MIN}분 넘게 없음` }; continue; }
    if (l === undefined) return { ok: false, dead: true, text: (out + S.err).trim() };
    until = Date.now() + TURN_MIN * 60000;   // 출력이 오면 다시 20분(멈춤만 끊는다)
    let m; try { m = JSON.parse(l); } catch (e) { out += l + '\n'; continue; }
    if (m.type === 'rate_limit_event') saveUsage(m.rate_limit_info);
    if (m.type === 'system' && m.subtype === 'init') started = true;
    if (!started && !(m.type === 'result' && m.is_error)) continue;   // 로그인 오류 등은 init 없이 올 수 있다
    if (m.type === 'assistant' && m.message && m.message.usage) { const u = m.message.usage; S.ctx = (u.input_tokens || 0) + (u.cache_read_input_tokens || 0) + (u.cache_creation_input_tokens || 0); saveCtx(); }
    // 살아 있음: 출력이 올 때마다 움직인 시각, 도구를 부르면 결과가 올 때까지 그 이름(빈 값 = 생각 · 답 쓰는 중). 5초마다만 파일에 쓴다
    if (m.type === 'assistant' || m.type === 'user') {
      St.act = now();
      if (m.type === 'assistant') {
        const tus = ((m.message && m.message.content) || []).filter((c) => c && c.type === 'tool_use'), tu = tus[tus.length - 1]; St.tool = tu ? String(tu.name || '') : '';
        // 이 세션이 이미 아는 파일(readHint). offset · limit으로 일부만 읽은 것은 「일부」로(다른 부분을 읽지 말라는 뜻이 되지 않게)
        for (const x of tus) if (/^(Read|Edit|Write)$/.test(x.name) && x.input && x.input.file_path) {
          const R = S.read || (S.read = new Map()), k = String(x.input.file_path), part = x.name === 'Read' && (x.input.offset != null || x.input.limit != null);
          if (!R.has(k) || R.get(k)) R.set(k, part);   // 한 번이라도 통째로 읽거나 쓰면 「일부」가 아니다
        }
      }
      else St.tool = '';
      if (Date.now() - savedAt >= 5000) save(null, null);
    }
    if (m.type === 'result') {
      S.turns++; S.last = Date.now();
      if (m.modelUsage) for (const k of Object.keys(m.modelUsage)) if (m.modelUsage[k] && m.modelUsage[k].contextWindow) S.win = Number(m.modelUsage[k].contextWindow);
      if (S.win && S.win !== WIN) { WIN = S.win; try { fs.writeFileSync(WINF, JSON.stringify({ win: WIN, at: now() }), 'utf8'); } catch (e) {} }
      return { ok: !m.is_error, dead: false, text: String(m.result == null ? '' : m.result), ms: m.duration_ms };
    }
  }
}
// 플러그인 상태(2026-11-26): 차례를 시작할 때 요청 파일의 Figma 플러그인이 켜져 있는지 감시가 직접 확인해 지시에 넣는다.
//  예전에는 Claude가 GET /api/jobs?kind=fill로 확인해야 했는데 한 번도 확인하지 않고 use_figma 코드로만 그렸다(R003 — 플러그인은 켜져 있었음)
async function pluginHint(out) {
  const ids = out.match(/\bR\d{3,}\b/g) || []; if (!ids.length) return '';
  const items = ((readJson(path.join(WB, 'edit_requests.json')) || {}).items || []).filter(Boolean);
  const keys = [...new Set(ids.map((id) => (items.find((x) => x.id === id) || {}).fileKey).filter(Boolean))]; if (!keys.length) return '';
  let pl = {};
  try { const r = await fetch(`http://127.0.0.1:${PORT}/api/jobs?kind=fill`); if (r.ok) pl = (await r.json()).plugins || {}; } catch (e) { return ''; }
  const on = keys.filter((k) => pl[k] != null && pl[k] <= 180), off = keys.filter((k) => !on.includes(k));
  let s = '';
  if (on.length) s += `\n- **Figma 플러그인 켜짐**(${on.join(', ')}, 차례 시작 때 감시가 확인): 패널 행 · 확인 목록 · 라벨처럼 정해진 컴포넌트에 내용을 넣는 일은 use_figma 코드로 그리지 말고 **컴포넌트 채우기 작업(kind:'fill')**으로 한다(docs/claude/jobs.md 「fill」). 작업규칙이 정한 「무엇을 그릴지」는 그대로이고 넣는 도구만 다르다 — 작업규칙과 다른 방법(지름길)이 아니다. 프레임 배치 · 복제 등 fill로 안 되는 것만 use_figma. fill 작업이 「플러그인 응답 없음」으로 끝나면 그때부터 use_figma.`;
  if (off.length) s += `\n- Figma 플러그인 꺼짐(${off.join(', ')}): 그리기는 use_figma로 한다(플러그인 확인 호출은 하지 않는다).`;
  return s;
}
// 감시 결과에 적힌 요청 · 작업의 내용을 메시지에 함께 넣는다(2026-11-17): Claude가 처리를 시작할 때 다시 조회하느라(curl · python 시도 등) 10 ~ 20초를 쓰던 것을 없앤다.
//  긴 글 · 첨부는 줄여 넣고(첨부는 이름 · 파일 경로만), 지금 상태를 바꿀 때는 Claude가 서버에서 다시 확인한다
function details(out) {
  const ids = (k) => { const m = new RegExp('^' + k + ' (.+)$', 'm').exec(out); return m ? m[1].split(',').map((s) => s.trim()).filter(Boolean) : []; };
  const rq = ids('PENDING').concat(ids('RESUME')), jb = ids('JOBS'), lines = [];
  const cut = (s, n) => { s = String(s == null ? '' : s); return s.length > n ? s.slice(0, n) + '…(' + s.length + '자, 나머지는 서버에서)' : s; };
  if (rq.length) {
    const items = ((readJson(path.join(WB, 'edit_requests.json')) || {}).items || []).filter(Boolean);
    for (const id of rq) {
      const r = items.find((x) => x.id === id); if (!r) continue;
      const o = { id: r.id, team: r.team || 'cureca', status: r.status, priority: r.priority, fileKey: r.fileKey, fileName: r.fileName, page: r.page, nodeId: r.nodeId, frame: r.frame, editable: r.editable,
        author: r.author, createdAt: r.createdAt, text: cut(r.text, 3000), layout: r.layout || undefined, case: r.case || undefined, work: r.work || undefined, from: r.from || undefined,
        images: (r.images || []).length ? r.images.map((m) => Object.assign({ file: m.file, name: m.name }, m.text ? { text: m.text } : {})) : undefined,   // text: Office 첨부에서 서버가 뽑아 둔 글(이것을 읽는다)
        marks: (r.marks || []).length ? r.marks : undefined, shotAt: r.shotAt || undefined, fixRows: (r.fixRows || []).length ? r.fixRows : undefined,
        replies: (r.replies || []).length ? r.replies.slice(-3).map((x) => ({ at: x.at, by: x.by, q: cut(x.q, 400), text: cut(x.text, 1500) })) : undefined,
        note: r.status === '대기' && r.note ? cut(r.note, 1500) : undefined };
      lines.push(JSON.stringify(o));
    }
  }
  if (jb.length) {
    const items = ((readJson(path.join(WB, 'jobs.json')) || {}).items || []).filter(Boolean);
    for (const id of jb) { const j = items.find((x) => x.id === id); if (j) lines.push(cut(JSON.stringify(j), 4000)); }
  }
  return lines.length ? '\n[요청 · 작업 내용 — 감시가 지금 파일에서 읽은 것. 처리를 시작할 때 다시 조회하지 말고 바로 쓴다]\n' + lines.join('\n') + '\n' : '';
}
/* 이 세션에서 이미 읽은(Read) · 쓴(Edit · Write) 파일(2026-11-27): 「다시 읽지 마라」만으로는 답을 받은 차례마다 3-design.md · 4-revise-verify.md 등을
   또 읽어 차례마다 15 ~ 25초씩 늘었다(R005). 감시가 센 목록을 그대로 보여 준다. 서버 · 플러그인이 바꾸는 workbench/ · 그림은 뺀다 */
function readHint() {
  const rel = (p) => { const r = path.relative(ROOT, path.resolve(ROOT, p)); return r.startsWith('..') ? p : r.replace(/\\/g, '/'); };
  const ls = [...(((S && S.read) || new Map()).entries())].map(([p, part]) => [rel(p), part]).filter(([p]) => !/^workbench\//i.test(p) && !/\.(png|jpe?g|gif|webp)$/i.test(p));
  if (!ls.length) return '';
  return `\n[이 세션에서 이미 읽거나 쓴 파일 - 감시가 센 것. 읽은 부분은 다시 Read하지 않는다(대화가 요약돼 내용이 기억나지 않을 때만). 「일부」는 그때 읽은 범위만이라 다른 부분은 필요하면 읽는다. 사람 · 다른 PC가 바꿀 수 있는 작업 기록만 offset · limit으로 머리말 · 단계 표 · 이어 갈 곳 줄을 본다]\n${ls.slice(-60).map(([p, part]) => '- ' + p + (part ? ' (일부)' : '')).join('\n')}\n`;
}
// 같은 세션에 답만 보낼 때(질문을 남기고 기다리던 세션)
function makeResume(out) {
  return `[Workbench 요청 감시 결과 — 이 대화에서 질문을 남긴 요청에 답이 왔다]
${out}
${details(out)}
이 대화에서 「보류」 + 질문으로 멈춘 요청에 사람이 답했다(위 replies의 마지막). 이 대화에서 이미 읽은 규칙 문서 · 화면 MD는 바뀌지 않았으면 다시 읽지 말되, 답대로 **다음 단계로 넘어가면 그 단계 문서는 작업규칙대로 처음부터 읽는다**(아직 읽지 않은 문서다 — 작업규칙이 읽으라고 정한 문서 · 범위는 줄이지 않는다). 작업 기록이 있으면 처음부터 읽지 말고 머리말 · 단계 표 · 이어 갈 곳 줄만 다시 읽어 내가 마지막에 쓴 것과 같은지만 본다(다르면 처음부터가 아니라 작업규칙의 「끊긴 작업 이어 가기」대로 — docs/claude/requests-flow.md 「같은 세션에서 이어 갈 때」). 그 답대로 하던 작업을 이어서 처리하라. 답이 「Q1: 값」 · 「Q2: 값」 줄 여럿이면 사람이 질문마다 한 번에 고른 것이다 - 이 차례에 모두 반영하고 질문마다 다시 묻지 않는다. **답을 받은 차례는 빠르게**(requests-flow.md 「답을 받은 차례」): 다음 질문이 있으면 그 질문(「보류」 + ask)부터 먼저 올리고, 답 기록 · 작업 기록 쓰기는 그 뒤에 한 번에 몰아서 한다. 처리 방식(「진행 중」 → 처리 → 「완료」 또는 「보류」 + ask, 캡처, frames, 사용자에게 대화로 묻지 않기, 끝나면 몇 줄 요약)은 앞과 같다.${readHint()}${ctxHint()}${usageHint()}`;
}
// 이어서 계속(2026-11-26): Claude가 사람에게 묻지 않고 요청을 「대기」로 돌려 차례를 끝냈는데 대화가 KEEP_MAX 아래면, 새 세션을 띄우지 않고 같은 대화에 이어 보낸다
function makeCont(out) {
  return `[Workbench 요청 감시 — 이어서 계속]
${out}
${details(out)}
(질문을 먼저 올리고 기록하던 사이 사람이 답했으면 위 replies의 마지막이 새 답이다 — 그 답대로 이어 간다.)
방금 이 대화에서 「대기」로 돌려 둔 요청을 같은 대화에서 이어 간다. 새 세션이 아니니 규칙 문서 · 작업 기록 · 화면 MD를 다시 읽지 말고, 「진행 중」으로 바꾼 뒤 멈춘 곳부터 바로 이어라. 작업규칙이 사람에게 묻는 곳(「보류」 + ask)이나 끝까지 멈추지 않는다(requests-flow.md 「끊지 않고 이어 가기」). 처리 방식은 앞과 같다.${readHint()}${ctxHint()}${usageHint()}`;
}
// 차례가 끝난 뒤 그 차례의 요청 중 「보류」 + 질문(ask)으로 답을 기다리는 것(겹침 대기는 빼고)
// 요청 · 작업의 지금 note · status(차례 앞뒤로 견줘 진척을 본다)
function noteSnap(ids) {
  const rq = ((readJson(path.join(WB, 'edit_requests.json')) || {}).items || []).filter(Boolean), jb = ((readJson(path.join(WB, 'jobs.json')) || {}).items || []).filter(Boolean), o = {};
  // 답 개수(replies)도 본다(2026-11-27): 차례 중에 질문을 올리고 사람이 곧바로 답하면 서버가 「대기 · 빈 note」로 되돌려 차례 시작 때와 같아 보였고,
  //  진척 없음으로 세션을 닫아 같은 요청을 새 세션이 규칙부터 다시 읽었다(R001 19:57 · 20:13, 한 번에 약 $2). 답이 늘었으면 진척 → 같은 세션에 「이어서 계속」
  for (const id of ids) { const x = rq.find((i) => i.id === id) || jb.find((i) => i.id === id); o[id] = x ? String(x.status || '') + '|' + String(x.note || '') + '|' + String(x.work || '') + '|' + (Array.isArray(x.replies) ? x.replies.length : 0) : ''; }
  return o;
}
function progressed(ids, before) { const now2 = noteSnap(ids); return ids.some((id) => now2[id] !== (before || {})[id]); }
function waitingIds(ids) {
  const items = ((readJson(path.join(WB, 'edit_requests.json')) || {}).items || []).filter(Boolean);
  return ids.filter((id) => { const r = items.find((x) => x.id === id); return r && r.status === '보류' && r.ask && !String(r.note || '').startsWith('겹침 대기'); });
}
// 질문이 Figma 연결 · 인증 · 권한 문제인지(requests.md 0번 「Figma 파일 열림 확인」의 보류 note · ask)
function authWaiting(id) {
  const r = (((readJson(path.join(WB, 'edit_requests.json')) || {}).items) || []).find((x) => x && x.id === id); if (!r) return false;
  const t = String(r.note || '') + '\n' + String((r.ask && r.ask.q) || '') + '\n' + ((r.ask && r.ask.options) || []).map((o) => o && o.label).join(' ');
  return AUTH_RE.test(t);
}
const AUTH_RE = /Figma[^\n]{0,60}(인증|권한|로그인|연결(이|을)?\s?(안|끊|실패|필요))|(인증|편집 권한|접근 권한)[^\n]{0,30}(필요|없|공유)|다시 연결|Authenticate|auth(entication)? required/i;
// 차례가 끝난 뒤 「대기」로 돌아가 있는 요청(사람이 멈춘 것은 빼고)
//  note가 「새 세션」으로 시작하면(2026-11-27) Claude가 일부러 끊은 것 — 같은 대화에 잇지 않고 새 세션이 받는다(예: 화면 MD를 다 쓰고 그리기 전, 큰 대화를 끌고 그리면 부를 때마다 느리고 비쌌다 · R009)
function selfSplitIds(ids) {
  const items = ((readJson(path.join(WB, 'edit_requests.json')) || {}).items || []).filter(Boolean);
  return ids.filter((id) => { const r = items.find((x) => x.id === id); return r && r.status === '대기' && !r.stopped && !/^\s*\**\s*\[?새 세션/.test(String(r.note || '')); });
}
// 이어서 계속은 이 크기까지(2026-11-27): Claude는 70만 가까이에서 스스로 끊는데 감시는 70만 아래라 같은 대화에 이어 보내, 30초짜리 빈 차례가 두 번 생겼다(R009 11:03)
const CONT_MAX = 600000;
// 감시 결과가 기다리던 요청의 답뿐인지(PENDING · RESUME만, 모든 ID가 기다리던 것)
function onlyAnswers(out, keep) {
  const lines = out.split('\n').filter(Boolean);
  if (!lines.every((l) => /^(PENDING|RESUME) /.test(l))) return false;
  const ids = out.match(/\bR\d{3,}\b/g) || [];
  return ids.length > 0 && ids.every((x) => keep.includes(x));
}
function makePrompt(out) {
  return `[Workbench 요청 감시 결과]
${out}
${details(out)}
먼저 규칙 문서를 Read로 읽어라(읽지 않고 처리하지 마라): PENDING · RESUME(요청 R0xx)이면 docs/claude/requests.md, JOBS(작업 J0xx)이면 아래 작업 내용의 kind를 보고(GET /api/jobs를 다시 부르지 않는다) CLAUDE.md 「작업별 문서」 표의 문서(guide · guide-edit · guide-check = docs/claude/ux-docs.md, prototype* = docs/claude/prototype.md, minutes · plan = docs/claude/plan.md, 그 밖 = docs/claude/jobs.md). 그 문서와 CLAUDE.md 규칙대로 위 항목만 처리하라. 너는 창 없이 떠 있는 백그라운드 Claude이고 사용자는 이 대화를 보지 않는다(기록은 한국어).
- 그 팀 작업규칙(UX 문서)이 정한 읽을 문서 · 절차 · 순서 · 마침 점검 · 「하지 않는 것」을 그대로 따른다. 토큰을 아끼는 규칙은 작업규칙이 정하지 않은 곳에만 쓰고, 더 싸다고 작업규칙과 다른 방법(지름길)으로 바꾸지 마라.
- 앞서 이 대화에서 처리한 요청과 섞지 마라. 요청 · 작업 내용은 위에 있으니 다시 조회하지 말고, 상태를 바꿀 때(「진행 중」 등) 서버 응답으로 지금 상태를 확인한다. 이 PC에는 python이 없을 수 있으니 JSON은 node · PowerShell로 다룬다.
- 감시는 하지 마라(백그라운드 에이전트가 처리 뒤 다시 감시한다).
- 사용 한도 표시(get_usage · .plan_usage.json)는 건너뛴다(이 실행에는 그 도구가 없다).
- 요청 · 작업의 team(없으면 cureca)대로 일한다: CLAUDE.md 「팀」처럼 서버 API에 ?team={team}, 다른 팀이면 .history/teams/{team}/… 폴더, 사용량 기록(POST /api/usage)에도 team, Workbench 요청의 작업 기준은 GET /api/guides?team={team}.
- 사용자에게 대화로 묻지 마라. 해석이 모호하면 「보류」로 바꾸고 note에 이유, 고를 답이 있으면 \`ask\`(질문 · 선택지, CLAUDE.md)를 함께 남긴다. Figma에 접근할 수 없으면 「보류」(작업은 「실패」)와 note에 이유. 요청에 \`replies\`(사람의 답)가 있으면 마지막 답대로 이어서 처리한다.${ctxHint()}
- 요청은 감시 결과에 적힌 순서대로(우선순위 높음 먼저 · 먼저 등록한 것부터) 한 개씩 「진행 중」 → 처리 → 「완료」 순서로 한다. 「진행 중」으로 바꿀 때 서버가 「이미 진행 중」이라고 거절하면 다른 Claude 세션이 처리 중이니 그 항목은 건너뛴다. 요청 프레임이 아닌 다른 화면 · 새 프레임을 고쳤으면 그 프레임들을 모두 캡처하고 「완료」 update에 frames:[{nodeId, name}]를 함께 보낸다. 모두 끝나면 처리 내용을 몇 줄로 요약하고 이번 차례를 끝낸다.${usageHint()}`;
}

// ── 감시(예전 watch_requests): 처리할 것이 생기면 그 줄들, 1분 동안 없으면 '' ──
const T = (s) => { const t = Date.parse(String(s || '')); return isNaN(t) ? null : t; };
function others() {
  const d = path.join(ROOT, '.history', 'entries'), o = []; let fsx = [];
  try { fsx = fs.readdirSync(d).filter((n) => n.endsWith('.json') && !n.startsWith(SLUG + '_')); } catch (e) { return o; }
  for (const n of fsx) { const e = readJson(path.join(d, n)); if (!e || e.kind !== 'request' || (e.status !== '대기' && e.status !== '진행 중')) continue; const at = T(e.at); if (at == null || Date.now() - at > 3600000) continue; o.push(e); }
  return o;
}
// 겹침: 같은 파일 · 프레임에 다른 PC 요청이 「진행 중」이거나 내 요청보다 먼저 등록한 「대기」. 프레임 지정 없는 요청은 막지 않는다
function overlap(r, os) {
  const rc = T(r.createdAt) || Date.now();
  return os.filter((x) => String(r.nodeId || '') && String(x.fileKey || '') === String(r.fileKey || '') && x.nodeId === r.nodeId && (x.status === '진행 중' || ((T(x.createdAt || x.at) || Infinity) < rc)));
}
const order = (l) => l.slice().sort((a, b) => ((a.priority === '높음' ? 0 : 1) - (b.priority === '높음' ? 0 : 1)) || ((T(a.createdAt) || 8.64e15) - (T(b.createdAt) || 8.64e15)) || ((parseInt(String(a.id).replace(/\D/g, ''), 10) || 0) - (parseInt(String(b.id).replace(/\D/g, ''), 10) || 0)));
// Claude 모델(2026-11-24): 요청 · 작업마다 `model`(빈 값 = 기본, opus · sonnet · haiku). 한 차례에는 같은 모델의 것만 담는다 —
//  맨 앞(우선순위 · 등록 순) 요청(없으면 작업)의 모델을 고르고 나머지 모델은 다음 차례로. 고른 모델은 scanModel에(세션을 --model로 띄움)
let scanModel = '';
const modelOf = (x) => (['opus', 'sonnet', 'haiku'].includes(String((x && x.model) || '')) ? String(x.model) : '');
// 강도(2026-11-24, --effort): 빈 값 = 기본. 한 차례는 모델 · 강도가 같은 것끼리(runOf)
let scanEffort = '';
const effortOf = (x) => (['low', 'medium', 'high', 'xhigh', 'max'].includes(String((x && x.effort) || '')) ? String(x.effort) : '');
const runOf = (x) => modelOf(x) + '|' + effortOf(x);
function scan() {
  const out = []; let pick = null;
  const j = readJson(path.join(WB, 'edit_requests.json'));
  if (j) {
    const items = (j.items || []).filter(Boolean);
    let wait = order(items.filter((x) => x.status === '대기')), held = order(items.filter((x) => x.status === '보류' && String(x.note || '').startsWith('겹침 대기')));
    const os = wait.length || held.length ? others() : [];
    const free0 = held.filter((x) => !overlap(x, os).length);
    pick = wait[0] || free0[0] || null;
    if (pick) { const m = runOf(pick); wait = wait.filter((x) => runOf(x) === m); held = held.filter((x) => runOf(x) === m); }
    if (wait.length) {
      out.push('PENDING ' + wait.map((x) => x.id).join(','));
      for (const r of wait) for (const c of overlap(r, os)) out.push(`CONFLICT ${r.id} ${c.id} ${c.status === '진행 중' ? 'in-progress' : 'waiting'}`);
    }
    const free = held.filter((x) => !overlap(x, os).length);
    if (free.length) out.push('RESUME ' + free.map((x) => x.id).join(','));
  }
  const q = readJson(path.join(WB, 'jobs.json'));
  if (q) {
    let todo = (q.items || []).filter((x) => x && x.status === '대기' && x.kind !== 'text' && x.kind !== 'fill' && x.kind !== 'transfer' && (x.kind !== 'capture' || (!x.auto && Date.now() - (T(x.createdAt) || Date.now()) >= 20000)));
    if (!pick && todo.length) pick = todo[0];
    if (pick) todo = todo.filter((x) => runOf(x) === runOf(pick));
    if (todo.length) out.push('JOBS ' + todo.map((x) => x.id).join(','));
  }
  scanModel = modelOf(pick); scanEffort = effortOf(pick);
  return out.join('\n');
}
async function watch(maxMs) {
  const until = Date.now() + maxMs; let beat = 0;
  while (Date.now() < until) {
    if (Date.now() - beat >= 20000) { beat = Date.now(); try { fs.writeFileSync(path.join(WB, '.watcher.json'), JSON.stringify({ at: now(), host: HOST }), 'utf8'); } catch (e) {} }
    if (exists(STOP) || exists(RENEW)) return '';
    let o = ''; try { o = scan(); } catch (e) {}
    if (o) return o;
    if (Date.now() - savedAt >= 15000) save(null, null);
    await sleep(2000);
  }
  return '';
}

// 「resets 6:50pm (Asia/Seoul)」 → 그 시각(이 PC 시간, 지났으면 다음 날) + 1분. 못 읽으면 30분 뒤
// 풀리는 시각: 「resets 6:50pm」(5시간) · 「resets Nov 20, 6pm」 · 「resets Nov 20 at 6pm」(주간, 2026-11-17 — 예전에는 날짜를 못 읽어 30분마다 다시 띄웠다)
const MON = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
function limitUntil(t) {
  const m = /resets\s+(?:on\s+)?(?:([A-Za-z]{3})[a-z]*\.?\s+(\d{1,2}),?\s+)?(?:at\s+)?(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i.exec(t);
  if (!m) return Date.now() + 30 * 60000;
  // 오전 · 오후 표시가 없으면 24시간 표기로 읽는다(「20:51」이 8:51이 되던 것, 2026-11-18)
  const h0 = parseInt(m[3], 10); let h = m[5] ? (h0 % 12) + (/pm/i.test(m[5]) ? 12 : 0) : h0 % 24;
  const d = new Date(); d.setHours(h, parseInt(m[4] || '0', 10), 0, 0);
  const mo = m[1] ? MON[m[1].toLowerCase()] : undefined;
  if (mo !== undefined) { d.setMonth(mo, parseInt(m[2], 10)); if (d.getTime() <= Date.now() - 86400000) d.setFullYear(d.getFullYear() + 1); }
  // 시각이 막 지난 뒤(1시간 안)에 받은 메시지는 「곧 풀림」— 다음 날로 넘기지 않는다(리셋 몇 초 뒤 받으면 24시간 쉬던 것)
  else if (d.getTime() <= Date.now() && Date.now() - d.getTime() > 3600000) d.setDate(d.getDate() + 1);
  return Math.max(d.getTime(), Date.now()) + 60000;
}

async function main() {
  if (!(await single())) process.exit(0);
  // (예전 에이전트 표시도 함께) 다른 에이전트가 이미 돌고 있으면(상태 150초 이내 · 프로세스 살아 있음) 끝낸다
  const o = readJson(STATE);
  if (o && o.pid && o.pid !== process.pid && o.status !== 'stopped' && Date.now() - (T(o.at) || 0) < 150000) { try { process.kill(o.pid, 0); process.exit(0); } catch (e) {} }
  if (!CLAUDE || !exists(CLAUDE)) { save('error', 'Claude Code CLI를 찾지 못했습니다.'); log('Claude Code CLI 없음 — 종료'); process.exit(1); }
  try { fs.rmSync(STOP, { force: true }); } catch (e) {}
  save('idle', '준비 확인 중 (Claude 로그인 · Figma 연결)'); log(`시작 (Node pid ${process.pid}, ${CLAUDE})`);
  let last = '', repeat = 0, nextUsage = 0;
  const pause = (n) => pauseUntil(Date.now() + n * 15000, false);
  // 시각까지 쉼(2026-11-18): 횟수로 세면 PC가 절전 · 잠자기에 들어간 동안 타이머가 멈춰, 풀리는 시각이 한참 지나도 계속 쉬었다(20:51 → 다음 날 아침까지 「한도」)
  //  벽시계로 보고, 쉬는 동안에도 5분마다 사용량을 읽어 한도가 이미 풀렸으면(5시간 사용률 100% 미만) 바로 끝낸다
  const pauseUntil = async (t, early) => {
    let probe = Date.now() + USAGE_MIN * 60000;
    while (Date.now() < t) {
      if (exists(STOP)) return 'stop'; if (exists(RENEW)) return 'renew';
      await sleep(Math.max(1000, Math.min(15000, t - Date.now()))); save(null, null);
      if (early && Date.now() >= probe) { const at = Date.now(); probe = at + USAGE_MIN * 60000; if ((await probeUsage()) && limitOver(at)) return 'over'; }
    }
    return 'time';
  };
  while (true) {
    if (exists(STOP)) { try { fs.rmSync(STOP, { force: true }); } catch (e) {} await stopSession('중지'); save('stopped', '중지됨'); log('중지'); process.exit(0); }
    if (Date.now() >= nextUsage && Ready !== false) { nextUsage = Date.now() + USAGE_MIN * 60000; await probeUsage(); }
    if (exists(RENEW)) { try { fs.rmSync(RENEW, { force: true }); } catch (e) {} await stopSession('로그인 · Figma 연결 창을 열어 새로 띄움'); Ready = null; nextCheck = 0; }
    if (S && S.ended) await stopSession('세션이 끝나 있음');
    else if (S && S.keep && Date.now() >= S.keepUntil) { await stopSession(`질문 답을 ${KEEP_MIN}분 기다림 — 답이 오면 새 세션`); save('idle', '요청을 기다리는 중'); }
    else if (S && !S.keep && S.turns > 0 && Date.now() - S.last >= IDLE_MIN * 60000) await stopSession(`${IDLE_MIN}분 쉼`);
    if (!S && Ready !== true && Date.now() >= nextCheck) { Ready = await checkReady(); nextCheck = Date.now() + 120000; if (Ready) save('idle', '요청을 기다리는 중'); }
    if (Ready === false) { await pause(8); continue; }
    save(null, null);
    // 처리 중이 아닐 때 남은 멈춤 표시(이미 끝났거나 다른 세션이 처리하던 요청)는 지운다 — 다음에 같은 ID를 다시 진행할 때 잘못 끊지 않게
    if (exists(CANCEL)) { try { fs.rmSync(CANCEL, { force: true }); } catch (e) {} }
    const out = await watch(60000);
    if (!out) continue;
    // 이미 한도가 찼으면 띄우지 않는다(2026-11-25): 감시를 다시 켠 직후 등, 마지막으로 읽은 사용량이 100%이고 초기화 전이면
    //  세션을 띄워 바로 한도에 걸리지 않고(요청이 잠깐 「진행 중」으로 보였다 — 17:13 R002) 초기화 시각까지 쉰다
    {
      const u0 = usageNow();
      if (u0 && u0.pct >= 100 && u0.resetsAt && u0.resetsAt > Date.now()) {
        const ld = new Date(u0.resetsAt), hm = ld.toTimeString().slice(0, 5);
        save('limit', `Claude 사용 한도(${u0.label})가 차 있어 ${hm}에 다시 시작합니다. 그 사이 요청은 「대기」로 남습니다.`); log(`사용 한도가 이미 참 — ${hm}까지 쉼: ${out.split('\n')[0]}`);
        const why = await pauseUntil(u0.resetsAt + 60000, u0.label === '5시간');
        if (why === 'stop' || why === 'renew') continue;
        nextUsage = Date.now() + USAGE_MIN * 60000; save('idle', '사용 한도가 풀려 요청을 기다리는 중'); log('사용 한도 풀림 — 다시 받음' + (why === 'over' ? ' (사용량 확인)' : ''));
        continue;
      }
    }
    if (out === last) repeat++; else { last = out; repeat = 1; }
    if (repeat > 3) { save('error', '같은 요청이 처리되지 않아 10분 쉽니다: ' + out.split('\n')[0]); log('반복 처리 실패 — 10분 대기: ' + out); await pause(40); repeat = 0; continue; }
    // 사용량이 높으면 알림만(처리는 그대로): 처리 중 상태 글과 기록에 붙인다
    const us = usageNow(), usTxt = us && us.pct >= WARN_PCT ? ` · Claude ${us.label} 사용량 ${us.pct}%${us.resetsAt ? '(' + hmOf(us.resetsAt) + ' 초기화)' : ''} — 중간에 끊길 수 있음` : '';
    // 질문을 남기고 기다리던 세션: 그 요청의 답만 왔으면 이어 쓰고, 다른 요청 · 작업이 섞였으면 닫고 새로(앞 대화와 섞지 않게)
    let resume = false;
    const model = scanModel, effort = scanEffort;
    if (S && S.keep) { if (onlyAnswers(out, S.keep) && S.model === model && S.effort === effort) resume = true; else await stopSession('다른 요청이 와서 새 세션'); }
    if (S && (S.model !== model || S.effort !== effort)) await stopSession('모델 · 강도가 달라 새 세션');
    const cont = resume && S && S.cont; if (S) { S.keep = null; S.cont = false; }
    if (!S) startSession(model, effort);
    if (!S) { save('error', 'Claude 세션을 띄우지 못했습니다. 기록: workbench/.agent.log'); await sleep(30000); continue; }
    S.turnIds = out.match(/\b[RJ]\d{3,}\b/g) || [];
    const turnStart = noteSnap(S.turnIds);
    St.ids = S.turnIds.slice(); St.act = now(); St.tool = '';
    const mTxt = (model ? ' · 모델 ' + model : '') + (effort ? ' · 강도 ' + effort : '');
    save('working', '처리 중: ' + out.split('\n').join(' · ') + mTxt + usTxt); log((cont ? '처리 시작(같은 세션에 이어서 계속): ' : resume ? '처리 시작(같은 세션에 답 보냄): ' : '처리 시작: ') + out + mTxt + usTxt);
    const r = await sendTurn((cont ? makeCont(out) : resume ? makeResume(out) : makePrompt(out)) + await pluginHint(out));
    log(`처리 끝 (ok ${r.ok}${r.ms ? ', ' + Math.round(r.ms / 1000) + '초' : ''})\n${r.text}`);
    if (r.ok && !r.cancelled && !r.dead) await saveRaw(S.turnIds || [], r.text);
    // 진척이 있었으면 「반복」으로 세지 않는다(2026-11-20): 「나눠서 이어 가기」(requests-flow.md)로 일을 하고 「대기」로 돌린 요청은
    //  같은 「PENDING R0xx」로 다시 오는데, 4번째에 「같은 요청이 처리되지 않아 10분 쉼」에 걸렸다(R043). 이 차례에 요청 note가 바뀌었으면 진척으로 본다
    const prog = r.ok && !r.cancelled && !r.dead && progressed(S.turnIds || [], turnStart);
    if (prog) { last = ''; repeat = 0; }
    // 사람이 멈춤: 세션을 끊는다. 같은 차례의 다른 요청은 서버가 10분 뒤 「대기」로 돌려 다시 처리된다
    // 고른 모델을 쓸 수 없음(사용 크레딧 필요 등): 「보류」 · 「실패」로 바꾸고 다음으로
    if (!r.ok && /requires usage credits|Switch to another model|model .{0,40}(not available|not found|does not exist)/i.test(r.text)) {
      const mids = (S && S.turnIds) || [], why = (/[^\n]*(requires usage credits|not available|not found|does not exist)[^\n]*/i.exec(r.text) || [r.text.slice(0, 120)])[0].trim();
      await stopSession('모델 사용 불가: ' + (model || '기본'));
      const held = await holdOnModel(mids, model, why);
      save('idle', `모델 ${model || '기본'}을 쓸 수 없어 ${held.join(', ') || '요청'}을(를) 멈췄습니다 — ${why}`); log(`모델 사용 불가 (${model}): ${why} — ${held.join(', ')}`);
      last = ''; repeat = 0; continue;
    }
    if (r.cancelled) { await stopSession('사람이 멈춤: ' + r.cancelled.join(', ')); save('idle', '멈춤: ' + r.cancelled.join(', ') + ' — 요청을 기다리는 중'); continue; }
    // 사용 한도(5시간 · 주간)에 걸림: 풀리는 시각까지 다시 띄우지 않는다(2026-11-16 — 예전에는 3번 실패 후 10분마다 헛되이 다시 띄우며 「확인 필요」로만 보였다)
    //  실패한 차례만 본다(2026-11-17 — 정상 답에 「rate limit」(Figma API 한도 등)이란 말만 있어도 30분 쉬던 것)
    const lim = !r.ok && /hit your .{0,20}limit|usage limit|limit reached|rate limit/i.test(r.text) ? limitUntil(r.text) : 0;
    if (lim) {
      const lids = (S && S.turnIds) || [];
      await stopSession('사용 한도');
      const ld = new Date(lim), same = ld.toDateString() === new Date().toDateString(), hm = (same ? '' : (ld.getMonth() + 1) + '/' + ld.getDate() + ' ') + ld.toTimeString().slice(0, 5);
      const rel = await releaseOnLimit(lids, hm);
      save('limit', `Claude 사용 한도에 걸려 ${hm}에 다시 시작합니다. 그 사이 요청은 「대기」로 남습니다.`); log(`사용 한도 — ${hm}까지 쉼: ${out.split('\n')[0]}` + (rel.length ? ` (「대기」로 돌림: ${rel.join(', ')})` : ''));
      last = ''; repeat = 0;
      // 5시간 한도일 때만 사용량 확인으로 일찍 끝낸다(주간 · 모델별 한도 · API 429는 두 창으로 알 수 없어 시각까지)
      const why = await pauseUntil(Math.max(lim, Date.now() + 60000), /5-hour|five.hour/i.test(r.text));
      if (why === 'stop' || why === 'renew') continue;   // 중지 · 로그인 창: 위에서 처리(「풀림」이라고 하지 않음)
      nextUsage = Date.now() + USAGE_MIN * 60000; save('idle', '사용 한도가 풀려 요청을 기다리는 중'); log('사용 한도 풀림 — 다시 받음' + (why === 'over' ? ' (사용량 확인)' : '')); continue;
    }
    if (/Not logged in|Please run \/login|Invalid API key/.test(r.text)) { await stopSession('로그인 필요'); save('login', 'Claude CLI 로그인이 필요합니다. 시작 안내 5단계(CLI)의 「Claude 로그인 · Figma 연결」을 진행하세요.'); await pause(8); continue; }
    if (r.dead) { await stopSession('응답 없음 · 세션 끊김'); save('error', '처리 중 세션이 끊겨 새로 띄웁니다. 기록: workbench/.agent.log'); continue; }
    const pct = S.win ? Math.round(100 * S.ctx / S.win) : 0, ctx = S.ctx;
    const wait = r.ok && ctx < KEEP_MAX ? waitingIds(S.turnIds.filter((x) => /^R/.test(x))) : [];
    // Figma 연결 · 인증 · 권한 문제로 멈춘 질문은 세션을 두지 않는다(2026-11-27): 떠 있는 세션의 Figma 연결은 사람이 다시 인증해도 새로 맺어지지 않아,
    //  같은 세션에 답을 보내면 또 「인증 필요」였다(11-26 09:45 ~ 09:53 세 번, 1시간 20분 늦어짐). 답은 새 세션(새 연결)이 받는다
    const authHold = wait.filter(authWaiting);
    if (authHold.length) {
      await stopSession(`${authHold.join(', ')} Figma 연결 · 인증 문제로 멈춤 — 답이 오면 새 세션(새 Figma 연결)`, true);
      save('idle', `${authHold.join(', ')} Figma 연결 · 인증 확인을 기다리는 중(답이 오면 새 세션으로 이어서 처리)`);
      continue;
    }
    if (wait.length) {
      S.keep = wait; S.keepUntil = Date.now() + KEEP_MIN * 60000;
      const hm = new Date(S.keepUntil).toTimeString().slice(0, 5);
      log(`세션 유지 — ${wait.join(', ')} 질문 답 기다림 (${hm}까지, 컨텍스트 ${pct}%, ${ctx} 토큰)`);
      save('idle', `${wait.join(', ')} 질문 답을 기다리는 중(${hm}까지 이어서 처리) · 컨텍스트 ${pct}%`);
      continue;
    }
    // 사람에게 묻지 않고 「대기」로 돌려 끝낸 요청(나눠서 이어 가기): 진척이 있었고 KEEP_MAX 아래면 같은 세션에 「이어서 계속」(한 세션 12번까지)
    const self = prog && ctx < CONT_MAX && S.conts < 12 ? selfSplitIds(S.turnIds.filter((x) => /^R/.test(x))) : [];
    if (self.length) {
      S.conts++; S.keep = self; S.cont = true; S.keepUntil = Date.now() + KEEP_MIN * 60000;
      log(`세션 유지 — ${self.join(', ')} 같은 세션에서 이어서 계속 (컨텍스트 ${pct}%, ${ctx} 토큰)`);
      save('idle', `${self.join(', ')} 같은 세션에서 이어서 계속 · 컨텍스트 ${pct}%`);
      continue;
    }
    await stopSession(`처리 끝 — 다음 요청은 새 세션 (컨텍스트 ${pct}%, ${ctx} 토큰)`, true);   // 토큰 절약: 처리를 마치면 세션을 닫는다
    save('idle', '마지막 처리: ' + out.split('\n')[0] + (r.ok ? '' : ' (오류 응답)') + ` · 컨텍스트 ${pct}%`);
  }
}
process.on('uncaughtException', (e) => { log('잡지 못한 오류: ' + (e && e.stack || e)); });
process.on('exit', () => { try { if (S && S.p && S.p.exitCode == null) killTree(S.p); } catch (e) {} });
main().catch((e) => { log('에이전트 오류로 끝남: ' + (e && e.stack || e)); save('error', '에이전트 오류: ' + e.message); process.exit(1); });
