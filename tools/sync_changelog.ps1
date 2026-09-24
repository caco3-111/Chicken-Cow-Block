# ============================================================
#  更新日志工具（tools\sync_changelog.ps1）
#   1) 从 CHANGELOG.md 找出标题里带 [当前版本] 标记的那一条
#   2) 生成 config\fancymenu\current_version.txt（主界面左下角那行字读它）
#   3) 把 CHANGELOG.md 和 config\fancymenu 复制进游戏目录
#
#  用法：双击上一级目录的「同步更新日志.bat」，或直接：
#       powershell -NoProfile -ExecutionPolicy Bypass -File tools\sync_changelog.ps1
# ============================================================

param(
    [string]$GameDir  = 'D:\Minecraft\.minecraft\versions\Chicken Cow Block',
    [string]$PackName = 'Chicken Cow Block',
    [string]$Marker   = '[当前版本]'
)

$ErrorActionPreference = 'Stop'

$root          = Split-Path -Parent $PSScriptRoot
$changelogPath = Join-Path $root 'CHANGELOG.md'
$versionDir    = Join-Path $root 'config\fancymenu'
$versionPath   = Join-Path $versionDir 'current_version.txt'

if (-not (Test-Path -LiteralPath $changelogPath)) {
    Write-Host ('[错误] 找不到 ' + $changelogPath)
    exit 1
}

$lines  = [IO.File]::ReadAllLines($changelogPath, [Text.Encoding]::UTF8)
$titles = New-Object System.Collections.ArrayList
foreach ($line in $lines) {
    if ($line -match '^##\s+(.+)$') { [void]$titles.Add($Matches[1].Trim()) }
}

if ($titles.Count -eq 0) {
    Write-Host '[错误] CHANGELOG.md 里没有任何 "## 标题"，无法确定当前版本'
    exit 1
}

$current = $null
foreach ($t in $titles) {
    if ($t.Contains($Marker)) { $current = $t; break }
}
$usedMarker = $true
if ($null -eq $current) { $current = $titles[0]; $usedMarker = $false }

$version = ($current -replace [regex]::Escape($Marker), '').Trim()
if ($version -match '(v?\d+(?:\.\d+)+)') { $version = $Matches[1] }

if (-not (Test-Path -LiteralPath $versionDir)) { New-Item -ItemType Directory -Force -Path $versionDir | Out-Null }
$display = $PackName + ' ' + $version
[IO.File]::WriteAllText($versionPath, $display, (New-Object Text.UTF8Encoding($false)))

Write-Host ''
if ($usedMarker) {
    Write-Host ('  [1/3] 当前版本标记 : ' + $Marker + '  命中 -> ' + $current)
} else {
    Write-Host ('  [1/3] 当前版本标记 : 没找到 ' + $Marker + '，改用第一条标题 -> ' + $current)
}
Write-Host ('  [2/3] 主界面将显示 : ' + $display + '   (' + $versionPath + ')')

if (-not (Test-Path -LiteralPath $GameDir)) {
    Write-Host ('  [错误] 找不到游戏目录: ' + $GameDir)
    Write-Host '         版本文件已生成，但没有同步到游戏目录。'
    exit 1
}

Copy-Item -LiteralPath $changelogPath -Destination (Join-Path $GameDir 'CHANGELOG.md') -Force
$src = Join-Path $root 'config\fancymenu'
$dst = Join-Path $GameDir 'config\fancymenu'
if (Test-Path -LiteralPath $src) {
    if (-not (Test-Path -LiteralPath $dst)) { New-Item -ItemType Directory -Force -Path $dst | Out-Null }
    Copy-Item -Path (Join-Path $src '*') -Destination $dst -Recurse -Force
}
Write-Host ('  [3/3] 已同步到     : ' + $GameDir)
Write-Host ''
Write-Host '  重启游戏即可看到新的版本号与更新日志内容。'
Write-Host ''
