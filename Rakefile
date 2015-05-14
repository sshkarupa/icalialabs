namespace :build do

  task :production do
    build_dir_name = "build"
    current_dir = Dir.pwd

    Dir.mkdir(build_dir_name) unless Dir.exist?(build_dir_name)

    # Creates the config.ru file for the rack application to run on heroku
    File.open("#{current_dir}/#{build_dir_name}/config.ru", "w") do |file|
      file.write(
%q{use Rack::Deflater
use Rack::Static,
  :urls => ["/assets/javascripts", "/assets/stylesheets", "/assets/img", "/assets/fonts"],
  :root => "public",
  :index => "index.html",
  :header_rules => [[:all, {'Cache-Control' => 'public, max-age=31536000'}]]

run Proc.new { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=31536000'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
      })
    end
   
    # Creates the Gemfile with the 'rack' gem
    File.open("#{build_dir_name}/Gemfile", "w") do |file|
      file.write(
%Q{# A sample Gemfile
source "https://rubygems.org"

gem 'rack'
        }
      )
    end

    #Copy the contents for the compiled version
    Dir.mkdir("build/public") unless Dir.exist?("build/public")
    FileUtils.cp_r "#{current_dir}/app/.", "#{current_dir}/#{build_dir_name}/public"

    #Runs the bundle command
    puts `cd #{current_dir}/#{build_dir_name} && bundle install`
  end
end
