require 'fileutils'
require 'pdfkit'

current_dir = File.dirname(__FILE__)
site_dir = File.join(current_dir, '..', '_site')
temp_dir = File.join(current_dir, '..', 'tmp')
output_dir = File.join(site_dir, 'assets', 'docs')
output_file = File.join(temp_dir, 'resume.pdf')

pdf = nil

PDFKit.configure do |config|
  config.default_options = {
    :page_size => 'Legal',
  }
  # config.root_url = site_dir
  config.verbose = true
end

if Dir.exist? temp_dir
  FileUtils.rm_r temp_dir
end
Dir.mkdir temp_dir

Jekyll::Hooks.register :pages, :post_render do |page|
  if page.name == 'resume.html'
    html = page.output.gsub(/(href|src)=(['"])\/([^\"']*|[^"']*)['"]/, '\1=\2' + site_dir + '/\3\2')
    kit = PDFKit.new(html)
    # puts output_file
    pdf = kit.to_file(output_file)
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  unless pdf.nil?
    puts 'Copying resume to directory'
    FileUtils.cp(output_file, output_dir)
  end
end