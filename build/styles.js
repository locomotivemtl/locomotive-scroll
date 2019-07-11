import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import merge from 'merge-stream';
import paths from '../mconfig.json';
import error from './error.js';
import { server } from './serve.js';

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
            .pipe(sass())
            .on('error', function(err) {
                error(this, err, 'stack');
            })
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(gulp.dest(file.dest))
            .pipe(server.stream());
    });

    return merge(streams);
}

export default styles;
