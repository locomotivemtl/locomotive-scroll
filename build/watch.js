import gulp from 'gulp';
import paths from '../mconfig.json';
import styles from './styles.js';
import scripts from './scripts.js';
import svgs from './svgs.js';
import { server } from './serve.js';

function watch() {
    gulp.watch([paths.styles.src, paths.styles.docs.src], styles);
    gulp.watch([paths.scripts.src, paths.scripts.docs.src], gulp.series(scripts, reload));
    gulp.watch(paths.views.src, reload);
    gulp.watch(paths.svgs.src, gulp.series(svgs, reload));
}

function reload(done) {
    server.reload();
    done();
}

export default watch;
