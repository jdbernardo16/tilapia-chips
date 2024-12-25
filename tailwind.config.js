/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import aspectRatio from '@tailwindcss/aspect-ratio';
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
            },
            fontDisplay: {
                sans: 'swap',
            },
            colors: {
                'primary': {
                    50:'#EDEFEF',
                    100:'#E5E5E5',
                    200:'rgba(33, 33, 33, 0.08)',
                    300:'rgba(33, 33, 33, 0.32)',
                    400:'#1E746E',
                    500:'#31BEB5',
                    600:'#22857F',
                    700:'#2E4959',
                    800:'#212121',
                    900:'#1C2C36',
                },
                'secondary': {
                    200: '#FFF8E6',
                    300: '#FFF5D9',
                    400: '#FFEAB0',
                    500: '#FFBC00',
                    600: '#BF8D00',
                    700: '#594200',
                },
            },
            fontSize: {
                '3xl': '2rem',
                'h1': ['6rem', '6rem'],
                'h2': ['4.5rem', '4.5rem'],
                'h3': ['3rem', '4rem'],
                '28': ['1.75rem', '2.625rem']
            }
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },

    plugins: [
        aspectRatio,
    ],
}

