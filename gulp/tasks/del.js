import gulp from 'gulp';
import del from 'del';
import ordinaryConfig from '../config';

const config = ordinaryConfig;



gulp.task('del', del.bind(null, config.dest));
