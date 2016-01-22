require "fileutils"

class TestHelper
  def self.start
    Dir.glob("tests/units/*_test.rb") do |file|  
      load file
    end
  end
end

TestHelper::start