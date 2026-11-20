'use strict';
// 복사 · 붙여넣기 옮기기의 키 누르기(2026-11-20, transfer mode paste).
//  Figma 플러그인은 파일끼리 복사할 수 없지만, 사람이 Figma에서 복사(Ctrl+C) · 붙여넣기(Ctrl+V)하면 컴포넌트 연결까지 그대로 옮겨진다.
//  그래서 이 PC 서버가 사람 대신 키를 누른다. 탭이 뒤에 있을 때 플러그인이 한 선택은 화면에 적용되지 않아(시험 2026-11-20),
//  탭을 앞으로 가져온 뒤 플러그인에게 「지금 골라 / 지금 준비해」 신호를 주고 답을 받은 다음 키를 누른다:
//   ① 탭 앞으로(figma://file/{키}) → 신호 copyReq → ① 플러그인이 다시 선택하고 selAt으로 답 → Ctrl+C → 클립보드에 ① 파일 Figma 데이터 확인
//   → ② 탭 앞으로 → 신호 pasteReq → ② 플러그인이 선택을 비우고 붙을 자리를 준비해 prepAt으로 답 → Ctrl+V. 붙은 화면 놓기는 ② 플러그인이 한다.
//  Figma 창이 맨 앞이 아니면 키를 보내지 않는다(다른 프로그램에 붙여넣지 않게). 실패하면 사람이 직접 누르면 된다(작업 note가 안내).
//  윈도우: PowerShell(-STA, user32 SendInput — SendKeys는 Figma에 들어가지 않았다). 탭을 앞으로 가져오면 캔버스를 한 번 클릭해 키보드 포커스를 맞춘다. 맥: open + osascript(「손쉬운 사용」 권한 필요, 클립보드 확인은 하지 않음, 시험 전).
const fs = require('fs'), os = require('os'), path = require('path');
const { spawn } = require('child_process');
const { C } = require('./core');

let busy = false;

