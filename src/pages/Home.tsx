import React, { useCallback, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { checkExistUser, googleLogin } from '@/firebase/auth';
import { getDocument, setDocument } from '@/firebase/store';
import { DEFAULT_DATA } from '@/constants';
import { DefaultData } from '@/types';
import { bagState, myPokeListState, coinState, userState } from '@/atoms';
import { Img, Modal } from '@/components/common';
import signGoogle from '@/assets/signGoogle.png';

export const Home = () => {
    const bagSetter = useSetRecoilState(bagState);
    const pokeSetter = useSetRecoilState(myPokeListState);
    const coinSetter = useSetRecoilState(coinState);
    const userSetter = useSetRecoilState(userState);

    const [open, setOpen] = useState<boolean>(false);

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
        navigate('/store');
    };

    const openHowToPlay = () => {};

    const clickGuestHandler = () => {
        setOpen(true);
    };
    const closeModal = useCallback(() => setOpen(false), []);

    const loginGuest = () => {
        userSetter((prev) => ({ ...prev, uid: 'GUEST' }));
        navigate('/store');
    };

    return (
        <>
            <HomeDiv id="home">
                <ButtonsDiv>
                    <MenuBtn onClick={clickGuestHandler}>Start</MenuBtn>
                    <MenuBtn onClick={openHowToPlay}>How To Play</MenuBtn>
                    <LoginGoogle onClick={loginGoogle}>
                        <Img src={signGoogle} />
                    </LoginGoogle>
                </ButtonsDiv>
            </HomeDiv>
            {open && (
                <Modal closeHandler={closeModal}>
                    <div className="flex flex-col items-center">
                        <p className="text-4xl font-bold">
                            게스트로 로그인시 진행상황은 저장되지 않습니다
                        </p>
                        <p className="text-4xl font-bold mt-10">
                            계속 진행하시려면 Go! 버튼을 눌러주세요.
                        </p>
                        <div className="flex mt-24 justify-between w-full">
                            <button
                                type="button"
                                onClick={loginGuest}
                                className="p-4 bg-gold rounded-xl w-[40%] border-goldLine border-4 hover:bg-neutral-600"
                            >
                                GO!
                            </button>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="p-4 bg-gold rounded-xl w-[40%] border-goldLine border-4 hover:bg-neutral-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

const HomeDiv = tw.div`
container w-screen h-screen min-w-full min-h-full text-lg
bg-homeImage bg-no-repeat bg-center
`;

const ButtonsDiv = tw.div`
absolute w-[30%] top-3/4 left-1/2 translate-x-[-50%] flex flex-col items-center justify-center
`;

const MenuBtn = tw.button`
w-full h-16 bg-gold hover:bg-orange-300 rounded-2xl mt-4
`;
const LoginGoogle = tw.div`
w-full h-16 hover:cursor-pointer hover:bg-orange-300 mt-4
`;
