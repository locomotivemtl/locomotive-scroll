import loconfig from '../helpers/config.js';
import message from '../helpers/message.js';
import resolve from '../helpers/template.js';
import { merge } from '../utils/index.js';
import { randomBytes } from 'node:crypto';
import events from 'node:events';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import {
    mkdir,
    rename,
    rm,
    readFile,
    writeFile,
} from 'node:fs/promises';
import {
    basename,
    dirname,
} from 'node:path';
import readline from 'node:readline';

export const REGEXP_SEMVER = /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

/**
 * @typedef  {object} VersionOptions
 * @property {string|number|null} prettyPrint   - A string or number to insert
 *     white space into the output JSON string for readability purposes.
 * @property {string}             versionFormat - The version number format.
 * @property {string|RegExp}      versionKey    - Either:
 *     - A string representing the JSON field name assign the version number to.
 *
 *       Explicit:
 *
 *       ```json
 *       "key": "json:version"
 *       ```
 *
 *       Implicit:
 *
 *       ```json
 *       "key": "version"
 *       ```
 *
 *     - A `RegExp` object or regular expression string prefixed with `regexp:`.
 *
 *       ```json
 *       "key": "regexp:(?<=^const ASSETS_VERSION = ')(?<version>\\d+)(?=';$)"
 *       ```
 *
 *       ```js
 *       key: new RegExp('(?<=^const ASSETS_VERSION = ')(?<version>\\d+)(?=';$)')
 *       ```
 *
 *       ```js
 *       key: /(?<=^const ASSETS_VERSION = ')(?<version>\d+)(?=';$)/
 *       ```
 */

/**
 * @const {VersionOptions} defaultVersionOptions     - The default shared version options.
 * @const {VersionOptions} developmentVersionOptions - The predefined version options for development.
 * @const {VersionOptions} productionVersionOptions  - The predefined version options for production.
 */
export const defaultVersionOptions = {
    prettyPrint:   4,
    versionFormat: 'timestamp',
    versionKey:    'version',
};
export const developmentVersionOptions = Object.assign({}, defaultVersionOptions);
export const productionVersionOptions  = Object.assign({}, defaultVersionOptions);

/**
 * @const {object} developmentVersionFilesArgs - The predefined `bumpVersion()` options for development.
 * @const {object} productionVersionFilesArgs  - The predefined `bumpVersion()` options for production.
 */
export const developmentVersionFilesArgs = [
    developmentVersionOptions,
];
export const productionVersionFilesArgs  = [
    productionVersionOptions,
];

/**
 * Bumps version numbers in file.
 *
 * @async
 * @param  {object} [versionOptions=null] - Customize the version options.
 *     If `null`, default production options are used.
 * @return {Promise}
 */
export default async function bumpVersions(versionOptions = null) {
    if (versionOptions == null) {
        versionOptions = productionVersionOptions;
    } else if (
        versionOptions !== developmentVersionOptions &&
        versionOptions !== productionVersionOptions
    ) {
        versionOptions = merge({}, defaultVersionOptions, versionOptions);
    }

    const queue = new Map();

    /**
     * @async
     * @param  {object}         entry          - The entrypoint to process.
     * @param  {string}         entry.outfile  - The file to write to.
     * @param  {?string}        [entry.label]  - The task label.
     *     Defaults to the outfile name.
     * @param  {?string}        [entry.format] - The version number format.
     * @param  {?string}        [entry.key]    - The JSON field name assign the version number to.
     * @param  {?string|number} [entry.pretty] - The white space to use to format the JSON file.
     * @return {Promise}
     */
    loconfig.tasks.versions?.forEach(({
        outfile,
        label = null,
        ...options
    }) => {
        if (!label) {
            label = basename(outfile || 'undefined');
        }

        options.pretty = (options.pretty ?? versionOptions.prettyPrint);
        options.format = (options.format ?? versionOptions.versionFormat);
        options.key    = (options.key ?? versionOptions.versionKey);

        if (queue.has(outfile)) {
            queue.get(outfile).then(() => handleBumpVersion(outfile, label, options));
        } else {
            queue.set(outfile, handleBumpVersion(outfile, label, options));
        }
    });
};

/**
 * Creates a formatted version number or string.
 *
 * @param  {string}  format     - The version format.
 * @param  {?string} [oldValue] - The old version value.
 * @return {string|number}
 * @throws TypeError If the format or value are invalid.
 */
function createVersionNumber(format, oldValue = null) {
    let [ type, modifier ] = format.split(':', 2);

    switch (type) {
        case 'hex':
        case 'hexadecimal':
            try {
                modifier = Number.parseInt(modifier);

                if (Number.isNaN(modifier)) {
                    modifier = 6;
                }

                return randomBytes(modifier).toString('hex');
            } catch (err) {
                throw new TypeError(
                    `${err.message} for \'format\' type "hexadecimal"`,
                    { cause: err }
                );
            }

        case 'inc':
        case 'increment':
            try {
                if (modifier === 'semver') {
                    return incrementSemVer(oldValue, [ 'buildmetadata', 'patch' ]);
                }

                return incrementNumber(oldValue, modifier);
            } catch (err) {
                throw new TypeError(
                    `${err.message} for \'format\' type "increment"`,
                    { cause: err }
                );
            }

        case 'regex':
        case 'regexp':
            try {
                return new RegExp(modifier);
            } catch (err) {
                throw new TypeError(
                    `${err.message} for \'format\' type "regexp"`,
                    { cause: err }
                );
            }

        case 'timestamp':
            return Date.now().valueOf();
    }

    throw new TypeError(
        'Expected \'format\' to be either "timestamp", "increment", or "hexadecimal"'
    );
}

