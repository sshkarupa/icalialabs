FROM ruby:2.2.5

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy just the Gemfile & Gemfile.lock, to be able to install the required gems:
ADD Gemfile* /usr/src/app/

RUN bundle
