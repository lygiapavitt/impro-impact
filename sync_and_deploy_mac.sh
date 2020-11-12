#!/bin/sh

function pause() {
 read -s -n 1 -p "Press any key to continue . . ."
 echo ""
}

python sync_and_deploy.py
pause