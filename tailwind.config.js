/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './views/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                gold: 'rgb(253 224 71)',
                goldLine: 'rgb(234 179 8)',
                sub: 'rgb(241 245 249 / 0.2);',
                deny: 'rgb(148 163 184 / 0.8)',
                subContainer: 'rgb(241 245 249 / 0.2)',
            },
            borderWidth: {
                1: '1px',
            },
            backgroundImage: {
                defaultImage: "url('public/background/default.jpg')",
                homeImage: "url('public/background/home.gif')",
                signGoogle: "url('public/signGoogle.png')",
            },
            fontFamily: {
                pokeFont: ['PokeFont'],
            },
            inset: {
                '5/6': '83.333333%',
                '4/5': '80%',
            },
            keyframes: {
                homeBlink: {
                    '0%': { background: 'gray' },
                    '10%': { background: 'black' },
                    '20%': { background: 'gray' },
                    '30%': { background: 'black' },
                    '40%': { background: 'gray' },
                    '50%': { background: 'black' },
                },
                homeOpacity: {
                    '0%': { opacity: 0 },
                    '30%': { opacity: 0.3 },
                    '60%': { opacity: 0.6 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                homeBlink: 'homeBlink 2s ease-out',
                homeOpacity: 'homeOpacity 3.2s ease-in',
            },
        },
        screens: {
            tablet: '640px',
            laptop: '1024px',
        },
    },
    plugins: [],
};
