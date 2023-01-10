import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
    useState,
} from 'react';
import { useMakeContext } from 'hooks/useMakeContext';
import { IContextProvider } from './type';

export type MyBagContext = {
    isBagOpen: boolean;
    toggleBagOpen: Dispatch<SetStateAction<boolean>>;
};

const myBagContext = createContext<MyBagContext | undefined>(undefined);

const MyBagProvider = ({ children }: IContextProvider) => {
    const [isBagOpen, setIsBagOpen] = useState<boolean>(false);

    const toggleBagOpen = useCallback(() => setIsBagOpen((prev) => !prev), []);

    const value = useMemo(() => ({ isBagOpen, toggleBagOpen }), [isBagOpen]);

    return (
        <myBagContext.Provider value={value}>{children}</myBagContext.Provider>
    );
};

const useMyBagContext = () => useMakeContext(myBagContext);

export { MyBagProvider, useMyBagContext };
