require_relative "../helpers/test"

require 'pdf-reader'

class PdfTest < Test
    def setup
        @reader = PDF::Reader.new('_site/assets/docs/resume.pdf')
    end
    
    def test_is_one_page
        puts "Testing that resume pdf is one page long\n--------------------------------\n"
        refute @reader.nil?, "\nPDF could not read in for testing"
        refute @reader.page_count != 1, "\nResume length was not 1 page"
    end
end