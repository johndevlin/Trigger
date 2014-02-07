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
					'assets/development/js/libs/*.js',
					'assets/development/js/scripts.js'
				],
				dest: 'assets/production/js/production.js',
			}
		},
		
		uglify: {
			build: {
				src: 'assets/production/js/production.js',
				dest: 'assets/production/js/production.min.js'
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'assets/development/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'assets/production/img/'
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

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'assets/production/css/style.css': 'assets/development/css/base.scss'
				}
			} 
		},
		
		watch: {
			scripts: {
				files: ['assets/development/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['assets/development/css/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			},
			images: {
				files: ['assets/development/img/*.{png,jpg,gif}'],
				tasks: ['imagemin'],
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


