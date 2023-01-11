/* eslint-disable global-require */
import React, { useMemo } from 'react';
import tw from 'tailwind-styled-components';
import { MyBagContext, useMyBagContext } from 'context/MyBagProvider';
import { BREADS } from 'constants/bread';
import { Breads } from './Breads';
import Button, { ButtonProps } from './common/Button';

export const MyBag = () => {
    const { isBagOpen, myBag } = useMyBagContext() as MyBagContext;

    console.log('````````````myBag````````````', myBag);
    return (
        <Div $isOpen={isBagOpen}>
            {/* <Breads button={breadBtnProps} grayscale /> */}
            {BREADS.map((bread) => (
                <div className="relative w-40 h-40" key={`bread-${bread}`}>
                    <Bread
                        src={require(`../assets/bread/${bread}.png`)}
                        alt="사진을 불러올수 없습니다"
                        $grayscale={myBag[bread] < 1}
                    />
                    <Button
                        className="text-center p-2"
                        btnClassName="bg-stone-200 p-2 rounded-2xl"
                        onClick={() => console.log('click')}
                    >
                        Open!
                    </Button>
                    <span>{myBag[bread]}EA</span>
                </div>
            ))}
        </Div>
    );
};

type DivProps = {
    $isOpen: boolean;
};

type BreadType = {
    $grayscale: boolean;
};

const Div = tw.div<DivProps>`
flex justify-evenly absolute z-40 bg-yellow-600/90 w-full h-1/5 transition-all
${(props) => (props.$isOpen ? 'top-4/5' : 'top-full')}
`;

const Bread = tw.img<BreadType>`
w-full h-full z-50 ${(props) => (props.$grayscale ? 'grayscale' : '')}
`;
