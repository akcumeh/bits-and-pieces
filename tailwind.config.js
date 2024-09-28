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
            1: '0.5rem',
            2: '1rem',
            3: '1.5rem',
            4: '2.5rem',
            5: '4rem',
            6: '6rem',
        },

        sizing: {
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
                    lighter: '#E8CBAF',
                    light: '#D9B26E',
                    med: '#9C563D',
                    DEFAULT: '#654534',
                    dark: '#3D322C',
                },
                slategreen: {
                    light: '#D9EAD3',
                    med: "#C4E3CB",
                    DEFAULT: '#8AAE92',
                    dark: '#616161'
                },
                deepgreen: {
                    light: '#B5F7E6',
                    med: '#53C0A2',
                    DEFAULT: '#128061',
                    dark: '#255352',
                },
                blue: {
                    light: '#DCF2F1',
                    med: '#7FC7D9',
                    DEFAULT: '#365486',
                    dark: '#0F1035',
                },
                // add more colors
            },
        },
    },
    plugins: [],
};