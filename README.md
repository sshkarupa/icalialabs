Icalia Labs - website
===================

This repository is used for the continuous development of www.icalialabs.com, it is based on Middleman (https://middlemanapp.com) and it follows its directory structure.

The website's environments are:
- Development (your localhost)
- Staging (https://icalia-staging.herokuapp.com/)
- Production (www.icalialabs.com)

Data
----------------

The information that is stored in /_data/.yml files are:
- Projects
- Members
- Positions

Source
----------------

To modify anything use the files inside the source folder, these are all the partials, layouts and stylesheets we are using.

SCSS
----------------

We divided the scss in partials for each screen, so it would be easier to modify or add new styles, and we put all the common code in the _base.scss stylesheet.

Images
----------------

To add or remove any image, you have to ask for acces to amazon, that's were we keep all the images.

Initiating and Deploying
----------------

To run the project you have to run $ middleman server or $ bundle exec middleman

To deploy it to staging you have to push your changes to your branch and then push them to staging, $ git push staging HEAD:master

To deploy to production is the same, push your changes to your branch and then to productions $ git push production HEAD:master

*You have to have access to Heroku to deploy to staging or production.







