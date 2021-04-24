.PHONY: clean format build dev htmltest htmltest_fetch htmltest_run

clean:
	rm -rf bin public resources tmp

format:
	./node_modules/.bin/prettier --write .

build:
	hugo --cleanDestinationDir --minify
	sed -i.bak 's/\/images/..\/..\/images/' public/resume/document/index.html
	sed -i.bak 's/\/sass/..\/..\/sass/' public/resume/document/index.html
	wkhtmltopdf --dpi 300 --margin-top 0.30in --margin-bottom 0.30in --margin-left 0.65in --margin-right 0.65in public/resume/document/index.html public/files/resume.pdf
	rm -r public/resume/document

dev:
	hugo serve -D

htmltest: htmltest_fetch htmltest_run

htmltest_fetch:
	curl https://htmltest.wjdp.uk | bash

htmltest_run:
	./bin/htmltest -c htmltest.yml
