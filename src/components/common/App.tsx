import React from 'react';
import { Header } from 'components/Header';
import { Home, GetCoins, PokePedia, Store, MyPage } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokepedia" element={<PokePedia />} />
                <Route path="/myPage" element={<MyPage />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </>
    );
};
