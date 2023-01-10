import React, { createContext, useCallback, useMemo, useState } from 'react';
import { LUCKY, SUPER_LUCKY } from 'constants/money';

type ContextProviderType = {
    children: React.ReactNode;
};

export const MoneyContext = createContext({
    money: 0,
    getMoney: () => {},
    spendMoney: () => {},
});

export const MoneyProvider = ({ children }: ContextProviderType) => {
    const [money, setMoney] = useState<number>(0);

    const getMoney = useCallback(
        () =>
            setMoney((prev) => {
                const per: number = Math.random();
                if (per < SUPER_LUCKY) return prev + 10000;
                if (per < LUCKY) return prev + 1000;
                return prev + 100;
            }),
        []
    );

    const spendMoney = useCallback(
        () =>
            setMoney((prev) => {
                if (prev >= 1200) return prev - 1200;
                return prev;
            }),
        []
    );

    const value = useMemo(
        () => ({
            money,
            getMoney,
            spendMoney,
        }),
        [money]
    );

    return (
        <MoneyContext.Provider value={value}>{children}</MoneyContext.Provider>
    );
};
