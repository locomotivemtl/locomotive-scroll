module.exports = {
    options: {},
    prod: {
        files: [
            {
                expand : true,
                cwd    : '<%= paths.js.dist %>',
                src    : [ '**/*.js', '!**/*.min.js' ],
                dest   : '<%= paths.js.dist %>'
            }
        ]
    }
};
