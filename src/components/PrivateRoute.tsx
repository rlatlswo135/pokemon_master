import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { MyBag } from '@/components/MyBag';
import { Save } from '@/components/Save';
import { userState } from '@/atoms';

export const PrivateRoute = () => {
    const currentUser = useRecoilValue(userState);
    console.log('private', currentUser);
    return currentUser.uid.length ? (
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
