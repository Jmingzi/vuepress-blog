#!/usr/bin/env sh
set -e
echo 'git pull ...'
git reset --hard origin/master
git clean -f
git pull
npm install
npm run docs:build
# echo 'git pull complete ...'

# echo 'npm run build ...'
# npm run build

# echo 'npm restart ...'
# pm2 restart start
# pm2 restart build
