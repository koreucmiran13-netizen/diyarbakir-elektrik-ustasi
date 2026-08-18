#!/usr/bin/env bash
set -euo pipefail

# VDS deployment: Diyarbakir Elektrik Ustasi -> port 3000
APP_DIR="/var/www/diyarbakir-elektrikustasi"
cd "$APP_DIR"

git fetch origin main
git reset --hard origin/main
npm install --legacy-peer-deps
npm run build
systemctl restart diyarbakir-elektrikustasi
curl -fsS http://127.0.0.1:3000/ >/dev/null
echo "Diyarbakir Elektrik Ustasi deploy tamamlandi: $(date -Is)"
