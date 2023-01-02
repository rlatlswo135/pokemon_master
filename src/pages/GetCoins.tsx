import React from 'react';
import { useRecoilState } from 'recoil';
import { money } from '../atoms/money';

export const GetCoins = () => {
    const [test, setTest] = useRecoilState(money);
    console.log('````````````test````````````', test);
    console.log('````````````setTest````````````', setTest);

    return <div>GetCoins</div>;
};
