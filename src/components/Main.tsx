import React from 'react';
import { Header } from './Header';

type MainType = {
    children: React.ReactNode;
};
export const Main = ({ children }: MainType) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
