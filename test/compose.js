'use strict';

var grunt = require('grunt');

exports['Compose task'] = {
    'should not run anything if no `cmds` passed': function(test) {
        var options;
        test.expect(0);
        options = {
            options: {}
        };
        grunt.config.set('compose', options);
        grunt.task.run('compose');
        test.done();
    }
};
