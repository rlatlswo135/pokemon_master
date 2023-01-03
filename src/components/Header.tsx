import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { money } from '../atoms/money';

export const Header = () => {
    const [coins, setCoins] = useRecoilState(money);

    return (
        <header className="flex w-">
            <Link to="/myPage">home</Link>
            <Link to="/pokepedia">pokePedia</Link>
            <Link to="/getCoins">getCoins</Link>
            <Link to="/myBags">myBag</Link>
        </header>
    );
};
