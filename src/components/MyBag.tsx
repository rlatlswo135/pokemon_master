import React from 'react';
import tw from 'tailwind-styled-components';
import { MyBagContext, useMyBagContext } from 'context/MyBagProvider';

export const MyBag = () => {
    const { isBagOpen, toggleBagOpen } = useMyBagContext() as MyBagContext;

    console.log('````````````isBagOpen````````````', isBagOpen);

    return <Div isopen={isBagOpen.toString()}>MyBag</Div>;
};

type DivProps = {
    isopen: string;
};

const Div = tw.div<DivProps>`
absolute top-5/6 z-40 bg-slate-100/40 w-full h-1/6 transition-all
${({ isopen }) => (isopen === 'true' ? 'top-5/6' : 'top-full')}
`;
