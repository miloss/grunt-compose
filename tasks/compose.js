'use strict';

/**
 * grunt-compose
 *
 * Copyright (c) 2016 Milos Popovic
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
    var config = {
        cmds: [],
        cwd: 'docker',
        env: {}
    };

    function spawn(cmd, args, done) {
        grunt.util.spawn({
            cmd: cmd,
            args: args,
            opts: {
                env: config.env,
                stdio: 'inherit',
                cwd: config.cwd
            }
        }, done);
    }

    function next(i) {
        if (typeof config.cmds[i] !== 'undefined') {
            grunt.log.writeln('Running `docker-compose ' + config.cmds[i] + '`');
            spawn('docker-compose', [config.cmds[i]], function () {
                next(i + 1);
            });
        }
    }

    grunt.task.registerTask('compose', 'Run multiple docker container setup', function () {
        var options = this.options() || {};
        config.cmds = options.cmds || config.cmds;
        config.cwd = options.cwd || config.cwd;
        config.env = options.env || config.env;

        grunt.verbose.writeln('Running docker-compose');
        next(0);
    });
};
