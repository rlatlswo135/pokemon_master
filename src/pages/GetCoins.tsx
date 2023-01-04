import React, { useCallback } from 'react';
import { Button } from 'components/common/Button';
import { useRecoilState } from 'recoil';
import { money } from 'atoms/money';

export const GetCoins = () => {
    const [coins, setCoins] = useRecoilState(money);

    const clickHandler = useCallback(() => {
        setCoins((prev) => {
            if (Math.random() < 0.05) {
                console.log('````````````대박!````````````');
                return prev + 1000;
            }
            return prev + 100;
        });
    }, []);

    return (
        <div
            id="getCoins"
            className="container w-screen h-screen min-h-full min-w-full"
        >
            <Button
                className="w-40 absolute z-50 inset-2/4 border-4 border-yellow-500 bg-yellow-300 rounded-2xl"
                btnClassName="p-5 hover:underline"
                onClick={clickHandler}
            >
                Get Gold
            </Button>
        </div>
    );
};
