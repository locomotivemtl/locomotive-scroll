import gulp from 'gulp';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import cssnano from 'cssnano';
import merge from 'merge-stream';
import terser from 'gulp-terser-js';
import htmlmin from 'gulp-htmlmin';
import paths from '../mconfig.json';

function buildStyles() {
    const stylesfiles = [
        {
            dest: paths.styles.dest
        },
        {
            dest: paths.styles.docs.dest
       }
    ];

    const plugins = [
        cssnano()
    ];

    const stylesStreams = stylesfiles.map((file) => {
        return gulp
            .src([file.dest+'*.css', '!'+file.dest+'*.min.css'])
            .pipe(rename(function(file) {
                if (file.basename == paths.styles.main) {
                    file.basename += '.min';
                }
            }))
            .pipe(postcss(plugins))
            .pipe(gulp.dest(file.dest));
    });

    return merge(stylesStreams);
}

function buildScripts() {
    const scriptsfiles = [
        {
            dest: paths.scripts.dest
        },
        {
            dest: paths.scripts.docs.dest
       }
    ];

    const scriptsStreams = scriptsfiles.map((file) => {
        return gulp
            .src([file.dest+'*.js', '!'+file.dest+'*.esm.js', '!'+file.dest+'*.min.js'])
            .pipe(rename(function(file) {
                if (file.basename == paths.scripts.main) {
                    file.basename += '.min';
                }
            }))
            .pipe(terser({
                output: {
                    comments: false
                }
            }))
            .pipe(gulp.dest(file.dest));
    });

    return merge(scriptsStreams);
}

function buildViews() {
    return gulp
        .src(paths.dest + '*.html')
        .pipe(htmlmin('collapseWhitespace: true'))
        .pipe(gulp.dest(paths.dest));
}

export { buildStyles, buildScripts, buildViews };
