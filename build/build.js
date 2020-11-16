import gulp from 'gulp';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import terser from 'gulp-terser-js';
import htmlmin from 'gulp-htmlmin';
import paths from '../mconfig.json';

function buildStyles() {
    const plugins = [
        cssnano()
    ];

    return gulp
        .src(paths.styles.dest + '*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest(paths.styles.dest));
}

function buildScripts() {
    return gulp
        .src(paths.scripts.dest + '*.js')
        .pipe(terser({
            output: {
                comments: false
            }
        }))
        .pipe(gulp.dest(paths.scripts.dest));
}

function buildViews() {
    return gulp
        .src(paths.dest + '*.html')
        .pipe(htmlmin('collapseWhitespace: true'))
        .pipe(gulp.dest(paths.dest));
}

export { buildStyles, buildScripts, buildViews };