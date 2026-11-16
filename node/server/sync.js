'use strict';
// 작업 이력 공유(2026-11-16, workbench/history_sync.ps1 · history_sync.sh의 반복 동기화를 Node로 — 서버 안에서 돈다):
//  .history 폴더(깃 history 브랜치)를 받고(pull) 이 PC의 새 이력을 올린다(push). 윈도우 · 맥 같은 코드.
//  - 5초마다 원격이 바뀌었는지만 가볍게 묻고(ls-remote), 바뀌었거나 이 PC에 새 이력이 있을 때만 받고 올린다.
//    서버가 workbench/.history_sync_now를 만들면(이력이 생김 · [깃 동기화]) 기다리지 않고 바로 맞춘다
//  - 원격 주소: workbench/git_remote.txt(없을 때만 작업 폴더의 origin). 상태: workbench/.history_sync.json {at, checkedAt, ok, message, busy, retrying, fails}
//  - 잠깐 실패는 5초 뒤 다시(3번 연달아 실패해야 「실패」), 로그인 · 권한 · 주소 문제는 바로 「실패」(그 뒤 1분마다 다시)
//  - 충돌(두 PC가 같은 파일을 고침): rebase를 멈추고 merge로 다시 — 충돌한 파일은 **파일 통째로** 나중에 저장한 쪽 것,
//    이름 바뀜 짐작 끔(no-renames), 진 쪽 파일은 conflicts/kept/{시각}_{PC}/{경로}, 파일마다 conflicts/{PC}.log
//  - workbench/.history_sync_off가 있으면 이 PC는 받지도 올리지도 않는다. workbench/.history_sync.lock이 있으면(시작 안내 「깃허브 연결」이
//    history_sync.ps1 · .sh -Interactive로 로그인 창을 띄워 맞추는 중) 쉰다 — 로그인 창이 필요한 처음 연결은 예전 스크립트가 한다
const fs = require('fs');
const path = require('path');
const { spawn, spawnSync } = require('child_process');
const core = require('./core');

const C = core.C;
let st = null, busy = false, timer = null, log = () => {};
const WB = () => path.join(C.root, 'workbench');
const F = { stat: () => path.join(WB(), '.history_sync.json'), now: () => path.join(WB(), '.history_sync_now'), lock: () => path.join(WB(), '.history_sync.lock'), off: () => path.join(WB(), '.history_sync_off') };
const H = () => C.histDir;
const MAX_FAILS = 3, EVERY = 5000;
class Done extends Error {}

function gitEnv() {
  const env = Object.assign({}, process.env, { GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'Never' });
  if (process.platform === 'win32') {
    const add = [path.join(process.env.ProgramFiles || 'C:\\Program Files', 'Git', 'cmd'), path.join(process.env.LOCALAPPDATA || '', 'Programs', 'Git', 'cmd')].filter((d) => core.exists(path.join(d, 'git.exe')));
    if (add.length) env.PATH = add.join(';') + ';' + (env.PATH || env.Path || '');
  }
  return env;
}
let ENV = null;
// git 실행: {code, out(표준 + 오류, 앞뒤 공백 뺌)}. 기본 2분에서 끊는다
function git(args, o) {
  o = o || {};
  return new Promise((res) => {
    let out = '', done = false;
    let p; try { p = spawn('git', args, { cwd: o.cwd || H(), env: ENV || (ENV = gitEnv()), windowsHide: true }); } catch (e) { return res({ code: -1, out: e.message }); }
    const t = setTimeout(() => { if (!done) { try { p.kill(); } catch (e) {} } }, o.timeout || 120000);
    p.stdout.on('data', (d) => { out += d.toString('utf8'); }); p.stderr.on('data', (d) => { out += d.toString('utf8'); });
    p.on('error', (e) => { if (done) return; done = true; clearTimeout(t); res({ code: -1, out: e.message }); });
    p.on('close', (c) => { if (done) return; done = true; clearTimeout(t); res({ code: c == null ? -1 : c, out: out.trim() }); });
  });
}
const last = (s) => { const l = String(s || '').split('\n').map((x) => x.trim()).filter(Boolean); return l.length ? l[l.length - 1] : ''; };
function hasGit() {
  if (C.isMac) { try { if (String(spawnSync('/usr/bin/xcode-select', ['-p'], { encoding: 'utf8' }).stdout || '').trim()) return true; } catch (e) {} try { return spawnSync('which', ['brew']).status === 0; } catch (e) { return false; } }
  try { return spawnSync('git', ['--version'], { env: ENV || (ENV = gitEnv()), windowsHide: true }).status === 0; } catch (e) { return false; }
}

