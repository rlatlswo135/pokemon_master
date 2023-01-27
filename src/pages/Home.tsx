import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useSetRecoilState } from 'recoil';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { checkExistUser, getUsers, googleLogin } from '@/firebase/auth';
import { getDocument, getDocuments, setDocument } from '@/firebase/store';
import { DefaultData, DEFAULT_DATA } from '@/constants';
import { bagState, myPokeListState, coinState } from '@/atoms';

export const Home = () => {
    const bagSetter = useSetRecoilState(bagState);
    const pokeSetter = useSetRecoilState(myPokeListState);
    const coinSetter = useSetRecoilState(coinState);

    const navigate = useNavigate();

    const setStoreData = async (uid: string) => {
        const getData = await getDocument<DefaultData>('data', uid);
        if (getData) {
            const { pokeList, coin, bag } = getData;
            bagSetter((prev) => ({ ...prev, value: bag }));
            coinSetter(coin);
            pokeSetter(pokeList);
        }
    };

    const loginGoogle = async () => {
        const login = await googleLogin();
        const { uid } = login.user;
        const isExist = await checkExistUser(uid);

        if (!isExist) {
            const setResult = await setDocument('data', uid, DEFAULT_DATA);
        }
        const result = await setStoreData(uid);
        navigate('/store');
    };

    const test = async () => {
        //
        const result = await getDocuments('data');
    };

    return (
        <HomeDiv id="home">
            <ButtonsDiv>
                <Link to="/store">
                    <Button className="mr-4 hover:text-red-600">Start</Button>
                </Link>
                <Button onClick={test} className="ml-4 hover:text-red-600">
                    How To Play
                </Button>
                <Button
                    onClick={loginGoogle}
                    className="ml-4 hover:text-red-600"
                >
                    google login
                </Button>
            </ButtonsDiv>
        </HomeDiv>
    );
};

const HomeDiv = tw.div`
container w-screen h-screen min-w-full min-h-full text-lg
bg-homeImage bg-no-repeat bg-center
`;

const ButtonsDiv = tw.div`
absolute w-full top-3/4 flex items-center justify-center
`;
