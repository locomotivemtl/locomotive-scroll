import gulp from 'gulp';
import cssnano from 'gulp-cssnano';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import paths from '../mconfig.json';

function buildStyles() {
    return gulp
        .src(paths.styles.dest + '*.css')
        .pipe(cssnano())
        .pipe(gulp.dest(paths.styles.dest));
}

function buildScripts() {
    return gulp
        .src(paths.scripts.dest + '*.js')
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
}

function buildViews() {
    return gulp
        .src(paths.dest + '*.html')
        .pipe(htmlmin('collapseWhitespace: true'))
        .pipe(gulp.dest(paths.dest));
}

export { buildStyles, buildScripts, buildViews };
