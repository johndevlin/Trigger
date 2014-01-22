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
					'assets/js/libs/*.js',
					'assets/js/scripts.js'
				],
				dest: 'assets/js/build/production.js',
			}
		},
		
		uglify: {
			build: {
				src: 'assets/js/build/production.js',
				dest: 'assets/js/build/production.min.js'
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/highres/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/optimised/'
				}]
			}
		},
		
		watch: {
			scripts: {
				files: ['assets/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['assets/css/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			},
			images: {
				files: ['img/highres/*.{png,jpg,gif}'],
				tasks: ['imagemin'],
				options: {
					spawn: false,
				}
			},
			html: {
				files: ['*.html'],
				tasks: ['htmlhint']
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'assets/css/style.css': 'assets/css/style.scss'
				}
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
		}

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-htmlhint');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch', 'sass', 'htmlhint']);

};


