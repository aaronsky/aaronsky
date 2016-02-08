require 'optparse'
require 'rake/testtask'

task :default => [:help]
task :rebuild => [:clean, :build]
task :watch => [:clean, :serve]

task :help do
    
end

task :clean do
  sh 'rm -rf _site .sass-cache tmp'
end

task :build do
  sh 'bundle exec jekyll build'
end

task :serve do
  sh 'bundle exec jekyll serve'
end

task :test do
  ruby "tests/test_helper.rb"
end