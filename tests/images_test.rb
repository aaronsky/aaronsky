require_relative "blog_namespace"

require "open-uri"
require "net/http"

class ImagesTest < Blog::Test
  def setup
    @images = posts.map do |post|
      content = File.read(post)
      md      = Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, tables: true)
      html    = md.render(content)
      doc     = Nokogiri::HTML(html)

      doc.css("img").map do |img|
        url      = img.attribute("src").value
        uri      = URI(url)
        response = Net::HTTP.get_response(uri)

        { :url => url, :response => response, :element => img }
      end
    end.flatten
  end

  def test_images_arent_too_big
    large_images = @images.select { |img| img[:response].body.size.to_i > 1_000_000 }

    error_message = large_images.map do |img|
      "  #{img[:response].body.size} bytes: #{img[:url]}"
    end.join("\n")

    assert large_images.empty?,
      "The following images are over a megabyte in size... consider shrinking them:\n\n#{error_message}"
  end

  def test_images_have_alt_tags
    @images.select do |img|
      alt = img[:element].attribute("alt").value
      no_alt_tags = (alt.strip == "" || (alt =~ /^screen shot /))

      refute no_alt_tags,
        "Images need an alt tag for accessibility. Your image should have a short, one or two word description of the image in the ![] parts of your post."
    end
  end

  def test_images_are_dotcom_hosted
    @images.select do |img|
      url = img[:url]

      assert_match /^https:\/\/cloud\.githubusercontent\.com/, url,
        "Images should be hosted on GitHub. Try dragging an image into an issue comment, uploading it, and using that URL."
    end
  end

  def test_image_proportions
    @images.select do |img|
      width, height = FastImage.size(img[:url])

      assert width >= 1354,
        "Screenshots should be retina-quality — meaning at least 1354 pixels across — so they look good on higher-resolution screens. If you're taking a shot of a small interface element, consider zooming the page with cmd+plus and taking a screenshot that way; the blog will scale it down for you."

      assert (width/height.to_f) > 1.2,
        "Screenshots should be roughly panoramic (more than a 1.2 width:height ratio). Try taking a wider, shorter screenshot so it reduces the amount of scoll necessary to view the content of the blog post."
    end
  end
end