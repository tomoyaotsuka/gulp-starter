var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var config = require('../config').css;

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.rubySass({
      style: 'compressed',
      sourcemap: false,
      noCache: true
    }))
    .pipe($.pleeease({
      fallbacks: {
        autoprefixer: ["last 4 versions"]
      },
      optimizers: {
        minifier: false
      }
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});