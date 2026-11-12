// 쓰기 API(2단계) — 기존 guide_server.ps1의 POST 처리와 같게. api.js가 register(on, h)로 부른다
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawn, spawnSync } = require('child_process');
const core = require('./core');
const { C } = core;

module.exports = function register(on, h) {
  const histShots = path.join(C.histDir, 'shots'), histAttach = path.join(C.histDir, 'attach');
  const attachDir = path.join(C.root, 'workbench', 'req_images'), attachTmp = path.join(attachDir, '_tmp');
  // 첨부 조건 = Claude가 읽을 수 있는 것(Claude 문서 기준, 2026-11-11): 이미지 PNG · JPG · GIF · WEBP는 base64 10MB(파일 7.5MB) · 8000px 이하,
  //  PDF · 글(txt · md · csv)은 30MB 이하(claude.ai 파일 한도), 한 요청에 20개(claude.ai 한 메시지 한도). Word · Excel은 Claude가 바로 읽지 못해 받지 않는다
  const ATT_IMG = ['png', 'jpg', 'gif', 'webp'], ATT_DOC = ['pdf', 'txt', 'md', 'csv'], ATT_N = 20;
  const ATT_IMG_MAX = 7.5 * 1024 * 1024, ATT_DOC_MAX = 30 * 1024 * 1024;
  const ATT_RE = /^[0-9a-f]{32}\.(png|jpg|gif|webp|pdf|txt|md|csv)$/;

  // 그림을 JPG(품질 85, 흰 바탕)로: 윈도우 System.Drawing(기존 서버와 같은 결과), 맥 sips. 안 되면 원본 그대로 복사(기존과 같음)
  function toJpeg(src, dst) {
    try {
      if (process.platform === 'win32') {
        const ps = `Add-Type -AssemblyName System.Drawing; $img=[System.Drawing.Image]::FromFile($env:WB_SRC); try { $w=$img.Width; $h=$img.Height; $bmp=New-Object System.Drawing.Bitmap $w,$h; $g=[System.Drawing.Graphics]::FromImage($bmp); $g.Clear([System.Drawing.Color]::White); $g.InterpolationMode='HighQualityBicubic'; $g.DrawImage($img,0,0,$w,$h); $g.Dispose(); $enc=[System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()|Where-Object{$_.MimeType -eq 'image/jpeg'}; $p=New-Object System.Drawing.Imaging.EncoderParameters 1; $p.Param[0]=New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality),([long]85); $bmp.Save($env:WB_DST,$enc,$p); $bmp.Dispose() } finally { $img.Dispose() }`;
        const r = spawnSync('powershell', ['-NoProfile', '-NonInteractive', '-Command', ps], { env: Object.assign({}, process.env, { WB_SRC: src, WB_DST: dst }), windowsHide: true, timeout: 60000 });
        if (r.status === 0 && core.exists(dst)) return dst;
      } else if (process.platform === 'darwin') {
        const r = spawnSync('/usr/bin/sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '85', src, '--out', dst], { timeout: 60000 });
        if (r.status === 0 && core.exists(dst)) return dst;
      }
    } catch (e) {}
    return null;
  }
  // 작업 이력에 캡처 사본(Copy-HistShot): projects/{key}/shots/{node}.png|jpg → .history/shots/{name}.jpg
  function copyHistShot(key, nid, name) {
    if (!key || !h.testKey(key) || !/^\d+:\d+$/.test(String(nid))) return '';
    let src = null; for (const x of ['png', 'jpg']) { const f = path.join(h.projDir(key), 'shots', String(nid).replace(':', '-') + '.' + x); if (core.exists(f)) src = f; }
    if (!src) return '';
    fs.mkdirSync(histShots, { recursive: true });
    let dst = path.join(histShots, name + '.jpg');
    if (!toJpeg(src, dst)) { dst = path.join(histShots, name + path.extname(src)); fs.copyFileSync(src, dst); }
    return 'shots/' + path.basename(dst);
  }
  function saveHistEntry(name, e) { core.writeJson(path.join(C.histEntries, name + '.json'), e); core.syncWant(); }
  const nn = (v) => (v == null ? '' : String(v));
  // 요청 → 작업 이력(Hist-FromRequest): 상태가 바뀔 때마다. 완료면 고친 프레임 캡처를 붙인다
  function histFromRequest(r) {
    const name = C.pcSlug + '_' + nn(r.id);
    core.rmGlob(histShots, (x) => x.startsWith(name + '.') || x.startsWith(name + '-'));
    let shot = ''; const shots = [];
    if (r.status === '완료') {
      let fr = core.arr(r.frames).filter((f) => f && f.nodeId);
      if (!fr.length) fr = [{ nodeId: nn(r.nodeId), name: nn(r.frame) }];
      let k = 0;
      for (const f of fr) { const nm = k ? `${name}-${k + 1}` : name; const s = copyHistShot(r.fileKey, nn(f.nodeId), nm); if (s) { shots.push({ file: s, nodeId: nn(f.nodeId), frame: nn(f.name) }); k++; } }
      if (shots.length) shot = shots[0].file;
    }
    const att = []; let n = 0;
    for (const a of core.arr(r.images).filter(Boolean)) {
      n++; const src = a.small ? path.join(C.root, String(a.small)) : '';
      if (!src || !core.exists(src)) continue;
      const dst = path.join(histAttach, `${name}_${n}.jpg`);
      if (!core.exists(dst)) { fs.mkdirSync(histAttach, { recursive: true }); fs.copyFileSync(src, dst); }
      att.push('attach/' + path.basename(dst));
    }
    saveHistEntry(name, { id: name, kind: 'request', team: core.itemTeam(r), status: nn(r.status), at: nn(r.updatedAt), createdAt: nn(r.createdAt), by: nn(r.author), doneBy: nn(r.updatedBy), pc: C.pcName,
      reqId: nn(r.id), fileKey: nn(r.fileKey), fileName: nn(r.fileName), page: nn(r.page), frame: nn(r.frame), nodeId: nn(r.nodeId),
      type: nn(r.type), layout: nn(r.layout), text: nn(r.text), note: nn(r.note), shot, shots, images: att,
      frames: core.arr(r.frames).filter(Boolean), marks: core.arr(r.marks).filter(Boolean), ask: r.ask === undefined ? null : r.ask, replies: core.arr(r.replies).filter(Boolean) });
  }
  function histRemove(id) {
    const name = C.pcSlug + '_' + nn(id);
    core.rmGlob(C.histEntries, (x) => x === name + '.json');
    core.rmGlob(histShots, (x) => x.startsWith(name + '.') || x.startsWith(name + '-'));
    core.rmGlob(histAttach, (x) => x.startsWith(name + '_'));
    core.syncWant();
  }
  // 첨부(Save-Attach): _tmp에 올린 원본 · 이미지의 줄인 사본을 요청 ID 이름으로 옮긴다(최대 ATT_N개). PDF · 글은 사본이 없어 이 PC에만 남는다
  function saveAttach(id, list) {
    core.rmGlob(attachDir, (x) => x.startsWith(id + '_'));
    const out = []; let n = 0;
    for (const a of core.arr(list).filter(Boolean).slice(0, ATT_N)) {
      const t = nn(a.tmp), s = nn(a.small);
      if (!ATT_RE.test(t) || !core.exists(path.join(attachTmp, t))) continue;
      n++; const f = `${id}_${n}${path.extname(t)}`;
      fs.renameSync(path.join(attachTmp, t), path.join(attachDir, f));
      let sf = '';
      if (/^[0-9a-f]{32}\.jpg$/.test(s) && core.exists(path.join(attachTmp, s))) { sf = `${id}_${n}_s.jpg`; fs.renameSync(path.join(attachTmp, s), path.join(attachDir, sf)); }
      let nm = nn(a.name); if (nm.length > 80) nm = nm.slice(0, 80);
      out.push({ file: 'workbench/req_images/' + f, small: sf ? 'workbench/req_images/' + sf : '', name: nm, size: fs.statSync(path.join(attachDir, f)).size });
    }
    return out;
  }
  // 요청 완료 때 Claude가 새로 만든 프레임을 프레임 목록 끝에(Add-CatalogFrames) — 배열 모양이 바뀌지 않게 글자로 끼워 넣는다
  function addCatalogFrames(k, pageName, frames) {
    const cf = path.join(h.projDir(k), 'catalog.json'); let txt = core.readText(cf); if (txt == null) return 0;
    let cat; try { cat = JSON.parse(txt); } catch (e) { return 0; }
    const known = {}; for (const pg of core.arr(cat.pages)) for (const f of core.arr(pg.frames)) if (f) known[String(f[0])] = 1;
    const neu = core.arr(frames).filter((f) => f && /^\d+:\d+$/.test(nn(f.nodeId)) && !known[nn(f.nodeId)]);
    if (!neu.length) return 0;
    let pg = core.arr(cat.pages).find((p) => pageName && p.name === pageName && p.frames != null);
    if (!pg) pg = core.arr(cat.pages).find((p) => p.editable && p.frames != null);
    if (!pg) return 0;
    const sm = core.readJson(path.join(h.projDir(k), 'shots_meta.json'));
    const m = new RegExp('"id"\\s*:\\s*"' + String(pg.id).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"').exec(txt); if (!m) return 0;
    const fi = txt.indexOf('"frames"', m.index); if (fi < 0) return 0;
    const st = txt.indexOf('[', fi); if (st < 0) return 0;
    let depth = 0, inStr = false, end = -1;
    for (let i = st; i < txt.length; i++) { const ch = txt[i]; if (inStr) { if (ch === '\\') i++; else if (ch === '"') inStr = false; continue; } if (ch === '"') inStr = true; else if (ch === '[') depth++; else if (ch === ']') { depth--; if (depth === 0) { end = i; break; } } }
    if (end < 0) return 0;
    const add = neu.map((f) => { const s = sm ? sm[nn(f.nodeId)] : null; return '[' + JSON.stringify(nn(f.nodeId)) + ',' + JSON.stringify(f.name ? nn(f.name) : nn(f.nodeId)) + ',' + (s ? parseInt(s.w, 10) || 0 : 0) + ',' + (s ? parseInt(s.h, 10) || 0 : 0) + ',0,0]'; }).join(',');
    const empty = txt.slice(st + 1, end).trim() === '';
    txt = txt.slice(0, end) + (empty ? '' : ',') + add + txt.slice(end);
    core.writeText(cf, txt);
    return neu.length;
  }
  // 요청 완료 → 그 구간 토큰 사용량 기록(usage.ps1 · usage.pl, 기다리지 않음)
  function startUsage(id) {
    try {
      // (윈도우에서 PowerShell을 detached로 띄우면 콘솔이 없어 바로 끝난다 → 맥만 detached)
      const o = { detached: process.platform !== 'win32', stdio: 'ignore', windowsHide: true, cwd: C.root };
      const p = process.platform === 'win32' ? spawn('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(C.root, 'workbench', 'usage.ps1'), '-ReqId', id], o)
        : spawn('perl', [path.join(C.root, 'workbench', 'usage.pl'), '--req', id], o);
      p.unref();
    } catch (e) {}
  }
  Object.assign(h, { histFromRequest, histRemove, saveHistEntry, copyHistShot, addCatalogFrames, startUsage, toJpeg });

  // ── POST /api/jobs {action: add | take | update} — 작업 대기열(캡처 · 목록 · UX 문서 · 프로토타입 · 회의록 · 일정/작업 · 글 수정) ──
  const upTmp = path.join(C.root, 'workbench', 'job_files', '_tmp'), upDir = path.join(C.root, 'workbench', 'job_files');
  const jobMenu = (k) => (['guide', 'guide-edit', 'guide-check'].includes(k) ? 'guide' : ['minutes', 'plan'].includes(k) ? 'plan' : /^prototype/.test(k) ? 'proto' : 'workbench');
  const KINDS = ['capture', 'catalog', 'guide', 'guide-check', 'guide-edit', 'text', 'prototype', 'prototype-edit', 'prototype-sync', 'minutes', 'plan'];
  // 참고 파일(Save-Uploads): _tmp에 올린 것을 job_files/{작업 ID}/ 원래 이름으로
  function saveUploads(jid, list) {
    const out = [], dir = path.join(upDir, jid); let n = 0;
    for (const a of list) {
      let nm = nn(a.name).replace(/[\\/:*?"<>|\x00-\x1f]/g, '_').trim(); if (!nm) nm = nn(a.tmp);
      if (nm.length > 100) nm = nm.slice(nm.length - 100);
      fs.mkdirSync(dir, { recursive: true });
      n++; if (core.exists(path.join(dir, nm))) nm = `${n}_${nm}`;
      fs.renameSync(path.join(upTmp, nn(a.tmp)), path.join(dir, nm));
      out.push({ path: `workbench/job_files/${jid}/${nm}`, name: nm, size: fs.statSync(path.join(dir, nm)).size });
    }
    return out;
  }
  // 고칠 화면 · 연관 항목 찾기 결과를 그 수정본 옆에(Save-CheckLog, 깃으로 공유)
  function saveCheckLog(j) {
    const T = core.teamCtx(core.itemTeam(j)), gid = nn(j.guide), rv = nn(j.revTo);
    if (!/^[A-Za-z0-9_-]{1,64}$/.test(gid) || !/^[A-Za-z0-9_-]{1,80}$/.test(rv) || !core.exists(path.join(T.guideRoot, gid, 'rev', rv + '.json'))) return;
    try { core.writeJson(path.join(T.guideRoot, gid, 'rev', `${rv}.check-${C.pcSlug}-${j.id}.json`), { jobId: nn(j.id), pc: C.pcName, by: nn(j.by), at: core.now(), status: nn(j.status), note: nn(j.note), scope: nn(j.scope), fileKey: nn(j.fileKey), items: core.arr(j.items).filter(Boolean) }); core.syncWant(); } catch (e) {}
  }
  // ── 자동 캡처 목록(auto-plan): Workbench가 구분(페이지)을 열면 캡처 없는 프레임 전체를 받을 순서대로 맡긴다(파일마다 하나, 나중 것이 앞 것을 바꾼다).
  //  서버는 플러그인이 캡처 작업을 물어볼 때(GET /api/jobs?kind=capture, Origin null)마다 「대기」 자동 캡처가 AUTO_KEEP개가 되게 이 목록에서 채운다.
  //  그래서 Workbench가 5초마다 채우기를 기다리지 않고, Workbench 탭이 뒤에 있거나 닫혀도 플러그인이 쉬지 않고 이어 받는다(2026-11-11)
  const planFile = path.join(C.root, 'workbench', 'auto_capture.json'), AUTO_KEEP = 10;
  function autoFill(key) {
    if (C.readonly || !h.testKey(key)) return;
    const plans = core.readJson(planFile) || {}, pl = plans[key];
    if (!pl || !core.arr(pl.list).length) return;
    const jj = core.readJson(C.jobFile) || { version: 0, items: [] };
    let items = core.arr(jj.items).filter(Boolean);
    const caps = items.filter((x) => x.kind === 'capture' && x.fileKey === key);
    let pend = caps.filter((x) => x.auto && x.status === '대기').length;
    if (pend >= AUTO_KEEP) return;
    const meta = core.readJson(path.join(h.projDir(key), 'shots_meta.json')) || {};
    const busy = new Set(caps.filter((x) => x.status !== '완료').map((x) => x.nodeId));   // 대기 · 진행 중 · 실패는 다시 쌓지 않는다
    let n = 1; for (const i of items) { const v = parseInt(nn(i.id).replace(/\D/g, ''), 10) || 0; if (v >= n) n = v + 1; }
    const list = core.arr(pl.list).slice(), add = [], now = core.now();
    while (pend < AUTO_KEEP && list.length) {
      const [nid, name] = core.arr(list.shift());
      if (!/^\d+:\d+$/.test(nn(nid)) || meta[nid] || busy.has(nid)) continue;
      busy.add(nid); pend++;
      add.push({ id: 'J' + String(n++).padStart(3, '0'), kind: 'capture', team: nn(pl.team) || 'cureca', fileKey: key, nodeId: nid, name: nn(name), link: '', text: '', guide: '', revFrom: '', revTo: '', items: [],
        status: '대기', note: '', by: nn(pl.by), takenBy: '', createdAt: now, updatedAt: now, auto: true });
    }
    pl.list = list; if (!list.length) delete plans[key];
    core.writeJson(planFile, plans);
    if (!add.length) return;
    items = add.reverse().concat(items);   // 앞이 최신(받을 순서는 id 오름차순)
    if (items.length > 300) items = items.slice(0, 300);
    core.writeJson(C.jobFile, { version: (parseInt(jj.version, 10) || 0) + 1, items });
  }
  h.autoFill = autoFill;

  on('POST', '/api/jobs', async ({ req, body, T }) => {
    const b = await body();
    if (nn(b.action) === 'auto-plan') {
      const key = nn(b.fileKey); if (!h.testKey(key)) throw new Error('잘못된 파일 키입니다.');
      if (!core.canWrite(req, ['workbench'])) throw new Error(core.roMsg('workbench'));
      const list = core.arr(b.list).filter((x) => Array.isArray(x) && /^\d+:\d+$/.test(nn(x[0]))).slice(0, 2000).map((x) => [nn(x[0]), nn(x[1]).slice(0, 200)]);
      const plans = core.readJson(planFile) || {};
      if (list.length) plans[key] = { by: nn(b.by), team: b.team ? nn(b.team) : T.team, at: core.now(), list }; else delete plans[key];
      core.writeJson(planFile, plans);
      return { ok: true, count: list.length };
    }
    const jj = core.readJson(C.jobFile) || { version: 0, items: [] };
    let items = core.arr(jj.items).filter(Boolean); const now = core.now(); let hit = null;
    switch (nn(b.action)) {
      case 'add': {
        const kind = nn(b.kind); let key = nn(b.fileKey), nid = nn(b.nodeId), srcs = [], mmode = '';
        if (!(kind === 'plan' && nn(b.sub) === 'pv-decide') && !core.canWrite(req, [jobMenu(kind)])) throw new Error(core.roMsg(jobMenu(kind)));
        if (!KINDS.includes(kind)) throw new Error('알 수 없는 작업: ' + kind);
        if (kind === 'prototype') {
          nid = ''; if (!nn(b.name).trim()) throw new Error('프로토타입 이름을 입력해 주세요.');
          if (!core.arr(b.frames).some((f) => f && /^\d+:\d+$/.test(nn(f.nodeId)))) throw new Error('화면을 하나 이상 골라 주세요.');
        }
        if (kind === 'prototype-edit' || kind === 'prototype-sync') {
          nid = ''; if (!/^[A-Za-z0-9_-]{1,64}$/.test(nn(b.proto)) || !core.exists(path.join(C.protoRoot, nn(b.proto), 'meta.json'))) throw new Error('프로토타입을 찾지 못했습니다: ' + nn(b.proto));
          if (kind === 'prototype-edit' && !nn(b.text).trim()) throw new Error('수정 내용을 입력해 주세요.');
        }
        if (kind === 'text' && !core.arr(b.items).length) throw new Error('바꿀 글(items)이 없습니다.');
        if (kind === 'guide-check' || kind === 'guide-edit') { nid = ''; if (!/^[A-Za-z0-9_-]{1,64}$/.test(nn(b.guide)) || !core.exists(path.join(T.guideRoot, nn(b.guide), 'meta.json'))) throw new Error('가이드를 찾지 못했습니다: ' + nn(b.guide)); }
        if (kind === 'guide') {
          key = h.keyOf(b.link); nid = ''; const m = /[?&]node-id=(\d+)[-:](\d+)/.exec(nn(b.link)); if (m) nid = m[1] + ':' + m[2];
          if (!nn(b.name).trim()) throw new Error('이름을 입력해 주세요.');
          srcs = core.arr(b.files).filter((x) => x && /^[0-9a-f]{32}\.[a-z0-9]{1,8}$/.test(nn(x.tmp)) && core.exists(path.join(upTmp, nn(x.tmp)))).slice(0, 10);
          if (!nn(b.link).trim() && !srcs.length) throw new Error('Figma 링크를 넣거나 참고 파일을 올려 주세요.');
          if (nn(b.link).trim() && !h.testKey(key)) throw new Error('Figma 링크 형식이 아닙니다.');
        }
        if (kind === 'minutes') {
          nid = ''; key = ''; const mf = path.join(T.minDir, nn(b.minute) + '.md');
          if (!/^m[0-9a-z-]{6,40}$/.test(nn(b.minute)) || !core.exists(mf)) throw new Error('회의록을 찾지 못했습니다: ' + nn(b.minute));
          mmode = nn(b.mode) === 'extract' ? 'extract' : '';
          if (!mmode && !h.readNotes(T.minDir, nn(b.minute)).length) throw new Error('각자 작성한 내용이 아직 없습니다.');
          if (mmode && (core.readText(mf) || '').replace(/^---[\s\S]*?---/, '').trim().length < 10) throw new Error('회의록 내용(정리본)이 아직 없습니다.');
          hit = items.find((x) => x.kind === 'minutes' && x.minute === nn(b.minute) && ['대기', '진행 중'].includes(x.status)) || null;
        }
        if (kind === 'plan') {
          nid = ''; key = '';
          // ds-new · DS-0000 = 논의 대상(새 흐름, 2026-11-12). pv-* · PV · PD · CA는 예전 구조를 쓰는 PC를 위해 남긴다
          if (!['ds-new', 'pv-new', 'pv-decide', 'answer', 'answer-apply'].includes(nn(b.sub))) throw new Error('알 수 없는 처리: ' + nn(b.sub));
          if (!['pv-new', 'ds-new'].includes(nn(b.sub)) && !/^(DS|PV|PD|CA)-\d{4}(-[A-Z])?$/.test(nn(b.target))) throw new Error('잘못된 항목 ID: ' + nn(b.target));
          if (nn(b.sub) === 'pv-decide' && !core.canApprove(req, 'pv')) throw new Error('임시 정책 승인 · 반려 권한이 없습니다. 최고관리자에게 「승인 권한 · 임시 정책 승인 · 반려」를 요청하세요.');
          if (nn(b.sub) === 'pv-decide') hit = items.find((x) => x.kind === 'plan' && x.target === nn(b.target) && x.sub === 'pv-decide' && ['대기', '진행 중'].includes(x.status)) || null;
        }
        const specNoFile = !key && ((kind === 'guide-check' && nn(b.scope) === 'spec') || ['guide-edit', 'guide', 'minutes', 'plan'].includes(kind));
        if (!h.testKey(key) && !specNoFile) throw new Error(kind === 'guide' ? 'Figma 링크 형식이 아닙니다.' : '잘못된 파일 키입니다.');
        if ((kind === 'capture' || kind === 'text') && !/^\d+:\d+$/.test(nid)) throw new Error('잘못된 nodeId: ' + nid);
        if (!['guide', 'guide-check', 'guide-edit', 'text', 'prototype', 'prototype-edit', 'prototype-sync', 'minutes', 'plan'].includes(kind)) hit = items.find((x) => x.kind === kind && x.fileKey === key && x.nodeId === nid && ['대기', '진행 중'].includes(x.status)) || null;
        if (kind === 'prototype-sync') hit = items.find((x) => x.kind === kind && x.proto === nn(b.proto) && x.status === '대기') || null;
        if (!hit) {
          let n = 1; for (const i of items) { const v = parseInt(nn(i.id).replace(/\D/g, ''), 10) || 0; if (v >= n) n = v + 1; }
          hit = { id: 'J' + String(n).padStart(3, '0'), kind, team: b.team ? nn(b.team) : T.team, fileKey: key, nodeId: nid, name: nn(b.name).trim(), link: nn(b.link), text: nn(b.text).trim(),
            guide: kind === 'guide-check' || kind === 'guide-edit' ? nn(b.guide) : '', revFrom: nn(b.revFrom), revTo: nn(b.revTo), items: kind === 'text' ? core.arr(b.items) : [],
            status: '대기', note: '', by: nn(b.by), takenBy: '', createdAt: now, updatedAt: now };
          if (kind === 'guide-check') hit.scope = nn(b.scope) === 'spec' ? 'spec' : '';
          if (kind === 'guide-edit' && nn(b.file)) hit.file = nn(b.file);
          if (kind === 'capture' && b.auto) hit.auto = true;
          if (kind === 'minutes') { hit.minute = nn(b.minute); if (mmode) hit.mode = mmode; }
          if (kind === 'plan') { hit.sub = nn(b.sub); hit.target = nn(b.target); hit.plan = b.plan === undefined ? null : b.plan; }
          if (kind === 'guide') { hit.docKind = ['spec', 'rule', 'policy', 'data'].includes(nn(b.docKind)) ? nn(b.docKind) : ''; hit.files = saveUploads(hit.id, srcs); }
          if (/^prototype/.test(kind)) {
            hit.proto = nn(b.proto);
            hit.frames = kind === 'prototype' ? core.arr(b.frames).filter((f) => f && /^\d+:\d+$/.test(nn(f.nodeId))).map((f) => ({ nodeId: nn(f.nodeId), name: nn(f.name), page: nn(f.page) })) : core.arr(b.frames).filter(Boolean);
            hit.start = nn(b.start); hit.env = nn(b.env);
          }
          items = [hit].concat(items);
        }
        break;
      }
      case 'take': {
        if (b.id) hit = items.find((x) => x.id === nn(b.id) && x.status === '대기') || null;
        else { const c = items.filter((x) => x.kind === nn(b.kind) && x.fileKey === nn(b.fileKey) && x.status === '대기'); hit = c.length ? c[c.length - 1] : null; }
        if (hit) { hit.status = '진행 중'; hit.takenBy = nn(b.by); hit.updatedAt = now; }
        break;
      }
      case 'update': {
        hit = items.find((x) => x.id === b.id); if (!hit) throw new Error('작업을 찾지 못했습니다: ' + nn(b.id));
        if (!core.canWrite(req, [jobMenu(nn(hit.kind))])) throw new Error(core.roMsg(jobMenu(nn(hit.kind))));
        if (nn(b.status) === '진행 중' && nn(hit.status) === '진행 중' && !b.force) throw new Error(`이미 진행 중인 작업입니다(다른 Claude 세션이 처리 중): ${hit.id}. 이 작업은 건너뛰세요.`);
        if (b.status) hit.status = nn(b.status);
        if (b.note != null) hit.note = nn(b.note);
        if (b.guide) hit.guide = nn(b.guide);
        for (const f of ['revFrom', 'revTo', 'proto']) if (b[f]) hit[f] = nn(b[f]);
        if (b.items != null) hit.items = core.arr(b.items);
        hit.updatedAt = now;
        break;
      }
      default: throw new Error('알 수 없는 action: ' + nn(b.action));
    }
    // 끝난 캡처 작업은 최근 30개만, 전체는 300개까지
    let cn = 0; items = items.filter((x) => { if (x.kind === 'capture' && !['대기', '진행 중'].includes(x.status)) { cn++; return cn <= 30; } return true; });
    if (items.length > 300) items = items.slice(0, 300);
    core.writeJson(C.jobFile, { version: (parseInt(jj.version, 10) || 0) + 1, items });
    if (b.action === 'update' && hit && hit.kind === 'guide-check') saveCheckLog(hit);
    return { ok: true, job: hit };
  });

  // ── 프로젝트(Ensure-Proj · Save-Proj · Set-EditablePage) ──
  function saveProj(p) { core.writeJson(path.join(h.projDir(p.key), 'project.json'), p); }
  function ensureProj(k, link) {
    let p = h.readProj(k);
    if (!p) { p = { key: k, name: '', link: nn(link), editablePageId: '', editablePageName: '', uxGuideLink: '', createdAt: core.now() }; saveProj(p); }
    else if (link && !p.link) { p.link = nn(link); saveProj(p); }
    return p;
  }
  // 작업 링크의 노드가 있는 페이지를 수정 가능 페이지로(catalog.json은 배열 모양이 바뀌지 않게 글자만 고친다)
  function setEditablePage(k, url) {
    const m = /[?&]node-id=(\d+)[-:](\d+)/.exec(nn(url)); if (!m) return false;
    const nid = m[1] + ':' + m[2], cf = path.join(h.projDir(k), 'catalog.json'); let txt = core.readText(cf); if (txt == null) return false;
    let cat; try { cat = JSON.parse(txt); } catch (e) { return false; }
    let pg = core.arr(cat.pages).find((x) => x.id === nid);
    if (!pg) pg = core.arr(cat.pages).find((x) => core.arr(x.frames).some((f) => f && f[0] === nid));
    if (!pg) return false;
    const esc = String(pg.id).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    txt = txt.replace(/("editable"\s*:\s*)true/g, '$1false');
    txt = txt.replace(new RegExp('("id"\\s*:\\s*"' + esc + '"(?:(?!"id"\\s*:)[\\s\\S])*?"editable"\\s*:\\s*)false'), '$1true');
    txt = txt.replace(/("editablePageId"\s*:\s*)"[^"]*"/, '$1"' + pg.id + '"');
    core.writeText(cf, txt);
    const p = h.readProj(k); if (p) { p.editablePageId = String(pg.id); p.editablePageName = String(pg.name); saveProj(p); }
    return true;
  }
  Object.assign(h, { saveProj, ensureProj, setEditablePage });
  on('POST', '/api/projects', async ({ req, body }) => {
    const origin = req.headers.origin; if (origin && origin !== `http://localhost:${C.port}`) throw new Error('허용되지 않은 요청입니다.');
    const b = await body();
    if (b.action === 'add') {
      const k = h.keyOf(b.link); if (!h.testKey(k)) throw new Error('Figma 파일 링크가 아닙니다.');
      const p = ensureProj(k, nn(b.link)); if (p.link) setEditablePage(k, p.link);
      return { ok: true, project: h.readProj(k) };
    }
    if (b.action === 'editable') {
      const k = nn(b.key), pgId = nn(b.pageId);
      if (!h.testKey(k)) throw new Error('잘못된 파일 키입니다.');
      if (!/^\d+:\d+$/.test(pgId)) throw new Error('잘못된 페이지 id입니다.');
      const p = ensureProj(k, ''), nid = pgId.replace(':', '-'), old = nn(p.link); let neu;
      if (/figma\.com\/(?:design|file|proto)\//.test(old)) {
        if (/[?&]node-id=[^&#]*/.test(old)) neu = old.replace(/([?&]node-id=)[^&#]*/g, '$1' + nid);
        else if (old.includes('?')) neu = old.replace(/#.*$/, '') + '&node-id=' + nid;
        else neu = old.replace(/#.*$/, '') + '?node-id=' + nid;
      } else neu = `https://www.figma.com/design/${k}/file?node-id=${nid}`;
      if (!setEditablePage(k, neu)) throw new Error('프레임 목록에서 그 페이지를 찾지 못했습니다.');
      const p2 = h.readProj(k); p2.link = neu; saveProj(p2);
      const s = core.readSetup();
      if (h.keyOf(s.figmaUrl) === k) { s.figmaUrl = neu; s.updatedAt = core.now(); core.writeJson(C.setupFile, s); }
      return { ok: true, project: h.readProj(k) };
    }
    throw new Error('알 수 없는 작업입니다.');
  });

  // ── POST /api/catalog: 프레임 목록(플러그인 · Claude). 받은 JSON 글을 그대로 두고 저장 시각만 앞에 붙인다 ──
  on('POST', '/api/catalog', async ({ raw }) => {
    const txt = (await raw()).toString('utf8').replace(/^﻿/, '').trim();
    let b; try { b = JSON.parse(txt); } catch (e) { throw new Error('잘못된 요청 형식입니다.'); }
    const key = nn(b.fileKey); if (!h.testKey(key)) throw new Error('잘못된 파일 키입니다.');
    if (!txt.startsWith('{') || !b.pages) throw new Error('프레임 목록 형식이 아닙니다.');
    const p = ensureProj(key, '');
    core.writeText(path.join(h.projDir(key), 'catalog.json'), '{"savedAt":"' + core.now() + '",' + txt.slice(1));
    if (b.fileName) p.name = nn(b.fileName);
    saveProj(p);
    if (!setEditablePage(key, p.link) && b.editablePageId) {
      p.editablePageId = nn(b.editablePageId);
      const ep = core.arr(b.pages).find((x) => x.id === b.editablePageId); if (ep) p.editablePageName = nn(ep.name);
      saveProj(p);
    }
    return { ok: true, fileKey: key };
  });

  // ── POST /api/shots: 프레임 캡처 저장(PNG · JPG). editAt = Figma에서 고쳐 플러그인이 올린 캡처(edit:true)의 시각 ──
  on('POST', '/api/shots', async ({ body }) => {
    const b = await body();
    let key = nn(b.fileKey); if (!key) key = h.workKey();
    if (!h.testKey(key)) throw new Error('잘못된 파일 키입니다.');
    const nid = nn(b.nodeId); if (!/^\d+:\d+$/.test(nid)) throw new Error('잘못된 nodeId: ' + nid);
    const bytes = Buffer.from(nn(b.png), 'base64');
    let ext = ''; if (bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50) ext = 'png'; else if (bytes.length >= 4 && bytes[0] === 0xFF && bytes[1] === 0xD8) ext = 'jpg';
    if (!ext) throw new Error('PNG · JPG 이미지가 아닙니다.');
    ensureProj(key, '');
    const dir = path.join(h.projDir(key), 'shots'); fs.mkdirSync(dir, { recursive: true });
    const base = nid.replace(':', '-');
    for (const x of ['png', 'jpg']) if (x !== ext) core.rmGlob(dir, (n) => n === base + '.' + x);
    fs.writeFileSync(path.join(dir, base + '.' + ext), bytes);
    const mf = path.join(h.projDir(key), 'shots_meta.json'); const meta = core.readJson(mf) || {};
    const prev = meta[nid] && meta[nid].editAt ? String(meta[nid].editAt) : '';
    meta[nid] = { at: core.now(), w: parseInt(b.w, 10) || 0, h: parseInt(b.h, 10) || 0, by: nn(b.by), name: nn(b.name), ext, editAt: b.edit === true ? core.now() : prev };
    core.writeJson(mf, meta);
    return { ok: true, fileKey: key, nodeId: nid, bytes: bytes.length, ext };
  });

  // 지금 로그인한 사람 이름(Me-Name)
  const meName = () => { const u = core.currentUser(); return u ? nn(u.name) : nn(core.readSetup().user); };
  const stamp = () => { const d = new Date(), p = (x) => String(x).padStart(2, '0'); return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`; };
  const okId = (x) => /^[A-Za-z0-9_-]{1,64}$/.test(nn(x));

  // ── POST /api/guides {action: import | save | apply} — UX 문서 ──
  on('POST', '/api/guides', async ({ req, body, browser, qTeam, T: T0 }) => {
    const b = await body(); let T = T0;
    if (b.action === 'import') {   // 다른 팀 문서 가져오기(지금 내용 · 수정본, 그 팀의 연관 항목 기록 빼고)
      if (!core.canWrite(req, ['guide'])) throw new Error(core.roMsg('guide'));
      const from = nn(b.from);
      if (!core.teamIds().includes(from)) throw new Error('팀을 찾지 못했습니다: ' + from);
      if (from === T.team) throw new Error('지금 보는 팀의 문서입니다. 다른 팀을 고르세요.');
      if (browser && core.authRequired() && !core.myTeams().includes(from)) throw new Error('소속된 팀의 문서만 가져올 수 있습니다.');
      const srcRoot = core.teamCtx(from).guideRoot;
      const ids = [...new Set(core.arr(b.ids).map(nn).filter(okId))];
      if (!ids.length) throw new Error('가져올 문서를 고르세요.');
      const done = [], skip = [], who = meName();
      for (const gid of ids) {
        const s = path.join(srcRoot, gid), d = path.join(T.guideRoot, gid);
        if (!core.exists(path.join(s, 'meta.json'))) { skip.push(gid + '(원본 없음)'); continue; }
        if (core.exists(d)) { skip.push(gid + '(이미 있음)'); continue; }
        fs.mkdirSync(T.guideRoot, { recursive: true }); fs.cpSync(s, d, { recursive: true });
        core.rmGlob(path.join(d, 'rev'), (x) => /\.check-.*\.json$/i.test(x));
        const m = core.readJson(path.join(d, 'meta.json'));
        for (const p of core.arr(m.files)) {
          if (!nn(p).startsWith('../') || /\.\.\/.*\.\./.test(nn(p))) continue;
          const rel = nn(p).slice(3), sf = path.join(srcRoot, rel), df = path.join(T.guideRoot, rel);
          try { if (fs.statSync(sf).isFile() && !core.exists(df)) { fs.mkdirSync(path.dirname(df), { recursive: true }); fs.copyFileSync(sf, df); } } catch (e) {}
        }
        m.importedFrom = { team: from, id: gid, at: core.now(), by: who };
        core.writeJson(path.join(d, 'meta.json'), m);
        done.push(gid);
      }
      if (done.length) core.syncWant();
      return { ok: true, imported: done, skipped: skip };
    }
    // ── 직접 수정(2026-11-12): UX 문서 보기 화면의 [직접 수정] — 사람이 원문(마크다운 · CSV)을 고쳐 바로 저장한다 ──
    //  - 새 흐름 팀(그 팀 UX 문서 폴더에 work-rules.md가 있음, 예: CURECA)의 파일형 문서는 원본 파일에 바로 쓴다(수정본이 없는 파일만, 깃 기록으로 남음)
    //  - 그 밖(UX가이드 · STAgora 문서 · 수정본이 있는 파일)은 지금처럼 수정본(rev/)으로 남긴다
    //  - base(연 때의 글)가 지금 글과 다르면(그사이 다른 사람 · Claude가 고침) 저장하지 않는다
    //  - 저장하면 guide-edit 작업 기록을 「완료」(direct:true)로 남겨, 화면의 「연관 항목 찾기 요청」으로 이어진다
    if (b.action === 'direct') {
      if (!core.canWrite(req, ['guide'])) throw new Error(core.roMsg('guide'));
      const gid = nn(b.id), md = nn(b.md).replace(/\r\n/g, '\n');
      if (!okId(gid) || !core.exists(path.join(T.guideRoot, gid, 'meta.json'))) throw new Error('문서를 찾지 못했습니다: ' + gid);
      if (!md.trim()) throw new Error('내용이 비어 있습니다.');
      if (md.length > 2000000) throw new Error('내용이 너무 깁니다.');
      const gm = core.readJson(path.join(T.guideRoot, gid, 'meta.json')) || {}, isFiles = gm.format === 'files';
      const g = core.arr(h.readGuides(T).items).find((x) => x.id === gid) || {};
      let file = '', curRel = '', hasRev = false;
      if (isFiles) {
        file = nn(b.file).replace(/\\/g, '/');
        const fl = core.arr(g.fileList).find((x) => x.path === file);
        if (!file || !fl) throw new Error('고칠 파일을 찾지 못했습니다: ' + file);
        curRel = fl.mdPath; hasRev = !!fl.rev;
      } else { curRel = nn(g.mdPath); hasRev = !!g.rev; }
      const curAbs = path.join(C.root, ...curRel.split('/'));
      const now = String(core.readText(curAbs) || '').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
      if (nn(b.base).replace(/\r\n/g, '\n') !== now) { const e = new Error('그사이 다른 사람(또는 Claude)이 이 문서를 고쳤습니다. 새로 연 뒤 다시 고쳐 주세요.'); e.status = 409; throw e; }
      if (md === now) throw new Error('바뀐 내용이 없습니다.');
      const direct = isFiles && !hasRev && core.exists(path.join(T.guideRoot, 'work-rules.md'));
      let saved = '';
      if (direct) {
        const bom = /^\uFEFF/.test(String(core.readText(curAbs) || '')) ? '\uFEFF' : '';
        core.writeText(curAbs, bom + md);
      } else {
        const rd = path.join(T.guideRoot, gid, 'rev'); saved = stamp() + '_' + C.pcSlug;
        if (isFiles) core.writeText(path.join(rd, saved, ...file.replace(/\.\.\//g, '_up/').split('/')), md);
        else core.writeText(path.join(rd, saved + '.md'), md);
        core.writeJson(path.join(rd, saved + '.json'), { rev: saved, by: nn(b.by), at: core.now(), note: '직접 수정: ' + nn(b.name), base: nn(g.rev) || 'guide.md', pc: C.pcName, req: '(직접 수정)', jobId: '', file, direct: true });
      }
      // 작업 기록(완료) — 화면의 「수정을 마쳤습니다 · 연관 항목 찾기 요청」과 수정 요청 목록에 보이게
      const jj = core.readJson(C.jobFile) || { version: 0, items: [] }; let items = core.arr(jj.items).filter(Boolean);
      let n = 1; for (const i of items) { const v = parseInt(nn(i.id).replace(/\D/g, ''), 10) || 0; if (v >= n) n = v + 1; }
      const at = core.now(), job = { id: 'J' + String(n).padStart(3, '0'), kind: 'guide-edit', team: T.team, fileKey: nn(gm.fileKey), nodeId: '', name: nn(b.name).trim() || file || gid, link: '', text: '(직접 수정)', guide: gid,
        revFrom: hasRev ? nn(g.rev) : '', revTo: saved, items: [], status: '완료', note: '직접 수정 · ' + (nn(b.by) || C.pcName) + (direct ? ' · 원본 파일에 저장' : ' · 수정본 ' + saved), by: nn(b.by), takenBy: '', createdAt: at, updatedAt: at, direct: true };
      if (file) job.file = file;
      items = [job].concat(items); if (items.length > 300) items = items.slice(0, 300);
      core.writeJson(C.jobFile, { version: (parseInt(jj.version, 10) || 0) + 1, items });
      core.syncWant();
      const out = h.readGuides(T); out.saved = saved; out.direct = direct; out.job = job.id; return out;
    }
    if (b.action === 'save') {   // 고치기: guide.md는 그대로, 수정본을 새 파일로(파일형은 고친 파일 하나만 rev/{rev}/{파일})
      if (!core.canWrite(req, ['guide'])) throw new Error(core.roMsg('guide'));
      if (!browser && !qTeam && b.jobId) { const jt = core.arr((core.readJson(C.jobFile) || {}).items).find((x) => x && nn(x.id) === nn(b.jobId)); if (jt && jt.team) T = core.teamCtx(nn(jt.team)); }
      const gid = nn(b.id), md = nn(b.md);
      if (!okId(gid) || !core.exists(path.join(T.guideRoot, gid, 'meta.json'))) throw new Error('가이드를 찾지 못했습니다: ' + gid);
      if (!md.trim()) throw new Error('가이드 내용이 비어 있습니다.');
      if (md.length > 2000000) throw new Error('가이드 내용이 너무 깁니다.');
      const rd = path.join(T.guideRoot, gid, 'rev'), rev = stamp() + '_' + C.pcSlug;
      const gm = core.readJson(path.join(T.guideRoot, gid, 'meta.json')) || {}; let file = '';
      if (gm.format === 'files') {
        file = nn(b.file).replace(/\\/g, '/');
        if (!file || !core.arr(gm.files).includes(file)) throw new Error(`고칠 파일을 정해 주세요(file: ${core.arr(gm.files).join(', ')}).`);
        core.writeText(path.join(rd, rev, ...file.replace(/\.\.\//g, '_up/').split('/')), md.replace(/\r\n/g, '\n'));
      } else core.writeText(path.join(rd, rev + '.md'), md.replace(/\r\n/g, '\n'));
      core.writeJson(path.join(rd, rev + '.json'), { rev, by: nn(b.by), at: core.now(), note: nn(b.note), base: nn(b.base), pc: C.pcName, req: nn(b.request), jobId: nn(b.jobId), file });
      core.syncWant();
      const out = h.readGuides(T); out.saved = rev; return out;
    }
    if (b.action === 'delete') {
      // 문서 지우기(최고관리자만, 2026-11-12): 폴더를 guides/_trash/{시각}_{id}로 옮긴다(깃으로 모든 PC에서 사라지지만 되살릴 수 있게).
      //  규칙 저장소의 기본 문서(여러 파일로 된 format 'files')는 지우지 않는다. 이 PC 작업 기준에 걸려 있으면 그 칸을 비운다
      const u = core.currentUser(); if (!u || !u.admin) throw new Error('문서 지우기는 최고관리자만 할 수 있습니다.');
      const gid = nn(b.id), dir = path.join(T.guideRoot, gid);
      if (!okId(gid) || gid.startsWith('_') || !core.exists(path.join(dir, 'meta.json'))) throw new Error('문서를 찾지 못했습니다: ' + gid);
      const gm = core.readJson(path.join(dir, 'meta.json')) || {};
      if (gm.format === 'files') throw new Error('규칙 저장소의 기본 문서(여러 파일로 된 문서)는 지울 수 없습니다.');
      const trash = path.join(T.guideRoot, '_trash'), dst = path.join(trash, stamp() + '_' + gid);
      fs.mkdirSync(trash, { recursive: true });
      try { fs.renameSync(dir, dst); } catch (e) { fs.cpSync(dir, dst, { recursive: true }); fs.rmSync(dir, { recursive: true, force: true }); }
      const a = core.readJson(T.guideApply) || {}; let changed = false;
      for (const fk of Object.keys(a)) {
        const ap = a[fk]; if (!ap) continue;
        for (const k of Object.keys(ap.docs || {})) if (ap.docs[k] && ap.docs[k].id === gid) { ap.docs[k] = { id: '', by: meName(), at: core.now() }; changed = true; }
        if (ap.guideId === gid) { ap.guideId = ''; changed = true; }
      }
      if (changed) core.writeJson(T.guideApply, a);
      core.syncWant();
      return Object.assign({ deleted: gid, trash: path.basename(dst) }, h.readGuides(T));
    }
    if (b.action !== 'apply') throw new Error('알 수 없는 action: ' + nn(b.action));
    // 작업 기준 적용(이 PC만): 작업규칙 · 정책서 · 기준데이터 · 화면 정의서는 이 PC의 모든 프로젝트에 같이, UX가이드는 그 Figma 파일 하나에만(2026-11-12)
    const key = nn(b.fileKey), gid = nn(b.guideId), kind = nn(b.kind) || 'guide';
    if (!h.testKey(key)) throw new Error('잘못된 파일 키입니다.');
    if (!/^[a-z]{1,20}$/.test(kind)) throw new Error('알 수 없는 문서 종류: ' + kind);
    if (gid && (!okId(gid) || !core.exists(path.join(T.guideRoot, gid, 'meta.json')))) throw new Error('문서를 찾지 못했습니다: ' + gid);
    if (gid) { const mk = nn((core.readJson(path.join(T.guideRoot, gid, 'meta.json')) || {}).kind) || 'guide'; if (mk !== kind) throw new Error(`종류가 다른 문서입니다(${mk}): ${gid}`); }
    const a = core.readJson(T.guideApply) || {};
    for (const fk of (kind === 'guide' ? [key] : h.applyKeys(key))) {
      const old = a[fk]; const docs = {};
      if (old && old.docs) Object.assign(docs, old.docs); else if (old && old.guideId) docs.guide = { id: nn(old.guideId), by: nn(old.by), at: nn(old.at) };
      docs[kind] = { id: gid, by: nn(b.by), at: core.now() };
      a[fk] = { fileKey: fk, guideId: docs.guide ? nn(docs.guide.id) : '', by: nn(b.by), pc: C.pcName, at: core.now(), docs };
    }
    core.writeJson(T.guideApply, a);
    return h.readGuides(T);
  });

  // ── POST /api/minutes {action: save | note | delete} — 회의록(.md, 깃 공유) ──
  on('POST', '/api/minutes', async ({ body, browser, qTeam, T: T0 }) => {
    const b = await body(); let T = T0; let id = nn(b.id);
    if (id && !/^m[0-9a-z-]{6,40}$/.test(id)) throw new Error('잘못된 회의록 ID입니다.');
    if (!browser && !qTeam && id && !core.exists(path.join(T.minDir, id + '.md'))) { const hitT = core.teamIds().find((t) => core.exists(path.join(core.teamCtx(t).minDir, id + '.md'))); if (hitT) T = core.teamCtx(hitT); }
    const mf = path.join(T.minDir, id + '.md');
    if (b.action === 'delete') {
      if (!id || !core.exists(mf)) throw new Error('회의록을 찾지 못했습니다.');
      fs.rmSync(mf, { force: true }); fs.rmSync(path.join(T.minDir, id + '.notes'), { recursive: true, force: true });
      core.syncWant(); return { ok: true };
    }
    if (b.action === 'note') {
      if (!id || !core.exists(mf)) throw new Error('회의록을 찾지 못했습니다.');
      const nf = path.join(T.minDir, id + '.notes', h.noteKey() + '.md');
      const nb = nn(b.body).replace(/\r\n/g, '\n').replace(/\s+$/, '');
      if (!nb) fs.rmSync(nf, { force: true });
      else core.writeText(nf, `---\nauthor: ${meName()}\nauthorId: ${h.noteKey()}\nupdatedAt: ${core.now()}\n---\n${nb}\n`);
      core.syncWant(); return { ok: true, notes: h.readNotes(T.minDir, id) };
    }
    if (b.action !== 'save') throw new Error('알 수 없는 작업입니다.');
    const date = nn(b.date).trim().replace(/T/g, ' ');
    if (!/^\d{4}-\d{2}-\d{2}( \d{2}:\d{2})?$/.test(date)) throw new Error('일시를 넣어 주세요(예: 2026-11-03 10:00).');
    const title = nn(b.title).replace(/[\r\n]+/g, ' ').trim(); if (!title) throw new Error('제목을 넣어 주세요.');
    const att = nn(b.attendees).split(/\r?\n/).map((x) => x.trim()).filter(Boolean).join(' / ');
    let old = null;
    if (!id) id = 'm' + date.replace(/[^0-9]/g, '').slice(0, 8) + '-' + crypto.randomUUID().replace(/-/g, '').slice(0, 6);
    else old = h.readMinute(path.join(T.minDir, id + '.md'));
    let me = meName(); const now = core.now();
    if (!browser && b.by) me = nn(b.by);
    const created = old ? nn(old.createdAt) : now, by = old ? nn(old.by) : me;
    const sum = b.summary ? `${now} · ` + nn(b.summary).replace(/[\r\n]+/g, ' ') : old ? nn(old.summary) : '';
    const txt = `---\nid: ${id}\ndate: ${date}\ntitle: ${title}\nattendees: ${att}\nby: ${by}\ncreatedAt: ${created}\nupdatedBy: ${me}\nupdatedAt: ${now}\nsummary: ${sum}\n---\n` + nn(b.body).replace(/\r\n/g, '\n').replace(/\s+$/, '') + '\n';
    core.writeText(path.join(T.minDir, id + '.md'), txt);
    core.syncWant();
    return { ok: true, item: h.readMinute(path.join(T.minDir, id + '.md')) };
  });

  // ── POST /api/upload?name=: UX 문서 만들기 참고 파일(이 PC에만, 작업을 만들 때 옮김) ──
  const UP_EXT = ['md', 'markdown', 'txt', 'csv', 'tsv', 'json', 'html', 'htm', 'pdf', 'docx', 'xlsx', 'pptx', 'png', 'jpg', 'jpeg', 'gif', 'webp'], UP_MAX = 20 * 1024 * 1024;
  on('POST', '/api/upload', async ({ q, raw }) => {
    const nm = nn(q.get('name')), ext = path.extname(nm).replace(/^\./, '').toLowerCase();
    if (!UP_EXT.includes(ext)) throw new Error(`올릴 수 없는 파일 형식입니다: ${nm} (가능: ${UP_EXT.join(', ')})`);
    let buf; try { buf = await raw(UP_MAX); } catch (e) { throw new Error('파일은 하나에 20MB 미만만 올릴 수 있습니다.'); }
    if (!buf.length || buf.length >= UP_MAX) throw new Error('파일은 하나에 20MB 미만만 올릴 수 있습니다.');
    fs.mkdirSync(upTmp, { recursive: true });
    const old = Date.now() - 6 * 3600 * 1000; core.rmGlob(upTmp, (x) => { try { return fs.statSync(path.join(upTmp, x)).mtimeMs < old; } catch (e) { return false; } });
    const tmp = crypto.randomUUID().replace(/-/g, '') + '.' + ext;
    fs.writeFileSync(path.join(upTmp, tmp), buf);
    return { tmp, name: nm, size: buf.length };
  });

  // ── POST /api/prototypes {action:'delete', id} — 프로토타입 지우기(prototypes/_trash로 옮김) ──
  on('POST', '/api/prototypes', async ({ body }) => {
    const b = await body(); if (b.action !== 'delete') throw new Error('알 수 없는 작업입니다.');
    const id = nn(b.id); if (!okId(id) || !core.exists(path.join(C.protoRoot, id))) throw new Error('프로토타입을 찾지 못했습니다: ' + id);
    const tr = path.join(C.protoRoot, '_trash'); fs.mkdirSync(tr, { recursive: true });
    fs.renameSync(path.join(C.protoRoot, id), path.join(tr, id + '_' + stamp()));
    return { ok: true };
  });

  // ── POST /api/history {action: add | sync} — 요청 없이 채팅으로 고친 것을 이력에 남기기 · 깃 동기화 바로 ──
  on('POST', '/api/history', async ({ body, q, T }) => {
    const b = await body();
    if (b.action === 'add') {
      const title = nn(b.title).trim(), text = nn(b.text).trim();
      if (!title && !text) throw new Error('작업 내용을 입력해 주세요.');
      const name = C.pcSlug + '_' + stamp();
      saveHistEntry(name, { id: name, kind: 'work', team: b.team ? nn(b.team) : T.team, at: core.now(), by: nn(b.by), doneBy: nn(b.doneBy), pc: C.pcName,
        reqId: '', fileKey: nn(b.fileKey), fileName: nn(b.fileName), page: nn(b.page), frame: nn(b.frame), nodeId: nn(b.nodeId),
        type: nn(b.type), text: title || text, note: title ? text : '', shot: copyHistShot(b.fileKey, b.nodeId, name) });
    } else if (b.action === 'sync') { core.syncWant(); await new Promise((r) => setTimeout(r, 700)); }
    else throw new Error('알 수 없는 action: ' + nn(b.action));
    const all = q.get('all') === '1';
    let items = core.listJson(C.histEntries).map((n) => core.readJson(path.join(C.histEntries, n))).filter((x) => x != null);
    if (!all) items = items.filter((e) => core.itemTeam(e) === T.team);
    const st = core.readJson(C.syncStat);
    return { pc: C.pcName, pcSlug: C.pcSlug, team: all ? '' : T.team, syncing: !!(st && st.busy), sync: st, items };
  });

  // ── POST /api/me/password {current, next} — 내 비밀번호 바꾸기 ──
  on('POST', '/api/me/password', async ({ body, res, sendJson }) => {
    const u = core.currentUser(); if (!u) return sendJson(res, 401, { error: '로그인이 필요합니다.', login: true });
    const b = await body();
    if (!core.testPw(u, nn(b.current))) { await new Promise((r) => setTimeout(r, 600)); throw new Error('지금 비밀번호가 맞지 않습니다.'); }
    const nw = nn(b.next);
    if (nw.length < 8) throw new Error('새 비밀번호는 8자 이상이어야 합니다.');
    if (nw === nn(b.current)) throw new Error('지금과 다른 비밀번호를 입력해 주세요.');
    core.setPw(u, nw); core.saveAccount(u); core.writeLogin(u);
    return { ok: true };
  });

  // ── POST /api/accounts — 계정 · 팀 관리(최고관리자) ──
  on('POST', '/api/accounts', async ({ body }) => {
    const b = await body(); const act = nn(b.action);
    if (act.startsWith('team-')) {
      const tid = nn(b.team && b.team.id).trim().toLowerCase(), tname = nn(b.team && b.team.name).trim();
      let teams = core.readTeams(); const t = teams.find((x) => x.id === tid);
      if (act === 'team-add') {
        if (!/^[a-z][a-z0-9-]{1,31}$/.test(tid)) throw new Error('팀 아이디는 영문 소문자로 시작하고 영문 소문자 · 숫자 · - 로 2~32자입니다.');
        if (t) throw new Error('이미 있는 팀 아이디입니다: ' + tid);
        if (!tname) throw new Error('팀 이름을 입력해 주세요.');
        if (teams.some((x) => nn(x.name) === tname)) throw new Error('같은 이름의 팀이 있습니다: ' + tname);
        teams = core.fillTeamColors(teams); const cu = core.currentUser();
        teams.push({ id: tid, name: tname, createdAt: core.now(), by: cu ? cu.id : null }); teams = core.fillTeamColors(teams);
      } else if (act === 'team-update') {
        if (!t) throw new Error('팀을 찾지 못했습니다: ' + tid);
        if (!tname) throw new Error('팀 이름을 입력해 주세요.');
        if (teams.some((x) => nn(x.name) === tname && x.id !== tid)) throw new Error('같은 이름의 팀이 있습니다: ' + tname);
        t.name = tname;
      } else if (act === 'team-delete') {
        if (!t) throw new Error('팀을 찾지 못했습니다: ' + tid);
        if (t.legacy) throw new Error(`「${t.name}」 팀은 지금까지의 데이터가 있는 팀이라 지울 수 없습니다.`);
        const n = core.readAccounts().filter((a) => !a.admin && core.userTeams(a).includes(tid)).length;
        if (n) throw new Error(`「${t.name}」 팀에 계정이 ${n} 개 있습니다. 계정에서 이 팀을 먼저 빼 주세요.`);
        const td = path.join(C.histDir, 'teams', tid); let has = false;
        const walk = (d) => { let es = []; try { es = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { return; } for (const x of es) { if (has) return; if (x.isDirectory()) walk(path.join(d, x.name)); else has = true; } };
        walk(td); if (has) throw new Error(`「${t.name}」 팀의 데이터(.history/teams/${tid})가 있어 지울 수 없습니다.`);
        teams = teams.filter((x) => x.id !== tid);
      }
      core.saveTeams(teams); return { ok: true };
    }
    const id = nn(b.id).trim().toLowerCase(), allT = core.teamIds();
    const pickTeams = [...new Set(core.arr(b.teams).filter((x) => allT.includes(x)))];
    const pickMenus = core.arr(b.menus).filter((x) => core.MENU_KEYS.includes(x));
    const pickWrites = core.arr(b.writes).filter((x) => core.WRITE_KEYS.includes(x) && pickMenus.includes(x));
    const pickApproves = core.arr(b.approves).filter((x) => core.APPROVE_KEYS.includes(x));
    if (act === 'add') {
      if (!/^[a-z0-9._-]{3,32}$/.test(id)) throw new Error('아이디는 영문 소문자 · 숫자 · . _ - 로 3~32자입니다.');
      if (core.readAccount(id)) throw new Error('이미 있는 아이디입니다: ' + id);
      if (!nn(b.name).trim()) throw new Error('이름을 입력해 주세요.');
      if (nn(b.pw).length < 8) throw new Error('비밀번호는 8자 이상이어야 합니다.');
      const cu = core.currentUser();
      const a = { id, name: nn(b.name).trim(), admin: false, teams: pickTeams, menus: pickMenus, writes: pickWrites, approves: pickApproves, active: true, createdAt: core.now(), createdBy: cu ? cu.id : null };
      core.setPw(a, nn(b.pw)); core.saveAccount(a);
    } else if (act === 'update') {
      const a = core.readAccount(id); if (!a) throw new Error('계정을 찾지 못했습니다: ' + id);
      if (nn(b.name).trim()) a.name = nn(b.name).trim();
      if (!a.admin) {
        if (b.menus != null) { a.menus = pickMenus; a.writes = pickWrites; }
        if (b.approves != null) a.approves = pickApproves;
        if (b.teams != null) a.teams = pickTeams;
        if (b.active != null) a.active = !!b.active;
      }
      if (nn(b.pw).length) { if (nn(b.pw).length < 8) throw new Error('비밀번호는 8자 이상이어야 합니다.'); core.setPw(a, nn(b.pw)); }
      core.saveAccount(a);
      const me = core.readSetup(); if (me.login && nn(me.login.id) === id) core.writeLogin(a);
    } else if (act === 'delete') {
      const a = core.readAccount(id); if (!a) throw new Error('계정을 찾지 못했습니다: ' + id);
      if (a.admin) throw new Error('최고관리자 계정은 지울 수 없습니다.');
      fs.rmSync(path.join(C.acctDir, id + '.json'), { force: true }); core.syncWant();
    } else throw new Error('알 수 없는 작업: ' + act);
    return { ok: true };
  });

  // ── POST /api/alive · /api/bye {id} — 브라우저 탭 열림(20초마다) · 닫힘. 열린 탭이 모두 닫히면 서버를 끈다(3단계에서) ──
  C.pages = C.pages || {}; C.anyPage = C.anyPage || false;
  for (const ep of ['/api/alive', '/api/bye']) on('POST', ep, async ({ raw }) => {
    let id = ''; try { id = nn(JSON.parse((await raw()).toString('utf8').replace(/^﻿/, '')).id); } catch (e) {}
    if (/^[A-Za-z0-9-]{6,64}$/.test(id)) { if (ep === '/api/alive') { C.pages[id] = Date.now(); C.anyPage = true; C.emptySince = null; } else delete C.pages[id]; }
    return { ok: true, pages: Object.keys(C.pages).length };
  }, { readSafe: true });
  // ── POST /api/shutdown — 서버 끄기(이 서버에서 연 페이지만) ──
  on('POST', '/api/shutdown', async ({ req, res, sendJson }) => {
    const o = req.headers.origin; if (o && o !== `http://localhost:${C.port}`) throw new Error('허용되지 않은 요청입니다.');
    sendJson(res, 200, { ok: true }); console.log(`\n  [${core.now()}] 종료 요청으로 서버를 껐습니다.`); setTimeout(() => process.exit(0), 200);
  }, { readSafe: true });

  // ── POST /api/setup · /api/setup/launch — 시작 안내 저장 · 앱 실행 버튼 ──
  const W = process.platform === 'win32', LAD = process.env.LOCALAPPDATA || '';
  const figmaExe = C.isMac ? '/Applications/Figma.app' : path.join(LAD, 'Figma', 'Figma.exe');
  // 서버와 따로 도는 프로그램 띄우기(기다리지 않음). 윈도우에서 PowerShell을 detached로 띄우면 콘솔이 없어 바로 끝나므로 윈도우는 detached 없이(서버가 꺼져도 남는다)
  const detach = (cmd, args, o) => { const p = spawn(cmd, args, Object.assign({ stdio: 'ignore', windowsHide: true, cwd: C.root }, o || {}, { detached: W ? !!(o && o.windowsHide === false) : true })); p.on('error', () => {}); p.unref(); return p; };
  const shellOpen = (target) => (C.isMac ? detach('open', [target]) : detach('cmd', ['/c', 'start', '""', target], { windowsHide: true }));
  let loginProc = null;
  function startAgent() {
    const cc = h.findClaudeCode(); if (!cc) throw new Error('Claude Code를 찾지 못했습니다. Claude 데스크톱 앱(Code 탭)을 한 번 열거나 Claude Code를 설치해 주세요.');
    if (h.agentInfo().alive) throw new Error('이미 백그라운드 감시 중입니다.');
    fs.rmSync(path.join(C.root, 'workbench', '.agent_stop'), { force: true });
    if (C.isMac) detach('/bin/sh', ['-c', `nohup perl '${path.join(C.root, 'workbench', 'agent.pl')}' '${cc}' >/dev/null 2>&1 &`]);
    else detach('powershell', ['-NoProfile', '-WindowStyle', 'Hidden', '-ExecutionPolicy', 'Bypass', '-File', path.join(C.root, 'workbench', 'agent.ps1'), '-Claude', cc]);
  }
  function openClaudeCli() {
    const cc = h.findClaudeCode(); if (!cc) throw new Error('Claude Code를 찾지 못했습니다. Claude 데스크톱 앱(Code 탭)을 한 번 열거나 Claude Code를 설치해 주세요.');
    try { const r = spawnSync(cc, ['mcp', 'list'], { encoding: 'utf8', timeout: 60000, windowsHide: true }); if (!/^(claude\.ai )?figma/mi.test(String(r.stdout || '') + String(r.stderr || ''))) spawnSync(cc, ['mcp', 'add', '--transport', 'http', '--scope', 'user', 'figma', 'https://mcp.figma.com/mcp'], { timeout: 60000, windowsHide: true }); } catch (e) {}
    if (C.isMac) spawn('osascript', ['-e', `tell application "Terminal" to do script "cd '${C.root}' && '${cc}'"`, '-e', 'tell application "Terminal" to activate'], { detached: true, stdio: 'ignore' }).unref();
    else detach('powershell', ['-NoExit', '-Command', `& '${cc}'`], { windowsHide: false, detached: true });
    try { core.writeText(path.join(C.root, 'workbench', '.agent_renew'), new Date().toISOString()); } catch (e) {}
  }
  on('POST', /^\/api\/setup(\/launch)?$/, async ({ req, body, res, send }) => {
    const o = req.headers.origin; if (o && o !== `http://localhost:${C.port}`) throw new Error('허용되지 않은 요청입니다.');
    const b = await body(); const p = new URL(req.url, 'http://x').pathname;
    if (p === '/api/setup') {
      const s = core.readSetup();
      for (const k of ['done', 'user', 'figmaUrl', 'autoAt', 'autoWatch']) if (b[k] != null) s[k] = b[k];
      if (b.checks) s.checks = b.checks;
      if (b.claudePath != null) {
        let cp = (nn(b.claudePath).split(/\r?\n/).find((x) => x.trim()) || '').trim().replace(/^"+|"+$/g, '');
        if (cp) { let ok = false; try { ok = fs.statSync(cp).isFile(); } catch (e) {} if (!ok) throw new Error(`그 경로에서 Claude Code를 찾지 못했습니다: ${cp} (where claude 결과를 그대로 붙여 넣으세요)`); }
        s.claudePath = cp;
      }
      s.updatedAt = core.now(); core.writeJson(C.setupFile, s);
      const k = h.keyOf(s.figmaUrl);
      if (h.testKey(k)) ensureProj(k, s.figmaUrl);
      if (b.figmaUrl != null && h.testKey(k)) { const pj = h.readProj(k); if (pj && pj.link !== s.figmaUrl) { pj.link = nn(s.figmaUrl); saveProj(pj); } setEditablePage(k, s.figmaUrl); }
      return { state: s, env: h.setupEnv() };
    }
    switch (nn(b.app)) {
      case 'figma': {
        if (!core.exists(figmaExe)) throw new Error('Figma 데스크톱 앱이 설치되어 있지 않습니다.');
        const u = nn(b.url), ok = /^https:\/\/(www\.)?figma\.com\//.test(u);
        if (C.isMac) detach('open', ok ? ['-a', 'Figma', u] : ['-a', 'Figma']); else detach(figmaExe, ok ? [u] : []);
        break;
      }
      case 'claude': {
        if (C.isMac) { if (!core.exists('/Applications/Claude.app')) throw new Error('Claude 데스크톱 앱이 설치되어 있지 않습니다.'); detach('open', ['-a', 'Claude']); break; }
        const app = (() => { try { const r = spawnSync('powershell', ['-NoProfile', '-Command', "(Get-AppxPackage -Name 'Claude' | Select-Object -First 1).PackageFamilyName"], { encoding: 'utf8', timeout: 15000, windowsHide: true }); const f = String(r.stdout || '').trim(); if (f) return `shell:AppsFolder\\${f}!Claude`; } catch (e) {} const exe = path.join(LAD, 'AnthropicClaude', 'claude.exe'); return core.exists(exe) ? exe : null; })();
        if (!app) throw new Error('Claude 데스크톱 앱이 설치되어 있지 않습니다.');
        if (app.startsWith('shell:')) detach('explorer.exe', [app]); else detach(app, []);
        break;
      }
      case 'folder': if (C.isMac) detach('open', [C.root]); else detach('explorer.exe', [C.root]); break;
      case 'install': {
        const ids = { git: 'Git.Git', figma: 'Figma.Figma', claude: 'Anthropic.Claude' }, pages = { git: 'https://git-scm.com/downloads', figma: 'https://www.figma.com/downloads/', claude: 'https://claude.ai/download' };
        const w = nn(b.what); if (!ids[w]) throw new Error('알 수 없는 설치: ' + w);
        if (C.isMac) { if (w === 'git') detach('/usr/bin/xcode-select', ['--install']); else detach('open', [pages[w]]); }
        else if (h.setupEnv().winget) detach('winget', ['install', '--id', ids[w], '-e'], { windowsHide: false }); else shellOpen(pages[w]);
        break;
      }
      case 'git-login': {
        if (loginProc && loginProc.exitCode == null) throw new Error('깃허브 연결 창이 이미 열려 있습니다.');
        const env = Object.assign({}, process.env, { WB_USER: nn(core.readSetup().user) });
        if (C.isMac) spawn('osascript', ['-e', `tell application "Terminal" to do script "bash '${path.join(C.root, 'workbench', 'github_login.sh')}'"`, '-e', 'tell application "Terminal" to activate'], { detached: true, stdio: 'ignore', env }).unref();
        else { loginProc = spawn('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(C.root, 'workbench', 'github_login.ps1')], { detached: true, stdio: 'ignore', env, windowsHide: false }); loginProc.on('error', () => {}); loginProc.unref(); }
        break;
      }
      case 'claude-cli': openClaudeCli(); break;
      case 'agent-start': startAgent(); break;
      case 'agent-stop': core.writeText(path.join(C.root, 'workbench', '.agent_stop'), new Date().toISOString()); break;
      default: throw new Error('알 수 없는 앱: ' + nn(b.app));
    }
    return { ok: true };
  });
  Object.assign(h, { startAgent, isLoginOpen: () => !!(loginProc && loginProc.exitCode == null) });

  // ── POST /api/sheet {action: config | pat | test | write} — 일정 연결(구글 시트 · Azure DevOps) ──
  async function sheetCall(T, q) {
    const cf = core.readJson(T.sheetConf) || {};
    if (!cf.webapp || !cf.token) throw new Error('구글 시트가 아직 연결되지 않았습니다. 일정/작업의 [시트 연결]에서 웹 앱 주소와 비밀값을 넣어 주세요.');
    q.token = nn(cf.token);
    let r; try { r = await fetch(nn(cf.webapp), { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(q), redirect: 'follow', signal: AbortSignal.timeout(60000) }); }
    catch (e) { throw new Error('구글 시트에 닿지 못했습니다: ' + e.message); }
    return h.sheetCheck(await r.text());
  }
  on('POST', '/api/sheet', async ({ body, T, res, send }) => {
    const b = await body(); const old = core.readJson(T.sheetConf) || {};
    switch (nn(b.action)) {
      case 'config': {
        if (nn(b.provider) === 'azure') {
          const az = b.azure || {}, org = nn(az.org).trim().replace(/\/+$/, '');
          if (!/^https:\/\/(dev\.azure\.com\/[^/\s]+|[A-Za-z0-9-]+\.visualstudio\.com)$/.test(org)) throw new Error('조직 주소는 https://dev.azure.com/{조직} 또는 https://{조직}.visualstudio.com 형식입니다.');
          if (!nn(az.project).trim()) throw new Error('프로젝트 이름을 넣어 주세요.');
          const cf = Object.assign({}, old, { provider: 'azure', azure: { org, project: nn(az.project).trim(), scope: nn(az.scope).trim(), startField: nn(az.startField).trim(), endField: nn(az.endField).trim(), doneStates: nn(az.doneStates).trim() }, by: meName(), at: core.now() });
          core.writeJson(T.sheetConf, cf); core.syncWant(); return { ok: true };
        }
        let wa = nn(b.webapp).trim(); if (wa && !/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(wa)) throw new Error('웹 앱 주소는 https://script.google.com/macros/s/…/exec 형식입니다.');
        if (!wa) wa = nn(old.webapp);
        let tk = nn(b.token).trim(); if (!tk) tk = nn(old.token);
        core.writeJson(T.sheetConf, { provider: 'google', sheetUrl: nn(b.sheetUrl).trim(), webapp: wa, token: tk, wbsGid: nn(b.wbsGid).trim(), minutes: nn(b.minutes).trim(), cols: b.cols === undefined ? null : b.cols, azure: old.azure === undefined ? null : old.azure, by: meName(), at: core.now() });
        core.syncWant(); return { ok: true };
      }
      case 'pat': {
        const f = path.join(C.setupDir, 'azure_pat.json'), pt = core.readJson(f) || {}, v = nn(b.pat).trim();
        if (v) pt[T.team] = v; else delete pt[T.team];
        core.writeJson(f, pt); return { ok: true, azurePat: !!v };
      }
      case 'test': send(res, 200, 'application/json; charset=utf-8', await sheetCall(T, { action: 'sheets' })); return;
      case 'write': {
        const cells = core.arr(b.cells).map((c) => ({ row: parseInt(c.row, 10) || 0, col: parseInt(c.col, 10) || 0, value: nn(c.value) }));
        if (!cells.length) throw new Error('바꿀 칸이 없습니다.');
        const q = { action: 'write', cells }; if (b.gid) q.gid = nn(b.gid); if (b.name) q.sheet = nn(b.name);
        send(res, 200, 'application/json; charset=utf-8', await sheetCall(T, q)); return;
      }
      default: throw new Error('알 수 없는 작업입니다.');
    }
  });

  // ── POST /api/attach?ext=: 첨부 원본(이미지 · PDF · 글)을 임시로(등록할 때 요청 ID 이름으로 옮김) ──
  on('POST', '/api/attach', async ({ q, raw }) => {
    let ext = String(q.get('ext') || '').toLowerCase(); if (ext === 'jpeg') ext = 'jpg'; if (ext === 'markdown') ext = 'md';
    const img = ATT_IMG.includes(ext);
    if (!img && !ATT_DOC.includes(ext)) throw new Error('첨부할 수 없는 형식입니다(가능: 이미지 PNG · JPG · GIF · WEBP, PDF, 글 TXT · MD · CSV).');
    const max = img ? ATT_IMG_MAX : ATT_DOC_MAX, over = img ? '이미지는 7.5MB 이하만 첨부할 수 있습니다.' : 'PDF · 글 파일은 30MB 이하만 첨부할 수 있습니다.';
    let buf; try { buf = await raw(max + 1); } catch (e) { throw new Error(over); }
    if (!buf.length || buf.length > max) throw new Error(over);
    fs.mkdirSync(attachTmp, { recursive: true });
    const old = Date.now() - 6 * 3600 * 1000;   // 등록하지 않고 남은 임시 파일은 6시간 뒤 지운다
    core.rmGlob(attachTmp, (x) => { try { return fs.statSync(path.join(attachTmp, x)).mtimeMs < old; } catch (e) { return false; } });
    const tmp = crypto.randomUUID().replace(/-/g, '') + '.' + ext;
    fs.writeFileSync(path.join(attachTmp, tmp), buf);
    return { tmp };
  });

  // ── POST /api/requests {action: add | update | answer | delete} ──
  on('POST', '/api/requests', async ({ body, T, res, send }) => {
    const b = await body();
    if (!core.exists(C.reqFile)) core.writeText(C.reqFile, '{"version":1,"items":[]}');
    const r = core.readJson(C.reqFile) || { version: 1, items: [] };
    const now = core.now(); let items = core.arr(r.items).filter(Boolean);
    const find = () => { const x = items.find((i) => i.id === b.id); if (!x) throw new Error('요청을 찾지 못했습니다: ' + nn(b.id)); return x; };
    switch (b.action) {
      case 'add': {
        const txt = nn(b.text).trim(); if (!txt) throw new Error('수정 내용을 입력해 주세요.');
        let n = 1; for (const i of items) { const v = parseInt(nn(i.id).replace(/\D/g, ''), 10) || 0; if (v >= n) n = v + 1; }
        const rid = 'R' + String(n).padStart(3, '0');
        const imgs = saveAttach(rid, b.images);
        const it = { id: rid, team: b.team ? nn(b.team) : T.team, nodeId: nn(b.nodeId), frame: nn(b.frame), page: nn(b.page), fileKey: nn(b.fileKey), fileName: nn(b.fileName),
          editable: !!b.editable, type: nn(b.type), priority: nn(b.priority), layout: nn(b.layout), text: txt, status: '대기', note: '', author: nn(b.by), updatedBy: nn(b.by), createdAt: now, updatedAt: now };
        if (imgs.length) it.images = imgs;
        // 화면설계 케이스(1 부분 수정 · 2 신규 · 3 다시 그리기, 규칙 저장소 flow/)와 이어 갈 작업 기록(work-logs/{work}.md, 비면 0단계부터 새 작업)
        if (['1', '2', '3'].includes(nn(b.case))) { it.case = nn(b.case); it.work = /^[^\\/:*?"<>|]{1,120}$/.test(nn(b.work)) ? nn(b.work) : ''; if (b.stage != null && b.stage !== '') it.stage = parseInt(b.stage, 10); }
        // 수정할 부분 표시(Workbench에서 캡처 위에 그린 사각형): Figma 프레임 좌표 {n, x, y, w, h}, att = 그 부분을 잘라 낸 첨부의 순번(images, 1부터), shotAt = 그때 캡처 시각
        const mk = core.arr(b.marks).filter((m) => m && +m.w > 0 && +m.h > 0).slice(0, 20)
          .map((m, i) => ({ n: i + 1, x: Math.round(+m.x || 0), y: Math.round(+m.y || 0), w: Math.round(+m.w), h: Math.round(+m.h), att: parseInt(m.att, 10) || 0 }));
        if (mk.length) { it.marks = mk; if (b.shotAt) it.shotAt = nn(b.shotAt); }
        if (b.fixRows) it.fixRows = core.arr(b.fixRows).slice(0, 200).map((x) => ({ doc: nn(x.doc), file: nn(x.file), n: nn(x.n), cid: nn(x.cid) }));
        items = [it].concat(items); histFromRequest(it); break;
      }
      case 'update': {
        const hit = find();
        if (nn(b.status) === '진행 중' && nn(hit.status) === '진행 중' && !b.force) throw new Error(`이미 진행 중인 요청입니다(다른 Claude 세션이 처리 중): ${hit.id}. 이 요청은 건너뛰세요.`);
        if (b.status === '진행 중' && hit.status !== '진행 중') { hit.startedAt = now; hit.frames = []; }
        if (Object.prototype.hasOwnProperty.call(b, 'frames')) {
          const fr = []; for (const f of core.arr(b.frames).filter(Boolean)) { const nid = nn(f.nodeId); if (/^\d+:\d+$/.test(nid) && !fr.some((x) => x.nodeId === nid)) fr.push({ nodeId: nid, name: nn(f.name) }); }
          hit.frames = fr.slice(0, 12);
        }
        const wasDone = nn(hit.status) === '완료';
        if (Object.prototype.hasOwnProperty.call(b, 'ask')) hit.ask = b.ask;
        else if (b.status && nn(b.status) !== nn(hit.status)) hit.ask = null;
        if (b.status) hit.status = nn(b.status);
        if (b.note != null) hit.note = nn(b.note);
        if (b.text != null && nn(b.text).trim()) hit.text = nn(b.text).trim();
        hit.updatedAt = now;
        if (b.by) hit.updatedBy = nn(b.by);
        if (nn(hit.status) === '완료' && core.arr(hit.frames).length) { try { addCatalogFrames(nn(hit.fileKey), nn(hit.page), hit.frames); } catch (e) {} }
        // 처음 완료될 때: Figma 토큰이 있으면 고친 프레임을 서버가 뒤에서 다시 캡처(figma.js)
        if (!wasDone && nn(hit.status) === '완료' && core.arr(hit.frames).length && h.figmaAfterDone) { try { h.figmaAfterDone(nn(hit.fileKey) || h.workKey(), hit.frames, nn(hit.id)); } catch (e) {} }
        histFromRequest(hit); break;
      }
      case 'answer': {
        const hit = find(); const txt = nn(b.text).trim(); if (!txt) throw new Error('답을 고르거나 입력해 주세요.');
        const qq = hit.ask ? nn(hit.ask.q) : nn(hit.note);
        hit.replies = core.arr(hit.replies).filter(Boolean).concat([{ at: now, by: nn(b.by), q: qq, text: txt }]);
        hit.ask = null;
        if (b.resolve) hit.status = '완료'; else { hit.status = '대기'; hit.note = ''; }
        hit.updatedAt = now; if (b.by) hit.updatedBy = nn(b.by);
        histFromRequest(hit); break;
      }
      case 'delete': {
        items = items.filter((i) => i.id !== b.id); histRemove(b.id);
        if (/^R\d+$/.test(nn(b.id))) core.rmGlob(attachDir, (x) => x.startsWith(b.id + '_'));
        break;
      }
      default: throw new Error('알 수 없는 action: ' + nn(b.action));
    }
    r.items = items; r.version = (parseInt(r.version, 10) || 0) + 1;
    core.writeJson(C.reqFile, r);
    if (b.action === 'update' && b.status === '완료') startUsage(nn(b.id));
    send(res, 200, 'application/json; charset=utf-8', fs.readFileSync(C.reqFile));
  });
};
