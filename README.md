# Trigger

A Front-End [SASS](http://sass-lang.com/) & [Grunt](http://gruntjs.com/) framework. 

#### Version: 0.6 <br/> Status: Stable


Contents
--------

1. [WTF?](#wtf)
2. [Installation](#installation)
3. [File structure](#file-structure)
4. [JavaScript](#javascript)
5. [SASS (SCSS)](#sass-scss)
6. [To-dos](#to-dos)
7. [Feedback](#feedback)




## WTF?

Trigger is a lightweight front-end SASS that uses [Grunt](http://gruntjs.com/) to automatically combine and minify all of your JavaScript, optimise your images, and run SASS. Trigger comes with [Bourbon](http://bourbon.io/) and [Bourbon Neat](http://neat.bourbon.io/) installed. 




## Installation

Trigger relies heavily on Grunt for a [number of things](#gruntjs). If you haven't used Grunt before, check out the [get started guide](http://gruntjs.com/getting-started). 

To install the needed packages, please open Trigger in terminal and type `npm install`. Then running `grunt` in terminal will run [Trigger's defaults plugins](#gruntjs). To optimize your images, run `grunt img` in terminal. 




## File structure

```
Trigger/
│
├── development/
│   ├── css/
│   │   ├── includes/
│   │   └── base.scss
│   │
│   ├── js/
│   │   ├── libs/
│   │   └── scripts.js
│   │
│   └── img/
│       └──  highres.jpg/png/gif
│
├── css/
│   └── style.css
│
├── js/
│   └── production.min.js
│
├── img/
│   └── optimized.jpg/png/gif
│
└── index.html
```



## JavaScript

I've added in a lot of regularly used jQuery to scripts.js. 

* Date injection - For the footer's copyright
* ESC Key listener


### Libraries

* [jQuery 1.9.1](http://jquery.com/)


### Plugins

* [jQuery Smartresize](https://github.com/louisremi/jquery-smartresize) - Debounced resize events for jQuery
* [HTML5 Placeholder jQuery Plugin](https://github.com/mathiasbynens/jquery-placeholder) - Adding placeholder support for IE9 and below
* [Selectivizr](http://selectivizr.com/) - Emulates CSS3 pseudo-classes in IE8 and below
* [Modernizr](http://modernizr.com/) - Y'all know what Modernizr does


### Grunt.js

Trigger relays heavily on [Grunt](http://gruntjs.com/) to automate tasks. If you haven't used Grunt before, check out their [get started guide](http://gruntjs.com/getting-started), or [Chris Coyier's article on Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

Trigger contains the following Grunt plugins:

* [Concat](https://github.com/gruntjs/grunt-contrib-concat) - combines `scripts.js`, and all JS files inside of `/libs/`
* [Uglify](https://github.com/gruntjs/grunt-contrib-uglify) - minifies the combined JS file from above
* [Imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) - optimises your images
* [Watch](https://github.com/gruntjs/grunt-contrib-watch) - watches your files, and tells Grunt when to make changes
* [Sass](https://github.com/gruntjs/grunt-contrib-sass) - for turning your SASS into compressed CSS
* [HTML Hint](https://github.com/yaniswang/grunt-htmlhint) - flags up invalid HTML 



## SASS (SCSS)

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



## To-dos

This is (and probably always will be) a work in progress. Here are some features I'll be adding in.

* [ ] Bower
* [ ] Add Windows 8 icon



## Feedback

If you have any ideas on how to improve this project please give me a shout on Twitter - [@john_devlin](https://twitter.com/john_devlin).



