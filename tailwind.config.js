// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
                defaultImage: "url('/src/assets/background/default.jpg')",
                homeImage: "url('/src/assets/background/home.gif')",
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
