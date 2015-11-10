import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import ordinaryConfig from '../config';

const $ = gulpLoadPlugins();
const config = ordinaryConfig;


gulp.task('webpack', () => {
   gulp.src(config.webpack.entry)
    .pipe($.webpack(config.webpack))
    .pipe(gulp.dest(config.js.dest))
    .on('end', () => {
       gulp.src(config.js.dest + '/' + config.webpack.output.filename)
        .pipe($.if(config.js.uglify, $.uglify()))
        .pipe(gulp.dest(config.js.dest))
        .pipe(browserSync.reload({
          stream: true,
          once: true
        }));
    });
});
