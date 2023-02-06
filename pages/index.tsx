import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { checkExistUser, googleLogin } from '../src/firebase/auth';
import { getDocument, setDocument } from '../src/firebase/store';
import { Modal } from '../src/components/common/Modal';
import { DEFAULT_DATA } from '../src/constants';
import { DefaultData } from '../src/types';
import { bagState, myPokeListState, coinState, userState } from '../src/atoms';

/*
비지니스로직 - view 컨테이너 구분
navigate는 Link컴포넌트로 -> 기능적인거 아니면
...nextjs 리팩토링중
*/
export default function main() {
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
        // navigate('/store');
    }, []);
    return (
        <MainView
            clickGuestHandler={clickGuestHandler}
            loginGoogle={loginGoogle}
            closeModal={closeModal}
            loginGuest={loginGuest}
            isOpen={isOpen}
        />
    );
}

const MainView = ({
    clickGuestHandler,
    loginGoogle,
    closeModal,
    loginGuest,
    isOpen,
}) => {
    console.log('````````````isOpen````````````', isOpen);
    return (
        <>
            <HomeDiv id="home">
                <ButtonsDiv>
                    <MenuBtn onClick={clickGuestHandler}>Start</MenuBtn>
                    <Link href="/how">
                        <MenuBtn>How To Play</MenuBtn>
                    </Link>
                    <LoginGoogle onClick={loginGoogle}>
                        <Image
                            src="/signGoogle.png"
                            alt="error"
                            width={'100'}
                            height={'50'}
                        />
                    </LoginGoogle>
                </ButtonsDiv>
            </HomeDiv>
            {isOpen && (
                <Modal closeHandler={closeModal}>
                    <ModalTextWrap>
                        <p className="text-4xl font-bold text-red-300">
                            게스트로 로그인시 저장버튼은 활성화 되지 않습니다
                        </p>
                        <p className="text-4xl font-bold mt-10">
                            계속 진행하시려면 Go! 버튼을 눌러주세요.
                        </p>
                        <ModalBtnWrap>
                            <ModalBtn onClick={loginGuest}>GO!</ModalBtn>
                            <ModalBtn onClick={closeModal}>Cancel</ModalBtn>
                        </ModalBtnWrap>
                    </ModalTextWrap>
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
absolute w-[30%] top-[65%] left-1/2 translate-x-[-50%] flex flex-col items-center justify-center
`;
const MenuBtn = tw.button`
w-full h-16 bg-gold hover:bg-orange-300 rounded-2xl mt-4
`;
const LoginGoogle = tw.div`
w-full h-16 hover:cursor-pointer hover:bg-orange-300 mt-4
`;
const ModalTextWrap = tw.div`
flex flex-col items-center
`;
const ModalBtnWrap = tw.div`
flex mt-24 justify-between w-full
`;
const ModalBtn = tw.button`
p-4 bg-gold rounded-xl w-[40%] border-goldLine border-4 hover:bg-neutral-600
`;
