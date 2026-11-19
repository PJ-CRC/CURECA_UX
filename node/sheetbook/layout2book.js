// 원본 xlsx(풀린 폴더)의 셀 병합 · 줄 바꿈 · 세로 정렬 · 행 높이 · 숨김 행 · 기본 글꼴을 지금 시트 묶음(meta.books[KEY])에 더한다.
// 지금 CSV는 그대로 둔다. 행 대응: Language ID(B열)가 있으면 ID로, 머리 줄은 같은 번호, 없는 줄(새 줄)은 바로 위 대응 줄을 따른다.
// node layout2book.js <풀린 xlsx> <glossary 폴더> <book key> [--dry]
const fs = require('fs'), path = require('path');
const [, , SRC, SRCCSV, GDIR, KEY, DRY] = process.argv;   // SRCCSV: 같은 xlsx를 xlsx2book.js로 푼 시트 CSV 폴더(원본 행 내용)
const rd = (p) => { try { return fs.readFileSync(path.join(SRC, p), 'utf8'); } catch (e) { return ''; } };
const ent = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(+n)).replace(/&amp;/g, '&');
const attr = (tag, name) => { const m = new RegExp('\\s' + name + '="([^"]*)"').exec(tag); return m ? ent(m[1]) : null; };
const colNum = (s) => { let n = 0; for (const ch of s) n = n * 26 + ch.charCodeAt(0) - 64; return n - 1; };
const colName = (n) => { let s = ''; n++; while (n > 0) { const r = (n - 1) % 26; s = String.fromCharCode(65 + r) + s; n = Math.floor((n - 1) / 26); } return s; };
const ID = /^[A-Za-z]+-[a-z]+(-[a-z]+)*-\d+$/;
const parseCsv = (t) => { const rows = []; let r = [], c = '', q = false; for (let i = 0; i < t.length; i++) { const ch = t[i]; if (q) { if (ch == '"') { if (t[i + 1] == '"') { c += '"'; i++; } else q = false; } else c += ch; } else if (ch == '"') q = true; else if (ch == ',') { r.push(c); c = ''; } else if (ch == '\n') { r.push(c); rows.push(r); r = []; c = ''; } else if (ch != '\r') c += ch; } if (r.length || c) { r.push(c); rows.push(r); } return rows; };

