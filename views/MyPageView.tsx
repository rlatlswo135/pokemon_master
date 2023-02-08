import React, { useCallback, useMemo } from 'react';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import { Img, Container } from '../src/components/common';

export const MyPageView = ({ photoURL, pageInfo, signOut, deleteAccount }) => {
    return (
        <Container
        // addstyle="px-5 flex justify-center"
        // image="bg-defaultImage"
        // id="myPage"
        >
            <SubContainer>
                <ImageWrap>
                    <Img src={photoURL || '/profile.png'} />
                </ImageWrap>
                <div>
                    {Object.entries(pageInfo).map((item) => {
                        const [key, value]: any = item;
                        return (
                            <CategoryWrap key={`info-${key}`}>
                                <Category>{`${key} : `}</Category>
                                <span>{value}</span>
                            </CategoryWrap>
                        );
                    })}
                </div>
                <div className="flex w-[50%] justify-evenly">
                    <SignOut onClick={signOut}>SignOut</SignOut>
                    <SignOut onClick={deleteAccount}>Delete Account</SignOut>
                </div>
            </SubContainer>
        </Container>
    );
};

const SubContainer = tw.div`
container flex flex-col relative w-full h-full bg-subContainer items-center justify-center py-24
`;

const ImageWrap = tw.div`
w-[40%] h-[40%] rounded-full bg-slate-400/80 overflow-hidden
`;
const CategoryWrap = tw.div`
mt-12
`;
const Category = tw.span`
text-xl font-bold
`;
const SignOut = tw.button`
mt-20 px-10 py-6 bg-slate-500 rounded-2xl hover:bg-goldLine text-red-200
`;