/**
 * @async
 * @param  {string} outfile
 * @param  {string} label
 * @param  {object} options
 * @return {Promise}
 */
async function handleBumpVersion(outfile, label, options) {
    const timeLabel = `${label} bumped in`;
    console.time(timeLabel);

    try {
        options.key = parseVersionKey(options.key);

        if (options.key instanceof RegExp) {
            await handleBumpVersionWithRegExp(outfile, label, options);
        } else {
            await handleBumpVersionInJson(outfile, label, options);
        }

        message(`${label} bumped`, 'success', timeLabel);
    } catch (err) {
        message(`Error bumping ${label}`, 'error');
        message(err);

        notification({
            title:   `${label} bumping failed 🚨`,
            message: `${err.name}: ${err.message}`
        });
    }
}

/**
 * Changes the version number for the provided JSON key in file.
 *
 * @async
 * @param  {string} outfile
 * @param  {string} label
 * @param  {object} options
 * @param  {string} options.key
 * @return {Promise}
 */
async function handleBumpVersionInJson(outfile, label, options) {
    outfile = resolve(outfile);

    let json;

    try {
        json = JSON.parse(await readFile(outfile, { encoding: 'utf8' }));
    } catch (err) {
        json = {};

        message(`${label} is a new file`, 'notice');

        await mkdir(dirname(outfile), { recursive: true });
    }

    json[options.key] = createVersionNumber(options.format, json?.[options.key]);

    return await writeFile(
        outfile,
        JSON.stringify(json, null, options.pretty),
        { encoding: 'utf8' }
    );
}

/**
 * Changes the version number for the provided RegExp in file.
 *
 * @async
 * @param  {string} outfile
 * @param  {string} label
 * @param  {object} options
 * @param  {RegExp} options.key
 * @return {Promise}
 */
async function handleBumpVersionWithRegExp(outfile, label, options) {
    outfile = resolve(outfile);

    const bckfile = `${outfile}~`;

    await rename(outfile, bckfile);

    try {
        const rl = readline.createInterface({
            input: createReadStream(bckfile),
        });

        let newVersion = null;

        const writeStream = createWriteStream(outfile, { encoding: 'utf8' });

        rl.on('line', (line) => {
            const found = line.match(options.key);

            if (found) {
                const groups      = (found.groups ?? {});
                const oldVersion  = (groups.build ?? groups.version ?? found[1] ?? found[0]);
                const newVersion  = createVersionNumber(options.format, oldVersion);
                const replacement = found[0].replace(oldVersion, newVersion);

                line = line.replace(found[0], replacement);
            }

            writeStream.write(line + "\n");
        });

        await events.once(rl, 'close');

        await rm(bckfile);
    } catch (err) {
        await rm(outfile, { force: true });

        await rename(bckfile, outfile);

        throw err;
    }
}

/**
 * Increments the given integer.
 *
 * @param  {string|int} value         - The number to increment.
 * @param  {string|int} [increment=1] - The amount to increment by.
 * @return {int}
 * @throws TypeError If the version number is invalid.
 */
function incrementNumber(value, increment = 1) {
    const version = Number.parseInt(value);
    if (Number.isNaN(version)) {
        throw new TypeError(
            `Expected an integer version number, received [${value}]`
        );
    }

    increment = Number.parseInt(increment);
    if (Number.isNaN(increment)) {
        throw new TypeError(
            'Expected an integer increment number'
        );
    }

    return (version + increment);
}

/**
 * Increments the given SemVer version number.
 *
 * @param  {string}          value     - The version to mutate.
 * @param  {string|string[]} [target]  - The segment to increment, one of:
 *     'major', 'minor', 'patch', ~~'prerelease'~~, 'buildmetadata'.
 * @param  {string|int}      [increment=1] - The amount to increment by.
 * @return {string}
 * @throws TypeError If the version or target are invalid.
 */
function incrementSemVer(value, target = 'patch', increment = 1) {
    const found = value.match(REGEXP_SEMVER);
    if (!found) {
        throw new TypeError(
            `Expected a SemVer version number, received [${value}]`
        );
    }

    if (Array.isArray(target)) {
        for (const group of target) {
            if (found.groups[group] != null) {
                target = group;
                break;
            }
        }
    }

    if (!target || !found.groups[target]) {
        throw new TypeError(
            `Expected a supported SemVer segment, received [${target}]`
        );
    }

    const segments = {
        'major':         '',
        'minor':         '.',
        'patch':         '.',
        'prerelease':    '-',
        'buildmetadata': '+',
    };

    let replacement = '';

    for (const [ segment, delimiter ] of Object.entries(segments)) {
        if (found.groups?.[segment] != null) {
            const newVersion = (segment === target)
                ? incrementNumber(found.groups[segment], increment)
                : found.groups[segment];

            replacement += `${delimiter}${newVersion}`;
        }
    }

    return value.replace(found[0], replacement);
}

/**
 * Parses the version key.
 *
 * @param  {*} key - The version key.
 * @return {string|RegExp}
 */
function parseVersionKey(key) {
    if (key instanceof RegExp) {
        return key;
    }

    if (typeof key !== 'string') {
        throw new TypeError(
            'Expected \'key\' to be either a string or a RegExp'
        );
    }

    const delimiter = key.indexOf(':');

    if (delimiter === -1) {
        // Assumes its a JSON key
        return key;
    }

    const type  = key.slice(0, delimiter);
    const value = key.slice(delimiter + 1);

    switch (type) {
        case 'json':
            return value;

        case 'regex':
        case 'regexp':
            return new RegExp(value);
    }

    throw new TypeError(
        'Expected \'key\' type to be either "json" or "regexp"'
    );
}
