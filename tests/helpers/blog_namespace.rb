require "fileutils"
require "rubygems"
require "bundler/setup"
require "minitest/autorun"
require "fastimage"
require "nokogiri"
require "redcarpet"

module Blog
  class Test < MiniTest::Test
    # All the posts we're interested in checking. This means we're looking at
    # files that have changed on this particular branch we're on.
    #
    # Returns an Array of String filenames.
    def posts
      posts = Dir.glob("_posts/*.md")
      posts
    end
  end
end