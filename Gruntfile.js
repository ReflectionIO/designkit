module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      build: ['build/app/images/*','build/app/css/*','build/app/js/*']
    },

    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, src: ['app/**'], dest: 'build/', filter: 'isFile'},
        ],
      },
    },

    useminPrepare: {
      html: 'app/index.html',
      options: {
        root: 'app/',
        dest: 'build/app/',
      }
    },

    filerev: {
      build: {
        options: {
          encoding: 'utf8',
          algorithm: 'md5',
          length: 20
        },
        files: [{
          // add this line for js: 'build/app/js/*.js', currently not versioned
          src: [
            'build/app/images/*.{png,gif,jpg,svg}',
            'build/app/css/*.css',
          ]
        }]
      }
    },

    usemin: {
      html: ['build/app/*.html'],
      css: ['build/app/css/*.css'],
      options: {
        assetsDirs: ['build/app/','build/app/css']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');

	// make sure versioning is final task
	grunt.registerTask('default', [
    'clean:build',
    'useminPrepare',
    'copy:main',
    'filerev',
    'usemin',
  ]);
};
