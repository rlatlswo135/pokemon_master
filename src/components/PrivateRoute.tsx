import React, { ReactNode } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { getUsers } from '@/firebase/auth';

type PrivateRouteProps = {
    children: ReactNode;
};

export const PrivateRoute = () => {
    const currentUser = getUsers();
    console.log('````````````currentUser````````````', currentUser);
    return currentUser ? <Outlet /> : <Navigate to="/" />;
};
