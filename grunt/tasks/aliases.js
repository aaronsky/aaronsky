'use strict';
module.exports = function(grunt) {
  grunt.registerTask('default', [
    'clean',
    'imagemin',
    'svgmin',
  ]);
}