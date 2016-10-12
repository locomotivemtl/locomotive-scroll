module.exports = {
    options: {
        sourceMap   : false,
        outputStyle : 'expanded'
    },
    prod: {
        files: [
            {
                expand : true,
                cwd    : '<%= paths.css.src %>',
                src    : [ '**/*.scss' ],
                dest   : '<%= paths.css.dist %>',
                ext    : '.css'
            }
        ]
    }
};
