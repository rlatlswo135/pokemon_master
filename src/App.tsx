import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Header, MyBag } from '@/components';
import { Home, PokePedia, Store, MyPage } from '@/pages';
import { pokeListState } from '@/atoms';
import { getOneGenerationPokemon } from '@/api/api';

export const App = () => {
    const [pokemonList, setPokemonList] = useRecoilState(pokeListState);

    useEffect(() => {
        getOneGenerationPokemon().then((item) => {
            setPokemonList(item.pokemon_species);
        });
    }, []);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokepedia" element={<PokePedia />} />
                <Route path="/myPage" element={<MyPage />} />
                <Route path="/store" element={<Store />} />
            </Routes>
            <MyBag />
        </>
    );
};
