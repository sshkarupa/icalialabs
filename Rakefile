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
ruby '2.2.1'
source "https://rubygems.org"

gem 'rack'
gem 'puma'
        }
      )
    end

    # Creates the Prcofile
    File.open("#{build_dir_name}/Procfile", "w") do |file|
      file.write(
%Q{web: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-development}}
      )
    end

    #Copy the contents for the compiled version
    Dir.mkdir("build/public") unless Dir.exist?("build/public")
    FileUtils.cp_r "#{current_dir}/app/.", "#{current_dir}/#{build_dir_name}/public"

    #Runs the bundle command
    puts `cd #{current_dir}/#{build_dir_name} && bundle install`
  end
end

namespace :deploy do

  task :staging do
    Dir.mkdir("../icalia-website") unless Dir.exist?("../icalia-website")

    FileUtils.cp_r "build/.", "../icalia-website"

    Dir.chdir("../icalia-website") do
      puts "Commiting..."
      puts `git add .`
      puts `git commit -am "Deploy to staging"`
      puts "Deploying..."
      puts `git push staging master`
    end
  end
end