// 서식: 줄 바꿈 · 세로 정렬 · 기본 글꼴
const sx = rd('xl/styles.xml');
const sect = (name) => { const m = new RegExp('<' + name + '[^>]*>([\\s\\S]*?)</' + name + '>').exec(sx); return m ? m[1] : ''; };
const font0 = (sect('fonts').match(/<font>[\s\S]*?<\/font>|<font\/>/) || [''])[0];
const FONT = { name: attr((/<name [^>]*\/>/.exec(font0) || [''])[0], 'val') || '', size: parseFloat(attr((/<sz [^>]*\/>/.exec(font0) || [''])[0], 'val') || '11') };
const fontSz = (sect('fonts').match(/<font>[\s\S]*?<\/font>|<font\/>/g) || []).map((f) => parseFloat(attr((/<sz [^>]*\/>/.exec(f) || [''])[0], 'val') || '0') || FONT.size);
const xfs = (sect('cellXfs').match(/<xf [^>]*\/>|<xf [^>]*>[\s\S]*?<\/xf>/g) || []).map((x) => {
  const al = (/<alignment [^>]*\/?>/.exec(x) || [''])[0], sz = fontSz[+(attr(x, 'fontId') || 0)] || FONT.size;
  return { w: attr(al, 'wrapText') === '1' || attr(al, 'wrapText') === 'true', va: attr(al, 'vertical') || '', sz: sz !== FONT.size ? sz : 0 };
});
const ss = (rd('xl/sharedStrings.xml').match(/<si>[\s\S]*?<\/si>/g) || []).map((si) => ent((si.replace(/<rPh[\s\S]*?<\/rPh>/g, '').match(/<t[^>]*>[\s\S]*?<\/t>/g) || []).map((t) => t.replace(/<t[^>]*>|<\/t>/g, '')).join('')));
const wb = rd('xl/workbook.xml'), rels = rd('xl/_rels/workbook.xml.rels'), relMap = {};
(rels.match(/<Relationship [^>]*\/>/g) || []).forEach((t) => { relMap[attr(t, 'Id')] = attr(t, 'Target'); });
const srcSheets = (wb.match(/<sheet [^>]*\/>/g) || []).map((t) => ({ name: attr(t, 'name'), hidden: !!attr(t, 'state') && attr(t, 'state') !== 'visible', file: 'xl/' + relMap[attr(t, 'r:id')].replace(/^\/?xl\//, '') })).filter((s) => !s.hidden);

function readSheet(file) {
  const x = rd(file), rows = {}, wrap = {}, idOf = {};
  (x.match(/<row [^>]*>/g) || []).forEach((t) => { const r = +attr(t, 'r'); rows[r] = { ht: attr(t, 'customHeight') === '1' ? parseFloat(attr(t, 'ht')) : 0, hidden: attr(t, 'hidden') === '1' }; });
  const re = /<c ([^>]*?)(\/>|>([\s\S]*?)<\/c>)/g; let m;
  while ((m = re.exec(x))) {
    const a = ' ' + m[1], ref = attr(a, 'r'), s = +(attr(a, 's') || 0), xf = xfs[s] || {};
    const rm = /^([A-Z]+)(\d+)$/.exec(ref), r = +rm[2], c = colNum(rm[1]);
    if (xf.w || xf.sz || (xf.va && xf.va !== 'bottom')) wrap[r + ':' + c] = { w: xf.w ? 1 : 0, va: xf.va && xf.va !== 'bottom' ? xf.va : '', sz: xf.sz };
    if (c === 1) { const v = /<v>([\s\S]*?)<\/v>/.exec(m[3] || ''); let val = v ? ent(v[1]) : ''; if (attr(a, 't') === 's') val = ss[+val] || ''; if (ID.test(val)) idOf[r] = val; }
  }
  const merges = (x.match(/<mergeCell [^>]*\/>/g) || []).map((t) => attr(t, 'ref'));
  const defH = parseFloat(attr((/<sheetFormatPr [^>]*>/.exec(x) || [''])[0], 'defaultRowHeight') || '0');
  return { rows, wrap, idOf, merges, defH };
}

const metaPath = path.join(GDIR, 'meta.json'), meta = JSON.parse(fs.readFileSync(metaPath, 'utf8')), book = meta.books[KEY];
const keys = Object.keys(book.sheets);
if (keys.length !== srcSheets.length) console.log(`! 시트 수가 다름: 묶음 ${keys.length} · 원본 ${srcSheets.length} (앞에서부터 짝지음)`);
book.merges = {}; book.heights = {}; book.hrows = {}; book.font = FONT;
const writes = [];
keys.forEach((k, i) => {
  const src = srcSheets[i]; if (!src) return;
  const S = readSheet(src.file), cur = parseCsv(fs.readFileSync(path.join(GDIR, k), 'utf8'));
  // 행 대응(1부터): cur 행 → 원본 행. ① Language ID ② 내용이 같은 줄(양쪽에 하나뿐일 때) ③ 대응된 두 줄 사이 간격이 같으면 그 사이도 차례로 ④ 남은 줄(새 줄)은 위 대응 줄의 서식을 따른다
  const srcRows = parseCsv(fs.readFileSync(path.join(SRCCSV, 'sheet' + String(i + 1).padStart(2, '0') + '.csv'), 'utf8'));
  const kf = (r) => (r || []).map((x) => String(x).replace(/\s+/g, ' ').trim()).join('|').replace(/\|+$/, '');
  const srcById = {}; Object.keys(S.idOf).forEach((r) => { srcById[S.idOf[r]] = +r; });
  const useId = Object.keys(srcById).length >= 5;
  const map = {}, used = {};
  const put = (r, sr) => { if (!map[r] && sr && !used[sr]) { map[r] = sr; used[sr] = 1; } };
  if (useId) for (let r = 1; r <= cur.length; r++) { const id = (cur[r - 1] || [])[1] || ''; if (ID.test(id)) put(r, srcById[id]); }
  const cnt = (rows) => { const o = {}; rows.forEach((x, n) => { const k = kf(x); if (k) (o[k] = o[k] || []).push(n + 1); }); return o; };
  const cc = cnt(cur), sc = cnt(srcRows);
  Object.keys(cc).forEach((k) => { if (cc[k].length === 1 && sc[k] && sc[k].length === 1) put(cc[k][0], sc[k][0]); });
  const anchors = Object.keys(map).map(Number).sort((a, b) => a - b);
  const bounds = [[0, 0]].concat(anchors.map((r) => [r, map[r]]), [[cur.length + 1, srcRows.length + 1]]);
  for (let n = 0; n + 1 < bounds.length; n++) {
    const [c1, s1] = bounds[n], [c2, s2] = bounds[n + 1];
    if (c2 - c1 === s2 - s1) for (let r = c1 + 1; r < c2; r++) put(r, s1 + (r - c1));
  }
  const inherit = {}; let lastSrc = 0;
  for (let r = 1; r <= cur.length; r++) { if (map[r]) lastSrc = map[r]; else if (lastSrc) inherit[r] = lastSrc; }
  const back = {}; Object.keys(map).forEach((r) => { back[map[r]] = +r; });
  // 행 높이(pt → px) · 숨김 행
  const hts = {}, hid = [];
  Object.keys(map).forEach((r) => { const o = S.rows[map[r]]; if (!o) return; if (o.ht) hts[r] = Math.round(o.ht * 4 / 3); if (o.hidden) hid.push(+r); });
  if (S.defH) hts['0'] = Math.round(S.defH * 4 / 3);   // "0" = 그 시트의 기본 행 높이(px)
  if (Object.keys(hts).length) book.heights[k] = hts;
  if (hid.length) book.hrows[k] = hid.sort((a, b) => a - b);
  // 병합: 시작 · 끝 줄이 모두 대응되고 간격이 같을 때만
  const mg = []; let lost = 0;
  S.merges.forEach((ref) => { const m = /^([A-Z]+)(\d+):([A-Z]+)(\d+)$/.exec(ref); if (!m) return; const a = back[+m[2]], b = back[+m[4]]; if (a && b && b - a === +m[4] - +m[2]) mg.push(m[1] + a + ':' + m[3] + b); else lost++; });
  if (mg.length) book.merges[k] = mg;
  // 줄 바꿈 · 세로 정렬 → 칸 서식(styles.json)에 w · va
  const sp = (book.styles || {})[k]; let sty = sp ? JSON.parse(fs.readFileSync(path.join(GDIR, sp), 'utf8')) : { p: [], c: {} };
  const pal = sty.p, key = {}; pal.forEach((o, n) => { key[JSON.stringify(o)] = n; });
  const idx = (o) => { const s = JSON.stringify(o); if (key[s] == null) { key[s] = pal.length; pal.push(o); } return key[s]; };
  const width = cur.reduce((a, r) => Math.max(a, r.length), 0); let nw = 0;
  for (let r = 1; r <= cur.length; r++) {
    const sr = map[r] || inherit[r]; if (!sr) continue;
    for (let c = 0; c < width; c++) {
      const wv = S.wrap[sr + ':' + c]; if (!wv) continue;
      const ref = colName(c) + r, base = sty.c[ref] != null ? Object.assign({}, pal[sty.c[ref]]) : {};
      if (wv.w) base.w = 1; if (wv.va) base.va = wv.va === 'center' ? 'middle' : wv.va; if (wv.sz) base.sz = wv.sz;
      sty.c[ref] = idx(base); nw++;
    }
  }
  if (!sp) { book.styles = book.styles || {}; book.styles[k] = k.replace(/\.csv$/, '.styles.json'); if (!meta.files.includes(book.styles[k])) meta.files.push(book.styles[k]); }
  writes.push([path.join(GDIR, book.styles[k]), JSON.stringify(sty)]);
  console.log(`${k} ← ${src.name} | 대응 ${Object.keys(map).length}/${cur.length}줄(새 줄 ${Object.keys(inherit).length}) · ID ${useId ? '사용' : '안 씀'} | 병합 ${mg.length}${lost ? ` (못 옮김 ${lost})` : ''} · 줄바꿈 칸 ${nw} · 높이 ${Object.keys(hts).length} · 숨김 줄 ${hid.length}`);
});
['merges', 'heights', 'hrows'].forEach((n) => { if (!Object.keys(book[n]).length) delete book[n]; });
console.log('기본 글꼴', JSON.stringify(FONT));
if (DRY === '--dry') { console.log('(시험 — 쓰지 않음)'); process.exit(0); }
writes.forEach(([f, t]) => fs.writeFileSync(f, t, 'utf8'));
meta.updatedAt = new Date().toISOString();
fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
console.log('저장함');
