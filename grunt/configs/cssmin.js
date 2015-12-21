'use strict';
var grunt = require('grunt');
module.exports = {
  dist: {
    files: [{
      expand: true,
      src: ['.temp/css/*.css', '!*.min.css'],
      dest: '',
      ext: '.min.css'
    }]
  }
};