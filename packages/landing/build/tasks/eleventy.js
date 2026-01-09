import message from '../helpers/message.js';
import { merge } from '../utils/index.js';
import Eleventy from "@11ty/eleventy";

export const defaultEleventyOptions = {
    production: true
}

export const developmentEleventyOptions = {
    production: false
}

export const productionEleventyOptions = {
    production: true
}

let elev;
export default async function buildEleventy(eleventyOptions = null) {
    if (eleventyOptions == null) {
        eleventyOptions = productionEleventyOptions;
    } else if (
        eleventyOptions !== developmentEleventyOptions &&
        eleventyOptions !== productionEleventyOptions
    ) {
        eleventyOptions = merge({}, defaultEleventyOptions, eleventyOptions);
    }

    const { production } = eleventyOptions;
    const timeLabel = `11ty compiled in`;
    console.time(timeLabel);

    try {

        if(!elev) {
            elev = new Eleventy();

            if(!production) {
                await elev.watch();
            }
        }

        // Disable caching to ensure a fresh build each time
        await elev.write();

        message(`11ty compiled`, 'success', timeLabel);
    } catch(err) {
        console.error(err)
        message(err, 'error', timeLabel);
    }
}
