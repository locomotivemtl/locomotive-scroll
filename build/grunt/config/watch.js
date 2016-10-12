module.exports = {
    options: {
        spawn: false,
        livereload: false
    },
    javascript_vendors: {
        files: [ '<%= paths.js.src %>/vendors/**/*.js', '<%= paths.grunt %>/config/concat.js' ],
        tasks: [ 'concat', 'notify:javascript' ]
    },
    sass: {
        files: [ '<%= paths.css.src %>/**/*.scss' ],
        tasks: [ 'sass', 'postcss', 'notify:sass' ]
    },
    svg: {
        files: [ '<%= paths.img.dist %>/**/*.svg' ],
        tasks: [ 'svg_sprite', 'notify:svg' ]
    },
    tasks: {
        options: {
            reload: true
        },
        files: [
            'Gruntfile.js',
            '<%= paths.grunt %>/**/*'
        ]
    }
};
