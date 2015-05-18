var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('bs', function() {
  browserSync.init(null, {
    server: {
      baseDir: config.dest
      // proxy: ''
    }
  });
});

gulp.task('bsReload', function() {
  browserSync.reload();
});