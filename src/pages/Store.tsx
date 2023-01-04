/* eslint-disable global-require */
import React, { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { Button } from 'components/common/Button';
import { money } from 'atoms/money';

export const Store = () => {
    const [coins, setCoins] = useRecoilState<number>(money);

    const breads = useMemo(
        () => ['digda', 'fire', 'ghost', 'pika', 'purin', 'rocket', 'tutle'],
        []
    );

    const buyHandler = useCallback(() => {
        console.log('buy');
        if (coins < 1200) {
            console.log('구매불가');
            return;
        }

        setCoins((prev) => prev - 1200);
    }, []);

    return (
        <div
            id="store"
            className="container w-screen h-screen min-h-full min-w-full flex justify-center p-24 bg-opacity-30"
        >
            <div className="container relative flex justify-evenly w-full h-full p-5 bg-slate-100/20">
                {breads &&
                    breads.map((bread) => (
                        <div
                            className="relative w-40 h-40"
                            key={`bread-${bread}`}
                        >
                            <img
                                className="w-full h-full z-50"
                                src={require(`../assets/bread/${bread}.png`)}
                                alt="사진을 불러올수 없습니다"
                            />
                            <Button
                                className="text-center p-2"
                                btnClassName={`p-2 rounded-2xl ${
                                    coins < 1200
                                        ? 'bg-red-500/70'
                                        : 'bg-stone-500/70'
                                }`}
                                onClick={buyHandler}
                            >
                                {coins < 1200 ? '구매불가' : '1,200'}
                            </Button>
                        </div>
                    ))}
            </div>
        </div>
    );
};
