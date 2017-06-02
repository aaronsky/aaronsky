require 'fileutils'
require 'html-proofer'
require 'optparse'
require 'rake/testtask'

task :default => [:help]
task :rebuild => [:clean, :build]
task :watch => [:rebuild, :serve]
task :test => [:rebuild, :proof, :integrations]

task :help do

end

task :clean do
  sh 'rm -rf _site .sass-cache tmp'
end

task :build do
  sh 'bundle exec jekyll build -- --verbose'
  copy_resume_to_assets
end

task :serve do
  trap('SIGINT') {
    puts "\nServer closed."
    copy_resume_to_assets
    exit 
  }
  sh 'bundle exec jekyll serve --skip-initial-build'
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

def copy_resume_to_assets
  current_dir = File.dirname __FILE__
  site_assets_dir = File.join(current_dir, '_site', 'assets', 'docs')
  project_assets_dir = File.join(current_dir, 'assets', 'docs')
  target_file = File.join(site_assets_dir, 'resume.pdf')
  FileUtils.cp(target_file, project_assets_dir, :verbose => true)
end