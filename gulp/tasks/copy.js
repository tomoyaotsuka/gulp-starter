import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import ordinaryConfig from '../config';

const $ = gulpLoadPlugins();
const config = ordinaryConfig.copy;



gulp.task('copy', () => {
  return gulp.src(config.src, { base: ordinaryConfig.src })
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});