function loadSt() {
  st = { at: '', checkedAt: '', ok: false, message: '', busy: false, retrying: false, fails: 0 };
  const o = core.readJson(F.stat()); if (o) for (const k of ['at', 'checkedAt', 'ok', 'message', 'retrying', 'fails']) if (o[k] != null) st[k] = o[k];
}
function saveSt() { const t = F.stat() + '.tmp'; try { fs.writeFileSync(t, JSON.stringify(st, null, 2), 'utf8'); fs.renameSync(t, F.stat()); } catch (e) { try { core.writeJson(F.stat(), st); } catch (x) {} } }
function done(ok, msg, hard) {
  st.busy = false; st.checkedAt = core.now();
  if (ok) Object.assign(st, { ok: true, message: msg, at: st.checkedAt, retrying: false, fails: 0 });
  else {
    st.fails = (parseInt(st.fails, 10) || 0) + 1;
    if (hard || st.fails >= MAX_FAILS || !st.ok) Object.assign(st, { ok: false, retrying: false, message: msg });
    else Object.assign(st, { retrying: true, message: `다시 시도 중(${st.fails}/${MAX_FAILS}): ${msg}` });
  }
  saveSt(); throw new Done();
}
function who() {
  const id = [];
  return Promise.all([git(['config', 'user.name']), git(['config', 'user.email'])]).then(([n, m]) => {
    if (!n.out || n.code) id.push('-c', 'user.name=' + (String(core.readSetup().user || '') || C.pcName));
    if (!m.out || m.code) id.push('-c', 'user.email=workbench@localhost');
    return id;
  });
}
const slug = () => String(C.pcName).replace(/\.local$/i, '').toLowerCase().replace(/[^a-z0-9-]/g, '-');
function stamp() { return core.now().slice(0, 19).replace(/[-:]/g, '').replace('T', '-'); }

