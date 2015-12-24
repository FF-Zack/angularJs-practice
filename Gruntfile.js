module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      compress: {
        files: {
          'dest/test.min.css': [
            "css/test.css"
          ]
        }
      }
    },
    uglify: {
      options: {
        banner: 'my ng test' //这里添加的banner会在文件的开头添加进去
      },
      build: {
        src: 'js/test.js',
        dest: 'dest/js/test.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['cssmin', 'uglify']);
}