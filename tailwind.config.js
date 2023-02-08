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
        },
    },
    plugins: [],
};
