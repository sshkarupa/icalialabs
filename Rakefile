namespace :build do

  task :production do
    build_dir_name = "build"
    current_dir = Dir.pwd

    Dir.mkdir(build_dir_name) unless Dir.exist?(build_dir_name)

    # Creates the config.ru file for the rack application to run on heroku
    File.open("#{current_dir}/#{build_dir_name}/config.ru", "w") do |file|
      file.write(
%Q{use Rack::Static,
  :urls => [""],
  :root => "public",
  :index => "index.html"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
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
    FileUtils.cp_r "#{current_dir}/app/.", "#{current_dir}/#{build_dir_name}"

    #Runs the bundle command
    puts `cd #{current_dir}/#{build_dir_name} && bundle install`
  end
end
