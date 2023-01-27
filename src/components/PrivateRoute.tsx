import React, { ReactNode } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { getUsers } from '@/firebase/auth';
import { Header } from '@/components/Header';
import { MyBag } from '@/components/MyBag';
import { Save } from '@/components/Save';

type PrivateRouteProps = {
    children: ReactNode;
};

export const PrivateRoute = () => {
    const currentUser = getUsers();
    return currentUser ? (
        <>
            <Header />
            <Outlet />
            <MyBag />
            <Save />
        </>
    ) : (
        <Navigate to="/" />
    );
};
