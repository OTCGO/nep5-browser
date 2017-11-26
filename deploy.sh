#!/bin/bash
export NVM_DIR="/home/qknow/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
cd /var/www/neo-browser
git pull origin master:master
