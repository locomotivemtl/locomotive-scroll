module.exports = {
    options: {
        browserifyOptions: {
            debug: false
        },
        exclude: "",
        transform: [
            ['babelify', {
                presets: ['es2015'],
                plugins: [
                    ['transform-es2015-classes', {loose: true}]
                ]
            }]
        ]
    },
    dev: {
        options: {
            browserifyOptions: {
                debug: true
            },
            watch: true
        },
        src: [
            '<%= paths.js.src %>/**/*.js',
            '!<%= paths.js.src %>/vendors/**/*.js'
        ],
        dest: '<%= paths.js.dist %>/app.js'
    },
    prod: {
        options: {
            banner: '/*! <%= package.title %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        src: [
            '<%= paths.js.src %>/**/*.js',
            '!<%= paths.js.src %>/vendors/**/*.js'
        ],
        dest: '<%= paths.js.dist %>/app.js'
    }
};
