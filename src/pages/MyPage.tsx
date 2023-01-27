/* eslint-disable global-require */
import React from 'react';
import tw from 'tailwind-styled-components';
import { Container, Img } from '@/components/common';

export const MyPage = () => {
    return (
        <Container
            addstyle="px-5 flex justify-center"
            // color="bg-stone-500/90"
            image="bg-defaultImage"
            id="myPage"
        >
            <SubContainer>
                <div className="w-1/2 h-1/2">
                    <Img src={require('../assets/profile.png')} />
                </div>
                <div>모은개수 몇개</div>
            </SubContainer>
        </Container>
    );
};

const SubContainer = tw.div`
container flex flex-col relative w-full h-full bg-subContainer items-center py-24
`;
