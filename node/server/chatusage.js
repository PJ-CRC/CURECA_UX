'use strict';
// 채팅 작업 사용량(2026-11-26): Claude 앱 대화로 한 작업은 그 대화의 Claude가 POST /api/usage를 불러야만 남았는데 거의 불리지 않았다
//  (서보경 PC 11-25 작업규칙 64번 수정 → 사용량 0건). 그래서 서버가 대화 기록을 직접 보고 남긴다.
//  - 세는 것: 「Figma AI Run에 영향이 간 차례」만 — 사람 메시지 하나 ~ Claude 답 끝까지(차례) 안에서
//      1) UX 문서 · 규칙 저장소를 바꿈: POST /api/guides · /api/history, 또는 .history/guides · .history/teams/{팀}/guides · minutes 아래 파일을 고침
//      2) Workbench에 등록된 Figma 파일(projects/{fileKey})을 use_figma로 고침
//  - 세지 않는 것: 프로그램 · 시스템 규칙 수정(개발), 읽기 · 질문만 한 차례, 감시가 띄운 세션의 차례(요청 R로 따로 남음 — 메시지가 「[Workbench」로 시작)
//  - 대화가 10분 넘게 조용해지면 그때까지 센 차례를 한 건으로 남긴다(.history/usage/{PC}_chat_{시각}.json). 센 곳은 workbench/.chat_usage.json에 기억
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const core = require('./core');
const usage = require('./usage');

const C = core.C;
const IDLE = 10 * 60000, FIRST = 3 * 864e5;
const STATE = () => path.join(C.root, 'workbench', '.chat_usage.json');
const nn = (v) => (v == null ? '' : String(v));

const DOC_PATH = /[\\/]\.history[\\/](guides|minutes|teams[\\/]([^\\/]+)[\\/](guides|minutes))[\\/]/;
// 개발(프로그램 · 시스템 규칙)을 고친 차례는 통째로 세지 않는다 — 그 차례의 Figma · 문서 작업은 시험으로 본다
const DEV_PATH = /[\\/](node|pages|docs[\\/]claude|figma_plugin|tools|workbench)[\\/]|[\\/](CLAUDE\.md|RELEASE_NOTES\.md|VERSION|[^\\/]+\.(ps1|sh|bat|pl))$/i;
const EDIT_TOOLS = /^(Edit|Write|MultiEdit|NotebookEdit)$/;

