/* eslint-disable global-require */
import React, { useCallback, useMemo } from 'react';
import tw from 'tailwind-styled-components';
import * as _ from 'lodash';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { Container, Img } from '@/components/common';
import { userState, bagState, myPokeListState } from '@/atoms';
import { getPercent, makeRandom } from '@/util';
import profile from '@/assets/profile.png';
import { POKE_NAME } from '@/constants/pokePedia';
import { deleteDocument } from '@/firebase/store';
import { deleteAuth, signOutAuth } from '@/firebase/auth';

export const MyPage = () => {
    const { value: bag } = useRecoilValue(bagState);
    const myPoke = useRecoilValue(myPokeListState);
    const [{ displayName, photoURL, uid }, setUser] = useRecoilState(userState);
    const resetUser = useResetRecoilState(userState);

    const percent = getPercent(
        Object.values(myPoke).filter((a) => a > 0).length,
        _.size(POKE_NAME)
    );

    const pageInfo = useMemo(
        () => ({
            USER: displayName || 'Guest #',
            BREAD: Object.values(bag).reduce((init, num) => init + num, 0),
            POKEMON: `${percent}%`,
        }),
        [displayName, bag, percent]
    );

    const signOut = useCallback(async () => {
        const result = await signOutAuth();
        resetUser();
    }, []);

    const deleteAccount = useCallback(async () => {
        if (uid && uid !== 'GUEST') {
            // db에 데이터 제거
            const delDoc = await deleteDocument('data', uid);
            const delAuth = await deleteAuth();
        }
        resetUser();
    }, [uid]);

    return (
        <Container
            addstyle="px-5 flex justify-center"
            image="bg-defaultImage"
            id="myPage"
        >
            <SubContainer>
                <ImageWrap>
                    <Img src={photoURL || profile} />
                </ImageWrap>
                <div>
                    {Object.entries(pageInfo).map((item) => {
                        const [key, value] = item;
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
