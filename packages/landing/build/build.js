import buildEleventy from './tasks/eleventy.js';
import compileScripts from './tasks/scripts.js';
import compileStyles from './tasks/styles.js';
import compileSVGs from './tasks/svgs.js';
import bumpVersions from './tasks/versions.js';

await compileScripts();
await compileSVGs();
await bumpVersions();

// PurgeCSS reads the generated HTML.
await buildEleventy();
await compileStyles();
