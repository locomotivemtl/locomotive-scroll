import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import paths from '../mconfig.json';
import error from './error.js';
import { server } from './serve.js';

function styles() {
    return gulp
        .src(paths.styles.src + '**/*.scss')
        .pipe(sass())
        .on('error', function(err) {
            error(this, err, 'stack');
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(server.stream());
}

export default styles;
