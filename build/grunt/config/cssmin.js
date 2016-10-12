module.exports = {
    options: {},
    prod: {
        files: [
            {
                expand : true,
                cwd    : '<%= paths.css.dist %>',
                src    : [ '**/*.css', '!**/*.min.css' ],
                dest   : '<%= paths.css.dist %>'
            }
        ]
    }
};
