import React, { createContext, useCallback, useMemo, useState } from 'react';

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
                console.log('````````````prev````````````', prev);
                if (Math.random() < 0.05) {
                    console.log('````````````대박!````````````');
                    return prev + 1000;
                }
                return prev + 100;
            }),
        []
    );

    const spendMoney = useCallback(
        () =>
            setMoney((prev) => {
                console.log('spend', prev);
                if (prev >= 1200) return prev - 1200;
                console.log('````````````this````````````');
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
