Icalia Labs - website
===================

This repository is used for the continuous development of www.icalialabs.com, it is based on our [isaki framework](https://github.com/IcaliaLabs/isaki) and it follow its directory structure.

The website's environments are:
	- Development (your localhost)
	- Staging (http://still-lowlands-4892.herokuapp.com/)
	- Production (www.icalialabs.com)

Since the website its built with grunt to make the content more dynamic, after all files compiled you only need to move the "app" folder inside staging or production which are static pages on Heroku, and replace the "public" folder with it, then change the name back to "public".


Data
-------------

The information that is stored in /templates/_data/.yml files are:
	- Projects
	- Members
	- Positions
There is a folder for _posts/, this is intended for the case studies.

SCSS
---------------
There is a separate SCSS for each page, modifications to existing pages are made on _pagename.scss.

Assets
---------------
The assets are added on /templates/assets/ not inside the app/ folder.
The compressed version of the images are compiled inside the app folder.

Any SVG code needs to go inside the /templates/_includes/ folder to keep HTML structure clean.