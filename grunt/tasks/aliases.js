'use strict';
module.exports = function(grunt) {
  grunt.registerTask('default', [
    'clean',
    'imagemin',
    'svgmin',
    'copy:start',
    'sass:dev',
    'uncss',
    //'inline',
    'copy:final',
    'connect',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'imagemin',
    'svgmin',
    'copy:start',
    'sass:build',
    'uncss',
    'cssmin',
    'replace',
    'clean:unminified',
    'copy:final',
    //,'inline'
  ]);
}