const PS = String.raw`
param([string]$Do, [string]$Key)
[Console]::OutputEncoding = [Text.Encoding]::UTF8
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Windows.Forms
Add-Type @"
using System; using System.Runtime.InteropServices;
public class WbKeys {
  [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int c);
  [DllImport("user32.dll")] public static extern bool IsIconic(IntPtr h);
  [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr h, out uint p);
  [DllImport("user32.dll")] public static extern bool SetProcessDPIAware();
  [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out RECT r);
  [DllImport("user32.dll")] public static extern bool SetCursorPos(int x, int y);
  [DllImport("user32.dll")] public static extern bool GetCursorPos(out POINT p);
  public struct RECT { public int L, T, R, B; }
  public struct POINT { public int X, Y; }
  [StructLayout(LayoutKind.Sequential)] public struct KEYBDINPUT { public ushort wVk; public ushort wScan; public uint dwFlags; public uint time; public IntPtr dwExtraInfo; }
  [StructLayout(LayoutKind.Sequential)] public struct MOUSEINPUT { public int dx; public int dy; public uint mouseData; public uint dwFlags; public uint time; public IntPtr dwExtraInfo; }
  [StructLayout(LayoutKind.Explicit)] public struct U { [FieldOffset(0)] public MOUSEINPUT mi; [FieldOffset(0)] public KEYBDINPUT ki; }
  [StructLayout(LayoutKind.Sequential)] public struct INPUT { public uint type; public U u; }
  [DllImport("user32.dll")] public static extern uint SendInput(uint n, INPUT[] i, int size);
  [DllImport("user32.dll")] public static extern uint MapVirtualKey(uint c, uint t);
  // Ctrl + 글쇠(SendInput — SendKeys는 이 Windows에서 Figma에 들어가지 않았다, 2026-11-20 시험)
  public static uint Ctrl(ushort key) {
    INPUT[] a = new INPUT[4]; ushort[] vk = { 0x11, key, key, 0x11 }; uint[] fl = { 0, 0, 2, 2 };
    for (int i = 0; i < 4; i++) { a[i].type = 1; a[i].u.ki.wVk = vk[i]; a[i].u.ki.wScan = (ushort)MapVirtualKey(vk[i], 0); a[i].u.ki.dwFlags = fl[i]; }
    return SendInput(4, a, Marshal.SizeOf(typeof(INPUT)));
  }
  // 왼쪽 클릭(지금 커서 자리)
  public static uint Click() {
    INPUT[] a = new INPUT[2]; a[0].type = 0; a[0].u.mi.dwFlags = 2; a[1].type = 0; a[1].u.mi.dwFlags = 4;
    return SendInput(2, a, Marshal.SizeOf(typeof(INPUT)));
  }
}
"@
[void][WbKeys]::SetProcessDPIAware()
# 캔버스에 키보드 포커스: Figma 창 가운데(캔버스)를 한 번 클릭하고 커서를 되돌린다 — 왼쪽 페이지 칸 등에 포커스가 있으면 Ctrl+C · V가 캔버스에 가지 않는다.
#  클릭으로 선택이 바뀌어도 괜찮다: 그 뒤 플러그인이 다시 고르거나(①) 선택을 비운다(②)
function FocusCanvas {
  $f = FigWin; if (-not $f) { return }
  $r = New-Object WbKeys+RECT; [void][WbKeys]::GetWindowRect($f.MainWindowHandle, [ref]$r)
  $old = New-Object WbKeys+POINT; [void][WbKeys]::GetCursorPos([ref]$old)
  [void][WbKeys]::SetCursorPos([int](($r.L + $r.R) / 2), [int]($r.T + ($r.B - $r.T) * 0.45))
  [void][WbKeys]::Click(); Start-Sleep -Milliseconds 300
  [void][WbKeys]::SetCursorPos($old.X, $old.Y)
}
function FigWin { Get-Process Figma -ErrorAction SilentlyContinue | Where-Object { $_.MainWindowHandle -ne 0 } | Select-Object -First 1 }
function FigFront {
  $h = [WbKeys]::GetForegroundWindow(); $p = 0; [void][WbKeys]::GetWindowThreadProcessId($h, [ref]$p)
  try { return ((Get-Process -Id $p).ProcessName -eq 'Figma') } catch { return $false }
}
function Front {
  for ($i = 0; $i -lt 6; $i++) {
    if (FigFront) { return $true }
    $f = FigWin; if (-not $f) { return $false }
    if ([WbKeys]::IsIconic($f.MainWindowHandle)) { [void][WbKeys]::ShowWindow($f.MainWindowHandle, 9) }
    [void][WbKeys]::SetForegroundWindow($f.MainWindowHandle)
    Start-Sleep -Milliseconds 400
  }
  return (FigFront)
}
function ClipFig {
  try { $h = [System.Windows.Forms.Clipboard]::GetData('HTML Format') } catch { return '' }
  if (-not $h) { return '' }
  if ($h -notmatch '\(figma\)') { return '' }
  $m = [regex]::Match([string]$h, '\(figmeta\)([A-Za-z0-9+/=]+)\(/figmeta\)')
  if (-not $m.Success) { return 'any' }
  try { return [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($m.Groups[1].Value)) } catch { return 'any' }
}
# 옮기기 전 상태(맨 앞 창 · Figma 최소화 여부)를 적고, 끝나면 되돌린다(2026-11-20) — Figma가 뒤 · 최소화 상태로는 복사 · 붙여넣기가 안 되어(창에 키 메시지를 직접 보내도 반응 없음) 잠깐 앞으로 가져올 수밖에 없어서
if ($Do -eq 'state') {
  $f = FigWin; $fg = [WbKeys]::GetForegroundWindow()
  $min = 0; if ($f -and [WbKeys]::IsIconic($f.MainWindowHandle)) { $min = 1 }
  $isFig = 0; if (FigFront) { $isFig = 1 }
  'STATE ' + [int64]$fg + ' ' + $min + ' ' + $isFig; exit 0
}
if ($Do -eq 'restore') {
  $p = $Key.Split(','); $fg = [IntPtr][int64]$p[0]; $min = $p[1] -eq '1'; $wasFig = $p[2] -eq '1'
  $f = FigWin
  if ($min -and $f) { [void][WbKeys]::ShowWindow($f.MainWindowHandle, 6); Start-Sleep -Milliseconds 300 }
  if (-not $wasFig -and $fg -ne [IntPtr]::Zero) { [void][WbKeys]::SetForegroundWindow($fg) }   # 최소화한 뒤에도 쓰던 창을 앞으로(Windows가 아무 창이나 올리지 않게)
  'OK restored'; exit 0
}
if (-not (FigWin)) { 'ERR Figma 데스크톱이 켜져 있지 않음'; exit 2 }
if ($Do -eq 'tab') {
  Start-Process ('figma://file/' + $Key); Start-Sleep -Milliseconds 2500
  if (-not (Front)) { 'ERR Figma 창을 맨 앞으로 가져오지 못함'; exit 3 }
  FocusCanvas
  'OK front'; exit 0
}
if (-not (Front)) { 'ERR Figma 창이 맨 앞이 아님'; exit 3 }
if ($Do -eq 'copy') {
  try { [System.Windows.Forms.Clipboard]::Clear() } catch {}
  [void][WbKeys]::Ctrl(0x43)
  $meta = ''
  for ($i = 0; $i -lt 20; $i++) { Start-Sleep -Milliseconds 300; $meta = ClipFig; if ($meta) { break } }
  if (-not $meta) { $fm = ''; try { $fm = ([System.Windows.Forms.Clipboard]::GetDataObject().GetFormats()) -join ',' } catch {}; 'ERR 복사한 Figma 데이터가 클립보드에 없음(형식: ' + $fm + ')'; exit 4 }
  if ($meta -ne 'any' -and $meta -match '"fileKey"\s*:\s*"([^"]+)"' -and $Matches[1] -ne $Key) { 'ERR 클립보드의 Figma 데이터가 ① 파일 것이 아님'; exit 5 }
  'OK copied'; exit 0
}
if ($Do -eq 'paste') { [void][WbKeys]::Ctrl(0x56); 'OK pasted'; exit 0 }
'ERR 알 수 없는 동작'; exit 9
`;

