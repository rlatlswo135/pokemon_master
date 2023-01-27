import React, { useMemo, useCallback } from 'react';
import tw from 'tailwind-styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { coinState } from '@/atoms/coin';
import { bagState } from '@/atoms/bag';
import { LUCKY, SUPER_LUCKY } from '@/constants/money';

export const Header = () => {
    const [coins, setCoins] = useRecoilState(coinState);
    const [bag, setBag] = useRecoilState(bagState);

    const { pathname: pathName } = useLocation();

    const routeItems = useMemo(() => ['myPage', 'pokepedia', 'store'], []);

    const toggleBagOpen = useCallback(() => {
        setBag((prev) => ({ ...prev, isOpen: !prev.isOpen }));
    }, []);

    const getCoins = useCallback(
        () =>
            setCoins((prev) => {
                const per: number = Math.random();
                if (per < SUPER_LUCKY) return prev + 10000;
                if (per < LUCKY) return prev + 1000;
                return prev + 100;
            }),
        []
    );

    if (pathName === '/') return <header />;

    return (
        <Container>
            <Coin onClick={getCoins}>{coins}</Coin>
            <MyBag onClick={toggleBagOpen}>MyBag</MyBag>
            {routeItems.map((url) => (
                <Link
                    key={`header-url-${url}`}
                    className={`${
                        pathName === `/${url}` ? 'text-red-600' : ''
                    } hover:text-red-600`}
                    to={`/${url}`}
                >
                    {url}
                </Link>
            ))}
        </Container>
    );
};

const Container = tw.header`
flex w-full justify-evenly absolute p-5 text-xl z-50 items-center 
`;
const Coin = tw.button`
border-4 p-2 border-goldLine bg-gold rounded-2xl flex-[0.5]
`;
const MyBag = tw.button`
border-4 border-red-300 p-2 bg-red-200 rounded-2xl
`;
