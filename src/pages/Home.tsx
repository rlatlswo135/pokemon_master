import React, { useEffect } from 'react';
import { getOneGenerationPokemon } from 'api/api';
import { pokeList } from 'atoms/pokemon';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Button } from '../components/common/Button';

export const Home = () => {
    const [pokemonList, setPokemonList] = useRecoilState(pokeList);

    useEffect(() => {
        getOneGenerationPokemon().then((item) =>
            setPokemonList(item.pokemon_species)
        );
    }, []);

    return (
        <div
            id="home"
            className="container w-screen h-screen min-w-full min-h-full border-4 border-black text-lg"
        >
            <div className="absolute w-full top-3/4 flex items-center justify-center">
                <Link to="/pokepedia">
                    <Button
                        className="mr-4 hover:text-red-600"
                        onClick={() => console.log('test')}
                    >
                        Start
                    </Button>
                </Link>
                <Button
                    className="ml-4 hover:text-red-600"
                    onClick={() => console.log('test')}
                >
                    How To Play
                </Button>
            </div>
        </div>
    );
};
