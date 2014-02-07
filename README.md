Trigger
=======

### Version: 0.4
### Status: Unstable



Uh?
---

Trigger is a lightweight HTML5 & SASS boilerplate sitting on top of [Grunt.js](http://gruntjs.com/) to automatically combine and minify all JavaScript, optimise images, and run SASS.

Trigger is based on [the HTML5 Boilerplate](http://html5boilerplate.com/), with some of the guff stripped out, and some [SASS](http://sass-lang.com/), [Bourbon Mixins](http://bourbon.io/), [Bourbon Neat grid](http://neat.bourbon.io/) & some JavaScript I regularly us, added in.



Grunt.js
--------

This project relays heavily on [Grunt](http://gruntjs.com/). I've added in the following automated plugins:

* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) for merging all JavaScript
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) for minifying said JavaScript
* [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) for optimising those images
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) for watching, and automating
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) for turning your SASS into compressed CSS



File structure
--------------

This is the basic file structure, and how Grunt outputs. It'll make more sense when you open it in your text editor. 

* assets/
	* css/
		* `style.scss`
		* `style.css` (minified)
	* js/
		* libs/
			* `a-plugin.js`
			* `another-plugin.js`
		* `scripts.js`
		* build/
			* `production.js` (all `scripts.js` and all `.js` files in libs/ combined )
			* `production.min.js` (`production.js` minified)

* img/
	* highres/
		* `kitten.gif` (original images)
	* optimised/
		* `kitten.gif` (optimised images)
		
* `Gruntfile.js`



JavaScript
----------

I've added in a lot of regularly used jQuery to scripts.js. 

* Date injection - For the footer's copyright
* ESC Key listener
* Form validation

Plugins

* [jQuery Smartresize](https://github.com/louisremi/jquery-smartresize) - Debounced resize events for jQuery
* [HTML5 Placeholder jQuery Plugin](https://github.com/mathiasbynens/jquery-placeholder) - Adding placeholder support for < IE9

These should be removed if not needed, think of all those sweet, sweet Kb you're saving yo'.



Where's Hammer?
---------------

Yes, Trigger started off life as a [Hammer](http://hammerformac.com/) boilerplate, since the agency I work in has grown and grown, there is less need for me using [Hammer](http://hammerformac.com/). But I have [branched off my last Hammer commit](https://github.com/johndevlin/Trigger/tree/Hammer). 



To-dos
------

This is (and probably always will be) a work in progress. Here are some features I'll be adding in.

* Look into deploying with Grunt
* Look into hashing JS & CSS file names with Grunt
* Test iOS icon size
* Add Windows 8 icon
* 404 page



Cheers
------

This wouldn't exist without some amazing people on the web, their articles, and open source projects. Trigger wouldn't be possible without these [GBOLs](http://www.urbandictionary.com/define.php?term=gbol):

* [HTML5 Boilerplate](http://html5boilerplate.com/)
* [SASS](http://sass-lang.com/)
* [Bourbon](http://bourbon.io/)
* [Grunt](http://gruntjs.com/)
* [Chris Coyier](https://twitter.com/chriscoyier), and his [amazing article on Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/)

[Cheers!](https://dl.dropboxusercontent.com/u/5265846/GIFs/cheers.gif)



Feedback
--------

If you have any ideas on how to improve this project please give me a shout on Twitter - [@john_devlin](https://twitter.com/john_devlin).



