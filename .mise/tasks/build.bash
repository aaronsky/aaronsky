#!/usr/bin/env bash

hugo --cleanDestinationDir --minify
sed -i.bak 's/\/images/..\/..\/images/' public/resume/document/index.html
sed -i.bak 's/\/sass/..\/..\/sass/' public/resume/document/index.html
wkhtmltopdf \
    --dpi 300 \
    --margin-top 0.5in \
    --margin-bottom 0.5in \
    --margin-left 0.5in \
    --margin-right 0.5in \
    --disable-local-file-access \
    --allow public/ \
    public/resume/document/index.html \
    public/files/resume.pdf
rm -r public/resume/document
