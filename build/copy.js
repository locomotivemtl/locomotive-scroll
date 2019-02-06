import gulp from 'gulp';
import paths from '../mconfig.json';
import error from './error.js';

function copy() {
    return gulp
        .src([`./node_modules/locomotive-scroll/assets/scripts/scroll/vendors/*`])
        .on('error', function(err) {
            error(this, err);
        })
        .pipe(gulp.dest(`${paths.scripts.src}/scroll/vendors`));
}

export default copy;
