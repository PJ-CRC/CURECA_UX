'use strict';
// PC별 감시(백그라운드 에이전트) 상태(2026-11-19)
//  - 모든 PC: 서버가 1분마다 이 PC 에이전트 상태(workbench/.agent.json)와 기록(workbench/.agent.log)의 최근 끊김 · 오류를 모아
//    .history/agents/{PC}.json 하나에 덮어쓴다(깃으로 공유). 내용이 바뀌었거나 10분이 지났을 때만 써서 이력 동기화를 늘리지 않는다
//  - 보기: 개발 PC만. workbench/dev.flag가 있는 PC에서만 GET /api/agents · 「감시 상태」 메뉴가 열린다(dev.flag는 배포 · 깃에 들어가지 않음)
const fs = require('fs');
const path = require('path');
const core = require('./core');
const { C } = core;

const DIR = () => path.join(C.histDir, 'agents');
const FILE = () => path.join(DIR(), `${C.pcSlug}.json`);
const isDev = () => core.exists(path.join(C.root, 'workbench', 'dev.flag'));
const HEARTBEAT = 10 * 60 * 1000, EVENTS = 20, TURNS = 5;

// 기록 한 줄이 「끊김 · 오류 · 시작 · 중지」면 {kind, text}. 평소 일(처리 시작 · 정상 세션 종료 · 한도 확인)은 빼고 처리 차례는 turns로 따로 본다
function classify(t) {
  if (/^시작 \(Node pid/.test(t)) return { kind: 'start', text: '감시 시작' };
  if (/^중지$/.test(t)) return { kind: 'stop', text: '감시 중지' };
  if (/^세션 종료 \(/.test(t)) {
    if (/처리 끝|분 쉼|질문 답을|다른 요청이 와서|로그인 · Figma 연결 창|사용 한도\)|^세션 종료 \(중지\)/.test(t)) return null;   // 사용 한도는 「사용 한도 — …」 줄로 따로 남음
    return { kind: /사람이 멈춤/.test(t) ? 'stop' : 'error', text: t };
  }
  if (/^처리 끝 \(ok false/.test(t)) return { kind: 'error', text: '오류 응답으로 끝남 ' + t.replace(/^처리 끝 /, '') };
  if (/^준비 확인: /.test(t) && !/연결됨|그대로 진행/.test(t)) return { kind: 'error', text: t };
  if (/^(사용 한도|반복 처리 실패|세션 시작 실패|잡지 못한 오류|에이전트 오류|Claude Code CLI 없음|원래 답변 저장 실패)/.test(t)) return { kind: /^사용 한도/.test(t) ? 'limit' : 'error', text: t };
  return null;
}
function readLog() {
  const f = path.join(C.root, 'workbench', '.agent.log'); let s = '';
  try { const st = fs.statSync(f), n = Math.min(st.size, 200 * 1024), fd = fs.openSync(f, 'r'), b = Buffer.alloc(n); fs.readSync(fd, b, 0, n, st.size - n); fs.closeSync(fd); s = b.toString('utf8'); } catch (e) { return { events: [], turns: [] }; }
  const events = [], turns = []; let open = null;
  for (const line of s.split(/\r?\n/)) {
    const m = /^\[([^\]]+)\] (.*)$/.exec(line); if (!m) continue;
    const at = m[1], t = m[2].trim();
    if (/^처리 시작/.test(t)) { open = { at, what: t.replace(/^처리 시작(\(같은 세션에 답 보냄\))?: /, '').slice(0, 120), resume: /같은 세션/.test(t) }; continue; }
    const e = /^처리 끝 \(ok (true|false)(?:, (\d+)초)?/.exec(t);
    if (e && open) { turns.push(Object.assign(open, { end: at, ok: e[1] === 'true', sec: e[2] ? parseInt(e[2], 10) : null })); open = null; }
    const c = classify(t); if (c) events.push({ at, kind: c.kind, text: c.text.slice(0, 200) });
  }
  if (open) turns.push(Object.assign(open, { end: '', ok: null, sec: null }));   // 처리 중이거나 끝 줄 없이 끊김
  // 끊김 · 오류는 최근 EVENTS건, 시작 · 중지(업데이트 때 저절로 다시 켜짐이 많다)는 최근 6건만 섞는다 — 오류가 밀려나지 않게
  const life = (e) => e.kind === 'start' || (e.kind === 'stop' && e.text === '감시 중지');
  const ev = events.filter((e) => !life(e)).slice(-EVENTS).concat(events.filter(life).slice(-6)).sort((a, b) => (Date.parse(b.at) || 0) - (Date.parse(a.at) || 0));
  return { events: ev, turns: turns.slice(-TURNS).reverse() };
}
function claudeKind(p) {
  p = String(p || ''); if (!p) return '';
  return /Claude-Data|claude-code[\\/]/i.test(p) && /AppData|Application Support/i.test(p) && !/npm|\.local[\\/]bin|nodejs/i.test(p) ? '앱 내장' : '따로 설치';
}

let lastBody = '', lastAt = 0;
// 1분마다(background.js): 이 PC 상태를 모아 바뀌었거나 10분 지났으면 쓴다
function report(agentInfo) {
  if (C.readonly || !core.exists(C.histDir)) return;
  const a = agentInfo(), raw = core.readJson(path.join(C.root, 'workbench', '.agent.json')) || {}, s = core.readSetup(), lg = readLog();
  const body = {
    pc: C.pcName, slug: C.pcSlug, user: core.meName(), os: C.isMac ? 'mac' : 'windows',
    version: String(core.readText(path.join(C.root, 'VERSION')) || '').trim(),
    alive: !!a.alive, status: a.alive ? a.status : (a.status === 'stopped' ? 'stopped' : (a.status ? 'dead' : 'none')),
    msg: String(a.msg || '').slice(0, 200), statusAt: String(raw.at || ''),
    claude: claudeKind(a.claude), claudeWay: String(s.claudeWay || ''), autoWatch: s.autoWatch !== false,
    events: lg.events, turns: lg.turns,
  };
  const key = JSON.stringify(body);
  if (key === lastBody && Date.now() - lastAt < HEARTBEAT) return;
  lastBody = key; lastAt = Date.now();
  try { fs.mkdirSync(DIR(), { recursive: true }); core.writeJson(FILE(), Object.assign({ reportAt: core.now() }, body)); } catch (e) {}
}
// 개발 PC 보기: 모든 PC 파일(reportAt이 오래되면 그 PC 서버가 꺼져 있음)
function list() {
  const out = [];
  let fs0 = []; try { fs0 = fs.readdirSync(DIR()).filter((f) => /\.json$/i.test(f)); } catch (e) {}
  for (const f of fs0) { const o = core.readJson(path.join(DIR(), f)); if (o && o.pc) out.push(Object.assign(o, { me: o.slug === C.pcSlug })); }
  return out;
}
module.exports = { isDev, report, list };
