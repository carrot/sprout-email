module.exports = function (grunt) {

  grunt.initConfig({

    /*
     * Watch `src` dir for changes.
     */

    watch: {
      scripts: {
        files: 'src/**/*',
        tasks: ['compile'],
        livereload: true
      }

    },

    /*
     * Compile index.jade to HTML.
     */

    jade: {
      compile: {
        files: {
          'dest/index.html': ['src/index.jade', 'src/layout.jade']
        },
        options: {
          pretty: true
        }
      }
    },

    /*
     * Compile all stylus (css) files.
     */

    stylus: {
      compile: {
        files: {
          'dest/style.css': ['src/**/*.styl']
        }
      }
    },

    /*
     * Inline css associated with index.html.
     */

    juice: {
      'dest/index.html': 'dest/index.html'
    },

    /*
     * Reload the browser on changes.
     */

    browserSync: {
      bsFiles: {
          src : ['/index.html']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./dest"
        }
      }
    },

    /*
     * Remove css files from destination.
     */

    clean: ['dest/**/*.css']

  });

  /*
   * Load npm grunt dependencies.
   */

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-juice-email');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browser-sync');

  /*
   * Register tasks.
   */

  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('compile', ['jade', 'stylus', 'juice', 'clean']);

}
