import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userState } from '@atoms';

type PrivateRouterProps = {
    children: ReactNode;
};
export const PrivateRouter = ({ children }: PrivateRouterProps) => {
    const router = useRouter();
    const { uid } = useRecoilValue(userState);

    useEffect(() => {
        console.log('````````````uid````````````', uid);
        if (!uid) {
            router.push('/');
        }
    }, [uid, router]);

    return <>{children}</>;
};
