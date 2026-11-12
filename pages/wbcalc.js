/* 시트 묶음(UX 문서) 수식 계산 — 엑셀과 같은 쓰는 법(2026-11-12)
   - 참조: A1 · $A$1 · A1:B9 · A:F(열 전체) · 'B.메뉴'!E2 · 시트이름!A1
   - 연산: & (글 잇기) · + - * / ^ · % · = <> < > <= >= · 괄호
   - 함수: SUM AVERAGE MIN MAX ROUND COUNT COUNTA COUNTIF IF AND OR NOT IFERROR VLOOKUP XLOOKUP CONCAT CONCATENATE LEN TODAY
   - 오류: #REF!(없는 시트 · 칸) #NAME?(없는 함수) #VALUE! #DIV/0! #N/A #CIRC!(서로 참조) #ERROR!(수식 모양 오류)
   - shift(수식, 줄 수, 칸 수): 상대 참조($ 없는 쪽)를 옮긴다(엑셀에서 수식을 복사할 때와 같음 — 공유 수식 펼치기 · 줄 넣기)
   브라우저(window.WBCalc)와 Node(require) 둘 다 쓴다 */
(function(root){
  'use strict';
  function colNum(s){ var n = 0; for (var i = 0; i < s.length; i++) n = n * 26 + s.charCodeAt(i) - 64; return n - 1; }
  function colName(i){ var s = ''; i++; while (i > 0) { var r = (i - 1) % 26; s = String.fromCharCode(65 + r) + s; i = Math.floor((i - 1) / 26); } return s; }
  function err(e){ return { err: e }; }
  function isErr(v){ return v && typeof v === 'object' && v.err; }

  /* ── 상대 참조 옮기기: 문자열("…") 밖의 칸 참조만 ── */
  var REF_RE = /((?:'(?:[^']|'')+'|[A-Za-z_\u0080-￿][\w.\u0080-￿]*)!)?(\$?)([A-Z]{1,3})(\$?)(\d+)(?![\w(!])/g;
  function shift(f, dr, dc){
    if (!dr && !dc) return f;
    return String(f).split(/("(?:[^"]|"")*")/).map(function(seg, i){
      if (i % 2) return seg;
      return seg.replace(REF_RE, function(m, sh, ca, col, ra, row, off, all){
        var pv = off > 0 ? all[off - 1] : '';
        if (!sh && /[\w.\u0080-￿$]/.test(pv)) return m;   // 이름 안(예: LOG10)이면 그대로
        var c = colNum(col), r = +row;
        if (!ca) c += dc; if (!ra) r += dr;
        if (c < 0 || r < 1) return '#REF!';
        return (sh || '') + ca + colName(c) + ra + r;
      });
    }).join('');
  }

  /* ── 낱말 나누기 ── */
  function lex(f){
    var t = [], i = 0, s = String(f), m;
    while (i < s.length) {
      var ch = s[i], rest = s.slice(i);
      if (/\s/.test(ch)) { i++; continue; }
      if (ch === '"') { var j = i + 1, v = ''; while (j < s.length) { if (s[j] === '"') { if (s[j + 1] === '"') { v += '"'; j += 2; continue; } break; } v += s[j++]; } if (j >= s.length) throw 0; t.push({ k: 'str', v: v }); i = j + 1; continue; }
      if ((m = /^(?:'((?:[^']|'')+)'|([A-Za-z_\u0080-￿][\w.\u0080-￿]*))!/.exec(rest))) { t.push({ k: 'sheet', v: m[1] != null ? m[1].replace(/''/g, "'") : m[2] }); i += m[0].length; continue; }
      if ((m = /^\$?([A-Z]{1,3})\$?(\d+)(?![\w(])/.exec(rest))) { t.push({ k: 'cell', c: colNum(m[1]), r: +m[2] - 1 }); i += m[0].length; continue; }
      if ((m = /^\$?([A-Z]{1,3})\s*:\s*\$?([A-Z]{1,3})(?![\w(\d])/.exec(rest))) { t.push({ k: 'cols', c1: colNum(m[1]), c2: colNum(m[2]) }); i += m[0].length; continue; }
      if ((m = /^(\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?/.exec(rest))) { t.push({ k: 'num', v: parseFloat(m[0]) }); i += m[0].length; continue; }
      if ((m = /^(TRUE|FALSE)(?![\w(])/i.exec(rest))) { t.push({ k: 'bool', v: m[1].toUpperCase() === 'TRUE' }); i += m[0].length; continue; }
      if ((m = /^([A-Za-z_][\w.]*)\s*\(/.exec(rest))) { t.push({ k: 'fn', v: m[1].toUpperCase() }); i += m[0].length; continue; }
      if ((m = /^(<=|>=|<>|[=<>&+\-*\/^%(),;:])/.exec(rest))) { t.push({ k: 'op', v: m[1] === ';' ? ',' : m[1] }); i += m[0].length; continue; }
      if ((m = /^#(REF!|NAME\?|VALUE!|DIV\/0!|N\/A|NUM!|NULL!)/.exec(rest))) { t.push({ k: 'errv', v: m[0] }); i += m[0].length; continue; }
      throw 0;
    }
    return t;
  }

  /* ── 수식 → 나무(AST) ── */
  function parse(f){
    var t = lex(f), p = 0;
    function pk(){ return t[p]; }
    function isOp(v){ var x = t[p]; return x && x.k === 'op' && x.v === v; }
    function need(v){ if (!isOp(v)) throw 0; p++; }
    function bin(next, ops){ return function(){ var a = next(); while (t[p] && t[p].k === 'op' && ops.indexOf(t[p].v) >= 0) { var o = t[p++].v; a = { k: 'bin', o: o, a: a, b: next() }; } return a; }; }
    function unary(){ if (isOp('-') || isOp('+')) { var o = t[p++].v; var x = unary(); return o === '-' ? { k: 'neg', a: x } : x; } return post(); }
    function post(){ var x = prim(); while (isOp('%')) { p++; x = { k: 'pct', a: x }; } return x; }
    function pow(){ var a = unary(); while (isOp('^')) { p++; a = { k: 'bin', o: '^', a: a, b: unary() }; } return a; }
    var mul = bin(pow, ['*', '/']), add = bin(mul, ['+', '-']), cat = bin(add, ['&']), cmp = bin(cat, ['=', '<>', '<', '>', '<=', '>=']);
    function ref(sheet){
      var x = t[p];
      if (x && x.k === 'cell') { p++; if (isOp(':') && t[p + 1] && t[p + 1].k === 'cell') { p++; var y = t[p++]; return { k: 'rng', s: sheet, r1: Math.min(x.r, y.r), c1: Math.min(x.c, y.c), r2: Math.max(x.r, y.r), c2: Math.max(x.c, y.c) }; } return { k: 'ref', s: sheet, r: x.r, c: x.c }; }
      if (x && x.k === 'cols') { p++; return { k: 'rng', s: sheet, r1: 0, c1: Math.min(x.c1, x.c2), r2: -1, c2: Math.max(x.c1, x.c2) }; }
      throw 0;
    }
    function prim(){
      var x = pk(); if (!x) throw 0;
      if (x.k === 'num') { p++; return { k: 'lit', v: x.v }; }
      if (x.k === 'str') { p++; return { k: 'lit', v: x.v }; }
      if (x.k === 'bool') { p++; return { k: 'lit', v: x.v }; }
      if (x.k === 'errv') { p++; return { k: 'lit', v: err(x.v) }; }
      if (x.k === 'sheet') { p++; return ref(x.v); }
      if (x.k === 'cell' || x.k === 'cols') return ref(null);
      if (x.k === 'fn') { p++; var args = []; if (!isOp(')')) { do { if (isOp(',') ) { args.push({ k: 'lit', v: '' }); } else args.push(cmp()); } while (isOp(',') && ++p); } need(')'); return { k: 'fn', n: x.v, a: args }; }
      if (isOp('(')) { p++; var e = cmp(); need(')'); return e; }
      throw 0;
    }
    var ast = cmp(); if (p < t.length) throw 0; return ast;
  }

  /* ── 값 바꾸기 ── */
  function num(v){
    if (isErr(v)) return v;
    if (typeof v === 'number') return v; if (typeof v === 'boolean') return v ? 1 : 0;
    var s = String(v == null ? '' : v).trim(); if (s === '') return 0;
    var n = Number(s.replace(/,/g, '')); return isNaN(n) ? err('#VALUE!') : n;
  }
  function txt(v){
    if (isErr(v)) return v.err;
    if (typeof v === 'number') { if (!isFinite(v)) return '#NUM!'; var s = String(Math.round(v * 1e12) / 1e12); return s; }
    if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE';
    return v == null ? '' : String(v);
  }
  function isNumLike(v){ return typeof v === 'number' || (typeof v === 'string' && v.trim() !== '' && !isNaN(Number(v.trim()))); }
  function truthy(v){ if (isErr(v)) return v; if (typeof v === 'boolean') return v; if (typeof v === 'number') return v !== 0; var s = String(v).trim().toUpperCase(); if (s === 'TRUE') return true; if (s === 'FALSE' || s === '') return false; var n = Number(s); return isNaN(n) ? err('#VALUE!') : n !== 0; }
  function flat(v, out){ out = out || []; if (v && v.rng) v.rng.forEach(function(row){ row.forEach(function(x){ out.push(x); }); }); else out.push(v); return out; }
  function cmpv(a, b){
    if (isNumLike(a) && isNumLike(b)) { var x = Number(a), y = Number(b); return x < y ? -1 : x > y ? 1 : 0; }
    var s = txt(a).toLowerCase(), u = txt(b).toLowerCase(); return s < u ? -1 : s > u ? 1 : 0;
  }
  /* COUNTIF 조건: ">10" · "<>x" · "=a" · "글*" (와일드카드 * ?) · 값 */
  function crit(c){
    var s = txt(c), m = /^(<=|>=|<>|=|<|>)?([\s\S]*)$/.exec(s), op = m[1] || '=', val = m[2];
    var re = /[*?]/.test(val) && (op === '=' || op === '<>') ? new RegExp('^' + val.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$', 'i') : null;
    return function(x){
      if (re) { var hit = re.test(txt(x)); return op === '=' ? hit : !hit; }
      var d = (val === '' && op === '=') ? (txt(x) === '' ? 0 : 1) : cmpv(x, val);
      return op === '=' ? d === 0 : op === '<>' ? d !== 0 : op === '<' ? d < 0 : op === '>' ? d > 0 : op === '<=' ? d <= 0 : d >= 0;
    };
  }
  function nums(args){ var o = []; for (var i = 0; i < args.length; i++) { var a = args[i]; if (a && a.rng) { var f = flat(a); for (var j = 0; j < f.length; j++) { if (isErr(f[j])) return f[j]; if (isNumLike(f[j])) o.push(Number(f[j])); } } else { var n = num(a); if (isErr(n)) return n; o.push(n); } } return o; }
  function lookupCol(rng, key, exact){
    var rows = rng.rng; if (!exact) { var best = -1; for (var i = 0; i < rows.length; i++) { if (cmpv(rows[i][0], key) <= 0) best = i; else break; } return best; }
    for (var j = 0; j < rows.length; j++) if (cmpv(rows[j][0], key) === 0 && txt(rows[j][0]) !== '' ) return j;
    return -1;
  }
  var FN = {
    SUM: function(a){ var n = nums(a); return isErr(n) ? n : n.reduce(function(x, y){ return x + y; }, 0); },
    AVERAGE: function(a){ var n = nums(a); return isErr(n) ? n : n.length ? n.reduce(function(x, y){ return x + y; }, 0) / n.length : err('#DIV/0!'); },
    MIN: function(a){ var n = nums(a); return isErr(n) ? n : n.length ? Math.min.apply(null, n) : 0; },
    MAX: function(a){ var n = nums(a); return isErr(n) ? n : n.length ? Math.max.apply(null, n) : 0; },
    ROUND: function(a){ var x = num(a[0]), d = a.length > 1 ? num(a[1]) : 0; if (isErr(x)) return x; if (isErr(d)) return d; var k = Math.pow(10, d); return Math.round(x * k + (x >= 0 ? 1e-9 : -1e-9)) / k; },
    COUNT: function(a){ var c = 0; a.forEach(function(v){ flat(v).forEach(function(x){ if (isNumLike(x)) c++; }); }); return c; },
    COUNTA: function(a){ var c = 0; a.forEach(function(v){ flat(v).forEach(function(x){ if (txt(x) !== '') c++; }); }); return c; },
    COUNTIF: function(a){ if (a.length < 2) return err('#VALUE!'); var t = crit(a[1]), c = 0; flat(a[0]).forEach(function(x){ if (t(x)) c++; }); return c; },
    AND: function(a){ var r = true; for (var i = 0; i < a.length; i++) { var f = flat(a[i]); for (var j = 0; j < f.length; j++) { var b = truthy(f[j]); if (isErr(b)) return b; r = r && b; } } return r; },
    OR: function(a){ var r = false; for (var i = 0; i < a.length; i++) { var f = flat(a[i]); for (var j = 0; j < f.length; j++) { var b = truthy(f[j]); if (isErr(b)) return b; r = r || b; } } return r; },
    NOT: function(a){ var b = truthy(a[0]); return isErr(b) ? b : !b; },
    VLOOKUP: function(a){
      if (a.length < 3 || !a[1] || !a[1].rng) return err('#VALUE!');
      var ci = num(a[2]); if (isErr(ci)) return ci; var exact = a.length > 3 ? truthy(a[3]) === false : false;
      var i = lookupCol(a[1], a[0], exact); if (i < 0) return err('#N/A');
      var row = a[1].rng[i]; return ci < 1 || ci > row.length ? err('#REF!') : row[ci - 1];
    },
    XLOOKUP: function(a){
      if (a.length < 3 || !a[1] || !a[1].rng || !a[2] || !a[2].rng) return err('#VALUE!');
      var keys = flat(a[1]), vals = flat(a[2]);
      for (var i = 0; i < keys.length; i++) if (txt(keys[i]) !== '' && cmpv(keys[i], a[0]) === 0) return vals[i] == null ? '' : vals[i];
      return a.length > 3 ? a[3] : err('#N/A');
    },
    CONCAT: function(a){ var s = ''; for (var i = 0; i < a.length; i++) { var f = flat(a[i]); for (var j = 0; j < f.length; j++) { if (isErr(f[j])) return f[j]; s += txt(f[j]); } } return s; },
    LEN: function(a){ var v = a[0]; return isErr(v) ? v : txt(v).length; },
    TODAY: function(){ var d = new Date(), z = function(n){ return (n < 10 ? '0' : '') + n; }; return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate()); }
  };
  FN.CONCATENATE = FN.CONCAT;
  var LAZY = { IF: 1, IFERROR: 1 };   // 고른 쪽만 계산

  /* ── 계산 ── ctx: { sheet(이름|null) → 시트 번호(없으면 -1), val(시트 번호, r, c) → 값, size(시트 번호) → [줄 수, 칸 수] } */
  function ev(n, ctx, si){
    switch (n.k) {
      case 'lit': return n.v;
      case 'ref': { var s = n.s == null ? si : ctx.sheet(n.s); if (s < 0) return err('#REF!'); return ctx.val(s, n.r, n.c); }
      case 'rng': {
        var s2 = n.s == null ? si : ctx.sheet(n.s); if (s2 < 0) return err('#REF!');
        var r2 = n.r2 < 0 ? ctx.size(s2)[0] - 1 : n.r2, out = [];
        for (var r = n.r1; r <= r2; r++) { var row = []; for (var c = n.c1; c <= n.c2; c++) row.push(ctx.val(s2, r, c)); out.push(row); }
        return { rng: out };
      }
      case 'neg': { var x = num(one(ev(n.a, ctx, si))); return isErr(x) ? x : -x; }
      case 'pct': { var y = num(one(ev(n.a, ctx, si))); return isErr(y) ? y : y / 100; }
      case 'bin': {
        var a = one(ev(n.a, ctx, si)), b = one(ev(n.b, ctx, si));
        if (n.o === '&') { if (isErr(a)) return a; if (isErr(b)) return b; return txt(a) + txt(b); }
        if (['=', '<>', '<', '>', '<=', '>='].indexOf(n.o) >= 0) { if (isErr(a)) return a; if (isErr(b)) return b; var d = cmpv(a, b); return n.o === '=' ? d === 0 : n.o === '<>' ? d !== 0 : n.o === '<' ? d < 0 : n.o === '>' ? d > 0 : n.o === '<=' ? d <= 0 : d >= 0; }
        var p = num(a), q = num(b); if (isErr(p)) return p; if (isErr(q)) return q;
        return n.o === '+' ? p + q : n.o === '-' ? p - q : n.o === '*' ? p * q : n.o === '^' ? Math.pow(p, q) : q === 0 ? err('#DIV/0!') : p / q;
      }
      case 'fn': {
        if (n.n === 'IF') { var c0 = truthy(one(ev(n.a[0], ctx, si))); if (isErr(c0)) return c0; return c0 ? (n.a[1] ? ev(n.a[1], ctx, si) : true) : (n.a[2] ? ev(n.a[2], ctx, si) : false); }
        if (n.n === 'IFERROR') { var v0 = one(ev(n.a[0], ctx, si)); return isErr(v0) ? (n.a[1] ? ev(n.a[1], ctx, si) : '') : v0; }
        var f = FN[n.n]; if (!f) return err('#NAME?');
        return f(n.a.map(function(x){ return ev(x, ctx, si); }));
      }
    }
    return err('#ERROR!');
  }
  function one(v){ return v && v.rng ? (v.rng[0] && v.rng[0].length ? v.rng[0][0] : '') : v; }
  var cache = {};
  function calc(f, ctx, si){
    var ast = cache[f]; if (ast === undefined) { try { ast = parse(f); } catch (e) { ast = null; } cache[f] = ast; }
    if (!ast) return err('#ERROR!');
    return one(ev(ast, ctx, si));
  }
  var api = { calc: calc, shift: shift, text: txt, isErr: isErr, colName: colName, colNum: colNum, functions: Object.keys(FN).concat(Object.keys(LAZY)).sort() };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.WBCalc = api;
})(this);
