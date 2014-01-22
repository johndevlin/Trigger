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
		},
		
		hashres: {
			// Global options
			options: {
				// Optional. Encoding used to read/write files. Default value 'utf8'
				encoding: 'utf8',
				// Optional. Format used to name the files specified in 'files' property.
				// Default value: '${hash}.${name}.cache.${ext}'
				fileNameFormat: '${name}.${hash}.cache.${ext}',
				// Optional. Should files be renamed or only alter the references to the files
				// Use it with '${name}.${ext}?${hash} to get perfect caching without renaming your files
				// Default value: true
				renameFiles: true
			},
			// hashres is a multitask. Here 'prod' is the name of the subtask. You can have as many as you want.
			prod: {
				// Specific options, override the global ones
				options: {
					// You can override encoding, fileNameFormat or renameFiles
				},
				// Files to hash
				src: [
				// WARNING: These files will be renamed!
				'assets/js/build/production.min.js',
				'assets/css/style.css'],
				// File that refers to above files and needs to be updated with the hashed name
				dest: 'index.php',
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
	grunt.loadNpmTasks('grunt-hashres');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch', 'sass', 'htmlhint']);

};


