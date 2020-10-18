.PHONY: clean build dev

clean:
	rm -f public
	rm -f resources

build:
	hugo --cleanDestinationDir --minify
	sed -i '' 's/https\:\/\/skyaaron\.com\/sass/..\/sass/' public/resume/index.html
	sed -i '' 's/\/images/..\/images/' public/resume/index.html
	wkhtmltopdf --margin-top 0.30in --margin-bottom 0.30in --margin-left 0.65in --margin-right 0.65in public/resume/index.html public/files/resume.pdf
dev:
	hugo serve -D


