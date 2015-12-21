'use strict';
var grunt = require('grunt');
module.exports = {
  dist: ['build'],
  sassCache: ['.sass-cache'],
  temp: ['.temp'],
  unminified: ['.temp/**/*.css', '!.temp/**/*.min.css']
};
