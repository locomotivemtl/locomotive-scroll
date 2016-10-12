module.exports = function (grunt, options)
{
    return {
        options: {
            map: false,
            processors: [
                require('autoprefixer')({
                    browsers: [ 'last 2 versions', '> 1%', 'ie >= 9' ]
                }),
                require('postcss-banner')({
                    banner: grunt.template.process('! <%= package.title %> - <%= grunt.template.today("yyyy-mm-dd") %> ', { data: options })
                })
            ]
        },
        prod: {
            files: [
                {
                    expand  : true,
                    flatten : true,
                    cwd     : '<%= paths.css.dist %>',
                    src     : [ '**/*.css', '!**/*.min.css' ],
                    dest    : '<%= paths.css.dist %>'
                }
            ]
        }
    }
};
