'use strict';
// Office 문서(docx · xlsx · pptx) 글 뽑기(2026-11-26): Workbench 첨부를 올릴 때 서버가 글(md)을 미리 뽑아 둔다.
//  Claude가 첨부마다 압축을 풀어 XML을 읽느라 쓰던 시간 · 토큰을 줄이려고. 외부 모듈 없이 Node 내장(zlib)만 쓴다.
//  옛 형식(doc · xls · ppt)은 이진 파일이라 뽑지 못한다 — 화면에서 새 형식으로 저장해 올리라고 안내한다.
const zlib = require('zlib');

// ── zip 읽기: 중앙 디렉터리에서 파일 목록을 찾고, 저장(0) · deflate(8)만 푼다 ──
function unzip(buf) {
  const out = {};
  let eocd = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 65557); i--) if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new Error('zip 형식이 아닙니다');
  const n = buf.readUInt16LE(eocd + 10); let p = buf.readUInt32LE(eocd + 16);
  for (let k = 0; k < n && p + 46 <= buf.length; k++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) break;
    const method = buf.readUInt16LE(p + 10), csize = buf.readUInt32LE(p + 20), nlen = buf.readUInt16LE(p + 28), xlen = buf.readUInt16LE(p + 30), clen = buf.readUInt16LE(p + 32), loc = buf.readUInt32LE(p + 42);
    const name = buf.slice(p + 46, p + 46 + nlen).toString('utf8');
    p += 46 + nlen + xlen + clen;
    if (buf.readUInt32LE(loc) !== 0x04034b50) continue;
    const start = loc + 30 + buf.readUInt16LE(loc + 26) + buf.readUInt16LE(loc + 28), data = buf.slice(start, start + csize);
    out[name] = () => (method === 0 ? data : method === 8 ? zlib.inflateRawSync(data) : Buffer.alloc(0));
  }
  return out;
}
const xmlText = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (m, d) => String.fromCharCode(+d)).replace(/&amp;/g, '&');
const read = (z, n) => (z[n] ? z[n]().toString('utf8') : '');
const num = (n) => parseInt((/(\d+)\.xml$/.exec(n) || [])[1] || '0', 10);

