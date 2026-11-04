/**
 * 일정/작업 ↔ 구글 시트 연결 (Apps Script 웹 앱)
 *
 * 프로그램(Figma AI Run 서버)이 이 웹 앱을 거쳐 시트를 읽고(탭 값 그대로) 고친 칸을 씁니다.
 * 시트는 공개하지 않습니다. 웹 앱은 「나(시트 소유자)」 권한으로 실행되고, 비밀값(TOKEN)이 맞는 요청만 받습니다.
 *
 * 설치(한 번, 시트 편집 권한이 있는 사람):
 *   1. 구글 시트 > 확장 프로그램 > Apps Script 를 열고, 이 파일 내용을 Code.gs 에 붙여 넣고 저장
 *   2. 왼쪽 [프로젝트 설정](톱니) > 스크립트 속성 > 속성 추가: 이름 TOKEN, 값 = 아무도 모를 긴 글(예: 32자 이상 무작위)
 *   3. 오른쪽 위 [배포] > 새 배포 > 유형 「웹 앱」, 실행 사용자 「나」, 액세스 권한 「모든 사용자」 > 배포 > 권한 허용
 *   4. 나온 웹 앱 URL(https://script.google.com/macros/s/…/exec)과 TOKEN 값을 프로그램 「일정/작업」의 [시트 연결]에 넣기
 *   스크립트를 고치면 [배포] > 배포 관리 > 수정 > 버전 「새 버전」으로 다시 배포합니다(URL은 그대로).
 *
 * 요청(POST JSON):
 *   {token, action:'sheets'}                         → {sheets:[{name, gid}]}
 *   {token, action:'read', gid:425564699 | sheet:'탭 이름', style:1}  → {name, gid, values:[[화면에 보이는 값…]…], fx:[[행, 열] 수식 칸(0부터)…], at}
 *        style:1이면 + bg · fc · fw(배경 · 글자색 · 굵기), hr · hc(숨긴 행 · 열), mg([행, 열, 행 수, 열 수] 병합), dv([행, 열, 목록 번호] 드롭다운 칸) · dvl(고를 값 목록), fzr · fzc(고정 행 · 열)
 *   {token, action:'write', gid | sheet, cells:[{row, col, value}]}  → {ok:true, n}   (row · col 은 1부터)
 */
// 시트 ID: 시트에 붙인 스크립트(확장 프로그램 › Apps Script)면 쓰지 않는다. 따로 만든 스크립트면 이 시트를 연다
//  (다른 시트를 쓰려면 스크립트 속성 SHEET_ID에 그 시트 ID를 넣는다)
var SHEET_ID = '1S5tPFtNn77FLcaVBvWFO-Z48St2NxovfOoldWf6jO1w';

