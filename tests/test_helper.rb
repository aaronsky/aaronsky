require "fileutils"

Dir.glob("tests/units/*_test.rb") { |file| load file }