import gulp from 'gulp';
import runSequence from 'run-sequence';
import ordinaryConfig from '../config';

const config = ordinaryConfig;



gulp.task('default', (callback) => {
  runSequence(
    'del',
    ['jade', 'sass', 'webpack', 'javascript', 'imagemin', 'copy'],
    'bs',
    'watch',
    callback
  );
});
