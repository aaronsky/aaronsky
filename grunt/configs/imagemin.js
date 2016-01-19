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
      src: ['assets/img/**/*.{png,jpg,jpeg}'],
      dest: 'optimized/assets/img/'
    }]
  }
};
