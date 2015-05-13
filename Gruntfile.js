module.exports = function(grunt) {
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: [
          "templates/assets/javascripts/application.js",
          "templates/assets/javascripts/classie.js",
          "templates/assets/javascripts/animsition.js",
          "templates/assets/javascripts/furatto.js",
          "templates/assets/javascripts/suraido.js",
          "templates/assets/javascripts/jquery.kinect.min.js",
          "templates/assets/javascripts/jquery-waypoints.js",
          "templates/assets/javascripts/jquery.easing.min.js",
          "templates/assets/javascripts/process-scroller",
          "templates/assets/javascripts/furatto_modal.js",
          "templates/assets/javascripts/player.js"
        ],
        dest: "templates/assets/javascripts/application.tmp.js"
      },
      css: {
        src: [
          "templates/assets/stylesheets/application.css",
          "templates/assets/stylesheets/animate.css",
          "templates/assets/stylesheets/animsition.css"
        ],
        dest: "templates/assets/stylesheets/application.tmp.css"
      }
    },

    uglify: {
      icalia: {
        files: [{
          expand: true,
          cwd: "templates/assets/javascripts",
          src: "application.tmp.js",
          dest: 'templates/assets/javascripts',
          ext: '.min.js'
        }]
      }
    },

    compass: {
      development: {
        options: {
          sassDir: "sass",
          cssDir: "templates/assets/stylesheets",
          outputStyle: "expanded",
          raw: 'preferred_syntax = :scss\n'
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'templates/assets/stylesheets',
          src: ["application.tmp.css"],
          dest: "templates/assets/stylesheets",
          ext: ".min.css"
        }]
      }
    },

    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'templates/assets/img/',
          src: ['**/*.png'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: 'app/assets/img/',
          ext: '.png'
        }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'templates/assets/img/',
          src: ['**/*.jpg'],
          // Could also match cwd. i.e. project-directory/img/
          dest: 'app/assets/img/',
          ext: '.jpg'
        }
        ]
      }
    },


  watch: {
    options: {
      spawn: false
    },
    sass: {
      files: 'sass/*.scss',
      tasks: ["compass", "cssmin"],
      options: {
        livereload: true
      }
    },

    coffee: {
      files: "coffeescript/*.coffee",
      tasks: ["coffee", "concat", "uglify"]
    }
  },

  coffee: {
    compile: {
      options: {
        bare: true
      },
      flatten: true,
      expand: true,
      cwd: "coffeescript",
      src: ["*.coffee"],
      dest: "templates/assets/javascripts",
      ext: ".js"
    }
  },

  shell: {
    jekyllServer: {
      command: "bundle exec jekyll serve --watch"
    }
  },

  concurrent: {
    options: {
      logConcurrentOutput: true
    },
    server: {
      tasks: ["watch:sass", "watch:coffee", "shell:jekyllServer"]
    },
  }

});

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  //CSS distribution task.
  grunt.registerTask('compile-css', ['compass:development', 'concat:css', 'cssmin']);

  //JS distribution task
  grunt.registerTask('compile-js', ['coffee:compile', 'concat:js', 'uglify']);

  //Package for production
  grunt.registerTask('compile', ['compile-js', 'compile-css']);
  
  //Lift the server
  grunt.registerTask('server', ['concurrent:server'])

  //Image Compression
  grunt.registerTask('images', ['imagemin']);
}
