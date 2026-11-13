import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://scroll.locomotive.ca/demo',
    base: '/demo',
    outDir: '../../www/demo',
    vite: {
        plugins: [tailwindcss()]
    },
    devToolbar: {
        enabled: false
    },
    image: {
        domains: ['locomotive.ca'],
        remotePatterns: [{ protocol: 'https' }],
    }
});
