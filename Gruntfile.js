module.exports = function (grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					livereload: true,
					open: true,
					port: 9001
				}
			}
		},
		watch: {
			spa: {
				files: './index.html',
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('server', ['connect', 'watch']);
}