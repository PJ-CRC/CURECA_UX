'use strict';
// 토큰 사용량 기록(2026-11-16, workbench/usage.ps1 · usage.pl을 Node로): Claude Code 대화 기록(~/.claude/projects/{작업 폴더}/*.jsonl)에서
//  한 작업 구간의 사용량을 더해 .history/usage/{PC}_{요청 ID 또는 시각}.json으로 남긴다(작업 이력처럼 깃 history 브랜치로 공유).
//  - 요청 완료 때 서버가 부른다: record({ reqId }) — 구간은 요청의 runs(「진행 중」 구간들, 보류 · 대기로 갔다 다시 한 것 포함), 없으면 startedAt ~ 지금
//  - 요청 없이 한 작업(채팅 · 작업 대기열)은 Claude가 POST /api/usage {from, by, title, team, …}로 부른다
//  - 종류별 토큰(입력 · 캐시 쓰기 · 캐시 읽기 · 출력)과 금액(workbench/pricing.json 단가, 모델별). 같은 폴더의 여러 세션 · 서브에이전트 사용량이 모두 더해진다
//  - 결과 글은 예전 스크립트와 같다: USAGE … / NOUSAGE … / NOREQ … / NOSTART …
const fs = require('fs');
const path = require('path');
const os = require('os');
const core = require('./core');