// 충돌 맞추기: rebase를 멈추고 merge로 — 충돌한 파일은 나중에 저장한 쪽 것을 통째로, 진 쪽 파일은 conflicts/kept에
async function resolveConflict(id) {
  await git(['rebase', '--abort']);
  let r = await git(['fetch', '-q', 'origin', 'history']); if (r.code) done(false, '받기(fetch) 실패: ' + last(r.out));
  const lt = parseInt((await git(['log', '-1', '--format=%ct', 'HEAD'])).out, 10) || 0, rt = parseInt((await git(['log', '-1', '--format=%ct', 'FETCH_HEAD'])).out, 10) || 0;
  const mine = lt >= rt, win = mine ? 2 : 3, lose = 5 - win, whoWin = mine ? '이 PC' : '다른 PC';   // merge에서 2 = 이 PC, 3 = 받은 쪽
  r = await git(id.concat(['-c', 'merge.renames=false', 'merge', '-q', '--no-ff', '-X', 'no-renames', '-m', `history: 충돌 맞춤 ${C.pcName} ${core.now().slice(0, 16).replace('T', ' ')}`, 'FETCH_HEAD']));
  if (!r.code) return;   // 줄이 부딪치지 않았으면(rebase만 실패) 그대로 합쳐짐
  const files = (await git(['-c', 'core.quotePath=false', 'diff', '--name-only', '--diff-filter=U'])).out.split('\n').map((x) => x.trim()).filter(Boolean);
  if (!files.length) { await git(['merge', '--abort']); done(false, '받기(합치기) 실패: ' + last(r.out)); }
  const tag = stamp() + '_' + slug(), lines = [];
  for (const f of files) {
    let kept = '';
    const t = await git(['checkout-index', '--stage=' + lose, '--temp', '--', f]);
    if (!t.code && t.out) {
      const tmp = path.join(H(), t.out.split('\t')[0]), dst = path.join(H(), 'conflicts', 'kept', tag, ...f.split('/'));
      try { fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.renameSync(tmp, dst); kept = `, 진 쪽: conflicts/kept/${tag}/${f}`; } catch (e) { try { fs.rmSync(tmp, { force: true }); } catch (x) {} }
    }
    let how;
    if ((await git(['cat-file', '-e', `:${win}:${f}`])).code) { await git(['rm', '-q', '-f', '--', f]); how = '지움'; }
    else { await git(['checkout', mine ? '--ours' : '--theirs', '--', f]); await git(['add', '--', f]); how = '파일 통째로'; }
    lines.push(`  - ${f} → ${whoWin} 것(${how})${kept}`);
  }
  r = await git(id.concat(['commit', '-q', '--no-edit']));
  if (r.code) { await git(['merge', '--abort']); done(false, '받기(pull) 실패 · 충돌: ' + last(r.out)); }
  try {
    const lf = path.join(H(), 'conflicts', slug() + '.log'); fs.mkdirSync(path.dirname(lf), { recursive: true });
    fs.appendFileSync(lf, `[${core.now()}] 충돌 → 나중에 저장한 ${whoWin} 내용으로 맞춤(파일 ${files.length}개)\n${lines.join('\n')}\n`, 'utf8');
    core.syncWant();   // 기록 · 진 쪽 파일을 바로 올리게
  } catch (e) {}
  log(`깃 동기화 충돌 ${files.length}개 → ${whoWin} 것으로 맞춤`);
}

