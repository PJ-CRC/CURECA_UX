/* 시트 묶음 → 엑셀(.xlsx) 파일 만들기(2026-11-19, UX_Guide.html의 [엑셀 다운로드])
   - 들어오는 것: { sheets: [{ name, rows: [[글]], f: {A1: 수식(= 없이)}, sty: {p: [서식], c: {A1: 번호}}, widths: [px], freeze, filter, lists }] }
   - 담는 것: 시트 · 값 · 수식(+ 계산된 값) · 칸 서식(바탕색 · 글자색 · 굵게 · 기울임 · 밑줄 · 취소선 · 가로/세로 정렬 · 줄 바꿈) · 열 너비(숨김 열) · 행 높이(숨긴 행) · 셀 병합 · 고정 행 · 자동 필터 · 목록(드롭다운) · 기본 글꼴
   - 행 높이 · 병합 · 숨긴 행은 엑셀 줄 번호(1부터) 기준: heights {줄: px, "0": 시트 기본}, merges ["A1:C1"], hrows [줄]
   - 압축: 브라우저에 CompressionStream('deflate-raw')가 있으면 줄이고, 없으면 그대로 담는다(엑셀은 둘 다 연다)
   - 외부 라이브러리 없이 zip을 직접 만든다 */
(function(){
  'use strict';
  var enc = new TextEncoder();
  var CRC = (function(){ var t = new Uint32Array(256); for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(b){ var c = 0xFFFFFFFF; for (var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function deflate(b){
    if (typeof CompressionStream === 'undefined') return Promise.resolve(null);
    try { var s = new Blob([b]).stream().pipeThrough(new CompressionStream('deflate-raw')); return new Response(s).arrayBuffer().then(function(a){ return new Uint8Array(a); }, function(){ return null; }); }
    catch (e) { return Promise.resolve(null); }
  }
  /* zip: [{name, data(Uint8Array)}] → Blob */
  function zip(files){
    return Promise.all(files.map(function(f){ return deflate(f.data).then(function(z){ return { name: enc.encode(f.name), raw: f.data, z: z && z.length < f.data.length ? z : null, crc: crc32(f.data) }; }); })).then(function(list){
      var parts = [], cen = [], off = 0, d = new Date();
      var dt = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate(), tm = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
      list.forEach(function(e){
        var body = e.z || e.raw, m = e.z ? 8 : 0, h = new DataView(new ArrayBuffer(30));
        h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, m, true); h.setUint16(10, tm, true); h.setUint16(12, dt, true);
        h.setUint32(14, e.crc, true); h.setUint32(18, body.length, true); h.setUint32(22, e.raw.length, true); h.setUint16(26, e.name.length, true); h.setUint16(28, 0, true);
        parts.push(new Uint8Array(h.buffer), e.name, body);
        var c = new DataView(new ArrayBuffer(46));
        c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(10, m, true); c.setUint16(12, tm, true); c.setUint16(14, dt, true);
        c.setUint32(16, e.crc, true); c.setUint32(20, body.length, true); c.setUint32(24, e.raw.length, true); c.setUint16(28, e.name.length, true); c.setUint32(42, off, true);
        cen.push(new Uint8Array(c.buffer), e.name);
        off += 30 + e.name.length + body.length;
      });
      var cs = cen.reduce(function(a, b){ return a + b.length; }, 0), end = new DataView(new ArrayBuffer(22));
      end.setUint32(0, 0x06054b50, true); end.setUint16(8, list.length, true); end.setUint16(10, list.length, true); end.setUint32(12, cs, true); end.setUint32(16, off, true);
      return new Blob(parts.concat(cen, [new Uint8Array(end.buffer)]), { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    });
  }
  // 엑셀 XML에 못 넣는 제어 문자는 뺀다(탭 · 줄바꿈은 둔다)
  function esc(s){ return String(s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F￾￿]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function col(n){ var s = ''; n++; while (n > 0) { var r = (n - 1) % 26; s = String.fromCharCode(65 + r) + s; n = Math.floor((n - 1) / 26); } return s; }
  function hex(c){ var m = /^#?([0-9a-f]{6})$/i.exec(String(c || '')); return m ? 'FF' + m[1].toUpperCase() : ''; }
  // 숫자로 넣을 값: 앞자리 0(0.5 제외) · 15자리 넘는 것 · + 기호는 글로 둔다(ID · 코드가 바뀌지 않게)
  function isNum(v){ return /^-?(0|[1-9]\d{0,14})(\.\d+)?$/.test(v) && v.length <= 16; }
  function sheetName(n, used){
    var s = String(n || 'Sheet').replace(/[\[\]:*?\/\\]/g, ' ').replace(/^'+|'+$/g, '').slice(0, 31).trim() || 'Sheet', b = s, i = 2;
    while (used[s.toLowerCase()]) { var suf = ' (' + i++ + ')'; s = b.slice(0, 31 - suf.length) + suf; }
    used[s.toLowerCase()] = 1; return s;
  }

  function build(book){
    var sheets = (book && book.sheets) || [];
    /* 서식 목록: 칸 서식 하나 = 글꼴 · 채우기 · 정렬 조합 하나(cellXfs). 0번은 기본 */
    var FN = esc((book.font && book.font.name) || 'Calibri'), FS = +(book.font && book.font.size) || 11, fontTail = '<sz val="' + FS + '"/>';
    var fonts = ['<font>' + fontTail + '<name val="' + FN + '"/><family val="2"/></font>'], fills = ['<fill><patternFill patternType="none"/></fill>', '<fill><patternFill patternType="gray125"/></fill>'];
    var xfs = ['<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>'], fK = {}, flK = {}, xK = {};
    function xfOf(o){
      if (!o) return 0; var key = JSON.stringify(o); if (xK[key] != null) return xK[key];
      var fk = [o.b, o.i, o.u, o.s, hex(o.fg), o.sz].join('|'), fi = fK[fk];
      if (fi == null) { fi = fK[fk] = fonts.length; fonts.push('<font>' + (o.b ? '<b/>' : '') + (o.i ? '<i/>' : '') + (o.s ? '<strike/>' : '') + (o.u ? '<u/>' : '') + (+o.sz ? '<sz val="' + (+o.sz) + '"/>' : fontTail) + (hex(o.fg) ? '<color rgb="' + hex(o.fg) + '"/>' : '') + '<name val="' + FN + '"/><family val="2"/></font>'); }
      var bg = hex(o.bg), li = 0;
      if (bg) { li = flK[bg]; if (li == null) { li = flK[bg] = fills.length; fills.push('<fill><patternFill patternType="solid"><fgColor rgb="' + bg + '"/><bgColor indexed="64"/></patternFill></fill>'); } }
      // 정렬: 가로(가운데 · 오른쪽) · 세로(위 · 가운데, 엑셀 기본은 아래) · 줄 바꿈
      var al = o.al === 'center' || o.al === 'right' ? o.al : '', va = o.va === 'middle' ? 'center' : o.va === 'top' ? 'top' : '';
      var ali = al || va || o.w ? '<alignment' + (al ? ' horizontal="' + al + '"' : '') + (va ? ' vertical="' + va + '"' : '') + (o.w ? ' wrapText="1"' : '') + '/>' : '';
      var x = '<xf numFmtId="0" fontId="' + fi + '" fillId="' + li + '" borderId="0" xfId="0"' + (fi ? ' applyFont="1"' : '') + (li ? ' applyFill="1"' : '') + (ali ? ' applyAlignment="1">' + ali + '</xf>' : '/>');
      xK[key] = xfs.length; xfs.push(x); return xK[key];
    }
    var used = {}, names = [], files = [];
    sheets.forEach(function(s, si){
      var rows = s.rows || [], fo = s.f || {}, st = s.sty || null, pal = (st && st.p) || [], sc = (st && st.c) || {};
      var nr = rows.length, nc = rows.reduce(function(a, r){ return Math.max(a, r.length); }, 0);
      // 서식만 있는 칸 · 수식만 있는 칸까지 범위에 넣는다
      var refs = Object.keys(sc).concat(Object.keys(fo));
      refs.forEach(function(k){ var m = /^([A-Z]+)(\d+)$/.exec(k); if (!m) return; var r = +m[2], c = 0; for (var i = 0; i < m[1].length; i++) c = c * 26 + m[1].charCodeAt(i) - 64; if (r > nr) nr = r; if (c > nc) nc = c; });
      var byRow = {}; refs.forEach(function(k){ var m = /^([A-Z]+)(\d+)$/.exec(k); if (m) (byRow[m[2]] = byRow[m[2]] || 1); });
      // 행 높이(px → pt) · 숨긴 행: 엑셀 줄 번호(1부터) 기준
      var hts = s.heights || {}, hid = {}; (s.hrows || []).forEach(function(r){ hid[r] = 1; });
      var out = [];
      for (var r = 0; r < nr; r++) {
        var row = rows[r] || [], cells = [], hp = +hts[r + 1] || 0, ra = (hp ? ' ht="' + Math.round(hp * 0.75 * 100) / 100 + '" customHeight="1"' : '') + (hid[r + 1] ? ' hidden="1"' : '');
        if (!row.some(function(v){ return v !== '' && v != null; }) && !byRow[r + 1] && !ra) continue;
        for (var c = 0; c < nc; c++) {
          var ref = col(c) + (r + 1), v = row[c] == null ? '' : String(row[c]), f = fo[ref], si2 = sc[ref] != null ? xfOf(pal[sc[ref]]) : 0;
          if (v === '' && !f && !si2) continue;
          var sAttr = si2 ? ' s="' + si2 + '"' : '';
          if (f) { var num = isNum(v); cells.push('<c r="' + ref + '"' + sAttr + (num ? '' : ' t="str"') + '><f>' + esc(String(f).replace(/^=/, '')) + '</f>' + (v !== '' ? '<v>' + esc(v) + '</v>' : '') + '</c>'); }
          else if (v === '') cells.push('<c r="' + ref + '"' + sAttr + '/>');
          else if (isNum(v)) cells.push('<c r="' + ref + '"' + sAttr + '><v>' + v + '</v></c>');
          else cells.push('<c r="' + ref + '"' + sAttr + ' t="inlineStr"><is><t xml:space="preserve">' + esc(v) + '</t></is></c>');
        }
        if (cells.length || ra) out.push('<row r="' + (r + 1) + '"' + ra + '>' + cells.join('') + '</row>');
      }
      var mg = (s.merges || []).filter(function(rg){ return /^[A-Z]+\d+:[A-Z]+\d+$/.test(rg); });
      var fz = +s.freeze || 0, wd = s.widths || [];
      var view = '<sheetViews><sheetView workbookViewId="0"' + (si === 0 ? ' tabSelected="1"' : '') + '>' + (fz > 0 ? '<pane ySplit="' + fz + '" topLeftCell="A' + (fz + 1) + '" activePane="bottomLeft" state="frozen"/><selection pane="bottomLeft"/>' : '') + '</sheetView></sheetViews>';
      var cols = wd.length ? '<cols>' + wd.map(function(px, i){ px = +px || 0; return '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + (px > 0 ? Math.max(1, Math.round((px - 5) / 7 * 100) / 100) : 0) + '" customWidth="1"' + (px > 0 ? '' : ' hidden="1"') + '/>'; }).join('') + '</cols>' : '';
      var flt = String(s.filter || '').replace(/\$/g, ''), af = /^[A-Z]+\d+:[A-Z]+\d+$/.test(flt) ? '<autoFilter ref="' + flt + '"/>' : '';
      var dv = (s.lists || []).map(function(L){
        var vals = (L.values || []).map(function(x){ return String(x).replace(/"/g, '""'); }).join(','), rg = (L.ranges || []).join(' ');
        if (!rg || !vals || vals.length > 250) return '';
        return '<dataValidation type="list" allowBlank="1" showErrorMessage="1" sqref="' + esc(rg) + '"><formula1>' + esc('"' + vals + '"') + '</formula1></dataValidation>';
      }).filter(Boolean);
      var xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
        view + '<sheetFormatPr' + (+hts['0'] ? ' customHeight="1" defaultRowHeight="' + Math.round(+hts['0'] * 0.75 * 100) / 100 + '"' : ' defaultRowHeight="15"') + '/>' + cols + '<sheetData>' + out.join('') + '</sheetData>' + af +
        (mg.length ? '<mergeCells count="' + mg.length + '">' + mg.map(function(rg){ return '<mergeCell ref="' + rg + '"/>'; }).join('') + '</mergeCells>' : '') +
        (dv.length ? '<dataValidations count="' + dv.length + '">' + dv.join('') + '</dataValidations>' : '') + '</worksheet>';
      names.push(sheetName(s.name, used));
      files.push({ name: 'xl/worksheets/sheet' + (si + 1) + '.xml', data: enc.encode(xml) });
    });
    if (!names.length) return Promise.reject(new Error('시트가 없습니다.'));
    var X = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
    var wb = X + '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><bookViews><workbookView/></bookViews><sheets>' +
      names.map(function(n, i){ return '<sheet name="' + esc(n) + '" sheetId="' + (i + 1) + '" r:id="rId' + (i + 1) + '"/>'; }).join('') + '</sheets>' +
      // 자동 필터는 시트마다 숨은 이름(_FilterDatabase)이 있어야 엑셀이 필터 단추를 그린다
      (function(){ var d = sheets.map(function(s, i){ var flt = String(s.filter || '').replace(/\$/g, ''); var m = /^([A-Z]+)(\d+):([A-Z]+)(\d+)$/.exec(flt); return m ? '<definedName name="_xlnm._FilterDatabase" localSheetId="' + i + '" hidden="1">\'' + esc(names[i].replace(/'/g, "''")) + '\'!$' + m[1] + '$' + m[2] + ':$' + m[3] + '$' + m[4] + '</definedName>' : ''; }).join(''); return d ? '<definedNames>' + d + '</definedNames>' : ''; })() +
      '<calcPr calcId="191029" fullCalcOnLoad="1"/></workbook>';
    var rels = X + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      names.map(function(n, i){ return '<Relationship Id="rId' + (i + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (i + 1) + '.xml"/>'; }).join('') +
      '<Relationship Id="rId' + (names.length + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>';
    var styles = X + '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="' + fonts.length + '">' + fonts.join('') + '</fonts><fills count="' + fills.length + '">' + fills.join('') + '</fills>' +
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>' +
      '<cellXfs count="' + xfs.length + '">' + xfs.join('') + '</cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>';
    var ct = X + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' +
      names.map(function(n, i){ return '<Override PartName="/xl/worksheets/sheet' + (i + 1) + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'; }).join('') + '</Types>';
    var root = X + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>';
    return zip([{ name: '[Content_Types].xml', data: enc.encode(ct) }, { name: '_rels/.rels', data: enc.encode(root) }, { name: 'xl/workbook.xml', data: enc.encode(wb) },
      { name: 'xl/_rels/workbook.xml.rels', data: enc.encode(rels) }, { name: 'xl/styles.xml', data: enc.encode(styles) }].concat(files));
  }
  window.WBXLSX = { build: build };
})();
