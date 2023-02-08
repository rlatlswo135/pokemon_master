import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { bagState, coinState } from '../src/atoms';
import { BREADS } from '../src/constants/bread';
import { StoreView } from '../views';

const Store = React.memo(() => {
    const [coin, setCoin] = useRecoilState(coinState);
    const [bag, setBag] = useRecoilState(bagState);
    // 1개 1200 10개 10000원
    const [breadIdx, setBreadIdx] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<string[]>([]);

    const buyBreadInfo = useMemo(
        () => [
            { quan: 1, price: 1200 },
            { quan: 10, price: 10000 },
        ],
        []
    );

    const spendCoin = useCallback((price: number) => {
        setCoin((prev) => {
            if (prev < price) return prev;
            return prev - price;
        });
    }, []);

    const getBread = useCallback(
        (quan: number, price: number) => {
            if (coin < price) return;
            setLoading(true);
            setResult([]);
            const gatcha: string[] = [];
            for (let i = 0; i < quan; i += 1) {
                const bread = BREADS[Math.floor(Math.random() * BREADS.length)];
                gatcha.push(bread);
                setBag((prev) => {
                    const copy = { ...prev.value };
                    copy[bread] += 1;
                    return { ...prev, value: copy };
                });
            }
            spendCoin(price);
            setTimeout(() => {
                setLoading(false);
                setResult(gatcha);
            }, 1000);
        },
        [coin]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setBreadIdx((prev) => {
                if (prev === BREADS.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 100);
        return () => {
            console.log('clear');
            clearInterval(interval);
        };
    }, []);
    return (
        <StoreView
            loading={loading}
            breadIdx={breadIdx}
            result={result}
            getBread={getBread}
            setResult={setResult}
            coin={coin}
            buyBreadInfo={buyBreadInfo}
        />
    );
});

export default Store;
