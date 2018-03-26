module.exports = {
    options: {
        open      : false,
        proxy     : 'locomotive-scroll.test',
        port      : 3000,
        watchTask : true,
        notify    : false
    },
    dev: {
        bsFiles: {
            src : [
                '<%= paths.css.dist %>/**/*.css',
                '<%= paths.js.dist %>/**/*.js',
                '<%= paths.img.dist %>/**/*.svg',
                '**/*.php'
            ]
        }
    }
};
