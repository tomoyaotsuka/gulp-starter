import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import ordinaryConfig from '../config';

import fs from 'fs';

const $ = gulpLoadPlugins();
const config = ordinaryConfig.jade;



gulp.task('jade', () => {
  return gulp.src(config.src)
    .pipe($.jade({
      pretty: true,
      data: JSON.parse(fs.readFileSync(config.json))
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});
