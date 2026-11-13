import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import postcssTailwindShortcuts from '@locomotivemtl/postcss-tailwind-shortcuts';

// prefix(u) in tailwind.css also prefixes the theme variables
const shortcuts = [
    ['speed', 'transition-duration'],
    ['ease', 'ease'],
    ['z', 'z-index'],
    ['colorCode', 'color'],
    ['spacing', 'spacing'],
    ['radius', 'radius'],
].map(([functionIdent, namespace]) => ({
    functionIdent,
    cssVariablePrefix: `--u-${namespace}`,
}));

// https://astro.build/config
export default defineConfig({
    site: 'https://scroll.locomotive.ca/demo',
    base: '/demo',
    outDir: '../../www/demo',
    vite: {
        plugins: [tailwindcss()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "sass:math";
                        @use "sass:list";
                        @use "@styles/tools/maths" as *;
                        @use "@styles/tools/functions" as *;
                    `
                }
            },
            postcss: {
                plugins: [
                    postcssTailwindShortcuts({ shortcuts }),
                ],
            }
        }
    },
    devToolbar: {
        enabled: false
    },
    image: {
        domains: ['locomotive.ca'],
        remotePatterns: [{ protocol: 'https' }],
    }
});
