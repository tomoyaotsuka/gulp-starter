import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import ordinaryConfig from '../config';

const $ = gulpLoadPlugins();
const config = ordinaryConfig.js;



gulp.task('javascript', (callback) => {
  runSequence(
    'concat',
    'uglify',
    callback
  );
});

gulp.task('concat', () => {
  return gulp.src(config.src)
    .pipe($.concat(config.name+'.js'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('uglify', () => {
  return gulp.src(config.dest+'/'+config.name+'.js')
    .pipe($.uglify({
      preserveComments: 'some'
    }))
    .pipe($.rename(config.name+'.min.js'))
    .pipe(gulp.dest(config.dest));
});
