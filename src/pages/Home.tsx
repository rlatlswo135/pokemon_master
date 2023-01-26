import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { getOneGenerationPokemon } from '@/api/api';
import { pokeList } from '@/atoms/pokemon';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Button } from '@/components/common/Button';

export const Home = () => {
    const [pokemonList, setPokemonList] = useRecoilState(pokeList);

    useEffect(() => {
        getOneGenerationPokemon().then((item) =>
            setPokemonList(item.pokemon_species)
        );
    }, []);

    return (
        <HomeDiv id="home">
            <ButtonsDiv>
                <Link to="/store">
                    <Button className="mr-4 hover:text-red-600">Start</Button>
                </Link>
                <Button className="ml-4 hover:text-red-600">How To Play</Button>
            </ButtonsDiv>
        </HomeDiv>
    );
};

const HomeDiv = tw.div`
container w-screen h-screen min-w-full min-h-full text-lg
bg-homeImage bg-no-repeat bg-center
`;

const ButtonsDiv = tw.div`
absolute w-full top-3/4 flex items-center justify-center
`;
