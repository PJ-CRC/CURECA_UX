# 깃허브 연결 (윈도우): 시작 안내 6단계 [깃허브 연결]이 창으로 띄운다. 한 번이면 끝난다
#  1. git이 없으면 winget으로 설치한다(이 창에서 진행 · 동의)
#  2. 작업 이력 저장소(workbench/git_remote.txt)의 history 브랜치에 연결한다 (history_sync.ps1 -Interactive)
#     로그인 정보가 없으면 Git Credential Manager가 브라우저 로그인 창을 띄운다(토큰 불필요). 로그인은 PC에 저장된다
$Root = Split-Path $PSScriptRoot -Parent
$Stat = Join-Path $PSScriptRoot '.history_sync.json'
function Fail($m) { Write-Host ''; Write-Host "  [실패] $m" -ForegroundColor Red; Write-Host ''; Read-Host '  Enter를 누르면 창을 닫습니다' | Out-Null; exit 1 }
function Find-Git {
  if (Get-Command git -ErrorAction SilentlyContinue) { return $true }
  foreach ($d in "$env:ProgramFiles\Git\cmd", "$env:LOCALAPPDATA\Programs\Git\cmd") { if (Test-Path (Join-Path $d 'git.exe')) { $env:PATH = "$d;$env:PATH"; return $true } }
  return $false
}
$Host.UI.RawUI.WindowTitle = 'Workbench · 깃허브 연결'
Write-Host ''
Write-Host '  Workbench · 깃허브 연결' -ForegroundColor Cyan
Write-Host '  -----------------------------'
Write-Host ''

# 1. git
if (-not (Find-Git)) {
  if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
    Start-Process 'https://git-scm.com/download/win'
    Fail 'git 설치 페이지를 열었습니다. 설치한 뒤 [깃허브 연결]을 다시 누르세요.'
  }
  Write-Host '  [1/2] git을 설치합니다. 동의를 물으면 Y를 누르세요.'
  & winget install --id Git.Git -e --source winget
  if (-not (Find-Git)) { Fail 'git 설치를 마치지 못했습니다. 다시 누르세요.' }
}
Write-Host '  [1/2] git 준비됨' -ForegroundColor Green

# 2. 로그인 · 연결
#  이미 저장된 깃허브 로그인(Git Credential Manager)이 있으면 그대로 쓸지 묻는다. 다른 계정을 고르면 저장된 로그인을 지워 로그인 창이 다시 뜨게 한다
Write-Host ''
$acc = @(& git credential-manager github list 2>$null | ForEach-Object { "$_".Trim() } | Where-Object { $_ })
if ($acc.Count) { Write-Host ('  [2/2] 지금 저장된 깃허브 계정: ' + ($acc -join ', ')) }
else { Write-Host '  [2/2] 이 PC에 저장된 깃허브 로그인이 있으면 그 계정으로 연결됩니다.' }
$ans = Read-Host '        이 계정으로 연결하려면 Enter, 다른 계정으로 로그인하려면 2'
if ($ans.Trim() -eq '2') {
  foreach ($a in $acc) { & git credential-manager github logout $a 2>$null | Out-Null }
  "protocol=https`nhost=github.com`n`n" | & git credential reject 2>$null
  Write-Host '        저장된 로그인을 지웠습니다. 곧 뜨는 로그인 창에서 연결할 계정으로 로그인하세요.'
  Write-Host '        (브라우저에 다른 계정이 로그인돼 있으면 먼저 그 계정에서 로그아웃하거나 계정을 전환하세요.)'
}
Write-Host ''
Write-Host '        작업 이력 저장소에 연결합니다. 깃허브 로그인 창이 뜨면 [Sign in with your browser]를 누르고 연결할 계정으로 로그인 · 승인하세요.'
Write-Host ''
& powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot 'history_sync.ps1') -Interactive
$st = $null; try { $st = [IO.File]::ReadAllText($Stat, (New-Object Text.UTF8Encoding $false)) | ConvertFrom-Json } catch {}
if (-not $st -or -not $st.ok) { Fail $(if ($st) { $st.message } else { '연결하지 못했습니다. 다시 누르세요.' }) }
Write-Host "  [완료] $($st.message) 이 창은 5초 뒤 닫힙니다." -ForegroundColor Green
Start-Sleep 5
