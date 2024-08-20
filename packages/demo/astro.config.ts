import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import tailwindConfig from './tailwind.config';
import postcssTailwindShortcuts from '@locomotivemtl/postcss-tailwind-shortcuts';

// https://astro.build/config
export default defineConfig({
    site: 'https://scroll.locomotive.ca/demo',
    vite: {
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
                    postcssTailwindShortcuts(tailwindConfig.theme),
                ],
            }
        }
    },
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    devToolbar: {
        enabled: false
    },
    image: {
        domains: ['locomotive.ca'],
        remotePatterns: [{ protocol: 'https' }],
    },
    outDir: '../../www/demo',
});