function run(cmd, args, ms) {
  return new Promise((res) => {
    let out = '', done = false;
    const p = spawn(cmd, args, { windowsHide: true });
    const t = setTimeout(() => { if (!done) { done = true; try { p.kill(); } catch (e) {} res({ code: -1, out: out + '\nERR 시간 넘김' }); } }, ms);
    p.stdout.on('data', (d) => { out += d.toString('utf8'); });
    p.stderr.on('data', (d) => { out += d.toString('utf8'); });
    p.on('close', (code) => { if (done) return; done = true; clearTimeout(t); res({ code, out }); });
    p.on('error', (e) => { if (done) return; done = true; clearTimeout(t); res({ code: -1, out: 'ERR ' + e.message }); });
  });
}

const okKey = (k) => /^[0-9a-zA-Z]{22,128}$/.test(String(k || ''));
let psFile = '';
async function ps(what, key) {
  if (!psFile) { psFile = path.join(os.tmpdir(), 'wb_paste_keys.ps1'); fs.writeFileSync(psFile, '﻿' + PS, 'utf8'); }
  const r = await run('powershell.exe', ['-NoProfile', '-STA', '-ExecutionPolicy', 'Bypass', '-File', psFile, '-Do', what, '-Key', key], 30000);
  const lines = String(r.out || '').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  if (r.code === 0 && lines.some((s) => /^OK /.test(s))) return '';
  const err = lines.find((s) => /^ERR /.test(s));
  return err ? err.slice(4) : ('코드 ' + r.code + (lines.length ? ' · ' + lines.slice(-1)[0].slice(0, 120) : ''));
}

