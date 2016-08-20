require 'net/http'
require 'json'
require 'uri'
require 'base64'

if ENV['TRAVIS_TAG']? || ENV['TRAVIS_PULL_REQUEST']?
  exit
then

hostname = 'https://api.github.com/'
repo_slug = ENV['TRAVIS_REPO_SLUG']
api_path = "repos/#{repo_slug}/contents/assets/docs/resume.pdf"
uri = URI.parse("#{hostname}#{api_path}")
username = ENV['CI_USERNAME']
password = ENV['CI_GH_TOKEN']
client = Net::HTTP.new(uri.hostname, uri.port)

puts "Beginning deploy to #{uri}"

get_request = Net::HTTP::Get.new(uri.request_uri)
get_request.basic_auth username, password unless username.nil?
update_request['Content'] = 'application/json'
get_response = client.request(get_request)
get_response_body = JSON.parse(get_response.body)
file_sha = get_response_body["sha"]

puts "PDF file sha is #{file_sha}"

pdf_file_path = "#{TRAVIS_BUILD_DIR}/_site/assets/docs/resume.pdf"
pdf_file = File.open(pdf_file_path, 'rb')
encoded_file = Base64.encode64(pdf_file)

puts "PDF file successfully encoded"

body = {
  message: "Update resume in repo after passing CI.\n\n[skip ci]",
  committer: {
    name: ENV['CI_AUTHOR'],
    email: ENV['CI_EMAIL']
  },
  content: encoded_file,
  sha: file_sha,
  branch: ENV['TRAVIS_BRANCH']
}

update_request = Net::HTTP::Put.new(uri.request_uri)
update_request.basic_auth username, password unless username.nil?
update_request['Content'] = 'application/json'
update_request.body = body.to_json
update_response = client.request(update_request)

puts update_response.body

if update_response.code != 200
  puts "Update PDF file failed with a #{update_response.code} code"
end
