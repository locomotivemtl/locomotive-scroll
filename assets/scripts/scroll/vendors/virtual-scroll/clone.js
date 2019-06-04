'use strict';

module.exports = function(source) {
    return JSON.parse(JSON.stringify(source));
};
