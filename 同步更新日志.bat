@echo off
chcp 936 >nul
setlocal
title 同步更新日志到游戏目录

rem 调用 tools\sync_changelog.ps1：解析 CHANGELOG.md 的 [当前版本] 标记并同步到游戏目录
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\sync_changelog.ps1"
if errorlevel 1 (
    echo.
    echo [提示] 同步失败，请看上面的错误信息。
)
echo.
pause
