import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import header from 'gulp-header';
import merge from 'merge-stream';
import nodeSass from 'node-sass';
import paths from '../mconfig.json';
import pkg from '../package.json';
import error from './error.js';
import { server } from './serve.js';

const sass = gulpSass(nodeSass);

function styles() {
    const files = [
        {
            src: paths.styles.src,
            dest: paths.styles.dest
        },
        {
            src: paths.styles.docs.src,
            dest: paths.styles.docs.dest
       }
    ];

    const streams = files.map((file) => {
        return gulp
            .src(file.src + '**/*.scss')
            .pipe(sass().on('error', function (err) {
                error(this, err, 'stack');
            }))
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(header('/*! locomotive-scroll v' + pkg.version + ' | MIT License | https://github.com/locomotivemtl/locomotive-scroll */\n'))
            .pipe(gulp.dest(file.dest))
            .pipe(server.stream());
    });

    return merge(streams);
}

export default styles;
