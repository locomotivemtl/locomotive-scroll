/**
 * @file Provides a decorator for console messages.
 */

import kleur from 'kleur';

/**
 * Outputs a message to the console.
 *
 * @param {string} text      - The message to output.
 * @param {string} [type]    - The type of message.
 * @param {string} [timerID] - The console time label to output.
 */
function message(text, type, timerID) {
    switch (type) {
        case 'success':
            console.log('✅ ', kleur.bgGreen().black(text));
            break;

        case 'chore':
            console.log('🧹 ', kleur.bgGreen().black(text));
            break;

        case 'notice':
            console.log('ℹ️  ', kleur.bgBlue().black(text));
            break;

        case 'error':
            console.log('❌ ', kleur.bgRed().black(text));
            process.exitCode = 1;
            break;

        case 'warning':
            console.log('⚠️  ', kleur.bgYellow().black(text));
            break;

        case 'waiting':
            console.log('⏱ ', kleur.blue().italic(text));

            if (timerID != null) {
                console.timeLog(timerID);
                timerID = null;
            }
            break;

        default:
            console.log(text);
            break;
    }

    if (timerID != null) {
        console.timeEnd(timerID);
    }

    console.log('');
}

export default message;

export {
    message,
};
