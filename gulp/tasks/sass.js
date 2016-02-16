require('es6-promise').polyfill();

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import ordinaryConfig from '../config';

import sass from 'gulp-ruby-sass';

const $ = gulpLoadPlugins();
const config = ordinaryConfig.css;



gulp.task('sass', () => {
  return sass(config.src)
    .on('error', sass.logError)
    .pipe($.pleeease({
      autoprefixer: {
        browsers: ["last 4 versions"]
      }
    }))
    .pipe($.postcss([
      require('css-mqpacker')
    ]))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});
