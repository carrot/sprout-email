module.exports = function (grunt) {

  grunt.initConfig({

    /*
     * Watch `src` dir for changes.
     */

    watch: {
      scripts: {
        files: 'src/**/*',
        tasks: ['compile']
      }
    },

    /*
     * Compile index.jade to HTML.
     */

    jade: {
      compile: {
        files: {
          'dest/index.html': ['src/index.jade']
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

  /*
   * Register tasks.
   */

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('compile', ['jade', 'stylus', 'juice', 'clean']);

}
