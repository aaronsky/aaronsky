'use strict';
var grunt = require('grunt');
module.exports = {
  css: {
    files: [
      'sass/**/*.scss',
      'sass/**/*.sass'
    ],
    tasks: ['sass:dev']
  },
  media: {
    files: ['img/**/*', 'brand/**/*', 'favicon.*'],
    tasks: ['imagemin', 'svgmin']
  },
  other: {
    files: [
      '*.html',
      '*.md',
      '*.txt',
      'CNAME'
    ],
    tasks: ['copy']
  }
};