// 워드: 문단은 줄로, 표는 「|」 칸으로
function docx(z) {
  const x = read(z, 'word/document.xml'); if (!x) return '';
  const body = x.replace(/<w:tab\/>/g, '\t').replace(/<w:br[^>]*\/>/g, '\n');
  const out = [];
  const re = /<w:tbl>[\s\S]*?<\/w:tbl>|<w:p[ >][\s\S]*?<\/w:p>/g; let m;
  while ((m = re.exec(body))) {
    const s = m[0];
    if (s.startsWith('<w:tbl>')) {
      const rows = (s.match(/<w:tr[ >][\s\S]*?<\/w:tr>/g) || []).map((tr) => '| ' + (tr.match(/<w:tc>[\s\S]*?<\/w:tc>/g) || []).map((tc) => (tc.match(/<w:t[^>]*>[^<]*<\/w:t>/g) || []).map(xmlText).join('').replace(/\|/g, '/').trim()).join(' | ') + ' |');
      const nc = rows.length ? (rows[0].match(/ \| /g) || []).length + 1 : 0;
      if (rows.length) { out.push('', rows[0], '|' + ' --- |'.repeat(nc), ...rows.slice(1), ''); }
    } else {
      const t = (s.match(/<w:t[^>]*>[^<]*<\/w:t>|\t|\n/g) || []).map((x) => (x === '\t' || x === '\n' ? x : xmlText(x))).join('').trim();
      const h = /<w:pStyle w:val="(?:Heading|제목)\s*(\d)"/.exec(s);
      if (t) out.push(h ? '#'.repeat(Math.min(4, +h[1] + 1)) + ' ' + t : t);
    }
  }
  return out.join('\n');
}
// 파워포인트: 슬라이드마다 「## 슬라이드 n」, 글상자 문단은 줄로, 발표자 메모는 「메모:」
function pptx(z) {
  const slides = Object.keys(z).filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n)).sort((a, b) => num(a) - num(b));
  return slides.map((n) => {
    const x = read(z, n), paras = (x.match(/<a:p>[\s\S]*?<\/a:p>/g) || []).map((p) => (p.match(/<a:t>[^<]*<\/a:t>/g) || []).map(xmlText).join('').trim()).filter(Boolean);
    const note = read(z, n.replace('slides/slide', 'notesSlides/notesSlide')), nt = (note.match(/<a:t>[^<]*<\/a:t>/g) || []).map(xmlText).join(' ').replace(/\s+/g, ' ').trim();
    return '## 슬라이드 ' + num(n) + '\n' + paras.join('\n') + (nt && !/^\d+$/.test(nt) ? '\n메모: ' + nt : '');
  }).join('\n\n');
}
// 엑셀: 시트마다 「## 시트 이름」 + 표(값만, 수식은 계산된 값). 빈 줄 · 빈 열 끝은 뺀다. 시트마다 500행까지
function xlsx(z) {
  const ss = (read(z, 'xl/sharedStrings.xml').match(/<si>[\s\S]*?<\/si>/g) || []).map((si) => (si.match(/<t[^>]*>[^<]*<\/t>/g) || []).map(xmlText).join(''));
  const wb = read(z, 'xl/workbook.xml'), rels = read(z, 'xl/_rels/workbook.xml.rels');
  const sheets = (wb.match(/<sheet [^>]*>/g) || []).map((s) => {
    const name = xmlText((/name="([^"]*)"/.exec(s) || [])[1] || ''), rid = (/r:id="([^"]*)"/.exec(s) || [])[1] || '';
    const tgt = (new RegExp('Id="' + rid + '"[^>]*Target="([^"]*)"').exec(rels) || new RegExp('Target="([^"]*)"[^>]*Id="' + rid + '"').exec(rels) || [])[1] || '';
    return { name, file: 'xl/' + tgt.replace(/^\/?xl\//, '').replace(/^\//, '') };
  });
  const col = (ref) => { let c = 0; for (const ch of String(ref).replace(/\d+/g, '')) c = c * 26 + (ch.charCodeAt(0) - 64); return c - 1; };
  return sheets.map((sh) => {
    const x = read(z, sh.file), rows = [];
    for (const r of (x.match(/<row[ >][\s\S]*?<\/row>/g) || []).slice(0, 500)) {
      const cells = [];
      for (const c of r.match(/<c [^>]*?(?:\/>|>[\s\S]*?<\/c>)/g) || []) {
        const ref = (/r="([A-Z]+)\d+"/.exec(c) || [])[1], t = (/ t="([^"]*)"/.exec(c) || [])[1] || '', v = (/<v>([^<]*)<\/v>/.exec(c) || [])[1];
        let val = t === 's' ? ss[+v] || '' : t === 'inlineStr' ? (c.match(/<t[^>]*>[^<]*<\/t>/g) || []).map(xmlText).join('') : v != null ? xmlText(v) : '';
        cells[ref ? col(ref) : cells.length] = String(val).replace(/\r?\n/g, ' ').replace(/\|/g, '/').trim();
      }
      while (cells.length && !cells[cells.length - 1]) cells.pop();
      if (cells.some(Boolean)) rows.push(Array.from(cells, (v) => v || ''));
    }
    if (!rows.length) return '## ' + sh.name + '\n(빈 시트)';
    const w = Math.max(...rows.map((r) => r.length)), line = (r) => '| ' + Array.from({ length: w }, (_, i) => r[i] || '').join(' | ') + ' |';
    return '## ' + sh.name + '\n' + line(rows[0]) + '\n|' + ' --- |'.repeat(w) + '\n' + rows.slice(1).map(line).join('\n');
  }).join('\n\n');
}
// 파일 내용(Buffer) → 글(md). 못 뽑으면 ''
function toText(buf, ext) {
  const z = unzip(buf);
  const t = ext === 'docx' ? docx(z) : ext === 'pptx' ? pptx(z) : ext === 'xlsx' ? xlsx(z) : '';
  return String(t || '').replace(/\n{3,}/g, '\n\n').trim();
}
module.exports = { toText, unzip };
