'use strict';
var grunt = require('grunt');
module.exports = {
  start: {
    files: [{
      expand: true,
      src: ['*.html', '*.md', '*.txt', 'CNAME'],
      dest: '.temp/',
      flatten: true,
      filter: 'isFile'
    }, {
      expand: true,
      src: ['fonts/**/*'],
      dest: '.temp/',
      filter: 'isFile'
    }, {
      expand: true,
      src: ['docs/**/*'],
      dest: '.temp/',
      filter: 'isFile'
    }]
  },
  final: {
    files: [{
      expand: true,
      cwd: '.temp',
      src: ['**/*'],
      dest: 'build/',
      filter: 'isFile'
    }]
  }
};
