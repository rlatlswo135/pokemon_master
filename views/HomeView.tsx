import React from 'react';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { Modal } from '../src/components/common/Modal';

export const HomeView = ({
    clickGuestHandler,
    loginGoogle,
    closeModal,
    loginGuest,
    isOpen,
}) => {
    return (
        <>
            <HomeDiv id="home">
                <ButtonsDiv>
                    <MenuBtn onClick={clickGuestHandler}>Start</MenuBtn>
                    <MenuBtn>
                        <Link
                            className="flex w-full h-full absolute inset-0 justify-center items-center"
                            href="/how"
                        />
                        How To Play
                    </MenuBtn>
                    <LoginGoogle onClick={loginGoogle}>
                        <Image src="/signGoogle.png" fill alt="error" />
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
                            <ModalBtn onClick={loginGuest}>
                                <Link
                                    href="store"
                                    className="flex w-full h-full absolute inset-0 justify-center items-center"
                                >
                                    GO!
                                </Link>
                            </ModalBtn>
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
relative w-full h-16 bg-gold hover:bg-orange-300 rounded-2xl mt-4
`;
const LoginGoogle = tw.button`
relative w-full h-16 hover:bg-orange-300 rounded-2xl mt-4
`;
const ModalTextWrap = tw.div`
flex flex-col items-center
`;
const ModalBtnWrap = tw.div`
flex mt-24 justify-between w-full
`;
const ModalBtn = tw.button`
relative p-4 bg-gold rounded-xl w-[40%] border-goldLine border-4 hover:bg-neutral-600
`;
