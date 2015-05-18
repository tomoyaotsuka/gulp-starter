var fs = require('fs');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var config = require('../config').ejs;

gulp.task('ejs', function() {
  var json = JSON.parse(fs.readFileSync(config.json));

  return gulp.src(config.src)
    .pipe($.ejs(json))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});