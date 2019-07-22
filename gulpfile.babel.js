import gulp from 'gulp';
import styles from './build/styles.js';
import scripts from './build/scripts.js';
import svgs from './build/svgs.js';
import serve from './build/serve.js';
import watch from './build/watch.js';
import copy from './build/copy.js';
import { buildStyles, buildScripts } from './build/build.js';

const compile = gulp.series(styles, scripts, svgs);
const main = gulp.series(copy, compile, serve, watch);
const build = gulp.series(copy, compile, buildStyles, buildScripts);

gulp.task('default', main);
gulp.task('compile', compile);
gulp.task('build', build);
gulp.task('copy', copy);
