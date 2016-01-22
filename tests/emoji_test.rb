require_relative "blog_namespace"

require "open-uri"
require "net/http"

class EmojiTest < Blog::Test
  def test_no_emoji
    posts.each do |post|
      content_with_header = File.read(post)
      content = content_with_header.slice(content_with_header.index('---', content_with_header.index('---')+1))
      refute_match(/:[a-zA-Z0-9_]+:/, content, "You have emoji in your post, which we try to avoid")
    end
  end
end