@echo off

mkdir current_status
echo.> state.json
echo.> .env
move state.json current_status
type .env.example >> .env
npm install