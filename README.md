[![Code Climate](https://codeclimate.com/github/IcaliaLabs/icalialabs/badges/gpa.svg)](https://codeclimate.com/github/IcaliaLabs/icalialabs)
[![Issue Count](https://codeclimate.com/github/IcaliaLabs/icalialabs/badges/issue_count.svg)](https://codeclimate.com/github/IcaliaLabs/icalialabs)

# Icalia Labs Website

## Table of contents

- [Overview](#overview)
- [Installing Docker](#installing-docker)
- [Running the app](#running-the-app)
- [Run production locally](#run-production-locally)
- [Stopping the app](#stopping-the-app)

## Overview

This guide will help you get started to setup the project using Docker, and keep using it as part of your development process.

## Installing Docker

The first thing you need to do before start is to install `Docker` and `docker-compose`. 

[Download](https://www.docker.com/products/docker)

If Docker was successfully installed, you should be good to go.

## Running the app

To run the app you have to run the following commands:

```
% docker-compose run --rm web bundle
```

And once the process is done, you can simply lift the server:

```
% docker-compose up -d
```

That command will lift the server which you should be able to see on the browser by going to:

[http://localhost:4567/](http://localhost:4567/)

It may take a while before you see anything, you can follow the logs of the containers with:

```
% docker-compose logs
```

Once you see an output like this:

```
Creating tecsite_web_1
Attaching to tecsite_web_1
web_1  | /usr/local/bundle/gems/middleman-livereload-3.4.6/lib/middleman-livereload/reactor.rb:14: warning: toplevel constant Mutex referenced by Thread::Mutex
web_1  | == The Middleman is loading
web_1  | == LiveReload accepting connections from ws://172.21.0.2:35729
web_1  | == View your site at "http://0.0.0.0:4567"
web_1  | == Inspect your site configuration at "http://0.0.0.0:4567/__middleman"
```

## Run production locally

In order to simulate the website for the production environment, to prevent unnecessary pushes we provide a container with a deployment-like configuration, to run it just:

```console
% docker-compose up --build production
```

Then just navigate to [http://localhost:4040](http://localhost:4040) and you should be good to go.

**You must stop and lift the container with the previous command for each change.**

## Stopping the app

To stop de application you can just run the following command:

```
% docker-compose stop
```
