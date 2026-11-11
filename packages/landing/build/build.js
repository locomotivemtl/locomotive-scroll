import buildEleventy from './tasks/eleventy.js';
import concatFiles from './tasks/concats.js';
import compileScripts from './tasks/scripts.js';
import compileStyles from './tasks/styles.js';
import compileSVGs from './tasks/svgs.js';
import bumpVersions from './tasks/versions.js';

await concatFiles();
await compileScripts();
await compileSVGs();
await bumpVersions();

// PurgeCSS reads the generated HTML, which inlines critical.css: styles, HTML, purge, then HTML again.
await compileStyles(null, null, false);
await buildEleventy();
await compileStyles();
await buildEleventy();
