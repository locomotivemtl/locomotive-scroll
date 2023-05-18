import { isArray } from './is';

export function addToArray ( array, value ) {
    const index = array.indexOf( value );

    if ( index === -1 ) {
        array.push( value );
    }
}

export function arrayContains ( array, value ) {
    for ( let i = 0, c = array.length; i < c; i++ ) {
        if ( array[i] == value ) {
            return true;
        }
    }

    return false;
}

export function arrayContentsMatch ( a, b ) {
    let i;

    if ( !isArray( a ) || !isArray( b ) ) {
        return false;
    }

    if ( a.length !== b.length ) {
        return false;
    }

    i = a.length;
    while ( i-- ) {
        if ( a[i] !== b[i] ) {
            return false;
        }
    }

    return true;
}

export function ensureArray ( x ) {
    if ( typeof x === 'string' ) {
        return [ x ];
    }

    if ( x === undefined ) {
        return [];
    }

    return x;
}

export function lastItem ( array ) {
    return array[ array.length - 1 ];
}

export function removeFromArray ( array, member ) {
    if ( !array ) {
        return;
    }

    const index = array.indexOf( member );

    if ( index !== -1 ) {
        array.splice( index, 1 );
    }
}

export function toArray ( arrayLike ) {
    const array = [];
    let i = arrayLike.length;
    while ( i-- ) {
        array[i] = arrayLike[i];
    }

    return array;
}

export function findByKeyValue( array, key, value ) {
    return array.filter(function( obj ) {
        return obj[key] === value;
    });
}

export function cloneArray( array ) {
    return JSON.parse(JSON.stringify(array));
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

