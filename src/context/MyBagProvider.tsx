/* eslint-disable no-restricted-globals */
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
    useState,
} from 'react';
import { useMakeContext } from 'hooks/useMakeContext';
import { BREADS } from 'constants/bread';
import { IContextProvider } from './type';

type MyBagType = Record<typeof BREADS[number], number>;

export type MyBagContext = {
    isBagOpen: boolean;
    toggleBagOpen: Dispatch<SetStateAction<boolean>>;
    myBag: MyBagType;
};

const myBagContext = createContext<MyBagContext | undefined>(undefined);

const MyBagProvider = ({ children }: IContextProvider) => {
    const [isBagOpen, setIsBagOpen] = useState<boolean>(false);

    const initialBag = useMemo(
        () => BREADS.reduce((start, item) => ({ ...start, [item]: 0 }), {}),
        []
    ) as MyBagType;

    const [myBag, setMyBag] = useState<MyBagType>(initialBag);

    const toggleBagOpen = useCallback(() => setIsBagOpen((prev) => !prev), []);

    const value = useMemo(
        () => ({ isBagOpen, toggleBagOpen, myBag }),
        [isBagOpen, myBag]
    );

    return (
        <myBagContext.Provider value={value}>{children}</myBagContext.Provider>
    );
};

const useMyBagContext = () => useMakeContext(myBagContext);

export { MyBagProvider, useMyBagContext };
