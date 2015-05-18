var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('webpack', function () {
  return gulp.src(config.webpack.entry)
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(config.js.dest))
    .on('end', function() {
      return gulp.src(config.js.dest + '/' + config.webpack.output.filename)
        .pipe(gulpif(config.js.uglify, uglify()))
        .pipe(gulp.dest(config.js.dest))
        .pipe(browserSync.reload({
          stream: true,
          once: true
        }));
    });
});
