/* eslint-disable global-require */
import React, { useMemo } from 'react';
import tw from 'tailwind-styled-components';
import { useRecoilState } from 'recoil';
import { BREADS } from '@/constants/bread';
import { bagState } from '@/atoms/bag';

export const MyBag = () => {
    const [bag, setBag] = useRecoilState(bagState);
    const { isOpen, value } = bag;

    return (
        <Div $isOpen={isOpen}>
            {/* <Breads button={breadBtnProps} grayscale /> */}
            {BREADS.map((bread) => {
                const quan = value[bread];
                return (
                    <BreadWrap key={`bread-${bread}`}>
                        <Bread
                            src={require(`../assets/bread/${bread}.png`)}
                            alt="사진을 불러올수 없습니다"
                            $grayscale={quan < 1}
                        />
                        <Button
                            type="button"
                            quan={quan}
                            onClick={() => console.log('click')}
                        >
                            open!
                        </Button>
                        <Quan>x{quan}</Quan>
                    </BreadWrap>
                );
            })}
        </Div>
    );
};

const Div = tw.div<{ $isOpen: boolean }>`
flex items-center justify-evenly absolute z-40 bg-yellow-600/90 w-full h-1/5 transition-all
${(props) => (props.$isOpen ? 'top-4/5' : 'top-full')}
`;

const BreadWrap = tw.div`
relative flex flex-col items-center w-40
`;

const Button = tw.button<{ quan: number }>`
${({ quan }) => (!quan ? 'bg-slate-400/80' : 'bg-gold')}
mt-2 p-2 border-1 rounded-2xl
`;

const Bread = tw.img<{ $grayscale: boolean }>`
w-full h-full z-50 ${(props) => (props.$grayscale ? 'grayscale' : '')}
`;

const Quan = tw.span`
absolute top-0 right-0 z-50
`;
