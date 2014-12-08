module.exports = function(grunt) {

  grunt.initConfig({

    copy: {
      task0: {
        src: 'app/index.html',
        dest: 'build/index.html'
      },
    },

    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'build/index.html'
      }
    },

    filerev: {
      options: {
        algorithm: 'md5',
        length: 8
      },
      images: {
        src: 'app/images/*.{jpg,jpeg,gif,png,svg}',
        dest: 'build/images/'
      }
    },

    usemin: {
      html: ['build/index.html'],
      options: {
        assetsDirs: ['build']
      }
    },
  });

  grunt.registerTask('version-assets', 'version the static assets just created', function() {

    var Version = require("node-version-assets");
    var versionInstance = new Version({
        assets: ['app/css/reflection-main.css', 'app/css/reflection-main-ie8.css'],
        grepFiles: ['app/index.html'],
        keepOriginal: true
    });

    var cb = this.async(); // grunt async callback
    versionInstance.run(cb);
	});

  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');

	// make sure versioning is final task
	grunt.registerTask('build', [
    'version-assets',
    'copy:task0',
    'useminPrepare',
    'filerev',
    'usemin'
  ]);
};
