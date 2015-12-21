'use strict';
var grunt = require('grunt');
module.exports = {
  dev: {
    options: {
      style: 'expanded'
    },
    files: {
      '.temp/css/portfolio.css': 'sass/main.scss'
    }
  },
  build: {
    options: {
      style: 'compact',
      sourcemap: 'none'
    },
    files: {
      '.temp/css/portfolio.css': 'sass/main.scss'
    }
  }
};
