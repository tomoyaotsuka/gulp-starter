var gulp = require('gulp');
var config = require('../config');

gulp.task('default', ['bs'], function() {
  gulp.watch(config.ejs.watch, ['ejs']);
  gulp.watch(config.css.src, ['sass']);
  gulp.watch(config.js.src, ['webpack']);
  gulp.watch(config.copy.src, ['copy']);
})