// Common UX Sync — Claude · Workbench 연동만 한다(로컬 서버 localhost:8765).
//  - 작업 페이지를 고치면 그 프레임 캡처를 자동으로 올린다
//  - Workbench 「캡처 받기」 · Claude 글 수정(text, Pretendard 등 이 PC 폰트) 작업을 처리한다
//  - 이 파일의 페이지 · 프레임 목록을 Workbench로 보낸다
// 창은 상태 원 하나(RUN · Check · Error, 2026-11-17). 원에 마우스를 올리면 UI가 'fit'으로 넓혀 자세한 상태를 보인다
figma.showUI(__html__, { width: 96, height: 76, themeColors: true });

// ── Workbench 캡처 ──
// 작업 페이지(수정 가능 페이지)에서 무언가 바뀌면 그 최상위 프레임을 JPG(원본 크기)로 내보내 UI → 로컬 서버(/api/shots)로 보낸다.
// 작업 페이지 = 그 파일 프로젝트의 작업 링크(시작 안내 링크)가 가리키는 페이지. 기본 프로젝트는 없다
let autoShots = true, workPage = null, dirty = new Set(), timer = null, busyShots = false;

const topFrame = n => { while (n && n.parent && n.parent.type !== 'PAGE' && n.parent.type !== 'SECTION') n = n.parent; return n && n.parent && (n.parent.type === 'PAGE' || n.parent.type === 'SECTION') && n.type !== 'SECTION' ? n : null; };
// 삭제처럼 대상 프레임을 알 수 없는 변경은 지금 화면에 보이는 프레임으로 대신한다(지금 페이지)
// dynamic-page: 페이지 children을 읽기 전에 늘 loadAsync(이미 불러온 페이지는 바로 끝난다). 2026-11-20 「in get_children: … has not been explicitly loaded」
async function framesInView() {
  await figma.currentPage.loadAsync();
  const v = figma.viewport.bounds, out = [];
  const take = n => { if (n.type === 'SECTION') { n.children.forEach(take); return; }
    if (n.visible && /^(FRAME|COMPONENT|COMPONENT_SET|INSTANCE)$/.test(n.type) && n.x < v.x + v.width && n.x + n.width > v.x && n.y < v.y + v.height && n.y + n.height > v.y) out.push(n); };
  figma.currentPage.children.forEach(take);
  return out.slice(0, 4);
}
// 원본 크기(1배) JPG로 내보낸다. 한 변이 8000px을 넘는 아주 큰 프레임만 그 안으로 줄인다(내보내기 실패 · 메모리 방지)
const MAX_SIDE = 8000;
async function exportFrame(f, jobId) {
  const scale = Math.min(1, MAX_SIDE / Math.max(f.width, f.height));
  const bytes = await f.exportAsync({ format: 'JPG', constraint: { type: 'SCALE', value: scale } });
  figma.ui.postMessage({ type: 'shot', fileKey: figma.fileKey || '', nodeId: f.id, name: f.name, w: Math.round(f.width), h: Math.round(f.height),
    by: figma.currentUser ? figma.currentUser.name + ' (Figma)' : 'Figma', bytes, jobId: jobId || '' });
}
async function flushShots() {
  if (busyShots || !dirty.size) return;
  busyShots = true;
  const ids = [...dirty]; dirty.clear();
  try {
    for (const id of ids) {
      const f = await figma.getNodeByIdAsync(id);
      if (f && !f.removed) await exportFrame(f);
    }
  } finally {
    busyShots = false;
    if (dirty.size) schedule();
  }
}
function schedule() { clearTimeout(timer); timer = setTimeout(flushShots, 1500); }

// Figma 부담 줄이기: 플러그인은 페이지를 스스로 불러오지 않는다.
// 캡처 감시는 사용자가 작업 페이지에 있을 때만 붙인다(이미 열려 있는 페이지라 추가 로딩 없음).
function workPageId() { return (typeof linkPageId === 'string' && linkPageId) || ''; }
let workHandler = null;
function watchShl() {
  // 작업 링크가 다른 페이지로 바뀌었으면 예전 작업 페이지의 감시를 뗀다
  //  작업 페이지를 떠나도 뗀다(2026-11-20): 예전에는 붙은 채로 남아, 다른 페이지에 있는 동안 작업 페이지가 바뀌면(Claude · 다른 작업자) 감시가 돌다 「불러오지 않은 페이지」 오류가 났다
  if (workPage && (workPage.id !== workPageId() || figma.currentPage.id !== workPage.id)) { try { workPage.off('nodechange', workHandler); } catch (e) {} workPage = null; }   // 페이지가 이미 사라졌으면(파일 · 페이지가 닫힘) off가 오류를 낸다 — 무시
  if (workPage || !workPageId() || figma.currentPage.id !== workPageId()) return;
  workPage = figma.currentPage;
  workPage.on('nodechange', workHandler = async e => {
    if (!autoShots) return;
    try {
      let view = null;
      for (const ch of e.nodeChanges) {
        const f = ch.node && !ch.node.removed ? topFrame(ch.node) : null;
        if (f) dirty.add(f.id);
        else { if (!view) view = await framesInView(); view.forEach(x => dirty.add(x.id)); }
      }
      if (dirty.size) schedule();
    } catch (err) { console.warn('캡처 감시: ' + (err && err.message || err)); }
  });
}
// 자동 캡처는 늘 켜짐(2026-11-17, 끄는 칸을 없앰 — 예전에 꺼 둔 PC도 다시 켠다)
(async () => {
  try { await figma.clientStorage.deleteAsync('autoShots'); } catch (e) {}
  watchShl();
})();

