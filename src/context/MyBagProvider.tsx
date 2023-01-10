import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useMemo,
    useState,
} from 'react';
import { useMakeContext } from 'hooks/useMakeContext';
import { IContextProvider } from './type';

type MyBagContext = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const myBagContext = createContext<MyBagContext | undefined>(undefined);

const MyBagProvider = ({ children }: IContextProvider) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const value = useMemo(() => ({ isOpen, setIsOpen }), []);

    return (
        <myBagContext.Provider value={value}>{children}</myBagContext.Provider>
    );
};

const useMyBagContext = () => useMakeContext(myBagContext);

export { MyBagProvider, useMyBagContext };
