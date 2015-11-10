import gulp from 'gulp';
import ordinaryConfig from '../config';

const config = ordinaryConfig;

gulp.task('default', ['bs'], () => {
  gulp.watch(config.jade.watch, ['jade']);
  gulp.watch(config.css.src, ['sass']);
  gulp.watch(config.js.src, ['webpack']);
});
