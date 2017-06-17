var jsVendors = [
  'bower_components/tether/dist/js/tether.js',
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/dist/js/bootstrap.js'
];

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmlmin: {                                     // Task. per comprimir el html en una sola linia, i te lexpulsaa public
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          //'public/index.html': 'app/index.html'
          expand: true,
          cwd: 'app/',
          src: ['**/*.html'],
          dest: 'public/'
        }]
      }
    },
    uglify: { //agafa tots els javascripts que estan en fitxers, els unim, comprimim i els expulsem a public
      dist: {
        src: [jsVendors, 'app/js/**/*.js'],
        dest: 'public/js/app.js'
      }
    },
    sass: { //junta en un css i ho posa a public
			dist: {
				files: {
					'public/style/style.css' : 'app/sass/app.sass'
				}
			}
		},
    jshint: {
      files: ['Gruntfile.js', 'app/js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    copy: {
      svg: {
        expand: true,
        cwd: 'app/images/',
        src: ['**/*.svg'],
        dest: 'public/images'
      },
      fonts: {
        expand: true,
        cwd: 'app/fonts/',
        src: ['**/*.{eot,svg,ttf,woff,woff2,otf}'],
        dest: 'public/fonts'
      }
    },
    imagemin: {                          // Task
      dist: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'app/images/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'public/images'                  // Destination path prefix
        }]
      }
    },
		watch: {
			sass: {
				files: 'app/sass/**/*.sass',
				tasks: ['sass']
			},
      htmlmin: {
        files: 'app/index.html',
				tasks: ['htmlmin']
      },
      uglify: {
        files: 'app/js/**/*.js',
        tasks: ['jshint', 'uglify']
      },
      imagemin: {
        files: 'app/images/**/*.{png,jpg,gif}',
        tasks: ['imagemin']
      },
      copy_svg: {
        files: 'app/images/**/*.svg',
        tasks: ['copy:svg']
      },
      copy_fonts: {
        files: 'app/fonts/**/*.{eot,svg,ttf,woff,woff2,otf}',
        tasks: ['copy:fonts']
      }
		}
    // TODO copiar fonts fa
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['htmlmin', 'sass', 'uglify', 'jshint', 'copy:svg', 'copy:fonts', 'watch']);

};



// module.exports = function(grunt) {
//
//   // Project configuration.
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
//     uglify: {
//       options: {
//         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//       },
//       build: {
//         src: 'src/<%= pkg.name %>.js',
//         dest: 'build/<%= pkg.name %>.min.js'
//       }
//     }
//   });
//
//   // Load the plugin that provides the "uglify" task.
//   grunt.loadNpmTasks('grunt-contrib-uglify');
//
//   // Default task(s).
//   grunt.registerTask('default', ['uglify']);
//
// };
