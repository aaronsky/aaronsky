require "fileutils"

class TestHelper
  def self.start
    puts "Hello you lovely GitHub blog author person human!
      This is test output from your blog post you just wrote. Unlike most tests in
      life (and code!), it's *totally cool* to fail these tests. They're just here
      to catch anything you might have missed while writing your draft.
      Consider them suggestions rather than things you *need* to do before
      publishing your post.
      Happy shipping!"
    Dir.glob("tests/*_test.rb") { |file|  
      load file
    }
  end
end

TestHelper::start