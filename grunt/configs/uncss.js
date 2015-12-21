'use strict';
var grunt = require('grunt');
module.exports = {
  dist: {
    files: {
      '.temp/css/portfolio.css': ['.temp/index.html']
    }
  }
};