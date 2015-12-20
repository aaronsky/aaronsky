'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      dist: ['build'],
      sassCache: ['.sass-cache'],
      indexZero: ['build/index-0.html']
    },
    copy: {
      main: {
        files: [{
          expand: true,
          src: ['*.md', 'humans.txt', 'robots.txt', 'sitemap.xml', 'CNAME'],
          dest: 'build/',
          flatten: true,
          filter: 'isFile'
        }, {
          expand: true,
          src: ['fonts/**/*'],
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
    replace: {
      build: {
        src: ['index.html'],
        dest: 'build/index-0.html',
        replacements: [{
          from: 'build/css/critical.css',
          to: 'css/critical.min.css'
        }, {
          from: 'portfolio.css',
          to: 'portfolio.min.css'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          options: {
            optimizationLevel: 7,
            progressive: true
          },
          src: ['favicon.{png,jpg,jpeg}', 'img/**/*.{png,jpg}', 'brand/**/*.{png,jpg}'],
          dest: 'build/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          src: 'favicon.svg',
          dest: 'build/'
        }, {
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
          'build/css/portfolio.css': 'sass/main.scss',
          'build/css/critical.css': 'sass/critical.scss'
        }
      },
      build: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'build/css/portfolio.min.css': 'sass/main.scss',
          'build/css/critical.min.css': 'sass/critical.scss'
        }
      }
    },
    watch: {
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
    },
    inline: {
      dev: {
        src: 'index.html',
        dest: 'build/index.html'
      },
      build: {
        src: 'build/index-0.html',
        dest: 'build/index.html'
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'imagemin',
    'svgmin',
    'copy',
    'sass:dev',
    'inline:dev',
    'connect',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'imagemin',
    'svgmin',
    'copy',
    'sass:build',
    'replace',
    'inline:build',
    'clean:indexZero'
  ]);

};
