Trigger
=======

#### Version: 0.5 <br/> Status: Stable



Contents
--------

1. [WFT?](#wft)
2. [File structure](#structure)
3. [JaveScript](#javescript)
4. [SASS (SCSS)](#sass)
5. [To-dos](#todos)
6. [Feedback](#feedback)



<a name='wft'>WTF?</a>
---

Trigger is a lightweight front-end framework sitting on top of [Grunt.js](http://gruntjs.com/) to automatically combine and minify all JavaScript, optimise images, and run SASS.



<a name='structure'>File structure</a>
---------------------------------

Trigger's file structure is pretty self-explanatory for the more part. The only unusual thing is `assets` being split out into `development/` and `production/`. Development contains your SASS, full resolution images and un-minified JavaScript files. Production is where [Grunt](#javescript) outputs these files. 

Splitting this up into two different files makes it a lot easier when uploading to a server. 

```
Trigger/
├── assets/
│   ├── development/
│   │   ├── css/
│   │   │   ├── bourbon/
│   │   │   ├── neat/
│   │   │   ├── base.scss
│   │   │   └── _include-sass-file.scss
│   │   │
│   │   ├── js/
│   │   │   ├── libs/
│   │   │   └── scripts.js
│   │   │
│   │   └── img/
│   │       └── highres.jpg/png/gif
│   │
│   └── production/
│       ├── css/
│       │   └── style.css
│       │
│       ├── js/
│       │   ├── modernizer.js
│       │   └── production.min.js
│       │
│       └── img/
│           └── optimized.jpg/png/gif
│
├── node_modules/
├── Gruntfile.js
└── index.html
```



<a name='javescript'>JavaScript</a>
-----------------------------------

I've added in a lot of regularly used jQuery to scripts.js. 

* Date injection - For the footer's copyright
* ESC Key listener
* Form validation


### Libraries

* [jQuery 1.9.1](http://jquery.com/)


### Plugins

* [jQuery Smartresize](https://github.com/louisremi/jquery-smartresize) - Debounced resize events for jQuery
* [HTML5 Placeholder jQuery Plugin](https://github.com/mathiasbynens/jquery-placeholder) - Adding placeholder support for < IE9


### Grunt.js

Trigger relays heavily on [Grunt](http://gruntjs.com/) to automate tasks. If you haven't used Grunt before, check out their [get started guide](http://gruntjs.com/getting-started), or [Chris Coyier's article on Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

Trigger contains the following Grunt plugins:

* [Concat](https://github.com/gruntjs/grunt-contrib-concat) - combines `scripts.js`, and all JS files inside of `/libs/`
* [Uglify](https://github.com/gruntjs/grunt-contrib-uglify) - minifies the combined JS file from above
* [Imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) - optimises your images
* [Watch](https://github.com/gruntjs/grunt-contrib-watch) - watches your files, and tells Grunt when to make changes
* [Sass](https://github.com/gruntjs/grunt-contrib-sass) - for turning your SASS into compressed CSS
* [HTML Hint](https://github.com/yaniswang/grunt-htmlhint) - flags up invalid HTML 



<a name='sass'>SASS (SCSS)</a>
------------------------------

Trigger uses [SASS](http://sass-lang.com/) for all of it's style sheets. SASS is run and minified using [Grunt's SASS plug-in](https://github.com/gruntjs/grunt-contrib-sass). 

Because SASS allows you to import multiple files without worrying about additional requests I have separated out a lot of the style sheets from `base.scss` for ease of maintenance. Here are some of the main SASS files, and what they do. 

* base.scss - This is your base style sheet. It will contain most of your sites CSS. It also contains the @import calls to your other SASS files. 
* _settings.scss - This is where you define your SASS variables, such as colours and typefaces.
* _grid-settings.scss - You define your sites width, number of columns, and media query breakpoints here. 
* _typography.scss - Set your websites type. You can call in variables and mixins from _settings.scss to make the site easily maintainable. 


### Bourbon

[Bourbon](http://bourbon.io/) is a mixin library for SASS. For a full list of Bourbons mixins take a look at the [docs](http://bourbon.io/docs/).


### Bourbon Neat

[Bourbon Neat](http://neat.bourbon.io/) is an extension of [Bourbon](http://bourbon.io/) for semantic grid layouts. Trigger's grid settings can be found in `assets/development/css/_grid-settings.scss`. They can then be called by using Neat's mixins, eg:

```
article {
	@include span-columns(8);
}
```

And if you need to off set a column, you can use Neat's `shift` mixin, eg: 

```
aside {
	@include shift(1);
	@include span-columns(3);
}
```



<a name='todos'>To-dos</a>
--------------------------

This is (and probably always will be) a work in progress. Here are some features I'll be adding in.

* Look into hashing JS & CSS file names with Grunt
* Test iOS icon size
* Add Windows 8 icon
* 404 page



<a name='feedback'>Feedback</a>
-------------------------------

If you have any ideas on how to improve this project please give me a shout on Twitter - [@john_devlin](https://twitter.com/john_devlin).

[Cheers](https://dl.dropboxusercontent.com/u/5265846/GIFs/cheers.gif).



