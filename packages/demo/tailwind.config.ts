import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    prefix: 'u-',
    corePlugins: {
        container: false,
    },
    theme: {
        extend: {
            fontFamily: {
                serif: [
                    'Times New Roman',
                    ...defaultTheme.fontFamily.serif
                ],
                sans: [
                    'Arial',
                    ...defaultTheme.fontFamily.sans
                ],
            },
            colors: {
                black:      '#000000',
                white:      '#ffffff',
                primary:    '#312dfb',
            },
            screens: {
                'to-2xs':   { 'max': '339px' },
                '2xs':      '340px',
                'to-xs':    { 'max': '499px' },
                'xs':       '500px',
                'to-sm':    { 'max': '699px' },
                'sm':       '700px',
                'to-md':    { 'max': '999px' },
                'md':       '1000px',
                'to-lg':    { 'max': '1199px' },
                'lg':       '1200px',
                'to-xl':    { 'max': '1399px' },
                'xl':       '1400px',
                'to-2xl':   { 'max': '1599px' },
                '2xl':      '1600px',
                'to-3xl':   { 'max': '1799px' },
                '3xl':      '1800px',
                'to-4xl':   { 'max': '1999px' },
                '4xl':      '2000px',
                'to-5xl':   { 'max': '2399px' },
                '5xl':      '2400px',
            },
            gap: {
                gutter: '20px',
                gutterMobile: '10px'
            },
            transitionDuration: {
                fast:       '0.2s',
                default:    '0.4s',
                slow:       '0.6s',
                slower:     '0.8s',
                slowest:    '1s',
            },
            transitionTimingFunction: {
                // Smooth
                default:        'cubic-bezier(0.380, 0.005, 0.215, 1)',

                // // Common easings
                // power1: {
                //     in:         'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
                //     out:        'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                //     inOut:      'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
                // },
                // power2: {
                //     in:         'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
                //     out:        'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                //     inOut:      'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                // },
                // power3: {
                //     in:         'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
                //     out:        'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
                //     inOut:      'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                // },
                // power4: {
                //     in:         'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                //     out:        'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
                //     inOut:      'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
                // },
                // expo: {
                //     in:         'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
                //     out:        'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
                //     inOut:      'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
                // },
                // back: {
                //     in:         'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
                //     out:        'cubic-bezier(0.175, 00.885, 0.320, 1.275)',
                //     inOut:      'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
                // },
                // sine: {
                //     in:         'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
                //     out:        'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                //     inOut:      'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
                // },
                // circ: {
                //     in:         'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
                //     out:        'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
                //     inOut:      'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
                // },
                // slow: {
                //     out:        'cubic-bezier(.04,1.15,0.4,.99)',
                // },
                // bounce:         'cubic-bezier(0.17, 0.67, 0.3, 1.33)',
                // smooth:         'cubic-bezier(0.380, 0.005, 0.215, 1)',
            },
            zIndex: {
                modal:    '200',
                header:   '100',
                above:    '1',
                default:  '0',
                below:    '-1',
            },
        },
    },
    plugins: [],
} satisfies Config;
