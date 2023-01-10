// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                defaultImage: "url('/src/assets/background/default.jpg')",
                homeImage: "url('/src/assets/background/home.gif')",
            },
            fontFamily: {
                pokeFont: ['PokeFont'],
            },
        },
    },
    plugins: [],
};
