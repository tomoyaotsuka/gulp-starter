var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config').copy;

gulp.task('copy', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});