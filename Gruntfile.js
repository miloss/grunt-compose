'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        jscs: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                config: '.jscsrc',
                esnext: true,
                fix: true
            }
        },

        nodeunit: {
            options: {
                reporter: 'default'
            },
            tests: ['test/*.js']
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('githook', ['jshint', 'jscs']);

    grunt.registerTask('test', ['nodeunit']);
};
