/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
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
            },
            
        },
    },
    plugins: [],
};