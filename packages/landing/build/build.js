import buildEleventy from './tasks/eleventy.js';
import concatFiles from './tasks/concats.js';
import compileScripts from './tasks/scripts.js';
import compileStyles from './tasks/styles.js';
import compileSVGs from './tasks/svgs.js';
import bumpVersions from './tasks/versions.js';

buildEleventy();
concatFiles();
compileScripts();
compileStyles();
compileSVGs();
bumpVersions();
