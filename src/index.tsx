import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PokePedia } from './pages/PokePedia';
import { Home } from './pages/Home';
import { GetCoins } from './pages/GetCoins';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/pokepedia',
        element: <PokePedia />,
    },
    {
        path: '/getCoins',
        element: <GetCoins />,
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
