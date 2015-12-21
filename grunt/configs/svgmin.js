'use strict';
var grunt = require('grunt');
module.exports = {
  dist: {
    files: [{
      expand: true,
      src: 'favicon.svg',
      dest: '.temp/'
    }, {
      expand: true,
      cwd: 'img/',
      src: '{,*/}*.svg',
      dest: '.temp/img/'
    }, {
      expand: true,
      cwd: 'brand/',
      src: '{,*/}*.svg',
      dest: '.temp/brand/'
    }]
  }
};
