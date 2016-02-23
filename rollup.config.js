import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import npm from 'rollup-plugin-npm';
import replace from 'rollup-plugin-replace';
import ternary from 'rollup-plugin-ternary';

export default {
    entry: 'src/index.js',
    dest: 'www/build/bundle.js',
    format: 'iife',
    plugins: [
        ternary({
            include: 'node_modules/react-router/**/*'
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        npm({jsnext: true, main: true}),
        commonjs({
            namedExports: {
                'node_modules/react/react.js': ['Component', 'Children', 'createElement', 'PropTypes'],
                'node_modules/react-dom/index.js': ['render']
            }
        }),
        babel()
    ]
};
