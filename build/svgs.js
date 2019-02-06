import gulp from 'gulp';
import path from 'path';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';
import paths from '../mconfig.json';
import error from './error.js';

function svgs() {
    return gulp
        .src(paths.svgs.src + '**/*.svg', { base: paths.svgs.src })
        .pipe(rename(function(file) {
            if (file.dirname != '.') {
                const name = file.dirname.split(path.sep);
                name.push(file.basename);
                file.basename = name.join('-');
            }
        }))
        .pipe(svgstore())
        .on('error', function(err) {
            error(this, err);
        })
        .pipe(gulp.dest(paths.svgs.dest));
}

export default svgs;
