/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1000px',
            xl: '1280px',
        },

        spacing: {
            sm: '0.5rem',
            md1: '1rem',
            md2: '1.5rem',
            md3: '2.5rem',
            lg: '4rem',
            xl: '6rem',
        },

        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                purple: {
                    light: '#F8ECD1',
                    med: '#DEB6AB',
                    DEFAULT: '#AC7D88',
                    dark: '#85586F',
                },
                brown: {
                    light: '#D9B26E',
                    med: '#9C563D',
                    DEFAULT: '#654534',
                    dark: '#3D322C',
                },
            },
        },

        // item: {
        // }
    },
    plugins: [],
};