#!/bin/sh

function pause() {
 read -s -n 1 -p "Press any key to continue . . ."
 echo ""
}

python ../git_sync.py
pause