const C = core.C;
const nn = (v) => (v == null ? '' : String(v));
// PC 이름: 서버 나머지(작업 이력 · 수정본)와 같은 이름(C.pcName · C.pcSlug) — 그래야 사용량 기록 이름이 작업 이력 {pcSlug}_{요청 ID}와 맞는다.
//  2026-11-16 전 맥 기록은 끝의 .local을 뺀 이름이었다(usage.pl과 같음, GET /api/usage가 두 이름 모두로 찾는다)
const pcName = () => String(C.pcName || os.hostname());
const pcSlug = () => C.pcSlug || pcName().toLowerCase().replace(/[^a-z0-9-]/g, '-');
function iso(ms) {
  const d = new Date(ms), p = (n) => String(n).padStart(2, '0'), off = -d.getTimezoneOffset(), s = off >= 0 ? '+' : '-', a = Math.abs(off);
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}${s}${p(Math.floor(a / 60))}:${p(a % 60)}`;
}
const stamp = (ms) => iso(ms).slice(0, 19).replace(/[-:]/g, '').replace('T', '-');
// 대화 기록 폴더: 작업 폴더 경로의 영문 · 숫자 밖 글자를 -로
function logDir() {
  const cfg = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude');
  return path.join(cfg, 'projects', C.root.replace(/[\\/]+$/, '').replace(/[^A-Za-z0-9]/g, '-'));
}
function jsonlFiles(dir, since) {
  const out = [];
  const walk = (d) => { let es = []; try { es = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { return; }
    for (const e of es) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (e.name.endsWith('.jsonl')) { try { if (fs.statSync(p).mtimeMs >= since) out.push(p); } catch (x) {} } } };
  walk(dir); return out;
}
function rates() {
  const pr = core.readJson(path.join(C.root, 'workbench', 'pricing.json'));
  const def = { input: 4, output: 20, cacheRead: 0.2, cacheWrite5m: 5, cacheWrite1h: 8 };
  return (model) => (pr && pr.models && (pr.models[model] || pr.models[pr.default])) || def;
}

async function record(o) {
  o = o || {};
  const meta = { kind: 'work', reqId: '', reqType: '', team: nn(o.team), by: nn(o.by), fileKey: nn(o.fileKey), fileName: nn(o.fileName), page: nn(o.page), frame: nn(o.frame), nodeId: nn(o.nodeId), text: nn(o.title) };
  let from = nn(o.from), r = null;
  if (o.reqId) {
    const j = core.readJson(C.reqFile); r = core.arr(j && j.items).find((x) => x && x.id === o.reqId);
    if (!r) return 'NOREQ ' + o.reqId;
    if (!from) from = nn(r.startedAt);
    meta.kind = 'request'; meta.reqId = o.reqId; meta.reqType = nn(r.type);
    for (const k of ['team', 'fileKey', 'fileName', 'page', 'frame', 'nodeId', 'text']) if (!meta[k]) meta[k] = nn(r[k]);
    if (!meta.by) meta.by = nn(r.author);
  }
  if (!from) return 'NOSTART (요청이 「진행 중」이 된 시각이 없습니다. from으로 시작 시각을 주세요)';
  const t1 = o.to ? Date.parse(o.to) : Date.now(); let t0 = Date.parse(from);
  if (isNaN(t0) || isNaN(t1)) return 'NOSTART (시각을 읽지 못했습니다: ' + from + ')';
  // 처리 구간들: 요청이면 runs를 모두 더한다(from을 따로 주지 않았을 때)
  const wins = [];
  if (r && !o.from) for (const w of core.arr(r.runs)) { const a = Date.parse(w && w.from), b = w && w.to ? Date.parse(w.to) : t1; if (!isNaN(a) && !isNaN(b)) wins.push([a, b]); }
  if (!wins.length) wins.push([t0, t1]);
  t0 = Math.min.apply(null, wins.map((w) => w[0]));
  const inWin = (ts) => wins.some((w) => ts >= w[0] && ts <= w[1]);

  /* 같은 시간에 여러 작업이 돌면(백그라운드 감시 + 대화 창, 서브에이전트) 구간만으로는 남의 사용량까지 더해진다(2026-11-16 점검).
     그래서 요청 · 작업 ID(R0xx · J0xx)가 있으면 그 ID가 적힌 대화 기록(세션 파일)만 센다. 그런 파일이 하나도 없으면 예전처럼 구간 안 전부 */
  const tag = o.reqId ? String(o.reqId) : ((/\(([RJ]\d{3,})\)\s*$/.exec(nn(o.title)) || [])[1] || '');
  const files = [];
  for (const f of jsonlFiles(logDir(), t0 - 1000)) { let txt = ''; try { txt = await fs.promises.readFile(f, 'utf8'); } catch (e) { continue; } files.push({ f, txt }); }
  const tagged = tag ? files.filter((x) => new RegExp('\\b' + tag + '\\b').test(x.txt)) : [];
  // 서브에이전트 기록(…/{세션}/subagents/*.jsonl)은 부모 세션 파일이 그 ID를 담고 있으면 함께 센다
  const keep = tagged.length ? new Set(tagged.map((x) => x.f.replace(/\.jsonl$/, ''))) : null;
  const msgs = new Map();
  for (const { f, txt } of files) {
    if (keep && !keep.has(f.replace(/\.jsonl$/, '')) && ![...keep].some((k) => f.startsWith(k + path.sep))) continue;
    for (const l of txt.split('\n')) {
      if (!l.includes('"usage"')) continue;
      const m = l.match(/"timestamp":"([^"]+)"/); if (!m) continue;
      const ts = Date.parse(m[1]); if (isNaN(ts) || !inWin(ts)) continue;
      let x; try { x = JSON.parse(l); } catch (e) { continue; }
      if (!x.message || !x.message.usage || !x.message.id) continue;
      msgs.set(String(x.message.id), x.message);   // 같은 응답이 여러 줄이면 마지막 값
    }
  }
  const rate = rates(), s = { calls: 0, input: 0, cacheWrite: 0, cacheRead: 0, output: 0, usd: 0 }, models = {};
  for (const m of msgs.values()) {
    const u = m.usage, rt = rate(nn(m.model)), n = (v) => Number(v) || 0;
    const cw = n(u.cache_creation_input_tokens), w1 = n(u.cache_creation && u.cache_creation.ephemeral_1h_input_tokens), w5 = cw - w1;
    s.calls++; s.input += n(u.input_tokens); s.cacheWrite += cw; s.cacheRead += n(u.cache_read_input_tokens); s.output += n(u.output_tokens);
    s.usd += (n(u.input_tokens) * rt.input + w5 * rt.cacheWrite5m + w1 * rt.cacheWrite1h + n(u.cache_read_input_tokens) * rt.cacheRead + n(u.output_tokens) * rt.output) / 1e6;
    const mn = nn(m.model); models[mn] = (models[mn] || 0) + 1;
  }
  if (!s.calls) return 'NOUSAGE ' + new Date(t0).toISOString() + ' ~ ' + new Date(t1).toISOString();
  const name = pcSlug() + '_' + (o.reqId ? o.reqId : stamp(t1));
  const e = {
    id: name, kind: meta.kind, reqId: meta.reqId, reqType: meta.reqType, team: meta.team || 'cureca', at: iso(t1), from: iso(t0),
    by: meta.by, doneBy: 'Claude', pc: pcName(), fileKey: meta.fileKey, fileName: meta.fileName, page: meta.page, frame: meta.frame, nodeId: meta.nodeId, text: meta.text,
    models, calls: s.calls, input: s.input, cacheWrite: s.cacheWrite, cacheRead: s.cacheRead, output: s.output,
    total: s.input + s.cacheWrite + s.cacheRead + s.output, usd: Math.round(s.usd * 10000) / 10000
  };
  core.writeJson(path.join(C.histUsage, name + '.json'), e);
  core.syncWant();
  return `USAGE ${name} calls=${e.calls} input=${e.input} cacheWrite=${e.cacheWrite} cacheRead=${e.cacheRead} output=${e.output} usd=${e.usd}`;
}

module.exports = { record, logDir, jsonlFiles, rates, pcName, pcSlug, iso, stamp };
