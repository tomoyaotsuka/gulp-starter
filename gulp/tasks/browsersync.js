import gulp from 'gulp';
import browserSync from 'browser-sync';
import ordinaryConfig from '../config';

const config = ordinaryConfig;



gulp.task('bs', () => {
  browserSync.init(null, {
    server: {
      baseDir: config.dest
      // proxy: ''
    }
  });
});

gulp.task('bsReload', () => {
  browserSync.reload();
});
