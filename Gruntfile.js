module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        uglify: {
            options: {
                preserveComments: 'some',
                mangle: false,
                maxLineLen: 512
            },
            'angular-vertilize': {
                files: {
                    'angular-vertilize.min.js': ['angular-vertilize.js']
                }
            }
        }
    });
};
