import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { MyBag } from '@/components/MyBag';
import { Save } from '@/components/Save';
import { userState } from '@/atoms';

export const PrivateRoute = () => {
    const currentUser = useRecoilValue(userState);
    return currentUser.uid.length ? (
        <>
            <Header />
            {/* 요 Outlet이 element로 받는 놈 */}
            <Outlet />
            <MyBag />
            <Save />
        </>
    ) : (
        <Navigate to="/" />
    );
};
