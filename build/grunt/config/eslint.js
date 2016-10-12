module.exports = {
    options: {
        quiet      : false,
        format     : require('eslint-tap'),
        configFile : '.eslintrc'
    },
    dev: [
        '<%= paths.js.src %>/**/*.js',
        '!<%= paths.js.src %>/vendors/**/*.js'
    ]
};