function userText(m) {
  const c = m.message && m.message.content;
  if (typeof c === 'string') return c;
  if (Array.isArray(c)) { if (c.some((x) => x && x.type === 'tool_result')) return null; const t = c.filter((x) => x && x.type === 'text').map((x) => x.text).join('\n'); return t || null; }
  return null;
}
// 차례 하나가 Figma AI Run에 영향을 줬는지: { doc, figma, dev, team, fileKey }
//  doc: 규칙 저장소 파일을 Edit · Write로 고침, 또는 그 차례 동안 이 PC가 UX 문서 수정본 · 작업 이력을 남김(서버가 만든 기록 = 확실한 증거, saved(t0, t1))
//  셸 명령 글은 보지 않는다(임시 폴더에 쓴 것 · 시험 서버까지 잡혀 부정확했다)
function judge(tools, isProj, saved, t0, t1) {
  const o = { doc: false, figma: false, dev: false, team: '', fileKey: '' };
  for (const t of tools) {
    const i = t.input || {}, n = nn(t.name);
    if (/use_figma$/.test(n)) { const k = nn(i.fileKey); if (k && isProj(k)) { o.figma = true; if (!o.fileKey) o.fileKey = k; } continue; }
    if (EDIT_TOOLS.test(n)) {
      const p = nn(i.file_path || i.notebook_path), m = DOC_PATH.exec(p);
      if (m) { o.doc = true; if (m[2] && !o.team) o.team = m[2]; } else if (DEV_PATH.test(p)) o.dev = true;
    }
  }
  if (!o.doc && saved) { const s = saved(t0, t1); if (s) { o.doc = true; if (s.team && !o.team) o.team = s.team; } }
  if (o.dev) { o.doc = false; o.figma = false; }
  return o;
}
// 이 PC가 남긴 UX 문서 수정본(rev/{시각}_{PC}.json, 작업 대기열이 아닌 것 = jobId 없음)과 채팅 작업 이력(entries/{PC}_{시각}.json)의 시각들
function savedIndex() {
  const slug = usage.pcSlug(), out = [], at = (s) => { const m = /^(\d{4})(\d\d)(\d\d)-(\d\d)(\d\d)(\d\d)/.exec(s); return m ? new Date(+m[1], m[2] - 1, +m[3], +m[4], +m[5], +m[6]).getTime() : NaN; };
  const ls = (d) => { try { return fs.readdirSync(d, { withFileTypes: true }); } catch (e) { return []; } };
  const roots = [{ dir: path.join(C.root, '.history', 'guides'), team: '' }];
  for (const t of ls(path.join(C.root, '.history', 'teams'))) if (t.isDirectory()) roots.push({ dir: path.join(C.root, '.history', 'teams', t.name, 'guides'), team: t.name });
  for (const r of roots) for (const g of ls(r.dir)) {
    if (!g.isDirectory()) continue;
    for (const f of ls(path.join(r.dir, g.name, 'rev'))) {
      if (!f.isFile() || !f.name.endsWith('_' + slug + '.json')) continue;
      const j = core.readJson(path.join(r.dir, g.name, 'rev', f.name)) || {}; if (j.jobId) continue;
      const ms = at(f.name); if (!isNaN(ms)) out.push({ ms, team: r.team || 'cureca' });
    }
  }
  for (const f of ls(C.histEntries)) {
    if (!f.isFile() || !f.name.startsWith(slug + '_') || /_[RJ]\d+\.json$/.test(f.name)) continue;
    const ms = at(f.name.slice(slug.length + 1)); if (!isNaN(ms)) out.push({ ms, team: '' });
  }
  return (t0, t1) => out.find((x) => x.ms >= t0 - 2000 && x.ms <= t1 + 60000) || null;
}
// 세션 파일 하나 → 차례들 [{start, end, text, agent, tools[], msgs Map(id → message)}]
function turnsOf(txt) { return turnsOfLines(txt.split('\n')); }
function turnsOfLines(lines) {
  const out = []; let cur = null;
  for (const l of lines) {
    if (!l || !/"type":"(user|assistant)"/.test(l)) continue; let m; try { m = JSON.parse(l); } catch (e) { continue; }
    const ts = Date.parse(m.timestamp || ''); if (isNaN(ts)) continue;
    if (m.type === 'user' && !m.isMeta && !m.isSidechain) {
      const t = userText(m);
      if (t != null) { cur = { start: ts, end: ts, text: t, agent: /^\s*\[Workbench/.test(t), tools: [], msgs: new Map() }; out.push(cur); continue; }
    }
    if (!cur) continue;
    if (m.type === 'assistant' && m.message) {
      cur.end = ts;
      for (const x of m.message.content || []) if (x && x.type === 'tool_use') cur.tools.push(x);
      if (m.message.usage && m.message.id) cur.msgs.set(String(m.message.id), m.message);
    }
  }
  return out;
}

async function sweep() {
  const st = core.readJson(STATE()) || { files: {} }; st.files = st.files || {};
  const now = Date.now(), first = !Object.keys(st.files).length && !st.at;
  const since = first ? now - FIRST : now - 14 * 864e5;
  const projDir = path.join(C.root, 'projects'), projCache = {};
  const isProj = (k) => (k in projCache ? projCache[k] : (projCache[k] = core.exists(path.join(projDir, k))));
  const rate = usage.rates(), saved = savedIndex();
  let made = 0;
  for (const f of usage.jsonlFiles(usage.logDir(), since)) {
    if (/[\\/]subagents[\\/]/.test(f)) continue;
    let mt = 0; try { mt = fs.statSync(f).mtimeMs; } catch (e) { continue; }
    if (now - mt < IDLE) continue;   // 아직 대화 중
    // 파일마다 {at: 마지막으로 센 때, off: 거기까지 읽은 바이트, dev: 개발 대화}. 대화 기록은 뒤에 덧붙기만 하므로 지난번 읽은 곳부터 줄 단위로 읽는다(수백 MB 대화도 통째로 읽지 않게)
    const key = path.basename(f), was = st.files[key] && typeof st.files[key] === 'object' ? st.files[key] : { at: 0, off: 0, dev: false };
    let size = 0; try { size = fs.statSync(f).size; } catch (e) { continue; }
    if (mt <= was.at || size <= was.off) continue;
    const lines = [];
    try {
      const rl = readline.createInterface({ input: fs.createReadStream(f, { start: was.off, encoding: 'utf8' }), crlfDelay: Infinity });
      for await (const l of rl) { if (!l) continue; const m = /"timestamp":"([^"]+)"/.exec(l); if (m && Date.parse(m[1]) < since) continue; lines.push(l); }
    } catch (e) { continue; }
    const all = turnsOfLines(lines), turns = all.filter((t) => !t.agent);
    // 개발 대화(어느 차례에서든 프로그램 · 시스템 규칙을 고친 대화): Figma만 쓴 차례는 시험으로 보고 세지 않는다. UX 문서를 실제로 바꾼 차례만
    const devSession = was.dev || turns.some((t) => judge(t.tools, isProj).dev);
    const hit = [];
    for (const t of turns) { const j = judge(t.tools, isProj, saved, t.start, t.end); if (devSession) j.figma = false; if (j.doc || j.figma) hit.push({ t, j }); }
    st.files[key] = { at: mt, off: size, dev: devSession };
    if (!hit.length) continue;
    const s = { calls: 0, input: 0, cacheWrite: 0, cacheRead: 0, output: 0, usd: 0 }, models = {}, n = (v) => Number(v) || 0;
    for (const { t } of hit) for (const msg of t.msgs.values()) {
      const u = msg.usage, rt = rate(nn(msg.model)), cw = n(u.cache_creation_input_tokens), w1 = n(u.cache_creation && u.cache_creation.ephemeral_1h_input_tokens);
      s.calls++; s.input += n(u.input_tokens); s.cacheWrite += cw; s.cacheRead += n(u.cache_read_input_tokens); s.output += n(u.output_tokens);
      s.usd += (n(u.input_tokens) * rt.input + (cw - w1) * rt.cacheWrite5m + w1 * rt.cacheWrite1h + n(u.cache_read_input_tokens) * rt.cacheRead + n(u.output_tokens) * rt.output) / 1e6;
      const mn = nn(msg.model); models[mn] = (models[mn] || 0) + 1;
    }
    if (!s.calls) continue;
    const doc = hit.some((x) => x.j.doc), fig = hit.find((x) => x.j.figma), team = (hit.find((x) => x.j.team) || {}).j;
    const t0 = hit[0].t.start, t1 = hit[hit.length - 1].t.end, words = nn(hit[0].t.text).replace(/\s+/g, ' ').trim().slice(0, 80);
    const name = usage.pcSlug() + '_chat_' + usage.stamp(t1);
    const e = {
      id: name, kind: 'work', chat: doc ? 'doc' : 'figma', reqId: '', reqType: '', team: (team && team.team) || core.currentTeam() || 'cureca',
      at: usage.iso(t1), from: usage.iso(t0), by: core.meName() || nn(core.readSetup().user), doneBy: 'Claude', pc: usage.pcName(),
      fileKey: fig ? fig.j.fileKey : '', fileName: '', page: '', frame: '', nodeId: '', text: '채팅: ' + words, turns: hit.length,
      models, calls: s.calls, input: s.input, cacheWrite: s.cacheWrite, cacheRead: s.cacheRead, output: s.output,
      total: s.input + s.cacheWrite + s.cacheRead + s.output, usd: Math.round(s.usd * 10000) / 10000
    };
    core.writeJson(path.join(C.histUsage, name + '.json'), e); made++;
  }
  st.at = new Date(now).toISOString();
  core.writeJson(STATE(), st);
  if (made) core.syncWant();
  return made;
}

module.exports = { sweep, judge, turnsOf, savedIndex };
