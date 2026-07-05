import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import os from 'os';
import path from 'path';

export default {
    input: ['./src/index.ts'],
    output: {
        file: 'dist/asic-miner-card.js',
        format: 'esm',
        name: 'AsicMinerCard',
        inlineDynamicImports: true,
    },
    watch: {
        clearScreen: false,
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
            include: ['**/*.ts', '**/*.tsx'],
            cacheRoot: path.join(os.tmpdir(), '.rpt2_cache_asic_miner_card'),
            tsconfigOverride: {
                compilerOptions: {
                    noEmit: false,
                    declaration: false,
                },
            },
        }),
        json(),
        terser(),
    ],
    onwarn: function (warning, handler) {
        if (warning.code === 'THIS_IS_UNDEFINED') {
            return;
        }
        handler(warning);
    },
};