async function syncOnce() {
  if (!hasGit()) done(false, C.isMac ? 'git(개발자 도구)이 설치돼 있지 않아 이 PC에만 저장합니다.' : 'git이 설치돼 있지 않아 이 PC에만 저장합니다.', true);
  for (const d of [H(), path.join(H(), 'entries'), path.join(H(), 'shots')]) fs.mkdirSync(d, { recursive: true });
  let url = String(core.readText(path.join(WB(), 'git_remote.txt')) || '').trim();
  if (!url) { const o = await git(['remote', 'get-url', 'origin'], { cwd: C.root }); url = o.code ? '' : o.out.trim(); }
  if (!url) done(false, '공유할 깃 저장소 주소가 없어 이 PC에만 저장합니다. (workbench/git_remote.txt)', true);
  if (!core.exists(path.join(H(), '.git'))) { await git(['init', '-q']); await git(['remote', 'add', 'origin', url]); await git(['symbolic-ref', 'HEAD', 'refs/heads/history']); }
  else if ((await git(['remote', 'get-url', 'origin'])).out.trim() !== url) await git(['remote', 'set-url', 'origin', url]);
  // 원격에 history 브랜치가 있는지(0 있음, 2 없음, 그 밖 연결 실패)
  const ls = await git(['ls-remote', '--exit-code', '--heads', 'origin', 'history']);
  let remote = ls.code;
  if (remote !== 0 && remote !== 2) {
    if (/not found|403|denied/i.test(ls.out)) done(false, '저장소에 접근할 수 없습니다. 저장소 관리자에게 깃허브 아이디를 알려 초대를 받고, 메일 · 깃허브 알림에서 수락한 뒤 [깃허브 연결]을 다시 누르세요.', true);
    if (/Authentication|could not read Username|terminal prompts disabled/i.test(ls.out)) done(false, '깃허브 로그인이 필요합니다. 시작 안내 6단계의 [깃허브 연결]을 누르세요.', true);
    done(false, '깃 서버에 연결하지 못했습니다. ' + last(ls.out));
  }
  let hasHead = (await git(['rev-parse', '-q', '--verify', 'HEAD'])).code === 0;
  if (remote === 0) {
    const f = await git(['fetch', '-q', 'origin', 'history']); if (f.code) done(false, '받기(fetch) 실패: ' + last(f.out));
    if (!hasHead) { const c = await git(['checkout', '-q', '-f', '-B', 'history', 'FETCH_HEAD']); if (c.code) done(false, '받기 실패: ' + last(c.out)); hasHead = true; }
  }
  const id = await who();
  // 이 PC의 새 이력 커밋
  await git(['add', '-A', '.']);
  if ((await git(['diff', '--cached', '--quiet'])).code) {
    const c = await git(id.concat(['commit', '-q', '-m', `history: ${C.pcName} ${core.now().slice(0, 16).replace('T', ' ')}`])); if (c.code) done(false, '커밋 실패: ' + last(c.out));
    hasHead = true;
  }
  if (!hasHead) done(true, '깃허브에 연결했습니다. 아직 공유된 이력이 없습니다.');
  // 받고(pull) 올린다(push). 그 사이 다른 PC가 먼저 올려 거절되면 바로 다시(최대 3번)
  for (let tr = 1; ; tr++) {
    if (remote === 0) {
      const p = await git(id.concat(['-c', 'merge.renames=false', 'pull', '-q', '--rebase', '-X', 'no-renames', 'origin', 'history']));
      if (p.code) await resolveConflict(id);
    }
    const ps = await git(['push', '-q', '-u', 'origin', 'history']);
    if (!ps.code) break;
    if (tr < 3 && /rejected|fetch first|non-fast-forward|failed to push some refs/i.test(ps.out)) { remote = 0; await new Promise((r) => setTimeout(r, 300 * tr)); continue; }
    done(false, '올리기(push) 실패: ' + last(ps.out));
  }
  done(true, '깃과 맞췄습니다.');
}
async function runSync() {
  if (busy) return; busy = true; st.busy = true; saveSt();
  try { await syncOnce(); } catch (e) { if (!(e instanceof Done)) { try { done(false, '오류: ' + e.message); } catch (x) {} } }
  finally { busy = false; }
}
// 가벼운 확인: 올릴 이력이 있거나 원격 history가 내 것과 다르면 맞춰야 한다
async function needSync() {
  if (!st.ok || st.retrying || !core.exists(path.join(H(), '.git'))) return true;
  const rf = String(core.readText(path.join(WB(), 'git_remote.txt')) || '').trim();
  if (rf && (await git(['remote', 'get-url', 'origin'])).out.trim() !== rf) return true;
  if ((await git(['status', '--porcelain'])).out) return true;
  const r = await git(['ls-remote', 'origin', 'refs/heads/history'], { timeout: 30000 }); if (r.code) return true;
  const head = (await git(['rev-parse', '-q', '--verify', 'HEAD'])).out.trim();
  return r.out.split(/\s+/)[0] !== head;
}
let nextAt = 0;
async function tick() {
  timer = null;
  try {
    if (core.exists(F.off())) return;
    const now = core.exists(F.now());
    if (!now && Date.now() < nextAt) return;
    if (now) { try { fs.rmSync(F.now(), { force: true }); } catch (e) {} }
    if (core.exists(F.lock())) return;
    if (busy) return;
    nextAt = Date.now() + (!st.ok && !st.retrying ? 60000 : EVERY);   // 「실패」 뒤에는 1분에 한 번만
    if (now || (await needSync())) await runSync(); else { st.checkedAt = core.now(); saveSt(); }
  } catch (e) { log('깃 동기화 확인 오류: ' + e.message); }
  finally { if (!timer) timer = setTimeout(tick, 500); }
}
function start(logFn) {
  if (logFn) log = logFn;
  loadSt();
  try { fs.rmSync(F.lock(), { force: true }); } catch (e) {}   // 지난 실행이 남긴 잠금(대화형 동기화 중 서버가 꺼진 것)
  timer = setTimeout(tick, 300);
}
module.exports = { start, runSync, git };
