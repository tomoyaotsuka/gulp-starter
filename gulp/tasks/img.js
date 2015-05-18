var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config').img;

gulp.task('img', function() {
  return gulp.src(config.src)
    .pipe($.cache($.image({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(config.dest));
});