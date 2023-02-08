import React, { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { checkExistUser, googleLogin } from '../src/firebase/auth';
import { getDocument, setDocument } from '../src/firebase/store';
import { DEFAULT_DATA } from '../src/constants';
import { DefaultData } from '../src/types';
import { bagState, myPokeListState, coinState, userState } from '../src/atoms';
import { HomeView } from '../views';

/*
비지니스로직 - view 컨테이너 구분
navigate는 Link컴포넌트로 -> 기능적인거 아니면
...nextjs 리팩토링중
*/
const Home = () => {
    const bagSetter = useSetRecoilState(bagState);
    const pokeSetter = useSetRecoilState(myPokeListState);
    const coinSetter = useSetRecoilState(coinState);
    const userSetter = useSetRecoilState(userState);

    const [isOpen, setIsOpen] = useState<boolean>(false);

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
        const { uid, displayName, photoURL } = login.user;
        userSetter({
            uid,
            displayName: displayName || '',
            photoURL: photoURL || '',
        });
        const isExist = await checkExistUser(uid);

        if (!isExist) {
            const setResult = await setDocument('data', uid, DEFAULT_DATA);
        }
        const result = await setStoreData(uid);
        // navigate('/store');
    };

    const clickGuestHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => setIsOpen(false), []);

    const loginGuest = useCallback(() => {
        userSetter((prev) => ({ ...prev, uid: 'GUEST' }));
    }, []);
    return (
        <HomeView
            clickGuestHandler={clickGuestHandler}
            loginGoogle={loginGoogle}
            closeModal={closeModal}
            loginGuest={loginGuest}
            isOpen={isOpen}
        />
    );
};

export default Home;
