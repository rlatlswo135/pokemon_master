import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, MyBag } from '@/components';
import { Home, PokePedia, Store, MyPage } from '@/pages';

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
            <MyBag />
        </>
    );
};
