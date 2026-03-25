import React, { useMemo, useCallback, useRef } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue, useRecoilState } from 'recoil';
import { coinState, bagState, userState } from '@atoms';
import { LUCKY, SUPER_LUCKY } from '@constants';

export const Header = () => {
    const { pathname: pathName } = useRouter();

    const currentUser = useRecoilValue(userState);
    const [coin, setCoin] = useRecoilState(coinState);
    const [bag, setBag] = useRecoilState(bagState);

    const routeItems = useMemo(() => ['mypage', 'pokepedia', 'store'], []);

    const gatCha = useRef<null | 'LUCKY' | 'SUPER_LUCKY'>(null);
    const gatChatText = useCallback(
        (gatCha: null | 'LUCKY' | 'SUPER_LUCKY') => {
            switch (gatCha) {
                case 'LUCKY':
                    return 'LUCKY!';
                case 'SUPER_LUCKY':
                    return 'GATCHA!';
                default:
                    return '';
            }
        },
        []
    );

    const toggleBagOpen = useCallback(() => {
        setBag((prev) => ({ ...prev, isOpen: !prev.isOpen }));
    }, [setBag]);

    const getCoins = useCallback(() => {
        gatCha.current = null;
        setCoin((prev) => {
            const per: number = Math.random();
            if (per < SUPER_LUCKY) {
                gatCha.current = 'SUPER_LUCKY';
                return prev + 10000;
            }
            if (per < LUCKY) {
                gatCha.current = 'LUCKY';
                return prev + 1000;
            }
            return prev + 100;
        });
    }, [setCoin]);

    if (pathName === '/') return <header />;

    return (
        <Container>
            <Coin onClick={getCoins}>
                {`${coin}₩`}
                {gatCha.current && (
                    <span className="text-sm text-red-600">
                        {gatChatText(gatCha.current)}
                    </span>
                )}
            </Coin>
            <MyBagBtn onClick={toggleBagOpen}>MyBag</MyBagBtn>
            {routeItems.map((url) => (
                <Link
                    key={`header-url-${url}`}
                    href={`/${url}`}
                    className={`${
                        pathName === `/${url}` ? 'text-red-600' : ''
                    } hover:text-red-600 `}
                >
                    {url}
                </Link>
            ))}
        </Container>
    );
};

const Container = tw.header`
flex w-full justify-evenly absolute p-5 text-xl z-50 items-center bg-gray-500/40
`;
const Coin = tw.button`
border-2 p-2 border-goldLine bg-gold rounded-2xl flex-[0.5] hover:text-red-600
`;
const MyBagBtn = tw.button`
border-2 border-red-300 p-2 bg-red-200 rounded-2xl hover:text-red-600
`;
