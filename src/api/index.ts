/*
https://pokeapi.co/api/v2/generation/1 -> 1세대
*/

export const getOneGenerationPokemon = async () =>
    (await fetch('https://pokeapi.co/api/v2/generation/1')).json();