// job: transfer 작업(from.key · to.key). io: { mark(field) → 값, waitAck(field, 값, ms) → bool } — 플러그인과 주고받는 신호(writes.js가 작업 파일로)
// 돌려주는 값: {ok, msg}
async function pasteKeys(job, io) {
  const from = job && job.from && job.from.key, to = job && job.to && job.to.key;
  if (!okKey(from) || !okKey(to)) return { ok: false, msg: '파일 키가 잘못됨' };
  if (busy) return { ok: false, msg: '다른 붙여넣기가 진행 중' };
  busy = true;
  try {
    await new Promise((r) => setTimeout(r, 800));
    if (C.isMac) {
      const front = (k) => run('osascript', ['-e', `open location "figma://file/${k}"`, '-e', 'delay 2.5', '-e', 'tell application "Figma" to activate', '-e', 'delay 0.5'], 30000);
      const key = (c) => run('osascript', ['-e', `tell application "System Events" to keystroke "${c}" using command down`], 15000);
      await front(from);
      if (io && !(await io.waitAck('selAt', io.mark('copyReq'), 20000))) return { ok: false, msg: '① 플러그인이 화면을 다시 고르지 못함(① 탭에서 플러그인이 켜져 있는지)' };
      if ((await key('c')).code !== 0) return { ok: false, msg: '복사 키를 보내지 못함(맥: 시스템 설정 › 개인정보 보호 › 손쉬운 사용에서 허용)' };
      await new Promise((r) => setTimeout(r, 1500));
      await front(to);
      if (io && !(await io.waitAck('prepAt', io.mark('pasteReq'), 20000))) return { ok: false, msg: '② 플러그인이 붙여넣기 준비를 못 함' };
      if ((await key('v')).code !== 0) return { ok: false, msg: '붙여넣기 키를 보내지 못함' };
      return { ok: true, msg: 'pasted' };
    }
    let e = await ps('tab', from); if (e) return { ok: false, msg: e };
    if (io && !(await io.waitAck('selAt', io.mark('copyReq'), 20000))) return { ok: false, msg: '① 플러그인이 화면을 다시 고르지 못함(① 탭에서 플러그인이 켜져 있는지)' };
    await new Promise((r) => setTimeout(r, 500));
    e = await ps('copy', from); if (e) return { ok: false, msg: e };
    e = await ps('tab', to); if (e) return { ok: false, msg: e };
    if (io && !(await io.waitAck('prepAt', io.mark('pasteReq'), 20000))) return { ok: false, msg: '② 플러그인이 붙여넣기 준비를 못 함(② 탭에서 플러그인이 켜져 있는지)' };
    await new Promise((r) => setTimeout(r, 500));
    e = await ps('paste', to); if (e) return { ok: false, msg: e };
    return { ok: true, msg: 'pasted' };
  } catch (err) {
    return { ok: false, msg: String(err && err.message || err).slice(0, 160) };
  } finally { busy = false; }
}

// 옮기기 전 창 상태 → {fg, min, fig} (윈도우만, 맥은 null)
async function winState() {
  if (C.isMac) return null;
  try {
    if (!psFile) { psFile = path.join(os.tmpdir(), 'wb_paste_keys.ps1'); fs.writeFileSync(psFile, '\ufeff' + PS, 'utf8'); }
    const r = await run('powershell.exe', ['-NoProfile', '-STA', '-ExecutionPolicy', 'Bypass', '-File', psFile, '-Do', 'state', '-Key', 'x'], 20000);
    const m = /STATE (-?\d+) ([01]) ([01])/.exec(String(r.out || ''));
    return m ? { fg: m[1], min: m[2] === '1', fig: m[3] === '1' } : null;
  } catch (e) { return null; }
}
// 옮기기가 끝나면(완료 · 실패) 되돌리기: Figma가 최소화돼 있었으면 다시 최소화, 아니면 쓰던 창을 다시 앞으로(그때 Figma를 쓰고 있었으면 그대로)
async function restoreWin(s) {
  if (C.isMac || !s) return;
  // 붙은 화면 놓기가 빨라 「완료」가 키 누르기(pasteKeys)보다 먼저 올 수 있다 — 끝날 때까지 기다린다(20초까지)
  for (let i = 0; busy && i < 40; i++) await new Promise((r) => setTimeout(r, 500));
  await new Promise((r) => setTimeout(r, 500));
  try { await ps('restore', [String(s.fg || 0).replace(/[^\d-]/g, '') || '0', s.min ? '1' : '0', s.fig ? '1' : '0'].join(',')); } catch (e) {}
}
// 탭만 앞으로(키는 누르지 않음): 탭이 뒤에 있으면 그 파일의 플러그인이 거의 멈춰 작업을 늦게 가져간다(시험 2026-11-20).
//  복사 옮기기를 맡기면 ① 탭, ①이 골라 두면 ② 탭을 앞으로 가져와 플러그인을 깨운다. 붙여넣는 중(pasteKeys)에는 하지 않는다
async function showTab(key) {
  if (!okKey(key) || busy) return;
  try {
    if (C.isMac) await run('osascript', ['-e', `open location "figma://file/${key}"`], 15000);
    else await ps('tab', key);
  } catch (e) {}
}

module.exports = { pasteKeys, showTab, winState, restoreWin };
