'use strict';
var grunt = require('grunt');
module.exports = {
  build: {
    src: ['.temp/index.html'],
    dest: '.temp/index.html',
    replacements: [{
      from: 'portfolio.css',
      to: 'portfolio.min.css'
    }]
  }
};
