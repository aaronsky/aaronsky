'use strict';
var grunt = require('grunt');
module.exports = {
  livereload: {
    options: {
      open: true,
      port: grunt.option('port') || 8000,
      base: 'build/'
    }
  }
};
