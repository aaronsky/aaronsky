require_relative "../helpers/test"

class TodayTest < Blog::BlogTest
  def test_doesnt_start_with_today
    puts "Testing for bad style in #{posts.length} posts\n--------------------------------\n"
    posts.each do |post|
      print "Processing #{post}......"
      content = File.read(post)
      index = content.index('---', content.index('---')+1)+5
      content = content[index..-1]

      body_text = content.split("\n").delete_if do |line|
        line[0] == "#" || line.strip == ""
      end

      refute body_text.first =~ /Today/, "\nPosts usually shouldn't start with \"Today\""
      puts "No problems found"
    end
    puts "------\n"
  end
end