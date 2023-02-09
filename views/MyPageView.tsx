import React from 'react';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import { PageInfo } from '@types';

type MyPageViewProps = {
    photoURL: string;
    pageInfo: PageInfo;
    signOut: () => Promise<void>;
    deleteAccount: () => Promise<void>;
};
export const MyPageView = ({
    photoURL,
    pageInfo,
    signOut,
    deleteAccount,
}: MyPageViewProps) => {
    return (
        <SubContainer>
            <ImageWrap>
                <Image
                    priority
                    alt="error"
                    sizes="(max-width: 768px) 20vw,
                    (max-width: 1200px) 15vw,
                    10vw"
                    fill
                    src={photoURL || '/profile.png'}
                />
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
    );
};

const SubContainer = tw.div`
flex flex-col relative w-full h-full
bg-subContainer items-center justify-center
laptop:py-8
`;

const ImageWrap = tw.div`
relative rounded-full bg-slate-400/80 overflow-hidden
tablet:w-44 tablet:h-44
laptop:w-80 laptop:h-80
`;
const CategoryWrap = tw.div`
mt-12
`;
const Category = tw.span`
text-xl font-bold
`;
const SignOut = tw.button`
relative mt-20 px-10 py-6 bg-slate-500 rounded-2xl text-red-200
hover:bg-goldLine
laptop:px-10 laptop:py-5
tablet:px-6 tablet:py-3
`;
