module.exports = {
    options : {
        svg: {
            xmlDeclaration       : false,
            namespaceIDs         : true,
            doctypeDeclaration   : false,
            cleanupNumericValues : true,
            removeTitle          : true,
            removeDesc           : true
        }
    },
    prod: {
        expand  : true,
        cwd     : '<%= paths.img.dist %>',
        src     : [ '**/*.svg', '!sprite.svg' ],
        dest    : '<%= paths.img.dist %>',
        options : {
            mode: {
                symbol: {
                    dest    : '.',
                    sprite  : 'sprite.svg',
                    example : {
                        dest: '../../../build/sprite.symbol.html'
                    }
                }
            }
        }
    }
}
