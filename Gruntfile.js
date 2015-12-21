'use strict';

module.exports = function(grunt) {
    initTasks(grunt, 'grunt/tasks');
    initConfigs(grunt, 'grunt/configs');
}

var initTasks = function (grunt, folderPath) {
    var pkg = grunt.file.readJSON('package.json');
    var tasks = pkg.devDependencies;
    for ( var task in tasks ) {
      if (tasks.hasOwnProperty(task)) {
        if (task == 'grunt') continue;
        else if (task.indexOf('grunt-') === -1) continue;
        grunt.loadNpmTasks(task);
      }
    }
    grunt.loadTasks(folderPath);
};

var initConfigs = function (grunt, folderPath) {
    var config = {};
    grunt.file.expand(folderPath + '/**/*.js').forEach(function(filePath) {
        var fileName = filePath.split('/').pop().split('.')[0];
        //grunt.log.write(filePath);
        var fileData = require('./' + filePath);
        config[fileName] = fileData;
    });
    grunt.initConfig(config);
};
