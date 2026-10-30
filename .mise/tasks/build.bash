#!/usr/bin/env bash

set -euo pipefail

hugo --cleanDestinationDir --minify

sed -i.bak 's/\/images/..\/..\/images/' public/resume/document/index.html
sed -i.bak 's/\/sass/..\/..\/sass/' public/resume/document/index.html

playwright install
playwright pdf \
    "file://$(pwd)/public/resume/document/index.html" \
    public/files/resume.pdf

rm -r public/resume/document