// ── Workbench 프레임 목록: 지금 연 파일의 페이지 · 최상위 프레임을 UI → 로컬 서버(/api/catalog)로 보낸다 ──
//  - 시작: 페이지 이름 전체(불러오기 없음) + 지금 보고 있는 페이지의 프레임만
//  - 사용자가 Figma에서 다른 페이지로 가면 그 페이지 프레임을 보탠다(이미 열린 페이지라 추가 부담 없음)
//  - 프레임은 페이지 · 섹션 바로 아래 것만 본다(레이어 안쪽은 훑지 않는다)
// 시작 안내 링크가 이 파일이면, 링크 노드가 있는 페이지를 「수정 가능 페이지」로 표시한다
// 목록에서 뺄 이름 — 서버(node/server/figma.js 토큰 목록 만들기)와 같게 둔다
const JUNK = /^(ver|Description|Case-label|section title|SB_Section Divider|진행상태-.*|Frame \d+|Group \d+|Rectangle.*)$/;
const DIVIDER = /^[\s\-–—_=·.]*$/;
let link = null;
const loadedPages = new Set();   // 자동 캡처 때 불러온 페이지(다시 불러오지 않는다)
// 프레임: [id, 이름, w, h, x, y, 섹션 이름, 섹션 id] — 섹션 안 프레임만 뒤 둘이 있다(섹션 안 섹션은 「바깥 › 안」, id는 가장 안쪽)
function topFrames(pg) {
  const out = [];
  const take = (n, sec) => {
    if (n.type === 'SECTION') {
      const nm = n.name.trim() || '섹션'; const s = { name: sec ? sec.name + ' › ' + nm : nm, id: n.id }; const n0 = out.length;
      n.children.forEach(c => take(c, s));
      // 화면으로 볼 프레임이 하나도 없는 섹션은 섹션 자체를 한 화면으로(서버 Figma 토큰 목록과 같게, 2026-11-16)
      if (out.length === n0) { const b = n.absoluteBoundingBox || { x: n.x, y: n.y }; const f = [n.id, nm, Math.round(n.width), Math.round(n.height), Math.round(b.x), Math.round(b.y)]; if (sec) f.push(sec.name, sec.id); out.push(f); }
      return;
    }
    if (!/^(FRAME|COMPONENT|COMPONENT_SET|INSTANCE)$/.test(n.type) || JUNK.test(n.name.trim())) return;
    const b = n.absoluteBoundingBox || { x: n.x, y: n.y };
    const f = [n.id, n.name.trim(), Math.round(n.width), Math.round(n.height), Math.round(b.x), Math.round(b.y)];
    if (sec) f.push(sec.name, sec.id);
    out.push(f);
  };
  pg.children.forEach(c => take(c, null));
  return out.sort((a, b) => a[5] - b[5] || a[4] - b[4]);
}
// 링크 노드가 있는 페이지(수정 가능 페이지): 링크가 페이지면 바로, 아니면 노드를 한 번만 찾아 기억한다
var linkPageId = null;   // var: 위쪽 workPageId()가 먼저 불러도 오류가 나지 않게
async function resolveLinkPage() {
  if (linkPageId !== null) return linkPageId;
  linkPageId = '';
  if (!link || link.key !== figma.fileKey || !link.node) return linkPageId;
  const pg = figma.root.children.find(p => p.id === link.node);
  if (pg) return (linkPageId = pg.id);
  let n = await figma.getNodeByIdAsync(link.node);
  while (n && n.type !== 'PAGE') n = n.parent;
  return (linkPageId = n ? n.id : '');
}
function pageInfo(pg, withFrames) {
  return { id: pg.id, name: pg.name, frames: withFrames ? topFrames(pg) : null };
}
function fileMeta() {
  return { fileKey: figma.fileKey || '', fileName: figma.root.name, editablePageId: linkPageId || '',
    by: figma.currentUser ? figma.currentUser.name + ' (Figma)' : 'Figma' };
}
async function quickCatalog() {
  await resolveLinkPage();
  const cur = figma.currentPage;
  await cur.loadAsync();
  const pages = figma.root.children.filter(pg => !DIVIDER.test(pg.name)).map(pg => pageInfo(pg, pg.id === cur.id));
  return Object.assign(fileMeta(), { pages });
}
async function sendPageList() {
  try {
    const pg = figma.currentPage;
    if (DIVIDER.test(pg.name)) return;
    await pg.loadAsync();
    if (pg !== figma.currentPage) return;   // 불러오는 사이 다른 페이지로 갔으면 그 페이지 차례에 보낸다
    figma.ui.postMessage(Object.assign({ type: 'page-frames', page: pageInfo(pg, true) }, fileMeta()));
  } catch (err) { console.warn('페이지 목록 보내기: ' + (err && err.message || err)); }
}
// 지금 보고 있는 페이지에서 최상위 프레임 · 섹션을 추가 · 삭제 · 이름 변경 · 이동하면 그 페이지 목록을 다시 보낸다(2초 모아서)
//  (예전에는 플러그인을 켤 때 · 페이지를 옮길 때만 보내서, 같은 페이지에 새로 만든 섹션이 Workbench에 안 보였다)
function isTop(n) {
  let p = n && n.parent;
  while (p && p.type === 'SECTION') p = p.parent;
  return !!p && p.type === 'PAGE';
}
let listPage = null, listHandler = null, listTimer = null;
// 마지막으로 사용자가 Figma에서 무언가 고친 시각: 자동 캡처(Workbench 페이지 일괄)는 편집 중이면 잠시 쉰다
let lastEdit = 0;
function watchList() {
  const pg = figma.currentPage;
  if (listPage === pg) return;
  if (listPage) { try { listPage.off('nodechange', listHandler); } catch (e) {} }   // 이전 페이지가 이미 없으면 무시(2026-11-17 「in off: node … does not exist」)
  listPage = pg;
  pg.on('nodechange', listHandler = e => {
    lastEdit = Date.now();
    const hit = e.nodeChanges.some(ch => {
      if (ch.type === 'DELETE') return true;   // 지운 노드는 위치를 알 수 없어 그냥 다시 보낸다
      if (!ch.node || ch.node.removed || !isTop(ch.node)) return false;
      return ch.type === 'CREATE' || ch.properties.some(k => /^(name|parent|x|y|width|height)$/.test(k));
    });
    if (hit) { clearTimeout(listTimer); listTimer = setTimeout(sendPageList, 2000); }
  });
}
watchList();
// 창에 보일 상태: 파일 이름, 작업 페이지 이름, 지금 작업 페이지를 보고 있는지(자동 캡처는 그때만)
function pageState() {
  const wid = workPageId(), wp = wid ? figma.root.children.find(p => p.id === wid) : null;
  return { fileName: figma.root.name, workName: wp ? wp.name : '', onWork: !!wid && figma.currentPage.id === wid };
}
figma.on('currentpagechange', () => {
  watchShl();
  watchList();
  sendPageList();
  figma.ui.postMessage(Object.assign({ type: 'page-state' }, pageState()));
});
// ── 컴포넌트 채우기(fill, 2026-11-24) ──
// Claude가 정한 행 데이터를 컴포넌트 인스턴스로 만들어 채운다(설명 패널 행 · 확인 목록 · 라벨 같은 「정해진 컴포넌트에 내용 넣기」).
//  모든 팀 공용: 어떤 컴포넌트 · 변형 · 글을 어디에 둘지는 작업 데이터가 정하고, 여기는 특정 팀의 모양을 모른다.
//  job.groups[]: { parent | near(+side right/left/top/bottom, offset), at{x,y}, gap, direction(vertical/horizontal), index, clear[nodeId],
//                  rows[]: { component(노드 id 또는 키), variant{속성:값}, props{속성:값}, texts{안쪽 글 노드 이름(#n번째): 글 | {text, ranges[]} | {lines[]}}, width(숫자 | 'fill'), name } }
//  수정 가능 페이지(작업 링크 페이지) 안에서만 만들고 지운다. 끝나면 글 넘침 · 겹침을 점검해 돌려준다
const hexRgb = h => { const m = /^#?([0-9a-f]{6})$/i.exec(String(h || '')); if (!m) return null; const v = parseInt(m[1], 16); return { r: (v >> 16 & 255) / 255, g: (v >> 8 & 255) / 255, b: (v & 255) / 255 }; };
const pageOf = n => { while (n && n.type !== 'PAGE') n = n.parent; return n; };
async function fillComp(cache, ref, variant) {
  ref = String(ref || '');
  let c = cache[ref];
  if (!c) {
    if (/^\d+:\d+$/.test(ref)) c = await figma.getNodeByIdAsync(ref);
    else if (/^[0-9a-f]{40}$/i.test(ref)) { try { c = await figma.importComponentSetByKeyAsync(ref); } catch (e) { c = await figma.importComponentByKeyAsync(ref); } }
    if (!c || !/^(COMPONENT|COMPONENT_SET)$/.test(c.type)) throw new Error('컴포넌트를 찾지 못했습니다: ' + ref);
    cache[ref] = c;
  }
  const keys = Object.keys(variant || {});
  if (c.type === 'COMPONENT' && keys.length && c.parent && c.parent.type === 'COMPONENT_SET') c = c.parent;
  if (c.type === 'COMPONENT_SET') {
    const hit = c.children.find(v => v.type === 'COMPONENT' && keys.every(k => String((v.variantProperties || {})[k]) === String(variant[k])));
    if (hit) return hit;
    if (keys.length) throw new Error('변형을 찾지 못했습니다: ' + c.name + ' ' + JSON.stringify(variant));
    return c.defaultVariant;
  }
  return c;
}
function fillProps(inst, props) {
  const defs = inst.componentProperties || {}, out = {};
  for (const k of Object.keys(props || {})) {
    const full = defs[k] ? k : Object.keys(defs).find(d => d.split('#')[0] === k);
    if (!full) throw new Error('컴포넌트 속성을 찾지 못했습니다: ' + k);
    if (defs[full].type !== 'VARIANT') out[full] = props[k];
  }
  if (Object.keys(out).length) inst.setProperties(out);
}
// 글: 문자열 | {text, ranges:[{start, end, color:'#RRGGBB', strike, style:'Bold'}], highlight:[{pattern, color, style}]} | {lines:[{text, level, bullet, color, strike, style}]}
//  lines: 줄마다 글머리 목록(bullet: true · 'ORDERED')과 단계(level 1 · 2 …), 줄 전체 색 · 취소선 · 굵기(style = 같은 글꼴의 스타일 이름). ranges는 lines와 함께 써도 된다(글 전체 기준 위치)
//  highlight: 정규식(pattern)에 맞는 곳마다 색 · 굵기(예: 화면 · 알럿 코드를 파랑으로 — 규칙은 팀 작업규칙이 정하고 Claude가 넘긴다)
async function fillText(t, v) {
  const fonts = t.characters.length ? t.getRangeAllFontNames(0, t.characters.length) : [t.fontName];
  for (const f of fonts) await figma.loadFontAsync(f);
  const base = fonts[0];
  if (typeof v !== 'object' || v === null) v = { text: String(v == null ? '' : v) };
  let text = String(v.text == null ? '' : v.text); const ranges = Array.isArray(v.ranges) ? v.ranges.slice() : [];
  let lines = null;
  if (Array.isArray(v.lines)) {
    lines = v.lines.map(l => (typeof l === 'object' && l ? Object.assign({}, l) : { text: String(l) }));
    let p = 0;
    for (const l of lines) { l.s = p; l.e = p + String(l.text || '').length; if (l.color || l.strike || l.style) ranges.push({ start: l.s, end: l.e, color: l.color, strike: l.strike, style: l.style }); p = l.e + 1; }
    text = lines.map(l => String(l.text || '')).join('\n');
  }
  t.characters = text;
  const n = t.characters.length;
  if (!n) return;
  for (const h of Array.isArray(v.highlight) ? v.highlight : []) {
    let re; try { re = new RegExp(String(h.pattern || ''), 'g'); } catch (e) { throw new Error('highlight 정규식 오류: ' + h.pattern); }
    if (!h.pattern) continue;
    let m, guard = 0; while ((m = re.exec(text)) && guard++ < 500) { if (!m[0].length) { re.lastIndex++; continue; } ranges.push({ start: m.index, end: m.index + m[0].length, color: h.color, strike: h.strike, style: h.style }); }
  }
  // 글 전체를 컴포넌트 기본 모양(첫 글자)으로 되돌린 뒤 꾸밈을 얹는다
  t.setRangeTextDecoration(0, n, 'NONE');
  for (const r of ranges) {
    const s = Math.max(0, r.start | 0), e = Math.min(n, r.end | 0); if (e <= s) continue;
    if (r.color) { const c = hexRgb(r.color); if (c) t.setRangeFills(s, e, [{ type: 'SOLID', color: c }]); }
    if (r.strike) t.setRangeTextDecoration(s, e, 'STRIKETHROUGH');
    if (r.style) { const fn = { family: base.family, style: String(r.style) }; try { await figma.loadFontAsync(fn); } catch (x) { throw new Error('글꼴 스타일이 없습니다: ' + fn.family + ' ' + fn.style); } t.setRangeFontName(s, e, fn); }
  }
  if (lines) {
    for (const l of lines) {
      const s = l.s, e = Math.min(n, Math.max(l.e, s + 1)); if (s >= n || e <= s) continue;
      if (l.bullet) { t.setRangeListOptions(s, e, { type: l.bullet === 'ORDERED' ? 'ORDERED' : 'UNORDERED' }); t.setRangeIndentation(s, e, Math.max(1, l.level | 0 || 1)); }
      else if (l.level) t.setRangeIndentation(s, e, l.level | 0);
    }
  }
}
const boxIn = (a, b) => a.x >= b.x - 1 && a.y >= b.y - 1 && a.x + a.width <= b.x + b.width + 1 && a.y + a.height <= b.y + b.height + 1;
const boxHit = (a, b) => a.x < b.x + b.width - 1 && b.x < a.x + a.width - 1 && a.y < b.y + b.height - 1 && b.y < a.y + a.height - 1;
async function fillJob(job) {
  await resolveLinkPage();
  const wp = workPageId(); if (!wp) throw new Error('작업 페이지(작업 링크)를 모릅니다 — 시작 안내 작업 링크의 파일을 열어 주세요');
  const cache = {}, out = { made: 0, removed: 0, groups: [], problems: [] };
  const onWork = n => { const pg = pageOf(n); return !!pg && pg.id === wp; };
  // 1) 모두 만든다 — 하나라도 실패하면 이번에 만든 것을 지우고 오류(반쯤 채운 채 남기지 않는다). 2) 만들기가 다 되면 clear의 옛 노드를 지운다. 3) 크기 맞추기 · 점검
  //  노드를 가리키는 값: 노드 id, 또는 「@{앞 그룹 번호} > 이름 > 이름」(그 그룹이 복제한 틀 안을 이름 경로로, 같은 이름은 「이름#2」).
  //  나누는 표시는 「 > 」(컴포넌트 이름에 「/」가 흔해서 — 예: Review List/Group Header). 경로는 이름 배열로 줘도 된다
  const done = [], all = [], refs = [];
  const byPath = (root, p) => {
    let n = root;
    for (const seg of (Array.isArray(p) ? p : String(p || '').split(/\s*>\s*/)).map(String).filter(Boolean)) {
      const m = /^(.*?)(?:#(\d+))?$/.exec(seg), k = ((m[2] | 0) || 1) - 1;
      const kids = 'children' in n ? n.children.filter(c => c.name === m[1]) : [];
      n = kids[k] || ('findAll' in n ? n.findAll(c => c.name === m[1])[k] : null);
      if (!n) throw new Error('이름 경로를 찾지 못했습니다: ' + p);
    }
    return n;
  };
  const resolve = async (ref, base) => {
    if (Array.isArray(ref)) return byPath(base, ref);
    const s = String(ref || '');
    const m = /^@(\d+)(?:\s*>\s*(.*))?$/.exec(s);
    if (m) { const r = refs[+m[1]]; if (!r) throw new Error('앞 그룹이 만든 틀이 없습니다: ' + s); return byPath(r, m[2]); }
    if (/^\d+:\d+$/.test(s)) return figma.getNodeByIdAsync(s);
    if (base && s) return byPath(base, s);
    return null;
  };
  // 인스턴스(또는 노드) 안 이름으로 글 · 칠 바꾸기: texts{이름(#n): 값}, fills{이름(#n) | '.'(자기): '#RRGGBB'}
  const applyInner = async (node, texts, fills, label) => {
    const named = (type, k) => { const m = /^(.*?)(?:#(\d+))?$/.exec(k); return node.findAll(n => (!type || n.type === type) && n.name === m[1])[((m[2] | 0) || 1) - 1]; };
    for (const k of Object.keys(texts || {})) { const t = named('TEXT', k); if (!t) throw new Error('글 노드를 찾지 못했습니다: ' + label + ' › ' + k); await fillText(t, texts[k]); }
    for (const k of Object.keys(fills || {})) { const t = k === '.' ? node : named(null, k); if (!t || !('fills' in t)) throw new Error('칠할 노드를 찾지 못했습니다: ' + label + ' › ' + k); const c = hexRgb(fills[k]); if (c) t.fills = [{ type: 'SOLID', color: c }]; }
  };
  try {
  for (const [gi, g] of (job.groups || []).entries()) {
    for (const id of g.clear || []) { const n = await figma.getNodeByIdAsync(String(id)); if (n && !n.removed && !onWork(n)) throw new Error('수정 가능 페이지가 아닌 노드는 지우지 않습니다: ' + id); }
    const near = g.near ? await resolve(g.near) : null;
    if (g.near && !near) throw new Error('옆에 둘 노드를 찾지 못했습니다: ' + g.near);
    const parent = near ? near.parent : await resolve(g.parent);
    if (!parent || !('appendChild' in parent) || parent.type === 'PAGE') throw new Error('넣을 곳을 찾지 못했습니다: ' + (g.parent || g.near));
    if (!onWork(parent)) throw new Error('수정 가능 페이지가 아닙니다: ' + (g.parent || g.near));
    await pageOf(parent).loadAsync();
    // 틀 복제(clone): {node, name, at{x, y}} — 틀(예: 확인 목록 템플릿)을 넣을 곳에 복제해 두고 set으로 고친 뒤, 뒤 그룹이 「@이 그룹 번호/경로」로 그 안에 행을 채운다
    let base = parent;
    if (g.clone) {
      const src = await resolve(g.clone.node); if (!src) throw new Error('복제할 틀을 찾지 못했습니다: ' + g.clone.node);
      const c = src.clone(); all.push(c); parent.appendChild(c);
      if (g.clone.name) c.name = String(g.clone.name);
      if (g.clone.at && !(parent.layoutMode && parent.layoutMode !== 'NONE')) { c.x = +g.clone.at.x || 0; c.y = +g.clone.at.y || 0; }
      refs[gi] = base = c;
    } else refs[gi] = parent;
    // 있는 노드 고치기(set): [{path(base 기준 이름 경로 · 노드 id · @n/경로), props, texts, fills, remove}] — 복제한 틀 안이거나 이번에 만든 것만(원본 화면은 고치지 않음)
    for (const s of g.set || []) {
      const n = await resolve(s.path, base); if (!n) throw new Error('고칠 노드를 찾지 못했습니다: ' + s.path);
      let mine = false; for (let p = n; p; p = p.parent) if (all.indexOf(p) >= 0) { mine = true; break; }
      if (!mine) throw new Error('이번에 복제 · 만든 것 안에서만 고칩니다: ' + s.path);
      if (s.remove) { n.remove(); continue; }
      if (s.props && n.type === 'INSTANCE') fillProps(n, s.props);
      await applyInner(n, s.texts, s.fills, s.path);
    }
    for (let p = parent; p && p.type !== 'PAGE'; p = p.parent) if (p.type === 'INSTANCE') throw new Error('인스턴스 안에는 넣지 못합니다: ' + parent.id);
    const auto = !near && parent.layoutMode && parent.layoutMode !== 'NONE';
    const gap = g.gap != null ? +g.gap : 0, horiz = g.direction === 'horizontal', side = g.side || 'right', off = g.offset != null ? +g.offset : 8;
    let x = g.at && g.at.x != null ? +g.at.x : 0, y = g.at && g.at.y != null ? +g.at.y : 0;
    if (near) { x = side === 'right' ? near.x + near.width + off : side === 'left' ? near.x - off : near.x; y = side === 'bottom' ? near.y + near.height + off : side === 'top' ? near.y - off : near.y; }
    const made = [];
    for (const row of g.rows || []) {
      const comp = await fillComp(cache, row.component, row.variant);
      const inst = comp.createInstance(); all.push(inst);
      if (auto && g.index != null) parent.insertChild(Math.min((+g.index) + made.length, parent.children.length), inst); else parent.appendChild(inst);
      made.push(inst);
      if (row.name) inst.name = String(row.name);
      fillProps(inst, row.props);
      await applyInner(inst, row.texts, row.fills, row.name || comp.name);
      if (row.width === 'fill' && auto) inst.layoutSizingHorizontal = 'FILL';
      else if (+row.width > 0) inst.resize(+row.width, inst.height);
      if (!auto) {
        inst.x = near && side === 'left' ? x - inst.width : x; inst.y = near && side === 'top' ? y - inst.height : y;
        if (horiz) x = near && side === 'left' ? x - inst.width - gap : x + inst.width + gap; else y = near && side === 'top' ? y - inst.height - gap : y + inst.height + gap;
      }
    }
    done.push({ gi, g, parent, auto, made });
  }
  } catch (e) { for (const n of all) { try { if (!n.removed) n.remove(); } catch (x) {} } throw e; }
  for (const { gi, g, parent, auto, made } of done) {
    const gr = { ids: made.map(n => n.id), removed: 0 };
    for (const id of g.clear || []) { const n = await figma.getNodeByIdAsync(String(id)); if (n && !n.removed) { n.remove(); gr.removed++; } }
    if (g.clone && refs[gi]) gr.clone = refs[gi].id;
    // 크기 맞추기(fit): [{node, min}] — 그 노드의 높이를 안에 든 것의 아래 끝까지 늘리거나 줄인다(min보다 작게는 안 함). 예: 패널 행이 늘어 기획 프레임을 키움
    for (const f of g.fit || []) {
      const n = await resolve(f.node); if (!n || !onWork(n) || !('resize' in n) || !('children' in n)) throw new Error('크기를 맞출 노드를 찾지 못했습니다: ' + f.node);
      const bottom = Math.max(0, ...n.children.filter(c => c.visible).map(c => c.y + c.height));
      const h = Math.max(+f.min || 0, Math.ceil(bottom)); if (h > 0 && Math.abs(h - n.height) >= 1) n.resize(n.width, h);
      gr.fit = (gr.fit || []).concat([{ node: n.id, h }]);
    }
    /* 글꼴 바꾸기(refont, 2026-11-27): {node, family:'Inter', skipInstances, skipName(정규식)} — 그 노드 안 모든 글의 글꼴을 family로, 굵기는 같은 이름으로
       (Pretendard SemiBold → Inter Semi Bold). 팀 작업규칙이 「모든 글은 Inter」처럼 정할 때 Claude가 글마다 코드로 바꾸지 않게.
       이 PC 글꼴로 하므로 Claude의 Figma 연결에 없는 글꼴(Pretendard)도 바꾼다. 못 바꾼 글은 problems(kind 글꼴) */
    if (g.refont && g.refont.node) {
      const n = await resolve(g.refont.node); if (!n || !onWork(n) || !('findAll' in n)) throw new Error('글꼴을 바꿀 노드를 찾지 못했습니다: ' + g.refont.node);
      const fam = String(g.refont.family || 'Inter'), norm = s => String(s).replace(/\s+/g, '').toLowerCase();
      const styles = (await figma.listAvailableFontsAsync()).filter(f => f.fontName.family === fam).map(f => f.fontName.style);
      if (!styles.length) throw new Error('이 PC에 글꼴이 없습니다: ' + fam);
      const pick = st => styles.find(s => norm(s) === norm(st)) || styles.find(s => norm(s) === 'regular') || styles[0];
      const skipRe = g.refont.skipName ? new RegExp(g.refont.skipName) : null;
      const skipped = t => { for (let p = t.parent; p && p !== n.parent; p = p.parent) if (p.type === 'INSTANCE') { if (g.refont.skipInstances) return true; const mc = p.mainComponent, nm = mc ? (mc.parent && mc.parent.type === 'COMPONENT_SET' ? mc.parent.name : mc.name) : ''; if (skipRe && skipRe.test(nm)) return true; } return false; };
      const loaded = {}; const load = async f => { const k = f.family + '|' + f.style; if (!loaded[k]) loaded[k] = figma.loadFontAsync(f); return loaded[k]; };
      let changed = 0;
      for (const t of n.findAll(x => x.type === 'TEXT')) {
        if (skipped(t)) continue;
        try {
          const segs = t.getStyledTextSegments(['fontName']);
          if (segs.every(s => s.fontName.family === fam)) continue;
          for (const s of segs) { if (s.fontName.family === fam) continue; await load(s.fontName); const to = { family: fam, style: pick(s.fontName.style) }; await load(to); t.setRangeFontName(s.start, s.end, to); }
          changed++;
        } catch (e) { out.problems.push({ kind: '글꼴', row: n.id, node: t.id, text: String(e && e.message || e).slice(0, 60) }); }
      }
      gr.refont = { node: n.id, changed };
    }
    // 점검: 글이 자기 칸(부모) 밖으로 넘침 · 만든 것끼리 · 옆 노드와 겹침(배경처럼 통째로 감싸는 노드는 뺌)
    for (const inst of made) {
      for (const t of inst.findAll(n => n.type === 'TEXT' && n.visible)) {
        const tb = t.absoluteBoundingBox, pb = t.parent && t.parent.absoluteBoundingBox;
        if (tb && pb && !boxIn(tb, pb)) out.problems.push({ kind: '넘침', row: inst.id, node: t.id, text: t.characters.slice(0, 40) });
      }
    }
    if (!auto) {
      const sibs = parent.children.filter(n => n.visible && made.indexOf(n) < 0);
      made.forEach((a, i) => {
        const A = a.absoluteBoundingBox; if (!A) return;
        made.slice(i + 1).forEach(b => { const B = b.absoluteBoundingBox; if (B && boxHit(A, B)) out.problems.push({ kind: '겹침', row: a.id, node: b.id }); });
        sibs.forEach(b => { const B = b.absoluteBoundingBox; if (B && boxHit(A, B) && !boxIn(A, B)) out.problems.push({ kind: '겹침', row: a.id, node: b.id, name: b.name.slice(0, 40) }); });
      });
    }
    out.made += gr.ids.length; out.removed += gr.removed; out.groups.push(gr);
  }
  out.problems = out.problems.slice(0, 40);
  return out;
}
figma.ui.onmessage = async msg => {
  try {
    if (msg.type === 'fill') { figma.ui.postMessage(Object.assign({ type: 'fill-done', reqId: msg.reqId }, await fillJob(msg.job))); return; }
    if (msg.type === 'catalog') {
      if (JSON.stringify(msg.link || null) !== JSON.stringify(link)) { link = msg.link || null; linkPageId = null; }
      figma.ui.postMessage(Object.assign({ type: 'catalog-done', reqId: msg.reqId }, await quickCatalog()));
      watchShl();   // 작업 페이지를 알게 됐으니, 지금 그 페이지면 캡처 감시를 붙인다
      return;
    }
    // 시작 안내의 작업 링크가 바뀌었는지 UI가 주기적으로 알려 준다: 수정 가능 페이지 · 캡처 감시 페이지를 새 링크로
    if (msg.type === 'set-link') {
      if (JSON.stringify(msg.link || null) !== JSON.stringify(link)) { link = msg.link || null; linkPageId = null; }
      await resolveLinkPage();
      watchShl();
      figma.ui.postMessage(Object.assign({ type: 'set-link-done', reqId: msg.reqId, fileKey: figma.fileKey || '', editablePageId: linkPageId || '' }, pageState()));
      return;
    }
    // Workbench의 「캡처 받기」 요청: 지금 열린 페이지의 프레임만 받는다(다른 페이지는 불러오지 않고 Claude에게 맡긴다)
    // 캡처 작업을 가져가기 전에: 그 프레임이 지금 열린 페이지에 있는지만 본다(없으면 Claude 몫으로 남긴다)
    if (msg.type === 'has-frame') {
      let found = false;
      const look = n => { if (found) return; if (n.id === msg.nodeId) { found = true; return; } if (n.type === 'SECTION') n.children.forEach(look); };
      await figma.currentPage.loadAsync();
      figma.currentPage.children.forEach(look);
      figma.ui.postMessage({ type: 'has-frame-done', reqId: msg.reqId, found });
      return;
    }
    if (msg.type === 'capture-one') {
      let found = null;
      const look = n => { if (found) return; if (n.id === msg.nodeId) { found = n; return; } if (n.type === 'SECTION') n.children.forEach(look); };
      await figma.currentPage.loadAsync();
      figma.currentPage.children.forEach(look);
      if (found) await exportFrame(found, msg.jobId);
      figma.ui.postMessage({ type: 'capture-one-done', reqId: msg.reqId, done: !!found });
      return;
    }
    // Workbench 자동 캡처(페이지를 열면 캡처 없는 프레임을 10개씩): 다른 페이지 프레임도 받는다.
    //  편집 중(최근 3초 안에 고침)이면 받지 않고 busy로 돌려준다 → UI가 나중에 다시. 페이지는 처음 한 번만 불러온다(이미 불러온 페이지는 그대로)
    if (msg.type === 'capture-any') {
      if (Date.now() - lastEdit < 3000) { figma.ui.postMessage({ type: 'capture-any-done', reqId: msg.reqId, busy: true }); return; }
      const n = await figma.getNodeByIdAsync(msg.nodeId);
      if (!n || n.removed || !/^(FRAME|COMPONENT|COMPONENT_SET|INSTANCE)$/.test(n.type)) { figma.ui.postMessage({ type: 'capture-any-done', reqId: msg.reqId, done: false, gone: true }); return; }
      let pg = n; while (pg && pg.type !== 'PAGE') pg = pg.parent;
      // 아직 불러오지 않은 다른 페이지: 바로 불러오지 않고 알린다 → UI가 Workbench에 「불러오는 중」을 남긴 뒤 load-page
      if (pg && pg !== figma.currentPage && !loadedPages.has(pg.id)) { figma.ui.postMessage({ type: 'capture-any-done', reqId: msg.reqId, needLoad: true, page: pg.name }); return; }
      await exportFrame(n, msg.jobId);
      figma.ui.postMessage({ type: 'capture-any-done', reqId: msg.reqId, done: true });
      return;
    }
    // 자동 캡처: 다른 페이지를 한 번 불러온다(그 페이지의 다음 캡처부터는 바로)
    if (msg.type === 'load-page') {
      const n = await figma.getNodeByIdAsync(msg.nodeId);
      let pg = n; while (pg && pg.type !== 'PAGE') pg = pg.parent;
      if (pg) { await pg.loadAsync(); loadedPages.add(pg.id); }
      figma.ui.postMessage({ type: 'load-page-done', reqId: msg.reqId, ok: !!pg });
      return;
    }
    // Workbench 글 수정(text) 작업: Claude가 정한 바꾸기 [{nodeId, find, replace}]를 이 PC의 폰트(Pretendard 등)로 반영한다.
    //  수정 가능 페이지(작업 링크 페이지)의 TEXT만 고친다. find가 있으면 그 부분만 바꿔 앞뒤 글 스타일을 지키고, 없으면 글 전체를 바꾼다
    if (msg.type === 'text-edit') {
      await resolveLinkPage();
      const results = [];
      for (const it of msg.items || []) {
        const r = { nodeId: it.nodeId, find: it.find || '', replace: it.replace || '' };
        try {
          const n = await figma.getNodeByIdAsync(it.nodeId);
          // 폰트 바꾸기: {nodeId(TEXT 또는 프레임 · 섹션), fontFamily} → 그 아래 글(인스턴스 안은 원본을 따르므로 제외)의 글꼴만 바꾼다. 굵기는 이름을 맞춘다
          if (it.fontFamily) {
            if (!n) throw new Error('노드를 찾지 못했습니다');
            let pg0 = n; while (pg0 && pg0.type !== 'PAGE') pg0 = pg0.parent;
            if (!pg0 || pg0.id !== workPageId()) throw new Error('수정 가능 페이지가 아닙니다');
            await pg0.loadAsync();
            const inInst = t => { for (let p = t.parent; p && p !== n; p = p.parent) if (p.type === 'INSTANCE') return true; return false; };
            const texts = n.type === 'TEXT' ? [n] : n.findAll(t => t.type === 'TEXT' && !inInst(t));
            const avail = (await figma.listAvailableFontsAsync()).filter(f => f.fontName.family === it.fontFamily).map(f => f.fontName.style);
            if (!avail.length) throw new Error(it.fontFamily + ' 폰트가 이 PC에 없습니다');
            const norm = s => s.replace(/\s+/g, '').toLowerCase();
            const pick = st => avail.find(a => norm(a) === norm(st)) || avail.find(a => norm(a) === 'regular') || avail[0];
            let changed = 0;
            for (const t of texts) {
              const segs = t.characters.length ? t.getStyledTextSegments(['fontName']) : [{ start: 0, end: 0, fontName: t.fontName }];
              for (const s of segs) { await figma.loadFontAsync(s.fontName); const to = { family: it.fontFamily, style: pick(s.fontName.style) }; await figma.loadFontAsync(to);
                if (t.characters.length) t.setRangeFontName(s.start, s.end, to); else t.fontName = to; }
              changed++;
            }
            r.result = 'ok'; r.font = it.fontFamily; r.count = changed; results.push(r); continue;
          }
          if (!n || n.type !== 'TEXT') throw new Error('글 레이어가 아닙니다');
          // 찾을 글 · 새 글이 둘 다 비면 글 전체가 지워진다 → 하지 않는다(폰트만 바꾸려면 fontFamily를 준다)
          if (!r.find && !r.replace) throw new Error('find · replace가 모두 비어 있습니다(글을 지우지 않음)');
          let pg = n; while (pg && pg.type !== 'PAGE') pg = pg.parent;
          if (!pg || pg.id !== workPageId()) throw new Error('수정 가능 페이지가 아닙니다');
          await pg.loadAsync();
          const fonts = n.characters.length ? n.getRangeAllFontNames(0, n.characters.length) : [n.fontName];
          for (const f of fonts) await figma.loadFontAsync(f);
          if (r.find) {
            const i = n.characters.indexOf(r.find);
            if (i < 0) { if (r.replace && n.characters.indexOf(r.replace) >= 0) { r.result = 'already'; results.push(r); continue; } throw new Error('바꿀 글을 찾지 못했습니다'); }
            if (r.replace) n.insertCharacters(i + r.find.length, r.replace, 'BEFORE');
            n.deleteCharacters(i, i + r.find.length);
          } else n.characters = r.replace;
          r.result = 'ok'; r.font = fonts.map(f => f.family + ' ' + f.style).join(', ');
        } catch (e) { r.result = 'fail'; r.error = String(e && e.message || e); }
        results.push(r);
      }
      figma.ui.postMessage({ type: 'text-edit-done', reqId: msg.reqId, results });
      return;
    }
    // ── 다음 단계로 옮기기(transfer): 읽기 · 이미지 · 만들기 (아래 XFER 함수들) ──
    if (msg.type === 'xfer-scan') { figma.ui.postMessage(Object.assign({ type: 'xfer-scan-done', reqId: msg.reqId }, await xferScan(msg.job))); return; }
    if (msg.type === 'xfer-select') { figma.ui.postMessage(Object.assign({ type: 'xfer-select-done', reqId: msg.reqId }, await xferSelect(msg.job, !!msg.quick))); return; }
    if (msg.type === 'xfer-paste-prep') { figma.ui.postMessage(Object.assign({ type: 'xfer-paste-prep-done', reqId: msg.reqId }, await xferPastePrep(msg.job))); return; }
    if (msg.type === 'xfer-paste-scan') { figma.ui.postMessage(Object.assign({ type: 'xfer-paste-scan-done', reqId: msg.reqId }, await xferPasteScan(msg.job, msg.before || []))); return; }
    if (msg.type === 'xfer-paste-place') { figma.ui.postMessage(Object.assign({ type: 'xfer-paste-place-done', reqId: msg.reqId }, await xferPastePlace(msg.job, msg.ids || [], msg.record || []))); return; }
    if (msg.type === 'xfer-check') { figma.ui.postMessage(Object.assign({ type: 'xfer-check-done', reqId: msg.reqId }, await xferCheck(msg.job))); return; }
    // 창 크기: 평소 원만(96×76), 원에 마우스를 올리면 자세히(280×112)
    if (msg.type === 'fit') { figma.ui.resize(Math.max(70, Math.min(400, Math.round(msg.w || 96))), Math.max(60, Math.min(400, Math.round(msg.h || 76)))); return; }
    if (msg.type === 'close') {
      figma.closePlugin();
    }
  } catch (e) {
    figma.ui.postMessage({ type: 'error', reqId: msg.reqId, message: String(e && e.message || e) });
  }
};

// ════════ 다음 단계와 비교(transfer check, 2026-11-17) ════════
// Workbench 「②와 비교」 → 서버 작업(kind transfer, mode check). ①을 연 플러그인은 옮긴 화면의 확인값(xferCheck), ②를 연 플러그인은 작업 페이지 화면의 확인값(xferScan)을 낸다. 옮기지 않는다.
//  「② ○○로 보내기」(읽어서 받는 파일에 다시 그리기 — xferRead · xferBuild)는 2026-11-20에 없앴다: 플러그인은 파일끼리 복사할 수 없어 다시 그리는데,
//  라이브러리에 없는 컴포넌트까지 「옮긴 컴포넌트 (예전 라이브러리)」 섹션에 새로 그려 버려서. 옮기기는 사람이 Figma에서 복사 · 붙여넣기로 한다.
const XR = v => Math.round(v * 100) / 100;
const XHEX = c => [c.r, c.g, c.b].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
function xfnv(s) { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16); }
const XBOX = n => n.type === 'FRAME' || n.type === 'INSTANCE' || n.type === 'COMPONENT' || n.type === 'COMPONENT_SET';
const XREG = '옮긴 컴포넌트 (예전 라이브러리)';   // 예전 옮기기가 만든 대체 컴포넌트 섹션 — ② 화면 읽기(xferScan)에서 뺀다
let xMains = {};

function xReader() {
  const fonts = [], fI = {}, imgs = new Set(), need = new Set();
  const fi = fn => { const k = fn.family + '|' + fn.style; if (fI[k] === undefined) { fI[k] = fonts.length; fonts.push(k); } return fI[k]; };
  const pt = ps => {
    if (ps === figma.mixed || !ps || !ps.length) return 0;
    return ps.map(p => {
      const o = { t: p.type }; if (p.visible === false) o.v = 0; if (p.opacity !== undefined && p.opacity !== 1) o.o = XR(p.opacity); if (p.blendMode && p.blendMode !== 'NORMAL') o.b = p.blendMode;
      if (p.type === 'SOLID') o.c = XHEX(p.color);
      else if (p.type.indexOf('GRADIENT') === 0) { o.gs = p.gradientStops.map(s => [XR(s.position), XHEX(s.color), XR(s.color.a)]); o.gt = p.gradientTransform; }
      else if (p.type === 'IMAGE') { o.h = p.imageHash; o.sm = p.scaleMode; if (p.imageTransform) o.it = p.imageTransform; if (p.scalingFactor) o.sf = p.scalingFactor; if (p.imageHash) imgs.add(p.imageHash); }
      return o;
    });
  };
  const sw = d => (d.strokeWeight === figma.mixed || ('strokeTopWeight' in d && !(d.strokeTopWeight === d.strokeBottomWeight && d.strokeLeftWeight === d.strokeRightWeight && d.strokeTopWeight === d.strokeLeftWeight)))
    ? [d.strokeTopWeight, d.strokeRightWeight, d.strokeBottomWeight, d.strokeLeftWeight] : d.strokeWeight;
  const txt = n => n.getStyledTextSegments(['fontName', 'fontSize', 'fills', 'lineHeight', 'letterSpacing', 'textDecoration', 'textCase', 'listOptions', 'indentation'])
    .map(s => [s.end, fi(s.fontName), s.fontSize, pt(s.fills), s.lineHeight.unit === 'AUTO' ? 0 : [s.lineHeight.unit, XR(s.lineHeight.value)], s.letterSpacing.value ? [s.letterSpacing.unit, XR(s.letterSpacing.value)] : 0,
      s.textDecoration !== 'NONE' ? s.textDecoration : 0, s.textCase !== 'ORIGINAL' ? s.textCase : 0, s.listOptions && s.listOptions.type !== 'NONE' ? s.listOptions.type : 0, s.indentation || 0]);
  function base(n, o) {
    if (n.visible === false) o.v = 0; if ('opacity' in n && n.opacity !== 1) o.o = XR(n.opacity); if ('rotation' in n && n.rotation) o.r = XR(n.rotation);
    if ('blendMode' in n && n.blendMode !== 'PASS_THROUGH' && n.blendMode !== 'NORMAL') o.bm = n.blendMode;
    if ('fills' in n && n.type !== 'TEXT') { const f = pt(n.fills); o.f = f || 0; }
    if ('strokes' in n) { const s = pt(n.strokes); if (s) { o.s = s; o.sa = n.strokeAlign; o.sw = sw(n); if (n.dashPattern && n.dashPattern.length) o.sd = n.dashPattern; if (n.strokeCap && n.strokeCap !== figma.mixed && n.strokeCap !== 'NONE') o.sc = n.strokeCap; } }
    if ('cornerRadius' in n) { if (n.cornerRadius === figma.mixed) o.cr = [n.topLeftRadius, n.topRightRadius, n.bottomRightRadius, n.bottomLeftRadius]; else if (n.cornerRadius) o.cr = n.cornerRadius; }
    if ('effects' in n && n.effects.length) o.e = n.effects.map(e => ({ type: e.type, radius: e.radius, visible: e.visible !== false, color: e.color, offset: e.offset, spread: e.spread, blendMode: e.blendMode }));
    if (XBOX(n) && 'clipsContent' in n) o.cl = n.clipsContent ? 1 : 0;
    if ('layoutPositioning' in n && n.layoutPositioning === 'ABSOLUTE') o.lp = 1;
    if ('layoutSizingHorizontal' in n && n.parent && n.parent.layoutMode && n.parent.layoutMode !== 'NONE') o.lz = [n.layoutSizingHorizontal, n.layoutSizingVertical];
    if ('constraints' in n) o.ct = [n.constraints.horizontal, n.constraints.vertical];
    if ('layoutMode' in n && n.layoutMode !== 'NONE' && XBOX(n)) o.L = [n.layoutMode, n.paddingLeft, n.paddingRight, n.paddingTop, n.paddingBottom, n.itemSpacing, n.primaryAxisAlignItems, n.counterAxisAlignItems,
      n.primaryAxisSizingMode, n.counterAxisSizingMode, n.layoutWrap || 'NO_WRAP', n.counterAxisSpacing || 0, n.itemReverseZIndex ? 1 : 0, n.strokesIncludedInLayout ? 1 : 0];
  }
  // 인스턴스 ↔ 원본 컴포넌트: 다른 곳만(구조가 다르면 null → 일반 레이어로 읽음)
  async function diff(a0, b0) {
    const ov = []; let ok = true;
    async function rec(a, b, p) {
      if (!ok) return; if (p.length && a.type !== b.type) { ok = false; return; }
      if (p.length) {
        const so = { P: p }, A = {}, B = {}; base(a, A); base(b, B);
        for (const k of ['v', 'o', 'f', 's', 'sa', 'sw', 'cr', 'e', 'L', 'lz', 'r']) if (JSON.stringify(A[k]) !== JSON.stringify(B[k])) so[k] = A[k] === undefined ? null : A[k];
        if (a.type === 'TEXT') { const ta = txt(a), tb = txt(b); if (a.characters !== b.characters || JSON.stringify(ta) !== JSON.stringify(tb)) { so.c = a.characters; so.sg = ta; } if (a.textAutoResize !== b.textAutoResize) so.tar = a.textAutoResize; if (a.textAlignHorizontal !== b.textAlignHorizontal) so.tah = a.textAlignHorizontal; }
        if (Math.abs(a.width - b.width) > 0.5 || Math.abs(a.height - b.height) > 0.5) so.wh = [XR(a.width), XR(a.height)];
        if (a.type === 'INSTANCE') {
          const ma = await a.getMainComponentAsync(), mb = await b.getMainComponentAsync();
          if (ma && mb && ma.key !== mb.key) { need.add(ma.key); xMains[ma.key] = ma; so.k = ma.key; ov.push(so); const sub = await diff(a, ma); if (!sub) { ok = false; return; } sub.forEach(s => ov.push(Object.assign(s, { P: p.concat(s.P) }))); return; }
        }
        if (Object.keys(so).length > 1) ov.push(so);
      }
      if ('children' in a) { if (!('children' in b) || a.children.length !== b.children.length) { ok = false; return; } for (let i = 0; i < a.children.length; i++) await rec(a.children[i], b.children[i], p.concat(i)); }
    }
    await rec(a0, b0, []); return ok ? ov : null;
  }
  async function ser(n) {
    const o = { T: n.type, n: n.name, x: XR(n.x), y: XR(n.y), w: XR(n.width), h: XR(n.height) };
    if (n.type === 'INSTANCE') {
      const mc = await n.getMainComponentAsync(); const dv = mc ? await diff(n, mc) : null;
      if (dv) {
        need.add(mc.key); xMains[mc.key] = mc; o.k = mc.key; const A = {}, B = {}; base(n, A); base(mc, B);
        for (const k of ['v', 'o', 'f', 's', 'sa', 'sw', 'cr', 'e', 'L', 'cl', 'r', 'bm']) if (A[k] !== undefined && JSON.stringify(A[k]) !== JSON.stringify(B[k])) o[k] = A[k];
        if (A.lp) o.lp = 1; if (A.lz) o.lz = A.lz; if (A.ct) o.ct = A.ct; if (dv.length) o.ov = dv; return o;
      }
      o.T = 'FRAME'; o.X = 1;   // 원본 컴포넌트와 구조가 달라 맞출 수 없음 → 일반 레이어
    }
    base(n, o);
    if (n.type === 'TEXT') { o.c = n.characters; o.sg = txt(n); o.ta = [n.textAlignHorizontal, n.textAlignVertical, n.textAutoResize]; if (n.paragraphSpacing) o.psp = n.paragraphSpacing; if (n.paragraphIndent) o.pin = n.paragraphIndent; if (n.textTruncation === 'ENDING') o.tr = n.maxLines || 1; return o; }
    if (n.type === 'VECTOR') o.vp = n.vectorPaths;
    if (n.type === 'BOOLEAN_OPERATION') o.bo = n.booleanOperation;
    if ('children' in n) { o.ch = []; for (const c of n.children) o.ch.push(await ser(c)); }
    return o;
  }
  return { ser, fonts, imgs, need };
}

// 비교 「바뀐 것 확인」(phase check, 2026-11-17): 옮긴 화면(from.nodeIds)의 지금 해시만 — 옮기기 읽기와 같은 방식(xReader · 위치 뺌)이라 기록 해시와 그대로 견줄 수 있다
async function xferCheck(job) {
  xMains = {};
  const R = xReader(), from = job.from || {}, frames = [];
  if (from.pageId) { const pg = await figma.getNodeByIdAsync(from.pageId); if (pg && pg.type === 'PAGE') await pg.loadAsync(); }
  // 화면마다 따로(2026-11-18): 컴포넌트 원본을 Figma 서버에서 불러오다 10초를 넘기면(「Unable to establish connection」) 그 화면만 두 번 더 해 보고,
  //  그래도 안 되면 그 화면만 「확인 못 함」(err)으로 두고 나머지는 계속한다 — 예전에는 화면 하나 때문에 확인 전체가 실패했다
  const slow = e => /establish connection|connection to Figma|timed? ?out/i.test(String(e && e.message || e));
  for (const id of from.nodeIds || []) {
    let done = false;
    for (let k = 0; k < 3 && !done; k++) {
      try {
        const n = await figma.getNodeByIdAsync(id);
        if (!n || n.removed) { frames.push({ from: id, gone: true }); done = true; break; }
        const o = await R.ser(n); delete o.x; delete o.y;
        frames.push({ from: id, hash: xfnv(JSON.stringify(o)), sig: await xSig(n) }); done = true;
      } catch (e) {
        if (!slow(e)) throw e;
        if (k < 2) await new Promise(r => setTimeout(r, 3000)); else { frames.push({ from: id, err: String(e.message || e).slice(0, 120) }); done = true; }
      }
    }
  }
  return { frames };
}

// 파일이 달라도 같게 나오는 내용 확인값(2026-11-17): 크기 · 레이어 수 · 글자(순서대로) · 쓰인 컴포넌트 이름.
//  옮기기용 해시(xReader)는 파일마다 달라지는 값(컴포넌트 비교 결과 등)이 섞여, Figma에서 그대로 복사한 화면도 ①과 ②가 다르게 나왔다
//  컴포넌트 안쪽 레이어는 원본 컴포넌트를 불러와야 다 나오므로(처음엔 덜 보여 같은 화면도 개수가 달랐다), 개수가 더 늘지 않을 때까지 불러온 뒤 센다. 숨긴 레이어는 뺀다
async function xSig(n) {
  if (!('children' in n)) return [Math.round(n.width), Math.round(n.height)].join('.');
  const vis = () => { const out = []; const walk = c => { if (c.visible === false) return; out.push(c); if ('children' in c) c.children.forEach(walk); }; n.children.forEach(walk); return out; };
  let all = vis(), comps = [];
  for (let k = 0; k < 6; k++) {
    // 이름은 마지막 「 / 」 뒤만(옮기기가 만든 대체 컴포넌트는 「묶음 / 변형」, 원본 변형은 「변형」만이라)
    comps = []; for (const i of all) if (i.type === 'INSTANCE') { const m = await i.getMainComponentAsync(); comps.push(m ? m.name.split(' / ').pop().trim() : '?'); }
    const again = vis(); if (again.length === all.length) break; all = again;
  }
  const texts = all.filter(c => c.type === 'TEXT').map(c => c.characters).join('\u0001');
  return [Math.round(n.width), Math.round(n.height), all.length, xfnv(texts), xfnv(comps.join('\u0001'))].join('.');
}

// 비교 「바뀐 것 확인」의 앞 단계(2026-11-17): 받는 파일(②)을 연 플러그인이 ② 작업 페이지 화면마다 같은 방식의 해시를 낸다
//  → 서버가 ①의 화면과 맞춰 Figma에서 직접 복사해 옮긴 화면을 찾는다(옮기지 않음). skip = 이미 기록이 있는 ② 노드
async function xferScan(job) {
  xMains = {};
  const to = job.to || {}, skip = new Set(job.scanSkip || []), frames = [];
  const pg = await figma.getNodeByIdAsync(to.pageId);
  if (!pg || pg.type !== 'PAGE') throw new Error('받는 작업 페이지를 찾지 못했습니다');
  await pg.loadAsync();
  const reg = pg.children.find(c => c.type === 'SECTION' && c.name === XREG);
  for (const f of topFrames(pg).filter(f => !reg || f[7] !== reg.id).slice(0, 300)) {   // 옮기기가 만든 대체 컴포넌트 섹션은 뺀다
    const n = await figma.getNodeByIdAsync(f[0]); if (!n || n.removed) continue;
    frames.push({ node: f[0], name: f[1], sig: await xSig(n), rec: skip.has(f[0]) ? 1 : 0 });   // 기록이 있는 ② 화면도 읽는다(①과 내용 비교)
  }
  return { frames };
}

// ════════ 복사 · 붙여넣기 옮기기(transfer mode paste, 2026-11-20) ════════
// 플러그인은 파일끼리 복사할 수 없지만 Figma의 복사(Ctrl+C) · 붙여넣기(Ctrl+V)는 컴포넌트 연결까지 그대로 옮긴다.
//  ① 플러그인: 옮길 화면을 골라 두고(선택 · 화면에 보이게) 화면마다 해시 · 확인값을 낸다(xferSelect)
//  ② 플러그인: 작업 페이지를 열고 선택을 비운 뒤 지금 맨 위 노드 목록을 적어 둔다(xferPastePrep) → 서버가 키를 대신 누름(안 되면 사람이)
//   → 새로 생긴 맨 위 노드를 찾고(xferPasteScan) → 제자리에 놓는다(xferPastePlace: 새 화면은 기존 내용 아래, 예전에 옮긴 화면은 그 자리에서 바꿔 끼움)
async function xferSelect(job, quick) {   // quick: 다시 고르기만(해시 · 확인값은 처음 고를 때 냈음)
  xMains = {};
  const R = xReader(), from = job.from || {};
  let pg = from.pageId ? await figma.getNodeByIdAsync(from.pageId) : null;
  const nodes = [];
  for (const id of from.nodeIds || []) { const n = await figma.getNodeByIdAsync(id); if (n && !n.removed) { nodes.push(n); if (!pg || pg.type !== 'PAGE') { let p = n; while (p && p.type !== 'PAGE') p = p.parent; pg = p; } } }
  if (!pg || pg.type !== 'PAGE' || !nodes.length) return { frames: [] };
  await figma.setCurrentPageAsync(pg);
  const here = nodes.filter(n => { let p = n; while (p && p.type !== 'PAGE') p = p.parent; return p && p.id === pg.id; });
  figma.currentPage.selection = here;
  try { figma.viewport.scrollAndZoomIntoView(here); } catch (e) {}
  const frames = [];
  if (quick) return { frames: here.map(n => ({ from: n.id, name: n.name })) };
  for (const n of here) { const o = await R.ser(n); delete o.x; delete o.y; frames.push({ from: n.id, name: n.name, hash: xfnv(JSON.stringify(o)), sig: await xSig(n) }); }
  return { frames };
}
async function xferPastePrep(job) {
  const to = job.to || {};
  const page = await figma.getNodeByIdAsync(to.pageId);
  if (!page || page.type !== 'PAGE') throw new Error('받는 작업 페이지를 찾지 못했습니다');
  await page.loadAsync();
  await figma.setCurrentPageAsync(page);
  figma.currentPage.selection = [];   // 선택된 프레임이 있으면 그 안에 붙으므로 비운다
  // 붙을 자리: 기존 내용 아래쪽 빈 곳이 화면 가운데 오게(붙은 뒤 xferPastePlace가 제자리로 옮긴다)
  let minX = Infinity, maxY = -Infinity;
  for (const c of page.children) { minX = Math.min(minX, c.x); maxY = Math.max(maxY, c.y + c.height); }
  if (isFinite(minX)) { try { figma.viewport.center = { x: minX + 2000, y: maxY + 3000 }; } catch (e) {} }
  return { before: page.children.map(c => c.id) };
}
async function xferPasteScan(job, before) {
  const page = await figma.getNodeByIdAsync((job.to || {}).pageId);
  if (!page || page.type !== 'PAGE') return { added: [] };
  const had = new Set(before);
  return { added: page.children.filter(c => !had.has(c.id)).map(c => ({ id: c.id, name: c.name })) };
}
async function xferPastePlace(job, ids, record) {
  const page = await figma.getNodeByIdAsync((job.to || {}).pageId);
  if (!page || page.type !== 'PAGE') throw new Error('받는 작업 페이지를 찾지 못했습니다');
  await page.loadAsync();
  const pasted = [];
  for (const id of ids) { const n = await figma.getNodeByIdAsync(id); if (n && !n.removed && n.parent && n.parent.id === page.id) pasted.push(n); }
  // 붙은 노드 ↔ 원본 화면: 이름이 같은 것끼리 순서대로, 남은 것은 순서대로
  const frames = job.frames || [], used = new Set(), pair = [];
  for (const f of frames) { const n = pasted.find(p => !used.has(p.id) && p.name === f.name); if (n) { used.add(n.id); pair.push({ f, n }); } }
  const rest = pasted.filter(p => !used.has(p.id));
  frames.filter(f => !pair.some(x => x.f === f)).forEach((f, i) => { if (rest[i]) { used.add(rest[i].id); pair.push({ f, n: rest[i] }); } });
  // 예전에 옮긴 화면: 받는 쪽 기록의 노드가 이 작업 페이지에 아직 있으면 그 자리에서 바꿔 끼운다
  const onPage = (n) => { for (let p = n; p; p = p.parent) if (p.type === 'PAGE') return p.id === page.id; return false; };
  const recOf = {}; (record || []).forEach(r => { if (r && r.from && r.from.key === (job.from || {}).key && r.to && r.to.node) recOf[r.from.node] = r.to.node; });
  const olds = {};
  for (const x of pair) { const k = recOf[x.f.from]; if (!k) continue; const o = await figma.getNodeByIdAsync(k); if (o && !o.removed && onPage(o) && !used.has(o.id)) olds[x.f.from] = o; }
  // 새 화면: 붙은 모양(서로의 배치)을 그대로 두고 통째로 기존 내용 아래(400px 띄움)로
  const pastedSet = new Set(pasted.map(p => p.id));
  let minX = Infinity, maxY = -Infinity, has = false;
  for (const c of page.children) { if (pastedSet.has(c.id) || c.name === XREG) continue; has = true; minX = Math.min(minX, c.x); maxY = Math.max(maxY, c.y + c.height); }
  const fresh = pair.filter(x => !olds[x.f.from]);
  let sx = Infinity, sy = Infinity; fresh.forEach(x => { sx = Math.min(sx, x.n.x); sy = Math.min(sy, x.n.y); });
  const dx = has ? minX - sx : 0, dy = has ? maxY + 400 - sy : 0;
  const made = [];
  for (const x of pair) {
    const old = olds[x.f.from];
    if (old) { const host = old.parent, at = old.x, bt = old.y; host.insertChild(host.children.indexOf(old), x.n); x.n.x = at; x.n.y = bt; old.remove(); }
    else { x.n.x += dx; x.n.y += dy; }
    made.push({ from: x.f.from, to: x.n.id, name: x.n.name, hash: x.f.hash, replaced: !!old });
  }
  figma.currentPage.selection = made.map(m => pasted.find(p => p.id === m.to)).filter(Boolean);
  try { figma.viewport.scrollAndZoomIntoView(figma.currentPage.selection); } catch (e) {}
  return { made, extra: pasted.length - pair.length };
}
