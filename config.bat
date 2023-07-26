@echo off

mkdir current_status
echo.> .env
type .env.example >> .env
npm install