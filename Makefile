.PHONY: clean build dev

clean:
	rm -rf public
	rm -rf resources

build:
	hugo --cleanDestinationDir --minify
	sed -i.bak 's/\/images/..\/..\/images/' public/resume/document/index.html
	sed -i.bak 's/\/sass/..\/..\/sass/' public/resume/document/index.html
	wkhtmltopdf --dpi 300 --margin-top 0.30in --margin-bottom 0.30in --margin-left 0.65in --margin-right 0.65in public/resume/document/index.html public/files/resume.pdf
	rm -r public/resume/document

dev:
	hugo serve -D
