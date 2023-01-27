import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Header, MyBag } from '@/components';
import { Home, PokePedia, Store, MyPage } from '@/pages';
import { pokeListState } from '@/atoms';
import { getOneGenerationPokemon } from '@/api/api';
import { PrivateRoute } from './components/PrivateRoute';

export const App = () => {
    const [pokemonList, setPokemonList] = useRecoilState(pokeListState);

    useEffect(() => {
        getOneGenerationPokemon().then((item) => {
            setPokemonList(item.pokemon_species);
        });
        return () => {
            console.log('unmount');
        };
    }, []);

    console.log('route');

    /*
    https://flutter-developer.medium.com/solved-privateroute-is-not-a-route-component-777e78e3205b
    <Outlet /> <Navigate /> ?? 뭔데
    */
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokepedia" element={<PrivateRoute />}>
                    <Route path="/pokepedia" element={<PokePedia />} />
                </Route>
                <Route path="/myPage" element={<PrivateRoute />}>
                    <Route path="/myPage" element={<MyPage />} />
                </Route>
                <Route path="/store" element={<PrivateRoute />}>
                    <Route path="/store" element={<Store />} />
                </Route>
            </Routes>
            <MyBag />
        </>
    );
};
