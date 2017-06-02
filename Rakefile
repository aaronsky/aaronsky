require 'optparse'
require 'rake/testtask'
require 'html-proofer'

task :default => [:help]
task :rebuild => [:clean, :build]
task :watch => [:clean, :serve]
task :test => [:rebuild, :proof, :integrations]

task :help do

end

task :clean do
  sh 'rm -rf _site .sass-cache tmp'
end

task :build do
  sh 'bundle exec jekyll build -- --verbose'
end

task :serve do
  trap('SIGINT') { puts "\nServer closed." ; exit }
  sh 'bundle exec jekyll serve --no-watch'
end

task :proof do
  HTMLProofer.check_directory('./_site', {
    :allow_hash_href => true,
    :check_html => true,
    :only_4xx => true,
    :check_favicon => true
    }).run
end

task :integrations do
  ruby "tests/test_helper.rb"
end