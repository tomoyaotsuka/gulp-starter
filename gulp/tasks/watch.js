import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import ordinaryConfig from '../config';

const $ = gulpLoadPlugins();
const config = ordinaryConfig;



gulp.task('watch', () => {
  $.watch(config.jade.watch, (event) => {
    gulp.start('jade');
  });
  $.watch(config.css.watch, (event) => {
    gulp.start('sass');
  });
  $.watch(config.js.watch, (event) => {
    gulp.start('webpack');
    gulp.start('javascript');
  });
  $.watch(config.copy.src, (event) => {
    gulp.start('copy');
  });
  $.watch(config.imagemin.src, (event) => {
    gulp.start('imagemin');
  });
});
