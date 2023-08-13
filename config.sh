#!/bin/bash

npm install
mkdir current_status
touch .env
cat .env.example >> .env
