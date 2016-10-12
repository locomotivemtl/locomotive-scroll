module.exports = {
    options: {
        config: '.csscomb.json'
    },
    dev: {
        files: [
            {
                expand : true,
                cwd    : '<%= paths.css.src %>',
                src    : [ '**/*.scss', '!base/_fonts.scss' ],
                dest   : '<%= paths.css.src %>'
            }
        ]
    }
};
