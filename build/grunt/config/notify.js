module.exports = {
    notify_hooks: {
        options: {
            enabled  : true,
            success  : true,
            duration : 3,
            title    : '<%= package.name %>',
            max_jshint_notifications : 5
        }
    },
    watch: {
        options: {
            message: 'Keeping an eye out, Chief!'
        }
    },
    build: {
        options: {
            message: 'Everything is ready to go!'
        }
    },
    sass: {
        options: {
            message: 'CSS is compiled'
        }
    },
    javascript: {
        options: {
            message: 'JavaScript is compiled'
        }
    },
    svg: {
        options: {
            message: 'SVG is concatenated'
        }
    }
};
