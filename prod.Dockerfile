FROM ruby:2.3.3

ENV LC_ALL C.UTF-8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy just the Gemfile & Gemfile.lock, to be able to install the required gems:
ADD Gemfile* /usr/src/app/

RUN bundle

ADD . /usr/src/app/

RUN middleman build
