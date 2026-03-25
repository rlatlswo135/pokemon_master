import React, { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { bagState, myPokeListState, coinState, userState } from '@atoms';
import { HomeView } from '@views';

const Home = () => {
    const router = useRouter();
    const userSetter = useSetRecoilState(userState);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clickGuestHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => setIsOpen(false), []);

    const loginGuest = useCallback(() => {
        userSetter((prev) => ({ ...prev, uid: 'GUEST' }));
    }, [userSetter]);

    return (
        <HomeView
            clickGuestHandler={clickGuestHandler}
            closeModal={closeModal}
            loginGuest={loginGuest}
            isOpen={isOpen}
        />
    );
};

export default Home;
