import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import paths from '../mconfig.json';
import error from './error.js';

function scripts() {
    return browserify({
            entries: paths.scripts.src + paths.scripts.main + '.js',
            debug: true
        })
        .transform(babelify)
        .bundle()
        .on('error', function(err) {
            error(this, err, 'stack');
        })
        .pipe(source(paths.scripts.main + '.js'))
        .pipe(buffer())
        .pipe(gulp.dest(paths.scripts.dest));
}

export default scripts;
