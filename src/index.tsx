import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main } from 'components/Main';
import { MyPage } from 'pages/MyPage';
import { MyBags } from 'pages/MyBags';
import { Store } from 'pages/Store';
import { Home } from './pages/Home';
import { GetCoins } from './pages/GetCoins';
import { PokePedia } from './pages/PokePedia';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/pokepedia',
        element: (
            <Main>
                <PokePedia />
            </Main>
        ),
    },
    {
        path: '/getCoins',
        element: (
            <Main>
                <GetCoins />
            </Main>
        ),
    },
    {
        path: '/myPage',
        element: (
            <Main>
                <MyPage />
            </Main>
        ),
    },
    {
        path: '/myBags',
        element: (
            <Main>
                <MyBags />
            </Main>
        ),
    },
    {
        path: '/store',
        element: (
            <Main>
                <Store />
            </Main>
        ),
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    </React.StrictMode>
);
