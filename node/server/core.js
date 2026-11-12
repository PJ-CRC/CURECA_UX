// 공통: 경로 · 파일 읽기 · PC별 설정(setup.json) · 계정 · 메뉴 권한 · 팀 · 요청마다의 팀 위치
//  기존 guide_server.ps1의 같은 이름 함수와 똑같이 동작하게 옮긴다(옮긴 함수 이름을 주석에 적는다)
'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

const C = {};   // 서버 설정: main.js가 init으로 채운다 { root, port, readonly, setupDir }
function init(o) {
  Object.assign(C, o);
  const R = C.root;
  C.isMac = process.platform === 'darwin';
  C.setupDir = o.setupDir || (C.isMac ? path.join(os.homedir(), 'Library', 'Application Support', 'UX_AI_TEST_Workbench')
    : path.join(process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local'), 'UX_AI_TEST_Workbench'));
  C.setupFile = path.join(C.setupDir, 'setup.json');
  C.reqFile = path.join(R, 'workbench', 'edit_requests.json');
  C.jobFile = path.join(R, 'workbench', 'jobs.json');
  C.projRoot = path.join(R, 'projects');
  C.protoRoot = path.join(R, 'prototypes');
  C.histDir = path.join(R, '.history');
  C.histEntries = path.join(C.histDir, 'entries');
  C.histUsage = path.join(C.histDir, 'usage');
  C.acctDir = path.join(C.histDir, 'accounts');
  C.teamsFile = path.join(C.histDir, 'config', 'teams.json');
  C.syncStat = path.join(R, 'workbench', '.history_sync.json');
  // PC 이름: 윈도우는 기존 서버([Environment]::MachineName)와 같게 대문자 NetBIOS 이름(COMPUTERNAME). 이력 · 사용량 기록에 남는다
  C.pcName = (process.platform === 'win32' && process.env.COMPUTERNAME) || os.hostname();
  C.pcSlug = C.pcName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  return C;
}

// ── 파일 ──
function readText(f) { try { return fs.readFileSync(f, 'utf8').replace(/^﻿/, ''); } catch (e) { return null; } }
function readJson(f) { const t = readText(f); if (t == null) return null; try { return JSON.parse(t); } catch (e) { return null; } }
function exists(f) { try { fs.accessSync(f); return true; } catch (e) { return false; } }
function listJson(dir) { try { return fs.readdirSync(dir).filter((n) => n.toLowerCase().endsWith('.json')); } catch (e) { return []; } }
// 기존 서버의 Now: yyyy-MM-ddTHH:mm:ss+09:00(지역 시간)
function now() {
  const d = new Date(), p = (n) => String(n).padStart(2, '0'), off = -d.getTimezoneOffset(), s = off >= 0 ? '+' : '-', a = Math.abs(off);
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}${s}${p(Math.floor(a / 60))}:${p(a % 60)}`;
}

// 쓰기: UTF-8(BOM 없음). JSON은 들여쓰기 2칸(기존 서버의 ConvertTo-Json과 모양은 달라도 읽는 쪽은 같다)
function writeText(f, t) { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, t, 'utf8'); }
function writeJson(f, o) { writeText(f, JSON.stringify(o, null, 2)); }
function rmGlob(dir, test) { let n = 0; for (const x of (() => { try { return fs.readdirSync(dir); } catch (e) { return []; } })()) if (test(x)) { try { fs.rmSync(path.join(dir, x), { force: true, recursive: true }); n++; } catch (e) {} } return n; }
// 깃 동기화를 바로 하라는 신호(기존 서버의 SyncWant → .history_sync_now)
function syncWant() { try { writeText(path.join(C.root, 'workbench', '.history_sync_now'), now()); } catch (e) {} }

// ── PC별 설정(Read-Setup) ──
function readSetup() { return readJson(C.setupFile) || { done: false, user: '', figmaUrl: '', checks: {}, updatedAt: '' }; }

// ── 계정(Read-Accounts · Read-Account · Test-Pw) ──
//  .history/accounts/{id}.json — 비밀번호는 PBKDF2-SHA256(iter회, 32바이트, base64)
function readAccounts() { return listJson(C.acctDir).map((n) => readJson(path.join(C.acctDir, n))).filter((a) => a && a.id); }
function readAccount(id) {
  id = String(id || ''); if (!/^[A-Za-z0-9._-]{3,32}$/.test(id)) return null;
  return readJson(path.join(C.acctDir, id.toLowerCase() + '.json'));
}
function pwHash(pw, saltB64, iter) { return crypto.pbkdf2Sync(Buffer.from(String(pw), 'utf8'), Buffer.from(saltB64, 'base64'), iter, 32, 'sha256').toString('base64'); }
function testPw(a, pw) {
  if (!a || !a.salt || !a.hash) return false;
  const h = Buffer.from(pwHash(pw, String(a.salt), parseInt(a.iter, 10))), x = Buffer.from(String(a.hash));
  return h.length === x.length && crypto.timingSafeEqual(h, x);
}
function hasAccounts() { return listJson(C.acctDir).length > 0; }
function histReady() { if (listJson(C.histEntries).length) return true; const s = readJson(C.syncStat); return !!(s && s.ok); }
function authRequired() { return hasAccounts() || !histReady(); }
function needSync() { return !hasAccounts() && !histReady(); }
function currentUser() {
  const s = readSetup(); if (!s.login || !s.login.id) return null;
  const a = readAccount(s.login.id);
  if (!a || a.active === false || String(a.pwAt || '') !== String(s.login.pwAt || '')) return null;
  return a;
}

// 로그인 기록(Write-Login): 이 PC에 로그인한 계정(비밀번호가 바뀌면 다시 로그인). null이면 로그아웃
function writeLogin(a) {
  const s = readSetup();
  if (a) { s.login = { id: a.id, pwAt: a.pwAt === undefined ? null : a.pwAt, at: now() }; s.user = String(a.name || ''); } else delete s.login;
  writeJson(C.setupFile, s);
}
// 비밀번호 바꾸기(Set-Pw): 소금 16바이트 · PBKDF2-SHA256 100000회
function setPw(a, pw) { const salt = crypto.randomBytes(16).toString('base64'); a.salt = salt; a.iter = 100000; a.hash = pwHash(pw, salt, 100000); a.pwAt = now(); }
function saveAccount(a) { a.updatedAt = now(); writeJson(path.join(C.acctDir, String(a.id).toLowerCase() + '.json'), a); syncWant(); }
function saveTeams(items) { writeJson(C.teamsFile, { items }); syncWant(); }
function setMyTeam(tid) { if (!myTeams().includes(tid)) throw new Error('소속된 팀이 아닙니다.'); const s = readSetup(); s.team = tid; writeJson(C.setupFile, s); }
function meName() { const u = currentUser(); return u ? String(u.name || '') : String(readSetup().user || ''); }

// ── 메뉴 · 권한($Menus · User-Writes · User-Approves · User-Menus) ──
const MENUS = [
  { key: 'setup', label: '시작 안내', pages: ['Setup.html'], always: true },
  { key: 'plan', label: '일정/작업', pages: ['Work.html'], write: '일정(구글 시트) 칸 수정, 시트 연결 설정' },
  { key: 'guide', label: 'UX 문서', pages: ['Common_UX_Guide.html', 'UX_Guide.html'], write: '새 가이드 · 정의서 만들기, 항목 수정 요청, 연관 항목 찾기 · 반영 요청' },
  { key: 'workbench', label: 'Figma Workbench', pages: ['Figma_Workbench.html'], write: '수정 요청 등록 · 답하기 · 다시 진행, 캡처 · 목록 요청, 프로젝트 추가 · 작업 페이지 바꾸기' },
  { key: 'history', label: '변경 이력', pages: ['Change_History.html'], write: '보류 요청 다시 진행, Claude 질문에 답하기' },
  { key: 'usage', label: '사용량 통계', pages: ['Usage_Stats.html'] },
  { key: 'proto', label: '프로토타입', pages: ['Prototypes.html', 'Prototype.html'], write: '만들기 · 수정 요청, Figma 맞추기, 지우기' },
  { key: 'accounts', label: '계정 관리', pages: ['Accounts.html'], admin: true },
];
const MENU_KEYS = MENUS.filter((m) => !m.admin && !m.always).map((m) => m.key);
const ALWAYS_KEYS = MENUS.filter((m) => m.always).map((m) => m.key);
const WRITE_KEYS = MENUS.filter((m) => m.write).map((m) => m.key);
const TEAM_MENUS = ['plan', 'guide', 'history', 'usage'];
// 승인 항목: 새 흐름(2026-11-12)에서 임시 정책(PV) 승인을 없애 비어 있다(논의 대상의 결정은 정한 사람이, 반영은 [확인 · 반영]). 승인할 것이 다시 생기면 { key, label, menu, where }를 더한다
const APPROVALS = [];
const APPROVE_KEYS = APPROVALS.map((a) => a.key);
const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);

function pickMenus(a) { return arr(a.menus).filter((k) => MENU_KEYS.includes(k)); }
function userWrites(a) {
  if (!a) return [];
  if (a.admin) return WRITE_KEYS.slice();
  let p = pickMenus(a); if (!userTeams(a).length) p = p.filter((k) => !TEAM_MENUS.includes(k));
  if (Object.prototype.hasOwnProperty.call(a, 'writes')) return arr(a.writes).filter((k) => WRITE_KEYS.includes(k) && p.includes(k));
  return p.filter((k) => WRITE_KEYS.includes(k) && (k !== 'guide' || arr(a.menus).includes('guideEdit')));
}
function userApproves(a) { if (!a) return []; if (a.admin) return APPROVE_KEYS.slice(); return arr(a.approves).filter((k) => APPROVE_KEYS.includes(k)); }
function userMenus(a) {
  if (!a) return []; if (a.admin) return MENUS.map((m) => m.key);
  let p = pickMenus(a); if (!userTeams(a).length) p = p.filter((k) => !TEAM_MENUS.includes(k));
  return MENUS.filter((m) => m.always || p.includes(m.key)).map((m) => m.key);
}
// 요청이 브라우저 화면에서 온 것인지(권한 검사는 이것만). Claude(curl) · Figma 플러그인(Origin null)은 그대로
function isBrowser(req) { return !!req.headers['sec-fetch-site'] && String(req.headers.origin || '') !== 'null'; }
function canWrite(req, keys) {
  if (!isBrowser(req) || !authRequired()) return true;
  const u = currentUser(); if (!u) return false;
  const w = userWrites(u); return arr(keys).some((k) => w.includes(k));
}
function canApprove(req, key) {
  if (!isBrowser(req) || !authRequired()) return true;
  const u = currentUser(); if (!u) return false;
  return userApproves(u).includes(key);
}
function roMsg(key) { const m = MENUS.find((x) => x.key === key); const l = m ? m.label : key; return `「${l}」 메뉴는 읽기 권한만 있습니다(보기만 가능). 최고관리자에게 「${l} · 쓰기」 권한을 요청하세요.`; }

// ── 팀(Read-Teams · Fill-TeamColors · User-Teams · Current-Team · Set-TeamCtx) ──
const TEAM_COLORS = 8;
function readTeams() {
  const d = readJson(C.teamsFile);
  if (d && Array.isArray(d.items)) return d.items.filter((t) => t && t.id);
  return [{ id: 'cureca', name: 'CURECA', legacy: true, createdAt: '2026-11-06T00:00:00+09:00', by: 'system' }];
}
function fillTeamColors(teams) {
  const used = {}; teams.forEach((t) => { if (t.color != null && /^\d+$/.test(String(t.color))) used[parseInt(t.color, 10)] = 1; });
  teams.forEach((t) => {
    if (t.color != null && /^\d+$/.test(String(t.color))) return;
    let c = 0; while (used[c] && c < TEAM_COLORS) c++; if (c >= TEAM_COLORS) c = Object.keys(used).length % TEAM_COLORS;
    used[c] = 1; t.color = c;
  });
  return teams;
}
function teamIds() { return readTeams().map((t) => String(t.id)); }
function userTeams(a) {
  if (!a) return [];
  const all = teamIds(); if (a.admin) return all;
  if (!Object.prototype.hasOwnProperty.call(a, 'teams')) return all.filter((t) => t === 'cureca');
  return arr(a.teams).filter((t) => all.includes(t));
}
function myTeams() { return authRequired() ? userTeams(currentUser()) : teamIds(); }
function currentTeam() { const ids = myTeams(), t = String(readSetup().team || ''); return ids.includes(t) ? t : ids.length ? ids[0] : ''; }
function teamList(ids) { return fillTeamColors(readTeams()).filter((t) => ids.includes(String(t.id))).map((t) => ({ id: String(t.id), name: String(t.name || ''), color: parseInt(t.color, 10) })); }
// 요청마다의 팀 위치: CURECA는 .history 바로 아래, 다른 팀은 .history/teams/{id}/
function teamCtx(tid) {
  if (!tid) tid = 'cureca';
  const rel = tid === 'cureca' ? '' : `teams/${tid}/`;
  const th = rel ? path.join(C.histDir, 'teams', tid) : C.histDir;
  return { team: tid, rel, hist: th, guideRoot: path.join(th, 'guides'), guideRel: `.history/${rel}guides`, minDir: path.join(th, 'minutes'),
    sheetConf: path.join(th, 'config', 'sheet.json'),
    sheetCache: rel ? path.join(C.root, 'workbench', '.sheet_cache', '_team_' + tid) : path.join(C.root, 'workbench', '.sheet_cache'),
    guideApply: rel ? path.join(C.root, 'workbench', `guide_apply.${tid}.json`) : path.join(C.root, 'workbench', 'guide_apply.json') };
}
function itemTeam(e) { return (e && e.team) ? String(e.team) : 'cureca'; }

// ── 내 정보(Me-Info) ──
function meInfo() {
  const req = authRequired(); const u = req ? currentUser() : null;
  const allowed = req ? userMenus(u) : MENU_KEYS.concat(ALWAYS_KEYS);
  let first = ''; for (const m of MENUS) { if (!m.always && m.pages.length && allowed.includes(m.key)) { first = m.pages[0]; break; } }
  if (!first) for (const m of MENUS) { if (m.pages.length && allowed.includes(m.key)) { first = m.pages[0]; break; } }
  const ns = needSync(); const hs = ns ? readJson(C.syncStat) : null;
  return { required: req, needSync: ns, syncMsg: hs ? String(hs.message || '') : '', syncBusy: hs ? !!hs.busy : false,
    user: u ? { id: u.id, name: u.name, admin: !!u.admin, menus: allowed, writes: userWrites(u), approves: userApproves(u) } : null,
    approves: req ? userApproves(u) : APPROVE_KEYS.slice(),
    menus: MENUS.map((m) => ({ key: m.key, label: m.label, page: m.pages[0], pages: m.pages, admin: !!m.admin, write: String(m.write || '') })),
    allowed, writes: req ? userWrites(u) : WRITE_KEYS.slice(), first: first || 'Account.html',
    teams: teamList(myTeams()), team: currentTeam(), teamMenus: TEAM_MENUS.slice() };
}

module.exports = { C, init, readText, readJson, exists, listJson, now, arr, writeText, writeJson, rmGlob, syncWant, writeLogin, setPw, saveAccount, saveTeams, setMyTeam, meName, readSetup, readAccounts, readAccount, pwHash, testPw, hasAccounts, histReady,
  authRequired, needSync, currentUser, MENUS, MENU_KEYS, ALWAYS_KEYS, WRITE_KEYS, TEAM_MENUS, APPROVALS, APPROVE_KEYS, userWrites, userApproves, userMenus,
  isBrowser, canWrite, canApprove, roMsg, readTeams, fillTeamColors, teamIds, userTeams, myTeams, currentTeam, teamList, teamCtx, itemTeam, meInfo };
