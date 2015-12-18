'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      dist: ['build'],
      sassCache: ['.sass-cache']
    },
    copy: {
      main: {
        files: [{
          expand: true,
          src: ['index.html', '*.md', 'humans.txt', 'robots.txt', 'sitemap.xml', 'CNAME'],
          dest: 'build/',
          flatten: true,
          filter: 'isFile'
        }, {
          expand: true,
          src: ['font/**/*'],
          dest: 'build/',
          filter: 'isFile'
        }, {
          expand: true,
          src: ['docs/**/*'],
          dest: 'build/',
          filter: 'isFile'
        }]
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 1,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'build/img/'
        }, {
          expand: true,
          cwd: 'brand/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'build/brand/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: '{,*/}*.svg',
          dest: 'build/img/'
        }, {
          expand: true,
          cwd: 'brand/',
          src: '{,*/}*.svg',
          dest: 'build/brand/'
        }]
      }
    },
    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/css/portfolio.css': 'sass/main.scss'
        }
      }
    },
    watch: {
      css: {
        files: [
          'sass/**/*.scss',
          'sass/**/*.sass'
        ],
        tasks: ['sass']
      },
      media: {
        files: ['img/**/*', 'brand/favicon.*'],
        tasks: ['imagemin', 'svgmin']
      },
      other: {
        files: [
          './**/*.html',
          './**/*.md',
          'humans.txt',
          'robots.txt',
          'CNAME',
          'sitemap.xml'
        ],
        tasks: ['copy']
      },
      livereload: {
        files: ['build/**/*'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      livereload: {
        options: {
          open: true,
          base: 'build'
        }
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'copy',
    'imagemin',
    'svgmin',
    'sass',
    'connect',
    'watch'
  ]);

};