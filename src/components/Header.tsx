import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { money } from '../atoms/money';

export const Header = () => {
    const [coins, setCoins] = useRecoilState(money);
    const routeItems = useMemo(
        () => ['myPage', 'pokepedia', 'getCoins', 'myBags', 'convenienceStore'],
        []
    );

    useEffect(() => {
        return () => {
            console.log('ummount');
        };
    }, []);

    return (
        <header className="flex w-full justify-evenly absolute p-5 text-xl z-50">
            {routeItems.map((url) => (
                <Link
                    key={`header-url-${url}`}
                    className="hover:text-red-600"
                    to={`/${url}`}
                >
                    {url}
                </Link>
            ))}
        </header>
    );
};
