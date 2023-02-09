import React, { useMemo, useCallback, useState, useRef } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue, useRecoilState } from 'recoil';
import { coinState, bagState, userState, myPokeListState } from '@atoms';
import { LUCKY, SUPER_LUCKY } from '@constants';
import { updateDocument } from '@fb/store';

export const Header = () => {
    const { pathname: pathName } = useRouter();

    const currentUser = useRecoilValue(userState);
    const [coin, setCoin] = useRecoilState(coinState);
    const [bag, setBag] = useRecoilState(bagState);
    const [pokeList, setPokeList] = useRecoilState(myPokeListState);

    const [loading, setLoading] = useState<Boolean>(false);

    const routeItems = useMemo(() => ['myPage', 'pokePedia', 'store'], []);
    const isGuest = useMemo(() => currentUser.uid === 'GUEST', [currentUser]);

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
    }, []);

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
    }, []);

    const saveHandler = async () => {
        if (currentUser && !isGuest) {
            setLoading(true);
            const result = await updateDocument('data', currentUser.uid, {
                coin,
                bag: { ...bag.value },
                pokeList,
            });
            setLoading(false);
        }
    };

    if (pathName === '/') return <header />;

    return (
        <Container>
            {!isGuest &&
                (loading ? (
                    <LoadingPing />
                ) : (
                    <SaveBtn onClick={saveHandler}>save</SaveBtn>
                ))}
            <Coin onClick={getCoins}>
                {`${coin}₩`}
                {gatCha.current && (
                    <span className="text-sm text-red-600">
                        {gatChatText(gatCha.current)}
                    </span>
                )}
            </Coin>
            <MyBag onClick={toggleBagOpen}>MyBag</MyBag>
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
const SaveBtn = tw.button`
border-2 border-red-400 p-2 rounded-2xl bg-red-500 hover:text-red-600
`;
const Coin = tw.button`
border-2 p-2 border-goldLine bg-gold rounded-2xl flex-[0.5] hover:text-red-600
`;
const MyBag = tw.button`
border-2 border-red-300 p-2 bg-red-200 rounded-2xl hover:text-red-600
`;

const LoadingPing = tw.div`
animate-ping p-4 rounded-full border-8
`;
