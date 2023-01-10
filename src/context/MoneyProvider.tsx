import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import { useMakeContext } from 'hooks/useMakeContext';
import { LUCKY, SUPER_LUCKY } from 'constants/money';
import { IContextProvider } from './type';

export type MoneyContext = {
    money: number;
    getMoney: Dispatch<SetStateAction<number>>;
    spendMoney: Dispatch<SetStateAction<number>>;
};

const moneyContext = createContext<MoneyContext | undefined>(undefined);

const MoneyProvider = ({ children }: IContextProvider) => {
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
        <moneyContext.Provider value={value}>{children}</moneyContext.Provider>
    );
};

const useMoneyContext = () => useMakeContext(moneyContext);

export { MoneyProvider, useMoneyContext };
