import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import ordinaryConfig from '../config';

const $ = gulpLoadPlugins();
const config = ordinaryConfig.imagemin;



gulp.task('imagemin', () => {
  return gulp.src(config.src)
    .pipe($.newer(config.dest))
    .pipe($.image({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.dest));
});
