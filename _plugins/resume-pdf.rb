require 'fileutils'
require 'pdfkit'

current_dir = File.dirname(__FILE__)
site_dir = File.join(current_dir, '..', '_site')
output_dir = File.join(site_dir, 'assets', 'docs')
output_file = File.join(output_dir, 'resume.pdf')

pdf = nil

PDFKit.configure do |config|
  # config.wkhtmltopdf = '/usr/local/bin/wkhtmltopdf' if ENV['CI']
  config.default_options = {
    :page_size => 'Letter',
  }
  config.verbose = true
end

##
# if Dir.exist? temp_dir
#   FileUtils.rm_r temp_dir
# end
# Dir.mkdir temp_dir

Jekyll::Hooks.register :site, :post_write do |site|
  page = site.pages.find { |page| page.name == "resume.html" }
  if page
    html = page.output.gsub(/(href|src)=(['"])\/([^\"']*|[^"']*)['"]/, '\1=\2' + site_dir + '/\3\2')
    kit = PDFKit.new(html)
    pdf = kit.to_file(output_file)
  end
end