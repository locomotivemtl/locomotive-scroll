import gulp from 'gulp';
import { rollup } from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import common from 'rollup-plugin-commonjs';
import paths from '../mconfig.json';
import pkg from '../package.json';

function scripts() {
    const files = [
        {
            src: paths.scripts.src + paths.scripts.main,
            dest: paths.scripts.dest + paths.scripts.main + '.esm',
            format: 'esm'
        },
        {
            src: paths.scripts.src + paths.scripts.main + '.umd',
            dest: paths.scripts.dest + paths.scripts.main,
            format: 'umd'
        },
        {
            src: paths.scripts.docs.src + paths.scripts.docs.main,
            dest: paths.scripts.docs.dest + paths.scripts.docs.main,
            format: 'iife'
        }
    ];

    const promises = files.map((file) => {
        return rollup({
                input: file.src + '.js',
                plugins: [
                    resolve(),
                    babel({
                        exclude: 'node_modules/**'
                    }),
                    common({
                        include: 'node_modules/**'
                    }),
                ]
            }).then(bundle => {
                return bundle.write({
                    file: file.dest + '.js',
                    name: 'LocomotiveScroll',
                    format: file.format,
                    banner: '/* locomotive-scroll v' + pkg.version + ' | MIT License | https://github.com/locomotivemtl/locomotive-scroll */'
                });
            })
    });

    return Promise.all(promises);
}

export default scripts;
