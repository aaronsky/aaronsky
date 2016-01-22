require 'rake/testtask'

task :default => [:rebuild]
task :rebuild => [:clean, :build]

task :clean do
  sh 'rm -rf _site .sass-cache'
end

task :build do
  sh 'bundle exec jekyll build'
end

task :test do
  ruby "tests/test_helper.rb"
end