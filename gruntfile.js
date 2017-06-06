module.exports = function(grunt) {
 
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// CONFIG ===================================/
		watch: {
			compass: {
				files: ['**/*.{scss,sass}'],
				tasks: ['compass:dev']
			},
			js: {
				files: ['js/**/*.js'],
				tasks: ['uglify']
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: 'sass/',
					cssDir: 'dist',
					environment: 'development'
				}
			},
			prod: {
				options: {
					sassDir: 'sass/',
					cssDir: 'dist',
					environment: 'production'
				}
			}
		},
		uglify: {
			all: {
				files: {
					'dist/main.min.js': [
						'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
					]
				}
			}
		}
	});

	// DEPENDENT PLUGINS =========================/
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// TASKS =====================================/
	grunt.registerTask('default', ['compass:dev','uglify']);
	
};