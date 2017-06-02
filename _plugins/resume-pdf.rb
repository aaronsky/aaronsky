require 'pdfkit'

current_dir = File.dirname(__FILE__)
project_root = File.join(current_dir, '..')
assets_dir = File.join(project_root, 'assets')
assets_docs_dir = File.join(assets_dir, 'docs')
site_dir = File.join(project_root, '_site')
site_assets_dir = File.join(site_dir, 'assets')
site_assets_docs_dir = File.join(site_assets_dir, 'docs')

output_file = File.join(site_assets_docs_dir, 'resume.pdf')
pdf = nil
scrubbed_html = nil

PDFKit.configure do |config|
  config.wkhtmltopdf = ENV['WKHTMLTOPDF_CMD'] if ENV['CI']
  config.default_options = {
    page_size: 'Letter'
  }
  config.verbose = ENV.has_key? 'CI'
end

Jekyll::Hooks.register :pages, :post_write do |page|
  next if page.name != 'resume.html'
  scrubbed_html = page.output.gsub(/(href|src)=(['"])\/([^\"']*|[^"']*)['"]/, '\1=\2' + site_dir + '/\3\2')
end

Jekyll::Hooks.register :site, :post_write do |site|
  next if scrubbed_html.nil?
  kit = PDFKit.new(scrubbed_html)
  pdf = kit.to_file(output_file)
end
