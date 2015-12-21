'use strict';
var grunt = require('grunt');
module.exports = {
  dynamic: {
    files: [{
      expand: true,
      options: {
        optimizationLevel: grunt.option('imgquality') || 1,
        progressive: true
      },
      src: ['favicon.{png,jpg,jpeg}', 'img/**/*.{png,jpg}', 'brand/**/*.{png,jpg}'],
      dest: '.temp/'
    }]
  }
};
