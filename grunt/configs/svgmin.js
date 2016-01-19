'use strict';
var grunt = require('grunt');
module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'assets/img/',
      src: '**/*.svg',
      dest: 'optimized/assets/img/',
      filter: 'isFile'
    }]
  }
};
