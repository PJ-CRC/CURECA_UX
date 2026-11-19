// 풀어 둔 xlsx 폴더 → 시트별 CSV · formulas.json · styles.json + books 항목(JSON)
// node xlsx2book.js <풀린폴더> <출력폴더> <meta 기준 접두사(예: language-set/)> <books.json 출력>
const fs = require('fs'), path = require('path');
const [, , SRC, OUT, PFX, BOOKOUT] = process.argv;
const rd = (p) => { try { return fs.readFileSync(path.join(SRC, p), 'utf8'); } catch (e) { return ''; } };
const ent = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (m, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&amp;/g, '&');
const attr = (tag, name) => { const m = new RegExp('\\s' + name + '="([^"]*)"').exec(tag); return m ? ent(m[1]) : null; };
const colNum = (s) => { let n = 0; for (const ch of s) n = n * 26 + ch.charCodeAt(0) - 64; return n - 1; };
const colName = (n) => { let s = ''; n++; while (n > 0) { const r = (n - 1) % 26; s = String.fromCharCode(65 + r) + s; n = Math.floor((n - 1) / 26); } return s; };

// 테마 색
const theme = rd('xl/theme/theme1.xml'), clr = {};
for (const k of ['dk1', 'lt1', 'dk2', 'lt2', 'accent1', 'accent2', 'accent3', 'accent4', 'accent5', 'accent6', 'hlink', 'folHlink']) {
  const m = new RegExp('<a:' + k + '>([\\s\\S]*?)</a:' + k + '>').exec(theme); if (!m) continue;
  const v = /lastClr="([0-9A-Fa-f]{6})"/.exec(m[1]) || /srgbClr val="([0-9A-Fa-f]{6})"/.exec(m[1]); if (v) clr[k] = v[1];
}
const TH = ['lt1', 'dk1', 'lt2', 'dk2', 'accent1', 'accent2', 'accent3', 'accent4', 'accent5', 'accent6', 'hlink', 'folHlink'];
const IDX = { 8: '000000', 9: 'FFFFFF', 10: 'FF0000', 11: '00FF00', 12: '0000FF', 13: 'FFFF00', 14: 'FF00FF', 15: '00FFFF', 0: '000000', 1: 'FFFFFF', 2: 'FF0000', 3: '00FF00', 4: '0000FF', 5: 'FFFF00', 6: 'FF00FF', 7: '00FFFF' };
function color(tag) {
  if (!tag) return null; let hex = null;
  const rgb = attr(tag, 'rgb'), th = attr(tag, 'theme'), ix = attr(tag, 'indexed');
  if (rgb) hex = rgb.slice(-6); else if (th != null) hex = clr[TH[+th]] || null; else if (ix != null) hex = IDX[+ix] || null;
  if (!hex) return null;
  const t = parseFloat(attr(tag, 'tint') || '0');
  let c = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  if (t) c = c.map((v) => Math.round(t < 0 ? v * (1 + t) : v + (255 - v) * t));
  return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('').toLowerCase();
}
// 서식
const sx = rd('xl/styles.xml');
const sect = (name) => { const m = new RegExp('<' + name + '[^>]*>([\\s\\S]*?)</' + name + '>').exec(sx); return m ? m[1] : ''; };
const fonts = (sect('fonts').match(/<font>[\s\S]*?<\/font>|<font\/>/g) || []).map((f) => ({
  b: /<b\/>|<b val="(1|true)"\/>/.test(f), i: /<i\/>|<i val="(1|true)"\/>/.test(f), u: /<u\/>|<u val="(?!none)[^"]*"\/>/.test(f), s: /<strike\/>|<strike val="(1|true)"\/>/.test(f),
  fg: color((/<color [^>]*\/>/.exec(f) || [])[0]),
}));
const fills = (sect('fills').match(/<fill>[\s\S]*?<\/fill>|<fill\/>/g) || []).map((f) => /patternType="solid"/.test(f) ? color((/<fgColor [^>]*\/>/.exec(f) || [])[0]) : null);
const numFmts = {}; (sect('numFmts').match(/<numFmt [^>]*\/>/g) || []).forEach((t) => { numFmts[attr(t, 'numFmtId')] = attr(t, 'formatCode'); });
const xfs = (sect('cellXfs').match(/<xf [^>]*\/>|<xf [^>]*>[\s\S]*?<\/xf>/g) || []).map((x) => {
  const f = fonts[+attr(x, 'fontId') || 0] || {}, bg = fills[+attr(x, 'fillId') || 0] || null, nf = attr(x, 'numFmtId') || '0';
  const al = (/<alignment [^>]*horizontal="(center|right|centerContinuous)"/.exec(x) || [])[1];
  const fmt = numFmts[nf] || '';
  const isDate = (+nf >= 14 && +nf <= 22) || (/[yd]/i.test(fmt.replace(/"[^"]*"|\[[^\]]*\]/g, '')) && !/^[#0.,%]+$/.test(fmt));
  const o = {}; if (bg && bg !== '#ffffff') o.bg = bg; if (f.fg && f.fg !== '#000000') o.fg = f.fg; if (f.b) o.b = 1; if (f.i) o.i = 1; if (f.u) o.u = 1; if (f.s) o.s = 1; if (al) o.al = al === 'right' ? 'right' : 'center';
  return { o, isDate, pct: /%/.test(fmt) || nf === '9' || nf === '10' };
});
// 공유 문자열
const ss = (rd('xl/sharedStrings.xml').match(/<si>[\s\S]*?<\/si>/g) || []).map((si) => ent(si.replace(/<rPh[\s\S]*?<\/rPh>/g, '').replace(/<t[^>]*\/>/g, '').match(/<t[^>]*>[\s\S]*?<\/t>/g)?.map((t) => t.replace(/<t[^>]*>|<\/t>/g, '')).join('') || ''));
// 시트 목록
const wb = rd('xl/workbook.xml'), rels = rd('xl/_rels/workbook.xml.rels'), relMap = {};
(rels.match(/<Relationship [^>]*\/>/g) || []).forEach((t) => { relMap[attr(t, 'Id')] = attr(t, 'Target'); });
const sheets = (wb.match(/<sheet [^>]*\/>/g) || []).map((t) => ({ name: attr(t, 'name'), hidden: !!attr(t, 'state') && attr(t, 'state') !== 'visible', file: 'xl/' + relMap[attr(t, 'r:id')].replace(/^\/?xl\//, '') }));

function serialDate(v) { const d = new Date(Math.round((v - 25569) * 86400000)); const p = (n) => String(n).padStart(2, '0'); const s = d.getUTCFullYear() + '-' + p(d.getUTCMonth() + 1) + '-' + p(d.getUTCDate()); return d.getUTCHours() || d.getUTCMinutes() ? s + ' ' + p(d.getUTCHours()) + ':' + p(d.getUTCMinutes()) : s; }
function shiftF(f, dr, dc) {
  return f.replace(/("[^"]*")|('[^']*'!|[A-Za-z_][\w.]*!)?(\$?)([A-Z]{1,3})(\$?)(\d+)(?![\w(])/g, (m, str, sh, cd, c, rd0, r) => {
    if (str) return str;
    return (sh || '') + cd + (cd ? c : colName(colNum(c) + dc)) + rd0 + (rd0 ? r : String(+r + dr));
  });
}
const parsed = sheets.map((sh, si) => {
  const x = rd(sh.file), grid = {}, fm = {}, st = {}, shared = {};
  let maxR = 0, maxC = 0;
  const cellRe = /<c ([^>]*?)(\/>|>([\s\S]*?)<\/c>)/g; let m;
  while ((m = cellRe.exec(x))) {
    const a = ' ' + m[1], ref = attr(a, 'r'), t = attr(a, 't'), s = +(attr(a, 's') || 0), body = m[3] || '';
    const rm = /^([A-Z]+)(\d+)$/.exec(ref); const c = colNum(rm[1]), r = +rm[2] - 1;
    const xf = xfs[s] || { o: {} };
    if (Object.keys(xf.o).length) st[ref] = JSON.stringify(xf.o);
    const fTag = /<f([^>]*)(?:\/>|>([\s\S]*?)<\/f>)/.exec(body);
    if (fTag) {
      const fa = ' ' + fTag[1], ftxt = fTag[2] != null ? ent(fTag[2]) : '';
      if (attr(fa, 't') === 'shared') {
        const sid = attr(fa, 'si');
        if (ftxt) { shared[sid] = { f: ftxt, r, c }; fm[ref] = ftxt; }
        else if (shared[sid]) fm[ref] = shiftF(shared[sid].f, r - shared[sid].r, c - shared[sid].c);
      } else if (ftxt) fm[ref] = ftxt;
    }
    const vm = /<v>([\s\S]*?)<\/v>/.exec(body); let v = vm ? ent(vm[1]) : '';
    if (t === 's') v = ss[+v] || '';
    else if (t === 'inlineStr') v = ent((body.match(/<t[^>]*>[\s\S]*?<\/t>/g) || []).map((q) => q.replace(/<t[^>]*>|<\/t>/g, '')).join(''));
    else if (t === 'b') v = v === '1' ? 'TRUE' : 'FALSE';
    else if (t === 'e' || t === 'str') { /* 그대로 */ }
    else if (v !== '') { const n = +v; if (xf.isDate && n > 0 && n < 2958466) v = serialDate(n); else if (xf.pct) v = String(+(n * 100).toPrecision(12)) + '%'; else v = String(+n.toPrecision(15)); }
    if (v !== '' || fm[ref]) { grid[r] = grid[r] || {}; grid[r][c] = v; if (r + 1 > maxR) maxR = r + 1; if (c + 1 > maxC) maxC = c + 1; }
    else if (st[ref]) { if (r + 1 > maxR) maxR = r + 1; if (c + 1 > maxC) maxC = c + 1; }
  }
  // 열 너비
  const dw = parseFloat((/<sheetFormatPr [^>]*defaultColWidth="([\d.]+)"/.exec(x) || [])[1] || '8.43');
  const px = (w) => Math.round(w * 7 + 5);
  const widths = new Array(maxC).fill(px(dw));
  (x.match(/<col [^>]*\/>/g) || []).forEach((t) => { const mn = +attr(t, 'min') - 1, mx = +attr(t, 'max') - 1, w = parseFloat(attr(t, 'width') || dw), hid = attr(t, 'hidden') === '1'; for (let i = mn; i <= Math.min(mx, maxC - 1); i++) widths[i] = hid ? 0 : px(w); });
  const pane = /<pane [^>]*\/>/.exec(x); const freeze = pane && /state="frozen"/.test(pane[0]) ? +(attr(pane[0], 'ySplit') || 0) : 0;
  const af = /<autoFilter [^>]*ref="([^"]+)"/.exec(x);
  const dv = (x.match(/<dataValidation [^>]*type="list"[^>]*>[\s\S]*?<\/dataValidation>/g) || []).map((t) => ({ ranges: attr(t, 'sqref').split(/\s+/), f: ent((/<formula1>([\s\S]*?)<\/formula1>/.exec(t) || [])[1] || '') }));
  return { ...sh, grid, fm, st, maxR, maxC, widths, freeze, filter: af ? af[1] : '', dv };
});
// 목록(데이터 유효성) 값: "a,b" 또는 시트 범위
function rangeVals(f) {
  const m = /^(?:'?([^'!]+)'?!)?\$?([A-Z]+)\$?(\d+)(?::\$?([A-Z]+)\$?(\d+))?$/.exec(f); if (!m) return null;
  const p = m[1] ? parsed.find((q) => q.name === m[1]) : null; if (!p) return null;
  const out = []; for (let r = +m[3] - 1; r <= +(m[5] || m[3]) - 1; r++) for (let c = colNum(m[2]); c <= colNum(m[4] || m[2]); c++) { const v = (p.grid[r] || {})[c]; if (v != null && v !== '' && !out.includes(v)) out.push(v); }
  return out;
}
const csvCell = (v) => /[",\r\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
fs.mkdirSync(OUT, { recursive: true });
const book = { sheets: {}, formulas: {}, freeze: {}, widths: {}, styles: {}, filters: {}, lists: {} }, files = [], report = [];
parsed.filter((p) => !p.hidden).forEach((p, i) => {
  const id = 'sheet' + String(i + 1).padStart(2, '0'), key = PFX + id + '.csv';
  const lines = []; for (let r = 0; r < p.maxR; r++) { const row = []; for (let c = 0; c < p.maxC; c++) row.push(csvCell(String((p.grid[r] || {})[c] ?? ''))); lines.push(row.join(',')); }
  fs.writeFileSync(path.join(OUT, id + '.csv'), lines.join('\n') + '\n', 'utf8');
  book.sheets[key] = p.name + (p.hidden ? ' (숨김)' : ''); files.push(key);
  if (Object.keys(p.fm).length) { const fp = PFX + id + '.formulas.json'; fs.writeFileSync(path.join(OUT, id + '.formulas.json'), '{\n' + Object.keys(p.fm).map((k) => JSON.stringify(k) + ':' + JSON.stringify(p.fm[k])).join(',\n') + '\n}\n', 'utf8'); book.formulas[key] = fp; files.push(fp); }
  if (Object.keys(p.st).length) {
    const pal = [], ix = {}, c = {}; Object.keys(p.st).forEach((ref) => { const s = p.st[ref]; if (!(s in ix)) { ix[s] = pal.length; pal.push(JSON.parse(s)); } c[ref] = ix[s]; });
    const sp = PFX + id + '.styles.json'; fs.writeFileSync(path.join(OUT, id + '.styles.json'), JSON.stringify({ p: pal, c }), 'utf8'); book.styles[key] = sp; files.push(sp);
  }
  if (p.freeze) book.freeze[key] = p.freeze;
  book.widths[key] = p.widths;
  if (p.filter) book.filters[key] = p.filter;
  const L = p.dv.map((d) => { const s = d.f.trim(); const vals = /^".*"$/.test(s) ? s.slice(1, -1).split(',').map((q) => q.trim()) : rangeVals(s.replace(/^=/, '')); return vals && vals.length ? { ranges: d.ranges, values: vals } : null; }).filter(Boolean);
  if (L.length) book.lists[key] = L;
  report.push(`${id} ${p.name}${p.hidden ? ' (숨김)' : ''}: ${p.maxR}행 × ${p.maxC}열, 수식 ${Object.keys(p.fm).length}, 서식칸 ${Object.keys(p.st).length}, 고정 ${p.freeze}, 필터 ${p.filter || '-'}, 목록 ${L.length}`);
});
Object.keys(book).forEach((k) => { if (k !== 'sheets' && !Object.keys(book[k]).length) delete book[k]; });
fs.writeFileSync(BOOKOUT, JSON.stringify({ book, files }, null, 1), 'utf8');
console.log(report.join('\n'));
