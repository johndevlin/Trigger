module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {   
			options: {
				preserveComments: false,
				separator: ';'
			},
			dist: {
				src: [
					'development/js/libs/*.js',
					'development/js/plugins/*.js',
					'development/js/framework/*.js',
					'development/js/scripts.js'
				],
				dest: 'js/production.js',
			}
		},
		
		uglify: {
			build: {
				src: 'js/production.js',
				dest: 'js/production.min.js'
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/style.css': 'development/css/base.scss'
				}
			} 
		},
		
		watch: {
			scripts: {
				files: ['development/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['development/css/**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			},
			html: {
				files: ['*.html'],
				tasks: ['htmlhint'],
				options: {
					spawn: false,
				}
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'development/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/'
				}]
			}
		},
		
		htmlhint: {
			build: {
				options: {
		            'tag-pair': true,
		            'tagname-lowercase': true,
		            'attr-lowercase': true,
		            'attr-value-double-quotes': true,
		            'doctype-first': true,
		            'spec-char-escape': true,
		            'id-unique': true,
		            'style-disabled': true
		        },
				src: ['*.html']
			}
		},
		
		jshint: {
			all: [
				'Gruntfile.js', 
				'development/js/*.js'
			]
		},
		
		clean: {
			img: ["!img/*.svg", "!img/svg/*", "img/*.{png,jpg,gif}", "img/**/*.{png,jpg,gif}"]
		}

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);
	
	grunt.registerTask('debug', ['htmlhint', 'jshint']);
	
	grunt.registerTask('img', ['clean', 'imagemin']);

};


