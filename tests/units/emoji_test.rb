require_relative "../helpers/test"

require "open-uri"
require "net/http"

class EmojiTest < Blog::BlogTest
  def test_no_emoji
    puts "Testing for emoji in #{posts.length} posts\n----------------------------\n"
    posts.each do |post|
      print "Processing #{post}......"
      content_with_header = File.read(post)
      index = content_with_header.index('---', content_with_header.index('---')+1)+5
      content = content_with_header[index..-1]
      refute_match(/:[a-zA-Z0-9_]+:/, content, "\nYou have emoji in your post, which we try to avoid")
      puts "No problems found"
    end
    puts "------\n"
  end
end