function doPost(e) {
  var p = {};
  try { p = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (x) { return out({ error: 'JSON 형식이 아닙니다.' }); }
  return run(p);
}
function doGet(e) { return run((e && e.parameter) || {}); }
function run(p) { try { return out(handle(p)); } catch (x) { return out({ error: '시트 스크립트 오류: ' + (x && x.message ? x.message : x) }); } }

function handle(p) {
  var props = PropertiesService.getScriptProperties();
  var token = props.getProperty('TOKEN');
  if (!token || p.token !== token) return { error: '연결 비밀값(TOKEN)이 맞지 않습니다.' };
  var ss = SpreadsheetApp.getActive() || SpreadsheetApp.openById(props.getProperty('SHEET_ID') || SHEET_ID);
  if (p.action === 'sheets') return { sheets: ss.getSheets().map(function (s) { return { name: s.getName(), gid: s.getSheetId() }; }) };
  var sh = null;
  if (p.gid !== undefined && p.gid !== '') sh = ss.getSheets().filter(function (s) { return String(s.getSheetId()) === String(p.gid); })[0] || null;
  if (!sh && p.sheet) sh = ss.getSheetByName(String(p.sheet));
  if (!sh) return { error: '시트 탭을 찾지 못했습니다: ' + (p.sheet || p.gid) };
  if (p.action === 'read') {
    var r = sh.getDataRange(), nr = r.getNumRows(), nc = r.getNumColumns(), fx = [], f = r.getFormulas();
    for (var i = 0; i < f.length; i++) for (var j = 0; j < f[i].length; j++) if (f[i][j]) fx.push([i, j]);   // 수식 칸(프로그램에서 고치지 않게)
    var o = { name: sh.getName(), gid: sh.getSheetId(), values: r.getDisplayValues(), fx: fx, at: new Date().toISOString() };
    if (p.style) {   // 시트 모양: 배경 · 글자색 · 굵기(흰색 · 검정 · 보통은 ''), 숨긴 행 · 열, 병합, 드롭다운 칸, 고정 행 · 열(모두 0부터)
      o.bg = r.getBackgrounds().map(function (row) { return row.map(function (c) { return c === '#ffffff' ? '' : c; }); });
      o.fc = r.getFontColors().map(function (row) { return row.map(function (c) { return c === '#000000' ? '' : c; }); });
      o.fw = r.getFontWeights().map(function (row) { return row.map(function (c) { return c === 'bold' ? 1 : 0; }); });
      var hid = hiddenRC(ss, sh, nr, nc); o.hr = hid.r; o.hc = hid.c;
      o.mg = r.getMergedRanges().map(function (m) { return [m.getRow() - 1, m.getColumn() - 1, m.getNumRows(), m.getNumColumns()]; });
      // 드롭다운 칸 [행, 열, 고를 값 목록 번호] + 목록 dvl (목록 · 범위로 정한 드롭다운만, 같은 목록은 한 번만)
      o.dv = []; o.dvl = []; var dv = r.getDataValidations(), lk = {};
      for (var x = 0; x < dv.length; x++) for (var y = 0; y < dv[x].length; y++) {
        var d = dv[x][y]; if (!d) continue;
        var t = d.getCriteriaType(), vals = null;
        try {
          if (t === SpreadsheetApp.DataValidationCriteria.VALUE_IN_LIST) vals = d.getCriteriaValues()[0];
          else if (t === SpreadsheetApp.DataValidationCriteria.VALUE_IN_RANGE) vals = [].concat.apply([], d.getCriteriaValues()[0].getDisplayValues()).filter(String);
        } catch (e) { vals = null; }
        var idx = -1;
        if (vals) { var key = JSON.stringify(vals); if (!(key in lk)) { lk[key] = o.dvl.length; o.dvl.push(vals.map(String)); } idx = lk[key]; }
        o.dv.push([x, y, idx]);
      }
      o.fzr = sh.getFrozenRows(); o.fzc = sh.getFrozenColumns();
    }
    return o;
  }
  if (p.action === 'write') {
    var cells = p.cells || [], n = 0;
    var lock = LockService.getDocumentLock() || LockService.getScriptLock(); lock.waitLock(20000);   // 따로 만든 스크립트는 문서 잠금이 없다
    try {
      cells.forEach(function (c) {
        var row = Number(c.row), col = Number(c.col);
        if (row >= 1 && col >= 1) { sh.getRange(row, col).setValue(c.value); n++; }
      });
      SpreadsheetApp.flush();
    } finally { lock.releaseLock(); }
    return { ok: true, n: n };
  }
  return { error: '알 수 없는 action: ' + p.action };
}
// 숨긴 행 · 열: Sheets API 한 번으로(행 · 열마다 물으면 수십 초 걸림). 안 되면 하나씩
function hiddenRC(ss, sh, nr, nc) {
  var r = [], c = [];
  try {
    var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + ss.getId() + '?ranges=' + encodeURIComponent("'" + sh.getName().replace(/'/g, "''") + "'") +
      '&fields=' + encodeURIComponent('sheets(data(rowMetadata(hiddenByUser,hiddenByFilter),columnMetadata(hiddenByUser)))');
    var res = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
    if (res.getResponseCode() !== 200) throw new Error(res.getContentText().slice(0, 200));
    var d = (JSON.parse(res.getContentText()).sheets[0].data || [])[0] || {};
    (d.rowMetadata || []).forEach(function (m, i) { if (i < nr && (m.hiddenByUser || m.hiddenByFilter)) r.push(i); });
    (d.columnMetadata || []).forEach(function (m, i) { if (i < nc && m.hiddenByUser) c.push(i); });
    return { r: r, c: c };
  } catch (x) {
    r = []; c = [];
    for (var a = 1; a <= nr; a++) if (sh.isRowHiddenByUser(a) || sh.isRowHiddenByFilter(a)) r.push(a - 1);
    for (var b = 1; b <= nc; b++) if (sh.isColumnHiddenByUser(b)) c.push(b - 1);
    return { r: r, c: c };
  }
}
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
