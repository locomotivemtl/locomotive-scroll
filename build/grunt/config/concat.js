module.exports = {
    prod: {
        options: {
            banner: '/*! Dependencies for <%= package.title %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        src  : [
            '<%= paths.js.src %>/vendors/**/*.js',
            '<%= paths.npm %>/svg4everybody/dist/svg4everybody.min.js'
        ],
        dest : '<%= paths.js.dist %>/vendors.js'
    }
};

